import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
    encodePath,
} from '../client';
import type { Models } from '../models';

export class Activities {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all events for selected filters.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as userId, teamId, etc.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEventList>}
     */
    listEvents(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.ActivityEventList>;
    /**
     * List all events for selected filters.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as userId, teamId, etc.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEventList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listEvents(
        queries?: string[],
        total?: boolean,
    ): Promise<Models.ActivityEventList>;
    listEvents(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.ActivityEventList> {
        let params: { queries?: string[]; total?: boolean };

        if (
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
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
        const apiPath = '/activities/events';
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
            root: 'activityEventList',
            models: {
                activityEventList: {
                    defaults: {
                        total: 0,
                        events: [],
                    },
                    properties: {
                        events: {
                            items: 'activityEvent',
                        },
                    },
                },
                activityEvent: {
                    defaults: {
                        $id: '',
                        actorType: '',
                        actorId: '',
                        actorEmail: '',
                        actorName: '',
                        resourceParent: '',
                        resourceType: '',
                        resourceId: '',
                        resource: '',
                        event: '',
                        userAgent: '',
                        ip: '',
                        mode: '',
                        country: '',
                        continentCode: '',
                        city: '',
                        subdivisions: '',
                        isp: '',
                        autonomousSystemNumber: '',
                        autonomousSystemOrganization: '',
                        connectionType: '',
                        connectionUsageType: '',
                        connectionOrganization: '',
                        time: '',
                        projectId: '',
                        teamId: '',
                        hostname: '',
                        sdk: '',
                        sdkVersion: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get event by ID.
     *
     *
     * @param {string} params.eventId - Event ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEvent>}
     */
    getEvent(params: { eventId: string }): Promise<Models.ActivityEvent>;
    /**
     * Get event by ID.
     *
     *
     * @param {string} eventId - Event ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getEvent(eventId: string): Promise<Models.ActivityEvent>;
    getEvent(
        paramsOrFirst: { eventId: string } | string,
    ): Promise<Models.ActivityEvent> {
        let params: { eventId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { eventId: string };
        } else {
            params = {
                eventId: paramsOrFirst as string,
            };
        }

        const eventId = params.eventId;
        if (typeof eventId === 'undefined' || eventId === '') {
            throw new AppwriteException(
                'Missing required parameter: "eventId"',
            );
        }
        const apiPath = '/activities/events/{eventId}'.replace(
            '{eventId}',
            encodePath(eventId),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'activityEvent',
            models: {
                activityEvent: {
                    defaults: {
                        $id: '',
                        actorType: '',
                        actorId: '',
                        actorEmail: '',
                        actorName: '',
                        resourceParent: '',
                        resourceType: '',
                        resourceId: '',
                        resource: '',
                        event: '',
                        userAgent: '',
                        ip: '',
                        mode: '',
                        country: '',
                        continentCode: '',
                        city: '',
                        subdivisions: '',
                        isp: '',
                        autonomousSystemNumber: '',
                        autonomousSystemOrganization: '',
                        connectionType: '',
                        connectionUsageType: '',
                        connectionOrganization: '',
                        time: '',
                        projectId: '',
                        teamId: '',
                        hostname: '',
                        sdk: '',
                        sdkVersion: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }
}
