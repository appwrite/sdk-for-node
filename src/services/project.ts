import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Project {
    client: Client;

    constructor(client: Client) {
        this.client = client;
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
