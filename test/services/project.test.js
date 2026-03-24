const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Project } = require("../../dist/services/project");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Project', () => {
    const client = new Client();
    const project = new Project(client);

    
    test('test method listVariables()', async () => {
        const data = {
            'total': 5,
            'variables': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.listVariables(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createVariable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'API_KEY',
            'value': 'myPa\$\$word1',
            'secret': true,
            'resourceType': 'function',
            'resourceId': 'myAwesomeFunction',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.createVariable(
            '<VARIABLE_ID>',
            '<KEY>',
            '<VALUE>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getVariable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'API_KEY',
            'value': 'myPa\$\$word1',
            'secret': true,
            'resourceType': 'function',
            'resourceId': 'myAwesomeFunction',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.getVariable(
            '<VARIABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateVariable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'API_KEY',
            'value': 'myPa\$\$word1',
            'secret': true,
            'resourceType': 'function',
            'resourceId': 'myAwesomeFunction',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.updateVariable(
            '<VARIABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteVariable()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await project.deleteVariable(
            '<VARIABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
