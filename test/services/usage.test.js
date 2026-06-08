const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Usage } = require("../../dist/services/usage");

const { fetch: mockedFetch, Response } = require("undici");
jest.mock('undici', () => ({ ...jest.requireActual('undici'), fetch: jest.fn() }));

describe('Usage', () => {
    const client = new Client();
    const usage = new Usage(client);

    
    test('test method listEvents()', async () => {
                                                const data = {
            'total': 5,
            'events': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await usage.listEvents(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listGauges()', async () => {
                                                const data = {
            'total': 5,
            'gauges': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await usage.listGauges(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
