const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const InputFile = require('../inputFile.js');
const client = require('../client.js');
const Stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');

class Graphql extends Service {

     constructor(client)
     {
        super(client);
     }


    /**
     * GraphQL endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async query(query) {
        const apiPath = '/graphql';
        let payload = {};
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }


        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }

        return await this.client.call('post', apiPath, {
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * GraphQL endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async mutation(query) {
        const apiPath = '/graphql/mutation';
        let payload = {};
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }


        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }

        return await this.client.call('post', apiPath, {
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Graphql;
