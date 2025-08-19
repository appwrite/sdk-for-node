import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Framework } from '../enums/framework';
import { BuildRuntime } from '../enums/build-runtime';
import { Adapter } from '../enums/adapter';
import { VCSDeploymentType } from '../enums/v-c-s-deployment-type';
import { DeploymentDownloadType } from '../enums/deployment-download-type';

export class Sites {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the project's sites. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, framework, deploymentId, buildCommand, installCommand, outputDirectory, installationId
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SiteList>}
     */
    list(params: { queries?: string[], search?: string  }): Promise<Models.SiteList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * list(queries?: string[], search?: string): Promise<Models.SiteList>;
     *
     * // New (object based)
     * list(params: { queries?: string[], search?: string  }): Promise<Models.SiteList>;
     */
    list(queries?: string[], search?: string): Promise<Models.SiteList>;
    list(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.SiteList> {
        let params: { queries?: string[], search?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/sites';
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
     * Create a new site.
     *
     * @param {string} siteId - Site ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Site name. Max length: 128 chars.
     * @param {Framework} framework - Sites framework.
     * @param {BuildRuntime} buildRuntime - Runtime to use during build step.
     * @param {boolean} enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {boolean} logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {number} timeout - Maximum request time in seconds.
     * @param {string} installCommand - Install Command.
     * @param {string} buildCommand - Build Command.
     * @param {string} outputDirectory - Output Directory for site.
     * @param {Adapter} adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} fallbackFile - Fallback file for single page application sites.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} providerBranch - Production branch for the repo linked to the site.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} providerRootDirectory - Path to site code in the linked repo.
     * @param {string} specification - Framework specification for the site and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    create(params: { siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string  }): Promise<Models.Site>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * create(siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site>;
     *
     * // New (object based)
     * create(params: { siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string  }): Promise<Models.Site>;
     */
    create(siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site>;
    create(
        paramsOrFirst: { siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string } | string,
        ...rest: [(string)?, (Framework)?, (BuildRuntime)?, (boolean)?, (boolean)?, (number)?, (string)?, (string)?, (string)?, (Adapter)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Site> {
        let params: { siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                name: rest[0] as string,
                framework: rest[1] as Framework,
                buildRuntime: rest[2] as BuildRuntime,
                enabled: rest[3] as boolean,
                logging: rest[4] as boolean,
                timeout: rest[5] as number,
                installCommand: rest[6] as string,
                buildCommand: rest[7] as string,
                outputDirectory: rest[8] as string,
                adapter: rest[9] as Adapter,
                installationId: rest[10] as string,
                fallbackFile: rest[11] as string,
                providerRepositoryId: rest[12] as string,
                providerBranch: rest[13] as string,
                providerSilentMode: rest[14] as boolean,
                providerRootDirectory: rest[15] as string,
                specification: rest[16] as string            
            };
        }
        
        const siteId = params.siteId;
        const name = params.name;
        const framework = params.framework;
        const buildRuntime = params.buildRuntime;
        const enabled = params.enabled;
        const logging = params.logging;
        const timeout = params.timeout;
        const installCommand = params.installCommand;
        const buildCommand = params.buildCommand;
        const outputDirectory = params.outputDirectory;
        const adapter = params.adapter;
        const installationId = params.installationId;
        const fallbackFile = params.fallbackFile;
        const providerRepositoryId = params.providerRepositoryId;
        const providerBranch = params.providerBranch;
        const providerSilentMode = params.providerSilentMode;
        const providerRootDirectory = params.providerRootDirectory;
        const specification = params.specification;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof framework === 'undefined') {
            throw new AppwriteException('Missing required parameter: "framework"');
        }
        if (typeof buildRuntime === 'undefined') {
            throw new AppwriteException('Missing required parameter: "buildRuntime"');
        }

        const apiPath = '/sites';
        const payload: Payload = {};
        if (typeof siteId !== 'undefined') {
            payload['siteId'] = siteId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof framework !== 'undefined') {
            payload['framework'] = framework;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof installCommand !== 'undefined') {
            payload['installCommand'] = installCommand;
        }
        if (typeof buildCommand !== 'undefined') {
            payload['buildCommand'] = buildCommand;
        }
        if (typeof outputDirectory !== 'undefined') {
            payload['outputDirectory'] = outputDirectory;
        }
        if (typeof buildRuntime !== 'undefined') {
            payload['buildRuntime'] = buildRuntime;
        }
        if (typeof adapter !== 'undefined') {
            payload['adapter'] = adapter;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof fallbackFile !== 'undefined') {
            payload['fallbackFile'] = fallbackFile;
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
     * Get a list of all frameworks that are currently available on the server instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.FrameworkList>}
     */
    listFrameworks(): Promise<Models.FrameworkList> {

        const apiPath = '/sites/frameworks';
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
     * List allowed site specifications for this instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.SpecificationList>}
     */
    listSpecifications(): Promise<Models.SpecificationList> {

        const apiPath = '/sites/specifications';
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
     * Get a site by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    get(params: { siteId: string  }): Promise<Models.Site>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * get(siteId: string): Promise<Models.Site>;
     *
     * // New (object based)
     * get(params: { siteId: string  }): Promise<Models.Site>;
     */
    get(siteId: string): Promise<Models.Site>;
    get(
        paramsOrFirst: { siteId: string } | string    
    ): Promise<Models.Site> {
        let params: { siteId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string            
            };
        }
        
        const siteId = params.siteId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}'.replace('{siteId}', siteId);
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
     * Update site by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} name - Site name. Max length: 128 chars.
     * @param {Framework} framework - Sites framework.
     * @param {boolean} enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {boolean} logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {number} timeout - Maximum request time in seconds.
     * @param {string} installCommand - Install Command.
     * @param {string} buildCommand - Build Command.
     * @param {string} outputDirectory - Output Directory for site.
     * @param {BuildRuntime} buildRuntime - Runtime to use during build step.
     * @param {Adapter} adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} fallbackFile - Fallback file for single page application sites.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} providerBranch - Production branch for the repo linked to the site.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} providerRootDirectory - Path to site code in the linked repo.
     * @param {string} specification - Framework specification for the site and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    update(params: { siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string  }): Promise<Models.Site>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * update(siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site>;
     *
     * // New (object based)
     * update(params: { siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string  }): Promise<Models.Site>;
     */
    update(siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site>;
    update(
        paramsOrFirst: { siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string } | string,
        ...rest: [(string)?, (Framework)?, (boolean)?, (boolean)?, (number)?, (string)?, (string)?, (string)?, (BuildRuntime)?, (Adapter)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Site> {
        let params: { siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                name: rest[0] as string,
                framework: rest[1] as Framework,
                enabled: rest[2] as boolean,
                logging: rest[3] as boolean,
                timeout: rest[4] as number,
                installCommand: rest[5] as string,
                buildCommand: rest[6] as string,
                outputDirectory: rest[7] as string,
                buildRuntime: rest[8] as BuildRuntime,
                adapter: rest[9] as Adapter,
                fallbackFile: rest[10] as string,
                installationId: rest[11] as string,
                providerRepositoryId: rest[12] as string,
                providerBranch: rest[13] as string,
                providerSilentMode: rest[14] as boolean,
                providerRootDirectory: rest[15] as string,
                specification: rest[16] as string            
            };
        }
        
        const siteId = params.siteId;
        const name = params.name;
        const framework = params.framework;
        const enabled = params.enabled;
        const logging = params.logging;
        const timeout = params.timeout;
        const installCommand = params.installCommand;
        const buildCommand = params.buildCommand;
        const outputDirectory = params.outputDirectory;
        const buildRuntime = params.buildRuntime;
        const adapter = params.adapter;
        const fallbackFile = params.fallbackFile;
        const installationId = params.installationId;
        const providerRepositoryId = params.providerRepositoryId;
        const providerBranch = params.providerBranch;
        const providerSilentMode = params.providerSilentMode;
        const providerRootDirectory = params.providerRootDirectory;
        const specification = params.specification;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof framework === 'undefined') {
            throw new AppwriteException('Missing required parameter: "framework"');
        }

        const apiPath = '/sites/{siteId}'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof framework !== 'undefined') {
            payload['framework'] = framework;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof installCommand !== 'undefined') {
            payload['installCommand'] = installCommand;
        }
        if (typeof buildCommand !== 'undefined') {
            payload['buildCommand'] = buildCommand;
        }
        if (typeof outputDirectory !== 'undefined') {
            payload['outputDirectory'] = outputDirectory;
        }
        if (typeof buildRuntime !== 'undefined') {
            payload['buildRuntime'] = buildRuntime;
        }
        if (typeof adapter !== 'undefined') {
            payload['adapter'] = adapter;
        }
        if (typeof fallbackFile !== 'undefined') {
            payload['fallbackFile'] = fallbackFile;
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
     * Delete a site by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { siteId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * delete(siteId: string): Promise<{}>;
     *
     * // New (object based)
     * delete(params: { siteId: string  }): Promise<{}>;
     */
    delete(siteId: string): Promise<{}>;
    delete(
        paramsOrFirst: { siteId: string } | string    
    ): Promise<{}> {
        let params: { siteId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string            
            };
        }
        
        const siteId = params.siteId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}'.replace('{siteId}', siteId);
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
     * Update the site active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your site.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    updateSiteDeployment(params: { siteId: string, deploymentId: string  }): Promise<Models.Site>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateSiteDeployment(siteId: string, deploymentId: string): Promise<Models.Site>;
     *
     * // New (object based)
     * updateSiteDeployment(params: { siteId: string, deploymentId: string  }): Promise<Models.Site>;
     */
    updateSiteDeployment(siteId: string, deploymentId: string): Promise<Models.Site>;
    updateSiteDeployment(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Site> {
        let params: { siteId: string, deploymentId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployment'.replace('{siteId}', siteId);
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
     * Get a list of all the site's code deployments. You can use the query params to filter your results.
     *
     * @param {string} siteId - Site ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     */
    listDeployments(params: { siteId: string, queries?: string[], search?: string  }): Promise<Models.DeploymentList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listDeployments(siteId: string, queries?: string[], search?: string): Promise<Models.DeploymentList>;
     *
     * // New (object based)
     * listDeployments(params: { siteId: string, queries?: string[], search?: string  }): Promise<Models.DeploymentList>;
     */
    listDeployments(siteId: string, queries?: string[], search?: string): Promise<Models.DeploymentList>;
    listDeployments(
        paramsOrFirst: { siteId: string, queries?: string[], search?: string } | string,
        ...rest: [(string[])?, (string)?]    
    ): Promise<Models.DeploymentList> {
        let params: { siteId: string, queries?: string[], search?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, queries?: string[], search?: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string            
            };
        }
        
        const siteId = params.siteId;
        const queries = params.queries;
        const search = params.search;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}/deployments'.replace('{siteId}', siteId);
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
     * Create a new site code deployment. Use this endpoint to upload a new version of your site code. To activate your newly uploaded code, you'll need to update the function's deployment to use your new deployment ID.
     *
     * @param {string} siteId - Site ID.
     * @param {File} code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @param {string} installCommand - Install Commands.
     * @param {string} buildCommand - Build Commands.
     * @param {string} outputDirectory - Output Directory.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDeployment(params: { siteId: string, code: File, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string , onProgress?: (progress: UploadProgress) => {} }): Promise<Models.Deployment>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createDeployment(siteId: string, code: File, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string, onProgress?: (progress: UploadProgress) => {}): Promise<Models.Deployment>;
     *
     * // New (object based)
     * createDeployment(params: { siteId: string, code: File, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string , onProgress?: (progress: UploadProgress) => {} }): Promise<Models.Deployment>;
     */
    createDeployment(siteId: string, code: File, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string, onProgress?: (progress: UploadProgress) => {}): Promise<Models.Deployment>;
    createDeployment(
        paramsOrFirst: { siteId: string, code: File, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string, onProgress?: (progress: UploadProgress) => {}  } | string,
        ...rest: [(File)?, (boolean)?, (string)?, (string)?, (string)?,((progress: UploadProgress) => {})?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, code: File, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string };
        let onProgress: ((progress: UploadProgress) => {});
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, code: File, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string };
            onProgress = paramsOrFirst.onProgress as ((progress: UploadProgress) => {});
        } else {
            params = {
                siteId: paramsOrFirst as string,
                code: rest[0] as File,
                activate: rest[1] as boolean,
                installCommand: rest[2] as string,
                buildCommand: rest[3] as string,
                outputDirectory: rest[4] as string            
            };
            onProgress = rest[5] as ((progress: UploadProgress) => {});
        }
        
        const siteId = params.siteId;
        const code = params.code;
        const activate = params.activate;
        const installCommand = params.installCommand;
        const buildCommand = params.buildCommand;
        const outputDirectory = params.outputDirectory;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }
        if (typeof activate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "activate"');
        }

        const apiPath = '/sites/{siteId}/deployments'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof installCommand !== 'undefined') {
            payload['installCommand'] = installCommand;
        }
        if (typeof buildCommand !== 'undefined') {
            payload['buildCommand'] = buildCommand;
        }
        if (typeof outputDirectory !== 'undefined') {
            payload['outputDirectory'] = outputDirectory;
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
     * Create a new build for an existing site deployment. This endpoint allows you to rebuild a deployment with the updated site configuration, including its commands and output directory if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDuplicateDeployment(params: { siteId: string, deploymentId: string  }): Promise<Models.Deployment>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createDuplicateDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment>;
     *
     * // New (object based)
     * createDuplicateDeployment(params: { siteId: string, deploymentId: string  }): Promise<Models.Deployment>;
     */
    createDuplicateDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment>;
    createDuplicateDeployment(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, deploymentId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/duplicate'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof deploymentId !== 'undefined') {
            payload['deploymentId'] = deploymentId;
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
     * Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/server/sites#listTemplates) to find the template details.
     *
     * @param {string} siteId - Site ID.
     * @param {string} repository - Repository name of the template.
     * @param {string} owner - The name of the owner of the template.
     * @param {string} rootDirectory - Path to site code in the template repo.
     * @param {string} version - Version (tag) for the repo linked to the site template.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createTemplateDeployment(params: { siteId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean  }): Promise<Models.Deployment>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createTemplateDeployment(siteId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean): Promise<Models.Deployment>;
     *
     * // New (object based)
     * createTemplateDeployment(params: { siteId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean  }): Promise<Models.Deployment>;
     */
    createTemplateDeployment(siteId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean): Promise<Models.Deployment>;
    createTemplateDeployment(
        paramsOrFirst: { siteId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                repository: rest[0] as string,
                owner: rest[1] as string,
                rootDirectory: rest[2] as string,
                version: rest[3] as string,
                activate: rest[4] as boolean            
            };
        }
        
        const siteId = params.siteId;
        const repository = params.repository;
        const owner = params.owner;
        const rootDirectory = params.rootDirectory;
        const version = params.version;
        const activate = params.activate;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
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

        const apiPath = '/sites/{siteId}/deployments/template'.replace('{siteId}', siteId);
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
     * Create a deployment when a site is connected to VCS.
     * 
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} siteId - Site ID.
     * @param {VCSDeploymentType} type - Type of reference passed. Allowed values are: branch, commit
     * @param {string} reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createVcsDeployment(params: { siteId: string, type: VCSDeploymentType, reference: string, activate?: boolean  }): Promise<Models.Deployment>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createVcsDeployment(siteId: string, type: VCSDeploymentType, reference: string, activate?: boolean): Promise<Models.Deployment>;
     *
     * // New (object based)
     * createVcsDeployment(params: { siteId: string, type: VCSDeploymentType, reference: string, activate?: boolean  }): Promise<Models.Deployment>;
     */
    createVcsDeployment(siteId: string, type: VCSDeploymentType, reference: string, activate?: boolean): Promise<Models.Deployment>;
    createVcsDeployment(
        paramsOrFirst: { siteId: string, type: VCSDeploymentType, reference: string, activate?: boolean } | string,
        ...rest: [(VCSDeploymentType)?, (string)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, type: VCSDeploymentType, reference: string, activate?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, type: VCSDeploymentType, reference: string, activate?: boolean };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                type: rest[0] as VCSDeploymentType,
                reference: rest[1] as string,
                activate: rest[2] as boolean            
            };
        }
        
        const siteId = params.siteId;
        const type = params.type;
        const reference = params.reference;
        const activate = params.activate;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof reference === 'undefined') {
            throw new AppwriteException('Missing required parameter: "reference"');
        }

        const apiPath = '/sites/{siteId}/deployments/vcs'.replace('{siteId}', siteId);
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
     * Get a site deployment by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    getDeployment(params: { siteId: string, deploymentId: string  }): Promise<Models.Deployment>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment>;
     *
     * // New (object based)
     * getDeployment(params: { siteId: string, deploymentId: string  }): Promise<Models.Deployment>;
     */
    getDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment>;
    getDeployment(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, deploymentId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/{deploymentId}'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
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
     * Delete a site deployment by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDeployment(params: { siteId: string, deploymentId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteDeployment(siteId: string, deploymentId: string): Promise<{}>;
     *
     * // New (object based)
     * deleteDeployment(params: { siteId: string, deploymentId: string  }): Promise<{}>;
     */
    deleteDeployment(siteId: string, deploymentId: string): Promise<{}>;
    deleteDeployment(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { siteId: string, deploymentId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/{deploymentId}'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
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
     * Get a site deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @param {DeploymentDownloadType} type - Deployment file to download. Can be: "source", "output".
     * @throws {AppwriteException}
     * @returns {Promise<ArrayBuffer>}
     */
    getDeploymentDownload(params: { siteId: string, deploymentId: string, type?: DeploymentDownloadType  }): Promise<ArrayBuffer>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getDeploymentDownload(siteId: string, deploymentId: string, type?: DeploymentDownloadType): Promise<ArrayBuffer>;
     *
     * // New (object based)
     * getDeploymentDownload(params: { siteId: string, deploymentId: string, type?: DeploymentDownloadType  }): Promise<ArrayBuffer>;
     */
    getDeploymentDownload(siteId: string, deploymentId: string, type?: DeploymentDownloadType): Promise<ArrayBuffer>;
    getDeploymentDownload(
        paramsOrFirst: { siteId: string, deploymentId: string, type?: DeploymentDownloadType } | string,
        ...rest: [(string)?, (DeploymentDownloadType)?]    
    ): Promise<ArrayBuffer> {
        let params: { siteId: string, deploymentId: string, type?: DeploymentDownloadType };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, deploymentId: string, type?: DeploymentDownloadType };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string,
                type: rest[1] as DeploymentDownloadType            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;
        const type = params.type;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/{deploymentId}/download'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
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
     * Cancel an ongoing site deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    updateDeploymentStatus(params: { siteId: string, deploymentId: string  }): Promise<Models.Deployment>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateDeploymentStatus(siteId: string, deploymentId: string): Promise<Models.Deployment>;
     *
     * // New (object based)
     * updateDeploymentStatus(params: { siteId: string, deploymentId: string  }): Promise<Models.Deployment>;
     */
    updateDeploymentStatus(siteId: string, deploymentId: string): Promise<Models.Deployment>;
    updateDeploymentStatus(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, deploymentId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/{deploymentId}/status'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
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
     * Get a list of all site logs. You can use the query params to filter your results.
     *
     * @param {string} siteId - Site ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     */
    listLogs(params: { siteId: string, queries?: string[]  }): Promise<Models.ExecutionList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listLogs(siteId: string, queries?: string[]): Promise<Models.ExecutionList>;
     *
     * // New (object based)
     * listLogs(params: { siteId: string, queries?: string[]  }): Promise<Models.ExecutionList>;
     */
    listLogs(siteId: string, queries?: string[]): Promise<Models.ExecutionList>;
    listLogs(
        paramsOrFirst: { siteId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.ExecutionList> {
        let params: { siteId: string, queries?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, queries?: string[] };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const siteId = params.siteId;
        const queries = params.queries;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}/logs'.replace('{siteId}', siteId);
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
     * Get a site request log by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} logId - Log ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    getLog(params: { siteId: string, logId: string  }): Promise<Models.Execution>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getLog(siteId: string, logId: string): Promise<Models.Execution>;
     *
     * // New (object based)
     * getLog(params: { siteId: string, logId: string  }): Promise<Models.Execution>;
     */
    getLog(siteId: string, logId: string): Promise<Models.Execution>;
    getLog(
        paramsOrFirst: { siteId: string, logId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Execution> {
        let params: { siteId: string, logId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, logId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                logId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const logId = params.logId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof logId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "logId"');
        }

        const apiPath = '/sites/{siteId}/logs/{logId}'.replace('{siteId}', siteId).replace('{logId}', logId);
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
     * Delete a site log by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} logId - Log ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteLog(params: { siteId: string, logId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteLog(siteId: string, logId: string): Promise<{}>;
     *
     * // New (object based)
     * deleteLog(params: { siteId: string, logId: string  }): Promise<{}>;
     */
    deleteLog(siteId: string, logId: string): Promise<{}>;
    deleteLog(
        paramsOrFirst: { siteId: string, logId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { siteId: string, logId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, logId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                logId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const logId = params.logId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof logId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "logId"');
        }

        const apiPath = '/sites/{siteId}/logs/{logId}'.replace('{siteId}', siteId).replace('{logId}', logId);
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
     * Get a list of all variables of a specific site.
     *
     * @param {string} siteId - Site unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(params: { siteId: string  }): Promise<Models.VariableList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listVariables(siteId: string): Promise<Models.VariableList>;
     *
     * // New (object based)
     * listVariables(params: { siteId: string  }): Promise<Models.VariableList>;
     */
    listVariables(siteId: string): Promise<Models.VariableList>;
    listVariables(
        paramsOrFirst: { siteId: string } | string    
    ): Promise<Models.VariableList> {
        let params: { siteId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string            
            };
        }
        
        const siteId = params.siteId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}/variables'.replace('{siteId}', siteId);
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
     * Create a new site variable. These variables can be accessed during build and runtime (server-side rendering) as environment variables.
     *
     * @param {string} siteId - Site unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: { siteId: string, key: string, value: string, secret?: boolean  }): Promise<Models.Variable>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createVariable(siteId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
     *
     * // New (object based)
     * createVariable(params: { siteId: string, key: string, value: string, secret?: boolean  }): Promise<Models.Variable>;
     */
    createVariable(siteId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    createVariable(
        paramsOrFirst: { siteId: string, key: string, value: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { siteId: string, key: string, value: string, secret?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, key: string, value: string, secret?: boolean };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                key: rest[0] as string,
                value: rest[1] as string,
                secret: rest[2] as boolean            
            };
        }
        
        const siteId = params.siteId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }

        const apiPath = '/sites/{siteId}/variables'.replace('{siteId}', siteId);
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
     * @param {string} siteId - Site unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: { siteId: string, variableId: string  }): Promise<Models.Variable>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getVariable(siteId: string, variableId: string): Promise<Models.Variable>;
     *
     * // New (object based)
     * getVariable(params: { siteId: string, variableId: string  }): Promise<Models.Variable>;
     */
    getVariable(siteId: string, variableId: string): Promise<Models.Variable>;
    getVariable(
        paramsOrFirst: { siteId: string, variableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Variable> {
        let params: { siteId: string, variableId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, variableId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                variableId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const variableId = params.variableId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/sites/{siteId}/variables/{variableId}'.replace('{siteId}', siteId).replace('{variableId}', variableId);
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
     * @param {string} siteId - Site unique ID.
     * @param {string} variableId - Variable unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: { siteId: string, variableId: string, key: string, value?: string, secret?: boolean  }): Promise<Models.Variable>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateVariable(siteId: string, variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable>;
     *
     * // New (object based)
     * updateVariable(params: { siteId: string, variableId: string, key: string, value?: string, secret?: boolean  }): Promise<Models.Variable>;
     */
    updateVariable(siteId: string, variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    updateVariable(
        paramsOrFirst: { siteId: string, variableId: string, key: string, value?: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { siteId: string, variableId: string, key: string, value?: string, secret?: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, variableId: string, key: string, value?: string, secret?: boolean };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                variableId: rest[0] as string,
                key: rest[1] as string,
                value: rest[2] as string,
                secret: rest[3] as boolean            
            };
        }
        
        const siteId = params.siteId;
        const variableId = params.variableId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/sites/{siteId}/variables/{variableId}'.replace('{siteId}', siteId).replace('{variableId}', variableId);
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
     * @param {string} siteId - Site unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: { siteId: string, variableId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteVariable(siteId: string, variableId: string): Promise<{}>;
     *
     * // New (object based)
     * deleteVariable(params: { siteId: string, variableId: string  }): Promise<{}>;
     */
    deleteVariable(siteId: string, variableId: string): Promise<{}>;
    deleteVariable(
        paramsOrFirst: { siteId: string, variableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { siteId: string, variableId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { siteId: string, variableId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                variableId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const variableId = params.variableId;

        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/sites/{siteId}/variables/{variableId}'.replace('{siteId}', siteId).replace('{variableId}', variableId);
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
