const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Health } = require("../../dist/services/health");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Health', () => {
    const client = new Client();
    const health = new Health(client);

    
    test('test method get()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.get(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getAntivirus()', async () => {
        const data = {
            'version': '1.0.0',
            'status': 'online',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getAntivirus(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getCache()', async () => {
        const data = {
            'total': 5,
            'statuses': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getCache(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getCertificate()', async () => {
        const data = {
            'name': '/CN=www.google.com',
            'subjectSN': '',
            'issuerOrganisation': '',
            'validFrom': '1704200998',
            'validTo': '1711458597',
            'signatureTypeSN': 'RSA-SHA256',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getCertificate(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getConsolePausing()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getConsolePausing(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getDB()', async () => {
        const data = {
            'total': 5,
            'statuses': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getDB(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getPubSub()', async () => {
        const data = {
            'total': 5,
            'statuses': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getPubSub(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueAudits()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueAudits(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueBillingProjectAggregation()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueBillingProjectAggregation(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueBillingTeamAggregation()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueBillingTeamAggregation(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueBuilds()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueBuilds(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueuePriorityBuilds()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueuePriorityBuilds(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueCertificates()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueCertificates(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueDatabases()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueDatabases(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueDeletes()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueDeletes(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getFailedJobs()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getFailedJobs(
            'v1-database',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueFunctions()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueFunctions(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueLogs()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueLogs(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueMails()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueMails(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueMessaging()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueMessaging(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueMigrations()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueMigrations(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueRegionManager()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueRegionManager(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueStatsResources()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueStatsResources(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueUsage()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueUsage(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueThreats()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueThreats(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getQueueWebhooks()', async () => {
        const data = {
            'size': 8,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getQueueWebhooks(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getStorage()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getStorage(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getStorageLocal()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getStorageLocal(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getTime()', async () => {
        const data = {
            'remoteTime': 1639490751,
            'localTime': 1639490844,
            'diff': 93,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await health.getTime(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
