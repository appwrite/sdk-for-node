import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { Runtime } from '../enums/runtime';
import { ExecutionMethod } from '../enums/execution-method';
import { NewPayload } from '../NewPayload';

export class Functions {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List functions
     *
     * Get a list of all the project&#039;s functions. You can use the query params to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.FunctionList>}
     */
    async list(queries?: string[], search?: string): Promise<Models.FunctionList> {
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
     * Create function
     *
     * Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {Runtime} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} templateRepository
     * @param {string} templateOwner
     * @param {string} templateRootDirectory
     * @param {string} templateBranch
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    async create(functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, templateRepository?: string, templateOwner?: string, templateRootDirectory?: string, templateBranch?: string): Promise<Models.Function> {
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
        if (typeof templateRepository !== 'undefined') {
            payload['templateRepository'] = templateRepository;
        }
        if (typeof templateOwner !== 'undefined') {
            payload['templateOwner'] = templateOwner;
        }
        if (typeof templateRootDirectory !== 'undefined') {
            payload['templateRootDirectory'] = templateRootDirectory;
        }
        if (typeof templateBranch !== 'undefined') {
            payload['templateBranch'] = templateBranch;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * List runtimes
     *
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.RuntimeList>}
     */
    async listRuntimes(): Promise<Models.RuntimeList> {
        const apiPath = '/functions/runtimes';
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
     * Get function
     *
     * Get a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    async get(functionId: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
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
     * Update function
     *
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {Runtime} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    async update(functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string): Promise<Models.Function> {
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Delete function
     *
     * Delete a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async delete(functionId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * List deployments
     *
     * Get a list of all the project&#039;s code deployments. You can use the query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     */
    async listDeployments(functionId: string, queries?: string[], search?: string): Promise<Models.DeploymentList> {
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
     * Create deployment
     *
     * Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you&#039;ll need to update the function&#039;s deployment to use your new deployment UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).

Use the &quot;command&quot; param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId
     * @param {File} code
     * @param {boolean} activate
     * @param {string} entrypoint
     * @param {string} commands
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    async createDeployment(functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string, onProgress = (progress: UploadProgress) => {}): Promise<Models.Deployment> {
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

        return await this.client.chunkedUpload(
            'post',
            uri,
            apiHeaders,
            payload,
            onProgress
        );
    }
    /**
     * Get deployment
     *
     * Get a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    async getDeployment(functionId: string, deploymentId: string): Promise<Models.Deployment> {
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

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Update function deployment
     *
     * Update the function code deployment ID using the unique function ID. Use this endpoint to switch the code deployment that should be executed by the execution endpoint.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    async updateDeployment(functionId: string, deploymentId: string): Promise<Models.Function> {
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

        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Delete deployment
     *
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async deleteDeployment(functionId: string, deploymentId: string): Promise<{}> {
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

        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Create build
     *
     * Create a new build for an Appwrite Function deployment. This endpoint can be used to retry a failed build.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async createBuild(functionId: string, deploymentId: string, buildId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }
        if (typeof buildId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "buildId"');
        }
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/builds/{buildId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId).replace('{buildId}', buildId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Download Deployment
     *
     * Get a Deployment&#039;s contents by its unique ID. This endpoint supports range requests for partial or streaming file download.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<ArrayBuffer>}
     */
    async downloadDeployment(functionId: string, deploymentId: string): Promise<ArrayBuffer> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/download'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
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
            'arrayBuffer'
        );
    }
    /**
     * List executions
     *
     * Get a list of all the current user function execution logs. You can use the query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     */
    async listExecutions(functionId: string, queries?: string[], search?: string): Promise<Models.ExecutionList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create execution
     *
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {NewPayload} body
     * @param {boolean} async
     * @param {string} xpath
     * @param {ExecutionMethod} method
     * @param {object} headers
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    async createExecution(functionId: string, body?: NewPayload, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object): Promise<Models.Execution> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof body !== 'undefined') {
            payload['body'] = body ? body.getData : body;
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'multipart/form-data',
            'accept': 'multipart/form-data',
        }

        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    async getExecution(functionId: string, executionId: string): Promise<Models.Execution> {
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

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * List variables
     *
     * Get a list of all variables of a specific function.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    async listVariables(functionId: string): Promise<Models.VariableList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
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
     * Create variable
     *
     * Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.
     *
     * @param {string} functionId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    async createVariable(functionId: string, key: string, value: string): Promise<Models.Variable> {
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Get variable
     *
     * Get a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    async getVariable(functionId: string, variableId: string): Promise<Models.Variable> {
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

        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Update variable
     *
     * Update variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    async updateVariable(functionId: string, variableId: string, key: string, value?: string): Promise<Models.Variable> {
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return await this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }
    /**
     * Delete variable
     *
     * Delete a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async deleteVariable(functionId: string, variableId: string): Promise<{}> {
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

        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }
}
