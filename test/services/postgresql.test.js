const { Client } = require('../../dist/client');
const { Postgresql } = require('../../dist/services/postgresql');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Postgresql', () => {
    const client = new Client();
    const postgresql = new Postgresql(client);

    test('test method list()', async () => {
        const data = {
            total: 5,
            databases: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.list();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method create()', async () => {
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
        const response = await postgresql.create('<DATABASE_ID>', '<NAME>');

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
        const response = await postgresql.listSpecifications();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method get()', async () => {
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
        const response = await postgresql.get('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method update()', async () => {
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
        const response = await postgresql.update('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method delete()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.delete('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listBackups()', async () => {
        const data = {
            total: 5,
            backups: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.listBackups('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createBackup()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            databaseId: '5e5ea5c16897e',
            projectId: '5e5ea5c16897e',
            policyId: '5e5ea5c16897e',
            trigger: 'schedule',
            type: 'full',
            requestedType: 'incremental',
            fallbackReason:
                'PostgreSQL incremental backups are not offered because they cannot be restored: archived WAL is physical and cannot replay onto a logically-restored base. A full backup was taken instead; use a point-in-time restore (targetTime) to recover to a moment between fulls.',
            status: 'completed',
            sizeBytes: 1073741824,
            error: '',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.createBackup('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listBackupPolicies()', async () => {
        const data = {
            total: 5,
            policies: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.listBackupPolicies('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createBackupPolicy()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            name: 'Hourly backups',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            services: [],
            resources: [],
            retention: 7,
            schedule: '0 * * * *',
            type: 'full',
            enabled: true,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.createBackupPolicy(
            '<DATABASE_ID>',
            '<POLICY_ID>',
            '<NAME>',
            '',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getBackupPolicy()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            name: 'Hourly backups',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            services: [],
            resources: [],
            retention: 7,
            schedule: '0 * * * *',
            type: 'full',
            enabled: true,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.getBackupPolicy(
            '<DATABASE_ID>',
            '<POLICY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateBackupPolicy()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            name: 'Hourly backups',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            services: [],
            resources: [],
            retention: 7,
            schedule: '0 * * * *',
            type: 'full',
            enabled: true,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.updateBackupPolicy(
            '<DATABASE_ID>',
            '<POLICY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteBackupPolicy()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.deleteBackupPolicy(
            '<DATABASE_ID>',
            '<POLICY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateBackupStorage()', async () => {
        const data = {
            provider: 's3',
            bucket: 'my-backup-bucket',
            region: 'us-east-1',
            prefix: 'backups/',
            endpoint: 'https://minio.example.com',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.updateBackupStorage(
            '<DATABASE_ID>',
            's3',
            '<BUCKET>',
            '<ACCESS_KEY>',
            '<SECRET_KEY>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getBackup()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            databaseId: '5e5ea5c16897e',
            projectId: '5e5ea5c16897e',
            policyId: '5e5ea5c16897e',
            trigger: 'schedule',
            type: 'full',
            requestedType: 'incremental',
            fallbackReason:
                'PostgreSQL incremental backups are not offered because they cannot be restored: archived WAL is physical and cannot replay onto a logically-restored base. A full backup was taken instead; use a point-in-time restore (targetTime) to recover to a moment between fulls.',
            status: 'completed',
            sizeBytes: 1073741824,
            error: '',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.getBackup(
            '<DATABASE_ID>',
            '<BACKUP_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteBackup()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.deleteBackup(
            '<DATABASE_ID>',
            '<BACKUP_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listBranches()', async () => {
        const data = {
            total: 2,
            branches: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.listBranches('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createBranch()', async () => {
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
        const response = await postgresql.createBranch('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteBranch()', async () => {
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
        const response = await postgresql.deleteBranch(
            '<DATABASE_ID>',
            '<BRANCH_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateCredentials()', async () => {
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
        const response = await postgresql.updateCredentials('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createExecution()', async () => {
        const data = {
            rows: [],
            rowCount: 1,
            columns: [],
            durationMs: 12,
            truncated: true,
            bytes: 1024,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.createExecution(
            '<DATABASE_ID>',
            '<SQL>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listExtensions()', async () => {
        const data = {
            installed: [],
            available: [],
            metadata: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.listExtensions('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createExtension()', async () => {
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
        const response = await postgresql.createExtension(
            '<DATABASE_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteExtension()', async () => {
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
        const response = await postgresql.deleteExtension(
            '<DATABASE_ID>',
            '<EXTENSION_NAME>',
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
        const response = await postgresql.createFailover('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateMaintenance()', async () => {
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
        const response = await postgresql.updateMaintenance(
            '<DATABASE_ID>',
            'sun',
            1,
        );

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
        const response = await postgresql.createMigration(
            '<DATABASE_ID>',
            'shared',
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
        const response = await postgresql.listOperations('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getPitr()', async () => {
        const data = {
            earliest: '2020-10-15T06:38:00.000+00:00',
            latest: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.getPitr('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getPooler()', async () => {
        const data = {
            enabled: true,
            mode: 'transaction',
            maxConnections: 200,
            defaultPoolSize: 25,
            port: 6432,
            readWriteSplitting: true,
            poolerCpuRequest: '100m',
            poolerCpuLimit: '200m',
            poolerMemoryRequest: '64Mi',
            poolerMemoryLimit: '128Mi',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.getPooler('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updatePooler()', async () => {
        const data = {
            enabled: true,
            mode: 'transaction',
            maxConnections: 200,
            defaultPoolSize: 25,
            port: 6432,
            readWriteSplitting: true,
            poolerCpuRequest: '100m',
            poolerCpuLimit: '200m',
            poolerMemoryRequest: '64Mi',
            poolerMemoryLimit: '128Mi',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.updatePooler('<DATABASE_ID>');

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
        const response = await postgresql.getReplicas('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listRestorations()', async () => {
        const data = {
            total: 5,
            restorations: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.listRestorations('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRestoration()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            databaseId: '5e5ea5c16897e',
            sourceDatabaseId: '5e5ea5c16897e',
            projectId: '5e5ea5c16897e',
            backupId: '5e5ea5c16897e',
            type: 'backup',
            status: 'completed',
            targetTime: '2020-10-15T06:38:00.000+00:00',
            startedAt: '2020-10-15T06:38:00.000+00:00',
            completedAt: '2020-10-15T06:38:00.000+00:00',
            error: '',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.createRestoration('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getRestoration()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            databaseId: '5e5ea5c16897e',
            sourceDatabaseId: '5e5ea5c16897e',
            projectId: '5e5ea5c16897e',
            backupId: '5e5ea5c16897e',
            type: 'backup',
            status: 'completed',
            targetTime: '2020-10-15T06:38:00.000+00:00',
            startedAt: '2020-10-15T06:38:00.000+00:00',
            completedAt: '2020-10-15T06:38:00.000+00:00',
            error: '',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await postgresql.getRestoration(
            '<DATABASE_ID>',
            '<RESTORATION_ID>',
        );

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
        const response = await postgresql.getStatus('<DATABASE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createUpgrade()', async () => {
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
        const response = await postgresql.createUpgrade(
            '<DATABASE_ID>',
            '<TARGET_VERSION>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
