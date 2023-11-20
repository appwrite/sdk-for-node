const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const InputFile = require('../inputFile.js');
const client = require('../client.js');
const Stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');

class Health extends Service {

     constructor(client)
     {
        super(client);
     }


    /**
     * Get HTTP
     *
     * Check the Appwrite HTTP server is up and responsive.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get() {
        const apiPath = '/health';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get antivirus
     *
     * Check the Appwrite Antivirus server is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getAntivirus() {
        const apiPath = '/health/anti-virus';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get cache
     *
     * Check the Appwrite in-memory cache servers are up and connection is
     * successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getCache() {
        const apiPath = '/health/cache';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get DB
     *
     * Check the Appwrite database servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getDB() {
        const apiPath = '/health/db';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get pubsub
     *
     * Check the Appwrite pub-sub servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getPubSub() {
        const apiPath = '/health/pubsub';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get queue
     *
     * Check the Appwrite queue messaging servers are up and connection is
     * successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueue() {
        const apiPath = '/health/queue';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get builds queue
     *
     * Get the number of builds that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueBuilds(threshold) {
        const apiPath = '/health/queue/builds';
        let payload = {};

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get certificates queue
     *
     * Get the number of certificates that are waiting to be issued against
     * [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue
     * server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueCertificates(threshold) {
        const apiPath = '/health/queue/certificates';
        let payload = {};

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get databases queue
     *
     * Get the number of database changes that are waiting to be processed in the
     * Appwrite internal queue server.
     *
     * @param {string} name
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueDatabases(name, threshold) {
        const apiPath = '/health/queue/databases';
        let payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get deletes queue
     *
     * Get the number of background destructive changes that are waiting to be
     * processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueDeletes(threshold) {
        const apiPath = '/health/queue/deletes';
        let payload = {};

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get functions queue
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueFunctions(threshold) {
        const apiPath = '/health/queue/functions';
        let payload = {};

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get logs queue
     *
     * Get the number of logs that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueLogs(threshold) {
        const apiPath = '/health/queue/logs';
        let payload = {};

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get mails queue
     *
     * Get the number of mails that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueMails(threshold) {
        const apiPath = '/health/queue/mails';
        let payload = {};

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get messaging queue
     *
     * Get the number of messages that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueMessaging(threshold) {
        const apiPath = '/health/queue/messaging';
        let payload = {};

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get migrations queue
     *
     * Get the number of migrations that are waiting to be processed in the
     * Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueMigrations(threshold) {
        const apiPath = '/health/queue/migrations';
        let payload = {};

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get webhooks queue
     *
     * Get the number of webhooks that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQueueWebhooks(threshold) {
        const apiPath = '/health/queue/webhooks';
        let payload = {};

        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get local storage
     *
     * Check the Appwrite local storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getStorageLocal() {
        const apiPath = '/health/storage/local';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get time
     *
     * Check the Appwrite server time is synced with Google remote NTP server. We
     * use this technology to smoothly handle leap seconds with no disruptive
     * events. The [Network Time
     * Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is
     * used by hundreds of millions of computers and devices to synchronize their
     * clocks over the Internet. If your computer sets its own clock, it likely
     * uses NTP.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getTime() {
        const apiPath = '/health/time';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Health;
