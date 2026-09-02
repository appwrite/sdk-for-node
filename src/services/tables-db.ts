import { AppwriteException, Client, type Payload } from '../client';
import type { Models } from '../models';

import { RelationshipType } from '../enums/relationship-type';
import { RelationMutate } from '../enums/relation-mutate';
import { TablesDBIndexType } from '../enums/tables-db-index-type';
import { OrderBy } from '../enums/order-by';
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
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     */
    list(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.DatabaseList>;
    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.DatabaseList>;
    list(
        paramsOrFirst?:
            { queries?: string[]; search?: string; total?: boolean } | string[],
        ...rest: [string?, boolean?]
    ): Promise<Models.DatabaseList> {
        let params: { queries?: string[]; search?: string; total?: boolean };

        if (
            !paramsOrFirst ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                search?: string;
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean,
            };
        }

        const queries = params.queries;
        const search = params.search;
        const total = params.total;
        const apiPath = '/tablesdb';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a new Database.
     *
     *
     * @param {string} params.databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string} params.specification - Database specification. Defaults to `serverless`, which creates the database on the shared pool. Any other value provisions a dedicated database on that specification.
     * @param {number} params.replicas - Number of high availability replicas (0-5) for the dedicated database backing this database. Requires a dedicated `specification`; must be 0 for a serverless database. High availability is enabled when greater than 0.
     * @param {string} params.syncMode - Replication sync mode for the dedicated database backing this database. Requires a dedicated `specification`; the mode is only in force once there is at least one replica. Allowed values: async, sync, quorum.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    create(params: {
        databaseId: string;
        name: string;
        enabled?: boolean;
        specification?: string;
        replicas?: number;
        syncMode?: string;
    }): Promise<Models.Database>;
    /**
     * Create a new Database.
     *
     *
     * @param {string} databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string} specification - Database specification. Defaults to `serverless`, which creates the database on the shared pool. Any other value provisions a dedicated database on that specification.
     * @param {number} replicas - Number of high availability replicas (0-5) for the dedicated database backing this database. Requires a dedicated `specification`; must be 0 for a serverless database. High availability is enabled when greater than 0.
     * @param {string} syncMode - Replication sync mode for the dedicated database backing this database. Requires a dedicated `specification`; the mode is only in force once there is at least one replica. Allowed values: async, sync, quorum.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(
        databaseId: string,
        name: string,
        enabled?: boolean,
        specification?: string,
        replicas?: number,
        syncMode?: string,
    ): Promise<Models.Database>;
    create(
        paramsOrFirst:
            | {
                  databaseId: string;
                  name: string;
                  enabled?: boolean;
                  specification?: string;
                  replicas?: number;
                  syncMode?: string;
              }
            | string,
        ...rest: [string?, boolean?, string?, number?, string?]
    ): Promise<Models.Database> {
        let params: {
            databaseId: string;
            name: string;
            enabled?: boolean;
            specification?: string;
            replicas?: number;
            syncMode?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                name: string;
                enabled?: boolean;
                specification?: string;
                replicas?: number;
                syncMode?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                specification: rest[2] as string,
                replicas: rest[3] as number,
                syncMode: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const name = params.name;
        const enabled = params.enabled;
        const specification = params.specification;
        const replicas = params.replicas;
        const syncMode = params.syncMode;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/tablesdb';
        const apiPayload: Payload = {};
        if (typeof databaseId !== 'undefined') {
            apiPayload['databaseId'] = databaseId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof specification !== 'undefined') {
            apiPayload['specification'] = specification;
        }
        if (typeof replicas !== 'undefined') {
            apiPayload['replicas'] = replicas;
        }
        if (typeof syncMode !== 'undefined') {
            apiPayload['syncMode'] = syncMode;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List the dedicated database specifications available on the current plan. Each specification reports its resource limits, pricing, and whether it is enabled for the organization.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSpecificationList>}
     */
    listSpecifications(): Promise<Models.DedicatedDatabaseSpecificationList> {
        const apiPath = '/tablesdb/specifications';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * List transactions across all databases.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries).
     * @throws {AppwriteException}
     * @returns {Promise<Models.TransactionList>}
     */
    listTransactions(params?: {
        queries?: string[];
    }): Promise<Models.TransactionList>;
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
        paramsOrFirst?: { queries?: string[] } | string[],
    ): Promise<Models.TransactionList> {
        let params: { queries?: string[] };

        if (
            !paramsOrFirst ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[],
            };
        }

        const queries = params.queries;
        const apiPath = '/tablesdb/transactions';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a new transaction.
     *
     * @param {number} params.ttl - Seconds before the transaction expires.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    createTransaction(params?: { ttl?: number }): Promise<Models.Transaction>;
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
        paramsOrFirst?: { ttl?: number } | number,
    ): Promise<Models.Transaction> {
        let params: { ttl?: number };

        if (
            !paramsOrFirst ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as { ttl?: number };
        } else {
            params = {
                ttl: paramsOrFirst as number,
            };
        }

        const ttl = params.ttl;
        const apiPath = '/tablesdb/transactions';
        const apiPayload: Payload = {};
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a transaction by its unique ID.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    getTransaction(params: {
        transactionId: string;
    }): Promise<Models.Transaction>;
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
        paramsOrFirst: { transactionId: string } | string,
    ): Promise<Models.Transaction> {
        let params: { transactionId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { transactionId: string };
        } else {
            params = {
                transactionId: paramsOrFirst as string,
            };
        }

        const transactionId = params.transactionId;
        if (typeof transactionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "transactionId"',
            );
        }
        const apiPath = '/tablesdb/transactions/{transactionId}'.replace(
            '{transactionId}',
            encodeURIComponent(String(transactionId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
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
    updateTransaction(params: {
        transactionId: string;
        commit?: boolean;
        rollback?: boolean;
    }): Promise<Models.Transaction>;
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
    updateTransaction(
        transactionId: string,
        commit?: boolean,
        rollback?: boolean,
    ): Promise<Models.Transaction>;
    updateTransaction(
        paramsOrFirst:
            | { transactionId: string; commit?: boolean; rollback?: boolean }
            | string,
        ...rest: [boolean?, boolean?]
    ): Promise<Models.Transaction> {
        let params: {
            transactionId: string;
            commit?: boolean;
            rollback?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                transactionId: string;
                commit?: boolean;
                rollback?: boolean;
            };
        } else {
            params = {
                transactionId: paramsOrFirst as string,
                commit: rest[0] as boolean,
                rollback: rest[1] as boolean,
            };
        }

        const transactionId = params.transactionId;
        const commit = params.commit;
        const rollback = params.rollback;
        if (typeof transactionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "transactionId"',
            );
        }
        const apiPath = '/tablesdb/transactions/{transactionId}'.replace(
            '{transactionId}',
            encodeURIComponent(String(transactionId)),
        );
        const apiPayload: Payload = {};
        if (typeof commit !== 'undefined') {
            apiPayload['commit'] = commit;
        }
        if (typeof rollback !== 'undefined') {
            apiPayload['rollback'] = rollback;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete a transaction by its unique ID.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTransaction(params: { transactionId: string }): Promise<{}>;
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
        paramsOrFirst: { transactionId: string } | string,
    ): Promise<{}> {
        let params: { transactionId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { transactionId: string };
        } else {
            params = {
                transactionId: paramsOrFirst as string,
            };
        }

        const transactionId = params.transactionId;
        if (typeof transactionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "transactionId"',
            );
        }
        const apiPath = '/tablesdb/transactions/{transactionId}'.replace(
            '{transactionId}',
            encodeURIComponent(String(transactionId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Create multiple operations in a single transaction.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @param {object[]} params.operations - Array of staged operations.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    createOperations(params: {
        transactionId: string;
        operations?: object[];
    }): Promise<Models.Transaction>;
    /**
     * Create multiple operations in a single transaction.
     *
     * @param {string} transactionId - Transaction ID.
     * @param {object[]} operations - Array of staged operations.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createOperations(
        transactionId: string,
        operations?: object[],
    ): Promise<Models.Transaction>;
    createOperations(
        paramsOrFirst:
            { transactionId: string; operations?: object[] } | string,
        ...rest: [object[]?]
    ): Promise<Models.Transaction> {
        let params: { transactionId: string; operations?: object[] };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                transactionId: string;
                operations?: object[];
            };
        } else {
            params = {
                transactionId: paramsOrFirst as string,
                operations: rest[0] as object[],
            };
        }

        const transactionId = params.transactionId;
        const operations = params.operations;
        if (typeof transactionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "transactionId"',
            );
        }
        const apiPath =
            '/tablesdb/transactions/{transactionId}/operations'.replace(
                '{transactionId}',
                encodeURIComponent(String(transactionId)),
            );
        const apiPayload: Payload = {};
        if (typeof operations !== 'undefined') {
            apiPayload['operations'] = operations;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    get(params: { databaseId: string }): Promise<Models.Database>;
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
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.Database> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a database by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string} params.specification - Database specification. Resizing between dedicated specifications changes cpu, memory, storage and the connection ceiling via a rolling cutover with zero downtime. Moving a `serverless` database onto a dedicated specification is a data migration, not a resize.
     * @param {number} params.replicas - Number of high availability replicas (0-5) for the dedicated database backing this database. Only valid when the database is backed by a dedicated specification. High availability is enabled when greater than 0.
     * @param {string} params.syncMode - Replication sync mode for the dedicated database backing this database. Only valid when the database is backed by a dedicated specification; the mode is only in force once there is at least one replica. Allowed values: async, sync, quorum.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    update(params: {
        databaseId: string;
        name?: string;
        enabled?: boolean;
        specification?: string;
        replicas?: number;
        syncMode?: string;
    }): Promise<Models.Database>;
    /**
     * Update a database by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string} specification - Database specification. Resizing between dedicated specifications changes cpu, memory, storage and the connection ceiling via a rolling cutover with zero downtime. Moving a `serverless` database onto a dedicated specification is a data migration, not a resize.
     * @param {number} replicas - Number of high availability replicas (0-5) for the dedicated database backing this database. Only valid when the database is backed by a dedicated specification. High availability is enabled when greater than 0.
     * @param {string} syncMode - Replication sync mode for the dedicated database backing this database. Only valid when the database is backed by a dedicated specification; the mode is only in force once there is at least one replica. Allowed values: async, sync, quorum.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(
        databaseId: string,
        name?: string,
        enabled?: boolean,
        specification?: string,
        replicas?: number,
        syncMode?: string,
    ): Promise<Models.Database>;
    update(
        paramsOrFirst:
            | {
                  databaseId: string;
                  name?: string;
                  enabled?: boolean;
                  specification?: string;
                  replicas?: number;
                  syncMode?: string;
              }
            | string,
        ...rest: [string?, boolean?, string?, number?, string?]
    ): Promise<Models.Database> {
        let params: {
            databaseId: string;
            name?: string;
            enabled?: boolean;
            specification?: string;
            replicas?: number;
            syncMode?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                name?: string;
                enabled?: boolean;
                specification?: string;
                replicas?: number;
                syncMode?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                specification: rest[2] as string,
                replicas: rest[3] as number,
                syncMode: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const name = params.name;
        const enabled = params.enabled;
        const specification = params.specification;
        const replicas = params.replicas;
        const syncMode = params.syncMode;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof specification !== 'undefined') {
            apiPayload['specification'] = specification;
        }
        if (typeof replicas !== 'undefined') {
            apiPayload['replicas'] = replicas;
        }
        if (typeof syncMode !== 'undefined') {
            apiPayload['syncMode'] = syncMode;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('put', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { databaseId: string }): Promise<{}>;
    /**
     * Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(databaseId: string): Promise<{}>;
    delete(paramsOrFirst: { databaseId: string } | string): Promise<{}> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Trigger a manual failover for a dedicated database with high availability enabled. Promotes a replica to primary. The failover runs asynchronously; poll the database document for status updates. A database left mid-operation also accepts this call as a repair once nothing is driving the operation it is stuck in. Repairing a failover that did not finish, a `failed` database, a stranded upgrade or migrate, or a stranded compute resize additionally requires `targetReplicaId` to name the member to promote, because the default target may be the member that operation already promoted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.targetReplicaId - Target replica ID to promote. If not specified, the healthiest replica is selected.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createFailover(params: {
        databaseId: string;
        targetReplicaId?: string;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Trigger a manual failover for a dedicated database with high availability enabled. Promotes a replica to primary. The failover runs asynchronously; poll the database document for status updates. A database left mid-operation also accepts this call as a repair once nothing is driving the operation it is stuck in. Repairing a failover that did not finish, a `failed` database, a stranded upgrade or migrate, or a stranded compute resize additionally requires `targetReplicaId` to name the member to promote, because the default target may be the member that operation already promoted.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} targetReplicaId - Target replica ID to promote. If not specified, the healthiest replica is selected.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFailover(
        databaseId: string,
        targetReplicaId?: string,
    ): Promise<Models.DedicatedDatabase>;
    createFailover(
        paramsOrFirst:
            { databaseId: string; targetReplicaId?: string } | string,
        ...rest: [string?]
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string; targetReplicaId?: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                targetReplicaId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                targetReplicaId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const targetReplicaId = params.targetReplicaId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/failovers'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof targetReplicaId !== 'undefined') {
            apiPayload['targetReplicaId'] = targetReplicaId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List the dedicated migrations for a TablesDB database. A database has at most one in-flight migration.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseMigrationList>}
     */
    listMigrations(params: {
        databaseId: string;
    }): Promise<Models.DatabaseMigrationList>;
    /**
     * List the dedicated migrations for a TablesDB database. A database has at most one in-flight migration.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseMigrationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMigrations(databaseId: string): Promise<Models.DatabaseMigrationList>;
    listMigrations(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DatabaseMigrationList> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/migrations'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Start migrating a serverless TablesDB database onto a dedicated MySQL compute. Data is copied to the target while the source stays live, with a brief read-only window during cutover.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.specification - Dedicated compute specification to provision as the migration target (e.g. s-2vcpu-4gb). The migration always targets a dedicated compute, so `serverless` is not accepted.
     * @param {boolean} params.autoCutover - Whether to cut over automatically once the copy is verified. When disabled the migration parks at ready_to_cutover and holds there until the cutover is performed manually.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseMigration>}
     */
    createMigration(params: {
        databaseId: string;
        specification: string;
        autoCutover?: boolean;
    }): Promise<Models.DatabaseMigration>;
    /**
     * Start migrating a serverless TablesDB database onto a dedicated MySQL compute. Data is copied to the target while the source stays live, with a brief read-only window during cutover.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} specification - Dedicated compute specification to provision as the migration target (e.g. s-2vcpu-4gb). The migration always targets a dedicated compute, so `serverless` is not accepted.
     * @param {boolean} autoCutover - Whether to cut over automatically once the copy is verified. When disabled the migration parks at ready_to_cutover and holds there until the cutover is performed manually.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseMigration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMigration(
        databaseId: string,
        specification: string,
        autoCutover?: boolean,
    ): Promise<Models.DatabaseMigration>;
    createMigration(
        paramsOrFirst:
            | {
                  databaseId: string;
                  specification: string;
                  autoCutover?: boolean;
              }
            | string,
        ...rest: [string?, boolean?]
    ): Promise<Models.DatabaseMigration> {
        let params: {
            databaseId: string;
            specification: string;
            autoCutover?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                specification: string;
                autoCutover?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                specification: rest[0] as string,
                autoCutover: rest[1] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const specification = params.specification;
        const autoCutover = params.autoCutover;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof specification === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "specification"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/migrations'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof specification !== 'undefined') {
            apiPayload['specification'] = specification;
        }
        if (typeof autoCutover !== 'undefined') {
            apiPayload['autoCutover'] = autoCutover;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a single dedicated migration for a TablesDB database by its ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseMigration>}
     */
    getMigration(params: {
        databaseId: string;
        migrationId: string;
    }): Promise<Models.DatabaseMigration>;
    /**
     * Get a single dedicated migration for a TablesDB database by its ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseMigration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getMigration(
        databaseId: string,
        migrationId: string,
    ): Promise<Models.DatabaseMigration>;
    getMigration(
        paramsOrFirst: { databaseId: string; migrationId: string } | string,
        ...rest: [string?]
    ): Promise<Models.DatabaseMigration> {
        let params: { databaseId: string; migrationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                migrationId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                migrationId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const migrationId = params.migrationId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof migrationId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "migrationId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/migrations/{migrationId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{migrationId}', encodeURIComponent(String(migrationId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Abort an in-flight TablesDB dedicated migration. Only allowed before cutover; once the migration has cut over it cannot be aborted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteMigration(params: {
        databaseId: string;
        migrationId: string;
    }): Promise<{}>;
    /**
     * Abort an in-flight TablesDB dedicated migration. Only allowed before cutover; once the migration has cut over it cannot be aborted.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteMigration(databaseId: string, migrationId: string): Promise<{}>;
    deleteMigration(
        paramsOrFirst: { databaseId: string; migrationId: string } | string,
        ...rest: [string?]
    ): Promise<{}> {
        let params: { databaseId: string; migrationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                migrationId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                migrationId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const migrationId = params.migrationId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof migrationId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "migrationId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/migrations/{migrationId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{migrationId}', encodeURIComponent(String(migrationId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Cut a verified TablesDB migration over to its dedicated compute. Only applies to a migration created with `autoCutover` disabled, which waits at `ready_to_cutover` until this is called. The routing flip happens shortly after this returns, with a brief read-only window. One call buys one attempt: a cutover that fails a check returns the migration to `verifying` and parks it again, so call this once more to retry.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseMigration>}
     */
    createCutover(params: {
        databaseId: string;
        migrationId: string;
    }): Promise<Models.DatabaseMigration>;
    /**
     * Cut a verified TablesDB migration over to its dedicated compute. Only applies to a migration created with `autoCutover` disabled, which waits at `ready_to_cutover` until this is called. The routing flip happens shortly after this returns, with a brief read-only window. One call buys one attempt: a cutover that fails a check returns the migration to `verifying` and parks it again, so call this once more to retry.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseMigration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCutover(
        databaseId: string,
        migrationId: string,
    ): Promise<Models.DatabaseMigration>;
    createCutover(
        paramsOrFirst: { databaseId: string; migrationId: string } | string,
        ...rest: [string?]
    ): Promise<Models.DatabaseMigration> {
        let params: { databaseId: string; migrationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                migrationId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                migrationId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const migrationId = params.migrationId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof migrationId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "migrationId"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/migrations/{migrationId}/cutovers'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{migrationId}',
                    encodeURIComponent(String(migrationId)),
                );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List the lifecycle operations recorded for a dedicated database, newest first. Every provision, update, restore, backup and replication action is recorded here with its outcome, including an attempt that was abandoned because another worker took over the database.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.status - Filter by operation status.
     * @param {number} params.limit - Maximum number of operations to return.
     * @param {number} params.offset - Number of operations to skip.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseOperationList>}
     */
    listOperations(params: {
        databaseId: string;
        status?: string;
        limit?: number;
        offset?: number;
    }): Promise<Models.DedicatedDatabaseOperationList>;
    /**
     * List the lifecycle operations recorded for a dedicated database, newest first. Every provision, update, restore, backup and replication action is recorded here with its outcome, including an attempt that was abandoned because another worker took over the database.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} status - Filter by operation status.
     * @param {number} limit - Maximum number of operations to return.
     * @param {number} offset - Number of operations to skip.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseOperationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listOperations(
        databaseId: string,
        status?: string,
        limit?: number,
        offset?: number,
    ): Promise<Models.DedicatedDatabaseOperationList>;
    listOperations(
        paramsOrFirst:
            | {
                  databaseId: string;
                  status?: string;
                  limit?: number;
                  offset?: number;
              }
            | string,
        ...rest: [string?, number?, number?]
    ): Promise<Models.DedicatedDatabaseOperationList> {
        let params: {
            databaseId: string;
            status?: string;
            limit?: number;
            offset?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                status?: string;
                limit?: number;
                offset?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                status: rest[0] as string,
                limit: rest[1] as number,
                offset: rest[2] as number,
            };
        }

        const databaseId = params.databaseId;
        const status = params.status;
        const limit = params.limit;
        const offset = params.offset;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/operations'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Get high availability status for a dedicated database. Returns replica statuses, replication lag, and sync mode.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseReplicas>}
     */
    getReplicas(params: {
        databaseId: string;
    }): Promise<Models.DedicatedDatabaseReplicas>;
    /**
     * Get high availability status for a dedicated database. Returns replica statuses, replication lag, and sync mode.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseReplicas>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getReplicas(databaseId: string): Promise<Models.DedicatedDatabaseReplicas>;
    getReplicas(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DedicatedDatabaseReplicas> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/replicas'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Get real-time health and status information for a dedicated database. Returns health status, readiness, uptime, connection info, replica status, and volume information.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseStatus>}
     */
    getStatus(params: { databaseId: string }): Promise<Models.DatabaseStatus>;
    /**
     * Get real-time health and status information for a dedicated database. Returns health status, readiness, uptime, connection info, replica status, and volume information.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseStatus>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getStatus(databaseId: string): Promise<Models.DatabaseStatus>;
    getStatus(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DatabaseStatus> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/status'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a list of all tables that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name, enabled, rowSecurity
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TableList>}
     */
    listTables(params: {
        databaseId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.TableList>;
    /**
     * Get a list of all tables that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name, enabled, rowSecurity
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTables(
        databaseId: string,
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.TableList>;
    listTables(
        paramsOrFirst:
            | {
                  databaseId: string;
                  queries?: string[];
                  search?: string;
                  total?: boolean;
              }
            | string,
        ...rest: [string[]?, string?, boolean?]
    ): Promise<Models.TableList> {
        let params: {
            databaseId: string;
            queries?: string[];
            search?: string;
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                queries?: string[];
                search?: string;
                total?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a new Table. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Table name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @param {object[]} params.columns - Array of column definitions to create. Each column should contain: key (string), type (string: string, varchar, text, mediumtext, longtext, integer, bigint, double, boolean, datetime, point, linestring, polygon, email, url, ip, enum), size (integer, required for string and varchar types), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} params.indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial), attributes (array of column keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    createTable(params: {
        databaseId: string;
        tableId: string;
        name: string;
        permissions?: string[];
        rowSecurity?: boolean;
        enabled?: boolean;
        columns?: object[];
        indexes?: object[];
    }): Promise<Models.Table>;
    /**
     * Create a new Table. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Table name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @param {object[]} columns - Array of column definitions to create. Each column should contain: key (string), type (string: string, varchar, text, mediumtext, longtext, integer, bigint, double, boolean, datetime, point, linestring, polygon, email, url, ip, enum), size (integer, required for string and varchar types), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial), attributes (array of column keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTable(
        databaseId: string,
        tableId: string,
        name: string,
        permissions?: string[],
        rowSecurity?: boolean,
        enabled?: boolean,
        columns?: object[],
        indexes?: object[],
    ): Promise<Models.Table>;
    createTable(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  name: string;
                  permissions?: string[];
                  rowSecurity?: boolean;
                  enabled?: boolean;
                  columns?: object[];
                  indexes?: object[];
              }
            | string,
        ...rest: [
            string?,
            string?,
            string[]?,
            boolean?,
            boolean?,
            object[]?,
            object[]?,
        ]
    ): Promise<Models.Table> {
        let params: {
            databaseId: string;
            tableId: string;
            name: string;
            permissions?: string[];
            rowSecurity?: boolean;
            enabled?: boolean;
            columns?: object[];
            indexes?: object[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                name: string;
                permissions?: string[];
                rowSecurity?: boolean;
                enabled?: boolean;
                columns?: object[];
                indexes?: object[];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                name: rest[1] as string,
                permissions: rest[2] as string[],
                rowSecurity: rest[3] as boolean,
                enabled: rest[4] as boolean,
                columns: rest[5] as object[],
                indexes: rest[6] as object[],
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const name = params.name;
        const permissions = params.permissions;
        const rowSecurity = params.rowSecurity;
        const enabled = params.enabled;
        const columns = params.columns;
        const indexes = params.indexes;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof tableId !== 'undefined') {
            apiPayload['tableId'] = tableId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
        }
        if (typeof rowSecurity !== 'undefined') {
            apiPayload['rowSecurity'] = rowSecurity;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof columns !== 'undefined') {
            apiPayload['columns'] = columns;
        }
        if (typeof indexes !== 'undefined') {
            apiPayload['indexes'] = indexes;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a table by its unique ID. This endpoint response returns a JSON object with the table metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    getTable(params: {
        databaseId: string;
        tableId: string;
    }): Promise<Models.Table>;
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
        paramsOrFirst: { databaseId: string; tableId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Table> {
        let params: { databaseId: string; tableId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a table by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.name - Table name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table-level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @param {boolean} params.purge - When true, purge all cached list responses for this table as part of the update. Use this to force readers to see fresh data immediately instead of waiting for the cache TTL to expire.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    updateTable(params: {
        databaseId: string;
        tableId: string;
        name?: string;
        permissions?: string[];
        rowSecurity?: boolean;
        enabled?: boolean;
        purge?: boolean;
    }): Promise<Models.Table>;
    /**
     * Update a table by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} name - Table name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table-level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @param {boolean} purge - When true, purge all cached list responses for this table as part of the update. Use this to force readers to see fresh data immediately instead of waiting for the cache TTL to expire.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTable(
        databaseId: string,
        tableId: string,
        name?: string,
        permissions?: string[],
        rowSecurity?: boolean,
        enabled?: boolean,
        purge?: boolean,
    ): Promise<Models.Table>;
    updateTable(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  name?: string;
                  permissions?: string[];
                  rowSecurity?: boolean;
                  enabled?: boolean;
                  purge?: boolean;
              }
            | string,
        ...rest: [string?, string?, string[]?, boolean?, boolean?, boolean?]
    ): Promise<Models.Table> {
        let params: {
            databaseId: string;
            tableId: string;
            name?: string;
            permissions?: string[];
            rowSecurity?: boolean;
            enabled?: boolean;
            purge?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                name?: string;
                permissions?: string[];
                rowSecurity?: boolean;
                enabled?: boolean;
                purge?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                name: rest[1] as string,
                permissions: rest[2] as string[],
                rowSecurity: rest[3] as boolean,
                enabled: rest[4] as boolean,
                purge: rest[5] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const name = params.name;
        const permissions = params.permissions;
        const rowSecurity = params.rowSecurity;
        const enabled = params.enabled;
        const purge = params.purge;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
        }
        if (typeof rowSecurity !== 'undefined') {
            apiPayload['rowSecurity'] = rowSecurity;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof purge !== 'undefined') {
            apiPayload['purge'] = purge;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('put', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete a table by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTable(params: { databaseId: string; tableId: string }): Promise<{}>;
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
        paramsOrFirst: { databaseId: string; tableId: string } | string,
        ...rest: [string?]
    ): Promise<{}> {
        let params: { databaseId: string; tableId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * List columns in the table.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, size, required, array, status, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     */
    listColumns(params: {
        databaseId: string;
        tableId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.ColumnList>;
    /**
     * List columns in the table.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, size, required, array, status, error
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listColumns(
        databaseId: string,
        tableId: string,
        queries?: string[],
        total?: boolean,
    ): Promise<Models.ColumnList>;
    listColumns(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  queries?: string[];
                  total?: boolean;
              }
            | string,
        ...rest: [string?, string[]?, boolean?]
    ): Promise<Models.ColumnList> {
        let params: {
            databaseId: string;
            tableId: string;
            queries?: string[];
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                queries: rest[1] as string[],
                total: rest[2] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const queries = params.queries;
        const total = params.total;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a bigint column. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number | bigint} params.min - Minimum value
     * @param {number | bigint} params.max - Maximum value
     * @param {number | bigint} params.xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBigint>}
     */
    createBigIntColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        min?: number | bigint;
        max?: number | bigint;
        xdefault?: number | bigint;
        array?: boolean;
    }): Promise<Models.ColumnBigint>;
    /**
     * Create a bigint column. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number | bigint} min - Minimum value
     * @param {number | bigint} max - Maximum value
     * @param {number | bigint} xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBigint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBigIntColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        min?: number | bigint,
        max?: number | bigint,
        xdefault?: number | bigint,
        array?: boolean,
    ): Promise<Models.ColumnBigint>;
    createBigIntColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  min?: number | bigint;
                  max?: number | bigint;
                  xdefault?: number | bigint;
                  array?: boolean;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | bigint)?,
            (number | bigint)?,
            (number | bigint)?,
            boolean?,
        ]
    ): Promise<Models.ColumnBigint> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            min?: number | bigint;
            max?: number | bigint;
            xdefault?: number | bigint;
            array?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                min?: number | bigint;
                max?: number | bigint;
                xdefault?: number | bigint;
                array?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number | bigint,
                max: rest[4] as number | bigint,
                xdefault: rest[5] as number | bigint,
                array: rest[6] as boolean,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/bigint'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            apiPayload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            apiPayload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a bigint column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number | bigint} params.xdefault - Default value. Cannot be set when column is required.
     * @param {number | bigint} params.min - Minimum value
     * @param {number | bigint} params.max - Maximum value
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBigint>}
     */
    updateBigIntColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: number | bigint;
        min?: number | bigint;
        max?: number | bigint;
        newKey?: string;
    }): Promise<Models.ColumnBigint>;
    /**
     * Update a bigint column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number | bigint} xdefault - Default value. Cannot be set when column is required.
     * @param {number | bigint} min - Minimum value
     * @param {number | bigint} max - Maximum value
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBigint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBigIntColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: number | bigint,
        min?: number | bigint,
        max?: number | bigint,
        newKey?: string,
    ): Promise<Models.ColumnBigint>;
    updateBigIntColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number | bigint;
                  min?: number | bigint;
                  max?: number | bigint;
                  newKey?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | bigint)?,
            (number | bigint)?,
            (number | bigint)?,
            string?,
        ]
    ): Promise<Models.ColumnBigint> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: number | bigint;
            min?: number | bigint;
            max?: number | bigint;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: number | bigint;
                min?: number | bigint;
                max?: number | bigint;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number | bigint,
                min: rest[4] as number | bigint,
                max: rest[5] as number | bigint,
                newKey: rest[6] as string,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/bigint/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            apiPayload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            apiPayload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a boolean column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {boolean} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     */
    createBooleanColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: boolean;
        array?: boolean;
    }): Promise<Models.ColumnBoolean>;
    /**
     * Create a boolean column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {boolean} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBooleanColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: boolean,
        array?: boolean,
    ): Promise<Models.ColumnBoolean>;
    createBooleanColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: boolean;
                  array?: boolean;
              }
            | string,
        ...rest: [string?, string?, boolean?, boolean?, boolean?]
    ): Promise<Models.ColumnBoolean> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: boolean;
            array?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: boolean;
                array?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as boolean,
                array: rest[4] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/boolean'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a boolean column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {boolean} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     */
    updateBooleanColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: boolean;
        newKey?: string;
    }): Promise<Models.ColumnBoolean>;
    /**
     * Update a boolean column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {boolean} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBooleanColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: boolean,
        newKey?: string,
    ): Promise<Models.ColumnBoolean>;
    updateBooleanColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: boolean;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, boolean?, string?]
    ): Promise<Models.ColumnBoolean> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: boolean;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: boolean;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as boolean,
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/boolean/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
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
    createDatetimeColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnDatetime>;
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
    createDatetimeColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        array?: boolean,
    ): Promise<Models.ColumnDatetime>;
    createDatetimeColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, boolean?]
    ): Promise<Models.ColumnDatetime> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            array?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                array?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/datetime'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
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
    updateDatetimeColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnDatetime>;
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
    updateDatetimeColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        newKey?: string,
    ): Promise<Models.ColumnDatetime>;
    updateDatetimeColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, string?]
    ): Promise<Models.ColumnDatetime> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/datetime/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
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
    createEmailColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnEmail>;
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
    createEmailColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        array?: boolean,
    ): Promise<Models.ColumnEmail>;
    createEmailColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, boolean?]
    ): Promise<Models.ColumnEmail> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            array?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                array?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/email'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
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
    updateEmailColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnEmail>;
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
    updateEmailColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        newKey?: string,
    ): Promise<Models.ColumnEmail>;
    updateEmailColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, string?]
    ): Promise<Models.ColumnEmail> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/email/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
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
    createEnumColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        elements: string[];
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnEnum>;
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
    createEnumColumn(
        databaseId: string,
        tableId: string,
        key: string,
        elements: string[],
        required: boolean,
        xdefault?: string,
        array?: boolean,
    ): Promise<Models.ColumnEnum>;
    createEnumColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  elements: string[];
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
              }
            | string,
        ...rest: [string?, string?, string[]?, boolean?, string?, boolean?]
    ): Promise<Models.ColumnEnum> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            elements: string[];
            required: boolean;
            xdefault?: string;
            array?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                elements: string[];
                required: boolean;
                xdefault?: string;
                array?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                elements: rest[2] as string[],
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                array: rest[5] as boolean,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof elements === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "elements"',
            );
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/enum'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof elements !== 'undefined') {
            apiPayload['elements'] = elements;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
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
    updateEnumColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        elements: string[];
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnEnum>;
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
    updateEnumColumn(
        databaseId: string,
        tableId: string,
        key: string,
        elements: string[],
        required: boolean,
        xdefault?: string,
        newKey?: string,
    ): Promise<Models.ColumnEnum>;
    updateEnumColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  elements: string[];
                  required: boolean;
                  xdefault?: string;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, string[]?, boolean?, string?, string?]
    ): Promise<Models.ColumnEnum> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            elements: string[];
            required: boolean;
            xdefault?: string;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                elements: string[];
                required: boolean;
                xdefault?: string;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                elements: rest[2] as string[],
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                newKey: rest[5] as string,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof elements === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "elements"',
            );
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/enum/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof elements !== 'undefined') {
            apiPayload['elements'] = elements;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
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
    createFloatColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        min?: number;
        max?: number;
        xdefault?: number;
        array?: boolean;
    }): Promise<Models.ColumnFloat>;
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
    createFloatColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        min?: number,
        max?: number,
        xdefault?: number,
        array?: boolean,
    ): Promise<Models.ColumnFloat>;
    createFloatColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  min?: number;
                  max?: number;
                  xdefault?: number;
                  array?: boolean;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            number?,
            number?,
            number?,
            boolean?,
        ]
    ): Promise<Models.ColumnFloat> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            min?: number;
            max?: number;
            xdefault?: number;
            array?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                min?: number;
                max?: number;
                xdefault?: number;
                array?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number,
                max: rest[4] as number,
                xdefault: rest[5] as number,
                array: rest[6] as boolean,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/float'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            apiPayload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            apiPayload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
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
    updateFloatColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: number;
        min?: number;
        max?: number;
        newKey?: string;
    }): Promise<Models.ColumnFloat>;
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
    updateFloatColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: number,
        min?: number,
        max?: number,
        newKey?: string,
    ): Promise<Models.ColumnFloat>;
    updateFloatColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number;
                  min?: number;
                  max?: number;
                  newKey?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            number?,
            number?,
            number?,
            string?,
        ]
    ): Promise<Models.ColumnFloat> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: number;
            min?: number;
            max?: number;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: number;
                min?: number;
                max?: number;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number,
                min: rest[4] as number,
                max: rest[5] as number,
                newKey: rest[6] as string,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/float/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            apiPayload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            apiPayload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create an integer column. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number | bigint} params.min - Minimum value
     * @param {number | bigint} params.max - Maximum value
     * @param {number | bigint} params.xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     */
    createIntegerColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        min?: number | bigint;
        max?: number | bigint;
        xdefault?: number | bigint;
        array?: boolean;
    }): Promise<Models.ColumnInteger>;
    /**
     * Create an integer column. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number | bigint} min - Minimum value
     * @param {number | bigint} max - Maximum value
     * @param {number | bigint} xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIntegerColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        min?: number | bigint,
        max?: number | bigint,
        xdefault?: number | bigint,
        array?: boolean,
    ): Promise<Models.ColumnInteger>;
    createIntegerColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  min?: number | bigint;
                  max?: number | bigint;
                  xdefault?: number | bigint;
                  array?: boolean;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | bigint)?,
            (number | bigint)?,
            (number | bigint)?,
            boolean?,
        ]
    ): Promise<Models.ColumnInteger> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            min?: number | bigint;
            max?: number | bigint;
            xdefault?: number | bigint;
            array?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                min?: number | bigint;
                max?: number | bigint;
                xdefault?: number | bigint;
                array?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number | bigint,
                max: rest[4] as number | bigint,
                xdefault: rest[5] as number | bigint,
                array: rest[6] as boolean,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/integer'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            apiPayload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            apiPayload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update an integer column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number | bigint} params.xdefault - Default value. Cannot be set when column is required.
     * @param {number | bigint} params.min - Minimum value
     * @param {number | bigint} params.max - Maximum value
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     */
    updateIntegerColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: number | bigint;
        min?: number | bigint;
        max?: number | bigint;
        newKey?: string;
    }): Promise<Models.ColumnInteger>;
    /**
     * Update an integer column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number | bigint} xdefault - Default value. Cannot be set when column is required.
     * @param {number | bigint} min - Minimum value
     * @param {number | bigint} max - Maximum value
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIntegerColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: number | bigint,
        min?: number | bigint,
        max?: number | bigint,
        newKey?: string,
    ): Promise<Models.ColumnInteger>;
    updateIntegerColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number | bigint;
                  min?: number | bigint;
                  max?: number | bigint;
                  newKey?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | bigint)?,
            (number | bigint)?,
            (number | bigint)?,
            string?,
        ]
    ): Promise<Models.ColumnInteger> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: number | bigint;
            min?: number | bigint;
            max?: number | bigint;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: number | bigint;
                min?: number | bigint;
                max?: number | bigint;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number | bigint,
                min: rest[4] as number | bigint,
                max: rest[5] as number | bigint,
                newKey: rest[6] as string,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/integer/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            apiPayload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            apiPayload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
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
    createIpColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnIp>;
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
    createIpColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        array?: boolean,
    ): Promise<Models.ColumnIp>;
    createIpColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, boolean?]
    ): Promise<Models.ColumnIp> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            array?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                array?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/ip'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
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
    updateIpColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnIp>;
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
    updateIpColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        newKey?: string,
    ): Promise<Models.ColumnIp>;
    updateIpColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, string?]
    ): Promise<Models.ColumnIp> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/ip/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a geometric line column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[][]} params.xdefault - Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     */
    createLineColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[][];
    }): Promise<Models.ColumnLine>;
    /**
     * Create a geometric line column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[][]} xdefault - Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLineColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: any[][],
    ): Promise<Models.ColumnLine>;
    createLineColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: any[][];
              }
            | string,
        ...rest: [string?, string?, boolean?, any[][]?]
    ): Promise<Models.ColumnLine> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: any[][];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: any[][];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[][],
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/line'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a line column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[][]} params.xdefault - Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     */
    updateLineColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[][];
        newKey?: string;
    }): Promise<Models.ColumnLine>;
    /**
     * Update a line column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[][]} xdefault - Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLineColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: any[][],
        newKey?: string,
    ): Promise<Models.ColumnLine>;
    updateLineColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: any[][];
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, any[][]?, string?]
    ): Promise<Models.ColumnLine> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: any[][];
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: any[][];
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[][],
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/line/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a longtext column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLongtext>}
     */
    createLongtextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnLongtext>;
    /**
     * Create a longtext column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLongtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLongtextColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        array?: boolean,
        encrypt?: boolean,
    ): Promise<Models.ColumnLongtext>;
    createLongtextColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
                  encrypt?: boolean;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, boolean?, boolean?]
    ): Promise<Models.ColumnLongtext> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            array?: boolean;
            encrypt?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                array?: boolean;
                encrypt?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean,
                encrypt: rest[5] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        const encrypt = params.encrypt;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/longtext'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        if (typeof encrypt !== 'undefined') {
            apiPayload['encrypt'] = encrypt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a longtext column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLongtext>}
     */
    updateLongtextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnLongtext>;
    /**
     * Update a longtext column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLongtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLongtextColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        newKey?: string,
    ): Promise<Models.ColumnLongtext>;
    updateLongtextColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, string?]
    ): Promise<Models.ColumnLongtext> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/longtext/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a mediumtext column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnMediumtext>}
     */
    createMediumtextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnMediumtext>;
    /**
     * Create a mediumtext column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnMediumtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMediumtextColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        array?: boolean,
        encrypt?: boolean,
    ): Promise<Models.ColumnMediumtext>;
    createMediumtextColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
                  encrypt?: boolean;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, boolean?, boolean?]
    ): Promise<Models.ColumnMediumtext> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            array?: boolean;
            encrypt?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                array?: boolean;
                encrypt?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean,
                encrypt: rest[5] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        const encrypt = params.encrypt;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/mediumtext'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        if (typeof encrypt !== 'undefined') {
            apiPayload['encrypt'] = encrypt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a mediumtext column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnMediumtext>}
     */
    updateMediumtextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnMediumtext>;
    /**
     * Update a mediumtext column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnMediumtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMediumtextColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        newKey?: string,
    ): Promise<Models.ColumnMediumtext>;
    updateMediumtextColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, string?]
    ): Promise<Models.ColumnMediumtext> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/mediumtext/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a geometric point column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number[]} params.xdefault - Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     */
    createPointColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: number[];
    }): Promise<Models.ColumnPoint>;
    /**
     * Create a geometric point column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number[]} xdefault - Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPointColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: number[],
    ): Promise<Models.ColumnPoint>;
    createPointColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number[];
              }
            | string,
        ...rest: [string?, string?, boolean?, number[]?]
    ): Promise<Models.ColumnPoint> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: number[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: number[];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number[],
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/point'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a point column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number[]} params.xdefault - Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     */
    updatePointColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: number[];
        newKey?: string;
    }): Promise<Models.ColumnPoint>;
    /**
     * Update a point column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number[]} xdefault - Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePointColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: number[],
        newKey?: string,
    ): Promise<Models.ColumnPoint>;
    updatePointColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number[];
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, number[]?, string?]
    ): Promise<Models.ColumnPoint> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: number[];
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: number[];
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number[],
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/point/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a geometric polygon column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[][]} params.xdefault - Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     */
    createPolygonColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[][];
    }): Promise<Models.ColumnPolygon>;
    /**
     * Create a geometric polygon column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[][]} xdefault - Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPolygonColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: any[][],
    ): Promise<Models.ColumnPolygon>;
    createPolygonColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: any[][];
              }
            | string,
        ...rest: [string?, string?, boolean?, any[][]?]
    ): Promise<Models.ColumnPolygon> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: any[][];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: any[][];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[][],
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/polygon'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a polygon column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[][]} params.xdefault - Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     */
    updatePolygonColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[][];
        newKey?: string;
    }): Promise<Models.ColumnPolygon>;
    /**
     * Update a polygon column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[][]} xdefault - Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePolygonColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: any[][],
        newKey?: string,
    ): Promise<Models.ColumnPolygon>;
    updatePolygonColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: any[][];
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, any[][]?, string?]
    ): Promise<Models.ColumnPolygon> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: any[][];
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: any[][];
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[][],
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/polygon/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.relatedTableId - Related Table ID.
     * @param {RelationshipType} params.type - Relationship type. Possible values are: oneToOne, oneToMany, manyToOne, manyToMany.
     * @param {boolean} params.twoWay - Is Two Way?
     * @param {string} params.key - Column Key.
     * @param {string} params.twoWayKey - Two Way Column Key.
     * @param {RelationMutate} params.onDelete - Delete constraint. Possible values are: cascade, restrict, setNull.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     */
    createRelationshipColumn(params: {
        databaseId: string;
        tableId: string;
        relatedTableId: string;
        type: RelationshipType;
        twoWay?: boolean;
        key?: string;
        twoWayKey?: string;
        onDelete?: RelationMutate;
    }): Promise<Models.ColumnRelationship>;
    /**
     * Create relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} relatedTableId - Related Table ID.
     * @param {RelationshipType} type - Relationship type. Possible values are: oneToOne, oneToMany, manyToOne, manyToMany.
     * @param {boolean} twoWay - Is Two Way?
     * @param {string} key - Column Key.
     * @param {string} twoWayKey - Two Way Column Key.
     * @param {RelationMutate} onDelete - Delete constraint. Possible values are: cascade, restrict, setNull.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRelationshipColumn(
        databaseId: string,
        tableId: string,
        relatedTableId: string,
        type: RelationshipType,
        twoWay?: boolean,
        key?: string,
        twoWayKey?: string,
        onDelete?: RelationMutate,
    ): Promise<Models.ColumnRelationship>;
    createRelationshipColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  relatedTableId: string;
                  type: RelationshipType;
                  twoWay?: boolean;
                  key?: string;
                  twoWayKey?: string;
                  onDelete?: RelationMutate;
              }
            | string,
        ...rest: [
            string?,
            string?,
            RelationshipType?,
            boolean?,
            string?,
            string?,
            RelationMutate?,
        ]
    ): Promise<Models.ColumnRelationship> {
        let params: {
            databaseId: string;
            tableId: string;
            relatedTableId: string;
            type: RelationshipType;
            twoWay?: boolean;
            key?: string;
            twoWayKey?: string;
            onDelete?: RelationMutate;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                relatedTableId: string;
                type: RelationshipType;
                twoWay?: boolean;
                key?: string;
                twoWayKey?: string;
                onDelete?: RelationMutate;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                relatedTableId: rest[1] as string,
                type: rest[2] as RelationshipType,
                twoWay: rest[3] as boolean,
                key: rest[4] as string,
                twoWayKey: rest[5] as string,
                onDelete: rest[6] as RelationMutate,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof relatedTableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "relatedTableId"',
            );
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/relationship'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof relatedTableId !== 'undefined') {
            apiPayload['relatedTableId'] = relatedTableId;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof twoWay !== 'undefined') {
            apiPayload['twoWay'] = twoWay;
        }
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof twoWayKey !== 'undefined') {
            apiPayload['twoWayKey'] = twoWayKey;
        }
        if (typeof onDelete !== 'undefined') {
            apiPayload['onDelete'] = onDelete;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a string column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {number} params.size - Column size for text columns, in number of characters.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     * @deprecated This API has been deprecated since 1.9.0. Please use `TablesDB.createTextColumn` instead.
     */
    createStringColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        size: number;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnString>;
    /**
     * Create a string column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
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
    createStringColumn(
        databaseId: string,
        tableId: string,
        key: string,
        size: number,
        required: boolean,
        xdefault?: string,
        array?: boolean,
        encrypt?: boolean,
    ): Promise<Models.ColumnString>;
    createStringColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  size: number;
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
                  encrypt?: boolean;
              }
            | string,
        ...rest: [
            string?,
            string?,
            number?,
            boolean?,
            string?,
            boolean?,
            boolean?,
        ]
    ): Promise<Models.ColumnString> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            size: number;
            required: boolean;
            xdefault?: string;
            array?: boolean;
            encrypt?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                size: number;
                required: boolean;
                xdefault?: string;
                array?: boolean;
                encrypt?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                size: rest[2] as number,
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                array: rest[5] as boolean,
                encrypt: rest[6] as boolean,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof size === 'undefined') {
            throw new AppwriteException('Missing required parameter: "size"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/string'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof size !== 'undefined') {
            apiPayload['size'] = size;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        if (typeof encrypt !== 'undefined') {
            apiPayload['encrypt'] = encrypt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a string column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} params.size - Maximum size of the string column.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateTextColumn` instead.
     */
    updateStringColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        size?: number;
        newKey?: string;
    }): Promise<Models.ColumnString>;
    /**
     * Update a string column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} size - Maximum size of the string column.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateStringColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        size?: number,
        newKey?: string,
    ): Promise<Models.ColumnString>;
    updateStringColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  size?: number;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, number?, string?]
    ): Promise<Models.ColumnString> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            size?: number;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                size?: number;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                size: rest[4] as number,
                newKey: rest[5] as string,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/string/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof size !== 'undefined') {
            apiPayload['size'] = size;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a text column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnText>}
     */
    createTextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnText>;
    /**
     * Create a text column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnText>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTextColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        array?: boolean,
        encrypt?: boolean,
    ): Promise<Models.ColumnText>;
    createTextColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
                  encrypt?: boolean;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, boolean?, boolean?]
    ): Promise<Models.ColumnText> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            array?: boolean;
            encrypt?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                array?: boolean;
                encrypt?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean,
                encrypt: rest[5] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        const encrypt = params.encrypt;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/text'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        if (typeof encrypt !== 'undefined') {
            apiPayload['encrypt'] = encrypt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a text column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnText>}
     */
    updateTextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnText>;
    /**
     * Update a text column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnText>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTextColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        newKey?: string,
    ): Promise<Models.ColumnText>;
    updateTextColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, string?]
    ): Promise<Models.ColumnText> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/text/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
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
    createUrlColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnUrl>;
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
    createUrlColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        array?: boolean,
    ): Promise<Models.ColumnUrl>;
    createUrlColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, boolean?]
    ): Promise<Models.ColumnUrl> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            array?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                array?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                array: rest[4] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/url'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
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
    updateUrlColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnUrl>;
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
    updateUrlColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        newKey?: string,
    ): Promise<Models.ColumnUrl>;
    updateUrlColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, string?]
    ): Promise<Models.ColumnUrl> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                newKey: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/url/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a varchar column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {number} params.size - Column size for varchar columns, in number of characters. Maximum size is 16381.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnVarchar>}
     */
    createVarcharColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        size: number;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnVarchar>;
    /**
     * Create a varchar column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {number} size - Column size for varchar columns, in number of characters. Maximum size is 16381.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnVarchar>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVarcharColumn(
        databaseId: string,
        tableId: string,
        key: string,
        size: number,
        required: boolean,
        xdefault?: string,
        array?: boolean,
        encrypt?: boolean,
    ): Promise<Models.ColumnVarchar>;
    createVarcharColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  size: number;
                  required: boolean;
                  xdefault?: string;
                  array?: boolean;
                  encrypt?: boolean;
              }
            | string,
        ...rest: [
            string?,
            string?,
            number?,
            boolean?,
            string?,
            boolean?,
            boolean?,
        ]
    ): Promise<Models.ColumnVarchar> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            size: number;
            required: boolean;
            xdefault?: string;
            array?: boolean;
            encrypt?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                size: number;
                required: boolean;
                xdefault?: string;
                array?: boolean;
                encrypt?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                size: rest[2] as number,
                required: rest[3] as boolean,
                xdefault: rest[4] as string,
                array: rest[5] as boolean,
                encrypt: rest[6] as boolean,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof size === 'undefined') {
            throw new AppwriteException('Missing required parameter: "size"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/varchar'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof size !== 'undefined') {
            apiPayload['size'] = size;
        }
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            apiPayload['array'] = array;
        }
        if (typeof encrypt !== 'undefined') {
            apiPayload['encrypt'] = encrypt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a varchar column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} params.size - Maximum size of the varchar column.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnVarchar>}
     */
    updateVarcharColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        size?: number;
        newKey?: string;
    }): Promise<Models.ColumnVarchar>;
    /**
     * Update a varchar column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} size - Maximum size of the varchar column.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnVarchar>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVarcharColumn(
        databaseId: string,
        tableId: string,
        key: string,
        required: boolean,
        xdefault?: string,
        size?: number,
        newKey?: string,
    ): Promise<Models.ColumnVarchar>;
    updateVarcharColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string;
                  size?: number;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, string?, number?, string?]
    ): Promise<Models.ColumnVarchar> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            required: boolean;
            xdefault?: string;
            size?: number;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                required: boolean;
                xdefault?: string;
                size?: number;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string,
                size: rest[4] as number,
                newKey: rest[5] as string,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        if (typeof xdefault === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "xdefault"',
            );
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/varchar/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof required !== 'undefined') {
            apiPayload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            apiPayload['default'] = xdefault;
        }
        if (typeof size !== 'undefined') {
            apiPayload['size'] = size;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Get column by ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean | Models.ColumnInteger | Models.ColumnFloat | Models.ColumnEmail | Models.ColumnEnum | Models.ColumnUrl | Models.ColumnIp | Models.ColumnDatetime | Models.ColumnRelationship | Models.ColumnString>}
     */
    getColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
    }): Promise<
        | Models.ColumnBoolean
        | Models.ColumnInteger
        | Models.ColumnFloat
        | Models.ColumnEmail
        | Models.ColumnEnum
        | Models.ColumnUrl
        | Models.ColumnIp
        | Models.ColumnDatetime
        | Models.ColumnRelationship
        | Models.ColumnString
    >;
    /**
     * Get column by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean | Models.ColumnInteger | Models.ColumnFloat | Models.ColumnEmail | Models.ColumnEnum | Models.ColumnUrl | Models.ColumnIp | Models.ColumnDatetime | Models.ColumnRelationship | Models.ColumnString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getColumn(
        databaseId: string,
        tableId: string,
        key: string,
    ): Promise<
        | Models.ColumnBoolean
        | Models.ColumnInteger
        | Models.ColumnFloat
        | Models.ColumnEmail
        | Models.ColumnEnum
        | Models.ColumnUrl
        | Models.ColumnIp
        | Models.ColumnDatetime
        | Models.ColumnRelationship
        | Models.ColumnString
    >;
    getColumn(
        paramsOrFirst:
            { databaseId: string; tableId: string; key: string } | string,
        ...rest: [string?, string?]
    ): Promise<
        | Models.ColumnBoolean
        | Models.ColumnInteger
        | Models.ColumnFloat
        | Models.ColumnEmail
        | Models.ColumnEnum
        | Models.ColumnUrl
        | Models.ColumnIp
        | Models.ColumnDatetime
        | Models.ColumnRelationship
        | Models.ColumnString
    > {
        let params: { databaseId: string; tableId: string; key: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/{key}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)))
            .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
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
    deleteColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
    }): Promise<{}>;
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
        paramsOrFirst:
            { databaseId: string; tableId: string; key: string } | string,
        ...rest: [string?, string?]
    ): Promise<{}> {
        let params: { databaseId: string; tableId: string; key: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/{key}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)))
            .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Update relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {RelationMutate} params.onDelete - Delete constraint. Possible values are: cascade, restrict, setNull.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     */
    updateRelationshipColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        onDelete?: RelationMutate;
        newKey?: string;
    }): Promise<Models.ColumnRelationship>;
    /**
     * Update relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {RelationMutate} onDelete - Delete constraint. Possible values are: cascade, restrict, setNull.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRelationshipColumn(
        databaseId: string,
        tableId: string,
        key: string,
        onDelete?: RelationMutate,
        newKey?: string,
    ): Promise<Models.ColumnRelationship>;
    updateRelationshipColumn(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  onDelete?: RelationMutate;
                  newKey?: string;
              }
            | string,
        ...rest: [string?, string?, RelationMutate?, string?]
    ): Promise<Models.ColumnRelationship> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            onDelete?: RelationMutate;
            newKey?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                onDelete?: RelationMutate;
                newKey?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                onDelete: rest[2] as RelationMutate,
                newKey: rest[3] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        const onDelete = params.onDelete;
        const newKey = params.newKey;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/columns/{key}/relationship'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof onDelete !== 'undefined') {
            apiPayload['onDelete'] = onDelete;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * List indexes on the table.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, status, attributes, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     */
    listIndexes(params: {
        databaseId: string;
        tableId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.ColumnIndexList>;
    /**
     * List indexes on the table.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, status, attributes, error
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listIndexes(
        databaseId: string,
        tableId: string,
        queries?: string[],
        total?: boolean,
    ): Promise<Models.ColumnIndexList>;
    listIndexes(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  queries?: string[];
                  total?: boolean;
              }
            | string,
        ...rest: [string?, string[]?, boolean?]
    ): Promise<Models.ColumnIndexList> {
        let params: {
            databaseId: string;
            tableId: string;
            queries?: string[];
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                queries: rest[1] as string[],
                total: rest[2] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const queries = params.queries;
        const total = params.total;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Creates an index on the columns listed. Your index should include all the columns you will query in a single request.
     * Type can be `key`, `fulltext`, or `unique`.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Index Key.
     * @param {TablesDBIndexType} params.type - Index type.
     * @param {string[]} params.columns - Array of columns to index. Maximum of 100 columns are allowed, each 32 characters long.
     * @param {OrderBy[]} params.orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} params.lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     */
    createIndex(params: {
        databaseId: string;
        tableId: string;
        key: string;
        type: TablesDBIndexType;
        columns: string[];
        orders?: OrderBy[];
        lengths?: number[];
    }): Promise<Models.ColumnIndex>;
    /**
     * Creates an index on the columns listed. Your index should include all the columns you will query in a single request.
     * Type can be `key`, `fulltext`, or `unique`.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Index Key.
     * @param {TablesDBIndexType} type - Index type.
     * @param {string[]} columns - Array of columns to index. Maximum of 100 columns are allowed, each 32 characters long.
     * @param {OrderBy[]} orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIndex(
        databaseId: string,
        tableId: string,
        key: string,
        type: TablesDBIndexType,
        columns: string[],
        orders?: OrderBy[],
        lengths?: number[],
    ): Promise<Models.ColumnIndex>;
    createIndex(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  key: string;
                  type: TablesDBIndexType;
                  columns: string[];
                  orders?: OrderBy[];
                  lengths?: number[];
              }
            | string,
        ...rest: [
            string?,
            string?,
            TablesDBIndexType?,
            string[]?,
            OrderBy[]?,
            number[]?,
        ]
    ): Promise<Models.ColumnIndex> {
        let params: {
            databaseId: string;
            tableId: string;
            key: string;
            type: TablesDBIndexType;
            columns: string[];
            orders?: OrderBy[];
            lengths?: number[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
                type: TablesDBIndexType;
                columns: string[];
                orders?: OrderBy[];
                lengths?: number[];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
                type: rest[2] as TablesDBIndexType,
                columns: rest[3] as string[],
                orders: rest[4] as OrderBy[],
                lengths: rest[5] as number[],
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof columns === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "columns"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof columns !== 'undefined') {
            apiPayload['columns'] = columns;
        }
        if (typeof orders !== 'undefined') {
            apiPayload['orders'] = orders;
        }
        if (typeof lengths !== 'undefined') {
            apiPayload['lengths'] = lengths;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get index by ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     */
    getIndex(params: {
        databaseId: string;
        tableId: string;
        key: string;
    }): Promise<Models.ColumnIndex>;
    /**
     * Get index by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getIndex(
        databaseId: string,
        tableId: string,
        key: string,
    ): Promise<Models.ColumnIndex>;
    getIndex(
        paramsOrFirst:
            { databaseId: string; tableId: string; key: string } | string,
        ...rest: [string?, string?]
    ): Promise<Models.ColumnIndex> {
        let params: { databaseId: string; tableId: string; key: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes/{key}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)))
            .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete an index.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIndex(params: {
        databaseId: string;
        tableId: string;
        key: string;
    }): Promise<{}>;
    /**
     * Delete an index.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteIndex(databaseId: string, tableId: string, key: string): Promise<{}>;
    deleteIndex(
        paramsOrFirst:
            { databaseId: string; tableId: string; key: string } | string,
        ...rest: [string?, string?]
    ): Promise<{}> {
        let params: { databaseId: string; tableId: string; key: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                key: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                key: rest[1] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const key = params.key;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes/{key}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)))
            .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a list of all the user's rows in a given table. You can use the query params to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/products/databases/tables#create-table).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} params.ttl - TTL (seconds) for caching list responses. Responses are stored in an in-memory key-value cache, keyed per project, table, schema version (columns and indexes), caller authorization roles, and the exact query — so users with different permissions never share cached entries. Schema changes invalidate cached entries automatically; row writes do not, so choose a TTL you are comfortable serving as stale data. Set to 0 to disable caching. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    listRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        queries?: string[];
        transactionId?: string;
        total?: boolean;
        ttl?: number;
    }): Promise<Models.RowList<Row>>;
    /**
     * Get a list of all the user's rows in a given table. You can use the query params to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/products/databases/tables#create-table).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} ttl - TTL (seconds) for caching list responses. Responses are stored in an in-memory key-value cache, keyed per project, table, schema version (columns and indexes), caller authorization roles, and the exact query — so users with different permissions never share cached entries. Schema changes invalidate cached entries automatically; row writes do not, so choose a TTL you are comfortable serving as stale data. Set to 0 to disable caching. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRows<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        queries?: string[],
        transactionId?: string,
        total?: boolean,
        ttl?: number,
    ): Promise<Models.RowList<Row>>;
    listRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  queries?: string[];
                  transactionId?: string;
                  total?: boolean;
                  ttl?: number;
              }
            | string,
        ...rest: [string?, string[]?, string?, boolean?, number?]
    ): Promise<Models.RowList<Row>> {
        let params: {
            databaseId: string;
            tableId: string;
            queries?: string[];
            transactionId?: string;
            total?: boolean;
            ttl?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                queries?: string[];
                transactionId?: string;
                total?: boolean;
                ttl?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                queries: rest[1] as string[],
                transactionId: rest[2] as string,
                total: rest[3] as boolean,
                ttl: rest[4] as number,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const queries = params.queries;
        const transactionId = params.transactionId;
        const total = params.total;
        const ttl = params.ttl;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a new Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows.
     * @param {string} params.rowId - Row ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>} params.data - Row data as JSON object.
     * @param {string[]} params.permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    createRow<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        data: Row extends Models.DefaultRow
            ? Partial<Models.Row> & Record<string, any>
            : Partial<Models.Row> & Omit<Row, keyof Models.Row>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Create a new Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows.
     * @param {string} rowId - Row ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>} data - Row data as JSON object.
     * @param {string[]} permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRow<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        rowId: string,
        data: Row extends Models.DefaultRow
            ? Partial<Models.Row> & Record<string, any>
            : Partial<Models.Row> & Omit<Row, keyof Models.Row>,
        permissions?: string[],
        transactionId?: string,
    ): Promise<Row>;
    createRow<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  rowId: string;
                  data: Row extends Models.DefaultRow
                      ? Partial<Models.Row> & Record<string, any>
                      : Partial<Models.Row> & Omit<Row, keyof Models.Row>;
                  permissions?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (Row extends Models.DefaultRow
                ? Partial<Models.Row> & Record<string, any>
                : Partial<Models.Row> & Omit<Row, keyof Models.Row>)?,
            string[]?,
            string?,
        ]
    ): Promise<Row> {
        let params: {
            databaseId: string;
            tableId: string;
            rowId: string;
            data: Row extends Models.DefaultRow
                ? Partial<Models.Row> & Record<string, any>
                : Partial<Models.Row> & Omit<Row, keyof Models.Row>;
            permissions?: string[];
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                rowId: string;
                data: Row extends Models.DefaultRow
                    ? Partial<Models.Row> & Record<string, any>
                    : Partial<Models.Row> & Omit<Row, keyof Models.Row>;
                permissions?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                data: rest[2] as Row extends Models.DefaultRow
                    ? Partial<Models.Row> & Record<string, any>
                    : Partial<Models.Row> & Omit<Row, keyof Models.Row>,
                permissions: rest[3] as string[],
                transactionId: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const data = params.data;
        const permissions = params.permissions;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof rowId !== 'undefined') {
            apiPayload['rowId'] = rowId;
        }
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Create new Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows.
     * @param {object[]} params.rows - Array of rows data as JSON objects.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    createRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rows: object[];
        transactionId?: string;
    }): Promise<Models.RowList<Row>>;
    /**
     * Create new Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows.
     * @param {object[]} rows - Array of rows data as JSON objects.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRows<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        rows: object[],
        transactionId?: string,
    ): Promise<Models.RowList<Row>>;
    createRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  rows: object[];
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, object[]?, string?]
    ): Promise<Models.RowList<Row>> {
        let params: {
            databaseId: string;
            tableId: string;
            rows: object[];
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                rows: object[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rows: rest[1] as object[],
                transactionId: rest[2] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rows = params.rows;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof rows === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rows"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof rows !== 'undefined') {
            apiPayload['rows'] = rows;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Create or update Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {object[]} params.rows - Array of row data as JSON objects. May contain partial rows.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    upsertRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rows: object[];
        transactionId?: string;
    }): Promise<Models.RowList<Row>>;
    /**
     * Create or update Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {object[]} rows - Array of row data as JSON objects. May contain partial rows.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertRows<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        rows: object[],
        transactionId?: string,
    ): Promise<Models.RowList<Row>>;
    upsertRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  rows: object[];
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, object[]?, string?]
    ): Promise<Models.RowList<Row>> {
        let params: {
            databaseId: string;
            tableId: string;
            rows: object[];
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                rows: object[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rows: rest[1] as object[],
                transactionId: rest[2] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rows = params.rows;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof rows === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rows"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof rows !== 'undefined') {
            apiPayload['rows'] = rows;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('put', uri, apiHeaders, apiPayload);
    }

    /**
     * Update all rows that match your queries, if no queries are submitted then all rows are updated. You can pass only specific fields to be updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {object} params.data - Row data as JSON object. Include only column and value pairs to be updated.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    updateRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        data?: object;
        queries?: string[];
        transactionId?: string;
    }): Promise<Models.RowList<Row>>;
    /**
     * Update all rows that match your queries, if no queries are submitted then all rows are updated. You can pass only specific fields to be updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {object} data - Row data as JSON object. Include only column and value pairs to be updated.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRows<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        data?: object,
        queries?: string[],
        transactionId?: string,
    ): Promise<Models.RowList<Row>>;
    updateRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  data?: object;
                  queries?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, object?, string[]?, string?]
    ): Promise<Models.RowList<Row>> {
        let params: {
            databaseId: string;
            tableId: string;
            data?: object;
            queries?: string[];
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                data?: object;
                queries?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                data: rest[1] as object,
                queries: rest[2] as string[],
                transactionId: rest[3] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const data = params.data;
        const queries = params.queries;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Bulk delete rows using queries, if no queries are passed then all rows are deleted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    deleteRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        queries?: string[];
        transactionId?: string;
    }): Promise<Models.RowList<Row>>;
    /**
     * Bulk delete rows using queries, if no queries are passed then all rows are deleted.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRows<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        queries?: string[],
        transactionId?: string,
    ): Promise<Models.RowList<Row>>;
    deleteRows<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  queries?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string[]?, string?]
    ): Promise<Models.RowList<Row>> {
        let params: {
            databaseId: string;
            tableId: string;
            queries?: string[];
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                queries?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                queries: rest[1] as string[],
                transactionId: rest[2] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const queries = params.queries;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)));
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a row by its unique ID. This endpoint response returns a JSON object with the row data.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.rowId - Row ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    getRow<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        queries?: string[];
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Get a row by its unique ID. This endpoint response returns a JSON object with the row data.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} rowId - Row ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRow<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        rowId: string,
        queries?: string[],
        transactionId?: string,
    ): Promise<Row>;
    getRow<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  rowId: string;
                  queries?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string?, string[]?, string?]
    ): Promise<Row> {
        let params: {
            databaseId: string;
            tableId: string;
            rowId: string;
            queries?: string[];
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                rowId: string;
                queries?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                queries: rest[2] as string[],
                transactionId: rest[3] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const queries = params.queries;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)))
            .replace('{rowId}', encodeURIComponent(String(rowId)));
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create or update a Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} params.data - Row data as JSON object. Include all required columns of the row to be created or updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    upsertRow<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        data?: Row extends Models.DefaultRow
            ? Partial<Models.Row> & Record<string, any>
            : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Create or update a Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} data - Row data as JSON object. Include all required columns of the row to be created or updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertRow<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        rowId: string,
        data?: Row extends Models.DefaultRow
            ? Partial<Models.Row> & Record<string, any>
            : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>,
        permissions?: string[],
        transactionId?: string,
    ): Promise<Row>;
    upsertRow<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  rowId: string;
                  data?: Row extends Models.DefaultRow
                      ? Partial<Models.Row> & Record<string, any>
                      : Partial<Models.Row> &
                            Partial<Omit<Row, keyof Models.Row>>;
                  permissions?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (Row extends Models.DefaultRow
                ? Partial<Models.Row> & Record<string, any>
                : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>)?,
            string[]?,
            string?,
        ]
    ): Promise<Row> {
        let params: {
            databaseId: string;
            tableId: string;
            rowId: string;
            data?: Row extends Models.DefaultRow
                ? Partial<Models.Row> & Record<string, any>
                : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>;
            permissions?: string[];
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                rowId: string;
                data?: Row extends Models.DefaultRow
                    ? Partial<Models.Row> & Record<string, any>
                    : Partial<Models.Row> &
                          Partial<Omit<Row, keyof Models.Row>>;
                permissions?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                data: rest[2] as Row extends Models.DefaultRow
                    ? Partial<Models.Row> & Record<string, any>
                    : Partial<Models.Row> &
                          Partial<Omit<Row, keyof Models.Row>>,
                permissions: rest[3] as string[],
                transactionId: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const data = params.data;
        const permissions = params.permissions;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)))
            .replace('{rowId}', encodeURIComponent(String(rowId)));
        const apiPayload: Payload = {};
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('put', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a row by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} params.data - Row data as JSON object. Include only columns and value pairs to be updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    updateRow<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        data?: Row extends Models.DefaultRow
            ? Partial<Models.Row> & Record<string, any>
            : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Update a row by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} data - Row data as JSON object. Include only columns and value pairs to be updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRow<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        rowId: string,
        data?: Row extends Models.DefaultRow
            ? Partial<Models.Row> & Record<string, any>
            : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>,
        permissions?: string[],
        transactionId?: string,
    ): Promise<Row>;
    updateRow<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  rowId: string;
                  data?: Row extends Models.DefaultRow
                      ? Partial<Models.Row> & Record<string, any>
                      : Partial<Models.Row> &
                            Partial<Omit<Row, keyof Models.Row>>;
                  permissions?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (Row extends Models.DefaultRow
                ? Partial<Models.Row> & Record<string, any>
                : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>)?,
            string[]?,
            string?,
        ]
    ): Promise<Row> {
        let params: {
            databaseId: string;
            tableId: string;
            rowId: string;
            data?: Row extends Models.DefaultRow
                ? Partial<Models.Row> & Record<string, any>
                : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>;
            permissions?: string[];
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                rowId: string;
                data?: Row extends Models.DefaultRow
                    ? Partial<Models.Row> & Record<string, any>
                    : Partial<Models.Row> &
                          Partial<Omit<Row, keyof Models.Row>>;
                permissions?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                data: rest[2] as Row extends Models.DefaultRow
                    ? Partial<Models.Row> & Record<string, any>
                    : Partial<Models.Row> &
                          Partial<Omit<Row, keyof Models.Row>>,
                permissions: rest[3] as string[],
                transactionId: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const data = params.data;
        const permissions = params.permissions;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)))
            .replace('{rowId}', encodeURIComponent(String(rowId)));
        const apiPayload: Payload = {};
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete a row by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.rowId - Row ID.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRow(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        transactionId?: string;
    }): Promise<{}>;
    /**
     * Delete a row by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} rowId - Row ID.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRow(
        databaseId: string,
        tableId: string,
        rowId: string,
        transactionId?: string,
    ): Promise<{}>;
    deleteRow(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  rowId: string;
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string?, string?]
    ): Promise<{}> {
        let params: {
            databaseId: string;
            tableId: string;
            rowId: string;
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                rowId: string;
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                transactionId: rest[2] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{tableId}', encodeURIComponent(String(tableId)))
            .replace('{rowId}', encodeURIComponent(String(rowId)));
        const apiPayload: Payload = {};
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
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
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    decrementRowColumn<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        column: string;
        value?: number;
        min?: number;
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Decrement a specific column of a row by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {string} column - Column key.
     * @param {number} value - Value to increment the column by. The value must be a number.
     * @param {number} min - Minimum value for the column. If the current value is lesser than this value, an exception will be thrown.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    decrementRowColumn<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        rowId: string,
        column: string,
        value?: number,
        min?: number,
        transactionId?: string,
    ): Promise<Row>;
    decrementRowColumn<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  rowId: string;
                  column: string;
                  value?: number;
                  min?: number;
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, number?, string?]
    ): Promise<Row> {
        let params: {
            databaseId: string;
            tableId: string;
            rowId: string;
            column: string;
            value?: number;
            min?: number;
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                rowId: string;
                column: string;
                value?: number;
                min?: number;
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                column: rest[2] as string,
                value: rest[3] as number,
                min: rest[4] as number,
                transactionId: rest[5] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const column = params.column;
        const value = params.value;
        const min = params.min;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        if (typeof column === 'undefined') {
            throw new AppwriteException('Missing required parameter: "column"');
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/decrement'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{rowId}', encodeURIComponent(String(rowId)))
                .replace('{column}', encodeURIComponent(String(column)));
        const apiPayload: Payload = {};
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof min !== 'undefined') {
            apiPayload['min'] = min;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
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
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    incrementRowColumn<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        column: string;
        value?: number;
        max?: number;
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Increment a specific column of a row by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {string} column - Column key.
     * @param {number} value - Value to increment the column by. The value must be a number.
     * @param {number} max - Maximum value for the column. If the current value is greater than this value, an error will be thrown.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    incrementRowColumn<Row extends Models.Row = Models.DefaultRow>(
        databaseId: string,
        tableId: string,
        rowId: string,
        column: string,
        value?: number,
        max?: number,
        transactionId?: string,
    ): Promise<Row>;
    incrementRowColumn<Row extends Models.Row = Models.DefaultRow>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  tableId: string;
                  rowId: string;
                  column: string;
                  value?: number;
                  max?: number;
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, number?, string?]
    ): Promise<Row> {
        let params: {
            databaseId: string;
            tableId: string;
            rowId: string;
            column: string;
            value?: number;
            max?: number;
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                tableId: string;
                rowId: string;
                column: string;
                value?: number;
                max?: number;
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                rowId: rest[1] as string,
                column: rest[2] as string,
                value: rest[3] as number,
                max: rest[4] as number,
                transactionId: rest[5] as string,
            };
        }

        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const rowId = params.rowId;
        const column = params.column;
        const value = params.value;
        const max = params.max;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "tableId"',
            );
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        if (typeof column === 'undefined') {
            throw new AppwriteException('Missing required parameter: "column"');
        }
        const apiPath =
            '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/increment'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace('{tableId}', encodeURIComponent(String(tableId)))
                .replace('{rowId}', encodeURIComponent(String(rowId)))
                .replace('{column}', encodeURIComponent(String(column)));
        const apiPayload: Payload = {};
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof max !== 'undefined') {
            apiPayload['max'] = max;
        }
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }
}
