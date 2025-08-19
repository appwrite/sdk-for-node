import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Type } from '../enums/type';
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
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.list` instead.
     */
    list(params: { queries?: string[], search?: string  }): Promise<Models.DatabaseList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * list(queries?: string[], search?: string): Promise<Models.DatabaseList>;
     *
     * // New (object based)
     * list(params: { queries?: string[], search?: string  }): Promise<Models.DatabaseList>;
     */
    list(queries?: string[], search?: string): Promise<Models.DatabaseList>;
    list(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.DatabaseList> {
        let params: { queries?: string[], search?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/databases';
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
     * @param {string} databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @param {Type} type - Database type.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createDatabase` instead.
     */
    create(params: { databaseId: string, name: string, enabled?: boolean, type?: Type  }): Promise<Models.Database>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * create(databaseId: string, name: string, enabled?: boolean, type?: Type): Promise<Models.Database>;
     *
     * // New (object based)
     * create(params: { databaseId: string, name: string, enabled?: boolean, type?: Type  }): Promise<Models.Database>;
     */
    create(databaseId: string, name: string, enabled?: boolean, type?: Type): Promise<Models.Database>;
    create(
        paramsOrFirst: { databaseId: string, name: string, enabled?: boolean, type?: Type } | string,
        ...rest: [(string)?, (boolean)?, (Type)?]    
    ): Promise<Models.Database> {
        let params: { databaseId: string, name: string, enabled?: boolean, type?: Type };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, name: string, enabled?: boolean, type?: Type };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                type: rest[2] as Type            
            };
        }
        
        const databaseId = params.databaseId;
        const name = params.name;
        const enabled = params.enabled;
        const type = params.type;

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
        if (typeof type !== 'undefined') {
            payload['type'] = type;
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
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.get` instead.
     */
    get(params: { databaseId: string  }): Promise<Models.Database>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * get(databaseId: string): Promise<Models.Database>;
     *
     * // New (object based)
     * get(params: { databaseId: string  }): Promise<Models.Database>;
     */
    get(databaseId: string): Promise<Models.Database>;
    get(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.Database> {
        let params: { databaseId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.update` instead.
     */
    update(params: { databaseId: string, name: string, enabled?: boolean  }): Promise<Models.Database>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * update(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database>;
     *
     * // New (object based)
     * update(params: { databaseId: string, name: string, enabled?: boolean  }): Promise<Models.Database>;
     */
    update(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database>;
    update(
        paramsOrFirst: { databaseId: string, name: string, enabled?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.Database> {
        let params: { databaseId: string, name: string, enabled?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, name: string, enabled?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.delete` instead.
     */
    delete(params: { databaseId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * delete(databaseId: string): Promise<{}>;
     *
     * // New (object based)
     * delete(params: { databaseId: string  }): Promise<{}>;
     */
    delete(databaseId: string): Promise<{}>;
    delete(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<{}> {
        let params: { databaseId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.CollectionList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.listTables` instead.
     */
    listCollections(params: { databaseId: string, queries?: string[], search?: string  }): Promise<Models.CollectionList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listCollections(databaseId: string, queries?: string[], search?: string): Promise<Models.CollectionList>;
     *
     * // New (object based)
     * listCollections(params: { databaseId: string, queries?: string[], search?: string  }): Promise<Models.CollectionList>;
     */
    listCollections(databaseId: string, queries?: string[], search?: string): Promise<Models.CollectionList>;
    listCollections(
        paramsOrFirst: { databaseId: string, queries?: string[], search?: string } | string,
        ...rest: [(string[])?, (string)?]    
    ): Promise<Models.CollectionList> {
        let params: { databaseId: string, queries?: string[], search?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, queries?: string[], search?: string };
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

        const apiPath = '/databases/{databaseId}/collections'.replace('{databaseId}', databaseId);
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createTable` instead.
     */
    createCollection(params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean  }): Promise<Models.Collection>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
     *
     * // New (object based)
     * createCollection(params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean  }): Promise<Models.Collection>;
     */
    createCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
    createCollection(
        paramsOrFirst: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (boolean)?]    
    ): Promise<Models.Collection> {
        let params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.getTable` instead.
     */
    getCollection(params: { databaseId: string, collectionId: string  }): Promise<Models.Collection>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getCollection(databaseId: string, collectionId: string): Promise<Models.Collection>;
     *
     * // New (object based)
     * getCollection(params: { databaseId: string, collectionId: string  }): Promise<Models.Collection>;
     */
    getCollection(databaseId: string, collectionId: string): Promise<Models.Collection>;
    getCollection(
        paramsOrFirst: { databaseId: string, collectionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Collection> {
        let params: { databaseId: string, collectionId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateTable` instead.
     */
    updateCollection(params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean  }): Promise<Models.Collection>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
     *
     * // New (object based)
     * updateCollection(params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean  }): Promise<Models.Collection>;
     */
    updateCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
    updateCollection(
        paramsOrFirst: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (boolean)?]    
    ): Promise<Models.Collection> {
        let params: { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.deleteTable` instead.
     */
    deleteCollection(params: { databaseId: string, collectionId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteCollection(databaseId: string, collectionId: string): Promise<{}>;
     *
     * // New (object based)
     * deleteCollection(params: { databaseId: string, collectionId: string  }): Promise<{}>;
     */
    deleteCollection(databaseId: string, collectionId: string): Promise<{}>;
    deleteCollection(
        paramsOrFirst: { databaseId: string, collectionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.listColumns` instead.
     */
    listAttributes(params: { databaseId: string, collectionId: string, queries?: string[]  }): Promise<Models.AttributeList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listAttributes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.AttributeList>;
     *
     * // New (object based)
     * listAttributes(params: { databaseId: string, collectionId: string, queries?: string[]  }): Promise<Models.AttributeList>;
     */
    listAttributes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.AttributeList>;
    listAttributes(
        paramsOrFirst: { databaseId: string, collectionId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.AttributeList> {
        let params: { databaseId: string, collectionId: string, queries?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {boolean} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createBooleanColumn` instead.
     */
    createBooleanAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean  }): Promise<Models.AttributeBoolean>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean>;
     *
     * // New (object based)
     * createBooleanAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean  }): Promise<Models.AttributeBoolean>;
     */
    createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean>;
    createBooleanAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (boolean)?, (boolean)?]    
    ): Promise<Models.AttributeBoolean> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {boolean} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateBooleanColumn` instead.
     */
    updateBooleanAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string  }): Promise<Models.AttributeBoolean>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.AttributeBoolean>;
     *
     * // New (object based)
     * updateBooleanAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string  }): Promise<Models.AttributeBoolean>;
     */
    updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.AttributeBoolean>;
    updateBooleanAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (boolean)?, (string)?]    
    ): Promise<Models.AttributeBoolean> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createDatetimeColumn` instead.
     */
    createDatetimeAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeDatetime>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeDatetime>;
     *
     * // New (object based)
     * createDatetimeAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeDatetime>;
     */
    createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeDatetime>;
    createDatetimeAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeDatetime> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateDatetimeColumn` instead.
     */
    updateDatetimeAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeDatetime>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeDatetime>;
     *
     * // New (object based)
     * updateDatetimeAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeDatetime>;
     */
    updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeDatetime>;
    updateDatetimeAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeDatetime> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createEmailColumn` instead.
     */
    createEmailAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeEmail>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail>;
     *
     * // New (object based)
     * createEmailAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeEmail>;
     */
    createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail>;
    createEmailAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeEmail> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateEmailColumn` instead.
     */
    updateEmailAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeEmail>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEmail>;
     *
     * // New (object based)
     * updateEmailAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeEmail>;
     */
    updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEmail>;
    updateEmailAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeEmail> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {string[]} elements - Array of enum values.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createEnumColumn` instead.
     */
    createEnumAttribute(params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeEnum>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum>;
     *
     * // New (object based)
     * createEnumAttribute(params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeEnum>;
     */
    createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum>;
    createEnumAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeEnum> {
        let params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {string[]} elements - Updated list of enum values.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateEnumColumn` instead.
     */
    updateEnumAttribute(params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeEnum>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEnum>;
     *
     * // New (object based)
     * updateEnumAttribute(params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeEnum>;
     */
    updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEnum>;
    updateEnumAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (string[])?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeEnum> {
        let params: { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string };
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createFloatColumn` instead.
     */
    createFloatAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean  }): Promise<Models.AttributeFloat>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat>;
     *
     * // New (object based)
     * createFloatAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean  }): Promise<Models.AttributeFloat>;
     */
    createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat>;
    createFloatAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (boolean)?]    
    ): Promise<Models.AttributeFloat> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateFloatColumn` instead.
     */
    updateFloatAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string  }): Promise<Models.AttributeFloat>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.AttributeFloat>;
     *
     * // New (object based)
     * updateFloatAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string  }): Promise<Models.AttributeFloat>;
     */
    updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.AttributeFloat>;
    updateFloatAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.AttributeFloat> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createIntegerColumn` instead.
     */
    createIntegerAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean  }): Promise<Models.AttributeInteger>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger>;
     *
     * // New (object based)
     * createIntegerAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean  }): Promise<Models.AttributeInteger>;
     */
    createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger>;
    createIntegerAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (boolean)?]    
    ): Promise<Models.AttributeInteger> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean };
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateIntegerColumn` instead.
     */
    updateIntegerAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string  }): Promise<Models.AttributeInteger>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.AttributeInteger>;
     *
     * // New (object based)
     * updateIntegerAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string  }): Promise<Models.AttributeInteger>;
     */
    updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.AttributeInteger>;
    updateIntegerAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.AttributeInteger> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createIpColumn` instead.
     */
    createIpAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeIp>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp>;
     *
     * // New (object based)
     * createIpAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeIp>;
     */
    createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp>;
    createIpAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeIp> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateIpColumn` instead.
     */
    updateIpAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeIp>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeIp>;
     *
     * // New (object based)
     * updateIpAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeIp>;
     */
    updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeIp>;
    updateIpAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeIp> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createRelationshipColumn` instead.
     */
    createRelationshipAttribute(params: { databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate  }): Promise<Models.AttributeRelationship>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship>;
     *
     * // New (object based)
     * createRelationshipAttribute(params: { databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate  }): Promise<Models.AttributeRelationship>;
     */
    createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship>;
    createRelationshipAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate } | string,
        ...rest: [(string)?, (string)?, (RelationshipType)?, (boolean)?, (string)?, (string)?, (RelationMutate)?]    
    ): Promise<Models.AttributeRelationship> {
        let params: { databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate };
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
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createStringColumn` instead.
     */
    createStringAttribute(params: { databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean  }): Promise<Models.AttributeString>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeString>;
     *
     * // New (object based)
     * createStringAttribute(params: { databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean  }): Promise<Models.AttributeString>;
     */
    createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeString>;
    createStringAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (boolean)?, (string)?, (boolean)?, (boolean)?]    
    ): Promise<Models.AttributeString> {
        let params: { databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number} size - Maximum size of the string attribute.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateStringColumn` instead.
     */
    updateStringAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string  }): Promise<Models.AttributeString>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.AttributeString>;
     *
     * // New (object based)
     * updateStringAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string  }): Promise<Models.AttributeString>;
     */
    updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.AttributeString>;
    updateStringAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.AttributeString> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createUrlColumn` instead.
     */
    createUrlAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeUrl>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl>;
     *
     * // New (object based)
     * createUrlAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean  }): Promise<Models.AttributeUrl>;
     */
    createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl>;
    createUrlAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (boolean)?]    
    ): Promise<Models.AttributeUrl> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateUrlColumn` instead.
     */
    updateUrlAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeUrl>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeUrl>;
     *
     * // New (object based)
     * updateUrlAttribute(params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string  }): Promise<Models.AttributeUrl>;
     */
    updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeUrl>;
    updateUrlAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.AttributeUrl> {
        let params: { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.getColumn` instead.
     */
    getAttribute(params: { databaseId: string, collectionId: string, key: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getAttribute(databaseId: string, collectionId: string, key: string): Promise<{}>;
     *
     * // New (object based)
     * getAttribute(params: { databaseId: string, collectionId: string, key: string  }): Promise<{}>;
     */
    getAttribute(databaseId: string, collectionId: string, key: string): Promise<{}>;
    getAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string, key: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.deleteColumn` instead.
     */
    deleteAttribute(params: { databaseId: string, collectionId: string, key: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<{}>;
     *
     * // New (object based)
     * deleteAttribute(params: { databaseId: string, collectionId: string, key: string  }): Promise<{}>;
     */
    deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<{}>;
    deleteAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string, key: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {RelationMutate} onDelete - Constraints option
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateRelationshipColumn` instead.
     */
    updateRelationshipAttribute(params: { databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string  }): Promise<Models.AttributeRelationship>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.AttributeRelationship>;
     *
     * // New (object based)
     * updateRelationshipAttribute(params: { databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string  }): Promise<Models.AttributeRelationship>;
     */
    updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.AttributeRelationship>;
    updateRelationshipAttribute(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string } | string,
        ...rest: [(string)?, (string)?, (RelationMutate)?, (string)?]    
    ): Promise<Models.AttributeRelationship> {
        let params: { databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.listRows` instead.
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, queries?: string[]  }): Promise<Models.DocumentList<Document>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>>;
     *
     * // New (object based)
     * listDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, queries?: string[]  }): Promise<Models.DocumentList<Document>>;
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>>;
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, queries?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} data - Document data as JSON object.
     * @param {string[]} permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createRow` instead.
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[]  }): Promise<Document>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[]): Promise<Document>;
     *
     * // New (object based)
     * createDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[]  }): Promise<Document>;
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[]): Promise<Document>;
    createDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[] } | string,
        ...rest: [(string)?, (string)?, (Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>)?, (string[])?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[] };
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
        delete data?.$sequence;
        delete data?.$collectionId;
        delete data?.$databaseId;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} documents - Array of documents data as JSON objects.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createRows` instead.
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documents: object[]  }): Promise<Models.DocumentList<Document>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[]): Promise<Models.DocumentList<Document>>;
     *
     * // New (object based)
     * createDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documents: object[]  }): Promise<Models.DocumentList<Document>>;
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[]): Promise<Models.DocumentList<Document>>;
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documents: object[] } | string,
        ...rest: [(string)?, (object[])?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, documents: object[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, documents: object[] };
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     * 
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {object[]} documents - Array of document data as JSON objects. May contain partial documents.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.upsertRows` instead.
     */
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documents: object[]  }): Promise<Models.DocumentList<Document>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[]): Promise<Models.DocumentList<Document>>;
     *
     * // New (object based)
     * upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documents: object[]  }): Promise<Models.DocumentList<Document>>;
     */
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[]): Promise<Models.DocumentList<Document>>;
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documents: object[] } | string,
        ...rest: [(string)?, (object[])?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, documents: object[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, documents: object[] };
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

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documents !== 'undefined') {
            payload['documents'] = documents;
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {object} data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateRows` instead.
     */
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, data?: object, queries?: string[]  }): Promise<Models.DocumentList<Document>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, data?: object, queries?: string[]): Promise<Models.DocumentList<Document>>;
     *
     * // New (object based)
     * updateDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, data?: object, queries?: string[]  }): Promise<Models.DocumentList<Document>>;
     */
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, data?: object, queries?: string[]): Promise<Models.DocumentList<Document>>;
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, data?: object, queries?: string[] } | string,
        ...rest: [(string)?, (object)?, (string[])?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, data?: object, queries?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, data?: object, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                data: rest[1] as object,
                queries: rest[2] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const data = params.data;
        const queries = params.queries;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.deleteRows` instead.
     */
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, queries?: string[]  }): Promise<Models.DocumentList<Document>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>>;
     *
     * // New (object based)
     * deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, queries?: string[]  }): Promise<Models.DocumentList<Document>>;
     */
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>>;
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.DocumentList<Document>> {
        let params: { databaseId: string, collectionId: string, queries?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} documentId - Document ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.getRow` instead.
     */
    getDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, queries?: string[]  }): Promise<Document>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Document>;
     *
     * // New (object based)
     * getDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, queries?: string[]  }): Promise<Document>;
     */
    getDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Document>;
    getDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string)?, (string[])?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, queries?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, documentId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                queries: rest[2] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const queries = params.queries;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {object} data - Document data as JSON object. Include all required attributes of the document to be created or updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.upsertRow` instead.
     */
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[]  }): Promise<Document>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * upsertDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[]): Promise<Document>;
     *
     * // New (object based)
     * upsertDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[]  }): Promise<Document>;
     */
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[]): Promise<Document>;
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[] } | string,
        ...rest: [(string)?, (string)?, (object)?, (string[])?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                data: rest[2] as object,
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
        delete data?.$sequence;
        delete data?.$collectionId;
        delete data?.$databaseId;

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.updateRow` instead.
     */
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[]  }): Promise<Document>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[]): Promise<Document>;
     *
     * // New (object based)
     * updateDocument<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[]  }): Promise<Document>;
     */
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[]): Promise<Document>;
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[] } | string,
        ...rest: [(string)?, (string)?, (Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>)?, (string[])?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                data: rest[2] as Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>,
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
        delete data?.$sequence;
        delete data?.$collectionId;
        delete data?.$databaseId;

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
     * Delete a document by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} documentId - Document ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.deleteRow` instead.
     */
    deleteDocument(params: { databaseId: string, collectionId: string, documentId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<{}>;
     *
     * // New (object based)
     * deleteDocument(params: { databaseId: string, collectionId: string, documentId: string  }): Promise<{}>;
     */
    deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<{}>;
    deleteDocument(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string, documentId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, documentId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string} attribute - Attribute key.
     * @param {number} value - Value to increment the attribute by. The value must be a number.
     * @param {number} min - Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.decrementRowColumn` instead.
     */
    decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number  }): Promise<Document>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number): Promise<Document>;
     *
     * // New (object based)
     * decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number  }): Promise<Document>;
     */
    decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number): Promise<Document>;
    decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                attribute: rest[2] as string,
                value: rest[3] as number,
                min: rest[4] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const attribute = params.attribute;
        const value = params.value;
        const min = params.min;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string} attribute - Attribute key.
     * @param {number} value - Value to increment the attribute by. The value must be a number.
     * @param {number} max - Maximum value for the attribute. If the current value is greater than this value, an error will be thrown.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.incrementRowColumn` instead.
     */
    incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number  }): Promise<Document>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number): Promise<Document>;
     *
     * // New (object based)
     * incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number  }): Promise<Document>;
     */
    incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number): Promise<Document>;
    incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(
        paramsOrFirst: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?]    
    ): Promise<Document> {
        let params: { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                documentId: rest[1] as string,
                attribute: rest[2] as string,
                value: rest[3] as number,
                max: rest[4] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const documentId = params.documentId;
        const attribute = params.attribute;
        const value = params.value;
        const max = params.max;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error
     * @throws {AppwriteException}
     * @returns {Promise<Models.IndexList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.listIndexes` instead.
     */
    listIndexes(params: { databaseId: string, collectionId: string, queries?: string[]  }): Promise<Models.IndexList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listIndexes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.IndexList>;
     *
     * // New (object based)
     * listIndexes(params: { databaseId: string, collectionId: string, queries?: string[]  }): Promise<Models.IndexList>;
     */
    listIndexes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.IndexList>;
    listIndexes(
        paramsOrFirst: { databaseId: string, collectionId: string, queries?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.IndexList> {
        let params: { databaseId: string, collectionId: string, queries?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                collectionId: rest[0] as string,
                queries: rest[1] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const collectionId = params.collectionId;
        const queries = params.queries;

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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @param {IndexType} type - Index type.
     * @param {string[]} attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {string[]} orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.createIndex` instead.
     */
    createIndex(params: { databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[]  }): Promise<Models.Index>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createIndex(databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[]): Promise<Models.Index>;
     *
     * // New (object based)
     * createIndex(params: { databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[]  }): Promise<Models.Index>;
     */
    createIndex(databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[]): Promise<Models.Index>;
    createIndex(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[] } | string,
        ...rest: [(string)?, (string)?, (IndexType)?, (string[])?, (string[])?, (number[])?]    
    ): Promise<Models.Index> {
        let params: { databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[] };
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
     * Get index by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.getIndex` instead.
     */
    getIndex(params: { databaseId: string, collectionId: string, key: string  }): Promise<Models.Index>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index>;
     *
     * // New (object based)
     * getIndex(params: { databaseId: string, collectionId: string, key: string  }): Promise<Models.Index>;
     */
    getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index>;
    getIndex(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Index> {
        let params: { databaseId: string, collectionId: string, key: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string };
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
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDb.deleteIndex` instead.
     */
    deleteIndex(params: { databaseId: string, collectionId: string, key: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteIndex(databaseId: string, collectionId: string, key: string): Promise<{}>;
     *
     * // New (object based)
     * deleteIndex(params: { databaseId: string, collectionId: string, key: string  }): Promise<{}>;
     */
    deleteIndex(databaseId: string, collectionId: string, key: string): Promise<{}>;
    deleteIndex(
        paramsOrFirst: { databaseId: string, collectionId: string, key: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, collectionId: string, key: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { databaseId: string, collectionId: string, key: string };
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
