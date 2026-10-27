const { Client } = require('../../dist/client');
const { Migrations } = require('../../dist/services/migrations');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Migrations', () => {
    const client = new Client();
    const migrations = new Migrations(client);

    test('test method list()', async () => {
        const data = {
            total: 5,
            migrations: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.list();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createAppwriteMigration()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.createAppwriteMigration(
            [],
            'https://example.com',
            '<PROJECT_ID>',
            '<API_KEY>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createCSVExport()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.createCSVExport(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<FILENAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createCSVImport()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.createCSVImport(
            '<BUCKET_ID>',
            '<FILE_ID>',
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createFirebaseMigration()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.createFirebaseMigration(
            [],
            '<SERVICE_ACCOUNT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getFirebaseReport()', async () => {
        const data = {
            user: 20,
            team: 20,
            database: 20,
            row: 20,
            file: 20,
            bucket: 20,
            function: 20,
            platform: 5,
            'api-key': 5,
            'project-variable': 5,
            webhook: 5,
            'auth-methods': 1,
            'project-protocols': 1,
            'project-labels': 1,
            'project-services': 1,
            policies: 1,
            smtp: 1,
            rule: 5,
            'project-email-template': 7,
            'project-environment': 2,
            site: 5,
            provider: 5,
            topic: 10,
            subscriber: 100,
            message: 50,
            size: 30000,
            version: '1.4.0',
            'oauth2-provider': 5,
            'backup-policy': 5,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.getFirebaseReport(
            [],
            '<SERVICE_ACCOUNT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createJSONExport()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.createJSONExport(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<FILENAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createJSONImport()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.createJSONImport(
            '<BUCKET_ID>',
            '<FILE_ID>',
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createNHostMigration()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.createNHostMigration(
            [],
            '<SUBDOMAIN>',
            '<REGION>',
            '<ADMIN_SECRET>',
            '<DATABASE>',
            '<USERNAME>',
            'password',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getNHostReport()', async () => {
        const data = {
            user: 20,
            team: 20,
            database: 20,
            row: 20,
            file: 20,
            bucket: 20,
            function: 20,
            platform: 5,
            'api-key': 5,
            'project-variable': 5,
            webhook: 5,
            'auth-methods': 1,
            'project-protocols': 1,
            'project-labels': 1,
            'project-services': 1,
            policies: 1,
            smtp: 1,
            rule: 5,
            'project-email-template': 7,
            'project-environment': 2,
            site: 5,
            provider: 5,
            topic: 10,
            subscriber: 100,
            message: 50,
            size: 30000,
            version: '1.4.0',
            'oauth2-provider': 5,
            'backup-policy': 5,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.getNHostReport(
            [],
            '<SUBDOMAIN>',
            '<REGION>',
            '<ADMIN_SECRET>',
            '<DATABASE>',
            '<USERNAME>',
            'password',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createSupabaseMigration()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.createSupabaseMigration(
            [],
            'https://example.com',
            '<API_KEY>',
            '<DATABASE_HOST>',
            '<USERNAME>',
            'password',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getSupabaseReport()', async () => {
        const data = {
            user: 20,
            team: 20,
            database: 20,
            row: 20,
            file: 20,
            bucket: 20,
            function: 20,
            platform: 5,
            'api-key': 5,
            'project-variable': 5,
            webhook: 5,
            'auth-methods': 1,
            'project-protocols': 1,
            'project-labels': 1,
            'project-services': 1,
            policies: 1,
            smtp: 1,
            rule: 5,
            'project-email-template': 7,
            'project-environment': 2,
            site: 5,
            provider: 5,
            topic: 10,
            subscriber: 100,
            message: 50,
            size: 30000,
            version: '1.4.0',
            'oauth2-provider': 5,
            'backup-policy': 5,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.getSupabaseReport(
            [],
            'https://example.com',
            '<API_KEY>',
            '<DATABASE_HOST>',
            '<USERNAME>',
            'password',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method get()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.get('<MIGRATION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method retry()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            status: 'pending',
            stage: 'init',
            source: 'Appwrite',
            destination: 'Appwrite',
            resources: [],
            resourceId: 'collectionId',
            resourceInternalId: '1',
            resourceType: 'collection',
            parentResourceId: 'databaseId',
            parentResourceInternalId: '1',
            parentResourceType: 'database',
            destinationResourceId: 'databaseId',
            destinationResourceInternalId: '1',
            destinationResourceType: 'database',
            statusCounters: {},
            resourceData: [],
            errors: [],
            options: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.retry('<MIGRATION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method delete()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await migrations.delete('<MIGRATION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
