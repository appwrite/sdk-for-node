const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const client = require('../client.js');
const { promisify } = require('util');
const fs = require('fs');

class Functions extends Service {

    /**
     * List Functions
     *
     * Get a list of all the project's functions. You can use the query params to
     * filter your results.
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list(search, limit, offset, cursor, cursorDirection, orderType) {
        let path = '/functions';
        let payload = {};

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        if (typeof cursor !== 'undefined') {
            payload['cursor'] = cursor;
        }

        if (typeof cursorDirection !== 'undefined') {
            payload['cursorDirection'] = cursorDirection;
        }

        if (typeof orderType !== 'undefined') {
            payload['orderType'] = orderType;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Function
     *
     * Create a new function. You can pass a list of
     * [permissions](/docs/permissions) to allow different project users or team
     * with access to execute the function using the client API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string[]} execute
     * @param {string} runtime
     * @param {object} vars
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async create(functionId, name, execute, runtime, vars, events, schedule, timeout) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof execute === 'undefined') {
            throw new AppwriteException('Missing required parameter: "execute"');
        }

        if (typeof runtime === 'undefined') {
            throw new AppwriteException('Missing required parameter: "runtime"');
        }

        let path = '/functions';
        let payload = {};

        if (typeof functionId !== 'undefined') {
            payload['functionId'] = functionId;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
        }

        if (typeof runtime !== 'undefined') {
            payload['runtime'] = runtime;
        }

        if (typeof vars !== 'undefined') {
            payload['vars'] = vars;
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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List the currently active function runtimes.
     *
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listRuntimes() {
        let path = '/functions/runtimes';
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Function
     *
     * Get a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get(functionId) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        let path = '/functions/{functionId}'.replace('{functionId}', functionId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Function
     *
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string[]} execute
     * @param {object} vars
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async update(functionId, name, execute, vars, events, schedule, timeout) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof execute === 'undefined') {
            throw new AppwriteException('Missing required parameter: "execute"');
        }

        let path = '/functions/{functionId}'.replace('{functionId}', functionId);
        let payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
        }

        if (typeof vars !== 'undefined') {
            payload['vars'] = vars;
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

        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Function
     *
     * Delete a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(functionId) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        let path = '/functions/{functionId}'.replace('{functionId}', functionId);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Deployments
     *
     * Get a list of all the project's code deployments. You can use the query
     * params to filter your results.
     *
     * @param {string} functionId
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listDeployments(functionId, search, limit, offset, cursor, cursorDirection, orderType) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        let path = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
        let payload = {};

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        if (typeof cursor !== 'undefined') {
            payload['cursor'] = cursor;
        }

        if (typeof cursorDirection !== 'undefined') {
            payload['cursorDirection'] = cursorDirection;
        }

        if (typeof orderType !== 'undefined') {
            payload['orderType'] = orderType;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Deployment
     *
     * Create a new function code deployment. Use this endpoint to upload a new
     * version of your code function. To execute your newly uploaded code, you'll
     * need to update the function's deployment to use your new deployment UID.
     * 
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to
     * include any dependencies your code has within the compressed file. You can
     * learn more about code packaging in the [Appwrite Cloud Functions
     * tutorial](/docs/functions).
     * 
     * Use the "command" param to set the entry point used to execute your code.
     *
     * @param {string} functionId
     * @param {string} entrypoint
     * @param {string} code
     * @param {boolean} activate
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createDeployment(functionId, entrypoint, code, activate, onProgress = () => {}) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof entrypoint === 'undefined') {
            throw new AppwriteException('Missing required parameter: "entrypoint"');
        }

        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        if (typeof activate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "activate"');
        }

        let path = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
        let payload = {};

        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }

        if (typeof code !== 'undefined') {
            payload['code'] = code.toString();
        }

        if (typeof activate !== 'undefined') {
            payload['activate'] = activate.toString();
        }

        const { size: size } = await promisify(fs.stat)(code);

        if (size <= client.CHUNK_SIZE) {
            payload['code'] = fs.createReadStream(code);
                
            return await this.client.call('post', path, {
                'content-type': 'multipart/form-data',
            }, payload);
        } else {
            let id = undefined;
            let response = undefined;

            let counter = 0;
            const totalCounters = Math.ceil(size / client.CHUNK_SIZE);

            const headers = {
                'content-type': 'multipart/form-data',
            };


            for (counter; counter < totalCounters; counter++) {
                const start = (counter * client.CHUNK_SIZE);
                const end = Math.min((((counter * client.CHUNK_SIZE) + client.CHUNK_SIZE) - 1), size);

                headers['content-range'] = 'bytes ' + start + '-' + end + '/' + size;

                if (id) {
                    headers['x-appwrite-id'] = id;
                }

                const stream = fs.createReadStream(code, {
                    start,
                    end
                });
                payload['code'] = stream;

                response = await this.client.call('post', path, headers, payload);

                if (!id) {
                    id = response['$id'];
                }
                
                if (onProgress !== null) {
                    onProgress({
                        $id: response['$id'],
                        progress: Math.min((counter+1) * client.CHUNK_SIZE, size) / size * 100,
                        sizeUploaded: end+1,
                        chunksTotal: response['chunksTotal'],
                        chunksUploaded: response['chunksUploaded']
                    });
                }
            }

            return response;
        }
    }

    /**
     * Get Deployment
     *
     * Get a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getDeployment(functionId, deploymentId) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        let path = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Function Deployment
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
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        let path = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        let payload = {};

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Deployment
     *
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteDeployment(functionId, deploymentId) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        let path = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Retry Build
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async retryBuild(functionId, deploymentId, buildId) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        if (typeof buildId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "buildId"');
        }

        let path = '/functions/{functionId}/deployments/{deploymentId}/builds/{buildId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId).replace('{buildId}', buildId);
        let payload = {};

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results. On admin mode, this endpoint will
     * return a list of all of the project's executions. [Learn more about
     * different API modes](/docs/admin).
     *
     * @param {string} functionId
     * @param {number} limit
     * @param {number} offset
     * @param {string} search
     * @param {string} cursor
     * @param {string} cursorDirection
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listExecutions(functionId, limit, offset, search, cursor, cursorDirection) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        let path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        let payload = {};

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        if (typeof cursor !== 'undefined') {
            payload['cursor'] = cursor;
        }

        if (typeof cursorDirection !== 'undefined') {
            payload['cursorDirection'] = cursorDirection;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} data
     * @param {boolean} async
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createExecution(functionId, data, async) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        let path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        let payload = {};

        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }

        if (typeof async !== 'undefined') {
            payload['async'] = async;
        }

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getExecution(functionId, executionId) {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof executionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "executionId"');
        }

        let path = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Functions;