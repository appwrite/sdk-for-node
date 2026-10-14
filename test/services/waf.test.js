const { Client } = require('../../dist/client');
const { Waf } = require('../../dist/services/waf');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Waf', () => {
    const client = new Client();
    const waf = new Waf(client);

    test('test method listRules()', async () => {
        const data = {
            total: 5,
            rules: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.listRules();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createBypassRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.createBypassRule(
            '<RULE_ID>',
            'api',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateBypassRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.updateBypassRule('<RULE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createChallengeRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
            challengeType: 'compute',
            difficulty: 3,
            ttl: 1800,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.createChallengeRule(
            '<RULE_ID>',
            'api',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateChallengeRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
            challengeType: 'compute',
            difficulty: 3,
            ttl: 1800,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.updateChallengeRule('<RULE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createDenyRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.createDenyRule('<RULE_ID>', 'api', '<NAME>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateDenyRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.updateDenyRule('<RULE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRateLimitRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
            limit: 1000,
            interval: 60,
            key: 'userId',
            strategy: 'slidingWindow',
            maxBucketSize: 200,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.createRateLimitRule(
            '<RULE_ID>',
            'api',
            '<NAME>',
            1,
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRateLimitRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
            limit: 1000,
            interval: 60,
            key: 'userId',
            strategy: 'slidingWindow',
            maxBucketSize: 200,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.updateRateLimitRule('<RULE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRedirectRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
            location: '/maintenance',
            statusCode: 301,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.createRedirectRule(
            '<RULE_ID>',
            'api',
            '<NAME>',
            '<LOCATION>',
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateRedirectRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
            location: '/maintenance',
            statusCode: 301,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.updateRedirectRule('<RULE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getRule()', async () => {
        const data = {
            $id: 'wafRule1',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'Block anonymous POST traffic',
            description: 'Blocks anonymous POST calls to /v1/graphql',
            teamId: '5e5ea5c16897e',
            projectId: 'cloudConsole',
            resourceType: 'functions',
            resourceId: 'functionId',
            action: 'deny',
            priority: 100,
            enabled: true,
            conditions: [],
            config: {},
            location: '/maintenance',
            statusCode: 301,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.getRule('<RULE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteRule()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await waf.deleteRule('<RULE_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
