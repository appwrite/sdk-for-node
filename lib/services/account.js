const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const InputFile = require('../inputFile.js');
const client = require('../client.js');
const Stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');

class Account extends Service {

     constructor(client)
     {
        super(client);
     }


    /**
     * Get account
     *
     * Get the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get() {
        const apiPath = '/account';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update email
     *
     * Update currently logged in user account email address. After changing user
     * address, the user confirmation status will get reset. A new confirmation
     * email is not sent automatically however you can use the send confirmation
     * email endpoint again to send the confirmation email. For security measures,
     * user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal
     * one, by passing an email address and a new password.
     * 
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateEmail(email, password) {
        const apiPath = '/account/email';
        let payload = {};
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }


        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Identities
     *
     * Get the list of identities for the currently logged in user.
     *
     * @param {string} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listIdentities(queries) {
        const apiPath = '/account/identities';
        let payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Identity
     *
     * Delete an identity by its unique ID.
     *
     * @param {string} identityId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteIdentity(identityId) {
        const apiPath = '/account/identities/{identityId}'.replace('{identityId}', identityId);
        let payload = {};
        if (typeof identityId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "identityId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List logs
     *
     * Get the list of latest security activity logs for the currently logged in
     * user. Each log returns user IP address, location and date and time of log.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listLogs(queries) {
        const apiPath = '/account/logs';
        let payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update name
     *
     * Update currently logged in user account name.
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateName(name) {
        const apiPath = '/account/name';
        let payload = {};
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }


        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update password
     *
     * Update currently logged in user password. For validation, user is required
     * to pass in the new password, and the old password. For users created with
     * OAuth, Team Invites and Magic URL, oldPassword is optional.
     *
     * @param {string} password
     * @param {string} oldPassword
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePassword(password, oldPassword) {
        const apiPath = '/account/password';
        let payload = {};
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }


        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof oldPassword !== 'undefined') {
            payload['oldPassword'] = oldPassword;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update phone
     *
     * Update the currently logged in user's phone number. After updating the
     * phone number, the phone verification status will be reset. A confirmation
     * SMS is not sent automatically, however you can use the [POST
     * /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification)
     * endpoint to send a confirmation SMS.
     *
     * @param {string} phone
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePhone(phone, password) {
        const apiPath = '/account/phone';
        let payload = {};
        if (typeof phone === 'undefined') {
            throw new AppwriteException('Missing required parameter: "phone"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }


        if (typeof phone !== 'undefined') {
            payload['phone'] = phone;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get account preferences
     *
     * Get the preferences as a key-value object for the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getPrefs() {
        const apiPath = '/account/prefs';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update preferences
     *
     * Update currently logged in user account preferences. The object you pass is
     * stored as is, and replaces any previous value. The maximum allowed prefs
     * size is 64kB and throws error if exceeded.
     *
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePrefs(prefs) {
        const apiPath = '/account/prefs';
        let payload = {};
        if (typeof prefs === 'undefined') {
            throw new AppwriteException('Missing required parameter: "prefs"');
        }


        if (typeof prefs !== 'undefined') {
            payload['prefs'] = prefs;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create password recovery
     *
     * Sends the user an email with a temporary secret key for password reset.
     * When the user clicks the confirmation link he is redirected back to your
     * app password reset URL with the secret key and email address values
     * attached to the URL query string. Use the query string params to submit a
     * request to the [PUT
     * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery)
     * endpoint to complete the process. The verification link sent to the user's
     * email address is valid for 1 hour.
     *
     * @param {string} email
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createRecovery(email, url) {
        const apiPath = '/account/recovery';
        let payload = {};
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }


        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create password recovery (confirmation)
     *
     * Use this endpoint to complete the user account password reset. Both the
     * **userId** and **secret** arguments will be passed as query parameters to
     * the redirect URL you have provided when sending your request to the [POST
     * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery)
     * endpoint.
     * 
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} userId
     * @param {string} secret
     * @param {string} password
     * @param {string} passwordAgain
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateRecovery(userId, secret, password, passwordAgain) {
        const apiPath = '/account/recovery';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof secret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secret"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        if (typeof passwordAgain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordAgain"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof passwordAgain !== 'undefined') {
            payload['passwordAgain'] = passwordAgain;
        }

        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List sessions
     *
     * Get the list of active sessions across different devices for the currently
     * logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listSessions() {
        const apiPath = '/account/sessions';
        let payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete sessions
     *
     * Delete all sessions from the user account and remove any sessions cookies
     * from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSessions() {
        const apiPath = '/account/sessions';
        let payload = {};

        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get session
     *
     * Use this endpoint to get a logged in user's session using a Session ID.
     * Inputting 'current' will return the current session being used.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getSession(sessionId) {
        const apiPath = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        let payload = {};
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update OAuth session (refresh tokens)
     *
     * Access tokens have limited lifespan and expire to mitigate security risks.
     * If session was created using an OAuth provider, this route can be used to
     * "refresh" the access token.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateSession(sessionId) {
        const apiPath = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        let payload = {};
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }


        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete session
     *
     * Logout the user. Use 'current' as the session ID to logout on this device,
     * use a session ID to logout on another device. If you're looking to logout
     * the user on all devices, use [Delete
     * Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions)
     * instead.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSession(sessionId) {
        const apiPath = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        let payload = {};
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update status
     *
     * Block the currently logged in user account. Behind the scene, the user
     * record is not deleted but permanently blocked from any access. To
     * completely delete a user, use the Users API instead.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateStatus() {
        const apiPath = '/account/status';
        let payload = {};

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create email verification
     *
     * Use this endpoint to send a verification message to your user email address
     * to confirm they are the valid owners of that address. Both the **userId**
     * and **secret** arguments will be passed as query parameters to the URL you
     * have provided to be attached to the verification email. The provided URL
     * should redirect the user back to your app and allow you to complete the
     * verification process by verifying both the **userId** and **secret**
     * parameters. Learn more about how to [complete the verification
     * process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification).
     * The verification link sent to the user's email address is valid for 7 days.
     * 
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md),
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     * 
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createVerification(url) {
        const apiPath = '/account/verification';
        let payload = {};
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }


        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create email verification (confirmation)
     *
     * Use this endpoint to complete the user email verification process. Use both
     * the **userId** and **secret** parameters that were attached to your app URL
     * to verify the user email ownership. If confirmed this route will return a
     * 200 status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateVerification(userId, secret) {
        const apiPath = '/account/verification';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof secret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secret"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }

        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create phone verification
     *
     * Use this endpoint to send a verification SMS to the currently logged in
     * user. This endpoint is meant for use after updating a user's phone number
     * using the
     * [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone)
     * endpoint. Learn more about how to [complete the verification
     * process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification).
     * The verification code sent to the user's phone number is valid for 15
     * minutes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createPhoneVerification() {
        const apiPath = '/account/verification/phone';
        let payload = {};

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create phone verification (confirmation)
     *
     * Use this endpoint to complete the user phone verification process. Use the
     * **userId** and **secret** that were sent to your user's phone number to
     * verify the user email ownership. If confirmed this route will return a 200
     * status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePhoneVerification(userId, secret) {
        const apiPath = '/account/verification/phone';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof secret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secret"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }

        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Account;
