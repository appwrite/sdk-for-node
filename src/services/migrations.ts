import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
    encodePath,
} from '../client';
import type { Models } from '../models';

import { AppwriteMigrationResource } from '../enums/appwrite-migration-resource';
import { OnDuplicate } from '../enums/on-duplicate';
import { FirebaseMigrationResource } from '../enums/firebase-migration-resource';
import { NHostMigrationResource } from '../enums/n-host-migration-resource';
import { SupabaseMigrationResource } from '../enums/supabase-migration-resource';
export class Migrations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all migrations in the current project. This endpoint returns a list of all migrations including their status, progress, and any errors that occurred during the migration process.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, stage, source, destination, resources, resourceId, resourceInternalId, resourceType, parentResourceId, parentResourceInternalId, parentResourceType, destinationResourceId, destinationResourceInternalId, destinationResourceType, statusCounters, resourceData, errors
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationList>}
     */
    list(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.MigrationList>;
    /**
     * List all migrations in the current project. This endpoint returns a list of all migrations including their status, progress, and any errors that occurred during the migration process.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, stage, source, destination, resources, resourceId, resourceInternalId, resourceType, parentResourceId, parentResourceInternalId, parentResourceType, destinationResourceId, destinationResourceInternalId, destinationResourceType, statusCounters, resourceData, errors
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.MigrationList>;
    list(
        paramsOrFirst?:
            { queries?: string[]; search?: string; total?: boolean } | string[],
        ...rest: [string?, boolean?]
    ): Promise<Models.MigrationList> {
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
        const apiPath = '/migrations';
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
            root: 'migrationList',
            models: {
                migrationList: {
                    defaults: {
                        total: 0,
                        migrations: [],
                    },
                    properties: {
                        migrations: {
                            items: 'migration',
                        },
                    },
                },
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Migrate data from another Appwrite project to your current project. This endpoint allows you to migrate resources like databases, collections, documents, users, and files from an existing Appwrite project.
     *
     * @param {AppwriteMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source Appwrite endpoint
     * @param {string} params.projectId - Source Project ID
     * @param {string} params.apiKey - Source API Key
     * @param {OnDuplicate} params.onDuplicate - Behavior when a row with an existing $id is encountered. "fail" (default): abort on first conflict. "skip": silently ignore. "overwrite": replace existing row.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createAppwriteMigration(params: {
        resources: AppwriteMigrationResource[];
        endpoint: string;
        projectId: string;
        apiKey: string;
        onDuplicate?: OnDuplicate;
    }): Promise<Models.Migration>;
    /**
     * Migrate data from another Appwrite project to your current project. This endpoint allows you to migrate resources like databases, collections, documents, users, and files from an existing Appwrite project.
     *
     * @param {AppwriteMigrationResource[]} resources - List of resources to migrate
     * @param {string} endpoint - Source Appwrite endpoint
     * @param {string} projectId - Source Project ID
     * @param {string} apiKey - Source API Key
     * @param {OnDuplicate} onDuplicate - Behavior when a row with an existing $id is encountered. "fail" (default): abort on first conflict. "skip": silently ignore. "overwrite": replace existing row.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAppwriteMigration(
        resources: AppwriteMigrationResource[],
        endpoint: string,
        projectId: string,
        apiKey: string,
        onDuplicate?: OnDuplicate,
    ): Promise<Models.Migration>;
    createAppwriteMigration(
        paramsOrFirst:
            | {
                  resources: AppwriteMigrationResource[];
                  endpoint: string;
                  projectId: string;
                  apiKey: string;
                  onDuplicate?: OnDuplicate;
              }
            | AppwriteMigrationResource[],
        ...rest: [string?, string?, string?, OnDuplicate?]
    ): Promise<Models.Migration> {
        let params: {
            resources: AppwriteMigrationResource[];
            endpoint: string;
            projectId: string;
            apiKey: string;
            onDuplicate?: OnDuplicate;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst) &&
            ('resources' in paramsOrFirst ||
                'endpoint' in paramsOrFirst ||
                'projectId' in paramsOrFirst ||
                'apiKey' in paramsOrFirst ||
                'onDuplicate' in paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                resources: AppwriteMigrationResource[];
                endpoint: string;
                projectId: string;
                apiKey: string;
                onDuplicate?: OnDuplicate;
            };
        } else {
            params = {
                resources: paramsOrFirst as AppwriteMigrationResource[],
                endpoint: rest[0] as string,
                projectId: rest[1] as string,
                apiKey: rest[2] as string,
                onDuplicate: rest[3] as OnDuplicate,
            };
        }

        const resources = params.resources;
        const endpoint = params.endpoint;
        const projectId = params.projectId;
        const apiKey = params.apiKey;
        const onDuplicate = params.onDuplicate;
        if (typeof resources === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resources"',
            );
        }
        if (typeof endpoint === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "endpoint"',
            );
        }
        if (typeof projectId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "projectId"',
            );
        }
        if (typeof apiKey === 'undefined') {
            throw new AppwriteException('Missing required parameter: "apiKey"');
        }
        const apiPath = '/migrations/appwrite';
        const apiPayload: Payload = {};
        if (typeof resources !== 'undefined') {
            apiPayload['resources'] = resources;
        }
        if (typeof endpoint !== 'undefined') {
            apiPayload['endpoint'] = endpoint;
        }
        if (typeof projectId !== 'undefined') {
            apiPayload['projectId'] = projectId;
        }
        if (typeof apiKey !== 'undefined') {
            apiPayload['apiKey'] = apiKey;
        }
        if (typeof onDuplicate !== 'undefined') {
            apiPayload['onDuplicate'] = onDuplicate;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Export documents to a CSV file from your Appwrite database. This endpoint allows you to export documents to a CSV file stored in a secure internal bucket. You'll receive an email with a download link when the export is complete.
     *
     * @param {string} params.databaseId - Database ID containing the source collection.
     * @param {string} params.collectionId - Collection ID to export documents from.
     * @param {string} params.filename - The name of the file to be created for the export, excluding the .csv extension.
     * @param {string[]} params.columns - List of attributes to export. If empty, all attributes will be exported. You can use the `*` wildcard to export all attributes from the collection.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK to filter documents to export. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.delimiter - The character that separates each column value. Default is comma.
     * @param {string} params.enclosure - The character that encloses each column value. Default is double quotes.
     * @param {string} params.escape - The escape character for the enclosure character. Default is double quotes.
     * @param {boolean} params.header - Whether to include the header row with column names. Default is true.
     * @param {boolean} params.notify - Set to true to receive an email when the export is complete. Default is true.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createCSVExport(params: {
        databaseId: string;
        collectionId: string;
        filename: string;
        columns?: string[];
        queries?: string[];
        delimiter?: string;
        enclosure?: string;
        escape?: string;
        header?: boolean;
        notify?: boolean;
    }): Promise<Models.Migration>;
    /**
     * Export documents to a CSV file from your Appwrite database. This endpoint allows you to export documents to a CSV file stored in a secure internal bucket. You'll receive an email with a download link when the export is complete.
     *
     * @param {string} databaseId - Database ID containing the source collection.
     * @param {string} collectionId - Collection ID to export documents from.
     * @param {string} filename - The name of the file to be created for the export, excluding the .csv extension.
     * @param {string[]} columns - List of attributes to export. If empty, all attributes will be exported. You can use the `*` wildcard to export all attributes from the collection.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK to filter documents to export. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} delimiter - The character that separates each column value. Default is comma.
     * @param {string} enclosure - The character that encloses each column value. Default is double quotes.
     * @param {string} escape - The escape character for the enclosure character. Default is double quotes.
     * @param {boolean} header - Whether to include the header row with column names. Default is true.
     * @param {boolean} notify - Set to true to receive an email when the export is complete. Default is true.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCSVExport(
        databaseId: string,
        collectionId: string,
        filename: string,
        columns?: string[],
        queries?: string[],
        delimiter?: string,
        enclosure?: string,
        escape?: string,
        header?: boolean,
        notify?: boolean,
    ): Promise<Models.Migration>;
    createCSVExport(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  filename: string;
                  columns?: string[];
                  queries?: string[];
                  delimiter?: string;
                  enclosure?: string;
                  escape?: string;
                  header?: boolean;
                  notify?: boolean;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string[]?,
            string[]?,
            string?,
            string?,
            string?,
            boolean?,
            boolean?,
        ]
    ): Promise<Models.Migration> {
        let params: {
            databaseId: string;
            collectionId: string;
            filename: string;
            columns?: string[];
            queries?: string[];
            delimiter?: string;
            enclosure?: string;
            escape?: string;
            header?: boolean;
            notify?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                filename: string;
                columns?: string[];
                queries?: string[];
                delimiter?: string;
                enclosure?: string;
                escape?: string;
                header?: boolean;
                notify?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                filename: rest[1] as string,
                columns: rest[2] as string[],
                queries: rest[3] as string[],
                delimiter: rest[4] as string,
                enclosure: rest[5] as string,
                escape: rest[6] as string,
                header: rest[7] as boolean,
                notify: rest[8] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const filename = params.filename;
        const columns = params.columns;
        const queries = params.queries;
        const delimiter = params.delimiter;
        const enclosure = params.enclosure;
        const escape = params.escape;
        const header = params.header;
        const notify = params.notify;
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
        if (typeof filename === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "filename"',
            );
        }
        const apiPath = '/migrations/csv/exports';
        const apiPayload: Payload = {};
        if (typeof databaseId !== 'undefined') {
            apiPayload['databaseId'] = databaseId;
        }
        if (typeof collectionId !== 'undefined') {
            apiPayload['collectionId'] = collectionId;
        }
        if (typeof filename !== 'undefined') {
            apiPayload['filename'] = filename;
        }
        if (typeof columns !== 'undefined') {
            apiPayload['columns'] = columns;
        }
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof delimiter !== 'undefined') {
            apiPayload['delimiter'] = delimiter;
        }
        if (typeof enclosure !== 'undefined') {
            apiPayload['enclosure'] = enclosure;
        }
        if (typeof escape !== 'undefined') {
            apiPayload['escape'] = escape;
        }
        if (typeof header !== 'undefined') {
            apiPayload['header'] = header;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Import documents from a CSV file into your Appwrite database. This endpoint allows you to import documents from a CSV file uploaded to Appwrite Storage bucket.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @param {string} params.databaseId - Database ID containing the target collection.
     * @param {string} params.collectionId - Collection ID to import documents into.
     * @param {boolean} params.internalFile - Is the file stored in an internal bucket?
     * @param {OnDuplicate} params.onDuplicate - Behavior when a row with an existing $id is encountered. "fail" (default): abort on first conflict. "skip": silently ignore. "overwrite": replace existing row.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createCSVImport(params: {
        bucketId: string;
        fileId: string;
        databaseId: string;
        collectionId: string;
        internalFile?: boolean;
        onDuplicate?: OnDuplicate;
    }): Promise<Models.Migration>;
    /**
     * Import documents from a CSV file into your Appwrite database. This endpoint allows you to import documents from a CSV file uploaded to Appwrite Storage bucket.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @param {string} databaseId - Database ID containing the target collection.
     * @param {string} collectionId - Collection ID to import documents into.
     * @param {boolean} internalFile - Is the file stored in an internal bucket?
     * @param {OnDuplicate} onDuplicate - Behavior when a row with an existing $id is encountered. "fail" (default): abort on first conflict. "skip": silently ignore. "overwrite": replace existing row.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCSVImport(
        bucketId: string,
        fileId: string,
        databaseId: string,
        collectionId: string,
        internalFile?: boolean,
        onDuplicate?: OnDuplicate,
    ): Promise<Models.Migration>;
    createCSVImport(
        paramsOrFirst:
            | {
                  bucketId: string;
                  fileId: string;
                  databaseId: string;
                  collectionId: string;
                  internalFile?: boolean;
                  onDuplicate?: OnDuplicate;
              }
            | string,
        ...rest: [string?, string?, string?, boolean?, OnDuplicate?]
    ): Promise<Models.Migration> {
        let params: {
            bucketId: string;
            fileId: string;
            databaseId: string;
            collectionId: string;
            internalFile?: boolean;
            onDuplicate?: OnDuplicate;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                bucketId: string;
                fileId: string;
                databaseId: string;
                collectionId: string;
                internalFile?: boolean;
                onDuplicate?: OnDuplicate;
            };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                databaseId: rest[1] as string,
                collectionId: rest[2] as string,
                internalFile: rest[3] as boolean,
                onDuplicate: rest[4] as OnDuplicate,
            };
        }

        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const internalFile = params.internalFile;
        const onDuplicate = params.onDuplicate;
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "bucketId"',
            );
        }
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }
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
        const apiPath = '/migrations/csv/imports';
        const apiPayload: Payload = {};
        if (typeof bucketId !== 'undefined') {
            apiPayload['bucketId'] = bucketId;
        }
        if (typeof fileId !== 'undefined') {
            apiPayload['fileId'] = fileId;
        }
        if (typeof databaseId !== 'undefined') {
            apiPayload['databaseId'] = databaseId;
        }
        if (typeof collectionId !== 'undefined') {
            apiPayload['collectionId'] = collectionId;
        }
        if (typeof internalFile !== 'undefined') {
            apiPayload['internalFile'] = internalFile;
        }
        if (typeof onDuplicate !== 'undefined') {
            apiPayload['onDuplicate'] = onDuplicate;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Migrate data from a Firebase project to your Appwrite project. This endpoint allows you to migrate resources like authentication and other supported services from a Firebase project.
     *
     * @param {FirebaseMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createFirebaseMigration(params: {
        resources: FirebaseMigrationResource[];
        serviceAccount: string;
    }): Promise<Models.Migration>;
    /**
     * Migrate data from a Firebase project to your Appwrite project. This endpoint allows you to migrate resources like authentication and other supported services from a Firebase project.
     *
     * @param {FirebaseMigrationResource[]} resources - List of resources to migrate
     * @param {string} serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFirebaseMigration(
        resources: FirebaseMigrationResource[],
        serviceAccount: string,
    ): Promise<Models.Migration>;
    createFirebaseMigration(
        paramsOrFirst:
            | { resources: FirebaseMigrationResource[]; serviceAccount: string }
            | FirebaseMigrationResource[],
        ...rest: [string?]
    ): Promise<Models.Migration> {
        let params: {
            resources: FirebaseMigrationResource[];
            serviceAccount: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst) &&
            ('resources' in paramsOrFirst || 'serviceAccount' in paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                resources: FirebaseMigrationResource[];
                serviceAccount: string;
            };
        } else {
            params = {
                resources: paramsOrFirst as FirebaseMigrationResource[],
                serviceAccount: rest[0] as string,
            };
        }

        const resources = params.resources;
        const serviceAccount = params.serviceAccount;
        if (typeof resources === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resources"',
            );
        }
        if (typeof serviceAccount === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "serviceAccount"',
            );
        }
        const apiPath = '/migrations/firebase';
        const apiPayload: Payload = {};
        if (typeof resources !== 'undefined') {
            apiPayload['resources'] = resources;
        }
        if (typeof serviceAccount !== 'undefined') {
            apiPayload['serviceAccount'] = serviceAccount;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Export documents to a JSON file from your Appwrite database. This endpoint allows you to export documents to a JSON file stored in a secure internal bucket. You'll receive an email with a download link when the export is complete.
     *
     *
     * @param {string} params.databaseId - Database ID containing the source collection.
     * @param {string} params.collectionId - Collection ID to export documents from.
     * @param {string} params.filename - The name of the file to be created for the export, excluding the .json extension.
     * @param {string[]} params.columns - List of attributes to export. If empty, all attributes will be exported. You can use the `*` wildcard to export all attributes from the collection.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK to filter documents to export. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {boolean} params.notify - Set to true to receive an email when the export is complete. Default is true.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createJSONExport(params: {
        databaseId: string;
        collectionId: string;
        filename: string;
        columns?: string[];
        queries?: string[];
        notify?: boolean;
    }): Promise<Models.Migration>;
    /**
     * Export documents to a JSON file from your Appwrite database. This endpoint allows you to export documents to a JSON file stored in a secure internal bucket. You'll receive an email with a download link when the export is complete.
     *
     *
     * @param {string} databaseId - Database ID containing the source collection.
     * @param {string} collectionId - Collection ID to export documents from.
     * @param {string} filename - The name of the file to be created for the export, excluding the .json extension.
     * @param {string[]} columns - List of attributes to export. If empty, all attributes will be exported. You can use the `*` wildcard to export all attributes from the collection.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK to filter documents to export. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {boolean} notify - Set to true to receive an email when the export is complete. Default is true.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createJSONExport(
        databaseId: string,
        collectionId: string,
        filename: string,
        columns?: string[],
        queries?: string[],
        notify?: boolean,
    ): Promise<Models.Migration>;
    createJSONExport(
        paramsOrFirst:
            | {
                  databaseId: string;
                  collectionId: string;
                  filename: string;
                  columns?: string[];
                  queries?: string[];
                  notify?: boolean;
              }
            | string,
        ...rest: [string?, string?, string[]?, string[]?, boolean?]
    ): Promise<Models.Migration> {
        let params: {
            databaseId: string;
            collectionId: string;
            filename: string;
            columns?: string[];
            queries?: string[];
            notify?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                collectionId: string;
                filename: string;
                columns?: string[];
                queries?: string[];
                notify?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                filename: rest[1] as string,
                columns: rest[2] as string[],
                queries: rest[3] as string[],
                notify: rest[4] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const filename = params.filename;
        const columns = params.columns;
        const queries = params.queries;
        const notify = params.notify;
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
        if (typeof filename === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "filename"',
            );
        }
        const apiPath = '/migrations/json/exports';
        const apiPayload: Payload = {};
        if (typeof databaseId !== 'undefined') {
            apiPayload['databaseId'] = databaseId;
        }
        if (typeof collectionId !== 'undefined') {
            apiPayload['collectionId'] = collectionId;
        }
        if (typeof filename !== 'undefined') {
            apiPayload['filename'] = filename;
        }
        if (typeof columns !== 'undefined') {
            apiPayload['columns'] = columns;
        }
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Import documents from a JSON file into your Appwrite database. This endpoint allows you to import documents from a JSON file uploaded to Appwrite Storage bucket.
     *
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @param {string} params.databaseId - Database ID containing the target collection.
     * @param {string} params.collectionId - Collection ID to import documents into.
     * @param {boolean} params.internalFile - Is the file stored in an internal bucket?
     * @param {OnDuplicate} params.onDuplicate - Behavior when a row with an existing $id is encountered. "fail" (default): abort on first conflict. "skip": silently ignore. "overwrite": replace existing row.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createJSONImport(params: {
        bucketId: string;
        fileId: string;
        databaseId: string;
        collectionId: string;
        internalFile?: boolean;
        onDuplicate?: OnDuplicate;
    }): Promise<Models.Migration>;
    /**
     * Import documents from a JSON file into your Appwrite database. This endpoint allows you to import documents from a JSON file uploaded to Appwrite Storage bucket.
     *
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @param {string} databaseId - Database ID containing the target collection.
     * @param {string} collectionId - Collection ID to import documents into.
     * @param {boolean} internalFile - Is the file stored in an internal bucket?
     * @param {OnDuplicate} onDuplicate - Behavior when a row with an existing $id is encountered. "fail" (default): abort on first conflict. "skip": silently ignore. "overwrite": replace existing row.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createJSONImport(
        bucketId: string,
        fileId: string,
        databaseId: string,
        collectionId: string,
        internalFile?: boolean,
        onDuplicate?: OnDuplicate,
    ): Promise<Models.Migration>;
    createJSONImport(
        paramsOrFirst:
            | {
                  bucketId: string;
                  fileId: string;
                  databaseId: string;
                  collectionId: string;
                  internalFile?: boolean;
                  onDuplicate?: OnDuplicate;
              }
            | string,
        ...rest: [string?, string?, string?, boolean?, OnDuplicate?]
    ): Promise<Models.Migration> {
        let params: {
            bucketId: string;
            fileId: string;
            databaseId: string;
            collectionId: string;
            internalFile?: boolean;
            onDuplicate?: OnDuplicate;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                bucketId: string;
                fileId: string;
                databaseId: string;
                collectionId: string;
                internalFile?: boolean;
                onDuplicate?: OnDuplicate;
            };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                databaseId: rest[1] as string,
                collectionId: rest[2] as string,
                internalFile: rest[3] as boolean,
                onDuplicate: rest[4] as OnDuplicate,
            };
        }

        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const internalFile = params.internalFile;
        const onDuplicate = params.onDuplicate;
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "bucketId"',
            );
        }
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }
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
        const apiPath = '/migrations/json/imports';
        const apiPayload: Payload = {};
        if (typeof bucketId !== 'undefined') {
            apiPayload['bucketId'] = bucketId;
        }
        if (typeof fileId !== 'undefined') {
            apiPayload['fileId'] = fileId;
        }
        if (typeof databaseId !== 'undefined') {
            apiPayload['databaseId'] = databaseId;
        }
        if (typeof collectionId !== 'undefined') {
            apiPayload['collectionId'] = collectionId;
        }
        if (typeof internalFile !== 'undefined') {
            apiPayload['internalFile'] = internalFile;
        }
        if (typeof onDuplicate !== 'undefined') {
            apiPayload['onDuplicate'] = onDuplicate;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Migrate data from an NHost project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from an NHost project.
     *
     * @param {NHostMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.subdomain - Source's Subdomain
     * @param {string} params.region - Source's Region
     * @param {string} params.adminSecret - Source's Admin Secret
     * @param {string} params.database - Source's Database Name
     * @param {string} params.username - Source's Database Username
     * @param {string} params.password - Source's Database Password
     * @param {number} params.port - Source's Database Port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createNHostMigration(params: {
        resources: NHostMigrationResource[];
        subdomain: string;
        region: string;
        adminSecret: string;
        database: string;
        username: string;
        password: string;
        port?: number;
    }): Promise<Models.Migration>;
    /**
     * Migrate data from an NHost project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from an NHost project.
     *
     * @param {NHostMigrationResource[]} resources - List of resources to migrate
     * @param {string} subdomain - Source's Subdomain
     * @param {string} region - Source's Region
     * @param {string} adminSecret - Source's Admin Secret
     * @param {string} database - Source's Database Name
     * @param {string} username - Source's Database Username
     * @param {string} password - Source's Database Password
     * @param {number} port - Source's Database Port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createNHostMigration(
        resources: NHostMigrationResource[],
        subdomain: string,
        region: string,
        adminSecret: string,
        database: string,
        username: string,
        password: string,
        port?: number,
    ): Promise<Models.Migration>;
    createNHostMigration(
        paramsOrFirst:
            | {
                  resources: NHostMigrationResource[];
                  subdomain: string;
                  region: string;
                  adminSecret: string;
                  database: string;
                  username: string;
                  password: string;
                  port?: number;
              }
            | NHostMigrationResource[],
        ...rest: [string?, string?, string?, string?, string?, string?, number?]
    ): Promise<Models.Migration> {
        let params: {
            resources: NHostMigrationResource[];
            subdomain: string;
            region: string;
            adminSecret: string;
            database: string;
            username: string;
            password: string;
            port?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst) &&
            ('resources' in paramsOrFirst ||
                'subdomain' in paramsOrFirst ||
                'region' in paramsOrFirst ||
                'adminSecret' in paramsOrFirst ||
                'database' in paramsOrFirst ||
                'username' in paramsOrFirst ||
                'password' in paramsOrFirst ||
                'port' in paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                resources: NHostMigrationResource[];
                subdomain: string;
                region: string;
                adminSecret: string;
                database: string;
                username: string;
                password: string;
                port?: number;
            };
        } else {
            params = {
                resources: paramsOrFirst as NHostMigrationResource[],
                subdomain: rest[0] as string,
                region: rest[1] as string,
                adminSecret: rest[2] as string,
                database: rest[3] as string,
                username: rest[4] as string,
                password: rest[5] as string,
                port: rest[6] as number,
            };
        }

        const resources = params.resources;
        const subdomain = params.subdomain;
        const region = params.region;
        const adminSecret = params.adminSecret;
        const database = params.database;
        const username = params.username;
        const password = params.password;
        const port = params.port;
        if (typeof resources === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resources"',
            );
        }
        if (typeof subdomain === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "subdomain"',
            );
        }
        if (typeof region === 'undefined') {
            throw new AppwriteException('Missing required parameter: "region"');
        }
        if (typeof adminSecret === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "adminSecret"',
            );
        }
        if (typeof database === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "database"',
            );
        }
        if (typeof username === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "username"',
            );
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "password"',
            );
        }
        const apiPath = '/migrations/nhost';
        const apiPayload: Payload = {};
        if (typeof resources !== 'undefined') {
            apiPayload['resources'] = resources;
        }
        if (typeof subdomain !== 'undefined') {
            apiPayload['subdomain'] = subdomain;
        }
        if (typeof region !== 'undefined') {
            apiPayload['region'] = region;
        }
        if (typeof adminSecret !== 'undefined') {
            apiPayload['adminSecret'] = adminSecret;
        }
        if (typeof database !== 'undefined') {
            apiPayload['database'] = database;
        }
        if (typeof username !== 'undefined') {
            apiPayload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            apiPayload['password'] = password;
        }
        if (typeof port !== 'undefined') {
            apiPayload['port'] = port;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Migrate data from a Supabase project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from a Supabase project.
     *
     * @param {SupabaseMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source's Supabase Endpoint
     * @param {string} params.apiKey - Source's API Key
     * @param {string} params.databaseHost - Source's Database Host
     * @param {string} params.username - Source's Database Username
     * @param {string} params.password - Source's Database Password
     * @param {number} params.port - Source's Database Port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createSupabaseMigration(params: {
        resources: SupabaseMigrationResource[];
        endpoint: string;
        apiKey: string;
        databaseHost: string;
        username: string;
        password: string;
        port?: number;
    }): Promise<Models.Migration>;
    /**
     * Migrate data from a Supabase project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from a Supabase project.
     *
     * @param {SupabaseMigrationResource[]} resources - List of resources to migrate
     * @param {string} endpoint - Source's Supabase Endpoint
     * @param {string} apiKey - Source's API Key
     * @param {string} databaseHost - Source's Database Host
     * @param {string} username - Source's Database Username
     * @param {string} password - Source's Database Password
     * @param {number} port - Source's Database Port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSupabaseMigration(
        resources: SupabaseMigrationResource[],
        endpoint: string,
        apiKey: string,
        databaseHost: string,
        username: string,
        password: string,
        port?: number,
    ): Promise<Models.Migration>;
    createSupabaseMigration(
        paramsOrFirst:
            | {
                  resources: SupabaseMigrationResource[];
                  endpoint: string;
                  apiKey: string;
                  databaseHost: string;
                  username: string;
                  password: string;
                  port?: number;
              }
            | SupabaseMigrationResource[],
        ...rest: [string?, string?, string?, string?, string?, number?]
    ): Promise<Models.Migration> {
        let params: {
            resources: SupabaseMigrationResource[];
            endpoint: string;
            apiKey: string;
            databaseHost: string;
            username: string;
            password: string;
            port?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst) &&
            ('resources' in paramsOrFirst ||
                'endpoint' in paramsOrFirst ||
                'apiKey' in paramsOrFirst ||
                'databaseHost' in paramsOrFirst ||
                'username' in paramsOrFirst ||
                'password' in paramsOrFirst ||
                'port' in paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                resources: SupabaseMigrationResource[];
                endpoint: string;
                apiKey: string;
                databaseHost: string;
                username: string;
                password: string;
                port?: number;
            };
        } else {
            params = {
                resources: paramsOrFirst as SupabaseMigrationResource[],
                endpoint: rest[0] as string,
                apiKey: rest[1] as string,
                databaseHost: rest[2] as string,
                username: rest[3] as string,
                password: rest[4] as string,
                port: rest[5] as number,
            };
        }

        const resources = params.resources;
        const endpoint = params.endpoint;
        const apiKey = params.apiKey;
        const databaseHost = params.databaseHost;
        const username = params.username;
        const password = params.password;
        const port = params.port;
        if (typeof resources === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resources"',
            );
        }
        if (typeof endpoint === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "endpoint"',
            );
        }
        if (typeof apiKey === 'undefined') {
            throw new AppwriteException('Missing required parameter: "apiKey"');
        }
        if (typeof databaseHost === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseHost"',
            );
        }
        if (typeof username === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "username"',
            );
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "password"',
            );
        }
        const apiPath = '/migrations/supabase';
        const apiPayload: Payload = {};
        if (typeof resources !== 'undefined') {
            apiPayload['resources'] = resources;
        }
        if (typeof endpoint !== 'undefined') {
            apiPayload['endpoint'] = endpoint;
        }
        if (typeof apiKey !== 'undefined') {
            apiPayload['apiKey'] = apiKey;
        }
        if (typeof databaseHost !== 'undefined') {
            apiPayload['databaseHost'] = databaseHost;
        }
        if (typeof username !== 'undefined') {
            apiPayload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            apiPayload['password'] = password;
        }
        if (typeof port !== 'undefined') {
            apiPayload['port'] = port;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a migration by its unique ID. This endpoint returns detailed information about a specific migration including its current status, progress, and any errors that occurred during the migration process.
     *
     * @param {string} params.migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    get(params: { migrationId: string }): Promise<Models.Migration>;
    /**
     * Get a migration by its unique ID. This endpoint returns detailed information about a specific migration including its current status, progress, and any errors that occurred during the migration process.
     *
     * @param {string} migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(migrationId: string): Promise<Models.Migration>;
    get(
        paramsOrFirst: { migrationId: string } | string,
    ): Promise<Models.Migration> {
        let params: { migrationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { migrationId: string };
        } else {
            params = {
                migrationId: paramsOrFirst as string,
            };
        }

        const migrationId = params.migrationId;
        if (typeof migrationId === 'undefined' || migrationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "migrationId"',
            );
        }
        const apiPath = '/migrations/{migrationId}'.replace(
            '{migrationId}',
            encodePath(migrationId),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Retry a failed migration. This endpoint allows you to retry a migration that has previously failed.
     *
     * @param {string} params.migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    retry(params: { migrationId: string }): Promise<Models.Migration>;
    /**
     * Retry a failed migration. This endpoint allows you to retry a migration that has previously failed.
     *
     * @param {string} migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    retry(migrationId: string): Promise<Models.Migration>;
    retry(
        paramsOrFirst: { migrationId: string } | string,
    ): Promise<Models.Migration> {
        let params: { migrationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { migrationId: string };
        } else {
            params = {
                migrationId: paramsOrFirst as string,
            };
        }

        const migrationId = params.migrationId;
        if (typeof migrationId === 'undefined' || migrationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "migrationId"',
            );
        }
        const apiPath = '/migrations/{migrationId}'.replace(
            '{migrationId}',
            encodePath(migrationId),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'migration',
            models: {
                migration: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        status: '',
                        stage: '',
                        source: '',
                        destination: 'Appwrite',
                        resources: [],
                        resourceId: '',
                        resourceInternalId: '',
                        resourceType: '',
                        parentResourceId: '',
                        parentResourceInternalId: '',
                        parentResourceType: '',
                        destinationResourceId: '',
                        destinationResourceInternalId: '',
                        destinationResourceType: '',
                        statusCounters: {},
                        resourceData: [],
                        errors: [],
                        options: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Delete a migration by its unique ID. This endpoint allows you to remove a migration from your project's migration history.
     *
     * @param {string} params.migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { migrationId: string }): Promise<{}>;
    /**
     * Delete a migration by its unique ID. This endpoint allows you to remove a migration from your project's migration history.
     *
     * @param {string} migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(migrationId: string): Promise<{}>;
    delete(paramsOrFirst: { migrationId: string } | string): Promise<{}> {
        let params: { migrationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { migrationId: string };
        } else {
            params = {
                migrationId: paramsOrFirst as string,
            };
        }

        const migrationId = params.migrationId;
        if (typeof migrationId === 'undefined' || migrationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "migrationId"',
            );
        }
        const apiPath = '/migrations/{migrationId}'.replace(
            '{migrationId}',
            encodePath(migrationId),
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
}
