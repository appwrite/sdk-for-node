import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { RelationshipType } from '../enums/relationship-type';
import { RelationMutate } from '../enums/relation-mutate';
import { IndexType } from '../enums/index-type';

export class TablesDB {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     */
    list(params?: { queries?: string[], search?: string  }): Promise<Models.DatabaseList>;
    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string): Promise<Models.DatabaseList>;
    list(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.DatabaseList> {
        let params: { queries?: string[], search?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/tablesdb';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new Database.
     * 
     *
     * @param {string} params.databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    create(params: { databaseId: string, name: string, enabled?: boolean  }): Promise<Models.Database>;
    /**
     * Create a new Database.
     * 
     *
     * @param {string} databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database>;
    create(
        paramsOrFirst: { databaseId: string, name: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.Database> {
        let params: { databaseId: string, name: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, name: string, enabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const name = params.name;
        const enabled = params.enabled;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/tablesdb';
        const payload: Payload = {};
        if (typeof databaseId !== 'undefined') {
            payload['databaseId'] = databaseId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    get(params: { databaseId: string  }): Promise<Models.Database>;
    /**
     * Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(databaseId: string): Promise<Models.Database>;
    get(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.Database> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/tablesdb/{databaseId}'.replace('{databaseId}', databaseId);
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
     * Update a database by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    update(params: { databaseId: string, name: string, enabled?: boolean  }): Promise<Models.Database>;
    /**
     * Update a database by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database>;
    update(
        paramsOrFirst: { databaseId: string, name: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.Database> {
        let params: { databaseId: string, name: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, name: string, enabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const name = params.name;
        const enabled = params.enabled;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/tablesdb/{databaseId}'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { databaseId: string  }): Promise<{}>;
    /**
     * Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(databaseId: string): Promise<{}>;
    delete(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<{}> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/tablesdb/{databaseId}'.replace('{databaseId}', databaseId);
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
     * Get a list of all tables that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name, enabled, rowSecurity
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TableList>}
     */
    listTables(params: { databaseId: string, queries?: string[], search?: string  }): Promise<Models.TableList>;
    /**
     * Get a list of all tables that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name, enabled, rowSecurity
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTables(databaseId: string, queries?: string[], search?: string): Promise<Models.TableList>;
    listTables(
        paramsOrFirst: { databaseId: string, queries?: string[], search?: string } | string,
        ...rest: [(string[])?, (string)?]    
    ): Promise<Models.TableList> {
        let params: { databaseId: string, queries?: string[], search?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, queries?: string[], search?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const queries = params.queries;
        const search = params.search;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new Table. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Table name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    createTable(params: { databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean  }): Promise<Models.Table>;
    /**
     * Create a new Table. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Table name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTable(databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean): Promise<Models.Table>;
    createTable(
        paramsOrFirst: { databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (boolean)?]    
    ): Promise<Models.Table> {
        let params: { databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                name: rest[1] as string,
                permissions: rest[2] as string[],
                rowSecurity: rest[3] as boolean,
                enabled: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const name = params.name;
        const permissions = params.permissions;
        const rowSecurity = params.rowSecurity;
        const enabled = params.enabled;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof tableId !== 'undefined') {
            payload['tableId'] = tableId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof rowSecurity !== 'undefined') {
            payload['rowSecurity'] = rowSecurity;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Get a table by its unique ID. This endpoint response returns a JSON object with the table metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    getTable(params: { databaseId: string, tableId: string  }): Promise<Models.Table>;
    /**
     * Get a table by its unique ID. This endpoint response returns a JSON object with the table metadata.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTable(databaseId: string, tableId: string): Promise<Models.Table>;
    getTable(
        paramsOrFirst: { databaseId: string, tableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Table> {
        let params: { databaseId: string, tableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update a table by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.name - Table name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    updateTable(params: { databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean  }): Promise<Models.Table>;
    /**
     * Update a table by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} name - Table name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTable(databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean): Promise<Models.Table>;
    updateTable(
        paramsOrFirst: { databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (boolean)?]    
    ): Promise<Models.Table> {
        let params: { databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                name: rest[1] as string,
                permissions: rest[2] as string[],
                rowSecurity: rest[3] as boolean,
                enabled: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const name = params.name;
        const permissions = params.permissions;
        const rowSecurity = params.rowSecurity;
        const enabled = params.enabled;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof rowSecurity !== 'undefined') {
            payload['rowSecurity'] = rowSecurity;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Delete a table by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTable(params: { databaseId: string, tableId: string  }): Promise<{}>;
    /**
     * Delete a table by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteTable(databaseId: string, tableId: string): Promise<{}>;
    deleteTable(
        paramsOrFirst: { databaseId: string, tableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, tableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * List columns in the table.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, size, required, array, status, error
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     */
    listColumns(params: { databaseId: string, tableId: string, queries?: string[]  }): Promise<Models.ColumnList>;
    /**
     * List columns in the table.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, size, required, array, status, error
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listColumns(databaseId: string, tableId: string, queries?: string[]): Promise<Models.ColumnList>;
    listColumns(
        paramsOrFirst: { databaseId: string, tableId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.ColumnList> {
        let params: { databaseId: string, tableId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                queries: rest[1] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const queries = params.queries;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Create a boolean column.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {boolean} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     */
    createBooleanColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean  }): Promise<Models.ColumnBoolean>;
    /**
     * Create a boolean column.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {boolean} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBooleanColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.ColumnBoolean>;
    createBooleanColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (boolean)?, (boolean)?]    
    ): Promise<Models.ColumnBoolean> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as boolean,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/boolean'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update a boolean column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {boolean} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     */
    updateBooleanColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string  }): Promise<Models.ColumnBoolean>;
    /**
     * Update a boolean column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {boolean} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBooleanColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.ColumnBoolean>;
    updateBooleanColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (boolean)?, (string)?]    
    ): Promise<Models.ColumnBoolean> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as boolean,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/boolean/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a date time column according to the ISO 8601 standard.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for the column in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     */
    createDatetimeColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.ColumnDatetime>;
    /**
     * Create a date time column according to the ISO 8601 standard.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for the column in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatetimeColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnDatetime>;
    createDatetimeColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.ColumnDatetime> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/datetime'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update a date time column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     */
    updateDatetimeColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.ColumnDatetime>;
    /**
     * Update a date time column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatetimeColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnDatetime>;
    updateDatetimeColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.ColumnDatetime> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/datetime/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create an email column.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     */
    createEmailColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.ColumnEmail>;
    /**
     * Create an email column.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmailColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnEmail>;
    createEmailColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.ColumnEmail> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/email'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an email column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     */
    updateEmailColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.ColumnEmail>;
    /**
     * Update an email column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnEmail>;
    updateEmailColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.ColumnEmail> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/email/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create an enumeration column. The `elements` param acts as a white-list of accepted values for this column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {string[]} params.elements - Array of enum values.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     */
    createEnumColumn(params: { databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.ColumnEnum>;
    /**
     * Create an enumeration column. The `elements` param acts as a white-list of accepted values for this column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {string[]} elements - Array of enum values.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEnumColumn(databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnEnum>;
    createEnumColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.ColumnEnum> {
        let params: { databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                elements: rest[2] as string[],
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                array: rest[5] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const elements = params.elements;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof elements === 'undefined') {
            throw new AppwriteException('Missing required parameter: "elements"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/enum'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof elements !== 'undefined') {
            payload['elements'] = elements;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an enum column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {string[]} params.elements - Updated list of enum values.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     */
    updateEnumColumn(params: { databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.ColumnEnum>;
    /**
     * Update an enum column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {string[]} elements - Updated list of enum values.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEnumColumn(databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnEnum>;
    updateEnumColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.ColumnEnum> {
        let params: { databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                elements: rest[2] as string[],
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                newKey: rest[5] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const elements = params.elements;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof elements === 'undefined') {
            throw new AppwriteException('Missing required parameter: "elements"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/enum/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof elements !== 'undefined') {
            payload['elements'] = elements;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a float column. Optionally, minimum and maximum values can be provided.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number} params.min - Minimum value
     * @param {number} params.max - Maximum value
     * @param {number} params.xdefault - Default value. Cannot be set when required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     */
    createFloatColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean  }): Promise<Models.ColumnFloat>;
    /**
     * Create a float column. Optionally, minimum and maximum values can be provided.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @param {number} xdefault - Default value. Cannot be set when required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFloatColumn(databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.ColumnFloat>;
    createFloatColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (boolean)?]    
    ): Promise<Models.ColumnFloat> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number,
                max: rest[4] as number,
                xdefault: rest[5] as number,
                array: rest[6] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const min = params.min;
        const max = params.max;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/float'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update a float column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number} params.xdefault - Default value. Cannot be set when required.
     * @param {number} params.min - Minimum value
     * @param {number} params.max - Maximum value
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     */
    updateFloatColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string  }): Promise<Models.ColumnFloat>;
    /**
     * Update a float column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number} xdefault - Default value. Cannot be set when required.
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFloatColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.ColumnFloat>;
    updateFloatColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.ColumnFloat> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number,
                min: rest[4] as number,
                max: rest[5] as number,
                newKey: rest[6] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const min = params.min;
        const max = params.max;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/float/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create an integer column. Optionally, minimum and maximum values can be provided.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number} params.min - Minimum value
     * @param {number} params.max - Maximum value
     * @param {number} params.xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     */
    createIntegerColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean  }): Promise<Models.ColumnInteger>;
    /**
     * Create an integer column. Optionally, minimum and maximum values can be provided.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @param {number} xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIntegerColumn(databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.ColumnInteger>;
    createIntegerColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (boolean)?]    
    ): Promise<Models.ColumnInteger> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number,
                max: rest[4] as number,
                xdefault: rest[5] as number,
                array: rest[6] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const min = params.min;
        const max = params.max;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/integer'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an integer column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number} params.xdefault - Default value. Cannot be set when column is required.
     * @param {number} params.min - Minimum value
     * @param {number} params.max - Maximum value
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     */
    updateIntegerColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string  }): Promise<Models.ColumnInteger>;
    /**
     * Update an integer column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number} xdefault - Default value. Cannot be set when column is required.
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIntegerColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.ColumnInteger>;
    updateIntegerColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.ColumnInteger> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number,
                min: rest[4] as number,
                max: rest[5] as number,
                newKey: rest[6] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const min = params.min;
        const max = params.max;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/integer/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create IP address column.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     */
    createIpColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.ColumnIp>;
    /**
     * Create IP address column.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIpColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnIp>;
    createIpColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.ColumnIp> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/ip'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an ip column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     */
    updateIpColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.ColumnIp>;
    /**
     * Update an ip column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIpColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnIp>;
    updateIpColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.ColumnIp> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/ip/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a geometric line column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     */
    createLineColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string  }): Promise<Models.ColumnLine>;
    /**
     * Create a geometric line column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLineColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string): Promise<Models.ColumnLine>;
    createLineColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.ColumnLine> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/line'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
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
     * Update a line column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     */
    updateLineColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.ColumnLine>;
    /**
     * Update a line column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLineColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnLine>;
    updateLineColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.ColumnLine> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/line/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a geometric point column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     */
    createPointColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string  }): Promise<Models.ColumnPoint>;
    /**
     * Create a geometric point column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPointColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string): Promise<Models.ColumnPoint>;
    createPointColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.ColumnPoint> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/point'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
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
     * Update a point column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     */
    updatePointColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.ColumnPoint>;
    /**
     * Update a point column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePointColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnPoint>;
    updatePointColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.ColumnPoint> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/point/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a geometric polygon column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     */
    createPolygonColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string  }): Promise<Models.ColumnPolygon>;
    /**
     * Create a geometric polygon column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPolygonColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string): Promise<Models.ColumnPolygon>;
    createPolygonColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.ColumnPolygon> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/polygon'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
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
     * Update a polygon column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     */
    updatePolygonColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.ColumnPolygon>;
    /**
     * Update a polygon column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided, as JSON string. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePolygonColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnPolygon>;
    updatePolygonColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.ColumnPolygon> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/polygon/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.relatedTableId - Related Table ID.
     * @param {RelationshipType} params.type - Relation type
     * @param {boolean} params.twoWay - Is Two Way?
     * @param {string} params.key - Column Key.
     * @param {string} params.twoWayKey - Two Way Column Key.
     * @param {RelationMutate} params.onDelete - Constraints option
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     */
    createRelationshipColumn(params: { databaseId: string, tableId: string, relatedTableId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate  }): Promise<Models.ColumnRelationship>;
    /**
     * Create relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} relatedTableId - Related Table ID.
     * @param {RelationshipType} type - Relation type
     * @param {boolean} twoWay - Is Two Way?
     * @param {string} key - Column Key.
     * @param {string} twoWayKey - Two Way Column Key.
     * @param {RelationMutate} onDelete - Constraints option
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRelationshipColumn(databaseId: string, tableId: string, relatedTableId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.ColumnRelationship>;
    createRelationshipColumn(
        paramsOrFirst: { databaseId: string, tableId: string, relatedTableId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate } | string,
        ...rest: [(string)?, (string)?, (RelationshipType)?, (boolean)?, (string)?, (string)?, (RelationMutate)?]    
    ): Promise<Models.ColumnRelationship> {
        let params: { databaseId: string, tableId: string, relatedTableId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, relatedTableId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                relatedTableId: rest[1] as string,
                type: rest[2] as RelationshipType,
                twoWay: rest[3] as boolean,
                key: rest[4] as string,
                twoWayKey: rest[5] as string,
                onDelete: rest[6] as RelationMutate            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const relatedTableId = params.relatedTableId;
        const type = params.type;
        const twoWay = params.twoWay;
        const key = params.key;
        const twoWayKey = params.twoWayKey;
        const onDelete = params.onDelete;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof relatedTableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "relatedTableId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/relationship'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof relatedTableId !== 'undefined') {
            payload['relatedTableId'] = relatedTableId;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof twoWay !== 'undefined') {
            payload['twoWay'] = twoWay;
        }
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof twoWayKey !== 'undefined') {
            payload['twoWayKey'] = twoWayKey;
        }
        if (typeof onDelete !== 'undefined') {
            payload['onDelete'] = onDelete;
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
     * Create a string column.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {number} params.size - Column size for text columns, in number of characters.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     */
    createStringColumn(params: { databaseId: string, tableId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean  }): Promise<Models.ColumnString>;
    /**
     * Create a string column.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {number} size - Column size for text columns, in number of characters.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createStringColumn(databaseId: string, tableId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.ColumnString>;
    createStringColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (boolean)?, (string)?, (boolean)?, (boolean)?]    
    ): Promise<Models.ColumnString> {
        let params: { databaseId: string, tableId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                size: rest[2] as number,
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                array: rest[5] as boolean,
                encrypt: rest[6] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const size = params.size;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        const encrypt = params.encrypt;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof size === 'undefined') {
            throw new AppwriteException('Missing required parameter: "size"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/string'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        if (typeof encrypt !== 'undefined') {
            payload['encrypt'] = encrypt;
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
     * Update a string column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} params.size - Maximum size of the string column.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     */
    updateStringColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string  }): Promise<Models.ColumnString>;
    /**
     * Update a string column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} size - Maximum size of the string column.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateStringColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.ColumnString>;
    updateStringColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.ColumnString> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                size: rest[4] as number,
                newKey: rest[5] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const size = params.size;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/string/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a URL column.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     */
    createUrlColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.ColumnUrl>;
    /**
     * Create a URL column.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createUrlColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnUrl>;
    createUrlColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.ColumnUrl> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/url'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an url column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     */
    updateUrlColumn(params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.ColumnUrl>;
    /**
     * Update an url column. Changing the `default` value will not update already existing rows.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUrlColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnUrl>;
    updateUrlColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.ColumnUrl> {
        let params: { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/url/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Get column by ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getColumn(params: { databaseId: string, tableId: string, key: string  }): Promise<{}>;
    /**
     * Get column by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getColumn(databaseId: string, tableId: string, key: string): Promise<{}>;
    getColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, tableId: string, key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Deletes a column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteColumn(params: { databaseId: string, tableId: string, key: string  }): Promise<{}>;
    /**
     * Deletes a column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteColumn(databaseId: string, tableId: string, key: string): Promise<{}>;
    deleteColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, tableId: string, key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Update relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {RelationMutate} params.onDelete - Constraints option
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     */
    updateRelationshipColumn(params: { databaseId: string, tableId: string, key: string, onDelete?: RelationMutate, newKey?: string  }): Promise<Models.ColumnRelationship>;
    /**
     * Update relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {RelationMutate} onDelete - Constraints option
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRelationshipColumn(databaseId: string, tableId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.ColumnRelationship>;
    updateRelationshipColumn(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, onDelete?: RelationMutate, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (RelationMutate)?, (string)?]    
    ): Promise<Models.ColumnRelationship> {
        let params: { databaseId: string, tableId: string, key: string, onDelete?: RelationMutate, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, onDelete?: RelationMutate, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                onDelete: rest[2] as RelationMutate,
                newKey: rest[3] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const onDelete = params.onDelete;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/{key}/relationship'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
        const payload: Payload = {};
        if (typeof onDelete !== 'undefined') {
            payload['onDelete'] = onDelete;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * List indexes on the table.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, status, attributes, error
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     */
    listIndexes(params: { databaseId: string, tableId: string, queries?: string[]  }): Promise<Models.ColumnIndexList>;
    /**
     * List indexes on the table.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, status, attributes, error
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listIndexes(databaseId: string, tableId: string, queries?: string[]): Promise<Models.ColumnIndexList>;
    listIndexes(
        paramsOrFirst: { databaseId: string, tableId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.ColumnIndexList> {
        let params: { databaseId: string, tableId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                queries: rest[1] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const queries = params.queries;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Creates an index on the columns listed. Your index should include all the columns you will query in a single request.
     * Type can be `key`, `fulltext`, or `unique`.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Index Key.
     * @param {IndexType} params.type - Index type.
     * @param {string[]} params.columns - Array of columns to index. Maximum of 100 columns are allowed, each 32 characters long.
     * @param {string[]} params.orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} params.lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     */
    createIndex(params: { databaseId: string, tableId: string, key: string, type: IndexType, columns: string[], orders?: string[], lengths?: number[]  }): Promise<Models.ColumnIndex>;
    /**
     * Creates an index on the columns listed. Your index should include all the columns you will query in a single request.
     * Type can be `key`, `fulltext`, or `unique`.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Index Key.
     * @param {IndexType} type - Index type.
     * @param {string[]} columns - Array of columns to index. Maximum of 100 columns are allowed, each 32 characters long.
     * @param {string[]} orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIndex(databaseId: string, tableId: string, key: string, type: IndexType, columns: string[], orders?: string[], lengths?: number[]): Promise<Models.ColumnIndex>;
    createIndex(
        paramsOrFirst: { databaseId: string, tableId: string, key: string, type: IndexType, columns: string[], orders?: string[], lengths?: number[] } | string,
        ...rest: [(string)?, (string)?, (IndexType)?, (string[])?, (string[])?, (number[])?]    
    ): Promise<Models.ColumnIndex> {
        let params: { databaseId: string, tableId: string, key: string, type: IndexType, columns: string[], orders?: string[], lengths?: number[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string, type: IndexType, columns: string[], orders?: string[], lengths?: number[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                type: rest[2] as IndexType,
                columns: rest[3] as string[],
                orders: rest[4] as string[],
                lengths: rest[5] as number[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const type = params.type;
        const columns = params.columns;
        const orders = params.orders;
        const lengths = params.lengths;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof columns === 'undefined') {
            throw new AppwriteException('Missing required parameter: "columns"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof columns !== 'undefined') {
            payload['columns'] = columns;
        }
        if (typeof orders !== 'undefined') {
            payload['orders'] = orders;
        }
        if (typeof lengths !== 'undefined') {
            payload['lengths'] = lengths;
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
     * Get index by ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     */
    getIndex(params: { databaseId: string, tableId: string, key: string  }): Promise<Models.ColumnIndex>;
    /**
     * Get index by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getIndex(databaseId: string, tableId: string, key: string): Promise<Models.ColumnIndex>;
    getIndex(
        paramsOrFirst: { databaseId: string, tableId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.ColumnIndex> {
        let params: { databaseId: string, tableId: string, key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Delete an index.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIndex(params: { databaseId: string, tableId: string, key: string  }): Promise<{}>;
    /**
     * Delete an index.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteIndex(databaseId: string, tableId: string, key: string): Promise<{}>;
    deleteIndex(
        paramsOrFirst: { databaseId: string, tableId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, tableId: string, key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, key: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Get a list of all the user's rows in a given table. You can use the query params to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TableDB service [server integration](https://appwrite.io/docs/server/tablesdbdb#tablesdbCreate).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    listRows<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, queries?: string[]  }): Promise<Models.RowList<Row>>;
    /**
     * Get a list of all the user's rows in a given table. You can use the query params to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TableDB service [server integration](https://appwrite.io/docs/server/tablesdbdb#tablesdbCreate).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, queries?: string[]): Promise<Models.RowList<Row>>;
    listRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.RowList<Row>> {
        let params: { databaseId: string, tableId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                queries: rest[1] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const queries = params.queries;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Create a new Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate). Make sure to define columns before creating rows.
     * @param {string} params.rowId - Row ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>} params.data - Row data as JSON object.
     * @param {string[]} params.permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    createRow<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, rowId: string, data: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>, permissions?: string[]  }): Promise<Row>;
    /**
     * Create a new Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate). Make sure to define columns before creating rows.
     * @param {string} rowId - Row ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>} data - Row data as JSON object.
     * @param {string[]} permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, data: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>, permissions?: string[]): Promise<Row>;
    createRow<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, rowId: string, data: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>, permissions?: string[] } | string,
        ...rest: [(string)?, (string)?, (Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>)?, (string[])?]    
    ): Promise<Row> {
        let params: { databaseId: string, tableId: string, rowId: string, data: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>, permissions?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, rowId: string, data: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>, permissions?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                data: rest[2] as Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>,
                permissions: rest[3] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const data = params.data;
        const permissions = params.permissions;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof rowId !== 'undefined') {
            payload['rowId'] = rowId;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
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
     * Create new Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate). Make sure to define columns before creating rows.
     * @param {object[]} params.rows - Array of documents data as JSON objects.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    createRows<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, rows: object[]  }): Promise<Models.RowList<Row>>;
    /**
     * Create new Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate). Make sure to define columns before creating rows.
     * @param {object[]} rows - Array of documents data as JSON objects.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rows: object[]): Promise<Models.RowList<Row>>;
    createRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, rows: object[] } | string,
        ...rest: [(string)?, (object[])?]    
    ): Promise<Models.RowList<Row>> {
        let params: { databaseId: string, tableId: string, rows: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, rows: object[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rows: rest[1] as object[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rows = params.rows;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rows === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rows"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof rows !== 'undefined') {
            payload['rows'] = rows;
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
     * Create or update Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {object[]} params.rows - Array of row data as JSON objects. May contain partial rows.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    upsertRows<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, rows: object[]  }): Promise<Models.RowList<Row>>;
    /**
     * Create or update Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {object[]} rows - Array of row data as JSON objects. May contain partial rows.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rows: object[]): Promise<Models.RowList<Row>>;
    upsertRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, rows: object[] } | string,
        ...rest: [(string)?, (object[])?]    
    ): Promise<Models.RowList<Row>> {
        let params: { databaseId: string, tableId: string, rows: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, rows: object[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rows: rest[1] as object[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rows = params.rows;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rows === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rows"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof rows !== 'undefined') {
            payload['rows'] = rows;
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
     * Update all rows that match your queries, if no queries are submitted then all rows are updated. You can pass only specific fields to be updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {object} params.data - Row data as JSON object. Include only column and value pairs to be updated.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    updateRows<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, data?: object, queries?: string[]  }): Promise<Models.RowList<Row>>;
    /**
     * Update all rows that match your queries, if no queries are submitted then all rows are updated. You can pass only specific fields to be updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {object} data - Row data as JSON object. Include only column and value pairs to be updated.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, data?: object, queries?: string[]): Promise<Models.RowList<Row>>;
    updateRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, data?: object, queries?: string[] } | string,
        ...rest: [(string)?, (object)?, (string[])?]    
    ): Promise<Models.RowList<Row>> {
        let params: { databaseId: string, tableId: string, data?: object, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, data?: object, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                data: rest[1] as object,
                queries: rest[2] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const data = params.data;
        const queries = params.queries;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Bulk delete rows using queries, if no queries are passed then all rows are deleted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    deleteRows<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, queries?: string[]  }): Promise<Models.RowList<Row>>;
    /**
     * Bulk delete rows using queries, if no queries are passed then all rows are deleted.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, queries?: string[]): Promise<Models.RowList<Row>>;
    deleteRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.RowList<Row>> {
        let params: { databaseId: string, tableId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                queries: rest[1] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const queries = params.queries;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
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
     * Get a row by its unique ID. This endpoint response returns a JSON object with the row data.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.rowId - Row ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    getRow<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, rowId: string, queries?: string[]  }): Promise<Row>;
    /**
     * Get a row by its unique ID. This endpoint response returns a JSON object with the row data.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} rowId - Row ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, queries?: string[]): Promise<Row>;
    getRow<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, rowId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string)?, (string[])?]    
    ): Promise<Row> {
        let params: { databaseId: string, tableId: string, rowId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, rowId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                queries: rest[2] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const queries = params.queries;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
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
     * Create or update a Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} params.data - Row data as JSON object. Include all required columns of the row to be created or updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    upsertRow<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[]  }): Promise<Row>;
    /**
     * Create or update a Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreateTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} data - Row data as JSON object. Include all required columns of the row to be created or updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[]): Promise<Row>;
    upsertRow<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[] } | string,
        ...rest: [(string)?, (string)?, (Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>)?, (string[])?]    
    ): Promise<Row> {
        let params: { databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                data: rest[2] as Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>,
                permissions: rest[3] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const data = params.data;
        const permissions = params.permissions;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
        const payload: Payload = {};
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
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
     * Update a row by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} params.data - Row data as JSON object. Include only columns and value pairs to be updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    updateRow<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[]  }): Promise<Row>;
    /**
     * Update a row by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} data - Row data as JSON object. Include only columns and value pairs to be updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[]): Promise<Row>;
    updateRow<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[] } | string,
        ...rest: [(string)?, (string)?, (Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>)?, (string[])?]    
    ): Promise<Row> {
        let params: { databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                data: rest[2] as Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>,
                permissions: rest[3] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const data = params.data;
        const permissions = params.permissions;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
        const payload: Payload = {};
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
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
     * Delete a row by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} params.rowId - Row ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRow(params: { databaseId: string, tableId: string, rowId: string  }): Promise<{}>;
    /**
     * Delete a row by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/tablesdb#tablesDBCreate).
     * @param {string} rowId - Row ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRow(databaseId: string, tableId: string, rowId: string): Promise<{}>;
    deleteRow(
        paramsOrFirst: { databaseId: string, tableId: string, rowId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, tableId: string, rowId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, rowId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
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
     * Decrement a specific column of a row by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {string} params.column - Column key.
     * @param {number} params.value - Value to increment the column by. The value must be a number.
     * @param {number} params.min - Minimum value for the column. If the current value is lesser than this value, an exception will be thrown.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    decrementRowColumn<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, rowId: string, column: string, value?: number, min?: number  }): Promise<Row>;
    /**
     * Decrement a specific column of a row by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {string} column - Column key.
     * @param {number} value - Value to increment the column by. The value must be a number.
     * @param {number} min - Minimum value for the column. If the current value is lesser than this value, an exception will be thrown.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    decrementRowColumn<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, column: string, value?: number, min?: number): Promise<Row>;
    decrementRowColumn<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, rowId: string, column: string, value?: number, min?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?]    
    ): Promise<Row> {
        let params: { databaseId: string, tableId: string, rowId: string, column: string, value?: number, min?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, rowId: string, column: string, value?: number, min?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                column: rest[2] as string,
                value: rest[3] as number,
                min: rest[4] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const column = params.column;
        const value = params.value;
        const min = params.min;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        if (typeof column === 'undefined') {
            throw new AppwriteException('Missing required parameter: "column"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/decrement'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId).replace('{column}', column);
        const payload: Payload = {};
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
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
     * Increment a specific column of a row by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {string} params.column - Column key.
     * @param {number} params.value - Value to increment the column by. The value must be a number.
     * @param {number} params.max - Maximum value for the column. If the current value is greater than this value, an error will be thrown.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    incrementRowColumn<Row extends Models.Row = Models.DefaultRow>(params: { databaseId: string, tableId: string, rowId: string, column: string, value?: number, max?: number  }): Promise<Row>;
    /**
     * Increment a specific column of a row by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {string} column - Column key.
     * @param {number} value - Value to increment the column by. The value must be a number.
     * @param {number} max - Maximum value for the column. If the current value is greater than this value, an error will be thrown.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    incrementRowColumn<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, column: string, value?: number, max?: number): Promise<Row>;
    incrementRowColumn<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst: { databaseId: string, tableId: string, rowId: string, column: string, value?: number, max?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?]    
    ): Promise<Row> {
        let params: { databaseId: string, tableId: string, rowId: string, column: string, value?: number, max?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, rowId: string, column: string, value?: number, max?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                column: rest[2] as string,
                value: rest[3] as number,
                max: rest[4] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const column = params.column;
        const value = params.value;
        const max = params.max;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        if (typeof column === 'undefined') {
            throw new AppwriteException('Missing required parameter: "column"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/increment'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId).replace('{column}', column);
        const payload: Payload = {};
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
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
}
