const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const client = require('../client.js');
const { promisify } = require('util');
const fs = require('fs');

class Storage extends Service {

    /**
     * List buckets
     *
     * Get a list of all the storage buckets. You can use the query params to
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
    async listBuckets(search, limit, offset, cursor, cursorDirection, orderType) {
        let path = '/storage/buckets';
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
     * Create bucket
     *
     * Create a new storage bucket.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBucket(bucketId, name, permission, read, write, enabled, maximumFileSize, allowedFileExtensions, encryption, antivirus) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof permission === 'undefined') {
            throw new AppwriteException('Missing required parameter: "permission"');
        }

        let path = '/storage/buckets';
        let payload = {};

        if (typeof bucketId !== 'undefined') {
            payload['bucketId'] = bucketId;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof permission !== 'undefined') {
            payload['permission'] = permission;
        }

        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }

        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }

        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }

        if (typeof maximumFileSize !== 'undefined') {
            payload['maximumFileSize'] = maximumFileSize;
        }

        if (typeof allowedFileExtensions !== 'undefined') {
            payload['allowedFileExtensions'] = allowedFileExtensions;
        }

        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }

        if (typeof antivirus !== 'undefined') {
            payload['antivirus'] = antivirus;
        }

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Bucket
     *
     * Get a storage bucket by its unique ID. This endpoint response returns a
     * JSON object with the storage bucket metadata.
     *
     * @param {string} bucketId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getBucket(bucketId) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        let path = '/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Bucket
     *
     * Update a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateBucket(bucketId, name, permission, read, write, enabled, maximumFileSize, allowedFileExtensions, encryption, antivirus) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof permission === 'undefined') {
            throw new AppwriteException('Missing required parameter: "permission"');
        }

        let path = '/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        let payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof permission !== 'undefined') {
            payload['permission'] = permission;
        }

        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }

        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }

        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }

        if (typeof maximumFileSize !== 'undefined') {
            payload['maximumFileSize'] = maximumFileSize;
        }

        if (typeof allowedFileExtensions !== 'undefined') {
            payload['allowedFileExtensions'] = allowedFileExtensions;
        }

        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }

        if (typeof antivirus !== 'undefined') {
            payload['antivirus'] = antivirus;
        }

        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Bucket
     *
     * Delete a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteBucket(bucketId) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        let path = '/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Files
     *
     * Get a list of all the user files. You can use the query params to filter
     * your results. On admin mode, this endpoint will return a list of all of the
     * project's files. [Learn more about different API modes](/docs/admin).
     *
     * @param {string} bucketId
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listFiles(bucketId, search, limit, offset, cursor, cursorDirection, orderType) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        let path = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
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
     * Create File
     *
     * Create a new file. Before using this route, you should create a new bucket
     * resource using either a [server
     * integration](/docs/server/database#storageCreateBucket) API or directly
     * from your Appwrite console.
     * 
     * Larger files should be uploaded using multiple requests with the
     * [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)
     * header to send a partial request with a maximum supported chunk of `5MB`.
     * The `content-range` header values should always be in bytes.
     * 
     * When the first request is sent, the server will return the **File** object,
     * and the subsequent part request must include the file's **id** in
     * `x-appwrite-id` header to allow the server to know that the partial upload
     * is for the existing file and not for a new one.
     * 
     * If you're creating a new file using one of the Appwrite SDKs, all the
     * chunking logic will be managed by the SDK internally.
     * 
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string} file
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createFile(bucketId, fileId, file, read, write, onProgress = () => {}) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        if (typeof file === 'undefined') {
            throw new AppwriteException('Missing required parameter: "file"');
        }

        let path = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
        let payload = {};

        if (typeof fileId !== 'undefined') {
            payload['fileId'] = fileId;
        }

        if (typeof file !== 'undefined') {
            payload['file'] = file.toString();
        }

        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }

        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }

        const { size: size } = await promisify(fs.stat)(file);

        if (size <= client.CHUNK_SIZE) {
            payload['file'] = fs.createReadStream(file);
                
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

            if(fileId != 'unique()') {
                try {
                    response = await this.client.call('get', path + '/' + fileId, headers);
                    counter = response.chunksUploaded;
                } catch(e) {
                }
            }

            for (counter; counter < totalCounters; counter++) {
                const start = (counter * client.CHUNK_SIZE);
                const end = Math.min((((counter * client.CHUNK_SIZE) + client.CHUNK_SIZE) - 1), size);

                headers['content-range'] = 'bytes ' + start + '-' + end + '/' + size;

                if (id) {
                    headers['x-appwrite-id'] = id;
                }

                const stream = fs.createReadStream(file, {
                    start,
                    end
                });
                payload['file'] = stream;

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
     * Get File
     *
     * Get a file by its unique ID. This endpoint response returns a JSON object
     * with the file metadata.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFile(bucketId, fileId) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update File
     *
     * Update a file by its unique ID. Only users with write permissions have
     * access to update this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateFile(bucketId, fileId, read, write) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};

        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }

        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }

        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete File
     *
     * Delete a file by its unique ID. Only users with write permissions have
     * access to delete this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteFile(bucketId, fileId) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get File for Download
     *
     * Get a file content by its unique ID. The endpoint response return with a
     * 'Content-Disposition: attachment' header that tells the browser to start
     * downloading the file to user downloads directory.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFileDownload(bucketId, fileId) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}/download'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload, 'arraybuffer');
    }

    /**
     * Get File Preview
     *
     * Get a file preview image. Currently, this method supports preview for image
     * files (jpg, png, and gif), other supported formats, like pdf, docs, slides,
     * and spreadsheets, will return the file icon image. You can also pass query
     * string arguments for cutting and resizing your preview image. Preview is
     * supported only for image files smaller than 10MB.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {number} width
     * @param {number} height
     * @param {string} gravity
     * @param {number} quality
     * @param {number} borderWidth
     * @param {string} borderColor
     * @param {number} borderRadius
     * @param {number} opacity
     * @param {number} rotation
     * @param {string} background
     * @param {string} output
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFilePreview(bucketId, fileId, width, height, gravity, quality, borderWidth, borderColor, borderRadius, opacity, rotation, background, output) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}/preview'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};

        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }

        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }

        if (typeof gravity !== 'undefined') {
            payload['gravity'] = gravity;
        }

        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }

        if (typeof borderWidth !== 'undefined') {
            payload['borderWidth'] = borderWidth;
        }

        if (typeof borderColor !== 'undefined') {
            payload['borderColor'] = borderColor;
        }

        if (typeof borderRadius !== 'undefined') {
            payload['borderRadius'] = borderRadius;
        }

        if (typeof opacity !== 'undefined') {
            payload['opacity'] = opacity;
        }

        if (typeof rotation !== 'undefined') {
            payload['rotation'] = rotation;
        }

        if (typeof background !== 'undefined') {
            payload['background'] = background;
        }

        if (typeof output !== 'undefined') {
            payload['output'] = output;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload, 'arraybuffer');
    }

    /**
     * Get File for View
     *
     * Get a file content by its unique ID. This endpoint is similar to the
     * download method but returns with no  'Content-Disposition: attachment'
     * header.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFileView(bucketId, fileId) {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}/view'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload, 'arraybuffer');
    }
}

module.exports = Storage;