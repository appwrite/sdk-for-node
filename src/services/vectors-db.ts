import { AppwriteException, Client, type Payload } from '../client';
import type { Models } from '../models';

import { VectorsDBIndexType } from '../enums/vectors-db-index-type';
import { OrderBy } from '../enums/order-by';
export class VectorsDB {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     */
    list(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.DatabaseList>;
    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], total?: boolean): Promise<Models.DatabaseList>;
    list(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.DatabaseList> {
        let params: { queries?: string[]; total?: boolean };

        if (
            !paramsOrFirst ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean,
            };
        }

        const queries = params.queries;
        const total = params.total;
        const apiPath = '/vectorsdb';
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
        const apiPath = '/vectorsdb';
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
        const apiPath = '/vectorsdb/specifications';
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
        const apiPath = '/vectorsdb/transactions';
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
        const apiPath = '/vectorsdb/transactions';
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
        const apiPath = '/vectorsdb/transactions/{transactionId}'.replace(
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
        const apiPath = '/vectorsdb/transactions/{transactionId}'.replace(
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
        const apiPath = '/vectorsdb/transactions/{transactionId}'.replace(
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
            '/vectorsdb/transactions/{transactionId}/operations'.replace(
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
        const apiPath = '/vectorsdb/{databaseId}'.replace(
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
        name: string;
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
        name: string,
        enabled?: boolean,
        specification?: string,
        replicas?: number,
        syncMode?: string,
    ): Promise<Models.Database>;
    update(
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
        const apiPath = '/vectorsdb/{databaseId}'.replace(
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
        const apiPath = '/vectorsdb/{databaseId}'.replace(
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
     * Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollectionList>}
     */
    listCollections(params: {
        databaseId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.VectorsdbCollectionList>;
    /**
     * Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollectionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listCollections(
        databaseId: string,
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.VectorsdbCollectionList>;
    listCollections(
        paramsOrFirst:
            | {
                  databaseId: string;
                  queries?: string[];
                  search?: string;
                  total?: boolean;
              }
            | string,
        ...rest: [string[]?, string?, boolean?]
    ): Promise<Models.VectorsdbCollectionList> {
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
        const apiPath = '/vectorsdb/{databaseId}/collections'.replace(
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
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
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
    createCollection(params: {
        databaseId: string;
        collectionId: string;
        name: string;
        dimension: number;
        permissions?: string[];
        documentSecurity?: boolean;
        enabled?: boolean;
    }): Promise<Models.VectorsdbCollection>;
    /**
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
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
    createCollection(
        databaseId: string,
        collectionId: string,
        name: string,
        dimension: number,
        permissions?: string[],
        documentSecurity?: boolean,
        enabled?: boolean,
    ): Promise<Models.VectorsdbCollection>;
    createCollection(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  name: string;
                  dimension: number;
                  permissions?: string[];
                  documentSecurity?: boolean;
                  enabled?: boolean;
              }
            | string,
        ...rest: [string?, string?, number?, string[]?, boolean?, boolean?]
    ): Promise<Models.VectorsdbCollection> {
        let params: {
            databaseId: string;
            collectionId: string;
            name: string;
            dimension: number;
            permissions?: string[];
            documentSecurity?: boolean;
            enabled?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                name: string;
                dimension: number;
                permissions?: string[];
                documentSecurity?: boolean;
                enabled?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                name: rest[1] as string,
                dimension: rest[2] as number,
                permissions: rest[3] as string[],
                documentSecurity: rest[4] as boolean,
                enabled: rest[5] as boolean,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof dimension === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "dimension"',
            );
        }
        const apiPath = '/vectorsdb/{databaseId}/collections'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof collectionId !== 'undefined') {
            apiPayload['collectionId'] = collectionId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof dimension !== 'undefined') {
            apiPayload['dimension'] = dimension;
        }
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
        }
        if (typeof documentSecurity !== 'undefined') {
            apiPayload['documentSecurity'] = documentSecurity;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
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
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollection>}
     */
    getCollection(params: {
        databaseId: string;
        collectionId: string;
    }): Promise<Models.VectorsdbCollection>;
    /**
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VectorsdbCollection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCollection(
        databaseId: string,
        collectionId: string,
    ): Promise<Models.VectorsdbCollection>;
    getCollection(
        paramsOrFirst: { databaseId: string; collectionId: string } | string,
        ...rest: [string?]
    ): Promise<Models.VectorsdbCollection> {
        let params: { databaseId: string; collectionId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace(
                '{collectionId}',
                encodeURIComponent(String(collectionId)),
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
     * Update a collection by its unique ID.
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
    updateCollection(params: {
        databaseId: string;
        collectionId: string;
        name: string;
        dimension?: number;
        permissions?: string[];
        documentSecurity?: boolean;
        enabled?: boolean;
    }): Promise<Models.VectorsdbCollection>;
    /**
     * Update a collection by its unique ID.
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
    updateCollection(
        databaseId: string,
        collectionId: string,
        name: string,
        dimension?: number,
        permissions?: string[],
        documentSecurity?: boolean,
        enabled?: boolean,
    ): Promise<Models.VectorsdbCollection>;
    updateCollection(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  name: string;
                  dimension?: number;
                  permissions?: string[];
                  documentSecurity?: boolean;
                  enabled?: boolean;
              }
            | string,
        ...rest: [string?, string?, number?, string[]?, boolean?, boolean?]
    ): Promise<Models.VectorsdbCollection> {
        let params: {
            databaseId: string;
            collectionId: string;
            name: string;
            dimension?: number;
            permissions?: string[];
            documentSecurity?: boolean;
            enabled?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                name: string;
                dimension?: number;
                permissions?: string[];
                documentSecurity?: boolean;
                enabled?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                name: rest[1] as string,
                dimension: rest[2] as number,
                permissions: rest[3] as string[],
                documentSecurity: rest[4] as boolean,
                enabled: rest[5] as boolean,
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace(
                '{collectionId}',
                encodeURIComponent(String(collectionId)),
            );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof dimension !== 'undefined') {
            apiPayload['dimension'] = dimension;
        }
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
        }
        if (typeof documentSecurity !== 'undefined') {
            apiPayload['documentSecurity'] = documentSecurity;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
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
     * Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteCollection(params: {
        databaseId: string;
        collectionId: string;
    }): Promise<{}>;
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
        paramsOrFirst: { databaseId: string; collectionId: string } | string,
        ...rest: [string?]
    ): Promise<{}> {
        let params: { databaseId: string; collectionId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath = '/vectorsdb/{databaseId}/collections/{collectionId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace(
                '{collectionId}',
                encodeURIComponent(String(collectionId)),
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
     * Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 524288 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} params.ttl - TTL (seconds) for cached responses when caching is enabled for select queries. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    listDocuments<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        transactionId?: string;
        total?: boolean;
        ttl?: number;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 524288 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} ttl - TTL (seconds) for cached responses when caching is enabled for select queries. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        queries?: string[],
        transactionId?: string,
        total?: boolean,
        ttl?: number,
    ): Promise<Models.DocumentList<Document>>;
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  queries?: string[];
                  transactionId?: string;
                  total?: boolean;
                  ttl?: number;
              }
            | string,
        ...rest: [string?, string[]?, string?, boolean?, number?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
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
                collectionId: string;
                queries?: string[];
                transactionId?: string;
                total?: boolean;
                ttl?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                transactionId: rest[2] as string,
                total: rest[3] as boolean,
                ttl: rest[4] as number,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;
        const transactionId = params.transactionId;
        const total = params.total;
        const ttl = params.ttl;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} params.documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} params.data - Document data as JSON object.
     * @param {string[]} params.permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    createDocument<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        data: Document extends Models.DefaultDocument
            ? Partial<Models.Document> & Record<string, any>
            : Partial<Models.Document> & Omit<Document, keyof Models.Document>;
        permissions?: string[];
    }): Promise<Document>;
    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
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
    createDocument<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documentId: string,
        data: Document extends Models.DefaultDocument
            ? Partial<Models.Document> & Record<string, any>
            : Partial<Models.Document> & Omit<Document, keyof Models.Document>,
        permissions?: string[],
    ): Promise<Document>;
    createDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documentId: string;
                  data: Document extends Models.DefaultDocument
                      ? Partial<Models.Document> & Record<string, any>
                      : Partial<Models.Document> &
                            Omit<Document, keyof Models.Document>;
                  permissions?: string[];
              }
            | string,
        ...rest: [
            string?,
            string?,
            (Document extends Models.DefaultDocument
                ? Partial<Models.Document> & Record<string, any>
                : Partial<Models.Document> &
                      Omit<Document, keyof Models.Document>)?,
            string[]?,
        ]
    ): Promise<Document> {
        let params: {
            databaseId: string;
            collectionId: string;
            documentId: string;
            data: Document extends Models.DefaultDocument
                ? Partial<Models.Document> & Record<string, any>
                : Partial<Models.Document> &
                      Omit<Document, keyof Models.Document>;
            permissions?: string[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                documentId: string;
                data: Document extends Models.DefaultDocument
                    ? Partial<Models.Document> & Record<string, any>
                    : Partial<Models.Document> &
                          Omit<Document, keyof Models.Document>;
                permissions?: string[];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                data: rest[2] as Document extends Models.DefaultDocument
                    ? Partial<Models.Document> & Record<string, any>
                    : Partial<Models.Document> &
                          Omit<Document, keyof Models.Document>,
                permissions: rest[3] as string[],
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const data = params.data;
        const permissions = params.permissions;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
        const apiPayload: Payload = {};
        if (typeof documentId !== 'undefined') {
            apiPayload['documentId'] = documentId;
        }
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
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
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} params.documents - Array of documents data as JSON objects.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    createDocuments<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documents: object[];
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} documents - Array of documents data as JSON objects.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documents: object[],
    ): Promise<Models.DocumentList<Document>>;
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | { databaseId: string; collectionId: string; documents: object[] }
            | string,
        ...rest: [string?, object[]?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
            documents: object[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                documents: object[];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documents: rest[1] as object[],
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documents = params.documents;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documents === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "documents"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
        const apiPayload: Payload = {};
        if (typeof documents !== 'undefined') {
            apiPayload['documents'] = documents;
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
     * Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {object[]} params.documents - Array of document data as JSON objects. May contain partial documents.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    upsertDocuments<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documents: object[];
        transactionId?: string;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
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
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documents: object[],
        transactionId?: string,
    ): Promise<Models.DocumentList<Document>>;
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documents: object[];
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, object[]?, string?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
            documents: object[];
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                documents: object[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documents: rest[1] as object[],
                transactionId: rest[2] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documents = params.documents;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documents === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "documents"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
        const apiPayload: Payload = {};
        if (typeof documents !== 'undefined') {
            apiPayload['documents'] = documents;
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
     * Update all documents that match your queries, if no queries are submitted then all documents are updated. You can pass only specific fields to be updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {object} params.data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    updateDocuments<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        data?: object;
        queries?: string[];
        transactionId?: string;
    }): Promise<Models.DocumentList<Document>>;
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
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        data?: object,
        queries?: string[],
        transactionId?: string,
    ): Promise<Models.DocumentList<Document>>;
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  data?: object;
                  queries?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, object?, string[]?, string?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
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
                collectionId: string;
                data?: object;
                queries?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                data: rest[1] as object,
                queries: rest[2] as string[],
                transactionId: rest[3] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const data = params.data;
        const queries = params.queries;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
     * Bulk delete documents using queries, if no queries are passed then all documents are deleted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    deleteDocuments<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        transactionId?: string;
    }): Promise<Models.DocumentList<Document>>;
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
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        queries?: string[],
        transactionId?: string,
    ): Promise<Models.DocumentList<Document>>;
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  queries?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string[]?, string?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
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
                collectionId: string;
                queries?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                transactionId: rest[2] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
     * Get a list of all the user's documents in a given collection using a POST request. This behaves identically to the list documents endpoint but accepts the queries in the request body, allowing much larger `queries` arrays than can fit in a URL query string.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 524288 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} params.ttl - TTL (seconds) for cached responses when caching is enabled for select queries. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    createQuery<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        transactionId?: string;
        total?: boolean;
        ttl?: number;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Get a list of all the user's documents in a given collection using a POST request. This behaves identically to the list documents endpoint but accepts the queries in the request body, allowing much larger `queries` arrays than can fit in a URL query string.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 524288 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} ttl - TTL (seconds) for cached responses when caching is enabled for select queries. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createQuery<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        queries?: string[],
        transactionId?: string,
        total?: boolean,
        ttl?: number,
    ): Promise<Models.DocumentList<Document>>;
    createQuery<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  queries?: string[];
                  transactionId?: string;
                  total?: boolean;
                  ttl?: number;
              }
            | string,
        ...rest: [string?, string[]?, string?, boolean?, number?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
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
                collectionId: string;
                queries?: string[];
                transactionId?: string;
                total?: boolean;
                ttl?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                transactionId: rest[2] as string,
                total: rest[3] as boolean,
                ttl: rest[4] as number,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;
        const transactionId = params.transactionId;
        const total = params.total;
        const ttl = params.ttl;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents/query'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
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
     */
    getDocument<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        queries?: string[];
        transactionId?: string;
    }): Promise<Document>;
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
    getDocument<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documentId: string,
        queries?: string[],
        transactionId?: string,
    ): Promise<Document>;
    getDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documentId: string;
                  queries?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string?, string[]?, string?]
    ): Promise<Document> {
        let params: {
            databaseId: string;
            collectionId: string;
            documentId: string;
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
                collectionId: string;
                documentId: string;
                queries?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                queries: rest[2] as string[],
                transactionId: rest[3] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const queries = params.queries;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
                .replace(
                    '{documentId}',
                    encodeURIComponent(String(documentId)),
                );
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
     * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
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
    upsertDocument<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        data?: Document extends Models.DefaultDocument
            ? Partial<Models.Document> & Record<string, any>
            : Partial<Models.Document> &
                  Partial<Omit<Document, keyof Models.Document>>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
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
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documentId: string,
        data?: Document extends Models.DefaultDocument
            ? Partial<Models.Document> & Record<string, any>
            : Partial<Models.Document> &
                  Partial<Omit<Document, keyof Models.Document>>,
        permissions?: string[],
        transactionId?: string,
    ): Promise<Document>;
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documentId: string;
                  data?: Document extends Models.DefaultDocument
                      ? Partial<Models.Document> & Record<string, any>
                      : Partial<Models.Document> &
                            Partial<Omit<Document, keyof Models.Document>>;
                  permissions?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (Document extends Models.DefaultDocument
                ? Partial<Models.Document> & Record<string, any>
                : Partial<Models.Document> &
                      Partial<Omit<Document, keyof Models.Document>>)?,
            string[]?,
            string?,
        ]
    ): Promise<Document> {
        let params: {
            databaseId: string;
            collectionId: string;
            documentId: string;
            data?: Document extends Models.DefaultDocument
                ? Partial<Models.Document> & Record<string, any>
                : Partial<Models.Document> &
                      Partial<Omit<Document, keyof Models.Document>>;
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
                collectionId: string;
                documentId: string;
                data?: Document extends Models.DefaultDocument
                    ? Partial<Models.Document> & Record<string, any>
                    : Partial<Models.Document> &
                          Partial<Omit<Document, keyof Models.Document>>;
                permissions?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                data: rest[2] as Document extends Models.DefaultDocument
                    ? Partial<Models.Document> & Record<string, any>
                    : Partial<Models.Document> &
                          Partial<Omit<Document, keyof Models.Document>>,
                permissions: rest[3] as string[],
                transactionId: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const data = params.data;
        const permissions = params.permissions;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
                .replace(
                    '{documentId}',
                    encodeURIComponent(String(documentId)),
                );
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
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
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
    updateDocument<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        data?: Document extends Models.DefaultDocument
            ? Partial<Models.Document> & Record<string, any>
            : Partial<Models.Document> &
                  Partial<Omit<Document, keyof Models.Document>>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
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
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documentId: string,
        data?: Document extends Models.DefaultDocument
            ? Partial<Models.Document> & Record<string, any>
            : Partial<Models.Document> &
                  Partial<Omit<Document, keyof Models.Document>>,
        permissions?: string[],
        transactionId?: string,
    ): Promise<Document>;
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documentId: string;
                  data?: Document extends Models.DefaultDocument
                      ? Partial<Models.Document> & Record<string, any>
                      : Partial<Models.Document> &
                            Partial<Omit<Document, keyof Models.Document>>;
                  permissions?: string[];
                  transactionId?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (Document extends Models.DefaultDocument
                ? Partial<Models.Document> & Record<string, any>
                : Partial<Models.Document> &
                      Partial<Omit<Document, keyof Models.Document>>)?,
            string[]?,
            string?,
        ]
    ): Promise<Document> {
        let params: {
            databaseId: string;
            collectionId: string;
            documentId: string;
            data?: Document extends Models.DefaultDocument
                ? Partial<Models.Document> & Record<string, any>
                : Partial<Models.Document> &
                      Partial<Omit<Document, keyof Models.Document>>;
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
                collectionId: string;
                documentId: string;
                data?: Document extends Models.DefaultDocument
                    ? Partial<Models.Document> & Record<string, any>
                    : Partial<Models.Document> &
                          Partial<Omit<Document, keyof Models.Document>>;
                permissions?: string[];
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                data: rest[2] as Document extends Models.DefaultDocument
                    ? Partial<Models.Document> & Record<string, any>
                    : Partial<Models.Document> &
                          Partial<Omit<Document, keyof Models.Document>>,
                permissions: rest[3] as string[],
                transactionId: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const data = params.data;
        const permissions = params.permissions;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
                .replace(
                    '{documentId}',
                    encodeURIComponent(String(documentId)),
                );
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
     * Delete a document by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.documentId - Document ID.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDocument(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        transactionId?: string;
    }): Promise<{}>;
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
    deleteDocument(
        databaseId: string,
        collectionId: string,
        documentId: string,
        transactionId?: string,
    ): Promise<{}>;
    deleteDocument(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documentId: string;
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string?, string?]
    ): Promise<{}> {
        let params: {
            databaseId: string;
            collectionId: string;
            documentId: string;
            transactionId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                documentId: string;
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                transactionId: rest[2] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
                .replace(
                    '{documentId}',
                    encodeURIComponent(String(documentId)),
                );
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
     * List indexes in the collection.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IndexList>}
     */
    listIndexes(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.IndexList>;
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
    listIndexes(
        databaseId: string,
        collectionId: string,
        queries?: string[],
        total?: boolean,
    ): Promise<Models.IndexList>;
    listIndexes(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  queries?: string[];
                  total?: boolean;
              }
            | string,
        ...rest: [string?, string[]?, boolean?]
    ): Promise<Models.IndexList> {
        let params: {
            databaseId: string;
            collectionId: string;
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
                collectionId: string;
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                total: rest[2] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;
        const total = params.total;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/indexes'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
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
    createIndex(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        type: VectorsDBIndexType;
        attributes: string[];
        orders?: OrderBy[];
        lengths?: number[];
    }): Promise<Models.Index>;
    /**
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
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
    createIndex(
        databaseId: string,
        collectionId: string,
        key: string,
        type: VectorsDBIndexType,
        attributes: string[],
        orders?: OrderBy[],
        lengths?: number[],
    ): Promise<Models.Index>;
    createIndex(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  type: VectorsDBIndexType;
                  attributes: string[];
                  orders?: OrderBy[];
                  lengths?: number[];
              }
            | string,
        ...rest: [
            string?,
            string?,
            VectorsDBIndexType?,
            string[]?,
            OrderBy[]?,
            number[]?,
        ]
    ): Promise<Models.Index> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            type: VectorsDBIndexType;
            attributes: string[];
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
                collectionId: string;
                key: string;
                type: VectorsDBIndexType;
                attributes: string[];
                orders?: OrderBy[];
                lengths?: number[];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                type: rest[2] as VectorsDBIndexType,
                attributes: rest[3] as string[],
                orders: rest[4] as OrderBy[],
                lengths: rest[5] as number[],
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
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof attributes === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "attributes"',
            );
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/indexes'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof attributes !== 'undefined') {
            apiPayload['attributes'] = attributes;
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
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     */
    getIndex(params: {
        databaseId: string;
        collectionId: string;
        key: string;
    }): Promise<Models.Index>;
    /**
     * Get index by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getIndex(
        databaseId: string,
        collectionId: string,
        key: string,
    ): Promise<Models.Index>;
    getIndex(
        paramsOrFirst:
            { databaseId: string; collectionId: string; key: string } | string,
        ...rest: [string?, string?]
    ): Promise<Models.Index> {
        let params: { databaseId: string; collectionId: string; key: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                key: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/indexes/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIndex(params: {
        databaseId: string;
        collectionId: string;
        key: string;
    }): Promise<{}>;
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
    deleteIndex(
        databaseId: string,
        collectionId: string,
        key: string,
    ): Promise<{}>;
    deleteIndex(
        paramsOrFirst:
            { databaseId: string; collectionId: string; key: string } | string,
        ...rest: [string?, string?]
    ): Promise<{}> {
        let params: { databaseId: string; collectionId: string; key: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                key: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath =
            '/vectorsdb/{databaseId}/collections/{collectionId}/indexes/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        const apiPath = '/vectorsdb/{databaseId}/failovers'.replace(
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
        const apiPath = '/vectorsdb/{databaseId}/operations'.replace(
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
        const apiPath = '/vectorsdb/{databaseId}/replicas'.replace(
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
        const apiPath = '/vectorsdb/{databaseId}/status'.replace(
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
}
