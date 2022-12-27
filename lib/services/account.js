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
     * Get Account
     *
     * Get currently logged in user data as JSON object.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get() {
        let path = '/account';
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Email
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
        let path = '/account/email';
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

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Logs
     *
     * Get currently logged in user list of latest security activity logs. Each
     * log returns user IP address, location and date and time of log.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listLogs(queries) {
        let path = '/account/logs';
        let payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Name
     *
     * Update currently logged in user account name.
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateName(name) {
        let path = '/account/name';
        let payload = {};
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }


        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Password
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
        let path = '/account/password';
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

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Phone
     *
     * Update the currently logged in user's phone number. After updating the
     * phone number, the phone verification status will be reset. A confirmation
     * SMS is not sent automatically, however you can use the [POST
     * /account/verification/phone](/docs/client/account#accountCreatePhoneVerification)
     * endpoint to send a confirmation SMS.
     *
     * @param {string} phone
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePhone(phone, password) {
        let path = '/account/phone';
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

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Account Preferences
     *
     * Get currently logged in user preferences as a key-value object.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getPrefs() {
        let path = '/account/prefs';
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Preferences
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
        let path = '/account/prefs';
        let payload = {};
        if (typeof prefs === 'undefined') {
            throw new AppwriteException('Missing required parameter: "prefs"');
        }


        if (typeof prefs !== 'undefined') {
            payload['prefs'] = prefs;
        }

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Password Recovery
     *
     * Sends the user an email with a temporary secret key for password reset.
     * When the user clicks the confirmation link he is redirected back to your
     * app password reset URL with the secret key and email address values
     * attached to the URL query string. Use the query string params to submit a
     * request to the [PUT
     * /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to
     * complete the process. The verification link sent to the user's email
     * address is valid for 1 hour.
     *
     * @param {string} email
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createRecovery(email, url) {
        let path = '/account/recovery';
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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Password Recovery (confirmation)
     *
     * Use this endpoint to complete the user account password reset. Both the
     * **userId** and **secret** arguments will be passed as query parameters to
     * the redirect URL you have provided when sending your request to the [POST
     * /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
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
        let path = '/account/recovery';
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

        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Sessions
     *
     * Get currently logged in user list of active sessions across different
     * devices.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listSessions() {
        let path = '/account/sessions';
        let payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Sessions
     *
     * Delete all sessions from the user account and remove any sessions cookies
     * from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSessions() {
        let path = '/account/sessions';
        let payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Session
     *
     * Use this endpoint to get a logged in user's session using a Session ID.
     * Inputting 'current' will return the current session being used.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getSession(sessionId) {
        let path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        let payload = {};
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }


        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update OAuth Session (Refresh Tokens)
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
        let path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        let payload = {};
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }


        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Session
     *
     * Use this endpoint to log out the currently logged in user from all their
     * account sessions across all of their different devices. When using the
     * Session ID argument, only the unique session ID provided is deleted.
     * 
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSession(sessionId) {
        let path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        let payload = {};
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }


        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Status
     *
     * Block the currently logged in user account. Behind the scene, the user
     * record is not deleted but permanently blocked from any access. To
     * completely delete a user, use the Users API instead.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateStatus() {
        let path = '/account/status';
        let payload = {};

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Email Verification
     *
     * Use this endpoint to send a verification message to your user email address
     * to confirm they are the valid owners of that address. Both the **userId**
     * and **secret** arguments will be passed as query parameters to the URL you
     * have provided to be attached to the verification email. The provided URL
     * should redirect the user back to your app and allow you to complete the
     * verification process by verifying both the **userId** and **secret**
     * parameters. Learn more about how to [complete the verification
     * process](/docs/client/account#accountUpdateEmailVerification). The
     * verification link sent to the user's email address is valid for 7 days.
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
        let path = '/account/verification';
        let payload = {};
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }


        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Email Verification (confirmation)
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
        let path = '/account/verification';
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

        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Phone Verification
     *
     * Use this endpoint to send a verification SMS to the currently logged in
     * user. This endpoint is meant for use after updating a user's phone number
     * using the [accountUpdatePhone](/docs/client/account#accountUpdatePhone)
     * endpoint. Learn more about how to [complete the verification
     * process](/docs/client/account#accountUpdatePhoneVerification). The
     * verification code sent to the user's phone number is valid for 15 minutes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createPhoneVerification() {
        let path = '/account/verification/phone';
        let payload = {};

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Phone Verification (confirmation)
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
        let path = '/account/verification/phone';
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

        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Account;
