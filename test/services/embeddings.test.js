const { Client } = require('../../dist/client');
const { Embeddings } = require('../../dist/services/embeddings');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Embeddings', () => {
    const client = new Client();
    const embeddings = new Embeddings(client);

    test('test method createTextEmbeddings()', async () => {
        const data = {
            total: 5,
            embeddings: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await embeddings.createTextEmbeddings([]);

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
