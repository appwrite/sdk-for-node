const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Avatars } = require("../../dist/services/avatars");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Avatars', () => {
    const client = new Client();
    const avatars = new Avatars(client);

    
    test('test method getBrowser()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await avatars.getBrowser(
            'aa',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getCreditCard()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await avatars.getCreditCard(
            'amex',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getFavicon()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await avatars.getFavicon(
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getFlag()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await avatars.getFlag(
            'af',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getImage()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await avatars.getImage(
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getInitials()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await avatars.getInitials(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQR()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await avatars.getQR(
            '<TEXT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getScreenshot()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await avatars.getScreenshot(
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
