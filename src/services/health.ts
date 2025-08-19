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
     * @param {string} domain - string
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthCertificate>}
     */
    getCertificate(params: { domain?: string  }): Promise<Models.HealthCertificate>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getCertificate(domain?: string): Promise<Models.HealthCertificate>;
     *
     * // New (object based)
     * getCertificate(params: { domain?: string  }): Promise<Models.HealthCertificate>;
     */
    getCertificate(domain?: string): Promise<Models.HealthCertificate>;
    getCertificate(
        paramsOrFirst?: { domain?: string } | string    
    ): Promise<Models.HealthCertificate> {
        let params: { domain?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { domain?: string };
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
     * Get the number of builds that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueBuilds(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueBuilds(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueBuilds(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueBuilds(threshold?: number): Promise<Models.HealthQueue>;
    getQueueBuilds(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueCertificates(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueCertificates(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueCertificates(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueCertificates(threshold?: number): Promise<Models.HealthQueue>;
    getQueueCertificates(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {string} name - Queue name for which to check the queue size
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueDatabases(params: { name?: string, threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueDatabases(name?: string, threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueDatabases(params: { name?: string, threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueDatabases(name?: string, threshold?: number): Promise<Models.HealthQueue>;
    getQueueDatabases(
        paramsOrFirst?: { name?: string, threshold?: number } | string,
        ...rest: [(number)?]    
    ): Promise<Models.HealthQueue> {
        let params: { name?: string, threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { name?: string, threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueDeletes(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueDeletes(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueDeletes(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueDeletes(threshold?: number): Promise<Models.HealthQueue>;
    getQueueDeletes(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {Name} name - The name of the queue
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getFailedJobs(params: { name: Name, threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getFailedJobs(name: Name, threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getFailedJobs(params: { name: Name, threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getFailedJobs(name: Name, threshold?: number): Promise<Models.HealthQueue>;
    getFailedJobs(
        paramsOrFirst: { name: Name, threshold?: number } | Name,
        ...rest: [(number)?]    
    ): Promise<Models.HealthQueue> {
        let params: { name: Name, threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && 'name' in paramsOrFirst) {
            params = paramsOrFirst as { name: Name, threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueFunctions(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueFunctions(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueFunctions(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueFunctions(threshold?: number): Promise<Models.HealthQueue>;
    getQueueFunctions(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueLogs(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueLogs(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueLogs(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueLogs(threshold?: number): Promise<Models.HealthQueue>;
    getQueueLogs(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMails(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueMails(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueMails(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueMails(threshold?: number): Promise<Models.HealthQueue>;
    getQueueMails(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMessaging(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueMessaging(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueMessaging(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueMessaging(threshold?: number): Promise<Models.HealthQueue>;
    getQueueMessaging(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMigrations(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueMigrations(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueMigrations(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueMigrations(threshold?: number): Promise<Models.HealthQueue>;
    getQueueMigrations(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueStatsResources(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueStatsResources(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueStatsResources(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueStatsResources(threshold?: number): Promise<Models.HealthQueue>;
    getQueueStatsResources(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueUsage(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueUsage(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueUsage(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueUsage(threshold?: number): Promise<Models.HealthQueue>;
    getQueueUsage(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueWebhooks(params: { threshold?: number  }): Promise<Models.HealthQueue>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getQueueWebhooks(threshold?: number): Promise<Models.HealthQueue>;
     *
     * // New (object based)
     * getQueueWebhooks(params: { threshold?: number  }): Promise<Models.HealthQueue>;
     */
    getQueueWebhooks(threshold?: number): Promise<Models.HealthQueue>;
    getQueueWebhooks(
        paramsOrFirst?: { threshold?: number } | number    
    ): Promise<Models.HealthQueue> {
        let params: { threshold?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { threshold?: number };
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
