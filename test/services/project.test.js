const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Project } = require("../../dist/services/project");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Project', () => {
    const client = new Client();
    const project = new Project(client);

    
    test('test method listKeys()', async () => {
                                                const data = {
            'total': 5,
            'keys': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.listKeys(
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

        const response = await project.createKey(
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

        const response = await project.getKey(
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

        const response = await project.updateKey(
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

        const response = await project.deleteKey(
            '<KEY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateLabels()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'New Project',
            'description': 'This is a new project.',
            'teamId': '1592981250',
            'logo': '5f5c451b403cb',
            'url': '5f5c451b403cb',
            'legalName': 'Company LTD.',
            'legalCountry': 'US',
            'legalState': 'New York',
            'legalCity': 'New York City.',
            'legalAddress': '620 Eighth Avenue, New York, NY 10018',
            'legalTaxId': '131102020',
            'authDuration': 60,
            'authLimit': 100,
            'authSessionsLimit': 10,
            'authPasswordHistory': 5,
            'authPasswordDictionary': true,
            'authPersonalDataCheck': true,
            'authDisposableEmails': true,
            'authCanonicalEmails': true,
            'authFreeEmails': true,
            'authMockNumbers': [],
            'authSessionAlerts': true,
            'authMembershipsUserName': true,
            'authMembershipsUserEmail': true,
            'authMembershipsMfa': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
            'devKeys': [],
            'smtpEnabled': true,
            'smtpSenderName': 'John Appwrite',
            'smtpSenderEmail': 'john@appwrite.io',
            'smtpReplyTo': 'support@appwrite.io',
            'smtpHost': 'mail.appwrite.io',
            'smtpPort': 25,
            'smtpUsername': 'emailuser',
            'smtpPassword': 'securepassword',
            'smtpSecure': 'tls',
            'pingCount': 1,
            'pingedAt': '2020-10-15T06:38:00.000+00:00',
            'labels': [],
            'status': 'active',
            'authEmailPassword': true,
            'authUsersAuthMagicURL': true,
            'authEmailOtp': true,
            'authAnonymous': true,
            'authInvites': true,
            'authJWT': true,
            'authPhone': true,
            'serviceStatusForAccount': true,
            'serviceStatusForAvatars': true,
            'serviceStatusForDatabases': true,
            'serviceStatusForTablesdb': true,
            'serviceStatusForLocale': true,
            'serviceStatusForHealth': true,
            'serviceStatusForProject': true,
            'serviceStatusForStorage': true,
            'serviceStatusForTeams': true,
            'serviceStatusForUsers': true,
            'serviceStatusForVcs': true,
            'serviceStatusForSites': true,
            'serviceStatusForFunctions': true,
            'serviceStatusForProxy': true,
            'serviceStatusForGraphql': true,
            'serviceStatusForMigrations': true,
            'serviceStatusForMessaging': true,
            'protocolStatusForRest': true,
            'protocolStatusForGraphql': true,
            'protocolStatusForWebsocket': true,
            'region': 'fra',
            'billingLimits': {},
            'blocks': [],
            'consoleAccessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateLabels(
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listPlatforms()', async () => {
                                                const data = {
            'total': 5,
            'platforms': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.listPlatforms(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createAndroidPlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'applicationId': 'com.company.appname',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.createAndroidPlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            '<APPLICATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateAndroidPlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'applicationId': 'com.company.appname',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateAndroidPlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            '<APPLICATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createApplePlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'bundleIdentifier': 'com.company.appname',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.createApplePlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            '<BUNDLE_IDENTIFIER>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateApplePlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'bundleIdentifier': 'com.company.appname',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateApplePlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            '<BUNDLE_IDENTIFIER>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createLinuxPlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'packageName': 'com.company.appname',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.createLinuxPlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            '<PACKAGE_NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateLinuxPlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'packageName': 'com.company.appname',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateLinuxPlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            '<PACKAGE_NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createWebPlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'hostname': 'app.example.com',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.createWebPlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            'app.example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateWebPlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'hostname': 'app.example.com',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateWebPlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            'app.example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createWindowsPlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'packageIdentifierName': 'com.company.appname',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.createWindowsPlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            '<PACKAGE_IDENTIFIER_NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateWindowsPlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'packageIdentifierName': 'com.company.appname',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateWindowsPlatform(
            '<PLATFORM_ID>',
            '<NAME>',
            '<PACKAGE_IDENTIFIER_NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getPlatform()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Web App',
            'type': 'web',
            'packageName': 'com.company.appname',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.getPlatform(
            '<PLATFORM_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deletePlatform()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.deletePlatform(
            '<PLATFORM_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateProtocolStatus()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'New Project',
            'description': 'This is a new project.',
            'teamId': '1592981250',
            'logo': '5f5c451b403cb',
            'url': '5f5c451b403cb',
            'legalName': 'Company LTD.',
            'legalCountry': 'US',
            'legalState': 'New York',
            'legalCity': 'New York City.',
            'legalAddress': '620 Eighth Avenue, New York, NY 10018',
            'legalTaxId': '131102020',
            'authDuration': 60,
            'authLimit': 100,
            'authSessionsLimit': 10,
            'authPasswordHistory': 5,
            'authPasswordDictionary': true,
            'authPersonalDataCheck': true,
            'authDisposableEmails': true,
            'authCanonicalEmails': true,
            'authFreeEmails': true,
            'authMockNumbers': [],
            'authSessionAlerts': true,
            'authMembershipsUserName': true,
            'authMembershipsUserEmail': true,
            'authMembershipsMfa': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
            'devKeys': [],
            'smtpEnabled': true,
            'smtpSenderName': 'John Appwrite',
            'smtpSenderEmail': 'john@appwrite.io',
            'smtpReplyTo': 'support@appwrite.io',
            'smtpHost': 'mail.appwrite.io',
            'smtpPort': 25,
            'smtpUsername': 'emailuser',
            'smtpPassword': 'securepassword',
            'smtpSecure': 'tls',
            'pingCount': 1,
            'pingedAt': '2020-10-15T06:38:00.000+00:00',
            'labels': [],
            'status': 'active',
            'authEmailPassword': true,
            'authUsersAuthMagicURL': true,
            'authEmailOtp': true,
            'authAnonymous': true,
            'authInvites': true,
            'authJWT': true,
            'authPhone': true,
            'serviceStatusForAccount': true,
            'serviceStatusForAvatars': true,
            'serviceStatusForDatabases': true,
            'serviceStatusForTablesdb': true,
            'serviceStatusForLocale': true,
            'serviceStatusForHealth': true,
            'serviceStatusForProject': true,
            'serviceStatusForStorage': true,
            'serviceStatusForTeams': true,
            'serviceStatusForUsers': true,
            'serviceStatusForVcs': true,
            'serviceStatusForSites': true,
            'serviceStatusForFunctions': true,
            'serviceStatusForProxy': true,
            'serviceStatusForGraphql': true,
            'serviceStatusForMigrations': true,
            'serviceStatusForMessaging': true,
            'protocolStatusForRest': true,
            'protocolStatusForGraphql': true,
            'protocolStatusForWebsocket': true,
            'region': 'fra',
            'billingLimits': {},
            'blocks': [],
            'consoleAccessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateProtocolStatus(
            'rest',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateServiceStatus()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'New Project',
            'description': 'This is a new project.',
            'teamId': '1592981250',
            'logo': '5f5c451b403cb',
            'url': '5f5c451b403cb',
            'legalName': 'Company LTD.',
            'legalCountry': 'US',
            'legalState': 'New York',
            'legalCity': 'New York City.',
            'legalAddress': '620 Eighth Avenue, New York, NY 10018',
            'legalTaxId': '131102020',
            'authDuration': 60,
            'authLimit': 100,
            'authSessionsLimit': 10,
            'authPasswordHistory': 5,
            'authPasswordDictionary': true,
            'authPersonalDataCheck': true,
            'authDisposableEmails': true,
            'authCanonicalEmails': true,
            'authFreeEmails': true,
            'authMockNumbers': [],
            'authSessionAlerts': true,
            'authMembershipsUserName': true,
            'authMembershipsUserEmail': true,
            'authMembershipsMfa': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
            'devKeys': [],
            'smtpEnabled': true,
            'smtpSenderName': 'John Appwrite',
            'smtpSenderEmail': 'john@appwrite.io',
            'smtpReplyTo': 'support@appwrite.io',
            'smtpHost': 'mail.appwrite.io',
            'smtpPort': 25,
            'smtpUsername': 'emailuser',
            'smtpPassword': 'securepassword',
            'smtpSecure': 'tls',
            'pingCount': 1,
            'pingedAt': '2020-10-15T06:38:00.000+00:00',
            'labels': [],
            'status': 'active',
            'authEmailPassword': true,
            'authUsersAuthMagicURL': true,
            'authEmailOtp': true,
            'authAnonymous': true,
            'authInvites': true,
            'authJWT': true,
            'authPhone': true,
            'serviceStatusForAccount': true,
            'serviceStatusForAvatars': true,
            'serviceStatusForDatabases': true,
            'serviceStatusForTablesdb': true,
            'serviceStatusForLocale': true,
            'serviceStatusForHealth': true,
            'serviceStatusForProject': true,
            'serviceStatusForStorage': true,
            'serviceStatusForTeams': true,
            'serviceStatusForUsers': true,
            'serviceStatusForVcs': true,
            'serviceStatusForSites': true,
            'serviceStatusForFunctions': true,
            'serviceStatusForProxy': true,
            'serviceStatusForGraphql': true,
            'serviceStatusForMigrations': true,
            'serviceStatusForMessaging': true,
            'protocolStatusForRest': true,
            'protocolStatusForGraphql': true,
            'protocolStatusForWebsocket': true,
            'region': 'fra',
            'billingLimits': {},
            'blocks': [],
            'consoleAccessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateServiceStatus(
            'account',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listVariables()', async () => {
                                                const data = {
            'total': 5,
            'variables': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.listVariables(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createVariable()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'API_KEY',
            'value': 'myPa\$\$word1',
            'secret': true,
            'resourceType': 'function',
            'resourceId': 'myAwesomeFunction',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.createVariable(
            '<VARIABLE_ID>',
            '<KEY>',
            '<VALUE>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getVariable()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'API_KEY',
            'value': 'myPa\$\$word1',
            'secret': true,
            'resourceType': 'function',
            'resourceId': 'myAwesomeFunction',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.getVariable(
            '<VARIABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateVariable()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'API_KEY',
            'value': 'myPa\$\$word1',
            'secret': true,
            'resourceType': 'function',
            'resourceId': 'myAwesomeFunction',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateVariable(
            '<VARIABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteVariable()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.deleteVariable(
            '<VARIABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
