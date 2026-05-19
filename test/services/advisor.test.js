const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Advisor } = require("../../dist/services/advisor");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Advisor', () => {
    const client = new Client();
    const advisor = new Advisor(client);

    
    test('test method listReports()', async () => {
                                                const data = {
            'total': 5,
            'reports': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await advisor.listReports(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getReport()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'appId': '5e5ea5c16897e',
            'type': 'lighthouse',
            'title': 'Lighthouse audit for https://appwrite.io/',
            'summary': 'Performance score 78. 4 opportunities found.',
            'targetType': 'urls',
            'target': 'https://appwrite.io/',
            'categories': [],
            'insights': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await advisor.getReport(
            '<REPORT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteReport()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await advisor.deleteReport(
            '<REPORT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listInsights()', async () => {
                                                const data = {
            'total': 5,
            'insights': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await advisor.listInsights(
            '<REPORT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getInsight()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'reportId': '5e5ea5c16897e',
            'type': 'tablesDBIndex',
            'severity': 'warning',
            'status': 'active',
            'resourceType': 'databases',
            'resourceId': 'main',
            'parentResourceType': 'tables',
            'parentResourceId': 'orders',
            'title': 'Missing index on collection orders',
            'summary': 'Queries against `orders.status` are scanning the full collection.',
            'ctas': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await advisor.getInsight(
            '<REPORT_ID>',
            '<INSIGHT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
