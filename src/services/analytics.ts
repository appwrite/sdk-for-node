import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
    encodePath,
} from '../client';
import type { Models } from '../models';

import { AnalyticsPropertyType } from '../enums/analytics-property-type';
import { AnalyticsInterval } from '../enums/analytics-interval';
import { AnalyticsDimension } from '../enums/analytics-dimension';
export class Analytics {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List analytics properties for the current project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, domain, enabled, type
     * @param {string} params.search - Search term to filter your list results. Matches the property ID, name and domain. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsPropertyList>}
     */
    listProperties(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.AnalyticsPropertyList>;
    /**
     * List analytics properties for the current project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, domain, enabled, type
     * @param {string} search - Search term to filter your list results. Matches the property ID, name and domain. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsPropertyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listProperties(
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.AnalyticsPropertyList>;
    listProperties(
        paramsOrFirst?:
            { queries?: string[]; search?: string; total?: boolean } | string[],
        ...rest: [string?, boolean?]
    ): Promise<Models.AnalyticsPropertyList> {
        let params: { queries?: string[]; search?: string; total?: boolean };

        if (
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
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
        const apiPath = '/analytics/properties';
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'analyticsPropertyList',
            models: {
                analyticsPropertyList: {
                    defaults: {
                        total: 0,
                        properties: [],
                    },
                    properties: {
                        properties: {
                            items: 'analyticsProperty',
                        },
                    },
                },
                analyticsProperty: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        domain: '',
                        enabled: true,
                        allowedOrigins: ['*'],
                        type: 'web',
                        identifyUsers: false,
                        accessedAt: '',
                        firstAccessedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a new analytics property to track a website or application.
     *
     * @param {string} params.propertyId - Unique ID. Choose a custom ID or generate a random ID with `ID.unique()`. Max length is 36 chars.
     * @param {string} params.name - Human-readable name for this property.
     * @param {string} params.domain - Primary domain to track (e.g. example.com). May be empty for mobile and agent properties.
     * @param {boolean} params.enabled - Whether the property accepts events. Events sent to a disabled property are rejected as not found.
     * @param {string[]} params.allowedOrigins - Allowed origins for tracking. Use ["*"] to allow all.
     * @param {boolean} params.identifyUsers - Record the signed-in user's ID on events sent from a client session, so traffic can be broken down and counted by user. Off by default.
     * @param {AnalyticsPropertyType} params.type - Kind of product this property tracks. Only changes which panels the dashboard shows; ingestion accepts the same events for every type.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     */
    createProperty(params: {
        propertyId: string;
        name: string;
        domain?: string;
        enabled?: boolean;
        allowedOrigins?: string[];
        identifyUsers?: boolean;
        type?: AnalyticsPropertyType;
    }): Promise<Models.AnalyticsProperty>;
    /**
     * Create a new analytics property to track a website or application.
     *
     * @param {string} propertyId - Unique ID. Choose a custom ID or generate a random ID with `ID.unique()`. Max length is 36 chars.
     * @param {string} name - Human-readable name for this property.
     * @param {string} domain - Primary domain to track (e.g. example.com). May be empty for mobile and agent properties.
     * @param {boolean} enabled - Whether the property accepts events. Events sent to a disabled property are rejected as not found.
     * @param {string[]} allowedOrigins - Allowed origins for tracking. Use ["*"] to allow all.
     * @param {boolean} identifyUsers - Record the signed-in user's ID on events sent from a client session, so traffic can be broken down and counted by user. Off by default.
     * @param {AnalyticsPropertyType} type - Kind of product this property tracks. Only changes which panels the dashboard shows; ingestion accepts the same events for every type.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createProperty(
        propertyId: string,
        name: string,
        domain?: string,
        enabled?: boolean,
        allowedOrigins?: string[],
        identifyUsers?: boolean,
        type?: AnalyticsPropertyType,
    ): Promise<Models.AnalyticsProperty>;
    createProperty(
        paramsOrFirst:
            | {
                  propertyId: string;
                  name: string;
                  domain?: string;
                  enabled?: boolean;
                  allowedOrigins?: string[];
                  identifyUsers?: boolean;
                  type?: AnalyticsPropertyType;
              }
            | string,
        ...rest: [
            string?,
            string?,
            boolean?,
            string[]?,
            boolean?,
            AnalyticsPropertyType?,
        ]
    ): Promise<Models.AnalyticsProperty> {
        let params: {
            propertyId: string;
            name: string;
            domain?: string;
            enabled?: boolean;
            allowedOrigins?: string[];
            identifyUsers?: boolean;
            type?: AnalyticsPropertyType;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                name: string;
                domain?: string;
                enabled?: boolean;
                allowedOrigins?: string[];
                identifyUsers?: boolean;
                type?: AnalyticsPropertyType;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                name: rest[0] as string,
                domain: rest[1] as string,
                enabled: rest[2] as boolean,
                allowedOrigins: rest[3] as string[],
                identifyUsers: rest[4] as boolean,
                type: rest[5] as AnalyticsPropertyType,
            };
        }

        const propertyId = params.propertyId;
        const name = params.name;
        const domain = params.domain;
        const enabled = params.enabled;
        const allowedOrigins = params.allowedOrigins;
        const identifyUsers = params.identifyUsers;
        const type = params.type;
        if (typeof propertyId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/analytics/properties';
        const apiPayload: Payload = {};
        if (typeof propertyId !== 'undefined') {
            apiPayload['propertyId'] = propertyId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof allowedOrigins !== 'undefined') {
            apiPayload['allowedOrigins'] = allowedOrigins;
        }
        if (typeof identifyUsers !== 'undefined') {
            apiPayload['identifyUsers'] = identifyUsers;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'analyticsProperty',
            models: {
                analyticsProperty: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        domain: '',
                        enabled: true,
                        allowedOrigins: ['*'],
                        type: 'web',
                        identifyUsers: false,
                        accessedAt: '',
                        firstAccessedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get an analytics property by ID.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     */
    getProperty(params: {
        propertyId: string;
    }): Promise<Models.AnalyticsProperty>;
    /**
     * Get an analytics property by ID.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getProperty(propertyId: string): Promise<Models.AnalyticsProperty>;
    getProperty(
        paramsOrFirst: { propertyId: string } | string,
    ): Promise<Models.AnalyticsProperty> {
        let params: { propertyId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { propertyId: string };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
            };
        }

        const propertyId = params.propertyId;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        const apiPath = '/analytics/properties/{propertyId}'.replace(
            '{propertyId}',
            encodePath(propertyId),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'analyticsProperty',
            models: {
                analyticsProperty: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        domain: '',
                        enabled: true,
                        allowedOrigins: ['*'],
                        type: 'web',
                        identifyUsers: false,
                        accessedAt: '',
                        firstAccessedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update an analytics property. Only the attributes you pass are changed; omitted attributes keep their current value.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @param {string | null} params.name - Human-readable name for this property.
     * @param {string | null} params.domain - Primary domain to track (e.g. example.com). Pass an empty string to clear it.
     * @param {boolean | null} params.enabled - Whether the property accepts events. Events sent to a disabled property are rejected as not found.
     * @param {string[] | null} params.allowedOrigins - Allowed origins for tracking. Use ["*"] to allow all. On a property linked to a site, Appwrite manages this list: it is rewritten from the site's production domains whenever they change.
     * @param {boolean | null} params.identifyUsers - Record the signed-in user's ID on events sent from a client session, so traffic can be broken down and counted by user.
     * @param {AnalyticsPropertyType | null} params.type - Kind of product this property tracks. Only changes which panels the dashboard shows; stored events are kept.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     */
    updateProperty(params: {
        propertyId: string;
        name?: string | null;
        domain?: string | null;
        enabled?: boolean | null;
        allowedOrigins?: string[] | null;
        identifyUsers?: boolean | null;
        type?: AnalyticsPropertyType | null;
    }): Promise<Models.AnalyticsProperty>;
    /**
     * Update an analytics property. Only the attributes you pass are changed; omitted attributes keep their current value.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @param {string | null} name - Human-readable name for this property.
     * @param {string | null} domain - Primary domain to track (e.g. example.com). Pass an empty string to clear it.
     * @param {boolean | null} enabled - Whether the property accepts events. Events sent to a disabled property are rejected as not found.
     * @param {string[] | null} allowedOrigins - Allowed origins for tracking. Use ["*"] to allow all. On a property linked to a site, Appwrite manages this list: it is rewritten from the site's production domains whenever they change.
     * @param {boolean | null} identifyUsers - Record the signed-in user's ID on events sent from a client session, so traffic can be broken down and counted by user.
     * @param {AnalyticsPropertyType | null} type - Kind of product this property tracks. Only changes which panels the dashboard shows; stored events are kept.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProperty(
        propertyId: string,
        name?: string | null,
        domain?: string | null,
        enabled?: boolean | null,
        allowedOrigins?: string[] | null,
        identifyUsers?: boolean | null,
        type?: AnalyticsPropertyType | null,
    ): Promise<Models.AnalyticsProperty>;
    updateProperty(
        paramsOrFirst:
            | {
                  propertyId: string;
                  name?: string | null;
                  domain?: string | null;
                  enabled?: boolean | null;
                  allowedOrigins?: string[] | null;
                  identifyUsers?: boolean | null;
                  type?: AnalyticsPropertyType | null;
              }
            | string,
        ...rest: [
            (string | null)?,
            (string | null)?,
            (boolean | null)?,
            (string[] | null)?,
            (boolean | null)?,
            (AnalyticsPropertyType | null)?,
        ]
    ): Promise<Models.AnalyticsProperty> {
        let params: {
            propertyId: string;
            name?: string | null;
            domain?: string | null;
            enabled?: boolean | null;
            allowedOrigins?: string[] | null;
            identifyUsers?: boolean | null;
            type?: AnalyticsPropertyType | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                name?: string | null;
                domain?: string | null;
                enabled?: boolean | null;
                allowedOrigins?: string[] | null;
                identifyUsers?: boolean | null;
                type?: AnalyticsPropertyType | null;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                name: rest[0] as string | null,
                domain: rest[1] as string | null,
                enabled: rest[2] as boolean | null,
                allowedOrigins: rest[3] as string[] | null,
                identifyUsers: rest[4] as boolean | null,
                type: rest[5] as AnalyticsPropertyType | null,
            };
        }

        const propertyId = params.propertyId;
        const name = params.name;
        const domain = params.domain;
        const enabled = params.enabled;
        const allowedOrigins = params.allowedOrigins;
        const identifyUsers = params.identifyUsers;
        const type = params.type;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        const apiPath = '/analytics/properties/{propertyId}'.replace(
            '{propertyId}',
            encodePath(propertyId),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof allowedOrigins !== 'undefined') {
            apiPayload['allowedOrigins'] = allowedOrigins;
        }
        if (typeof identifyUsers !== 'undefined') {
            apiPayload['identifyUsers'] = identifyUsers;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'analyticsProperty',
            models: {
                analyticsProperty: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        domain: '',
                        enabled: true,
                        allowedOrigins: ['*'],
                        type: 'web',
                        identifyUsers: false,
                        accessedAt: '',
                        firstAccessedAt: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Delete an analytics property along with every event and session collected for it. This cannot be undone.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteProperty(params: { propertyId: string }): Promise<{}>;
    /**
     * Delete an analytics property along with every event and session collected for it. This cannot be undone.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteProperty(propertyId: string): Promise<{}>;
    deleteProperty(
        paramsOrFirst: { propertyId: string } | string,
    ): Promise<{}> {
        let params: { propertyId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { propertyId: string };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
            };
        }

        const propertyId = params.propertyId;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        const apiPath = '/analytics/properties/{propertyId}'.replace(
            '{propertyId}',
            encodePath(propertyId),
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
     * List the annotations of an analytics property. Filter on `date` to fetch the annotations inside a chart's time range.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: date
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsAnnotationList>}
     */
    listAnnotations(params: {
        propertyId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.AnalyticsAnnotationList>;
    /**
     * List the annotations of an analytics property. Filter on `date` to fetch the annotations inside a chart's time range.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: date
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsAnnotationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listAnnotations(
        propertyId: string,
        queries?: string[],
        total?: boolean,
    ): Promise<Models.AnalyticsAnnotationList>;
    listAnnotations(
        paramsOrFirst:
            | { propertyId: string; queries?: string[]; total?: boolean }
            | string,
        ...rest: [string[]?, boolean?]
    ): Promise<Models.AnalyticsAnnotationList> {
        let params: { propertyId: string; queries?: string[]; total?: boolean };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean,
            };
        }

        const propertyId = params.propertyId;
        const queries = params.queries;
        const total = params.total;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        const apiPath =
            '/analytics/properties/{propertyId}/annotations'.replace(
                '{propertyId}',
                encodePath(propertyId),
            );
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

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'analyticsAnnotationList',
            models: {
                analyticsAnnotationList: {
                    defaults: {
                        total: 0,
                        annotations: [],
                    },
                    properties: {
                        annotations: {
                            items: 'analyticsAnnotation',
                        },
                    },
                },
                analyticsAnnotation: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        propertyId: '',
                        date: '',
                        content: '',
                        userId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create an annotation that marks a point in time on an analytics property's charts.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @param {string} params.annotationId - Unique ID. Choose a custom ID or generate a random ID with `ID.unique()`. Max length is 36 chars.
     * @param {string} params.date - Point in time the annotation marks, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     * @param {string} params.content - Annotation text. Max length: 512 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsAnnotation>}
     */
    createAnnotation(params: {
        propertyId: string;
        annotationId: string;
        date: string;
        content: string;
    }): Promise<Models.AnalyticsAnnotation>;
    /**
     * Create an annotation that marks a point in time on an analytics property's charts.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @param {string} annotationId - Unique ID. Choose a custom ID or generate a random ID with `ID.unique()`. Max length is 36 chars.
     * @param {string} date - Point in time the annotation marks, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     * @param {string} content - Annotation text. Max length: 512 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsAnnotation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAnnotation(
        propertyId: string,
        annotationId: string,
        date: string,
        content: string,
    ): Promise<Models.AnalyticsAnnotation>;
    createAnnotation(
        paramsOrFirst:
            | {
                  propertyId: string;
                  annotationId: string;
                  date: string;
                  content: string;
              }
            | string,
        ...rest: [string?, string?, string?]
    ): Promise<Models.AnalyticsAnnotation> {
        let params: {
            propertyId: string;
            annotationId: string;
            date: string;
            content: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                annotationId: string;
                date: string;
                content: string;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                annotationId: rest[0] as string,
                date: rest[1] as string,
                content: rest[2] as string,
            };
        }

        const propertyId = params.propertyId;
        const annotationId = params.annotationId;
        const date = params.date;
        const content = params.content;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        if (typeof annotationId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "annotationId"',
            );
        }
        if (typeof date === 'undefined') {
            throw new AppwriteException('Missing required parameter: "date"');
        }
        if (typeof content === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "content"',
            );
        }
        const apiPath =
            '/analytics/properties/{propertyId}/annotations'.replace(
                '{propertyId}',
                encodePath(propertyId),
            );
        const apiPayload: Payload = {};
        if (typeof annotationId !== 'undefined') {
            apiPayload['annotationId'] = annotationId;
        }
        if (typeof date !== 'undefined') {
            apiPayload['date'] = date;
        }
        if (typeof content !== 'undefined') {
            apiPayload['content'] = content;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'analyticsAnnotation',
            models: {
                analyticsAnnotation: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        propertyId: '',
                        date: '',
                        content: '',
                        userId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get an analytics annotation by ID.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @param {string} params.annotationId - Annotation unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsAnnotation>}
     */
    getAnnotation(params: {
        propertyId: string;
        annotationId: string;
    }): Promise<Models.AnalyticsAnnotation>;
    /**
     * Get an analytics annotation by ID.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @param {string} annotationId - Annotation unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsAnnotation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAnnotation(
        propertyId: string,
        annotationId: string,
    ): Promise<Models.AnalyticsAnnotation>;
    getAnnotation(
        paramsOrFirst: { propertyId: string; annotationId: string } | string,
        ...rest: [string?]
    ): Promise<Models.AnalyticsAnnotation> {
        let params: { propertyId: string; annotationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                annotationId: string;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                annotationId: rest[0] as string,
            };
        }

        const propertyId = params.propertyId;
        const annotationId = params.annotationId;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        if (typeof annotationId === 'undefined' || annotationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "annotationId"',
            );
        }
        const apiPath =
            '/analytics/properties/{propertyId}/annotations/{annotationId}'
                .replace('{propertyId}', encodePath(propertyId))
                .replace('{annotationId}', encodePath(annotationId));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'analyticsAnnotation',
            models: {
                analyticsAnnotation: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        propertyId: '',
                        date: '',
                        content: '',
                        userId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update an analytics annotation. Only the attributes you pass are changed; omitted attributes keep their current value.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @param {string} params.annotationId - Annotation unique ID.
     * @param {string | null} params.date - Point in time the annotation marks, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     * @param {string | null} params.content - Annotation text. Max length: 512 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsAnnotation>}
     */
    updateAnnotation(params: {
        propertyId: string;
        annotationId: string;
        date?: string | null;
        content?: string | null;
    }): Promise<Models.AnalyticsAnnotation>;
    /**
     * Update an analytics annotation. Only the attributes you pass are changed; omitted attributes keep their current value.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @param {string} annotationId - Annotation unique ID.
     * @param {string | null} date - Point in time the annotation marks, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     * @param {string | null} content - Annotation text. Max length: 512 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsAnnotation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAnnotation(
        propertyId: string,
        annotationId: string,
        date?: string | null,
        content?: string | null,
    ): Promise<Models.AnalyticsAnnotation>;
    updateAnnotation(
        paramsOrFirst:
            | {
                  propertyId: string;
                  annotationId: string;
                  date?: string | null;
                  content?: string | null;
              }
            | string,
        ...rest: [string?, (string | null)?, (string | null)?]
    ): Promise<Models.AnalyticsAnnotation> {
        let params: {
            propertyId: string;
            annotationId: string;
            date?: string | null;
            content?: string | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                annotationId: string;
                date?: string | null;
                content?: string | null;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                annotationId: rest[0] as string,
                date: rest[1] as string | null,
                content: rest[2] as string | null,
            };
        }

        const propertyId = params.propertyId;
        const annotationId = params.annotationId;
        const date = params.date;
        const content = params.content;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        if (typeof annotationId === 'undefined' || annotationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "annotationId"',
            );
        }
        const apiPath =
            '/analytics/properties/{propertyId}/annotations/{annotationId}'
                .replace('{propertyId}', encodePath(propertyId))
                .replace('{annotationId}', encodePath(annotationId));
        const apiPayload: Payload = {};
        if (typeof date !== 'undefined') {
            apiPayload['date'] = date;
        }
        if (typeof content !== 'undefined') {
            apiPayload['content'] = content;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'analyticsAnnotation',
            models: {
                analyticsAnnotation: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        propertyId: '',
                        date: '',
                        content: '',
                        userId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Delete an analytics annotation.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @param {string} params.annotationId - Annotation unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteAnnotation(params: {
        propertyId: string;
        annotationId: string;
    }): Promise<{}>;
    /**
     * Delete an analytics annotation.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @param {string} annotationId - Annotation unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteAnnotation(propertyId: string, annotationId: string): Promise<{}>;
    deleteAnnotation(
        paramsOrFirst: { propertyId: string; annotationId: string } | string,
        ...rest: [string?]
    ): Promise<{}> {
        let params: { propertyId: string; annotationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                annotationId: string;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                annotationId: rest[0] as string,
            };
        }

        const propertyId = params.propertyId;
        const annotationId = params.annotationId;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        if (typeof annotationId === 'undefined' || annotationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "annotationId"',
            );
        }
        const apiPath =
            '/analytics/properties/{propertyId}/annotations/{annotationId}'
                .replace('{propertyId}', encodePath(propertyId))
                .replace('{annotationId}', encodePath(annotationId));
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
     * Send a tracking event from a browser, native app, or server-side SDK.
     *
     * @param {string} params.propertyId - Analytics property ID.
     * @param {string} params.name - Event name. "pageview" and "screen_view" are counted as views, every other name is a custom event.
     * @param {string} params.url - Full page URL or screen identifier.
     * @param {string} params.domain - Hostname (e.g. example.com).
     * @param {string} params.referrer - Referrer URL.
     * @param {number} params.screenWidth - Viewport width in CSS pixels.
     * @param {string} params.sessionHash - Optional session hash (provided by SDK).
     * @param {number} params.scrollDepth - Scroll depth percentage 0-100.
     * @param {number} params.engagementTime - Engagement time in seconds, 0-4294967295.
     * @param {string[]} params.props - Custom string properties as a flat key=value list (max 32 entries, alternating key,value).
     * @param {string} params.userId - Override user ID. Pass an opaque ID, not personal data such as an email. Requires API-key auth with analytics.write scope.
     * @param {string} params.ip - Override IP address. Requires API-key auth with analytics.write scope.
     * @param {string} params.userAgent - Override user agent. Requires API-key auth with analytics.write scope.
     * @param {boolean | null} params.interactive - Whether this event is a visitor interaction that ends a bounce. Set false for telemetry such as heartbeats or background syncs. Defaults to true for custom events and false for the automatic engagement, scroll and app lifecycle events. Ignored for views.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createEvent(params: {
        propertyId: string;
        name: string;
        url: string;
        domain?: string;
        referrer?: string;
        screenWidth?: number;
        sessionHash?: string;
        scrollDepth?: number;
        engagementTime?: number;
        props?: string[];
        userId?: string;
        ip?: string;
        userAgent?: string;
        interactive?: boolean | null;
    }): Promise<{}>;
    /**
     * Send a tracking event from a browser, native app, or server-side SDK.
     *
     * @param {string} propertyId - Analytics property ID.
     * @param {string} name - Event name. "pageview" and "screen_view" are counted as views, every other name is a custom event.
     * @param {string} url - Full page URL or screen identifier.
     * @param {string} domain - Hostname (e.g. example.com).
     * @param {string} referrer - Referrer URL.
     * @param {number} screenWidth - Viewport width in CSS pixels.
     * @param {string} sessionHash - Optional session hash (provided by SDK).
     * @param {number} scrollDepth - Scroll depth percentage 0-100.
     * @param {number} engagementTime - Engagement time in seconds, 0-4294967295.
     * @param {string[]} props - Custom string properties as a flat key=value list (max 32 entries, alternating key,value).
     * @param {string} userId - Override user ID. Pass an opaque ID, not personal data such as an email. Requires API-key auth with analytics.write scope.
     * @param {string} ip - Override IP address. Requires API-key auth with analytics.write scope.
     * @param {string} userAgent - Override user agent. Requires API-key auth with analytics.write scope.
     * @param {boolean | null} interactive - Whether this event is a visitor interaction that ends a bounce. Set false for telemetry such as heartbeats or background syncs. Defaults to true for custom events and false for the automatic engagement, scroll and app lifecycle events. Ignored for views.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEvent(
        propertyId: string,
        name: string,
        url: string,
        domain?: string,
        referrer?: string,
        screenWidth?: number,
        sessionHash?: string,
        scrollDepth?: number,
        engagementTime?: number,
        props?: string[],
        userId?: string,
        ip?: string,
        userAgent?: string,
        interactive?: boolean | null,
    ): Promise<{}>;
    createEvent(
        paramsOrFirst:
            | {
                  propertyId: string;
                  name: string;
                  url: string;
                  domain?: string;
                  referrer?: string;
                  screenWidth?: number;
                  sessionHash?: string;
                  scrollDepth?: number;
                  engagementTime?: number;
                  props?: string[];
                  userId?: string;
                  ip?: string;
                  userAgent?: string;
                  interactive?: boolean | null;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string?,
            string?,
            number?,
            string?,
            number?,
            number?,
            string[]?,
            string?,
            string?,
            string?,
            (boolean | null)?,
        ]
    ): Promise<{}> {
        let params: {
            propertyId: string;
            name: string;
            url: string;
            domain?: string;
            referrer?: string;
            screenWidth?: number;
            sessionHash?: string;
            scrollDepth?: number;
            engagementTime?: number;
            props?: string[];
            userId?: string;
            ip?: string;
            userAgent?: string;
            interactive?: boolean | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                name: string;
                url: string;
                domain?: string;
                referrer?: string;
                screenWidth?: number;
                sessionHash?: string;
                scrollDepth?: number;
                engagementTime?: number;
                props?: string[];
                userId?: string;
                ip?: string;
                userAgent?: string;
                interactive?: boolean | null;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                name: rest[0] as string,
                url: rest[1] as string,
                domain: rest[2] as string,
                referrer: rest[3] as string,
                screenWidth: rest[4] as number,
                sessionHash: rest[5] as string,
                scrollDepth: rest[6] as number,
                engagementTime: rest[7] as number,
                props: rest[8] as string[],
                userId: rest[9] as string,
                ip: rest[10] as string,
                userAgent: rest[11] as string,
                interactive: rest[12] as boolean | null,
            };
        }

        const propertyId = params.propertyId;
        const name = params.name;
        const url = params.url;
        const domain = params.domain;
        const referrer = params.referrer;
        const screenWidth = params.screenWidth;
        const sessionHash = params.sessionHash;
        const scrollDepth = params.scrollDepth;
        const engagementTime = params.engagementTime;
        const props = params.props;
        const userId = params.userId;
        const ip = params.ip;
        const userAgent = params.userAgent;
        const interactive = params.interactive;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }
        const apiPath = '/analytics/properties/{propertyId}/events'.replace(
            '{propertyId}',
            encodePath(propertyId),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof referrer !== 'undefined') {
            apiPayload['referrer'] = referrer;
        }
        if (typeof screenWidth !== 'undefined') {
            apiPayload['screenWidth'] = screenWidth;
        }
        if (typeof sessionHash !== 'undefined') {
            apiPayload['sessionHash'] = sessionHash;
        }
        if (typeof scrollDepth !== 'undefined') {
            apiPayload['scrollDepth'] = scrollDepth;
        }
        if (typeof engagementTime !== 'undefined') {
            apiPayload['engagementTime'] = engagementTime;
        }
        if (typeof props !== 'undefined') {
            apiPayload['props'] = props;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['userId'] = userId;
        }
        if (typeof ip !== 'undefined') {
            apiPayload['ip'] = ip;
        }
        if (typeof userAgent !== 'undefined') {
            apiPayload['userAgent'] = userAgent;
        }
        if (typeof interactive !== 'undefined') {
            apiPayload['interactive'] = interactive;
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
     * Read analytics metrics (visitors, sessions, pageviews, events, bounceRate, …) for a property over a date range.
     *
     * **Three response shapes**, chosen by `dimensions[]` and `interval`:
     * - Neither: one row aggregating the whole window, with `value` and `date` null. Only this shape carries `visits`, `bounceRate`, `visitDuration`, `viewsPerVisit`, `scrollDepth` and `engagementTime`.
     * - `dimensions[]`: one row per dimension value, ranked by visitors, with `value` set and `date` null.
     * - `interval`: one row per time bucket in chronological order, with `date` set and `value` null.
     *
     * `pageviews` is carried by the flat aggregate and by `interval`, but not by a breakdown.
     *
     * `userId` and `users` cover identified traffic only: events sent with an API key's `userId`, or from a signed-in session on a property with `identifyUsers` on. A `userId` breakdown leaves out anonymous events; returned values are the project's user IDs.
     *
     * Custom event props: `dimensions[]=props` ranks the prop keys seen in the window, and adding `propKey` ranks the values of that one key. `queries[]` filters on a prop's value with the `props.<key>` attribute, e.g. `equal("props.plan", ["pro"])`.
     *
     * Combining `dimensions[]` with `interval` is not supported yet. `queries[]` filters the underlying events using standard Utopia query syntax.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @param {string[]} params.queries - Up to 10 filter queries in Utopia syntax. Allowed attributes: country, region, city, browser, browserVersion, operatingSystem, operatingSystemVersion, device, screenSize, referrerSource, channel, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, page, hostname, trafficType, botName, botCategory, userId, eventName, and `props.<key>` for a custom prop. page, userId, eventName and `props.<key>` are only accepted alongside `interval`, or with a breakdown on a dimension other than entryPage, exitPage. Allowed methods: equal, notEqual, contains, startsWith, endsWith. Example: `queries[]=equal("country", ["US"])`.
     * @param {AnalyticsInterval} params.interval - Time bucket size. Omit (null) for a flat aggregate over the whole window. Allowed: 1h, 1d, 1w, 1m.
     * @param {AnalyticsDimension[]} params.dimensions - Dimension to break the metrics down by. One at most for now; the parameter is a list so that cap can be raised without a breaking change. Allowed: country, region, city, browser, browserVersion, operatingSystem, operatingSystemVersion, device, screenSize, referrerSource, channel, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, page, hostname, entryPage, exitPage, trafficType, botName, botCategory, userId, eventName, props.
     * @param {string} params.propKey - Custom prop key whose values to rank, with `dimensions[]=props`. Omit to rank the prop keys themselves.
     * @param {string} params.dateRange - Date range shorthand (e.g. 7d, 30d). Ignored for any bound you supply explicitly via startAt/endAt.
     * @param {string} params.startAt - Explicit window start in ISO 8601. Defaults to endAt minus dateRange.
     * @param {string} params.endAt - Explicit window end in ISO 8601. Defaults to the current time.
     * @param {number} params.limit - Maximum number of ranked values to return.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsMetricList>}
     */
    listMetrics(params: {
        propertyId: string;
        queries?: string[];
        interval?: AnalyticsInterval;
        dimensions?: AnalyticsDimension[];
        propKey?: string;
        dateRange?: string;
        startAt?: string;
        endAt?: string;
        limit?: number;
        total?: boolean;
    }): Promise<Models.AnalyticsMetricList>;
    /**
     * Read analytics metrics (visitors, sessions, pageviews, events, bounceRate, …) for a property over a date range.
     *
     * **Three response shapes**, chosen by `dimensions[]` and `interval`:
     * - Neither: one row aggregating the whole window, with `value` and `date` null. Only this shape carries `visits`, `bounceRate`, `visitDuration`, `viewsPerVisit`, `scrollDepth` and `engagementTime`.
     * - `dimensions[]`: one row per dimension value, ranked by visitors, with `value` set and `date` null.
     * - `interval`: one row per time bucket in chronological order, with `date` set and `value` null.
     *
     * `pageviews` is carried by the flat aggregate and by `interval`, but not by a breakdown.
     *
     * `userId` and `users` cover identified traffic only: events sent with an API key's `userId`, or from a signed-in session on a property with `identifyUsers` on. A `userId` breakdown leaves out anonymous events; returned values are the project's user IDs.
     *
     * Custom event props: `dimensions[]=props` ranks the prop keys seen in the window, and adding `propKey` ranks the values of that one key. `queries[]` filters on a prop's value with the `props.<key>` attribute, e.g. `equal("props.plan", ["pro"])`.
     *
     * Combining `dimensions[]` with `interval` is not supported yet. `queries[]` filters the underlying events using standard Utopia query syntax.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @param {string[]} queries - Up to 10 filter queries in Utopia syntax. Allowed attributes: country, region, city, browser, browserVersion, operatingSystem, operatingSystemVersion, device, screenSize, referrerSource, channel, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, page, hostname, trafficType, botName, botCategory, userId, eventName, and `props.<key>` for a custom prop. page, userId, eventName and `props.<key>` are only accepted alongside `interval`, or with a breakdown on a dimension other than entryPage, exitPage. Allowed methods: equal, notEqual, contains, startsWith, endsWith. Example: `queries[]=equal("country", ["US"])`.
     * @param {AnalyticsInterval} interval - Time bucket size. Omit (null) for a flat aggregate over the whole window. Allowed: 1h, 1d, 1w, 1m.
     * @param {AnalyticsDimension[]} dimensions - Dimension to break the metrics down by. One at most for now; the parameter is a list so that cap can be raised without a breaking change. Allowed: country, region, city, browser, browserVersion, operatingSystem, operatingSystemVersion, device, screenSize, referrerSource, channel, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, page, hostname, entryPage, exitPage, trafficType, botName, botCategory, userId, eventName, props.
     * @param {string} propKey - Custom prop key whose values to rank, with `dimensions[]=props`. Omit to rank the prop keys themselves.
     * @param {string} dateRange - Date range shorthand (e.g. 7d, 30d). Ignored for any bound you supply explicitly via startAt/endAt.
     * @param {string} startAt - Explicit window start in ISO 8601. Defaults to endAt minus dateRange.
     * @param {string} endAt - Explicit window end in ISO 8601. Defaults to the current time.
     * @param {number} limit - Maximum number of ranked values to return.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsMetricList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMetrics(
        propertyId: string,
        queries?: string[],
        interval?: AnalyticsInterval,
        dimensions?: AnalyticsDimension[],
        propKey?: string,
        dateRange?: string,
        startAt?: string,
        endAt?: string,
        limit?: number,
        total?: boolean,
    ): Promise<Models.AnalyticsMetricList>;
    listMetrics(
        paramsOrFirst:
            | {
                  propertyId: string;
                  queries?: string[];
                  interval?: AnalyticsInterval;
                  dimensions?: AnalyticsDimension[];
                  propKey?: string;
                  dateRange?: string;
                  startAt?: string;
                  endAt?: string;
                  limit?: number;
                  total?: boolean;
              }
            | string,
        ...rest: [
            string[]?,
            AnalyticsInterval?,
            AnalyticsDimension[]?,
            string?,
            string?,
            string?,
            string?,
            number?,
            boolean?,
        ]
    ): Promise<Models.AnalyticsMetricList> {
        let params: {
            propertyId: string;
            queries?: string[];
            interval?: AnalyticsInterval;
            dimensions?: AnalyticsDimension[];
            propKey?: string;
            dateRange?: string;
            startAt?: string;
            endAt?: string;
            limit?: number;
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                queries?: string[];
                interval?: AnalyticsInterval;
                dimensions?: AnalyticsDimension[];
                propKey?: string;
                dateRange?: string;
                startAt?: string;
                endAt?: string;
                limit?: number;
                total?: boolean;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                queries: rest[0] as string[],
                interval: rest[1] as AnalyticsInterval,
                dimensions: rest[2] as AnalyticsDimension[],
                propKey: rest[3] as string,
                dateRange: rest[4] as string,
                startAt: rest[5] as string,
                endAt: rest[6] as string,
                limit: rest[7] as number,
                total: rest[8] as boolean,
            };
        }

        const propertyId = params.propertyId;
        const queries = params.queries;
        const interval = params.interval;
        const dimensions = params.dimensions;
        const propKey = params.propKey;
        const dateRange = params.dateRange;
        const startAt = params.startAt;
        const endAt = params.endAt;
        const limit = params.limit;
        const total = params.total;
        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        const apiPath = '/analytics/properties/{propertyId}/metrics'.replace(
            '{propertyId}',
            encodePath(propertyId),
        );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof dimensions !== 'undefined') {
            apiPayload['dimensions'] = dimensions;
        }
        if (typeof propKey !== 'undefined') {
            apiPayload['propKey'] = propKey;
        }
        if (typeof dateRange !== 'undefined') {
            apiPayload['dateRange'] = dateRange;
        }
        if (typeof startAt !== 'undefined') {
            apiPayload['startAt'] = startAt;
        }
        if (typeof endAt !== 'undefined') {
            apiPayload['endAt'] = endAt;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'analyticsMetricList',
            models: {
                analyticsMetricList: {
                    defaults: {
                        total: 0,
                        metrics: [],
                    },
                    properties: {
                        metrics: {
                            items: 'analyticsMetric',
                        },
                    },
                },
                analyticsMetric: {
                    defaults: {
                        visitors: 0,
                        sessions: 0,
                        events: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }
}
