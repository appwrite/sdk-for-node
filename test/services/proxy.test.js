const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Proxy } = require("../../dist/services/proxy");

const { fetch: mockedFetch, Response } = require("undici");
jest.mock('undici', () => ({ ...jest.requireActual('undici'), fetch: jest.fn() }));

describe('Proxy', () => {
    const client = new Client();
    const proxy = new Proxy(client);

    
    test('test method listRules()', async () => {
                                                const data = {
            'total': 5,
            'rules': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await proxy.listRules(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createAPIRule()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'domain': 'appwrite.company.com',
            'type': 'deployment',
            'trigger': 'manual',
            'redirectUrl': 'https://appwrite.io/docs',
            'redirectStatusCode': 301,
            'deploymentId': 'n3u9feiwmf',
            'deploymentResourceId': 'n3u9feiwmf',
            'deploymentVcsProviderBranch': 'main',
            'status': 'verified',
            'logs': 'Verification of DNS records failed with DNS resolver 8.8.8.8. Domain stage.myapp.com does not have DNS record.',
            'renewAt': 'datetime',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await proxy.createAPIRule(
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createFunctionRule()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'domain': 'appwrite.company.com',
            'type': 'deployment',
            'trigger': 'manual',
            'redirectUrl': 'https://appwrite.io/docs',
            'redirectStatusCode': 301,
            'deploymentId': 'n3u9feiwmf',
            'deploymentResourceId': 'n3u9feiwmf',
            'deploymentVcsProviderBranch': 'main',
            'status': 'verified',
            'logs': 'Verification of DNS records failed with DNS resolver 8.8.8.8. Domain stage.myapp.com does not have DNS record.',
            'renewAt': 'datetime',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await proxy.createFunctionRule(
            '',
            '<FUNCTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createRedirectRule()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'domain': 'appwrite.company.com',
            'type': 'deployment',
            'trigger': 'manual',
            'redirectUrl': 'https://appwrite.io/docs',
            'redirectStatusCode': 301,
            'deploymentId': 'n3u9feiwmf',
            'deploymentResourceId': 'n3u9feiwmf',
            'deploymentVcsProviderBranch': 'main',
            'status': 'verified',
            'logs': 'Verification of DNS records failed with DNS resolver 8.8.8.8. Domain stage.myapp.com does not have DNS record.',
            'renewAt': 'datetime',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await proxy.createRedirectRule(
            '',
            'https://example.com',
            '301',
            '<RESOURCE_ID>',
            'site',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createSiteRule()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'domain': 'appwrite.company.com',
            'type': 'deployment',
            'trigger': 'manual',
            'redirectUrl': 'https://appwrite.io/docs',
            'redirectStatusCode': 301,
            'deploymentId': 'n3u9feiwmf',
            'deploymentResourceId': 'n3u9feiwmf',
            'deploymentVcsProviderBranch': 'main',
            'status': 'verified',
            'logs': 'Verification of DNS records failed with DNS resolver 8.8.8.8. Domain stage.myapp.com does not have DNS record.',
            'renewAt': 'datetime',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await proxy.createSiteRule(
            '',
            '<SITE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getRule()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'domain': 'appwrite.company.com',
            'type': 'deployment',
            'trigger': 'manual',
            'redirectUrl': 'https://appwrite.io/docs',
            'redirectStatusCode': 301,
            'deploymentId': 'n3u9feiwmf',
            'deploymentResourceId': 'n3u9feiwmf',
            'deploymentVcsProviderBranch': 'main',
            'status': 'verified',
            'logs': 'Verification of DNS records failed with DNS resolver 8.8.8.8. Domain stage.myapp.com does not have DNS record.',
            'renewAt': 'datetime',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await proxy.getRule(
            '<RULE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteRule()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await proxy.deleteRule(
            '<RULE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateRuleStatus()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'domain': 'appwrite.company.com',
            'type': 'deployment',
            'trigger': 'manual',
            'redirectUrl': 'https://appwrite.io/docs',
            'redirectStatusCode': 301,
            'deploymentId': 'n3u9feiwmf',
            'deploymentResourceId': 'n3u9feiwmf',
            'deploymentVcsProviderBranch': 'main',
            'status': 'verified',
            'logs': 'Verification of DNS records failed with DNS resolver 8.8.8.8. Domain stage.myapp.com does not have DNS record.',
            'renewAt': 'datetime',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await proxy.updateRuleStatus(
            '<RULE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
