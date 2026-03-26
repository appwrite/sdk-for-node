const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Storage } = require("../../dist/services/storage");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Storage', () => {
    const client = new Client();
    const storage = new Storage(client);

    
    test('test method listBuckets()', async () => {
        const data = {
            'total': 5,
            'buckets': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.listBuckets(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createBucket()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'fileSecurity': true,
            'name': 'Documents',
            'enabled': true,
            'maximumFileSize': 100,
            'allowedFileExtensions': [],
            'compression': 'gzip',
            'encryption': true,
            'antivirus': true,
            'transformations': true,
            'totalSize': 128,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.createBucket(
            '<BUCKET_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getBucket()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'fileSecurity': true,
            'name': 'Documents',
            'enabled': true,
            'maximumFileSize': 100,
            'allowedFileExtensions': [],
            'compression': 'gzip',
            'encryption': true,
            'antivirus': true,
            'transformations': true,
            'totalSize': 128,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.getBucket(
            '<BUCKET_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateBucket()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'fileSecurity': true,
            'name': 'Documents',
            'enabled': true,
            'maximumFileSize': 100,
            'allowedFileExtensions': [],
            'compression': 'gzip',
            'encryption': true,
            'antivirus': true,
            'transformations': true,
            'totalSize': 128,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.updateBucket(
            '<BUCKET_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteBucket()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.deleteBucket(
            '<BUCKET_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listFiles()', async () => {
        const data = {
            'total': 5,
            'files': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.listFiles(
            '<BUCKET_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createFile()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'bucketId': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'name': 'Pink.png',
            'signature': '5d529fd02b544198ae075bd57c1762bb',
            'mimeType': 'image/png',
            'sizeOriginal': 17890,
            'chunksTotal': 17890,
            'chunksUploaded': 17890,
            'encryption': true,
            'compression': 'gzip',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.createFile(
            '<BUCKET_ID>',
            '<FILE_ID>',
            InputFile.fromBuffer(new Uint8Array(0), 'image.png'),
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getFile()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'bucketId': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'name': 'Pink.png',
            'signature': '5d529fd02b544198ae075bd57c1762bb',
            'mimeType': 'image/png',
            'sizeOriginal': 17890,
            'chunksTotal': 17890,
            'chunksUploaded': 17890,
            'encryption': true,
            'compression': 'gzip',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.getFile(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateFile()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'bucketId': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'name': 'Pink.png',
            'signature': '5d529fd02b544198ae075bd57c1762bb',
            'mimeType': 'image/png',
            'sizeOriginal': 17890,
            'chunksTotal': 17890,
            'chunksUploaded': 17890,
            'encryption': true,
            'compression': 'gzip',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.updateFile(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteFile()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await storage.deleteFile(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getFileDownload()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await storage.getFileDownload(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getFilePreview()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await storage.getFilePreview(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getFileView()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await storage.getFileView(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
