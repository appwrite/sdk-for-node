import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { RelationshipType } from '../enums/relationship-type';
import { RelationMutate } from '../enums/relation-mutate';
import { IndexType } from '../enums/index-type';

export class Databases {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.list` instead.
     */
    list(params?: { queries?: string[], search?: string, total?: boolean  }): Promise<Models.DatabaseList>;
    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string, total?: boolean): Promise<Models.DatabaseList>;
    list(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.DatabaseList> {
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


        const apiPath = '/databases';
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
     * Create a new Database.
     * 
     *
     * @param {string} params.databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.create` instead.
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

        const apiPath = '/databases';
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
     * List transactions across all databases.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries).
     * @throws {AppwriteException}
     * @returns {Promise<Models.TransactionList>}
     */
    listTransactions(params?: { queries?: string[]  }): Promise<Models.TransactionList>;
    /**
     * List transactions across all databases.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries).
     * @throws {AppwriteException}
     * @returns {Promise<Models.TransactionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTransactions(queries?: string[]): Promise<Models.TransactionList>;
    listTransactions(
        paramsOrFirst?: { queries?: string[] } | string[]    
    ): Promise<Models.TransactionList> {
        let params: { queries?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[]            
            };
        }
        
        const queries = params.queries;


        const apiPath = '/databases/transactions';
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
     * Create a new transaction.
     *
     * @param {number} params.ttl - Seconds before the transaction expires.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    createTransaction(params?: { ttl?: number  }): Promise<Models.Transaction>;
    /**
     * Create a new transaction.
     *
     * @param {number} ttl - Seconds before the transaction expires.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTransaction(ttl?: number): Promise<Models.Transaction>;
    createTransaction(
        paramsOrFirst?: { ttl?: number } | number    
    ): Promise<Models.Transaction> {
        let params: { ttl?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ttl?: number };
        } else {
            params = {
                ttl: paramsOrFirst as number            
            };
        }
        
        const ttl = params.ttl;


        const apiPath = '/databases/transactions';
        const payload: Payload = {};
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
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
     * Get a transaction by its unique ID.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    getTransaction(params: { transactionId: string  }): Promise<Models.Transaction>;
    /**
     * Get a transaction by its unique ID.
     *
     * @param {string} transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTransaction(transactionId: string): Promise<Models.Transaction>;
    getTransaction(
        paramsOrFirst: { transactionId: string } | string    
    ): Promise<Models.Transaction> {
        let params: { transactionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { transactionId: string };
        } else {
            params = {
                transactionId: paramsOrFirst as string            
            };
        }
        
        const transactionId = params.transactionId;

        if (typeof transactionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "transactionId"');
        }

        const apiPath = '/databases/transactions/{transactionId}'.replace('{transactionId}', transactionId);
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
     * Update a transaction, to either commit or roll back its operations.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @param {boolean} params.commit - Commit transaction?
     * @param {boolean} params.rollback - Rollback transaction?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    updateTransaction(params: { transactionId: string, commit?: boolean, rollback?: boolean  }): Promise<Models.Transaction>;
    /**
     * Update a transaction, to either commit or roll back its operations.
     *
     * @param {string} transactionId - Transaction ID.
     * @param {boolean} commit - Commit transaction?
     * @param {boolean} rollback - Rollback transaction?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTransaction(transactionId: string, commit?: boolean, rollback?: boolean): Promise<Models.Transaction>;
    updateTransaction(
        paramsOrFirst: { transactionId: string, commit?: boolean, rollback?: boolean } | string,
        ...rest: [(boolean)?, (boolean)?]    
    ): Promise<Models.Transaction> {
        let params: { transactionId: string, commit?: boolean, rollback?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { transactionId: string, commit?: boolean, rollback?: boolean };
        } else {
            params = {
                transactionId: paramsOrFirst as string,
                commit: rest[0] as boolean,
                rollback: rest[1] as boolean            
            };
        }
        
        const transactionId = params.transactionId;
        const commit = params.commit;
        const rollback = params.rollback;

        if (typeof transactionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "transactionId"');
        }

        const apiPath = '/databases/transactions/{transactionId}'.replace('{transactionId}', transactionId);
        const payload: Payload = {};
        if (typeof commit !== 'undefined') {
            payload['commit'] = commit;
        }
        if (typeof rollback !== 'undefined') {
            payload['rollback'] = rollback;
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
     * Delete a transaction by its unique ID.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTransaction(params: { transactionId: string  }): Promise<{}>;
    /**
     * Delete a transaction by its unique ID.
     *
     * @param {string} transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteTransaction(transactionId: string): Promise<{}>;
    deleteTransaction(
        paramsOrFirst: { transactionId: string } | string    
    ): Promise<{}> {
        let params: { transactionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { transactionId: string };
        } else {
            params = {
                transactionId: paramsOrFirst as string            
            };
        }
        
        const transactionId = params.transactionId;

        if (typeof transactionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "transactionId"');
        }

        const apiPath = '/databases/transactions/{transactionId}'.replace('{transactionId}', transactionId);
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
     * Create multiple operations in a single transaction.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @param {object[]} params.operations - Array of staged operations.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    createOperations(params: { transactionId: string, operations?: object[]  }): Promise<Models.Transaction>;
    /**
     * Create multiple operations in a single transaction.
     *
     * @param {string} transactionId - Transaction ID.
     * @param {object[]} operations - Array of staged operations.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createOperations(transactionId: string, operations?: object[]): Promise<Models.Transaction>;
    createOperations(
        paramsOrFirst: { transactionId: string, operations?: object[] } | string,
        ...rest: [(object[])?]    
    ): Promise<Models.Transaction> {
        let params: { transactionId: string, operations?: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { transactionId: string, operations?: object[] };
        } else {
            params = {
                transactionId: paramsOrFirst as string,
                operations: rest[0] as object[]            
            };
        }
        
        const transactionId = params.transactionId;
        const operations = params.operations;

        if (typeof transactionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "transactionId"');
        }

        const apiPath = '/databases/transactions/{transactionId}/operations'.replace('{transactionId}', transactionId);
        const payload: Payload = {};
        if (typeof operations !== 'undefined') {
            payload['operations'] = operations;
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.get` instead.
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

        const apiPath = '/databases/{databaseId}'.replace('{databaseId}', databaseId);
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.update` instead.
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

        const apiPath = '/databases/{databaseId}'.replace('{databaseId}', databaseId);
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.delete` instead.
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

        const apiPath = '/databases/{databaseId}'.replace('{databaseId}', databaseId);
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
     * Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.CollectionList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listTables` instead.
     */
    listCollections(params: { databaseId: string, queries?: string[], search?: string, total?: boolean  }): Promise<Models.CollectionList>;
    /**
     * Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.CollectionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listCollections(databaseId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.CollectionList>;
    listCollections(
        paramsOrFirst: { databaseId: string, queries?: string[], search?: string, total?: boolean } | string,
        ...rest: [(string[])?, (string)?, (boolean)?]    
    ): Promise<Models.CollectionList> {
        let params: { databaseId: string, queries?: string[], search?: string, total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/databases/{databaseId}/collections'.replace('{databaseId}', databaseId);
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
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Collection name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createTable` instead.
     */
    createCollection(params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean  }): Promise<Models.Collection>;
    /**
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
    createCollection(
        paramsOrFirst: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (boolean)?]    
    ): Promise<Models.Collection> {
        let params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                name: rest[1] as string,
                permissions: rest[2] as string[],
                documentSecurity: rest[3] as boolean,
                enabled: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const name = params.name;
        const permissions = params.permissions;
        const documentSecurity = params.documentSecurity;
        const enabled = params.enabled;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/databases/{databaseId}/collections'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof collectionId !== 'undefined') {
            payload['collectionId'] = collectionId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof documentSecurity !== 'undefined') {
            payload['documentSecurity'] = documentSecurity;
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
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getTable` instead.
     */
    getCollection(params: { databaseId: string, collectionId: string  }): Promise<Models.Collection>;
    /**
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCollection(databaseId: string, collectionId: string): Promise<Models.Collection>;
    getCollection(
        paramsOrFirst: { databaseId: string, collectionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Collection> {
        let params: { databaseId: string, collectionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update a collection by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.name - Collection name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateTable` instead.
     */
    updateCollection(params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean  }): Promise<Models.Collection>;
    /**
     * Update a collection by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
    updateCollection(
        paramsOrFirst: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (boolean)?]    
    ): Promise<Models.Collection> {
        let params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                name: rest[1] as string,
                permissions: rest[2] as string[],
                documentSecurity: rest[3] as boolean,
                enabled: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const name = params.name;
        const permissions = params.permissions;
        const documentSecurity = params.documentSecurity;
        const enabled = params.enabled;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof documentSecurity !== 'undefined') {
            payload['documentSecurity'] = documentSecurity;
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
     * Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteTable` instead.
     */
    deleteCollection(params: { databaseId: string, collectionId: string  }): Promise<{}>;
    /**
     * Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteCollection(databaseId: string, collectionId: string): Promise<{}>;
    deleteCollection(
        paramsOrFirst: { databaseId: string, collectionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * List attributes in the collection.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listColumns` instead.
     */
    listAttributes(params: { databaseId: string, collectionId: string, queries?: string[], total?: boolean  }): Promise<Models.AttributeList>;
    /**
     * List attributes in the collection.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listAttributes(databaseId: string, collectionId: string, queries?: string[], total?: boolean): Promise<Models.AttributeList>;
    listAttributes(
        paramsOrFirst: { databaseId: string, collectionId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string)?, (string[])?, (boolean)?]    
    ): Promise<Models.AttributeList> {
        let params: { databaseId: string, collectionId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                total: rest[2] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;
        const total = params.total;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Create a boolean attribute.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {boolean} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createBooleanColumn` instead.
     */
    createBooleanAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean  }): Promise<Models.AttributeBoolean>;
    /**
     * Create a boolean attribute.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {boolean} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean>;
    createBooleanAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (boolean)?, (boolean)?]    
    ): Promise<Models.AttributeBoolean> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as boolean,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/boolean'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update a boolean attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {boolean} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateBooleanColumn` instead.
     */
    updateBooleanAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string  }): Promise<Models.AttributeBoolean>;
    /**
     * Update a boolean attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {boolean} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.AttributeBoolean>;
    updateBooleanAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (boolean)?, (string)?]    
    ): Promise<Models.AttributeBoolean> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as boolean,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create a date time attribute according to the ISO 8601 standard.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createDatetimeColumn` instead.
     */
    createDatetimeAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeDatetime>;
    /**
     * Create a date time attribute according to the ISO 8601 standard.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeDatetime>;
    createDatetimeAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeDatetime> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/datetime'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update a date time attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateDatetimeColumn` instead.
     */
    updateDatetimeAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeDatetime>;
    /**
     * Update a date time attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeDatetime>;
    updateDatetimeAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeDatetime> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create an email attribute.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createEmailColumn` instead.
     */
    createEmailAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeEmail>;
    /**
     * Create an email attribute.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail>;
    createEmailAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeEmail> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/email'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update an email attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateEmailColumn` instead.
     */
    updateEmailAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeEmail>;
    /**
     * Update an email attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEmail>;
    updateEmailAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeEmail> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/email/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create an enum attribute. The `elements` param acts as a white-list of accepted values for this attribute. 
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {string[]} params.elements - Array of enum values.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createEnumColumn` instead.
     */
    createEnumAttribute(params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeEnum>;
    /**
     * Create an enum attribute. The `elements` param acts as a white-list of accepted values for this attribute. 
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {string[]} elements - Array of enum values.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum>;
    createEnumAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeEnum> {
        let params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                elements: rest[2] as string[],
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                array: rest[5] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const elements = params.elements;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/enum'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update an enum attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {string[]} params.elements - Updated list of enum values.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateEnumColumn` instead.
     */
    updateEnumAttribute(params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeEnum>;
    /**
     * Update an enum attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {string[]} elements - Updated list of enum values.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEnum>;
    updateEnumAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeEnum> {
        let params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                elements: rest[2] as string[],
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                newKey: rest[5] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const elements = params.elements;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create a float attribute. Optionally, minimum and maximum values can be provided.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number} params.min - Minimum value.
     * @param {number} params.max - Maximum value.
     * @param {number} params.xdefault - Default value. Cannot be set when required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createFloatColumn` instead.
     */
    createFloatAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean  }): Promise<Models.AttributeFloat>;
    /**
     * Create a float attribute. Optionally, minimum and maximum values can be provided.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @param {number} xdefault - Default value. Cannot be set when required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat>;
    createFloatAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (boolean)?]    
    ): Promise<Models.AttributeFloat> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number,
                max: rest[4] as number,
                xdefault: rest[5] as number,
                array: rest[6] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const min = params.min;
        const max = params.max;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/float'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update a float attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number} params.xdefault - Default value. Cannot be set when required.
     * @param {number} params.min - Minimum value.
     * @param {number} params.max - Maximum value.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateFloatColumn` instead.
     */
    updateFloatAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string  }): Promise<Models.AttributeFloat>;
    /**
     * Update a float attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number} xdefault - Default value. Cannot be set when required.
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.AttributeFloat>;
    updateFloatAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.AttributeFloat> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number,
                min: rest[4] as number,
                max: rest[5] as number,
                newKey: rest[6] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const min = params.min;
        const max = params.max;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/float/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create an integer attribute. Optionally, minimum and maximum values can be provided.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number} params.min - Minimum value
     * @param {number} params.max - Maximum value
     * @param {number} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIntegerColumn` instead.
     */
    createIntegerAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean  }): Promise<Models.AttributeInteger>;
    /**
     * Create an integer attribute. Optionally, minimum and maximum values can be provided.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @param {number} xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger>;
    createIntegerAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (boolean)?]    
    ): Promise<Models.AttributeInteger> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number,
                max: rest[4] as number,
                xdefault: rest[5] as number,
                array: rest[6] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const min = params.min;
        const max = params.max;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/integer'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update an integer attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {number} params.min - Minimum value
     * @param {number} params.max - Maximum value
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateIntegerColumn` instead.
     */
    updateIntegerAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string  }): Promise<Models.AttributeInteger>;
    /**
     * Update an integer attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number} xdefault - Default value. Cannot be set when attribute is required.
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.AttributeInteger>;
    updateIntegerAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.AttributeInteger> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number,
                min: rest[4] as number,
                max: rest[5] as number,
                newKey: rest[6] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const min = params.min;
        const max = params.max;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create IP address attribute.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIpColumn` instead.
     */
    createIpAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeIp>;
    /**
     * Create IP address attribute.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp>;
    createIpAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeIp> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/ip'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update an ip attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateIpColumn` instead.
     */
    updateIpAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeIp>;
    /**
     * Update an ip attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeIp>;
    updateIpAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeIp> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create a geometric line attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createLineColumn` instead.
     */
    createLineAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[]  }): Promise<Models.AttributeLine>;
    /**
     * Create a geometric line attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLineAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[]): Promise<Models.AttributeLine>;
    createLineAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[] } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (any[])?]    
    ): Promise<Models.AttributeLine> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/line'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update a line attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateLineColumn` instead.
     */
    updateLineAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string  }): Promise<Models.AttributeLine>;
    /**
     * Update a line attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLineAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string): Promise<Models.AttributeLine>;
    updateLineAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (any[])?, (string)?]    
    ): Promise<Models.AttributeLine> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[],
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/line/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create a geometric point attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createPointColumn` instead.
     */
    createPointAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[]  }): Promise<Models.AttributePoint>;
    /**
     * Create a geometric point attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPointAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[]): Promise<Models.AttributePoint>;
    createPointAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[] } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (any[])?]    
    ): Promise<Models.AttributePoint> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/point'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update a point attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updatePointColumn` instead.
     */
    updatePointAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string  }): Promise<Models.AttributePoint>;
    /**
     * Update a point attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePointAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string): Promise<Models.AttributePoint>;
    updatePointAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (any[])?, (string)?]    
    ): Promise<Models.AttributePoint> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[],
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/point/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create a geometric polygon attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createPolygonColumn` instead.
     */
    createPolygonAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[]  }): Promise<Models.AttributePolygon>;
    /**
     * Create a geometric polygon attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPolygonAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[]): Promise<Models.AttributePolygon>;
    createPolygonAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[] } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (any[])?]    
    ): Promise<Models.AttributePolygon> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/polygon'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update a polygon attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updatePolygonColumn` instead.
     */
    updatePolygonAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string  }): Promise<Models.AttributePolygon>;
    /**
     * Update a polygon attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePolygonAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string): Promise<Models.AttributePolygon>;
    updatePolygonAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (any[])?, (string)?]    
    ): Promise<Models.AttributePolygon> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[],
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/polygon/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.relatedCollectionId - Related Collection ID.
     * @param {RelationshipType} params.type - Relation type
     * @param {boolean} params.twoWay - Is Two Way?
     * @param {string} params.key - Attribute Key.
     * @param {string} params.twoWayKey - Two Way Attribute Key.
     * @param {RelationMutate} params.onDelete - Constraints option
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRelationshipColumn` instead.
     */
    createRelationshipAttribute(params: { databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate  }): Promise<Models.AttributeRelationship>;
    /**
     * Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} relatedCollectionId - Related Collection ID.
     * @param {RelationshipType} type - Relation type
     * @param {boolean} twoWay - Is Two Way?
     * @param {string} key - Attribute Key.
     * @param {string} twoWayKey - Two Way Attribute Key.
     * @param {RelationMutate} onDelete - Constraints option
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship>;
    createRelationshipAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate } | string,
        ...rest: [(string)?, (string)?, (RelationshipType)?, (boolean)?, (string)?, (string)?, (RelationMutate)?]    
    ): Promise<Models.AttributeRelationship> {
        let params: { databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                relatedCollectionId: rest[1] as string,
                type: rest[2] as RelationshipType,
                twoWay: rest[3] as boolean,
                key: rest[4] as string,
                twoWayKey: rest[5] as string,
                onDelete: rest[6] as RelationMutate            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const relatedCollectionId = params.relatedCollectionId;
        const type = params.type;
        const twoWay = params.twoWay;
        const key = params.key;
        const twoWayKey = params.twoWayKey;
        const onDelete = params.onDelete;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof relatedCollectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "relatedCollectionId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/relationship'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof relatedCollectionId !== 'undefined') {
            payload['relatedCollectionId'] = relatedCollectionId;
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
     * Create a string attribute.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {number} params.size - Attribute size for text attributes, in number of characters.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createStringColumn` instead.
     */
    createStringAttribute(params: { databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean  }): Promise<Models.AttributeString>;
    /**
     * Create a string attribute.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {number} size - Attribute size for text attributes, in number of characters.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeString>;
    createStringAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (boolean)?, (string)?, (boolean)?, (boolean)?]    
    ): Promise<Models.AttributeString> {
        let params: { databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                size: rest[2] as number,
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                array: rest[5] as boolean,
                encrypt: rest[6] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const size = params.size;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        const encrypt = params.encrypt;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/string'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update a string attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number} params.size - Maximum size of the string attribute.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateStringColumn` instead.
     */
    updateStringAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string  }): Promise<Models.AttributeString>;
    /**
     * Update a string attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number} size - Maximum size of the string attribute.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.AttributeString>;
    updateStringAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.AttributeString> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                size: rest[4] as number,
                newKey: rest[5] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const size = params.size;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/string/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Create a URL attribute.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createUrlColumn` instead.
     */
    createUrlAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeUrl>;
    /**
     * Create a URL attribute.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl>;
    createUrlAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeUrl> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/url'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update an url attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateUrlColumn` instead.
     */
    updateUrlAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeUrl>;
    /**
     * Update an url attribute. Changing the `default` value will not update already existing documents.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeUrl>;
    updateUrlAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeUrl> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/url/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Get attribute by ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getColumn` instead.
     */
    getAttribute(params: { databaseId: string, collectionId: string, key: string  }): Promise<{}>;
    /**
     * Get attribute by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAttribute(databaseId: string, collectionId: string, key: string): Promise<{}>;
    getAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string, key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Deletes an attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteColumn` instead.
     */
    deleteAttribute(params: { databaseId: string, collectionId: string, key: string  }): Promise<{}>;
    /**
     * Deletes an attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<{}>;
    deleteAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string, key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {RelationMutate} params.onDelete - Constraints option
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRelationshipColumn` instead.
     */
    updateRelationshipAttribute(params: { databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string  }): Promise<Models.AttributeRelationship>;
    /**
     * Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {RelationMutate} onDelete - Constraints option
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.AttributeRelationship>;
    updateRelationshipAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (RelationMutate)?, (string)?]    
    ): Promise<Models.AttributeRelationship> {
        let params: { databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                onDelete: rest[2] as RelationMutate,
                newKey: rest[3] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const onDelete = params.onDelete;
        const newKey = params.newKey;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listRows` instead.
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean  }): Promise<Models.DocumentList<Document>>;
    /**
     * Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean): Promise<Models.DocumentList<Document>>;
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean } | string,
        ...rest: [(string)?, (string[])?, (string)?, (boolean)?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                transactionId: rest[2] as string,
                total: rest[3] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;
        const transactionId = params.transactionId;
        const total = params.total;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} params.documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} params.data - Document data as JSON object.
     * @param {string[]} params.permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRow` instead.
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[], transactionId?: string  }): Promise<Document>;
    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} data - Document data as JSON object.
     * @param {string[]} permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[], transactionId?: string): Promise<Document>;
    createDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[], transactionId?: string } | string,
        ...rest: [(string)?, (string)?, (Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>)?, (string[])?, (string)?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[], transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[], transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                data: rest[2] as Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>,
                permissions: rest[3] as string[],
                transactionId: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const data = params.data;
        const permissions = params.permissions;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }
        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documentId !== 'undefined') {
            payload['documentId'] = documentId;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} params.documents - Array of documents data as JSON objects.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRows` instead.
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documents: object[], transactionId?: string  }): Promise<Models.DocumentList<Document>>;
    /**
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} documents - Array of documents data as JSON objects.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[], transactionId?: string): Promise<Models.DocumentList<Document>>;
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documents: object[], transactionId?: string } | string,
        ...rest: [(string)?, (object[])?, (string)?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, documents: object[], transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documents: object[], transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documents: rest[1] as object[],
                transactionId: rest[2] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documents = params.documents;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documents === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documents"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documents !== 'undefined') {
            payload['documents'] = documents;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     * 
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {object[]} params.documents - Array of document data as JSON objects. May contain partial documents.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.upsertRows` instead.
     */
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documents: object[], transactionId?: string  }): Promise<Models.DocumentList<Document>>;
    /**
     * Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {object[]} documents - Array of document data as JSON objects. May contain partial documents.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[], transactionId?: string): Promise<Models.DocumentList<Document>>;
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documents: object[], transactionId?: string } | string,
        ...rest: [(string)?, (object[])?, (string)?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, documents: object[], transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documents: object[], transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documents: rest[1] as object[],
                transactionId: rest[2] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documents = params.documents;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documents === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documents"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documents !== 'undefined') {
            payload['documents'] = documents;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Update all documents that match your queries, if no queries are submitted then all documents are updated. You can pass only specific fields to be updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {object} params.data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRows` instead.
     */
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, data?: object, queries?: string[], transactionId?: string  }): Promise<Models.DocumentList<Document>>;
    /**
     * Update all documents that match your queries, if no queries are submitted then all documents are updated. You can pass only specific fields to be updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {object} data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, data?: object, queries?: string[], transactionId?: string): Promise<Models.DocumentList<Document>>;
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, data?: object, queries?: string[], transactionId?: string } | string,
        ...rest: [(string)?, (object)?, (string[])?, (string)?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, data?: object, queries?: string[], transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, data?: object, queries?: string[], transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                data: rest[1] as object,
                queries: rest[2] as string[],
                transactionId: rest[3] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const data = params.data;
        const queries = params.queries;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Bulk delete documents using queries, if no queries are passed then all documents are deleted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteRows` instead.
     */
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string  }): Promise<Models.DocumentList<Document>>;
    /**
     * Bulk delete documents using queries, if no queries are passed then all documents are deleted.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[], transactionId?: string): Promise<Models.DocumentList<Document>>;
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, queries?: string[], transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                transactionId: rest[2] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.documentId - Document ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getRow` instead.
     */
    getDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, queries?: string[], transactionId?: string  }): Promise<Document>;
    /**
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} documentId - Document ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, queries?: string[], transactionId?: string): Promise<Document>;
    getDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, queries?: string[], transactionId?: string } | string,
        ...rest: [(string)?, (string)?, (string[])?, (string)?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, queries?: string[], transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documentId: string, queries?: string[], transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                queries: rest[2] as string[],
                transactionId: rest[3] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const queries = params.queries;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} params.data - Document data as JSON object. Include all required attributes of the document to be created or updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.upsertRow` instead.
     */
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string  }): Promise<Document>;
    /**
     * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} data - Document data as JSON object. Include all required attributes of the document to be created or updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string): Promise<Document>;
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string } | string,
        ...rest: [(string)?, (string)?, (Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>)?, (string[])?, (string)?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                data: rest[2] as Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>,
                permissions: rest[3] as string[],
                transactionId: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const data = params.data;
        const permissions = params.permissions;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }
        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} params.data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRow` instead.
     */
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string  }): Promise<Document>;
    /**
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string): Promise<Document>;
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string } | string,
        ...rest: [(string)?, (string)?, (Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>)?, (string[])?, (string)?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                data: rest[2] as Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>,
                permissions: rest[3] as string[],
                transactionId: rest[4] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const data = params.data;
        const permissions = params.permissions;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Delete a document by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.documentId - Document ID.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteRow` instead.
     */
    deleteDocument(params: { databaseId: string, collectionId: string, documentId: string, transactionId?: string  }): Promise<{}>;
    /**
     * Delete a document by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} documentId - Document ID.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDocument(databaseId: string, collectionId: string, documentId: string, transactionId?: string): Promise<{}>;
    deleteDocument(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, transactionId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string, documentId: string, transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documentId: string, transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                transactionId: rest[2] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Decrement a specific attribute of a document by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {string} params.attribute - Attribute key.
     * @param {number} params.value - Value to increment the attribute by. The value must be a number.
     * @param {number} params.min - Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.decrementRowColumn` instead.
     */
    decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number, transactionId?: string  }): Promise<Document>;
    /**
     * Decrement a specific attribute of a document by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string} attribute - Attribute key.
     * @param {number} value - Value to increment the attribute by. The value must be a number.
     * @param {number} min - Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number, transactionId?: string): Promise<Document>;
    decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number, transactionId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number, transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number, transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                attribute: rest[2] as string,
                value: rest[3] as number,
                min: rest[4] as number,
                transactionId: rest[5] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const attribute = params.attribute;
        const value = params.value;
        const min = params.min;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }
        if (typeof attribute === 'undefined') {
            throw new AppwriteException('Missing required parameter: "attribute"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId).replace('{attribute}', attribute);
        const payload: Payload = {};
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * Increment a specific attribute of a document by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {string} params.attribute - Attribute key.
     * @param {number} params.value - Value to increment the attribute by. The value must be a number.
     * @param {number} params.max - Maximum value for the attribute. If the current value is greater than this value, an error will be thrown.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.incrementRowColumn` instead.
     */
    incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number, transactionId?: string  }): Promise<Document>;
    /**
     * Increment a specific attribute of a document by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string} attribute - Attribute key.
     * @param {number} value - Value to increment the attribute by. The value must be a number.
     * @param {number} max - Maximum value for the attribute. If the current value is greater than this value, an error will be thrown.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number, transactionId?: string): Promise<Document>;
    incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number, transactionId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number, transactionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number, transactionId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                attribute: rest[2] as string,
                value: rest[3] as number,
                max: rest[4] as number,
                transactionId: rest[5] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const attribute = params.attribute;
        const value = params.value;
        const max = params.max;
        const transactionId = params.transactionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }
        if (typeof attribute === 'undefined') {
            throw new AppwriteException('Missing required parameter: "attribute"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId).replace('{attribute}', attribute);
        const payload: Payload = {};
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof transactionId !== 'undefined') {
            payload['transactionId'] = transactionId;
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
     * List indexes in the collection.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IndexList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listIndexes` instead.
     */
    listIndexes(params: { databaseId: string, collectionId: string, queries?: string[], total?: boolean  }): Promise<Models.IndexList>;
    /**
     * List indexes in the collection.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IndexList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listIndexes(databaseId: string, collectionId: string, queries?: string[], total?: boolean): Promise<Models.IndexList>;
    listIndexes(
        paramsOrFirst: { databaseId: string, collectionId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string)?, (string[])?, (boolean)?]    
    ): Promise<Models.IndexList> {
        let params: { databaseId: string, collectionId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                total: rest[2] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;
        const total = params.total;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @param {IndexType} params.type - Index type.
     * @param {string[]} params.attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {string[]} params.orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} params.lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIndex` instead.
     */
    createIndex(params: { databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[]  }): Promise<Models.Index>;
    /**
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @param {IndexType} type - Index type.
     * @param {string[]} attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {string[]} orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIndex(databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[]): Promise<Models.Index>;
    createIndex(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[] } | string,
        ...rest: [(string)?, (string)?, (IndexType)?, (string[])?, (string[])?, (number[])?]    
    ): Promise<Models.Index> {
        let params: { databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                type: rest[2] as IndexType,
                attributes: rest[3] as string[],
                orders: rest[4] as string[],
                lengths: rest[5] as number[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const type = params.type;
        const attributes = params.attributes;
        const orders = params.orders;
        const lengths = params.lengths;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof attributes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "attributes"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof attributes !== 'undefined') {
            payload['attributes'] = attributes;
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
     * Get an index by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getIndex` instead.
     */
    getIndex(params: { databaseId: string, collectionId: string, key: string  }): Promise<Models.Index>;
    /**
     * Get an index by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index>;
    getIndex(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Index> {
        let params: { databaseId: string, collectionId: string, key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteIndex` instead.
     */
    deleteIndex(params: { databaseId: string, collectionId: string, key: string  }): Promise<{}>;
    /**
     * Delete an index.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteIndex(databaseId: string, collectionId: string, key: string): Promise<{}>;
    deleteIndex(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string, key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
