import { fetch, FormData, File } from 'node-fetch-native-with-agent';
import { createAgent } from 'node-fetch-native-with-agent/agent';
import { Models } from './models';
import { InputFile } from './inputFile';
import JSONbigModule from 'json-bigint';
const JSONbigParser = JSONbigModule({ storeAsString: false });
const JSONbigSerializer = JSONbigModule({ useNativeBigInt: true });

const MAX_SAFE = BigInt(Number.MAX_SAFE_INTEGER);
const MIN_SAFE = BigInt(Number.MIN_SAFE_INTEGER);
const MAX_INT64 = BigInt('9223372036854775807');
const MIN_INT64 = BigInt('-9223372036854775808');

function isBigNumber(value: any): boolean {
    return value !== null
        && typeof value === 'object'
        && value._isBigNumber === true
        && typeof value.isInteger === 'function'
        && typeof value.toFixed === 'function'
        && typeof value.toNumber === 'function';
}

function reviver(_key: string, value: any): any {
    if (isBigNumber(value)) {
        if (value.isInteger()) {
            const str = value.toFixed();
            const bi = BigInt(str);
            if (bi >= MIN_SAFE && bi <= MAX_SAFE) {
                return Number(str);
            }
            if (bi >= MIN_INT64 && bi <= MAX_INT64) {
                return bi;
            }
            return value.toNumber();
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
    let ua = 'AppwriteNodeJSSDK/25.1.0';

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
        devkey: '',
        cookie: '',
        impersonateuserid: '',
        impersonateuseremail: '',
        impersonateuserphone: '',
    };
    headers: Headers = {
        'x-sdk-name': 'Node.js',
        'x-sdk-platform': 'server',
        'x-sdk-language': 'nodejs',
        'x-sdk-version': '25.1.0',
        'user-agent' : getUserAgent(),
        'X-Appwrite-Response-Format': '1.9.5',
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
     * Get Headers
     *
     * Returns a copy of the current request headers, including any
     * authentication headers. Handle with care.
     *
     * @returns {Headers}
     */
    getHeaders(): Headers {
        return { ...this.headers };
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
    /**
     * Set DevKey
     *
     * Your secret dev API key
     *
     * @param value string
     *
     * @return {this}
     */
    setDevKey(value: string): this {
        this.headers['X-Appwrite-Dev-Key'] = value;
        this.config.devkey = value;
        return this;
    }
    /**
     * Set Cookie
     *
     * The user cookie to authenticate with. Used by SDKs that forward an incoming Cookie header in server-side runtimes.
     *
     * @param value string
     *
     * @return {this}
     */
    setCookie(value: string): this {
        this.headers['Cookie'] = value;
        this.config.cookie = value;
        return this;
    }
    /**
     * Set ImpersonateUserId
     *
     * Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.
     *
     * @param value string
     *
     * @return {this}
     */
    setImpersonateUserId(value: string): this {
        this.headers['X-Appwrite-Impersonate-User-Id'] = value;
        this.config.impersonateuserid = value;
        return this;
    }
    /**
     * Set ImpersonateUserEmail
     *
     * Impersonate a user by email on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.
     *
     * @param value string
     *
     * @return {this}
     */
    setImpersonateUserEmail(value: string): this {
        this.headers['X-Appwrite-Impersonate-User-Email'] = value;
        this.config.impersonateuseremail = value;
        return this;
    }
    /**
     * Set ImpersonateUserPhone
     *
     * Impersonate a user by phone on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.
     *
     * @param value string
     *
     * @return {this}
     */
    setImpersonateUserPhone(value: string): this {
        this.headers['X-Appwrite-Impersonate-User-Phone'] = value;
        this.config.impersonateuserphone = value;
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
        const [fileParam, file] = Object.entries(originalPayload).find(
            ([_, value]) => value instanceof File || value instanceof InputFile
        ) ?? [];

        if (!file || !fileParam) {
            throw new Error('File not found in payload');
        }

        if (file instanceof InputFile) {
            const size = await file.size();

            if (size <= Client.CHUNK_SIZE) {
                const payload = { ...originalPayload };
                payload[fileParam] = await file.toFile();
                return await this.call(method, url, headers, payload);
            }

            const totalChunks = Math.ceil(size / Client.CHUNK_SIZE);

            // Upload first chunk alone to get the upload ID
            const firstChunkEnd = Math.min(Client.CHUNK_SIZE, size);
            const firstChunkHeaders = { ...headers, 'content-range': `bytes 0-${firstChunkEnd - 1}/${size}` };
            const firstChunk = await file.slice(0, firstChunkEnd);
            const firstPayload = { ...originalPayload };
            firstPayload[fileParam] = new File([firstChunk], file.filename);

            let response = await this.call(method, url, firstChunkHeaders, firstPayload);
            const uploadId = response?.$id;

            if (onProgress && typeof onProgress === 'function') {
                onProgress({
                    $id: uploadId,
                    progress: Math.round((firstChunkEnd / size) * 100),
                    sizeUploaded: firstChunkEnd,
                    chunksTotal: totalChunks,
                    chunksUploaded: 1
                });
            }

            if (totalChunks === 1) {
                return response;
            }

            // Prepare remaining chunks
            const chunks: { start: number; end: number }[] = [];
            for (let i = 1; i < totalChunks; i++) {
                const start = i * Client.CHUNK_SIZE;
                const end = Math.min(start + Client.CHUNK_SIZE, size);
                chunks.push({ start, end });
            }

            // Upload remaining chunks with max concurrency of 8
            const CONCURRENCY = 8;
            let completedCount = 1;
            let uploadedBytes = firstChunkEnd;
            let lastResponse = response;
            let finalResponse = null;

            const isUploadComplete = (chunkResponse: any) => {
                const chunksUploaded = chunkResponse?.chunksUploaded;
                const chunksTotal = chunkResponse?.chunksTotal ?? totalChunks;
                return typeof chunksUploaded === 'number' && typeof chunksTotal === 'number' && chunksUploaded >= chunksTotal;
            };

            const uploadChunk = async (chunk: typeof chunks[0]) => {
                const chunkHeaders = { ...headers };
                if (uploadId) {
                    chunkHeaders['x-appwrite-id'] = uploadId;
                }
                chunkHeaders['content-range'] = `bytes ${chunk.start}-${chunk.end - 1}/${size}`;
                
                const chunkBlob = await file.slice(chunk.start, chunk.end);
                const chunkPayload = { ...originalPayload };
                chunkPayload[fileParam] = new File([chunkBlob], file.filename);

                const chunkResponse = await this.call(method, url, chunkHeaders, chunkPayload);
                
                completedCount++;
                uploadedBytes += (chunk.end - chunk.start);
                
                lastResponse = chunkResponse;
                if (isUploadComplete(chunkResponse)) {
                    finalResponse = chunkResponse;
                }

                if (onProgress && typeof onProgress === 'function') {
                    onProgress({
                        $id: uploadId,
                        progress: Math.round((uploadedBytes / size) * 100),
                        sizeUploaded: uploadedBytes,
                        chunksTotal: totalChunks,
                        chunksUploaded: completedCount
                    });
                }

                return chunkResponse;
            };

            // Process with limited concurrency using a worker pool
            const queue = [...chunks];
            const workers: Promise<void>[] = [];
            const workerCount = Math.min(CONCURRENCY, queue.length);

            for (let i = 0; i < workerCount; i++) {
                workers.push(
                    (async () => {
                        while (queue.length > 0) {
                            const chunk = queue.shift()!;
                            await uploadChunk(chunk);
                        }
                    })()
                );
            }

            await Promise.all(workers);

            return finalResponse ?? lastResponse;
        }

        if (file.size <= Client.CHUNK_SIZE) {
            return await this.call(method, url, headers, originalPayload);
        }

        const totalChunks = Math.ceil(file.size / Client.CHUNK_SIZE);

        // Upload first chunk alone to get the upload ID
        const firstChunkEnd = Math.min(Client.CHUNK_SIZE, file.size);
        const firstChunkHeaders = { ...headers, 'content-range': `bytes 0-${firstChunkEnd - 1}/${file.size}` };
        const firstChunk = file.slice(0, firstChunkEnd);
        const firstPayload = { ...originalPayload };
        firstPayload[fileParam] = new File([firstChunk], file.name);

        let response = await this.call(method, url, firstChunkHeaders, firstPayload);
        const uploadId = response?.$id;

        if (onProgress && typeof onProgress === 'function') {
            onProgress({
                $id: uploadId,
                progress: Math.round((firstChunkEnd / file.size) * 100),
                sizeUploaded: firstChunkEnd,
                chunksTotal: totalChunks,
                chunksUploaded: 1
            });
        }

        if (totalChunks === 1) {
            return response;
        }

        // Prepare remaining chunks
        const chunks: { start: number; end: number }[] = [];
        for (let i = 1; i < totalChunks; i++) {
            const start = i * Client.CHUNK_SIZE;
            const end = Math.min(start + Client.CHUNK_SIZE, file.size);
            chunks.push({ start, end });
        }

        // Upload remaining chunks with max concurrency of 8
        const CONCURRENCY = 8;
        let completedCount = 1;
        let uploadedBytes = firstChunkEnd;
        let lastResponse = response;
        let finalResponse = null;

        const isUploadComplete = (chunkResponse: any) => {
            const chunksUploaded = chunkResponse?.chunksUploaded;
            const chunksTotal = chunkResponse?.chunksTotal ?? totalChunks;
            return typeof chunksUploaded === 'number' && typeof chunksTotal === 'number' && chunksUploaded >= chunksTotal;
        };

        const uploadChunk = async (chunk: typeof chunks[0]) => {
            const chunkHeaders = { ...headers };
            if (uploadId) {
                chunkHeaders['x-appwrite-id'] = uploadId;
            }
            chunkHeaders['content-range'] = `bytes ${chunk.start}-${chunk.end - 1}/${file.size}`;
            
            const chunkBlob = file.slice(chunk.start, chunk.end);
            const chunkPayload = { ...originalPayload };
            chunkPayload[fileParam] = new File([chunkBlob], file.name);

            const chunkResponse = await this.call(method, url, chunkHeaders, chunkPayload);
            
            completedCount++;
            uploadedBytes += (chunk.end - chunk.start);
            
            lastResponse = chunkResponse;
            if (isUploadComplete(chunkResponse)) {
                finalResponse = chunkResponse;
            }

            if (onProgress && typeof onProgress === 'function') {
                onProgress({
                    $id: uploadId,
                    progress: Math.round((uploadedBytes / file.size) * 100),
                    sizeUploaded: uploadedBytes,
                    chunksTotal: totalChunks,
                    chunksUploaded: completedCount
                });
            }

            return chunkResponse;
        };

        // Process with limited concurrency using a worker pool
        const queue = [...chunks];
        const workers: Promise<void>[] = [];
        const workerCount = Math.min(CONCURRENCY, queue.length);

        for (let i = 0; i < workerCount; i++) {
            workers.push(
                (async () => {
                    while (queue.length > 0) {
                        const chunk = queue.shift()!;
                        await uploadChunk(chunk);
                    }
                })()
            );
        }

        await Promise.all(workers);

        return finalResponse ?? lastResponse;
    }

    async ping(): Promise<any> {
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

        if (data && typeof data === 'object') {
            data.toString = () => JSONbig.stringify(data);
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
