import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Runtime } from '../enums/runtime';
import { VCSDeploymentType } from '../enums/v-c-s-deployment-type';
import { DeploymentDownloadType } from '../enums/deployment-download-type';
import { ExecutionMethod } from '../enums/execution-method';

export class Functions {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the project's functions. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deploymentId, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.FunctionList>}
     */
    list(params: { queries?: string[], search?: string  }): Promise<Models.FunctionList>;
    /**
     * Get a list of all the project's functions. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deploymentId, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.FunctionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string): Promise<Models.FunctionList>;
    list(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.FunctionList> {
        let params: { queries?: string[], search?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/functions';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.
     *
     * @param {string} params.functionId - Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Function name. Max length: 128 chars.
     * @param {Runtime} params.runtime - Execution runtime.
     * @param {string[]} params.execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {number} params.timeout - Function maximum execution time in seconds.
     * @param {boolean} params.enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {boolean} params.logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} params.entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string} params.commands - Build Commands.
     * @param {string[]} params.scopes - List of scopes allowed for API key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the function.
     * @param {string} params.providerBranch - Production branch for the repo linked to the function.
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} params.providerRootDirectory - Path to function code in the linked repo.
     * @param {string} params.specification - Runtime specification for the function and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    create(params: { functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string  }): Promise<Models.Function>;
    /**
     * Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.
     *
     * @param {string} functionId - Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Function name. Max length: 128 chars.
     * @param {Runtime} runtime - Execution runtime.
     * @param {string[]} execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {string} schedule - Schedule CRON syntax.
     * @param {number} timeout - Function maximum execution time in seconds.
     * @param {boolean} enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {boolean} logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string} commands - Build Commands.
     * @param {string[]} scopes - List of scopes allowed for API key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the function.
     * @param {string} providerBranch - Production branch for the repo linked to the function.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} providerRootDirectory - Path to function code in the linked repo.
     * @param {string} specification - Runtime specification for the function and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Function>;
    create(
        paramsOrFirst: { functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string } | string,
        ...rest: [(string)?, (Runtime)?, (string[])?, (string[])?, (string)?, (number)?, (boolean)?, (boolean)?, (string)?, (string)?, (string[])?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Function> {
        let params: { functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                name: rest[0] as string,
                runtime: rest[1] as Runtime,
                execute: rest[2] as string[],
                events: rest[3] as string[],
                schedule: rest[4] as string,
                timeout: rest[5] as number,
                enabled: rest[6] as boolean,
                logging: rest[7] as boolean,
                entrypoint: rest[8] as string,
                commands: rest[9] as string,
                scopes: rest[10] as string[],
                installationId: rest[11] as string,
                providerRepositoryId: rest[12] as string,
                providerBranch: rest[13] as string,
                providerSilentMode: rest[14] as boolean,
                providerRootDirectory: rest[15] as string,
                specification: rest[16] as string            
            };
        }
        
        const functionId = params.functionId;
        const name = params.name;
        const runtime = params.runtime;
        const execute = params.execute;
        const events = params.events;
        const schedule = params.schedule;
        const timeout = params.timeout;
        const enabled = params.enabled;
        const logging = params.logging;
        const entrypoint = params.entrypoint;
        const commands = params.commands;
        const scopes = params.scopes;
        const installationId = params.installationId;
        const providerRepositoryId = params.providerRepositoryId;
        const providerBranch = params.providerBranch;
        const providerSilentMode = params.providerSilentMode;
        const providerRootDirectory = params.providerRootDirectory;
        const specification = params.specification;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof runtime === 'undefined') {
            throw new AppwriteException('Missing required parameter: "runtime"');
        }

        const apiPath = '/functions';
        const payload: Payload = {};
        if (typeof functionId !== 'undefined') {
            payload['functionId'] = functionId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof runtime !== 'undefined') {
            payload['runtime'] = runtime;
        }
        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            payload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerBranch !== 'undefined') {
            payload['providerBranch'] = providerBranch;
        }
        if (typeof providerSilentMode !== 'undefined') {
            payload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
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
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.RuntimeList>}
     */
    listRuntimes(): Promise<Models.RuntimeList> {

        const apiPath = '/functions/runtimes';
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
     * List allowed function specifications for this instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.SpecificationList>}
     */
    listSpecifications(): Promise<Models.SpecificationList> {

        const apiPath = '/functions/specifications';
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
     * Get a function by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    get(params: { functionId: string  }): Promise<Models.Function>;
    /**
     * Get a function by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(functionId: string): Promise<Models.Function>;
    get(
        paramsOrFirst: { functionId: string } | string    
    ): Promise<Models.Function> {
        let params: { functionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string            
            };
        }
        
        const functionId = params.functionId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
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
     * Update function by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.name - Function name. Max length: 128 chars.
     * @param {Runtime} params.runtime - Execution runtime.
     * @param {string[]} params.execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {number} params.timeout - Maximum execution time in seconds.
     * @param {boolean} params.enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {boolean} params.logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} params.entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string} params.commands - Build Commands.
     * @param {string[]} params.scopes - List of scopes allowed for API Key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Controle System) deployment.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the function
     * @param {string} params.providerBranch - Production branch for the repo linked to the function
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} params.providerRootDirectory - Path to function code in the linked repo.
     * @param {string} params.specification - Runtime specification for the function and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    update(params: { functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string  }): Promise<Models.Function>;
    /**
     * Update function by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} name - Function name. Max length: 128 chars.
     * @param {Runtime} runtime - Execution runtime.
     * @param {string[]} execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {string} schedule - Schedule CRON syntax.
     * @param {number} timeout - Maximum execution time in seconds.
     * @param {boolean} enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {boolean} logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string} commands - Build Commands.
     * @param {string[]} scopes - List of scopes allowed for API Key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Controle System) deployment.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the function
     * @param {string} providerBranch - Production branch for the repo linked to the function
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} providerRootDirectory - Path to function code in the linked repo.
     * @param {string} specification - Runtime specification for the function and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Function>;
    update(
        paramsOrFirst: { functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string } | string,
        ...rest: [(string)?, (Runtime)?, (string[])?, (string[])?, (string)?, (number)?, (boolean)?, (boolean)?, (string)?, (string)?, (string[])?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Function> {
        let params: { functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                name: rest[0] as string,
                runtime: rest[1] as Runtime,
                execute: rest[2] as string[],
                events: rest[3] as string[],
                schedule: rest[4] as string,
                timeout: rest[5] as number,
                enabled: rest[6] as boolean,
                logging: rest[7] as boolean,
                entrypoint: rest[8] as string,
                commands: rest[9] as string,
                scopes: rest[10] as string[],
                installationId: rest[11] as string,
                providerRepositoryId: rest[12] as string,
                providerBranch: rest[13] as string,
                providerSilentMode: rest[14] as boolean,
                providerRootDirectory: rest[15] as string,
                specification: rest[16] as string            
            };
        }
        
        const functionId = params.functionId;
        const name = params.name;
        const runtime = params.runtime;
        const execute = params.execute;
        const events = params.events;
        const schedule = params.schedule;
        const timeout = params.timeout;
        const enabled = params.enabled;
        const logging = params.logging;
        const entrypoint = params.entrypoint;
        const commands = params.commands;
        const scopes = params.scopes;
        const installationId = params.installationId;
        const providerRepositoryId = params.providerRepositoryId;
        const providerBranch = params.providerBranch;
        const providerSilentMode = params.providerSilentMode;
        const providerRootDirectory = params.providerRootDirectory;
        const specification = params.specification;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof runtime !== 'undefined') {
            payload['runtime'] = runtime;
        }
        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            payload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerBranch !== 'undefined') {
            payload['providerBranch'] = providerBranch;
        }
        if (typeof providerSilentMode !== 'undefined') {
            payload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a function by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { functionId: string  }): Promise<{}>;
    /**
     * Delete a function by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(functionId: string): Promise<{}>;
    delete(
        paramsOrFirst: { functionId: string } | string    
    ): Promise<{}> {
        let params: { functionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string            
            };
        }
        
        const functionId = params.functionId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
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
     * Update the function active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your function.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    updateFunctionDeployment(params: { functionId: string, deploymentId: string  }): Promise<Models.Function>;
    /**
     * Update the function active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your function.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFunctionDeployment(functionId: string, deploymentId: string): Promise<Models.Function>;
    updateFunctionDeployment(
        paramsOrFirst: { functionId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Function> {
        let params: { functionId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployment'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof deploymentId !== 'undefined') {
            payload['deploymentId'] = deploymentId;
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
     * Get a list of all the function's code deployments. You can use the query params to filter your results.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     */
    listDeployments(params: { functionId: string, queries?: string[], search?: string  }): Promise<Models.DeploymentList>;
    /**
     * Get a list of all the function's code deployments. You can use the query params to filter your results.
     *
     * @param {string} functionId - Function ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDeployments(functionId: string, queries?: string[], search?: string): Promise<Models.DeploymentList>;
    listDeployments(
        paramsOrFirst: { functionId: string, queries?: string[], search?: string } | string,
        ...rest: [(string[])?, (string)?]    
    ): Promise<Models.DeploymentList> {
        let params: { functionId: string, queries?: string[], search?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, queries?: string[], search?: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string            
            };
        }
        
        const functionId = params.functionId;
        const queries = params.queries;
        const search = params.search;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.
     * 
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).
     * 
     * Use the "command" param to set the entrypoint used to execute your code.
     *
     * @param {string} params.functionId - Function ID.
     * @param {File} params.code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @param {string} params.entrypoint - Entrypoint File.
     * @param {string} params.commands - Build Commands.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDeployment(params: { functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string , onProgress?: (progress: UploadProgress) => {} }): Promise<Models.Deployment>;
    /**
     * Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.
     * 
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).
     * 
     * Use the "command" param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId - Function ID.
     * @param {File} code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @param {string} entrypoint - Entrypoint File.
     * @param {string} commands - Build Commands.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDeployment(functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string, onProgress?: (progress: UploadProgress) => {}): Promise<Models.Deployment>;
    createDeployment(
        paramsOrFirst: { functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string, onProgress?: (progress: UploadProgress) => {}  } | string,
        ...rest: [(File)?, (boolean)?, (string)?, (string)?,((progress: UploadProgress) => {})?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string };
        let onProgress: ((progress: UploadProgress) => {});
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string };
            onProgress = paramsOrFirst?.onProgress as ((progress: UploadProgress) => {});
        } else {
            params = {
                functionId: paramsOrFirst as string,
                code: rest[0] as File,
                activate: rest[1] as boolean,
                entrypoint: rest[2] as string,
                commands: rest[3] as string            
            };
            onProgress = rest[4] as ((progress: UploadProgress) => {});
        }
        
        const functionId = params.functionId;
        const code = params.code;
        const activate = params.activate;
        const entrypoint = params.entrypoint;
        const commands = params.commands;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }
        if (typeof activate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "activate"');
        }

        const apiPath = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof code !== 'undefined') {
            payload['code'] = code;
        }
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'multipart/form-data',
        }

        return this.client.chunkedUpload(
            'post',
            uri,
            apiHeaders,
            payload,
            onProgress
        );
    }

    /**
     * Create a new build for an existing function deployment. This endpoint allows you to rebuild a deployment with the updated function configuration, including its entrypoint and build commands if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @param {string} params.buildId - Build unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDuplicateDeployment(params: { functionId: string, deploymentId: string, buildId?: string  }): Promise<Models.Deployment>;
    /**
     * Create a new build for an existing function deployment. This endpoint allows you to rebuild a deployment with the updated function configuration, including its entrypoint and build commands if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @param {string} buildId - Build unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDuplicateDeployment(functionId: string, deploymentId: string, buildId?: string): Promise<Models.Deployment>;
    createDuplicateDeployment(
        paramsOrFirst: { functionId: string, deploymentId: string, buildId?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, deploymentId: string, buildId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string, buildId?: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string,
                buildId: rest[1] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;
        const buildId = params.buildId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/duplicate'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof deploymentId !== 'undefined') {
            payload['deploymentId'] = deploymentId;
        }
        if (typeof buildId !== 'undefined') {
            payload['buildId'] = buildId;
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
     * Create a deployment based on a template.
     * 
     * Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/server/functions#listTemplates) to find the template details.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.repository - Repository name of the template.
     * @param {string} params.owner - The name of the owner of the template.
     * @param {string} params.rootDirectory - Path to function code in the template repo.
     * @param {string} params.version - Version (tag) for the repo linked to the function template.
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createTemplateDeployment(params: { functionId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean  }): Promise<Models.Deployment>;
    /**
     * Create a deployment based on a template.
     * 
     * Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/server/functions#listTemplates) to find the template details.
     *
     * @param {string} functionId - Function ID.
     * @param {string} repository - Repository name of the template.
     * @param {string} owner - The name of the owner of the template.
     * @param {string} rootDirectory - Path to function code in the template repo.
     * @param {string} version - Version (tag) for the repo linked to the function template.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTemplateDeployment(functionId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean): Promise<Models.Deployment>;
    createTemplateDeployment(
        paramsOrFirst: { functionId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                repository: rest[0] as string,
                owner: rest[1] as string,
                rootDirectory: rest[2] as string,
                version: rest[3] as string,
                activate: rest[4] as boolean            
            };
        }
        
        const functionId = params.functionId;
        const repository = params.repository;
        const owner = params.owner;
        const rootDirectory = params.rootDirectory;
        const version = params.version;
        const activate = params.activate;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof repository === 'undefined') {
            throw new AppwriteException('Missing required parameter: "repository"');
        }
        if (typeof owner === 'undefined') {
            throw new AppwriteException('Missing required parameter: "owner"');
        }
        if (typeof rootDirectory === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rootDirectory"');
        }
        if (typeof version === 'undefined') {
            throw new AppwriteException('Missing required parameter: "version"');
        }

        const apiPath = '/functions/{functionId}/deployments/template'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof repository !== 'undefined') {
            payload['repository'] = repository;
        }
        if (typeof owner !== 'undefined') {
            payload['owner'] = owner;
        }
        if (typeof rootDirectory !== 'undefined') {
            payload['rootDirectory'] = rootDirectory;
        }
        if (typeof version !== 'undefined') {
            payload['version'] = version;
        }
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
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
     * Create a deployment when a function is connected to VCS.
     * 
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} params.functionId - Function ID.
     * @param {VCSDeploymentType} params.type - Type of reference passed. Allowed values are: branch, commit
     * @param {string} params.reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createVcsDeployment(params: { functionId: string, type: VCSDeploymentType, reference: string, activate?: boolean  }): Promise<Models.Deployment>;
    /**
     * Create a deployment when a function is connected to VCS.
     * 
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} functionId - Function ID.
     * @param {VCSDeploymentType} type - Type of reference passed. Allowed values are: branch, commit
     * @param {string} reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVcsDeployment(functionId: string, type: VCSDeploymentType, reference: string, activate?: boolean): Promise<Models.Deployment>;
    createVcsDeployment(
        paramsOrFirst: { functionId: string, type: VCSDeploymentType, reference: string, activate?: boolean } | string,
        ...rest: [(VCSDeploymentType)?, (string)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, type: VCSDeploymentType, reference: string, activate?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, type: VCSDeploymentType, reference: string, activate?: boolean };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                type: rest[0] as VCSDeploymentType,
                reference: rest[1] as string,
                activate: rest[2] as boolean            
            };
        }
        
        const functionId = params.functionId;
        const type = params.type;
        const reference = params.reference;
        const activate = params.activate;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof reference === 'undefined') {
            throw new AppwriteException('Missing required parameter: "reference"');
        }

        const apiPath = '/functions/{functionId}/deployments/vcs'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof reference !== 'undefined') {
            payload['reference'] = reference;
        }
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
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
     * Get a function deployment by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    getDeployment(params: { functionId: string, deploymentId: string  }): Promise<Models.Deployment>;
    /**
     * Get a function deployment by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDeployment(functionId: string, deploymentId: string): Promise<Models.Deployment>;
    getDeployment(
        paramsOrFirst: { functionId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
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
     * Delete a code deployment by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDeployment(params: { functionId: string, deploymentId: string  }): Promise<{}>;
    /**
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDeployment(functionId: string, deploymentId: string): Promise<{}>;
    deleteDeployment(
        paramsOrFirst: { functionId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { functionId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
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
     * Get a function deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @param {DeploymentDownloadType} params.type - Deployment file to download. Can be: "source", "output".
     * @throws {AppwriteException}
     * @returns {Promise<ArrayBuffer>}
     */
    getDeploymentDownload(params: { functionId: string, deploymentId: string, type?: DeploymentDownloadType  }): Promise<ArrayBuffer>;
    /**
     * Get a function deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @param {DeploymentDownloadType} type - Deployment file to download. Can be: "source", "output".
     * @throws {AppwriteException}
     * @returns {Promise<ArrayBuffer>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDeploymentDownload(functionId: string, deploymentId: string, type?: DeploymentDownloadType): Promise<ArrayBuffer>;
    getDeploymentDownload(
        paramsOrFirst: { functionId: string, deploymentId: string, type?: DeploymentDownloadType } | string,
        ...rest: [(string)?, (DeploymentDownloadType)?]    
    ): Promise<ArrayBuffer> {
        let params: { functionId: string, deploymentId: string, type?: DeploymentDownloadType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string, type?: DeploymentDownloadType };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string,
                type: rest[1] as DeploymentDownloadType            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;
        const type = params.type;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/download'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
            'arrayBuffer'
        );
    }

    /**
     * Cancel an ongoing function deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    updateDeploymentStatus(params: { functionId: string, deploymentId: string  }): Promise<Models.Deployment>;
    /**
     * Cancel an ongoing function deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDeploymentStatus(functionId: string, deploymentId: string): Promise<Models.Deployment>;
    updateDeploymentStatus(
        paramsOrFirst: { functionId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/status'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};
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
     * Get a list of all the current user function execution logs. You can use the query params to filter your results.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     */
    listExecutions(params: { functionId: string, queries?: string[]  }): Promise<Models.ExecutionList>;
    /**
     * Get a list of all the current user function execution logs. You can use the query params to filter your results.
     *
     * @param {string} functionId - Function ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listExecutions(functionId: string, queries?: string[]): Promise<Models.ExecutionList>;
    listExecutions(
        paramsOrFirst: { functionId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.ExecutionList> {
        let params: { functionId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, queries?: string[] };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const functionId = params.functionId;
        const queries = params.queries;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
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
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.body - HTTP body of execution. Default value is empty string.
     * @param {boolean} params.async - Execute code in the background. Default value is false.
     * @param {string} params.xpath - HTTP path of execution. Path can include query params. Default value is /
     * @param {ExecutionMethod} params.method - HTTP method of execution. Default value is GET.
     * @param {object} params.headers - HTTP headers of execution. Defaults to empty.
     * @param {string} params.scheduledAt - Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    createExecution(params: { functionId: string, body?: string, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string  }): Promise<Models.Execution>;
    /**
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
     *
     * @param {string} functionId - Function ID.
     * @param {string} body - HTTP body of execution. Default value is empty string.
     * @param {boolean} async - Execute code in the background. Default value is false.
     * @param {string} xpath - HTTP path of execution. Path can include query params. Default value is /
     * @param {ExecutionMethod} method - HTTP method of execution. Default value is GET.
     * @param {object} headers - HTTP headers of execution. Defaults to empty.
     * @param {string} scheduledAt - Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createExecution(functionId: string, body?: string, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string): Promise<Models.Execution>;
    createExecution(
        paramsOrFirst: { functionId: string, body?: string, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (ExecutionMethod)?, (object)?, (string)?]    
    ): Promise<Models.Execution> {
        let params: { functionId: string, body?: string, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, body?: string, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                body: rest[0] as string,
                async: rest[1] as boolean,
                xpath: rest[2] as string,
                method: rest[3] as ExecutionMethod,
                headers: rest[4] as object,
                scheduledAt: rest[5] as string            
            };
        }
        
        const functionId = params.functionId;
        const body = params.body;
        const async = params.async;
        const xpath = params.xpath;
        const method = params.method;
        const headers = params.headers;
        const scheduledAt = params.scheduledAt;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof async !== 'undefined') {
            payload['async'] = async;
        }
        if (typeof xpath !== 'undefined') {
            payload['path'] = xpath;
        }
        if (typeof method !== 'undefined') {
            payload['method'] = method;
        }
        if (typeof headers !== 'undefined') {
            payload['headers'] = headers;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
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
     * Get a function execution log by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.executionId - Execution ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    getExecution(params: { functionId: string, executionId: string  }): Promise<Models.Execution>;
    /**
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} executionId - Execution ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getExecution(functionId: string, executionId: string): Promise<Models.Execution>;
    getExecution(
        paramsOrFirst: { functionId: string, executionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Execution> {
        let params: { functionId: string, executionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, executionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                executionId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const executionId = params.executionId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof executionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "executionId"');
        }

        const apiPath = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
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
     * Delete a function execution by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.executionId - Execution ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteExecution(params: { functionId: string, executionId: string  }): Promise<{}>;
    /**
     * Delete a function execution by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} executionId - Execution ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteExecution(functionId: string, executionId: string): Promise<{}>;
    deleteExecution(
        paramsOrFirst: { functionId: string, executionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { functionId: string, executionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, executionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                executionId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const executionId = params.executionId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof executionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "executionId"');
        }

        const apiPath = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
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
     * Get a list of all variables of a specific function.
     *
     * @param {string} params.functionId - Function unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(params: { functionId: string  }): Promise<Models.VariableList>;
    /**
     * Get a list of all variables of a specific function.
     *
     * @param {string} functionId - Function unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listVariables(functionId: string): Promise<Models.VariableList>;
    listVariables(
        paramsOrFirst: { functionId: string } | string    
    ): Promise<Models.VariableList> {
        let params: { functionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string            
            };
        }
        
        const functionId = params.functionId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
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
     * Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: { functionId: string, key: string, value: string, secret?: boolean  }): Promise<Models.Variable>;
    /**
     * Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVariable(functionId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    createVariable(
        paramsOrFirst: { functionId: string, key: string, value: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { functionId: string, key: string, value: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, key: string, value: string, secret?: boolean };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                key: rest[0] as string,
                value: rest[1] as string,
                secret: rest[2] as boolean            
            };
        }
        
        const functionId = params.functionId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }

        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
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
     * Get a variable by its unique ID.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: { functionId: string, variableId: string  }): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getVariable(functionId: string, variableId: string): Promise<Models.Variable>;
    getVariable(
        paramsOrFirst: { functionId: string, variableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Variable> {
        let params: { functionId: string, variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, variableId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                variableId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const variableId = params.variableId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
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
     * Update variable by its unique ID.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: { functionId: string, variableId: string, key: string, value?: string, secret?: boolean  }): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} variableId - Variable unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVariable(functionId: string, variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    updateVariable(
        paramsOrFirst: { functionId: string, variableId: string, key: string, value?: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { functionId: string, variableId: string, key: string, value?: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, variableId: string, key: string, value?: string, secret?: boolean };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                variableId: rest[0] as string,
                key: rest[1] as string,
                value: rest[2] as string,
                secret: rest[3] as boolean            
            };
        }
        
        const functionId = params.functionId;
        const variableId = params.variableId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: { functionId: string, variableId: string  }): Promise<{}>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteVariable(functionId: string, variableId: string): Promise<{}>;
    deleteVariable(
        paramsOrFirst: { functionId: string, variableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { functionId: string, variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, variableId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                variableId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const variableId = params.variableId;

        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
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
}
