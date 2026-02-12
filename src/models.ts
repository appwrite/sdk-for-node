import { DatabaseType } from "./enums/database-type"
import { AttributeStatus } from "./enums/attribute-status"
import { ColumnStatus } from "./enums/column-status"
import { IndexStatus } from "./enums/index-status"
import { DeploymentStatus } from "./enums/deployment-status"
import { ExecutionTrigger } from "./enums/execution-trigger"
import { ExecutionStatus } from "./enums/execution-status"
import { HealthAntivirusStatus } from "./enums/health-antivirus-status"
import { HealthCheckStatus } from "./enums/health-check-status"
import { MessageStatus } from "./enums/message-status"

/**
 * Appwrite Models
 */
export namespace Models {

    declare const __default: unique symbol;

    /**
     * Rows List
     */
    export type RowList<Row extends Models.Row = Models.DefaultRow> = {
        /**
         * Total number of rows that matched your query.
         */
        total: number;
        /**
         * List of rows.
         */
        rows: Row[];
    }

    /**
     * Documents List
     */
    export type DocumentList<Document extends Models.Document = Models.DefaultDocument> = {
        /**
         * Total number of documents that matched your query.
         */
        total: number;
        /**
         * List of documents.
         */
        documents: Document[];
    }

    /**
     * Tables List
     */
    export type TableList = {
        /**
         * Total number of tables that matched your query.
         */
        total: number;
        /**
         * List of tables.
         */
        tables: Table[];
    }

    /**
     * Collections List
     */
    export type CollectionList = {
        /**
         * Total number of collections that matched your query.
         */
        total: number;
        /**
         * List of collections.
         */
        collections: Collection[];
    }

    /**
     * Databases List
     */
    export type DatabaseList = {
        /**
         * Total number of databases that matched your query.
         */
        total: number;
        /**
         * List of databases.
         */
        databases: Database[];
    }

    /**
     * Indexes List
     */
    export type IndexList = {
        /**
         * Total number of indexes that matched your query.
         */
        total: number;
        /**
         * List of indexes.
         */
        indexes: Index[];
    }

    /**
     * Column Indexes List
     */
    export type ColumnIndexList = {
        /**
         * Total number of indexes that matched your query.
         */
        total: number;
        /**
         * List of indexes.
         */
        indexes: ColumnIndex[];
    }

    /**
     * Users List
     */
    export type UserList<Preferences extends Models.Preferences = Models.DefaultPreferences> = {
        /**
         * Total number of users that matched your query.
         */
        total: number;
        /**
         * List of users.
         */
        users: User<Preferences>[];
    }

    /**
     * Sessions List
     */
    export type SessionList = {
        /**
         * Total number of sessions that matched your query.
         */
        total: number;
        /**
         * List of sessions.
         */
        sessions: Session[];
    }

    /**
     * Identities List
     */
    export type IdentityList = {
        /**
         * Total number of identities that matched your query.
         */
        total: number;
        /**
         * List of identities.
         */
        identities: Identity[];
    }

    /**
     * Logs List
     */
    export type LogList = {
        /**
         * Total number of logs that matched your query.
         */
        total: number;
        /**
         * List of logs.
         */
        logs: Log[];
    }

    /**
     * Files List
     */
    export type FileList = {
        /**
         * Total number of files that matched your query.
         */
        total: number;
        /**
         * List of files.
         */
        files: File[];
    }

    /**
     * Buckets List
     */
    export type BucketList = {
        /**
         * Total number of buckets that matched your query.
         */
        total: number;
        /**
         * List of buckets.
         */
        buckets: Bucket[];
    }

    /**
     * Resource Tokens List
     */
    export type ResourceTokenList = {
        /**
         * Total number of tokens that matched your query.
         */
        total: number;
        /**
         * List of tokens.
         */
        tokens: ResourceToken[];
    }

    /**
     * Teams List
     */
    export type TeamList<Preferences extends Models.Preferences = Models.DefaultPreferences> = {
        /**
         * Total number of teams that matched your query.
         */
        total: number;
        /**
         * List of teams.
         */
        teams: Team<Preferences>[];
    }

    /**
     * Memberships List
     */
    export type MembershipList = {
        /**
         * Total number of memberships that matched your query.
         */
        total: number;
        /**
         * List of memberships.
         */
        memberships: Membership[];
    }

    /**
     * Sites List
     */
    export type SiteList = {
        /**
         * Total number of sites that matched your query.
         */
        total: number;
        /**
         * List of sites.
         */
        sites: Site[];
    }

    /**
     * Functions List
     */
    export type FunctionList = {
        /**
         * Total number of functions that matched your query.
         */
        total: number;
        /**
         * List of functions.
         */
        functions: Function[];
    }

    /**
     * Frameworks List
     */
    export type FrameworkList = {
        /**
         * Total number of frameworks that matched your query.
         */
        total: number;
        /**
         * List of frameworks.
         */
        frameworks: Framework[];
    }

    /**
     * Runtimes List
     */
    export type RuntimeList = {
        /**
         * Total number of runtimes that matched your query.
         */
        total: number;
        /**
         * List of runtimes.
         */
        runtimes: Runtime[];
    }

    /**
     * Deployments List
     */
    export type DeploymentList = {
        /**
         * Total number of deployments that matched your query.
         */
        total: number;
        /**
         * List of deployments.
         */
        deployments: Deployment[];
    }

    /**
     * Executions List
     */
    export type ExecutionList = {
        /**
         * Total number of executions that matched your query.
         */
        total: number;
        /**
         * List of executions.
         */
        executions: Execution[];
    }

    /**
     * Countries List
     */
    export type CountryList = {
        /**
         * Total number of countries that matched your query.
         */
        total: number;
        /**
         * List of countries.
         */
        countries: Country[];
    }

    /**
     * Continents List
     */
    export type ContinentList = {
        /**
         * Total number of continents that matched your query.
         */
        total: number;
        /**
         * List of continents.
         */
        continents: Continent[];
    }

    /**
     * Languages List
     */
    export type LanguageList = {
        /**
         * Total number of languages that matched your query.
         */
        total: number;
        /**
         * List of languages.
         */
        languages: Language[];
    }

    /**
     * Currencies List
     */
    export type CurrencyList = {
        /**
         * Total number of currencies that matched your query.
         */
        total: number;
        /**
         * List of currencies.
         */
        currencies: Currency[];
    }

    /**
     * Phones List
     */
    export type PhoneList = {
        /**
         * Total number of phones that matched your query.
         */
        total: number;
        /**
         * List of phones.
         */
        phones: Phone[];
    }

    /**
     * Variables List
     */
    export type VariableList = {
        /**
         * Total number of variables that matched your query.
         */
        total: number;
        /**
         * List of variables.
         */
        variables: Variable[];
    }

    /**
     * Status List
     */
    export type HealthStatusList = {
        /**
         * Total number of statuses that matched your query.
         */
        total: number;
        /**
         * List of statuses.
         */
        statuses: HealthStatus[];
    }

    /**
     * Locale codes list
     */
    export type LocaleCodeList = {
        /**
         * Total number of localeCodes that matched your query.
         */
        total: number;
        /**
         * List of localeCodes.
         */
        localeCodes: LocaleCode[];
    }

    /**
     * Provider list
     */
    export type ProviderList = {
        /**
         * Total number of providers that matched your query.
         */
        total: number;
        /**
         * List of providers.
         */
        providers: Provider[];
    }

    /**
     * Message list
     */
    export type MessageList = {
        /**
         * Total number of messages that matched your query.
         */
        total: number;
        /**
         * List of messages.
         */
        messages: Message[];
    }

    /**
     * Topic list
     */
    export type TopicList = {
        /**
         * Total number of topics that matched your query.
         */
        total: number;
        /**
         * List of topics.
         */
        topics: Topic[];
    }

    /**
     * Subscriber list
     */
    export type SubscriberList = {
        /**
         * Total number of subscribers that matched your query.
         */
        total: number;
        /**
         * List of subscribers.
         */
        subscribers: Subscriber[];
    }

    /**
     * Target list
     */
    export type TargetList = {
        /**
         * Total number of targets that matched your query.
         */
        total: number;
        /**
         * List of targets.
         */
        targets: Target[];
    }

    /**
     * Transaction List
     */
    export type TransactionList = {
        /**
         * Total number of transactions that matched your query.
         */
        total: number;
        /**
         * List of transactions.
         */
        transactions: Transaction[];
    }

    /**
     * Specifications List
     */
    export type SpecificationList = {
        /**
         * Total number of specifications that matched your query.
         */
        total: number;
        /**
         * List of specifications.
         */
        specifications: Specification[];
    }

    /**
     * Database
     */
    export type Database = {
        /**
         * Database ID.
         */
        $id: string;
        /**
         * Database name.
         */
        name: string;
        /**
         * Database creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Database update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * If database is enabled. Can be 'enabled' or 'disabled'. When disabled, the database is inaccessible to users, but remains accessible to Server SDKs using API keys.
         */
        enabled: boolean;
        /**
         * Database type.
         */
        type: DatabaseType;
        /**
         * Database backup policies.
         */
        policies: Index[];
        /**
         * Database backup archives.
         */
        archives: Collection[];
    }

    /**
     * Collection
     */
    export type Collection = {
        /**
         * Collection ID.
         */
        $id: string;
        /**
         * Collection creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Collection update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Collection permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Database ID.
         */
        databaseId: string;
        /**
         * Collection name.
         */
        name: string;
        /**
         * Collection enabled. Can be 'enabled' or 'disabled'. When disabled, the collection is inaccessible to users, but remains accessible to Server SDKs using API keys.
         */
        enabled: boolean;
        /**
         * Whether document-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        documentSecurity: boolean;
        /**
         * Collection attributes.
         */
        attributes: (Models.AttributeBoolean | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributePoint | Models.AttributeLine | Models.AttributePolygon | Models.AttributeString)[];
        /**
         * Collection indexes.
         */
        indexes: Index[];
        /**
         * Maximum document size in bytes. Returns 0 when no limit applies.
         */
        bytesMax: number;
        /**
         * Currently used document size in bytes based on defined attributes.
         */
        bytesUsed: number;
    }

    /**
     * Attributes List
     */
    export type AttributeList = {
        /**
         * Total number of attributes in the given collection.
         */
        total: number;
        /**
         * List of attributes.
         */
        attributes: (Models.AttributeBoolean | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributePoint | Models.AttributeLine | Models.AttributePolygon | Models.AttributeString)[];
    }

    /**
     * AttributeString
     */
    export type AttributeString = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Attribute size.
         */
        size: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
        /**
         * Defines whether this attribute is encrypted or not.
         */
        encrypt?: boolean;
    }

    /**
     * AttributeInteger
     */
    export type AttributeInteger = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number | bigint;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number | bigint;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: number;
    }

    /**
     * AttributeFloat
     */
    export type AttributeFloat = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: number;
    }

    /**
     * AttributeBoolean
     */
    export type AttributeBoolean = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: boolean;
    }

    /**
     * AttributeEmail
     */
    export type AttributeEmail = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }

    /**
     * AttributeEnum
     */
    export type AttributeEnum = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Array of elements in enumerated type.
         */
        elements: string[];
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }

    /**
     * AttributeIP
     */
    export type AttributeIp = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }

    /**
     * AttributeURL
     */
    export type AttributeUrl = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }

    /**
     * AttributeDatetime
     */
    export type AttributeDatetime = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * ISO 8601 format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Only null is optional
         */
        default?: string;
    }

    /**
     * AttributeRelationship
     */
    export type AttributeRelationship = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The ID of the related collection.
         */
        relatedCollection: string;
        /**
         * The type of the relationship.
         */
        relationType: string;
        /**
         * Is the relationship two-way?
         */
        twoWay: boolean;
        /**
         * The key of the two-way relationship.
         */
        twoWayKey: string;
        /**
         * How deleting the parent document will propagate to child documents.
         */
        onDelete: string;
        /**
         * Whether this is the parent or child side of the relationship
         */
        side: string;
    }

    /**
     * AttributePoint
     */
    export type AttributePoint = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: any[];
    }

    /**
     * AttributeLine
     */
    export type AttributeLine = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: any[];
    }

    /**
     * AttributePolygon
     */
    export type AttributePolygon = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: any[];
    }

    /**
     * AttributeVarchar
     */
    export type AttributeVarchar = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Attribute size.
         */
        size: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }

    /**
     * AttributeText
     */
    export type AttributeText = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }

    /**
     * AttributeMediumtext
     */
    export type AttributeMediumtext = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }

    /**
     * AttributeLongtext
     */
    export type AttributeLongtext = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }

    /**
     * Table
     */
    export type Table = {
        /**
         * Table ID.
         */
        $id: string;
        /**
         * Table creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Table update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Table permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Database ID.
         */
        databaseId: string;
        /**
         * Table name.
         */
        name: string;
        /**
         * Table enabled. Can be 'enabled' or 'disabled'. When disabled, the table is inaccessible to users, but remains accessible to Server SDKs using API keys.
         */
        enabled: boolean;
        /**
         * Whether row-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        rowSecurity: boolean;
        /**
         * Table columns.
         */
        columns: (Models.ColumnBoolean | Models.ColumnInteger | Models.ColumnFloat | Models.ColumnEmail | Models.ColumnEnum | Models.ColumnUrl | Models.ColumnIp | Models.ColumnDatetime | Models.ColumnRelationship | Models.ColumnPoint | Models.ColumnLine | Models.ColumnPolygon | Models.ColumnVarchar | Models.ColumnText | Models.ColumnMediumtext | Models.ColumnLongtext | Models.ColumnString)[];
        /**
         * Table indexes.
         */
        indexes: ColumnIndex[];
        /**
         * Maximum row size in bytes. Returns 0 when no limit applies.
         */
        bytesMax: number;
        /**
         * Currently used row size in bytes based on defined columns.
         */
        bytesUsed: number;
    }

    /**
     * Columns List
     */
    export type ColumnList = {
        /**
         * Total number of columns in the given table.
         */
        total: number;
        /**
         * List of columns.
         */
        columns: (Models.ColumnBoolean | Models.ColumnInteger | Models.ColumnFloat | Models.ColumnEmail | Models.ColumnEnum | Models.ColumnUrl | Models.ColumnIp | Models.ColumnDatetime | Models.ColumnRelationship | Models.ColumnPoint | Models.ColumnLine | Models.ColumnPolygon | Models.ColumnVarchar | Models.ColumnText | Models.ColumnMediumtext | Models.ColumnLongtext | Models.ColumnString)[];
    }

    /**
     * ColumnString
     */
    export type ColumnString = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Column size.
         */
        size: number;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: string;
        /**
         * Defines whether this column is encrypted or not.
         */
        encrypt?: boolean;
    }

    /**
     * ColumnInteger
     */
    export type ColumnInteger = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number | bigint;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number | bigint;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: number;
    }

    /**
     * ColumnFloat
     */
    export type ColumnFloat = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: number;
    }

    /**
     * ColumnBoolean
     */
    export type ColumnBoolean = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: boolean;
    }

    /**
     * ColumnEmail
     */
    export type ColumnEmail = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: string;
    }

    /**
     * ColumnEnum
     */
    export type ColumnEnum = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Array of elements in enumerated type.
         */
        elements: string[];
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: string;
    }

    /**
     * ColumnIP
     */
    export type ColumnIp = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: string;
    }

    /**
     * ColumnURL
     */
    export type ColumnUrl = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: string;
    }

    /**
     * ColumnDatetime
     */
    export type ColumnDatetime = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * ISO 8601 format.
         */
        format: string;
        /**
         * Default value for column when not provided. Only null is optional
         */
        default?: string;
    }

    /**
     * ColumnRelationship
     */
    export type ColumnRelationship = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The ID of the related table.
         */
        relatedTable: string;
        /**
         * The type of the relationship.
         */
        relationType: string;
        /**
         * Is the relationship two-way?
         */
        twoWay: boolean;
        /**
         * The key of the two-way relationship.
         */
        twoWayKey: string;
        /**
         * How deleting the parent document will propagate to child documents.
         */
        onDelete: string;
        /**
         * Whether this is the parent or child side of the relationship
         */
        side: string;
    }

    /**
     * ColumnPoint
     */
    export type ColumnPoint = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: any[];
    }

    /**
     * ColumnLine
     */
    export type ColumnLine = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: any[];
    }

    /**
     * ColumnPolygon
     */
    export type ColumnPolygon = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: any[];
    }

    /**
     * ColumnVarchar
     */
    export type ColumnVarchar = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Column size.
         */
        size: number;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: string;
    }

    /**
     * ColumnText
     */
    export type ColumnText = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: string;
    }

    /**
     * ColumnMediumtext
     */
    export type ColumnMediumtext = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: string;
    }

    /**
     * ColumnLongtext
     */
    export type ColumnLongtext = {
        /**
         * Column Key.
         */
        key: string;
        /**
         * Column type.
         */
        type: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for column when not provided. Cannot be set when column is required.
         */
        default?: string;
    }

    /**
     * Index
     */
    export type Index = {
        /**
         * Index ID.
         */
        $id: string;
        /**
         * Index creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Index update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Index key.
         */
        key: string;
        /**
         * Index type.
         */
        type: string;
        /**
         * Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: IndexStatus;
        /**
         * Error message. Displays error generated on failure of creating or deleting an index.
         */
        error: string;
        /**
         * Index attributes.
         */
        attributes: string[];
        /**
         * Index attributes length.
         */
        lengths: number[];
        /**
         * Index orders.
         */
        orders?: string[];
    }

    /**
     * Index
     */
    export type ColumnIndex = {
        /**
         * Index ID.
         */
        $id: string;
        /**
         * Index creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Index update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Index Key.
         */
        key: string;
        /**
         * Index type.
         */
        type: string;
        /**
         * Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an index.
         */
        error: string;
        /**
         * Index columns.
         */
        columns: string[];
        /**
         * Index columns length.
         */
        lengths: number[];
        /**
         * Index orders.
         */
        orders?: string[];
    }

    /**
     * Row
     */
    export type Row = {
        /**
         * Row ID.
         */
        $id: string;
        /**
         * Row automatically incrementing ID.
         */
        $sequence: number;
        /**
         * Table ID.
         */
        $tableId: string;
        /**
         * Database ID.
         */
        $databaseId: string;
        /**
         * Row creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Row update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Row permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
    }

    export type DefaultRow = Row & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Document
     */
    export type Document = {
        /**
         * Document ID.
         */
        $id: string;
        /**
         * Document automatically incrementing ID.
         */
        $sequence: number;
        /**
         * Collection ID.
         */
        $collectionId: string;
        /**
         * Database ID.
         */
        $databaseId: string;
        /**
         * Document creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Document update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Document permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
    }

    export type DefaultDocument = Document & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Log
     */
    export type Log = {
        /**
         * Event name.
         */
        event: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * User Email.
         */
        userEmail: string;
        /**
         * User Name.
         */
        userName: string;
        /**
         * API mode when event triggered.
         */
        mode: string;
        /**
         * IP session in use when the session was created.
         */
        ip: string;
        /**
         * Log creation date in ISO 8601 format.
         */
        time: string;
        /**
         * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
         */
        osCode: string;
        /**
         * Operating system name.
         */
        osName: string;
        /**
         * Operating system version.
         */
        osVersion: string;
        /**
         * Client type.
         */
        clientType: string;
        /**
         * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
         */
        clientCode: string;
        /**
         * Client name.
         */
        clientName: string;
        /**
         * Client version.
         */
        clientVersion: string;
        /**
         * Client engine name.
         */
        clientEngine: string;
        /**
         * Client engine name.
         */
        clientEngineVersion: string;
        /**
         * Device name.
         */
        deviceName: string;
        /**
         * Device brand name.
         */
        deviceBrand: string;
        /**
         * Device model name.
         */
        deviceModel: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
    }

    /**
     * User
     */
    export type User<Preferences extends Models.Preferences = Models.DefaultPreferences> = {
        /**
         * User ID.
         */
        $id: string;
        /**
         * User creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * User update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * User name.
         */
        name: string;
        /**
         * Hashed user password.
         */
        password?: string;
        /**
         * Password hashing algorithm.
         */
        hash?: string;
        /**
         * Password hashing algorithm configuration.
         */
        hashOptions?: object;
        /**
         * User registration date in ISO 8601 format.
         */
        registration: string;
        /**
         * User status. Pass `true` for enabled and `false` for disabled.
         */
        status: boolean;
        /**
         * Labels for the user.
         */
        labels: string[];
        /**
         * Password update time in ISO 8601 format.
         */
        passwordUpdate: string;
        /**
         * User email address.
         */
        email: string;
        /**
         * User phone number in E.164 format.
         */
        phone: string;
        /**
         * Email verification status.
         */
        emailVerification: boolean;
        /**
         * Phone verification status.
         */
        phoneVerification: boolean;
        /**
         * Multi factor authentication status.
         */
        mfa: boolean;
        /**
         * User preferences as a key-value object
         */
        prefs: Preferences;
        /**
         * A user-owned message receiver. A single user may have multiple e.g. emails, phones, and a browser. Each target is registered with a single provider.
         */
        targets: Target[];
        /**
         * Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
         */
        accessedAt: string;
    }

    /**
     * AlgoMD5
     */
    export type AlgoMd5 = {
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoSHA
     */
    export type AlgoSha = {
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoPHPass
     */
    export type AlgoPhpass = {
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoBcrypt
     */
    export type AlgoBcrypt = {
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoScrypt
     */
    export type AlgoScrypt = {
        /**
         * Algo type.
         */
        type: string;
        /**
         * CPU complexity of computed hash.
         */
        costCpu: number;
        /**
         * Memory complexity of computed hash.
         */
        costMemory: number;
        /**
         * Parallelization of computed hash.
         */
        costParallel: number;
        /**
         * Length used to compute hash.
         */
        length: number;
    }

    /**
     * AlgoScryptModified
     */
    export type AlgoScryptModified = {
        /**
         * Algo type.
         */
        type: string;
        /**
         * Salt used to compute hash.
         */
        salt: string;
        /**
         * Separator used to compute hash.
         */
        saltSeparator: string;
        /**
         * Key used to compute hash.
         */
        signerKey: string;
    }

    /**
     * AlgoArgon2
     */
    export type AlgoArgon2 = {
        /**
         * Algo type.
         */
        type: string;
        /**
         * Memory used to compute hash.
         */
        memoryCost: number;
        /**
         * Amount of time consumed to compute hash
         */
        timeCost: number;
        /**
         * Number of threads used to compute hash.
         */
        threads: number;
    }

    /**
     * Preferences
     */
    export type Preferences = {
    }

    export type DefaultPreferences = Preferences & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Session
     */
    export type Session = {
        /**
         * Session ID.
         */
        $id: string;
        /**
         * Session creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Session update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Session expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * Session Provider.
         */
        provider: string;
        /**
         * Session Provider User ID.
         */
        providerUid: string;
        /**
         * Session Provider Access Token.
         */
        providerAccessToken: string;
        /**
         * The date of when the access token expires in ISO 8601 format.
         */
        providerAccessTokenExpiry: string;
        /**
         * Session Provider Refresh Token.
         */
        providerRefreshToken: string;
        /**
         * IP in use when the session was created.
         */
        ip: string;
        /**
         * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
         */
        osCode: string;
        /**
         * Operating system name.
         */
        osName: string;
        /**
         * Operating system version.
         */
        osVersion: string;
        /**
         * Client type.
         */
        clientType: string;
        /**
         * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
         */
        clientCode: string;
        /**
         * Client name.
         */
        clientName: string;
        /**
         * Client version.
         */
        clientVersion: string;
        /**
         * Client engine name.
         */
        clientEngine: string;
        /**
         * Client engine name.
         */
        clientEngineVersion: string;
        /**
         * Device name.
         */
        deviceName: string;
        /**
         * Device brand name.
         */
        deviceBrand: string;
        /**
         * Device model name.
         */
        deviceModel: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
        /**
         * Returns true if this the current user session.
         */
        current: boolean;
        /**
         * Returns a list of active session factors.
         */
        factors: string[];
        /**
         * Secret used to authenticate the user. Only included if the request was made with an API key
         */
        secret: string;
        /**
         * Most recent date in ISO 8601 format when the session successfully passed MFA challenge.
         */
        mfaUpdatedAt: string;
    }

    /**
     * Identity
     */
    export type Identity = {
        /**
         * Identity ID.
         */
        $id: string;
        /**
         * Identity creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Identity update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Identity Provider.
         */
        provider: string;
        /**
         * ID of the User in the Identity Provider.
         */
        providerUid: string;
        /**
         * Email of the User in the Identity Provider.
         */
        providerEmail: string;
        /**
         * Identity Provider Access Token.
         */
        providerAccessToken: string;
        /**
         * The date of when the access token expires in ISO 8601 format.
         */
        providerAccessTokenExpiry: string;
        /**
         * Identity Provider Refresh Token.
         */
        providerRefreshToken: string;
    }

    /**
     * Token
     */
    export type Token = {
        /**
         * Token ID.
         */
        $id: string;
        /**
         * Token creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        secret: string;
        /**
         * Token expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * Security phrase of a token. Empty if security phrase was not requested when creating a token. It includes randomly generated phrase which is also sent in the external resource such as email.
         */
        phrase: string;
    }

    /**
     * JWT
     */
    export type Jwt = {
        /**
         * JWT encoded string.
         */
        jwt: string;
    }

    /**
     * Locale
     */
    export type Locale = {
        /**
         * User IP address.
         */
        ip: string;
        /**
         * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format
         */
        countryCode: string;
        /**
         * Country name. This field support localization.
         */
        country: string;
        /**
         * Continent code. A two character continent code "AF" for Africa, "AN" for Antarctica, "AS" for Asia, "EU" for Europe, "NA" for North America, "OC" for Oceania, and "SA" for South America.
         */
        continentCode: string;
        /**
         * Continent name. This field support localization.
         */
        continent: string;
        /**
         * True if country is part of the European Union.
         */
        eu: boolean;
        /**
         * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format
         */
        currency: string;
    }

    /**
     * LocaleCode
     */
    export type LocaleCode = {
        /**
         * Locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
         */
        code: string;
        /**
         * Locale name
         */
        name: string;
    }

    /**
     * File
     */
    export type File = {
        /**
         * File ID.
         */
        $id: string;
        /**
         * Bucket ID.
         */
        bucketId: string;
        /**
         * File creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * File update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * File permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * File name.
         */
        name: string;
        /**
         * File MD5 signature.
         */
        signature: string;
        /**
         * File mime type.
         */
        mimeType: string;
        /**
         * File original size in bytes.
         */
        sizeOriginal: number;
        /**
         * Total number of chunks available
         */
        chunksTotal: number;
        /**
         * Total number of chunks uploaded
         */
        chunksUploaded: number;
        /**
         * Whether file contents are encrypted at rest.
         */
        encryption: boolean;
        /**
         * Compression algorithm used for the file. Will be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd).
         */
        compression: string;
    }

    /**
     * Bucket
     */
    export type Bucket = {
        /**
         * Bucket ID.
         */
        $id: string;
        /**
         * Bucket creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Bucket update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Bucket permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Whether file-level security is enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        fileSecurity: boolean;
        /**
         * Bucket name.
         */
        name: string;
        /**
         * Bucket enabled.
         */
        enabled: boolean;
        /**
         * Maximum file size supported.
         */
        maximumFileSize: number;
        /**
         * Allowed file extensions.
         */
        allowedFileExtensions: string[];
        /**
         * Compression algorithm chosen for compression. Will be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd).
         */
        compression: string;
        /**
         * Bucket is encrypted.
         */
        encryption: boolean;
        /**
         * Virus scanning is enabled.
         */
        antivirus: boolean;
        /**
         * Image transformations are enabled.
         */
        transformations: boolean;
        /**
         * Total size of this bucket in bytes.
         */
        totalSize: number;
    }

    /**
     * ResourceToken
     */
    export type ResourceToken = {
        /**
         * Token ID.
         */
        $id: string;
        /**
         * Token creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Resource ID.
         */
        resourceId: string;
        /**
         * Resource type.
         */
        resourceType: string;
        /**
         * Token expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * JWT encoded string.
         */
        secret: string;
        /**
         * Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
         */
        accessedAt: string;
    }

    /**
     * Team
     */
    export type Team<Preferences extends Models.Preferences = Models.DefaultPreferences> = {
        /**
         * Team ID.
         */
        $id: string;
        /**
         * Team creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Team update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Team name.
         */
        name: string;
        /**
         * Total number of team members.
         */
        total: number;
        /**
         * Team preferences as a key-value object
         */
        prefs: Preferences;
    }

    /**
     * Membership
     */
    export type Membership = {
        /**
         * Membership ID.
         */
        $id: string;
        /**
         * Membership creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Membership update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * User name. Hide this attribute by toggling membership privacy in the Console.
         */
        userName: string;
        /**
         * User email address. Hide this attribute by toggling membership privacy in the Console.
         */
        userEmail: string;
        /**
         * Team ID.
         */
        teamId: string;
        /**
         * Team name.
         */
        teamName: string;
        /**
         * Date, the user has been invited to join the team in ISO 8601 format.
         */
        invited: string;
        /**
         * Date, the user has accepted the invitation to join the team in ISO 8601 format.
         */
        joined: string;
        /**
         * User confirmation status, true if the user has joined the team or false otherwise.
         */
        confirm: boolean;
        /**
         * Multi factor authentication status, true if the user has MFA enabled or false otherwise. Hide this attribute by toggling membership privacy in the Console.
         */
        mfa: boolean;
        /**
         * User list of roles
         */
        roles: string[];
    }

    /**
     * Site
     */
    export type Site = {
        /**
         * Site ID.
         */
        $id: string;
        /**
         * Site creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Site update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Site name.
         */
        name: string;
        /**
         * Site enabled.
         */
        enabled: boolean;
        /**
         * Is the site deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the site to update it with the latest configuration.
         */
        live: boolean;
        /**
         * When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
         */
        logging: boolean;
        /**
         * Site framework.
         */
        framework: string;
        /**
         * Site's active deployment ID.
         */
        deploymentId: string;
        /**
         * Active deployment creation date in ISO 8601 format.
         */
        deploymentCreatedAt: string;
        /**
         * Screenshot of active deployment with light theme preference file ID.
         */
        deploymentScreenshotLight: string;
        /**
         * Screenshot of active deployment with dark theme preference file ID.
         */
        deploymentScreenshotDark: string;
        /**
         * Site's latest deployment ID.
         */
        latestDeploymentId: string;
        /**
         * Latest deployment creation date in ISO 8601 format.
         */
        latestDeploymentCreatedAt: string;
        /**
         * Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed".
         */
        latestDeploymentStatus: string;
        /**
         * Site variables.
         */
        vars: Variable[];
        /**
         * Site request timeout in seconds.
         */
        timeout: number;
        /**
         * The install command used to install the site dependencies.
         */
        installCommand: string;
        /**
         * The build command used to build the site.
         */
        buildCommand: string;
        /**
         * The directory where the site build output is located.
         */
        outputDirectory: string;
        /**
         * Site VCS (Version Control System) installation id.
         */
        installationId: string;
        /**
         * VCS (Version Control System) Repository ID
         */
        providerRepositoryId: string;
        /**
         * VCS (Version Control System) branch name
         */
        providerBranch: string;
        /**
         * Path to site in VCS (Version Control System) repository
         */
        providerRootDirectory: string;
        /**
         * Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests
         */
        providerSilentMode: boolean;
        /**
         * Machine specification for builds and executions.
         */
        specification: string;
        /**
         * Site build runtime.
         */
        buildRuntime: string;
        /**
         * Site framework adapter.
         */
        adapter: string;
        /**
         * Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.
         */
        fallbackFile: string;
    }

    /**
     * Function
     */
    export type Function = {
        /**
         * Function ID.
         */
        $id: string;
        /**
         * Function creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Function update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Execution permissions.
         */
        execute: string[];
        /**
         * Function name.
         */
        name: string;
        /**
         * Function enabled.
         */
        enabled: boolean;
        /**
         * Is the function deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the function to update it with the latest configuration.
         */
        live: boolean;
        /**
         * When disabled, executions will exclude logs and errors, and will be slightly faster.
         */
        logging: boolean;
        /**
         * Function execution and build runtime.
         */
        runtime: string;
        /**
         * Function's active deployment ID.
         */
        deploymentId: string;
        /**
         * Active deployment creation date in ISO 8601 format.
         */
        deploymentCreatedAt: string;
        /**
         * Function's latest deployment ID.
         */
        latestDeploymentId: string;
        /**
         * Latest deployment creation date in ISO 8601 format.
         */
        latestDeploymentCreatedAt: string;
        /**
         * Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed".
         */
        latestDeploymentStatus: string;
        /**
         * Allowed permission scopes.
         */
        scopes: string[];
        /**
         * Function variables.
         */
        vars: Variable[];
        /**
         * Function trigger events.
         */
        events: string[];
        /**
         * Function execution schedule in CRON format.
         */
        schedule: string;
        /**
         * Function execution timeout in seconds.
         */
        timeout: number;
        /**
         * The entrypoint file used to execute the deployment.
         */
        entrypoint: string;
        /**
         * The build command used to build the deployment.
         */
        commands: string;
        /**
         * Version of Open Runtimes used for the function.
         */
        version: string;
        /**
         * Function VCS (Version Control System) installation id.
         */
        installationId: string;
        /**
         * VCS (Version Control System) Repository ID
         */
        providerRepositoryId: string;
        /**
         * VCS (Version Control System) branch name
         */
        providerBranch: string;
        /**
         * Path to function in VCS (Version Control System) repository
         */
        providerRootDirectory: string;
        /**
         * Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests
         */
        providerSilentMode: boolean;
        /**
         * Machine specification for builds and executions.
         */
        specification: string;
    }

    /**
     * Runtime
     */
    export type Runtime = {
        /**
         * Runtime ID.
         */
        $id: string;
        /**
         * Parent runtime key.
         */
        key: string;
        /**
         * Runtime Name.
         */
        name: string;
        /**
         * Runtime version.
         */
        version: string;
        /**
         * Base Docker image used to build the runtime.
         */
        base: string;
        /**
         * Image name of Docker Hub.
         */
        image: string;
        /**
         * Name of the logo image.
         */
        logo: string;
        /**
         * List of supported architectures.
         */
        supports: string[];
    }

    /**
     * Framework
     */
    export type Framework = {
        /**
         * Framework key.
         */
        key: string;
        /**
         * Framework Name.
         */
        name: string;
        /**
         * Default runtime version.
         */
        buildRuntime: string;
        /**
         * List of supported runtime versions.
         */
        runtimes: string[];
        /**
         * List of supported adapters.
         */
        adapters: FrameworkAdapter[];
    }

    /**
     * Framework Adapter
     */
    export type FrameworkAdapter = {
        /**
         * Adapter key.
         */
        key: string;
        /**
         * Default command to download dependencies.
         */
        installCommand: string;
        /**
         * Default command to build site into output directory.
         */
        buildCommand: string;
        /**
         * Default output directory of build.
         */
        outputDirectory: string;
        /**
         * Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.
         */
        fallbackFile: string;
    }

    /**
     * Deployment
     */
    export type Deployment = {
        /**
         * Deployment ID.
         */
        $id: string;
        /**
         * Deployment creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Deployment update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Type of deployment.
         */
        type: string;
        /**
         * Resource ID.
         */
        resourceId: string;
        /**
         * Resource type.
         */
        resourceType: string;
        /**
         * The entrypoint file to use to execute the deployment code.
         */
        entrypoint: string;
        /**
         * The code size in bytes.
         */
        sourceSize: number;
        /**
         * The build output size in bytes.
         */
        buildSize: number;
        /**
         * The total size in bytes (source and build output).
         */
        totalSize: number;
        /**
         * The current build ID.
         */
        buildId: string;
        /**
         * Whether the deployment should be automatically activated.
         */
        activate: boolean;
        /**
         * Screenshot with light theme preference file ID.
         */
        screenshotLight: string;
        /**
         * Screenshot with dark theme preference file ID.
         */
        screenshotDark: string;
        /**
         * The deployment status. Possible values are "waiting", "processing", "building", "ready", "canceled" and "failed".
         */
        status: DeploymentStatus;
        /**
         * The build logs.
         */
        buildLogs: string;
        /**
         * The current build time in seconds.
         */
        buildDuration: number;
        /**
         * The name of the vcs provider repository
         */
        providerRepositoryName: string;
        /**
         * The name of the vcs provider repository owner
         */
        providerRepositoryOwner: string;
        /**
         * The url of the vcs provider repository
         */
        providerRepositoryUrl: string;
        /**
         * The commit hash of the vcs commit
         */
        providerCommitHash: string;
        /**
         * The url of vcs commit author
         */
        providerCommitAuthorUrl: string;
        /**
         * The name of vcs commit author
         */
        providerCommitAuthor: string;
        /**
         * The commit message
         */
        providerCommitMessage: string;
        /**
         * The url of the vcs commit
         */
        providerCommitUrl: string;
        /**
         * The branch of the vcs repository
         */
        providerBranch: string;
        /**
         * The branch of the vcs repository
         */
        providerBranchUrl: string;
    }

    /**
     * Execution
     */
    export type Execution = {
        /**
         * Execution ID.
         */
        $id: string;
        /**
         * Execution creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Execution update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Execution roles.
         */
        $permissions: string[];
        /**
         * Function ID.
         */
        functionId: string;
        /**
         * Function's deployment ID used to create the execution.
         */
        deploymentId: string;
        /**
         * The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.
         */
        trigger: ExecutionTrigger;
        /**
         * The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, `failed`, or `scheduled`.
         */
        status: ExecutionStatus;
        /**
         * HTTP request method type.
         */
        requestMethod: string;
        /**
         * HTTP request path and query.
         */
        requestPath: string;
        /**
         * HTTP request headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.
         */
        requestHeaders: Headers[];
        /**
         * HTTP response status code.
         */
        responseStatusCode: number;
        /**
         * HTTP response body. This will return empty unless execution is created as synchronous.
         */
        responseBody: string;
        /**
         * HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.
         */
        responseHeaders: Headers[];
        /**
         * Function logs. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        logs: string;
        /**
         * Function errors. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        errors: string;
        /**
         * Resource(function/site) execution duration in seconds.
         */
        duration: number;
        /**
         * The scheduled time for execution. If left empty, execution will be queued immediately.
         */
        scheduledAt?: string;
    }

    /**
     * Variable
     */
    export type Variable = {
        /**
         * Variable ID.
         */
        $id: string;
        /**
         * Variable creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Variable creation date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Variable key.
         */
        key: string;
        /**
         * Variable value.
         */
        value: string;
        /**
         * Variable secret flag. Secret variables can only be updated or deleted, but never read.
         */
        secret: boolean;
        /**
         * Service to which the variable belongs. Possible values are "project", "function"
         */
        resourceType: string;
        /**
         * ID of resource to which the variable belongs. If resourceType is "project", it is empty. If resourceType is "function", it is ID of the function.
         */
        resourceId: string;
    }

    /**
     * Country
     */
    export type Country = {
        /**
         * Country name.
         */
        name: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        code: string;
    }

    /**
     * Continent
     */
    export type Continent = {
        /**
         * Continent name.
         */
        name: string;
        /**
         * Continent two letter code.
         */
        code: string;
    }

    /**
     * Language
     */
    export type Language = {
        /**
         * Language name.
         */
        name: string;
        /**
         * Language two-character ISO 639-1 codes.
         */
        code: string;
        /**
         * Language native name.
         */
        nativeName: string;
    }

    /**
     * Currency
     */
    export type Currency = {
        /**
         * Currency symbol.
         */
        symbol: string;
        /**
         * Currency name.
         */
        name: string;
        /**
         * Currency native symbol.
         */
        symbolNative: string;
        /**
         * Number of decimal digits.
         */
        decimalDigits: number;
        /**
         * Currency digit rounding.
         */
        rounding: number;
        /**
         * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.
         */
        code: string;
        /**
         * Currency plural name
         */
        namePlural: string;
    }

    /**
     * Phone
     */
    export type Phone = {
        /**
         * Phone code.
         */
        code: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
    }

    /**
     * Health Antivirus
     */
    export type HealthAntivirus = {
        /**
         * Antivirus version.
         */
        version: string;
        /**
         * Antivirus status. Possible values are: `disabled`, `offline`, `online`
         */
        status: HealthAntivirusStatus;
    }

    /**
     * Health Queue
     */
    export type HealthQueue = {
        /**
         * Amount of actions in the queue.
         */
        size: number;
    }

    /**
     * Health Status
     */
    export type HealthStatus = {
        /**
         * Name of the service.
         */
        name: string;
        /**
         * Duration in milliseconds how long the health check took.
         */
        ping: number;
        /**
         * Service status. Possible values are: `pass`, `fail`
         */
        status: HealthCheckStatus;
    }

    /**
     * Health Certificate
     */
    export type HealthCertificate = {
        /**
         * Certificate name
         */
        name: string;
        /**
         * Subject SN
         */
        subjectSN: string;
        /**
         * Issuer organisation
         */
        issuerOrganisation: string;
        /**
         * Valid from
         */
        validFrom: string;
        /**
         * Valid to
         */
        validTo: string;
        /**
         * Signature type SN
         */
        signatureTypeSN: string;
    }

    /**
     * Health Time
     */
    export type HealthTime = {
        /**
         * Current unix timestamp on trustful remote server.
         */
        remoteTime: number;
        /**
         * Current unix timestamp of local server where Appwrite runs.
         */
        localTime: number;
        /**
         * Difference of unix remote and local timestamps in milliseconds.
         */
        diff: number;
    }

    /**
     * Headers
     */
    export type Headers = {
        /**
         * Header name.
         */
        name: string;
        /**
         * Header value.
         */
        value: string;
    }

    /**
     * Specification
     */
    export type Specification = {
        /**
         * Memory size in MB.
         */
        memory: number;
        /**
         * Number of CPUs.
         */
        cpus: number;
        /**
         * Is size enabled.
         */
        enabled: boolean;
        /**
         * Size slug.
         */
        slug: string;
    }

    /**
     * MFA Challenge
     */
    export type MfaChallenge = {
        /**
         * Token ID.
         */
        $id: string;
        /**
         * Token creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Token expiration date in ISO 8601 format.
         */
        expire: string;
    }

    /**
     * MFA Recovery Codes
     */
    export type MfaRecoveryCodes = {
        /**
         * Recovery codes.
         */
        recoveryCodes: string[];
    }

    /**
     * MFAType
     */
    export type MfaType = {
        /**
         * Secret token used for TOTP factor.
         */
        secret: string;
        /**
         * URI for authenticator apps.
         */
        uri: string;
    }

    /**
     * MFAFactors
     */
    export type MfaFactors = {
        /**
         * Can TOTP be used for MFA challenge for this account.
         */
        totp: boolean;
        /**
         * Can phone (SMS) be used for MFA challenge for this account.
         */
        phone: boolean;
        /**
         * Can email be used for MFA challenge for this account.
         */
        email: boolean;
        /**
         * Can recovery code be used for MFA challenge for this account.
         */
        recoveryCode: boolean;
    }

    /**
     * Provider
     */
    export type Provider = {
        /**
         * Provider ID.
         */
        $id: string;
        /**
         * Provider creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Provider update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The name for the provider instance.
         */
        name: string;
        /**
         * The name of the provider service.
         */
        provider: string;
        /**
         * Is provider enabled?
         */
        enabled: boolean;
        /**
         * Type of provider.
         */
        type: string;
        /**
         * Provider credentials.
         */
        credentials: object;
        /**
         * Provider options.
         */
        options?: object;
    }

    /**
     * Message
     */
    export type Message = {
        /**
         * Message ID.
         */
        $id: string;
        /**
         * Message creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Message update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Message provider type.
         */
        providerType: string;
        /**
         * Topic IDs set as recipients.
         */
        topics: string[];
        /**
         * User IDs set as recipients.
         */
        users: string[];
        /**
         * Target IDs set as recipients.
         */
        targets: string[];
        /**
         * The scheduled time for message.
         */
        scheduledAt?: string;
        /**
         * The time when the message was delivered.
         */
        deliveredAt?: string;
        /**
         * Delivery errors if any.
         */
        deliveryErrors?: string[];
        /**
         * Number of recipients the message was delivered to.
         */
        deliveredTotal: number;
        /**
         * Data of the message.
         */
        data: object;
        /**
         * Status of delivery.
         */
        status: MessageStatus;
    }

    /**
     * Topic
     */
    export type Topic = {
        /**
         * Topic ID.
         */
        $id: string;
        /**
         * Topic creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Topic update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The name of the topic.
         */
        name: string;
        /**
         * Total count of email subscribers subscribed to the topic.
         */
        emailTotal: number;
        /**
         * Total count of SMS subscribers subscribed to the topic.
         */
        smsTotal: number;
        /**
         * Total count of push subscribers subscribed to the topic.
         */
        pushTotal: number;
        /**
         * Subscribe permissions.
         */
        subscribe: string[];
    }

    /**
     * Transaction
     */
    export type Transaction = {
        /**
         * Transaction ID.
         */
        $id: string;
        /**
         * Transaction creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Transaction update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Current status of the transaction. One of: pending, committing, committed, rolled_back, failed.
         */
        status: string;
        /**
         * Number of operations in the transaction.
         */
        operations: number;
        /**
         * Expiration time in ISO 8601 format.
         */
        expiresAt: string;
    }

    /**
     * Subscriber
     */
    export type Subscriber = {
        /**
         * Subscriber ID.
         */
        $id: string;
        /**
         * Subscriber creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Subscriber update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Target ID.
         */
        targetId: string;
        /**
         * Target.
         */
        target: Target;
        /**
         * Topic ID.
         */
        userId: string;
        /**
         * User Name.
         */
        userName: string;
        /**
         * Topic ID.
         */
        topicId: string;
        /**
         * The target provider type. Can be one of the following: `email`, `sms` or `push`.
         */
        providerType: string;
    }

    /**
     * Target
     */
    export type Target = {
        /**
         * Target ID.
         */
        $id: string;
        /**
         * Target creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Target update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Target Name.
         */
        name: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Provider ID.
         */
        providerId?: string;
        /**
         * The target provider type. Can be one of the following: `email`, `sms` or `push`.
         */
        providerType: string;
        /**
         * The target identifier.
         */
        identifier: string;
        /**
         * Is the target expired.
         */
        expired: boolean;
    }

    /**
     * Archive
     */
    export type BackupArchive = {
        /**
         * Archive ID.
         */
        $id: string;
        /**
         * Archive creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Archive update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Archive policy ID.
         */
        policyId: string;
        /**
         * Archive size in bytes.
         */
        size: number;
        /**
         * The status of the archive creation. Possible values: pending, processing, uploading, completed, failed.
         */
        status: string;
        /**
         * The backup start time.
         */
        startedAt: string;
        /**
         * Migration ID.
         */
        migrationId: string;
        /**
         * The services that are backed up by this archive.
         */
        services: string[];
        /**
         * The resources that are backed up by this archive.
         */
        resources: string[];
        /**
         * The resource ID to backup. Set only if this archive should backup a single resource.
         */
        resourceId?: string;
        /**
         * The resource type to backup. Set only if this archive should backup a single resource.
         */
        resourceType?: string;
    }

    /**
     * backup
     */
    export type BackupPolicy = {
        /**
         * Backup policy ID.
         */
        $id: string;
        /**
         * Backup policy name.
         */
        name: string;
        /**
         * Policy creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Policy update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The services that are backed up by this policy.
         */
        services: string[];
        /**
         * The resources that are backed up by this policy.
         */
        resources: string[];
        /**
         * The resource ID to backup. Set only if this policy should backup a single resource.
         */
        resourceId?: string;
        /**
         * The resource type to backup. Set only if this policy should backup a single resource.
         */
        resourceType?: string;
        /**
         * How many days to keep the backup before it will be automatically deleted.
         */
        retention: number;
        /**
         * Policy backup schedule in CRON format.
         */
        schedule: string;
        /**
         * Is this policy enabled.
         */
        enabled: boolean;
    }

    /**
     * Restoration
     */
    export type BackupRestoration = {
        /**
         * Restoration ID.
         */
        $id: string;
        /**
         * Restoration creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Restoration update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Backup archive ID.
         */
        archiveId: string;
        /**
         * Backup policy ID.
         */
        policyId: string;
        /**
         * The status of the restoration. Possible values: pending, downloading, processing, completed, failed.
         */
        status: string;
        /**
         * The backup start time.
         */
        startedAt: string;
        /**
         * Migration ID.
         */
        migrationId: string;
        /**
         * The services that are backed up by this policy.
         */
        services: string[];
        /**
         * The resources that are backed up by this policy.
         */
        resources: string[];
        /**
         * Optional data in key-value object. 
         */
        options: string;
    }

    /**
     * Backup archive list
     */
    export type BackupArchiveList = {
        /**
         * Total number of archives that matched your query.
         */
        total: number;
        /**
         * List of archives.
         */
        archives: BackupArchive[];
    }

    /**
     * Backup policy list
     */
    export type BackupPolicyList = {
        /**
         * Total number of policies that matched your query.
         */
        total: number;
        /**
         * List of policies.
         */
        policies: BackupPolicy[];
    }

    /**
     * Backup restoration list
     */
    export type BackupRestorationList = {
        /**
         * Total number of restorations that matched your query.
         */
        total: number;
        /**
         * List of restorations.
         */
        restorations: BackupRestoration[];
    }
}
