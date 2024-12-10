import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { Name } from '../enums/name';

export class Health {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get HTTP
     *
     * Check the Appwrite HTTP server is up and responsive.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    async get(): Promise<Models.HealthStatus> {
        const apiPath = '/health';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get antivirus
     *
     * Check the Appwrite Antivirus server is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthAntivirus>}
     */
    async getAntivirus(): Promise<Models.HealthAntivirus> {
        const apiPath = '/health/anti-virus';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get cache
     *
     * Check the Appwrite in-memory cache servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    async getCache(): Promise<Models.HealthStatus> {
        const apiPath = '/health/cache';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get the SSL certificate for a domain
     *
     * Get the SSL certificate for a domain
     *
     * @param {string} domain
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthCertificate>}
     */
    async getCertificate(domain?: string): Promise<Models.HealthCertificate> {
        const apiPath = '/health/certificate';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get DB
     *
     * Check the Appwrite database servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    async getDB(): Promise<Models.HealthStatus> {
        const apiPath = '/health/db';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get pubsub
     *
     * Check the Appwrite pub-sub servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    async getPubSub(): Promise<Models.HealthStatus> {
        const apiPath = '/health/pubsub';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get queue
     *
     * Check the Appwrite queue messaging servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    async getQueue(): Promise<Models.HealthStatus> {
        const apiPath = '/health/queue';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get builds queue
     *
     * Get the number of builds that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueBuilds(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/builds';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get certificates queue
     *
     * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueCertificates(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/certificates';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get databases queue
     *
     * Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {string} name
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueDatabases(name?: string, threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/databases';
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get deletes queue
     *
     * Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueDeletes(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/deletes';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get number of failed queue jobs
     *
     * Returns the amount of failed jobs in a given queue.

     *
     * @param {Name} name
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getFailedJobs(name: Name, threshold?: number): Promise<Models.HealthQueue> {
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/health/queue/failed/{name}'.replace('{name}', name);
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get functions queue
     *
     * Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueFunctions(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/functions';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get logs queue
     *
     * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueLogs(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/logs';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get mails queue
     *
     * Get the number of mails that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueMails(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/mails';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get messaging queue
     *
     * Get the number of messages that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueMessaging(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/messaging';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get migrations queue
     *
     * Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueMigrations(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/migrations';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get usage queue
     *
     * Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueUsage(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/usage';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get usage dump queue
     *
     * Get the number of projects containing metrics that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueUsageDump(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/usage-dump';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get webhooks queue
     *
     * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    async getQueueWebhooks(threshold?: number): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/webhooks';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get storage
     *
     * Check the Appwrite storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    async getStorage(): Promise<Models.HealthStatus> {
        const apiPath = '/health/storage';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get local storage
     *
     * Check the Appwrite local storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    async getStorageLocal(): Promise<Models.HealthStatus> {
        const apiPath = '/health/storage/local';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get time
     *
     * Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthTime>}
     */
    async getTime(): Promise<Models.HealthTime> {
        const apiPath = '/health/time';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
}
