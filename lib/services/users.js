const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const InputFile = require('../inputFile.js');
const client = require('../client.js');
const Stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');

class Users extends Service {

     constructor(client)
     {
        super(client);
     }


    /**
     * List users
     *
     * Get a list of all the project's users. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list(queries, search) {
        const apiPath = '/users';
        let payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create user
     *
     * Create a new user.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} phone
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async create(userId, email, phone, password, name) {
        const apiPath = '/users';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof phone !== 'undefined') {
            payload['phone'] = phone;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create user with Argon2 password
     *
     * Create a new user. Password provided must be hashed with the
     * [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createArgon2User(userId, email, password, name) {
        const apiPath = '/users/argon2';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create user with bcrypt password
     *
     * Create a new user. Password provided must be hashed with the
     * [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBcryptUser(userId, email, password, name) {
        const apiPath = '/users/bcrypt';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Identities
     *
     * Get identities for all users.
     *
     * @param {string} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listIdentities(queries, search) {
        const apiPath = '/users/identities';
        let payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
        const apiPath = '/users/identities/{identityId}'.replace('{identityId}', identityId);
        let payload = {};
        if (typeof identityId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "identityId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create user with MD5 password
     *
     * Create a new user. Password provided must be hashed with the
     * [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createMD5User(userId, email, password, name) {
        const apiPath = '/users/md5';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create user with PHPass password
     *
     * Create a new user. Password provided must be hashed with the
     * [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createPHPassUser(userId, email, password, name) {
        const apiPath = '/users/phpass';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create user with Scrypt password
     *
     * Create a new user. Password provided must be hashed with the
     * [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordSalt
     * @param {number} passwordCpu
     * @param {number} passwordMemory
     * @param {number} passwordParallel
     * @param {number} passwordLength
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createScryptUser(userId, email, password, passwordSalt, passwordCpu, passwordMemory, passwordParallel, passwordLength, name) {
        const apiPath = '/users/scrypt';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        if (typeof passwordSalt === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordSalt"');
        }

        if (typeof passwordCpu === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordCpu"');
        }

        if (typeof passwordMemory === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordMemory"');
        }

        if (typeof passwordParallel === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordParallel"');
        }

        if (typeof passwordLength === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordLength"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof passwordSalt !== 'undefined') {
            payload['passwordSalt'] = passwordSalt;
        }

        if (typeof passwordCpu !== 'undefined') {
            payload['passwordCpu'] = passwordCpu;
        }

        if (typeof passwordMemory !== 'undefined') {
            payload['passwordMemory'] = passwordMemory;
        }

        if (typeof passwordParallel !== 'undefined') {
            payload['passwordParallel'] = passwordParallel;
        }

        if (typeof passwordLength !== 'undefined') {
            payload['passwordLength'] = passwordLength;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create user with Scrypt modified password
     *
     * Create a new user. Password provided must be hashed with the [Scrypt
     * Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc)
     * algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordSalt
     * @param {string} passwordSaltSeparator
     * @param {string} passwordSignerKey
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createScryptModifiedUser(userId, email, password, passwordSalt, passwordSaltSeparator, passwordSignerKey, name) {
        const apiPath = '/users/scrypt-modified';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        if (typeof passwordSalt === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordSalt"');
        }

        if (typeof passwordSaltSeparator === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordSaltSeparator"');
        }

        if (typeof passwordSignerKey === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordSignerKey"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof passwordSalt !== 'undefined') {
            payload['passwordSalt'] = passwordSalt;
        }

        if (typeof passwordSaltSeparator !== 'undefined') {
            payload['passwordSaltSeparator'] = passwordSaltSeparator;
        }

        if (typeof passwordSignerKey !== 'undefined') {
            payload['passwordSignerKey'] = passwordSignerKey;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create user with SHA password
     *
     * Create a new user. Password provided must be hashed with the
     * [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use
     * the [POST /users](https://appwrite.io/docs/server/users#usersCreate)
     * endpoint to create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordVersion
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createSHAUser(userId, email, password, passwordVersion, name) {
        const apiPath = '/users/sha';
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }


        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof passwordVersion !== 'undefined') {
            payload['passwordVersion'] = passwordVersion;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get user
     *
     * Get a user by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get(userId) {
        const apiPath = '/users/{userId}'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete user
     *
     * Delete a user by its unique ID, thereby releasing it's ID. Since ID is
     * released and can be reused, all user-related resources like documents or
     * storage files should be deleted before user deletion. If you want to keep
     * ID reserved, use the
     * [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus)
     * endpoint instead.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(userId) {
        const apiPath = '/users/{userId}'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update email
     *
     * Update the user email by its unique ID.
     *
     * @param {string} userId
     * @param {string} email
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateEmail(userId, email) {
        const apiPath = '/users/{userId}/email'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }


        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update user labels
     *
     * Update the user labels by its unique ID. 
     * 
     * Labels can be used to grant access to resources. While teams are a way for
     * user's to share access to a resource, labels can be defined by the
     * developer to grant access without an invitation. See the [Permissions
     * docs](https://appwrite.io/docs/permissions) for more info.
     *
     * @param {string} userId
     * @param {string[]} labels
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateLabels(userId, labels) {
        const apiPath = '/users/{userId}/labels'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof labels === 'undefined') {
            throw new AppwriteException('Missing required parameter: "labels"');
        }


        if (typeof labels !== 'undefined') {
            payload['labels'] = labels;
        }

        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List user logs
     *
     * Get the user activity logs list by its unique ID.
     *
     * @param {string} userId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listLogs(userId, queries) {
        const apiPath = '/users/{userId}/logs'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }


        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List user memberships
     *
     * Get the user membership list by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listMemberships(userId) {
        const apiPath = '/users/{userId}/memberships'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update name
     *
     * Update the user name by its unique ID.
     *
     * @param {string} userId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateName(userId, name) {
        const apiPath = '/users/{userId}/name'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

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
     * Update the user password by its unique ID.
     *
     * @param {string} userId
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePassword(userId, password) {
        const apiPath = '/users/{userId}/password'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }


        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update phone
     *
     * Update the user phone by its unique ID.
     *
     * @param {string} userId
     * @param {string} number
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePhone(userId, number) {
        const apiPath = '/users/{userId}/phone'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof number === 'undefined') {
            throw new AppwriteException('Missing required parameter: "number"');
        }


        if (typeof number !== 'undefined') {
            payload['number'] = number;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get user preferences
     *
     * Get the user preferences by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getPrefs(userId) {
        const apiPath = '/users/{userId}/prefs'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update user preferences
     *
     * Update the user preferences by its unique ID. The object you pass is stored
     * as is, and replaces any previous value. The maximum allowed prefs size is
     * 64kB and throws error if exceeded.
     *
     * @param {string} userId
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePrefs(userId, prefs) {
        const apiPath = '/users/{userId}/prefs'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

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
     * List user sessions
     *
     * Get the user sessions list by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listSessions(userId) {
        const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }


        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete user sessions
     *
     * Delete all user's sessions by using the user's unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSessions(userId) {
        const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete user session
     *
     * Delete a user sessions by its unique ID.
     *
     * @param {string} userId
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSession(userId, sessionId) {
        const apiPath = '/users/{userId}/sessions/{sessionId}'.replace('{userId}', userId).replace('{sessionId}', sessionId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }


        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update user status
     *
     * Update the user status by its unique ID. Use this endpoint as an
     * alternative to deleting a user if you want to keep user's ID reserved.
     *
     * @param {string} userId
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateStatus(userId, status) {
        const apiPath = '/users/{userId}/status'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }


        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update email verification
     *
     * Update the user email verification status by its unique ID.
     *
     * @param {string} userId
     * @param {boolean} emailVerification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateEmailVerification(userId, emailVerification) {
        const apiPath = '/users/{userId}/verification'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof emailVerification === 'undefined') {
            throw new AppwriteException('Missing required parameter: "emailVerification"');
        }


        if (typeof emailVerification !== 'undefined') {
            payload['emailVerification'] = emailVerification;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update phone verification
     *
     * Update the user phone verification status by its unique ID.
     *
     * @param {string} userId
     * @param {boolean} phoneVerification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePhoneVerification(userId, phoneVerification) {
        const apiPath = '/users/{userId}/verification/phone'.replace('{userId}', userId);
        let payload = {};
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof phoneVerification === 'undefined') {
            throw new AppwriteException('Missing required parameter: "phoneVerification"');
        }


        if (typeof phoneVerification !== 'undefined') {
            payload['phoneVerification'] = phoneVerification;
        }

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Users;
