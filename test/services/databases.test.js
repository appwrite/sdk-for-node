const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Databases } = require("../../dist/services/databases");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Databases', () => {
    const client = new Client();
    const databases = new Databases(client);

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'databases': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.list(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method create()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'My Database',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'enabled': true,
            'type': 'legacy',
            'policies': [],
            'archives': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.create(
            '<DATABASE_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listTransactions()', async () => {
        const data = {
            'total': 5,
            'transactions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.listTransactions(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTransaction()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'status': 'pending',
            'operations': 5,
            'expiresAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createTransaction(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getTransaction()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'status': 'pending',
            'operations': 5,
            'expiresAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.getTransaction(
            '<TRANSACTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateTransaction()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'status': 'pending',
            'operations': 5,
            'expiresAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateTransaction(
            '<TRANSACTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteTransaction()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.deleteTransaction(
            '<TRANSACTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createOperations()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'status': 'pending',
            'operations': 5,
            'expiresAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createOperations(
            '<TRANSACTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method get()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'My Database',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'enabled': true,
            'type': 'legacy',
            'policies': [],
            'archives': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.get(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method update()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'My Database',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'enabled': true,
            'type': 'legacy',
            'policies': [],
            'archives': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.update(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method delete()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.delete(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listCollections()', async () => {
        const data = {
            'total': 5,
            'collections': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.listCollections(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createCollection()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Collection',
            'enabled': true,
            'documentSecurity': true,
            'attributes': [],
            'indexes': [],
            'bytesMax': 65535,
            'bytesUsed': 1500,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getCollection()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Collection',
            'enabled': true,
            'documentSecurity': true,
            'attributes': [],
            'indexes': [],
            'bytesMax': 65535,
            'bytesUsed': 1500,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.getCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateCollection()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Collection',
            'enabled': true,
            'documentSecurity': true,
            'attributes': [],
            'indexes': [],
            'bytesMax': 65535,
            'bytesUsed': 1500,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteCollection()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.deleteCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listAttributes()', async () => {
        const data = {
            'total': 5,
            'attributes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.listAttributes(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createBooleanAttribute()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createBooleanAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateBooleanAttribute()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateBooleanAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createDatetimeAttribute()', async () => {
        const data = {
            'key': 'birthDay',
            'type': 'datetime',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'datetime',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createDatetimeAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateDatetimeAttribute()', async () => {
        const data = {
            'key': 'birthDay',
            'type': 'datetime',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'datetime',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateDatetimeAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createEmailAttribute()', async () => {
        const data = {
            'key': 'userEmail',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'email',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createEmailAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateEmailAttribute()', async () => {
        const data = {
            'key': 'userEmail',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'email',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateEmailAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            'email@example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createEnumAttribute()', async () => {
        const data = {
            'key': 'status',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'elements': [],
            'format': 'enum',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createEnumAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            [],
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateEnumAttribute()', async () => {
        const data = {
            'key': 'status',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'elements': [],
            'format': 'enum',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateEnumAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            [],
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createFloatAttribute()', async () => {
        const data = {
            'key': 'percentageCompleted',
            'type': 'double',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createFloatAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateFloatAttribute()', async () => {
        const data = {
            'key': 'percentageCompleted',
            'type': 'double',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateFloatAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            1.0,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createIntegerAttribute()', async () => {
        const data = {
            'key': 'count',
            'type': 'integer',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createIntegerAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateIntegerAttribute()', async () => {
        const data = {
            'key': 'count',
            'type': 'integer',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateIntegerAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createIpAttribute()', async () => {
        const data = {
            'key': 'ipAddress',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'ip',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createIpAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateIpAttribute()', async () => {
        const data = {
            'key': 'ipAddress',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'ip',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateIpAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createLineAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createLineAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateLineAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateLineAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createLongtextAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createLongtextAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateLongtextAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateLongtextAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMediumtextAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createMediumtextAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMediumtextAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateMediumtextAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createPointAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createPointAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePointAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updatePointAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createPolygonAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createPolygonAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePolygonAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updatePolygonAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createRelationshipAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'relatedCollection': 'collection',
            'relationType': 'oneToOne|oneToMany|manyToOne|manyToMany',
            'twoWay': true,
            'twoWayKey': 'string',
            'onDelete': 'restrict|cascade|setNull',
            'side': 'parent|child',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createRelationshipAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<RELATED_COLLECTION_ID>',
            'oneToOne',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateRelationshipAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'relatedCollection': 'collection',
            'relationType': 'oneToOne|oneToMany|manyToOne|manyToMany',
            'twoWay': true,
            'twoWayKey': 'string',
            'onDelete': 'restrict|cascade|setNull',
            'side': 'parent|child',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateRelationshipAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createStringAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'size': 128,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createStringAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            1,
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateStringAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'size': 128,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateStringAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTextAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createTextAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateTextAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateTextAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createUrlAttribute()', async () => {
        const data = {
            'key': 'githubUrl',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'url',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createUrlAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateUrlAttribute()', async () => {
        const data = {
            'key': 'githubUrl',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'url',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateUrlAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createVarcharAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'size': 128,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createVarcharAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            1,
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateVarcharAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'size': 128,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateVarcharAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getAttribute()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.getAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteAttribute()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.deleteAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.listDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
            {},
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method upsertDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.upsertDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.deleteDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.getDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method upsertDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.upsertDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.updateDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteDocument()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.deleteDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method decrementDocumentAttribute()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.decrementDocumentAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method incrementDocumentAttribute()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.incrementDocumentAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listIndexes()', async () => {
        const data = {
            'total': 5,
            'indexes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.listIndexes(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createIndex()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'index1',
            'type': 'primary',
            'status': 'available',
            'error': 'string',
            'attributes': [],
            'lengths': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.createIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            'key',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getIndex()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'index1',
            'type': 'primary',
            'status': 'available',
            'error': 'string',
            'attributes': [],
            'lengths': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.getIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteIndex()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await databases.deleteIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
