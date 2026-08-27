const { Client } = require('../../dist/client');
const { Organization } = require('../../dist/services/organization');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Organization', () => {
    const client = new Client();
    const organization = new Organization(client);

    test('test method get()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'VIP',
            total: 7,
            prefs: {},
            budgetAlerts: [],
            billingPlan: 'tier-1',
            billingPlanId: 'tier-1',
            billingPlanDetails: {},
            billingEmail: 'billing@org.example',
            billingStartDate: '2020-10-15T06:38:00.000+00:00',
            billingCurrentInvoiceDate: '2020-10-15T06:38:00.000+00:00',
            billingNextInvoiceDate: '2020-10-15T06:38:00.000+00:00',
            billingTrialDays: 14,
            billingAggregationId: 'adbc3de4rddfsd',
            billingInvoiceId: 'adbc3de4rddfsd',
            paymentMethodId: 'adbc3de4rddfsd',
            status: 'active',
            markedForDeletion: true,
            platform: 'imagine',
            projects: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.get();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method update()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'VIP',
            total: 7,
            prefs: {},
            budgetAlerts: [],
            billingPlan: 'tier-1',
            billingPlanId: 'tier-1',
            billingPlanDetails: {},
            billingEmail: 'billing@org.example',
            billingStartDate: '2020-10-15T06:38:00.000+00:00',
            billingCurrentInvoiceDate: '2020-10-15T06:38:00.000+00:00',
            billingNextInvoiceDate: '2020-10-15T06:38:00.000+00:00',
            billingTrialDays: 14,
            billingAggregationId: 'adbc3de4rddfsd',
            billingInvoiceId: 'adbc3de4rddfsd',
            paymentMethodId: 'adbc3de4rddfsd',
            status: 'active',
            markedForDeletion: true,
            platform: 'imagine',
            projects: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.update('<NAME>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method delete()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.delete();

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
        const response = await organization.listInstallations();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createInstallation()', async () => {
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
        const response = await organization.createInstallation('<APP_ID>');

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
        const response =
            await organization.getInstallation('<INSTALLATION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateInstallation()', async () => {
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
        const response =
            await organization.updateInstallation('<INSTALLATION_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteInstallation()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response =
            await organization.deleteInstallation('<INSTALLATION_ID>');

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
        const response = await organization.listKeys();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createKey()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'My API Key',
            expire: '2020-10-15T06:38:00.000+00:00',
            scopes: [],
            secret: '919c2d18fb5d4...a2ae413da83346ad2',
            accessedAt: '2020-10-15T06:38:00.000+00:00',
            sdks: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.createKey('<KEY_ID>', '<NAME>', []);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getKey()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'My API Key',
            expire: '2020-10-15T06:38:00.000+00:00',
            scopes: [],
            secret: '919c2d18fb5d4...a2ae413da83346ad2',
            accessedAt: '2020-10-15T06:38:00.000+00:00',
            sdks: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.getKey('<KEY_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateKey()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'My API Key',
            expire: '2020-10-15T06:38:00.000+00:00',
            scopes: [],
            secret: '919c2d18fb5d4...a2ae413da83346ad2',
            accessedAt: '2020-10-15T06:38:00.000+00:00',
            sdks: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.updateKey('<KEY_ID>', '<NAME>', []);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteKey()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.deleteKey('<KEY_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listMemberships()', async () => {
        const data = {
            total: 5,
            memberships: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.listMemberships();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createMembership()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            userId: '5e5ea5c16897e',
            userName: 'John Doe',
            userEmail: 'john@appwrite.io',
            userPhone: '+1 555 555 5555',
            teamId: '5e5ea5c16897e',
            teamName: 'VIP',
            invited: '2020-10-15T06:38:00.000+00:00',
            joined: '2020-10-15T06:38:00.000+00:00',
            confirm: true,
            mfa: true,
            userAccessedAt: '2020-10-15T06:38:00.000+00:00',
            roles: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.createMembership([]);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getMembership()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            userId: '5e5ea5c16897e',
            userName: 'John Doe',
            userEmail: 'john@appwrite.io',
            userPhone: '+1 555 555 5555',
            teamId: '5e5ea5c16897e',
            teamName: 'VIP',
            invited: '2020-10-15T06:38:00.000+00:00',
            joined: '2020-10-15T06:38:00.000+00:00',
            confirm: true,
            mfa: true,
            userAccessedAt: '2020-10-15T06:38:00.000+00:00',
            roles: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.getMembership('<MEMBERSHIP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateMembership()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            userId: '5e5ea5c16897e',
            userName: 'John Doe',
            userEmail: 'john@appwrite.io',
            userPhone: '+1 555 555 5555',
            teamId: '5e5ea5c16897e',
            teamName: 'VIP',
            invited: '2020-10-15T06:38:00.000+00:00',
            joined: '2020-10-15T06:38:00.000+00:00',
            confirm: true,
            mfa: true,
            userAccessedAt: '2020-10-15T06:38:00.000+00:00',
            roles: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.updateMembership(
            '<MEMBERSHIP_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteMembership()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.deleteMembership('<MEMBERSHIP_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listProjects()', async () => {
        const data = {
            total: 5,
            projects: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.listProjects();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createProject()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'New Project',
            teamId: '1592981250',
            region: 'fra',
            devKeys: [],
            smtpEnabled: true,
            smtpSenderName: 'John Appwrite',
            smtpSenderEmail: 'john@appwrite.io',
            smtpReplyToName: 'Support Team',
            smtpReplyToEmail: 'support@appwrite.io',
            smtpHost: 'mail.appwrite.io',
            smtpPort: 25,
            smtpUsername: 'emailuser',
            smtpPassword: 'smtp-password',
            smtpSecure: 'tls',
            pingCount: 1,
            pingedAt: '2020-10-15T06:38:00.000+00:00',
            labels: [],
            status: 'active',
            onboarding: {},
            authMethods: [],
            services: [],
            protocols: [],
            blocks: [],
            consoleAccessedAt: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.createProject(
            '<PROJECT_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getProject()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'New Project',
            teamId: '1592981250',
            region: 'fra',
            devKeys: [],
            smtpEnabled: true,
            smtpSenderName: 'John Appwrite',
            smtpSenderEmail: 'john@appwrite.io',
            smtpReplyToName: 'Support Team',
            smtpReplyToEmail: 'support@appwrite.io',
            smtpHost: 'mail.appwrite.io',
            smtpPort: 25,
            smtpUsername: 'emailuser',
            smtpPassword: 'smtp-password',
            smtpSecure: 'tls',
            pingCount: 1,
            pingedAt: '2020-10-15T06:38:00.000+00:00',
            labels: [],
            status: 'active',
            onboarding: {},
            authMethods: [],
            services: [],
            protocols: [],
            blocks: [],
            consoleAccessedAt: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.getProject('<PROJECT_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateProject()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            name: 'New Project',
            teamId: '1592981250',
            region: 'fra',
            devKeys: [],
            smtpEnabled: true,
            smtpSenderName: 'John Appwrite',
            smtpSenderEmail: 'john@appwrite.io',
            smtpReplyToName: 'Support Team',
            smtpReplyToEmail: 'support@appwrite.io',
            smtpHost: 'mail.appwrite.io',
            smtpPort: 25,
            smtpUsername: 'emailuser',
            smtpPassword: 'smtp-password',
            smtpSecure: 'tls',
            pingCount: 1,
            pingedAt: '2020-10-15T06:38:00.000+00:00',
            labels: [],
            status: 'active',
            onboarding: {},
            authMethods: [],
            services: [],
            protocols: [],
            blocks: [],
            consoleAccessedAt: '2020-10-15T06:38:00.000+00:00',
        };
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
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await organization.deleteProject('<PROJECT_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
