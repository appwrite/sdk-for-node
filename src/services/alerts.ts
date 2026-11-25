import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
    encodePath,
} from '../client';
import type { Models } from '../models';

export class Alerts {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of the alerts the project's monitors raised, open and resolved. An alert is created when a monitor starts firing and resolved when it recovers. Use queries to filter by monitor, status, type or resource, order by `$createdAt` for the latest first, and `Query.search('search', term)` to search alert and monitor IDs, names and metrics.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: monitorId, name, status, type, resourceType, resourceId, metric, resolvedAt, search
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AlertList>}
     */
    list(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.AlertList>;
    /**
     * Get a list of the alerts the project's monitors raised, open and resolved. An alert is created when a monitor starts firing and resolved when it recovers. Use queries to filter by monitor, status, type or resource, order by `$createdAt` for the latest first, and `Query.search('search', term)` to search alert and monitor IDs, names and metrics.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: monitorId, name, status, type, resourceType, resourceId, metric, resolvedAt, search
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AlertList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], total?: boolean): Promise<Models.AlertList>;
    list(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.AlertList> {
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
        const apiPath = '/alerts';
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
            root: 'alertList',
            models: {
                alertList: {
                    defaults: {
                        total: 0,
                        alerts: [],
                    },
                    properties: {
                        alerts: {
                            items: 'alert',
                        },
                    },
                },
                alert: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        monitorId: '',
                        name: '',
                        status: 'firing',
                        acknowledgedBy: '',
                        acknowledgedByName: '',
                        escalationId: '',
                        escalationStep: 0,
                        escalationRound: 0,
                        rules: [],
                        severity: 'warning',
                        threshold: 0,
                        value: 0,
                        peak: 0,
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        notifications: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get an alert by its unique ID: the monitor that raised it, when it fired and resolved, and the readings while it fired.
     *
     * @param {string} params.alertId - Alert ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Alert>}
     */
    get(params: { alertId: string }): Promise<Models.Alert>;
    /**
     * Get an alert by its unique ID: the monitor that raised it, when it fired and resolved, and the readings while it fired.
     *
     * @param {string} alertId - Alert ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Alert>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(alertId: string): Promise<Models.Alert>;
    get(paramsOrFirst: { alertId: string } | string): Promise<Models.Alert> {
        let params: { alertId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { alertId: string };
        } else {
            params = {
                alertId: paramsOrFirst as string,
            };
        }

        const alertId = params.alertId;
        if (typeof alertId === 'undefined' || alertId === '') {
            throw new AppwriteException(
                'Missing required parameter: "alertId"',
            );
        }
        const apiPath = '/alerts/{alertId}'.replace(
            '{alertId}',
            encodePath(alertId),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'alert',
            models: {
                alert: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        monitorId: '',
                        name: '',
                        status: 'firing',
                        acknowledgedBy: '',
                        acknowledgedByName: '',
                        escalationId: '',
                        escalationStep: 0,
                        escalationRound: 0,
                        rules: [],
                        severity: 'warning',
                        threshold: 0,
                        value: 0,
                        peak: 0,
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        notifications: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Acknowledge a firing alert, or undo that. Everyone who can read the alert sees who acknowledged it and when. The alert keeps firing until its monitor recovers; a resolved alert keeps its acknowledgement and cannot be changed.
     *
     * @param {string} params.alertId - Alert ID.
     * @param {boolean} params.acknowledged - Whether the alert is acknowledged. False undoes an acknowledgement.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Alert>}
     */
    update(params: {
        alertId: string;
        acknowledged: boolean;
    }): Promise<Models.Alert>;
    /**
     * Acknowledge a firing alert, or undo that. Everyone who can read the alert sees who acknowledged it and when. The alert keeps firing until its monitor recovers; a resolved alert keeps its acknowledgement and cannot be changed.
     *
     * @param {string} alertId - Alert ID.
     * @param {boolean} acknowledged - Whether the alert is acknowledged. False undoes an acknowledgement.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Alert>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(alertId: string, acknowledged: boolean): Promise<Models.Alert>;
    update(
        paramsOrFirst: { alertId: string; acknowledged: boolean } | string,
        ...rest: [boolean?]
    ): Promise<Models.Alert> {
        let params: { alertId: string; acknowledged: boolean };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                alertId: string;
                acknowledged: boolean;
            };
        } else {
            params = {
                alertId: paramsOrFirst as string,
                acknowledged: rest[0] as boolean,
            };
        }

        const alertId = params.alertId;
        const acknowledged = params.acknowledged;
        if (typeof alertId === 'undefined' || alertId === '') {
            throw new AppwriteException(
                'Missing required parameter: "alertId"',
            );
        }
        if (typeof acknowledged === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "acknowledged"',
            );
        }
        const apiPath = '/alerts/{alertId}'.replace(
            '{alertId}',
            encodePath(alertId),
        );
        const apiPayload: Payload = {};
        if (typeof acknowledged !== 'undefined') {
            apiPayload['acknowledged'] = acknowledged;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'alert',
            models: {
                alert: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        monitorId: '',
                        name: '',
                        status: 'firing',
                        acknowledgedBy: '',
                        acknowledgedByName: '',
                        escalationId: '',
                        escalationStep: 0,
                        escalationRound: 0,
                        rules: [],
                        severity: 'warning',
                        threshold: 0,
                        value: 0,
                        peak: 0,
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        notifications: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }
}
