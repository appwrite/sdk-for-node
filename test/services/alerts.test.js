const { Client } = require('../../dist/client');
const { Alerts } = require('../../dist/services/alerts');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Alerts', () => {
    const client = new Client();
    const alerts = new Alerts(client);

    test('test method list()', async () => {
        const data = {
            total: 5,
            alerts: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await alerts.list();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method get()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            monitorId: '5e5ea5c16897e',
            name: 'Bandwidth spike',
            status: 'firing',
            acknowledgedBy: '5e5ea5c16897e',
            acknowledgedByName: 'Jane Doe',
            escalationId: '5e5ea5c16897e',
            escalationStep: 1,
            escalationRound: 0,
            rules: [],
            severity: 'warning',
            threshold: 5000000,
            value: 7250000,
            peak: 9100000,
            type: 'usage',
            resourceType: 'database',
            resourceId: '5e5ea5c16897e',
            notifications: 1,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await alerts.get('<ALERT_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method update()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            monitorId: '5e5ea5c16897e',
            name: 'Bandwidth spike',
            status: 'firing',
            acknowledgedBy: '5e5ea5c16897e',
            acknowledgedByName: 'Jane Doe',
            escalationId: '5e5ea5c16897e',
            escalationStep: 1,
            escalationRound: 0,
            rules: [],
            severity: 'warning',
            threshold: 5000000,
            value: 7250000,
            peak: 9100000,
            type: 'usage',
            resourceType: 'database',
            resourceId: '5e5ea5c16897e',
            notifications: 1,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await alerts.update('<ALERT_ID>', true);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
