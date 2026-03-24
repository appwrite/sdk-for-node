const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { VectorsDB } = require("../../dist/services/vectors-db");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('VectorsDB', () => {
    const client = new Client();
    const vectorsDB = new VectorsDB(client);

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'databases': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.list(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method create()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'My Database',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'enabled': true,
            'type': 'legacy',
            'policies': [],
            'archives': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.create(
            '<DATABASE_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTextEmbeddings()', async () => {
        const data = {
            'total': 5,
            'embeddings': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.createTextEmbeddings(
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listTransactions()', async () => {
        const data = {
            'total': 5,
            'transactions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.listTransactions(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTransaction()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'status': 'pending',
            'operations': 5,
            'expiresAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.createTransaction(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getTransaction()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'status': 'pending',
            'operations': 5,
            'expiresAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.getTransaction(
            '<TRANSACTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateTransaction()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'status': 'pending',
            'operations': 5,
            'expiresAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.updateTransaction(
            '<TRANSACTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteTransaction()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.deleteTransaction(
            '<TRANSACTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createOperations()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'status': 'pending',
            'operations': 5,
            'expiresAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.createOperations(
            '<TRANSACTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method get()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'My Database',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'enabled': true,
            'type': 'legacy',
            'policies': [],
            'archives': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.get(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method update()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'My Database',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'enabled': true,
            'type': 'legacy',
            'policies': [],
            'archives': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.update(
            '<DATABASE_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method delete()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.delete(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listCollections()', async () => {
        const data = {
            'total': 5,
            'collections': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.listCollections(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createCollection()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Collection',
            'enabled': true,
            'documentSecurity': true,
            'attributes': [],
            'indexes': [],
            'bytesMax': 65535,
            'bytesUsed': 1500,
            'dimension': 1536,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.createCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<NAME>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getCollection()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Collection',
            'enabled': true,
            'documentSecurity': true,
            'attributes': [],
            'indexes': [],
            'bytesMax': 65535,
            'bytesUsed': 1500,
            'dimension': 1536,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.getCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateCollection()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Collection',
            'enabled': true,
            'documentSecurity': true,
            'attributes': [],
            'indexes': [],
            'bytesMax': 65535,
            'bytesUsed': 1500,
            'dimension': 1536,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.updateCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteCollection()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.deleteCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.listDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.createDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
            {},
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.createDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method upsertDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.upsertDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.updateDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.deleteDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.getDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method upsertDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.upsertDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.updateDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteDocument()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.deleteDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listIndexes()', async () => {
        const data = {
            'total': 5,
            'indexes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.listIndexes(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createIndex()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'index1',
            'type': 'primary',
            'status': 'available',
            'error': 'string',
            'attributes': [],
            'lengths': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.createIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            'hnsw_euclidean',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getIndex()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'index1',
            'type': 'primary',
            'status': 'available',
            'error': 'string',
            'attributes': [],
            'lengths': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.getIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteIndex()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await vectorsDB.deleteIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
