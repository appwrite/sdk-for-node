const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Sites } = require("../../dist/services/sites");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Sites', () => {
    const client = new Client();
    const sites = new Sites(client);

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'sites': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.list(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method create()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Site',
            'enabled': true,
            'live': true,
            'logging': true,
            'framework': 'react',
            'deploymentRetention': 7,
            'deploymentId': '5e5ea5c16897e',
            'deploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'deploymentScreenshotLight': '5e5ea5c16897e',
            'deploymentScreenshotDark': '5e5ea5c16897e',
            'latestDeploymentId': '5e5ea5c16897e',
            'latestDeploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentStatus': 'ready',
            'vars': [],
            'timeout': 300,
            'installCommand': 'npm install',
            'buildCommand': 'npm run build',
            'startCommand': 'node custom-server.mjs',
            'outputDirectory': 'build',
            'installationId': '6m40at4ejk5h2u9s1hboo',
            'providerRepositoryId': 'appwrite',
            'providerBranch': 'main',
            'providerRootDirectory': 'sites/helloWorld',
            'providerSilentMode': true,
            'buildSpecification': 's-1vcpu-512mb',
            'runtimeSpecification': 's-1vcpu-512mb',
            'buildRuntime': 'node-22',
            'adapter': 'static',
            'fallbackFile': 'index.html',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.create(
            '<SITE_ID>',
            '<NAME>',
            'analog',
            'node-14.5',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listFrameworks()', async () => {
        const data = {
            'total': 5,
            'frameworks': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.listFrameworks(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listSpecifications()', async () => {
        const data = {
            'total': 5,
            'specifications': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.listSpecifications(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method get()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Site',
            'enabled': true,
            'live': true,
            'logging': true,
            'framework': 'react',
            'deploymentRetention': 7,
            'deploymentId': '5e5ea5c16897e',
            'deploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'deploymentScreenshotLight': '5e5ea5c16897e',
            'deploymentScreenshotDark': '5e5ea5c16897e',
            'latestDeploymentId': '5e5ea5c16897e',
            'latestDeploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentStatus': 'ready',
            'vars': [],
            'timeout': 300,
            'installCommand': 'npm install',
            'buildCommand': 'npm run build',
            'startCommand': 'node custom-server.mjs',
            'outputDirectory': 'build',
            'installationId': '6m40at4ejk5h2u9s1hboo',
            'providerRepositoryId': 'appwrite',
            'providerBranch': 'main',
            'providerRootDirectory': 'sites/helloWorld',
            'providerSilentMode': true,
            'buildSpecification': 's-1vcpu-512mb',
            'runtimeSpecification': 's-1vcpu-512mb',
            'buildRuntime': 'node-22',
            'adapter': 'static',
            'fallbackFile': 'index.html',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.get(
            '<SITE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method update()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Site',
            'enabled': true,
            'live': true,
            'logging': true,
            'framework': 'react',
            'deploymentRetention': 7,
            'deploymentId': '5e5ea5c16897e',
            'deploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'deploymentScreenshotLight': '5e5ea5c16897e',
            'deploymentScreenshotDark': '5e5ea5c16897e',
            'latestDeploymentId': '5e5ea5c16897e',
            'latestDeploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentStatus': 'ready',
            'vars': [],
            'timeout': 300,
            'installCommand': 'npm install',
            'buildCommand': 'npm run build',
            'startCommand': 'node custom-server.mjs',
            'outputDirectory': 'build',
            'installationId': '6m40at4ejk5h2u9s1hboo',
            'providerRepositoryId': 'appwrite',
            'providerBranch': 'main',
            'providerRootDirectory': 'sites/helloWorld',
            'providerSilentMode': true,
            'buildSpecification': 's-1vcpu-512mb',
            'runtimeSpecification': 's-1vcpu-512mb',
            'buildRuntime': 'node-22',
            'adapter': 'static',
            'fallbackFile': 'index.html',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.update(
            '<SITE_ID>',
            '<NAME>',
            'analog',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method delete()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.delete(
            '<SITE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSiteDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'My Site',
            'enabled': true,
            'live': true,
            'logging': true,
            'framework': 'react',
            'deploymentRetention': 7,
            'deploymentId': '5e5ea5c16897e',
            'deploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'deploymentScreenshotLight': '5e5ea5c16897e',
            'deploymentScreenshotDark': '5e5ea5c16897e',
            'latestDeploymentId': '5e5ea5c16897e',
            'latestDeploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentStatus': 'ready',
            'vars': [],
            'timeout': 300,
            'installCommand': 'npm install',
            'buildCommand': 'npm run build',
            'startCommand': 'node custom-server.mjs',
            'outputDirectory': 'build',
            'installationId': '6m40at4ejk5h2u9s1hboo',
            'providerRepositoryId': 'appwrite',
            'providerBranch': 'main',
            'providerRootDirectory': 'sites/helloWorld',
            'providerSilentMode': true,
            'buildSpecification': 's-1vcpu-512mb',
            'runtimeSpecification': 's-1vcpu-512mb',
            'buildRuntime': 'node-22',
            'adapter': 'static',
            'fallbackFile': 'index.html',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.updateSiteDeployment(
            '<SITE_ID>',
            '<DEPLOYMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listDeployments()', async () => {
        const data = {
            'total': 5,
            'deployments': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.listDeployments(
            '<SITE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranch': '0.7.x',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.createDeployment(
            '<SITE_ID>',
            InputFile.fromBuffer(new Uint8Array(0), 'image.png'),
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createDuplicateDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranch': '0.7.x',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.createDuplicateDeployment(
            '<SITE_ID>',
            '<DEPLOYMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTemplateDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranch': '0.7.x',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.createTemplateDeployment(
            '<SITE_ID>',
            '<REPOSITORY>',
            '<OWNER>',
            '<ROOT_DIRECTORY>',
            'branch',
            '<REFERENCE>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createVcsDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranch': '0.7.x',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.createVcsDeployment(
            '<SITE_ID>',
            'branch',
            '<REFERENCE>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranch': '0.7.x',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.getDeployment(
            '<SITE_ID>',
            '<DEPLOYMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteDeployment()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.deleteDeployment(
            '<SITE_ID>',
            '<DEPLOYMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getDeploymentDownload()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));

        const response = await sites.getDeploymentDownload(
            '<SITE_ID>',
            '<DEPLOYMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateDeploymentStatus()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranch': '0.7.x',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.updateDeploymentStatus(
            '<SITE_ID>',
            '<DEPLOYMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listLogs()', async () => {
        const data = {
            'total': 5,
            'executions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.listLogs(
            '<SITE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getLog()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'functionId': '5e5ea6g16897e',
            'deploymentId': '5e5ea5c16897e',
            'trigger': 'http',
            'status': 'processing',
            'requestMethod': 'GET',
            'requestPath': '/articles?id=5',
            'requestHeaders': [],
            'responseStatusCode': 200,
            'responseBody': '',
            'responseHeaders': [],
            'logs': '',
            'errors': '',
            'duration': 0.4,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.getLog(
            '<SITE_ID>',
            '<LOG_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteLog()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.deleteLog(
            '<SITE_ID>',
            '<LOG_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listVariables()', async () => {
        const data = {
            'total': 5,
            'variables': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.listVariables(
            '<SITE_ID>',
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

        const response = await sites.createVariable(
            '<SITE_ID>',
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

        const response = await sites.getVariable(
            '<SITE_ID>',
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

        const response = await sites.updateVariable(
            '<SITE_ID>',
            '<VARIABLE_ID>',
            '<KEY>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteVariable()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await sites.deleteVariable(
            '<SITE_ID>',
            '<VARIABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
