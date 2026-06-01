import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


import { OrganizationKeyScopes } from '../enums/organization-key-scopes';
import { Region } from '../enums/region';

export class Organization {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all API keys from the current organization.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire, accessedAt, name, scopes
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     */
    listKeys(params?: { queries?: string[], total?: boolean }): Promise<Models.KeyList>;
    /**
     * Get a list of all API keys from the current organization.
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


        const apiPath = '/organization/keys';
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
     * Create a new organization API key.
     *
     * @param {string} params.keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {OrganizationKeyScopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    createKey(params: { keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Create a new organization API key.
     *
     * @param {string} keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {OrganizationKeyScopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createKey(keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string): Promise<Models.Key>;
    createKey(
        paramsOrFirst: { keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string } | string,
        ...rest: [(string)?, (OrganizationKeyScopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as OrganizationKeyScopes[],
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

        const apiPath = '/organization/keys';
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
     * Get a key by its unique ID. This endpoint returns details about a specific API key in your organization including its scopes.
     *
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    getKey(params: { keyId: string }): Promise<Models.Key>;
    /**
     * Get a key by its unique ID. This endpoint returns details about a specific API key in your organization including its scopes.
     *
     * @param {string} keyId - Key unique ID.
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

        const apiPath = '/organization/keys/{keyId}'.replace('{keyId}', keyId);
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
     * @param {string} params.keyId - Key unique ID.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {OrganizationKeyScopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    updateKey(params: { keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} keyId - Key unique ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {OrganizationKeyScopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateKey(keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string): Promise<Models.Key>;
    updateKey(
        paramsOrFirst: { keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string } | string,
        ...rest: [(string)?, (OrganizationKeyScopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string, name: string, scopes: OrganizationKeyScopes[], expire?: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as OrganizationKeyScopes[],
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

        const apiPath = '/organization/keys/{keyId}'.replace('{keyId}', keyId);
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
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteKey(params: { keyId: string }): Promise<{}>;
    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} keyId - Key unique ID.
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

        const apiPath = '/organization/keys/{keyId}'.replace('{keyId}', keyId);
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
     * Get a list of all projects. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId, labels, search
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProjectList>}
     */
    listProjects(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.ProjectList>;
    /**
     * Get a list of all projects. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId, labels, search
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProjectList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listProjects(queries?: string[], search?: string, total?: boolean): Promise<Models.ProjectList>;
    listProjects(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.ProjectList> {
        let params: { queries?: string[], search?: string, total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean            
            };
        }
        
        const queries = params.queries;
        const search = params.search;
        const total = params.total;


        const apiPath = '/organization/projects';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new project.
     *
     * @param {string} params.projectId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, and hyphen. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Project name. Max length: 128 chars.
     * @param {Region} params.region - Project Region.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    createProject(params: { projectId: string, name: string, region?: Region }): Promise<Models.Project>;
    /**
     * Create a new project.
     *
     * @param {string} projectId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, and hyphen. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Project name. Max length: 128 chars.
     * @param {Region} region - Project Region.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createProject(projectId: string, name: string, region?: Region): Promise<Models.Project>;
    createProject(
        paramsOrFirst: { projectId: string, name: string, region?: Region } | string,
        ...rest: [(string)?, (Region)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, name: string, region?: Region };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, name: string, region?: Region };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                name: rest[0] as string,
                region: rest[1] as Region            
            };
        }
        
        const projectId = params.projectId;
        const name = params.name;
        const region = params.region;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/organization/projects';
        const payload: Payload = {};
        if (typeof projectId !== 'undefined') {
            payload['projectId'] = projectId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof region !== 'undefined') {
            payload['region'] = region;
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
     * Get a project.
     *
     * @param {string} params.projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    getProject(params: { projectId: string }): Promise<Models.Project>;
    /**
     * Get a project.
     *
     * @param {string} projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getProject(projectId: string): Promise<Models.Project>;
    getProject(
        paramsOrFirst: { projectId: string } | string    
    ): Promise<Models.Project> {
        let params: { projectId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string            
            };
        }
        
        const projectId = params.projectId;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        const apiPath = '/organization/projects/{projectId}'.replace('{projectId}', projectId);
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
     * Update a project by its unique ID.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string} params.name - Project name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateProject(params: { projectId: string, name: string }): Promise<Models.Project>;
    /**
     * Update a project by its unique ID.
     *
     * @param {string} projectId - Project unique ID.
     * @param {string} name - Project name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProject(projectId: string, name: string): Promise<Models.Project>;
    updateProject(
        paramsOrFirst: { projectId: string, name: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, name: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, name: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                name: rest[0] as string            
            };
        }
        
        const projectId = params.projectId;
        const name = params.name;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/organization/projects/{projectId}'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
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
     * Delete a project by its unique ID.
     *
     * @param {string} params.projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteProject(params: { projectId: string }): Promise<{}>;
    /**
     * Delete a project by its unique ID.
     *
     * @param {string} projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteProject(projectId: string): Promise<{}>;
    deleteProject(
        paramsOrFirst: { projectId: string } | string    
    ): Promise<{}> {
        let params: { projectId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string            
            };
        }
        
        const projectId = params.projectId;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        const apiPath = '/organization/projects/{projectId}'.replace('{projectId}', projectId);
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
