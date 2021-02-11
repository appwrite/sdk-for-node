const Service = require('../service.js');

class Functions extends Service {

    /**
     * List Functions
     *
     * Get a list of all the project's functions. You can use the query params to
     * filter your results.
     *
     * @param string search
     * @param number limit
     * @param number offset
     * @param string orderType
     * @throws Exception
     * @return {}
     */
    async list(search = '', limit = 25, offset = 0, orderType = 'ASC') {
        let path = '/functions';
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'search': search,
                'limit': limit,
                'offset': offset,
                'orderType': orderType
            });
    }

    /**
     * Create Function
     *
     * Create a new function. You can pass a list of
     * [permissions](/docs/permissions) to allow different project users or team
     * with access to execute the function using the client API.
     *
     * @param string name
     * @param string[] execute
     * @param string env
     * @param object vars
     * @param string[] events
     * @param string schedule
     * @param number timeout
     * @throws Exception
     * @return {}
     */
    async create(name, execute, env, vars = {}, events = [], schedule = '', timeout = 15) {
        let path = '/functions';
        
        return await this.client.call('post', path, {
                    'content-type': 'application/json',
               },
               {
                'name': name,
                'execute': execute,
                'env': env,
                'vars': vars,
                'events': events,
                'schedule': schedule,
                'timeout': timeout
            });
    }

    /**
     * Get Function
     *
     * Get a function by its unique ID.
     *
     * @param string functionId
     * @throws Exception
     * @return {}
     */
    async get(functionId) {
        let path = '/functions/{functionId}'.replace(new RegExp('{functionId}', 'g'), functionId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * Update Function
     *
     * Update function by its unique ID.
     *
     * @param string functionId
     * @param string name
     * @param string[] execute
     * @param object vars
     * @param string[] events
     * @param string schedule
     * @param number timeout
     * @throws Exception
     * @return {}
     */
    async update(functionId, name, execute, vars = {}, events = [], schedule = '', timeout = 15) {
        let path = '/functions/{functionId}'.replace(new RegExp('{functionId}', 'g'), functionId);
        
        return await this.client.call('put', path, {
                    'content-type': 'application/json',
               },
               {
                'name': name,
                'execute': execute,
                'vars': vars,
                'events': events,
                'schedule': schedule,
                'timeout': timeout
            });
    }

    /**
     * Delete Function
     *
     * Delete a function by its unique ID.
     *
     * @param string functionId
     * @throws Exception
     * @return {}
     */
    async delete(functionId) {
        let path = '/functions/{functionId}'.replace(new RegExp('{functionId}', 'g'), functionId);
        
        return await this.client.call('delete', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * List Executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results. On admin mode, this endpoint will
     * return a list of all of the project's teams. [Learn more about different
     * API modes](/docs/admin).
     *
     * @param string functionId
     * @param string search
     * @param number limit
     * @param number offset
     * @param string orderType
     * @throws Exception
     * @return {}
     */
    async listExecutions(functionId, search = '', limit = 25, offset = 0, orderType = 'ASC') {
        let path = '/functions/{functionId}/executions'.replace(new RegExp('{functionId}', 'g'), functionId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'search': search,
                'limit': limit,
                'offset': offset,
                'orderType': orderType
            });
    }

    /**
     * Create Execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param string functionId
     * @throws Exception
     * @return {}
     */
    async createExecution(functionId) {
        let path = '/functions/{functionId}/executions'.replace(new RegExp('{functionId}', 'g'), functionId);
        
        return await this.client.call('post', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * Get Execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param string functionId
     * @param string executionId
     * @throws Exception
     * @return {}
     */
    async getExecution(functionId, executionId) {
        let path = '/functions/{functionId}/executions/{executionId}'.replace(new RegExp('{functionId}', 'g'), functionId).replace(new RegExp('{executionId}', 'g'), executionId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * Update Function Tag
     *
     * Update the function code tag ID using the unique function ID. Use this
     * endpoint to switch the code tag that should be executed by the execution
     * endpoint.
     *
     * @param string functionId
     * @param string tag
     * @throws Exception
     * @return {}
     */
    async updateTag(functionId, tag) {
        let path = '/functions/{functionId}/tag'.replace(new RegExp('{functionId}', 'g'), functionId);
        
        return await this.client.call('patch', path, {
                    'content-type': 'application/json',
               },
               {
                'tag': tag
            });
    }

    /**
     * List Tags
     *
     * Get a list of all the project's code tags. You can use the query params to
     * filter your results.
     *
     * @param string functionId
     * @param string search
     * @param number limit
     * @param number offset
     * @param string orderType
     * @throws Exception
     * @return {}
     */
    async listTags(functionId, search = '', limit = 25, offset = 0, orderType = 'ASC') {
        let path = '/functions/{functionId}/tags'.replace(new RegExp('{functionId}', 'g'), functionId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'search': search,
                'limit': limit,
                'offset': offset,
                'orderType': orderType
            });
    }

    /**
     * Create Tag
     *
     * Create a new function code tag. Use this endpoint to upload a new version
     * of your code function. To execute your newly uploaded code, you'll need to
     * update the function's tag to use your new tag UID.
     * 
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to
     * include any dependencies your code has within the compressed file. You can
     * learn more about code packaging in the [Appwrite Cloud Functions
     * tutorial](/docs/functions).
     * 
     * Use the "command" param to set the entry point used to execute your code.
     *
     * @param string functionId
     * @param string command
     * @param File code
     * @throws Exception
     * @return {}
     */
    async createTag(functionId, command, code) {
        let path = '/functions/{functionId}/tags'.replace(new RegExp('{functionId}', 'g'), functionId);
        
        return await this.client.call('post', path, {
                    'content-type': 'multipart/form-data',
               },
               {
                'command': command,
                'code': code
            });
    }

    /**
     * Get Tag
     *
     * Get a code tag by its unique ID.
     *
     * @param string functionId
     * @param string tagId
     * @throws Exception
     * @return {}
     */
    async getTag(functionId, tagId) {
        let path = '/functions/{functionId}/tags/{tagId}'.replace(new RegExp('{functionId}', 'g'), functionId).replace(new RegExp('{tagId}', 'g'), tagId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * Delete Tag
     *
     * Delete a code tag by its unique ID.
     *
     * @param string functionId
     * @param string tagId
     * @throws Exception
     * @return {}
     */
    async deleteTag(functionId, tagId) {
        let path = '/functions/{functionId}/tags/{tagId}'.replace(new RegExp('{functionId}', 'g'), functionId).replace(new RegExp('{tagId}', 'g'), tagId);
        
        return await this.client.call('delete', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }
}

module.exports = Functions;