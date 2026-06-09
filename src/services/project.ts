import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


import { ProjectAuthMethodId } from '../enums/project-auth-method-id';
import { ProjectKeyScopes } from '../enums/project-key-scopes';
import { ProjectOAuth2GooglePrompt } from '../enums/project-o-auth-2-google-prompt';
import { ProjectOAuthProviderId } from '../enums/project-o-auth-provider-id';
import { ProjectPolicyId } from '../enums/project-policy-id';
import { ProjectProtocolId } from '../enums/project-protocol-id';
import { ProjectServiceId } from '../enums/project-service-id';
import { ProjectSMTPSecure } from '../enums/project-smtp-secure';
import { ProjectEmailTemplateId } from '../enums/project-email-template-id';
import { ProjectEmailTemplateLocale } from '../enums/project-email-template-locale';

export class Project {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a project.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    get(): Promise<Models.Project> {

        const apiPath = '/project';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a project.
     *
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(): Promise<{}> {

        const apiPath = '/project';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
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
     * Update properties of a specific auth method. Use this endpoint to enable or disable a method in your project. 
     *
     * @param {ProjectAuthMethodId} params.methodId - Auth Method ID. Possible values: email-password,magic-url,email-otp,anonymous,invites,jwt,phone
     * @param {boolean} params.enabled - Auth method status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthMethod(params: { methodId: ProjectAuthMethodId, enabled: boolean }): Promise<Models.Project>;
    /**
     * Update properties of a specific auth method. Use this endpoint to enable or disable a method in your project. 
     *
     * @param {ProjectAuthMethodId} methodId - Auth Method ID. Possible values: email-password,magic-url,email-otp,anonymous,invites,jwt,phone
     * @param {boolean} enabled - Auth method status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAuthMethod(methodId: ProjectAuthMethodId, enabled: boolean): Promise<Models.Project>;
    updateAuthMethod(
        paramsOrFirst: { methodId: ProjectAuthMethodId, enabled: boolean } | ProjectAuthMethodId,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { methodId: ProjectAuthMethodId, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('methodId' in paramsOrFirst || 'enabled' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: ProjectAuthMethodId, enabled: boolean };
        } else {
            params = {
                methodId: paramsOrFirst as ProjectAuthMethodId,
                enabled: rest[0] as boolean            
            };
        }
        
        const methodId = params.methodId;
        const enabled = params.enabled;

        if (typeof methodId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "methodId"');
        }
        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/auth-methods/{methodId}'.replace('{methodId}', methodId);
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
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
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
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
     * You can also create an ephemeral API key if you need a short-lived key instead.
     *
     * @param {string} params.keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {ProjectKeyScopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    createKey(params: { keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Create a new API key. It's recommended to have multiple API keys with strict scopes for separate functions within your project.
     * 
     * You can also create an ephemeral API key if you need a short-lived key instead.
     *
     * @param {string} keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {ProjectKeyScopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createKey(keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string): Promise<Models.Key>;
    createKey(
        paramsOrFirst: { keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string } | string,
        ...rest: [(string)?, (ProjectKeyScopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as ProjectKeyScopes[],
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new ephemeral API key. It's recommended to have multiple API keys with strict scopes for separate functions within your project.
     * 
     * You can also create a standard API key if you need a longer-lived key instead.
     *
     * @param {ProjectKeyScopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {number} params.duration - Time in seconds before ephemeral key expires. Maximum duration is 3600 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EphemeralKey>}
     */
    createEphemeralKey(params: { scopes: ProjectKeyScopes[], duration: number }): Promise<Models.EphemeralKey>;
    /**
     * Create a new ephemeral API key. It's recommended to have multiple API keys with strict scopes for separate functions within your project.
     * 
     * You can also create a standard API key if you need a longer-lived key instead.
     *
     * @param {ProjectKeyScopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {number} duration - Time in seconds before ephemeral key expires. Maximum duration is 3600 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EphemeralKey>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEphemeralKey(scopes: ProjectKeyScopes[], duration: number): Promise<Models.EphemeralKey>;
    createEphemeralKey(
        paramsOrFirst: { scopes: ProjectKeyScopes[], duration: number } | ProjectKeyScopes[],
        ...rest: [(number)?]    
    ): Promise<Models.EphemeralKey> {
        let params: { scopes: ProjectKeyScopes[], duration: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('scopes' in paramsOrFirst || 'duration' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { scopes: ProjectKeyScopes[], duration: number };
        } else {
            params = {
                scopes: paramsOrFirst as ProjectKeyScopes[],
                duration: rest[0] as number            
            };
        }
        
        const scopes = params.scopes;
        const duration = params.duration;

        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }
        if (typeof duration === 'undefined') {
            throw new AppwriteException('Missing required parameter: "duration"');
        }

        const apiPath = '/project/keys/ephemeral';
        const payload: Payload = {};
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof duration !== 'undefined') {
            payload['duration'] = duration;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
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
     * @param {ProjectKeyScopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    updateKey(params: { keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} keyId - Key ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {ProjectKeyScopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateKey(keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string): Promise<Models.Key>;
    updateKey(
        paramsOrFirst: { keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string } | string,
        ...rest: [(string)?, (ProjectKeyScopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string, name: string, scopes: ProjectKeyScopes[], expire?: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as ProjectKeyScopes[],
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a list of all mock phones in the project. This endpoint returns an array of all mock phones and their OTPs.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MockNumberList>}
     */
    listMockPhones(params?: { queries?: string[], total?: boolean }): Promise<Models.MockNumberList>;
    /**
     * Get a list of all mock phones in the project. This endpoint returns an array of all mock phones and their OTPs.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MockNumberList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMockPhones(queries?: string[], total?: boolean): Promise<Models.MockNumberList>;
    listMockPhones(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.MockNumberList> {
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


        const apiPath = '/project/mock-phones';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new mock phone for your project. Use this endpoint to register a mock phone number and its sign-in OTP for your testers.
     *
     * @param {string} params.number - Phone number to associate with the mock phone. Must be a valid E.164 formatted phone number.
     * @param {string} params.otp - One-time password (OTP) to associate with the mock phone. Must be a 6-digit numeric code.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MockNumber>}
     */
    createMockPhone(params: { number: string, otp: string }): Promise<Models.MockNumber>;
    /**
     * Create a new mock phone for your project. Use this endpoint to register a mock phone number and its sign-in OTP for your testers.
     *
     * @param {string} number - Phone number to associate with the mock phone. Must be a valid E.164 formatted phone number.
     * @param {string} otp - One-time password (OTP) to associate with the mock phone. Must be a 6-digit numeric code.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MockNumber>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMockPhone(number: string, otp: string): Promise<Models.MockNumber>;
    createMockPhone(
        paramsOrFirst: { number: string, otp: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MockNumber> {
        let params: { number: string, otp: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { number: string, otp: string };
        } else {
            params = {
                number: paramsOrFirst as string,
                otp: rest[0] as string            
            };
        }
        
        const number = params.number;
        const otp = params.otp;

        if (typeof number === 'undefined') {
            throw new AppwriteException('Missing required parameter: "number"');
        }
        if (typeof otp === 'undefined') {
            throw new AppwriteException('Missing required parameter: "otp"');
        }

        const apiPath = '/project/mock-phones';
        const payload: Payload = {};
        if (typeof number !== 'undefined') {
            payload['number'] = number;
        }
        if (typeof otp !== 'undefined') {
            payload['otp'] = otp;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a mock phone by its unique number. This endpoint returns the mock phone's OTP.
     *
     * @param {string} params.number - Phone number associated with the mock phone. Must be a valid E.164 formatted phone number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MockNumber>}
     */
    getMockPhone(params: { number: string }): Promise<Models.MockNumber>;
    /**
     * Get a mock phone by its unique number. This endpoint returns the mock phone's OTP.
     *
     * @param {string} number - Phone number associated with the mock phone. Must be a valid E.164 formatted phone number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MockNumber>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getMockPhone(number: string): Promise<Models.MockNumber>;
    getMockPhone(
        paramsOrFirst: { number: string } | string    
    ): Promise<Models.MockNumber> {
        let params: { number: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { number: string };
        } else {
            params = {
                number: paramsOrFirst as string            
            };
        }
        
        const number = params.number;

        if (typeof number === 'undefined') {
            throw new AppwriteException('Missing required parameter: "number"');
        }

        const apiPath = '/project/mock-phones/{number}'.replace('{number}', number);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update a mock phone by its unique number. Use this endpoint to update the mock phone's OTP.
     *
     * @param {string} params.number - Phone number associated with the mock phone. Must be a valid E.164 formatted phone number.
     * @param {string} params.otp - One-time password (OTP) to associate with the mock phone. Must be a 6-digit numeric code.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MockNumber>}
     */
    updateMockPhone(params: { number: string, otp: string }): Promise<Models.MockNumber>;
    /**
     * Update a mock phone by its unique number. Use this endpoint to update the mock phone's OTP.
     *
     * @param {string} number - Phone number associated with the mock phone. Must be a valid E.164 formatted phone number.
     * @param {string} otp - One-time password (OTP) to associate with the mock phone. Must be a 6-digit numeric code.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MockNumber>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMockPhone(number: string, otp: string): Promise<Models.MockNumber>;
    updateMockPhone(
        paramsOrFirst: { number: string, otp: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MockNumber> {
        let params: { number: string, otp: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { number: string, otp: string };
        } else {
            params = {
                number: paramsOrFirst as string,
                otp: rest[0] as string            
            };
        }
        
        const number = params.number;
        const otp = params.otp;

        if (typeof number === 'undefined') {
            throw new AppwriteException('Missing required parameter: "number"');
        }
        if (typeof otp === 'undefined') {
            throw new AppwriteException('Missing required parameter: "otp"');
        }

        const apiPath = '/project/mock-phones/{number}'.replace('{number}', number);
        const payload: Payload = {};
        if (typeof otp !== 'undefined') {
            payload['otp'] = otp;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a mock phone by its unique number. This endpoint removes the mock phone and its OTP configuration from the project.
     *
     * @param {string} params.number - Phone number associated with the mock phone. Must be a valid E.164 formatted phone number.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteMockPhone(params: { number: string }): Promise<{}>;
    /**
     * Delete a mock phone by its unique number. This endpoint removes the mock phone and its OTP configuration from the project.
     *
     * @param {string} number - Phone number associated with the mock phone. Must be a valid E.164 formatted phone number.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteMockPhone(number: string): Promise<{}>;
    deleteMockPhone(
        paramsOrFirst: { number: string } | string    
    ): Promise<{}> {
        let params: { number: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { number: string };
        } else {
            params = {
                number: paramsOrFirst as string            
            };
        }
        
        const number = params.number;

        if (typeof number === 'undefined') {
            throw new AppwriteException('Missing required parameter: "number"');
        }

        const apiPath = '/project/mock-phones/{number}'.replace('{number}', number);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
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
     * Get a list of all OAuth2 providers supported by the server, along with the project's configuration for each. Credential fields are write-only and always returned empty.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2ProviderList>}
     */
    listOAuth2Providers(params?: { queries?: string[], total?: boolean }): Promise<Models.OAuth2ProviderList>;
    /**
     * Get a list of all OAuth2 providers supported by the server, along with the project's configuration for each. Credential fields are write-only and always returned empty.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2ProviderList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listOAuth2Providers(queries?: string[], total?: boolean): Promise<Models.OAuth2ProviderList>;
    listOAuth2Providers(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.OAuth2ProviderList> {
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


        const apiPath = '/project/oauth2';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the OAuth2 server (OIDC provider) configuration.
     *
     * @param {boolean} params.enabled - Enable or disable the OAuth2 server.
     * @param {string} params.authorizationUrl - URL to your application with consent screen.
     * @param {string[]} params.scopes - List of allowed OAuth2 scopes. Maximum of 100 scopes are allowed, each up to 128 characters long.
     * @param {string[]} params.authorizationDetailsTypes - List of accepted `authorization_details` types. Maximum of 100 types are allowed, each up to 128 characters long.
     * @param {number} params.accessTokenDuration - Access token duration in seconds for confidential clients (server-side apps that authenticate with a client secret). Leave empty to use default 8 hours.
     * @param {number} params.refreshTokenDuration - Refresh token duration in seconds for confidential clients (server-side apps that authenticate with a client secret). Leave empty to use default 1 year.
     * @param {number} params.publicAccessTokenDuration - Access token duration in seconds for public clients (SPAs, mobile, and native apps that cannot keep a client secret). Leave empty to use default 1 hour.
     * @param {number} params.publicRefreshTokenDuration - Refresh token duration in seconds for public clients (SPAs, mobile, and native apps that cannot keep a client secret). Leave empty to use default 30 days.
     * @param {boolean} params.confidentialPkce - When enabled, PKCE is required for confidential clients (server-side flows using client_secret). PKCE is always required for public clients regardless of this setting.
     * @param {string} params.verificationUrl - URL to your application page where users enter the device flow user code. Required to enable the Device Authorization Grant.
     * @param {number} params.userCodeLength - Number of characters in the device flow user code, excluding the formatting separator. Shorter codes are easier to type but weaker; pair short codes with short expiry. Leave empty to use default 8.
     * @param {string} params.userCodeFormat - Character set for device flow user codes: `numeric` (digits only — best for numeric keypads and TV remotes), `alphabetic` (letters only), or `alphanumeric` (letters and digits — highest entropy per character). Defaults to `alphanumeric`.
     * @param {number} params.deviceCodeDuration - Lifetime in seconds of device flow device codes and user codes. Device codes are intentionally short-lived. Leave empty to use default 600.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateOAuth2Server(params: { enabled: boolean, authorizationUrl: string, scopes?: string[], authorizationDetailsTypes?: string[], accessTokenDuration?: number, refreshTokenDuration?: number, publicAccessTokenDuration?: number, publicRefreshTokenDuration?: number, confidentialPkce?: boolean, verificationUrl?: string, userCodeLength?: number, userCodeFormat?: string, deviceCodeDuration?: number }): Promise<Models.Project>;
    /**
     * Update the OAuth2 server (OIDC provider) configuration.
     *
     * @param {boolean} enabled - Enable or disable the OAuth2 server.
     * @param {string} authorizationUrl - URL to your application with consent screen.
     * @param {string[]} scopes - List of allowed OAuth2 scopes. Maximum of 100 scopes are allowed, each up to 128 characters long.
     * @param {string[]} authorizationDetailsTypes - List of accepted `authorization_details` types. Maximum of 100 types are allowed, each up to 128 characters long.
     * @param {number} accessTokenDuration - Access token duration in seconds for confidential clients (server-side apps that authenticate with a client secret). Leave empty to use default 8 hours.
     * @param {number} refreshTokenDuration - Refresh token duration in seconds for confidential clients (server-side apps that authenticate with a client secret). Leave empty to use default 1 year.
     * @param {number} publicAccessTokenDuration - Access token duration in seconds for public clients (SPAs, mobile, and native apps that cannot keep a client secret). Leave empty to use default 1 hour.
     * @param {number} publicRefreshTokenDuration - Refresh token duration in seconds for public clients (SPAs, mobile, and native apps that cannot keep a client secret). Leave empty to use default 30 days.
     * @param {boolean} confidentialPkce - When enabled, PKCE is required for confidential clients (server-side flows using client_secret). PKCE is always required for public clients regardless of this setting.
     * @param {string} verificationUrl - URL to your application page where users enter the device flow user code. Required to enable the Device Authorization Grant.
     * @param {number} userCodeLength - Number of characters in the device flow user code, excluding the formatting separator. Shorter codes are easier to type but weaker; pair short codes with short expiry. Leave empty to use default 8.
     * @param {string} userCodeFormat - Character set for device flow user codes: `numeric` (digits only — best for numeric keypads and TV remotes), `alphabetic` (letters only), or `alphanumeric` (letters and digits — highest entropy per character). Defaults to `alphanumeric`.
     * @param {number} deviceCodeDuration - Lifetime in seconds of device flow device codes and user codes. Device codes are intentionally short-lived. Leave empty to use default 600.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Server(enabled: boolean, authorizationUrl: string, scopes?: string[], authorizationDetailsTypes?: string[], accessTokenDuration?: number, refreshTokenDuration?: number, publicAccessTokenDuration?: number, publicRefreshTokenDuration?: number, confidentialPkce?: boolean, verificationUrl?: string, userCodeLength?: number, userCodeFormat?: string, deviceCodeDuration?: number): Promise<Models.Project>;
    updateOAuth2Server(
        paramsOrFirst: { enabled: boolean, authorizationUrl: string, scopes?: string[], authorizationDetailsTypes?: string[], accessTokenDuration?: number, refreshTokenDuration?: number, publicAccessTokenDuration?: number, publicRefreshTokenDuration?: number, confidentialPkce?: boolean, verificationUrl?: string, userCodeLength?: number, userCodeFormat?: string, deviceCodeDuration?: number } | boolean,
        ...rest: [(string)?, (string[])?, (string[])?, (number)?, (number)?, (number)?, (number)?, (boolean)?, (string)?, (number)?, (string)?, (number)?]    
    ): Promise<Models.Project> {
        let params: { enabled: boolean, authorizationUrl: string, scopes?: string[], authorizationDetailsTypes?: string[], accessTokenDuration?: number, refreshTokenDuration?: number, publicAccessTokenDuration?: number, publicRefreshTokenDuration?: number, confidentialPkce?: boolean, verificationUrl?: string, userCodeLength?: number, userCodeFormat?: string, deviceCodeDuration?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean, authorizationUrl: string, scopes?: string[], authorizationDetailsTypes?: string[], accessTokenDuration?: number, refreshTokenDuration?: number, publicAccessTokenDuration?: number, publicRefreshTokenDuration?: number, confidentialPkce?: boolean, verificationUrl?: string, userCodeLength?: number, userCodeFormat?: string, deviceCodeDuration?: number };
        } else {
            params = {
                enabled: paramsOrFirst as boolean,
                authorizationUrl: rest[0] as string,
                scopes: rest[1] as string[],
                authorizationDetailsTypes: rest[2] as string[],
                accessTokenDuration: rest[3] as number,
                refreshTokenDuration: rest[4] as number,
                publicAccessTokenDuration: rest[5] as number,
                publicRefreshTokenDuration: rest[6] as number,
                confidentialPkce: rest[7] as boolean,
                verificationUrl: rest[8] as string,
                userCodeLength: rest[9] as number,
                userCodeFormat: rest[10] as string,
                deviceCodeDuration: rest[11] as number            
            };
        }
        
        const enabled = params.enabled;
        const authorizationUrl = params.authorizationUrl;
        const scopes = params.scopes;
        const authorizationDetailsTypes = params.authorizationDetailsTypes;
        const accessTokenDuration = params.accessTokenDuration;
        const refreshTokenDuration = params.refreshTokenDuration;
        const publicAccessTokenDuration = params.publicAccessTokenDuration;
        const publicRefreshTokenDuration = params.publicRefreshTokenDuration;
        const confidentialPkce = params.confidentialPkce;
        const verificationUrl = params.verificationUrl;
        const userCodeLength = params.userCodeLength;
        const userCodeFormat = params.userCodeFormat;
        const deviceCodeDuration = params.deviceCodeDuration;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }
        if (typeof authorizationUrl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "authorizationUrl"');
        }

        const apiPath = '/project/oauth2-server';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof authorizationUrl !== 'undefined') {
            payload['authorizationUrl'] = authorizationUrl;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof authorizationDetailsTypes !== 'undefined') {
            payload['authorizationDetailsTypes'] = authorizationDetailsTypes;
        }
        if (typeof accessTokenDuration !== 'undefined') {
            payload['accessTokenDuration'] = accessTokenDuration;
        }
        if (typeof refreshTokenDuration !== 'undefined') {
            payload['refreshTokenDuration'] = refreshTokenDuration;
        }
        if (typeof publicAccessTokenDuration !== 'undefined') {
            payload['publicAccessTokenDuration'] = publicAccessTokenDuration;
        }
        if (typeof publicRefreshTokenDuration !== 'undefined') {
            payload['publicRefreshTokenDuration'] = publicRefreshTokenDuration;
        }
        if (typeof confidentialPkce !== 'undefined') {
            payload['confidentialPkce'] = confidentialPkce;
        }
        if (typeof verificationUrl !== 'undefined') {
            payload['verificationUrl'] = verificationUrl;
        }
        if (typeof userCodeLength !== 'undefined') {
            payload['userCodeLength'] = userCodeLength;
        }
        if (typeof userCodeFormat !== 'undefined') {
            payload['userCodeFormat'] = userCodeFormat;
        }
        if (typeof deviceCodeDuration !== 'undefined') {
            payload['deviceCodeDuration'] = deviceCodeDuration;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Amazon configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Amazon OAuth2 app. For example: amzn1.application-oa2-client.87400c00000000000000000000063d5b2
     * @param {string} params.clientSecret - 'Client Secret' of Amazon OAuth2 app. For example: 79ffe4000000000000000000000000000000000000000000000000000002de55
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Amazon>}
     */
    updateOAuth2Amazon(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Amazon>;
    /**
     * Update the project OAuth2 Amazon configuration.
     *
     * @param {string} clientId - 'Client ID' of Amazon OAuth2 app. For example: amzn1.application-oa2-client.87400c00000000000000000000063d5b2
     * @param {string} clientSecret - 'Client Secret' of Amazon OAuth2 app. For example: 79ffe4000000000000000000000000000000000000000000000000000002de55
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Amazon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Amazon(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Amazon>;
    updateOAuth2Amazon(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Amazon> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/amazon';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Apple configuration.
     *
     * @param {string} params.serviceId - 'Service ID' of Apple OAuth2 app. For example: ip.appwrite.app.web
     * @param {string} params.keyId - 'Key ID' of Apple OAuth2 app. For example: P4000000N8
     * @param {string} params.teamId - 'Team ID' of Apple OAuth2 app. For example: D4000000R6
     * @param {string} params.p8File - Contents of the Apple OAuth2 app .p8 private key file. The secret key wrapped by the PEM markers is 200 characters long. For example: -----BEGIN PRIVATE KEY-----MIGTAg...jy2Xbna-----END PRIVATE KEY-----
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Apple>}
     */
    updateOAuth2Apple(params?: { serviceId?: string, keyId?: string, teamId?: string, p8File?: string, enabled?: boolean }): Promise<Models.OAuth2Apple>;
    /**
     * Update the project OAuth2 Apple configuration.
     *
     * @param {string} serviceId - 'Service ID' of Apple OAuth2 app. For example: ip.appwrite.app.web
     * @param {string} keyId - 'Key ID' of Apple OAuth2 app. For example: P4000000N8
     * @param {string} teamId - 'Team ID' of Apple OAuth2 app. For example: D4000000R6
     * @param {string} p8File - Contents of the Apple OAuth2 app .p8 private key file. The secret key wrapped by the PEM markers is 200 characters long. For example: -----BEGIN PRIVATE KEY-----MIGTAg...jy2Xbna-----END PRIVATE KEY-----
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Apple>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Apple(serviceId?: string, keyId?: string, teamId?: string, p8File?: string, enabled?: boolean): Promise<Models.OAuth2Apple>;
    updateOAuth2Apple(
        paramsOrFirst?: { serviceId?: string, keyId?: string, teamId?: string, p8File?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.OAuth2Apple> {
        let params: { serviceId?: string, keyId?: string, teamId?: string, p8File?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { serviceId?: string, keyId?: string, teamId?: string, p8File?: string, enabled?: boolean };
        } else {
            params = {
                serviceId: paramsOrFirst as string,
                keyId: rest[0] as string,
                teamId: rest[1] as string,
                p8File: rest[2] as string,
                enabled: rest[3] as boolean            
            };
        }
        
        const serviceId = params.serviceId;
        const keyId = params.keyId;
        const teamId = params.teamId;
        const p8File = params.p8File;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/apple';
        const payload: Payload = {};
        if (typeof serviceId !== 'undefined') {
            payload['serviceId'] = serviceId;
        }
        if (typeof keyId !== 'undefined') {
            payload['keyId'] = keyId;
        }
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }
        if (typeof p8File !== 'undefined') {
            payload['p8File'] = p8File;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Auth0 configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Auth0 OAuth2 app. For example: OaOkIA000000000000000000005KLSYq
     * @param {string} params.clientSecret - 'Client Secret' of Auth0 OAuth2 app. For example: zXz0000-00000000000000000000000000000-00000000000000000000PJafnF
     * @param {string} params.endpoint - Domain of Auth0 instance. For example: example.us.auth0.com
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Auth0>}
     */
    updateOAuth2Auth0(params?: { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean }): Promise<Models.OAuth2Auth0>;
    /**
     * Update the project OAuth2 Auth0 configuration.
     *
     * @param {string} clientId - 'Client ID' of Auth0 OAuth2 app. For example: OaOkIA000000000000000000005KLSYq
     * @param {string} clientSecret - 'Client Secret' of Auth0 OAuth2 app. For example: zXz0000-00000000000000000000000000000-00000000000000000000PJafnF
     * @param {string} endpoint - Domain of Auth0 instance. For example: example.us.auth0.com
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Auth0>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Auth0(clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean): Promise<Models.OAuth2Auth0>;
    updateOAuth2Auth0(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.OAuth2Auth0> {
        let params: { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                endpoint: rest[1] as string,
                enabled: rest[2] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const endpoint = params.endpoint;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/auth0';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Authentik configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Authentik OAuth2 app. For example: dTKOPa0000000000000000000000000000e7G8hv
     * @param {string} params.clientSecret - 'Client Secret' of Authentik OAuth2 app. For example: ntQadq000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000Hp5WK
     * @param {string} params.endpoint - Domain of Authentik instance. For example: example.authentik.com
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Authentik>}
     */
    updateOAuth2Authentik(params?: { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean }): Promise<Models.OAuth2Authentik>;
    /**
     * Update the project OAuth2 Authentik configuration.
     *
     * @param {string} clientId - 'Client ID' of Authentik OAuth2 app. For example: dTKOPa0000000000000000000000000000e7G8hv
     * @param {string} clientSecret - 'Client Secret' of Authentik OAuth2 app. For example: ntQadq000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000Hp5WK
     * @param {string} endpoint - Domain of Authentik instance. For example: example.authentik.com
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Authentik>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Authentik(clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean): Promise<Models.OAuth2Authentik>;
    updateOAuth2Authentik(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.OAuth2Authentik> {
        let params: { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                endpoint: rest[1] as string,
                enabled: rest[2] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const endpoint = params.endpoint;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/authentik';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Autodesk configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Autodesk OAuth2 app. For example: 5zw90v00000000000000000000kVYXN7
     * @param {string} params.clientSecret - 'Client Secret' of Autodesk OAuth2 app. For example: 7I000000000000MW
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Autodesk>}
     */
    updateOAuth2Autodesk(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Autodesk>;
    /**
     * Update the project OAuth2 Autodesk configuration.
     *
     * @param {string} clientId - 'Client ID' of Autodesk OAuth2 app. For example: 5zw90v00000000000000000000kVYXN7
     * @param {string} clientSecret - 'Client Secret' of Autodesk OAuth2 app. For example: 7I000000000000MW
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Autodesk>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Autodesk(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Autodesk>;
    updateOAuth2Autodesk(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Autodesk> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/autodesk';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Bitbucket configuration.
     *
     * @param {string} params.key - 'Key' of Bitbucket OAuth2 app. For example: Knt70000000000ByRc
     * @param {string} params.secret - 'Secret' of Bitbucket OAuth2 app. For example: NMfLZJ00000000000000000000TLQdDx
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Bitbucket>}
     */
    updateOAuth2Bitbucket(params?: { key?: string, secret?: string, enabled?: boolean }): Promise<Models.OAuth2Bitbucket>;
    /**
     * Update the project OAuth2 Bitbucket configuration.
     *
     * @param {string} key - 'Key' of Bitbucket OAuth2 app. For example: Knt70000000000ByRc
     * @param {string} secret - 'Secret' of Bitbucket OAuth2 app. For example: NMfLZJ00000000000000000000TLQdDx
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Bitbucket>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Bitbucket(key?: string, secret?: string, enabled?: boolean): Promise<Models.OAuth2Bitbucket>;
    updateOAuth2Bitbucket(
        paramsOrFirst?: { key?: string, secret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Bitbucket> {
        let params: { key?: string, secret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { key?: string, secret?: string, enabled?: boolean };
        } else {
            params = {
                key: paramsOrFirst as string,
                secret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const key = params.key;
        const secret = params.secret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/bitbucket';
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Bitly configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Bitly OAuth2 app. For example: d95151000000000000000000000000000067af9b
     * @param {string} params.clientSecret - 'Client Secret' of Bitly OAuth2 app. For example: a13e250000000000000000000000000000d73095
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Bitly>}
     */
    updateOAuth2Bitly(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Bitly>;
    /**
     * Update the project OAuth2 Bitly configuration.
     *
     * @param {string} clientId - 'Client ID' of Bitly OAuth2 app. For example: d95151000000000000000000000000000067af9b
     * @param {string} clientSecret - 'Client Secret' of Bitly OAuth2 app. For example: a13e250000000000000000000000000000d73095
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Bitly>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Bitly(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Bitly>;
    updateOAuth2Bitly(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Bitly> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/bitly';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Box configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Box OAuth2 app. For example: deglcs00000000000000000000x2og6y
     * @param {string} params.clientSecret - 'Client Secret' of Box OAuth2 app. For example: OKM1f100000000000000000000eshEif
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Box>}
     */
    updateOAuth2Box(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Box>;
    /**
     * Update the project OAuth2 Box configuration.
     *
     * @param {string} clientId - 'Client ID' of Box OAuth2 app. For example: deglcs00000000000000000000x2og6y
     * @param {string} clientSecret - 'Client Secret' of Box OAuth2 app. For example: OKM1f100000000000000000000eshEif
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Box>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Box(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Box>;
    updateOAuth2Box(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Box> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/box';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Dailymotion configuration.
     *
     * @param {string} params.apiKey - 'API Key' of Dailymotion OAuth2 app. For example: 07a9000000000000067f
     * @param {string} params.apiSecret - 'API Secret' of Dailymotion OAuth2 app. For example: a399a90000000000000000000000000000d90639
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Dailymotion>}
     */
    updateOAuth2Dailymotion(params?: { apiKey?: string, apiSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Dailymotion>;
    /**
     * Update the project OAuth2 Dailymotion configuration.
     *
     * @param {string} apiKey - 'API Key' of Dailymotion OAuth2 app. For example: 07a9000000000000067f
     * @param {string} apiSecret - 'API Secret' of Dailymotion OAuth2 app. For example: a399a90000000000000000000000000000d90639
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Dailymotion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Dailymotion(apiKey?: string, apiSecret?: string, enabled?: boolean): Promise<Models.OAuth2Dailymotion>;
    updateOAuth2Dailymotion(
        paramsOrFirst?: { apiKey?: string, apiSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Dailymotion> {
        let params: { apiKey?: string, apiSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { apiKey?: string, apiSecret?: string, enabled?: boolean };
        } else {
            params = {
                apiKey: paramsOrFirst as string,
                apiSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const apiKey = params.apiKey;
        const apiSecret = params.apiSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/dailymotion';
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof apiSecret !== 'undefined') {
            payload['apiSecret'] = apiSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Discord configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Discord OAuth2 app. For example: 950722000000343754
     * @param {string} params.clientSecret - 'Client Secret' of Discord OAuth2 app. For example: YmPXnM000000000000000000002zFg5D
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Discord>}
     */
    updateOAuth2Discord(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Discord>;
    /**
     * Update the project OAuth2 Discord configuration.
     *
     * @param {string} clientId - 'Client ID' of Discord OAuth2 app. For example: 950722000000343754
     * @param {string} clientSecret - 'Client Secret' of Discord OAuth2 app. For example: YmPXnM000000000000000000002zFg5D
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Discord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Discord(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Discord>;
    updateOAuth2Discord(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Discord> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/discord';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Disqus configuration.
     *
     * @param {string} params.publicKey - 'Public Key, also known as API Key' of Disqus OAuth2 app. For example: cgegH70000000000000000000000000000000000000000000000000000Hr1nYX
     * @param {string} params.secretKey - 'Secret Key, also known as API Secret' of Disqus OAuth2 app. For example: W7Bykj00000000000000000000000000000000000000000000000000003o43w9
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Disqus>}
     */
    updateOAuth2Disqus(params?: { publicKey?: string, secretKey?: string, enabled?: boolean }): Promise<Models.OAuth2Disqus>;
    /**
     * Update the project OAuth2 Disqus configuration.
     *
     * @param {string} publicKey - 'Public Key, also known as API Key' of Disqus OAuth2 app. For example: cgegH70000000000000000000000000000000000000000000000000000Hr1nYX
     * @param {string} secretKey - 'Secret Key, also known as API Secret' of Disqus OAuth2 app. For example: W7Bykj00000000000000000000000000000000000000000000000000003o43w9
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Disqus>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Disqus(publicKey?: string, secretKey?: string, enabled?: boolean): Promise<Models.OAuth2Disqus>;
    updateOAuth2Disqus(
        paramsOrFirst?: { publicKey?: string, secretKey?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Disqus> {
        let params: { publicKey?: string, secretKey?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { publicKey?: string, secretKey?: string, enabled?: boolean };
        } else {
            params = {
                publicKey: paramsOrFirst as string,
                secretKey: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const publicKey = params.publicKey;
        const secretKey = params.secretKey;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/disqus';
        const payload: Payload = {};
        if (typeof publicKey !== 'undefined') {
            payload['publicKey'] = publicKey;
        }
        if (typeof secretKey !== 'undefined') {
            payload['secretKey'] = secretKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Dropbox configuration.
     *
     * @param {string} params.appKey - 'App Key' of Dropbox OAuth2 app. For example: jl000000000009t
     * @param {string} params.appSecret - 'App Secret' of Dropbox OAuth2 app. For example: g200000000000vw
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Dropbox>}
     */
    updateOAuth2Dropbox(params?: { appKey?: string, appSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Dropbox>;
    /**
     * Update the project OAuth2 Dropbox configuration.
     *
     * @param {string} appKey - 'App Key' of Dropbox OAuth2 app. For example: jl000000000009t
     * @param {string} appSecret - 'App Secret' of Dropbox OAuth2 app. For example: g200000000000vw
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Dropbox>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Dropbox(appKey?: string, appSecret?: string, enabled?: boolean): Promise<Models.OAuth2Dropbox>;
    updateOAuth2Dropbox(
        paramsOrFirst?: { appKey?: string, appSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Dropbox> {
        let params: { appKey?: string, appSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { appKey?: string, appSecret?: string, enabled?: boolean };
        } else {
            params = {
                appKey: paramsOrFirst as string,
                appSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const appKey = params.appKey;
        const appSecret = params.appSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/dropbox';
        const payload: Payload = {};
        if (typeof appKey !== 'undefined') {
            payload['appKey'] = appKey;
        }
        if (typeof appSecret !== 'undefined') {
            payload['appSecret'] = appSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Etsy configuration.
     *
     * @param {string} params.keyString - 'Keystring' of Etsy OAuth2 app. For example: nsgzxh0000000000008j85a2
     * @param {string} params.sharedSecret - 'Shared Secret' of Etsy OAuth2 app. For example: tp000000ru
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Etsy>}
     */
    updateOAuth2Etsy(params?: { keyString?: string, sharedSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Etsy>;
    /**
     * Update the project OAuth2 Etsy configuration.
     *
     * @param {string} keyString - 'Keystring' of Etsy OAuth2 app. For example: nsgzxh0000000000008j85a2
     * @param {string} sharedSecret - 'Shared Secret' of Etsy OAuth2 app. For example: tp000000ru
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Etsy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Etsy(keyString?: string, sharedSecret?: string, enabled?: boolean): Promise<Models.OAuth2Etsy>;
    updateOAuth2Etsy(
        paramsOrFirst?: { keyString?: string, sharedSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Etsy> {
        let params: { keyString?: string, sharedSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyString?: string, sharedSecret?: string, enabled?: boolean };
        } else {
            params = {
                keyString: paramsOrFirst as string,
                sharedSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const keyString = params.keyString;
        const sharedSecret = params.sharedSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/etsy';
        const payload: Payload = {};
        if (typeof keyString !== 'undefined') {
            payload['keyString'] = keyString;
        }
        if (typeof sharedSecret !== 'undefined') {
            payload['sharedSecret'] = sharedSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Facebook configuration.
     *
     * @param {string} params.appId - 'App ID' of Facebook OAuth2 app. For example: 260600000007694
     * @param {string} params.appSecret - 'App Secret' of Facebook OAuth2 app. For example: 2d0b2800000000000000000000d38af4
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Facebook>}
     */
    updateOAuth2Facebook(params?: { appId?: string, appSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Facebook>;
    /**
     * Update the project OAuth2 Facebook configuration.
     *
     * @param {string} appId - 'App ID' of Facebook OAuth2 app. For example: 260600000007694
     * @param {string} appSecret - 'App Secret' of Facebook OAuth2 app. For example: 2d0b2800000000000000000000d38af4
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Facebook>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Facebook(appId?: string, appSecret?: string, enabled?: boolean): Promise<Models.OAuth2Facebook>;
    updateOAuth2Facebook(
        paramsOrFirst?: { appId?: string, appSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Facebook> {
        let params: { appId?: string, appSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { appId?: string, appSecret?: string, enabled?: boolean };
        } else {
            params = {
                appId: paramsOrFirst as string,
                appSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const appId = params.appId;
        const appSecret = params.appSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/facebook';
        const payload: Payload = {};
        if (typeof appId !== 'undefined') {
            payload['appId'] = appId;
        }
        if (typeof appSecret !== 'undefined') {
            payload['appSecret'] = appSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Figma configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Figma OAuth2 app. For example: byay5H0000000000VtiI40
     * @param {string} params.clientSecret - 'Client Secret' of Figma OAuth2 app. For example: yEpOYn0000000000000000004iIsU5
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Figma>}
     */
    updateOAuth2Figma(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Figma>;
    /**
     * Update the project OAuth2 Figma configuration.
     *
     * @param {string} clientId - 'Client ID' of Figma OAuth2 app. For example: byay5H0000000000VtiI40
     * @param {string} clientSecret - 'Client Secret' of Figma OAuth2 app. For example: yEpOYn0000000000000000004iIsU5
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Figma>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Figma(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Figma>;
    updateOAuth2Figma(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Figma> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/figma';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 FusionAuth configuration.
     *
     * @param {string} params.clientId - 'Client ID' of FusionAuth OAuth2 app. For example: b2222c00-0000-0000-0000-000000862097
     * @param {string} params.clientSecret - 'Client Secret' of FusionAuth OAuth2 app. For example: Jx4s0C0000000000000000000000000000000wGqLsc
     * @param {string} params.endpoint - Domain of FusionAuth instance. For example: example.fusionauth.io
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2FusionAuth>}
     */
    updateOAuth2FusionAuth(params?: { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean }): Promise<Models.OAuth2FusionAuth>;
    /**
     * Update the project OAuth2 FusionAuth configuration.
     *
     * @param {string} clientId - 'Client ID' of FusionAuth OAuth2 app. For example: b2222c00-0000-0000-0000-000000862097
     * @param {string} clientSecret - 'Client Secret' of FusionAuth OAuth2 app. For example: Jx4s0C0000000000000000000000000000000wGqLsc
     * @param {string} endpoint - Domain of FusionAuth instance. For example: example.fusionauth.io
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2FusionAuth>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2FusionAuth(clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean): Promise<Models.OAuth2FusionAuth>;
    updateOAuth2FusionAuth(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.OAuth2FusionAuth> {
        let params: { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, endpoint?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                endpoint: rest[1] as string,
                enabled: rest[2] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const endpoint = params.endpoint;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/fusionauth';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 GitHub configuration.
     *
     * @param {string} params.clientId - 'OAuth2 app Client ID, or App ID' of GitHub OAuth2 app. For example: e4d87900000000540733. Example of wrong value: 370006
     * @param {string} params.clientSecret - 'Client Secret' of GitHub OAuth2 app. For example: 5e07c00000000000000000000000000000198bcc
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Github>}
     */
    updateOAuth2GitHub(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Github>;
    /**
     * Update the project OAuth2 GitHub configuration.
     *
     * @param {string} clientId - 'OAuth2 app Client ID, or App ID' of GitHub OAuth2 app. For example: e4d87900000000540733. Example of wrong value: 370006
     * @param {string} clientSecret - 'Client Secret' of GitHub OAuth2 app. For example: 5e07c00000000000000000000000000000198bcc
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Github>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2GitHub(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Github>;
    updateOAuth2GitHub(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Github> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/github';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Gitlab configuration.
     *
     * @param {string} params.applicationId - 'Application ID' of Gitlab OAuth2 app. For example: d41ffe0000000000000000000000000000000000000000000000000000d5e252
     * @param {string} params.secret - 'Secret' of Gitlab OAuth2 app. For example: gloas-838cfa0000000000000000000000000000000000000000000000000000ecbb38
     * @param {string} params.endpoint - Endpoint URL of self-hosted GitLab instance. For example: https://gitlab.com
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Gitlab>}
     */
    updateOAuth2Gitlab(params?: { applicationId?: string, secret?: string, endpoint?: string, enabled?: boolean }): Promise<Models.OAuth2Gitlab>;
    /**
     * Update the project OAuth2 Gitlab configuration.
     *
     * @param {string} applicationId - 'Application ID' of Gitlab OAuth2 app. For example: d41ffe0000000000000000000000000000000000000000000000000000d5e252
     * @param {string} secret - 'Secret' of Gitlab OAuth2 app. For example: gloas-838cfa0000000000000000000000000000000000000000000000000000ecbb38
     * @param {string} endpoint - Endpoint URL of self-hosted GitLab instance. For example: https://gitlab.com
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Gitlab>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Gitlab(applicationId?: string, secret?: string, endpoint?: string, enabled?: boolean): Promise<Models.OAuth2Gitlab>;
    updateOAuth2Gitlab(
        paramsOrFirst?: { applicationId?: string, secret?: string, endpoint?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.OAuth2Gitlab> {
        let params: { applicationId?: string, secret?: string, endpoint?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { applicationId?: string, secret?: string, endpoint?: string, enabled?: boolean };
        } else {
            params = {
                applicationId: paramsOrFirst as string,
                secret: rest[0] as string,
                endpoint: rest[1] as string,
                enabled: rest[2] as boolean            
            };
        }
        
        const applicationId = params.applicationId;
        const secret = params.secret;
        const endpoint = params.endpoint;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/gitlab';
        const payload: Payload = {};
        if (typeof applicationId !== 'undefined') {
            payload['applicationId'] = applicationId;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Google configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Google OAuth2 app. For example: 120000000095-92ifjb00000000000000000000g7ijfb.apps.googleusercontent.com
     * @param {string} params.clientSecret - 'Client Secret' of Google OAuth2 app. For example: GOCSPX-2k8gsR0000000000000000VNahJj
     * @param {ProjectOAuth2GooglePrompt[]} params.prompt - Array of Google OAuth2 prompt values. If "none" is included, it must be the only element. "none" means: don't display any authentication or consent screens. Must not be specified with other values. "consent" means: prompt the user for consent. "select_account" means: prompt the user to select an account.
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Google>}
     */
    updateOAuth2Google(params?: { clientId?: string, clientSecret?: string, prompt?: ProjectOAuth2GooglePrompt[], enabled?: boolean }): Promise<Models.OAuth2Google>;
    /**
     * Update the project OAuth2 Google configuration.
     *
     * @param {string} clientId - 'Client ID' of Google OAuth2 app. For example: 120000000095-92ifjb00000000000000000000g7ijfb.apps.googleusercontent.com
     * @param {string} clientSecret - 'Client Secret' of Google OAuth2 app. For example: GOCSPX-2k8gsR0000000000000000VNahJj
     * @param {ProjectOAuth2GooglePrompt[]} prompt - Array of Google OAuth2 prompt values. If "none" is included, it must be the only element. "none" means: don't display any authentication or consent screens. Must not be specified with other values. "consent" means: prompt the user for consent. "select_account" means: prompt the user to select an account.
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Google>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Google(clientId?: string, clientSecret?: string, prompt?: ProjectOAuth2GooglePrompt[], enabled?: boolean): Promise<Models.OAuth2Google>;
    updateOAuth2Google(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, prompt?: ProjectOAuth2GooglePrompt[], enabled?: boolean } | string,
        ...rest: [(string)?, (ProjectOAuth2GooglePrompt[])?, (boolean)?]    
    ): Promise<Models.OAuth2Google> {
        let params: { clientId?: string, clientSecret?: string, prompt?: ProjectOAuth2GooglePrompt[], enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, prompt?: ProjectOAuth2GooglePrompt[], enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                prompt: rest[1] as ProjectOAuth2GooglePrompt[],
                enabled: rest[2] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const prompt = params.prompt;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/google';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof prompt !== 'undefined') {
            payload['prompt'] = prompt;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Keycloak configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Keycloak OAuth2 app. For example: appwrite-o0000000st-app
     * @param {string} params.clientSecret - 'Client Secret' of Keycloak OAuth2 app. For example: jdjrJd00000000000000000000HUsaZO
     * @param {string} params.endpoint - Domain of Keycloak instance. For example: keycloak.example.com
     * @param {string} params.realmName - Keycloak realm name. For example: appwrite-realm
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Keycloak>}
     */
    updateOAuth2Keycloak(params?: { clientId?: string, clientSecret?: string, endpoint?: string, realmName?: string, enabled?: boolean }): Promise<Models.OAuth2Keycloak>;
    /**
     * Update the project OAuth2 Keycloak configuration.
     *
     * @param {string} clientId - 'Client ID' of Keycloak OAuth2 app. For example: appwrite-o0000000st-app
     * @param {string} clientSecret - 'Client Secret' of Keycloak OAuth2 app. For example: jdjrJd00000000000000000000HUsaZO
     * @param {string} endpoint - Domain of Keycloak instance. For example: keycloak.example.com
     * @param {string} realmName - Keycloak realm name. For example: appwrite-realm
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Keycloak>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Keycloak(clientId?: string, clientSecret?: string, endpoint?: string, realmName?: string, enabled?: boolean): Promise<Models.OAuth2Keycloak>;
    updateOAuth2Keycloak(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, endpoint?: string, realmName?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.OAuth2Keycloak> {
        let params: { clientId?: string, clientSecret?: string, endpoint?: string, realmName?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, endpoint?: string, realmName?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                endpoint: rest[1] as string,
                realmName: rest[2] as string,
                enabled: rest[3] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const endpoint = params.endpoint;
        const realmName = params.realmName;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/keycloak';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof realmName !== 'undefined') {
            payload['realmName'] = realmName;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Kick configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Kick OAuth2 app. For example: 01KQ7C00000000000001MFHS32
     * @param {string} params.clientSecret - 'Client Secret' of Kick OAuth2 app. For example: 34ac5600000000000000000000000000000000000000000000000000e830c8b
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Kick>}
     */
    updateOAuth2Kick(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Kick>;
    /**
     * Update the project OAuth2 Kick configuration.
     *
     * @param {string} clientId - 'Client ID' of Kick OAuth2 app. For example: 01KQ7C00000000000001MFHS32
     * @param {string} clientSecret - 'Client Secret' of Kick OAuth2 app. For example: 34ac5600000000000000000000000000000000000000000000000000e830c8b
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Kick>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Kick(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Kick>;
    updateOAuth2Kick(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Kick> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/kick';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Linkedin configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Linkedin OAuth2 app. For example: 770000000000dv
     * @param {string} params.primaryClientSecret - 'Primary Client Secret or Secondary Client Secret' of Linkedin OAuth2 app. For example: WPL_AP1.2Bf0000000000000./HtlYw==
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Linkedin>}
     */
    updateOAuth2Linkedin(params?: { clientId?: string, primaryClientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Linkedin>;
    /**
     * Update the project OAuth2 Linkedin configuration.
     *
     * @param {string} clientId - 'Client ID' of Linkedin OAuth2 app. For example: 770000000000dv
     * @param {string} primaryClientSecret - 'Primary Client Secret or Secondary Client Secret' of Linkedin OAuth2 app. For example: WPL_AP1.2Bf0000000000000./HtlYw==
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Linkedin>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Linkedin(clientId?: string, primaryClientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Linkedin>;
    updateOAuth2Linkedin(
        paramsOrFirst?: { clientId?: string, primaryClientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Linkedin> {
        let params: { clientId?: string, primaryClientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, primaryClientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                primaryClientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const primaryClientSecret = params.primaryClientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/linkedin';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof primaryClientSecret !== 'undefined') {
            payload['primaryClientSecret'] = primaryClientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Microsoft configuration.
     *
     * @param {string} params.applicationId - 'Entra ID Application ID, also known as Client ID' of Microsoft OAuth2 app. For example: 00001111-aaaa-2222-bbbb-3333cccc4444
     * @param {string} params.applicationSecret - 'Entra ID Application Secret, also known as Client Secret' of Microsoft OAuth2 app. For example: A1bC2dE3fH4iJ5kL6mN7oP8qR9sT0u
     * @param {string} params.tenant - Microsoft Entra ID tenant identifier. Use 'common', 'organizations', 'consumers' or a specific tenant ID. For example: common
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Microsoft>}
     */
    updateOAuth2Microsoft(params?: { applicationId?: string, applicationSecret?: string, tenant?: string, enabled?: boolean }): Promise<Models.OAuth2Microsoft>;
    /**
     * Update the project OAuth2 Microsoft configuration.
     *
     * @param {string} applicationId - 'Entra ID Application ID, also known as Client ID' of Microsoft OAuth2 app. For example: 00001111-aaaa-2222-bbbb-3333cccc4444
     * @param {string} applicationSecret - 'Entra ID Application Secret, also known as Client Secret' of Microsoft OAuth2 app. For example: A1bC2dE3fH4iJ5kL6mN7oP8qR9sT0u
     * @param {string} tenant - Microsoft Entra ID tenant identifier. Use 'common', 'organizations', 'consumers' or a specific tenant ID. For example: common
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Microsoft>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Microsoft(applicationId?: string, applicationSecret?: string, tenant?: string, enabled?: boolean): Promise<Models.OAuth2Microsoft>;
    updateOAuth2Microsoft(
        paramsOrFirst?: { applicationId?: string, applicationSecret?: string, tenant?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.OAuth2Microsoft> {
        let params: { applicationId?: string, applicationSecret?: string, tenant?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { applicationId?: string, applicationSecret?: string, tenant?: string, enabled?: boolean };
        } else {
            params = {
                applicationId: paramsOrFirst as string,
                applicationSecret: rest[0] as string,
                tenant: rest[1] as string,
                enabled: rest[2] as boolean            
            };
        }
        
        const applicationId = params.applicationId;
        const applicationSecret = params.applicationSecret;
        const tenant = params.tenant;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/microsoft';
        const payload: Payload = {};
        if (typeof applicationId !== 'undefined') {
            payload['applicationId'] = applicationId;
        }
        if (typeof applicationSecret !== 'undefined') {
            payload['applicationSecret'] = applicationSecret;
        }
        if (typeof tenant !== 'undefined') {
            payload['tenant'] = tenant;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Notion configuration.
     *
     * @param {string} params.oauthClientId - 'OAuth Client ID' of Notion OAuth2 app. For example: 341d8700-0000-0000-0000-000000446ee3
     * @param {string} params.oauthClientSecret - 'OAuth Client Secret' of Notion OAuth2 app. For example: secret_dLUr4b000000000000000000000000000000lFHAa9
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Notion>}
     */
    updateOAuth2Notion(params?: { oauthClientId?: string, oauthClientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Notion>;
    /**
     * Update the project OAuth2 Notion configuration.
     *
     * @param {string} oauthClientId - 'OAuth Client ID' of Notion OAuth2 app. For example: 341d8700-0000-0000-0000-000000446ee3
     * @param {string} oauthClientSecret - 'OAuth Client Secret' of Notion OAuth2 app. For example: secret_dLUr4b000000000000000000000000000000lFHAa9
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Notion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Notion(oauthClientId?: string, oauthClientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Notion>;
    updateOAuth2Notion(
        paramsOrFirst?: { oauthClientId?: string, oauthClientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Notion> {
        let params: { oauthClientId?: string, oauthClientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { oauthClientId?: string, oauthClientSecret?: string, enabled?: boolean };
        } else {
            params = {
                oauthClientId: paramsOrFirst as string,
                oauthClientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const oauthClientId = params.oauthClientId;
        const oauthClientSecret = params.oauthClientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/notion';
        const payload: Payload = {};
        if (typeof oauthClientId !== 'undefined') {
            payload['oauthClientId'] = oauthClientId;
        }
        if (typeof oauthClientSecret !== 'undefined') {
            payload['oauthClientSecret'] = oauthClientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Oidc configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Oidc OAuth2 app. For example: qibI2x0000000000000000000000000006L2YFoG
     * @param {string} params.clientSecret - 'Client Secret' of Oidc OAuth2 app. For example: Ah68ed000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003qpcHV
     * @param {string} params.wellKnownURL - OpenID Connect well-known configuration URL. When provided, authorization, token, and user info endpoints can be discovered automatically. For example: https://myoauth.com/.well-known/openid-configuration
     * @param {string} params.authorizationURL - OpenID Connect authorization endpoint URL. Required when wellKnownURL is not provided. For example: https://myoauth.com/oauth2/authorize
     * @param {string} params.tokenURL - OpenID Connect token endpoint URL. Required when wellKnownURL is not provided. For example: https://myoauth.com/oauth2/token
     * @param {string} params.userInfoURL - OpenID Connect user info endpoint URL. Required when wellKnownURL is not provided. For example: https://myoauth.com/oauth2/userinfo
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Oidc>}
     */
    updateOAuth2Oidc(params?: { clientId?: string, clientSecret?: string, wellKnownURL?: string, authorizationURL?: string, tokenURL?: string, userInfoURL?: string, enabled?: boolean }): Promise<Models.OAuth2Oidc>;
    /**
     * Update the project OAuth2 Oidc configuration.
     *
     * @param {string} clientId - 'Client ID' of Oidc OAuth2 app. For example: qibI2x0000000000000000000000000006L2YFoG
     * @param {string} clientSecret - 'Client Secret' of Oidc OAuth2 app. For example: Ah68ed000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003qpcHV
     * @param {string} wellKnownURL - OpenID Connect well-known configuration URL. When provided, authorization, token, and user info endpoints can be discovered automatically. For example: https://myoauth.com/.well-known/openid-configuration
     * @param {string} authorizationURL - OpenID Connect authorization endpoint URL. Required when wellKnownURL is not provided. For example: https://myoauth.com/oauth2/authorize
     * @param {string} tokenURL - OpenID Connect token endpoint URL. Required when wellKnownURL is not provided. For example: https://myoauth.com/oauth2/token
     * @param {string} userInfoURL - OpenID Connect user info endpoint URL. Required when wellKnownURL is not provided. For example: https://myoauth.com/oauth2/userinfo
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Oidc>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Oidc(clientId?: string, clientSecret?: string, wellKnownURL?: string, authorizationURL?: string, tokenURL?: string, userInfoURL?: string, enabled?: boolean): Promise<Models.OAuth2Oidc>;
    updateOAuth2Oidc(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, wellKnownURL?: string, authorizationURL?: string, tokenURL?: string, userInfoURL?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.OAuth2Oidc> {
        let params: { clientId?: string, clientSecret?: string, wellKnownURL?: string, authorizationURL?: string, tokenURL?: string, userInfoURL?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, wellKnownURL?: string, authorizationURL?: string, tokenURL?: string, userInfoURL?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                wellKnownURL: rest[1] as string,
                authorizationURL: rest[2] as string,
                tokenURL: rest[3] as string,
                userInfoURL: rest[4] as string,
                enabled: rest[5] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const wellKnownURL = params.wellKnownURL;
        const authorizationURL = params.authorizationURL;
        const tokenURL = params.tokenURL;
        const userInfoURL = params.userInfoURL;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/oidc';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof wellKnownURL !== 'undefined') {
            payload['wellKnownURL'] = wellKnownURL;
        }
        if (typeof authorizationURL !== 'undefined') {
            payload['authorizationURL'] = authorizationURL;
        }
        if (typeof tokenURL !== 'undefined') {
            payload['tokenURL'] = tokenURL;
        }
        if (typeof userInfoURL !== 'undefined') {
            payload['userInfoURL'] = userInfoURL;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Okta configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Okta OAuth2 app. For example: 0oa00000000000000698
     * @param {string} params.clientSecret - 'Client Secret' of Okta OAuth2 app. For example: Kiq0000000000000000000000000000000000000-00000000000H2L5-3SJ-vRV
     * @param {string} params.domain - Okta company domain. Required when enabling the provider. For example: trial-6400025.okta.com. Example of wrong value: trial-6400025-admin.okta.com, or https://trial-6400025.okta.com/
     * @param {string} params.authorizationServerId - Custom Authorization Servers. Optional, can be left empty or unconfigured. For example: aus000000000000000h7z
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Okta>}
     */
    updateOAuth2Okta(params?: { clientId?: string, clientSecret?: string, domain?: string, authorizationServerId?: string, enabled?: boolean }): Promise<Models.OAuth2Okta>;
    /**
     * Update the project OAuth2 Okta configuration.
     *
     * @param {string} clientId - 'Client ID' of Okta OAuth2 app. For example: 0oa00000000000000698
     * @param {string} clientSecret - 'Client Secret' of Okta OAuth2 app. For example: Kiq0000000000000000000000000000000000000-00000000000H2L5-3SJ-vRV
     * @param {string} domain - Okta company domain. Required when enabling the provider. For example: trial-6400025.okta.com. Example of wrong value: trial-6400025-admin.okta.com, or https://trial-6400025.okta.com/
     * @param {string} authorizationServerId - Custom Authorization Servers. Optional, can be left empty or unconfigured. For example: aus000000000000000h7z
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Okta>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Okta(clientId?: string, clientSecret?: string, domain?: string, authorizationServerId?: string, enabled?: boolean): Promise<Models.OAuth2Okta>;
    updateOAuth2Okta(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, domain?: string, authorizationServerId?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.OAuth2Okta> {
        let params: { clientId?: string, clientSecret?: string, domain?: string, authorizationServerId?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, domain?: string, authorizationServerId?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                domain: rest[1] as string,
                authorizationServerId: rest[2] as string,
                enabled: rest[3] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const domain = params.domain;
        const authorizationServerId = params.authorizationServerId;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/okta';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof authorizationServerId !== 'undefined') {
            payload['authorizationServerId'] = authorizationServerId;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Paypal configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Paypal OAuth2 app. For example: AdhIEG7-000000000000-0000000000000000000000000000000-0000000000000000000000-2pyB
     * @param {string} params.secretKey - 'Secret Key 1 or Secret Key 2' of Paypal OAuth2 app. For example: EH8KCXtew--000000000000000000000000000000000000000_C-1_5UP_000000000000000CB7KDp
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Paypal>}
     */
    updateOAuth2Paypal(params?: { clientId?: string, secretKey?: string, enabled?: boolean }): Promise<Models.OAuth2Paypal>;
    /**
     * Update the project OAuth2 Paypal configuration.
     *
     * @param {string} clientId - 'Client ID' of Paypal OAuth2 app. For example: AdhIEG7-000000000000-0000000000000000000000000000000-0000000000000000000000-2pyB
     * @param {string} secretKey - 'Secret Key 1 or Secret Key 2' of Paypal OAuth2 app. For example: EH8KCXtew--000000000000000000000000000000000000000_C-1_5UP_000000000000000CB7KDp
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Paypal>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Paypal(clientId?: string, secretKey?: string, enabled?: boolean): Promise<Models.OAuth2Paypal>;
    updateOAuth2Paypal(
        paramsOrFirst?: { clientId?: string, secretKey?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Paypal> {
        let params: { clientId?: string, secretKey?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, secretKey?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                secretKey: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const secretKey = params.secretKey;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/paypal';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof secretKey !== 'undefined') {
            payload['secretKey'] = secretKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 PaypalSandbox configuration.
     *
     * @param {string} params.clientId - 'Client ID' of PaypalSandbox OAuth2 app. For example: AdhIEG7-000000000000-0000000000000000000000000000000-0000000000000000000000-2pyB
     * @param {string} params.secretKey - 'Secret Key 1 or Secret Key 2' of PaypalSandbox OAuth2 app. For example: EH8KCXtew--000000000000000000000000000000000000000_C-1_5UP_000000000000000CB7KDp
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Paypal>}
     */
    updateOAuth2PaypalSandbox(params?: { clientId?: string, secretKey?: string, enabled?: boolean }): Promise<Models.OAuth2Paypal>;
    /**
     * Update the project OAuth2 PaypalSandbox configuration.
     *
     * @param {string} clientId - 'Client ID' of PaypalSandbox OAuth2 app. For example: AdhIEG7-000000000000-0000000000000000000000000000000-0000000000000000000000-2pyB
     * @param {string} secretKey - 'Secret Key 1 or Secret Key 2' of PaypalSandbox OAuth2 app. For example: EH8KCXtew--000000000000000000000000000000000000000_C-1_5UP_000000000000000CB7KDp
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Paypal>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2PaypalSandbox(clientId?: string, secretKey?: string, enabled?: boolean): Promise<Models.OAuth2Paypal>;
    updateOAuth2PaypalSandbox(
        paramsOrFirst?: { clientId?: string, secretKey?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Paypal> {
        let params: { clientId?: string, secretKey?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, secretKey?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                secretKey: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const secretKey = params.secretKey;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/paypalSandbox';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof secretKey !== 'undefined') {
            payload['secretKey'] = secretKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Podio configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Podio OAuth2 app. For example: appwrite-o0000000st-app
     * @param {string} params.clientSecret - 'Client Secret' of Podio OAuth2 app. For example: Rn247T0000000000000000000000000000000000000000000000000000W2zWTN
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Podio>}
     */
    updateOAuth2Podio(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Podio>;
    /**
     * Update the project OAuth2 Podio configuration.
     *
     * @param {string} clientId - 'Client ID' of Podio OAuth2 app. For example: appwrite-o0000000st-app
     * @param {string} clientSecret - 'Client Secret' of Podio OAuth2 app. For example: Rn247T0000000000000000000000000000000000000000000000000000W2zWTN
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Podio>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Podio(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Podio>;
    updateOAuth2Podio(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Podio> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/podio';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Salesforce configuration.
     *
     * @param {string} params.customerKey - 'Consumer Key' of Salesforce OAuth2 app. For example: 3MVG9I0000000000000000000000000000000000000000000000000000000000000000000000000C5Aejq
     * @param {string} params.customerSecret - 'Consumer Secret' of Salesforce OAuth2 app. For example: 3w000000000000e2
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Salesforce>}
     */
    updateOAuth2Salesforce(params?: { customerKey?: string, customerSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Salesforce>;
    /**
     * Update the project OAuth2 Salesforce configuration.
     *
     * @param {string} customerKey - 'Consumer Key' of Salesforce OAuth2 app. For example: 3MVG9I0000000000000000000000000000000000000000000000000000000000000000000000000C5Aejq
     * @param {string} customerSecret - 'Consumer Secret' of Salesforce OAuth2 app. For example: 3w000000000000e2
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Salesforce>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Salesforce(customerKey?: string, customerSecret?: string, enabled?: boolean): Promise<Models.OAuth2Salesforce>;
    updateOAuth2Salesforce(
        paramsOrFirst?: { customerKey?: string, customerSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Salesforce> {
        let params: { customerKey?: string, customerSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { customerKey?: string, customerSecret?: string, enabled?: boolean };
        } else {
            params = {
                customerKey: paramsOrFirst as string,
                customerSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const customerKey = params.customerKey;
        const customerSecret = params.customerSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/salesforce';
        const payload: Payload = {};
        if (typeof customerKey !== 'undefined') {
            payload['customerKey'] = customerKey;
        }
        if (typeof customerSecret !== 'undefined') {
            payload['customerSecret'] = customerSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Slack configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Slack OAuth2 app. For example: 23000000089.15000000000023
     * @param {string} params.clientSecret - 'Client Secret' of Slack OAuth2 app. For example: 81656000000000000000000000f3d2fd
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Slack>}
     */
    updateOAuth2Slack(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Slack>;
    /**
     * Update the project OAuth2 Slack configuration.
     *
     * @param {string} clientId - 'Client ID' of Slack OAuth2 app. For example: 23000000089.15000000000023
     * @param {string} clientSecret - 'Client Secret' of Slack OAuth2 app. For example: 81656000000000000000000000f3d2fd
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Slack>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Slack(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Slack>;
    updateOAuth2Slack(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Slack> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/slack';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Spotify configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Spotify OAuth2 app. For example: 6ec271000000000000000000009beace
     * @param {string} params.clientSecret - 'Client Secret' of Spotify OAuth2 app. For example: db068a000000000000000000008b5b9f
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Spotify>}
     */
    updateOAuth2Spotify(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Spotify>;
    /**
     * Update the project OAuth2 Spotify configuration.
     *
     * @param {string} clientId - 'Client ID' of Spotify OAuth2 app. For example: 6ec271000000000000000000009beace
     * @param {string} clientSecret - 'Client Secret' of Spotify OAuth2 app. For example: db068a000000000000000000008b5b9f
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Spotify>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Spotify(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Spotify>;
    updateOAuth2Spotify(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Spotify> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/spotify';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Stripe configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Stripe OAuth2 app. For example: ca_UKibXX0000000000000000000006byvR
     * @param {string} params.apiSecretKey - 'API Secret Key' of Stripe OAuth2 app. For example: sk_51SfOd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000QGWYfp
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Stripe>}
     */
    updateOAuth2Stripe(params?: { clientId?: string, apiSecretKey?: string, enabled?: boolean }): Promise<Models.OAuth2Stripe>;
    /**
     * Update the project OAuth2 Stripe configuration.
     *
     * @param {string} clientId - 'Client ID' of Stripe OAuth2 app. For example: ca_UKibXX0000000000000000000006byvR
     * @param {string} apiSecretKey - 'API Secret Key' of Stripe OAuth2 app. For example: sk_51SfOd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000QGWYfp
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Stripe>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Stripe(clientId?: string, apiSecretKey?: string, enabled?: boolean): Promise<Models.OAuth2Stripe>;
    updateOAuth2Stripe(
        paramsOrFirst?: { clientId?: string, apiSecretKey?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Stripe> {
        let params: { clientId?: string, apiSecretKey?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, apiSecretKey?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                apiSecretKey: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const apiSecretKey = params.apiSecretKey;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/stripe';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof apiSecretKey !== 'undefined') {
            payload['apiSecretKey'] = apiSecretKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Tradeshift configuration.
     *
     * @param {string} params.oauth2ClientId - 'OAuth2 Client ID' of Tradeshift OAuth2 app. For example: appwrite-tes00000.0000000000est-app
     * @param {string} params.oauth2ClientSecret - 'OAuth2 Client Secret' of Tradeshift OAuth2 app. For example: 7cb52700-0000-0000-0000-000000ca5b83
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Tradeshift>}
     */
    updateOAuth2Tradeshift(params?: { oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Tradeshift>;
    /**
     * Update the project OAuth2 Tradeshift configuration.
     *
     * @param {string} oauth2ClientId - 'OAuth2 Client ID' of Tradeshift OAuth2 app. For example: appwrite-tes00000.0000000000est-app
     * @param {string} oauth2ClientSecret - 'OAuth2 Client Secret' of Tradeshift OAuth2 app. For example: 7cb52700-0000-0000-0000-000000ca5b83
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Tradeshift>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Tradeshift(oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Tradeshift>;
    updateOAuth2Tradeshift(
        paramsOrFirst?: { oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Tradeshift> {
        let params: { oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean };
        } else {
            params = {
                oauth2ClientId: paramsOrFirst as string,
                oauth2ClientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const oauth2ClientId = params.oauth2ClientId;
        const oauth2ClientSecret = params.oauth2ClientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/tradeshift';
        const payload: Payload = {};
        if (typeof oauth2ClientId !== 'undefined') {
            payload['oauth2ClientId'] = oauth2ClientId;
        }
        if (typeof oauth2ClientSecret !== 'undefined') {
            payload['oauth2ClientSecret'] = oauth2ClientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Tradeshift Sandbox configuration.
     *
     * @param {string} params.oauth2ClientId - 'OAuth2 Client ID' of Tradeshift Sandbox OAuth2 app. For example: appwrite-tes00000.0000000000est-app
     * @param {string} params.oauth2ClientSecret - 'OAuth2 Client Secret' of Tradeshift Sandbox OAuth2 app. For example: 7cb52700-0000-0000-0000-000000ca5b83
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Tradeshift>}
     */
    updateOAuth2TradeshiftSandbox(params?: { oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Tradeshift>;
    /**
     * Update the project OAuth2 Tradeshift Sandbox configuration.
     *
     * @param {string} oauth2ClientId - 'OAuth2 Client ID' of Tradeshift Sandbox OAuth2 app. For example: appwrite-tes00000.0000000000est-app
     * @param {string} oauth2ClientSecret - 'OAuth2 Client Secret' of Tradeshift Sandbox OAuth2 app. For example: 7cb52700-0000-0000-0000-000000ca5b83
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Tradeshift>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2TradeshiftSandbox(oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Tradeshift>;
    updateOAuth2TradeshiftSandbox(
        paramsOrFirst?: { oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Tradeshift> {
        let params: { oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { oauth2ClientId?: string, oauth2ClientSecret?: string, enabled?: boolean };
        } else {
            params = {
                oauth2ClientId: paramsOrFirst as string,
                oauth2ClientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const oauth2ClientId = params.oauth2ClientId;
        const oauth2ClientSecret = params.oauth2ClientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/tradeshiftBox';
        const payload: Payload = {};
        if (typeof oauth2ClientId !== 'undefined') {
            payload['oauth2ClientId'] = oauth2ClientId;
        }
        if (typeof oauth2ClientSecret !== 'undefined') {
            payload['oauth2ClientSecret'] = oauth2ClientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Twitch configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Twitch OAuth2 app. For example: vvi0in000000000000000000ikmt9p
     * @param {string} params.clientSecret - 'Client Secret' of Twitch OAuth2 app. For example: pmapue000000000000000000zylw3v
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Twitch>}
     */
    updateOAuth2Twitch(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Twitch>;
    /**
     * Update the project OAuth2 Twitch configuration.
     *
     * @param {string} clientId - 'Client ID' of Twitch OAuth2 app. For example: vvi0in000000000000000000ikmt9p
     * @param {string} clientSecret - 'Client Secret' of Twitch OAuth2 app. For example: pmapue000000000000000000zylw3v
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Twitch>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Twitch(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Twitch>;
    updateOAuth2Twitch(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Twitch> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/twitch';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 WordPress configuration.
     *
     * @param {string} params.clientId - 'Client ID' of WordPress OAuth2 app. For example: 130005
     * @param {string} params.clientSecret - 'Client Secret' of WordPress OAuth2 app. For example: PlBfJS0000000000000000000000000000000000000000000000000000EdUZJk
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2WordPress>}
     */
    updateOAuth2WordPress(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2WordPress>;
    /**
     * Update the project OAuth2 WordPress configuration.
     *
     * @param {string} clientId - 'Client ID' of WordPress OAuth2 app. For example: 130005
     * @param {string} clientSecret - 'Client Secret' of WordPress OAuth2 app. For example: PlBfJS0000000000000000000000000000000000000000000000000000EdUZJk
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2WordPress>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2WordPress(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2WordPress>;
    updateOAuth2WordPress(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2WordPress> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/wordpress';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 X configuration.
     *
     * @param {string} params.customerKey - 'Customer Key' of X OAuth2 app. For example: slzZV0000000000000NFLaWT
     * @param {string} params.secretKey - 'Secret Key' of X OAuth2 app. For example: tkEPkp00000000000000000000000000000000000000FTxbI9
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2X>}
     */
    updateOAuth2X(params?: { customerKey?: string, secretKey?: string, enabled?: boolean }): Promise<Models.OAuth2X>;
    /**
     * Update the project OAuth2 X configuration.
     *
     * @param {string} customerKey - 'Customer Key' of X OAuth2 app. For example: slzZV0000000000000NFLaWT
     * @param {string} secretKey - 'Secret Key' of X OAuth2 app. For example: tkEPkp00000000000000000000000000000000000000FTxbI9
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2X>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2X(customerKey?: string, secretKey?: string, enabled?: boolean): Promise<Models.OAuth2X>;
    updateOAuth2X(
        paramsOrFirst?: { customerKey?: string, secretKey?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2X> {
        let params: { customerKey?: string, secretKey?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { customerKey?: string, secretKey?: string, enabled?: boolean };
        } else {
            params = {
                customerKey: paramsOrFirst as string,
                secretKey: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const customerKey = params.customerKey;
        const secretKey = params.secretKey;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/x';
        const payload: Payload = {};
        if (typeof customerKey !== 'undefined') {
            payload['customerKey'] = customerKey;
        }
        if (typeof secretKey !== 'undefined') {
            payload['secretKey'] = secretKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Yahoo configuration.
     *
     * @param {string} params.clientId - 'Client ID, also known as Customer Key' of Yahoo OAuth2 app. For example: dj0yJm000000000000000000000000000000000000000000000000000000000000000000000000000000000000Z4PWRm
     * @param {string} params.clientSecret - 'Client Secret, also known as Customer Secret' of Yahoo OAuth2 app. For example: cf978f0000000000000000000000000000c5e2e9
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Yahoo>}
     */
    updateOAuth2Yahoo(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Yahoo>;
    /**
     * Update the project OAuth2 Yahoo configuration.
     *
     * @param {string} clientId - 'Client ID, also known as Customer Key' of Yahoo OAuth2 app. For example: dj0yJm000000000000000000000000000000000000000000000000000000000000000000000000000000000000Z4PWRm
     * @param {string} clientSecret - 'Client Secret, also known as Customer Secret' of Yahoo OAuth2 app. For example: cf978f0000000000000000000000000000c5e2e9
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Yahoo>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Yahoo(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Yahoo>;
    updateOAuth2Yahoo(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Yahoo> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/yahoo';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Yandex configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Yandex OAuth2 app. For example: 6a8a6a0000000000000000000091483c
     * @param {string} params.clientSecret - 'Client Secret' of Yandex OAuth2 app. For example: bbf98500000000000000000000c75a63
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Yandex>}
     */
    updateOAuth2Yandex(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Yandex>;
    /**
     * Update the project OAuth2 Yandex configuration.
     *
     * @param {string} clientId - 'Client ID' of Yandex OAuth2 app. For example: 6a8a6a0000000000000000000091483c
     * @param {string} clientSecret - 'Client Secret' of Yandex OAuth2 app. For example: bbf98500000000000000000000c75a63
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Yandex>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Yandex(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Yandex>;
    updateOAuth2Yandex(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Yandex> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/yandex';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Zoho configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Zoho OAuth2 app. For example: 1000.83C178000000000000000000RPNX0B
     * @param {string} params.clientSecret - 'Client Secret' of Zoho OAuth2 app. For example: fb5cac000000000000000000000000000000a68f6e
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Zoho>}
     */
    updateOAuth2Zoho(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Zoho>;
    /**
     * Update the project OAuth2 Zoho configuration.
     *
     * @param {string} clientId - 'Client ID' of Zoho OAuth2 app. For example: 1000.83C178000000000000000000RPNX0B
     * @param {string} clientSecret - 'Client Secret' of Zoho OAuth2 app. For example: fb5cac000000000000000000000000000000a68f6e
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Zoho>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Zoho(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Zoho>;
    updateOAuth2Zoho(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Zoho> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/zoho';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the project OAuth2 Zoom configuration.
     *
     * @param {string} params.clientId - 'Client ID' of Zoom OAuth2 app. For example: QMAC00000000000000w0AQ
     * @param {string} params.clientSecret - 'Client Secret' of Zoom OAuth2 app. For example: GAWsG4000000000000000000007U01ON
     * @param {boolean} params.enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Zoom>}
     */
    updateOAuth2Zoom(params?: { clientId?: string, clientSecret?: string, enabled?: boolean }): Promise<Models.OAuth2Zoom>;
    /**
     * Update the project OAuth2 Zoom configuration.
     *
     * @param {string} clientId - 'Client ID' of Zoom OAuth2 app. For example: QMAC00000000000000w0AQ
     * @param {string} clientSecret - 'Client Secret' of Zoom OAuth2 app. For example: GAWsG4000000000000000000007U01ON
     * @param {boolean} enabled - OAuth2 sign-in method status. Set to true to enable new session creation. Setting to true will trigger end-to-end credentials validation, and will throw if the credentials are invalid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Zoom>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2Zoom(clientId?: string, clientSecret?: string, enabled?: boolean): Promise<Models.OAuth2Zoom>;
    updateOAuth2Zoom(
        paramsOrFirst?: { clientId?: string, clientSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.OAuth2Zoom> {
        let params: { clientId?: string, clientSecret?: string, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { clientId?: string, clientSecret?: string, enabled?: boolean };
        } else {
            params = {
                clientId: paramsOrFirst as string,
                clientSecret: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const clientId = params.clientId;
        const clientSecret = params.clientSecret;
        const enabled = params.enabled;


        const apiPath = '/project/oauth2/zoom';
        const payload: Payload = {};
        if (typeof clientId !== 'undefined') {
            payload['clientId'] = clientId;
        }
        if (typeof clientSecret !== 'undefined') {
            payload['clientSecret'] = clientSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a single OAuth2 provider configuration. Credential fields (client secret, p8 file, key/team IDs) are write-only and always returned empty.
     *
     * @param {ProjectOAuthProviderId} params.providerId - OAuth2 provider key. For example: github, google, apple.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Github | Models.OAuth2Discord | Models.OAuth2Figma | Models.OAuth2Dropbox | Models.OAuth2Dailymotion | Models.OAuth2Bitbucket | Models.OAuth2Bitly | Models.OAuth2Box | Models.OAuth2Autodesk | Models.OAuth2Google | Models.OAuth2Zoom | Models.OAuth2Zoho | Models.OAuth2Yandex | Models.OAuth2X | Models.OAuth2WordPress | Models.OAuth2Twitch | Models.OAuth2Stripe | Models.OAuth2Spotify | Models.OAuth2Slack | Models.OAuth2Podio | Models.OAuth2Notion | Models.OAuth2Salesforce | Models.OAuth2Yahoo | Models.OAuth2Linkedin | Models.OAuth2Disqus | Models.OAuth2Amazon | Models.OAuth2Etsy | Models.OAuth2Facebook | Models.OAuth2Tradeshift | Models.OAuth2Paypal | Models.OAuth2Gitlab | Models.OAuth2Authentik | Models.OAuth2Auth0 | Models.OAuth2FusionAuth | Models.OAuth2Keycloak | Models.OAuth2Oidc | Models.OAuth2Apple | Models.OAuth2Okta | Models.OAuth2Kick | Models.OAuth2Microsoft>}
     */
    getOAuth2Provider(params: { providerId: ProjectOAuthProviderId }): Promise<Models.OAuth2Github | Models.OAuth2Discord | Models.OAuth2Figma | Models.OAuth2Dropbox | Models.OAuth2Dailymotion | Models.OAuth2Bitbucket | Models.OAuth2Bitly | Models.OAuth2Box | Models.OAuth2Autodesk | Models.OAuth2Google | Models.OAuth2Zoom | Models.OAuth2Zoho | Models.OAuth2Yandex | Models.OAuth2X | Models.OAuth2WordPress | Models.OAuth2Twitch | Models.OAuth2Stripe | Models.OAuth2Spotify | Models.OAuth2Slack | Models.OAuth2Podio | Models.OAuth2Notion | Models.OAuth2Salesforce | Models.OAuth2Yahoo | Models.OAuth2Linkedin | Models.OAuth2Disqus | Models.OAuth2Amazon | Models.OAuth2Etsy | Models.OAuth2Facebook | Models.OAuth2Tradeshift | Models.OAuth2Paypal | Models.OAuth2Gitlab | Models.OAuth2Authentik | Models.OAuth2Auth0 | Models.OAuth2FusionAuth | Models.OAuth2Keycloak | Models.OAuth2Oidc | Models.OAuth2Apple | Models.OAuth2Okta | Models.OAuth2Kick | Models.OAuth2Microsoft>;
    /**
     * Get a single OAuth2 provider configuration. Credential fields (client secret, p8 file, key/team IDs) are write-only and always returned empty.
     *
     * @param {ProjectOAuthProviderId} providerId - OAuth2 provider key. For example: github, google, apple.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OAuth2Github | Models.OAuth2Discord | Models.OAuth2Figma | Models.OAuth2Dropbox | Models.OAuth2Dailymotion | Models.OAuth2Bitbucket | Models.OAuth2Bitly | Models.OAuth2Box | Models.OAuth2Autodesk | Models.OAuth2Google | Models.OAuth2Zoom | Models.OAuth2Zoho | Models.OAuth2Yandex | Models.OAuth2X | Models.OAuth2WordPress | Models.OAuth2Twitch | Models.OAuth2Stripe | Models.OAuth2Spotify | Models.OAuth2Slack | Models.OAuth2Podio | Models.OAuth2Notion | Models.OAuth2Salesforce | Models.OAuth2Yahoo | Models.OAuth2Linkedin | Models.OAuth2Disqus | Models.OAuth2Amazon | Models.OAuth2Etsy | Models.OAuth2Facebook | Models.OAuth2Tradeshift | Models.OAuth2Paypal | Models.OAuth2Gitlab | Models.OAuth2Authentik | Models.OAuth2Auth0 | Models.OAuth2FusionAuth | Models.OAuth2Keycloak | Models.OAuth2Oidc | Models.OAuth2Apple | Models.OAuth2Okta | Models.OAuth2Kick | Models.OAuth2Microsoft>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getOAuth2Provider(providerId: ProjectOAuthProviderId): Promise<Models.OAuth2Github | Models.OAuth2Discord | Models.OAuth2Figma | Models.OAuth2Dropbox | Models.OAuth2Dailymotion | Models.OAuth2Bitbucket | Models.OAuth2Bitly | Models.OAuth2Box | Models.OAuth2Autodesk | Models.OAuth2Google | Models.OAuth2Zoom | Models.OAuth2Zoho | Models.OAuth2Yandex | Models.OAuth2X | Models.OAuth2WordPress | Models.OAuth2Twitch | Models.OAuth2Stripe | Models.OAuth2Spotify | Models.OAuth2Slack | Models.OAuth2Podio | Models.OAuth2Notion | Models.OAuth2Salesforce | Models.OAuth2Yahoo | Models.OAuth2Linkedin | Models.OAuth2Disqus | Models.OAuth2Amazon | Models.OAuth2Etsy | Models.OAuth2Facebook | Models.OAuth2Tradeshift | Models.OAuth2Paypal | Models.OAuth2Gitlab | Models.OAuth2Authentik | Models.OAuth2Auth0 | Models.OAuth2FusionAuth | Models.OAuth2Keycloak | Models.OAuth2Oidc | Models.OAuth2Apple | Models.OAuth2Okta | Models.OAuth2Kick | Models.OAuth2Microsoft>;
    getOAuth2Provider(
        paramsOrFirst: { providerId: ProjectOAuthProviderId } | ProjectOAuthProviderId    
    ): Promise<Models.OAuth2Github | Models.OAuth2Discord | Models.OAuth2Figma | Models.OAuth2Dropbox | Models.OAuth2Dailymotion | Models.OAuth2Bitbucket | Models.OAuth2Bitly | Models.OAuth2Box | Models.OAuth2Autodesk | Models.OAuth2Google | Models.OAuth2Zoom | Models.OAuth2Zoho | Models.OAuth2Yandex | Models.OAuth2X | Models.OAuth2WordPress | Models.OAuth2Twitch | Models.OAuth2Stripe | Models.OAuth2Spotify | Models.OAuth2Slack | Models.OAuth2Podio | Models.OAuth2Notion | Models.OAuth2Salesforce | Models.OAuth2Yahoo | Models.OAuth2Linkedin | Models.OAuth2Disqus | Models.OAuth2Amazon | Models.OAuth2Etsy | Models.OAuth2Facebook | Models.OAuth2Tradeshift | Models.OAuth2Paypal | Models.OAuth2Gitlab | Models.OAuth2Authentik | Models.OAuth2Auth0 | Models.OAuth2FusionAuth | Models.OAuth2Keycloak | Models.OAuth2Oidc | Models.OAuth2Apple | Models.OAuth2Okta | Models.OAuth2Kick | Models.OAuth2Microsoft> {
        let params: { providerId: ProjectOAuthProviderId };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('providerId' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: ProjectOAuthProviderId };
        } else {
            params = {
                providerId: paramsOrFirst as ProjectOAuthProviderId            
            };
        }
        
        const providerId = params.providerId;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/project/oauth2/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
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
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
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
            'X-Appwrite-Project': this.client.config.project,
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
     * Get a list of all project policies and their current configuration.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PolicyList>}
     */
    listPolicies(params?: { queries?: string[], total?: boolean }): Promise<Models.PolicyList>;
    /**
     * Get a list of all project policies and their current configuration.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PolicyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listPolicies(queries?: string[], total?: boolean): Promise<Models.PolicyList>;
    listPolicies(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.PolicyList> {
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


        const apiPath = '/project/policies';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Configures if aliased emails such as subaddresses and emails with suffixes are denied during new users sign-ups and email updates.
     *
     * @param {boolean} params.enabled - Set whether or not to block aliased emails during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateDenyAliasedEmailPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Configures if aliased emails such as subaddresses and emails with suffixes are denied during new users sign-ups and email updates.
     *
     * @param {boolean} enabled - Set whether or not to block aliased emails during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDenyAliasedEmailPolicy(enabled: boolean): Promise<Models.Project>;
    updateDenyAliasedEmailPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/deny-aliased-email';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Configures if disposable emails from known temporary domains are denied during new users sign-ups and email updates.
     *
     * @param {boolean} params.enabled - Set whether or not to block disposable email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateDenyDisposableEmailPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Configures if disposable emails from known temporary domains are denied during new users sign-ups and email updates.
     *
     * @param {boolean} enabled - Set whether or not to block disposable email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDenyDisposableEmailPolicy(enabled: boolean): Promise<Models.Project>;
    updateDenyDisposableEmailPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/deny-disposable-email';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Configures if emails from free providers such as Gmail or Yahoo are denied during new users sign-ups and email updates.
     *
     * @param {boolean} params.enabled - Set whether or not to block free email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateDenyFreeEmailPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Configures if emails from free providers such as Gmail or Yahoo are denied during new users sign-ups and email updates.
     *
     * @param {boolean} enabled - Set whether or not to block free email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDenyFreeEmailPolicy(enabled: boolean): Promise<Models.Project>;
    updateDenyFreeEmailPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/deny-free-email';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Updating this policy allows you to control if team members can see other members information. When enabled, all team members can see ID, name, email, phone number, and MFA status of other members..
     *
     * @param {boolean} params.userId - Set to true if you want make user ID visible to all team members, or false to hide it.
     * @param {boolean} params.userEmail - Set to true if you want make user email visible to all team members, or false to hide it.
     * @param {boolean} params.userPhone - Set to true if you want make user phone number visible to all team members, or false to hide it.
     * @param {boolean} params.userName - Set to true if you want make user name visible to all team members, or false to hide it.
     * @param {boolean} params.userMFA - Set to true if you want make user MFA status visible to all team members, or false to hide it.
     * @param {boolean} params.userAccessedAt - Set to true if you want make user last access time visible to all team members, or false to hide it.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateMembershipPrivacyPolicy(params?: { userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean, userAccessedAt?: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if team members can see other members information. When enabled, all team members can see ID, name, email, phone number, and MFA status of other members..
     *
     * @param {boolean} userId - Set to true if you want make user ID visible to all team members, or false to hide it.
     * @param {boolean} userEmail - Set to true if you want make user email visible to all team members, or false to hide it.
     * @param {boolean} userPhone - Set to true if you want make user phone number visible to all team members, or false to hide it.
     * @param {boolean} userName - Set to true if you want make user name visible to all team members, or false to hide it.
     * @param {boolean} userMFA - Set to true if you want make user MFA status visible to all team members, or false to hide it.
     * @param {boolean} userAccessedAt - Set to true if you want make user last access time visible to all team members, or false to hide it.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMembershipPrivacyPolicy(userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean, userAccessedAt?: boolean): Promise<Models.Project>;
    updateMembershipPrivacyPolicy(
        paramsOrFirst?: { userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean, userAccessedAt?: boolean } | boolean,
        ...rest: [(boolean)?, (boolean)?, (boolean)?, (boolean)?, (boolean)?]    
    ): Promise<Models.Project> {
        let params: { userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean, userAccessedAt?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean, userAccessedAt?: boolean };
        } else {
            params = {
                userId: paramsOrFirst as boolean,
                userEmail: rest[0] as boolean,
                userPhone: rest[1] as boolean,
                userName: rest[2] as boolean,
                userMFA: rest[3] as boolean,
                userAccessedAt: rest[4] as boolean            
            };
        }
        
        const userId = params.userId;
        const userEmail = params.userEmail;
        const userPhone = params.userPhone;
        const userName = params.userName;
        const userMFA = params.userMFA;
        const userAccessedAt = params.userAccessedAt;


        const apiPath = '/project/policies/membership-privacy';
        const payload: Payload = {};
        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof userEmail !== 'undefined') {
            payload['userEmail'] = userEmail;
        }
        if (typeof userPhone !== 'undefined') {
            payload['userPhone'] = userPhone;
        }
        if (typeof userName !== 'undefined') {
            payload['userName'] = userName;
        }
        if (typeof userMFA !== 'undefined') {
            payload['userMFA'] = userMFA;
        }
        if (typeof userAccessedAt !== 'undefined') {
            payload['userAccessedAt'] = userAccessedAt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Updating this policy allows you to control if new passwords are checked against most common passwords dictionary. When enabled, and user changes their password, password must not be contained in the dictionary.
     *
     * @param {boolean} params.enabled - Toggle password dictionary policy. Set to true if you want password change to block passwords in the dictionary, or false to allow them. When changing this policy, existing passwords remain valid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updatePasswordDictionaryPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if new passwords are checked against most common passwords dictionary. When enabled, and user changes their password, password must not be contained in the dictionary.
     *
     * @param {boolean} enabled - Toggle password dictionary policy. Set to true if you want password change to block passwords in the dictionary, or false to allow them. When changing this policy, existing passwords remain valid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePasswordDictionaryPolicy(enabled: boolean): Promise<Models.Project>;
    updatePasswordDictionaryPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/password-dictionary';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Updates one of password strength policies. Based on total length configured, previous password hashes are stored, and users cannot choose a new password that is already stored in the passwird history list, when updating an user password, or setting new one through password recovery.
     * 
     * Keep in mind, while password history policy is disabled, the history is not being stored. Enabling the policy will not have any history on existing users, and it will only start to collect and enforce the policy on password changes since the policy is enabled.
     *
     * @param {number} params.total - Set the password history length per user. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updatePasswordHistoryPolicy(params: { total?: number }): Promise<Models.Project>;
    /**
     * Updates one of password strength policies. Based on total length configured, previous password hashes are stored, and users cannot choose a new password that is already stored in the passwird history list, when updating an user password, or setting new one through password recovery.
     * 
     * Keep in mind, while password history policy is disabled, the history is not being stored. Enabling the policy will not have any history on existing users, and it will only start to collect and enforce the policy on password changes since the policy is enabled.
     *
     * @param {number} total - Set the password history length per user. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePasswordHistoryPolicy(total?: number): Promise<Models.Project>;
    updatePasswordHistoryPolicy(
        paramsOrFirst?: { total?: number } | number    
    ): Promise<Models.Project> {
        let params: { total?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { total?: number };
        } else {
            params = {
                total: paramsOrFirst as number            
            };
        }
        
        const total = params.total;

        if (typeof total === 'undefined') {
            throw new AppwriteException('Missing required parameter: "total"');
        }

        const apiPath = '/project/policies/password-history';
        const payload: Payload = {};
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Updating this policy allows you to control if password strength is checked against personal data. When enabled, and user sets or changes their password, the password must not contain user ID, name, email or phone number.
     *
     * @param {boolean} params.enabled - Toggle password personal data policy. Set to true if you want to block passwords including user's personal data, or false to allow it. When changing this policy, existing passwords remain valid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updatePasswordPersonalDataPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if password strength is checked against personal data. When enabled, and user sets or changes their password, the password must not contain user ID, name, email or phone number.
     *
     * @param {boolean} enabled - Toggle password personal data policy. Set to true if you want to block passwords including user's personal data, or false to allow it. When changing this policy, existing passwords remain valid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePasswordPersonalDataPolicy(enabled: boolean): Promise<Models.Project>;
    updatePasswordPersonalDataPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/password-personal-data';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the password strength requirements for users in the project.
     *
     * @param {number} params.min - Minimum password length. Value must be between 8 and 256. Default is 8.
     * @param {boolean} params.uppercase - Whether passwords must include at least one uppercase letter.
     * @param {boolean} params.lowercase - Whether passwords must include at least one lowercase letter.
     * @param {boolean} params.number - Whether passwords must include at least one number.
     * @param {boolean} params.symbols - Whether passwords must include at least one symbol.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PolicyPasswordStrength>}
     */
    updatePasswordStrengthPolicy(params?: { min?: number, uppercase?: boolean, lowercase?: boolean, number?: boolean, symbols?: boolean }): Promise<Models.PolicyPasswordStrength>;
    /**
     * Update the password strength requirements for users in the project.
     *
     * @param {number} min - Minimum password length. Value must be between 8 and 256. Default is 8.
     * @param {boolean} uppercase - Whether passwords must include at least one uppercase letter.
     * @param {boolean} lowercase - Whether passwords must include at least one lowercase letter.
     * @param {boolean} number - Whether passwords must include at least one number.
     * @param {boolean} symbols - Whether passwords must include at least one symbol.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PolicyPasswordStrength>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePasswordStrengthPolicy(min?: number, uppercase?: boolean, lowercase?: boolean, number?: boolean, symbols?: boolean): Promise<Models.PolicyPasswordStrength>;
    updatePasswordStrengthPolicy(
        paramsOrFirst?: { min?: number, uppercase?: boolean, lowercase?: boolean, number?: boolean, symbols?: boolean } | number,
        ...rest: [(boolean)?, (boolean)?, (boolean)?, (boolean)?]    
    ): Promise<Models.PolicyPasswordStrength> {
        let params: { min?: number, uppercase?: boolean, lowercase?: boolean, number?: boolean, symbols?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { min?: number, uppercase?: boolean, lowercase?: boolean, number?: boolean, symbols?: boolean };
        } else {
            params = {
                min: paramsOrFirst as number,
                uppercase: rest[0] as boolean,
                lowercase: rest[1] as boolean,
                number: rest[2] as boolean,
                symbols: rest[3] as boolean            
            };
        }
        
        const min = params.min;
        const uppercase = params.uppercase;
        const lowercase = params.lowercase;
        const number = params.number;
        const symbols = params.symbols;


        const apiPath = '/project/policies/password-strength';
        const payload: Payload = {};
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof uppercase !== 'undefined') {
            payload['uppercase'] = uppercase;
        }
        if (typeof lowercase !== 'undefined') {
            payload['lowercase'] = lowercase;
        }
        if (typeof number !== 'undefined') {
            payload['number'] = number;
        }
        if (typeof symbols !== 'undefined') {
            payload['symbols'] = symbols;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Updating this policy allows you to control if email alert is sent upon session creation. When enabled, and user signs into their account, they will be sent an email notification. There is an exception, the first session after a new sign up does not trigger an alert, even if the policy is enabled.
     *
     * @param {boolean} params.enabled - Toggle session alert policy. Set to true if you want users to receive email notifications when a sessions are created for their users, or false to not send email alerts.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionAlertPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if email alert is sent upon session creation. When enabled, and user signs into their account, they will be sent an email notification. There is an exception, the first session after a new sign up does not trigger an alert, even if the policy is enabled.
     *
     * @param {boolean} enabled - Toggle session alert policy. Set to true if you want users to receive email notifications when a sessions are created for their users, or false to not send email alerts.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionAlertPolicy(enabled: boolean): Promise<Models.Project>;
    updateSessionAlertPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/session-alert';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update maximum duration how long sessions created within a project should stay active for.
     *
     * @param {number} params.duration - Maximum session length in seconds. Minium allowed value is 5 second, and maximum is 1 year, which is 31536000 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionDurationPolicy(params: { duration: number }): Promise<Models.Project>;
    /**
     * Update maximum duration how long sessions created within a project should stay active for.
     *
     * @param {number} duration - Maximum session length in seconds. Minium allowed value is 5 second, and maximum is 1 year, which is 31536000 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionDurationPolicy(duration: number): Promise<Models.Project>;
    updateSessionDurationPolicy(
        paramsOrFirst: { duration: number } | number    
    ): Promise<Models.Project> {
        let params: { duration: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { duration: number };
        } else {
            params = {
                duration: paramsOrFirst as number            
            };
        }
        
        const duration = params.duration;

        if (typeof duration === 'undefined') {
            throw new AppwriteException('Missing required parameter: "duration"');
        }

        const apiPath = '/project/policies/session-duration';
        const payload: Payload = {};
        if (typeof duration !== 'undefined') {
            payload['duration'] = duration;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Updating this policy allows you to control if existing sessions should be invalidated when a password of a user is changed. When enabled, and user changes their password, they will be logged out of all their devices.
     *
     * @param {boolean} params.enabled - Toggle session invalidation policy. Set to true if you want password change to invalidate all sessions of an user, or false to keep sessions active.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionInvalidationPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if existing sessions should be invalidated when a password of a user is changed. When enabled, and user changes their password, they will be logged out of all their devices.
     *
     * @param {boolean} enabled - Toggle session invalidation policy. Set to true if you want password change to invalidate all sessions of an user, or false to keep sessions active.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionInvalidationPolicy(enabled: boolean): Promise<Models.Project>;
    updateSessionInvalidationPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/session-invalidation';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the maximum number of sessions allowed per user. When the limit is hit, the oldest session will be deleted to make room for new one.
     *
     * @param {number} params.total - Set the maximum number of sessions allowed per user. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionLimitPolicy(params: { total?: number }): Promise<Models.Project>;
    /**
     * Update the maximum number of sessions allowed per user. When the limit is hit, the oldest session will be deleted to make room for new one.
     *
     * @param {number} total - Set the maximum number of sessions allowed per user. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionLimitPolicy(total?: number): Promise<Models.Project>;
    updateSessionLimitPolicy(
        paramsOrFirst?: { total?: number } | number    
    ): Promise<Models.Project> {
        let params: { total?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { total?: number };
        } else {
            params = {
                total: paramsOrFirst as number            
            };
        }
        
        const total = params.total;

        if (typeof total === 'undefined') {
            throw new AppwriteException('Missing required parameter: "total"');
        }

        const apiPath = '/project/policies/session-limit';
        const payload: Payload = {};
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the maximum number of users in the project. When the limit is hit or amount of existing users already exceeded the limit, all users remain active, but new user sign up will be prohibited.
     *
     * @param {number} params.total - Set the maximum number of users allowed in the project. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateUserLimitPolicy(params: { total?: number }): Promise<Models.Project>;
    /**
     * Update the maximum number of users in the project. When the limit is hit or amount of existing users already exceeded the limit, all users remain active, but new user sign up will be prohibited.
     *
     * @param {number} total - Set the maximum number of users allowed in the project. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUserLimitPolicy(total?: number): Promise<Models.Project>;
    updateUserLimitPolicy(
        paramsOrFirst?: { total?: number } | number    
    ): Promise<Models.Project> {
        let params: { total?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { total?: number };
        } else {
            params = {
                total: paramsOrFirst as number            
            };
        }
        
        const total = params.total;

        if (typeof total === 'undefined') {
            throw new AppwriteException('Missing required parameter: "total"');
        }

        const apiPath = '/project/policies/user-limit';
        const payload: Payload = {};
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a policy by its unique ID. This endpoint returns the current configuration for the requested project policy.
     *
     * @param {ProjectPolicyId} params.policyId - Policy ID. Can be one of: password-dictionary, password-history, password-strength, password-personal-data, session-alert, session-duration, session-invalidation, session-limit, user-limit, membership-privacy, deny-aliased-email, deny-disposable-email, deny-free-email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PolicyPasswordDictionary | Models.PolicyPasswordHistory | Models.PolicyPasswordStrength | Models.PolicyPasswordPersonalData | Models.PolicySessionAlert | Models.PolicySessionDuration | Models.PolicySessionInvalidation | Models.PolicySessionLimit | Models.PolicyUserLimit | Models.PolicyMembershipPrivacy | Models.PolicyDenyAliasedEmail | Models.PolicyDenyDisposableEmail | Models.PolicyDenyFreeEmail>}
     */
    getPolicy(params: { policyId: ProjectPolicyId }): Promise<Models.PolicyPasswordDictionary | Models.PolicyPasswordHistory | Models.PolicyPasswordStrength | Models.PolicyPasswordPersonalData | Models.PolicySessionAlert | Models.PolicySessionDuration | Models.PolicySessionInvalidation | Models.PolicySessionLimit | Models.PolicyUserLimit | Models.PolicyMembershipPrivacy | Models.PolicyDenyAliasedEmail | Models.PolicyDenyDisposableEmail | Models.PolicyDenyFreeEmail>;
    /**
     * Get a policy by its unique ID. This endpoint returns the current configuration for the requested project policy.
     *
     * @param {ProjectPolicyId} policyId - Policy ID. Can be one of: password-dictionary, password-history, password-strength, password-personal-data, session-alert, session-duration, session-invalidation, session-limit, user-limit, membership-privacy, deny-aliased-email, deny-disposable-email, deny-free-email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PolicyPasswordDictionary | Models.PolicyPasswordHistory | Models.PolicyPasswordStrength | Models.PolicyPasswordPersonalData | Models.PolicySessionAlert | Models.PolicySessionDuration | Models.PolicySessionInvalidation | Models.PolicySessionLimit | Models.PolicyUserLimit | Models.PolicyMembershipPrivacy | Models.PolicyDenyAliasedEmail | Models.PolicyDenyDisposableEmail | Models.PolicyDenyFreeEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPolicy(policyId: ProjectPolicyId): Promise<Models.PolicyPasswordDictionary | Models.PolicyPasswordHistory | Models.PolicyPasswordStrength | Models.PolicyPasswordPersonalData | Models.PolicySessionAlert | Models.PolicySessionDuration | Models.PolicySessionInvalidation | Models.PolicySessionLimit | Models.PolicyUserLimit | Models.PolicyMembershipPrivacy | Models.PolicyDenyAliasedEmail | Models.PolicyDenyDisposableEmail | Models.PolicyDenyFreeEmail>;
    getPolicy(
        paramsOrFirst: { policyId: ProjectPolicyId } | ProjectPolicyId    
    ): Promise<Models.PolicyPasswordDictionary | Models.PolicyPasswordHistory | Models.PolicyPasswordStrength | Models.PolicyPasswordPersonalData | Models.PolicySessionAlert | Models.PolicySessionDuration | Models.PolicySessionInvalidation | Models.PolicySessionLimit | Models.PolicyUserLimit | Models.PolicyMembershipPrivacy | Models.PolicyDenyAliasedEmail | Models.PolicyDenyDisposableEmail | Models.PolicyDenyFreeEmail> {
        let params: { policyId: ProjectPolicyId };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('policyId' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { policyId: ProjectPolicyId };
        } else {
            params = {
                policyId: paramsOrFirst as ProjectPolicyId            
            };
        }
        
        const policyId = params.policyId;

        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }

        const apiPath = '/project/policies/{policyId}'.replace('{policyId}', policyId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update properties of a specific protocol. Use this endpoint to enable or disable a protocol in your project. 
     *
     * @param {ProjectProtocolId} params.protocolId - Protocol name. Can be one of: rest, graphql, websocket
     * @param {boolean} params.enabled - Protocol status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateProtocol(params: { protocolId: ProjectProtocolId, enabled: boolean }): Promise<Models.Project>;
    /**
     * Update properties of a specific protocol. Use this endpoint to enable or disable a protocol in your project. 
     *
     * @param {ProjectProtocolId} protocolId - Protocol name. Can be one of: rest, graphql, websocket
     * @param {boolean} enabled - Protocol status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProtocol(protocolId: ProjectProtocolId, enabled: boolean): Promise<Models.Project>;
    updateProtocol(
        paramsOrFirst: { protocolId: ProjectProtocolId, enabled: boolean } | ProjectProtocolId,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { protocolId: ProjectProtocolId, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('protocolId' in paramsOrFirst || 'enabled' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { protocolId: ProjectProtocolId, enabled: boolean };
        } else {
            params = {
                protocolId: paramsOrFirst as ProjectProtocolId,
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

        const apiPath = '/project/protocols/{protocolId}'.replace('{protocolId}', protocolId);
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update properties of a specific service. Use this endpoint to enable or disable a service in your project. 
     *
     * @param {ProjectServiceId} params.serviceId - Service name. Can be one of: account, avatars, databases, tablesdb, locale, health, project, storage, teams, users, vcs, sites, functions, proxy, graphql, migrations, messaging, advisor
     * @param {boolean} params.enabled - Service status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateService(params: { serviceId: ProjectServiceId, enabled: boolean }): Promise<Models.Project>;
    /**
     * Update properties of a specific service. Use this endpoint to enable or disable a service in your project. 
     *
     * @param {ProjectServiceId} serviceId - Service name. Can be one of: account, avatars, databases, tablesdb, locale, health, project, storage, teams, users, vcs, sites, functions, proxy, graphql, migrations, messaging, advisor
     * @param {boolean} enabled - Service status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateService(serviceId: ProjectServiceId, enabled: boolean): Promise<Models.Project>;
    updateService(
        paramsOrFirst: { serviceId: ProjectServiceId, enabled: boolean } | ProjectServiceId,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { serviceId: ProjectServiceId, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('serviceId' in paramsOrFirst || 'enabled' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { serviceId: ProjectServiceId, enabled: boolean };
        } else {
            params = {
                serviceId: paramsOrFirst as ProjectServiceId,
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

        const apiPath = '/project/services/{serviceId}'.replace('{serviceId}', serviceId);
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the SMTP configuration for your project. Use this endpoint to configure your project's SMTP provider with your custom settings for sending transactional emails.
     *
     * @param {string} params.host - SMTP server hostname (domain)
     * @param {number} params.port - SMTP server port
     * @param {string} params.username - SMTP server username. Pass an empty string to clear a previously set value.
     * @param {string} params.password - SMTP server password. Pass an empty string to clear a previously set value. This property is stored securely and cannot be read in future (write-only).
     * @param {string} params.senderEmail - Email address shown in inbox as the sender of the email. Pass an empty string to clear a previously set value.
     * @param {string} params.senderName - Name shown in inbox as the sender of the email. Pass an empty string to clear a previously set value.
     * @param {string} params.replyToEmail - Email used when user replies to the email. Pass an empty string to clear a previously set value.
     * @param {string} params.replyToName - Name used when user replies to the email. Pass an empty string to clear a previously set value.
     * @param {ProjectSMTPSecure} params.secure - Configures if communication with SMTP server is encrypted. Allowed values are: tls, ssl. Leave empty for no encryption.
     * @param {boolean} params.enabled - Enable or disable custom SMTP. Custom SMTP is useful for branding purposes, but also allows use of custom email templates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSMTP(params?: { host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: ProjectSMTPSecure, enabled?: boolean }): Promise<Models.Project>;
    /**
     * Update the SMTP configuration for your project. Use this endpoint to configure your project's SMTP provider with your custom settings for sending transactional emails.
     *
     * @param {string} host - SMTP server hostname (domain)
     * @param {number} port - SMTP server port
     * @param {string} username - SMTP server username. Pass an empty string to clear a previously set value.
     * @param {string} password - SMTP server password. Pass an empty string to clear a previously set value. This property is stored securely and cannot be read in future (write-only).
     * @param {string} senderEmail - Email address shown in inbox as the sender of the email. Pass an empty string to clear a previously set value.
     * @param {string} senderName - Name shown in inbox as the sender of the email. Pass an empty string to clear a previously set value.
     * @param {string} replyToEmail - Email used when user replies to the email. Pass an empty string to clear a previously set value.
     * @param {string} replyToName - Name used when user replies to the email. Pass an empty string to clear a previously set value.
     * @param {ProjectSMTPSecure} secure - Configures if communication with SMTP server is encrypted. Allowed values are: tls, ssl. Leave empty for no encryption.
     * @param {boolean} enabled - Enable or disable custom SMTP. Custom SMTP is useful for branding purposes, but also allows use of custom email templates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSMTP(host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: ProjectSMTPSecure, enabled?: boolean): Promise<Models.Project>;
    updateSMTP(
        paramsOrFirst?: { host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: ProjectSMTPSecure, enabled?: boolean } | string,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (ProjectSMTPSecure)?, (boolean)?]    
    ): Promise<Models.Project> {
        let params: { host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: ProjectSMTPSecure, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: ProjectSMTPSecure, enabled?: boolean };
        } else {
            params = {
                host: paramsOrFirst as string,
                port: rest[0] as number,
                username: rest[1] as string,
                password: rest[2] as string,
                senderEmail: rest[3] as string,
                senderName: rest[4] as string,
                replyToEmail: rest[5] as string,
                replyToName: rest[6] as string,
                secure: rest[7] as ProjectSMTPSecure,
                enabled: rest[8] as boolean            
            };
        }
        
        const host = params.host;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const senderEmail = params.senderEmail;
        const senderName = params.senderName;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;
        const secure = params.secure;
        const enabled = params.enabled;


        const apiPath = '/project/smtp';
        const payload: Payload = {};
        if (typeof host !== 'undefined') {
            payload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof senderEmail !== 'undefined') {
            payload['senderEmail'] = senderEmail;
        }
        if (typeof senderName !== 'undefined') {
            payload['senderName'] = senderName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof secure !== 'undefined') {
            payload['secure'] = secure;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Send a test email to verify SMTP configuration. 
     *
     * @param {string[]} params.emails - Array of emails to send test email to. Maximum of 10 emails are allowed.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createSMTPTest(params: { emails: string[] }): Promise<{}>;
    /**
     * Send a test email to verify SMTP configuration. 
     *
     * @param {string[]} emails - Array of emails to send test email to. Maximum of 10 emails are allowed.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSMTPTest(emails: string[]): Promise<{}>;
    createSMTPTest(
        paramsOrFirst: { emails: string[] } | string[]    
    ): Promise<{}> {
        let params: { emails: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { emails: string[] };
        } else {
            params = {
                emails: paramsOrFirst as string[]            
            };
        }
        
        const emails = params.emails;

        if (typeof emails === 'undefined') {
            throw new AppwriteException('Missing required parameter: "emails"');
        }

        const apiPath = '/project/smtp/tests';
        const payload: Payload = {};
        if (typeof emails !== 'undefined') {
            payload['emails'] = emails;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
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
     * Get a list of all custom email templates configured for the project. This endpoint returns an array of all configured email templates and their locales.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplateList>}
     */
    listEmailTemplates(params?: { queries?: string[], total?: boolean }): Promise<Models.EmailTemplateList>;
    /**
     * Get a list of all custom email templates configured for the project. This endpoint returns an array of all configured email templates and their locales.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplateList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listEmailTemplates(queries?: string[], total?: boolean): Promise<Models.EmailTemplateList>;
    listEmailTemplates(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.EmailTemplateList> {
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


        const apiPath = '/project/templates/email';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update a custom email template for the specified locale and type. Use this endpoint to modify the content of your email templates.
     *
     * @param {ProjectEmailTemplateId} params.templateId - Custom email template type. Can be one of: verification, magicSession, recovery, invitation, mfaChallenge, sessionAlert, otpSession
     * @param {ProjectEmailTemplateLocale} params.locale - Custom email template locale. If left empty, the fallback locale (en) will be used.
     * @param {string} params.subject - Subject of the email template. Can be up to 255 characters.
     * @param {string} params.message - Plain or HTML body of the email template message. Can be up to 10MB of content.
     * @param {string} params.senderName - Name of the email sender.
     * @param {string} params.senderEmail - Email of the sender. Pass an empty string to clear a previously set value.
     * @param {string} params.replyToEmail - Reply to email. Pass an empty string to clear a previously set value.
     * @param {string} params.replyToName - Reply to name.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    updateEmailTemplate(params: { templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string }): Promise<Models.EmailTemplate>;
    /**
     * Update a custom email template for the specified locale and type. Use this endpoint to modify the content of your email templates.
     *
     * @param {ProjectEmailTemplateId} templateId - Custom email template type. Can be one of: verification, magicSession, recovery, invitation, mfaChallenge, sessionAlert, otpSession
     * @param {ProjectEmailTemplateLocale} locale - Custom email template locale. If left empty, the fallback locale (en) will be used.
     * @param {string} subject - Subject of the email template. Can be up to 255 characters.
     * @param {string} message - Plain or HTML body of the email template message. Can be up to 10MB of content.
     * @param {string} senderName - Name of the email sender.
     * @param {string} senderEmail - Email of the sender. Pass an empty string to clear a previously set value.
     * @param {string} replyToEmail - Reply to email. Pass an empty string to clear a previously set value.
     * @param {string} replyToName - Reply to name.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailTemplate(templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string): Promise<Models.EmailTemplate>;
    updateEmailTemplate(
        paramsOrFirst: { templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string } | ProjectEmailTemplateId,
        ...rest: [(ProjectEmailTemplateLocale)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.EmailTemplate> {
        let params: { templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('templateId' in paramsOrFirst || 'locale' in paramsOrFirst || 'subject' in paramsOrFirst || 'message' in paramsOrFirst || 'senderName' in paramsOrFirst || 'senderEmail' in paramsOrFirst || 'replyToEmail' in paramsOrFirst || 'replyToName' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string };
        } else {
            params = {
                templateId: paramsOrFirst as ProjectEmailTemplateId,
                locale: rest[0] as ProjectEmailTemplateLocale,
                subject: rest[1] as string,
                message: rest[2] as string,
                senderName: rest[3] as string,
                senderEmail: rest[4] as string,
                replyToEmail: rest[5] as string,
                replyToName: rest[6] as string            
            };
        }
        
        const templateId = params.templateId;
        const locale = params.locale;
        const subject = params.subject;
        const message = params.message;
        const senderName = params.senderName;
        const senderEmail = params.senderEmail;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;

        if (typeof templateId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "templateId"');
        }

        const apiPath = '/project/templates/email';
        const payload: Payload = {};
        if (typeof templateId !== 'undefined') {
            payload['templateId'] = templateId;
        }
        if (typeof locale !== 'undefined') {
            payload['locale'] = locale;
        }
        if (typeof subject !== 'undefined') {
            payload['subject'] = subject;
        }
        if (typeof message !== 'undefined') {
            payload['message'] = message;
        }
        if (typeof senderName !== 'undefined') {
            payload['senderName'] = senderName;
        }
        if (typeof senderEmail !== 'undefined') {
            payload['senderEmail'] = senderEmail;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a custom email template for the specified locale and type. This endpoint returns the template content, subject, and other configuration details.
     *
     * @param {ProjectEmailTemplateId} params.templateId - Custom email template type. Can be one of: verification, magicSession, recovery, invitation, mfaChallenge, sessionAlert, otpSession
     * @param {ProjectEmailTemplateLocale} params.locale - Custom email template locale. If left empty, the fallback locale (en) will be used.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    getEmailTemplate(params: { templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale }): Promise<Models.EmailTemplate>;
    /**
     * Get a custom email template for the specified locale and type. This endpoint returns the template content, subject, and other configuration details.
     *
     * @param {ProjectEmailTemplateId} templateId - Custom email template type. Can be one of: verification, magicSession, recovery, invitation, mfaChallenge, sessionAlert, otpSession
     * @param {ProjectEmailTemplateLocale} locale - Custom email template locale. If left empty, the fallback locale (en) will be used.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getEmailTemplate(templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale): Promise<Models.EmailTemplate>;
    getEmailTemplate(
        paramsOrFirst: { templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale } | ProjectEmailTemplateId,
        ...rest: [(ProjectEmailTemplateLocale)?]    
    ): Promise<Models.EmailTemplate> {
        let params: { templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('templateId' in paramsOrFirst || 'locale' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { templateId: ProjectEmailTemplateId, locale?: ProjectEmailTemplateLocale };
        } else {
            params = {
                templateId: paramsOrFirst as ProjectEmailTemplateId,
                locale: rest[0] as ProjectEmailTemplateLocale            
            };
        }
        
        const templateId = params.templateId;
        const locale = params.locale;

        if (typeof templateId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "templateId"');
        }

        const apiPath = '/project/templates/email/{templateId}'.replace('{templateId}', templateId);
        const payload: Payload = {};
        if (typeof locale !== 'undefined') {
            payload['locale'] = locale;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
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
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
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
     * @param {string} params.variableId - Variable unique ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
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
     * @param {string} variableId - Variable unique ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: { variableId: string }): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID. 
     *
     * @param {string} variableId - Variable unique ID.
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
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
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
     * @param {string} params.variableId - Variable unique ID.
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
     * @param {string} variableId - Variable unique ID.
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
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
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
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: { variableId: string }): Promise<{}>;
    /**
     * Delete a variable by its unique ID. 
     *
     * @param {string} variableId - Variable unique ID.
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
            'X-Appwrite-Project': this.client.config.project,
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
