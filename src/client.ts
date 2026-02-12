import { fetch, FormData, File } from 'node-fetch-native-with-agent';
import { createAgent } from 'node-fetch-native-with-agent/agent';
import { Models } from './models';
import JSONbigModule from 'json-bigint';
import BigNumber from 'bignumber.js';
const JSONbigParser = JSONbigModule({ storeAsString: false });
const JSONbigSerializer = JSONbigModule({ useNativeBigInt: true });

const MAX_SAFE = BigInt(Number.MAX_SAFE_INTEGER);
const MIN_SAFE = BigInt(Number.MIN_SAFE_INTEGER);

function reviver(_key: string, value: any): any {
    if (BigNumber.isBigNumber(value)) {
        if (value.isInteger()) {
            const str = value.toFixed();
            const bi = BigInt(str);
            if (bi >= MIN_SAFE && bi <= MAX_SAFE) {
                return Number(str);
            }
            return bi;
        }
        return value.toNumber();
    }
    return value;
}

const JSONbig = {
    parse: (text: string) => JSONbigParser.parse(text, reviver),
    stringify: JSONbigSerializer.stringify
};

type Payload = {
    [key: string]: any;
}

type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

type Headers = {
    [key: string]: string;
}

class AppwriteException extends Error {
    code: number;
    response: string;
    type: string;
    constructor(message: string, code: number = 0, type: string = '', response: string = '') {
        super(message);
        this.name = 'AppwriteException';
        this.message = message;
        this.code = code;
        this.type = type;
        this.response = response;
    }
}

function getUserAgent() {
    let ua = 'AppwriteNodeJSSDK/22.1.0';

    // `process` is a global in Node.js, but not fully available in all runtimes.
    const platform: string[] = [];
    if (typeof process !== 'undefined') {
        if (typeof process.platform === 'string') platform.push(process.platform);
        if (typeof process.arch === 'string') platform.push(process.arch);
    } 
    if (platform.length > 0) {
        ua += ` (${platform.join('; ')})`;
    }

    // `navigator.userAgent` is available in Node.js 21 and later.
    // It's also part of the WinterCG spec, so many edge runtimes provide it.
    // https://common-min-api.proposal.wintercg.org/#requirements-for-navigatoruseragent
    // @ts-ignore
    if (typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string') {
        // @ts-ignore
        ua += ` ${navigator.userAgent}`;

    // @ts-ignore
    } else if (typeof globalThis.EdgeRuntime === 'string') {
        ua += ` EdgeRuntime`;

    // Older Node.js versions don't have `navigator.userAgent`, so we have to use `process.version`.
    } else if (typeof process !== 'undefined' && typeof process.version === 'string') {
        ua += ` Node.js/${process.version}`;
    }

    return ua;
}

class Client {
    static CHUNK_SIZE = 1024 * 1024 * 5;

    config = {
        endpoint: 'https://cloud.appwrite.io/v1',
        selfSigned: false,
        project: '',
        key: '',
        jwt: '',
        locale: '',
        session: '',
        forwardeduseragent: '',
    };
    headers: Headers = {
        'x-sdk-name': 'Node.js',
        'x-sdk-platform': 'server',
        'x-sdk-language': 'nodejs',
        'x-sdk-version': '22.1.0',
        'user-agent' : getUserAgent(),
        'X-Appwrite-Response-Format': '1.8.0',
    };

    /**
     * Set Endpoint
     *
     * Your project endpoint
     *
     * @param {string} endpoint
     *
     * @returns {this}
     */
    setEndpoint(endpoint: string): this {
        if (!endpoint || typeof endpoint !== 'string') {
            throw new AppwriteException('Endpoint must be a valid string');
        }

        if (!endpoint.startsWith('http://') && !endpoint.startsWith('https://')) {
            throw new AppwriteException('Invalid endpoint URL: ' + endpoint);
        }

        this.config.endpoint = endpoint;
        return this;
    }

    /**
     * Set self-signed
     *
     * @param {boolean} selfSigned
     *
     * @returns {this}
     */
    setSelfSigned(selfSigned: boolean): this {
        // @ts-ignore
        if (typeof globalThis.EdgeRuntime !== 'undefined') {
            console.warn('setSelfSigned is not supported in edge runtimes.');
        }

        this.config.selfSigned = selfSigned;

        return this;
    }

    /**
     * Add header
     *
     * @param {string} header
     * @param {string} value
     *
     * @returns {this}
     */
    addHeader(header: string, value: string): this {
        this.headers[header.toLowerCase()] = value;

        return this;
    }

    /**
     * Set Project
     *
     * Your project ID
     *
     * @param value string
     *
     * @return {this}
     */
    setProject(value: string): this {
        this.headers['X-Appwrite-Project'] = value;
        this.config.project = value;
        return this;
    }
    /**
     * Set Key
     *
     * Your secret API key
     *
     * @param value string
     *
     * @return {this}
     */
    setKey(value: string): this {
        this.headers['X-Appwrite-Key'] = value;
        this.config.key = value;
        return this;
    }
    /**
     * Set JWT
     *
     * Your secret JSON Web Token
     *
     * @param value string
     *
     * @return {this}
     */
    setJWT(value: string): this {
        this.headers['X-Appwrite-JWT'] = value;
        this.config.jwt = value;
        return this;
    }
    /**
     * Set Locale
     *
     * @param value string
     *
     * @return {this}
     */
    setLocale(value: string): this {
        this.headers['X-Appwrite-Locale'] = value;
        this.config.locale = value;
        return this;
    }
    /**
     * Set Session
     *
     * The user session to authenticate with
     *
     * @param value string
     *
     * @return {this}
     */
    setSession(value: string): this {
        this.headers['X-Appwrite-Session'] = value;
        this.config.session = value;
        return this;
    }
    /**
     * Set ForwardedUserAgent
     *
     * The user agent string of the client that made the request
     *
     * @param value string
     *
     * @return {this}
     */
    setForwardedUserAgent(value: string): this {
        this.headers['X-Forwarded-User-Agent'] = value;
        this.config.forwardeduseragent = value;
        return this;
    }

    prepareRequest(method: string, url: URL, headers: Headers = {}, params: Payload = {}): { uri: string, options: RequestInit } {
        method = method.toUpperCase();

        headers = Object.assign({}, this.headers, headers);

        let options: RequestInit = {
            method,
            headers,
            ...createAgent(this.config.endpoint, { rejectUnauthorized: !this.config.selfSigned }),
        };

        if (method === 'GET') {
            for (const [key, value] of Object.entries(Client.flatten(params))) {
                url.searchParams.append(key, value);
            }
        } else {
            switch (headers['content-type']) {
                case 'application/json':
                    options.body = JSONbig.stringify(params);
                    break;

                case 'multipart/form-data':
                    const formData = new FormData();

                    for (const [key, value] of Object.entries(params)) {
                        if (value instanceof File) {
                            formData.append(key, value, value.name);
                        } else if (Array.isArray(value)) {
                            for (const nestedValue of value) {
                                formData.append(`${key}[]`, nestedValue);
                            }
                        } else {
                            formData.append(key, value);
                        }
                    }

                    options.body = formData;
                    delete headers['content-type'];
                    break;
            }
        }

        return { uri: url.toString(), options };
    }

    async chunkedUpload(method: string, url: URL, headers: Headers = {}, originalPayload: Payload = {}, onProgress: (progress: UploadProgress) => void) {
        const [fileParam, file] = Object.entries(originalPayload).find(([_, value]) => value instanceof File) ?? [];

        if (!file || !fileParam) {
            throw new Error('File not found in payload');
        }

        if (file.size <= Client.CHUNK_SIZE) {
            return await this.call(method, url, headers, originalPayload);
        }

        let start = 0;
        let response = null;

        while (start < file.size) {
            let end = start + Client.CHUNK_SIZE; // Prepare end for the next chunk
            if (end >= file.size) {
                end = file.size; // Adjust for the last chunk to include the last byte
            }

            headers['content-range'] = `bytes ${start}-${end-1}/${file.size}`;
            const chunk = file.slice(start, end);

            let payload = { ...originalPayload };
            payload[fileParam] = new File([chunk], file.name);

            response = await this.call(method, url, headers, payload);

            if (onProgress && typeof onProgress === 'function') {
                onProgress({
                    $id: response.$id,
                    progress: Math.round((end / file.size) * 100),
                    sizeUploaded: end,
                    chunksTotal: Math.ceil(file.size / Client.CHUNK_SIZE),
                    chunksUploaded: Math.ceil(end / Client.CHUNK_SIZE)
                });
            }

            if (response && response.$id) {
                headers['x-appwrite-id'] = response.$id;
            }

            start = end;
        }

        return response;
    }

    async ping(): Promise<string> {
        return this.call('GET', new URL(this.config.endpoint + '/ping'));
    }

    async redirect(method: string, url: URL, headers: Headers = {}, params: Payload = {}): Promise<string> {
        const { uri, options } = this.prepareRequest(method, url, headers, params);
        
        const response = await fetch(uri, {
            ...options,
            redirect: 'manual'
        });

        if (response.status !== 301 && response.status !== 302) {
            throw new AppwriteException('Invalid redirect', response.status);
        }

        return response.headers.get('location') || '';
    }

    async call(method: string, url: URL, headers: Headers = {}, params: Payload = {}, responseType = 'json'): Promise<any> {
        const { uri, options } = this.prepareRequest(method, url, headers, params);

        let data: any = null;

        const response = await fetch(uri, options);

        const warnings = response.headers.get('x-appwrite-warning');
        if (warnings) {
            warnings.split(';').forEach((warning: string) => console.warn('Warning: ' + warning));
        }

        if (response.headers.get('content-type')?.includes('application/json')) {
            data = JSONbig.parse(await response.text());
        } else if (responseType === 'arrayBuffer') {
            data = await response.arrayBuffer();
        } else {
            data = {
                message: await response.text()
            };
        }

        if (400 <= response.status) {
            let responseText = '';
            if (response.headers.get('content-type')?.includes('application/json') || responseType === 'arrayBuffer') {
                responseText = JSONbig.stringify(data);
            } else {
                responseText = data?.message;
            }
            throw new AppwriteException(data?.message, response.status, data?.type, responseText);
        }

        return data;
    }

    static flatten(data: Payload, prefix = ''): Payload {
        let output: Payload = {};

        for (const [key, value] of Object.entries(data)) {
            let finalKey = prefix ? prefix + '[' + key +']' : key;
            if (Array.isArray(value)) {
                output = { ...output, ...Client.flatten(value, finalKey) };
            } else {
                output[finalKey] = value;
            }
        }

        return output;
    }
}

export { Client, AppwriteException };
export { Query } from './query';
export type { Models, Payload, UploadProgress };
export type { QueryTypes, QueryTypesList } from './query';
