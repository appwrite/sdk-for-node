import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { RelationshipType } from '../enums/relationship-type';
import { RelationMutate } from '../enums/relation-mutate';
import { IndexType } from '../enums/index-type';

export class Tables {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all tables that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} databaseId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.TableList>}
     */
    list(databaseId: string, queries?: string[], search?: string): Promise<Models.TableList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        const apiPath = '/databases/{databaseId}/tables'.replace('{databaseId}', databaseId);
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
     * Create a new Table. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateTable) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} rowSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    create(databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean): Promise<Models.Table> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/databases/{databaseId}/tables'.replace('{databaseId}', databaseId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    get(databaseId: string, tableId: string): Promise<Models.Table> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} rowSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    update(databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean): Promise<Models.Table> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(databaseId: string, tableId: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} tableId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     */
    listColumns(databaseId: string, tableId: string, queries?: string[]): Promise<Models.ColumnList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     */
    createBooleanColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.ColumnBoolean> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/boolean'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     */
    updateBooleanColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.ColumnBoolean> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/boolean/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     */
    createDatetimeColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnDatetime> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/datetime'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     */
    updateDatetimeColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnDatetime> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/datetime/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     */
    createEmailColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnEmail> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/email'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     */
    updateEmailColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnEmail> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/email/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     */
    createEnumColumn(databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnEnum> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/enum'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     */
    updateEnumColumn(databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnEnum> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/enum/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     */
    createFloatColumn(databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.ColumnFloat> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/float'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {number} xdefault
     * @param {number} min
     * @param {number} max
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     */
    updateFloatColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.ColumnFloat> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/float/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     */
    createIntegerColumn(databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.ColumnInteger> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/integer'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {number} xdefault
     * @param {number} min
     * @param {number} max
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     */
    updateIntegerColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.ColumnInteger> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/integer/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     */
    createIpColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnIp> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/ip'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     */
    updateIpColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnIp> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/ip/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} relatedTableId
     * @param {RelationshipType} type
     * @param {boolean} twoWay
     * @param {string} key
     * @param {string} twoWayKey
     * @param {RelationMutate} onDelete
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     */
    createRelationshipColumn(databaseId: string, tableId: string, relatedTableId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.ColumnRelationship> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/relationship'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {number} size
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @param {boolean} encrypt
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     */
    createStringColumn(databaseId: string, tableId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.ColumnString> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/string'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {number} size
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     */
    updateStringColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.ColumnString> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/string/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     */
    createUrlColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnUrl> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/url'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     */
    updateUrlColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnUrl> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/url/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getColumn(databaseId: string, tableId: string, key: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteColumn(databaseId: string, tableId: string, key: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {RelationMutate} onDelete
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     */
    updateRelationshipColumn(databaseId: string, tableId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.ColumnRelationship> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/columns/{key}/relationship'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * List indexes in the collection.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     */
    listIndexes(databaseId: string, tableId: string, queries?: string[]): Promise<Models.ColumnIndexList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/indexes'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {IndexType} type
     * @param {string[]} columns
     * @param {string[]} orders
     * @param {number[]} lengths
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     */
    createIndex(databaseId: string, tableId: string, key: string, type: IndexType, columns: string[], orders?: string[], lengths?: number[]): Promise<Models.ColumnIndex> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/indexes'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     */
    getIndex(databaseId: string, tableId: string, key: string): Promise<Models.ColumnIndex> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIndex(databaseId: string, tableId: string, key: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Get a list of all the user&#039;s rows in a given table. You can use the query params to filter your results.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    listRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, queries?: string[]): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Create a new Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateTable) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    createRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, data: object, permissions?: string[]): Promise<Row> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Create new Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateTable) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {object[]} rows
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    createRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rows: object[]): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rows === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rows"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Create or update Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateTable) API or directly from your database console.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    upsertRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {object} data
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    updateRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, data?: object, queries?: string[]): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    deleteRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, queries?: string[]): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    getRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, queries?: string[]): Promise<Row> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
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
     * Create or update a Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateTable) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    upsertRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string): Promise<Row> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
        const payload: Payload = {};
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    updateRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, data?: object, permissions?: string[]): Promise<Row> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRow(databaseId: string, tableId: string, rowId: string): Promise<{}> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }
        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {string} column
     * @param {number} value
     * @param {number} min
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    decrementRowColumn<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, column: string, value?: number, min?: number): Promise<Row> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/decrement'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId).replace('{column}', column);
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
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {string} column
     * @param {number} value
     * @param {number} max
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    incrementRowColumn<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, column: string, value?: number, max?: number): Promise<Row> {
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
        const apiPath = '/databases/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/increment'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId).replace('{column}', column);
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
