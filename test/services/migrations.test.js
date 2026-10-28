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
