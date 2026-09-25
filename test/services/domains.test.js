const { Client } = require('../../dist/client');
const { Domains } = require('../../dist/services/domains');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Domains', () => {
    const client = new Client();
    const domains = new Domains(client);

    test('test method list()', async () => {
        const data = {
            total: 5,
            domains: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.list();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method create()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            domain: 'example.com',
            registrar: 'appwrite',
            nameservers: 'Appwrite',
            expire: '2020-10-15T06:38:00.000+00:00',
            renewal: '2020-10-15T06:38:00.000+00:00',
            autoRenewal: true,
            renewalPrice: 2599,
            teamId: '5e5ea5c16897e',
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.create('<TEAM_ID>', 'example.com');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getPrice()', async () => {
        const data = {
            domain: 'example.com',
            tld: 'com',
            available: true,
            periodYears: 1,
            premium: true,
            renewalPeriodYears: 1,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getPrice('example.com');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listPrices()', async () => {
        const data = {
            total: 5,
            prices: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.listPrices([]);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method get()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            domain: 'example.com',
            registrar: 'appwrite',
            nameservers: 'Appwrite',
            expire: '2020-10-15T06:38:00.000+00:00',
            renewal: '2020-10-15T06:38:00.000+00:00',
            autoRenewal: true,
            renewalPrice: 2599,
            teamId: '5e5ea5c16897e',
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.get('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method delete()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.delete('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateNameservers()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            domain: 'example.com',
            registrar: 'appwrite',
            nameservers: 'Appwrite',
            expire: '2020-10-15T06:38:00.000+00:00',
            renewal: '2020-10-15T06:38:00.000+00:00',
            autoRenewal: true,
            renewalPrice: 2599,
            teamId: '5e5ea5c16897e',
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateNameservers('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method verifyNameservers()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            domain: 'example.com',
            registrar: 'appwrite',
            nameservers: 'Appwrite',
            expire: '2020-10-15T06:38:00.000+00:00',
            renewal: '2020-10-15T06:38:00.000+00:00',
            autoRenewal: true,
            renewalPrice: 2599,
            teamId: '5e5ea5c16897e',
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.verifyNameservers('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getPresetGoogleWorkspace()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getPresetGoogleWorkspace('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createPresetGoogleWorkspace()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response =
            await domains.createPresetGoogleWorkspace('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getPresetICloud()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getPresetICloud('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createPresetICloud()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createPresetICloud('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getPresetMailgun()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getPresetMailgun('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createPresetMailgun()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createPresetMailgun('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getPresetOutlook()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getPresetOutlook('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createPresetOutlook()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createPresetOutlook('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getPresetProtonMail()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getPresetProtonMail('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createPresetProtonMail()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createPresetProtonMail('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getPresetZoho()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getPresetZoho('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createPresetZoho()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createPresetZoho('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listRecords()', async () => {
        const data = {
            total: 5,
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.listRecords('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordA()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordA('<DOMAIN_ID>', '', '', 1);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordA()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordA(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordAAAA()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordAAAA(
            '<DOMAIN_ID>',
            '',
            '',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordAAAA()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordAAAA(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordAlias()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordAlias(
            '<DOMAIN_ID>',
            '',
            '<VALUE>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordAlias()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordAlias(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '<VALUE>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordCAA()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordCAA(
            '<DOMAIN_ID>',
            '',
            '',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordCAA()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordCAA(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordCNAME()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordCNAME(
            '<DOMAIN_ID>',
            '',
            '<VALUE>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordCNAME()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordCNAME(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '<VALUE>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordHTTPS()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordHTTPS(
            '<DOMAIN_ID>',
            '',
            '<VALUE>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordHTTPS()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordHTTPS(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '<VALUE>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordMX()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordMX(
            '<DOMAIN_ID>',
            '',
            '<VALUE>',
            1,
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordMX()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordMX(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '<VALUE>',
            1,
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordNS()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordNS(
            '<DOMAIN_ID>',
            '',
            '<VALUE>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordNS()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordNS(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '<VALUE>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordSRV()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordSRV(
            '<DOMAIN_ID>',
            '',
            '<VALUE>',
            1,
            1,
            1,
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordSRV()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordSRV(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '<VALUE>',
            1,
            1,
            1,
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRecordTXT()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.createRecordTXT('<DOMAIN_ID>', '', 1);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRecordTXT()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateRecordTXT(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
            '',
            '<VALUE>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getRecord()', async () => {
        const data = {
            '\\$id': '5f40a6e10c65e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            type: 'A',
            name: 'mail',
            value: '192.0.2.1',
            ttl: 86400,
            priority: 10,
            lock: true,
            weight: 10,
            port: 443,
            comment: 'Mail server record',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getRecord('<DOMAIN_ID>', '<RECORD_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteRecord()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.deleteRecord(
            '<DOMAIN_ID>',
            '<RECORD_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateTeam()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            domain: 'example.com',
            registrar: 'appwrite',
            nameservers: 'Appwrite',
            expire: '2020-10-15T06:38:00.000+00:00',
            renewal: '2020-10-15T06:38:00.000+00:00',
            autoRenewal: true,
            renewalPrice: 2599,
            teamId: '5e5ea5c16897e',
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateTeam('<DOMAIN_ID>', '<TEAM_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getTransferStatus()', async () => {
        const data = {
            status: 'pending_registry',
            reason: 'Transfer in progress',
            timestamp: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getTransferStatus('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getZone()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.getZone('<DOMAIN_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateZone()', async () => {
        const data = {
            '\\$id': '5e5ea5c16897e',
            '\\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            domain: 'example.com',
            registrar: 'appwrite',
            nameservers: 'Appwrite',
            expire: '2020-10-15T06:38:00.000+00:00',
            renewal: '2020-10-15T06:38:00.000+00:00',
            autoRenewal: true,
            renewalPrice: 2599,
            teamId: '5e5ea5c16897e',
            dnsRecords: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await domains.updateZone('<DOMAIN_ID>', '<CONTENT>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
