import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
    encodePath,
} from '../client';
import type { Models } from '../models';

import { MonitorRecord } from '../enums/monitor-record';
import { MonitorSeverity } from '../enums/monitor-severity';
import { MonitorMethod } from '../enums/monitor-method';
import { MonitorTlsMode } from '../enums/monitor-tls-mode';
export class Monitors {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of the project's monitors of every type. Use queries to filter by type, resource, metric or status, and `Query.search('search', term)` to search monitor IDs, names, metrics and resources.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, type, resourceType, resourceId, metric, enabled, severity, escalationId, status, evaluatedAt, triggeredAt, search
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MonitorList>}
     */
    list(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.MonitorList>;
    /**
     * Get a list of the project's monitors of every type. Use queries to filter by type, resource, metric or status, and `Query.search('search', term)` to search monitor IDs, names, metrics and resources.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, type, resourceType, resourceId, metric, enabled, severity, escalationId, status, evaluatedAt, triggeredAt, search
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MonitorList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], total?: boolean): Promise<Models.MonitorList>;
    list(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.MonitorList> {
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
        const apiPath = '/monitors';
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
            root: 'monitorList',
            models: {
                monitorList: {
                    defaults: {
                        total: 0,
                        monitors: [],
                    },
                    properties: {
                        monitors: {
                            items: 'monitor',
                        },
                    },
                },
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a DNS monitor. It asks a resolver for a domain's records of one type on its own interval, and opens an alert when the resolver fails, or when its rules match the answers, by default when there is no such record. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when a check passes again, for project webhooks, functions and realtime, and notifies the organization's members by email and in the console.
     *
     * @param {string} params.monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Monitor name. Max length: 128 chars.
     * @param {string} params.domain - Domain to query, such as `example.com`.
     * @param {MonitorRecord} params.record - Record type to query: `A`, `AAAA`, `CNAME`, `MX`, `TXT` or `NS`. Defaults to `A`.
     * @param {string} params.resolver - Resolver to query, as an IP address with an optional port, such as `1.1.1.1` or `[2606:4700:4700::1111]:53`. Defaults to the server's DNS resolver.
     * @param {string[]} params.rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `answer` (the first record returned, compared lowercased without the trailing dot), `answers` (number of records returned), `latency` (milliseconds the check took). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. `answer` takes `equal` and `notEqual` only. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires when the resolver returns no answers.
     * @param {number | null} params.interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Defaults to 60, or to the shortest interval your plan allows when that is longer. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number} params.timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} params.enabled - Set to false to create the monitor without checking it.
     * @param {string[]} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    createDnsMonitor(params: {
        monitorId: string;
        name: string;
        domain: string;
        record?: MonitorRecord;
        resolver?: string;
        rules?: string[];
        interval?: number | null;
        timeout?: number;
        cooldown?: number;
        enabled?: boolean;
        notify?: string[];
        severity?: MonitorSeverity;
        escalationId?: string;
    }): Promise<Models.Monitor>;
    /**
     * Create a DNS monitor. It asks a resolver for a domain's records of one type on its own interval, and opens an alert when the resolver fails, or when its rules match the answers, by default when there is no such record. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when a check passes again, for project webhooks, functions and realtime, and notifies the organization's members by email and in the console.
     *
     * @param {string} monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Monitor name. Max length: 128 chars.
     * @param {string} domain - Domain to query, such as `example.com`.
     * @param {MonitorRecord} record - Record type to query: `A`, `AAAA`, `CNAME`, `MX`, `TXT` or `NS`. Defaults to `A`.
     * @param {string} resolver - Resolver to query, as an IP address with an optional port, such as `1.1.1.1` or `[2606:4700:4700::1111]:53`. Defaults to the server's DNS resolver.
     * @param {string[]} rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `answer` (the first record returned, compared lowercased without the trailing dot), `answers` (number of records returned), `latency` (milliseconds the check took). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. `answer` takes `equal` and `notEqual` only. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires when the resolver returns no answers.
     * @param {number | null} interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Defaults to 60, or to the shortest interval your plan allows when that is longer. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number} timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} enabled - Set to false to create the monitor without checking it.
     * @param {string[]} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDnsMonitor(
        monitorId: string,
        name: string,
        domain: string,
        record?: MonitorRecord,
        resolver?: string,
        rules?: string[],
        interval?: number | null,
        timeout?: number,
        cooldown?: number,
        enabled?: boolean,
        notify?: string[],
        severity?: MonitorSeverity,
        escalationId?: string,
    ): Promise<Models.Monitor>;
    createDnsMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name: string;
                  domain: string;
                  record?: MonitorRecord;
                  resolver?: string;
                  rules?: string[];
                  interval?: number | null;
                  timeout?: number;
                  cooldown?: number;
                  enabled?: boolean;
                  notify?: string[];
                  severity?: MonitorSeverity;
                  escalationId?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            MonitorRecord?,
            string?,
            string[]?,
            (number | null)?,
            number?,
            number?,
            boolean?,
            string[]?,
            MonitorSeverity?,
            string?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name: string;
            domain: string;
            record?: MonitorRecord;
            resolver?: string;
            rules?: string[];
            interval?: number | null;
            timeout?: number;
            cooldown?: number;
            enabled?: boolean;
            notify?: string[];
            severity?: MonitorSeverity;
            escalationId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name: string;
                domain: string;
                record?: MonitorRecord;
                resolver?: string;
                rules?: string[];
                interval?: number | null;
                timeout?: number;
                cooldown?: number;
                enabled?: boolean;
                notify?: string[];
                severity?: MonitorSeverity;
                escalationId?: string;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string,
                domain: rest[1] as string,
                record: rest[2] as MonitorRecord,
                resolver: rest[3] as string,
                rules: rest[4] as string[],
                interval: rest[5] as number | null,
                timeout: rest[6] as number,
                cooldown: rest[7] as number,
                enabled: rest[8] as boolean,
                notify: rest[9] as string[],
                severity: rest[10] as MonitorSeverity,
                escalationId: rest[11] as string,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const domain = params.domain;
        const record = params.record;
        const resolver = params.resolver;
        const rules = params.rules;
        const interval = params.interval;
        const timeout = params.timeout;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        const apiPath = '/monitors/dns';
        const apiPayload: Payload = {};
        if (typeof monitorId !== 'undefined') {
            apiPayload['monitorId'] = monitorId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof record !== 'undefined') {
            apiPayload['record'] = record;
        }
        if (typeof resolver !== 'undefined') {
            apiPayload['resolver'] = resolver;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof timeout !== 'undefined') {
            apiPayload['timeout'] = timeout;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a DNS monitor by its unique ID. Only the parameters passed change; the monitor's state, its last check and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} params.monitorId - Monitor ID.
     * @param {string | null} params.name - Monitor name. Max length: 128 chars.
     * @param {string | null} params.domain - Domain to query, such as `example.com`.
     * @param {MonitorRecord | null} params.record - Record type to query: `A`, `AAAA`, `CNAME`, `MX`, `TXT` or `NS`.
     * @param {string | null} params.resolver - Resolver to query, as an IP address with an optional port, such as `1.1.1.1` or `[2606:4700:4700::1111]:53`. Pass an empty string to use the server's DNS resolver.
     * @param {string[] | null} params.rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `answer` (the first record returned, compared lowercased without the trailing dot), `answers` (number of records returned), `latency` (milliseconds the check took). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. `answer` takes `equal` and `notEqual` only. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires when the resolver returns no answers. Replaces the current rules; an empty list restores the defaults.
     * @param {number | null} params.interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number | null} params.timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number | null} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} params.enabled - Whether the monitor is checked.
     * @param {string[] | null} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity | null} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    updateDnsMonitor(params: {
        monitorId: string;
        name?: string | null;
        domain?: string | null;
        record?: MonitorRecord | null;
        resolver?: string | null;
        rules?: string[] | null;
        interval?: number | null;
        timeout?: number | null;
        cooldown?: number | null;
        enabled?: boolean | null;
        notify?: string[] | null;
        severity?: MonitorSeverity | null;
        escalationId?: string;
    }): Promise<Models.Monitor>;
    /**
     * Update a DNS monitor by its unique ID. Only the parameters passed change; the monitor's state, its last check and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} monitorId - Monitor ID.
     * @param {string | null} name - Monitor name. Max length: 128 chars.
     * @param {string | null} domain - Domain to query, such as `example.com`.
     * @param {MonitorRecord | null} record - Record type to query: `A`, `AAAA`, `CNAME`, `MX`, `TXT` or `NS`.
     * @param {string | null} resolver - Resolver to query, as an IP address with an optional port, such as `1.1.1.1` or `[2606:4700:4700::1111]:53`. Pass an empty string to use the server's DNS resolver.
     * @param {string[] | null} rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `answer` (the first record returned, compared lowercased without the trailing dot), `answers` (number of records returned), `latency` (milliseconds the check took). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. `answer` takes `equal` and `notEqual` only. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires when the resolver returns no answers. Replaces the current rules; an empty list restores the defaults.
     * @param {number | null} interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number | null} timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number | null} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} enabled - Whether the monitor is checked.
     * @param {string[] | null} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity | null} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDnsMonitor(
        monitorId: string,
        name?: string | null,
        domain?: string | null,
        record?: MonitorRecord | null,
        resolver?: string | null,
        rules?: string[] | null,
        interval?: number | null,
        timeout?: number | null,
        cooldown?: number | null,
        enabled?: boolean | null,
        notify?: string[] | null,
        severity?: MonitorSeverity | null,
        escalationId?: string,
    ): Promise<Models.Monitor>;
    updateDnsMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name?: string | null;
                  domain?: string | null;
                  record?: MonitorRecord | null;
                  resolver?: string | null;
                  rules?: string[] | null;
                  interval?: number | null;
                  timeout?: number | null;
                  cooldown?: number | null;
                  enabled?: boolean | null;
                  notify?: string[] | null;
                  severity?: MonitorSeverity | null;
                  escalationId?: string;
              }
            | string,
        ...rest: [
            (string | null)?,
            (string | null)?,
            (MonitorRecord | null)?,
            (string | null)?,
            (string[] | null)?,
            (number | null)?,
            (number | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
            (MonitorSeverity | null)?,
            string?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name?: string | null;
            domain?: string | null;
            record?: MonitorRecord | null;
            resolver?: string | null;
            rules?: string[] | null;
            interval?: number | null;
            timeout?: number | null;
            cooldown?: number | null;
            enabled?: boolean | null;
            notify?: string[] | null;
            severity?: MonitorSeverity | null;
            escalationId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name?: string | null;
                domain?: string | null;
                record?: MonitorRecord | null;
                resolver?: string | null;
                rules?: string[] | null;
                interval?: number | null;
                timeout?: number | null;
                cooldown?: number | null;
                enabled?: boolean | null;
                notify?: string[] | null;
                severity?: MonitorSeverity | null;
                escalationId?: string;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string | null,
                domain: rest[1] as string | null,
                record: rest[2] as MonitorRecord | null,
                resolver: rest[3] as string | null,
                rules: rest[4] as string[] | null,
                interval: rest[5] as number | null,
                timeout: rest[6] as number | null,
                cooldown: rest[7] as number | null,
                enabled: rest[8] as boolean | null,
                notify: rest[9] as string[] | null,
                severity: rest[10] as MonitorSeverity | null,
                escalationId: rest[11] as string,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const domain = params.domain;
        const record = params.record;
        const resolver = params.resolver;
        const rules = params.rules;
        const interval = params.interval;
        const timeout = params.timeout;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined' || monitorId === '') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        const apiPath = '/monitors/dns/{monitorId}'.replace(
            '{monitorId}',
            encodePath(monitorId),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof record !== 'undefined') {
            apiPayload['record'] = record;
        }
        if (typeof resolver !== 'undefined') {
            apiPayload['resolver'] = resolver;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof timeout !== 'undefined') {
            apiPayload['timeout'] = timeout;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create an HTTP monitor. It requests a URL on its own interval, following redirects, and opens an alert when the request fails or when its rules match the response, by default a status outside 2xx or the certificate of an HTTPS URL about to expire. The response body is discarded as it arrives. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when a check passes again, for project webhooks, functions and realtime, and notifies the organization's members by email and in the console.
     *
     * @param {string} params.monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Monitor name. Max length: 128 chars.
     * @param {string} params.url - URL to request, with an `http` or `https` scheme.
     * @param {MonitorMethod} params.method - HTTP method to request the URL with: `GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE` or `OPTIONS`. Defaults to `GET`.
     * @param {object} params.headers - HTTP headers to send, as an object of header names and values. Each name must be a valid HTTP header name.
     * @param {string} params.body - Request body to send. Max length: 16384 chars.
     * @param {string[]} params.rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `statusCode` (HTTP status), `latency` (milliseconds the check took), `certificateDays` (whole days until the certificate expires), `certificateLifetime` (percent of the certificate's lifetime left). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on a status code outside 200 to 299, or on a certificate with fewer than 14 days and less than 25% of its lifetime left.
     * @param {number | null} params.interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Defaults to 60, or to the shortest interval your plan allows when that is longer. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number} params.timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} params.enabled - Set to false to create the monitor without checking it.
     * @param {string[]} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    createHttpMonitor(params: {
        monitorId: string;
        name: string;
        url: string;
        method?: MonitorMethod;
        headers?: object;
        body?: string;
        rules?: string[];
        interval?: number | null;
        timeout?: number;
        cooldown?: number;
        enabled?: boolean;
        notify?: string[];
        severity?: MonitorSeverity;
        escalationId?: string;
    }): Promise<Models.Monitor>;
    /**
     * Create an HTTP monitor. It requests a URL on its own interval, following redirects, and opens an alert when the request fails or when its rules match the response, by default a status outside 2xx or the certificate of an HTTPS URL about to expire. The response body is discarded as it arrives. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when a check passes again, for project webhooks, functions and realtime, and notifies the organization's members by email and in the console.
     *
     * @param {string} monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Monitor name. Max length: 128 chars.
     * @param {string} url - URL to request, with an `http` or `https` scheme.
     * @param {MonitorMethod} method - HTTP method to request the URL with: `GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE` or `OPTIONS`. Defaults to `GET`.
     * @param {object} headers - HTTP headers to send, as an object of header names and values. Each name must be a valid HTTP header name.
     * @param {string} body - Request body to send. Max length: 16384 chars.
     * @param {string[]} rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `statusCode` (HTTP status), `latency` (milliseconds the check took), `certificateDays` (whole days until the certificate expires), `certificateLifetime` (percent of the certificate's lifetime left). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on a status code outside 200 to 299, or on a certificate with fewer than 14 days and less than 25% of its lifetime left.
     * @param {number | null} interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Defaults to 60, or to the shortest interval your plan allows when that is longer. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number} timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} enabled - Set to false to create the monitor without checking it.
     * @param {string[]} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createHttpMonitor(
        monitorId: string,
        name: string,
        url: string,
        method?: MonitorMethod,
        headers?: object,
        body?: string,
        rules?: string[],
        interval?: number | null,
        timeout?: number,
        cooldown?: number,
        enabled?: boolean,
        notify?: string[],
        severity?: MonitorSeverity,
        escalationId?: string,
    ): Promise<Models.Monitor>;
    createHttpMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name: string;
                  url: string;
                  method?: MonitorMethod;
                  headers?: object;
                  body?: string;
                  rules?: string[];
                  interval?: number | null;
                  timeout?: number;
                  cooldown?: number;
                  enabled?: boolean;
                  notify?: string[];
                  severity?: MonitorSeverity;
                  escalationId?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            MonitorMethod?,
            object?,
            string?,
            string[]?,
            (number | null)?,
            number?,
            number?,
            boolean?,
            string[]?,
            MonitorSeverity?,
            string?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name: string;
            url: string;
            method?: MonitorMethod;
            headers?: object;
            body?: string;
            rules?: string[];
            interval?: number | null;
            timeout?: number;
            cooldown?: number;
            enabled?: boolean;
            notify?: string[];
            severity?: MonitorSeverity;
            escalationId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name: string;
                url: string;
                method?: MonitorMethod;
                headers?: object;
                body?: string;
                rules?: string[];
                interval?: number | null;
                timeout?: number;
                cooldown?: number;
                enabled?: boolean;
                notify?: string[];
                severity?: MonitorSeverity;
                escalationId?: string;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string,
                url: rest[1] as string,
                method: rest[2] as MonitorMethod,
                headers: rest[3] as object,
                body: rest[4] as string,
                rules: rest[5] as string[],
                interval: rest[6] as number | null,
                timeout: rest[7] as number,
                cooldown: rest[8] as number,
                enabled: rest[9] as boolean,
                notify: rest[10] as string[],
                severity: rest[11] as MonitorSeverity,
                escalationId: rest[12] as string,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const url = params.url;
        const method = params.method;
        const headers = params.headers;
        const body = params.body;
        const rules = params.rules;
        const interval = params.interval;
        const timeout = params.timeout;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }
        const apiPath = '/monitors/http';
        const apiPayload: Payload = {};
        if (typeof monitorId !== 'undefined') {
            apiPayload['monitorId'] = monitorId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
        }
        if (typeof method !== 'undefined') {
            apiPayload['method'] = method;
        }
        if (typeof headers !== 'undefined') {
            apiPayload['headers'] = headers;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof timeout !== 'undefined') {
            apiPayload['timeout'] = timeout;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update an HTTP monitor by its unique ID. Only the parameters passed change; the monitor's state, its last check and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} params.monitorId - Monitor ID.
     * @param {string | null} params.name - Monitor name. Max length: 128 chars.
     * @param {string | null} params.url - URL to request, with an `http` or `https` scheme.
     * @param {MonitorMethod | null} params.method - HTTP method to request the URL with: `GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE` or `OPTIONS`.
     * @param {object | null} params.headers - HTTP headers to send, as an object of header names and values. Each name must be a valid HTTP header name.
     * @param {string | null} params.body - Request body to send. Max length: 16384 chars.
     * @param {string[] | null} params.rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `statusCode` (HTTP status), `latency` (milliseconds the check took), `certificateDays` (whole days until the certificate expires), `certificateLifetime` (percent of the certificate's lifetime left). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on a status code outside 200 to 299, or on a certificate with fewer than 14 days and less than 25% of its lifetime left. Replaces the current rules; an empty list restores the defaults.
     * @param {number | null} params.interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number | null} params.timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number | null} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} params.enabled - Whether the monitor is checked.
     * @param {string[] | null} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity | null} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    updateHttpMonitor(params: {
        monitorId: string;
        name?: string | null;
        url?: string | null;
        method?: MonitorMethod | null;
        headers?: object | null;
        body?: string | null;
        rules?: string[] | null;
        interval?: number | null;
        timeout?: number | null;
        cooldown?: number | null;
        enabled?: boolean | null;
        notify?: string[] | null;
        severity?: MonitorSeverity | null;
        escalationId?: string;
    }): Promise<Models.Monitor>;
    /**
     * Update an HTTP monitor by its unique ID. Only the parameters passed change; the monitor's state, its last check and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} monitorId - Monitor ID.
     * @param {string | null} name - Monitor name. Max length: 128 chars.
     * @param {string | null} url - URL to request, with an `http` or `https` scheme.
     * @param {MonitorMethod | null} method - HTTP method to request the URL with: `GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE` or `OPTIONS`.
     * @param {object | null} headers - HTTP headers to send, as an object of header names and values. Each name must be a valid HTTP header name.
     * @param {string | null} body - Request body to send. Max length: 16384 chars.
     * @param {string[] | null} rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `statusCode` (HTTP status), `latency` (milliseconds the check took), `certificateDays` (whole days until the certificate expires), `certificateLifetime` (percent of the certificate's lifetime left). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on a status code outside 200 to 299, or on a certificate with fewer than 14 days and less than 25% of its lifetime left. Replaces the current rules; an empty list restores the defaults.
     * @param {number | null} interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number | null} timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number | null} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} enabled - Whether the monitor is checked.
     * @param {string[] | null} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity | null} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateHttpMonitor(
        monitorId: string,
        name?: string | null,
        url?: string | null,
        method?: MonitorMethod | null,
        headers?: object | null,
        body?: string | null,
        rules?: string[] | null,
        interval?: number | null,
        timeout?: number | null,
        cooldown?: number | null,
        enabled?: boolean | null,
        notify?: string[] | null,
        severity?: MonitorSeverity | null,
        escalationId?: string,
    ): Promise<Models.Monitor>;
    updateHttpMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name?: string | null;
                  url?: string | null;
                  method?: MonitorMethod | null;
                  headers?: object | null;
                  body?: string | null;
                  rules?: string[] | null;
                  interval?: number | null;
                  timeout?: number | null;
                  cooldown?: number | null;
                  enabled?: boolean | null;
                  notify?: string[] | null;
                  severity?: MonitorSeverity | null;
                  escalationId?: string;
              }
            | string,
        ...rest: [
            (string | null)?,
            (string | null)?,
            (MonitorMethod | null)?,
            (object | null)?,
            (string | null)?,
            (string[] | null)?,
            (number | null)?,
            (number | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
            (MonitorSeverity | null)?,
            string?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name?: string | null;
            url?: string | null;
            method?: MonitorMethod | null;
            headers?: object | null;
            body?: string | null;
            rules?: string[] | null;
            interval?: number | null;
            timeout?: number | null;
            cooldown?: number | null;
            enabled?: boolean | null;
            notify?: string[] | null;
            severity?: MonitorSeverity | null;
            escalationId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name?: string | null;
                url?: string | null;
                method?: MonitorMethod | null;
                headers?: object | null;
                body?: string | null;
                rules?: string[] | null;
                interval?: number | null;
                timeout?: number | null;
                cooldown?: number | null;
                enabled?: boolean | null;
                notify?: string[] | null;
                severity?: MonitorSeverity | null;
                escalationId?: string;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string | null,
                url: rest[1] as string | null,
                method: rest[2] as MonitorMethod | null,
                headers: rest[3] as object | null,
                body: rest[4] as string | null,
                rules: rest[5] as string[] | null,
                interval: rest[6] as number | null,
                timeout: rest[7] as number | null,
                cooldown: rest[8] as number | null,
                enabled: rest[9] as boolean | null,
                notify: rest[10] as string[] | null,
                severity: rest[11] as MonitorSeverity | null,
                escalationId: rest[12] as string,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const url = params.url;
        const method = params.method;
        const headers = params.headers;
        const body = params.body;
        const rules = params.rules;
        const interval = params.interval;
        const timeout = params.timeout;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined' || monitorId === '') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        const apiPath = '/monitors/http/{monitorId}'.replace(
            '{monitorId}',
            encodePath(monitorId),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
        }
        if (typeof method !== 'undefined') {
            apiPayload['method'] = method;
        }
        if (typeof headers !== 'undefined') {
            apiPayload['headers'] = headers;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof timeout !== 'undefined') {
            apiPayload['timeout'] = timeout;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create an SMTP monitor. It reads a mail server's greeting, sends `EHLO` and, as its TLS mode asks, upgrades with `STARTTLS` or speaks TLS from the start, on its own interval. It opens an alert when the server cannot be reached, refuses the session or fails the TLS handshake, or when its rules match. It never authenticates or sends mail. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when a check passes again, for project webhooks, functions and realtime, and notifies the organization's members by email and in the console.
     *
     * @param {string} params.monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Monitor name. Max length: 128 chars.
     * @param {string} params.host - Hostname or IP address of the mail server.
     * @param {number} params.port - Port to connect to, such as 25, 465 or 587.
     * @param {MonitorTlsMode} params.tlsMode - TLS mode: `auto` (`implicit` on port 465, `starttls` on 587 and `none` otherwise), `none`, `starttls` (upgrade after the greeting, and fail when the server does not offer it) or `implicit` (TLS from the first byte). Defaults to `auto`.
     * @param {string[]} params.rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `code` (SMTP reply code), `latency` (milliseconds the check took), `certificateDays` (whole days until the certificate expires), `certificateLifetime` (percent of the certificate's lifetime left). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on transport failures only.
     * @param {number | null} params.interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Defaults to 60, or to the shortest interval your plan allows when that is longer. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number} params.timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} params.enabled - Set to false to create the monitor without checking it.
     * @param {string[]} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    createSmtpMonitor(params: {
        monitorId: string;
        name: string;
        host: string;
        port: number;
        tlsMode?: MonitorTlsMode;
        rules?: string[];
        interval?: number | null;
        timeout?: number;
        cooldown?: number;
        enabled?: boolean;
        notify?: string[];
        severity?: MonitorSeverity;
        escalationId?: string;
    }): Promise<Models.Monitor>;
    /**
     * Create an SMTP monitor. It reads a mail server's greeting, sends `EHLO` and, as its TLS mode asks, upgrades with `STARTTLS` or speaks TLS from the start, on its own interval. It opens an alert when the server cannot be reached, refuses the session or fails the TLS handshake, or when its rules match. It never authenticates or sends mail. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when a check passes again, for project webhooks, functions and realtime, and notifies the organization's members by email and in the console.
     *
     * @param {string} monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Monitor name. Max length: 128 chars.
     * @param {string} host - Hostname or IP address of the mail server.
     * @param {number} port - Port to connect to, such as 25, 465 or 587.
     * @param {MonitorTlsMode} tlsMode - TLS mode: `auto` (`implicit` on port 465, `starttls` on 587 and `none` otherwise), `none`, `starttls` (upgrade after the greeting, and fail when the server does not offer it) or `implicit` (TLS from the first byte). Defaults to `auto`.
     * @param {string[]} rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `code` (SMTP reply code), `latency` (milliseconds the check took), `certificateDays` (whole days until the certificate expires), `certificateLifetime` (percent of the certificate's lifetime left). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on transport failures only.
     * @param {number | null} interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Defaults to 60, or to the shortest interval your plan allows when that is longer. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number} timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} enabled - Set to false to create the monitor without checking it.
     * @param {string[]} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSmtpMonitor(
        monitorId: string,
        name: string,
        host: string,
        port: number,
        tlsMode?: MonitorTlsMode,
        rules?: string[],
        interval?: number | null,
        timeout?: number,
        cooldown?: number,
        enabled?: boolean,
        notify?: string[],
        severity?: MonitorSeverity,
        escalationId?: string,
    ): Promise<Models.Monitor>;
    createSmtpMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name: string;
                  host: string;
                  port: number;
                  tlsMode?: MonitorTlsMode;
                  rules?: string[];
                  interval?: number | null;
                  timeout?: number;
                  cooldown?: number;
                  enabled?: boolean;
                  notify?: string[];
                  severity?: MonitorSeverity;
                  escalationId?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            number?,
            MonitorTlsMode?,
            string[]?,
            (number | null)?,
            number?,
            number?,
            boolean?,
            string[]?,
            MonitorSeverity?,
            string?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name: string;
            host: string;
            port: number;
            tlsMode?: MonitorTlsMode;
            rules?: string[];
            interval?: number | null;
            timeout?: number;
            cooldown?: number;
            enabled?: boolean;
            notify?: string[];
            severity?: MonitorSeverity;
            escalationId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name: string;
                host: string;
                port: number;
                tlsMode?: MonitorTlsMode;
                rules?: string[];
                interval?: number | null;
                timeout?: number;
                cooldown?: number;
                enabled?: boolean;
                notify?: string[];
                severity?: MonitorSeverity;
                escalationId?: string;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string,
                host: rest[1] as string,
                port: rest[2] as number,
                tlsMode: rest[3] as MonitorTlsMode,
                rules: rest[4] as string[],
                interval: rest[5] as number | null,
                timeout: rest[6] as number,
                cooldown: rest[7] as number,
                enabled: rest[8] as boolean,
                notify: rest[9] as string[],
                severity: rest[10] as MonitorSeverity,
                escalationId: rest[11] as string,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const host = params.host;
        const port = params.port;
        const tlsMode = params.tlsMode;
        const rules = params.rules;
        const interval = params.interval;
        const timeout = params.timeout;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof host === 'undefined') {
            throw new AppwriteException('Missing required parameter: "host"');
        }
        if (typeof port === 'undefined') {
            throw new AppwriteException('Missing required parameter: "port"');
        }
        const apiPath = '/monitors/smtp';
        const apiPayload: Payload = {};
        if (typeof monitorId !== 'undefined') {
            apiPayload['monitorId'] = monitorId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            apiPayload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            apiPayload['port'] = port;
        }
        if (typeof tlsMode !== 'undefined') {
            apiPayload['tlsMode'] = tlsMode;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof timeout !== 'undefined') {
            apiPayload['timeout'] = timeout;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update an SMTP monitor by its unique ID. Only the parameters passed change; the monitor's state, its last check and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} params.monitorId - Monitor ID.
     * @param {string | null} params.name - Monitor name. Max length: 128 chars.
     * @param {string} params.host - Hostname or IP address of the mail server.
     * @param {number | null} params.port - Port to connect to, such as 25, 465 or 587.
     * @param {MonitorTlsMode | null} params.tlsMode - TLS mode: `auto` (`implicit` on port 465, `starttls` on 587 and `none` otherwise), `none`, `starttls` (upgrade after the greeting, and fail when the server does not offer it) or `implicit` (TLS from the first byte).
     * @param {string[] | null} params.rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `code` (SMTP reply code), `latency` (milliseconds the check took), `certificateDays` (whole days until the certificate expires), `certificateLifetime` (percent of the certificate's lifetime left). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on transport failures only. Replaces the current rules; an empty list removes them.
     * @param {number | null} params.interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number | null} params.timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number | null} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} params.enabled - Whether the monitor is checked.
     * @param {string[] | null} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity | null} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    updateSmtpMonitor(params: {
        monitorId: string;
        name?: string | null;
        host?: string;
        port?: number | null;
        tlsMode?: MonitorTlsMode | null;
        rules?: string[] | null;
        interval?: number | null;
        timeout?: number | null;
        cooldown?: number | null;
        enabled?: boolean | null;
        notify?: string[] | null;
        severity?: MonitorSeverity | null;
        escalationId?: string;
    }): Promise<Models.Monitor>;
    /**
     * Update an SMTP monitor by its unique ID. Only the parameters passed change; the monitor's state, its last check and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} monitorId - Monitor ID.
     * @param {string | null} name - Monitor name. Max length: 128 chars.
     * @param {string} host - Hostname or IP address of the mail server.
     * @param {number | null} port - Port to connect to, such as 25, 465 or 587.
     * @param {MonitorTlsMode | null} tlsMode - TLS mode: `auto` (`implicit` on port 465, `starttls` on 587 and `none` otherwise), `none`, `starttls` (upgrade after the greeting, and fail when the server does not offer it) or `implicit` (TLS from the first byte).
     * @param {string[] | null} rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `code` (SMTP reply code), `latency` (milliseconds the check took), `certificateDays` (whole days until the certificate expires), `certificateLifetime` (percent of the certificate's lifetime left). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on transport failures only. Replaces the current rules; an empty list removes them.
     * @param {number | null} interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number | null} timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number | null} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} enabled - Whether the monitor is checked.
     * @param {string[] | null} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity | null} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSmtpMonitor(
        monitorId: string,
        name?: string | null,
        host?: string,
        port?: number | null,
        tlsMode?: MonitorTlsMode | null,
        rules?: string[] | null,
        interval?: number | null,
        timeout?: number | null,
        cooldown?: number | null,
        enabled?: boolean | null,
        notify?: string[] | null,
        severity?: MonitorSeverity | null,
        escalationId?: string,
    ): Promise<Models.Monitor>;
    updateSmtpMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name?: string | null;
                  host?: string;
                  port?: number | null;
                  tlsMode?: MonitorTlsMode | null;
                  rules?: string[] | null;
                  interval?: number | null;
                  timeout?: number | null;
                  cooldown?: number | null;
                  enabled?: boolean | null;
                  notify?: string[] | null;
                  severity?: MonitorSeverity | null;
                  escalationId?: string;
              }
            | string,
        ...rest: [
            (string | null)?,
            string?,
            (number | null)?,
            (MonitorTlsMode | null)?,
            (string[] | null)?,
            (number | null)?,
            (number | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
            (MonitorSeverity | null)?,
            string?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name?: string | null;
            host?: string;
            port?: number | null;
            tlsMode?: MonitorTlsMode | null;
            rules?: string[] | null;
            interval?: number | null;
            timeout?: number | null;
            cooldown?: number | null;
            enabled?: boolean | null;
            notify?: string[] | null;
            severity?: MonitorSeverity | null;
            escalationId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name?: string | null;
                host?: string;
                port?: number | null;
                tlsMode?: MonitorTlsMode | null;
                rules?: string[] | null;
                interval?: number | null;
                timeout?: number | null;
                cooldown?: number | null;
                enabled?: boolean | null;
                notify?: string[] | null;
                severity?: MonitorSeverity | null;
                escalationId?: string;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string | null,
                host: rest[1] as string,
                port: rest[2] as number | null,
                tlsMode: rest[3] as MonitorTlsMode | null,
                rules: rest[4] as string[] | null,
                interval: rest[5] as number | null,
                timeout: rest[6] as number | null,
                cooldown: rest[7] as number | null,
                enabled: rest[8] as boolean | null,
                notify: rest[9] as string[] | null,
                severity: rest[10] as MonitorSeverity | null,
                escalationId: rest[11] as string,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const host = params.host;
        const port = params.port;
        const tlsMode = params.tlsMode;
        const rules = params.rules;
        const interval = params.interval;
        const timeout = params.timeout;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined' || monitorId === '') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        const apiPath = '/monitors/smtp/{monitorId}'.replace(
            '{monitorId}',
            encodePath(monitorId),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            apiPayload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            apiPayload['port'] = port;
        }
        if (typeof tlsMode !== 'undefined') {
            apiPayload['tlsMode'] = tlsMode;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof timeout !== 'undefined') {
            apiPayload['timeout'] = timeout;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a TCP monitor. It opens a connection to a host and port on its own interval and closes it at once, and opens an alert when the connection cannot be made, or when its rules match. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when a check passes again, for project webhooks, functions and realtime, and notifies the organization's members by email and in the console.
     *
     * @param {string} params.monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Monitor name. Max length: 128 chars.
     * @param {string} params.host - Hostname or IP address to connect to.
     * @param {number} params.port - Port to connect to.
     * @param {string[]} params.rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `latency` (milliseconds the check took). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on transport failures only.
     * @param {number | null} params.interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Defaults to 60, or to the shortest interval your plan allows when that is longer. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number} params.timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} params.enabled - Set to false to create the monitor without checking it.
     * @param {string[]} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    createTcpMonitor(params: {
        monitorId: string;
        name: string;
        host: string;
        port: number;
        rules?: string[];
        interval?: number | null;
        timeout?: number;
        cooldown?: number;
        enabled?: boolean;
        notify?: string[];
        severity?: MonitorSeverity;
        escalationId?: string;
    }): Promise<Models.Monitor>;
    /**
     * Create a TCP monitor. It opens a connection to a host and port on its own interval and closes it at once, and opens an alert when the connection cannot be made, or when its rules match. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when a check passes again, for project webhooks, functions and realtime, and notifies the organization's members by email and in the console.
     *
     * @param {string} monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Monitor name. Max length: 128 chars.
     * @param {string} host - Hostname or IP address to connect to.
     * @param {number} port - Port to connect to.
     * @param {string[]} rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `latency` (milliseconds the check took). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on transport failures only.
     * @param {number | null} interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Defaults to 60, or to the shortest interval your plan allows when that is longer. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number} timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} enabled - Set to false to create the monitor without checking it.
     * @param {string[]} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTcpMonitor(
        monitorId: string,
        name: string,
        host: string,
        port: number,
        rules?: string[],
        interval?: number | null,
        timeout?: number,
        cooldown?: number,
        enabled?: boolean,
        notify?: string[],
        severity?: MonitorSeverity,
        escalationId?: string,
    ): Promise<Models.Monitor>;
    createTcpMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name: string;
                  host: string;
                  port: number;
                  rules?: string[];
                  interval?: number | null;
                  timeout?: number;
                  cooldown?: number;
                  enabled?: boolean;
                  notify?: string[];
                  severity?: MonitorSeverity;
                  escalationId?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            number?,
            string[]?,
            (number | null)?,
            number?,
            number?,
            boolean?,
            string[]?,
            MonitorSeverity?,
            string?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name: string;
            host: string;
            port: number;
            rules?: string[];
            interval?: number | null;
            timeout?: number;
            cooldown?: number;
            enabled?: boolean;
            notify?: string[];
            severity?: MonitorSeverity;
            escalationId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name: string;
                host: string;
                port: number;
                rules?: string[];
                interval?: number | null;
                timeout?: number;
                cooldown?: number;
                enabled?: boolean;
                notify?: string[];
                severity?: MonitorSeverity;
                escalationId?: string;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string,
                host: rest[1] as string,
                port: rest[2] as number,
                rules: rest[3] as string[],
                interval: rest[4] as number | null,
                timeout: rest[5] as number,
                cooldown: rest[6] as number,
                enabled: rest[7] as boolean,
                notify: rest[8] as string[],
                severity: rest[9] as MonitorSeverity,
                escalationId: rest[10] as string,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const host = params.host;
        const port = params.port;
        const rules = params.rules;
        const interval = params.interval;
        const timeout = params.timeout;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof host === 'undefined') {
            throw new AppwriteException('Missing required parameter: "host"');
        }
        if (typeof port === 'undefined') {
            throw new AppwriteException('Missing required parameter: "port"');
        }
        const apiPath = '/monitors/tcp';
        const apiPayload: Payload = {};
        if (typeof monitorId !== 'undefined') {
            apiPayload['monitorId'] = monitorId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            apiPayload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            apiPayload['port'] = port;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof timeout !== 'undefined') {
            apiPayload['timeout'] = timeout;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a TCP monitor by its unique ID. Only the parameters passed change; the monitor's state, its last check and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} params.monitorId - Monitor ID.
     * @param {string | null} params.name - Monitor name. Max length: 128 chars.
     * @param {string} params.host - Hostname or IP address to connect to.
     * @param {number | null} params.port - Port to connect to.
     * @param {string[] | null} params.rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `latency` (milliseconds the check took). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on transport failures only. Replaces the current rules; an empty list removes them.
     * @param {number | null} params.interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number | null} params.timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number | null} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} params.enabled - Whether the monitor is checked.
     * @param {string[] | null} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity | null} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    updateTcpMonitor(params: {
        monitorId: string;
        name?: string | null;
        host?: string;
        port?: number | null;
        rules?: string[] | null;
        interval?: number | null;
        timeout?: number | null;
        cooldown?: number | null;
        enabled?: boolean | null;
        notify?: string[] | null;
        severity?: MonitorSeverity | null;
        escalationId?: string;
    }): Promise<Models.Monitor>;
    /**
     * Update a TCP monitor by its unique ID. Only the parameters passed change; the monitor's state, its last check and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} monitorId - Monitor ID.
     * @param {string | null} name - Monitor name. Max length: 128 chars.
     * @param {string} host - Hostname or IP address to connect to.
     * @param {number | null} port - Port to connect to.
     * @param {string[] | null} rules - Rules that describe the failing state, as query strings generated with the Query class. The monitor fires when they match. Transport failures, such as timeouts, DNS failures, refused connections and denied targets, always fire. Variables: `latency` (milliseconds the check took). Operators: `equal`, `notEqual`, `lessThan`, `lessThanEqual`, `greaterThan`, `greaterThanEqual`, `between`, `notBetween`. Combine rules with `or` and `and`; top-level rules must all match. Without rules it fires on transport failures only. Replaces the current rules; an empty list removes them.
     * @param {number | null} interval - Seconds between two checks, between 1 and 2592000. The scheduler runs on a one second tick, so one second is the shortest interval. Reads back raised to your plan's minimum interval when the plan no longer allows it.
     * @param {number | null} timeout - Seconds a check may take before it fails, between 1 and 60, and no longer than the interval.
     * @param {number | null} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} enabled - Whether the monitor is checked.
     * @param {string[] | null} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity | null} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTcpMonitor(
        monitorId: string,
        name?: string | null,
        host?: string,
        port?: number | null,
        rules?: string[] | null,
        interval?: number | null,
        timeout?: number | null,
        cooldown?: number | null,
        enabled?: boolean | null,
        notify?: string[] | null,
        severity?: MonitorSeverity | null,
        escalationId?: string,
    ): Promise<Models.Monitor>;
    updateTcpMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name?: string | null;
                  host?: string;
                  port?: number | null;
                  rules?: string[] | null;
                  interval?: number | null;
                  timeout?: number | null;
                  cooldown?: number | null;
                  enabled?: boolean | null;
                  notify?: string[] | null;
                  severity?: MonitorSeverity | null;
                  escalationId?: string;
              }
            | string,
        ...rest: [
            (string | null)?,
            string?,
            (number | null)?,
            (string[] | null)?,
            (number | null)?,
            (number | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
            (MonitorSeverity | null)?,
            string?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name?: string | null;
            host?: string;
            port?: number | null;
            rules?: string[] | null;
            interval?: number | null;
            timeout?: number | null;
            cooldown?: number | null;
            enabled?: boolean | null;
            notify?: string[] | null;
            severity?: MonitorSeverity | null;
            escalationId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name?: string | null;
                host?: string;
                port?: number | null;
                rules?: string[] | null;
                interval?: number | null;
                timeout?: number | null;
                cooldown?: number | null;
                enabled?: boolean | null;
                notify?: string[] | null;
                severity?: MonitorSeverity | null;
                escalationId?: string;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string | null,
                host: rest[1] as string,
                port: rest[2] as number | null,
                rules: rest[3] as string[] | null,
                interval: rest[4] as number | null,
                timeout: rest[5] as number | null,
                cooldown: rest[6] as number | null,
                enabled: rest[7] as boolean | null,
                notify: rest[8] as string[] | null,
                severity: rest[9] as MonitorSeverity | null,
                escalationId: rest[10] as string,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const host = params.host;
        const port = params.port;
        const rules = params.rules;
        const interval = params.interval;
        const timeout = params.timeout;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined' || monitorId === '') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        const apiPath = '/monitors/tcp/{monitorId}'.replace(
            '{monitorId}',
            encodePath(monitorId),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            apiPayload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            apiPayload['port'] = port;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof timeout !== 'undefined') {
            apiPayload['timeout'] = timeout;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a usage monitor. It reads a usage metric of the project, or of one of its databases, buckets, functions or sites, on a schedule, and opens an alert when all its rules hold. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when usage recovers, for project webhooks, functions and realtime, and notifies the confirmed members of the `notify` roles by email and in the console, or the steps of the escalation set by `escalationId`.
     *
     * @param {string} params.monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Monitor name. Max length: 128 chars.
     * @param {string[]} params.rules - Rules that must all hold for the monitor to fire, as query strings generated with the Query class: one comparing a usage metric, named as the usage endpoints name it (such as `network.outbound` or `databases.operations.reads`), with a threshold in the metric's unit (bytes for storage and bandwidth, MB-seconds for GB-hours, a count otherwise), and optionally `equal` rules on `resourceType` and `resourceId` to watch one database, bucket, function or site instead of the whole project.
     * @param {number} params.window - Seconds a counter metric is summed over, between 60 and 2592000. Gauges compare their latest value.
     * @param {number} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} params.enabled - Set to false to create the monitor without evaluating it.
     * @param {string[]} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    createUsageMonitor(params: {
        monitorId: string;
        name: string;
        rules: string[];
        window?: number;
        cooldown?: number;
        enabled?: boolean;
        notify?: string[];
        severity?: MonitorSeverity;
        escalationId?: string;
    }): Promise<Models.Monitor>;
    /**
     * Create a usage monitor. It reads a usage metric of the project, or of one of its databases, buckets, functions or sites, on a schedule, and opens an alert when all its rules hold. Each alert fires the `monitors.[monitorId].alerts.[alertId].firing` event when it opens and `.resolved` when usage recovers, for project webhooks, functions and realtime, and notifies the confirmed members of the `notify` roles by email and in the console, or the steps of the escalation set by `escalationId`.
     *
     * @param {string} monitorId - Monitor ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Monitor name. Max length: 128 chars.
     * @param {string[]} rules - Rules that must all hold for the monitor to fire, as query strings generated with the Query class: one comparing a usage metric, named as the usage endpoints name it (such as `network.outbound` or `databases.operations.reads`), with a threshold in the metric's unit (bytes for storage and bandwidth, MB-seconds for GB-hours, a count otherwise), and optionally `equal` rules on `resourceType` and `resourceId` to watch one database, bucket, function or site instead of the whole project.
     * @param {number} window - Seconds a counter metric is summed over, between 60 and 2592000. Gauges compare their latest value.
     * @param {number} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean} enabled - Set to false to create the monitor without evaluating it.
     * @param {string[]} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Defaults to owners; pass an empty list to rely on the alert events alone.
     * @param {MonitorSeverity} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode.
     * @param {string} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Leave empty to notify the `notify` roles once.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createUsageMonitor(
        monitorId: string,
        name: string,
        rules: string[],
        window?: number,
        cooldown?: number,
        enabled?: boolean,
        notify?: string[],
        severity?: MonitorSeverity,
        escalationId?: string,
    ): Promise<Models.Monitor>;
    createUsageMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name: string;
                  rules: string[];
                  window?: number;
                  cooldown?: number;
                  enabled?: boolean;
                  notify?: string[];
                  severity?: MonitorSeverity;
                  escalationId?: string;
              }
            | string,
        ...rest: [
            string?,
            string[]?,
            number?,
            number?,
            boolean?,
            string[]?,
            MonitorSeverity?,
            string?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name: string;
            rules: string[];
            window?: number;
            cooldown?: number;
            enabled?: boolean;
            notify?: string[];
            severity?: MonitorSeverity;
            escalationId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name: string;
                rules: string[];
                window?: number;
                cooldown?: number;
                enabled?: boolean;
                notify?: string[];
                severity?: MonitorSeverity;
                escalationId?: string;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string,
                rules: rest[1] as string[],
                window: rest[2] as number,
                cooldown: rest[3] as number,
                enabled: rest[4] as boolean,
                notify: rest[5] as string[],
                severity: rest[6] as MonitorSeverity,
                escalationId: rest[7] as string,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const rules = params.rules;
        const window = params.window;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof rules === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rules"');
        }
        const apiPath = '/monitors/usage';
        const apiPayload: Payload = {};
        if (typeof monitorId !== 'undefined') {
            apiPayload['monitorId'] = monitorId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof window !== 'undefined') {
            apiPayload['window'] = window;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a usage monitor by its unique ID. Only the parameters passed change; the monitor's state and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} params.monitorId - Monitor ID.
     * @param {string | null} params.name - Monitor name. Max length: 128 chars.
     * @param {string[] | null} params.rules - Rules that must all hold for the monitor to fire, as query strings generated with the Query class: one comparing a usage metric, named as the usage endpoints name it (such as `network.outbound` or `databases.operations.reads`), with a threshold in the metric's unit (bytes for storage and bandwidth, MB-seconds for GB-hours, a count otherwise), and optionally `equal` rules on `resourceType` and `resourceId` to watch one database, bucket, function or site instead of the whole project. Replaces the current rules.
     * @param {number | null} params.window - Seconds a counter metric is summed over, between 60 and 2592000. Gauges compare their latest value.
     * @param {number | null} params.cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} params.enabled - Whether the monitor is evaluated.
     * @param {string[] | null} params.notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone; pass null or omit to keep the current roles.
     * @param {MonitorSeverity | null} params.severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode. Omit to keep the current one.
     * @param {string | null} params.escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles; pass null or omit to keep the current one.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    updateUsageMonitor(params: {
        monitorId: string;
        name?: string | null;
        rules?: string[] | null;
        window?: number | null;
        cooldown?: number | null;
        enabled?: boolean | null;
        notify?: string[] | null;
        severity?: MonitorSeverity | null;
        escalationId?: string | null;
    }): Promise<Models.Monitor>;
    /**
     * Update a usage monitor by its unique ID. Only the parameters passed change; the monitor's state and its open alert are kept. Passing `rules` replaces all of them.
     *
     * @param {string} monitorId - Monitor ID.
     * @param {string | null} name - Monitor name. Max length: 128 chars.
     * @param {string[] | null} rules - Rules that must all hold for the monitor to fire, as query strings generated with the Query class: one comparing a usage metric, named as the usage endpoints name it (such as `network.outbound` or `databases.operations.reads`), with a threshold in the metric's unit (bytes for storage and bandwidth, MB-seconds for GB-hours, a count otherwise), and optionally `equal` rules on `resourceType` and `resourceId` to watch one database, bucket, function or site instead of the whole project. Replaces the current rules.
     * @param {number | null} window - Seconds a counter metric is summed over, between 60 and 2592000. Gauges compare their latest value.
     * @param {number | null} cooldown - Minimum seconds between two team notifications of this monitor firing, between 300 and 2592000. Events fire on every change between firing and resolved regardless.
     * @param {boolean | null} enabled - Whether the monitor is evaluated.
     * @param {string[] | null} notify - Organization roles whose confirmed members get an email and a console notification when the monitor fires and resolves. Each must be an organization role, such as `owner` or `developer`. Pass an empty list to rely on the alert events alone; pass null or omit to keep the current roles.
     * @param {MonitorSeverity | null} severity - How urgent the monitor's alerts are: `info`, `warning`, `error` or `critical`. Critical alerts may be delivered with higher urgency by the notification channels that support it, such as a push that rings through silent mode. Omit to keep the current one.
     * @param {string | null} escalationId - ID of an escalation of the organization that notifies the team of this monitor's alerts step by step, until a member acknowledges the alert or it resolves. When set, `notify` is not used. Pass an empty string to go back to the `notify` roles; pass null or omit to keep the current one.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUsageMonitor(
        monitorId: string,
        name?: string | null,
        rules?: string[] | null,
        window?: number | null,
        cooldown?: number | null,
        enabled?: boolean | null,
        notify?: string[] | null,
        severity?: MonitorSeverity | null,
        escalationId?: string | null,
    ): Promise<Models.Monitor>;
    updateUsageMonitor(
        paramsOrFirst:
            | {
                  monitorId: string;
                  name?: string | null;
                  rules?: string[] | null;
                  window?: number | null;
                  cooldown?: number | null;
                  enabled?: boolean | null;
                  notify?: string[] | null;
                  severity?: MonitorSeverity | null;
                  escalationId?: string | null;
              }
            | string,
        ...rest: [
            (string | null)?,
            (string[] | null)?,
            (number | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
            (MonitorSeverity | null)?,
            (string | null)?,
        ]
    ): Promise<Models.Monitor> {
        let params: {
            monitorId: string;
            name?: string | null;
            rules?: string[] | null;
            window?: number | null;
            cooldown?: number | null;
            enabled?: boolean | null;
            notify?: string[] | null;
            severity?: MonitorSeverity | null;
            escalationId?: string | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                monitorId: string;
                name?: string | null;
                rules?: string[] | null;
                window?: number | null;
                cooldown?: number | null;
                enabled?: boolean | null;
                notify?: string[] | null;
                severity?: MonitorSeverity | null;
                escalationId?: string | null;
            };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
                name: rest[0] as string | null,
                rules: rest[1] as string[] | null,
                window: rest[2] as number | null,
                cooldown: rest[3] as number | null,
                enabled: rest[4] as boolean | null,
                notify: rest[5] as string[] | null,
                severity: rest[6] as MonitorSeverity | null,
                escalationId: rest[7] as string | null,
            };
        }

        const monitorId = params.monitorId;
        const name = params.name;
        const rules = params.rules;
        const window = params.window;
        const cooldown = params.cooldown;
        const enabled = params.enabled;
        const notify = params.notify;
        const severity = params.severity;
        const escalationId = params.escalationId;
        if (typeof monitorId === 'undefined' || monitorId === '') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        const apiPath = '/monitors/usage/{monitorId}'.replace(
            '{monitorId}',
            encodePath(monitorId),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
        }
        if (typeof window !== 'undefined') {
            apiPayload['window'] = window;
        }
        if (typeof cooldown !== 'undefined') {
            apiPayload['cooldown'] = cooldown;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof notify !== 'undefined') {
            apiPayload['notify'] = notify;
        }
        if (typeof severity !== 'undefined') {
            apiPayload['severity'] = severity;
        }
        if (typeof escalationId !== 'undefined') {
            apiPayload['escalationId'] = escalationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a monitor by its unique ID, with its state as of its last evaluation.
     *
     * @param {string} params.monitorId - Monitor ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     */
    get(params: { monitorId: string }): Promise<Models.Monitor>;
    /**
     * Get a monitor by its unique ID, with its state as of its last evaluation.
     *
     * @param {string} monitorId - Monitor ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Monitor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(monitorId: string): Promise<Models.Monitor>;
    get(
        paramsOrFirst: { monitorId: string } | string,
    ): Promise<Models.Monitor> {
        let params: { monitorId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { monitorId: string };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
            };
        }

        const monitorId = params.monitorId;
        if (typeof monitorId === 'undefined' || monitorId === '') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        const apiPath = '/monitors/{monitorId}'.replace(
            '{monitorId}',
            encodePath(monitorId),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'monitor',
            models: {
                monitor: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        projectId: '',
                        rules: [],
                        type: 'usage',
                        resourceType: 'project',
                        resourceId: '',
                        window: 3600,
                        cooldown: 3600,
                        enabled: true,
                        notify: ['owner'],
                        escalationId: '',
                        severity: 'warning',
                        status: 'ok',
                        alertId: '',
                        interval: 0,
                        timeout: 0,
                        url: '',
                        body: '',
                        domain: '',
                        resolver: '',
                        host: '',
                        port: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Delete a monitor by its unique ID. It stops being evaluated; an alert it is firing is resolved and kept with the rest of its alert history.
     *
     * @param {string} params.monitorId - Monitor ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { monitorId: string }): Promise<{}>;
    /**
     * Delete a monitor by its unique ID. It stops being evaluated; an alert it is firing is resolved and kept with the rest of its alert history.
     *
     * @param {string} monitorId - Monitor ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(monitorId: string): Promise<{}>;
    delete(paramsOrFirst: { monitorId: string } | string): Promise<{}> {
        let params: { monitorId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { monitorId: string };
        } else {
            params = {
                monitorId: paramsOrFirst as string,
            };
        }

        const monitorId = params.monitorId;
        if (typeof monitorId === 'undefined' || monitorId === '') {
            throw new AppwriteException(
                'Missing required parameter: "monitorId"',
            );
        }
        const apiPath = '/monitors/{monitorId}'.replace(
            '{monitorId}',
            encodePath(monitorId),
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
}
