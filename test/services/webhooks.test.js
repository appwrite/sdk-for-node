const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Webhooks } = require("../../dist/services/webhooks");

const { fetch: mockedFetch, Response } = require("undici");
jest.mock('undici', () => ({ ...jest.requireActual('undici'), fetch: jest.fn() }));

describe('Webhooks', () => {
    const client = new Client();
    const webhooks = new Webhooks(client);

    
    test('test method list()', async () => {
                                                const data = {
            'total': 5,
            'webhooks': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await webhooks.list(
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
            'name': 'My Webhook',
            'url': 'https://example.com/webhook',
            'events': [],
            'tls': true,
            'authUsername': 'username',
            'authPassword': 'password',
            'secret': 'ad3d581ca230e2b7059c545e5a',
            'enabled': true,
            'logs': 'Failed to connect to remote server.',
            'attempts': 10,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await webhooks.create(
            '<WEBHOOK_ID>',
            '',
            '<NAME>',
            [],
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
            'name': 'My Webhook',
            'url': 'https://example.com/webhook',
            'events': [],
            'tls': true,
            'authUsername': 'username',
            'authPassword': 'password',
            'secret': 'ad3d581ca230e2b7059c545e5a',
            'enabled': true,
            'logs': 'Failed to connect to remote server.',
            'attempts': 10,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await webhooks.get(
            '<WEBHOOK_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method update()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Webhook',
            'url': 'https://example.com/webhook',
            'events': [],
            'tls': true,
            'authUsername': 'username',
            'authPassword': 'password',
            'secret': 'ad3d581ca230e2b7059c545e5a',
            'enabled': true,
            'logs': 'Failed to connect to remote server.',
            'attempts': 10,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await webhooks.update(
            '<WEBHOOK_ID>',
            '<NAME>',
            '',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method delete()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await webhooks.delete(
            '<WEBHOOK_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSecret()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Webhook',
            'url': 'https://example.com/webhook',
            'events': [],
            'tls': true,
            'authUsername': 'username',
            'authPassword': 'password',
            'secret': 'ad3d581ca230e2b7059c545e5a',
            'enabled': true,
            'logs': 'Failed to connect to remote server.',
            'attempts': 10,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await webhooks.updateSecret(
            '<WEBHOOK_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
