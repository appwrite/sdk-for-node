const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Presences } = require("../../dist/services/presences");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Presences', () => {
    const client = new Client();
    const presences = new Presences(client);

    
    test('test method list()', async () => {
                                                const data = {
            'total': 5,
            'presences': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await presences.list(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method get()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'userInternalId': '1',
            'userId': '674af8f3e12a5f9ac0be',
            'source': 'HTTP',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await presences.get(
            '<PRESENCE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method upsert()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'userInternalId': '1',
            'userId': '674af8f3e12a5f9ac0be',
            'source': 'HTTP',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await presences.upsert(
            '<PRESENCE_ID>',
            '<USER_ID>',
            '<STATUS>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePresence()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'userInternalId': '1',
            'userId': '674af8f3e12a5f9ac0be',
            'source': 'HTTP',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await presences.updatePresence(
            '<PRESENCE_ID>',
            '<USER_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method delete()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await presences.delete(
            '<PRESENCE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
