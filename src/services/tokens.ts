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
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceTokenList>}
     */
    list(bucketId: string, fileId: string, queries?: string[]): Promise<Models.ResourceTokenList> {
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
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    createFileToken(bucketId: string, fileId: string, expire?: string): Promise<Models.ResourceToken> {
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
     * @param {string} tokenId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    get(tokenId: string): Promise<Models.ResourceToken> {
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
     * Update a token by its unique ID. Use this endpoint to update a token&#039;s expiry date.
     *
     * @param {string} tokenId
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    update(tokenId: string, expire?: string): Promise<Models.ResourceToken> {
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
     * @param {string} tokenId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(tokenId: string): Promise<{}> {
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
