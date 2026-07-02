const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Waf } = require("../../dist/services/waf");

const { fetch: mockedFetch, Response } = require("undici");
jest.mock('undici', () => ({ ...jest.requireActual('undici'), fetch: jest.fn() }));

describe('Waf', () => {
    const client = new Client();
    const waf = new Waf(client);

    
    test('test method createChallenge()', async () => {
                                                const data = {
            'token': 'eyJ2IjoxLCJ0eXAiOiJjbHIifQ.abc123',
            'expiresAt': 1717000600,
            'expiresIn': 600,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await waf.createChallenge(
            '<NONCE>',
            '<SOLUTION>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
