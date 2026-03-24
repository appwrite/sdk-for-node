import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Model } from '../enums/model';
import { VectorsDBIndexType } from '../enums/vectors-db-index-type';
import { OrderBy } from '../enums/order-by';

export class VectorsDB {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     */
    list(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.DatabaseList>;
    /**
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name
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


        const apiPath = '/vectorsdb';
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
     *
     * @param {string} params.databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    create(params: { databaseId: string, name: string, enabled?: boolean }): Promise<Models.Database>;
    /**
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

        const apiPath = '/vectorsdb';
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
     *
     * @param {string[]} params.texts - Array of text to generate embeddings.
     * @param {Model} params.model - The embedding model to use for generating vector embeddings.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmbeddingList>}
     */
    createTextEmbeddings(params: { texts: string[], model?: Model }): Promise<Models.EmbeddingList>;
    /**
     *
     * @param {string[]} texts - Array of text to generate embeddings.
     * @param {Model} model - The embedding model to use for generating vector embeddings.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmbeddingList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTextEmbeddings(texts: string[], model?: Model): Promise<Models.EmbeddingList>;
    createTextEmbeddings(
        paramsOrFirst: { texts: string[], model?: Model } | string[],
        ...rest: [(Model)?]    
    ): Promise<Models.EmbeddingList> {
        let params: { texts: string[], model?: Model };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { texts: string[], model?: Model };
        } else {
            params = {
                texts: paramsOrFirst as string[],
                model: rest[0] as Model            
            };
        }
        
        const texts = params.texts;
        const model = params.model;

        if (typeof texts === 'undefined') {
            throw new AppwriteException('Missing required parameter: "texts"');
        }

        const apiPath = '/vectorsdb/embeddings/text';
        const payload: Payload = {};
        if (typeof texts !== 'undefined') {
            payload['texts'] = texts;
        }
        if (typeof model !== 'undefined') {
            payload['model'] = model;
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
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries).
     * @throws {AppwriteException}
     * @returns {Promise<Models.TransactionList>}
     */
    listTransactions(params?: { queries?: string[] }): Promise<Models.TransactionList>;
    /**
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


        const apiPath = '/vectorsdb/transactions';
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
     *
     * @param {number} params.ttl - Seconds before the transaction expires.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    createTransaction(params?: { ttl?: number }): Promise<Models.Transaction>;
    /**
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


        const apiPath = '/vectorsdb/transactions';
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
     *
     * @param {string} params.transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    getTransaction(params: { transactionId: string }): Promise<Models.Transaction>;
    /**
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

        const apiPath = '/vectorsdb/transactions/{transactionId}'.replace('{transactionId}', transactionId);
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
     *
     * @param {string} params.transactionId - Transaction ID.
     * @param {boolean} params.commit - Commit transaction?
     * @param {boolean} params.rollback - Rollback transaction?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    updateTransaction(params: { transactionId: string, commit?: boolean, rollback?: boolean }): Promise<Models.Transaction>;
    /**
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

        const apiPath = '/vectorsdb/transactions/{transactionId}'.replace('{transactionId}', transactionId);
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
     *
     * @param {string} params.transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTransaction(params: { transactionId: string }): Promise<{}>;
    /**
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

        const apiPath = '/vectorsdb/transactions/{transactionId}'.replace('{transactionId}', transactionId);
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
     *
     * @param {string} params.transactionId - Transaction ID.
     * @param {object[]} params.operations - Array of staged operations.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    createOperations(params: { transactionId: string, operations?: object[] }): Promise<Models.Transaction>;
    /**
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

        const apiPath = '/vectorsdb/transactions/{transactionId}/operations'.replace('{transactionId}', transactionId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    get(params: { databaseId: string }): Promise<Models.Database>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}'.replace('{databaseId}', databaseId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    update(params: { databaseId: string, name: string, enabled?: boolean }): Promise<Models.Database>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}'.replace('{databaseId}', databaseId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { databaseId: string }): Promise<{}>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}'.replace('{databaseId}', databaseId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollectionList>}
     */
    listCollections(params: { databaseId: string, queries?: string[], search?: string, total?: boolean }): Promise<Models.VectorsdbCollectionList>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollectionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listCollections(databaseId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.VectorsdbCollectionList>;
    listCollections(
        paramsOrFirst: { databaseId: string, queries?: string[], search?: string, total?: boolean } | string,
        ...rest: [(string[])?, (string)?, (boolean)?]    
    ): Promise<Models.VectorsdbCollectionList> {
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

        const apiPath = '/vectorsdb/{databaseId}/collections'.replace('{databaseId}', databaseId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Collection name. Max length: 128 chars.
     * @param {number} params.dimension - Embedding dimension.
     * @param {string[]} params.permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollection>}
     */
    createCollection(params: { databaseId: string, collectionId: string, name: string, dimension: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean }): Promise<Models.VectorsdbCollection>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {number} dimension - Embedding dimension.
     * @param {string[]} permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCollection(databaseId: string, collectionId: string, name: string, dimension: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.VectorsdbCollection>;
    createCollection(
        paramsOrFirst: { databaseId: string, collectionId: string, name: string, dimension: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (string[])?, (boolean)?, (boolean)?]    
    ): Promise<Models.VectorsdbCollection> {
        let params: { databaseId: string, collectionId: string, name: string, dimension: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, name: string, dimension: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                name: rest[1] as string,
                dimension: rest[2] as number,
                permissions: rest[3] as string[],
                documentSecurity: rest[4] as boolean,
                enabled: rest[5] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const name = params.name;
        const dimension = params.dimension;
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
        if (typeof dimension === 'undefined') {
            throw new AppwriteException('Missing required parameter: "dimension"');
        }

        const apiPath = '/vectorsdb/{databaseId}/collections'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof collectionId !== 'undefined') {
            payload['collectionId'] = collectionId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof dimension !== 'undefined') {
            payload['dimension'] = dimension;
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollection>}
     */
    getCollection(params: { databaseId: string, collectionId: string }): Promise<Models.VectorsdbCollection>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCollection(databaseId: string, collectionId: string): Promise<Models.VectorsdbCollection>;
    getCollection(
        paramsOrFirst: { databaseId: string, collectionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.VectorsdbCollection> {
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.name - Collection name. Max length: 128 chars.
     * @param {number} params.dimension - Embedding dimensions.
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollection>}
     */
    updateCollection(params: { databaseId: string, collectionId: string, name: string, dimension?: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean }): Promise<Models.VectorsdbCollection>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {number} dimension - Embedding dimensions.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateCollection(databaseId: string, collectionId: string, name: string, dimension?: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.VectorsdbCollection>;
    updateCollection(
        paramsOrFirst: { databaseId: string, collectionId: string, name: string, dimension?: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (string[])?, (boolean)?, (boolean)?]    
    ): Promise<Models.VectorsdbCollection> {
        let params: { databaseId: string, collectionId: string, name: string, dimension?: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, name: string, dimension?: number, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                name: rest[1] as string,
                dimension: rest[2] as number,
                permissions: rest[3] as string[],
                documentSecurity: rest[4] as boolean,
                enabled: rest[5] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const name = params.name;
        const dimension = params.dimension;
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof dimension !== 'undefined') {
            payload['dimension'] = dimension;
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteCollection(params: { databaseId: string, collectionId: string }): Promise<{}>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} params.ttl - TTL (seconds) for cached responses when caching is enabled for select queries. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean, ttl?: number }): Promise<Models.DocumentList<Document>>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} ttl - TTL (seconds) for cached responses when caching is enabled for select queries. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean, ttl?: number): Promise<Models.DocumentList<Document>>;
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean, ttl?: number } | string,
        ...rest: [(string)?, (string[])?, (string)?, (boolean)?, (number)?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean, ttl?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean, ttl?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                transactionId: rest[2] as string,
                total: rest[3] as boolean,
                ttl: rest[4] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;
        const transactionId = params.transactionId;
        const total = params.total;
        const ttl = params.ttl;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} params.documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} params.data - Document data as JSON object.
     * @param {string[]} params.permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[] }): Promise<Document>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} data - Document data as JSON object.
     * @param {string[]} permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[]): Promise<Document>;
    createDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[] } | string,
        ...rest: [(string)?, (string)?, (Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>)?, (string[])?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                data: rest[2] as Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>,
                permissions: rest[3] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const data = params.data;
        const permissions = params.permissions;

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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} params.documents - Array of documents data as JSON objects.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documents: object[] }): Promise<Models.DocumentList<Document>>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} documents - Array of documents data as JSON objects.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[]): Promise<Models.DocumentList<Document>>;
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documents: object[] } | string,
        ...rest: [(string)?, (object[])?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, documents: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, documents: object[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documents: rest[1] as object[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documents = params.documents;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documents === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documents"');
        }

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documents !== 'undefined') {
            payload['documents'] = documents;
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {object[]} params.documents - Array of document data as JSON objects. May contain partial documents.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documents: object[], transactionId?: string }): Promise<Models.DocumentList<Document>>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {object} params.data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, data?: object, queries?: string[], transactionId?: string }): Promise<Models.DocumentList<Document>>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, queries?: string[], transactionId?: string }): Promise<Models.DocumentList<Document>>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.documentId - Document ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    getDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, queries?: string[], transactionId?: string }): Promise<Document>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} params.data - Document data as JSON object. Include all required fields of the document to be created or updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string }): Promise<Document>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} data - Document data as JSON object. Include all required fields of the document to be created or updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string): Promise<Document>;
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} params.data - Document data as JSON object. Include only fields and value pairs to be updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string }): Promise<Document>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} data - Document data as JSON object. Include only fields and value pairs to be updated.
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.documentId - Document ID.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDocument(params: { databaseId: string, collectionId: string, documentId: string, transactionId?: string }): Promise<{}>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IndexList>}
     */
    listIndexes(params: { databaseId: string, collectionId: string, queries?: string[], total?: boolean }): Promise<Models.IndexList>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @param {VectorsDBIndexType} params.type - Index type.
     * @param {string[]} params.attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {OrderBy[]} params.orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} params.lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     */
    createIndex(params: { databaseId: string, collectionId: string, key: string, type: VectorsDBIndexType, attributes: string[], orders?: OrderBy[], lengths?: number[] }): Promise<Models.Index>;
    /**
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @param {VectorsDBIndexType} type - Index type.
     * @param {string[]} attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {OrderBy[]} orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIndex(databaseId: string, collectionId: string, key: string, type: VectorsDBIndexType, attributes: string[], orders?: OrderBy[], lengths?: number[]): Promise<Models.Index>;
    createIndex(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, type: VectorsDBIndexType, attributes: string[], orders?: OrderBy[], lengths?: number[] } | string,
        ...rest: [(string)?, (string)?, (VectorsDBIndexType)?, (string[])?, (OrderBy[])?, (number[])?]    
    ): Promise<Models.Index> {
        let params: { databaseId: string, collectionId: string, key: string, type: VectorsDBIndexType, attributes: string[], orders?: OrderBy[], lengths?: number[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, collectionId: string, key: string, type: VectorsDBIndexType, attributes: string[], orders?: OrderBy[], lengths?: number[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                type: rest[2] as VectorsDBIndexType,
                attributes: rest[3] as string[],
                orders: rest[4] as OrderBy[],
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     */
    getIndex(params: { databaseId: string, collectionId: string, key: string }): Promise<Models.Index>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIndex(params: { databaseId: string, collectionId: string, key: string }): Promise<{}>;
    /**
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

        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
