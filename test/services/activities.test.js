const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Activities } = require("../../dist/services/activities");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Activities', () => {
    const client = new Client();
    const activities = new Activities(client);

    
    test('test method listEvents()', async () => {
        const data = {
            'total': 5,
            'events': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await activities.listEvents(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getEvent()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'userType': 'user',
            'userId': '610fc2f985ee0',
            'userEmail': 'john@appwrite.io',
            'userName': 'John Doe',
            'resourceParent': 'database/ID',
            'resourceType': 'collection',
            'resourceId': '610fc2f985ee0',
            'resource': 'collections/610fc2f985ee0',
            'event': 'account.sessions.create',
            'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'ip': '127.0.0.1',
            'mode': 'admin',
            'country': 'US',
            'time': '2020-10-15T06:38:00.000+00:00',
            'projectId': '610fc2f985ee0',
            'teamId': '610fc2f985ee0',
            'hostname': 'appwrite.io',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await activities.getEvent(
            '<EVENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
