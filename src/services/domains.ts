import { AppwriteException, Client, type Payload } from '../client';
import type { Models } from '../models';

import { DomainRegistrationType } from '../enums/domain-registration-type';
export class Domains {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all domains registered for this project. This endpoint supports pagination.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as domain name, teamInternalId, expiration, etc.
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainsList>}
     */
    list(params?: {
        queries?: string[];
        search?: string;
    }): Promise<Models.DomainsList>;
    /**
     * List all domains registered for this project. This endpoint supports pagination.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as domain name, teamInternalId, expiration, etc.
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string): Promise<Models.DomainsList>;
    list(
        paramsOrFirst?: { queries?: string[]; search?: string } | string[],
        ...rest: [string?]
    ): Promise<Models.DomainsList> {
        let params: { queries?: string[]; search?: string };

        if (
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                search?: string;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
            };
        }

        const queries = params.queries;
        const search = params.search;
        const apiPath = '/domains';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a new domain. Before creating a domain, you need to ensure that your DNS provider is properly configured. After creating the domain, you can use the verification endpoint to check if the domain is ready to be used.
     *
     * @param {string} params.teamId - Team unique ID.
     * @param {string} params.domain - Domain name (e.g. "example.com").
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    create(params: { teamId: string; domain: string }): Promise<Models.Domain>;
    /**
     * Create a new domain. Before creating a domain, you need to ensure that your DNS provider is properly configured. After creating the domain, you can use the verification endpoint to check if the domain is ready to be used.
     *
     * @param {string} teamId - Team unique ID.
     * @param {string} domain - Domain name (e.g. "example.com").
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(teamId: string, domain: string): Promise<Models.Domain>;
    create(
        paramsOrFirst: { teamId: string; domain: string } | string,
        ...rest: [string?]
    ): Promise<Models.Domain> {
        let params: { teamId: string; domain: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                teamId: string;
                domain: string;
            };
        } else {
            params = {
                teamId: paramsOrFirst as string,
                domain: rest[0] as string,
            };
        }

        const teamId = params.teamId;
        const domain = params.domain;
        if (typeof teamId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "teamId"');
        }
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        const apiPath = '/domains';
        const apiPayload: Payload = {};
        if (typeof teamId !== 'undefined') {
            apiPayload['teamId'] = teamId;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
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
     * Get the registration price for a domain name.
     *
     * @param {string} params.domain - Domain name to get price for.
     * @param {number} params.periodYears - Number of years to calculate the domain price for. Must be at least 1.
     * @param {DomainRegistrationType} params.registrationType - Type of registration pricing to fetch. Allowed values: new, transfer, renewal, trade.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainPrice>}
     * @deprecated This API has been deprecated since 2.0.0. Please use `Domains.listPrices` instead.
     */
    getPrice(params: {
        domain: string;
        periodYears?: number;
        registrationType?: DomainRegistrationType;
    }): Promise<Models.DomainPrice>;
    /**
     * Get the registration price for a domain name.
     *
     * @param {string} domain - Domain name to get price for.
     * @param {number} periodYears - Number of years to calculate the domain price for. Must be at least 1.
     * @param {DomainRegistrationType} registrationType - Type of registration pricing to fetch. Allowed values: new, transfer, renewal, trade.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainPrice>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPrice(
        domain: string,
        periodYears?: number,
        registrationType?: DomainRegistrationType,
    ): Promise<Models.DomainPrice>;
    getPrice(
        paramsOrFirst:
            | {
                  domain: string;
                  periodYears?: number;
                  registrationType?: DomainRegistrationType;
              }
            | string,
        ...rest: [number?, DomainRegistrationType?]
    ): Promise<Models.DomainPrice> {
        let params: {
            domain: string;
            periodYears?: number;
            registrationType?: DomainRegistrationType;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domain: string;
                periodYears?: number;
                registrationType?: DomainRegistrationType;
            };
        } else {
            params = {
                domain: paramsOrFirst as string,
                periodYears: rest[0] as number,
                registrationType: rest[1] as DomainRegistrationType,
            };
        }

        const domain = params.domain;
        const periodYears = params.periodYears;
        const registrationType = params.registrationType;
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        const apiPath = '/domains/price';
        const apiPayload: Payload = {};
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof periodYears !== 'undefined') {
            apiPayload['periodYears'] = periodYears;
        }
        if (typeof registrationType !== 'undefined') {
            apiPayload['registrationType'] = registrationType;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Check availability and get the requested registration price for one or more domain names. Availability is resolved for all domains in a single registrar lookup. Unavailable domains have a null price for new registrations, but can still be priced for renewal, transfer, or trade. Every priced domain also carries its renewal price for the same period, so a separate renewal lookup is not needed. A domain whose price could not be resolved, for example because its TLD is not supported, is returned with a null price.
     *
     * @param {string[]} params.domains - Domain names to check availability and price for. Maximum of 50 domains per request.
     * @param {number} params.periodYears - Number of years to calculate the domain price for. Must be at least 1.
     * @param {DomainRegistrationType} params.registrationType - Type of registration pricing to fetch. Allowed values: new, transfer, renewal, trade.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainPricesList>}
     */
    listPrices(params: {
        domains: string[];
        periodYears?: number;
        registrationType?: DomainRegistrationType;
    }): Promise<Models.DomainPricesList>;
    /**
     * Check availability and get the requested registration price for one or more domain names. Availability is resolved for all domains in a single registrar lookup. Unavailable domains have a null price for new registrations, but can still be priced for renewal, transfer, or trade. Every priced domain also carries its renewal price for the same period, so a separate renewal lookup is not needed. A domain whose price could not be resolved, for example because its TLD is not supported, is returned with a null price.
     *
     * @param {string[]} domains - Domain names to check availability and price for. Maximum of 50 domains per request.
     * @param {number} periodYears - Number of years to calculate the domain price for. Must be at least 1.
     * @param {DomainRegistrationType} registrationType - Type of registration pricing to fetch. Allowed values: new, transfer, renewal, trade.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainPricesList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listPrices(
        domains: string[],
        periodYears?: number,
        registrationType?: DomainRegistrationType,
    ): Promise<Models.DomainPricesList>;
    listPrices(
        paramsOrFirst:
            | {
                  domains: string[];
                  periodYears?: number;
                  registrationType?: DomainRegistrationType;
              }
            | string[],
        ...rest: [number?, DomainRegistrationType?]
    ): Promise<Models.DomainPricesList> {
        let params: {
            domains: string[];
            periodYears?: number;
            registrationType?: DomainRegistrationType;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domains: string[];
                periodYears?: number;
                registrationType?: DomainRegistrationType;
            };
        } else {
            params = {
                domains: paramsOrFirst as string[],
                periodYears: rest[0] as number,
                registrationType: rest[1] as DomainRegistrationType,
            };
        }

        const domains = params.domains;
        const periodYears = params.periodYears;
        const registrationType = params.registrationType;
        if (typeof domains === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "domains"',
            );
        }
        const apiPath = '/domains/prices';
        const apiPayload: Payload = {};
        if (typeof domains !== 'undefined') {
            apiPayload['domains'] = domains;
        }
        if (typeof periodYears !== 'undefined') {
            apiPayload['periodYears'] = periodYears;
        }
        if (typeof registrationType !== 'undefined') {
            apiPayload['registrationType'] = registrationType;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a domain by its unique ID.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    get(params: { domainId: string }): Promise<Models.Domain>;
    /**
     * Get a domain by its unique ID.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(domainId: string): Promise<Models.Domain>;
    get(paramsOrFirst: { domainId: string } | string): Promise<Models.Domain> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
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
     * Delete a domain by its unique ID. This endpoint can be used to delete a domain from your project.
     * Once deleted, the domain will no longer be available for use and all associated resources will be removed.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { domainId: string }): Promise<{}>;
    /**
     * Delete a domain by its unique ID. This endpoint can be used to delete a domain from your project.
     * Once deleted, the domain will no longer be available for use and all associated resources will be removed.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(domainId: string): Promise<{}>;
    delete(paramsOrFirst: { domainId: string } | string): Promise<{}> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
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
     * Update the registrar nameservers for the given domain. When nameservers are not provided,
     * the domain will be updated to use Appwrite nameservers.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string[]} params.nameservers - Nameservers to set for the domain. Defaults to Appwrite nameservers when omitted.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    updateNameservers(params: {
        domainId: string;
        nameservers?: string[];
    }): Promise<Models.Domain>;
    /**
     * Update the registrar nameservers for the given domain. When nameservers are not provided,
     * the domain will be updated to use Appwrite nameservers.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string[]} nameservers - Nameservers to set for the domain. Defaults to Appwrite nameservers when omitted.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateNameservers(
        domainId: string,
        nameservers?: string[],
    ): Promise<Models.Domain>;
    updateNameservers(
        paramsOrFirst: { domainId: string; nameservers?: string[] } | string,
        ...rest: [string[]?]
    ): Promise<Models.Domain> {
        let params: { domainId: string; nameservers?: string[] };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                nameservers?: string[];
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                nameservers: rest[0] as string[],
            };
        }

        const domainId = params.domainId;
        const nameservers = params.nameservers;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/nameservers'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof nameservers !== 'undefined') {
            apiPayload['nameservers'] = nameservers;
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
     * Verify which NS records are used and update the domain accordingly. This will check the domain's
     * nameservers and update the domain's status based on whether the nameservers match the expected
     * Appwrite nameservers.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    verifyNameservers(params: { domainId: string }): Promise<Models.Domain>;
    /**
     * Verify which NS records are used and update the domain accordingly. This will check the domain's
     * nameservers and update the domain's status based on whether the nameservers match the expected
     * Appwrite nameservers.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    verifyNameservers(domainId: string): Promise<Models.Domain>;
    verifyNameservers(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.Domain> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/nameservers/verification'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * List Google Workspace DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetGoogleWorkspace(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * List Google Workspace DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetGoogleWorkspace(domainId: string): Promise<Models.DnsRecordsList>;
    getPresetGoogleWorkspace(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/google-workspace'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
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
     * Add Google Workspace DNS records to the domain. This will create the required MX records
     * for Google Workspace email hosting.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetGoogleWorkspace(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * Add Google Workspace DNS records to the domain. This will create the required MX records
     * for Google Workspace email hosting.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetGoogleWorkspace(
        domainId: string,
    ): Promise<Models.DnsRecordsList>;
    createPresetGoogleWorkspace(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/google-workspace'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List iCloud DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetICloud(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * List iCloud DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetICloud(domainId: string): Promise<Models.DnsRecordsList>;
    getPresetICloud(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/icloud'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
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
     * Add iCloud DNS records to the domain. This will create the required MX and SPF records
     * for using iCloud email services with your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetICloud(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * Add iCloud DNS records to the domain. This will create the required MX and SPF records
     * for using iCloud email services with your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetICloud(domainId: string): Promise<Models.DnsRecordsList>;
    createPresetICloud(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/icloud'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List Mailgun DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetMailgun(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * List Mailgun DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetMailgun(domainId: string): Promise<Models.DnsRecordsList>;
    getPresetMailgun(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/mailgun'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
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
     * Add Mailgun DNS records to the domain. This endpoint will create the required DNS records
     * for Mailgun in the specified domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetMailgun(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * Add Mailgun DNS records to the domain. This endpoint will create the required DNS records
     * for Mailgun in the specified domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetMailgun(domainId: string): Promise<Models.DnsRecordsList>;
    createPresetMailgun(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/mailgun'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List Outlook DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetOutlook(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * List Outlook DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetOutlook(domainId: string): Promise<Models.DnsRecordsList>;
    getPresetOutlook(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/outlook'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
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
     * Add Outlook DNS records to the domain. This will create the required MX records
     * for setting up Outlook email hosting for your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetOutlook(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * Add Outlook DNS records to the domain. This will create the required MX records
     * for setting up Outlook email hosting for your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetOutlook(domainId: string): Promise<Models.DnsRecordsList>;
    createPresetOutlook(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/outlook'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List ProtonMail DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetProtonMail(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * List ProtonMail DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetProtonMail(domainId: string): Promise<Models.DnsRecordsList>;
    getPresetProtonMail(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/proton-mail'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
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
     * Add ProtonMail DNS records to the domain. This will create the required MX records
     * for using ProtonMail with your custom domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetProtonMail(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * Add ProtonMail DNS records to the domain. This will create the required MX records
     * for using ProtonMail with your custom domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetProtonMail(domainId: string): Promise<Models.DnsRecordsList>;
    createPresetProtonMail(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/proton-mail'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List Zoho DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetZoho(params: { domainId: string }): Promise<Models.DnsRecordsList>;
    /**
     * List Zoho DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetZoho(domainId: string): Promise<Models.DnsRecordsList>;
    getPresetZoho(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/zoho'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
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
     * Add Zoho Mail DNS records to the domain. This will create the required MX records
     * for setting up Zoho Mail on your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetZoho(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     * Add Zoho Mail DNS records to the domain. This will create the required MX records
     * for setting up Zoho Mail on your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetZoho(domainId: string): Promise<Models.DnsRecordsList>;
    createPresetZoho(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/presets/zoho'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List DNS records for a given domain. You can use this endpoint to list all the DNS records
     * associated with your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. You may filter on attributes such as type, name, value, etc. Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    listRecords(params: {
        domainId: string;
        queries?: string[];
    }): Promise<Models.DnsRecordsList>;
    /**
     * List DNS records for a given domain. You can use this endpoint to list all the DNS records
     * associated with your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. You may filter on attributes such as type, name, value, etc. Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRecords(
        domainId: string,
        queries?: string[],
    ): Promise<Models.DnsRecordsList>;
    listRecords(
        paramsOrFirst: { domainId: string; queries?: string[] } | string,
        ...rest: [string[]?]
    ): Promise<Models.DnsRecordsList> {
        let params: { domainId: string; queries?: string[] };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                queries?: string[];
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                queries: rest[0] as string[],
            };
        }

        const domainId = params.domainId;
        const queries = params.queries;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/records'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a new A record for the given domain. A records are used to point a domain name
     * to an IPv4 address. The record value should be a valid IPv4 address.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - IPv4 address for this A record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordA(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new A record for the given domain. A records are used to point a domain name
     * to an IPv4 address. The record value should be a valid IPv4 address.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - IPv4 address for this A record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordA(
        domainId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordA(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                value: rest[1] as string,
                ttl: rest[2] as number,
                comment: rest[3] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/a'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing A record for the given domain. This endpoint allows you to modify
     * the properties of an A record including its name (subdomain), IPv4 address, TTL,
     * and optional comment.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - IPv4 address for this A record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordA(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing A record for the given domain. This endpoint allows you to modify
     * the properties of an A record including its name (subdomain), IPv4 address, TTL,
     * and optional comment.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - IPv4 address for this A record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordA(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordA(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                comment: rest[4] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/a/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Create a new AAAA record for the given domain. This endpoint allows you to add a new IPv6 DNS record
     * to your domain. The record will be used to point a hostname to an IPv6 address.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - IPv6 address for this AAAA record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordAAAA(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new AAAA record for the given domain. This endpoint allows you to add a new IPv6 DNS record
     * to your domain. The record will be used to point a hostname to an IPv6 address.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - IPv6 address for this AAAA record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordAAAA(
        domainId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordAAAA(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                value: rest[1] as string,
                ttl: rest[2] as number,
                comment: rest[3] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/aaaa'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing AAAA record for the given domain. This endpoint allows you to modify
     * the properties of an existing AAAA record, including its name (subdomain), IPv6 address,
     * TTL, and optional comment.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - IPv6 address for this AAAA record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordAAAA(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing AAAA record for the given domain. This endpoint allows you to modify
     * the properties of an existing AAAA record, including its name (subdomain), IPv6 address,
     * TTL, and optional comment.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - IPv6 address for this AAAA record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordAAAA(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordAAAA(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                comment: rest[4] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/aaaa/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Create a new ALIAS record for the given domain. This record type can be used to point your domain
     * to another domain name that will serve as an alias. This is particularly useful when you want to
     * map your domain to a target domain that may change its IP address.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name.
     * @param {string} params.value - Target domain for this ALIAS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordAlias(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new ALIAS record for the given domain. This record type can be used to point your domain
     * to another domain name that will serve as an alias. This is particularly useful when you want to
     * map your domain to a target domain that may change its IP address.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name.
     * @param {string} value - Target domain for this ALIAS record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordAlias(
        domainId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordAlias(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                value: rest[1] as string,
                ttl: rest[2] as number,
                comment: rest[3] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/alias'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing ALIAS record for the specified domain. This endpoint allows you to modify
     * the properties of an existing ALIAS record including its name, target domain, TTL, and comment.
     *
     * The ALIAS record type is similar to a CNAME record but can be used at the zone apex (root domain).
     * It provides a way to map one domain name to another.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name.
     * @param {string} params.value - Target domain for this ALIAS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordAlias(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing ALIAS record for the specified domain. This endpoint allows you to modify
     * the properties of an existing ALIAS record including its name, target domain, TTL, and comment.
     *
     * The ALIAS record type is similar to a CNAME record but can be used at the zone apex (root domain).
     * It provides a way to map one domain name to another.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name.
     * @param {string} value - Target domain for this ALIAS record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordAlias(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordAlias(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                comment: rest[4] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/alias/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Create a new CAA record for the given domain. CAA records are used to specify which
     * Certificate Authorities (CAs) are allowed to issue SSL/TLS certificates for your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name.
     * @param {string} params.value - CAA value (e.g. issuer domain).
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordCAA(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new CAA record for the given domain. CAA records are used to specify which
     * Certificate Authorities (CAs) are allowed to issue SSL/TLS certificates for your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name.
     * @param {string} value - CAA value (e.g. issuer domain).
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordCAA(
        domainId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordCAA(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                value: rest[1] as string,
                ttl: rest[2] as number,
                comment: rest[3] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/caa'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing CAA record for the given domain. A CAA (Certification Authority Authorization)
     * record is used to specify which certificate authorities (CAs) are authorized to issue certificates
     * for a domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name.
     * @param {string} params.value - CAA value (e.g. issuer domain).
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordCAA(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing CAA record for the given domain. A CAA (Certification Authority Authorization)
     * record is used to specify which certificate authorities (CAs) are authorized to issue certificates
     * for a domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name.
     * @param {string} value - CAA value (e.g. issuer domain).
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordCAA(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordCAA(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                comment: rest[4] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/caa/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Create a new CNAME record for the given domain.
     *
     * A CNAME record maps a subdomain to another domain name, allowing you to create aliases
     * for your domain. For example, you can create a CNAME record to point 'blog.example.com'
     * to 'example.wordpress.com'.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Canonical target for this CNAME record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordCNAME(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new CNAME record for the given domain.
     *
     * A CNAME record maps a subdomain to another domain name, allowing you to create aliases
     * for your domain. For example, you can create a CNAME record to point 'blog.example.com'
     * to 'example.wordpress.com'.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Canonical target for this CNAME record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordCNAME(
        domainId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordCNAME(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                value: rest[1] as string,
                ttl: rest[2] as number,
                comment: rest[3] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/cname'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing CNAME record for the given domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Canonical target for this CNAME record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordCNAME(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing CNAME record for the given domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Canonical target for this CNAME record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordCNAME(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordCNAME(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                comment: rest[4] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/cname/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Create a new HTTPS record for the given domain. This record is used to configure HTTPS
     * settings for your domain, enabling secure communication over SSL/TLS.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Target for the HTTPS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordHTTPS(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new HTTPS record for the given domain. This record is used to configure HTTPS
     * settings for your domain, enabling secure communication over SSL/TLS.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Target for the HTTPS record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordHTTPS(
        domainId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordHTTPS(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                value: rest[1] as string,
                ttl: rest[2] as number,
                comment: rest[3] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/https'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing HTTPS record for the given domain. This endpoint allows you to modify
     * the properties of an HTTPS record associated with your domain, including the name (subdomain),
     * target value, TTL, and optional comment.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Target for the HTTPS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordHTTPS(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing HTTPS record for the given domain. This endpoint allows you to modify
     * the properties of an HTTPS record associated with your domain, including the name (subdomain),
     * target value, TTL, and optional comment.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Target for the HTTPS record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordHTTPS(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordHTTPS(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                comment: rest[4] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/https/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Create a new MX record for the given domain. MX records are used to define the mail servers responsible
     * for accepting email messages for the domain. Multiple MX records can be created with different priorities.
     * The priority parameter determines the order in which mail servers are used, with lower values indicating
     * higher priority.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Mail server domain for this MX record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {number} params.priority - MX priority. Lower values are tried first.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordMX(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        priority: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new MX record for the given domain. MX records are used to define the mail servers responsible
     * for accepting email messages for the domain. Multiple MX records can be created with different priorities.
     * The priority parameter determines the order in which mail servers are used, with lower values indicating
     * higher priority.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Mail server domain for this MX record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {number} priority - MX priority. Lower values are tried first.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordMX(
        domainId: string,
        name: string,
        value: string,
        ttl: number,
        priority: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordMX(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  priority: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, number?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            value: string;
            ttl: number;
            priority: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                value: string;
                ttl: number;
                priority: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                value: rest[1] as string,
                ttl: rest[2] as number,
                priority: rest[3] as number,
                comment: rest[4] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const priority = params.priority;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        if (typeof priority === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "priority"',
            );
        }
        const apiPath = '/domains/{domainId}/records/mx'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing MX record for the given domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Mail server domain for this MX record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {number} params.priority - MX priority. Lower values are tried first.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordMX(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        priority: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing MX record for the given domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Mail server domain for this MX record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {number} priority - MX priority. Lower values are tried first.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordMX(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        priority: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordMX(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  priority: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            priority: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                priority: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                priority: rest[4] as number,
                comment: rest[5] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const priority = params.priority;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        if (typeof priority === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "priority"',
            );
        }
        const apiPath = '/domains/{domainId}/records/mx/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Create a new NS record for the given domain. NS records specify the nameservers that are used
     * to resolve the domain name to IP addresses. Each domain can have multiple NS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Nameserver target for this NS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordNS(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new NS record for the given domain. NS records specify the nameservers that are used
     * to resolve the domain name to IP addresses. Each domain can have multiple NS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Nameserver target for this NS record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordNS(
        domainId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordNS(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                value: rest[1] as string,
                ttl: rest[2] as number,
                comment: rest[3] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/ns'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing NS record for the given domain. This endpoint allows you to modify
     * the properties of an NS (nameserver) record associated with your domain. You can update
     * the record name (subdomain), target nameserver value, TTL, and add or modify comments
     * for better record management.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Nameserver target for this NS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordNS(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing NS record for the given domain. This endpoint allows you to modify
     * the properties of an NS (nameserver) record associated with your domain. You can update
     * the record name (subdomain), target nameserver value, TTL, and add or modify comments
     * for better record management.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Nameserver target for this NS record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordNS(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordNS(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                comment: rest[4] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/ns/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Create a new SRV record for the given domain. SRV records are used to define the location
     * of servers for specific services. For example, they can be used to specify which server
     * handles a specific service like SIP or XMPP for the domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (service name).
     * @param {string} params.value - Target hostname for this SRV record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {number} params.priority - Record priority. Lower values are tried first.
     * @param {number} params.weight - Record weight, used to share load between targets of equal priority.
     * @param {number} params.port - Port number for the service.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordSRV(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        priority: number;
        weight: number;
        port: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new SRV record for the given domain. SRV records are used to define the location
     * of servers for specific services. For example, they can be used to specify which server
     * handles a specific service like SIP or XMPP for the domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (service name).
     * @param {string} value - Target hostname for this SRV record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {number} priority - Record priority. Lower values are tried first.
     * @param {number} weight - Record weight, used to share load between targets of equal priority.
     * @param {number} port - Port number for the service.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordSRV(
        domainId: string,
        name: string,
        value: string,
        ttl: number,
        priority: number,
        weight: number,
        port: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordSRV(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  priority: number;
                  weight: number;
                  port: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, number?, number?, number?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            value: string;
            ttl: number;
            priority: number;
            weight: number;
            port: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                value: string;
                ttl: number;
                priority: number;
                weight: number;
                port: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                value: rest[1] as string,
                ttl: rest[2] as number,
                priority: rest[3] as number,
                weight: rest[4] as number,
                port: rest[5] as number,
                comment: rest[6] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const priority = params.priority;
        const weight = params.weight;
        const port = params.port;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        if (typeof priority === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "priority"',
            );
        }
        if (typeof weight === 'undefined') {
            throw new AppwriteException('Missing required parameter: "weight"');
        }
        if (typeof port === 'undefined') {
            throw new AppwriteException('Missing required parameter: "port"');
        }
        const apiPath = '/domains/{domainId}/records/srv'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof weight !== 'undefined') {
            apiPayload['weight'] = weight;
        }
        if (typeof port !== 'undefined') {
            apiPayload['port'] = port;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing SRV record for the given domain.
     *
     * Required parameters:
     * - domainId: Domain unique ID
     * - recordId: DNS record unique ID
     * - name: Record name (service name)
     * - value: Target hostname for this SRV record
     * - ttl: Time to live, in seconds
     * - priority: Record priority
     * - weight: Record weight
     * - port: Port number for the service
     *
     * Optional parameters:
     * - comment: A comment for this record
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (service name).
     * @param {string} params.value - Target hostname for this SRV record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {number} params.priority - Record priority. Lower values are tried first.
     * @param {number} params.weight - Record weight, used to share load between targets of equal priority.
     * @param {number} params.port - Port number for the service.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordSRV(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        priority: number;
        weight: number;
        port: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing SRV record for the given domain.
     *
     * Required parameters:
     * - domainId: Domain unique ID
     * - recordId: DNS record unique ID
     * - name: Record name (service name)
     * - value: Target hostname for this SRV record
     * - ttl: Time to live, in seconds
     * - priority: Record priority
     * - weight: Record weight
     * - port: Port number for the service
     *
     * Optional parameters:
     * - comment: A comment for this record
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (service name).
     * @param {string} value - Target hostname for this SRV record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {number} priority - Record priority. Lower values are tried first.
     * @param {number} weight - Record weight, used to share load between targets of equal priority.
     * @param {number} port - Port number for the service.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordSRV(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        priority: number,
        weight: number,
        port: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordSRV(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  priority: number;
                  weight: number;
                  port: number;
                  comment?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string?,
            number?,
            number?,
            number?,
            number?,
            string?,
        ]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            priority: number;
            weight: number;
            port: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                priority: number;
                weight: number;
                port: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                priority: rest[4] as number,
                weight: rest[5] as number,
                port: rest[6] as number,
                comment: rest[7] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const priority = params.priority;
        const weight = params.weight;
        const port = params.port;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        if (typeof priority === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "priority"',
            );
        }
        if (typeof weight === 'undefined') {
            throw new AppwriteException('Missing required parameter: "weight"');
        }
        if (typeof port === 'undefined') {
            throw new AppwriteException('Missing required parameter: "port"');
        }
        const apiPath = '/domains/{domainId}/records/srv/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof weight !== 'undefined') {
            apiPayload['weight'] = weight;
        }
        if (typeof port !== 'undefined') {
            apiPayload['port'] = port;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Create a new TXT record for the given domain. TXT records can be used
     * to provide additional information about your domain, such as domain
     * verification records, SPF records, or DKIM records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain) for the TXT record.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.value - TXT record value.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordTXT(params: {
        domainId: string;
        name: string;
        ttl: number;
        value?: string;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new TXT record for the given domain. TXT records can be used
     * to provide additional information about your domain, such as domain
     * verification records, SPF records, or DKIM records.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain) for the TXT record.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} value - TXT record value.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordTXT(
        domainId: string,
        name: string,
        ttl: number,
        value?: string,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    createRecordTXT(
        paramsOrFirst:
            | {
                  domainId: string;
                  name: string;
                  ttl: number;
                  value?: string;
                  comment?: string;
              }
            | string,
        ...rest: [string?, number?, string?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            name: string;
            ttl: number;
            value?: string;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                name: string;
                ttl: number;
                value?: string;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                name: rest[0] as string,
                ttl: rest[1] as number,
                value: rest[2] as string,
                comment: rest[3] as string,
            };
        }

        const domainId = params.domainId;
        const name = params.name;
        const ttl = params.ttl;
        const value = params.value;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/txt'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Update an existing TXT record for the given domain.
     *
     * Update the TXT record details for a specific domain by providing the domain ID,
     * record ID, and the new record configuration including name, value, TTL, and an optional comment.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain) for the TXT record.
     * @param {string} params.value - TXT record value.
     * @param {number} params.ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordTXT(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing TXT record for the given domain.
     *
     * Update the TXT record details for a specific domain by providing the domain ID,
     * record ID, and the new record configuration including name, value, TTL, and an optional comment.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain) for the TXT record.
     * @param {string} value - TXT record value.
     * @param {number} ttl - Time to live, in seconds. Must be between 1 and 2147483647.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordTXT(
        domainId: string,
        recordId: string,
        name: string,
        value: string,
        ttl: number,
        comment?: string,
    ): Promise<Models.DnsRecord>;
    updateRecordTXT(
        paramsOrFirst:
            | {
                  domainId: string;
                  recordId: string;
                  name: string;
                  value: string;
                  ttl: number;
                  comment?: string;
              }
            | string,
        ...rest: [string?, string?, string?, number?, string?]
    ): Promise<Models.DnsRecord> {
        let params: {
            domainId: string;
            recordId: string;
            name: string;
            value: string;
            ttl: number;
            comment?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
                name: string;
                value: string;
                ttl: number;
                comment?: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
                name: rest[1] as string,
                value: rest[2] as string,
                ttl: rest[3] as number,
                comment: rest[4] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        const name = params.name;
        const value = params.value;
        const ttl = params.ttl;
        const comment = params.comment;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/txt/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            apiPayload['comment'] = comment;
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
     * Get a single DNS record for a given domain by record ID.
     *
     * This endpoint allows you to retrieve a specific DNS record associated with a domain
     * using its unique identifier. The record contains information about the DNS configuration
     * such as type, value, and TTL settings.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    getRecord(params: {
        domainId: string;
        recordId: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Get a single DNS record for a given domain by record ID.
     *
     * This endpoint allows you to retrieve a specific DNS record associated with a domain
     * using its unique identifier. The record contains information about the DNS configuration
     * such as type, value, and TTL settings.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRecord(domainId: string, recordId: string): Promise<Models.DnsRecord>;
    getRecord(
        paramsOrFirst: { domainId: string; recordId: string } | string,
        ...rest: [string?]
    ): Promise<Models.DnsRecord> {
        let params: { domainId: string; recordId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        const apiPath = '/domains/{domainId}/records/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete a DNS record for the given domain. This endpoint allows you to delete an existing DNS record
     * from a specific domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRecord(params: { domainId: string; recordId: string }): Promise<{}>;
    /**
     * Delete a DNS record for the given domain. This endpoint allows you to delete an existing DNS record
     * from a specific domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRecord(domainId: string, recordId: string): Promise<{}>;
    deleteRecord(
        paramsOrFirst: { domainId: string; recordId: string } | string,
        ...rest: [string?]
    ): Promise<{}> {
        let params: { domainId: string; recordId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                recordId: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                recordId: rest[0] as string,
            };
        }

        const domainId = params.domainId;
        const recordId = params.recordId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof recordId === 'undefined' || recordId === '') {
            throw new AppwriteException(
                'Missing required parameter: "recordId"',
            );
        }
        const apiPath = '/domains/{domainId}/records/{recordId}'
            .replace('{domainId}', encodeURIComponent(String(domainId)))
            .replace('{recordId}', encodeURIComponent(String(recordId)));
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
     * Update the team ID for a specific domain. The caller must administer the current
     * team and be an owner of the destination team.
     *
     * Updating the team ID will transfer ownership and access control of the domain
     * and all its DNS records to the new team.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.teamId - New team unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    updateTeam(params: {
        domainId: string;
        teamId: string;
    }): Promise<Models.Domain>;
    /**
     * Update the team ID for a specific domain. The caller must administer the current
     * team and be an owner of the destination team.
     *
     * Updating the team ID will transfer ownership and access control of the domain
     * and all its DNS records to the new team.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} teamId - New team unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTeam(domainId: string, teamId: string): Promise<Models.Domain>;
    updateTeam(
        paramsOrFirst: { domainId: string; teamId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Domain> {
        let params: { domainId: string; teamId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                teamId: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                teamId: rest[0] as string,
            };
        }

        const domainId = params.domainId;
        const teamId = params.teamId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof teamId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "teamId"');
        }
        const apiPath = '/domains/{domainId}/team'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof teamId !== 'undefined') {
            apiPayload['teamId'] = teamId;
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
     * Retrieve the current transfer status for a domain. Returns the status, an optional reason, and a timestamp of the last status change.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainTransferStatus>}
     */
    getTransferStatus(params: {
        domainId: string;
    }): Promise<Models.DomainTransferStatus>;
    /**
     * Retrieve the current transfer status for a domain. Returns the status, an optional reason, and a timestamp of the last status change.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainTransferStatus>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTransferStatus(domainId: string): Promise<Models.DomainTransferStatus>;
    getTransferStatus(
        paramsOrFirst: { domainId: string } | string,
    ): Promise<Models.DomainTransferStatus> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/transfers/status'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
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
     * Retrieve the DNS zone file for the given domain. This endpoint will return the DNS
     * zone file in a standardized format that can be used to configure DNS servers.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getZone(params: { domainId: string }): Promise<{}>;
    /**
     * Retrieve the DNS zone file for the given domain. This endpoint will return the DNS
     * zone file in a standardized format that can be used to configure DNS servers.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getZone(domainId: string): Promise<{}>;
    getZone(paramsOrFirst: { domainId: string } | string): Promise<{}> {
        let params: { domainId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { domainId: string };
        } else {
            params = {
                domainId: paramsOrFirst as string,
            };
        }

        const domainId = params.domainId;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        const apiPath = '/domains/{domainId}/zone'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'text/plain',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update the DNS zone for the given domain using the provided zone file content.
     * All parsed records are imported and then the main domain document is returned.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.content - DNS zone file content as a string.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    updateZone(params: {
        domainId: string;
        content: string;
    }): Promise<Models.Domain>;
    /**
     * Update the DNS zone for the given domain using the provided zone file content.
     * All parsed records are imported and then the main domain document is returned.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} content - DNS zone file content as a string.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateZone(domainId: string, content: string): Promise<Models.Domain>;
    updateZone(
        paramsOrFirst: { domainId: string; content: string } | string,
        ...rest: [string?]
    ): Promise<Models.Domain> {
        let params: { domainId: string; content: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                domainId: string;
                content: string;
            };
        } else {
            params = {
                domainId: paramsOrFirst as string,
                content: rest[0] as string,
            };
        }

        const domainId = params.domainId;
        const content = params.content;
        if (typeof domainId === 'undefined' || domainId === '') {
            throw new AppwriteException(
                'Missing required parameter: "domainId"',
            );
        }
        if (typeof content === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "content"',
            );
        }
        const apiPath = '/domains/{domainId}/zone'.replace(
            '{domainId}',
            encodeURIComponent(String(domainId)),
        );
        const apiPayload: Payload = {};
        if (typeof content !== 'undefined') {
            apiPayload['content'] = content;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('put', uri, apiHeaders, apiPayload);
    }
}
