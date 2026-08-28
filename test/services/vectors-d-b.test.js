const { Client } = require('../../dist/client');
const { VectorsDB } = require('../../dist/services/vectors-db');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('VectorsDB', () => {
    const client = new Client();
    const vectorsDB = new VectorsDB(client);

    test('test method list()', async () => {
        const data = {
            total: 5,
            databases: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.list();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method create()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            name: 'My Database',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            enabled: true,
            type: 'legacy',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.create('<DATABASE_ID>', '<NAME>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listSpecifications()', async () => {
        const data = {
            specifications: [],
            total: 9,
            pricing: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.listSpecifications();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listTransactions()', async () => {
        const data = {
            total: 5,
            transactions: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.listTransactions();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createTransaction()', async () => {
        const data = {
            '\\$id': '259125845563242502',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            operations: 5,
            expiresAt: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.createTransaction();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getTransaction()', async () => {
        const data = {
            '\\$id': '259125845563242502',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            operations: 5,
            expiresAt: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.getTransaction('<TRANSACTION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateTransaction()', async () => {
        const data = {
            '\\$id': '259125845563242502',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            operations: 5,
            expiresAt: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.updateTransaction('<TRANSACTION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteTransaction()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.deleteTransaction('<TRANSACTION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createOperations()', async () => {
        const data = {
            '\\$id': '259125845563242502',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            operations: 5,
            expiresAt: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.createOperations('<TRANSACTION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method get()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            name: 'My Database',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            enabled: true,
            type: 'legacy',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.get('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method update()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            name: 'My Database',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            enabled: true,
            type: 'legacy',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.update('<DATABASE_ID>', '<NAME>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method delete()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.delete('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listCollections()', async () => {
        const data = {
            total: 5,
            collections: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.listCollections('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createCollection()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
            databaseId: '5e5ea5c16897e',
            name: 'My Collection',
            enabled: true,
            documentSecurity: true,
            attributes: [],
            indexes: [],
            bytesMax: 65535,
            bytesUsed: 1500,
            dimension: 1536,
        };
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
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
            databaseId: '5e5ea5c16897e',
            name: 'My Collection',
            enabled: true,
            documentSecurity: true,
            attributes: [],
            indexes: [],
            bytesMax: 65535,
            bytesUsed: 1500,
            dimension: 1536,
        };
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
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
            databaseId: '5e5ea5c16897e',
            name: 'My Collection',
            enabled: true,
            documentSecurity: true,
            attributes: [],
            indexes: [],
            bytesMax: 65535,
            bytesUsed: 1500,
            dimension: 1536,
        };
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
        const data = { message: '' };
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
            total: 5,
            documents: [],
        };
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
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$collectionId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
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
            total: 5,
            documents: [],
        };
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
            total: 5,
            documents: [],
        };
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
            total: 5,
            documents: [],
        };
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
            total: 5,
            documents: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.deleteDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createQuery()', async () => {
        const data = {
            total: 5,
            documents: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.createQuery(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getDocument()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$collectionId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
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
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$collectionId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
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
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$collectionId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
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
        const data = { message: '' };
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
            total: 5,
            indexes: [],
        };
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
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            key: 'index1',
            type: 'primary',
            status: 'available',
            error: 'string',
            attributes: [],
            lengths: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.createIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<KEY>',
            'hnsw_euclidean',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getIndex()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            key: 'index1',
            type: 'primary',
            status: 'available',
            error: 'string',
            attributes: [],
            lengths: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.getIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<KEY>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteIndex()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.deleteIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<KEY>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createFailover()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            projectId: '5e5ea5c16897e',
            name: 'My Production Database',
            api: 'postgresql',
            engine: 'postgresql',
            version: '16',
            specification: 's-2vcpu-2gb',
            backend: 'edge',
            hostname: 'db-myproject-mydb.fra.appwrite.center',
            connectionPort: 5432,
            connectionUser: 'appwrite_user',
            connectionPassword: '••••••••',
            connectionString:
                'postgresql://user:pass@db-myproject-mydb.fra.appwrite.center:5432/postgres?sslmode=require',
            ssl: true,
            status: 'ready',
            containerStatus: 'active',
            lifecycleState: 'active',
            idleTimeoutMinutes: 15,
            cpu: 2000,
            memory: 4096,
            storage: 100,
            storageClass: 'ssd',
            storageMaxGb: 100,
            nodePool: 'db-pool-4vcpu-8gb',
            replicas: 2,
            syncMode: 'async',
            networkMaxConnections: 500,
            networkIdleTimeoutSeconds: 900,
            networkIPAllowlist: [],
            backupEnabled: true,
            pitr: true,
            pitrRetentionDays: 14,
            storageAutoscaling: true,
            storageAutoscalingThresholdPercent: 85,
            storageAutoscalingMaxGb: 500,
            maintenanceWindowDay: 'sun',
            maintenanceWindowHourUtc: 3,
            metricsEnabled: true,
            sqlApiEnabled: true,
            sqlApiAllowedStatements: [],
            sqlApiMaxRows: 10000,
            sqlApiMaxBytes: 10485760,
            sqlApiTimeoutSeconds: 30,
            error: '',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.createFailover('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listOperations()', async () => {
        const data = {
            total: 5,
            operations: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.listOperations('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getReplicas()', async () => {
        const data = {
            replicas: 2,
            syncMode: 'async',
            syncDegraded: true,
            syncAcknowledgements: 1,
            syncStandbyCount: 2,
            members: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.getReplicas('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getStatus()', async () => {
        const data = {
            health: 'healthy',
            ready: true,
            engine: 'postgresql',
            version: '17',
            uptime: 86400,
            connections: {},
            syncMode: 'async',
            syncDegraded: true,
            syncAcknowledgements: 1,
            syncStandbyCount: 2,
            replicas: [],
            volumes: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await vectorsDB.getStatus('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
