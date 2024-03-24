const os = require('os');
const URL = require('url').URL;
const Query = require('./query.js');
const {fetch, FormData, Agent} = require('undici');
const AppwriteException = require('./exception.js');

class Client {
    static CHUNK_SIZE = 5*1024*1024; // 5MB
    
    constructor() {
        this.endpoint = 'https://cloud.appwrite.io/v1';
        this.headers = {
            'accept-encoding': '*',
            'content-type': '',
            'user-agent' : `AppwriteNodeJSSDK/12.0.1 (${os.type()}; ${os.version()}; ${os.arch()})`,
            'x-sdk-name': 'Node.js',
            'x-sdk-platform': 'server',
            'x-sdk-language': 'nodejs',
            'x-sdk-version': '12.0.1',
            'X-Appwrite-Response-Format' : '1.5.0',
        };
        this.selfSigned = false;
    }

    /**
     * Set Project
     *
     * Your project ID
     *
     * @param {string} project
     *
     * @return Client
     */
    setProject(project) {
        this.addHeader('X-Appwrite-Project', project);

        return this;
    }

    /**
     * Set Key
     *
     * Your secret API key
     *
     * @param {string} key
     *
     * @return Client
     */
    setKey(key) {
        this.addHeader('X-Appwrite-Key', key);

        return this;
    }

    /**
     * Set JWT
     *
     * Your secret JSON Web Token
     *
     * @param {string} jwt
     *
     * @return Client
     */
    setJWT(jwt) {
        this.addHeader('X-Appwrite-JWT', jwt);

        return this;
    }

    /**
     * Set Locale
     *
     * @param {string} locale
     *
     * @return Client
     */
    setLocale(locale) {
        this.addHeader('X-Appwrite-Locale', locale);

        return this;
    }

    /**
     * Set Session
     *
     * The user session to authenticate with
     *
     * @param {string} session
     *
     * @return Client
     */
    setSession(session) {
        this.addHeader('X-Appwrite-Session', session);

        return this;
    }

    /**
     * Set ForwardedUserAgent
     *
     * The user agent string of the client that made the request
     *
     * @param {string} forwardeduseragent
     *
     * @return Client
     */
    setForwardedUserAgent(forwardeduseragent) {
        this.addHeader('X-Forwarded-User-Agent', forwardeduseragent);

        return this;
    }

    /**
     * Set self signed.
     *
     * @param {bool} status
     *
     * @return this
     */
    setSelfSigned(status = true) {
        this.selfSigned = status;

        return this;
    }

    /**
     * Set endpoint.
     *
     * @param {string} endpoint
     *
     * @return this
     */
    setEndpoint(endpoint)
    {
        this.endpoint = endpoint;

        return this;
    }

    /**
     * Sets a header for requests.
     * 
     * @param {string} key
     * @param {string} value
     * 
     * @return this
     */
    addHeader(key, value) {
        this.headers[key.toLowerCase()] = value;
        
        return this;
    }
      
    async call(method, path = "", headers = {}, params = {}, responseType = "json") {
        headers = {...this.headers, ...headers};
        const url = new URL(this.endpoint + path);

        let body = undefined;

        if (method.toUpperCase() === "GET") {
            url.search = new URLSearchParams(Client.flatten(params)).toString();
        } else if (headers["content-type"]?.toLowerCase().startsWith("multipart/form-data")) {
            delete headers["content-type"];
            const formData = new FormData();

            const flatParams = Client.flatten(params);

            for (const [key, value] of Object.entries(flatParams)) {
                if (value && value.type && value.type === "file") {
                    formData.append(key, value.file, value.filename);
                } else {
                    formData.append(key, value);
                }
            }

            body = formData;
        } else {
            body = JSON.stringify(params);
        }

      let response = undefined;
      try {
        response = await fetch(url.toString(), {
            method: method.toUpperCase(),
            headers,
            body,
            redirect: responseType === "location" ? "manual" : "follow",
            dispatcher: new Agent({
                connect: {
                    rejectUnauthorized: !this.selfSigned,
                },
            }),
        });
      } catch (error) {
        throw new AppwriteException(error.message);
      }

      if (response.status >= 400) {
        const text = await response.text();
        let json = undefined;
        try {
            json = JSON.parse(text);
        } catch (error) {
            throw new AppwriteException(text, response.status, "", text);
        }
        throw new AppwriteException(json.message, json.code, json.type, json);
      }

      if (responseType === "arraybuffer") {
        const data = await response.arrayBuffer();
        return data;
      }

      if (responseType === "location") {
        return response.headers.get("location");
      }

      const text = await response.text();
      let json = undefined;
      try {
          json = JSON.parse(text);
      } catch (error) {
          return text;
      }
      return json;
    }

    static flatten(data, prefix = "") {
        let output = {};

        for (const [key, value] of Object.entries(data)) {
            let finalKey = prefix ? prefix + "[" + key + "]" : key;

            if (Array.isArray(value)) {
                output = { ...output, ...Client.flatten(value, finalKey) };
            } else {
                output[finalKey] = value;
            }
        }

        return output;
    }
}

module.exports = Client;
