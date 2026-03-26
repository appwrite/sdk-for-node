const { Client } = require("../../dist/client");
const { InputFile } = require("../../dist/inputFile");
const { Account } = require("../../dist/services/account");

const { fetch: mockedFetch, Response } = require("node-fetch-native-with-agent");
jest.mock('node-fetch-native-with-agent', () => ({ ...jest.requireActual('node-fetch-native-with-agent'), fetch: jest.fn() }));

describe('Account', () => {
    const client = new Client();
    const account = new Account(client);

    
    test('test method get()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.get(
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
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.create(
            '<USER_ID>',
            'email@example.com',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateEmail()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateEmail(
            'email@example.com',
            'password',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listIdentities()', async () => {
        const data = {
            'total': 5,
            'identities': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.listIdentities(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteIdentity()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.deleteIdentity(
            '<IDENTITY_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createJWT()', async () => {
        const data = {
            'jwt': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createJWT(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.listLogs(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMFA()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateMFA(
            true,
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMfaAuthenticator()', async () => {
        const data = {
            'secret': '1',
            'uri': '1',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createMfaAuthenticator(
            'totp',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMFAAuthenticator()', async () => {
        const data = {
            'secret': '1',
            'uri': '1',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createMFAAuthenticator(
            'totp',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMfaAuthenticator()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateMfaAuthenticator(
            'totp',
            '<OTP>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMFAAuthenticator()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateMFAAuthenticator(
            'totp',
            '<OTP>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteMfaAuthenticator()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.deleteMfaAuthenticator(
            'totp',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteMFAAuthenticator()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.deleteMFAAuthenticator(
            'totp',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMfaChallenge()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'expire': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createMfaChallenge(
            'email',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMFAChallenge()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'expire': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createMFAChallenge(
            'email',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMfaChallenge()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateMfaChallenge(
            '<CHALLENGE_ID>',
            '<OTP>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMFAChallenge()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateMFAChallenge(
            '<CHALLENGE_ID>',
            '<OTP>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listMfaFactors()', async () => {
        const data = {
            'totp': true,
            'phone': true,
            'email': true,
            'recoveryCode': true,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.listMfaFactors(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listMFAFactors()', async () => {
        const data = {
            'totp': true,
            'phone': true,
            'email': true,
            'recoveryCode': true,};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.listMFAFactors(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getMfaRecoveryCodes()', async () => {
        const data = {
            'recoveryCodes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.getMfaRecoveryCodes(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getMFARecoveryCodes()', async () => {
        const data = {
            'recoveryCodes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.getMFARecoveryCodes(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMfaRecoveryCodes()', async () => {
        const data = {
            'recoveryCodes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createMfaRecoveryCodes(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMFARecoveryCodes()', async () => {
        const data = {
            'recoveryCodes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createMFARecoveryCodes(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMfaRecoveryCodes()', async () => {
        const data = {
            'recoveryCodes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateMfaRecoveryCodes(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMFARecoveryCodes()', async () => {
        const data = {
            'recoveryCodes': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateMFARecoveryCodes(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateName()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateName(
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePassword()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updatePassword(
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePhone()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updatePhone(
            '+12065550100',
            'password',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getPrefs()', async () => {
        const data = {};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.getPrefs(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePrefs()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updatePrefs(
            {},
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createRecovery()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createRecovery(
            'email@example.com',
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateRecovery()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateRecovery(
            '<USER_ID>',
            '<SECRET>',
            '',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method listSessions()', async () => {
        const data = {
            'total': 5,
            'sessions': [],};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.listSessions(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteSessions()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.deleteSessions(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createAnonymousSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createAnonymousSession(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createEmailPasswordSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createEmailPasswordSession(
            'email@example.com',
            'password',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateMagicURLSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateMagicURLSession(
            '<USER_ID>',
            '<SECRET>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePhoneSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updatePhoneSession(
            '<USER_ID>',
            '<SECRET>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createSession(
            '<USER_ID>',
            '<SECRET>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method getSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.getSession(
            '<SESSION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateSession(
            '<SESSION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method deleteSession()', async () => {
        const data = {message: ""};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.deleteSession(
            '<SESSION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateStatus()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateStatus(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createEmailToken()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createEmailToken(
            '<USER_ID>',
            'email@example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createMagicURLToken()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createMagicURLToken(
            '<USER_ID>',
            'email@example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createOAuth2Token()', async () => {
        const data = 'https://example.com/';
        mockedFetch.mockImplementation(() => Response.redirect(data));

        const response = await account.createOAuth2Token(
            'amazon',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createPhoneToken()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createPhoneToken(
            '<USER_ID>',
            '+12065550100',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createEmailVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createEmailVerification(
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createVerification(
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateEmailVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateEmailVerification(
            '<USER_ID>',
            '<SECRET>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updateVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updateVerification(
            '<USER_ID>',
            '<SECRET>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method createPhoneVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.createPhoneVerification(
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    
    test('test method updatePhoneVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};
        mockedFetch.mockImplementation(() => Response.json(data));

        const response = await account.updatePhoneVerification(
            '<USER_ID>',
            '<SECRET>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    })
