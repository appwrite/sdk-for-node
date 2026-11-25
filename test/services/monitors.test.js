const { Client } = require('../../dist/client');
const { Monitors } = require('../../dist/services/monitors');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Monitors', () => {
    const client = new Client();
    const monitors = new Monitors(client);

    test('test method list()', async () => {
        const data = {
            total: 5,
            monitors: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.list();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createDnsMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.createDnsMonitor(
            '<MONITOR_ID>',
            '<NAME>',
            'example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateDnsMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.updateDnsMonitor('<MONITOR_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createHttpMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.createHttpMonitor(
            '<MONITOR_ID>',
            '<NAME>',
            'https://example.com/health',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateHttpMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.updateHttpMonitor('<MONITOR_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createSmtpMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.createSmtpMonitor(
            '<MONITOR_ID>',
            '<NAME>',
            'example.com',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateSmtpMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.updateSmtpMonitor('<MONITOR_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createTcpMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.createTcpMonitor(
            '<MONITOR_ID>',
            '<NAME>',
            'example.com',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateTcpMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.updateTcpMonitor('<MONITOR_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createUsageMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.createUsageMonitor(
            '<MONITOR_ID>',
            '<NAME>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateUsageMonitor()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.updateUsageMonitor('<MONITOR_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method get()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Bandwidth spike',
            projectId: '5e5ea5c16897e',
            rules: [],
            type: 'usage',
            resourceType: 'database',
            resourceId: 'main',
            window: 3600,
            cooldown: 3600,
            enabled: true,
            notify: [],
            escalationId: '5e5ea5c16897e',
            severity: 'warning',
            status: 'ok',
            alertId: '5e5ea5c16897e',
            interval: 60,
            timeout: 10,
            url: 'https://example.com/health',
            body: '',
            domain: 'example.com',
            resolver: '1.1.1.1',
            host: 'mail.example.com',
            port: 587,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.get('<MONITOR_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method delete()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await monitors.delete('<MONITOR_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
