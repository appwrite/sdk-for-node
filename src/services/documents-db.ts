import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
} from '../client';
import type { Models } from '../models';

import { DocumentsDBIndexType } from '../enums/documents-db-index-type';
import { OrderBy } from '../enums/order-by';
export class DocumentsDB {
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
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
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
        const apiPath = '/documentsdb';
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'databaseList',
            models: {
                databaseList: {
                    defaults: {
                        total: 0,
                        databases: [],
                    },
                    properties: {
                        databases: {
                            items: 'database',
                        },
                    },
                },
                database: {
                    defaults: {
                        $id: '',
                        name: '',
                        description: '',
                        $createdAt: '',
                        $updatedAt: '',
                        enabled: true,
                        type: 'legacy',
                    },
                    properties: {
                        policies: {
                            items: 'backupPolicy',
                        },
                        archives: {
                            items: 'backupArchive',
                        },
                    },
                },
                backupPolicy: {
                    defaults: {
                        $id: '',
                        name: '',
                        $createdAt: '',
                        $updatedAt: '',
                        services: [],
                        resources: [],
                        retention: 1,
                        schedule: '0 * * * *',
                        type: 'full',
                        enabled: false,
                    },
                },
                backupArchive: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        policyId: '',
                        status: '',
                        migrationId: '',
                        services: [],
                        resources: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a new Database.
     *
     *
     * @param {string} params.databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string} params.description - Optional description for the database.
     * @param {string} params.specification - Database specification. Defaults to `serverless`, which creates the database on the shared pool. Any other value provisions a dedicated database on that specification.
     * @param {number} params.replicas - Number of high availability replicas (0-5) for the dedicated database backing this database. Requires a dedicated `specification`; must be 0 for a serverless database. High availability is enabled when greater than 0.
     * @param {string | null} params.syncMode - Replication sync mode for the dedicated database backing this database. Requires a dedicated `specification`; the mode is only in force once there is at least one replica. Allowed values: async, sync, quorum.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    create(params: {
        databaseId: string;
        name: string;
        enabled?: boolean;
        description?: string;
        specification?: string;
        replicas?: number;
        syncMode?: string | null;
    }): Promise<Models.Database>;
    /**
     * Create a new Database.
     *
     *
     * @param {string} databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string} description - Optional description for the database.
     * @param {string} specification - Database specification. Defaults to `serverless`, which creates the database on the shared pool. Any other value provisions a dedicated database on that specification.
     * @param {number} replicas - Number of high availability replicas (0-5) for the dedicated database backing this database. Requires a dedicated `specification`; must be 0 for a serverless database. High availability is enabled when greater than 0.
     * @param {string | null} syncMode - Replication sync mode for the dedicated database backing this database. Requires a dedicated `specification`; the mode is only in force once there is at least one replica. Allowed values: async, sync, quorum.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(
        databaseId: string,
        name: string,
        enabled?: boolean,
        description?: string,
        specification?: string,
        replicas?: number,
        syncMode?: string | null,
    ): Promise<Models.Database>;
    create(
        paramsOrFirst:
            | {
                  databaseId: string;
                  name: string;
                  enabled?: boolean;
                  description?: string;
                  specification?: string;
                  replicas?: number;
                  syncMode?: string | null;
              }
            | string,
        ...rest: [
            string?,
            boolean?,
            string?,
            string?,
            number?,
            (string | null)?,
        ]
    ): Promise<Models.Database> {
        let params: {
            databaseId: string;
            name: string;
            enabled?: boolean;
            description?: string;
            specification?: string;
            replicas?: number;
            syncMode?: string | null;
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
                description?: string;
                specification?: string;
                replicas?: number;
                syncMode?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                description: rest[2] as string,
                specification: rest[3] as string,
                replicas: rest[4] as number,
                syncMode: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const name = params.name;
        const enabled = params.enabled;
        const description = params.description;
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
        const apiPath = '/documentsdb';
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
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

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'database',
            models: {
                database: {
                    defaults: {
                        $id: '',
                        name: '',
                        description: '',
                        $createdAt: '',
                        $updatedAt: '',
                        enabled: true,
                        type: 'legacy',
                    },
                    properties: {
                        policies: {
                            items: 'backupPolicy',
                        },
                        archives: {
                            items: 'backupArchive',
                        },
                    },
                },
                backupPolicy: {
                    defaults: {
                        $id: '',
                        name: '',
                        $createdAt: '',
                        $updatedAt: '',
                        services: [],
                        resources: [],
                        retention: 1,
                        schedule: '0 * * * *',
                        type: 'full',
                        enabled: false,
                    },
                },
                backupArchive: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        policyId: '',
                        status: '',
                        migrationId: '',
                        services: [],
                        resources: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List the dedicated database specifications available on the current plan. Each specification reports its resource limits, its own prices and overage rates, and whether it is enabled for the organization.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSpecificationList>}
     */
    listSpecifications(): Promise<Models.DedicatedDatabaseSpecificationList> {
        const apiPath = '/documentsdb/specifications';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'dedicatedDatabaseSpecificationList',
            models: {
                dedicatedDatabaseSpecificationList: {
                    defaults: {
                        specifications: [],
                        total: 0,
                    },
                    properties: {
                        specifications: {
                            items: 'dedicatedDatabaseSpecification',
                        },
                    },
                },
                dedicatedDatabaseSpecification: {
                    defaults: {
                        slug: '',
                        name: '',
                        price: 0,
                        storageOverageRate: 0,
                        bandwidthOverageRate: 0,
                        replicaRate: 0,
                        pitrRate: 0,
                        cpu: 0,
                        memory: 0,
                        maxConnections: 0,
                        includedStorage: 0,
                        includedBandwidth: 0,
                        enabled: false,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List transactions across all databases.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries).
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TransactionList>}
     */
    listTransactions(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.TransactionList>;
    /**
     * List transactions across all databases.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries).
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TransactionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTransactions(
        queries?: string[],
        total?: boolean,
    ): Promise<Models.TransactionList>;
    listTransactions(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.TransactionList> {
        let params: { queries?: string[]; total?: boolean };

        if (
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
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
        const apiPath = '/documentsdb/transactions';
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'transactionList',
            models: {
                transactionList: {
                    defaults: {
                        total: 0,
                        transactions: [],
                    },
                    properties: {
                        transactions: {
                            items: 'transaction',
                        },
                    },
                },
                transaction: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: 'pending',
                        operations: 0,
                        expiresAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
            typeof paramsOrFirst === 'undefined' ||
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
        const apiPath = '/documentsdb/transactions';
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

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'transaction',
            models: {
                transaction: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: 'pending',
                        operations: 0,
                        expiresAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof transactionId === 'undefined' || transactionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "transactionId"',
            );
        }
        const apiPath = '/documentsdb/transactions/{transactionId}'.replace(
            '{transactionId}',
            encodeURIComponent(String(transactionId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'transaction',
            models: {
                transaction: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: 'pending',
                        operations: 0,
                        expiresAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof transactionId === 'undefined' || transactionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "transactionId"',
            );
        }
        const apiPath = '/documentsdb/transactions/{transactionId}'.replace(
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

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'transaction',
            models: {
                transaction: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: 'pending',
                        operations: 0,
                        expiresAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof transactionId === 'undefined' || transactionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "transactionId"',
            );
        }
        const apiPath = '/documentsdb/transactions/{transactionId}'.replace(
            '{transactionId}',
            encodeURIComponent(String(transactionId)),
        );
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
        if (typeof transactionId === 'undefined' || transactionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "transactionId"',
            );
        }
        const apiPath =
            '/documentsdb/transactions/{transactionId}/operations'.replace(
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

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'transaction',
            models: {
                transaction: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: 'pending',
                        operations: 0,
                        expiresAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/documentsdb/{databaseId}'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'database',
            models: {
                database: {
                    defaults: {
                        $id: '',
                        name: '',
                        description: '',
                        $createdAt: '',
                        $updatedAt: '',
                        enabled: true,
                        type: 'legacy',
                    },
                    properties: {
                        policies: {
                            items: 'backupPolicy',
                        },
                        archives: {
                            items: 'backupArchive',
                        },
                    },
                },
                backupPolicy: {
                    defaults: {
                        $id: '',
                        name: '',
                        $createdAt: '',
                        $updatedAt: '',
                        services: [],
                        resources: [],
                        retention: 1,
                        schedule: '0 * * * *',
                        type: 'full',
                        enabled: false,
                    },
                },
                backupArchive: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        policyId: '',
                        status: '',
                        migrationId: '',
                        services: [],
                        resources: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a database by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string | null} params.description - Optional description for the database.
     * @param {string | null} params.specification - Database specification. Resizing between dedicated specifications changes cpu, memory, storage and the connection ceiling via a rolling cutover with zero downtime. Moving a `serverless` database onto a dedicated specification is a data migration, not a resize.
     * @param {number | null} params.replicas - Number of high availability replicas (0-5) for the dedicated database backing this database. Only valid when the database is backed by a dedicated specification. High availability is enabled when greater than 0.
     * @param {string | null} params.syncMode - Replication sync mode for the dedicated database backing this database. Only valid when the database is backed by a dedicated specification; the mode is only in force once there is at least one replica. Allowed values: async, sync, quorum.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    update(params: {
        databaseId: string;
        name: string;
        enabled?: boolean;
        description?: string | null;
        specification?: string | null;
        replicas?: number | null;
        syncMode?: string | null;
    }): Promise<Models.Database>;
    /**
     * Update a database by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string | null} description - Optional description for the database.
     * @param {string | null} specification - Database specification. Resizing between dedicated specifications changes cpu, memory, storage and the connection ceiling via a rolling cutover with zero downtime. Moving a `serverless` database onto a dedicated specification is a data migration, not a resize.
     * @param {number | null} replicas - Number of high availability replicas (0-5) for the dedicated database backing this database. Only valid when the database is backed by a dedicated specification. High availability is enabled when greater than 0.
     * @param {string | null} syncMode - Replication sync mode for the dedicated database backing this database. Only valid when the database is backed by a dedicated specification; the mode is only in force once there is at least one replica. Allowed values: async, sync, quorum.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(
        databaseId: string,
        name: string,
        enabled?: boolean,
        description?: string | null,
        specification?: string | null,
        replicas?: number | null,
        syncMode?: string | null,
    ): Promise<Models.Database>;
    update(
        paramsOrFirst:
            | {
                  databaseId: string;
                  name: string;
                  enabled?: boolean;
                  description?: string | null;
                  specification?: string | null;
                  replicas?: number | null;
                  syncMode?: string | null;
              }
            | string,
        ...rest: [
            string?,
            boolean?,
            (string | null)?,
            (string | null)?,
            (number | null)?,
            (string | null)?,
        ]
    ): Promise<Models.Database> {
        let params: {
            databaseId: string;
            name: string;
            enabled?: boolean;
            description?: string | null;
            specification?: string | null;
            replicas?: number | null;
            syncMode?: string | null;
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
                description?: string | null;
                specification?: string | null;
                replicas?: number | null;
                syncMode?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                description: rest[2] as string | null,
                specification: rest[3] as string | null,
                replicas: rest[4] as number | null,
                syncMode: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const name = params.name;
        const enabled = params.enabled;
        const description = params.description;
        const specification = params.specification;
        const replicas = params.replicas;
        const syncMode = params.syncMode;
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/documentsdb/{databaseId}'.replace(
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
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

        const request = this.client.call('put', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'database',
            models: {
                database: {
                    defaults: {
                        $id: '',
                        name: '',
                        description: '',
                        $createdAt: '',
                        $updatedAt: '',
                        enabled: true,
                        type: 'legacy',
                    },
                    properties: {
                        policies: {
                            items: 'backupPolicy',
                        },
                        archives: {
                            items: 'backupArchive',
                        },
                    },
                },
                backupPolicy: {
                    defaults: {
                        $id: '',
                        name: '',
                        $createdAt: '',
                        $updatedAt: '',
                        services: [],
                        resources: [],
                        retention: 1,
                        schedule: '0 * * * *',
                        type: 'full',
                        enabled: false,
                    },
                },
                backupArchive: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        policyId: '',
                        status: '',
                        migrationId: '',
                        services: [],
                        resources: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/documentsdb/{databaseId}'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
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
     * Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.CollectionList>}
     */
    listCollections(params: {
        databaseId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.CollectionList>;
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
    listCollections(
        databaseId: string,
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.CollectionList>;
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
    ): Promise<Models.CollectionList> {
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/documentsdb/{databaseId}/collections'.replace(
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'collectionList',
            models: {
                collectionList: {
                    defaults: {
                        total: 0,
                        collections: [],
                    },
                    properties: {
                        collections: {
                            items: 'collection',
                        },
                    },
                },
                collection: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        databaseId: '',
                        name: '',
                        description: '',
                        enabled: true,
                        documentSecurity: false,
                        attributes: [],
                        indexes: [],
                        bytesMax: 0,
                        bytesUsed: 0,
                    },
                    properties: {
                        indexes: {
                            items: 'index',
                        },
                    },
                },
                index: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        attributes: [],
                        lengths: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Collection name. Max length: 128 chars.
     * @param {string[] | null} params.permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @param {object[]} params.attributes - Array of attribute definitions to create. Each attribute should contain: key (string), type (string: string, varchar, text, mediumtext, longtext, integer, bigint, double, boolean, datetime, point, linestring, polygon, email, url, ip, enum), size (integer, required for string and varchar types), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} params.indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial), attributes (array of attribute keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
     * @param {string} params.description - Optional description for the collection.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     */
    createCollection(params: {
        databaseId: string;
        collectionId: string;
        name: string;
        permissions?: string[] | null;
        documentSecurity?: boolean;
        enabled?: boolean;
        attributes?: object[];
        indexes?: object[];
        description?: string;
    }): Promise<Models.Collection>;
    /**
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {string[] | null} permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @param {object[]} attributes - Array of attribute definitions to create. Each attribute should contain: key (string), type (string: string, varchar, text, mediumtext, longtext, integer, bigint, double, boolean, datetime, point, linestring, polygon, email, url, ip, enum), size (integer, required for string and varchar types), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial), attributes (array of attribute keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
     * @param {string} description - Optional description for the collection.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCollection(
        databaseId: string,
        collectionId: string,
        name: string,
        permissions?: string[] | null,
        documentSecurity?: boolean,
        enabled?: boolean,
        attributes?: object[],
        indexes?: object[],
        description?: string,
    ): Promise<Models.Collection>;
    createCollection(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  name: string;
                  permissions?: string[] | null;
                  documentSecurity?: boolean;
                  enabled?: boolean;
                  attributes?: object[];
                  indexes?: object[];
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (string[] | null)?,
            boolean?,
            boolean?,
            object[]?,
            object[]?,
            string?,
        ]
    ): Promise<Models.Collection> {
        let params: {
            databaseId: string;
            collectionId: string;
            name: string;
            permissions?: string[] | null;
            documentSecurity?: boolean;
            enabled?: boolean;
            attributes?: object[];
            indexes?: object[];
            description?: string;
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
                permissions?: string[] | null;
                documentSecurity?: boolean;
                enabled?: boolean;
                attributes?: object[];
                indexes?: object[];
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                name: rest[1] as string,
                permissions: rest[2] as string[] | null,
                documentSecurity: rest[3] as boolean,
                enabled: rest[4] as boolean,
                attributes: rest[5] as object[],
                indexes: rest[6] as object[],
                description: rest[7] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const name = params.name;
        const permissions = params.permissions;
        const documentSecurity = params.documentSecurity;
        const enabled = params.enabled;
        const attributes = params.attributes;
        const indexes = params.indexes;
        const description = params.description;
        if (typeof databaseId === 'undefined' || databaseId === '') {
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
        const apiPath = '/documentsdb/{databaseId}/collections'.replace(
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
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
        }
        if (typeof documentSecurity !== 'undefined') {
            apiPayload['documentSecurity'] = documentSecurity;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof attributes !== 'undefined') {
            apiPayload['attributes'] = attributes;
        }
        if (typeof indexes !== 'undefined') {
            apiPayload['indexes'] = indexes;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'collection',
            models: {
                collection: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        databaseId: '',
                        name: '',
                        description: '',
                        enabled: true,
                        documentSecurity: false,
                        attributes: [],
                        indexes: [],
                        bytesMax: 0,
                        bytesUsed: 0,
                    },
                    properties: {
                        indexes: {
                            items: 'index',
                        },
                    },
                },
                index: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        attributes: [],
                        lengths: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     */
    getCollection(params: {
        databaseId: string;
        collectionId: string;
    }): Promise<Models.Collection>;
    /**
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCollection(
        databaseId: string,
        collectionId: string,
    ): Promise<Models.Collection>;
    getCollection(
        paramsOrFirst: { databaseId: string; collectionId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Collection> {
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath = '/documentsdb/{databaseId}/collections/{collectionId}'
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'collection',
            models: {
                collection: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        databaseId: '',
                        name: '',
                        description: '',
                        enabled: true,
                        documentSecurity: false,
                        attributes: [],
                        indexes: [],
                        bytesMax: 0,
                        bytesUsed: 0,
                    },
                    properties: {
                        indexes: {
                            items: 'index',
                        },
                    },
                },
                index: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        attributes: [],
                        lengths: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
     * @param {boolean} params.purge - When true, purge all cached list responses for this collection as part of the update. Use this to force readers to see fresh data immediately instead of waiting for the cache TTL to expire.
     * @param {string | null} params.description - Optional description for the collection.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     */
    updateCollection(params: {
        databaseId: string;
        collectionId: string;
        name: string;
        permissions?: string[];
        documentSecurity?: boolean;
        enabled?: boolean;
        purge?: boolean;
        description?: string | null;
    }): Promise<Models.Collection>;
    /**
     * Update a collection by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @param {boolean} purge - When true, purge all cached list responses for this collection as part of the update. Use this to force readers to see fresh data immediately instead of waiting for the cache TTL to expire.
     * @param {string | null} description - Optional description for the collection.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateCollection(
        databaseId: string,
        collectionId: string,
        name: string,
        permissions?: string[],
        documentSecurity?: boolean,
        enabled?: boolean,
        purge?: boolean,
        description?: string | null,
    ): Promise<Models.Collection>;
    updateCollection(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  name: string;
                  permissions?: string[];
                  documentSecurity?: boolean;
                  enabled?: boolean;
                  purge?: boolean;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string[]?,
            boolean?,
            boolean?,
            boolean?,
            (string | null)?,
        ]
    ): Promise<Models.Collection> {
        let params: {
            databaseId: string;
            collectionId: string;
            name: string;
            permissions?: string[];
            documentSecurity?: boolean;
            enabled?: boolean;
            purge?: boolean;
            description?: string | null;
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
                permissions?: string[];
                documentSecurity?: boolean;
                enabled?: boolean;
                purge?: boolean;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                name: rest[1] as string,
                permissions: rest[2] as string[],
                documentSecurity: rest[3] as boolean,
                enabled: rest[4] as boolean,
                purge: rest[5] as boolean,
                description: rest[6] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const name = params.name;
        const permissions = params.permissions;
        const documentSecurity = params.documentSecurity;
        const enabled = params.enabled;
        const purge = params.purge;
        const description = params.description;
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/documentsdb/{databaseId}/collections/{collectionId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace(
                '{collectionId}',
                encodeURIComponent(String(collectionId)),
            );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
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
        if (typeof purge !== 'undefined') {
            apiPayload['purge'] = purge;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('put', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'collection',
            models: {
                collection: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        databaseId: '',
                        name: '',
                        description: '',
                        enabled: true,
                        documentSecurity: false,
                        attributes: [],
                        indexes: [],
                        bytesMax: 0,
                        bytesUsed: 0,
                    },
                    properties: {
                        indexes: {
                            items: 'index',
                        },
                    },
                },
                index: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        attributes: [],
                        lengths: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath = '/documentsdb/{databaseId}/collections/{collectionId}'
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
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
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
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents'
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'documentList',
            models: {
                documentList: {
                    defaults: {
                        total: 0,
                        documents: [],
                    },
                    properties: {
                        documents: {
                            items: 'document',
                        },
                    },
                },
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} params.documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} params.data - Document data as JSON object.
     * @param {string[]} params.permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
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
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
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
    createDocument<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documentId: string,
        data: Document extends Models.DefaultDocument
            ? Partial<Models.Document> & Record<string, any>
            : Partial<Models.Document> & Omit<Document, keyof Models.Document>,
        permissions?: string[],
        transactionId?: string,
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
                  transactionId?: string;
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
            string?,
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
                data: Document extends Models.DefaultDocument
                    ? Partial<Models.Document> & Record<string, any>
                    : Partial<Models.Document> &
                          Omit<Document, keyof Models.Document>;
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
                          Omit<Document, keyof Models.Document>,
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
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
            '/documentsdb/{databaseId}/collections/{collectionId}/documents'
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
        if (typeof transactionId !== 'undefined') {
            apiPayload['transactionId'] = transactionId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'document',
            models: {
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} params.documents - Array of documents data as JSON objects.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    createDocuments<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documents: object[];
        transactionId?: string;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#documentsDBCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} documents - Array of documents data as JSON objects.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documents: object[],
        transactionId?: string,
    ): Promise<Models.DocumentList<Document>>;
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
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
            '/documentsdb/{databaseId}/collections/{collectionId}/documents'
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

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'documentList',
            models: {
                documentList: {
                    defaults: {
                        total: 0,
                        documents: [],
                    },
                    properties: {
                        documents: {
                            items: 'document',
                        },
                    },
                },
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
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
            '/documentsdb/{databaseId}/collections/{collectionId}/documents'
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

        const request = this.client.call('put', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'documentList',
            models: {
                documentList: {
                    defaults: {
                        total: 0,
                        documents: [],
                    },
                    properties: {
                        documents: {
                            items: 'document',
                        },
                    },
                },
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents'
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

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'documentList',
            models: {
                documentList: {
                    defaults: {
                        total: 0,
                        documents: [],
                    },
                    properties: {
                        documents: {
                            items: 'document',
                        },
                    },
                },
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents'
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

        const request = this.client.call('delete', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'documentList',
            models: {
                documentList: {
                    defaults: {
                        total: 0,
                        documents: [],
                    },
                    properties: {
                        documents: {
                            items: 'document',
                        },
                    },
                },
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a list of all the user's documents in a given collection using a POST request. This behaves identically to the list documents endpoint but accepts the queries in the request body, allowing much larger `queries` arrays than can fit in a URL query string.
     *
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
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents/query'
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

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'documentList',
            models: {
                documentList: {
                    defaults: {
                        total: 0,
                        documents: [],
                    },
                    properties: {
                        documents: {
                            items: 'document',
                        },
                    },
                },
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined' || documentId === '') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'document',
            models: {
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined' || documentId === '') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'
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

        const request = this.client.call('put', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'document',
            models: {
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined' || documentId === '') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'
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

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'document',
            models: {
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined' || documentId === '') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents/{documentId}'
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
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Decrement a specific column of a row by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {string} params.attribute - Attribute key.
     * @param {number} params.value - Value to decrement the attribute by. The value must be a number.
     * @param {number} params.min - Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    decrementDocumentAttribute<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        attribute: string;
        value?: number;
        min?: number;
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Decrement a specific column of a row by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string} attribute - Attribute key.
     * @param {number} value - Value to decrement the attribute by. The value must be a number.
     * @param {number} min - Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    decrementDocumentAttribute<
        Document extends Models.Document = Models.DefaultDocument,
    >(
        databaseId: string,
        collectionId: string,
        documentId: string,
        attribute: string,
        value?: number,
        min?: number,
        transactionId?: string,
    ): Promise<Document>;
    decrementDocumentAttribute<
        Document extends Models.Document = Models.DefaultDocument,
    >(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documentId: string;
                  attribute: string;
                  value?: number;
                  min?: number;
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, number?, string?]
    ): Promise<Document> {
        let params: {
            databaseId: string;
            collectionId: string;
            documentId: string;
            attribute: string;
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
                collectionId: string;
                documentId: string;
                attribute: string;
                value?: number;
                min?: number;
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                attribute: rest[2] as string,
                value: rest[3] as number,
                min: rest[4] as number,
                transactionId: rest[5] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const attribute = params.attribute;
        const value = params.value;
        const min = params.min;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined' || documentId === '') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        if (typeof attribute === 'undefined' || attribute === '') {
            throw new AppwriteException(
                'Missing required parameter: "attribute"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
                .replace('{documentId}', encodeURIComponent(String(documentId)))
                .replace('{attribute}', encodeURIComponent(String(attribute)));
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

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'document',
            models: {
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Increment a specific column of a row by a given value.
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
     */
    incrementDocumentAttribute<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        attribute: string;
        value?: number;
        max?: number;
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Increment a specific column of a row by a given value.
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
    incrementDocumentAttribute<
        Document extends Models.Document = Models.DefaultDocument,
    >(
        databaseId: string,
        collectionId: string,
        documentId: string,
        attribute: string,
        value?: number,
        max?: number,
        transactionId?: string,
    ): Promise<Document>;
    incrementDocumentAttribute<
        Document extends Models.Document = Models.DefaultDocument,
    >(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documentId: string;
                  attribute: string;
                  value?: number;
                  max?: number;
                  transactionId?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, number?, string?]
    ): Promise<Document> {
        let params: {
            databaseId: string;
            collectionId: string;
            documentId: string;
            attribute: string;
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
                collectionId: string;
                documentId: string;
                attribute: string;
                value?: number;
                max?: number;
                transactionId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                attribute: rest[2] as string,
                value: rest[3] as number,
                max: rest[4] as number,
                transactionId: rest[5] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const attribute = params.attribute;
        const value = params.value;
        const max = params.max;
        const transactionId = params.transactionId;
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof documentId === 'undefined' || documentId === '') {
            throw new AppwriteException(
                'Missing required parameter: "documentId"',
            );
        }
        if (typeof attribute === 'undefined' || attribute === '') {
            throw new AppwriteException(
                'Missing required parameter: "attribute"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
                .replace('{documentId}', encodeURIComponent(String(documentId)))
                .replace('{attribute}', encodeURIComponent(String(attribute)));
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

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'document',
            models: {
                document: {
                    defaults: {
                        $id: '',
                        $sequence: '',
                        $collectionId: '',
                        $databaseId: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/indexes'
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'indexList',
            models: {
                indexList: {
                    defaults: {
                        total: 0,
                        indexes: [],
                    },
                    properties: {
                        indexes: {
                            items: 'index',
                        },
                    },
                },
                index: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        attributes: [],
                        lengths: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @param {DocumentsDBIndexType} params.type - Index type.
     * @param {string[]} params.attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {OrderBy[]} params.orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} params.lengths - Length of index. Maximum of 100
     * @param {string} params.description - Optional description for the index.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     */
    createIndex(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        type: DocumentsDBIndexType;
        attributes: string[];
        orders?: OrderBy[];
        lengths?: number[];
        description?: string;
    }): Promise<Models.Index>;
    /**
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @param {DocumentsDBIndexType} type - Index type.
     * @param {string[]} attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {OrderBy[]} orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} lengths - Length of index. Maximum of 100
     * @param {string} description - Optional description for the index.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIndex(
        databaseId: string,
        collectionId: string,
        key: string,
        type: DocumentsDBIndexType,
        attributes: string[],
        orders?: OrderBy[],
        lengths?: number[],
        description?: string,
    ): Promise<Models.Index>;
    createIndex(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  type: DocumentsDBIndexType;
                  attributes: string[];
                  orders?: OrderBy[];
                  lengths?: number[];
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            DocumentsDBIndexType?,
            string[]?,
            OrderBy[]?,
            number[]?,
            string?,
        ]
    ): Promise<Models.Index> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            type: DocumentsDBIndexType;
            attributes: string[];
            orders?: OrderBy[];
            lengths?: number[];
            description?: string;
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
                type: DocumentsDBIndexType;
                attributes: string[];
                orders?: OrderBy[];
                lengths?: number[];
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                type: rest[2] as DocumentsDBIndexType,
                attributes: rest[3] as string[],
                orders: rest[4] as OrderBy[],
                lengths: rest[5] as number[],
                description: rest[6] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const type = params.type;
        const attributes = params.attributes;
        const orders = params.orders;
        const lengths = params.lengths;
        const description = params.description;
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
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
            '/documentsdb/{databaseId}/collections/{collectionId}/indexes'
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'index',
            models: {
                index: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        attributes: [],
                        lengths: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof key === 'undefined' || key === '') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/indexes/{key}'
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'index',
            models: {
                index: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        attributes: [],
                        lengths: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof collectionId === 'undefined' || collectionId === '') {
            throw new AppwriteException(
                'Missing required parameter: "collectionId"',
            );
        }
        if (typeof key === 'undefined' || key === '') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath =
            '/documentsdb/{databaseId}/collections/{collectionId}/indexes/{key}'
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
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Trigger a manual failover for a dedicated database with high availability enabled. Promotes a replica to primary. The failover runs asynchronously; poll the database document for status updates. A database left mid-operation also accepts this call as a repair once nothing is driving the operation it is stuck in. Repairing a failover that did not finish, a `failed` database, a stranded upgrade or migrate, or a stranded compute resize additionally requires `targetReplicaId` to name the member to promote, because the default target may be the member that operation already promoted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string | null} params.targetReplicaId - Target replica ID to promote. If not specified, the healthiest replica is selected.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createFailover(params: {
        databaseId: string;
        targetReplicaId?: string | null;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Trigger a manual failover for a dedicated database with high availability enabled. Promotes a replica to primary. The failover runs asynchronously; poll the database document for status updates. A database left mid-operation also accepts this call as a repair once nothing is driving the operation it is stuck in. Repairing a failover that did not finish, a `failed` database, a stranded upgrade or migrate, or a stranded compute resize additionally requires `targetReplicaId` to name the member to promote, because the default target may be the member that operation already promoted.
     *
     * @param {string} databaseId - Database ID.
     * @param {string | null} targetReplicaId - Target replica ID to promote. If not specified, the healthiest replica is selected.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFailover(
        databaseId: string,
        targetReplicaId?: string | null,
    ): Promise<Models.DedicatedDatabase>;
    createFailover(
        paramsOrFirst:
            { databaseId: string; targetReplicaId?: string | null } | string,
        ...rest: [(string | null)?]
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string; targetReplicaId?: string | null };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                targetReplicaId?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                targetReplicaId: rest[0] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const targetReplicaId = params.targetReplicaId;
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/documentsdb/{databaseId}/failovers'.replace(
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

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'dedicatedDatabase',
            models: {
                dedicatedDatabase: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        projectId: '',
                        name: '',
                        version: '',
                        specification: '',
                        backend: '',
                        hostname: '',
                        connectionUser: '',
                        connectionPassword: '',
                        connectionString: '',
                        ssl: false,
                        status: 'provisioning',
                        containerStatus: '',
                        lifecycleState: '',
                        idleTimeoutMinutes: 15,
                        cpu: 500,
                        memory: 512,
                        storage: 10,
                        storageStatus: 'idle',
                        storageTargetGb: 0,
                        storageClass: 'ssd',
                        storageMaxGb: 0,
                        nodePool: '',
                        replicas: 0,
                        syncMode: '',
                        networkMaxConnections: 100,
                        networkIdleTimeoutSeconds: 900,
                        networkIPAllowlist: [],
                        backupEnabled: true,
                        pitr: true,
                        pitrRetentionDays: 7,
                        storageAutoscaling: true,
                        storageAutoscalingThresholdPercent: 85,
                        storageAutoscalingMaxGb: 0,
                        maintenanceWindowDay: 'sun',
                        maintenanceWindowHourUtc: 3,
                        metricsEnabled: false,
                        sqlApiEnabled: true,
                        sqlApiAllowedStatements: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
                        sqlApiMaxRows: 10000,
                        sqlApiMaxBytes: 10485760,
                        sqlApiTimeoutSeconds: 30,
                        error: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/documentsdb/{databaseId}/operations'.replace(
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'dedicatedDatabaseOperationList',
            models: {
                dedicatedDatabaseOperationList: {
                    defaults: {
                        total: 0,
                        operations: [],
                    },
                    properties: {
                        operations: {
                            items: 'dedicatedDatabaseOperation',
                        },
                    },
                },
                dedicatedDatabaseOperation: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        databaseId: '',
                        type: '',
                        status: '',
                        attempts: 0,
                        errorCode: '',
                        errorMessage: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/documentsdb/{databaseId}/replicas'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'dedicatedDatabaseReplicas',
            models: {
                dedicatedDatabaseReplicas: {
                    defaults: {
                        replicas: 0,
                        syncMode: 'async',
                        syncDegraded: false,
                        syncAcknowledgements: 0,
                        syncStandbyCount: 0,
                        members: [],
                    },
                    properties: {
                        members: {
                            items: 'dedicatedDatabaseMember',
                        },
                    },
                },
                dedicatedDatabaseMember: {
                    defaults: {
                        $id: '',
                        role: 'unknown',
                        status: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/documentsdb/{databaseId}/status'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'databaseStatus',
            models: {
                databaseStatus: {
                    defaults: {
                        health: 'unknown',
                        ready: false,
                        engine: 'postgresql',
                        version: '',
                        uptime: 0,
                        syncMode: 'async',
                        syncDegraded: false,
                        syncAcknowledgements: 0,
                        syncStandbyCount: 0,
                        replicas: [],
                        volumes: [],
                    },
                    properties: {
                        replicas: {
                            items: 'databaseStatusReplica',
                        },
                        volumes: {
                            items: 'databaseStatusVolume',
                        },
                    },
                },
                databaseStatusReplica: {
                    defaults: {
                        index: 0,
                        role: 'unknown',
                        healthy: false,
                    },
                },
                databaseStatusVolume: {
                    defaults: {
                        path: '',
                        usedPercent: '0%',
                        available: '0GB',
                        mounted: false,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }
}
