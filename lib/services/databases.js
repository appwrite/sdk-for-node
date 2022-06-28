const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const InputFile = require('../inputFile.js');
const client = require('../client.js');
const Stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');

class Databases extends Service {
    databaseId;
    /**
     * Set databaseId.
     *
     * @param {string} databaseId
     *
     * @return void
     */
     setDatabaseId(databaseId)
     {
        this.databaseId = databaseId;
     }
    /**
     * Get databaseId.
     *
     * @return string
     */
     getDatabaseId(databaseId)
     {
        return this.databaseId;
     }
     constructor(client,  databaseId)
     {
        super(client);

        this.databaseId = databaseId;
     }

    /**
     * List Databases
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
    async list(search, limit, offset, cursor, cursorDirection, orderType) {
        let path = '/databases';
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
     * Create Database
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async create(name) {
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/databases';
        let payload = {};

        if (typeof this.databaseId !== 'undefined') {
            payload['databaseId'] = this.databaseId;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Database
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get() {
        let path = '/databases/{databaseId}'.replace('{databaseId}', this.databaseId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Database
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async update(name) {
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/databases/{databaseId}'.replace('{databaseId}', this.databaseId);
        let payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Database
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete() {
        let path = '/databases/{databaseId}'.replace('{databaseId}', this.databaseId);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Collections
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
        let path = '/databases/{databaseId}/collections'.replace('{databaseId}', this.databaseId);
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

        let path = '/databases/{databaseId}/collections'.replace('{databaseId}', this.databaseId);
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
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getCollection(collectionId) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Collection
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

        let path = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteCollection(collectionId) {
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Boolean Attribute
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/boolean'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/email'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/enum'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/float'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/integer'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/ip'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/string'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/url'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Documents
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

        let path = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Document
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

        let path = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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

        let path = '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', this.databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Databases;