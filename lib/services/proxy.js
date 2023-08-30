const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const InputFile = require('../inputFile.js');
const client = require('../client.js');
const Stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');

class Proxy extends Service {

     constructor(client)
     {
        super(client);
     }


    /**
     * List Rules
     *
     * Get a list of all the proxy rules. You can use the query params to filter
     * your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listRules(queries, search) {
        const apiPath = '/proxy/rules';
        let payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Rule
     *
     * Create a new proxy rule.
     *
     * @param {string} domain
     * @param {string} resourceType
     * @param {string} resourceId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createRule(domain, resourceType, resourceId) {
        const apiPath = '/proxy/rules';
        let payload = {};
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }

        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }


        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }

        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }

        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Rule
     *
     * Get a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getRule(ruleId) {
        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
        let payload = {};
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Rule
     *
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteRule(ruleId) {
        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
        let payload = {};
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Rule Verification Status
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateRuleVerification(ruleId) {
        const apiPath = '/proxy/rules/{ruleId}/verification'.replace('{ruleId}', ruleId);
        let payload = {};
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }


        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Proxy;
