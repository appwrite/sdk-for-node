import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Tokens {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all the tokens created for a specific file or bucket. You can use the query params to filter your results.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File unique ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceTokenList>}
     */
    list(params: { bucketId: string, fileId: string, queries?: string[]  }): Promise<Models.ResourceTokenList>;
    /**
     * List all the tokens created for a specific file or bucket. You can use the query params to filter your results.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File unique ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceTokenList>}
     * @deprecated Flat parameter style methods will be removed in a future version.
     * Please use the object parameter style method instead for a better developer experience.
     *
     * @example
     * // Old (deprecated)
     * list(bucketId: string, fileId: string, queries?: string[]): Promise<Models.ResourceTokenList>;
     *
     * // New (object based)
     * list(params: { bucketId: string, fileId: string, queries?: string[]  }): Promise<Models.ResourceTokenList>;
     */
    list(bucketId: string, fileId: string, queries?: string[]): Promise<Models.ResourceTokenList>;
    list(
        paramsOrFirst: { bucketId: string, fileId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.ResourceTokenList> {
        let params: { bucketId: string, fileId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string, queries?: string[] };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                queries: rest[1] as string[]            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const queries = params.queries;

        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        const apiPath = '/tokens/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File unique ID.
     * @param {string} params.expire - Token expiry date
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    createFileToken(params: { bucketId: string, fileId: string, expire?: string  }): Promise<Models.ResourceToken>;
    /**
     * Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File unique ID.
     * @param {string} expire - Token expiry date
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     * @deprecated Flat parameter style methods will be removed in a future version.
     * Please use the object parameter style method instead for a better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createFileToken(bucketId: string, fileId: string, expire?: string): Promise<Models.ResourceToken>;
     *
     * // New (object based)
     * createFileToken(params: { bucketId: string, fileId: string, expire?: string  }): Promise<Models.ResourceToken>;
     */
    createFileToken(bucketId: string, fileId: string, expire?: string): Promise<Models.ResourceToken>;
    createFileToken(
        paramsOrFirst: { bucketId: string, fileId: string, expire?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.ResourceToken> {
        let params: { bucketId: string, fileId: string, expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string, expire?: string };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                expire: rest[1] as string            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const expire = params.expire;

        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        const apiPath = '/tokens/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a token by its unique ID.
     *
     * @param {string} params.tokenId - Token ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    get(params: { tokenId: string  }): Promise<Models.ResourceToken>;
    /**
     * Get a token by its unique ID.
     *
     * @param {string} tokenId - Token ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     * @deprecated Flat parameter style methods will be removed in a future version.
     * Please use the object parameter style method instead for a better developer experience.
     *
     * @example
     * // Old (deprecated)
     * get(tokenId: string): Promise<Models.ResourceToken>;
     *
     * // New (object based)
     * get(params: { tokenId: string  }): Promise<Models.ResourceToken>;
     */
    get(tokenId: string): Promise<Models.ResourceToken>;
    get(
        paramsOrFirst: { tokenId: string } | string    
    ): Promise<Models.ResourceToken> {
        let params: { tokenId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { tokenId: string };
        } else {
            params = {
                tokenId: paramsOrFirst as string            
            };
        }
        
        const tokenId = params.tokenId;

        if (typeof tokenId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tokenId"');
        }

        const apiPath = '/tokens/{tokenId}'.replace('{tokenId}', tokenId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update a token by its unique ID. Use this endpoint to update a token's expiry date.
     *
     * @param {string} params.tokenId - Token unique ID.
     * @param {string} params.expire - File token expiry date
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    update(params: { tokenId: string, expire?: string  }): Promise<Models.ResourceToken>;
    /**
     * Update a token by its unique ID. Use this endpoint to update a token's expiry date.
     *
     * @param {string} tokenId - Token unique ID.
     * @param {string} expire - File token expiry date
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     * @deprecated Flat parameter style methods will be removed in a future version.
     * Please use the object parameter style method instead for a better developer experience.
     *
     * @example
     * // Old (deprecated)
     * update(tokenId: string, expire?: string): Promise<Models.ResourceToken>;
     *
     * // New (object based)
     * update(params: { tokenId: string, expire?: string  }): Promise<Models.ResourceToken>;
     */
    update(tokenId: string, expire?: string): Promise<Models.ResourceToken>;
    update(
        paramsOrFirst: { tokenId: string, expire?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ResourceToken> {
        let params: { tokenId: string, expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { tokenId: string, expire?: string };
        } else {
            params = {
                tokenId: paramsOrFirst as string,
                expire: rest[0] as string            
            };
        }
        
        const tokenId = params.tokenId;
        const expire = params.expire;

        if (typeof tokenId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tokenId"');
        }

        const apiPath = '/tokens/{tokenId}'.replace('{tokenId}', tokenId);
        const payload: Payload = {};
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a token by its unique ID.
     *
     * @param {string} params.tokenId - Token ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { tokenId: string  }): Promise<{}>;
    /**
     * Delete a token by its unique ID.
     *
     * @param {string} tokenId - Token ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Flat parameter style methods will be removed in a future version.
     * Please use the object parameter style method instead for a better developer experience.
     *
     * @example
     * // Old (deprecated)
     * delete(tokenId: string): Promise<{}>;
     *
     * // New (object based)
     * delete(params: { tokenId: string  }): Promise<{}>;
     */
    delete(tokenId: string): Promise<{}>;
    delete(
        paramsOrFirst: { tokenId: string } | string    
    ): Promise<{}> {
        let params: { tokenId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { tokenId: string };
        } else {
            params = {
                tokenId: paramsOrFirst as string            
            };
        }
        
        const tokenId = params.tokenId;

        if (typeof tokenId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tokenId"');
        }

        const apiPath = '/tokens/{tokenId}'.replace('{tokenId}', tokenId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }
}
