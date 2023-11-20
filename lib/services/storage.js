const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const InputFile = require('../inputFile.js');
const client = require('../client.js');
const Stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');

class Storage extends Service {

     constructor(client)
     {
        super(client);
     }


    /**
     * List buckets
     *
     * Get a list of all the storage buckets. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listBuckets(queries, search) {
        const apiPath = '/storage/buckets';
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
     * Create bucket
     *
     * Create a new storage bucket.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} fileSecurity
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {string} compression
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBucket(bucketId, name, permissions, fileSecurity, enabled, maximumFileSize, allowedFileExtensions, compression, encryption, antivirus) {
        const apiPath = '/storage/buckets';
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }


        if (typeof bucketId !== 'undefined') {
            payload['bucketId'] = bucketId;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }

        if (typeof fileSecurity !== 'undefined') {
            payload['fileSecurity'] = fileSecurity;
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

        if (typeof compression !== 'undefined') {
            payload['compression'] = compression;
        }

        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }

        if (typeof antivirus !== 'undefined') {
            payload['antivirus'] = antivirus;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get bucket
     *
     * Get a storage bucket by its unique ID. This endpoint response returns a
     * JSON object with the storage bucket metadata.
     *
     * @param {string} bucketId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getBucket(bucketId) {
        const apiPath = '/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update bucket
     *
     * Update a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} fileSecurity
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {string} compression
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateBucket(bucketId, name, permissions, fileSecurity, enabled, maximumFileSize, allowedFileExtensions, compression, encryption, antivirus) {
        const apiPath = '/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }


        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }

        if (typeof fileSecurity !== 'undefined') {
            payload['fileSecurity'] = fileSecurity;
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

        if (typeof compression !== 'undefined') {
            payload['compression'] = compression;
        }

        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }

        if (typeof antivirus !== 'undefined') {
            payload['antivirus'] = antivirus;
        }

        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete bucket
     *
     * Delete a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteBucket(bucketId) {
        const apiPath = '/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List files
     *
     * Get a list of all the user files. You can use the query params to filter
     * your results.
     *
     * @param {string} bucketId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listFiles(bucketId, queries, search) {
        const apiPath = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
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
     * Create file
     *
     * Create a new file. Before using this route, you should create a new bucket
     * resource using either a [server
     * integration](https://appwrite.io/docs/server/storage#storageCreateBucket)
     * API or directly from your Appwrite console.
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
     * @param {InputFile} file
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createFile(bucketId, fileId, file, permissions, onProgress = () => {}) {
        const apiPath = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        if (typeof file === 'undefined') {
            throw new AppwriteException('Missing required parameter: "file"');
        }


        if (typeof fileId !== 'undefined') {
            payload['fileId'] = fileId;
        }

        if (typeof file !== 'undefined') {
            payload['file'] = file;
        }

        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }

        const size = file.size;

        const apiHeaders = {
            'content-type': 'multipart/form-data',
        };

        let id = undefined;
        let response = undefined;

        let chunksUploaded = 0;

        if(fileId != 'unique()') {
            try {
                response = await this.client.call('get', apiPath + '/' + fileId, apiHeaders);
                chunksUploaded = response.chunksUploaded;
            } catch(e) {
            }
        }

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

            payload['file'] = {
                type: 'file',
                file: currentChunk,
                filename: file.filename,
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
            
            file.stream.pipe(writeStream);
        });

    }

    /**
     * Get file
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
        const apiPath = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update file
     *
     * Update a file by its unique ID. Only users with write permissions have
     * access to update this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string} name
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateFile(bucketId, fileId, name, permissions) {
        const apiPath = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }


        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }

        return await this.client.call('put', apiPath, {
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
        const apiPath = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get file for download
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
        const apiPath = '/storage/buckets/{bucketId}/files/{fileId}/download'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload, 'arraybuffer');
    }

    /**
     * Get file preview
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
        const apiPath = '/storage/buckets/{bucketId}/files/{fileId}/preview'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }


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

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload, 'arraybuffer');
    }

    /**
     * Get file for view
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
        const apiPath = '/storage/buckets/{bucketId}/files/{fileId}/view'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload = {};
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload, 'arraybuffer');
    }
}

module.exports = Storage;
