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
     * @returns {Promise<Models.HealthStatus>}
     */
    getCache(): Promise<Models.HealthStatus> {

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
    getCertificate(params?: { domain?: string  }): Promise<Models.HealthCertificate>;
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
     * @returns {Promise<Models.HealthStatus>}
     */
    getDB(): Promise<Models.HealthStatus> {

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
     * @returns {Promise<Models.HealthStatus>}
     */
    getPubSub(): Promise<Models.HealthStatus> {

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
     * Get billing project aggregation queue.
     *
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueBillingProjectAggregation(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get billing project aggregation queue.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueBillingProjectAggregation(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueBillingProjectAggregation(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/billing-project-aggregation';
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
     * Get billing team aggregation queue.
     *
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueBillingTeamAggregation(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get billing team aggregation queue.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueBillingTeamAggregation(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueBillingTeamAggregation(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/billing-team-aggregation';
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueBuilds(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of builds that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueBuilds(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueBuilds(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * Get the priority builds queue size.
     *
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 500.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueuePriorityBuilds(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the priority builds queue size.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 500.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueuePriorityBuilds(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueuePriorityBuilds(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/builds-priority';
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueCertificates(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueCertificates(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueCertificates(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueDatabases(params?: { name?: string, threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {string} name - Queue name for which to check the queue size
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueDatabases(name?: string, threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueDatabases(
        paramsOrFirst?: { name?: string, threshold?: number | bigint } | string,
        ...rest: [(number | bigint)?]    
    ): Promise<Models.HealthQueue> {
        let params: { name?: string, threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name?: string, threshold?: number | bigint };
        } else {
            params = {
                name: paramsOrFirst as string,
                threshold: rest[0] as number | bigint            
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueDeletes(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueDeletes(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueDeletes(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getFailedJobs(params: { name: Name, threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Returns the amount of failed jobs in a given queue.
     * 
     *
     * @param {Name} name - The name of the queue
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFailedJobs(name: Name, threshold?: number | bigint): Promise<Models.HealthQueue>;
    getFailedJobs(
        paramsOrFirst: { name: Name, threshold?: number | bigint } | Name,
        ...rest: [(number | bigint)?]    
    ): Promise<Models.HealthQueue> {
        let params: { name: Name, threshold?: number | bigint };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && 'name' in paramsOrFirst)) {
            params = (paramsOrFirst || {}) as { name: Name, threshold?: number | bigint };
        } else {
            params = {
                name: paramsOrFirst as Name,
                threshold: rest[0] as number | bigint            
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueFunctions(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueFunctions(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueFunctions(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueLogs(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueLogs(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueLogs(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMails(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of mails that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueMails(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueMails(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMessaging(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of messages that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueMessaging(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueMessaging(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMigrations(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueMigrations(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueMigrations(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * Get region manager queue.
     *
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 100.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueRegionManager(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get region manager queue.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 100.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueRegionManager(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueRegionManager(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/region-manager';
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueStatsResources(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of metrics that are waiting to be processed in the Appwrite stats resources queue.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueStatsResources(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueStatsResources(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueUsage(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueUsage(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueUsage(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
     * Get threats queue.
     *
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 100.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueThreats(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get threats queue.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 100.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueThreats(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueThreats(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
            };
        }
        
        const threshold = params.threshold;


        const apiPath = '/health/queue/threats';
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
     * @param {number | bigint} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueWebhooks(params?: { threshold?: number | bigint  }): Promise<Models.HealthQueue>;
    /**
     * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number | bigint} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueWebhooks(threshold?: number | bigint): Promise<Models.HealthQueue>;
    getQueueWebhooks(
        paramsOrFirst?: { threshold?: number | bigint } | number | bigint    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number | bigint };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { threshold?: number | bigint };
        } else {
            params = {
                threshold: paramsOrFirst as number | bigint            
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
