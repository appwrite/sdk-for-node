const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const client = require('../client.js');
const { promisify } = require('util');
const fs = require('fs');

class Database extends Service {

    /**
     * List Collections
     *
     * Get a list of all the user collections. You can use the query params to
     * filter your results. On admin mode, this endpoint will return a list of all
     * of the project's collections. [Learn more about different API
     * modes](/docs/admin).
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listCollections(search, limit, offset, cursor, cursorDirection, orderType) {
        let path = '/database/collections';
        let payload = {};

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        if (typeof cursor !== 'undefined') {
            payload['cursor'] = cursor;
        }

        if (typeof cursorDirection !== 'undefined') {
            payload['cursorDirection'] = cursorDirection;
        }

        if (typeof orderType !== 'undefined') {
            payload['orderType'] = orderType;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Collection
     *
     * Create a new Collection.
     *
     * @param {string} collectionId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createCollection(collectionId, name, permission, read, write) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof permission === 'undefined') {
            throw new AppwriteException('Missing required parameter: "permission"');
        }

        if (typeof read === 'undefined') {
            throw new AppwriteException('Missing required parameter: "read"');
        }

        if (typeof write === 'undefined') {
            throw new AppwriteException('Missing required parameter: "write"');
        }

        let path = '/database/collections';
        let payload = {};

        if (typeof collectionId !== 'undefined') {
            payload['collectionId'] = collectionId;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof permission !== 'undefined') {
            payload['permission'] = permission;
        }

        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }

        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Collection
     *
     * Get a collection by its unique ID. This endpoint response returns a JSON
     * object with the collection metadata.
     *
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getCollection(collectionId) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/database/collections/{collectionId}'.replace('{collectionId}', collectionId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Collection
     *
     * Update a collection by its unique ID.
     *
     * @param {string} collectionId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateCollection(collectionId, name, permission, read, write, enabled) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof permission === 'undefined') {
            throw new AppwriteException('Missing required parameter: "permission"');
        }

        let path = '/database/collections/{collectionId}'.replace('{collectionId}', collectionId);
        let payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof permission !== 'undefined') {
            payload['permission'] = permission;
        }

        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }

        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }

        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }

        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Collection
     *
     * Delete a collection by its unique ID. Only users with write permissions
     * have access to delete this resource.
     *
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteCollection(collectionId) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/database/collections/{collectionId}'.replace('{collectionId}', collectionId);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Attributes
     *
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listAttributes(collectionId) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/database/collections/{collectionId}/attributes'.replace('{collectionId}', collectionId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Boolean Attribute
     *
     * Create a boolean attribute.
     * 
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBooleanAttribute(collectionId, key, required, xdefault, array) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/database/collections/{collectionId}/attributes/boolean'.replace('{collectionId}', collectionId);
        let payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Email Attribute
     *
     * Create an email attribute.
     * 
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createEmailAttribute(collectionId, key, required, xdefault, array) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/database/collections/{collectionId}/attributes/email'.replace('{collectionId}', collectionId);
        let payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Enum Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createEnumAttribute(collectionId, key, elements, required, xdefault, array) {
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

        let path = '/database/collections/{collectionId}/attributes/enum'.replace('{collectionId}', collectionId);
        let payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Float Attribute
     *
     * Create a float attribute. Optionally, minimum and maximum values can be
     * provided.
     * 
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createFloatAttribute(collectionId, key, required, min, max, xdefault, array) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/database/collections/{collectionId}/attributes/float'.replace('{collectionId}', collectionId);
        let payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Integer Attribute
     *
     * Create an integer attribute. Optionally, minimum and maximum values can be
     * provided.
     * 
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createIntegerAttribute(collectionId, key, required, min, max, xdefault, array) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/database/collections/{collectionId}/attributes/integer'.replace('{collectionId}', collectionId);
        let payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create IP Address Attribute
     *
     * Create IP address attribute.
     * 
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createIpAttribute(collectionId, key, required, xdefault, array) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/database/collections/{collectionId}/attributes/ip'.replace('{collectionId}', collectionId);
        let payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create String Attribute
     *
     * Create a string attribute.
     * 
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {number} size
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createStringAttribute(collectionId, key, size, required, xdefault, array) {
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

        let path = '/database/collections/{collectionId}/attributes/string'.replace('{collectionId}', collectionId);
        let payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create URL Attribute
     *
     * Create a URL attribute.
     * 
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createUrlAttribute(collectionId, key, required, xdefault, array) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/database/collections/{collectionId}/attributes/url'.replace('{collectionId}', collectionId);
        let payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getAttribute(collectionId, key) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        let path = '/database/collections/{collectionId}/attributes/{key}'.replace('{collectionId}', collectionId).replace('{key}', key);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteAttribute(collectionId, key) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        let path = '/database/collections/{collectionId}/attributes/{key}'.replace('{collectionId}', collectionId).replace('{key}', key);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Documents
     *
     * Get a list of all the user documents. You can use the query params to
     * filter your results. On admin mode, this endpoint will return a list of all
     * of the project's documents. [Learn more about different API
     * modes](/docs/admin).
     *
     * @param {string} collectionId
     * @param {string[]} queries
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string[]} orderAttributes
     * @param {string[]} orderTypes
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listDocuments(collectionId, queries, limit, offset, cursor, cursorDirection, orderAttributes, orderTypes) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/database/collections/{collectionId}/documents'.replace('{collectionId}', collectionId);
        let payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        if (typeof cursor !== 'undefined') {
            payload['cursor'] = cursor;
        }

        if (typeof cursorDirection !== 'undefined') {
            payload['cursorDirection'] = cursorDirection;
        }

        if (typeof orderAttributes !== 'undefined') {
            payload['orderAttributes'] = orderAttributes;
        }

        if (typeof orderTypes !== 'undefined') {
            payload['orderTypes'] = orderTypes;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Document
     *
     * Create a new Document. Before using this route, you should create a new
     * collection resource using either a [server
     * integration](/docs/server/database#databaseCreateCollection) API or
     * directly from your database console.
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createDocument(collectionId, documentId, data, read, write) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        let path = '/database/collections/{collectionId}/documents'.replace('{collectionId}', collectionId);
        let payload = {};

        if (typeof documentId !== 'undefined') {
            payload['documentId'] = documentId;
        }

        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }

        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }

        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Document
     *
     * Get a document by its unique ID. This endpoint response returns a JSON
     * object with the document data.
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getDocument(collectionId, documentId) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        let path = '/database/collections/{collectionId}/documents/{documentId}'.replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Document
     *
     * Update a document by its unique ID. Using the patch method you can pass
     * only specific fields that will get updated.
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateDocument(collectionId, documentId, data, read, write) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        let path = '/database/collections/{collectionId}/documents/{documentId}'.replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        let payload = {};

        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }

        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }

        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Document
     *
     * Delete a document by its unique ID. This endpoint deletes only the parent
     * documents, its attributes and relations to other documents. Child documents
     * **will not** be deleted.
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteDocument(collectionId, documentId) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        let path = '/database/collections/{collectionId}/documents/{documentId}'.replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Indexes
     *
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listIndexes(collectionId) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/database/collections/{collectionId}/indexes'.replace('{collectionId}', collectionId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Index
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {string} type
     * @param {string[]} attributes
     * @param {string[]} orders
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createIndex(collectionId, key, type, attributes, orders) {
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

        let path = '/database/collections/{collectionId}/indexes'.replace('{collectionId}', collectionId);
        let payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Index
     *
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getIndex(collectionId, key) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        let path = '/database/collections/{collectionId}/indexes/{key}'.replace('{collectionId}', collectionId).replace('{key}', key);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Index
     *
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteIndex(collectionId, key) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        let path = '/database/collections/{collectionId}/indexes/{key}'.replace('{collectionId}', collectionId).replace('{key}', key);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Database;