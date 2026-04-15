import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Scopes } from '../enums/scopes';
import { ProtocolId } from '../enums/protocol-id';
import { ServiceId } from '../enums/service-id';

export class Project {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all API keys from the current project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire, accessedAt, name, scopes
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     */
    listKeys(params?: { queries?: string[], total?: boolean }): Promise<Models.KeyList>;
    /**
     * Get a list of all API keys from the current project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire, accessedAt, name, scopes
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listKeys(queries?: string[], total?: boolean): Promise<Models.KeyList>;
    listKeys(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.KeyList> {
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


        const apiPath = '/project/keys';
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
     * Create a new API key. It's recommended to have multiple API keys with strict scopes for separate functions within your project.
     *
     * @param {string} params.keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    createKey(params: { keyId: string, name: string, scopes: Scopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Create a new API key. It's recommended to have multiple API keys with strict scopes for separate functions within your project.
     *
     * @param {string} keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createKey(keyId: string, name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    createKey(
        paramsOrFirst: { keyId: string, name: string, scopes: Scopes[], expire?: string } | string,
        ...rest: [(string)?, (Scopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { keyId: string, name: string, scopes: Scopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string, name: string, scopes: Scopes[], expire?: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as Scopes[],
                expire: rest[2] as string            
            };
        }
        
        const keyId = params.keyId;
        const name = params.name;
        const scopes = params.scopes;
        const expire = params.expire;

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }

        const apiPath = '/project/keys';
        const payload: Payload = {};
        if (typeof keyId !== 'undefined') {
            payload['keyId'] = keyId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
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
     * Get a key by its unique ID. 
     *
     * @param {string} params.keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    getKey(params: { keyId: string }): Promise<Models.Key>;
    /**
     * Get a key by its unique ID. 
     *
     * @param {string} keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getKey(keyId: string): Promise<Models.Key>;
    getKey(
        paramsOrFirst: { keyId: string } | string    
    ): Promise<Models.Key> {
        let params: { keyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string };
        } else {
            params = {
                keyId: paramsOrFirst as string            
            };
        }
        
        const keyId = params.keyId;

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }

        const apiPath = '/project/keys/{keyId}'.replace('{keyId}', keyId);
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
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} params.keyId - Key ID.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    updateKey(params: { keyId: string, name: string, scopes: Scopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} keyId - Key ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateKey(keyId: string, name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    updateKey(
        paramsOrFirst: { keyId: string, name: string, scopes: Scopes[], expire?: string } | string,
        ...rest: [(string)?, (Scopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { keyId: string, name: string, scopes: Scopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string, name: string, scopes: Scopes[], expire?: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as Scopes[],
                expire: rest[2] as string            
            };
        }
        
        const keyId = params.keyId;
        const name = params.name;
        const scopes = params.scopes;
        const expire = params.expire;

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }

        const apiPath = '/project/keys/{keyId}'.replace('{keyId}', keyId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
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
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} params.keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteKey(params: { keyId: string }): Promise<{}>;
    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteKey(keyId: string): Promise<{}>;
    deleteKey(
        paramsOrFirst: { keyId: string } | string    
    ): Promise<{}> {
        let params: { keyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string };
        } else {
            params = {
                keyId: paramsOrFirst as string            
            };
        }
        
        const keyId = params.keyId;

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }

        const apiPath = '/project/keys/{keyId}'.replace('{keyId}', keyId);
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
     * Update the project labels. Labels can be used to easily filter projects in an organization.
     *
     * @param {string[]} params.labels - Array of project labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateLabels(params: { labels: string[] }): Promise<Models.Project>;
    /**
     * Update the project labels. Labels can be used to easily filter projects in an organization.
     *
     * @param {string[]} labels - Array of project labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLabels(labels: string[]): Promise<Models.Project>;
    updateLabels(
        paramsOrFirst: { labels: string[] } | string[]    
    ): Promise<Models.Project> {
        let params: { labels: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { labels: string[] };
        } else {
            params = {
                labels: paramsOrFirst as string[]            
            };
        }
        
        const labels = params.labels;

        if (typeof labels === 'undefined') {
            throw new AppwriteException('Missing required parameter: "labels"');
        }

        const apiPath = '/project/labels';
        const payload: Payload = {};
        if (typeof labels !== 'undefined') {
            payload['labels'] = labels;
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
     * Get a list of all platforms in the project. This endpoint returns an array of all platforms and their configurations.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: type, name, hostname, bundleIdentifier, applicationId, packageIdentifierName, packageName
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformList>}
     */
    listPlatforms(params?: { queries?: string[], total?: boolean }): Promise<Models.PlatformList>;
    /**
     * Get a list of all platforms in the project. This endpoint returns an array of all platforms and their configurations.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: type, name, hostname, bundleIdentifier, applicationId, packageIdentifierName, packageName
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listPlatforms(queries?: string[], total?: boolean): Promise<Models.PlatformList>;
    listPlatforms(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.PlatformList> {
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


        const apiPath = '/project/platforms';
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
     * Create a new Android platform for your project. Use this endpoint to register a new Android platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     */
    createAndroidPlatform(params: { platformId: string, name: string, applicationId: string }): Promise<Models.PlatformAndroid>;
    /**
     * Create a new Android platform for your project. Use this endpoint to register a new Android platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAndroidPlatform(platformId: string, name: string, applicationId: string): Promise<Models.PlatformAndroid>;
    createAndroidPlatform(
        paramsOrFirst: { platformId: string, name: string, applicationId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformAndroid> {
        let params: { platformId: string, name: string, applicationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, applicationId: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                applicationId: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const applicationId = params.applicationId;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof applicationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "applicationId"');
        }

        const apiPath = '/project/platforms/android';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof applicationId !== 'undefined') {
            payload['applicationId'] = applicationId;
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
     * Update an Android platform by its unique ID. Use this endpoint to update the platform's name or application ID.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     */
    updateAndroidPlatform(params: { platformId: string, name: string, applicationId: string }): Promise<Models.PlatformAndroid>;
    /**
     * Update an Android platform by its unique ID. Use this endpoint to update the platform's name or application ID.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAndroidPlatform(platformId: string, name: string, applicationId: string): Promise<Models.PlatformAndroid>;
    updateAndroidPlatform(
        paramsOrFirst: { platformId: string, name: string, applicationId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformAndroid> {
        let params: { platformId: string, name: string, applicationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, applicationId: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                applicationId: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const applicationId = params.applicationId;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof applicationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "applicationId"');
        }

        const apiPath = '/project/platforms/android/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof applicationId !== 'undefined') {
            payload['applicationId'] = applicationId;
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
     * Create a new Apple platform for your project. Use this endpoint to register a new Apple platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     */
    createApplePlatform(params: { platformId: string, name: string, bundleIdentifier: string }): Promise<Models.PlatformApple>;
    /**
     * Create a new Apple platform for your project. Use this endpoint to register a new Apple platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createApplePlatform(platformId: string, name: string, bundleIdentifier: string): Promise<Models.PlatformApple>;
    createApplePlatform(
        paramsOrFirst: { platformId: string, name: string, bundleIdentifier: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformApple> {
        let params: { platformId: string, name: string, bundleIdentifier: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, bundleIdentifier: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                bundleIdentifier: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const bundleIdentifier = params.bundleIdentifier;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof bundleIdentifier === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bundleIdentifier"');
        }

        const apiPath = '/project/platforms/apple';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof bundleIdentifier !== 'undefined') {
            payload['bundleIdentifier'] = bundleIdentifier;
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
     * Update an Apple platform by its unique ID. Use this endpoint to update the platform's name or bundle identifier.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     */
    updateApplePlatform(params: { platformId: string, name: string, bundleIdentifier: string }): Promise<Models.PlatformApple>;
    /**
     * Update an Apple platform by its unique ID. Use this endpoint to update the platform's name or bundle identifier.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateApplePlatform(platformId: string, name: string, bundleIdentifier: string): Promise<Models.PlatformApple>;
    updateApplePlatform(
        paramsOrFirst: { platformId: string, name: string, bundleIdentifier: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformApple> {
        let params: { platformId: string, name: string, bundleIdentifier: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, bundleIdentifier: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                bundleIdentifier: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const bundleIdentifier = params.bundleIdentifier;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof bundleIdentifier === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bundleIdentifier"');
        }

        const apiPath = '/project/platforms/apple/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof bundleIdentifier !== 'undefined') {
            payload['bundleIdentifier'] = bundleIdentifier;
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
     * Create a new Linux platform for your project. Use this endpoint to register a new Linux platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     */
    createLinuxPlatform(params: { platformId: string, name: string, packageName: string }): Promise<Models.PlatformLinux>;
    /**
     * Create a new Linux platform for your project. Use this endpoint to register a new Linux platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLinuxPlatform(platformId: string, name: string, packageName: string): Promise<Models.PlatformLinux>;
    createLinuxPlatform(
        paramsOrFirst: { platformId: string, name: string, packageName: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformLinux> {
        let params: { platformId: string, name: string, packageName: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, packageName: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                packageName: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const packageName = params.packageName;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof packageName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "packageName"');
        }

        const apiPath = '/project/platforms/linux';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof packageName !== 'undefined') {
            payload['packageName'] = packageName;
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
     * Update a Linux platform by its unique ID. Use this endpoint to update the platform's name or package name.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     */
    updateLinuxPlatform(params: { platformId: string, name: string, packageName: string }): Promise<Models.PlatformLinux>;
    /**
     * Update a Linux platform by its unique ID. Use this endpoint to update the platform's name or package name.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLinuxPlatform(platformId: string, name: string, packageName: string): Promise<Models.PlatformLinux>;
    updateLinuxPlatform(
        paramsOrFirst: { platformId: string, name: string, packageName: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformLinux> {
        let params: { platformId: string, name: string, packageName: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, packageName: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                packageName: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const packageName = params.packageName;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof packageName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "packageName"');
        }

        const apiPath = '/project/platforms/linux/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof packageName !== 'undefined') {
            payload['packageName'] = packageName;
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
     * Create a new web platform for your project. Use this endpoint to register a new platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     */
    createWebPlatform(params: { platformId: string, name: string, hostname: string }): Promise<Models.PlatformWeb>;
    /**
     * Create a new web platform for your project. Use this endpoint to register a new platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createWebPlatform(platformId: string, name: string, hostname: string): Promise<Models.PlatformWeb>;
    createWebPlatform(
        paramsOrFirst: { platformId: string, name: string, hostname: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformWeb> {
        let params: { platformId: string, name: string, hostname: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, hostname: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                hostname: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const hostname = params.hostname;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof hostname === 'undefined') {
            throw new AppwriteException('Missing required parameter: "hostname"');
        }

        const apiPath = '/project/platforms/web';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof hostname !== 'undefined') {
            payload['hostname'] = hostname;
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
     * Update a web platform by its unique ID. Use this endpoint to update the platform's name or hostname.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     */
    updateWebPlatform(params: { platformId: string, name: string, hostname: string }): Promise<Models.PlatformWeb>;
    /**
     * Update a web platform by its unique ID. Use this endpoint to update the platform's name or hostname.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateWebPlatform(platformId: string, name: string, hostname: string): Promise<Models.PlatformWeb>;
    updateWebPlatform(
        paramsOrFirst: { platformId: string, name: string, hostname: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformWeb> {
        let params: { platformId: string, name: string, hostname: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, hostname: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                hostname: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const hostname = params.hostname;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof hostname === 'undefined') {
            throw new AppwriteException('Missing required parameter: "hostname"');
        }

        const apiPath = '/project/platforms/web/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof hostname !== 'undefined') {
            payload['hostname'] = hostname;
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
     * Create a new Windows platform for your project. Use this endpoint to register a new Windows platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     */
    createWindowsPlatform(params: { platformId: string, name: string, packageIdentifierName: string }): Promise<Models.PlatformWindows>;
    /**
     * Create a new Windows platform for your project. Use this endpoint to register a new Windows platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createWindowsPlatform(platformId: string, name: string, packageIdentifierName: string): Promise<Models.PlatformWindows>;
    createWindowsPlatform(
        paramsOrFirst: { platformId: string, name: string, packageIdentifierName: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformWindows> {
        let params: { platformId: string, name: string, packageIdentifierName: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, packageIdentifierName: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                packageIdentifierName: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const packageIdentifierName = params.packageIdentifierName;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof packageIdentifierName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "packageIdentifierName"');
        }

        const apiPath = '/project/platforms/windows';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof packageIdentifierName !== 'undefined') {
            payload['packageIdentifierName'] = packageIdentifierName;
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
     * Update a Windows platform by its unique ID. Use this endpoint to update the platform's name or package identifier name.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     */
    updateWindowsPlatform(params: { platformId: string, name: string, packageIdentifierName: string }): Promise<Models.PlatformWindows>;
    /**
     * Update a Windows platform by its unique ID. Use this endpoint to update the platform's name or package identifier name.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateWindowsPlatform(platformId: string, name: string, packageIdentifierName: string): Promise<Models.PlatformWindows>;
    updateWindowsPlatform(
        paramsOrFirst: { platformId: string, name: string, packageIdentifierName: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformWindows> {
        let params: { platformId: string, name: string, packageIdentifierName: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, packageIdentifierName: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                packageIdentifierName: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const packageIdentifierName = params.packageIdentifierName;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof packageIdentifierName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "packageIdentifierName"');
        }

        const apiPath = '/project/platforms/windows/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof packageIdentifierName !== 'undefined') {
            payload['packageIdentifierName'] = packageIdentifierName;
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
     * Get a platform by its unique ID. This endpoint returns the platform's details, including its name, type, and key configurations.
     *
     * @param {string} params.platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>}
     */
    getPlatform(params: { platformId: string }): Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>;
    /**
     * Get a platform by its unique ID. This endpoint returns the platform's details, including its name, type, and key configurations.
     *
     * @param {string} platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPlatform(platformId: string): Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>;
    getPlatform(
        paramsOrFirst: { platformId: string } | string    
    ): Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux> {
        let params: { platformId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string };
        } else {
            params = {
                platformId: paramsOrFirst as string            
            };
        }
        
        const platformId = params.platformId;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }

        const apiPath = '/project/platforms/{platformId}'.replace('{platformId}', platformId);
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
     * Delete a platform by its unique ID. This endpoint removes the platform and all its configurations from the project.
     *
     * @param {string} params.platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePlatform(params: { platformId: string }): Promise<{}>;
    /**
     * Delete a platform by its unique ID. This endpoint removes the platform and all its configurations from the project.
     *
     * @param {string} platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deletePlatform(platformId: string): Promise<{}>;
    deletePlatform(
        paramsOrFirst: { platformId: string } | string    
    ): Promise<{}> {
        let params: { platformId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string };
        } else {
            params = {
                platformId: paramsOrFirst as string            
            };
        }
        
        const platformId = params.platformId;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }

        const apiPath = '/project/platforms/{platformId}'.replace('{platformId}', platformId);
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
     * Update the status of a specific protocol. Use this endpoint to enable or disable a protocol in your project. 
     *
     * @param {ProtocolId} params.protocolId - Protocol name. Can be one of: rest, graphql, websocket
     * @param {boolean} params.enabled - Protocol status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateProtocolStatus(params: { protocolId: ProtocolId, enabled: boolean }): Promise<Models.Project>;
    /**
     * Update the status of a specific protocol. Use this endpoint to enable or disable a protocol in your project. 
     *
     * @param {ProtocolId} protocolId - Protocol name. Can be one of: rest, graphql, websocket
     * @param {boolean} enabled - Protocol status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProtocolStatus(protocolId: ProtocolId, enabled: boolean): Promise<Models.Project>;
    updateProtocolStatus(
        paramsOrFirst: { protocolId: ProtocolId, enabled: boolean } | ProtocolId,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { protocolId: ProtocolId, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('protocolId' in paramsOrFirst || 'enabled' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { protocolId: ProtocolId, enabled: boolean };
        } else {
            params = {
                protocolId: paramsOrFirst as ProtocolId,
                enabled: rest[0] as boolean            
            };
        }
        
        const protocolId = params.protocolId;
        const enabled = params.enabled;

        if (typeof protocolId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "protocolId"');
        }
        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/protocols/{protocolId}/status'.replace('{protocolId}', protocolId);
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update the status of a specific service. Use this endpoint to enable or disable a service in your project. 
     *
     * @param {ServiceId} params.serviceId - Service name. Can be one of: account, avatars, databases, tablesdb, locale, health, project, storage, teams, users, vcs, sites, functions, proxy, graphql, migrations, messaging
     * @param {boolean} params.enabled - Service status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateServiceStatus(params: { serviceId: ServiceId, enabled: boolean }): Promise<Models.Project>;
    /**
     * Update the status of a specific service. Use this endpoint to enable or disable a service in your project. 
     *
     * @param {ServiceId} serviceId - Service name. Can be one of: account, avatars, databases, tablesdb, locale, health, project, storage, teams, users, vcs, sites, functions, proxy, graphql, migrations, messaging
     * @param {boolean} enabled - Service status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateServiceStatus(serviceId: ServiceId, enabled: boolean): Promise<Models.Project>;
    updateServiceStatus(
        paramsOrFirst: { serviceId: ServiceId, enabled: boolean } | ServiceId,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { serviceId: ServiceId, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('serviceId' in paramsOrFirst || 'enabled' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { serviceId: ServiceId, enabled: boolean };
        } else {
            params = {
                serviceId: paramsOrFirst as ServiceId,
                enabled: rest[0] as boolean            
            };
        }
        
        const serviceId = params.serviceId;
        const enabled = params.enabled;

        if (typeof serviceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "serviceId"');
        }
        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/services/{serviceId}/status'.replace('{serviceId}', serviceId);
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Get a list of all project environment variables.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, resourceType, resourceId, secret
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(params?: { queries?: string[], total?: boolean }): Promise<Models.VariableList>;
    /**
     * Get a list of all project environment variables.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, resourceType, resourceId, secret
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listVariables(queries?: string[], total?: boolean): Promise<Models.VariableList>;
    listVariables(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.VariableList> {
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


        const apiPath = '/project/variables';
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
     * Create a new project environment variable. These variables can be accessed by all functions and sites in the project.
     *
     * @param {string} params.variableId - Variable ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: { variableId: string, key: string, value: string, secret?: boolean }): Promise<Models.Variable>;
    /**
     * Create a new project environment variable. These variables can be accessed by all functions and sites in the project.
     *
     * @param {string} variableId - Variable ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVariable(variableId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    createVariable(
        paramsOrFirst: { variableId: string, key: string, value: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { variableId: string, key: string, value: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string, key: string, value: string, secret?: boolean };
        } else {
            params = {
                variableId: paramsOrFirst as string,
                key: rest[0] as string,
                value: rest[1] as string,
                secret: rest[2] as boolean            
            };
        }
        
        const variableId = params.variableId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }

        const apiPath = '/project/variables';
        const payload: Payload = {};
        if (typeof variableId !== 'undefined') {
            payload['variableId'] = variableId;
        }
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
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
     * Get a variable by its unique ID. 
     *
     * @param {string} params.variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: { variableId: string }): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID. 
     *
     * @param {string} variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getVariable(variableId: string): Promise<Models.Variable>;
    getVariable(
        paramsOrFirst: { variableId: string } | string    
    ): Promise<Models.Variable> {
        let params: { variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string };
        } else {
            params = {
                variableId: paramsOrFirst as string            
            };
        }
        
        const variableId = params.variableId;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
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
     * Update variable by its unique ID.
     *
     * @param {string} params.variableId - Variable ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: { variableId: string, key?: string, value?: string, secret?: boolean }): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} variableId - Variable ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVariable(variableId: string, key?: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    updateVariable(
        paramsOrFirst: { variableId: string, key?: string, value?: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { variableId: string, key?: string, value?: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string, key?: string, value?: string, secret?: boolean };
        } else {
            params = {
                variableId: paramsOrFirst as string,
                key: rest[0] as string,
                value: rest[1] as string,
                secret: rest[2] as boolean            
            };
        }
        
        const variableId = params.variableId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
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
     * Delete a variable by its unique ID. 
     *
     * @param {string} params.variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: { variableId: string }): Promise<{}>;
    /**
     * Delete a variable by its unique ID. 
     *
     * @param {string} variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteVariable(variableId: string): Promise<{}>;
    deleteVariable(
        paramsOrFirst: { variableId: string } | string    
    ): Promise<{}> {
        let params: { variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string };
        } else {
            params = {
                variableId: paramsOrFirst as string            
            };
        }
        
        const variableId = params.variableId;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
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
