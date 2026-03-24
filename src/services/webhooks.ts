import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Webhooks {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all webhooks belonging to the project. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, url, httpUser, security, events, enabled, logs, attempts
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WebhookList>}
     */
    list(params?: { queries?: string[], total?: boolean }): Promise<Models.WebhookList>;
    /**
     * Get a list of all webhooks belonging to the project. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, url, httpUser, security, events, enabled, logs, attempts
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WebhookList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], total?: boolean): Promise<Models.WebhookList>;
    list(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.WebhookList> {
        let params: { queries?: string[], total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean            
            };
        }
        
        const queries = params.queries;
        const total = params.total;


        const apiPath = '/webhooks';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
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
     * Create a new webhook. Use this endpoint to configure a URL that will receive events from Appwrite when specific events occur.
     *
     * @param {string} params.webhookId - Webhook ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.url - Webhook URL.
     * @param {string} params.name - Webhook name. Max length: 128 chars.
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {boolean} params.enabled - Enable or disable a webhook.
     * @param {boolean} params.security - Certificate verification, false for disabled or true for enabled.
     * @param {string} params.httpUser - Webhook HTTP user. Max length: 256 chars.
     * @param {string} params.httpPass - Webhook HTTP password. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    create(params: { webhookId: string, url: string, name: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string }): Promise<Models.Webhook>;
    /**
     * Create a new webhook. Use this endpoint to configure a URL that will receive events from Appwrite when specific events occur.
     *
     * @param {string} webhookId - Webhook ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} url - Webhook URL.
     * @param {string} name - Webhook name. Max length: 128 chars.
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {boolean} enabled - Enable or disable a webhook.
     * @param {boolean} security - Certificate verification, false for disabled or true for enabled.
     * @param {string} httpUser - Webhook HTTP user. Max length: 256 chars.
     * @param {string} httpPass - Webhook HTTP password. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(webhookId: string, url: string, name: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string): Promise<Models.Webhook>;
    create(
        paramsOrFirst: { webhookId: string, url: string, name: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Webhook> {
        let params: { webhookId: string, url: string, name: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { webhookId: string, url: string, name: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string };
        } else {
            params = {
                webhookId: paramsOrFirst as string,
                url: rest[0] as string,
                name: rest[1] as string,
                events: rest[2] as string[],
                enabled: rest[3] as boolean,
                security: rest[4] as boolean,
                httpUser: rest[5] as string,
                httpPass: rest[6] as string            
            };
        }
        
        const webhookId = params.webhookId;
        const url = params.url;
        const name = params.name;
        const events = params.events;
        const enabled = params.enabled;
        const security = params.security;
        const httpUser = params.httpUser;
        const httpPass = params.httpPass;

        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof events === 'undefined') {
            throw new AppwriteException('Missing required parameter: "events"');
        }

        const apiPath = '/webhooks';
        const payload: Payload = {};
        if (typeof webhookId !== 'undefined') {
            payload['webhookId'] = webhookId;
        }
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof security !== 'undefined') {
            payload['security'] = security;
        }
        if (typeof httpUser !== 'undefined') {
            payload['httpUser'] = httpUser;
        }
        if (typeof httpPass !== 'undefined') {
            payload['httpPass'] = httpPass;
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
     * Get a webhook by its unique ID. This endpoint returns details about a specific webhook configured for a project. 
     *
     * @param {string} params.webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    get(params: { webhookId: string }): Promise<Models.Webhook>;
    /**
     * Get a webhook by its unique ID. This endpoint returns details about a specific webhook configured for a project. 
     *
     * @param {string} webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(webhookId: string): Promise<Models.Webhook>;
    get(
        paramsOrFirst: { webhookId: string } | string    
    ): Promise<Models.Webhook> {
        let params: { webhookId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { webhookId: string };
        } else {
            params = {
                webhookId: paramsOrFirst as string            
            };
        }
        
        const webhookId = params.webhookId;

        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }

        const apiPath = '/webhooks/{webhookId}'.replace('{webhookId}', webhookId);
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
     * Update a webhook by its unique ID. Use this endpoint to update the URL, events, or status of an existing webhook.
     *
     * @param {string} params.webhookId - Webhook ID.
     * @param {string} params.name - Webhook name. Max length: 128 chars.
     * @param {string} params.url - Webhook URL.
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {boolean} params.enabled - Enable or disable a webhook.
     * @param {boolean} params.security - Certificate verification, false for disabled or true for enabled.
     * @param {string} params.httpUser - Webhook HTTP user. Max length: 256 chars.
     * @param {string} params.httpPass - Webhook HTTP password. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    update(params: { webhookId: string, name: string, url: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string }): Promise<Models.Webhook>;
    /**
     * Update a webhook by its unique ID. Use this endpoint to update the URL, events, or status of an existing webhook.
     *
     * @param {string} webhookId - Webhook ID.
     * @param {string} name - Webhook name. Max length: 128 chars.
     * @param {string} url - Webhook URL.
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {boolean} enabled - Enable or disable a webhook.
     * @param {boolean} security - Certificate verification, false for disabled or true for enabled.
     * @param {string} httpUser - Webhook HTTP user. Max length: 256 chars.
     * @param {string} httpPass - Webhook HTTP password. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(webhookId: string, name: string, url: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string): Promise<Models.Webhook>;
    update(
        paramsOrFirst: { webhookId: string, name: string, url: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Webhook> {
        let params: { webhookId: string, name: string, url: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { webhookId: string, name: string, url: string, events: string[], enabled?: boolean, security?: boolean, httpUser?: string, httpPass?: string };
        } else {
            params = {
                webhookId: paramsOrFirst as string,
                name: rest[0] as string,
                url: rest[1] as string,
                events: rest[2] as string[],
                enabled: rest[3] as boolean,
                security: rest[4] as boolean,
                httpUser: rest[5] as string,
                httpPass: rest[6] as string            
            };
        }
        
        const webhookId = params.webhookId;
        const name = params.name;
        const url = params.url;
        const events = params.events;
        const enabled = params.enabled;
        const security = params.security;
        const httpUser = params.httpUser;
        const httpPass = params.httpPass;

        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }
        if (typeof events === 'undefined') {
            throw new AppwriteException('Missing required parameter: "events"');
        }

        const apiPath = '/webhooks/{webhookId}'.replace('{webhookId}', webhookId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof security !== 'undefined') {
            payload['security'] = security;
        }
        if (typeof httpUser !== 'undefined') {
            payload['httpUser'] = httpUser;
        }
        if (typeof httpPass !== 'undefined') {
            payload['httpPass'] = httpPass;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a webhook by its unique ID. Once deleted, the webhook will no longer receive project events. 
     *
     * @param {string} params.webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { webhookId: string }): Promise<{}>;
    /**
     * Delete a webhook by its unique ID. Once deleted, the webhook will no longer receive project events. 
     *
     * @param {string} webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(webhookId: string): Promise<{}>;
    delete(
        paramsOrFirst: { webhookId: string } | string    
    ): Promise<{}> {
        let params: { webhookId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { webhookId: string };
        } else {
            params = {
                webhookId: paramsOrFirst as string            
            };
        }
        
        const webhookId = params.webhookId;

        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }

        const apiPath = '/webhooks/{webhookId}'.replace('{webhookId}', webhookId);
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

    /**
     * Update the webhook signature key. This endpoint can be used to regenerate the signature key used to sign and validate payload deliveries for a specific webhook.
     *
     * @param {string} params.webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    updateSignature(params: { webhookId: string }): Promise<Models.Webhook>;
    /**
     * Update the webhook signature key. This endpoint can be used to regenerate the signature key used to sign and validate payload deliveries for a specific webhook.
     *
     * @param {string} webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSignature(webhookId: string): Promise<Models.Webhook>;
    updateSignature(
        paramsOrFirst: { webhookId: string } | string    
    ): Promise<Models.Webhook> {
        let params: { webhookId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { webhookId: string };
        } else {
            params = {
                webhookId: paramsOrFirst as string            
            };
        }
        
        const webhookId = params.webhookId;

        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }

        const apiPath = '/webhooks/{webhookId}/signature'.replace('{webhookId}', webhookId);
        const payload: Payload = {};
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
}
