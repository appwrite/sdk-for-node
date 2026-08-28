import { AppwriteException, Client, type Payload } from '../client';
import type { Models } from '../models';

export class Mysql {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all dedicated databases. Results support pagination.
     *
     * @param {string[]} params.queries - Array of query strings.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseList>}
     */
    list(params?: {
        queries?: string[];
    }): Promise<Models.DedicatedDatabaseList>;
    /**
     * List all dedicated databases. Results support pagination.
     *
     * @param {string[]} queries - Array of query strings.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[]): Promise<Models.DedicatedDatabaseList>;
    list(
        paramsOrFirst?: { queries?: string[] } | string[],
    ): Promise<Models.DedicatedDatabaseList> {
        let params: { queries?: string[] };

        if (
            !paramsOrFirst ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[],
            };
        }

        const queries = params.queries;
        const apiPath = '/mysql';
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
     * Create a new dedicated database with the chosen engine and configuration. Status will be 'provisioning' until the database is ready.
     *
     * @param {string} params.databaseId - Database ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Database display name. Max length: 128 chars.
     * @param {string} params.version - Database engine version. Defaults to latest for selected engine.
     * @param {string} params.specification - Specification identifier. Drives the allocated CPU, memory, storage, storage class, and connection ceiling.
     * @param {number} params.replicas - Number of high availability replicas (0-5). High availability is enabled when greater than 0.
     * @param {string} params.syncMode - Replication sync mode preference. Allowed values: async, sync, quorum.
     * @param {number} params.networkIdleTimeoutSeconds - Connection idle timeout in seconds.
     * @param {string[]} params.networkIPAllowlist - IP addresses/CIDR ranges allowed to connect.
     * @param {number} params.idleTimeoutMinutes - Minutes of inactivity before container scales to zero.
     * @param {boolean} params.pitr - Enable point-in-time recovery (PITR). Continuously archives changes so the database can be restored to any moment within the retention window.
     * @param {number} params.pitrRetentionDays - Number of days to retain PITR data.
     * @param {boolean} params.storageAutoscaling - Enable automatic storage expansion when usage exceeds threshold.
     * @param {number} params.storageAutoscalingThresholdPercent - Storage usage percentage (50-95) that triggers automatic expansion.
     * @param {number} params.storageAutoscalingMaxGb - Maximum storage size in GB for autoscaling. 0 means no limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    create(params: {
        databaseId: string;
        name: string;
        version?: string;
        specification?: string;
        replicas?: number;
        syncMode?: string;
        networkIdleTimeoutSeconds?: number;
        networkIPAllowlist?: string[];
        idleTimeoutMinutes?: number;
        pitr?: boolean;
        pitrRetentionDays?: number;
        storageAutoscaling?: boolean;
        storageAutoscalingThresholdPercent?: number;
        storageAutoscalingMaxGb?: number;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Create a new dedicated database with the chosen engine and configuration. Status will be 'provisioning' until the database is ready.
     *
     * @param {string} databaseId - Database ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Database display name. Max length: 128 chars.
     * @param {string} version - Database engine version. Defaults to latest for selected engine.
     * @param {string} specification - Specification identifier. Drives the allocated CPU, memory, storage, storage class, and connection ceiling.
     * @param {number} replicas - Number of high availability replicas (0-5). High availability is enabled when greater than 0.
     * @param {string} syncMode - Replication sync mode preference. Allowed values: async, sync, quorum.
     * @param {number} networkIdleTimeoutSeconds - Connection idle timeout in seconds.
     * @param {string[]} networkIPAllowlist - IP addresses/CIDR ranges allowed to connect.
     * @param {number} idleTimeoutMinutes - Minutes of inactivity before container scales to zero.
     * @param {boolean} pitr - Enable point-in-time recovery (PITR). Continuously archives changes so the database can be restored to any moment within the retention window.
     * @param {number} pitrRetentionDays - Number of days to retain PITR data.
     * @param {boolean} storageAutoscaling - Enable automatic storage expansion when usage exceeds threshold.
     * @param {number} storageAutoscalingThresholdPercent - Storage usage percentage (50-95) that triggers automatic expansion.
     * @param {number} storageAutoscalingMaxGb - Maximum storage size in GB for autoscaling. 0 means no limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(
        databaseId: string,
        name: string,
        version?: string,
        specification?: string,
        replicas?: number,
        syncMode?: string,
        networkIdleTimeoutSeconds?: number,
        networkIPAllowlist?: string[],
        idleTimeoutMinutes?: number,
        pitr?: boolean,
        pitrRetentionDays?: number,
        storageAutoscaling?: boolean,
        storageAutoscalingThresholdPercent?: number,
        storageAutoscalingMaxGb?: number,
    ): Promise<Models.DedicatedDatabase>;
    create(
        paramsOrFirst:
            | {
                  databaseId: string;
                  name: string;
                  version?: string;
                  specification?: string;
                  replicas?: number;
                  syncMode?: string;
                  networkIdleTimeoutSeconds?: number;
                  networkIPAllowlist?: string[];
                  idleTimeoutMinutes?: number;
                  pitr?: boolean;
                  pitrRetentionDays?: number;
                  storageAutoscaling?: boolean;
                  storageAutoscalingThresholdPercent?: number;
                  storageAutoscalingMaxGb?: number;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string?,
            number?,
            string?,
            number?,
            string[]?,
            number?,
            boolean?,
            number?,
            boolean?,
            number?,
            number?,
        ]
    ): Promise<Models.DedicatedDatabase> {
        let params: {
            databaseId: string;
            name: string;
            version?: string;
            specification?: string;
            replicas?: number;
            syncMode?: string;
            networkIdleTimeoutSeconds?: number;
            networkIPAllowlist?: string[];
            idleTimeoutMinutes?: number;
            pitr?: boolean;
            pitrRetentionDays?: number;
            storageAutoscaling?: boolean;
            storageAutoscalingThresholdPercent?: number;
            storageAutoscalingMaxGb?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                name: string;
                version?: string;
                specification?: string;
                replicas?: number;
                syncMode?: string;
                networkIdleTimeoutSeconds?: number;
                networkIPAllowlist?: string[];
                idleTimeoutMinutes?: number;
                pitr?: boolean;
                pitrRetentionDays?: number;
                storageAutoscaling?: boolean;
                storageAutoscalingThresholdPercent?: number;
                storageAutoscalingMaxGb?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                version: rest[1] as string,
                specification: rest[2] as string,
                replicas: rest[3] as number,
                syncMode: rest[4] as string,
                networkIdleTimeoutSeconds: rest[5] as number,
                networkIPAllowlist: rest[6] as string[],
                idleTimeoutMinutes: rest[7] as number,
                pitr: rest[8] as boolean,
                pitrRetentionDays: rest[9] as number,
                storageAutoscaling: rest[10] as boolean,
                storageAutoscalingThresholdPercent: rest[11] as number,
                storageAutoscalingMaxGb: rest[12] as number,
            };
        }

        const databaseId = params.databaseId;
        const name = params.name;
        const version = params.version;
        const specification = params.specification;
        const replicas = params.replicas;
        const syncMode = params.syncMode;
        const networkIdleTimeoutSeconds = params.networkIdleTimeoutSeconds;
        const networkIPAllowlist = params.networkIPAllowlist;
        const idleTimeoutMinutes = params.idleTimeoutMinutes;
        const pitr = params.pitr;
        const pitrRetentionDays = params.pitrRetentionDays;
        const storageAutoscaling = params.storageAutoscaling;
        const storageAutoscalingThresholdPercent =
            params.storageAutoscalingThresholdPercent;
        const storageAutoscalingMaxGb = params.storageAutoscalingMaxGb;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/mysql';
        const apiPayload: Payload = {};
        if (typeof databaseId !== 'undefined') {
            apiPayload['databaseId'] = databaseId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof version !== 'undefined') {
            apiPayload['version'] = version;
        }
        if (typeof specification !== 'undefined') {
            apiPayload['specification'] = specification;
        }
        if (typeof replicas !== 'undefined') {
            apiPayload['replicas'] = replicas;
        }
        if (typeof syncMode !== 'undefined') {
            apiPayload['syncMode'] = syncMode;
        }
        if (typeof networkIdleTimeoutSeconds !== 'undefined') {
            apiPayload['networkIdleTimeoutSeconds'] = networkIdleTimeoutSeconds;
        }
        if (typeof networkIPAllowlist !== 'undefined') {
            apiPayload['networkIPAllowlist'] = networkIPAllowlist;
        }
        if (typeof idleTimeoutMinutes !== 'undefined') {
            apiPayload['idleTimeoutMinutes'] = idleTimeoutMinutes;
        }
        if (typeof pitr !== 'undefined') {
            apiPayload['pitr'] = pitr;
        }
        if (typeof pitrRetentionDays !== 'undefined') {
            apiPayload['pitrRetentionDays'] = pitrRetentionDays;
        }
        if (typeof storageAutoscaling !== 'undefined') {
            apiPayload['storageAutoscaling'] = storageAutoscaling;
        }
        if (typeof storageAutoscalingThresholdPercent !== 'undefined') {
            apiPayload['storageAutoscalingThresholdPercent'] =
                storageAutoscalingThresholdPercent;
        }
        if (typeof storageAutoscalingMaxGb !== 'undefined') {
            apiPayload['storageAutoscalingMaxGb'] = storageAutoscalingMaxGb;
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
     * List the dedicated database specifications available on the current plan. Each specification reports its resource limits, pricing, and whether it is enabled for the organization.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSpecificationList>}
     */
    listSpecifications(): Promise<Models.DedicatedDatabaseSpecificationList> {
        const apiPath = '/mysql/specifications';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a dedicated database by its unique ID. Returns the database configuration and current status.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    get(params: { databaseId: string }): Promise<Models.DedicatedDatabase>;
    /**
     * Get a dedicated database by its unique ID. Returns the database configuration and current status.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(databaseId: string): Promise<Models.DedicatedDatabase>;
    get(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * Update a dedicated database configuration. All changes are applied with zero downtime. Specification changes (cpu, memory, storage) are handled via rolling cutover. Storage expansion is done online. All other settings are applied in-place.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.name - Database display name.
     * @param {string} params.status - Database status. Allowed values: ready, paused, inactive. Set to "paused" to pause, "ready" to resume (also recovers a failed database whose infrastructure is healthy), or "inactive" to spin down a shared-pool database.
     * @param {string} params.specification - Specification. Changes cpu, memory, storage, connection ceiling, and node pool based on specification config. Resource changes are applied via rolling cutover with zero downtime.
     * @param {number} params.replicas - Number of high availability replicas (0-5). High availability is enabled when greater than 0.
     * @param {string} params.syncMode - Replication sync mode preference. Allowed values: async, sync, quorum.
     * @param {number} params.networkIdleTimeoutSeconds - Connection idle timeout in seconds (60-86400).
     * @param {string[]} params.networkIPAllowlist - IP addresses/CIDR ranges allowed to connect.
     * @param {number} params.idleTimeoutMinutes - Minutes before container scales to zero.
     * @param {boolean} params.pitr - Enable or disable point-in-time recovery (PITR).
     * @param {number} params.pitrRetentionDays - Days to retain PITR data.
     * @param {boolean} params.storageAutoscaling - Enable automatic storage expansion when usage exceeds threshold.
     * @param {number} params.storageAutoscalingThresholdPercent - Storage usage percentage (50-95) that triggers automatic expansion.
     * @param {number} params.storageAutoscalingMaxGb - Maximum storage size in GB for autoscaling. 0 means no limit.
     * @param {number} params.metricsTraceSampleRate - Fraction of queries to trace (0.0–1.0). Forwarded to the sidecar.
     * @param {number} params.metricsSlowQueryLogThresholdMs - Threshold in ms above which queries are logged as slow. Forwarded to the sidecar.
     * @param {boolean} params.sqlApiEnabled - Enable the SQL API sidecar for this database.
     * @param {string[]} params.sqlApiAllowedStatements - Statement types the SQL API accepts. Allowed values: SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP, TRUNCATE, GRANT, REVOKE.
     * @param {number} params.sqlApiMaxRows - Maximum rows returned per SQL API execution (1-1000000).
     * @param {number} params.sqlApiMaxBytes - Maximum serialised SQL API result payload in bytes (1024-104857600).
     * @param {number} params.sqlApiTimeoutSeconds - Per-call SQL API execution timeout in seconds (1-300).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    update(params: {
        databaseId: string;
        name?: string;
        status?: string;
        specification?: string;
        replicas?: number;
        syncMode?: string;
        networkIdleTimeoutSeconds?: number;
        networkIPAllowlist?: string[];
        idleTimeoutMinutes?: number;
        pitr?: boolean;
        pitrRetentionDays?: number;
        storageAutoscaling?: boolean;
        storageAutoscalingThresholdPercent?: number;
        storageAutoscalingMaxGb?: number;
        metricsTraceSampleRate?: number;
        metricsSlowQueryLogThresholdMs?: number;
        sqlApiEnabled?: boolean;
        sqlApiAllowedStatements?: string[];
        sqlApiMaxRows?: number;
        sqlApiMaxBytes?: number;
        sqlApiTimeoutSeconds?: number;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Update a dedicated database configuration. All changes are applied with zero downtime. Specification changes (cpu, memory, storage) are handled via rolling cutover. Storage expansion is done online. All other settings are applied in-place.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} name - Database display name.
     * @param {string} status - Database status. Allowed values: ready, paused, inactive. Set to "paused" to pause, "ready" to resume (also recovers a failed database whose infrastructure is healthy), or "inactive" to spin down a shared-pool database.
     * @param {string} specification - Specification. Changes cpu, memory, storage, connection ceiling, and node pool based on specification config. Resource changes are applied via rolling cutover with zero downtime.
     * @param {number} replicas - Number of high availability replicas (0-5). High availability is enabled when greater than 0.
     * @param {string} syncMode - Replication sync mode preference. Allowed values: async, sync, quorum.
     * @param {number} networkIdleTimeoutSeconds - Connection idle timeout in seconds (60-86400).
     * @param {string[]} networkIPAllowlist - IP addresses/CIDR ranges allowed to connect.
     * @param {number} idleTimeoutMinutes - Minutes before container scales to zero.
     * @param {boolean} pitr - Enable or disable point-in-time recovery (PITR).
     * @param {number} pitrRetentionDays - Days to retain PITR data.
     * @param {boolean} storageAutoscaling - Enable automatic storage expansion when usage exceeds threshold.
     * @param {number} storageAutoscalingThresholdPercent - Storage usage percentage (50-95) that triggers automatic expansion.
     * @param {number} storageAutoscalingMaxGb - Maximum storage size in GB for autoscaling. 0 means no limit.
     * @param {number} metricsTraceSampleRate - Fraction of queries to trace (0.0–1.0). Forwarded to the sidecar.
     * @param {number} metricsSlowQueryLogThresholdMs - Threshold in ms above which queries are logged as slow. Forwarded to the sidecar.
     * @param {boolean} sqlApiEnabled - Enable the SQL API sidecar for this database.
     * @param {string[]} sqlApiAllowedStatements - Statement types the SQL API accepts. Allowed values: SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP, TRUNCATE, GRANT, REVOKE.
     * @param {number} sqlApiMaxRows - Maximum rows returned per SQL API execution (1-1000000).
     * @param {number} sqlApiMaxBytes - Maximum serialised SQL API result payload in bytes (1024-104857600).
     * @param {number} sqlApiTimeoutSeconds - Per-call SQL API execution timeout in seconds (1-300).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(
        databaseId: string,
        name?: string,
        status?: string,
        specification?: string,
        replicas?: number,
        syncMode?: string,
        networkIdleTimeoutSeconds?: number,
        networkIPAllowlist?: string[],
        idleTimeoutMinutes?: number,
        pitr?: boolean,
        pitrRetentionDays?: number,
        storageAutoscaling?: boolean,
        storageAutoscalingThresholdPercent?: number,
        storageAutoscalingMaxGb?: number,
        metricsTraceSampleRate?: number,
        metricsSlowQueryLogThresholdMs?: number,
        sqlApiEnabled?: boolean,
        sqlApiAllowedStatements?: string[],
        sqlApiMaxRows?: number,
        sqlApiMaxBytes?: number,
        sqlApiTimeoutSeconds?: number,
    ): Promise<Models.DedicatedDatabase>;
    update(
        paramsOrFirst:
            | {
                  databaseId: string;
                  name?: string;
                  status?: string;
                  specification?: string;
                  replicas?: number;
                  syncMode?: string;
                  networkIdleTimeoutSeconds?: number;
                  networkIPAllowlist?: string[];
                  idleTimeoutMinutes?: number;
                  pitr?: boolean;
                  pitrRetentionDays?: number;
                  storageAutoscaling?: boolean;
                  storageAutoscalingThresholdPercent?: number;
                  storageAutoscalingMaxGb?: number;
                  metricsTraceSampleRate?: number;
                  metricsSlowQueryLogThresholdMs?: number;
                  sqlApiEnabled?: boolean;
                  sqlApiAllowedStatements?: string[];
                  sqlApiMaxRows?: number;
                  sqlApiMaxBytes?: number;
                  sqlApiTimeoutSeconds?: number;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string?,
            number?,
            string?,
            number?,
            string[]?,
            number?,
            boolean?,
            number?,
            boolean?,
            number?,
            number?,
            number?,
            number?,
            boolean?,
            string[]?,
            number?,
            number?,
            number?,
        ]
    ): Promise<Models.DedicatedDatabase> {
        let params: {
            databaseId: string;
            name?: string;
            status?: string;
            specification?: string;
            replicas?: number;
            syncMode?: string;
            networkIdleTimeoutSeconds?: number;
            networkIPAllowlist?: string[];
            idleTimeoutMinutes?: number;
            pitr?: boolean;
            pitrRetentionDays?: number;
            storageAutoscaling?: boolean;
            storageAutoscalingThresholdPercent?: number;
            storageAutoscalingMaxGb?: number;
            metricsTraceSampleRate?: number;
            metricsSlowQueryLogThresholdMs?: number;
            sqlApiEnabled?: boolean;
            sqlApiAllowedStatements?: string[];
            sqlApiMaxRows?: number;
            sqlApiMaxBytes?: number;
            sqlApiTimeoutSeconds?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                name?: string;
                status?: string;
                specification?: string;
                replicas?: number;
                syncMode?: string;
                networkIdleTimeoutSeconds?: number;
                networkIPAllowlist?: string[];
                idleTimeoutMinutes?: number;
                pitr?: boolean;
                pitrRetentionDays?: number;
                storageAutoscaling?: boolean;
                storageAutoscalingThresholdPercent?: number;
                storageAutoscalingMaxGb?: number;
                metricsTraceSampleRate?: number;
                metricsSlowQueryLogThresholdMs?: number;
                sqlApiEnabled?: boolean;
                sqlApiAllowedStatements?: string[];
                sqlApiMaxRows?: number;
                sqlApiMaxBytes?: number;
                sqlApiTimeoutSeconds?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                status: rest[1] as string,
                specification: rest[2] as string,
                replicas: rest[3] as number,
                syncMode: rest[4] as string,
                networkIdleTimeoutSeconds: rest[5] as number,
                networkIPAllowlist: rest[6] as string[],
                idleTimeoutMinutes: rest[7] as number,
                pitr: rest[8] as boolean,
                pitrRetentionDays: rest[9] as number,
                storageAutoscaling: rest[10] as boolean,
                storageAutoscalingThresholdPercent: rest[11] as number,
                storageAutoscalingMaxGb: rest[12] as number,
                metricsTraceSampleRate: rest[13] as number,
                metricsSlowQueryLogThresholdMs: rest[14] as number,
                sqlApiEnabled: rest[15] as boolean,
                sqlApiAllowedStatements: rest[16] as string[],
                sqlApiMaxRows: rest[17] as number,
                sqlApiMaxBytes: rest[18] as number,
                sqlApiTimeoutSeconds: rest[19] as number,
            };
        }

        const databaseId = params.databaseId;
        const name = params.name;
        const status = params.status;
        const specification = params.specification;
        const replicas = params.replicas;
        const syncMode = params.syncMode;
        const networkIdleTimeoutSeconds = params.networkIdleTimeoutSeconds;
        const networkIPAllowlist = params.networkIPAllowlist;
        const idleTimeoutMinutes = params.idleTimeoutMinutes;
        const pitr = params.pitr;
        const pitrRetentionDays = params.pitrRetentionDays;
        const storageAutoscaling = params.storageAutoscaling;
        const storageAutoscalingThresholdPercent =
            params.storageAutoscalingThresholdPercent;
        const storageAutoscalingMaxGb = params.storageAutoscalingMaxGb;
        const metricsTraceSampleRate = params.metricsTraceSampleRate;
        const metricsSlowQueryLogThresholdMs =
            params.metricsSlowQueryLogThresholdMs;
        const sqlApiEnabled = params.sqlApiEnabled;
        const sqlApiAllowedStatements = params.sqlApiAllowedStatements;
        const sqlApiMaxRows = params.sqlApiMaxRows;
        const sqlApiMaxBytes = params.sqlApiMaxBytes;
        const sqlApiTimeoutSeconds = params.sqlApiTimeoutSeconds;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof specification !== 'undefined') {
            apiPayload['specification'] = specification;
        }
        if (typeof replicas !== 'undefined') {
            apiPayload['replicas'] = replicas;
        }
        if (typeof syncMode !== 'undefined') {
            apiPayload['syncMode'] = syncMode;
        }
        if (typeof networkIdleTimeoutSeconds !== 'undefined') {
            apiPayload['networkIdleTimeoutSeconds'] = networkIdleTimeoutSeconds;
        }
        if (typeof networkIPAllowlist !== 'undefined') {
            apiPayload['networkIPAllowlist'] = networkIPAllowlist;
        }
        if (typeof idleTimeoutMinutes !== 'undefined') {
            apiPayload['idleTimeoutMinutes'] = idleTimeoutMinutes;
        }
        if (typeof pitr !== 'undefined') {
            apiPayload['pitr'] = pitr;
        }
        if (typeof pitrRetentionDays !== 'undefined') {
            apiPayload['pitrRetentionDays'] = pitrRetentionDays;
        }
        if (typeof storageAutoscaling !== 'undefined') {
            apiPayload['storageAutoscaling'] = storageAutoscaling;
        }
        if (typeof storageAutoscalingThresholdPercent !== 'undefined') {
            apiPayload['storageAutoscalingThresholdPercent'] =
                storageAutoscalingThresholdPercent;
        }
        if (typeof storageAutoscalingMaxGb !== 'undefined') {
            apiPayload['storageAutoscalingMaxGb'] = storageAutoscalingMaxGb;
        }
        if (typeof metricsTraceSampleRate !== 'undefined') {
            apiPayload['metricsTraceSampleRate'] = metricsTraceSampleRate;
        }
        if (typeof metricsSlowQueryLogThresholdMs !== 'undefined') {
            apiPayload['metricsSlowQueryLogThresholdMs'] =
                metricsSlowQueryLogThresholdMs;
        }
        if (typeof sqlApiEnabled !== 'undefined') {
            apiPayload['sqlApiEnabled'] = sqlApiEnabled;
        }
        if (typeof sqlApiAllowedStatements !== 'undefined') {
            apiPayload['sqlApiAllowedStatements'] = sqlApiAllowedStatements;
        }
        if (typeof sqlApiMaxRows !== 'undefined') {
            apiPayload['sqlApiMaxRows'] = sqlApiMaxRows;
        }
        if (typeof sqlApiMaxBytes !== 'undefined') {
            apiPayload['sqlApiMaxBytes'] = sqlApiMaxBytes;
        }
        if (typeof sqlApiTimeoutSeconds !== 'undefined') {
            apiPayload['sqlApiTimeoutSeconds'] = sqlApiTimeoutSeconds;
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
     * Delete a dedicated database. This action is irreversible. The database status will be set to 'deleting' and all resources will be cleaned up. Deletion is allowed from any state, and repeating the call re-dispatches the cleanup.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { databaseId: string }): Promise<{}>;
    /**
     * Delete a dedicated database. This action is irreversible. The database status will be set to 'deleting' and all resources will be cleaned up. Deletion is allowed from any state, and repeating the call re-dispatches the cleanup.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(databaseId: string): Promise<{}>;
    delete(paramsOrFirst: { databaseId: string } | string): Promise<{}> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * List all backups for a dedicated database. Results can be filtered by status and type.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, type, databaseId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackupList>}
     */
    listBackups(params: {
        databaseId: string;
        queries?: string[];
    }): Promise<Models.DedicatedDatabaseBackupList>;
    /**
     * List all backups for a dedicated database. Results can be filtered by status and type.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, type, databaseId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackupList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listBackups(
        databaseId: string,
        queries?: string[],
    ): Promise<Models.DedicatedDatabaseBackupList>;
    listBackups(
        paramsOrFirst: { databaseId: string; queries?: string[] } | string,
        ...rest: [string[]?]
    ): Promise<Models.DedicatedDatabaseBackupList> {
        let params: { databaseId: string; queries?: string[] };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                queries?: string[];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                queries: rest[0] as string[],
            };
        }

        const databaseId = params.databaseId;
        const queries = params.queries;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * Create a manual backup of a dedicated database. The backup will be created asynchronously and its status can be checked via the get backup endpoint.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.type - Backup type: full or incremental.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackup>}
     */
    createBackup(params: {
        databaseId: string;
        type?: string;
    }): Promise<Models.DedicatedDatabaseBackup>;
    /**
     * Create a manual backup of a dedicated database. The backup will be created asynchronously and its status can be checked via the get backup endpoint.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} type - Backup type: full or incremental.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackup>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBackup(
        databaseId: string,
        type?: string,
    ): Promise<Models.DedicatedDatabaseBackup>;
    createBackup(
        paramsOrFirst: { databaseId: string; type?: string } | string,
        ...rest: [string?]
    ): Promise<Models.DedicatedDatabaseBackup> {
        let params: { databaseId: string; type?: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                type?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                type: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const type = params.type;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
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
     * List scheduled backup policies for a dedicated database.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     */
    listBackupPolicies(params: {
        databaseId: string;
        queries?: string[];
    }): Promise<Models.BackupPolicyList>;
    /**
     * List scheduled backup policies for a dedicated database.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listBackupPolicies(
        databaseId: string,
        queries?: string[],
    ): Promise<Models.BackupPolicyList>;
    listBackupPolicies(
        paramsOrFirst: { databaseId: string; queries?: string[] } | string,
        ...rest: [string[]?]
    ): Promise<Models.BackupPolicyList> {
        let params: { databaseId: string; queries?: string[] };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                queries?: string[];
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                queries: rest[0] as string[],
            };
        }

        const databaseId = params.databaseId;
        const queries = params.queries;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups/policies'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * Create a scheduled backup policy for a dedicated database.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Policy name. Max length: 128 chars.
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {number} params.retention - Days to keep backups before deletion.
     * @param {string} params.type - Backup type: full or incremental.
     * @param {boolean} params.enabled - Is policy enabled? When disabled, no backups will be taken.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    createBackupPolicy(params: {
        databaseId: string;
        policyId: string;
        name: string;
        schedule: string;
        retention: number;
        type?: string;
        enabled?: boolean;
    }): Promise<Models.BackupPolicy>;
    /**
     * Create a scheduled backup policy for a dedicated database.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Policy name. Max length: 128 chars.
     * @param {string} schedule - Schedule CRON syntax.
     * @param {number} retention - Days to keep backups before deletion.
     * @param {string} type - Backup type: full or incremental.
     * @param {boolean} enabled - Is policy enabled? When disabled, no backups will be taken.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBackupPolicy(
        databaseId: string,
        policyId: string,
        name: string,
        schedule: string,
        retention: number,
        type?: string,
        enabled?: boolean,
    ): Promise<Models.BackupPolicy>;
    createBackupPolicy(
        paramsOrFirst:
            | {
                  databaseId: string;
                  policyId: string;
                  name: string;
                  schedule: string;
                  retention: number;
                  type?: string;
                  enabled?: boolean;
              }
            | string,
        ...rest: [string?, string?, string?, number?, string?, boolean?]
    ): Promise<Models.BackupPolicy> {
        let params: {
            databaseId: string;
            policyId: string;
            name: string;
            schedule: string;
            retention: number;
            type?: string;
            enabled?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                policyId: string;
                name: string;
                schedule: string;
                retention: number;
                type?: string;
                enabled?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                policyId: rest[0] as string,
                name: rest[1] as string,
                schedule: rest[2] as string,
                retention: rest[3] as number,
                type: rest[4] as string,
                enabled: rest[5] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const policyId = params.policyId;
        const name = params.name;
        const schedule = params.schedule;
        const retention = params.retention;
        const type = params.type;
        const enabled = params.enabled;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof policyId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "policyId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof schedule === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "schedule"',
            );
        }
        if (typeof retention === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "retention"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups/policies'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof policyId !== 'undefined') {
            apiPayload['policyId'] = policyId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof schedule !== 'undefined') {
            apiPayload['schedule'] = schedule;
        }
        if (typeof retention !== 'undefined') {
            apiPayload['retention'] = retention;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
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
     * Get a scheduled backup policy for a dedicated database.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.policyId - Policy ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    getBackupPolicy(params: {
        databaseId: string;
        policyId: string;
    }): Promise<Models.BackupPolicy>;
    /**
     * Get a scheduled backup policy for a dedicated database.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} policyId - Policy ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBackupPolicy(
        databaseId: string,
        policyId: string,
    ): Promise<Models.BackupPolicy>;
    getBackupPolicy(
        paramsOrFirst: { databaseId: string; policyId: string } | string,
        ...rest: [string?]
    ): Promise<Models.BackupPolicy> {
        let params: { databaseId: string; policyId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                policyId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                policyId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const policyId = params.policyId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof policyId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "policyId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups/policies/{policyId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{policyId}', encodeURIComponent(String(policyId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a scheduled backup policy for a dedicated database.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.policyId - Policy ID.
     * @param {string} params.name - Policy name. Max length: 128 chars.
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {number} params.retention - Days to keep backups before deletion.
     * @param {boolean} params.enabled - Is policy enabled? When disabled, no backups will be taken.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    updateBackupPolicy(params: {
        databaseId: string;
        policyId: string;
        name?: string;
        schedule?: string;
        retention?: number;
        enabled?: boolean;
    }): Promise<Models.BackupPolicy>;
    /**
     * Update a scheduled backup policy for a dedicated database.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} policyId - Policy ID.
     * @param {string} name - Policy name. Max length: 128 chars.
     * @param {string} schedule - Schedule CRON syntax.
     * @param {number} retention - Days to keep backups before deletion.
     * @param {boolean} enabled - Is policy enabled? When disabled, no backups will be taken.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBackupPolicy(
        databaseId: string,
        policyId: string,
        name?: string,
        schedule?: string,
        retention?: number,
        enabled?: boolean,
    ): Promise<Models.BackupPolicy>;
    updateBackupPolicy(
        paramsOrFirst:
            | {
                  databaseId: string;
                  policyId: string;
                  name?: string;
                  schedule?: string;
                  retention?: number;
                  enabled?: boolean;
              }
            | string,
        ...rest: [string?, string?, string?, number?, boolean?]
    ): Promise<Models.BackupPolicy> {
        let params: {
            databaseId: string;
            policyId: string;
            name?: string;
            schedule?: string;
            retention?: number;
            enabled?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                policyId: string;
                name?: string;
                schedule?: string;
                retention?: number;
                enabled?: boolean;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                policyId: rest[0] as string,
                name: rest[1] as string,
                schedule: rest[2] as string,
                retention: rest[3] as number,
                enabled: rest[4] as boolean,
            };
        }

        const databaseId = params.databaseId;
        const policyId = params.policyId;
        const name = params.name;
        const schedule = params.schedule;
        const retention = params.retention;
        const enabled = params.enabled;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof policyId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "policyId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups/policies/{policyId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{policyId}', encodeURIComponent(String(policyId)));
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof schedule !== 'undefined') {
            apiPayload['schedule'] = schedule;
        }
        if (typeof retention !== 'undefined') {
            apiPayload['retention'] = retention;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
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
     * Delete a scheduled backup policy for a dedicated database. Backups already taken by the policy are kept until their retention expires.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.policyId - Policy ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteBackupPolicy(params: {
        databaseId: string;
        policyId: string;
    }): Promise<{}>;
    /**
     * Delete a scheduled backup policy for a dedicated database. Backups already taken by the policy are kept until their retention expires.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} policyId - Policy ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBackupPolicy(databaseId: string, policyId: string): Promise<{}>;
    deleteBackupPolicy(
        paramsOrFirst: { databaseId: string; policyId: string } | string,
        ...rest: [string?]
    ): Promise<{}> {
        let params: { databaseId: string; policyId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                policyId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                policyId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const policyId = params.policyId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof policyId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "policyId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups/policies/{policyId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{policyId}', encodeURIComponent(String(policyId)));
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
     * Configure off-cluster backup storage for a dedicated database. Supports S3, GCS, and Azure Blob Storage destinations. Backups will be stored to the configured destination in addition to on-cluster storage.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.provider - Storage provider for off-cluster backups. Allowed values: s3 (Amazon S3 or S3-compatible), gcs (Google Cloud Storage), azure (Azure Blob Storage).
     * @param {string} params.bucket - Storage bucket or container name.
     * @param {string} params.accessKey - Access key or client ID for authentication.
     * @param {string} params.secretKey - Secret key or service account JSON for authentication.
     * @param {string} params.region - Storage region.
     * @param {string} params.prefix - Object key prefix for backups.
     * @param {string} params.endpoint - Custom endpoint for S3-compatible storage (e.g. MinIO).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackupStorage>}
     */
    updateBackupStorage(params: {
        databaseId: string;
        provider: string;
        bucket: string;
        accessKey: string;
        secretKey: string;
        region?: string;
        prefix?: string;
        endpoint?: string;
    }): Promise<Models.DedicatedDatabaseBackupStorage>;
    /**
     * Configure off-cluster backup storage for a dedicated database. Supports S3, GCS, and Azure Blob Storage destinations. Backups will be stored to the configured destination in addition to on-cluster storage.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} provider - Storage provider for off-cluster backups. Allowed values: s3 (Amazon S3 or S3-compatible), gcs (Google Cloud Storage), azure (Azure Blob Storage).
     * @param {string} bucket - Storage bucket or container name.
     * @param {string} accessKey - Access key or client ID for authentication.
     * @param {string} secretKey - Secret key or service account JSON for authentication.
     * @param {string} region - Storage region.
     * @param {string} prefix - Object key prefix for backups.
     * @param {string} endpoint - Custom endpoint for S3-compatible storage (e.g. MinIO).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackupStorage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBackupStorage(
        databaseId: string,
        provider: string,
        bucket: string,
        accessKey: string,
        secretKey: string,
        region?: string,
        prefix?: string,
        endpoint?: string,
    ): Promise<Models.DedicatedDatabaseBackupStorage>;
    updateBackupStorage(
        paramsOrFirst:
            | {
                  databaseId: string;
                  provider: string;
                  bucket: string;
                  accessKey: string;
                  secretKey: string;
                  region?: string;
                  prefix?: string;
                  endpoint?: string;
              }
            | string,
        ...rest: [string?, string?, string?, string?, string?, string?, string?]
    ): Promise<Models.DedicatedDatabaseBackupStorage> {
        let params: {
            databaseId: string;
            provider: string;
            bucket: string;
            accessKey: string;
            secretKey: string;
            region?: string;
            prefix?: string;
            endpoint?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                provider: string;
                bucket: string;
                accessKey: string;
                secretKey: string;
                region?: string;
                prefix?: string;
                endpoint?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                provider: rest[0] as string,
                bucket: rest[1] as string,
                accessKey: rest[2] as string,
                secretKey: rest[3] as string,
                region: rest[4] as string,
                prefix: rest[5] as string,
                endpoint: rest[6] as string,
            };
        }

        const databaseId = params.databaseId;
        const provider = params.provider;
        const bucket = params.bucket;
        const accessKey = params.accessKey;
        const secretKey = params.secretKey;
        const region = params.region;
        const prefix = params.prefix;
        const endpoint = params.endpoint;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof provider === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "provider"',
            );
        }
        if (typeof bucket === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucket"');
        }
        if (typeof accessKey === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "accessKey"',
            );
        }
        if (typeof secretKey === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "secretKey"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups/storage'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof provider !== 'undefined') {
            apiPayload['provider'] = provider;
        }
        if (typeof bucket !== 'undefined') {
            apiPayload['bucket'] = bucket;
        }
        if (typeof region !== 'undefined') {
            apiPayload['region'] = region;
        }
        if (typeof prefix !== 'undefined') {
            apiPayload['prefix'] = prefix;
        }
        if (typeof endpoint !== 'undefined') {
            apiPayload['endpoint'] = endpoint;
        }
        if (typeof accessKey !== 'undefined') {
            apiPayload['accessKey'] = accessKey;
        }
        if (typeof secretKey !== 'undefined') {
            apiPayload['secretKey'] = secretKey;
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
     * Get details of a specific database backup including its status, size, and timestamps.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.backupId - Backup ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackup>}
     */
    getBackup(params: {
        databaseId: string;
        backupId: string;
    }): Promise<Models.DedicatedDatabaseBackup>;
    /**
     * Get details of a specific database backup including its status, size, and timestamps.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} backupId - Backup ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackup>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBackup(
        databaseId: string,
        backupId: string,
    ): Promise<Models.DedicatedDatabaseBackup>;
    getBackup(
        paramsOrFirst: { databaseId: string; backupId: string } | string,
        ...rest: [string?]
    ): Promise<Models.DedicatedDatabaseBackup> {
        let params: { databaseId: string; backupId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                backupId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                backupId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const backupId = params.backupId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof backupId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "backupId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups/{backupId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{backupId}', encodeURIComponent(String(backupId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete a database backup. This will permanently remove the backup from storage and cannot be undone.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.backupId - Backup ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteBackup(params: { databaseId: string; backupId: string }): Promise<{}>;
    /**
     * Delete a database backup. This will permanently remove the backup from storage and cannot be undone.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} backupId - Backup ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBackup(databaseId: string, backupId: string): Promise<{}>;
    deleteBackup(
        paramsOrFirst: { databaseId: string; backupId: string } | string,
        ...rest: [string?]
    ): Promise<{}> {
        let params: { databaseId: string; backupId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                backupId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                backupId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const backupId = params.backupId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof backupId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "backupId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/backups/{backupId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{backupId}', encodeURIComponent(String(backupId)));
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
     * List all ephemeral branches for a dedicated database. Returns branch metadata including ID, name, namespace, and expiration time.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBranchList>}
     */
    listBranches(params: {
        databaseId: string;
    }): Promise<Models.DedicatedDatabaseBranchList>;
    /**
     * List all ephemeral branches for a dedicated database. Returns branch metadata including ID, name, namespace, and expiration time.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBranchList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listBranches(
        databaseId: string,
    ): Promise<Models.DedicatedDatabaseBranchList>;
    listBranches(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DedicatedDatabaseBranchList> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/branches'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * Create an ephemeral database branch from the primary via PVC snapshot. The branch is a full copy of the database at the current point in time, useful for testing schema migrations or running experiments without affecting production data. Branches expire after the configured TTL (default 24 hours). The branch is created asynchronously.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.branchId - Branch ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {number} params.ttl - Time-to-live in seconds before the branch expires. Min 300 (5 min), max 604800 (7 days). Default: 86400 (24h).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createBranch(params: {
        databaseId: string;
        branchId?: string;
        ttl?: number;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Create an ephemeral database branch from the primary via PVC snapshot. The branch is a full copy of the database at the current point in time, useful for testing schema migrations or running experiments without affecting production data. Branches expire after the configured TTL (default 24 hours). The branch is created asynchronously.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} branchId - Branch ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {number} ttl - Time-to-live in seconds before the branch expires. Min 300 (5 min), max 604800 (7 days). Default: 86400 (24h).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBranch(
        databaseId: string,
        branchId?: string,
        ttl?: number,
    ): Promise<Models.DedicatedDatabase>;
    createBranch(
        paramsOrFirst:
            { databaseId: string; branchId?: string; ttl?: number } | string,
        ...rest: [string?, number?]
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string; branchId?: string; ttl?: number };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                branchId?: string;
                ttl?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                branchId: rest[0] as string,
                ttl: rest[1] as number,
            };
        }

        const databaseId = params.databaseId;
        const branchId = params.branchId;
        const ttl = params.ttl;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/branches'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof branchId !== 'undefined') {
            apiPayload['branchId'] = branchId;
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

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete an ephemeral database branch. This removes the branch namespace, its PVC, and the associated VolumeSnapshot. The deletion runs asynchronously and is irreversible.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.branchId - Branch ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    deleteBranch(params: {
        databaseId: string;
        branchId: string;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Delete an ephemeral database branch. This removes the branch namespace, its PVC, and the associated VolumeSnapshot. The deletion runs asynchronously and is irreversible.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} branchId - Branch ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBranch(
        databaseId: string,
        branchId: string,
    ): Promise<Models.DedicatedDatabase>;
    deleteBranch(
        paramsOrFirst: { databaseId: string; branchId: string } | string,
        ...rest: [string?]
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string; branchId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                branchId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                branchId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const branchId = params.branchId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof branchId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "branchId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/branches/{branchId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace('{branchId}', encodeURIComponent(String(branchId)));
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
     * Rotate the primary connection credentials for a dedicated database. Generates a new password and updates the database atomically. Previous credentials stop working immediately. Returns the database with a refreshed connection string carrying the new password.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    updateCredentials(params: {
        databaseId: string;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Rotate the primary connection credentials for a dedicated database. Generates a new password and updates the database atomically. Previous credentials stop working immediately. Returns the database with a refreshed connection string carrying the new password.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateCredentials(databaseId: string): Promise<Models.DedicatedDatabase>;
    updateCredentials(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/credentials'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * Execute SQL through the console-facing Cloud endpoint. Cloud proxies through the edge platform to the per-database SQL API sidecar. Application traffic should bypass cloud entirely and POST directly to the per-database hostname: `https://db-{project}-{db}.{region}.appwrite.center/v1/sql/executions` with an `X-Appwrite-Key` header — that path scales to the whole DB fleet without a per-query cloud round-trip. The statement type must be on the database's configured allow-list. Use bound parameters for any user-supplied values — the API does not interpolate raw strings.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.sql - SQL statement to execute. Exactly one statement per request.
     * @param {object} params.bindings - Optional bound parameters. Pass either a positional list or a name => value map matching the placeholder style used in the SQL.
     * @param {number} params.timeoutSeconds - Per-call execution timeout override. Must be less than or equal to the database's configured sqlApiTimeoutSeconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseExecution>}
     */
    createExecution(params: {
        databaseId: string;
        sql: string;
        bindings?: object;
        timeoutSeconds?: number;
    }): Promise<Models.DedicatedDatabaseExecution>;
    /**
     * Execute SQL through the console-facing Cloud endpoint. Cloud proxies through the edge platform to the per-database SQL API sidecar. Application traffic should bypass cloud entirely and POST directly to the per-database hostname: `https://db-{project}-{db}.{region}.appwrite.center/v1/sql/executions` with an `X-Appwrite-Key` header — that path scales to the whole DB fleet without a per-query cloud round-trip. The statement type must be on the database's configured allow-list. Use bound parameters for any user-supplied values — the API does not interpolate raw strings.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} sql - SQL statement to execute. Exactly one statement per request.
     * @param {object} bindings - Optional bound parameters. Pass either a positional list or a name => value map matching the placeholder style used in the SQL.
     * @param {number} timeoutSeconds - Per-call execution timeout override. Must be less than or equal to the database's configured sqlApiTimeoutSeconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseExecution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createExecution(
        databaseId: string,
        sql: string,
        bindings?: object,
        timeoutSeconds?: number,
    ): Promise<Models.DedicatedDatabaseExecution>;
    createExecution(
        paramsOrFirst:
            | {
                  databaseId: string;
                  sql: string;
                  bindings?: object;
                  timeoutSeconds?: number;
              }
            | string,
        ...rest: [string?, object?, number?]
    ): Promise<Models.DedicatedDatabaseExecution> {
        let params: {
            databaseId: string;
            sql: string;
            bindings?: object;
            timeoutSeconds?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                sql: string;
                bindings?: object;
                timeoutSeconds?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                sql: rest[0] as string,
                bindings: rest[1] as object,
                timeoutSeconds: rest[2] as number,
            };
        }

        const databaseId = params.databaseId;
        const sql = params.sql;
        const bindings = params.bindings;
        const timeoutSeconds = params.timeoutSeconds;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof sql === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sql"');
        }
        const apiPath = '/mysql/{databaseId}/executions'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof sql !== 'undefined') {
            apiPayload['sql'] = sql;
        }
        if (typeof bindings !== 'undefined') {
            apiPayload['bindings'] = bindings;
        }
        if (typeof timeoutSeconds !== 'undefined') {
            apiPayload['timeoutSeconds'] = timeoutSeconds;
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
     * Trigger a manual failover for a dedicated database with high availability enabled. Promotes a replica to primary. The failover runs asynchronously; poll the database document for status updates. A database left mid-operation also accepts this call as a repair once nothing is driving the operation it is stuck in. Repairing a failover that did not finish, a `failed` database, a stranded upgrade or migrate, or a stranded compute resize additionally requires `targetReplicaId` to name the member to promote, because the default target may be the member that operation already promoted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.targetReplicaId - Target replica ID to promote. If not specified, the healthiest replica is selected.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createFailover(params: {
        databaseId: string;
        targetReplicaId?: string;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Trigger a manual failover for a dedicated database with high availability enabled. Promotes a replica to primary. The failover runs asynchronously; poll the database document for status updates. A database left mid-operation also accepts this call as a repair once nothing is driving the operation it is stuck in. Repairing a failover that did not finish, a `failed` database, a stranded upgrade or migrate, or a stranded compute resize additionally requires `targetReplicaId` to name the member to promote, because the default target may be the member that operation already promoted.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} targetReplicaId - Target replica ID to promote. If not specified, the healthiest replica is selected.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFailover(
        databaseId: string,
        targetReplicaId?: string,
    ): Promise<Models.DedicatedDatabase>;
    createFailover(
        paramsOrFirst:
            { databaseId: string; targetReplicaId?: string } | string,
        ...rest: [string?]
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string; targetReplicaId?: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                targetReplicaId?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                targetReplicaId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const targetReplicaId = params.targetReplicaId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/failovers'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof targetReplicaId !== 'undefined') {
            apiPayload['targetReplicaId'] = targetReplicaId;
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
     * Update the maintenance window for a dedicated database. Maintenance operations like minor version upgrades will be performed during this window.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.day - Day of the week for the maintenance window. Allowed values: sun, mon, tue, wed, thu, fri, sat.
     * @param {number} params.hourUtc - Hour in UTC (0-23) for maintenance window start.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    updateMaintenance(params: {
        databaseId: string;
        day: string;
        hourUtc: number;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Update the maintenance window for a dedicated database. Maintenance operations like minor version upgrades will be performed during this window.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} day - Day of the week for the maintenance window. Allowed values: sun, mon, tue, wed, thu, fri, sat.
     * @param {number} hourUtc - Hour in UTC (0-23) for maintenance window start.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMaintenance(
        databaseId: string,
        day: string,
        hourUtc: number,
    ): Promise<Models.DedicatedDatabase>;
    updateMaintenance(
        paramsOrFirst:
            { databaseId: string; day: string; hourUtc: number } | string,
        ...rest: [string?, number?]
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string; day: string; hourUtc: number };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                day: string;
                hourUtc: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                day: rest[0] as string,
                hourUtc: rest[1] as number,
            };
        }

        const databaseId = params.databaseId;
        const day = params.day;
        const hourUtc = params.hourUtc;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof day === 'undefined') {
            throw new AppwriteException('Missing required parameter: "day"');
        }
        if (typeof hourUtc === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "hourUtc"',
            );
        }
        const apiPath = '/mysql/{databaseId}/maintenance'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof day !== 'undefined') {
            apiPayload['day'] = day;
        }
        if (typeof hourUtc !== 'undefined') {
            apiPayload['hourUtc'] = hourUtc;
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
     * Migrate a database between shared and dedicated types. Shared to dedicated provisions an always-on dedicated instance; dedicated to shared converts to a serverless instance that scales to zero when idle. Data is copied to the target with a brief read-only window during cutover.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.targetType - Target database type to migrate to. Allowed values: shared (serverless, scales to zero when idle), dedicated (always-on with persistent resources).
     * @param {string} params.specification - Target specification to provision when migrating to dedicated. Ignored for shared. Defaults to the database's current specification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createMigration(params: {
        databaseId: string;
        targetType: string;
        specification?: string;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Migrate a database between shared and dedicated types. Shared to dedicated provisions an always-on dedicated instance; dedicated to shared converts to a serverless instance that scales to zero when idle. Data is copied to the target with a brief read-only window during cutover.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} targetType - Target database type to migrate to. Allowed values: shared (serverless, scales to zero when idle), dedicated (always-on with persistent resources).
     * @param {string} specification - Target specification to provision when migrating to dedicated. Ignored for shared. Defaults to the database's current specification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMigration(
        databaseId: string,
        targetType: string,
        specification?: string,
    ): Promise<Models.DedicatedDatabase>;
    createMigration(
        paramsOrFirst:
            | { databaseId: string; targetType: string; specification?: string }
            | string,
        ...rest: [string?, string?]
    ): Promise<Models.DedicatedDatabase> {
        let params: {
            databaseId: string;
            targetType: string;
            specification?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                targetType: string;
                specification?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                targetType: rest[0] as string,
                specification: rest[1] as string,
            };
        }

        const databaseId = params.databaseId;
        const targetType = params.targetType;
        const specification = params.specification;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof targetType === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "targetType"',
            );
        }
        const apiPath = '/mysql/{databaseId}/migrations'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof targetType !== 'undefined') {
            apiPayload['targetType'] = targetType;
        }
        if (typeof specification !== 'undefined') {
            apiPayload['specification'] = specification;
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
     * List the lifecycle operations recorded for a dedicated database, newest first. Every provision, update, restore, backup and replication action is recorded here with its outcome, including an attempt that was abandoned because another worker took over the database.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.status - Filter by operation status.
     * @param {number} params.limit - Maximum number of operations to return.
     * @param {number} params.offset - Number of operations to skip.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseOperationList>}
     */
    listOperations(params: {
        databaseId: string;
        status?: string;
        limit?: number;
        offset?: number;
    }): Promise<Models.DedicatedDatabaseOperationList>;
    /**
     * List the lifecycle operations recorded for a dedicated database, newest first. Every provision, update, restore, backup and replication action is recorded here with its outcome, including an attempt that was abandoned because another worker took over the database.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} status - Filter by operation status.
     * @param {number} limit - Maximum number of operations to return.
     * @param {number} offset - Number of operations to skip.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseOperationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listOperations(
        databaseId: string,
        status?: string,
        limit?: number,
        offset?: number,
    ): Promise<Models.DedicatedDatabaseOperationList>;
    listOperations(
        paramsOrFirst:
            | {
                  databaseId: string;
                  status?: string;
                  limit?: number;
                  offset?: number;
              }
            | string,
        ...rest: [string?, number?, number?]
    ): Promise<Models.DedicatedDatabaseOperationList> {
        let params: {
            databaseId: string;
            status?: string;
            limit?: number;
            offset?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                status?: string;
                limit?: number;
                offset?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                status: rest[0] as string,
                limit: rest[1] as number,
                offset: rest[2] as number,
            };
        }

        const databaseId = params.databaseId;
        const status = params.status;
        const limit = params.limit;
        const offset = params.offset;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/operations'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Get available point-in-time recovery windows for a dedicated database. Returns the earliest and latest recovery points.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePITRWindows>}
     */
    getPitr(params: {
        databaseId: string;
    }): Promise<Models.DedicatedDatabasePITRWindows>;
    /**
     * Get available point-in-time recovery windows for a dedicated database. Returns the earliest and latest recovery points.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePITRWindows>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPitr(databaseId: string): Promise<Models.DedicatedDatabasePITRWindows>;
    getPitr(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DedicatedDatabasePITRWindows> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/pitr'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * Get the connection pooler configuration for a dedicated database. Returns pooler mode, max connections, and pool size settings.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePooler>}
     */
    getPooler(params: {
        databaseId: string;
    }): Promise<Models.DedicatedDatabasePooler>;
    /**
     * Get the connection pooler configuration for a dedicated database. Returns pooler mode, max connections, and pool size settings.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePooler>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPooler(databaseId: string): Promise<Models.DedicatedDatabasePooler>;
    getPooler(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DedicatedDatabasePooler> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/pooler'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * Update the connection pooler configuration for a dedicated database. Configure pool mode, max connections, and pool sizes.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.mode - Connection pool mode. Allowed values: transaction, session. Transaction mode returns connections to the pool after each transaction; session mode holds connections for the entire session lifetime.
     * @param {number} params.maxConnections - Client-connection ceiling the pooler accepts. Supported on MySQL and MariaDB only; the PostgreSQL pooler has no client cap, so set networkMaxConnections on the database instead.
     * @param {number} params.defaultPoolSize - Default pool size per user.
     * @param {boolean} params.readWriteSplitting - Route SELECTs to HA replicas, writes and locked reads to the primary. Defaults to true when HA is enabled.
     * @param {string} params.poolerCpuRequest - Pooler sidecar CPU request override (Kubernetes quantity, e.g. "250m" or "1"). Leave null for the proportional default (5% of DB CPU, floor 100m).
     * @param {string} params.poolerCpuLimit - Pooler sidecar CPU limit override (Kubernetes quantity, e.g. "500m" or "1"). Leave null for the proportional default (10% of DB CPU, floor 200m). Changing this field rolls the database pod.
     * @param {string} params.poolerMemoryRequest - Pooler sidecar memory request override (Kubernetes quantity, e.g. "128Mi" or "1Gi"). Leave null for the proportional default (7.5% of DB memory, floor 64Mi).
     * @param {string} params.poolerMemoryLimit - Pooler sidecar memory limit override (Kubernetes quantity, e.g. "256Mi" or "1Gi"). Leave null for the proportional default (15% of DB memory, floor 128Mi). Changing this field rolls the database pod.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePooler>}
     */
    updatePooler(params: {
        databaseId: string;
        mode?: string;
        maxConnections?: number;
        defaultPoolSize?: number;
        readWriteSplitting?: boolean;
        poolerCpuRequest?: string;
        poolerCpuLimit?: string;
        poolerMemoryRequest?: string;
        poolerMemoryLimit?: string;
    }): Promise<Models.DedicatedDatabasePooler>;
    /**
     * Update the connection pooler configuration for a dedicated database. Configure pool mode, max connections, and pool sizes.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} mode - Connection pool mode. Allowed values: transaction, session. Transaction mode returns connections to the pool after each transaction; session mode holds connections for the entire session lifetime.
     * @param {number} maxConnections - Client-connection ceiling the pooler accepts. Supported on MySQL and MariaDB only; the PostgreSQL pooler has no client cap, so set networkMaxConnections on the database instead.
     * @param {number} defaultPoolSize - Default pool size per user.
     * @param {boolean} readWriteSplitting - Route SELECTs to HA replicas, writes and locked reads to the primary. Defaults to true when HA is enabled.
     * @param {string} poolerCpuRequest - Pooler sidecar CPU request override (Kubernetes quantity, e.g. "250m" or "1"). Leave null for the proportional default (5% of DB CPU, floor 100m).
     * @param {string} poolerCpuLimit - Pooler sidecar CPU limit override (Kubernetes quantity, e.g. "500m" or "1"). Leave null for the proportional default (10% of DB CPU, floor 200m). Changing this field rolls the database pod.
     * @param {string} poolerMemoryRequest - Pooler sidecar memory request override (Kubernetes quantity, e.g. "128Mi" or "1Gi"). Leave null for the proportional default (7.5% of DB memory, floor 64Mi).
     * @param {string} poolerMemoryLimit - Pooler sidecar memory limit override (Kubernetes quantity, e.g. "256Mi" or "1Gi"). Leave null for the proportional default (15% of DB memory, floor 128Mi). Changing this field rolls the database pod.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePooler>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePooler(
        databaseId: string,
        mode?: string,
        maxConnections?: number,
        defaultPoolSize?: number,
        readWriteSplitting?: boolean,
        poolerCpuRequest?: string,
        poolerCpuLimit?: string,
        poolerMemoryRequest?: string,
        poolerMemoryLimit?: string,
    ): Promise<Models.DedicatedDatabasePooler>;
    updatePooler(
        paramsOrFirst:
            | {
                  databaseId: string;
                  mode?: string;
                  maxConnections?: number;
                  defaultPoolSize?: number;
                  readWriteSplitting?: boolean;
                  poolerCpuRequest?: string;
                  poolerCpuLimit?: string;
                  poolerMemoryRequest?: string;
                  poolerMemoryLimit?: string;
              }
            | string,
        ...rest: [
            string?,
            number?,
            number?,
            boolean?,
            string?,
            string?,
            string?,
            string?,
        ]
    ): Promise<Models.DedicatedDatabasePooler> {
        let params: {
            databaseId: string;
            mode?: string;
            maxConnections?: number;
            defaultPoolSize?: number;
            readWriteSplitting?: boolean;
            poolerCpuRequest?: string;
            poolerCpuLimit?: string;
            poolerMemoryRequest?: string;
            poolerMemoryLimit?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                mode?: string;
                maxConnections?: number;
                defaultPoolSize?: number;
                readWriteSplitting?: boolean;
                poolerCpuRequest?: string;
                poolerCpuLimit?: string;
                poolerMemoryRequest?: string;
                poolerMemoryLimit?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                mode: rest[0] as string,
                maxConnections: rest[1] as number,
                defaultPoolSize: rest[2] as number,
                readWriteSplitting: rest[3] as boolean,
                poolerCpuRequest: rest[4] as string,
                poolerCpuLimit: rest[5] as string,
                poolerMemoryRequest: rest[6] as string,
                poolerMemoryLimit: rest[7] as string,
            };
        }

        const databaseId = params.databaseId;
        const mode = params.mode;
        const maxConnections = params.maxConnections;
        const defaultPoolSize = params.defaultPoolSize;
        const readWriteSplitting = params.readWriteSplitting;
        const poolerCpuRequest = params.poolerCpuRequest;
        const poolerCpuLimit = params.poolerCpuLimit;
        const poolerMemoryRequest = params.poolerMemoryRequest;
        const poolerMemoryLimit = params.poolerMemoryLimit;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/pooler'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof mode !== 'undefined') {
            apiPayload['mode'] = mode;
        }
        if (typeof maxConnections !== 'undefined') {
            apiPayload['maxConnections'] = maxConnections;
        }
        if (typeof defaultPoolSize !== 'undefined') {
            apiPayload['defaultPoolSize'] = defaultPoolSize;
        }
        if (typeof readWriteSplitting !== 'undefined') {
            apiPayload['readWriteSplitting'] = readWriteSplitting;
        }
        if (typeof poolerCpuRequest !== 'undefined') {
            apiPayload['poolerCpuRequest'] = poolerCpuRequest;
        }
        if (typeof poolerCpuLimit !== 'undefined') {
            apiPayload['poolerCpuLimit'] = poolerCpuLimit;
        }
        if (typeof poolerMemoryRequest !== 'undefined') {
            apiPayload['poolerMemoryRequest'] = poolerMemoryRequest;
        }
        if (typeof poolerMemoryLimit !== 'undefined') {
            apiPayload['poolerMemoryLimit'] = poolerMemoryLimit;
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
     * Get high availability status for a dedicated database. Returns replica statuses, replication lag, and sync mode.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseReplicas>}
     */
    getReplicas(params: {
        databaseId: string;
    }): Promise<Models.DedicatedDatabaseReplicas>;
    /**
     * Get high availability status for a dedicated database. Returns replica statuses, replication lag, and sync mode.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseReplicas>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getReplicas(databaseId: string): Promise<Models.DedicatedDatabaseReplicas>;
    getReplicas(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DedicatedDatabaseReplicas> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/replicas'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * List all restorations for a dedicated database. Results can be filtered by status and type.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.status - Filter by restoration status.
     * @param {string} params.type - Filter by restoration type.
     * @param {number} params.limit - Maximum number of restorations to return.
     * @param {number} params.offset - Number of restorations to skip.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestorationList>}
     */
    listRestorations(params: {
        databaseId: string;
        status?: string;
        type?: string;
        limit?: number;
        offset?: number;
    }): Promise<Models.DedicatedDatabaseRestorationList>;
    /**
     * List all restorations for a dedicated database. Results can be filtered by status and type.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} status - Filter by restoration status.
     * @param {string} type - Filter by restoration type.
     * @param {number} limit - Maximum number of restorations to return.
     * @param {number} offset - Number of restorations to skip.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestorationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRestorations(
        databaseId: string,
        status?: string,
        type?: string,
        limit?: number,
        offset?: number,
    ): Promise<Models.DedicatedDatabaseRestorationList>;
    listRestorations(
        paramsOrFirst:
            | {
                  databaseId: string;
                  status?: string;
                  type?: string;
                  limit?: number;
                  offset?: number;
              }
            | string,
        ...rest: [string?, string?, number?, number?]
    ): Promise<Models.DedicatedDatabaseRestorationList> {
        let params: {
            databaseId: string;
            status?: string;
            type?: string;
            limit?: number;
            offset?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                status?: string;
                type?: string;
                limit?: number;
                offset?: number;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                status: rest[0] as string,
                type: rest[1] as string,
                limit: rest[2] as number,
                offset: rest[3] as number,
            };
        }

        const databaseId = params.databaseId;
        const status = params.status;
        const type = params.type;
        const limit = params.limit;
        const offset = params.offset;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/restorations'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Restore a database from a backup or to a specific point in time (PITR). For backup restoration, provide a backupId. For PITR, provide a targetTime as an ISO 8601 datetime. PITR requires the database to have PITR enabled and is only available for enterprise databases.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.type - Restoration type. Allowed values: backup, pitr. Use "backup" to restore from a specific backup, or "pitr" for point-in-time recovery.
     * @param {string} params.backupId - Backup ID to restore from (required for backup type).
     * @param {string} params.targetDatabaseId - Existing database ID to restore into. The target must be distinct, ready, and use the same engine and version.
     * @param {string} params.targetTime - Target time for PITR (required for pitr type) as an [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) datetime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestoration>}
     */
    createRestoration(params: {
        databaseId: string;
        type?: string;
        backupId?: string;
        targetDatabaseId?: string;
        targetTime?: string;
    }): Promise<Models.DedicatedDatabaseRestoration>;
    /**
     * Restore a database from a backup or to a specific point in time (PITR). For backup restoration, provide a backupId. For PITR, provide a targetTime as an ISO 8601 datetime. PITR requires the database to have PITR enabled and is only available for enterprise databases.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} type - Restoration type. Allowed values: backup, pitr. Use "backup" to restore from a specific backup, or "pitr" for point-in-time recovery.
     * @param {string} backupId - Backup ID to restore from (required for backup type).
     * @param {string} targetDatabaseId - Existing database ID to restore into. The target must be distinct, ready, and use the same engine and version.
     * @param {string} targetTime - Target time for PITR (required for pitr type) as an [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) datetime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestoration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRestoration(
        databaseId: string,
        type?: string,
        backupId?: string,
        targetDatabaseId?: string,
        targetTime?: string,
    ): Promise<Models.DedicatedDatabaseRestoration>;
    createRestoration(
        paramsOrFirst:
            | {
                  databaseId: string;
                  type?: string;
                  backupId?: string;
                  targetDatabaseId?: string;
                  targetTime?: string;
              }
            | string,
        ...rest: [string?, string?, string?, string?]
    ): Promise<Models.DedicatedDatabaseRestoration> {
        let params: {
            databaseId: string;
            type?: string;
            backupId?: string;
            targetDatabaseId?: string;
            targetTime?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                type?: string;
                backupId?: string;
                targetDatabaseId?: string;
                targetTime?: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                type: rest[0] as string,
                backupId: rest[1] as string,
                targetDatabaseId: rest[2] as string,
                targetTime: rest[3] as string,
            };
        }

        const databaseId = params.databaseId;
        const type = params.type;
        const backupId = params.backupId;
        const targetDatabaseId = params.targetDatabaseId;
        const targetTime = params.targetTime;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/restorations'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof backupId !== 'undefined') {
            apiPayload['backupId'] = backupId;
        }
        if (typeof targetDatabaseId !== 'undefined') {
            apiPayload['targetDatabaseId'] = targetDatabaseId;
        }
        if (typeof targetTime !== 'undefined') {
            apiPayload['targetTime'] = targetTime;
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
     * Get details of a specific database restoration including its status, type, and timestamps.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.restorationId - Restoration ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestoration>}
     */
    getRestoration(params: {
        databaseId: string;
        restorationId: string;
    }): Promise<Models.DedicatedDatabaseRestoration>;
    /**
     * Get details of a specific database restoration including its status, type, and timestamps.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} restorationId - Restoration ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestoration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRestoration(
        databaseId: string,
        restorationId: string,
    ): Promise<Models.DedicatedDatabaseRestoration>;
    getRestoration(
        paramsOrFirst: { databaseId: string; restorationId: string } | string,
        ...rest: [string?]
    ): Promise<Models.DedicatedDatabaseRestoration> {
        let params: { databaseId: string; restorationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                restorationId: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                restorationId: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const restorationId = params.restorationId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof restorationId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "restorationId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/restorations/{restorationId}'
            .replace('{databaseId}', encodeURIComponent(String(databaseId)))
            .replace(
                '{restorationId}',
                encodeURIComponent(String(restorationId)),
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
     * Get real-time health and status information for a dedicated database. Returns health status, readiness, uptime, connection info, replica status, and volume information.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseStatus>}
     */
    getStatus(params: { databaseId: string }): Promise<Models.DatabaseStatus>;
    /**
     * Get real-time health and status information for a dedicated database. Returns health status, readiness, uptime, connection info, replica status, and volume information.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseStatus>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getStatus(databaseId: string): Promise<Models.DatabaseStatus>;
    getStatus(
        paramsOrFirst: { databaseId: string } | string,
    ): Promise<Models.DatabaseStatus> {
        let params: { databaseId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
            };
        }

        const databaseId = params.databaseId;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        const apiPath = '/mysql/{databaseId}/status'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
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
     * Upgrade a dedicated database to a new engine version. Uses blue-green deployment for zero-downtime cutover.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.targetVersion - Target engine version to upgrade to.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createUpgrade(params: {
        databaseId: string;
        targetVersion: string;
    }): Promise<Models.DedicatedDatabase>;
    /**
     * Upgrade a dedicated database to a new engine version. Uses blue-green deployment for zero-downtime cutover.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} targetVersion - Target engine version to upgrade to.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createUpgrade(
        databaseId: string,
        targetVersion: string,
    ): Promise<Models.DedicatedDatabase>;
    createUpgrade(
        paramsOrFirst: { databaseId: string; targetVersion: string } | string,
        ...rest: [string?]
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string; targetVersion: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                databaseId: string;
                targetVersion: string;
            };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                targetVersion: rest[0] as string,
            };
        }

        const databaseId = params.databaseId;
        const targetVersion = params.targetVersion;
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "databaseId"',
            );
        }
        if (typeof targetVersion === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "targetVersion"',
            );
        }
        const apiPath = '/mysql/{databaseId}/upgrades'.replace(
            '{databaseId}',
            encodeURIComponent(String(databaseId)),
        );
        const apiPayload: Payload = {};
        if (typeof targetVersion !== 'undefined') {
            apiPayload['targetVersion'] = targetVersion;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }
}
