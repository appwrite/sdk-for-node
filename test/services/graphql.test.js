const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Graphql } = require("../../dist/services/graphql");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Graphql', () => {
    const client = new Client();
    const graphql = new Graphql(client);

    
    test('test method query()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await graphql.query(
            {},
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method mutation()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await graphql.mutation(
            {},
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
