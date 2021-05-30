const Service = require('../service.js');

class Database extends Service {

    /**
     * List Collections
     *
     * Get a list of all the user collections. You can use the query params to
     * filter your results. On admin mode, this endpoint will return a list of all
     * of the project's collections. [Learn more about different API
     * modes](/docs/admin).
     *
     * @param string search
     * @param number limit
     * @param number offset
     * @param string orderType
     * @throws Exception
     * @return {}
     */
    async listCollections(search = '', limit = 25, offset = 0, orderType = 'ASC') {
        let path = '/database/collections';
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'search': search,
                'limit': limit,
                'offset': offset,
                'orderType': orderType
            });
    }

    /**
     * Create Collection
     *
     * Create a new Collection.
     *
     * @param string name
     * @param string[] read
     * @param string[] write
     * @param object[] rules
     * @throws Exception
     * @return {}
     */
    async createCollection(name, read, write, rules) {
        let path = '/database/collections';
        
        return await this.client.call('post', path, {
                    'content-type': 'application/json',
               },
               {
                'name': name,
                'read': read,
                'write': write,
                'rules': rules
            });
    }

    /**
     * Get Collection
     *
     * Get a collection by its unique ID. This endpoint response returns a JSON
     * object with the collection metadata.
     *
     * @param string collectionId
     * @throws Exception
     * @return {}
     */
    async getCollection(collectionId) {
        let path = '/database/collections/{collectionId}'.replace(new RegExp('{collectionId}', 'g'), collectionId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * Update Collection
     *
     * Update a collection by its unique ID.
     *
     * @param string collectionId
     * @param string name
     * @param string[] read
     * @param string[] write
     * @param object[] rules
     * @throws Exception
     * @return {}
     */
    async updateCollection(collectionId, name, read = [], write = [], rules = []) {
        let path = '/database/collections/{collectionId}'.replace(new RegExp('{collectionId}', 'g'), collectionId);
        
        return await this.client.call('put', path, {
                    'content-type': 'application/json',
               },
               {
                'name': name,
                'read': read,
                'write': write,
                'rules': rules
            });
    }

    /**
     * Delete Collection
     *
     * Delete a collection by its unique ID. Only users with write permissions
     * have access to delete this resource.
     *
     * @param string collectionId
     * @throws Exception
     * @return {}
     */
    async deleteCollection(collectionId) {
        let path = '/database/collections/{collectionId}'.replace(new RegExp('{collectionId}', 'g'), collectionId);
        
        return await this.client.call('delete', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * List Documents
     *
     * Get a list of all the user documents. You can use the query params to
     * filter your results. On admin mode, this endpoint will return a list of all
     * of the project's documents. [Learn more about different API
     * modes](/docs/admin).
     *
     * @param string collectionId
     * @param string[] filters
     * @param number limit
     * @param number offset
     * @param string orderField
     * @param string orderType
     * @param string orderCast
     * @param string search
     * @throws Exception
     * @return {}
     */
    async listDocuments(collectionId, filters = [], limit = 25, offset = 0, orderField = '', orderType = 'ASC', orderCast = 'string', search = '') {
        let path = '/database/collections/{collectionId}/documents'.replace(new RegExp('{collectionId}', 'g'), collectionId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'filters': filters,
                'limit': limit,
                'offset': offset,
                'orderField': orderField,
                'orderType': orderType,
                'orderCast': orderCast,
                'search': search
            });
    }

    /**
     * Create Document
     *
     * Create a new Document. Before using this route, you should create a new
     * collection resource using either a [server
     * integration](/docs/server/database#databaseCreateCollection) API or
     * directly from your database console.
     *
     * @param string collectionId
     * @param object data
     * @param string[] read
     * @param string[] write
     * @param string parentDocument
     * @param string parentProperty
     * @param string parentPropertyType
     * @throws Exception
     * @return {}
     */
    async createDocument(collectionId, data, read = [], write = [], parentDocument = '', parentProperty = '', parentPropertyType = 'assign') {
        let path = '/database/collections/{collectionId}/documents'.replace(new RegExp('{collectionId}', 'g'), collectionId);
        
        return await this.client.call('post', path, {
                    'content-type': 'application/json',
               },
               {
                'data': data,
                'read': read,
                'write': write,
                'parentDocument': parentDocument,
                'parentProperty': parentProperty,
                'parentPropertyType': parentPropertyType
            });
    }

    /**
     * Get Document
     *
     * Get a document by its unique ID. This endpoint response returns a JSON
     * object with the document data.
     *
     * @param string collectionId
     * @param string documentId
     * @throws Exception
     * @return {}
     */
    async getDocument(collectionId, documentId) {
        let path = '/database/collections/{collectionId}/documents/{documentId}'.replace(new RegExp('{collectionId}', 'g'), collectionId).replace(new RegExp('{documentId}', 'g'), documentId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * Update Document
     *
     * Update a document by its unique ID. Using the patch method you can pass
     * only specific fields that will get updated.
     *
     * @param string collectionId
     * @param string documentId
     * @param object data
     * @param string[] read
     * @param string[] write
     * @throws Exception
     * @return {}
     */
    async updateDocument(collectionId, documentId, data, read = [], write = []) {
        let path = '/database/collections/{collectionId}/documents/{documentId}'.replace(new RegExp('{collectionId}', 'g'), collectionId).replace(new RegExp('{documentId}', 'g'), documentId);
        
        return await this.client.call('patch', path, {
                    'content-type': 'application/json',
               },
               {
                'data': data,
                'read': read,
                'write': write
            });
    }

    /**
     * Delete Document
     *
     * Delete a document by its unique ID. This endpoint deletes only the parent
     * documents, its attributes and relations to other documents. Child documents
     * **will not** be deleted.
     *
     * @param string collectionId
     * @param string documentId
     * @throws Exception
     * @return {}
     */
    async deleteDocument(collectionId, documentId) {
        let path = '/database/collections/{collectionId}/documents/{documentId}'.replace(new RegExp('{collectionId}', 'g'), collectionId).replace(new RegExp('{documentId}', 'g'), documentId);
        
        return await this.client.call('delete', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }
}

module.exports = Database;
