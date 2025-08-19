import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PasswordHash } from '../enums/password-hash';
import { AuthenticatorType } from '../enums/authenticator-type';
import { MessagingProviderType } from '../enums/messaging-provider-type';

export class Users {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the project's users. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UserList<Preferences>>}
     */
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { queries?: string[], search?: string  }): Promise<Models.UserList<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * list<Preferences extends Models.Preferences = Models.DefaultPreferences>(queries?: string[], search?: string): Promise<Models.UserList<Preferences>>;
     *
     * // New (object based)
     * list<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { queries?: string[], search?: string  }): Promise<Models.UserList<Preferences>>;
     */
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(queries?: string[], search?: string): Promise<Models.UserList<Preferences>>;
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.UserList<Preferences>> {
        let params: { queries?: string[], search?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/users';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new user.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} password - Plain text user password. Must be at least 8 chars.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email?: string, phone?: string, password?: string, name?: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * create<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email?: string, phone?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * create<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email?: string, phone?: string, password?: string, name?: string  }): Promise<Models.User<Preferences>>;
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email?: string, phone?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, email?: string, phone?: string, password?: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, email?: string, phone?: string, password?: string, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, email?: string, phone?: string, password?: string, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                email: rest[0] as string,
                phone: rest[1] as string,
                password: rest[2] as string,
                name: rest[3] as string            
            };
        }
        
        const userId = params.userId;
        const email = params.email;
        const phone = params.phone;
        const password = params.password;
        const name = params.name;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users';
        const payload: Payload = {};
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new user. Password provided must be hashed with the [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using Argon2.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createArgon2User<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, name?: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createArgon2User<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * createArgon2User<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, name?: string  }): Promise<Models.User<Preferences>>;
     */
    createArgon2User<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    createArgon2User<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, email: string, password: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, email: string, password: string, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, email: string, password: string, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                email: rest[0] as string,
                password: rest[1] as string,
                name: rest[2] as string            
            };
        }
        
        const userId = params.userId;
        const email = params.email;
        const password = params.password;
        const name = params.name;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/argon2';
        const payload: Payload = {};
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new user. Password provided must be hashed with the [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using Bcrypt.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createBcryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, name?: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createBcryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * createBcryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, name?: string  }): Promise<Models.User<Preferences>>;
     */
    createBcryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    createBcryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, email: string, password: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, email: string, password: string, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, email: string, password: string, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                email: rest[0] as string,
                password: rest[1] as string,
                name: rest[2] as string            
            };
        }
        
        const userId = params.userId;
        const email = params.email;
        const password = params.password;
        const name = params.name;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/bcrypt';
        const payload: Payload = {};
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get identities for all users.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IdentityList>}
     */
    listIdentities(params: { queries?: string[], search?: string  }): Promise<Models.IdentityList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listIdentities(queries?: string[], search?: string): Promise<Models.IdentityList>;
     *
     * // New (object based)
     * listIdentities(params: { queries?: string[], search?: string  }): Promise<Models.IdentityList>;
     */
    listIdentities(queries?: string[], search?: string): Promise<Models.IdentityList>;
    listIdentities(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.IdentityList> {
        let params: { queries?: string[], search?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/users/identities';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete an identity by its unique ID.
     *
     * @param {string} identityId - Identity ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIdentity(params: { identityId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteIdentity(identityId: string): Promise<{}>;
     *
     * // New (object based)
     * deleteIdentity(params: { identityId: string  }): Promise<{}>;
     */
    deleteIdentity(identityId: string): Promise<{}>;
    deleteIdentity(
        paramsOrFirst: { identityId: string } | string    
    ): Promise<{}> {
        let params: { identityId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { identityId: string };
        } else {
            params = {
                identityId: paramsOrFirst as string            
            };
        }
        
        const identityId = params.identityId;

        if (typeof identityId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "identityId"');
        }

        const apiPath = '/users/identities/{identityId}'.replace('{identityId}', identityId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new user. Password provided must be hashed with the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using MD5.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createMD5User<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, name?: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createMD5User<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * createMD5User<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, name?: string  }): Promise<Models.User<Preferences>>;
     */
    createMD5User<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    createMD5User<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, email: string, password: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, email: string, password: string, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, email: string, password: string, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                email: rest[0] as string,
                password: rest[1] as string,
                name: rest[2] as string            
            };
        }
        
        const userId = params.userId;
        const email = params.email;
        const password = params.password;
        const name = params.name;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/md5';
        const payload: Payload = {};
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new user. Password provided must be hashed with the [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or pass the string `ID.unique()`to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using PHPass.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createPHPassUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, name?: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createPHPassUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * createPHPassUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, name?: string  }): Promise<Models.User<Preferences>>;
     */
    createPHPassUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    createPHPassUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, email: string, password: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, email: string, password: string, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, email: string, password: string, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                email: rest[0] as string,
                password: rest[1] as string,
                name: rest[2] as string            
            };
        }
        
        const userId = params.userId;
        const email = params.email;
        const password = params.password;
        const name = params.name;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/phpass';
        const payload: Payload = {};
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new user. Password provided must be hashed with the [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using Scrypt.
     * @param {string} passwordSalt - Optional salt used to hash password.
     * @param {number} passwordCpu - Optional CPU cost used to hash password.
     * @param {number} passwordMemory - Optional memory cost used to hash password.
     * @param {number} passwordParallel - Optional parallelization cost used to hash password.
     * @param {number} passwordLength - Optional hash length used to hash password.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createScryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createScryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * createScryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string  }): Promise<Models.User<Preferences>>;
     */
    createScryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string): Promise<Models.User<Preferences>>;
    createScryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                email: rest[0] as string,
                password: rest[1] as string,
                passwordSalt: rest[2] as string,
                passwordCpu: rest[3] as number,
                passwordMemory: rest[4] as number,
                passwordParallel: rest[5] as number,
                passwordLength: rest[6] as number,
                name: rest[7] as string            
            };
        }
        
        const userId = params.userId;
        const email = params.email;
        const password = params.password;
        const passwordSalt = params.passwordSalt;
        const passwordCpu = params.passwordCpu;
        const passwordMemory = params.passwordMemory;
        const passwordParallel = params.passwordParallel;
        const passwordLength = params.passwordLength;
        const name = params.name;

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

        const apiPath = '/users/scrypt';
        const payload: Payload = {};
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new user. Password provided must be hashed with the [Scrypt Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using Scrypt Modified.
     * @param {string} passwordSalt - Salt used to hash password.
     * @param {string} passwordSaltSeparator - Salt separator used to hash password.
     * @param {string} passwordSignerKey - Signer key used to hash password.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createScryptModifiedUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createScryptModifiedUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * createScryptModifiedUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string  }): Promise<Models.User<Preferences>>;
     */
    createScryptModifiedUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string): Promise<Models.User<Preferences>>;
    createScryptModifiedUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                email: rest[0] as string,
                password: rest[1] as string,
                passwordSalt: rest[2] as string,
                passwordSaltSeparator: rest[3] as string,
                passwordSignerKey: rest[4] as string,
                name: rest[5] as string            
            };
        }
        
        const userId = params.userId;
        const email = params.email;
        const password = params.password;
        const passwordSalt = params.passwordSalt;
        const passwordSaltSeparator = params.passwordSaltSeparator;
        const passwordSignerKey = params.passwordSignerKey;
        const name = params.name;

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

        const apiPath = '/users/scrypt-modified';
        const payload: Payload = {};
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new user. Password provided must be hashed with the [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using SHA.
     * @param {PasswordHash} passwordVersion - Optional SHA version used to hash password. Allowed values are: 'sha1', 'sha224', 'sha256', 'sha384', 'sha512/224', 'sha512/256', 'sha512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512'
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createSHAUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createSHAUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * createSHAUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string  }): Promise<Models.User<Preferences>>;
     */
    createSHAUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string): Promise<Models.User<Preferences>>;
    createSHAUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string } | string,
        ...rest: [(string)?, (string)?, (PasswordHash)?, (string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                email: rest[0] as string,
                password: rest[1] as string,
                passwordVersion: rest[2] as PasswordHash,
                name: rest[3] as string            
            };
        }
        
        const userId = params.userId;
        const email = params.email;
        const password = params.password;
        const passwordVersion = params.passwordVersion;
        const name = params.name;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/sha';
        const payload: Payload = {};
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a user by its unique ID.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    get<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * get<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * get<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string  }): Promise<Models.User<Preferences>>;
     */
    get<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string): Promise<Models.User<Preferences>>;
    get<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string } | string    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus) endpoint instead.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { userId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * delete(userId: string): Promise<{}>;
     *
     * // New (object based)
     * delete(params: { userId: string  }): Promise<{}>;
     */
    delete(userId: string): Promise<{}>;
    delete(
        paramsOrFirst: { userId: string } | string    
    ): Promise<{}> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the user email by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} email - User email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * updateEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, email: string  }): Promise<Models.User<Preferences>>;
     */
    updateEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string): Promise<Models.User<Preferences>>;
    updateEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, email: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, email: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, email: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                email: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const email = params.email;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        const apiPath = '/users/{userId}/email'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Use this endpoint to create a JSON Web Token for user by its unique ID. You can use the resulting JWT to authenticate on behalf of the user. The JWT secret will become invalid if the session it uses gets deleted.
     *
     * @param {string} userId - User ID.
     * @param {string} sessionId - Session ID. Use the string 'recent' to use the most recent session. Defaults to the most recent session.
     * @param {number} duration - Time in seconds before JWT expires. Default duration is 900 seconds, and maximum is 3600 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Jwt>}
     */
    createJWT(params: { userId: string, sessionId?: string, duration?: number  }): Promise<Models.Jwt>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createJWT(userId: string, sessionId?: string, duration?: number): Promise<Models.Jwt>;
     *
     * // New (object based)
     * createJWT(params: { userId: string, sessionId?: string, duration?: number  }): Promise<Models.Jwt>;
     */
    createJWT(userId: string, sessionId?: string, duration?: number): Promise<Models.Jwt>;
    createJWT(
        paramsOrFirst: { userId: string, sessionId?: string, duration?: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.Jwt> {
        let params: { userId: string, sessionId?: string, duration?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, sessionId?: string, duration?: number };
        } else {
            params = {
                userId: paramsOrFirst as string,
                sessionId: rest[0] as string,
                duration: rest[1] as number            
            };
        }
        
        const userId = params.userId;
        const sessionId = params.sessionId;
        const duration = params.duration;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/jwts'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof sessionId !== 'undefined') {
            payload['sessionId'] = sessionId;
        }
        if (typeof duration !== 'undefined') {
            payload['duration'] = duration;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the user labels by its unique ID. 
     * 
     * Labels can be used to grant access to resources. While teams are a way for user's to share access to a resource, labels can be defined by the developer to grant access without an invitation. See the [Permissions docs](https://appwrite.io/docs/permissions) for more info.
     *
     * @param {string} userId - User ID.
     * @param {string[]} labels - Array of user labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateLabels<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, labels: string[]  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateLabels<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, labels: string[]): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * updateLabels<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, labels: string[]  }): Promise<Models.User<Preferences>>;
     */
    updateLabels<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, labels: string[]): Promise<Models.User<Preferences>>;
    updateLabels<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, labels: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, labels: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, labels: string[] };
        } else {
            params = {
                userId: paramsOrFirst as string,
                labels: rest[0] as string[]            
            };
        }
        
        const userId = params.userId;
        const labels = params.labels;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof labels === 'undefined') {
            throw new AppwriteException('Missing required parameter: "labels"');
        }

        const apiPath = '/users/{userId}/labels'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof labels !== 'undefined') {
            payload['labels'] = labels;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get the user activity logs list by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listLogs(params: { userId: string, queries?: string[]  }): Promise<Models.LogList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listLogs(userId: string, queries?: string[]): Promise<Models.LogList>;
     *
     * // New (object based)
     * listLogs(params: { userId: string, queries?: string[]  }): Promise<Models.LogList>;
     */
    listLogs(userId: string, queries?: string[]): Promise<Models.LogList>;
    listLogs(
        paramsOrFirst: { userId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.LogList> {
        let params: { userId: string, queries?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, queries?: string[] };
        } else {
            params = {
                userId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const userId = params.userId;
        const queries = params.queries;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/logs'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get the user membership list by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MembershipList>}
     */
    listMemberships(params: { userId: string, queries?: string[], search?: string  }): Promise<Models.MembershipList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listMemberships(userId: string, queries?: string[], search?: string): Promise<Models.MembershipList>;
     *
     * // New (object based)
     * listMemberships(params: { userId: string, queries?: string[], search?: string  }): Promise<Models.MembershipList>;
     */
    listMemberships(userId: string, queries?: string[], search?: string): Promise<Models.MembershipList>;
    listMemberships(
        paramsOrFirst: { userId: string, queries?: string[], search?: string } | string,
        ...rest: [(string[])?, (string)?]    
    ): Promise<Models.MembershipList> {
        let params: { userId: string, queries?: string[], search?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, queries?: string[], search?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string            
            };
        }
        
        const userId = params.userId;
        const queries = params.queries;
        const search = params.search;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/memberships'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Enable or disable MFA on a user account.
     *
     * @param {string} userId - User ID.
     * @param {boolean} mfa - Enable or disable MFA.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateMfa<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, mfa: boolean  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateMfa<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, mfa: boolean): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * updateMfa<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, mfa: boolean  }): Promise<Models.User<Preferences>>;
     */
    updateMfa<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, mfa: boolean): Promise<Models.User<Preferences>>;
    updateMfa<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, mfa: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, mfa: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, mfa: boolean };
        } else {
            params = {
                userId: paramsOrFirst as string,
                mfa: rest[0] as boolean            
            };
        }
        
        const userId = params.userId;
        const mfa = params.mfa;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof mfa === 'undefined') {
            throw new AppwriteException('Missing required parameter: "mfa"');
        }

        const apiPath = '/users/{userId}/mfa'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof mfa !== 'undefined') {
            payload['mfa'] = mfa;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete an authenticator app.
     *
     * @param {string} userId - User ID.
     * @param {AuthenticatorType} type - Type of authenticator.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteMfaAuthenticator(params: { userId: string, type: AuthenticatorType  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteMfaAuthenticator(userId: string, type: AuthenticatorType): Promise<{}>;
     *
     * // New (object based)
     * deleteMfaAuthenticator(params: { userId: string, type: AuthenticatorType  }): Promise<{}>;
     */
    deleteMfaAuthenticator(userId: string, type: AuthenticatorType): Promise<{}>;
    deleteMfaAuthenticator(
        paramsOrFirst: { userId: string, type: AuthenticatorType } | string,
        ...rest: [(AuthenticatorType)?]    
    ): Promise<{}> {
        let params: { userId: string, type: AuthenticatorType };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, type: AuthenticatorType };
        } else {
            params = {
                userId: paramsOrFirst as string,
                type: rest[0] as AuthenticatorType            
            };
        }
        
        const userId = params.userId;
        const type = params.type;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        const apiPath = '/users/{userId}/mfa/authenticators/{type}'.replace('{userId}', userId).replace('{type}', type);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * List the factors available on the account to be used as a MFA challange.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaFactors>}
     */
    listMfaFactors(params: { userId: string  }): Promise<Models.MfaFactors>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listMfaFactors(userId: string): Promise<Models.MfaFactors>;
     *
     * // New (object based)
     * listMfaFactors(params: { userId: string  }): Promise<Models.MfaFactors>;
     */
    listMfaFactors(userId: string): Promise<Models.MfaFactors>;
    listMfaFactors(
        paramsOrFirst: { userId: string } | string    
    ): Promise<Models.MfaFactors> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/mfa/factors'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     */
    getMfaRecoveryCodes(params: { userId: string  }): Promise<Models.MfaRecoveryCodes>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
     *
     * // New (object based)
     * getMfaRecoveryCodes(params: { userId: string  }): Promise<Models.MfaRecoveryCodes>;
     */
    getMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    getMfaRecoveryCodes(
        paramsOrFirst: { userId: string } | string    
    ): Promise<Models.MfaRecoveryCodes> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/mfa/recovery-codes'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     */
    updateMfaRecoveryCodes(params: { userId: string  }): Promise<Models.MfaRecoveryCodes>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
     *
     * // New (object based)
     * updateMfaRecoveryCodes(params: { userId: string  }): Promise<Models.MfaRecoveryCodes>;
     */
    updateMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    updateMfaRecoveryCodes(
        paramsOrFirst: { userId: string } | string    
    ): Promise<Models.MfaRecoveryCodes> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/mfa/recovery-codes'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     */
    createMfaRecoveryCodes(params: { userId: string  }): Promise<Models.MfaRecoveryCodes>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
     *
     * // New (object based)
     * createMfaRecoveryCodes(params: { userId: string  }): Promise<Models.MfaRecoveryCodes>;
     */
    createMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    createMfaRecoveryCodes(
        paramsOrFirst: { userId: string } | string    
    ): Promise<Models.MfaRecoveryCodes> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/mfa/recovery-codes'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the user name by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, name: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, name: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, name: string  }): Promise<Models.User<Preferences>>;
     */
    updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, name: string): Promise<Models.User<Preferences>>;
    updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, name: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, name: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, name: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                name: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const name = params.name;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/users/{userId}/name'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the user password by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} password - New user password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updatePassword<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, password: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updatePassword<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, password: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * updatePassword<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, password: string  }): Promise<Models.User<Preferences>>;
     */
    updatePassword<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, password: string): Promise<Models.User<Preferences>>;
    updatePassword<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, password: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, password: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, password: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                password: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const password = params.password;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/{userId}/password'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the user phone by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} number - User phone number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updatePhone<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, number: string  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updatePhone<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, number: string): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * updatePhone<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, number: string  }): Promise<Models.User<Preferences>>;
     */
    updatePhone<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, number: string): Promise<Models.User<Preferences>>;
    updatePhone<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, number: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, number: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, number: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                number: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const number = params.number;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof number === 'undefined') {
            throw new AppwriteException('Missing required parameter: "number"');
        }

        const apiPath = '/users/{userId}/phone'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof number !== 'undefined') {
            payload['number'] = number;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get the user preferences by its unique ID.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     */
    getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string  }): Promise<Preferences>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string): Promise<Preferences>;
     *
     * // New (object based)
     * getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string  }): Promise<Preferences>;
     */
    getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string): Promise<Preferences>;
    getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string } | string    
    ): Promise<Preferences> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/prefs'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.
     *
     * @param {string} userId - User ID.
     * @param {object} prefs - Prefs key-value JSON object.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     */
    updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, prefs: object  }): Promise<Preferences>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, prefs: object): Promise<Preferences>;
     *
     * // New (object based)
     * updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, prefs: object  }): Promise<Preferences>;
     */
    updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, prefs: object): Promise<Preferences>;
    updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, prefs: object } | string,
        ...rest: [(object)?]    
    ): Promise<Preferences> {
        let params: { userId: string, prefs: object };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, prefs: object };
        } else {
            params = {
                userId: paramsOrFirst as string,
                prefs: rest[0] as object            
            };
        }
        
        const userId = params.userId;
        const prefs = params.prefs;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof prefs === 'undefined') {
            throw new AppwriteException('Missing required parameter: "prefs"');
        }

        const apiPath = '/users/{userId}/prefs'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof prefs !== 'undefined') {
            payload['prefs'] = prefs;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get the user sessions list by its unique ID.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SessionList>}
     */
    listSessions(params: { userId: string  }): Promise<Models.SessionList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listSessions(userId: string): Promise<Models.SessionList>;
     *
     * // New (object based)
     * listSessions(params: { userId: string  }): Promise<Models.SessionList>;
     */
    listSessions(userId: string): Promise<Models.SessionList>;
    listSessions(
        paramsOrFirst: { userId: string } | string    
    ): Promise<Models.SessionList> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Creates a session for a user. Returns an immediately usable session object.
     * 
     * If you want to generate a token for a custom authentication flow, use the [POST /users/{userId}/tokens](https://appwrite.io/docs/server/users#createToken) endpoint.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     */
    createSession(params: { userId: string  }): Promise<Models.Session>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createSession(userId: string): Promise<Models.Session>;
     *
     * // New (object based)
     * createSession(params: { userId: string  }): Promise<Models.Session>;
     */
    createSession(userId: string): Promise<Models.Session>;
    createSession(
        paramsOrFirst: { userId: string } | string    
    ): Promise<Models.Session> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete all user's sessions by using the user's unique ID.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteSessions(params: { userId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteSessions(userId: string): Promise<{}>;
     *
     * // New (object based)
     * deleteSessions(params: { userId: string  }): Promise<{}>;
     */
    deleteSessions(userId: string): Promise<{}>;
    deleteSessions(
        paramsOrFirst: { userId: string } | string    
    ): Promise<{}> {
        let params: { userId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string };
        } else {
            params = {
                userId: paramsOrFirst as string            
            };
        }
        
        const userId = params.userId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a user sessions by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} sessionId - Session ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteSession(params: { userId: string, sessionId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteSession(userId: string, sessionId: string): Promise<{}>;
     *
     * // New (object based)
     * deleteSession(params: { userId: string, sessionId: string  }): Promise<{}>;
     */
    deleteSession(userId: string, sessionId: string): Promise<{}>;
    deleteSession(
        paramsOrFirst: { userId: string, sessionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { userId: string, sessionId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, sessionId: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                sessionId: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const sessionId = params.sessionId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }

        const apiPath = '/users/{userId}/sessions/{sessionId}'.replace('{userId}', userId).replace('{sessionId}', sessionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved.
     *
     * @param {string} userId - User ID.
     * @param {boolean} status - User Status. To activate the user pass `true` and to block the user pass `false`.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, status: boolean  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, status: boolean): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * updateStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, status: boolean  }): Promise<Models.User<Preferences>>;
     */
    updateStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, status: boolean): Promise<Models.User<Preferences>>;
    updateStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, status: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, status: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, status: boolean };
        } else {
            params = {
                userId: paramsOrFirst as string,
                status: rest[0] as boolean            
            };
        }
        
        const userId = params.userId;
        const status = params.status;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }

        const apiPath = '/users/{userId}/status'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * List the messaging targets that are associated with a user.
     *
     * @param {string} userId - User ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType
     * @throws {AppwriteException}
     * @returns {Promise<Models.TargetList>}
     */
    listTargets(params: { userId: string, queries?: string[]  }): Promise<Models.TargetList>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * listTargets(userId: string, queries?: string[]): Promise<Models.TargetList>;
     *
     * // New (object based)
     * listTargets(params: { userId: string, queries?: string[]  }): Promise<Models.TargetList>;
     */
    listTargets(userId: string, queries?: string[]): Promise<Models.TargetList>;
    listTargets(
        paramsOrFirst: { userId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.TargetList> {
        let params: { userId: string, queries?: string[] };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, queries?: string[] };
        } else {
            params = {
                userId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const userId = params.userId;
        const queries = params.queries;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/targets'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a messaging target.
     *
     * @param {string} userId - User ID.
     * @param {string} targetId - Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {MessagingProviderType} providerType - The target provider type. Can be one of the following: `email`, `sms` or `push`.
     * @param {string} identifier - The target identifier (token, email, phone etc.)
     * @param {string} providerId - Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.
     * @param {string} name - Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     */
    createTarget(params: { userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string  }): Promise<Models.Target>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createTarget(userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string): Promise<Models.Target>;
     *
     * // New (object based)
     * createTarget(params: { userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string  }): Promise<Models.Target>;
     */
    createTarget(userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string): Promise<Models.Target>;
    createTarget(
        paramsOrFirst: { userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string } | string,
        ...rest: [(string)?, (MessagingProviderType)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Target> {
        let params: { userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                targetId: rest[0] as string,
                providerType: rest[1] as MessagingProviderType,
                identifier: rest[2] as string,
                providerId: rest[3] as string,
                name: rest[4] as string            
            };
        }
        
        const userId = params.userId;
        const targetId = params.targetId;
        const providerType = params.providerType;
        const identifier = params.identifier;
        const providerId = params.providerId;
        const name = params.name;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }
        if (typeof providerType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerType"');
        }
        if (typeof identifier === 'undefined') {
            throw new AppwriteException('Missing required parameter: "identifier"');
        }

        const apiPath = '/users/{userId}/targets'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof targetId !== 'undefined') {
            payload['targetId'] = targetId;
        }
        if (typeof providerType !== 'undefined') {
            payload['providerType'] = providerType;
        }
        if (typeof identifier !== 'undefined') {
            payload['identifier'] = identifier;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a user's push notification target by ID.
     *
     * @param {string} userId - User ID.
     * @param {string} targetId - Target ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     */
    getTarget(params: { userId: string, targetId: string  }): Promise<Models.Target>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * getTarget(userId: string, targetId: string): Promise<Models.Target>;
     *
     * // New (object based)
     * getTarget(params: { userId: string, targetId: string  }): Promise<Models.Target>;
     */
    getTarget(userId: string, targetId: string): Promise<Models.Target>;
    getTarget(
        paramsOrFirst: { userId: string, targetId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Target> {
        let params: { userId: string, targetId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, targetId: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                targetId: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const targetId = params.targetId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }

        const apiPath = '/users/{userId}/targets/{targetId}'.replace('{userId}', userId).replace('{targetId}', targetId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update a messaging target.
     *
     * @param {string} userId - User ID.
     * @param {string} targetId - Target ID.
     * @param {string} identifier - The target identifier (token, email, phone etc.)
     * @param {string} providerId - Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.
     * @param {string} name - Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     */
    updateTarget(params: { userId: string, targetId: string, identifier?: string, providerId?: string, name?: string  }): Promise<Models.Target>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateTarget(userId: string, targetId: string, identifier?: string, providerId?: string, name?: string): Promise<Models.Target>;
     *
     * // New (object based)
     * updateTarget(params: { userId: string, targetId: string, identifier?: string, providerId?: string, name?: string  }): Promise<Models.Target>;
     */
    updateTarget(userId: string, targetId: string, identifier?: string, providerId?: string, name?: string): Promise<Models.Target>;
    updateTarget(
        paramsOrFirst: { userId: string, targetId: string, identifier?: string, providerId?: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Target> {
        let params: { userId: string, targetId: string, identifier?: string, providerId?: string, name?: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, targetId: string, identifier?: string, providerId?: string, name?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                targetId: rest[0] as string,
                identifier: rest[1] as string,
                providerId: rest[2] as string,
                name: rest[3] as string            
            };
        }
        
        const userId = params.userId;
        const targetId = params.targetId;
        const identifier = params.identifier;
        const providerId = params.providerId;
        const name = params.name;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }

        const apiPath = '/users/{userId}/targets/{targetId}'.replace('{userId}', userId).replace('{targetId}', targetId);
        const payload: Payload = {};
        if (typeof identifier !== 'undefined') {
            payload['identifier'] = identifier;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a messaging target.
     *
     * @param {string} userId - User ID.
     * @param {string} targetId - Target ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTarget(params: { userId: string, targetId: string  }): Promise<{}>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * deleteTarget(userId: string, targetId: string): Promise<{}>;
     *
     * // New (object based)
     * deleteTarget(params: { userId: string, targetId: string  }): Promise<{}>;
     */
    deleteTarget(userId: string, targetId: string): Promise<{}>;
    deleteTarget(
        paramsOrFirst: { userId: string, targetId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { userId: string, targetId: string };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, targetId: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                targetId: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const targetId = params.targetId;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }

        const apiPath = '/users/{userId}/targets/{targetId}'.replace('{userId}', userId).replace('{targetId}', targetId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Returns a token with a secret key for creating a session. Use the user ID and secret and submit a request to the [PUT /account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process.
     * 
     *
     * @param {string} userId - User ID.
     * @param {number} length - Token length in characters. The default length is 6 characters
     * @param {number} expire - Token expiration period in seconds. The default expiration is 15 minutes.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    createToken(params: { userId: string, length?: number, expire?: number  }): Promise<Models.Token>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * createToken(userId: string, length?: number, expire?: number): Promise<Models.Token>;
     *
     * // New (object based)
     * createToken(params: { userId: string, length?: number, expire?: number  }): Promise<Models.Token>;
     */
    createToken(userId: string, length?: number, expire?: number): Promise<Models.Token>;
    createToken(
        paramsOrFirst: { userId: string, length?: number, expire?: number } | string,
        ...rest: [(number)?, (number)?]    
    ): Promise<Models.Token> {
        let params: { userId: string, length?: number, expire?: number };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, length?: number, expire?: number };
        } else {
            params = {
                userId: paramsOrFirst as string,
                length: rest[0] as number,
                expire: rest[1] as number            
            };
        }
        
        const userId = params.userId;
        const length = params.length;
        const expire = params.expire;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/tokens'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof length !== 'undefined') {
            payload['length'] = length;
        }
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the user email verification status by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {boolean} emailVerification - User email verification status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateEmailVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, emailVerification: boolean  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updateEmailVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, emailVerification: boolean): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * updateEmailVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, emailVerification: boolean  }): Promise<Models.User<Preferences>>;
     */
    updateEmailVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, emailVerification: boolean): Promise<Models.User<Preferences>>;
    updateEmailVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, emailVerification: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, emailVerification: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, emailVerification: boolean };
        } else {
            params = {
                userId: paramsOrFirst as string,
                emailVerification: rest[0] as boolean            
            };
        }
        
        const userId = params.userId;
        const emailVerification = params.emailVerification;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof emailVerification === 'undefined') {
            throw new AppwriteException('Missing required parameter: "emailVerification"');
        }

        const apiPath = '/users/{userId}/verification'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof emailVerification !== 'undefined') {
            payload['emailVerification'] = emailVerification;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Update the user phone verification status by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {boolean} phoneVerification - User phone verification status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updatePhoneVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, phoneVerification: boolean  }): Promise<Models.User<Preferences>>;
    /**
     * @deprecated Parameter-based methods will be removed in the upcoming version.
     * Please use the object based method instead for better developer experience.
     *
     * @example
     * // Old (deprecated)
     * updatePhoneVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, phoneVerification: boolean): Promise<Models.User<Preferences>>;
     *
     * // New (object based)
     * updatePhoneVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { userId: string, phoneVerification: boolean  }): Promise<Models.User<Preferences>>;
     */
    updatePhoneVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, phoneVerification: boolean): Promise<Models.User<Preferences>>;
    updatePhoneVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { userId: string, phoneVerification: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string, phoneVerification: boolean };
        
        if (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst)) {
            params = paramsOrFirst as { userId: string, phoneVerification: boolean };
        } else {
            params = {
                userId: paramsOrFirst as string,
                phoneVerification: rest[0] as boolean            
            };
        }
        
        const userId = params.userId;
        const phoneVerification = params.phoneVerification;

        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof phoneVerification === 'undefined') {
            throw new AppwriteException('Missing required parameter: "phoneVerification"');
        }

        const apiPath = '/users/{userId}/verification/phone'.replace('{userId}', userId);
        const payload: Payload = {};
        if (typeof phoneVerification !== 'undefined') {
            payload['phoneVerification'] = phoneVerification;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }
}
