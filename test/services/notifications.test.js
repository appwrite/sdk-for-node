const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Notifications } = require("../../dist/services/notifications");

const { fetch: mockedFetch, Response } = require("undici");
jest.mock('undici', () => ({ ...jest.requireActual('undici'), fetch: jest.fn() }));

describe('Notifications', () => {
    const client = new Client();
    const notifications = new Notifications(client);

    
    test('test method list()', async () => {
                                                const data = {
            'total': 5,
            'notifications': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await notifications.list(
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
            'type': 'info',
            'channel': 'email',
            'resourceType': 'users',
            'resourceId': '5e5bb8c16897e',
            'parentResourceType': 'projects',
            'parentResourceId': '5e5bb8c16897e',
            'title': 'New sign-in detected',
            'body': 'A new device signed in to your account.',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await notifications.update(
            '<NOTIFICATION_ID>',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
