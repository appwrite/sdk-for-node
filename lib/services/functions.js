const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const InputFile = require('../inputFile.js');
const client = require('../client.js');
const Stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');

class Functions extends Service {

     constructor(client)
     {
        super(client);
     }


    /**
     * List functions
     *
     * Get a list of all the project's functions. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list(queries, search) {
        const apiPath = '/functions';
        let payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create function
     *
     * Create a new function. You can pass a list of
     * [permissions](https://appwrite.io/docs/permissions) to allow different
     * project users or team with access to execute the function using the client
     * API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string} runtime
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
     * @returns {Promise}
     */
    async create(functionId, name, runtime, execute, events, schedule, timeout, enabled, logging, entrypoint, commands, installationId, providerRepositoryId, providerBranch, providerSilentMode, providerRootDirectory, templateRepository, templateOwner, templateRootDirectory, templateBranch) {
        const apiPath = '/functions';
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof runtime === 'undefined') {
            throw new AppwriteException('Missing required parameter: "runtime"');
        }


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

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List runtimes
     *
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listRuntimes() {
        const apiPath = '/functions/runtimes';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get function
     *
     * Get a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get(functionId) {
        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update function
     *
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string} runtime
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
     * @returns {Promise}
     */
    async update(functionId, name, runtime, execute, events, schedule, timeout, enabled, logging, entrypoint, commands, installationId, providerRepositoryId, providerBranch, providerSilentMode, providerRootDirectory) {
        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
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

        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete function
     *
     * Delete a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(functionId) {
        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List deployments
     *
     * Get a list of all the project's code deployments. You can use the query
     * params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listDeployments(functionId, queries, search) {
        const apiPath = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }


        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create deployment
     *
     * Create a new function code deployment. Use this endpoint to upload a new
     * version of your code function. To execute your newly uploaded code, you'll
     * need to update the function's deployment to use your new deployment UID.
     * 
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to
     * include any dependencies your code has within the compressed file. You can
     * learn more about code packaging in the [Appwrite Cloud Functions
     * tutorial](https://appwrite.io/docs/functions).
     * 
     * Use the "command" param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId
     * @param {InputFile} code
     * @param {boolean} activate
     * @param {string} entrypoint
     * @param {string} commands
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createDeployment(functionId, code, activate, entrypoint, commands, onProgress = () => {}) {
        const apiPath = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        if (typeof activate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "activate"');
        }


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
            payload['activate'] = activate.toString();
        }

        const size = code.size;

        const apiHeaders = {
            'content-type': 'multipart/form-data',
        };

        let id = undefined;
        let response = undefined;

        let chunksUploaded = 0;


        let currentChunk = Buffer.from('');
        let currentChunkSize = 0;
        let currentChunkStart = 0;

        const selfClient = this.client;

        async function uploadChunk(lastUpload = false) {
            if(chunksUploaded - 1 >= currentChunkStart / client.CHUNK_SIZE) {
                return;
            }
            
            const start = currentChunkStart;
            const end = currentChunkStart + currentChunkSize - 1;

            if(!lastUpload || currentChunkStart !== 0) {
                apiHeaders['content-range'] = 'bytes ' + start + '-' + end + '/' + size;
            }

            if (id) {
                apiHeaders['x-appwrite-id'] = id;
            }

            payload['code'] = {
                type: 'file',
                file: currentChunk,
                filename: code.filename,
                size: currentChunkSize
            };

            response = await selfClient.call('post', apiPath, apiHeaders, payload);

            if (!id) {
                id = response['$id'];
            }
            
            if (onProgress !== null) {
                onProgress({
                    $id: response['$id'],
                    progress: Math.min((start+client.CHUNK_SIZE) * client.CHUNK_SIZE, size) / size * 100,
                    sizeUploaded: end+1,
                    chunksTotal: response['chunksTotal'],
                    chunksUploaded: response['chunksUploaded']
                });
            }

            currentChunkStart += client.CHUNK_SIZE;
        }

        return await new Promise((resolve, reject) => {
            const writeStream = new Stream.Writable();
            writeStream._write = async (mainChunk, encoding, callback) => {
                try {
                    // Segment incoming chunk into up to 5MB chunks
                    const mainChunkSize = Buffer.byteLength(mainChunk);
                    const chunksCount = Math.ceil(mainChunkSize / client.CHUNK_SIZE);
                    const chunks = [];

                    for(let i = 0; i < chunksCount; i++) {
                        const chunk = mainChunk.slice(i * client.CHUNK_SIZE, (i + 1) * client.CHUNK_SIZE);
                        chunks.push(chunk);
                    }

                    for (const chunk of chunks) {
                        const chunkSize = Buffer.byteLength(chunk);

                        if(chunkSize + currentChunkSize == client.CHUNK_SIZE) {
                            // Upload chunk
                            currentChunk = Buffer.concat([currentChunk, chunk]);
                            currentChunkSize = Buffer.byteLength(currentChunk);
                            await uploadChunk();
                            currentChunk = Buffer.from('');
                            currentChunkSize = 0;
                        } else if(chunkSize + currentChunkSize > client.CHUNK_SIZE) {
                            // Upload chunk, put rest into next chunk
                            const bytesToUpload = client.CHUNK_SIZE - currentChunkSize;
                            const newChunkSection = chunk.slice(0, bytesToUpload);
                            currentChunk = Buffer.concat([currentChunk, newChunkSection]);
                            currentChunkSize = Buffer.byteLength(currentChunk);
                            await uploadChunk();
                            currentChunk = chunk.slice(bytesToUpload, undefined);
                            currentChunkSize = chunkSize - bytesToUpload;
                        } else {
                            // Append into current chunk
                            currentChunk = Buffer.concat([currentChunk, chunk]);
                            currentChunkSize = chunkSize + currentChunkSize;
                        }
                    }

                    callback();
                } catch (e) {
                    callback(e);
                }
            }

            writeStream.on("finish", async () => {
                if(currentChunkSize > 0) {
                    try {
                        await uploadChunk(true);
                    } catch (e) {
                        reject(e);
                    }
                }
                
                resolve(response);
            });

            writeStream.on("error", (err) => {
                reject(err);
            });
            
            code.stream.pipe(writeStream);
        });

    }

    /**
     * Get deployment
     *
     * Get a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getDeployment(functionId, deploymentId) {
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update function deployment
     *
     * Update the function code deployment ID using the unique function ID. Use
     * this endpoint to switch the code deployment that should be executed by the
     * execution endpoint.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateDeployment(functionId, deploymentId) {
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }


        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete deployment
     *
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteDeployment(functionId, deploymentId) {
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create build
     *
     * Create a new build for an Appwrite Function deployment. This endpoint can
     * be used to retry a failed build.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBuild(functionId, deploymentId, buildId) {
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/builds/{buildId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId).replace('{buildId}', buildId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        if (typeof buildId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "buildId"');
        }


        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Download Deployment
     *
     * Get a Deployment's contents by its unique ID. This endpoint supports range
     * requests for partial or streaming file download.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async downloadDeployment(functionId, deploymentId) {
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/download'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload, 'arraybuffer');
    }

    /**
     * List executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listExecutions(functionId, queries, search) {
        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }


        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} body
     * @param {boolean} async
     * @param {string} xpath
     * @param {string} method
     * @param {object} headers
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createExecution(functionId, body, async, xpath, method, headers) {
        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }


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

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getExecution(functionId, executionId) {
        const apiPath = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof executionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "executionId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List variables
     *
     * Get a list of all variables of a specific function.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listVariables(functionId) {
        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create variable
     *
     * Create a new function environment variable. These variables can be accessed
     * in the function at runtime as environment variables.
     *
     * @param {string} functionId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createVariable(functionId, key, value) {
        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }


        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }

        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get variable
     *
     * Get a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getVariable(functionId, variableId) {
        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
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
     * @returns {Promise}
     */
    async updateVariable(functionId, variableId, key, value) {
        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }


        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }

        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }

        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete variable
     *
     * Delete a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteVariable(functionId, variableId) {
        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        let payload = {};
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Functions;
