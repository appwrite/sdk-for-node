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
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     */
    list(queries?: string[], search?: string): Promise<Models.DatabaseList> {
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
            'content-type': 'application/json',
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
     * @param {string} databaseId
     * @param {string} name
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    create(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database> {
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
     * Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.
     *
     * @param {string} databaseId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    get(databaseId: string): Promise<Models.Database> {
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
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Update a database by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} name
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     */
    update(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database> {
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
     * @param {string} databaseId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(databaseId: string): Promise<{}> {
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
     * @param {string} databaseId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.CollectionList>}
     */
    listCollections(databaseId: string, queries?: string[], search?: string): Promise<Models.CollectionList> {
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
            'content-type': 'application/json',
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} documentSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     */
    createCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     */
    getCollection(databaseId: string, collectionId: string): Promise<Models.Collection> {
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
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Update a collection by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} documentSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     */
    updateCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteCollection(databaseId: string, collectionId: string): Promise<{}> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeList>}
     */
    listAttributes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.AttributeList> {
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
            'content-type': 'application/json',
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     */
    createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     */
    updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.AttributeBoolean> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     */
    createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeDatetime> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     */
    updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeDatetime> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     */
    createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     */
    updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEmail> {
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
     * Create an enumeration attribute. The `elements` param acts as a white-list of accepted values for this attribute. 

     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     */
    createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     */
    updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEnum> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     */
    createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     */
    updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: number, max: number, xdefault?: number, newKey?: string): Promise<Models.AttributeFloat> {
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
        if (typeof min === 'undefined') {
            throw new AppwriteException('Missing required parameter: "min"');
        }
        if (typeof max === 'undefined') {
            throw new AppwriteException('Missing required parameter: "max"');
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     */
    createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     */
    updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: number, max: number, xdefault?: number, newKey?: string): Promise<Models.AttributeInteger> {
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
        if (typeof min === 'undefined') {
            throw new AppwriteException('Missing required parameter: "min"');
        }
        if (typeof max === 'undefined') {
            throw new AppwriteException('Missing required parameter: "max"');
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     */
    createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     */
    updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeIp> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} relatedCollectionId
     * @param {RelationshipType} type
     * @param {boolean} twoWay
     * @param {string} key
     * @param {string} twoWayKey
     * @param {RelationMutate} onDelete
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     */
    createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {number} size
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @param {boolean} encrypt
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     */
    createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeString> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {number} size
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     */
    updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.AttributeString> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     */
    createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     */
    updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeUrl> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getAttribute(databaseId: string, collectionId: string, key: string): Promise<{}> {
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
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Deletes an attribute.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<{}> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {RelationMutate} onDelete
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     */
    updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.AttributeRelationship> {
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
     * Get a list of all the user&#039;s documents in a given collection. You can use the query params to filter your results.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    listDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>> {
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
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Omit<Document, keyof Models.Document>} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    createDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data: Omit<Document, keyof Models.Document>, permissions?: string[]): Promise<Document> {
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
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    getDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Document> {
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
            'content-type': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Partial<Omit<Document, keyof Models.Document>>} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    updateDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data?: Partial<Omit<Document, keyof Models.Document>>, permissions?: string[]): Promise<Document> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<{}> {
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
     * List indexes in the collection.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.IndexList>}
     */
    listIndexes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.IndexList> {
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
            'content-type': 'application/json',
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
Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {IndexType} type
     * @param {string[]} attributes
     * @param {string[]} orders
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     */
    createIndex(databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[]): Promise<Models.Index> {
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
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     */
    getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index> {
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
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Delete an index.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIndex(databaseId: string, collectionId: string, key: string): Promise<{}> {
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
