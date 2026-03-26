const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Backups } = require("../../dist/services/backups");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Backups', () => {
    const client = new Client();
    const backups = new Backups(client);

    
    test('test method listArchives()', async () => {
        const data = {
            'total': 5,
            'archives': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.listArchives(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createArchive()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'policyId': 'did8jx6ws45jana098ab7',
            'size': 100000,
            'status': 'completed',
            'startedAt': '2020-10-15T06:38:00.000+00:00',
            'migrationId': 'did8jx6ws45jana098ab7',
            'services': [],
            'resources': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.createArchive(
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getArchive()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'policyId': 'did8jx6ws45jana098ab7',
            'size': 100000,
            'status': 'completed',
            'startedAt': '2020-10-15T06:38:00.000+00:00',
            'migrationId': 'did8jx6ws45jana098ab7',
            'services': [],
            'resources': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.getArchive(
            '<ARCHIVE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteArchive()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.deleteArchive(
            '<ARCHIVE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listPolicies()', async () => {
        const data = {
            'total': 5,
            'policies': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.listPolicies(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createPolicy()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'Hourly backups',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'services': [],
            'resources': [],
            'retention': 7,
            'schedule': '0 * * * *',
            'enabled': true,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.createPolicy(
            '<POLICY_ID>',
            [],
            1,
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getPolicy()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'Hourly backups',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'services': [],
            'resources': [],
            'retention': 7,
            'schedule': '0 * * * *',
            'enabled': true,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.getPolicy(
            '<POLICY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePolicy()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'Hourly backups',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'services': [],
            'resources': [],
            'retention': 7,
            'schedule': '0 * * * *',
            'enabled': true,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.updatePolicy(
            '<POLICY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deletePolicy()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.deletePolicy(
            '<POLICY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createRestoration()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'archiveId': 'did8jx6ws45jana098ab7',
            'policyId': 'did8jx6ws45jana098ab7',
            'status': 'completed',
            'startedAt': '2020-10-15T06:38:00.000+00:00',
            'migrationId': 'did8jx6ws45jana098ab7',
            'services': [],
            'resources': [],
            'options': '{databases.database[{oldId, newId, newName}]}',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.createRestoration(
            '<ARCHIVE_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listRestorations()', async () => {
        const data = {
            'total': 5,
            'restorations': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.listRestorations(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getRestoration()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'archiveId': 'did8jx6ws45jana098ab7',
            'policyId': 'did8jx6ws45jana098ab7',
            'status': 'completed',
            'startedAt': '2020-10-15T06:38:00.000+00:00',
            'migrationId': 'did8jx6ws45jana098ab7',
            'services': [],
            'resources': [],
            'options': '{databases.database[{oldId, newId, newName}]}',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await backups.getRestoration(
            '<RESTORATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
