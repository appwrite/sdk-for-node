const { Client } = require('../../dist/client');
const { TablesDB } = require('../../dist/services/tables-db');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('TablesDB', () => {
    const client = new Client();
    const tablesDB = new TablesDB(client);

    test('test method list()', async () => {
        const data = {
            total: 5,
            databases: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.list();

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
        const response = await tablesDB.create('<DATABASE_ID>', '<NAME>');

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
        const response = await tablesDB.listSpecifications();

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
        const response = await tablesDB.listTransactions();

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
        const response = await tablesDB.createTransaction();

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
        const response = await tablesDB.getTransaction('<TRANSACTION_ID>');

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
        const response = await tablesDB.updateTransaction('<TRANSACTION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteTransaction()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.deleteTransaction('<TRANSACTION_ID>');

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
        const response = await tablesDB.createOperations('<TRANSACTION_ID>');

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
        const response = await tablesDB.get('<DATABASE_ID>');

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
        const response = await tablesDB.update('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method delete()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.delete('<DATABASE_ID>');

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
        const response = await tablesDB.createFailover('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listMigrations()', async () => {
        const data = {
            total: 5,
            migrations: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.listMigrations('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createMigration()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            projectId: '5e5ea5c16897e',
            databaseId: '5e5ea5c16897e',
            specification: 's-2vcpu-4gb',
            phase: 'pending',
            attempt: 0,
            lastError: '',
            lagDocuments: 0,
            changelogWatermark: 0,
            verifiedAt: '2020-10-15T06:38:00.000+00:00',
            cutoverAt: '2020-10-15T06:38:00.000+00:00',
            soakUntil: '2020-10-15T06:38:00.000+00:00',
            autoCutover: true,
            cutoverRequested: true,
            paused: true,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createMigration(
            '<DATABASE_ID>',
            's-1vcpu-1gb',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getMigration()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            projectId: '5e5ea5c16897e',
            databaseId: '5e5ea5c16897e',
            specification: 's-2vcpu-4gb',
            phase: 'pending',
            attempt: 0,
            lastError: '',
            lagDocuments: 0,
            changelogWatermark: 0,
            verifiedAt: '2020-10-15T06:38:00.000+00:00',
            cutoverAt: '2020-10-15T06:38:00.000+00:00',
            soakUntil: '2020-10-15T06:38:00.000+00:00',
            autoCutover: true,
            cutoverRequested: true,
            paused: true,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.getMigration(
            '<DATABASE_ID>',
            '<MIGRATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteMigration()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.deleteMigration(
            '<DATABASE_ID>',
            '<MIGRATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method cutoverMigration()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            projectId: '5e5ea5c16897e',
            databaseId: '5e5ea5c16897e',
            specification: 's-2vcpu-4gb',
            phase: 'pending',
            attempt: 0,
            lastError: '',
            lagDocuments: 0,
            changelogWatermark: 0,
            verifiedAt: '2020-10-15T06:38:00.000+00:00',
            cutoverAt: '2020-10-15T06:38:00.000+00:00',
            soakUntil: '2020-10-15T06:38:00.000+00:00',
            autoCutover: true,
            cutoverRequested: true,
            paused: true,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.cutoverMigration(
            '<DATABASE_ID>',
            '<MIGRATION_ID>',
        );

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
        const response = await tablesDB.listOperations('<DATABASE_ID>');

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
        const response = await tablesDB.getReplicas('<DATABASE_ID>');

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
        const response = await tablesDB.getStatus('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listTables()', async () => {
        const data = {
            total: 5,
            tables: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.listTables('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createTable()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
            databaseId: '5e5ea5c16897e',
            name: 'My Table',
            enabled: true,
            rowSecurity: true,
            columns: [],
            indexes: [],
            bytesMax: 65535,
            bytesUsed: 1500,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getTable()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
            databaseId: '5e5ea5c16897e',
            name: 'My Table',
            enabled: true,
            rowSecurity: true,
            columns: [],
            indexes: [],
            bytesMax: 65535,
            bytesUsed: 1500,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.getTable('<DATABASE_ID>', '<TABLE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateTable()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
            databaseId: '5e5ea5c16897e',
            name: 'My Table',
            enabled: true,
            rowSecurity: true,
            columns: [],
            indexes: [],
            bytesMax: 65535,
            bytesUsed: 1500,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteTable()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.deleteTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listColumns()', async () => {
        const data = {
            total: 5,
            columns: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.listColumns(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createBigIntColumn()', async () => {
        const data = {
            key: 'count',
            type: 'bigint',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createBigIntColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateBigIntColumn()', async () => {
        const data = {
            key: 'count',
            type: 'bigint',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateBigIntColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createBooleanColumn()', async () => {
        const data = {
            key: 'isEnabled',
            type: 'boolean',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createBooleanColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateBooleanColumn()', async () => {
        const data = {
            key: 'isEnabled',
            type: 'boolean',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateBooleanColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createDatetimeColumn()', async () => {
        const data = {
            key: 'birthDay',
            type: 'datetime',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            format: 'datetime',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createDatetimeColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateDatetimeColumn()', async () => {
        const data = {
            key: 'birthDay',
            type: 'datetime',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            format: 'datetime',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateDatetimeColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            '2020-10-15T06:38:00.000+00:00',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createEmailColumn()', async () => {
        const data = {
            key: 'userEmail',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            format: 'email',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createEmailColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateEmailColumn()', async () => {
        const data = {
            key: 'userEmail',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            format: 'email',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateEmailColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            'email@example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createEnumColumn()', async () => {
        const data = {
            key: 'status',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            elements: [],
            format: 'enum',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createEnumColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            [],
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateEnumColumn()', async () => {
        const data = {
            key: 'status',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            elements: [],
            format: 'enum',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateEnumColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            [],
            true,
            'active',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createFloatColumn()', async () => {
        const data = {
            key: 'percentageCompleted',
            type: 'double',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createFloatColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateFloatColumn()', async () => {
        const data = {
            key: 'percentageCompleted',
            type: 'double',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateFloatColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            1.0,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createIntegerColumn()', async () => {
        const data = {
            key: 'count',
            type: 'integer',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createIntegerColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateIntegerColumn()', async () => {
        const data = {
            key: 'count',
            type: 'integer',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateIntegerColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createIpColumn()', async () => {
        const data = {
            key: 'ipAddress',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            format: 'ip',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createIpColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateIpColumn()', async () => {
        const data = {
            key: 'ipAddress',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            format: 'ip',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateIpColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            '192.0.2.0',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createLineColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createLineColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateLineColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateLineColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createLongtextColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createLongtextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateLongtextColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateLongtextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            'Hello World',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createMediumtextColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createMediumtextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateMediumtextColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateMediumtextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            'Hello World',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createPointColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createPointColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updatePointColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updatePointColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createPolygonColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createPolygonColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updatePolygonColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updatePolygonColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRelationshipColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            relatedTable: 'table',
            relationType: 'oneToOne|oneToMany|manyToOne|manyToMany',
            twoWay: true,
            twoWayKey: 'string',
            onDelete: 'restrict|cascade|setNull',
            side: 'parent|child',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createRelationshipColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<RELATED_TABLE_ID>',
            'oneToOne',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createStringColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            size: 128,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createStringColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            1,
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateStringColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            size: 128,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateStringColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            'Hello World',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createTextColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createTextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateTextColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateTextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            'Hello World',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createUrlColumn()', async () => {
        const data = {
            key: 'githubUrl',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            format: 'url',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createUrlColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateUrlColumn()', async () => {
        const data = {
            key: 'githubUrl',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            format: 'url',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateUrlColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createVarcharColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            size: 128,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createVarcharColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            1,
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateVarcharColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            size: 128,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateVarcharColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            true,
            'Hello World',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            size: 128,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.getColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteColumn()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.deleteColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRelationshipColumn()', async () => {
        const data = {
            key: 'fullName',
            type: 'string',
            status: 'available',
            error: 'string',
            required: true,
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            relatedTable: 'table',
            relationType: 'oneToOne|oneToMany|manyToOne|manyToMany',
            twoWay: true,
            twoWayKey: 'string',
            onDelete: 'restrict|cascade|setNull',
            side: 'parent|child',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateRelationshipColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
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
        const response = await tablesDB.listIndexes(
            '<DATABASE_ID>',
            '<TABLE_ID>',
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
            columns: [],
            lengths: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createIndex(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
            'key',
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
            columns: [],
            lengths: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.getIndex(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteIndex()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.deleteIndex(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<KEY>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listRows()', async () => {
        const data = {
            total: 5,
            rows: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.listRows('<DATABASE_ID>', '<TABLE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRow()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$tableId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
            {},
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRows()', async () => {
        const data = {
            total: 5,
            rows: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.createRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method upsertRows()', async () => {
        const data = {
            total: 5,
            rows: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.upsertRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRows()', async () => {
        const data = {
            total: 5,
            rows: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteRows()', async () => {
        const data = {
            total: 5,
            rows: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.deleteRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getRow()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$tableId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.getRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method upsertRow()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$tableId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.upsertRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRow()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$tableId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.updateRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteRow()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.deleteRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method decrementRowColumn()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$tableId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.decrementRowColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
            '<COLUMN>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method incrementRowColumn()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$sequence': '1',
            '\\$tableId': '5e5ea5c15117e',
            '\\$databaseId': '5e5ea5c15117e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\\$permissions': [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await tablesDB.incrementRowColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
            '<COLUMN>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
