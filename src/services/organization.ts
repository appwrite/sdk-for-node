import { AppwriteException, Client, type Payload } from '../client';
import type { Models } from '../models';

import { OrganizationKeyScopes } from '../enums/organization-key-scopes';
import { Region } from '../enums/region';
export class Organization {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get the current organization.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    get<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(): Promise<Models.Organization<Preferences>> {
        const apiPath = '/organization';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update the current organization's name.
     *
     * @param {string} params.name - New organization name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    update<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: { name: string }): Promise<Models.Organization<Preferences>>;
    /**
     * Update the current organization's name.
     *
     * @param {string} name - New organization name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        name: string,
    ): Promise<Models.Organization<Preferences>>;
    update<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { name: string } | string,
    ): Promise<Models.Organization<Preferences>> {
        let params: { name: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { name: string };
        } else {
            params = {
                name: paramsOrFirst as string,
            };
        }

        const name = params.name;
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/organization';
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('put', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete the current organization. All projects that belong to the organization are deleted as well.
     *
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(): Promise<{}> {
        const apiPath = '/organization';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * List app installations on the organization. Any organization member can read installations.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AppInstallationList>}
     */
    listInstallations(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.AppInstallationList>;
    /**
     * List app installations on the organization. Any organization member can read installations.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AppInstallationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listInstallations(
        queries?: string[],
        total?: boolean,
    ): Promise<Models.AppInstallationList>;
    listInstallations(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.AppInstallationList> {
        let params: { queries?: string[]; total?: boolean };

        if (
            !paramsOrFirst ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean,
            };
        }

        const queries = params.queries;
        const total = params.total;
        const apiPath = '/organization/installations';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Install an app on the organization. Only organization members with the owner role can install apps. The installation is granted the scopes the app currently requests.
     *
     * @param {string} params.appId - Application unique ID.
     * @param {string} params.authorizationDetails - Authorization details granted to the installation as a JSON array of objects, each with a `type` and app-defined fields. The Appwrite Console stores authorized project IDs here.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AppInstallation>}
     */
    createInstallation(params: {
        appId: string;
        authorizationDetails?: string;
    }): Promise<Models.AppInstallation>;
    /**
     * Install an app on the organization. Only organization members with the owner role can install apps. The installation is granted the scopes the app currently requests.
     *
     * @param {string} appId - Application unique ID.
     * @param {string} authorizationDetails - Authorization details granted to the installation as a JSON array of objects, each with a `type` and app-defined fields. The Appwrite Console stores authorized project IDs here.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AppInstallation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createInstallation(
        appId: string,
        authorizationDetails?: string,
    ): Promise<Models.AppInstallation>;
    createInstallation(
        paramsOrFirst:
            { appId: string; authorizationDetails?: string } | string,
        ...rest: [string?]
    ): Promise<Models.AppInstallation> {
        let params: { appId: string; authorizationDetails?: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                appId: string;
                authorizationDetails?: string;
            };
        } else {
            params = {
                appId: paramsOrFirst as string,
                authorizationDetails: rest[0] as string,
            };
        }

        const appId = params.appId;
        const authorizationDetails = params.authorizationDetails;
        if (typeof appId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "appId"');
        }
        const apiPath = '/organization/installations';
        const apiPayload: Payload = {};
        if (typeof appId !== 'undefined') {
            apiPayload['appId'] = appId;
        }
        if (typeof authorizationDetails !== 'undefined') {
            apiPayload['authorizationDetails'] = authorizationDetails;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get an app installation on the organization by its unique ID. Any organization member can read installations.
     *
     * @param {string} params.installationId - Installation unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AppInstallation>}
     */
    getInstallation(params: {
        installationId: string;
    }): Promise<Models.AppInstallation>;
    /**
     * Get an app installation on the organization by its unique ID. Any organization member can read installations.
     *
     * @param {string} installationId - Installation unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AppInstallation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInstallation(installationId: string): Promise<Models.AppInstallation>;
    getInstallation(
        paramsOrFirst: { installationId: string } | string,
    ): Promise<Models.AppInstallation> {
        let params: { installationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { installationId: string };
        } else {
            params = {
                installationId: paramsOrFirst as string,
            };
        }

        const installationId = params.installationId;
        if (typeof installationId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "installationId"',
            );
        }
        const apiPath = '/organization/installations/{installationId}'.replace(
            '{installationId}',
            encodeURIComponent(String(installationId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update an app installation on the organization. Only organization members with the owner role can update installations. The installation's granted scopes are refreshed to the scopes the app currently requests; previously issued installation access tokens are revoked.
     *
     * @param {string} params.installationId - Installation unique ID.
     * @param {string} params.authorizationDetails - Authorization details granted to the installation as a JSON array of objects, each with a `type` and app-defined fields. Omit to keep the current value.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AppInstallation>}
     */
    updateInstallation(params: {
        installationId: string;
        authorizationDetails?: string;
    }): Promise<Models.AppInstallation>;
    /**
     * Update an app installation on the organization. Only organization members with the owner role can update installations. The installation's granted scopes are refreshed to the scopes the app currently requests; previously issued installation access tokens are revoked.
     *
     * @param {string} installationId - Installation unique ID.
     * @param {string} authorizationDetails - Authorization details granted to the installation as a JSON array of objects, each with a `type` and app-defined fields. Omit to keep the current value.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AppInstallation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateInstallation(
        installationId: string,
        authorizationDetails?: string,
    ): Promise<Models.AppInstallation>;
    updateInstallation(
        paramsOrFirst:
            { installationId: string; authorizationDetails?: string } | string,
        ...rest: [string?]
    ): Promise<Models.AppInstallation> {
        let params: { installationId: string; authorizationDetails?: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                installationId: string;
                authorizationDetails?: string;
            };
        } else {
            params = {
                installationId: paramsOrFirst as string,
                authorizationDetails: rest[0] as string,
            };
        }

        const installationId = params.installationId;
        const authorizationDetails = params.authorizationDetails;
        if (typeof installationId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "installationId"',
            );
        }
        const apiPath = '/organization/installations/{installationId}'.replace(
            '{installationId}',
            encodeURIComponent(String(installationId)),
        );
        const apiPayload: Payload = {};
        if (typeof authorizationDetails !== 'undefined') {
            apiPayload['authorizationDetails'] = authorizationDetails;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('put', uri, apiHeaders, apiPayload);
    }

    /**
     * Uninstall an app from the organization by its installation ID. Only organization members with the owner role can remove installations. Previously issued installation access tokens are revoked.
     *
     * @param {string} params.installationId - Installation unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteInstallation(params: { installationId: string }): Promise<{}>;
    /**
     * Uninstall an app from the organization by its installation ID. Only organization members with the owner role can remove installations. Previously issued installation access tokens are revoked.
     *
     * @param {string} installationId - Installation unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteInstallation(installationId: string): Promise<{}>;
    deleteInstallation(
        paramsOrFirst: { installationId: string } | string,
    ): Promise<{}> {
        let params: { installationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { installationId: string };
        } else {
            params = {
                installationId: paramsOrFirst as string,
            };
        }

        const installationId = params.installationId;
        if (typeof installationId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "installationId"',
            );
        }
        const apiPath = '/organization/installations/{installationId}'.replace(
            '{installationId}',
            encodeURIComponent(String(installationId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a list of all API keys from the current organization.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire, accessedAt, name, scopes
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     */
    listKeys(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.KeyList>;
    /**
     * Get a list of all API keys from the current organization.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire, accessedAt, name, scopes
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listKeys(queries?: string[], total?: boolean): Promise<Models.KeyList>;
    listKeys(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.KeyList> {
        let params: { queries?: string[]; total?: boolean };

        if (
            !paramsOrFirst ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean,
            };
        }

        const queries = params.queries;
        const total = params.total;
        const apiPath = '/organization/keys';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a new organization API key.
     *
     * @param {string} params.keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {OrganizationKeyScopes[]} params.scopes - Key scopes list. Maximum of 200 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    createKey(params: {
        keyId: string;
        name: string;
        scopes: OrganizationKeyScopes[];
        expire?: string;
    }): Promise<Models.Key>;
    /**
     * Create a new organization API key.
     *
     * @param {string} keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {OrganizationKeyScopes[]} scopes - Key scopes list. Maximum of 200 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createKey(
        keyId: string,
        name: string,
        scopes: OrganizationKeyScopes[],
        expire?: string,
    ): Promise<Models.Key>;
    createKey(
        paramsOrFirst:
            | {
                  keyId: string;
                  name: string;
                  scopes: OrganizationKeyScopes[];
                  expire?: string;
              }
            | string,
        ...rest: [string?, OrganizationKeyScopes[]?, string?]
    ): Promise<Models.Key> {
        let params: {
            keyId: string;
            name: string;
            scopes: OrganizationKeyScopes[];
            expire?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                keyId: string;
                name: string;
                scopes: OrganizationKeyScopes[];
                expire?: string;
            };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as OrganizationKeyScopes[],
                expire: rest[2] as string,
            };
        }

        const keyId = params.keyId;
        const name = params.name;
        const scopes = params.scopes;
        const expire = params.expire;
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }
        const apiPath = '/organization/keys';
        const apiPayload: Payload = {};
        if (typeof keyId !== 'undefined') {
            apiPayload['keyId'] = keyId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof scopes !== 'undefined') {
            apiPayload['scopes'] = scopes;
        }
        if (typeof expire !== 'undefined') {
            apiPayload['expire'] = expire;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a key by its unique ID. This endpoint returns details about a specific API key in your organization including its scopes.
     *
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    getKey(params: { keyId: string }): Promise<Models.Key>;
    /**
     * Get a key by its unique ID. This endpoint returns details about a specific API key in your organization including its scopes.
     *
     * @param {string} keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getKey(keyId: string): Promise<Models.Key>;
    getKey(paramsOrFirst: { keyId: string } | string): Promise<Models.Key> {
        let params: { keyId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { keyId: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
            };
        }

        const keyId = params.keyId;
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        const apiPath = '/organization/keys/{keyId}'.replace(
            '{keyId}',
            encodeURIComponent(String(keyId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} params.keyId - Key unique ID.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {OrganizationKeyScopes[]} params.scopes - Key scopes list. Maximum of 200 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    updateKey(params: {
        keyId: string;
        name: string;
        scopes: OrganizationKeyScopes[];
        expire?: string;
    }): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} keyId - Key unique ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {OrganizationKeyScopes[]} scopes - Key scopes list. Maximum of 200 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateKey(
        keyId: string,
        name: string,
        scopes: OrganizationKeyScopes[],
        expire?: string,
    ): Promise<Models.Key>;
    updateKey(
        paramsOrFirst:
            | {
                  keyId: string;
                  name: string;
                  scopes: OrganizationKeyScopes[];
                  expire?: string;
              }
            | string,
        ...rest: [string?, OrganizationKeyScopes[]?, string?]
    ): Promise<Models.Key> {
        let params: {
            keyId: string;
            name: string;
            scopes: OrganizationKeyScopes[];
            expire?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                keyId: string;
                name: string;
                scopes: OrganizationKeyScopes[];
                expire?: string;
            };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as OrganizationKeyScopes[],
                expire: rest[2] as string,
            };
        }

        const keyId = params.keyId;
        const name = params.name;
        const scopes = params.scopes;
        const expire = params.expire;
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }
        const apiPath = '/organization/keys/{keyId}'.replace(
            '{keyId}',
            encodeURIComponent(String(keyId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof scopes !== 'undefined') {
            apiPayload['scopes'] = scopes;
        }
        if (typeof expire !== 'undefined') {
            apiPayload['expire'] = expire;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('put', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteKey(params: { keyId: string }): Promise<{}>;
    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteKey(keyId: string): Promise<{}>;
    deleteKey(paramsOrFirst: { keyId: string } | string): Promise<{}> {
        let params: { keyId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { keyId: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
            };
        }

        const keyId = params.keyId;
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        const apiPath = '/organization/keys/{keyId}'.replace(
            '{keyId}',
            encodeURIComponent(String(keyId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a list of all memberships from the current organization.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MembershipList>}
     */
    listMemberships(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.MembershipList>;
    /**
     * Get a list of all memberships from the current organization.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MembershipList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMemberships(
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.MembershipList>;
    listMemberships(
        paramsOrFirst?:
            { queries?: string[]; search?: string; total?: boolean } | string[],
        ...rest: [string?, boolean?]
    ): Promise<Models.MembershipList> {
        let params: { queries?: string[]; search?: string; total?: boolean };

        if (
            !paramsOrFirst ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                search?: string;
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean,
            };
        }

        const queries = params.queries;
        const search = params.search;
        const total = params.total;
        const apiPath = '/organization/memberships';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Invite a new member to join the current organization. An email with a link to join the organization will be sent to the new member's email address. If member doesn't exist in the project it will be automatically created.
     *
     * @param {string[]} params.roles - Array of strings. Use this param to set the user roles in the organization. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 81 characters long.
     * @param {string} params.email - Email of the new organization member.
     * @param {string} params.userId - ID of the user to be added to the organization.
     * @param {string} params.phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.url - URL to redirect the user back to your app from the invitation email. This parameter is not required when an API key is supplied.
     * @param {string} params.name - Name of the new organization member. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     */
    createMembership(params: {
        roles: string[];
        email?: string;
        userId?: string;
        phone?: string;
        url?: string;
        name?: string;
    }): Promise<Models.Membership>;
    /**
     * Invite a new member to join the current organization. An email with a link to join the organization will be sent to the new member's email address. If member doesn't exist in the project it will be automatically created.
     *
     * @param {string[]} roles - Array of strings. Use this param to set the user roles in the organization. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 81 characters long.
     * @param {string} email - Email of the new organization member.
     * @param {string} userId - ID of the user to be added to the organization.
     * @param {string} phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} url - URL to redirect the user back to your app from the invitation email. This parameter is not required when an API key is supplied.
     * @param {string} name - Name of the new organization member. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMembership(
        roles: string[],
        email?: string,
        userId?: string,
        phone?: string,
        url?: string,
        name?: string,
    ): Promise<Models.Membership>;
    createMembership(
        paramsOrFirst:
            | {
                  roles: string[];
                  email?: string;
                  userId?: string;
                  phone?: string;
                  url?: string;
                  name?: string;
              }
            | string[],
        ...rest: [string?, string?, string?, string?, string?]
    ): Promise<Models.Membership> {
        let params: {
            roles: string[];
            email?: string;
            userId?: string;
            phone?: string;
            url?: string;
            name?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                roles: string[];
                email?: string;
                userId?: string;
                phone?: string;
                url?: string;
                name?: string;
            };
        } else {
            params = {
                roles: paramsOrFirst as string[],
                email: rest[0] as string,
                userId: rest[1] as string,
                phone: rest[2] as string,
                url: rest[3] as string,
                name: rest[4] as string,
            };
        }

        const roles = params.roles;
        const email = params.email;
        const userId = params.userId;
        const phone = params.phone;
        const url = params.url;
        const name = params.name;
        if (typeof roles === 'undefined') {
            throw new AppwriteException('Missing required parameter: "roles"');
        }
        const apiPath = '/organization/memberships';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['userId'] = userId;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof roles !== 'undefined') {
            apiPayload['roles'] = roles;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a membership from the current organization by its unique ID.
     *
     * @param {string} params.membershipId - Membership ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     */
    getMembership(params: { membershipId: string }): Promise<Models.Membership>;
    /**
     * Get a membership from the current organization by its unique ID.
     *
     * @param {string} membershipId - Membership ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getMembership(membershipId: string): Promise<Models.Membership>;
    getMembership(
        paramsOrFirst: { membershipId: string } | string,
    ): Promise<Models.Membership> {
        let params: { membershipId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { membershipId: string };
        } else {
            params = {
                membershipId: paramsOrFirst as string,
            };
        }

        const membershipId = params.membershipId;
        if (typeof membershipId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "membershipId"',
            );
        }
        const apiPath = '/organization/memberships/{membershipId}'.replace(
            '{membershipId}',
            encodeURIComponent(String(membershipId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Modify the roles of a member in the current organization.
     *
     * @param {string} params.membershipId - Membership ID.
     * @param {string[]} params.roles - An array of strings. Use this param to set the user's roles in the organization. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 81 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     */
    updateMembership(params: {
        membershipId: string;
        roles: string[];
    }): Promise<Models.Membership>;
    /**
     * Modify the roles of a member in the current organization.
     *
     * @param {string} membershipId - Membership ID.
     * @param {string[]} roles - An array of strings. Use this param to set the user's roles in the organization. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 81 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMembership(
        membershipId: string,
        roles: string[],
    ): Promise<Models.Membership>;
    updateMembership(
        paramsOrFirst: { membershipId: string; roles: string[] } | string,
        ...rest: [string[]?]
    ): Promise<Models.Membership> {
        let params: { membershipId: string; roles: string[] };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                membershipId: string;
                roles: string[];
            };
        } else {
            params = {
                membershipId: paramsOrFirst as string,
                roles: rest[0] as string[],
            };
        }

        const membershipId = params.membershipId;
        const roles = params.roles;
        if (typeof membershipId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "membershipId"',
            );
        }
        if (typeof roles === 'undefined') {
            throw new AppwriteException('Missing required parameter: "roles"');
        }
        const apiPath = '/organization/memberships/{membershipId}'.replace(
            '{membershipId}',
            encodeURIComponent(String(membershipId)),
        );
        const apiPayload: Payload = {};
        if (typeof roles !== 'undefined') {
            apiPayload['roles'] = roles;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Remove a member from the current organization. The member is removed whether they accepted the invitation or not; a pending invitation is revoked.
     *
     * @param {string} params.membershipId - Membership ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteMembership(params: { membershipId: string }): Promise<{}>;
    /**
     * Remove a member from the current organization. The member is removed whether they accepted the invitation or not; a pending invitation is revoked.
     *
     * @param {string} membershipId - Membership ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteMembership(membershipId: string): Promise<{}>;
    deleteMembership(
        paramsOrFirst: { membershipId: string } | string,
    ): Promise<{}> {
        let params: { membershipId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { membershipId: string };
        } else {
            params = {
                membershipId: paramsOrFirst as string,
            };
        }

        const membershipId = params.membershipId;
        if (typeof membershipId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "membershipId"',
            );
        }
        const apiPath = '/organization/memberships/{membershipId}'.replace(
            '{membershipId}',
            encodeURIComponent(String(membershipId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a list of all projects. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId, labels, search, accessedAt
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProjectList>}
     */
    listProjects(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.ProjectList>;
    /**
     * Get a list of all projects. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId, labels, search, accessedAt
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProjectList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listProjects(
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.ProjectList>;
    listProjects(
        paramsOrFirst?:
            { queries?: string[]; search?: string; total?: boolean } | string[],
        ...rest: [string?, boolean?]
    ): Promise<Models.ProjectList> {
        let params: { queries?: string[]; search?: string; total?: boolean };

        if (
            !paramsOrFirst ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                search?: string;
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean,
            };
        }

        const queries = params.queries;
        const search = params.search;
        const total = params.total;
        const apiPath = '/organization/projects';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a new project.
     *
     * @param {string} params.projectId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, and hyphen. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Project name. Max length: 128 chars.
     * @param {Region} params.region - Project Region.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    createProject(params: {
        projectId: string;
        name: string;
        region?: Region;
    }): Promise<Models.Project>;
    /**
     * Create a new project.
     *
     * @param {string} projectId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, and hyphen. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Project name. Max length: 128 chars.
     * @param {Region} region - Project Region.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createProject(
        projectId: string,
        name: string,
        region?: Region,
    ): Promise<Models.Project>;
    createProject(
        paramsOrFirst:
            { projectId: string; name: string; region?: Region } | string,
        ...rest: [string?, Region?]
    ): Promise<Models.Project> {
        let params: { projectId: string; name: string; region?: Region };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                projectId: string;
                name: string;
                region?: Region;
            };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                name: rest[0] as string,
                region: rest[1] as Region,
            };
        }

        const projectId = params.projectId;
        const name = params.name;
        const region = params.region;
        if (typeof projectId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "projectId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/organization/projects';
        const apiPayload: Payload = {};
        if (typeof projectId !== 'undefined') {
            apiPayload['projectId'] = projectId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof region !== 'undefined') {
            apiPayload['region'] = region;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a project.
     *
     * @param {string} params.projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    getProject(params: { projectId: string }): Promise<Models.Project>;
    /**
     * Get a project.
     *
     * @param {string} projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getProject(projectId: string): Promise<Models.Project>;
    getProject(
        paramsOrFirst: { projectId: string } | string,
    ): Promise<Models.Project> {
        let params: { projectId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { projectId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
            };
        }

        const projectId = params.projectId;
        if (typeof projectId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "projectId"',
            );
        }
        const apiPath = '/organization/projects/{projectId}'.replace(
            '{projectId}',
            encodeURIComponent(String(projectId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a project by its unique ID.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string} params.name - Project name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateProject(params: {
        projectId: string;
        name: string;
    }): Promise<Models.Project>;
    /**
     * Update a project by its unique ID.
     *
     * @param {string} projectId - Project unique ID.
     * @param {string} name - Project name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProject(projectId: string, name: string): Promise<Models.Project>;
    updateProject(
        paramsOrFirst: { projectId: string; name: string } | string,
        ...rest: [string?]
    ): Promise<Models.Project> {
        let params: { projectId: string; name: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                projectId: string;
                name: string;
            };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                name: rest[0] as string,
            };
        }

        const projectId = params.projectId;
        const name = params.name;
        if (typeof projectId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "projectId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/organization/projects/{projectId}'.replace(
            '{projectId}',
            encodeURIComponent(String(projectId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete a project by its unique ID.
     *
     * @param {string} params.projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteProject(params: { projectId: string }): Promise<{}>;
    /**
     * Delete a project by its unique ID.
     *
     * @param {string} projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteProject(projectId: string): Promise<{}>;
    deleteProject(paramsOrFirst: { projectId: string } | string): Promise<{}> {
        let params: { projectId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { projectId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
            };
        }

        const projectId = params.projectId;
        if (typeof projectId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "projectId"',
            );
        }
        const apiPath = '/organization/projects/{projectId}'.replace(
            '{projectId}',
            encodeURIComponent(String(projectId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }
}
