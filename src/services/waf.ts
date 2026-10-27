import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
    encodePath,
} from '../client';
import type { Models } from '../models';

export class Waf {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List WAF rules for the current project.
     *
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleList>}
     */
    listRules(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.WafRuleList>;
    /**
     * List WAF rules for the current project.
     *
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRules(
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.WafRuleList>;
    listRules(
        paramsOrFirst?:
            { queries?: string[]; search?: string; total?: boolean } | string[],
        ...rest: [string?, boolean?]
    ): Promise<Models.WafRuleList> {
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
        const apiPath = '/waf/rules';
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
            root: 'wafRuleList',
            models: {
                wafRuleList: {
                    defaults: {
                        total: 0,
                        rules: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a bypass WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {string | null} params.resourceId - Resource identifier. Leave empty for the API resource type.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass>}
     */
    createBypassRule(params: {
        ruleId: string;
        resourceType: string;
        name: string;
        resourceId?: string | null;
        description?: string;
        priority?: number;
        enabled?: boolean;
        conditions?: string[];
    }): Promise<Models.WafRuleBypass>;
    /**
     * Create a bypass WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {string | null} resourceId - Resource identifier. Leave empty for the API resource type.
     * @param {string} description - Optional description for the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBypassRule(
        ruleId: string,
        resourceType: string,
        name: string,
        resourceId?: string | null,
        description?: string,
        priority?: number,
        enabled?: boolean,
        conditions?: string[],
    ): Promise<Models.WafRuleBypass>;
    createBypassRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType: string;
                  name: string;
                  resourceId?: string | null;
                  description?: string;
                  priority?: number;
                  enabled?: boolean;
                  conditions?: string[];
              }
            | string,
        ...rest: [
            string?,
            string?,
            (string | null)?,
            string?,
            number?,
            boolean?,
            string[]?,
        ]
    ): Promise<Models.WafRuleBypass> {
        let params: {
            ruleId: string;
            resourceType: string;
            name: string;
            resourceId?: string | null;
            description?: string;
            priority?: number;
            enabled?: boolean;
            conditions?: string[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType: string;
                name: string;
                resourceId?: string | null;
                description?: string;
                priority?: number;
                enabled?: boolean;
                conditions?: string[];
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                resourceId: rest[2] as string | null,
                description: rest[3] as string,
                priority: rest[4] as number,
                enabled: rest[5] as boolean,
                conditions: rest[6] as string[],
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const resourceId = params.resourceId;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resourceType"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/waf/rules/bypass';
        const apiPayload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            apiPayload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleBypass',
            models: {
                wafRuleBypass: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a bypass WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string | null} params.resourceType - Resource type the rule applies to.
     * @param {string | null} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} params.name - Rule name.
     * @param {string | null} params.description - Optional description for the rule.
     * @param {number | null} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} params.enabled - Set to false to disable the rule.
     * @param {string[] | null} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass>}
     */
    updateBypassRule(params: {
        ruleId: string;
        resourceType?: string | null;
        resourceId?: string | null;
        name?: string | null;
        description?: string | null;
        priority?: number | null;
        enabled?: boolean | null;
        conditions?: string[] | null;
    }): Promise<Models.WafRuleBypass>;
    /**
     * Update a bypass WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} ruleId - Rule ID.
     * @param {string | null} resourceType - Resource type the rule applies to.
     * @param {string | null} resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} name - Rule name.
     * @param {string | null} description - Optional description for the rule.
     * @param {number | null} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} enabled - Set to false to disable the rule.
     * @param {string[] | null} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBypassRule(
        ruleId: string,
        resourceType?: string | null,
        resourceId?: string | null,
        name?: string | null,
        description?: string | null,
        priority?: number | null,
        enabled?: boolean | null,
        conditions?: string[] | null,
    ): Promise<Models.WafRuleBypass>;
    updateBypassRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType?: string | null;
                  resourceId?: string | null;
                  name?: string | null;
                  description?: string | null;
                  priority?: number | null;
                  enabled?: boolean | null;
                  conditions?: string[] | null;
              }
            | string,
        ...rest: [
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
        ]
    ): Promise<Models.WafRuleBypass> {
        let params: {
            ruleId: string;
            resourceType?: string | null;
            resourceId?: string | null;
            name?: string | null;
            description?: string | null;
            priority?: number | null;
            enabled?: boolean | null;
            conditions?: string[] | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType?: string | null;
                resourceId?: string | null;
                name?: string | null;
                description?: string | null;
                priority?: number | null;
                enabled?: boolean | null;
                conditions?: string[] | null;
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string | null,
                resourceId: rest[1] as string | null,
                name: rest[2] as string | null,
                description: rest[3] as string | null,
                priority: rest[4] as number | null,
                enabled: rest[5] as boolean | null,
                conditions: rest[6] as string[] | null,
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        if (typeof ruleId === 'undefined' || ruleId === '') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/waf/rules/bypass/{ruleId}'.replace(
            '{ruleId}',
            encodePath(ruleId),
        );
        const apiPayload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleBypass',
            models: {
                wafRuleBypass: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a challenge WAF rule. Use `difficulty` (1 easiest to 5 hardest) to tune the client-side proof-of-work cost, and `ttl` to control how long, in seconds, a visitor stays cleared after passing the challenge before being challenged again. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {string | null} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.description - Optional description for the rule.
     * @param {string} params.challengeType - Challenge type enforced by the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @param {number} params.difficulty - Challenge difficulty from 1 (easiest) to 5 (hardest). Higher values demand more client-side proof-of-work.
     * @param {number} params.ttl - How long, in seconds, a visitor stays cleared after passing the challenge before being challenged again.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleChallenge>}
     */
    createChallengeRule(params: {
        ruleId: string;
        resourceType: string;
        name: string;
        resourceId?: string | null;
        description?: string;
        challengeType?: string;
        priority?: number;
        enabled?: boolean;
        conditions?: string[];
        difficulty?: number;
        ttl?: number;
    }): Promise<Models.WafRuleChallenge>;
    /**
     * Create a challenge WAF rule. Use `difficulty` (1 easiest to 5 hardest) to tune the client-side proof-of-work cost, and `ttl` to control how long, in seconds, a visitor stays cleared after passing the challenge before being challenged again. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {string | null} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} description - Optional description for the rule.
     * @param {string} challengeType - Challenge type enforced by the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @param {number} difficulty - Challenge difficulty from 1 (easiest) to 5 (hardest). Higher values demand more client-side proof-of-work.
     * @param {number} ttl - How long, in seconds, a visitor stays cleared after passing the challenge before being challenged again.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleChallenge>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createChallengeRule(
        ruleId: string,
        resourceType: string,
        name: string,
        resourceId?: string | null,
        description?: string,
        challengeType?: string,
        priority?: number,
        enabled?: boolean,
        conditions?: string[],
        difficulty?: number,
        ttl?: number,
    ): Promise<Models.WafRuleChallenge>;
    createChallengeRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType: string;
                  name: string;
                  resourceId?: string | null;
                  description?: string;
                  challengeType?: string;
                  priority?: number;
                  enabled?: boolean;
                  conditions?: string[];
                  difficulty?: number;
                  ttl?: number;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (string | null)?,
            string?,
            string?,
            number?,
            boolean?,
            string[]?,
            number?,
            number?,
        ]
    ): Promise<Models.WafRuleChallenge> {
        let params: {
            ruleId: string;
            resourceType: string;
            name: string;
            resourceId?: string | null;
            description?: string;
            challengeType?: string;
            priority?: number;
            enabled?: boolean;
            conditions?: string[];
            difficulty?: number;
            ttl?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType: string;
                name: string;
                resourceId?: string | null;
                description?: string;
                challengeType?: string;
                priority?: number;
                enabled?: boolean;
                conditions?: string[];
                difficulty?: number;
                ttl?: number;
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                resourceId: rest[2] as string | null,
                description: rest[3] as string,
                challengeType: rest[4] as string,
                priority: rest[5] as number,
                enabled: rest[6] as boolean,
                conditions: rest[7] as string[],
                difficulty: rest[8] as number,
                ttl: rest[9] as number,
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const resourceId = params.resourceId;
        const description = params.description;
        const challengeType = params.challengeType;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        const difficulty = params.difficulty;
        const ttl = params.ttl;
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resourceType"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/waf/rules/challenge';
        const apiPayload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            apiPayload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof challengeType !== 'undefined') {
            apiPayload['challengeType'] = challengeType;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        if (typeof difficulty !== 'undefined') {
            apiPayload['difficulty'] = difficulty;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleChallenge',
            models: {
                wafRuleChallenge: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                        challengeType: 'compute',
                        difficulty: 3,
                        ttl: 1800,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a challenge WAF rule. Use `difficulty` (1 easiest to 5 hardest) to tune the client-side proof-of-work cost, and `ttl` to control how long, in seconds, a visitor stays cleared after passing the challenge before being challenged again. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string | null} params.resourceType - Resource type the rule applies to.
     * @param {string | null} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} params.name - Rule name.
     * @param {string | null} params.description - Optional description for the rule.
     * @param {string | null} params.challengeType - Challenge type enforced by the rule.
     * @param {number | null} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} params.enabled - Set to false to disable the rule.
     * @param {string[] | null} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @param {number | null} params.difficulty - Challenge difficulty from 1 (easiest) to 5 (hardest). Higher values demand more client-side proof-of-work.
     * @param {number | null} params.ttl - How long, in seconds, a visitor stays cleared after passing the challenge before being challenged again.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleChallenge>}
     */
    updateChallengeRule(params: {
        ruleId: string;
        resourceType?: string | null;
        resourceId?: string | null;
        name?: string | null;
        description?: string | null;
        challengeType?: string | null;
        priority?: number | null;
        enabled?: boolean | null;
        conditions?: string[] | null;
        difficulty?: number | null;
        ttl?: number | null;
    }): Promise<Models.WafRuleChallenge>;
    /**
     * Update a challenge WAF rule. Use `difficulty` (1 easiest to 5 hardest) to tune the client-side proof-of-work cost, and `ttl` to control how long, in seconds, a visitor stays cleared after passing the challenge before being challenged again. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} ruleId - Rule ID.
     * @param {string | null} resourceType - Resource type the rule applies to.
     * @param {string | null} resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} name - Rule name.
     * @param {string | null} description - Optional description for the rule.
     * @param {string | null} challengeType - Challenge type enforced by the rule.
     * @param {number | null} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} enabled - Set to false to disable the rule.
     * @param {string[] | null} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @param {number | null} difficulty - Challenge difficulty from 1 (easiest) to 5 (hardest). Higher values demand more client-side proof-of-work.
     * @param {number | null} ttl - How long, in seconds, a visitor stays cleared after passing the challenge before being challenged again.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleChallenge>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateChallengeRule(
        ruleId: string,
        resourceType?: string | null,
        resourceId?: string | null,
        name?: string | null,
        description?: string | null,
        challengeType?: string | null,
        priority?: number | null,
        enabled?: boolean | null,
        conditions?: string[] | null,
        difficulty?: number | null,
        ttl?: number | null,
    ): Promise<Models.WafRuleChallenge>;
    updateChallengeRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType?: string | null;
                  resourceId?: string | null;
                  name?: string | null;
                  description?: string | null;
                  challengeType?: string | null;
                  priority?: number | null;
                  enabled?: boolean | null;
                  conditions?: string[] | null;
                  difficulty?: number | null;
                  ttl?: number | null;
              }
            | string,
        ...rest: [
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
            (number | null)?,
            (number | null)?,
        ]
    ): Promise<Models.WafRuleChallenge> {
        let params: {
            ruleId: string;
            resourceType?: string | null;
            resourceId?: string | null;
            name?: string | null;
            description?: string | null;
            challengeType?: string | null;
            priority?: number | null;
            enabled?: boolean | null;
            conditions?: string[] | null;
            difficulty?: number | null;
            ttl?: number | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType?: string | null;
                resourceId?: string | null;
                name?: string | null;
                description?: string | null;
                challengeType?: string | null;
                priority?: number | null;
                enabled?: boolean | null;
                conditions?: string[] | null;
                difficulty?: number | null;
                ttl?: number | null;
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string | null,
                resourceId: rest[1] as string | null,
                name: rest[2] as string | null,
                description: rest[3] as string | null,
                challengeType: rest[4] as string | null,
                priority: rest[5] as number | null,
                enabled: rest[6] as boolean | null,
                conditions: rest[7] as string[] | null,
                difficulty: rest[8] as number | null,
                ttl: rest[9] as number | null,
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const challengeType = params.challengeType;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        const difficulty = params.difficulty;
        const ttl = params.ttl;
        if (typeof ruleId === 'undefined' || ruleId === '') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/waf/rules/challenge/{ruleId}'.replace(
            '{ruleId}',
            encodePath(ruleId),
        );
        const apiPayload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof challengeType !== 'undefined') {
            apiPayload['challengeType'] = challengeType;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        if (typeof difficulty !== 'undefined') {
            apiPayload['difficulty'] = difficulty;
        }
        if (typeof ttl !== 'undefined') {
            apiPayload['ttl'] = ttl;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleChallenge',
            models: {
                wafRuleChallenge: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                        challengeType: 'compute',
                        difficulty: 3,
                        ttl: 1800,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a deny WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon. `sessionAge` and `mfaAge` hold the seconds since the request's session was created and since its last MFA challenge. Both are null for requests without a session, such as guests and API keys, while a request authenticated with the `x-appwrite-jwt` header carries the age of the session its token is bound to; on `functions` rules the session comes from the `x-appwrite-user-jwt` header, and `mfaAge` is null when the session never completed MFA. A deny matching on `mfaAge` returns `user_challenge_required` and one matching on `sessionAge` returns `user_reauthentication_required`, both with status 401, so the user can sign in again and retry. To also deny requests without a session, combine `isNull` and `greaterThan` in an `or` condition.
     *
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {string | null} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleDeny>}
     */
    createDenyRule(params: {
        ruleId: string;
        resourceType: string;
        name: string;
        resourceId?: string | null;
        description?: string;
        priority?: number;
        enabled?: boolean;
        conditions?: string[];
    }): Promise<Models.WafRuleDeny>;
    /**
     * Create a deny WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon. `sessionAge` and `mfaAge` hold the seconds since the request's session was created and since its last MFA challenge. Both are null for requests without a session, such as guests and API keys, while a request authenticated with the `x-appwrite-jwt` header carries the age of the session its token is bound to; on `functions` rules the session comes from the `x-appwrite-user-jwt` header, and `mfaAge` is null when the session never completed MFA. A deny matching on `mfaAge` returns `user_challenge_required` and one matching on `sessionAge` returns `user_reauthentication_required`, both with status 401, so the user can sign in again and retry. To also deny requests without a session, combine `isNull` and `greaterThan` in an `or` condition.
     *
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {string | null} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} description - Optional description for the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleDeny>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDenyRule(
        ruleId: string,
        resourceType: string,
        name: string,
        resourceId?: string | null,
        description?: string,
        priority?: number,
        enabled?: boolean,
        conditions?: string[],
    ): Promise<Models.WafRuleDeny>;
    createDenyRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType: string;
                  name: string;
                  resourceId?: string | null;
                  description?: string;
                  priority?: number;
                  enabled?: boolean;
                  conditions?: string[];
              }
            | string,
        ...rest: [
            string?,
            string?,
            (string | null)?,
            string?,
            number?,
            boolean?,
            string[]?,
        ]
    ): Promise<Models.WafRuleDeny> {
        let params: {
            ruleId: string;
            resourceType: string;
            name: string;
            resourceId?: string | null;
            description?: string;
            priority?: number;
            enabled?: boolean;
            conditions?: string[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType: string;
                name: string;
                resourceId?: string | null;
                description?: string;
                priority?: number;
                enabled?: boolean;
                conditions?: string[];
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                resourceId: rest[2] as string | null,
                description: rest[3] as string,
                priority: rest[4] as number,
                enabled: rest[5] as boolean,
                conditions: rest[6] as string[],
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const resourceId = params.resourceId;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resourceType"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/waf/rules/deny';
        const apiPayload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            apiPayload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleDeny',
            models: {
                wafRuleDeny: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a deny WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon. `sessionAge` and `mfaAge` hold the seconds since the request's session was created and since its last MFA challenge. Both are null for requests without a session, such as guests and API keys, while a request authenticated with the `x-appwrite-jwt` header carries the age of the session its token is bound to; on `functions` rules the session comes from the `x-appwrite-user-jwt` header, and `mfaAge` is null when the session never completed MFA. A deny matching on `mfaAge` returns `user_challenge_required` and one matching on `sessionAge` returns `user_reauthentication_required`, both with status 401, so the user can sign in again and retry. To also deny requests without a session, combine `isNull` and `greaterThan` in an `or` condition.
     *
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string | null} params.resourceType - Resource type the rule applies to.
     * @param {string | null} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} params.name - Rule name.
     * @param {string | null} params.description - Optional description for the rule.
     * @param {number | null} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} params.enabled - Set to false to disable the rule.
     * @param {string[] | null} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleDeny>}
     */
    updateDenyRule(params: {
        ruleId: string;
        resourceType?: string | null;
        resourceId?: string | null;
        name?: string | null;
        description?: string | null;
        priority?: number | null;
        enabled?: boolean | null;
        conditions?: string[] | null;
    }): Promise<Models.WafRuleDeny>;
    /**
     * Update a deny WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon. `sessionAge` and `mfaAge` hold the seconds since the request's session was created and since its last MFA challenge. Both are null for requests without a session, such as guests and API keys, while a request authenticated with the `x-appwrite-jwt` header carries the age of the session its token is bound to; on `functions` rules the session comes from the `x-appwrite-user-jwt` header, and `mfaAge` is null when the session never completed MFA. A deny matching on `mfaAge` returns `user_challenge_required` and one matching on `sessionAge` returns `user_reauthentication_required`, both with status 401, so the user can sign in again and retry. To also deny requests without a session, combine `isNull` and `greaterThan` in an `or` condition.
     *
     *
     * @param {string} ruleId - Rule ID.
     * @param {string | null} resourceType - Resource type the rule applies to.
     * @param {string | null} resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} name - Rule name.
     * @param {string | null} description - Optional description for the rule.
     * @param {number | null} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} enabled - Set to false to disable the rule.
     * @param {string[] | null} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleDeny>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDenyRule(
        ruleId: string,
        resourceType?: string | null,
        resourceId?: string | null,
        name?: string | null,
        description?: string | null,
        priority?: number | null,
        enabled?: boolean | null,
        conditions?: string[] | null,
    ): Promise<Models.WafRuleDeny>;
    updateDenyRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType?: string | null;
                  resourceId?: string | null;
                  name?: string | null;
                  description?: string | null;
                  priority?: number | null;
                  enabled?: boolean | null;
                  conditions?: string[] | null;
              }
            | string,
        ...rest: [
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
        ]
    ): Promise<Models.WafRuleDeny> {
        let params: {
            ruleId: string;
            resourceType?: string | null;
            resourceId?: string | null;
            name?: string | null;
            description?: string | null;
            priority?: number | null;
            enabled?: boolean | null;
            conditions?: string[] | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType?: string | null;
                resourceId?: string | null;
                name?: string | null;
                description?: string | null;
                priority?: number | null;
                enabled?: boolean | null;
                conditions?: string[] | null;
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string | null,
                resourceId: rest[1] as string | null,
                name: rest[2] as string | null,
                description: rest[3] as string | null,
                priority: rest[4] as number | null,
                enabled: rest[5] as boolean | null,
                conditions: rest[6] as string[] | null,
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        if (typeof ruleId === 'undefined' || ruleId === '') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/waf/rules/deny/{ruleId}'.replace(
            '{ruleId}',
            encodePath(ruleId),
        );
        const apiPayload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleDeny',
            models: {
                wafRuleDeny: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a rate limit WAF rule. Use `key` to choose the counter: `ip` limits per client IP, while `userId` limits per authenticated user (requests without an authenticated user skip `userId` rules). Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {number} params.limit - Maximum number of matching requests allowed in the configured interval.
     * @param {number} params.interval - Interval in seconds used for rate limiting.
     * @param {string | null} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.description - Optional description for the rule.
     * @param {string} params.key - Rate limit key. Use `ip` to limit per client IP or `userId` to limit per authenticated user. Requests without an authenticated user skip `userId` rules.
     * @param {string} params.strategy - Rate limit strategy. `fixedWindow` counts requests in discrete intervals, `slidingWindow` weights the previous interval for smoother limiting, and `tokenBucket` refills allowance continuously to permit short bursts.
     * @param {number | null} params.maxBucketSize - Maximum number of tokens the bucket can hold for the `tokenBucket` strategy, controlling how large a burst is allowed. The sustained refill rate is `limit / interval`. Defaults to `limit` when omitted. Ignored by other strategies.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRateLimit>}
     */
    createRateLimitRule(params: {
        ruleId: string;
        resourceType: string;
        name: string;
        limit: number;
        interval: number;
        resourceId?: string | null;
        description?: string;
        key?: string;
        strategy?: string;
        maxBucketSize?: number | null;
        priority?: number;
        enabled?: boolean;
        conditions?: string[];
    }): Promise<Models.WafRuleRateLimit>;
    /**
     * Create a rate limit WAF rule. Use `key` to choose the counter: `ip` limits per client IP, while `userId` limits per authenticated user (requests without an authenticated user skip `userId` rules). Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {number} limit - Maximum number of matching requests allowed in the configured interval.
     * @param {number} interval - Interval in seconds used for rate limiting.
     * @param {string | null} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} description - Optional description for the rule.
     * @param {string} key - Rate limit key. Use `ip` to limit per client IP or `userId` to limit per authenticated user. Requests without an authenticated user skip `userId` rules.
     * @param {string} strategy - Rate limit strategy. `fixedWindow` counts requests in discrete intervals, `slidingWindow` weights the previous interval for smoother limiting, and `tokenBucket` refills allowance continuously to permit short bursts.
     * @param {number | null} maxBucketSize - Maximum number of tokens the bucket can hold for the `tokenBucket` strategy, controlling how large a burst is allowed. The sustained refill rate is `limit / interval`. Defaults to `limit` when omitted. Ignored by other strategies.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRateLimit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRateLimitRule(
        ruleId: string,
        resourceType: string,
        name: string,
        limit: number,
        interval: number,
        resourceId?: string | null,
        description?: string,
        key?: string,
        strategy?: string,
        maxBucketSize?: number | null,
        priority?: number,
        enabled?: boolean,
        conditions?: string[],
    ): Promise<Models.WafRuleRateLimit>;
    createRateLimitRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType: string;
                  name: string;
                  limit: number;
                  interval: number;
                  resourceId?: string | null;
                  description?: string;
                  key?: string;
                  strategy?: string;
                  maxBucketSize?: number | null;
                  priority?: number;
                  enabled?: boolean;
                  conditions?: string[];
              }
            | string,
        ...rest: [
            string?,
            string?,
            number?,
            number?,
            (string | null)?,
            string?,
            string?,
            string?,
            (number | null)?,
            number?,
            boolean?,
            string[]?,
        ]
    ): Promise<Models.WafRuleRateLimit> {
        let params: {
            ruleId: string;
            resourceType: string;
            name: string;
            limit: number;
            interval: number;
            resourceId?: string | null;
            description?: string;
            key?: string;
            strategy?: string;
            maxBucketSize?: number | null;
            priority?: number;
            enabled?: boolean;
            conditions?: string[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType: string;
                name: string;
                limit: number;
                interval: number;
                resourceId?: string | null;
                description?: string;
                key?: string;
                strategy?: string;
                maxBucketSize?: number | null;
                priority?: number;
                enabled?: boolean;
                conditions?: string[];
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                limit: rest[2] as number,
                interval: rest[3] as number,
                resourceId: rest[4] as string | null,
                description: rest[5] as string,
                key: rest[6] as string,
                strategy: rest[7] as string,
                maxBucketSize: rest[8] as number | null,
                priority: rest[9] as number,
                enabled: rest[10] as boolean,
                conditions: rest[11] as string[],
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const limit = params.limit;
        const interval = params.interval;
        const resourceId = params.resourceId;
        const description = params.description;
        const key = params.key;
        const strategy = params.strategy;
        const maxBucketSize = params.maxBucketSize;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resourceType"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof limit === 'undefined') {
            throw new AppwriteException('Missing required parameter: "limit"');
        }
        if (typeof interval === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "interval"',
            );
        }
        const apiPath = '/waf/rules/rate-limit';
        const apiPayload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            apiPayload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof strategy !== 'undefined') {
            apiPayload['strategy'] = strategy;
        }
        if (typeof maxBucketSize !== 'undefined') {
            apiPayload['maxBucketSize'] = maxBucketSize;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleRateLimit',
            models: {
                wafRuleRateLimit: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                        limit: 100,
                        interval: 3600,
                        key: 'ip',
                        strategy: 'fixedWindow',
                        maxBucketSize: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a rate limit WAF rule. Use `key` to choose the counter: `ip` limits per client IP, while `userId` limits per authenticated user (requests without an authenticated user skip `userId` rules). Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string | null} params.resourceType - Resource type the rule applies to.
     * @param {string | null} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} params.name - Rule name.
     * @param {string | null} params.description - Optional description for the rule.
     * @param {number | null} params.limit - Maximum number of matching requests allowed in the configured interval.
     * @param {number | null} params.interval - Interval in seconds used for rate limiting.
     * @param {string | null} params.key - Rate limit key. Use `ip` to limit per client IP or `userId` to limit per authenticated user. Requests without an authenticated user skip `userId` rules.
     * @param {number | null} params.maxBucketSize - Maximum number of tokens the bucket can hold for the `tokenBucket` strategy, controlling how large a burst is allowed. The sustained refill rate is `limit / interval`. Ignored by other strategies. The strategy itself cannot be changed after creation.
     * @param {number | null} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} params.enabled - Set to false to disable the rule.
     * @param {string[] | null} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRateLimit>}
     */
    updateRateLimitRule(params: {
        ruleId: string;
        resourceType?: string | null;
        resourceId?: string | null;
        name?: string | null;
        description?: string | null;
        limit?: number | null;
        interval?: number | null;
        key?: string | null;
        maxBucketSize?: number | null;
        priority?: number | null;
        enabled?: boolean | null;
        conditions?: string[] | null;
    }): Promise<Models.WafRuleRateLimit>;
    /**
     * Update a rate limit WAF rule. Use `key` to choose the counter: `ip` limits per client IP, while `userId` limits per authenticated user (requests without an authenticated user skip `userId` rules). Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} ruleId - Rule ID.
     * @param {string | null} resourceType - Resource type the rule applies to.
     * @param {string | null} resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} name - Rule name.
     * @param {string | null} description - Optional description for the rule.
     * @param {number | null} limit - Maximum number of matching requests allowed in the configured interval.
     * @param {number | null} interval - Interval in seconds used for rate limiting.
     * @param {string | null} key - Rate limit key. Use `ip` to limit per client IP or `userId` to limit per authenticated user. Requests without an authenticated user skip `userId` rules.
     * @param {number | null} maxBucketSize - Maximum number of tokens the bucket can hold for the `tokenBucket` strategy, controlling how large a burst is allowed. The sustained refill rate is `limit / interval`. Ignored by other strategies. The strategy itself cannot be changed after creation.
     * @param {number | null} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} enabled - Set to false to disable the rule.
     * @param {string[] | null} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRateLimit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRateLimitRule(
        ruleId: string,
        resourceType?: string | null,
        resourceId?: string | null,
        name?: string | null,
        description?: string | null,
        limit?: number | null,
        interval?: number | null,
        key?: string | null,
        maxBucketSize?: number | null,
        priority?: number | null,
        enabled?: boolean | null,
        conditions?: string[] | null,
    ): Promise<Models.WafRuleRateLimit>;
    updateRateLimitRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType?: string | null;
                  resourceId?: string | null;
                  name?: string | null;
                  description?: string | null;
                  limit?: number | null;
                  interval?: number | null;
                  key?: string | null;
                  maxBucketSize?: number | null;
                  priority?: number | null;
                  enabled?: boolean | null;
                  conditions?: string[] | null;
              }
            | string,
        ...rest: [
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (number | null)?,
            (number | null)?,
            (string | null)?,
            (number | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
        ]
    ): Promise<Models.WafRuleRateLimit> {
        let params: {
            ruleId: string;
            resourceType?: string | null;
            resourceId?: string | null;
            name?: string | null;
            description?: string | null;
            limit?: number | null;
            interval?: number | null;
            key?: string | null;
            maxBucketSize?: number | null;
            priority?: number | null;
            enabled?: boolean | null;
            conditions?: string[] | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType?: string | null;
                resourceId?: string | null;
                name?: string | null;
                description?: string | null;
                limit?: number | null;
                interval?: number | null;
                key?: string | null;
                maxBucketSize?: number | null;
                priority?: number | null;
                enabled?: boolean | null;
                conditions?: string[] | null;
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string | null,
                resourceId: rest[1] as string | null,
                name: rest[2] as string | null,
                description: rest[3] as string | null,
                limit: rest[4] as number | null,
                interval: rest[5] as number | null,
                key: rest[6] as string | null,
                maxBucketSize: rest[7] as number | null,
                priority: rest[8] as number | null,
                enabled: rest[9] as boolean | null,
                conditions: rest[10] as string[] | null,
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const limit = params.limit;
        const interval = params.interval;
        const key = params.key;
        const maxBucketSize = params.maxBucketSize;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        if (typeof ruleId === 'undefined' || ruleId === '') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/waf/rules/rate-limit/{ruleId}'.replace(
            '{ruleId}',
            encodePath(ruleId),
        );
        const apiPayload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof maxBucketSize !== 'undefined') {
            apiPayload['maxBucketSize'] = maxBucketSize;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleRateLimit',
            models: {
                wafRuleRateLimit: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                        limit: 100,
                        interval: 3600,
                        key: 'ip',
                        strategy: 'fixedWindow',
                        maxBucketSize: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a redirect WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {string} params.location - Location used for redirect responses.
     * @param {number} params.statusCode - Integer status code used for redirect responses.
     * @param {string | null} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRedirect>}
     */
    createRedirectRule(params: {
        ruleId: string;
        resourceType: string;
        name: string;
        location: string;
        statusCode: number;
        resourceId?: string | null;
        description?: string;
        priority?: number;
        enabled?: boolean;
        conditions?: string[];
    }): Promise<Models.WafRuleRedirect>;
    /**
     * Create a redirect WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {string} location - Location used for redirect responses.
     * @param {number} statusCode - Integer status code used for redirect responses.
     * @param {string | null} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} description - Optional description for the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string[]} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRedirect>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRedirectRule(
        ruleId: string,
        resourceType: string,
        name: string,
        location: string,
        statusCode: number,
        resourceId?: string | null,
        description?: string,
        priority?: number,
        enabled?: boolean,
        conditions?: string[],
    ): Promise<Models.WafRuleRedirect>;
    createRedirectRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType: string;
                  name: string;
                  location: string;
                  statusCode: number;
                  resourceId?: string | null;
                  description?: string;
                  priority?: number;
                  enabled?: boolean;
                  conditions?: string[];
              }
            | string,
        ...rest: [
            string?,
            string?,
            string?,
            number?,
            (string | null)?,
            string?,
            number?,
            boolean?,
            string[]?,
        ]
    ): Promise<Models.WafRuleRedirect> {
        let params: {
            ruleId: string;
            resourceType: string;
            name: string;
            location: string;
            statusCode: number;
            resourceId?: string | null;
            description?: string;
            priority?: number;
            enabled?: boolean;
            conditions?: string[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType: string;
                name: string;
                location: string;
                statusCode: number;
                resourceId?: string | null;
                description?: string;
                priority?: number;
                enabled?: boolean;
                conditions?: string[];
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                location: rest[2] as string,
                statusCode: rest[3] as number,
                resourceId: rest[4] as string | null,
                description: rest[5] as string,
                priority: rest[6] as number,
                enabled: rest[7] as boolean,
                conditions: rest[8] as string[],
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const location = params.location;
        const statusCode = params.statusCode;
        const resourceId = params.resourceId;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resourceType"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof location === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "location"',
            );
        }
        if (typeof statusCode === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "statusCode"',
            );
        }
        const apiPath = '/waf/rules/redirect';
        const apiPayload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            apiPayload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof location !== 'undefined') {
            apiPayload['location'] = location;
        }
        if (typeof statusCode !== 'undefined') {
            apiPayload['statusCode'] = statusCode;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleRedirect',
            models: {
                wafRuleRedirect: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                        location: '/',
                        statusCode: 302,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update a redirect WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string | null} params.resourceType - Resource type the rule applies to.
     * @param {string | null} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} params.name - Rule name.
     * @param {string | null} params.description - Optional description for the rule.
     * @param {string | null} params.location - Location used for redirect responses.
     * @param {number | null} params.statusCode - Integer status code used for redirect responses.
     * @param {number | null} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} params.enabled - Set to false to disable the rule.
     * @param {string[] | null} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRedirect>}
     */
    updateRedirectRule(params: {
        ruleId: string;
        resourceType?: string | null;
        resourceId?: string | null;
        name?: string | null;
        description?: string | null;
        location?: string | null;
        statusCode?: number | null;
        priority?: number | null;
        enabled?: boolean | null;
        conditions?: string[] | null;
    }): Promise<Models.WafRuleRedirect>;
    /**
     * Update a redirect WAF rule. Conditions can match request attributes including `ip` (plain IPs or CIDR blocks like `10.0.0.0/8`), `method`, `path`, `host`, `country`, `continent`, `headers.<name>`, `query.<key>`, `queryKeys`, `accept`, `acceptLanguage`, `cookie`, `userAgent`, `os`, `osVersion`, `browser`, and `browserVersion`. Conditions on `city` and `state` require the premium Geo DB addon.
     *
     *
     * @param {string} ruleId - Rule ID.
     * @param {string | null} resourceType - Resource type the rule applies to.
     * @param {string | null} resourceId - Resource identifier. Required for functions and sites.
     * @param {string | null} name - Rule name.
     * @param {string | null} description - Optional description for the rule.
     * @param {string | null} location - Location used for redirect responses.
     * @param {number | null} statusCode - Integer status code used for redirect responses.
     * @param {number | null} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean | null} enabled - Set to false to disable the rule.
     * @param {string[] | null} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRedirect>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRedirectRule(
        ruleId: string,
        resourceType?: string | null,
        resourceId?: string | null,
        name?: string | null,
        description?: string | null,
        location?: string | null,
        statusCode?: number | null,
        priority?: number | null,
        enabled?: boolean | null,
        conditions?: string[] | null,
    ): Promise<Models.WafRuleRedirect>;
    updateRedirectRule(
        paramsOrFirst:
            | {
                  ruleId: string;
                  resourceType?: string | null;
                  resourceId?: string | null;
                  name?: string | null;
                  description?: string | null;
                  location?: string | null;
                  statusCode?: number | null;
                  priority?: number | null;
                  enabled?: boolean | null;
                  conditions?: string[] | null;
              }
            | string,
        ...rest: [
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (string | null)?,
            (number | null)?,
            (number | null)?,
            (boolean | null)?,
            (string[] | null)?,
        ]
    ): Promise<Models.WafRuleRedirect> {
        let params: {
            ruleId: string;
            resourceType?: string | null;
            resourceId?: string | null;
            name?: string | null;
            description?: string | null;
            location?: string | null;
            statusCode?: number | null;
            priority?: number | null;
            enabled?: boolean | null;
            conditions?: string[] | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                ruleId: string;
                resourceType?: string | null;
                resourceId?: string | null;
                name?: string | null;
                description?: string | null;
                location?: string | null;
                statusCode?: number | null;
                priority?: number | null;
                enabled?: boolean | null;
                conditions?: string[] | null;
            };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string | null,
                resourceId: rest[1] as string | null,
                name: rest[2] as string | null,
                description: rest[3] as string | null,
                location: rest[4] as string | null,
                statusCode: rest[5] as number | null,
                priority: rest[6] as number | null,
                enabled: rest[7] as boolean | null,
                conditions: rest[8] as string[] | null,
            };
        }

        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const location = params.location;
        const statusCode = params.statusCode;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;
        if (typeof ruleId === 'undefined' || ruleId === '') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/waf/rules/redirect/{ruleId}'.replace(
            '{ruleId}',
            encodePath(ruleId),
        );
        const apiPayload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof location !== 'undefined') {
            apiPayload['location'] = location;
        }
        if (typeof statusCode !== 'undefined') {
            apiPayload['statusCode'] = statusCode;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'wafRuleRedirect',
            models: {
                wafRuleRedirect: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        description: '',
                        teamId: '',
                        projectId: '',
                        resourceType: 'api',
                        resourceId: '',
                        priority: 0,
                        enabled: true,
                        conditions: [],
                        config: {},
                        location: '/',
                        statusCode: 302,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a WAF rule by its ID.
     *
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass | Models.WafRuleDeny | Models.WafRuleChallenge | Models.WafRuleRateLimit | Models.WafRuleRedirect>}
     */
    getRule(params: {
        ruleId: string;
    }): Promise<
        | Models.WafRuleBypass
        | Models.WafRuleDeny
        | Models.WafRuleChallenge
        | Models.WafRuleRateLimit
        | Models.WafRuleRedirect
    >;
    /**
     * Get a WAF rule by its ID.
     *
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass | Models.WafRuleDeny | Models.WafRuleChallenge | Models.WafRuleRateLimit | Models.WafRuleRedirect>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRule(
        ruleId: string,
    ): Promise<
        | Models.WafRuleBypass
        | Models.WafRuleDeny
        | Models.WafRuleChallenge
        | Models.WafRuleRateLimit
        | Models.WafRuleRedirect
    >;
    getRule(
        paramsOrFirst: { ruleId: string } | string,
    ): Promise<
        | Models.WafRuleBypass
        | Models.WafRuleDeny
        | Models.WafRuleChallenge
        | Models.WafRuleRateLimit
        | Models.WafRuleRedirect
    > {
        let params: { ruleId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { ruleId: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
            };
        }

        const ruleId = params.ruleId;
        if (typeof ruleId === 'undefined' || ruleId === '') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/waf/rules/{ruleId}'.replace(
            '{ruleId}',
            encodePath(ruleId),
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
     * Delete a WAF rule.
     *
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRule(params: { ruleId: string }): Promise<{}>;
    /**
     * Delete a WAF rule.
     *
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRule(ruleId: string): Promise<{}>;
    deleteRule(paramsOrFirst: { ruleId: string } | string): Promise<{}> {
        let params: { ruleId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { ruleId: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
            };
        }

        const ruleId = params.ruleId;
        if (typeof ruleId === 'undefined' || ruleId === '') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/waf/rules/{ruleId}'.replace(
            '{ruleId}',
            encodePath(ruleId),
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
