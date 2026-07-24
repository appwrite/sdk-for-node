const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Oauth2 } = require("../../dist/services/oauth-2");

const { fetch: mockedFetch, Response } = require("undici");
jest.mock('undici', () => ({ ...jest.requireActual('undici'), fetch: jest.fn() }));

describe('Oauth2', () => {
    const client = new Client();
    const oauth2 = new Oauth2(client);

    
    test('test method approve()', async () => {
                                                const data = {
            'redirectUrl': 'https://example.com/callback?code=abcde&state=fghij',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.approve(
            '<GRANT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method authorize()', async () => {
                                                const data = {
            'grantId': '5e5ea5c16897e',
            'redirectUrl': 'https://example.com/callback?code=abcde&state=fghij',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.authorize(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method authorizePost()', async () => {
                                                const data = {
            'grantId': '5e5ea5c16897e',
            'redirectUrl': 'https://example.com/callback?code=abcde&state=fghij',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.authorizePost(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createDeviceAuthorization()', async () => {
                                                const data = {
            'device_code': '5f3c8d2a1b9e4f7a6c8b2d1e9f4a7b3c5d8e1f2a9b4c7d6e3f5a8b1c4d7e2f9a',
            'user_code': 'ABCD-EFGH',
            'verification_uri': 'https://cloud.appwrite.io/console/oauth2/device',
            'verification_uri_complete': 'https://cloud.appwrite.io/console/oauth2/device?user_code=ABCD-EFGH',
            'expires_in': 900,
            'interval': 5,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.createDeviceAuthorization(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createGrant()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'appId': '5e5ea5c16897e',
            'scopes': [],
            'resources': [],
            'authorizationDetails': '[{\"type\":\"calendar\",\"identifier\":\"primary\",\"actions\":[\"read_events\",\"create_event\"]}]',
            'prompt': 'login',
            'redirectUri': 'https://example.com/callback',
            'authTime': 1592981250,
            'expire': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.createGrant(
            '<USER_CODE>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getGrant()', async () => {
                                                const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'appId': '5e5ea5c16897e',
            'scopes': [],
            'resources': [],
            'authorizationDetails': '[{\"type\":\"calendar\",\"identifier\":\"primary\",\"actions\":[\"read_events\",\"create_event\"]}]',
            'prompt': 'login',
            'redirectUri': 'https://example.com/callback',
            'authTime': 1592981250,
            'expire': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.getGrant(
            '<GRANT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listOrganizations()', async () => {
                                                const data = {
            'total': 5,
            'organizations': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.listOrganizations(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createPAR()', async () => {
                                                const data = {
            'request_uri': 'urn:appwrite:oauth2:request:5e5ea5c16897e',
            'expires_in': 600,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.createPAR(
            '<CLIENT_ID>',
            'https://example.com',
            'code',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listProjects()', async () => {
                                                const data = {
            'total': 5,
            'projects': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.listProjects(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method reject()', async () => {
                                                const data = {
            'redirectUrl': 'https://example.com/callback?error=access_denied&state=fghij',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.reject(
            '<GRANT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method revoke()', async () => {
                                const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.revoke(
            '<TOKEN>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createToken()', async () => {
                                                const data = {
            'access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...',
            'token_type': 'Bearer',
            'expires_in': 3600,
            'refresh_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...',
            'scope': 'openid email profile',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await oauth2.createToken(
            '<GRANT_TYPE>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
