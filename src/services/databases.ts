import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
} from '../client';
import type { Models } from '../models';

import { RelationshipType } from '../enums/relationship-type';
import { RelationMutate } from '../enums/relation-mutate';
import { DatabasesIndexType } from '../enums/databases-index-type';
import { OrderBy } from '../enums/order-by';
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
    list(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.DatabaseList>;
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
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
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
        const apiPath = '/databases';
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
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.create` instead.
     */
    create(params: {
        databaseId: string;
        name: string;
        enabled?: boolean;
        description?: string;
    }): Promise<Models.Database>;
    /**
     * Create a new Database.
     *
     *
     * @param {string} databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string} description - Optional description for the database.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(
        databaseId: string,
        name: string,
        enabled?: boolean,
        description?: string,
    ): Promise<Models.Database>;
    create(
        paramsOrFirst:
            | {
                  databaseId: string;
                  name: string;
                  enabled?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [string?, boolean?, string?]
    ): Promise<Models.Database> {
        let params: {
            databaseId: string;
            name: string;
            enabled?: boolean;
            description?: string;
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
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                description: rest[2] as string,
            };
        }

        const databaseId = params.databaseId;
        const name = params.name;
        const enabled = params.enabled;
        const description = params.description;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/databases';
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
     * List transactions across all databases.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries).
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TransactionList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listTransactions` instead.
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
        const apiPath = '/databases/transactions';
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createTransaction` instead.
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
        const apiPath = '/databases/transactions';
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getTransaction` instead.
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
        const apiPath = '/databases/transactions/{transactionId}'.replace(
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateTransaction` instead.
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
        const apiPath = '/databases/transactions/{transactionId}'.replace(
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteTransaction` instead.
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
        const apiPath = '/databases/transactions/{transactionId}'.replace(
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createOperations` instead.
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
            '/databases/transactions/{transactionId}/operations'.replace(
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.get` instead.
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
        const apiPath = '/databases/{databaseId}'.replace(
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
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.update` instead.
     */
    update(params: {
        databaseId: string;
        name?: string;
        enabled?: boolean;
        description?: string | null;
    }): Promise<Models.Database>;
    /**
     * Update a database by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {string | null} description - Optional description for the database.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(
        databaseId: string,
        name?: string,
        enabled?: boolean,
        description?: string | null,
    ): Promise<Models.Database>;
    update(
        paramsOrFirst:
            | {
                  databaseId: string;
                  name?: string;
                  enabled?: boolean;
                  description?: string | null;
              }
            | string,
        ...rest: [string?, boolean?, (string | null)?]
    ): Promise<Models.Database> {
        let params: {
            databaseId: string;
            name?: string;
            enabled?: boolean;
            description?: string | null;
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
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                description: rest[2] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const name = params.name;
        const enabled = params.enabled;
        const description = params.description;
        if (typeof databaseId === 'undefined' || databaseId === '') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/databases/{databaseId}'.replace(
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.delete` instead.
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
        const apiPath = '/databases/{databaseId}'.replace(
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listTables` instead.
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
        const apiPath = '/databases/{databaseId}/collections'.replace(
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
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Collection name. Max length: 128 chars.
     * @param {string[] | null} params.permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @param {object[]} params.attributes - Array of attribute definitions to create. Each attribute should contain: key (string), type (string: string, varchar, text, mediumtext, longtext, integer, bigint, double, boolean, datetime, point, linestring, polygon, email, url, ip, enum), size (integer, required for string and varchar types), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} params.indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial, trigram), attributes (array of attribute keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
     * @param {string} params.description - Optional description for the collection.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createTable` instead.
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
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {string[] | null} permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @param {object[]} attributes - Array of attribute definitions to create. Each attribute should contain: key (string), type (string: string, varchar, text, mediumtext, longtext, integer, bigint, double, boolean, datetime, point, linestring, polygon, email, url, ip, enum), size (integer, required for string and varchar types), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial, trigram), attributes (array of attribute keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
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
        const apiPath = '/databases/{databaseId}/collections'.replace(
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getTable` instead.
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
        const apiPath = '/databases/{databaseId}/collections/{collectionId}'
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
     * @param {string[] | null} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @param {boolean} params.purge - When true, purge all cached list responses for this collection as part of the update. Use this to force readers to see fresh data immediately instead of waiting for the cache TTL to expire.
     * @param {string | null} params.description - Optional description for the collection.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateTable` instead.
     */
    updateCollection(params: {
        databaseId: string;
        collectionId: string;
        name?: string;
        permissions?: string[] | null;
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
     * @param {string[] | null} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
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
        name?: string,
        permissions?: string[] | null,
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
                  name?: string;
                  permissions?: string[] | null;
                  documentSecurity?: boolean;
                  enabled?: boolean;
                  purge?: boolean;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (string[] | null)?,
            boolean?,
            boolean?,
            boolean?,
            (string | null)?,
        ]
    ): Promise<Models.Collection> {
        let params: {
            databaseId: string;
            collectionId: string;
            name?: string;
            permissions?: string[] | null;
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
                name?: string;
                permissions?: string[] | null;
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
                permissions: rest[2] as string[] | null,
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
        const apiPath = '/databases/{databaseId}/collections/{collectionId}'
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteTable` instead.
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
        const apiPath = '/databases/{databaseId}/collections/{collectionId}'
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
    listAttributes(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.AttributeList>;
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
    listAttributes(
        databaseId: string,
        collectionId: string,
        queries?: string[],
        total?: boolean,
    ): Promise<Models.AttributeList>;
    listAttributes(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  queries?: string[];
                  total?: boolean;
              }
            | string,
        ...rest: [string?, string[]?, boolean?]
    ): Promise<Models.AttributeList> {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes'
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
            root: 'attributeList',
            models: {
                attributeList: {
                    defaults: {
                        total: 0,
                        attributes: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a bigint attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number | bigint | null} params.min - Minimum value
     * @param {number | bigint | null} params.max - Maximum value
     * @param {number | bigint | null} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBigint>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createBigIntColumn` instead.
     */
    createBigIntAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        min?: number | bigint | null;
        max?: number | bigint | null;
        xdefault?: number | bigint | null;
        array?: boolean;
        description?: string;
    }): Promise<Models.AttributeBigint>;
    /**
     * Create a bigint attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number | bigint | null} min - Minimum value
     * @param {number | bigint | null} max - Maximum value
     * @param {number | bigint | null} xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBigint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBigIntAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        min?: number | bigint | null,
        max?: number | bigint | null,
        xdefault?: number | bigint | null,
        array?: boolean,
        description?: string,
    ): Promise<Models.AttributeBigint>;
    createBigIntAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  min?: number | bigint | null;
                  max?: number | bigint | null;
                  xdefault?: number | bigint | null;
                  array?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | bigint | null)?,
            (number | bigint | null)?,
            (number | bigint | null)?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeBigint> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            min?: number | bigint | null;
            max?: number | bigint | null;
            xdefault?: number | bigint | null;
            array?: boolean;
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
                required: boolean;
                min?: number | bigint | null;
                max?: number | bigint | null;
                xdefault?: number | bigint | null;
                array?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number | bigint | null,
                max: rest[4] as number | bigint | null,
                xdefault: rest[5] as number | bigint | null,
                array: rest[6] as boolean,
                description: rest[7] as string,
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/bigint'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeBigint',
            models: {
                attributeBigint: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a bigint attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number | bigint | null} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {number | bigint | null} params.min - Minimum value
     * @param {number | bigint | null} params.max - Maximum value
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBigint>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateBigIntColumn` instead.
     */
    updateBigIntAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: number | bigint | null;
        min?: number | bigint | null;
        max?: number | bigint | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeBigint>;
    /**
     * Update a bigint attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number | bigint | null} xdefault - Default value. Cannot be set when attribute is required.
     * @param {number | bigint | null} min - Minimum value
     * @param {number | bigint | null} max - Maximum value
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBigint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBigIntAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: number | bigint | null,
        min?: number | bigint | null,
        max?: number | bigint | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeBigint>;
    updateBigIntAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number | bigint | null;
                  min?: number | bigint | null;
                  max?: number | bigint | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | bigint | null)?,
            (number | bigint | null)?,
            (number | bigint | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeBigint> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: number | bigint | null;
            min?: number | bigint | null;
            max?: number | bigint | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: number | bigint | null;
                min?: number | bigint | null;
                max?: number | bigint | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number | bigint | null,
                min: rest[4] as number | bigint | null,
                max: rest[5] as number | bigint | null,
                newKey: rest[6] as string | null,
                description: rest[7] as string | null,
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/bigint/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeBigint',
            models: {
                attributeBigint: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a boolean attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {boolean | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createBooleanColumn` instead.
     */
    createBooleanAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: boolean | null;
        array?: boolean;
        description?: string;
    }): Promise<Models.AttributeBoolean>;
    /**
     * Create a boolean attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {boolean | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBooleanAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: boolean | null,
        array?: boolean,
        description?: string,
    ): Promise<Models.AttributeBoolean>;
    createBooleanAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: boolean | null;
                  array?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (boolean | null)?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeBoolean> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: boolean | null;
            array?: boolean;
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
                required: boolean;
                xdefault?: boolean | null;
                array?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as boolean | null,
                array: rest[4] as boolean,
                description: rest[5] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/boolean'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeBoolean',
            models: {
                attributeBoolean: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a boolean attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {boolean | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New attribute key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateBooleanColumn` instead.
     */
    updateBooleanAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: boolean | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeBoolean>;
    /**
     * Update a boolean attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {boolean | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} newKey - New attribute key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBooleanAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: boolean | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeBoolean>;
    updateBooleanAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: boolean | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (boolean | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeBoolean> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: boolean | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: boolean | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as boolean | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeBoolean',
            models: {
                attributeBoolean: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a date time attribute according to the ISO 8601 standard.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createDatetimeColumn` instead.
     */
    createDatetimeAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        description?: string;
    }): Promise<Models.AttributeDatetime>;
    /**
     * Create a date time attribute according to the ISO 8601 standard.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatetimeAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        description?: string,
    ): Promise<Models.AttributeDatetime>;
    createDatetimeAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeDatetime> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
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
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                array: rest[4] as boolean,
                description: rest[5] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/datetime'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeDatetime',
            models: {
                attributeDatetime: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a date time attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New attribute key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateDatetimeColumn` instead.
     */
    updateDatetimeAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeDatetime>;
    /**
     * Update a date time attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} newKey - New attribute key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatetimeAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeDatetime>;
    updateDatetimeAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeDatetime> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: string | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeDatetime',
            models: {
                attributeDatetime: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create an email attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createEmailColumn` instead.
     */
    createEmailAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        description?: string;
    }): Promise<Models.AttributeEmail>;
    /**
     * Create an email attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmailAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        description?: string,
    ): Promise<Models.AttributeEmail>;
    createEmailAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeEmail> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
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
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                array: rest[4] as boolean,
                description: rest[5] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/email'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeEmail',
            models: {
                attributeEmail: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        format: 'email',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update an email attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateEmailColumn` instead.
     */
    updateEmailAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeEmail>;
    /**
     * Update an email attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeEmail>;
    updateEmailAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeEmail> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: string | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/email/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeEmail',
            models: {
                attributeEmail: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        format: 'email',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createEnumColumn` instead.
     */
    createEnumAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        elements: string[];
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        description?: string;
    }): Promise<Models.AttributeEnum>;
    /**
     * Create an enum attribute. The `elements` param acts as a white-list of accepted values for this attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {string[]} elements - Array of enum values.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEnumAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        elements: string[],
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        description?: string,
    ): Promise<Models.AttributeEnum>;
    createEnumAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  elements: string[];
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string[]?,
            boolean?,
            (string | null)?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeEnum> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            elements: string[];
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
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
                elements: string[];
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                elements: rest[2] as string[],
                required: rest[3] as boolean,
                xdefault: rest[4] as string | null,
                array: rest[5] as boolean,
                description: rest[6] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const elements = params.elements;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
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
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/enum'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeEnum',
            models: {
                attributeEnum: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        elements: [],
                        format: 'enum',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateEnumColumn` instead.
     */
    updateEnumAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        elements: string[];
        required: boolean;
        xdefault?: string | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeEnum>;
    /**
     * Update an enum attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {string[]} elements - Updated list of enum values.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEnumAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        elements: string[],
        required: boolean,
        xdefault?: string | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeEnum>;
    updateEnumAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  elements: string[];
                  required: boolean;
                  xdefault?: string | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string[]?,
            boolean?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeEnum> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            elements: string[];
            required: boolean;
            xdefault?: string | null;
            newKey?: string | null;
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
                key: string;
                elements: string[];
                required: boolean;
                xdefault?: string | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                elements: rest[2] as string[],
                required: rest[3] as boolean,
                xdefault: rest[4] as string | null,
                newKey: rest[5] as string | null,
                description: rest[6] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const elements = params.elements;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeEnum',
            models: {
                attributeEnum: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        elements: [],
                        format: 'enum',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a float attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number | null} params.min - Minimum value.
     * @param {number | null} params.max - Maximum value.
     * @param {number | null} params.xdefault - Default value. Cannot be set when required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createFloatColumn` instead.
     */
    createFloatAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        min?: number | null;
        max?: number | null;
        xdefault?: number | null;
        array?: boolean;
        description?: string;
    }): Promise<Models.AttributeFloat>;
    /**
     * Create a float attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number | null} min - Minimum value.
     * @param {number | null} max - Maximum value.
     * @param {number | null} xdefault - Default value. Cannot be set when required.
     * @param {boolean} array - Is attribute an array?
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFloatAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        min?: number | null,
        max?: number | null,
        xdefault?: number | null,
        array?: boolean,
        description?: string,
    ): Promise<Models.AttributeFloat>;
    createFloatAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  min?: number | null;
                  max?: number | null;
                  xdefault?: number | null;
                  array?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | null)?,
            (number | null)?,
            (number | null)?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeFloat> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            min?: number | null;
            max?: number | null;
            xdefault?: number | null;
            array?: boolean;
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
                required: boolean;
                min?: number | null;
                max?: number | null;
                xdefault?: number | null;
                array?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number | null,
                max: rest[4] as number | null,
                xdefault: rest[5] as number | null,
                array: rest[6] as boolean,
                description: rest[7] as string,
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/float'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeFloat',
            models: {
                attributeFloat: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a float attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number | null} params.xdefault - Default value. Cannot be set when required.
     * @param {number | null} params.min - Minimum value.
     * @param {number | null} params.max - Maximum value.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateFloatColumn` instead.
     */
    updateFloatAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: number | null;
        min?: number | null;
        max?: number | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeFloat>;
    /**
     * Update a float attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number | null} xdefault - Default value. Cannot be set when required.
     * @param {number | null} min - Minimum value.
     * @param {number | null} max - Maximum value.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFloatAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: number | null,
        min?: number | null,
        max?: number | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeFloat>;
    updateFloatAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number | null;
                  min?: number | null;
                  max?: number | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | null)?,
            (number | null)?,
            (number | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeFloat> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: number | null;
            min?: number | null;
            max?: number | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: number | null;
                min?: number | null;
                max?: number | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number | null,
                min: rest[4] as number | null,
                max: rest[5] as number | null,
                newKey: rest[6] as string | null,
                description: rest[7] as string | null,
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/float/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeFloat',
            models: {
                attributeFloat: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create an integer attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number | bigint | null} params.min - Minimum value
     * @param {number | bigint | null} params.max - Maximum value
     * @param {number | bigint | null} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIntegerColumn` instead.
     */
    createIntegerAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        min?: number | bigint | null;
        max?: number | bigint | null;
        xdefault?: number | bigint | null;
        array?: boolean;
        description?: string;
    }): Promise<Models.AttributeInteger>;
    /**
     * Create an integer attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number | bigint | null} min - Minimum value
     * @param {number | bigint | null} max - Maximum value
     * @param {number | bigint | null} xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIntegerAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        min?: number | bigint | null,
        max?: number | bigint | null,
        xdefault?: number | bigint | null,
        array?: boolean,
        description?: string,
    ): Promise<Models.AttributeInteger>;
    createIntegerAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  min?: number | bigint | null;
                  max?: number | bigint | null;
                  xdefault?: number | bigint | null;
                  array?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | bigint | null)?,
            (number | bigint | null)?,
            (number | bigint | null)?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeInteger> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            min?: number | bigint | null;
            max?: number | bigint | null;
            xdefault?: number | bigint | null;
            array?: boolean;
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
                required: boolean;
                min?: number | bigint | null;
                max?: number | bigint | null;
                xdefault?: number | bigint | null;
                array?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                min: rest[3] as number | bigint | null,
                max: rest[4] as number | bigint | null,
                xdefault: rest[5] as number | bigint | null,
                array: rest[6] as boolean,
                description: rest[7] as string,
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/integer'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeInteger',
            models: {
                attributeInteger: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update an integer attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number | bigint | null} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {number | bigint | null} params.min - Minimum value
     * @param {number | bigint | null} params.max - Maximum value
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateIntegerColumn` instead.
     */
    updateIntegerAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: number | bigint | null;
        min?: number | bigint | null;
        max?: number | bigint | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeInteger>;
    /**
     * Update an integer attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number | bigint | null} xdefault - Default value. Cannot be set when attribute is required.
     * @param {number | bigint | null} min - Minimum value
     * @param {number | bigint | null} max - Maximum value
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIntegerAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: number | bigint | null,
        min?: number | bigint | null,
        max?: number | bigint | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeInteger>;
    updateIntegerAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number | bigint | null;
                  min?: number | bigint | null;
                  max?: number | bigint | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number | bigint | null)?,
            (number | bigint | null)?,
            (number | bigint | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeInteger> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: number | bigint | null;
            min?: number | bigint | null;
            max?: number | bigint | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: number | bigint | null;
                min?: number | bigint | null;
                max?: number | bigint | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number | bigint | null,
                min: rest[4] as number | bigint | null,
                max: rest[5] as number | bigint | null,
                newKey: rest[6] as string | null,
                description: rest[7] as string | null,
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeInteger',
            models: {
                attributeInteger: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create IP address attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIpColumn` instead.
     */
    createIpAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        description?: string;
    }): Promise<Models.AttributeIp>;
    /**
     * Create IP address attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIpAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        description?: string,
    ): Promise<Models.AttributeIp>;
    createIpAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeIp> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
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
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                array: rest[4] as boolean,
                description: rest[5] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/ip'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeIp',
            models: {
                attributeIp: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        format: 'ip',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update an ip attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateIpColumn` instead.
     */
    updateIpAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeIp>;
    /**
     * Update an ip attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value. Cannot be set when attribute is required.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIpAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeIp>;
    updateIpAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeIp> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: string | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeIp',
            models: {
                attributeIp: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        format: 'ip',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a geometric line attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[][] | null} params.xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createLineColumn` instead.
     */
    createLineAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[][] | null;
        description?: string;
    }): Promise<Models.AttributeLine>;
    /**
     * Create a geometric line attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[][] | null} xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLineAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: any[][] | null,
        description?: string,
    ): Promise<Models.AttributeLine>;
    createLineAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: any[][] | null;
                  description?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, (any[][] | null)?, string?]
    ): Promise<Models.AttributeLine> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: any[][] | null;
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
                required: boolean;
                xdefault?: any[][] | null;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[][] | null,
                description: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/line'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeLine',
            models: {
                attributeLine: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a line attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[][] | null} params.xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New attribute key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateLineColumn` instead.
     */
    updateLineAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[][] | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeLine>;
    /**
     * Update a line attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[][] | null} xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @param {string | null} newKey - New attribute key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLineAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: any[][] | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeLine>;
    updateLineAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: any[][] | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (any[][] | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeLine> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: any[][] | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: any[][] | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[][] | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/line/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeLine',
            models: {
                attributeLine: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a longtext attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLongtext>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createLongtextColumn` instead.
     */
    createLongtextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        encrypt?: boolean;
        description?: string;
    }): Promise<Models.AttributeLongtext>;
    /**
     * Create a longtext attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLongtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLongtextAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        encrypt?: boolean,
        description?: string,
    ): Promise<Models.AttributeLongtext>;
    createLongtextAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  encrypt?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            boolean?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeLongtext> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
            encrypt?: boolean;
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
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                encrypt?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                array: rest[4] as boolean,
                encrypt: rest[5] as boolean,
                description: rest[6] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        const encrypt = params.encrypt;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/longtext'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeLongtext',
            models: {
                attributeLongtext: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a longtext attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLongtext>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateLongtextColumn` instead.
     */
    updateLongtextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeLongtext>;
    /**
     * Update a longtext attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLongtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLongtextAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeLongtext>;
    updateLongtextAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeLongtext> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: string | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/longtext/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeLongtext',
            models: {
                attributeLongtext: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a mediumtext attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeMediumtext>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createMediumtextColumn` instead.
     */
    createMediumtextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        encrypt?: boolean;
        description?: string;
    }): Promise<Models.AttributeMediumtext>;
    /**
     * Create a mediumtext attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeMediumtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMediumtextAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        encrypt?: boolean,
        description?: string,
    ): Promise<Models.AttributeMediumtext>;
    createMediumtextAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  encrypt?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            boolean?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeMediumtext> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
            encrypt?: boolean;
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
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                encrypt?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                array: rest[4] as boolean,
                encrypt: rest[5] as boolean,
                description: rest[6] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        const encrypt = params.encrypt;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/mediumtext'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeMediumtext',
            models: {
                attributeMediumtext: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a mediumtext attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeMediumtext>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateMediumtextColumn` instead.
     */
    updateMediumtextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeMediumtext>;
    /**
     * Update a mediumtext attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeMediumtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMediumtextAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeMediumtext>;
    updateMediumtextAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeMediumtext> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: string | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/mediumtext/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeMediumtext',
            models: {
                attributeMediumtext: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a geometric point attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number[] | null} params.xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createPointColumn` instead.
     */
    createPointAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: number[] | null;
        description?: string;
    }): Promise<Models.AttributePoint>;
    /**
     * Create a geometric point attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number[] | null} xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPointAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: number[] | null,
        description?: string,
    ): Promise<Models.AttributePoint>;
    createPointAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number[] | null;
                  description?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, (number[] | null)?, string?]
    ): Promise<Models.AttributePoint> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: number[] | null;
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
                required: boolean;
                xdefault?: number[] | null;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number[] | null,
                description: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/point'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributePoint',
            models: {
                attributePoint: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a point attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number[] | null} params.xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New attribute key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updatePointColumn` instead.
     */
    updatePointAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: number[] | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributePoint>;
    /**
     * Update a point attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number[] | null} xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @param {string | null} newKey - New attribute key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePointAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: number[] | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributePoint>;
    updatePointAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: number[] | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (number[] | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributePoint> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: number[] | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: number[] | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as number[] | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/point/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributePoint',
            models: {
                attributePoint: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a geometric polygon attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[][] | null} params.xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createPolygonColumn` instead.
     */
    createPolygonAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[][] | null;
        description?: string;
    }): Promise<Models.AttributePolygon>;
    /**
     * Create a geometric polygon attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[][] | null} xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPolygonAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: any[][] | null,
        description?: string,
    ): Promise<Models.AttributePolygon>;
    createPolygonAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: any[][] | null;
                  description?: string;
              }
            | string,
        ...rest: [string?, string?, boolean?, (any[][] | null)?, string?]
    ): Promise<Models.AttributePolygon> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: any[][] | null;
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
                required: boolean;
                xdefault?: any[][] | null;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[][] | null,
                description: rest[4] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/polygon'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributePolygon',
            models: {
                attributePolygon: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a polygon attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[][] | null} params.xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New attribute key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updatePolygonColumn` instead.
     */
    updatePolygonAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[][] | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributePolygon>;
    /**
     * Update a polygon attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[][] | null} xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @param {string | null} newKey - New attribute key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePolygonAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: any[][] | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributePolygon>;
    updatePolygonAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: any[][] | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (any[][] | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributePolygon> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: any[][] | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: any[][] | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as any[][] | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/polygon/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributePolygon',
            models: {
                attributePolygon: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.relatedCollectionId - Related Collection ID.
     * @param {RelationshipType} params.type - Relationship type. Possible values are: oneToOne, oneToMany, manyToOne, manyToMany.
     * @param {boolean} params.twoWay - Is Two Way?
     * @param {string | null} params.key - Attribute Key.
     * @param {string | null} params.twoWayKey - Two Way Attribute Key.
     * @param {RelationMutate} params.onDelete - Delete constraint. Possible values are: cascade, restrict, setNull.
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRelationshipColumn` instead.
     */
    createRelationshipAttribute(params: {
        databaseId: string;
        collectionId: string;
        relatedCollectionId: string;
        type: RelationshipType;
        twoWay?: boolean;
        key?: string | null;
        twoWayKey?: string | null;
        onDelete?: RelationMutate;
        description?: string;
    }): Promise<Models.AttributeRelationship>;
    /**
     * Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} relatedCollectionId - Related Collection ID.
     * @param {RelationshipType} type - Relationship type. Possible values are: oneToOne, oneToMany, manyToOne, manyToMany.
     * @param {boolean} twoWay - Is Two Way?
     * @param {string | null} key - Attribute Key.
     * @param {string | null} twoWayKey - Two Way Attribute Key.
     * @param {RelationMutate} onDelete - Delete constraint. Possible values are: cascade, restrict, setNull.
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRelationshipAttribute(
        databaseId: string,
        collectionId: string,
        relatedCollectionId: string,
        type: RelationshipType,
        twoWay?: boolean,
        key?: string | null,
        twoWayKey?: string | null,
        onDelete?: RelationMutate,
        description?: string,
    ): Promise<Models.AttributeRelationship>;
    createRelationshipAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  relatedCollectionId: string;
                  type: RelationshipType;
                  twoWay?: boolean;
                  key?: string | null;
                  twoWayKey?: string | null;
                  onDelete?: RelationMutate;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            RelationshipType?,
            boolean?,
            (string | null)?,
            (string | null)?,
            RelationMutate?,
            string?,
        ]
    ): Promise<Models.AttributeRelationship> {
        let params: {
            databaseId: string;
            collectionId: string;
            relatedCollectionId: string;
            type: RelationshipType;
            twoWay?: boolean;
            key?: string | null;
            twoWayKey?: string | null;
            onDelete?: RelationMutate;
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
                relatedCollectionId: string;
                type: RelationshipType;
                twoWay?: boolean;
                key?: string | null;
                twoWayKey?: string | null;
                onDelete?: RelationMutate;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                relatedCollectionId: rest[1] as string,
                type: rest[2] as RelationshipType,
                twoWay: rest[3] as boolean,
                key: rest[4] as string | null,
                twoWayKey: rest[5] as string | null,
                onDelete: rest[6] as RelationMutate,
                description: rest[7] as string,
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
        if (typeof relatedCollectionId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "relatedCollectionId"',
            );
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/relationship'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
        const apiPayload: Payload = {};
        if (typeof relatedCollectionId !== 'undefined') {
            apiPayload['relatedCollectionId'] = relatedCollectionId;
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
            root: 'attributeRelationship',
            models: {
                attributeRelationship: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        relationType: '',
                        twoWay: false,
                        twoWayKey: '',
                        onDelete: 'restrict',
                        side: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {RelationMutate} params.onDelete - Delete constraint. Possible values are: cascade, restrict, setNull.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRelationshipColumn` instead.
     */
    updateRelationshipAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        onDelete?: RelationMutate;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeRelationship>;
    /**
     * Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {RelationMutate} onDelete - Delete constraint. Possible values are: cascade, restrict, setNull.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRelationshipAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        onDelete?: RelationMutate,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeRelationship>;
    updateRelationshipAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  onDelete?: RelationMutate;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            RelationMutate?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeRelationship> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            onDelete?: RelationMutate;
            newKey?: string | null;
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
                key: string;
                onDelete?: RelationMutate;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                onDelete: rest[2] as RelationMutate,
                newKey: rest[3] as string | null,
                description: rest[4] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const onDelete = params.onDelete;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/relationship/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
                .replace('{key}', encodeURIComponent(String(key)));
        const apiPayload: Payload = {};
        if (typeof onDelete !== 'undefined') {
            apiPayload['onDelete'] = onDelete;
        }
        if (typeof newKey !== 'undefined') {
            apiPayload['newKey'] = newKey;
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

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeRelationship',
            models: {
                attributeRelationship: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        relationType: '',
                        twoWay: false,
                        twoWayKey: '',
                        onDelete: 'restrict',
                        side: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createStringColumn` instead.
     */
    createStringAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        size: number;
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        encrypt?: boolean;
        description?: string;
    }): Promise<Models.AttributeString>;
    /**
     * Create a string attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {number} size - Attribute size for text attributes, in number of characters.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createStringAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        size: number,
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        encrypt?: boolean,
        description?: string,
    ): Promise<Models.AttributeString>;
    createStringAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  size: number;
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  encrypt?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            number?,
            boolean?,
            (string | null)?,
            boolean?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeString> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            size: number;
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
            encrypt?: boolean;
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
                size: number;
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                encrypt?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                size: rest[2] as number,
                required: rest[3] as boolean,
                xdefault: rest[4] as string | null,
                array: rest[5] as boolean,
                encrypt: rest[6] as boolean,
                description: rest[7] as string,
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
        if (typeof size === 'undefined') {
            throw new AppwriteException('Missing required parameter: "size"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/string'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeString',
            models: {
                attributeString: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        size: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a string attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number | null} params.size - Maximum size of the string attribute.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateStringColumn` instead.
     */
    updateStringAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        size?: number | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeString>;
    /**
     * Update a string attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number | null} size - Maximum size of the string attribute.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateStringAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        size?: number | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeString>;
    updateStringAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  size?: number | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            (number | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeString> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            size?: number | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: string | null;
                size?: number | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                size: rest[4] as number | null,
                newKey: rest[5] as string | null,
                description: rest[6] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const size = params.size;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/string/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeString',
            models: {
                attributeString: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        size: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a text attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeText>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createTextColumn` instead.
     */
    createTextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        encrypt?: boolean;
        description?: string;
    }): Promise<Models.AttributeText>;
    /**
     * Create a text attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeText>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTextAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        encrypt?: boolean,
        description?: string,
    ): Promise<Models.AttributeText>;
    createTextAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  encrypt?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            boolean?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeText> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
            encrypt?: boolean;
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
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                encrypt?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                array: rest[4] as boolean,
                encrypt: rest[5] as boolean,
                description: rest[6] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
        const encrypt = params.encrypt;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/text'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeText',
            models: {
                attributeText: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a text attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeText>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateTextColumn` instead.
     */
    updateTextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeText>;
    /**
     * Update a text attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeText>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTextAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeText>;
    updateTextAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeText> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: string | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/text/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeText',
            models: {
                attributeText: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a URL attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createUrlColumn` instead.
     */
    createUrlAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        description?: string;
    }): Promise<Models.AttributeUrl>;
    /**
     * Create a URL attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createUrlAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        description?: string,
    ): Promise<Models.AttributeUrl>;
    createUrlAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeUrl> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
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
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                array: rest[4] as boolean,
                description: rest[5] as string,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const array = params.array;
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
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/url'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeUrl',
            models: {
                attributeUrl: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        format: 'url',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update an url attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateUrlColumn` instead.
     */
    updateUrlAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeUrl>;
    /**
     * Update an url attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUrlAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeUrl>;
    updateUrlAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeUrl> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: string | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                newKey: rest[4] as string | null,
                description: rest[5] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/url/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeUrl',
            models: {
                attributeUrl: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        format: 'url',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a varchar attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {number} params.size - Attribute size for varchar attributes, in number of characters. Maximum size is 16381.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeVarchar>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createVarcharColumn` instead.
     */
    createVarcharAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        size: number;
        required: boolean;
        xdefault?: string | null;
        array?: boolean;
        encrypt?: boolean;
        description?: string;
    }): Promise<Models.AttributeVarchar>;
    /**
     * Create a varchar attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {number} size - Attribute size for varchar attributes, in number of characters. Maximum size is 16381.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @param {string} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeVarchar>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVarcharAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        size: number,
        required: boolean,
        xdefault?: string | null,
        array?: boolean,
        encrypt?: boolean,
        description?: string,
    ): Promise<Models.AttributeVarchar>;
    createVarcharAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  size: number;
                  required: boolean;
                  xdefault?: string | null;
                  array?: boolean;
                  encrypt?: boolean;
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            number?,
            boolean?,
            (string | null)?,
            boolean?,
            boolean?,
            string?,
        ]
    ): Promise<Models.AttributeVarchar> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            size: number;
            required: boolean;
            xdefault?: string | null;
            array?: boolean;
            encrypt?: boolean;
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
                size: number;
                required: boolean;
                xdefault?: string | null;
                array?: boolean;
                encrypt?: boolean;
                description?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                size: rest[2] as number,
                required: rest[3] as boolean,
                xdefault: rest[4] as string | null,
                array: rest[5] as boolean,
                encrypt: rest[6] as boolean,
                description: rest[7] as string,
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
        if (typeof size === 'undefined') {
            throw new AppwriteException('Missing required parameter: "size"');
        }
        if (typeof required === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "required"',
            );
        }
        const apiPath =
            '/databases/{databaseId}/collections/{collectionId}/attributes/varchar'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                );
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
            root: 'attributeVarchar',
            models: {
                attributeVarchar: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        size: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a varchar attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string | null} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number | null} params.size - Maximum size of the varchar attribute.
     * @param {string | null} params.newKey - New Attribute Key.
     * @param {string | null} params.description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeVarchar>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateVarcharColumn` instead.
     */
    updateVarcharAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string | null;
        size?: number | null;
        newKey?: string | null;
        description?: string | null;
    }): Promise<Models.AttributeVarchar>;
    /**
     * Update a varchar attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string | null} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number | null} size - Maximum size of the varchar attribute.
     * @param {string | null} newKey - New Attribute Key.
     * @param {string | null} description - Optional description for the attribute.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeVarchar>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVarcharAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
        required: boolean,
        xdefault?: string | null,
        size?: number | null,
        newKey?: string | null,
        description?: string | null,
    ): Promise<Models.AttributeVarchar>;
    updateVarcharAttribute(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  key: string;
                  required: boolean;
                  xdefault?: string | null;
                  size?: number | null;
                  newKey?: string | null;
                  description?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            (string | null)?,
            (number | null)?,
            (string | null)?,
            (string | null)?,
        ]
    ): Promise<Models.AttributeVarchar> {
        let params: {
            databaseId: string;
            collectionId: string;
            key: string;
            required: boolean;
            xdefault?: string | null;
            size?: number | null;
            newKey?: string | null;
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
                key: string;
                required: boolean;
                xdefault?: string | null;
                size?: number | null;
                newKey?: string | null;
                description?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                key: rest[1] as string,
                required: rest[2] as boolean,
                xdefault: rest[3] as string | null,
                size: rest[4] as number | null,
                newKey: rest[5] as string | null,
                description: rest[6] as string | null,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const key = params.key;
        const required = params.required;
        const xdefault = params.xdefault;
        const size = params.size;
        const newKey = params.newKey;
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
        if (typeof key === 'undefined' || key === '') {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/varchar/{key}'
                .replace('{databaseId}', encodeURIComponent(String(databaseId)))
                .replace(
                    '{collectionId}',
                    encodeURIComponent(String(collectionId)),
                )
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'attributeVarchar',
            models: {
                attributeVarchar: {
                    defaults: {
                        key: '',
                        description: '',
                        type: '',
                        error: '',
                        required: false,
                        $createdAt: '',
                        $updatedAt: '',
                        size: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get attribute by ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean | Models.AttributeBigint | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributePoint | Models.AttributeLine | Models.AttributePolygon | Models.AttributeVarchar | Models.AttributeText | Models.AttributeMediumtext | Models.AttributeLongtext | Models.AttributeString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getColumn` instead.
     */
    getAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
    }): Promise<
        | Models.AttributeBoolean
        | Models.AttributeBigint
        | Models.AttributeInteger
        | Models.AttributeFloat
        | Models.AttributeEmail
        | Models.AttributeEnum
        | Models.AttributeUrl
        | Models.AttributeIp
        | Models.AttributeDatetime
        | Models.AttributeRelationship
        | Models.AttributePoint
        | Models.AttributeLine
        | Models.AttributePolygon
        | Models.AttributeVarchar
        | Models.AttributeText
        | Models.AttributeMediumtext
        | Models.AttributeLongtext
        | Models.AttributeString
    >;
    /**
     * Get attribute by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean | Models.AttributeBigint | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributePoint | Models.AttributeLine | Models.AttributePolygon | Models.AttributeVarchar | Models.AttributeText | Models.AttributeMediumtext | Models.AttributeLongtext | Models.AttributeString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
    ): Promise<
        | Models.AttributeBoolean
        | Models.AttributeBigint
        | Models.AttributeInteger
        | Models.AttributeFloat
        | Models.AttributeEmail
        | Models.AttributeEnum
        | Models.AttributeUrl
        | Models.AttributeIp
        | Models.AttributeDatetime
        | Models.AttributeRelationship
        | Models.AttributePoint
        | Models.AttributeLine
        | Models.AttributePolygon
        | Models.AttributeVarchar
        | Models.AttributeText
        | Models.AttributeMediumtext
        | Models.AttributeLongtext
        | Models.AttributeString
    >;
    getAttribute(
        paramsOrFirst:
            { databaseId: string; collectionId: string; key: string } | string,
        ...rest: [string?, string?]
    ): Promise<
        | Models.AttributeBoolean
        | Models.AttributeBigint
        | Models.AttributeInteger
        | Models.AttributeFloat
        | Models.AttributeEmail
        | Models.AttributeEnum
        | Models.AttributeUrl
        | Models.AttributeIp
        | Models.AttributeDatetime
        | Models.AttributeRelationship
        | Models.AttributePoint
        | Models.AttributeLine
        | Models.AttributePolygon
        | Models.AttributeVarchar
        | Models.AttributeText
        | Models.AttributeMediumtext
        | Models.AttributeLongtext
        | Models.AttributeString
    > {
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'
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
     * Deletes an attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteColumn` instead.
     */
    deleteAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
    }): Promise<{}>;
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
    deleteAttribute(
        databaseId: string,
        collectionId: string,
        key: string,
    ): Promise<{}>;
    deleteAttribute(
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
            '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'
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
     * Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
     *
     * Documents returned by aggregate, groupBy or distinct queries hold only the attributes they select, group or aggregate, typed as a document types them, with a joined attribute named by its join alias (`alias.attribute`). They have no `$id`, `$sequence`, `$createdAt`, `$updatedAt`, `$permissions`, `$databaseId` or `$collectionId` unless they select or group it, and neither does a right or full join document that no document of this collection matched.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} params.ttl - TTL (seconds) for caching list responses. Responses are stored in an in-memory key-value cache, keyed per project, collection, schema version (attributes and indexes), caller authorization roles, and the exact query — so users with different permissions never share cached entries. Schema changes invalidate cached entries automatically; document writes do not, so choose a TTL you are comfortable serving as stale data. Set to 0 to disable caching. Lists with join queries are not cached. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listRows` instead.
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
     * Documents returned by aggregate, groupBy or distinct queries hold only the attributes they select, group or aggregate, typed as a document types them, with a joined attribute named by its join alias (`alias.attribute`). They have no `$id`, `$sequence`, `$createdAt`, `$updatedAt`, `$permissions`, `$databaseId` or `$collectionId` unless they select or group it, and neither does a right or full join document that no document of this collection matched.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} ttl - TTL (seconds) for caching list responses. Responses are stored in an in-memory key-value cache, keyed per project, collection, schema version (attributes and indexes), caller authorization roles, and the exact query — so users with different permissions never share cached entries. Schema changes invalidate cached entries automatically; document writes do not, so choose a TTL you are comfortable serving as stale data. Set to 0 to disable caching. Lists with join queries are not cached. Must be between 0 and 86400 (24 hours).
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
            '/databases/{databaseId}/collections/{collectionId}/documents'
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
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} params.documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} params.data - Document data as JSON object.
     * @param {string[] | null} params.permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string | null} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRow` instead.
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
        permissions?: string[] | null;
        transactionId?: string | null;
    }): Promise<Document>;
    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} data - Document data as JSON object.
     * @param {string[] | null} permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string | null} transactionId - Transaction ID for staging the operation.
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
        permissions?: string[] | null,
        transactionId?: string | null,
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
                  permissions?: string[] | null;
                  transactionId?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (Document extends Models.DefaultDocument
                ? Partial<Models.Document> & Record<string, any>
                : Partial<Models.Document> &
                      Omit<Document, keyof Models.Document>)?,
            (string[] | null)?,
            (string | null)?,
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
            permissions?: string[] | null;
            transactionId?: string | null;
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
                permissions?: string[] | null;
                transactionId?: string | null;
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
                permissions: rest[3] as string[] | null,
                transactionId: rest[4] as string | null,
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
            '/databases/{databaseId}/collections/{collectionId}/documents'
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
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} params.documents - Array of documents data as JSON objects.
     * @param {string | null} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRows` instead.
     */
    createDocuments<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documents: object[];
        transactionId?: string | null;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} documents - Array of documents data as JSON objects.
     * @param {string | null} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documents: object[],
        transactionId?: string | null,
    ): Promise<Models.DocumentList<Document>>;
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documents: object[];
                  transactionId?: string | null;
              }
            | string,
        ...rest: [string?, object[]?, (string | null)?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
            documents: object[];
            transactionId?: string | null;
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
                transactionId?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documents: rest[1] as object[],
                transactionId: rest[2] as string | null,
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
            '/databases/{databaseId}/collections/{collectionId}/documents'
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
     * Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {object[]} params.documents - Array of document data as JSON objects. May contain partial documents.
     * @param {string | null} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.upsertRows` instead.
     */
    upsertDocuments<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documents: object[];
        transactionId?: string | null;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {object[]} documents - Array of document data as JSON objects. May contain partial documents.
     * @param {string | null} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        documents: object[],
        transactionId?: string | null,
    ): Promise<Models.DocumentList<Document>>;
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  documents: object[];
                  transactionId?: string | null;
              }
            | string,
        ...rest: [string?, object[]?, (string | null)?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
            documents: object[];
            transactionId?: string | null;
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
                transactionId?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documents: rest[1] as object[],
                transactionId: rest[2] as string | null,
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
            '/databases/{databaseId}/collections/{collectionId}/documents'
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
     * @param {string | null} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRows` instead.
     */
    updateDocuments<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        data?: object;
        queries?: string[];
        transactionId?: string | null;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Update all documents that match your queries, if no queries are submitted then all documents are updated. You can pass only specific fields to be updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {object} data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string | null} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        data?: object,
        queries?: string[],
        transactionId?: string | null,
    ): Promise<Models.DocumentList<Document>>;
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  data?: object;
                  queries?: string[];
                  transactionId?: string | null;
              }
            | string,
        ...rest: [string?, object?, string[]?, (string | null)?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
            data?: object;
            queries?: string[];
            transactionId?: string | null;
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
                transactionId?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                data: rest[1] as object,
                queries: rest[2] as string[],
                transactionId: rest[3] as string | null,
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
            '/databases/{databaseId}/collections/{collectionId}/documents'
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteRows` instead.
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
            '/databases/{databaseId}/collections/{collectionId}/documents'
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
     * @param {string | null} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} params.ttl - TTL (seconds) for caching list responses. Responses are stored in an in-memory key-value cache, keyed per project, collection, schema version (attributes and indexes), caller authorization roles, and the exact query — so users with different permissions never share cached entries. Schema changes invalidate cached entries automatically; document writes do not, so choose a TTL you are comfortable serving as stale data. Set to 0 to disable caching. Lists with join queries are not cached. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createQuery` instead.
     */
    createQuery<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        transactionId?: string | null;
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
     * @param {string | null} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @param {number} ttl - TTL (seconds) for caching list responses. Responses are stored in an in-memory key-value cache, keyed per project, collection, schema version (attributes and indexes), caller authorization roles, and the exact query — so users with different permissions never share cached entries. Schema changes invalidate cached entries automatically; document writes do not, so choose a TTL you are comfortable serving as stale data. Set to 0 to disable caching. Lists with join queries are not cached. Must be between 0 and 86400 (24 hours).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createQuery<Document extends Models.Document = Models.DefaultDocument>(
        databaseId: string,
        collectionId: string,
        queries?: string[],
        transactionId?: string | null,
        total?: boolean,
        ttl?: number,
    ): Promise<Models.DocumentList<Document>>;
    createQuery<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  queries?: string[];
                  transactionId?: string | null;
                  total?: boolean;
                  ttl?: number;
              }
            | string,
        ...rest: [string?, string[]?, (string | null)?, boolean?, number?]
    ): Promise<Models.DocumentList<Document>> {
        let params: {
            databaseId: string;
            collectionId: string;
            queries?: string[];
            transactionId?: string | null;
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
                transactionId?: string | null;
                total?: boolean;
                ttl?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[],
                transactionId: rest[2] as string | null,
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
            '/databases/{databaseId}/collections/{collectionId}/documents/query'
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getRow` instead.
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
            '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'
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
     * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} params.data - Document data as JSON object. Include all required attributes of the document to be created or updated.
     * @param {string[] | null} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string | null} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.upsertRow` instead.
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
        permissions?: string[] | null;
        transactionId?: string | null;
    }): Promise<Document>;
    /**
     * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} data - Document data as JSON object. Include all required attributes of the document to be created or updated.
     * @param {string[] | null} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string | null} transactionId - Transaction ID for staging the operation.
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
        permissions?: string[] | null,
        transactionId?: string | null,
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
                  permissions?: string[] | null;
                  transactionId?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (Document extends Models.DefaultDocument
                ? Partial<Models.Document> & Record<string, any>
                : Partial<Models.Document> &
                      Partial<Omit<Document, keyof Models.Document>>)?,
            (string[] | null)?,
            (string | null)?,
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
            permissions?: string[] | null;
            transactionId?: string | null;
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
                permissions?: string[] | null;
                transactionId?: string | null;
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
                permissions: rest[3] as string[] | null,
                transactionId: rest[4] as string | null,
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
            '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'
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
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} params.data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[] | null} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string | null} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRow` instead.
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
        permissions?: string[] | null;
        transactionId?: string | null;
    }): Promise<Document>;
    /**
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[] | null} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string | null} transactionId - Transaction ID for staging the operation.
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
        permissions?: string[] | null,
        transactionId?: string | null,
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
                  permissions?: string[] | null;
                  transactionId?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (Document extends Models.DefaultDocument
                ? Partial<Models.Document> & Record<string, any>
                : Partial<Models.Document> &
                      Partial<Omit<Document, keyof Models.Document>>)?,
            (string[] | null)?,
            (string | null)?,
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
            permissions?: string[] | null;
            transactionId?: string | null;
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
                permissions?: string[] | null;
                transactionId?: string | null;
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
                permissions: rest[3] as string[] | null,
                transactionId: rest[4] as string | null,
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
            '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteRow` instead.
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
            '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'
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
     * Decrement a specific attribute of a document by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {string} params.attribute - Attribute key.
     * @param {number} params.value - Value to increment the attribute by. The value must be a number.
     * @param {number | null} params.min - Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.
     * @param {string | null} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.decrementRowColumn` instead.
     */
    decrementDocumentAttribute<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        attribute: string;
        value?: number;
        min?: number | null;
        transactionId?: string | null;
    }): Promise<Document>;
    /**
     * Decrement a specific attribute of a document by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string} attribute - Attribute key.
     * @param {number} value - Value to increment the attribute by. The value must be a number.
     * @param {number | null} min - Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.
     * @param {string | null} transactionId - Transaction ID for staging the operation.
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
        min?: number | null,
        transactionId?: string | null,
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
                  min?: number | null;
                  transactionId?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string?,
            number?,
            (number | null)?,
            (string | null)?,
        ]
    ): Promise<Document> {
        let params: {
            databaseId: string;
            collectionId: string;
            documentId: string;
            attribute: string;
            value?: number;
            min?: number | null;
            transactionId?: string | null;
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
                min?: number | null;
                transactionId?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                attribute: rest[2] as string,
                value: rest[3] as number,
                min: rest[4] as number | null,
                transactionId: rest[5] as string | null,
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
            '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement'
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
     * Increment a specific attribute of a document by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {string} params.attribute - Attribute key.
     * @param {number} params.value - Value to increment the attribute by. The value must be a number.
     * @param {number | null} params.max - Maximum value for the attribute. If the current value is greater than this value, an error will be thrown.
     * @param {string | null} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.incrementRowColumn` instead.
     */
    incrementDocumentAttribute<
        Document extends Models.Document = Models.DefaultDocument,
    >(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        attribute: string;
        value?: number;
        max?: number | null;
        transactionId?: string | null;
    }): Promise<Document>;
    /**
     * Increment a specific attribute of a document by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string} attribute - Attribute key.
     * @param {number} value - Value to increment the attribute by. The value must be a number.
     * @param {number | null} max - Maximum value for the attribute. If the current value is greater than this value, an error will be thrown.
     * @param {string | null} transactionId - Transaction ID for staging the operation.
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
        max?: number | null,
        transactionId?: string | null,
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
                  max?: number | null;
                  transactionId?: string | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string?,
            number?,
            (number | null)?,
            (string | null)?,
        ]
    ): Promise<Document> {
        let params: {
            databaseId: string;
            collectionId: string;
            documentId: string;
            attribute: string;
            value?: number;
            max?: number | null;
            transactionId?: string | null;
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
                max?: number | null;
                transactionId?: string | null;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                attribute: rest[2] as string,
                value: rest[3] as number,
                max: rest[4] as number | null,
                transactionId: rest[5] as string | null,
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
            '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment'
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listIndexes` instead.
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
            '/databases/{databaseId}/collections/{collectionId}/indexes'
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
     * Attributes can be `key`, `fulltext`, `unique`, `spatial`, and `trigram`. `trigram` is only available on PostgreSQL and lets `contains`, `startsWith`, and `endsWith` queries on string attributes use an index.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @param {DatabasesIndexType} params.type - Index type.
     * @param {string[]} params.attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {OrderBy[]} params.orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} params.lengths - Length of index. Maximum of 100
     * @param {string} params.description - Optional description for the index.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIndex` instead.
     */
    createIndex(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        type: DatabasesIndexType;
        attributes: string[];
        orders?: OrderBy[];
        lengths?: number[];
        description?: string;
    }): Promise<Models.Index>;
    /**
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, `unique`, `spatial`, and `trigram`. `trigram` is only available on PostgreSQL and lets `contains`, `startsWith`, and `endsWith` queries on string attributes use an index.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @param {DatabasesIndexType} type - Index type.
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
        type: DatabasesIndexType,
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
                  type: DatabasesIndexType;
                  attributes: string[];
                  orders?: OrderBy[];
                  lengths?: number[];
                  description?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            DatabasesIndexType?,
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
            type: DatabasesIndexType;
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
                type: DatabasesIndexType;
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
                type: rest[2] as DatabasesIndexType,
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
            '/databases/{databaseId}/collections/{collectionId}/indexes'
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
     * Get an index by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getIndex` instead.
     */
    getIndex(params: {
        databaseId: string;
        collectionId: string;
        key: string;
    }): Promise<Models.Index>;
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
            '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteIndex` instead.
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
            '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'
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
}
