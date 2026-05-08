const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Project } = require("../../dist/services/project");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Project', () => {
    const client = new Client();
    const project = new Project(client);

    
    test('test method delete()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.delete(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateAuthMethod()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateAuthMethod(
            'email-password',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
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
    
    test('test method createEphemeralKey()', async () => {
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

        const response = await project.createEphemeralKey(
            [],
            1,
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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
    
    test('test method listMockPhones()', async () => {
                                                const data = {
            'total': 5,
            'mockNumbers': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.listMockPhones(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMockPhone()', async () => {
                                                const data = {
            'number': '+1612842323',
            'otp': '123456',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.createMockPhone(
            '+12065550100',
            '<OTP>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getMockPhone()', async () => {
                                                const data = {
            'number': '+1612842323',
            'otp': '123456',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.getMockPhone(
            '+12065550100',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMockPhone()', async () => {
                                                const data = {
            'number': '+1612842323',
            'otp': '123456',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateMockPhone(
            '+12065550100',
            '<OTP>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteMockPhone()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.deleteMockPhone(
            '+12065550100',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listOAuth2Providers()', async () => {
                                                const data = {
            'total': 5,
            'providers': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.listOAuth2Providers(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getOAuth2Provider()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'applicationId': '00001111-aaaa-2222-bbbb-3333cccc4444',
            'applicationSecret': 'A1bC2dE3fH4iJ5kL6mN7oP8qR9sT0u',
            'tenant': 'common',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.getOAuth2Provider(
            'amazon',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Amazon()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'amzn1.application-oa2-client.87400c00000000000000000000063d5b2',
            'clientSecret': '79ffe4000000000000000000000000000000000000000000000000000002de55',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Amazon(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Apple()', async () => {
                                                const data = {
            '\$id': 'apple',
            'enabled': true,
            'serviceId': 'ip.appwrite.app.web',
            'keyId': 'P4000000N8',
            'teamId': 'D4000000R6',
            'p8File': '-----BEGIN PRIVATE KEY-----MIGTAg...jy2Xbna-----END PRIVATE KEY-----',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Apple(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Auth0()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'OaOkIA000000000000000000005KLSYq',
            'clientSecret': 'zXz0000-00000000000000000000000000000-00000000000000000000PJafnF',
            'endpoint': 'example.us.auth0.com',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Auth0(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Authentik()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'dTKOPa0000000000000000000000000000e7G8hv',
            'clientSecret': 'ntQadq000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000Hp5WK',
            'endpoint': 'example.authentik.com',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Authentik(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Autodesk()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '5zw90v00000000000000000000kVYXN7',
            'clientSecret': '7I000000000000MW',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Autodesk(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Bitbucket()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'key': 'Knt70000000000ByRc',
            'secret': 'NMfLZJ00000000000000000000TLQdDx',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Bitbucket(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Bitly()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'd95151000000000000000000000000000067af9b',
            'clientSecret': 'a13e250000000000000000000000000000d73095',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Bitly(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Box()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'deglcs00000000000000000000x2og6y',
            'clientSecret': 'OKM1f100000000000000000000eshEif',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Box(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Dailymotion()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'apiKey': '07a9000000000000067f',
            'apiSecret': 'a399a90000000000000000000000000000d90639',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Dailymotion(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Discord()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '950722000000343754',
            'clientSecret': 'YmPXnM000000000000000000002zFg5D',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Discord(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Disqus()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'publicKey': 'cgegH70000000000000000000000000000000000000000000000000000Hr1nYX',
            'secretKey': 'W7Bykj00000000000000000000000000000000000000000000000000003o43w9',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Disqus(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Dropbox()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'appKey': 'jl000000000009t',
            'appSecret': 'g200000000000vw',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Dropbox(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Etsy()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'keyString': 'nsgzxh0000000000008j85a2',
            'sharedSecret': 'tp000000ru',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Etsy(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Facebook()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'appId': '260600000007694',
            'appSecret': '2d0b2800000000000000000000d38af4',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Facebook(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Figma()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'byay5H0000000000VtiI40',
            'clientSecret': 'yEpOYn0000000000000000004iIsU5',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Figma(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2FusionAuth()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'b2222c00-0000-0000-0000-000000862097',
            'clientSecret': 'Jx4s0C0000000000000000000000000000000wGqLsc',
            'endpoint': 'example.fusionauth.io',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2FusionAuth(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2GitHub()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'e4d87900000000540733',
            'clientSecret': '5e07c00000000000000000000000000000198bcc',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2GitHub(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Gitlab()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'applicationId': 'd41ffe0000000000000000000000000000000000000000000000000000d5e252',
            'secret': 'gloas-838cfa0000000000000000000000000000000000000000000000000000ecbb38',
            'endpoint': 'https://gitlab.com',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Gitlab(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Google()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'your-google-client-id.apps.googleusercontent.com',
            'clientSecret': 'your-google-client-secret',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Google(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Keycloak()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'appwrite-o0000000st-app',
            'clientSecret': 'jdjrJd00000000000000000000HUsaZO',
            'endpoint': 'keycloak.example.com',
            'realmName': 'appwrite-realm',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Keycloak(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Kick()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '01KQ7C00000000000001MFHS32',
            'clientSecret': '34ac5600000000000000000000000000000000000000000000000000e830c8b',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Kick(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Linkedin()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '770000000000dv',
            'primaryClientSecret': 'your-linkedin-client-secret',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Linkedin(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Microsoft()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'applicationId': '00001111-aaaa-2222-bbbb-3333cccc4444',
            'applicationSecret': 'A1bC2dE3fH4iJ5kL6mN7oP8qR9sT0u',
            'tenant': 'common',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Microsoft(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Notion()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'oauthClientId': '341d8700-0000-0000-0000-000000446ee3',
            'oauthClientSecret': 'secret_dLUr4b000000000000000000000000000000lFHAa9',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Notion(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Oidc()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'qibI2x0000000000000000000000000006L2YFoG',
            'clientSecret': 'Ah68ed000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003qpcHV',
            'wellKnownURL': 'https://myoauth.com/.well-known/openid-configuration',
            'authorizationURL': 'https://myoauth.com/oauth2/authorize',
            'tokenURL': 'https://myoauth.com/oauth2/token',
            'userInfoURL': 'https://myoauth.com/oauth2/userinfo',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Oidc(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Okta()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '0oa00000000000000698',
            'clientSecret': 'Kiq0000000000000000000000000000000000000-00000000000H2L5-3SJ-vRV',
            'domain': 'trial-6400025.okta.com',
            'authorizationServerId': 'aus000000000000000h7z',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Okta(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Paypal()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'AdhIEG7-000000000000-0000000000000000000000000000000-0000000000000000000000-2pyB',
            'secretKey': 'EH8KCXtew--000000000000000000000000000000000000000_C-1_5UP_000000000000000CB7KDp',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Paypal(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2PaypalSandbox()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'AdhIEG7-000000000000-0000000000000000000000000000000-0000000000000000000000-2pyB',
            'secretKey': 'EH8KCXtew--000000000000000000000000000000000000000_C-1_5UP_000000000000000CB7KDp',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2PaypalSandbox(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Podio()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'appwrite-oauth-test-app',
            'clientSecret': 'Rn247T0000000000000000000000000000000000000000000000000000W2zWTN',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Podio(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Salesforce()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'customerKey': '3MVG9I0000000000000000000000000000000000000000000000000000000000000000000000000C5Aejq',
            'customerSecret': '3w000000000000e2',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Salesforce(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Slack()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '23000000089.15000000000023',
            'clientSecret': '81656000000000000000000000f3d2fd',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Slack(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Spotify()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '6ec271000000000000000000009beace',
            'clientSecret': 'db068a000000000000000000008b5b9f',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Spotify(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Stripe()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'ca_UKibXX0000000000000000000006byvR',
            'apiSecretKey': 'sk_51SfOd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000QGWYfp',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Stripe(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Tradeshift()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'oauth2ClientId': 'appwrite-test-org.appwrite-test-app',
            'oauth2ClientSecret': '7cb52700-0000-0000-0000-000000ca5b83',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Tradeshift(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2TradeshiftSandbox()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'oauth2ClientId': 'appwrite-test-org.appwrite-test-app',
            'oauth2ClientSecret': '7cb52700-0000-0000-0000-000000ca5b83',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2TradeshiftSandbox(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Twitch()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'vvi0in000000000000000000ikmt9p',
            'clientSecret': 'pmapue000000000000000000zylw3v',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Twitch(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2WordPress()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '130005',
            'clientSecret': 'PlBfJS0000000000000000000000000000000000000000000000000000EdUZJk',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2WordPress(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2X()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'customerKey': 'slzZV0000000000000NFLaWT',
            'secretKey': 'tkEPkp00000000000000000000000000000000000000FTxbI9',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2X(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Yahoo()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'dj0yJm000000000000000000000000000000000000000000000000000000000000000000000000000000000000Z4PWRm',
            'clientSecret': 'cf978f0000000000000000000000000000c5e2e9',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Yahoo(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Yandex()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '6a8a6a0000000000000000000091483c',
            'clientSecret': 'bbf98500000000000000000000c75a63',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Yandex(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Zoho()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': '1000.83C178000000000000000000RPNX0B',
            'clientSecret': 'fb5cac000000000000000000000000000000a68f6e',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Zoho(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateOAuth2Zoom()', async () => {
                                                const data = {
            '\$id': 'github',
            'enabled': true,
            'clientId': 'QMAC00000000000000w0AQ',
            'clientSecret': 'GAWsG4000000000000000000007U01ON',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateOAuth2Zoom(
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
    
    test('test method listPolicies()', async () => {
                                                const data = {
            'total': 9,
            'policies': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.listPolicies(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMembershipPrivacyPolicy()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateMembershipPrivacyPolicy(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePasswordDictionaryPolicy()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updatePasswordDictionaryPolicy(
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePasswordHistoryPolicy()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updatePasswordHistoryPolicy(
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePasswordPersonalDataPolicy()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updatePasswordPersonalDataPolicy(
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSessionAlertPolicy()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateSessionAlertPolicy(
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSessionDurationPolicy()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateSessionDurationPolicy(
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSessionInvalidationPolicy()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateSessionInvalidationPolicy(
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSessionLimitPolicy()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateSessionLimitPolicy(
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateUserLimitPolicy()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateUserLimitPolicy(
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getPolicy()', async () => {
                                                const data = {
            '\$id': 'password-dictionary',
            'userId': true,
            'userEmail': true,
            'userPhone': true,
            'userName': true,
            'userMFA': true,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.getPolicy(
            'password-dictionary',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateProtocol()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateProtocol(
            'rest',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateService()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateService(
            'account',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSMTP()', async () => {
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
            'authMembershipsUserId': true,
            'authMembershipsUserPhone': true,
            'authInvalidateSessions': true,
            'oAuthProviders': [],
            'platforms': [],
            'webhooks': [],
            'keys': [],
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

        const response = await project.updateSMTP(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createSMTPTest()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.createSMTPTest(
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listEmailTemplates()', async () => {
                                                const data = {
            'total': 5,
            'templates': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.listEmailTemplates(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateEmailTemplate()', async () => {
                                                const data = {
            'templateId': 'verification',
            'locale': 'en_us',
            'message': 'Click on the link to verify your account.',
            'senderName': 'My User',
            'senderEmail': 'mail@appwrite.io',
            'replyToEmail': 'emails@appwrite.io',
            'replyToName': 'Support Team',
            'subject': 'Please verify your email address',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateEmailTemplate(
            'verification',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getEmailTemplate()', async () => {
                                                const data = {
            'templateId': 'verification',
            'locale': 'en_us',
            'message': 'Click on the link to verify your account.',
            'senderName': 'My User',
            'senderEmail': 'mail@appwrite.io',
            'replyToEmail': 'emails@appwrite.io',
            'replyToName': 'Support Team',
            'subject': 'Please verify your email address',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.getEmailTemplate(
            'verification',
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
