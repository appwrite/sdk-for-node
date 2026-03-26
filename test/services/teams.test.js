const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Teams } = require("../../dist/services/teams");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Teams', () => {
    const client = new Client();
    const teams = new Teams(client);

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'teams': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.list(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method create()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'VIP',
            'total': 7,
            'prefs': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.create(
            '<TEAM_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method get()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'VIP',
            'total': 7,
            'prefs': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.get(
            '<TEAM_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateName()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'VIP',
            'total': 7,
            'prefs': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.updateName(
            '<TEAM_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method delete()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.delete(
            '<TEAM_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listMemberships()', async () => {
        const data = {
            'total': 5,
            'memberships': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.listMemberships(
            '<TEAM_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMembership()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'userName': 'John Doe',
            'userEmail': 'john@appwrite.io',
            'teamId': '5e5ea5c16897e',
            'teamName': 'VIP',
            'invited': '2020-10-15T06:38:00.000+00:00',
            'joined': '2020-10-15T06:38:00.000+00:00',
            'confirm': true,
            'mfa': true,
            'roles': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.createMembership(
            '<TEAM_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getMembership()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'userName': 'John Doe',
            'userEmail': 'john@appwrite.io',
            'teamId': '5e5ea5c16897e',
            'teamName': 'VIP',
            'invited': '2020-10-15T06:38:00.000+00:00',
            'joined': '2020-10-15T06:38:00.000+00:00',
            'confirm': true,
            'mfa': true,
            'roles': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.getMembership(
            '<TEAM_ID>',
            '<MEMBERSHIP_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMembership()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'userName': 'John Doe',
            'userEmail': 'john@appwrite.io',
            'teamId': '5e5ea5c16897e',
            'teamName': 'VIP',
            'invited': '2020-10-15T06:38:00.000+00:00',
            'joined': '2020-10-15T06:38:00.000+00:00',
            'confirm': true,
            'mfa': true,
            'roles': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.updateMembership(
            '<TEAM_ID>',
            '<MEMBERSHIP_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteMembership()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.deleteMembership(
            '<TEAM_ID>',
            '<MEMBERSHIP_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMembershipStatus()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'userName': 'John Doe',
            'userEmail': 'john@appwrite.io',
            'teamId': '5e5ea5c16897e',
            'teamName': 'VIP',
            'invited': '2020-10-15T06:38:00.000+00:00',
            'joined': '2020-10-15T06:38:00.000+00:00',
            'confirm': true,
            'mfa': true,
            'roles': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.updateMembershipStatus(
            '<TEAM_ID>',
            '<MEMBERSHIP_ID>',
            '<USER_ID>',
            '<SECRET>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getPrefs()', async () => {
        const data = {};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.getPrefs(
            '<TEAM_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePrefs()', async () => {
        const data = {};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await teams.updatePrefs(
            '<TEAM_ID>',
            {},
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
