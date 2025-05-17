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
     * Get a list of all the project&#039;s sites. You can use the query params to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.SiteList>}
     */
    list(queries?: string[], search?: string): Promise<Models.SiteList> {
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
     * @param {string} siteId
     * @param {string} name
     * @param {Framework} framework
     * @param {BuildRuntime} buildRuntime
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {number} timeout
     * @param {string} installCommand
     * @param {string} buildCommand
     * @param {string} outputDirectory
     * @param {Adapter} adapter
     * @param {string} installationId
     * @param {string} fallbackFile
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} specification
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    create(siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site> {
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
     * @param {string} siteId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    get(siteId: string): Promise<Models.Site> {
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
     * @param {string} siteId
     * @param {string} name
     * @param {Framework} framework
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {number} timeout
     * @param {string} installCommand
     * @param {string} buildCommand
     * @param {string} outputDirectory
     * @param {BuildRuntime} buildRuntime
     * @param {Adapter} adapter
     * @param {string} fallbackFile
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} specification
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    update(siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site> {
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
     * @param {string} siteId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(siteId: string): Promise<{}> {
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
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    updateSiteDeployment(siteId: string, deploymentId: string): Promise<Models.Site> {
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
     * Get a list of all the site&#039;s code deployments. You can use the query params to filter your results.
     *
     * @param {string} siteId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     */
    listDeployments(siteId: string, queries?: string[], search?: string): Promise<Models.DeploymentList> {
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
     * Create a new site code deployment. Use this endpoint to upload a new version of your site code. To activate your newly uploaded code, you&#039;ll need to update the function&#039;s deployment to use your new deployment ID.
     *
     * @param {string} siteId
     * @param {File} code
     * @param {boolean} activate
     * @param {string} installCommand
     * @param {string} buildCommand
     * @param {string} outputDirectory
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDeployment(siteId: string, code: File, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string, onProgress = (progress: UploadProgress) => {}): Promise<Models.Deployment> {
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
     * Create a new build for an existing site deployment. This endpoint allows you to rebuild a deployment with the updated site configuration, including its commands and output directory if they have been modified. The build process will be queued and executed asynchronously. The original deployment&#039;s code will be preserved and used for the new build.
     *
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDuplicateDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment> {
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

Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/server/sites#listTemplates) to find the template details.
     *
     * @param {string} siteId
     * @param {string} repository
     * @param {string} owner
     * @param {string} rootDirectory
     * @param {string} version
     * @param {boolean} activate
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createTemplateDeployment(siteId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean): Promise<Models.Deployment> {
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

This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} siteId
     * @param {VCSDeploymentType} type
     * @param {string} reference
     * @param {boolean} activate
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createVcsDeployment(siteId: string, type: VCSDeploymentType, reference: string, activate?: boolean): Promise<Models.Deployment> {
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
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    getDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment> {
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
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDeployment(siteId: string, deploymentId: string): Promise<{}> {
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
     * Get a site deployment content by its unique ID. The endpoint response return with a &#039;Content-Disposition: attachment&#039; header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} siteId
     * @param {string} deploymentId
     * @param {DeploymentDownloadType} type
     * @throws {AppwriteException}
     * @returns {Promise<ArrayBuffer>}
     */
    getDeploymentDownload(siteId: string, deploymentId: string, type?: DeploymentDownloadType): Promise<ArrayBuffer> {
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
     * Cancel an ongoing site deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn&#039;t started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status &#039;ready&#039;) or failed. The response includes the final build status and details.
     *
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    updateDeploymentStatus(siteId: string, deploymentId: string): Promise<Models.Deployment> {
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
     * @param {string} siteId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     */
    listLogs(siteId: string, queries?: string[]): Promise<Models.ExecutionList> {
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
     * @param {string} siteId
     * @param {string} logId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    getLog(siteId: string, logId: string): Promise<Models.Execution> {
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
     * @param {string} siteId
     * @param {string} logId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteLog(siteId: string, logId: string): Promise<{}> {
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
     * @param {string} siteId
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(siteId: string): Promise<Models.VariableList> {
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
     * @param {string} siteId
     * @param {string} key
     * @param {string} value
     * @param {boolean} secret
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(siteId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable> {
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
     * @param {string} siteId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(siteId: string, variableId: string): Promise<Models.Variable> {
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
     * @param {string} siteId
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @param {boolean} secret
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(siteId: string, variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable> {
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
     * @param {string} siteId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(siteId: string, variableId: string): Promise<{}> {
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
