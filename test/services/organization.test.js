const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Organization } = require("../../dist/services/organization");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Organization', () => {
    const client = new Client();
    const organization = new Organization(client);

    
    test('test method listKeys()', async () => {
                                                const data = {
            'total': 5,
            'keys': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.listKeys(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createKey()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My API Key',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'scopes': [],
            'secret': '919c2d18fb5d4...a2ae413da83346ad2',
            'accessedAt': '2020-10-15T06:38:00.000+00:00',
            'sdks': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.createKey(
            '<KEY_ID>',
            '<NAME>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getKey()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My API Key',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'scopes': [],
            'secret': '919c2d18fb5d4...a2ae413da83346ad2',
            'accessedAt': '2020-10-15T06:38:00.000+00:00',
            'sdks': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.getKey(
            '<KEY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateKey()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My API Key',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'scopes': [],
            'secret': '919c2d18fb5d4...a2ae413da83346ad2',
            'accessedAt': '2020-10-15T06:38:00.000+00:00',
            'sdks': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.updateKey(
            '<KEY_ID>',
            '<NAME>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteKey()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.deleteKey(
            '<KEY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listProjects()', async () => {
                                                const data = {
            'total': 5,
            'projects': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.listProjects(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createProject()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'New Project',
            'teamId': '1592981250',
            'devKeys': [],
            'smtpEnabled': true,
            'smtpSenderName': 'John Appwrite',
            'smtpSenderEmail': 'john@appwrite.io',
            'smtpReplyToName': 'Support Team',
            'smtpReplyToEmail': 'support@appwrite.io',
            'smtpHost': 'mail.appwrite.io',
            'smtpPort': 25,
            'smtpUsername': 'emailuser',
            'smtpPassword': '',
            'smtpSecure': 'tls',
            'pingCount': 1,
            'pingedAt': '2020-10-15T06:38:00.000+00:00',
            'labels': [],
            'status': 'active',
            'authMethods': [],
            'services': [],
            'protocols': [],
            'region': 'fra',
            'blocks': [],
            'consoleAccessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.createProject(
            '',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getProject()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'New Project',
            'teamId': '1592981250',
            'devKeys': [],
            'smtpEnabled': true,
            'smtpSenderName': 'John Appwrite',
            'smtpSenderEmail': 'john@appwrite.io',
            'smtpReplyToName': 'Support Team',
            'smtpReplyToEmail': 'support@appwrite.io',
            'smtpHost': 'mail.appwrite.io',
            'smtpPort': 25,
            'smtpUsername': 'emailuser',
            'smtpPassword': '',
            'smtpSecure': 'tls',
            'pingCount': 1,
            'pingedAt': '2020-10-15T06:38:00.000+00:00',
            'labels': [],
            'status': 'active',
            'authMethods': [],
            'services': [],
            'protocols': [],
            'region': 'fra',
            'blocks': [],
            'consoleAccessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.getProject(
            '<PROJECT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateProject()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'New Project',
            'teamId': '1592981250',
            'devKeys': [],
            'smtpEnabled': true,
            'smtpSenderName': 'John Appwrite',
            'smtpSenderEmail': 'john@appwrite.io',
            'smtpReplyToName': 'Support Team',
            'smtpReplyToEmail': 'support@appwrite.io',
            'smtpHost': 'mail.appwrite.io',
            'smtpPort': 25,
            'smtpUsername': 'emailuser',
            'smtpPassword': '',
            'smtpSecure': 'tls',
            'pingCount': 1,
            'pingedAt': '2020-10-15T06:38:00.000+00:00',
            'labels': [],
            'status': 'active',
            'authMethods': [],
            'services': [],
            'protocols': [],
            'region': 'fra',
            'blocks': [],
            'consoleAccessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.updateProject(
            '<PROJECT_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteProject()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await organization.deleteProject(
            '<PROJECT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
