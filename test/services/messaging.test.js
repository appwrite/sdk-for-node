const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Messaging } = require("../../dist/services/messaging");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Messaging', () => {
    const client = new Client();
    const messaging = new Messaging(client);

    
    test('test method listMessages()', async () => {
        const data = {
            'total': 5,
            'messages': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.listMessages(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createEmail()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'processing',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createEmail(
            '<MESSAGE_ID>',
            '<SUBJECT>',
            '<CONTENT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateEmail()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'processing',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateEmail(
            '<MESSAGE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createPush()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'processing',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createPush(
            '<MESSAGE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePush()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'processing',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updatePush(
            '<MESSAGE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createSms()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'processing',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createSms(
            '<MESSAGE_ID>',
            '<CONTENT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createSMS()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'processing',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createSMS(
            '<MESSAGE_ID>',
            '<CONTENT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSms()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'processing',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateSms(
            '<MESSAGE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSMS()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'processing',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateSMS(
            '<MESSAGE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getMessage()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'processing',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.getMessage(
            '<MESSAGE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method delete()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.delete(
            '<MESSAGE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listMessageLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.listMessageLogs(
            '<MESSAGE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listTargets()', async () => {
        const data = {
            'total': 5,
            'targets': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.listTargets(
            '<MESSAGE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listProviders()', async () => {
        const data = {
            'total': 5,
            'providers': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.listProviders(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createApnsProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createApnsProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createAPNSProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createAPNSProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateApnsProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateApnsProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateAPNSProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateAPNSProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createFcmProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createFcmProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createFCMProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createFCMProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateFcmProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateFcmProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateFCMProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateFCMProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMailgunProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createMailgunProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMailgunProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateMailgunProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMsg91Provider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createMsg91Provider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMsg91Provider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateMsg91Provider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createResendProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createResendProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateResendProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateResendProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createSendgridProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createSendgridProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSendgridProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateSendgridProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createSmtpProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createSmtpProvider(
            '<PROVIDER_ID>',
            '<NAME>',
            '<HOST>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createSMTPProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createSMTPProvider(
            '<PROVIDER_ID>',
            '<NAME>',
            '<HOST>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSmtpProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateSmtpProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSMTPProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateSMTPProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTelesignProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createTelesignProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateTelesignProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateTelesignProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTextmagicProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createTextmagicProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateTextmagicProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateTextmagicProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTwilioProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createTwilioProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateTwilioProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateTwilioProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createVonageProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createVonageProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateVonageProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateVonageProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.getProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteProvider()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.deleteProvider(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listProviderLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.listProviderLogs(
            '<PROVIDER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listSubscriberLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.listSubscriberLogs(
            '<SUBSCRIBER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listTopics()', async () => {
        const data = {
            'total': 5,
            'topics': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.listTopics(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTopic()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'events',
            'emailTotal': 100,
            'smsTotal': 100,
            'pushTotal': 100,
            'subscribe': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createTopic(
            '<TOPIC_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getTopic()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'events',
            'emailTotal': 100,
            'smsTotal': 100,
            'pushTotal': 100,
            'subscribe': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.getTopic(
            '<TOPIC_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateTopic()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'events',
            'emailTotal': 100,
            'smsTotal': 100,
            'pushTotal': 100,
            'subscribe': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.updateTopic(
            '<TOPIC_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteTopic()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.deleteTopic(
            '<TOPIC_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listTopicLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.listTopicLogs(
            '<TOPIC_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listSubscribers()', async () => {
        const data = {
            'total': 5,
            'subscribers': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.listSubscribers(
            '<TOPIC_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createSubscriber()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'targetId': '259125845563242502',
            'target': {},
            'userId': '5e5ea5c16897e',
            'userName': 'Aegon Targaryen',
            'topicId': '259125845563242502',
            'providerType': 'email',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.createSubscriber(
            '<TOPIC_ID>',
            '<SUBSCRIBER_ID>',
            '<TARGET_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getSubscriber()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'targetId': '259125845563242502',
            'target': {},
            'userId': '5e5ea5c16897e',
            'userName': 'Aegon Targaryen',
            'topicId': '259125845563242502',
            'providerType': 'email',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.getSubscriber(
            '<TOPIC_ID>',
            '<SUBSCRIBER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteSubscriber()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await messaging.deleteSubscriber(
            '<TOPIC_ID>',
            '<SUBSCRIBER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
