const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Locale } = require("../../dist/services/locale");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Locale', () => {
    const client = new Client();
    const locale = new Locale(client);

    
    test('test method get()', async () => {
        const data = {
            'ip': '127.0.0.1',
            'countryCode': 'US',
            'country': 'United States',
            'continentCode': 'NA',
            'continent': 'North America',
            'eu': true,
            'currency': 'USD',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await locale.get(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listCodes()', async () => {
        const data = {
            'total': 5,
            'localeCodes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await locale.listCodes(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listContinents()', async () => {
        const data = {
            'total': 5,
            'continents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await locale.listContinents(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listCountries()', async () => {
        const data = {
            'total': 5,
            'countries': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await locale.listCountries(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listCountriesEU()', async () => {
        const data = {
            'total': 5,
            'countries': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await locale.listCountriesEU(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listCountriesPhones()', async () => {
        const data = {
            'total': 5,
            'phones': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await locale.listCountriesPhones(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listCurrencies()', async () => {
        const data = {
            'total': 5,
            'currencies': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await locale.listCurrencies(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listLanguages()', async () => {
        const data = {
            'total': 5,
            'languages': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await locale.listLanguages(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
