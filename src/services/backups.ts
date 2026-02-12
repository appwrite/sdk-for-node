import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { BackupServices } from '../enums/backup-services';

export class Backups {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all archives for a project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchiveList>}
     */
    listArchives(params?: { queries?: string[] }): Promise<Models.BackupArchiveList>;
    /**
     * List all archives for a project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchiveList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listArchives(queries?: string[]): Promise<Models.BackupArchiveList>;
    listArchives(
        paramsOrFirst?: { queries?: string[] } | string[]    
    ): Promise<Models.BackupArchiveList> {
        let params: { queries?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[]            
            };
        }
        
        const queries = params.queries;


        const apiPath = '/backups/archives';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Create a new archive asynchronously for a project.
     *
     * @param {BackupServices[]} params.services - Array of services to backup
     * @param {string} params.resourceId - Resource ID. When set, only this single resource will be backed up.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     */
    createArchive(params: { services: BackupServices[], resourceId?: string }): Promise<Models.BackupArchive>;
    /**
     * Create a new archive asynchronously for a project.
     *
     * @param {BackupServices[]} services - Array of services to backup
     * @param {string} resourceId - Resource ID. When set, only this single resource will be backed up.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createArchive(services: BackupServices[], resourceId?: string): Promise<Models.BackupArchive>;
    createArchive(
        paramsOrFirst: { services: BackupServices[], resourceId?: string } | BackupServices[],
        ...rest: [(string)?]    
    ): Promise<Models.BackupArchive> {
        let params: { services: BackupServices[], resourceId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('services' in paramsOrFirst || 'resourceId' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { services: BackupServices[], resourceId?: string };
        } else {
            params = {
                services: paramsOrFirst as BackupServices[],
                resourceId: rest[0] as string            
            };
        }
        
        const services = params.services;
        const resourceId = params.resourceId;

        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }

        const apiPath = '/backups/archives';
        const payload: Payload = {};
        if (typeof services !== 'undefined') {
            payload['services'] = services;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a backup archive using it's ID.
     *
     * @param {string} params.archiveId - Archive ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     */
    getArchive(params: { archiveId: string }): Promise<Models.BackupArchive>;
    /**
     * Get a backup archive using it's ID.
     *
     * @param {string} archiveId - Archive ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getArchive(archiveId: string): Promise<Models.BackupArchive>;
    getArchive(
        paramsOrFirst: { archiveId: string } | string    
    ): Promise<Models.BackupArchive> {
        let params: { archiveId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { archiveId: string };
        } else {
            params = {
                archiveId: paramsOrFirst as string            
            };
        }
        
        const archiveId = params.archiveId;

        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }

        const apiPath = '/backups/archives/{archiveId}'.replace('{archiveId}', archiveId);
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
     * Delete an existing archive for a project.
     *
     * @param {string} params.archiveId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteArchive(params: { archiveId: string }): Promise<{}>;
    /**
     * Delete an existing archive for a project.
     *
     * @param {string} archiveId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteArchive(archiveId: string): Promise<{}>;
    deleteArchive(
        paramsOrFirst: { archiveId: string } | string    
    ): Promise<{}> {
        let params: { archiveId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { archiveId: string };
        } else {
            params = {
                archiveId: paramsOrFirst as string            
            };
        }
        
        const archiveId = params.archiveId;

        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }

        const apiPath = '/backups/archives/{archiveId}'.replace('{archiveId}', archiveId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * List all policies for a project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     */
    listPolicies(params?: { queries?: string[] }): Promise<Models.BackupPolicyList>;
    /**
     * List all policies for a project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listPolicies(queries?: string[]): Promise<Models.BackupPolicyList>;
    listPolicies(
        paramsOrFirst?: { queries?: string[] } | string[]    
    ): Promise<Models.BackupPolicyList> {
        let params: { queries?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[]            
            };
        }
        
        const queries = params.queries;


        const apiPath = '/backups/policies';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Create a new backup policy.
     *
     * @param {string} params.policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {BackupServices[]} params.services - Array of services to backup
     * @param {number} params.retention - Days to keep backups before deletion
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {string} params.name - Policy name. Max length: 128 chars.
     * @param {string} params.resourceId - Resource ID. When set, only this single resource will be backed up.
     * @param {boolean} params.enabled - Is policy enabled? When set to 'disabled', no backups will be taken
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    createPolicy(params: { policyId: string, services: BackupServices[], retention: number, schedule: string, name?: string, resourceId?: string, enabled?: boolean }): Promise<Models.BackupPolicy>;
    /**
     * Create a new backup policy.
     *
     * @param {string} policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {BackupServices[]} services - Array of services to backup
     * @param {number} retention - Days to keep backups before deletion
     * @param {string} schedule - Schedule CRON syntax.
     * @param {string} name - Policy name. Max length: 128 chars.
     * @param {string} resourceId - Resource ID. When set, only this single resource will be backed up.
     * @param {boolean} enabled - Is policy enabled? When set to 'disabled', no backups will be taken
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPolicy(policyId: string, services: BackupServices[], retention: number, schedule: string, name?: string, resourceId?: string, enabled?: boolean): Promise<Models.BackupPolicy>;
    createPolicy(
        paramsOrFirst: { policyId: string, services: BackupServices[], retention: number, schedule: string, name?: string, resourceId?: string, enabled?: boolean } | string,
        ...rest: [(BackupServices[])?, (number)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.BackupPolicy> {
        let params: { policyId: string, services: BackupServices[], retention: number, schedule: string, name?: string, resourceId?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { policyId: string, services: BackupServices[], retention: number, schedule: string, name?: string, resourceId?: string, enabled?: boolean };
        } else {
            params = {
                policyId: paramsOrFirst as string,
                services: rest[0] as BackupServices[],
                retention: rest[1] as number,
                schedule: rest[2] as string,
                name: rest[3] as string,
                resourceId: rest[4] as string,
                enabled: rest[5] as boolean            
            };
        }
        
        const policyId = params.policyId;
        const services = params.services;
        const retention = params.retention;
        const schedule = params.schedule;
        const name = params.name;
        const resourceId = params.resourceId;
        const enabled = params.enabled;

        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }
        if (typeof retention === 'undefined') {
            throw new AppwriteException('Missing required parameter: "retention"');
        }
        if (typeof schedule === 'undefined') {
            throw new AppwriteException('Missing required parameter: "schedule"');
        }

        const apiPath = '/backups/policies';
        const payload: Payload = {};
        if (typeof policyId !== 'undefined') {
            payload['policyId'] = policyId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof services !== 'undefined') {
            payload['services'] = services;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof retention !== 'undefined') {
            payload['retention'] = retention;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a backup policy using it's ID.
     *
     * @param {string} params.policyId - Policy ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    getPolicy(params: { policyId: string }): Promise<Models.BackupPolicy>;
    /**
     * Get a backup policy using it's ID.
     *
     * @param {string} policyId - Policy ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPolicy(policyId: string): Promise<Models.BackupPolicy>;
    getPolicy(
        paramsOrFirst: { policyId: string } | string    
    ): Promise<Models.BackupPolicy> {
        let params: { policyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { policyId: string };
        } else {
            params = {
                policyId: paramsOrFirst as string            
            };
        }
        
        const policyId = params.policyId;

        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }

        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
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
     * Update an existing policy using it's ID.
     *
     * @param {string} params.policyId - Policy ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Policy name. Max length: 128 chars.
     * @param {number} params.retention - Days to keep backups before deletion
     * @param {string} params.schedule - Cron expression
     * @param {boolean} params.enabled - Is Backup enabled? When set to 'disabled', No backup will be taken
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    updatePolicy(params: { policyId: string, name?: string, retention?: number, schedule?: string, enabled?: boolean }): Promise<Models.BackupPolicy>;
    /**
     * Update an existing policy using it's ID.
     *
     * @param {string} policyId - Policy ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Policy name. Max length: 128 chars.
     * @param {number} retention - Days to keep backups before deletion
     * @param {string} schedule - Cron expression
     * @param {boolean} enabled - Is Backup enabled? When set to 'disabled', No backup will be taken
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePolicy(policyId: string, name?: string, retention?: number, schedule?: string, enabled?: boolean): Promise<Models.BackupPolicy>;
    updatePolicy(
        paramsOrFirst: { policyId: string, name?: string, retention?: number, schedule?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (number)?, (string)?, (boolean)?]    
    ): Promise<Models.BackupPolicy> {
        let params: { policyId: string, name?: string, retention?: number, schedule?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { policyId: string, name?: string, retention?: number, schedule?: string, enabled?: boolean };
        } else {
            params = {
                policyId: paramsOrFirst as string,
                name: rest[0] as string,
                retention: rest[1] as number,
                schedule: rest[2] as string,
                enabled: rest[3] as boolean            
            };
        }
        
        const policyId = params.policyId;
        const name = params.name;
        const retention = params.retention;
        const schedule = params.schedule;
        const enabled = params.enabled;

        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }

        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof retention !== 'undefined') {
            payload['retention'] = retention;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a policy using it's ID.
     *
     * @param {string} params.policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePolicy(params: { policyId: string }): Promise<{}>;
    /**
     * Delete a policy using it's ID.
     *
     * @param {string} policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deletePolicy(policyId: string): Promise<{}>;
    deletePolicy(
        paramsOrFirst: { policyId: string } | string    
    ): Promise<{}> {
        let params: { policyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { policyId: string };
        } else {
            params = {
                policyId: paramsOrFirst as string            
            };
        }
        
        const policyId = params.policyId;

        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }

        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create and trigger a new restoration for a backup on a project.
     *
     * @param {string} params.archiveId - Backup archive ID to restore
     * @param {BackupServices[]} params.services - Array of services to restore
     * @param {string} params.newResourceId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.newResourceName - Database name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     */
    createRestoration(params: { archiveId: string, services: BackupServices[], newResourceId?: string, newResourceName?: string }): Promise<Models.BackupRestoration>;
    /**
     * Create and trigger a new restoration for a backup on a project.
     *
     * @param {string} archiveId - Backup archive ID to restore
     * @param {BackupServices[]} services - Array of services to restore
     * @param {string} newResourceId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} newResourceName - Database name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRestoration(archiveId: string, services: BackupServices[], newResourceId?: string, newResourceName?: string): Promise<Models.BackupRestoration>;
    createRestoration(
        paramsOrFirst: { archiveId: string, services: BackupServices[], newResourceId?: string, newResourceName?: string } | string,
        ...rest: [(BackupServices[])?, (string)?, (string)?]    
    ): Promise<Models.BackupRestoration> {
        let params: { archiveId: string, services: BackupServices[], newResourceId?: string, newResourceName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { archiveId: string, services: BackupServices[], newResourceId?: string, newResourceName?: string };
        } else {
            params = {
                archiveId: paramsOrFirst as string,
                services: rest[0] as BackupServices[],
                newResourceId: rest[1] as string,
                newResourceName: rest[2] as string            
            };
        }
        
        const archiveId = params.archiveId;
        const services = params.services;
        const newResourceId = params.newResourceId;
        const newResourceName = params.newResourceName;

        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }
        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }

        const apiPath = '/backups/restoration';
        const payload: Payload = {};
        if (typeof archiveId !== 'undefined') {
            payload['archiveId'] = archiveId;
        }
        if (typeof services !== 'undefined') {
            payload['services'] = services;
        }
        if (typeof newResourceId !== 'undefined') {
            payload['newResourceId'] = newResourceId;
        }
        if (typeof newResourceName !== 'undefined') {
            payload['newResourceName'] = newResourceName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * List all backup restorations for a project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestorationList>}
     */
    listRestorations(params?: { queries?: string[] }): Promise<Models.BackupRestorationList>;
    /**
     * List all backup restorations for a project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestorationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRestorations(queries?: string[]): Promise<Models.BackupRestorationList>;
    listRestorations(
        paramsOrFirst?: { queries?: string[] } | string[]    
    ): Promise<Models.BackupRestorationList> {
        let params: { queries?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[]            
            };
        }
        
        const queries = params.queries;


        const apiPath = '/backups/restorations';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Get the current status of a backup restoration.
     *
     * @param {string} params.restorationId - Restoration ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     */
    getRestoration(params: { restorationId: string }): Promise<Models.BackupRestoration>;
    /**
     * Get the current status of a backup restoration.
     *
     * @param {string} restorationId - Restoration ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRestoration(restorationId: string): Promise<Models.BackupRestoration>;
    getRestoration(
        paramsOrFirst: { restorationId: string } | string    
    ): Promise<Models.BackupRestoration> {
        let params: { restorationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { restorationId: string };
        } else {
            params = {
                restorationId: paramsOrFirst as string            
            };
        }
        
        const restorationId = params.restorationId;

        if (typeof restorationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "restorationId"');
        }

        const apiPath = '/backups/restorations/{restorationId}'.replace('{restorationId}', restorationId);
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
