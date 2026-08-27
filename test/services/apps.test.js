const { Client } = require('../../dist/client');
const { Apps } = require('../../dist/services/apps');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Apps', () => {
    const client = new Client();
    const apps = new Apps(client);

    test('test method list()', async () => {
        const data = {
            total: 5,
            apps: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.list();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method create()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'My Application',
            description: 'Connect your workspace to My Application.',
            clientUri: 'https://example.com',
            logoUri: 'https://example.com/logo.png',
            privacyPolicyUrl: 'https://example.com/privacy',
            termsUrl: 'https://example.com/terms',
            contacts: [],
            tagline: 'Automate your workspace.',
            tags: [],
            labels: [],
            images: [],
            supportUrl: 'https://example.com/support',
            dataDeletionUrl: 'https://example.com/data-deletion',
            redirectUris: [],
            postLogoutRedirectUris: [],
            enabled: true,
            type: 'confidential',
            deviceFlow: true,
            teamId: '5e5ea5c16897e',
            userId: '5e5ea5c16897e',
            installationScopes: [],
            installationRedirectUrl: 'https://example.com/setup',
            secrets: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.create('<APP_ID>', '<NAME>', []);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listInstallationScopes()', async () => {
        const data = {
            total: 5,
            scopes: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.listInstallationScopes();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listOAuth2Scopes()', async () => {
        const data = {
            total: 5,
            scopes: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.listOAuth2Scopes();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method get()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'My Application',
            description: 'Connect your workspace to My Application.',
            clientUri: 'https://example.com',
            logoUri: 'https://example.com/logo.png',
            privacyPolicyUrl: 'https://example.com/privacy',
            termsUrl: 'https://example.com/terms',
            contacts: [],
            tagline: 'Automate your workspace.',
            tags: [],
            labels: [],
            images: [],
            supportUrl: 'https://example.com/support',
            dataDeletionUrl: 'https://example.com/data-deletion',
            redirectUris: [],
            postLogoutRedirectUris: [],
            enabled: true,
            type: 'confidential',
            deviceFlow: true,
            teamId: '5e5ea5c16897e',
            userId: '5e5ea5c16897e',
            installationScopes: [],
            installationRedirectUrl: 'https://example.com/setup',
            secrets: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.get('<APP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method update()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'My Application',
            description: 'Connect your workspace to My Application.',
            clientUri: 'https://example.com',
            logoUri: 'https://example.com/logo.png',
            privacyPolicyUrl: 'https://example.com/privacy',
            termsUrl: 'https://example.com/terms',
            contacts: [],
            tagline: 'Automate your workspace.',
            tags: [],
            labels: [],
            images: [],
            supportUrl: 'https://example.com/support',
            dataDeletionUrl: 'https://example.com/data-deletion',
            redirectUris: [],
            postLogoutRedirectUris: [],
            enabled: true,
            type: 'confidential',
            deviceFlow: true,
            teamId: '5e5ea5c16897e',
            userId: '5e5ea5c16897e',
            installationScopes: [],
            installationRedirectUrl: 'https://example.com/setup',
            secrets: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.update('<APP_ID>', '<NAME>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method delete()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.delete('<APP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listInstallations()', async () => {
        const data = {
            total: 5,
            installations: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.listInstallations('<APP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getInstallation()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            appId: '5e5ea5c16897e',
            teamId: '5e5ea5c16897e',
            scopes: [],
            authorizationDetails: [],
            createdById: '5e5ea5c16897e',
            createdByName: 'Walter White',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.getInstallation(
            '<APP_ID>',
            '<INSTALLATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteInstallation()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.deleteInstallation(
            '<APP_ID>',
            '<INSTALLATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createInstallationToken()', async () => {
        const data = {
            access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...',
            token_type: 'Bearer',
            expires_in: 3600,
            refresh_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...',
            scope: 'openid email profile',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.createInstallationToken(
            '<APP_ID>',
            '<INSTALLATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listKeys()', async () => {
        const data = {
            total: 5,
            keys: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.listKeys('<APP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createKey()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            appId: '5e5ea5c16897e',
            secret: '5f3c8d2a1b9e4f7a6c8b2d1e9f4a7b3c5d8e1f2a9b4c7d6e3f5a8b1c4d7e2f9a',
            hint: 'f5c6c7',
            createdById: '5e5ea5c16897e',
            createdByName: 'Walter White',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.createKey('<APP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getKey()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            appId: '5e5ea5c16897e',
            secret: '5f3c8d2a1b9e4f7a6c8b2d1e9f4a7b3c5d8e1f2a9b4c7d6e3f5a8b1c4d7e2f9a',
            hint: 'f5c6c7',
            createdById: '5e5ea5c16897e',
            createdByName: 'Walter White',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.getKey('<APP_ID>', '<KEY_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteKey()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.deleteKey('<APP_ID>', '<KEY_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateLabels()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'My Application',
            description: 'Connect your workspace to My Application.',
            clientUri: 'https://example.com',
            logoUri: 'https://example.com/logo.png',
            privacyPolicyUrl: 'https://example.com/privacy',
            termsUrl: 'https://example.com/terms',
            contacts: [],
            tagline: 'Automate your workspace.',
            tags: [],
            labels: [],
            images: [],
            supportUrl: 'https://example.com/support',
            dataDeletionUrl: 'https://example.com/data-deletion',
            redirectUris: [],
            postLogoutRedirectUris: [],
            enabled: true,
            type: 'confidential',
            deviceFlow: true,
            teamId: '5e5ea5c16897e',
            userId: '5e5ea5c16897e',
            installationScopes: [],
            installationRedirectUrl: 'https://example.com/setup',
            secrets: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.updateLabels('<APP_ID>', []);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listSecrets()', async () => {
        const data = {
            total: 5,
            secrets: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.listSecrets('<APP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createSecret()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            appId: '5e5ea5c16897e',
            secret: '5f3c8d2a1b9e4f7a6c8b2d1e9f4a7b3c5d8e1f2a9b4c7d6e3f5a8b1c4d7e2f9a',
            hint: 'f5c6c7',
            createdById: '5e5ea5c16897e',
            createdByName: 'Walter White',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.createSecret('<APP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getSecret()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            appId: '5e5ea5c16897e',
            secret: '',
            hint: 'f5c6c7',
            createdById: '5e5ea5c16897e',
            createdByName: 'Walter White',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.getSecret('<APP_ID>', '<SECRET_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteSecret()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.deleteSecret('<APP_ID>', '<SECRET_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateTeam()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'My Application',
            description: 'Connect your workspace to My Application.',
            clientUri: 'https://example.com',
            logoUri: 'https://example.com/logo.png',
            privacyPolicyUrl: 'https://example.com/privacy',
            termsUrl: 'https://example.com/terms',
            contacts: [],
            tagline: 'Automate your workspace.',
            tags: [],
            labels: [],
            images: [],
            supportUrl: 'https://example.com/support',
            dataDeletionUrl: 'https://example.com/data-deletion',
            redirectUris: [],
            postLogoutRedirectUris: [],
            enabled: true,
            type: 'confidential',
            deviceFlow: true,
            teamId: '5e5ea5c16897e',
            userId: '5e5ea5c16897e',
            installationScopes: [],
            installationRedirectUrl: 'https://example.com/setup',
            secrets: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.updateTeam('<APP_ID>', '<TEAM_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteTokens()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await apps.deleteTokens('<APP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
