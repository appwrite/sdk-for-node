import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Name } from '../enums/name';

export class Health {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Check the Appwrite HTTP server is up and responsive.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    get(): Promise<Models.HealthStatus> {

        const apiPath = '/health';
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
     * Check the Appwrite Antivirus server is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthAntivirus>}
     */
    getAntivirus(): Promise<Models.HealthAntivirus> {

        const apiPath = '/health/anti-virus';
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
     * Check the Appwrite in-memory cache servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatusList>}
     */
    getCache(): Promise<Models.HealthStatusList> {

        const apiPath = '/health/cache';
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
     * Get the SSL certificate for a domain
     *
     * @param {string} params.domain - string
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthCertificate>}
     */
    getCertificate(params?: { domain?: string }): Promise<Models.HealthCertificate>;
    /**
     * Get the SSL certificate for a domain
     *
     * @param {string} domain - string
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthCertificate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCertificate(domain?: string): Promise<Models.HealthCertificate>;
    getCertificate(
        paramsOrFirst?: { domain?: string } | string    
    ): Promise<Models.HealthCertificate> {
        let params: { domain?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { domain?: string };
        } else {
            params = {
                domain: paramsOrFirst as string            
            };
        }
        
        const domain = params.domain;


        const apiPath = '/health/certificate';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
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
     * Check the Appwrite database servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatusList>}
     */
    getDB(): Promise<Models.HealthStatusList> {

        const apiPath = '/health/db';
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
     * Check the Appwrite pub-sub servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatusList>}
     */
    getPubSub(): Promise<Models.HealthStatusList> {

        const apiPath = '/health/pubsub';
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
     * Get the number of audit logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueAudits(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of audit logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueAudits(threshold?: number): Promise<Models.HealthQueue>;
    getQueueAudits(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/audits';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of builds that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueBuilds(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of builds that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueBuilds(threshold?: number): Promise<Models.HealthQueue>;
    getQueueBuilds(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/builds';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueCertificates(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueCertificates(threshold?: number): Promise<Models.HealthQueue>;
    getQueueCertificates(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/certificates';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {string} params.name - Queue name for which to check the queue size
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueDatabases(params?: { name?: string, threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {string} name - Queue name for which to check the queue size
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueDatabases(name?: string, threshold?: number): Promise<Models.HealthQueue>;
    getQueueDatabases(
        paramsOrFirst?: { name?: string, threshold?: number } | string,
        ...rest: [(number)?]    
    ): Promise<Models.HealthQueue> {
        let params: { name?: string, threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name?: string, threshold?: number };
        } else {
            params = {
                name: paramsOrFirst as string,
                threshold: rest[0] as number            
            };
        }
        
        const name = params.name;
        const threshold = params.threshold;


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
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueDeletes(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueDeletes(threshold?: number): Promise<Models.HealthQueue>;
    getQueueDeletes(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/deletes';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Returns the amount of failed jobs in a given queue.
     * 
     *
     * @param {Name} params.name - The name of the queue
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getFailedJobs(params: { name: Name, threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Returns the amount of failed jobs in a given queue.
     * 
     *
     * @param {Name} name - The name of the queue
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFailedJobs(name: Name, threshold?: number): Promise<Models.HealthQueue>;
    getFailedJobs(
        paramsOrFirst: { name: Name, threshold?: number } | Name,
        ...rest: [(number)?]    
    ): Promise<Models.HealthQueue> {
        let params: { name: Name, threshold?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst || 'threshold' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: Name, threshold?: number };
        } else {
            params = {
                name: paramsOrFirst as Name,
                threshold: rest[0] as number            
            };
        }
        
        const name = params.name;
        const threshold = params.threshold;

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
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueFunctions(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueFunctions(threshold?: number): Promise<Models.HealthQueue>;
    getQueueFunctions(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/functions';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueLogs(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueLogs(threshold?: number): Promise<Models.HealthQueue>;
    getQueueLogs(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/logs';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of mails that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMails(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of mails that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueMails(threshold?: number): Promise<Models.HealthQueue>;
    getQueueMails(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/mails';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of messages that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMessaging(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of messages that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueMessaging(threshold?: number): Promise<Models.HealthQueue>;
    getQueueMessaging(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/messaging';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMigrations(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueMigrations(threshold?: number): Promise<Models.HealthQueue>;
    getQueueMigrations(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/migrations';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of metrics that are waiting to be processed in the Appwrite stats resources queue.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueStatsResources(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of metrics that are waiting to be processed in the Appwrite stats resources queue.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueStatsResources(threshold?: number): Promise<Models.HealthQueue>;
    getQueueStatsResources(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/stats-resources';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueUsage(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueUsage(threshold?: number): Promise<Models.HealthQueue>;
    getQueueUsage(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/stats-usage';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueWebhooks(params?: { threshold?: number }): Promise<Models.HealthQueue>;
    /**
     * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueWebhooks(threshold?: number): Promise<Models.HealthQueue>;
    getQueueWebhooks(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number };
        } else {
            params = {
                threshold: paramsOrFirst as number            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/webhooks';
        const payload: Payload = {};
        if (typeof threshold !== 'undefined') {
            payload['threshold'] = threshold;
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
     * Check the Appwrite storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    getStorage(): Promise<Models.HealthStatus> {

        const apiPath = '/health/storage';
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
     * Check the Appwrite local storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    getStorageLocal(): Promise<Models.HealthStatus> {

        const apiPath = '/health/storage/local';
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
     * Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthTime>}
     */
    getTime(): Promise<Models.HealthTime> {

        const apiPath = '/health/time';
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
}
