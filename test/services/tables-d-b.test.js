const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { TablesDB } = require("../../dist/services/tables-db");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('TablesDB', () => {
    const client = new Client();
    const tablesDB = new TablesDB(client);

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'databases': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.list(
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

        const response = await tablesDB.create(
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

        const response = await tablesDB.listTransactions(
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

        const response = await tablesDB.createTransaction(
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

        const response = await tablesDB.getTransaction(
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

        const response = await tablesDB.updateTransaction(
            '<TRANSACTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteTransaction()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.deleteTransaction(
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

        const response = await tablesDB.createOperations(
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

        const response = await tablesDB.get(
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

        const response = await tablesDB.update(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method delete()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.delete(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listTables()', async () => {
        const data = {
            'total': 5,
            'tables': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.listTables(
            '<DATABASE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Table',
            'enabled': true,
            'rowSecurity': true,
            'columns': [],
            'indexes': [],
            'bytesMax': 65535,
            'bytesUsed': 1500,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getTable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Table',
            'enabled': true,
            'rowSecurity': true,
            'columns': [],
            'indexes': [],
            'bytesMax': 65535,
            'bytesUsed': 1500,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.getTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateTable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Table',
            'enabled': true,
            'rowSecurity': true,
            'columns': [],
            'indexes': [],
            'bytesMax': 65535,
            'bytesUsed': 1500,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteTable()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.deleteTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listColumns()', async () => {
        const data = {
            'total': 5,
            'columns': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.listColumns(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createBooleanColumn()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createBooleanColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateBooleanColumn()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateBooleanColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createDatetimeColumn()', async () => {
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

        const response = await tablesDB.createDatetimeColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateDatetimeColumn()', async () => {
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

        const response = await tablesDB.updateDatetimeColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createEmailColumn()', async () => {
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

        const response = await tablesDB.createEmailColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateEmailColumn()', async () => {
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

        const response = await tablesDB.updateEmailColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            'email@example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createEnumColumn()', async () => {
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

        const response = await tablesDB.createEnumColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            [],
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateEnumColumn()', async () => {
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

        const response = await tablesDB.updateEnumColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            [],
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createFloatColumn()', async () => {
        const data = {
            'key': 'percentageCompleted',
            'type': 'double',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createFloatColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateFloatColumn()', async () => {
        const data = {
            'key': 'percentageCompleted',
            'type': 'double',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateFloatColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            1.0,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createIntegerColumn()', async () => {
        const data = {
            'key': 'count',
            'type': 'integer',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createIntegerColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateIntegerColumn()', async () => {
        const data = {
            'key': 'count',
            'type': 'integer',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateIntegerColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            1,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createIpColumn()', async () => {
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

        const response = await tablesDB.createIpColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateIpColumn()', async () => {
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

        const response = await tablesDB.updateIpColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createLineColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createLineColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateLineColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateLineColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createLongtextColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createLongtextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateLongtextColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateLongtextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMediumtextColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createMediumtextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMediumtextColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateMediumtextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createPointColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createPointColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePointColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updatePointColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createPolygonColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createPolygonColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePolygonColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updatePolygonColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createRelationshipColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'relatedTable': 'table',
            'relationType': 'oneToOne|oneToMany|manyToOne|manyToMany',
            'twoWay': true,
            'twoWayKey': 'string',
            'onDelete': 'restrict|cascade|setNull',
            'side': 'parent|child',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createRelationshipColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<RELATED_TABLE_ID>',
            'oneToOne',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createStringColumn()', async () => {
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

        const response = await tablesDB.createStringColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            1,
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateStringColumn()', async () => {
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

        const response = await tablesDB.updateStringColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createTextColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createTextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateTextColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateTextColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createUrlColumn()', async () => {
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

        const response = await tablesDB.createUrlColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateUrlColumn()', async () => {
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

        const response = await tablesDB.updateUrlColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createVarcharColumn()', async () => {
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

        const response = await tablesDB.createVarcharColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            1,
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateVarcharColumn()', async () => {
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

        const response = await tablesDB.updateVarcharColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getColumn()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.getColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteColumn()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.deleteColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateRelationshipColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'relatedTable': 'table',
            'relationType': 'oneToOne|oneToMany|manyToOne|manyToMany',
            'twoWay': true,
            'twoWayKey': 'string',
            'onDelete': 'restrict|cascade|setNull',
            'side': 'parent|child',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateRelationshipColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
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

        const response = await tablesDB.listIndexes(
            '<DATABASE_ID>',
            '<TABLE_ID>',
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
            'columns': [],
            'lengths': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createIndex(
            '<DATABASE_ID>',
            '<TABLE_ID>',
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
            'columns': [],
            'lengths': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.getIndex(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteIndex()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.deleteIndex(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.listRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createRow()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
            {},
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.createRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method upsertRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.upsertRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            [],
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.deleteRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getRow()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.getRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method upsertRow()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.upsertRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateRow()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.updateRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteRow()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.deleteRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method decrementRowColumn()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.decrementRowColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method incrementRowColumn()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': '1',
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await tablesDB.incrementRowColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
