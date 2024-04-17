declare module "node-appwrite" {
  export namespace Models {
      /**
      * Documents List
      */
      export type DocumentList<Document extends Models.Document> = {
          /**
          * Total number of documents documents that matched your query.
          */
          total: number;
          /**
          * List of documents.
          */
          documents: Document[];
      }
      /**
      * Collections List
      */
      export type CollectionList = {
          /**
          * Total number of collections documents that matched your query.
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
          * Total number of databases documents that matched your query.
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
          * Total number of indexes documents that matched your query.
          */
          total: number;
          /**
          * List of indexes.
          */
          indexes: Index[];
      }
      /**
      * Users List
      */
      export type UserList<Preferences extends Models.Preferences> = {
          /**
          * Total number of users documents that matched your query.
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
          * Total number of sessions documents that matched your query.
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
          * Total number of identities documents that matched your query.
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
          * Total number of logs documents that matched your query.
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
          * Total number of files documents that matched your query.
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
          * Total number of buckets documents that matched your query.
          */
          total: number;
          /**
          * List of buckets.
          */
          buckets: Bucket[];
      }
      /**
      * Teams List
      */
      export type TeamList<Preferences extends Models.Preferences> = {
          /**
          * Total number of teams documents that matched your query.
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
          * Total number of memberships documents that matched your query.
          */
          total: number;
          /**
          * List of memberships.
          */
          memberships: Membership[];
      }
      /**
      * Functions List
      */
      export type FunctionList = {
          /**
          * Total number of functions documents that matched your query.
          */
          total: number;
          /**
          * List of functions.
          */
          functions: Function[];
      }
      /**
      * Runtimes List
      */
      export type RuntimeList = {
          /**
          * Total number of runtimes documents that matched your query.
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
          * Total number of deployments documents that matched your query.
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
          * Total number of executions documents that matched your query.
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
          * Total number of countries documents that matched your query.
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
          * Total number of continents documents that matched your query.
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
          * Total number of languages documents that matched your query.
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
          * Total number of currencies documents that matched your query.
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
          * Total number of phones documents that matched your query.
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
          * Total number of variables documents that matched your query.
          */
          total: number;
          /**
          * List of variables.
          */
          variables: Variable[];
      }
      /**
      * Locale codes list
      */
      export type LocaleCodeList = {
          /**
          * Total number of localeCodes documents that matched your query.
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
          * Total number of providers documents that matched your query.
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
          * Total number of messages documents that matched your query.
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
          * Total number of topics documents that matched your query.
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
          * Total number of subscribers documents that matched your query.
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
          * Total number of targets documents that matched your query.
          */
          total: number;
          /**
          * List of targets.
          */
          targets: Target[];
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
          * If database is enabled. Can be &#039;enabled&#039; or &#039;disabled&#039;. When disabled, the database is inaccessible to users, but remains accessible to Server SDKs using API keys.
          */
          enabled: boolean;
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
          * Collection enabled. Can be &#039;enabled&#039; or &#039;disabled&#039;. When disabled, the collection is inaccessible to users, but remains accessible to Server SDKs using API keys.
          */
          enabled: boolean;
          /**
          * Whether document-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).
          */
          documentSecurity: boolean;
          /**
          * Collection attributes.
          */
          attributes: string[];
          /**
          * Collection indexes.
          */
          indexes: Index[];
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
          attributes: string[];
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
          status: string;
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
          * Attribute size.
          */
          size: number;
          /**
          * Default value for attribute when not provided. Cannot be set when attribute is required.
          */
          xdefault?: string;
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
          status: string;
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
          xdefault?: number;
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
          status: string;
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
          xdefault?: number;
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
          status: string;
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
          * Default value for attribute when not provided. Cannot be set when attribute is required.
          */
          xdefault?: boolean;
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
          status: string;
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
          * String format.
          */
          format: string;
          /**
          * Default value for attribute when not provided. Cannot be set when attribute is required.
          */
          xdefault?: string;
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
          status: string;
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
          xdefault?: string;
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
          status: string;
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
          * String format.
          */
          format: string;
          /**
          * Default value for attribute when not provided. Cannot be set when attribute is required.
          */
          xdefault?: string;
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
          status: string;
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
          * String format.
          */
          format: string;
          /**
          * Default value for attribute when not provided. Cannot be set when attribute is required.
          */
          xdefault?: string;
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
          status: string;
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
          * ISO 8601 format.
          */
          format: string;
          /**
          * Default value for attribute when not provided. Only null is optional
          */
          xdefault?: string;
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
          status: string;
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
      * Index
      */
      export type Index = {
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
          * Index attributes.
          */
          attributes: string[];
          /**
          * Index orders.
          */
          orders?: string[];
      }
      /**
      * Document
      */
      export type Document = {
          /**
          * Document ID.
          */
          $id: string;
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
      export type User<Preferences extends Models.Preferences> = {
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
          * Continent code. A two character continent code &quot;AF&quot; for Africa, &quot;AN&quot; for Antarctica, &quot;AS&quot; for Asia, &quot;EU&quot; for Europe, &quot;NA&quot; for North America, &quot;OC&quot; for Oceania, and &quot;SA&quot; for South America.
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
          * Compression algorithm choosen for compression. Will be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd).
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
      }
      /**
      * Team
      */
      export type Team<Preferences extends Models.Preferences> = {
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
          * User name.
          */
          userName: string;
          /**
          * User email address.
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
          * Multi factor authentication status, true if the user has MFA enabled or false otherwise.
          */
          mfa: boolean;
          /**
          * User list of roles
          */
          roles: string[];
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
          * Is the function deployed with the latest configuration? This is set to false if you&#039;ve changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the function to update it with the latest configuration.
          */
          live: boolean;
          /**
          * Whether executions will be logged. When set to false, executions will not be logged, but will reduce resource used by your Appwrite project.
          */
          logging: boolean;
          /**
          * Function execution runtime.
          */
          runtime: string;
          /**
          * Function&#039;s active deployment ID.
          */
          deployment: string;
          /**
          * Function variables.
          */
          vars: Variable[];
          /**
          * Function trigger events.
          */
          events: string[];
          /**
          * Function execution schedult in CRON format.
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
          size: number;
          /**
          * The current build ID.
          */
          buildId: string;
          /**
          * Whether the deployment should be automatically activated.
          */
          activate: boolean;
          /**
          * The deployment status. Possible values are &quot;processing&quot;, &quot;building&quot;, &quot;waiting&quot;, &quot;ready&quot;, and &quot;failed&quot;.
          */
          status: string;
          /**
          * The build logs.
          */
          buildLogs: string;
          /**
          * The current build time in seconds.
          */
          buildTime: number;
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
          * The branch of the vcs repository
          */
          providerBranch: string;
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
          * Execution upate date in ISO 8601 format.
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
          * The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.
          */
          trigger: string;
          /**
          * The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`.
          */
          status: string;
          /**
          * HTTP request method type.
          */
          requestMethod: string;
          /**
          * HTTP request path and query.
          */
          requestPath: string;
          /**
          * HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.
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
          * Function execution duration in seconds.
          */
          duration: number;
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
          * Service to which the variable belongs. Possible values are &quot;project&quot;, &quot;function&quot;
          */
          resourceType: string;
          /**
          * ID of resource to which the variable belongs. If resourceType is &quot;project&quot;, it is empty. If resourceType is &quot;function&quot;, it is ID of the function.
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
          * Antivirus status. Possible values can are: `disabled`, `offline`, `online`
          */
          status: string;
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
          * Service status. Possible values can are: `pass`, `fail`
          */
          status: string;
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
          * TOTP
          */
          totp: boolean;
          /**
          * Phone
          */
          phone: boolean;
          /**
          * Email
          */
          email: boolean;
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
          status: string;
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
      }
  }
  export class Client {
    /**
     * Set endpoint.
     *
     * @param {string} endpoint
     *
     * @return {this}
     */
    setEndpoint(endpoint: string): Client;

    /**
     * Set self signed.
     *
     * @param {bool} status
     *
     * @return {this}
     */
    setSelfSigned(status?: boolean): Client;

    /**
     * Set Project
     *
     * Your project ID
     *
     * @param {string} value
     *
     * @returns {this}
     */
    setProject(project: string): Client;

    /**
     * Set Key
     *
     * Your secret API key
     *
     * @param {string} value
     *
     * @returns {this}
     */
    setKey(key: string): Client;

    /**
     * Set JWT
     *
     * Your secret JSON Web Token
     *
     * @param {string} value
     *
     * @returns {this}
     */
    setJWT(jwt: string): Client;

    /**
     * Set Locale
     *
     * @param {string} value
     *
     * @returns {this}
     */
    setLocale(locale: string): Client;

    /**
     * Set Session
     *
     * The user session to authenticate with
     *
     * @param {string} value
     *
     * @returns {this}
     */
    setSession(session: string): Client;

    /**
     * Set ForwardedUserAgent
     *
     * The user agent string of the client that made the request
     *
     * @param {string} value
     *
     * @returns {this}
     */
    setForwardedUserAgent(forwardeduseragent: string): Client;
  }

  export class AppwriteException extends Error {
    public code: number | null;
    public response: string | null;
    constructor(message: string, code?: number, response?: string);
  }

  export class Service {
    public client: Client;
    constructor(client: Client);
  }

  export class InputFile {
    static fromPath(filePath: string, filename: string): InputFile;

    static fromBuffer(buffer: Buffer, filename: string): InputFile;

    static fromBlob(blob: Blob, filename: string): Promise<InputFile>;

    static fromStream(stream: NodeJS.ReadableStream, filename: string, size: number): InputFile;

    static fromPlainText(content: string, filename: string): InputFile;

    constructor(stream: NodeJS.ReadableStream, filename: string, size: number);
  }

  type QueryTypesSingle = string | number | boolean;
  type QueryTypesList = string[] | number[] | boolean[];
  type QueryTypes = QueryTypesSingle | QueryTypesList;

  export class Query {
    static equal(attribute: string, value: QueryTypes): string;

    static notEqual(attribute: string, value: QueryTypes): string;

    static lessThan(attribute: string, value: QueryTypes): string;

    static lessThanEqual(attribute: string, value: QueryTypes): string;

    static greaterThan(attribute: string, value: QueryTypes): string;

    static greaterThanEqual(attribute: string, value: QueryTypes): string;

    static isNull(attribute: string): string;

    static isNotNull(attribute: string): string;

    static between<T extends string | number>(attribute: string, start: T, end: T): string;

    static startsWith(attribute: string, value: string): string;

    static endsWith(attribute: string, value: string): string;

    static select(attributes: string[]): string;

    static search(attribute: string, value: string): string;

    static orderDesc(attribute: string): string;
    
    static orderAsc(attribute: string): string;
    
    static cursorAfter(documentId: string): string;
    
    static cursorBefore(documentId: string): string;
    
    static limit(value: number): string;
    
    static offset(value: number): string;

    private static addQuery(attribute: string, method: string, value: QueryTypes): string;

    private static parseValues(value: QueryTypes): string;
  }

  export class ID {
    static unique(): string;
    static custom(id: string): string;
  }

  export class Permission {
    static read(role: string): string;
    static write(role: string): string;
    static create(role: string): string;
    static update(role: string): string;
    static delete(role: string): string;
  }

  export class Role {
    static any(): string;
    static user(id: string, status?: string): string;
    static users(status?: string): string;
    static guests(): string;
    static team(id: string, role?: string): string;
    static member(id: string): string;
    static label(name: string): string;
  }

  export class Account extends Service {
    constructor(client: Client);
    
    /**
     * Get account
     *
     * Get the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>>;
    /**
     * Create account
     *
     * Use this endpoint to allow a new user to register a new account in your
     * project. After the user registration completes successfully, you can use
     * the
     * [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification)
     * route to start verifying the user email address. To allow the new user to
     * login to their new account, you need to create a new [account
     * session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    create<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Update email
     *
     * Update currently logged in user account email address. After changing user
     * address, the user confirmation status will get reset. A new confirmation
     * email is not sent automatically however you can use the send confirmation
     * email endpoint again to send the confirmation email. For security measures,
     * user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal
     * one, by passing an email address and a new password.
     * 
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateEmail<Preferences extends Models.Preferences>(email: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * List Identities
     *
     * Get the list of identities for the currently logged in user.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listIdentities(queries?: string[]): Promise<Models.IdentityList>;
    /**
     * Delete identity
     *
     * Delete an identity by its unique ID.
     *
     * @param {string} identityId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteIdentity(identityId: string): Promise<string>;
    /**
     * Create JWT
     *
     * Use this endpoint to create a JSON Web Token. You can use the resulting JWT
     * to authenticate on behalf of the current user when working with the
     * Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes
     * from its creation and will be invalid if the user will logout in that time
     * frame.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createJWT(): Promise<Models.Jwt>;
    /**
     * List logs
     *
     * Get the list of latest security activity logs for the currently logged in
     * user. Each log returns user IP address, location and date and time of log.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listLogs(queries?: string[]): Promise<Models.LogList>;
    /**
     * Update MFA
     *
     * Enable or disable MFA on an account.
     *
     * @param {boolean} mfa
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMFA<Preferences extends Models.Preferences>(mfa: boolean): Promise<Models.User<Preferences>>;
    /**
     * Add Authenticator
     *
     * Add an authenticator app to be used as an MFA factor. Verify the
     * authenticator using the [verify
     * authenticator](/docs/references/cloud/client-web/account#verifyAuthenticator)
     * method.
     *
     * @param {AuthenticatorType} type
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMfaAuthenticator(type: AuthenticatorType): Promise<Models.MfaType>;
    /**
     * Verify Authenticator
     *
     * Verify an authenticator app after adding it using the [add
     * authenticator](/docs/references/cloud/client-web/account#addAuthenticator)
     * method.
     *
     * @param {AuthenticatorType} type
     * @param {string} otp
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMfaAuthenticator<Preferences extends Models.Preferences>(type: AuthenticatorType, otp: string): Promise<Models.User<Preferences>>;
    /**
     * Delete Authenticator
     *
     * Delete an authenticator for a user by ID.
     *
     * @param {AuthenticatorType} type
     * @param {string} otp
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteMfaAuthenticator<Preferences extends Models.Preferences>(type: AuthenticatorType, otp: string): Promise<Models.User<Preferences>>;
    /**
     * Create 2FA Challenge
     *
     * Begin the process of MFA verification after sign-in. Finish the flow with
     * [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge)
     * method.
     *
     * @param {AuthenticationFactor} factor
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMfaChallenge(factor: AuthenticationFactor): Promise<Models.MfaChallenge>;
    /**
     * Create MFA Challenge (confirmation)
     *
     * Complete the MFA challenge by providing the one-time password. Finish the
     * process of MFA verification by providing the one-time password. To begin
     * the flow, use
     * [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge)
     * method.
     *
     * @param {string} challengeId
     * @param {string} otp
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMfaChallenge(challengeId: string, otp: string): Promise<any>;
    /**
     * List Factors
     *
     * List the factors available on the account to be used as a MFA challange.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listMfaFactors(): Promise<Models.MfaFactors>;
    /**
     * Get MFA Recovery Codes
     *
     * Get recovery codes that can be used as backup for MFA flow. Before getting
     * codes, they must be generated using
     * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
     * method. An OTP challenge is required to read recovery codes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getMfaRecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Create MFA Recovery Codes
     *
     * Generate recovery codes as backup for MFA flow. It's recommended to
     * generate and show then immediately after user successfully adds their
     * authehticator. Recovery codes can be used as a MFA verification type in
     * [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge)
     * method.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMfaRecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Regenerate MFA Recovery Codes
     *
     * Regenerate recovery codes that can be used as backup for MFA flow. Before
     * regenerating codes, they must be first generated using
     * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
     * method. An OTP challenge is required to regenreate recovery codes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMfaRecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Update name
     *
     * Update currently logged in user account name.
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateName<Preferences extends Models.Preferences>(name: string): Promise<Models.User<Preferences>>;
    /**
     * Update password
     *
     * Update currently logged in user password. For validation, user is required
     * to pass in the new password, and the old password. For users created with
     * OAuth, Team Invites and Magic URL, oldPassword is optional.
     *
     * @param {string} password
     * @param {string} oldPassword
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePassword<Preferences extends Models.Preferences>(password: string, oldPassword?: string): Promise<Models.User<Preferences>>;
    /**
     * Update phone
     *
     * Update the currently logged in user's phone number. After updating the
     * phone number, the phone verification status will be reset. A confirmation
     * SMS is not sent automatically, however you can use the [POST
     * /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification)
     * endpoint to send a confirmation SMS.
     *
     * @param {string} phone
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePhone<Preferences extends Models.Preferences>(phone: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * Get account preferences
     *
     * Get the preferences as a key-value object for the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getPrefs<Preferences extends Models.Preferences>(): Promise<Preferences>;
    /**
     * Update preferences
     *
     * Update currently logged in user account preferences. The object you pass is
     * stored as is, and replaces any previous value. The maximum allowed prefs
     * size is 64kB and throws error if exceeded.
     *
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePrefs<Preferences extends Models.Preferences>(prefs: object): Promise<Models.User<Preferences>>;
    /**
     * Create password recovery
     *
     * Sends the user an email with a temporary secret key for password reset.
     * When the user clicks the confirmation link he is redirected back to your
     * app password reset URL with the secret key and email address values
     * attached to the URL query string. Use the query string params to submit a
     * request to the [PUT
     * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery)
     * endpoint to complete the process. The verification link sent to the user's
     * email address is valid for 1 hour.
     *
     * @param {string} email
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createRecovery(email: string, url: string): Promise<Models.Token>;
    /**
     * Create password recovery (confirmation)
     *
     * Use this endpoint to complete the user account password reset. Both the
     * **userId** and **secret** arguments will be passed as query parameters to
     * the redirect URL you have provided when sending your request to the [POST
     * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery)
     * endpoint.
     * 
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} userId
     * @param {string} secret
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateRecovery(userId: string, secret: string, password: string): Promise<Models.Token>;
    /**
     * List sessions
     *
     * Get the list of active sessions across different devices for the currently
     * logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listSessions(): Promise<Models.SessionList>;
    /**
     * Delete sessions
     *
     * Delete all sessions from the user account and remove any sessions cookies
     * from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSessions(): Promise<string>;
    /**
     * Create anonymous session
     *
     * Use this endpoint to allow a new user to register an anonymous account in
     * your project. This route will also create a new session for the user. To
     * allow the new user to convert an anonymous account to a normal account, you
     * need to update its [email and
     * password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail)
     * or create an [OAuth2
     * session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createAnonymousSession(): Promise<Models.Session>;
    /**
     * Create email password session
     *
     * Allow the user to login into their account by providing a valid email and
     * password combination. This route will create a new session for the user.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createEmailPasswordSession(email: string, password: string): Promise<Models.Session>;
    /**
     * Update magic URL session
     *
     * Use this endpoint to create a session from token. Provide the **userId**
     * and **secret** parameters from the successful response of authentication
     * flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMagicURLSession(userId: string, secret: string): Promise<Models.Session>;
    /**
     * Update phone session
     *
     * Use this endpoint to create a session from token. Provide the **userId**
     * and **secret** parameters from the successful response of authentication
     * flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePhoneSession(userId: string, secret: string): Promise<Models.Session>;
    /**
     * Create session
     *
     * Use this endpoint to create a session from token. Provide the **userId**
     * and **secret** parameters from the successful response of authentication
     * flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createSession(userId: string, secret: string): Promise<Models.Session>;
    /**
     * Get session
     *
     * Use this endpoint to get a logged in user's session using a Session ID.
     * Inputting 'current' will return the current session being used.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getSession(sessionId: string): Promise<Models.Session>;
    /**
     * Update session
     *
     * Use this endpoint to extend a session's length. Extending a session is
     * useful when session expiry is short. If the session was created using an
     * OAuth provider, this endpoint refreshes the access token from the provider.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateSession(sessionId: string): Promise<Models.Session>;
    /**
     * Delete session
     *
     * Logout the user. Use 'current' as the session ID to logout on this device,
     * use a session ID to logout on another device. If you're looking to logout
     * the user on all devices, use [Delete
     * Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions)
     * instead.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSession(sessionId: string): Promise<string>;
    /**
     * Update status
     *
     * Block the currently logged in user account. Behind the scene, the user
     * record is not deleted but permanently blocked from any access. To
     * completely delete a user, use the Users API instead.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateStatus<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>>;
    /**
     * Create email token (OTP)
     *
     * Sends the user an email with a secret key for creating a session. If the
     * provided user ID has not be registered, a new user will be created. Use the
     * returned user ID and secret and submit a request to the [POST
     * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process. The secret sent to the user's email
     * is valid for 15 minutes.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} userId
     * @param {string} email
     * @param {boolean} phrase
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createEmailToken(userId: string, email: string, phrase?: boolean): Promise<Models.Token>;
    /**
     * Create magic URL token
     *
     * Sends the user an email with a secret key for creating a session. If the
     * provided user ID has not been registered, a new user will be created. When
     * the user clicks the link in the email, the user is redirected back to the
     * URL you provided with the secret key and userId values attached to the URL
     * query string. Use the query string parameters to submit a request to the
     * [POST
     * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process. The link sent to the user's email
     * address is valid for 1 hour. If you are on a mobile device you can leave
     * the URL parameter empty, so that the login completion will be handled by
     * your Appwrite instance by default.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     * 
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} url
     * @param {boolean} phrase
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMagicURLToken(userId: string, email: string, url?: string, phrase?: boolean): Promise<Models.Token>;
    /**
     * Create OAuth2 token
     *
     * Allow the user to login to their account using the OAuth2 provider of their
     * choice. Each OAuth2 provider should be enabled from the Appwrite console
     * first. Use the success and failure arguments to provide a redirect URL's
     * back to your app when login is completed. 
     * 
     * If authentication succeeds, `userId` and `secret` of a token will be
     * appended to the success URL as query parameters. These can be used to
     * create a new session using the [Create
     * session](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {OAuthProvider} provider
     * @param {string} success
     * @param {string} failure
     * @param {string[]} scopes
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createOAuth2Token(provider: OAuthProvider, success?: string, failure?: string, scopes?: string[]): Promise<string>;
    /**
     * Create phone token
     *
     * Sends the user an SMS with a secret key for creating a session. If the
     * provided user ID has not be registered, a new user will be created. Use the
     * returned user ID and secret and submit a request to the [POST
     * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process. The secret sent to the user's phone
     * is valid for 15 minutes.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} userId
     * @param {string} phone
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createPhoneToken(userId: string, phone: string): Promise<Models.Token>;
    /**
     * Create email verification
     *
     * Use this endpoint to send a verification message to your user email address
     * to confirm they are the valid owners of that address. Both the **userId**
     * and **secret** arguments will be passed as query parameters to the URL you
     * have provided to be attached to the verification email. The provided URL
     * should redirect the user back to your app and allow you to complete the
     * verification process by verifying both the **userId** and **secret**
     * parameters. Learn more about how to [complete the verification
     * process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification).
     * The verification link sent to the user's email address is valid for 7 days.
     * 
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md),
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     * 
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createVerification(url: string): Promise<Models.Token>;
    /**
     * Create email verification (confirmation)
     *
     * Use this endpoint to complete the user email verification process. Use both
     * the **userId** and **secret** parameters that were attached to your app URL
     * to verify the user email ownership. If confirmed this route will return a
     * 200 status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateVerification(userId: string, secret: string): Promise<Models.Token>;
    /**
     * Create phone verification
     *
     * Use this endpoint to send a verification SMS to the currently logged in
     * user. This endpoint is meant for use after updating a user's phone number
     * using the
     * [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone)
     * endpoint. Learn more about how to [complete the verification
     * process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification).
     * The verification code sent to the user's phone number is valid for 15
     * minutes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createPhoneVerification(): Promise<Models.Token>;
    /**
     * Create phone verification (confirmation)
     *
     * Use this endpoint to complete the user phone verification process. Use the
     * **userId** and **secret** that were sent to your user's phone number to
     * verify the user email ownership. If confirmed this route will return a 200
     * status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePhoneVerification(userId: string, secret: string): Promise<Models.Token>;
  }
  export class Avatars extends Service {
    constructor(client: Client);
    
    /**
     * Get browser icon
     *
     * You can use this endpoint to show different browser icons to your users.
     * The code argument receives the browser code as it appears in your user [GET
     * /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions)
     * endpoint. Use width, height and quality arguments to change the output
     * settings.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     *
     * @param {Browser} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getBrowser(code: Browser, width?: number, height?: number, quality?: number): Promise<ArrayBuffer>;
    /**
     * Get credit card icon
     *
     * The credit card endpoint will return you the icon of the credit card
     * provider you need. Use width, height and quality arguments to change the
     * output settings.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     * 
     *
     * @param {CreditCard} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCreditCard(code: CreditCard, width?: number, height?: number, quality?: number): Promise<ArrayBuffer>;
    /**
     * Get favicon
     *
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote
     * website URL.
     * 
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFavicon(url: string): Promise<ArrayBuffer>;
    /**
     * Get country flag
     *
     * You can use this endpoint to show different country flags icons to your
     * users. The code argument receives the 2 letter country code. Use width,
     * height and quality arguments to change the output settings. Country codes
     * follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     * 
     *
     * @param {Flag} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFlag(code: Flag, width?: number, height?: number, quality?: number): Promise<ArrayBuffer>;
    /**
     * Get image from URL
     *
     * Use this endpoint to fetch a remote image URL and crop it to any image size
     * you want. This endpoint is very useful if you need to crop and display
     * remote images in your app or in case you want to make sure a 3rd party
     * image is properly served using a TLS protocol.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 400x400px.
     * 
     *
     * @param {string} url
     * @param {number} width
     * @param {number} height
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getImage(url: string, width?: number, height?: number): Promise<ArrayBuffer>;
    /**
     * Get user initials
     *
     * Use this endpoint to show your user initials avatar icon on your website or
     * app. By default, this route will try to print your logged-in user name or
     * email initials. You can also overwrite the user name if you pass the 'name'
     * parameter. If no name is given and no user is logged, an empty avatar will
     * be returned.
     * 
     * You can use the color and background params to change the avatar colors. By
     * default, a random theme will be selected. The random theme will persist for
     * the user's initials when reloading the same theme will always return for
     * the same initials.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     * 
     *
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {string} background
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getInitials(name?: string, width?: number, height?: number, background?: string): Promise<ArrayBuffer>;
    /**
     * Get QR code
     *
     * Converts a given plain text to a QR code image. You can use the query
     * parameters to change the size and style of the resulting image.
     * 
     *
     * @param {string} text
     * @param {number} size
     * @param {number} margin
     * @param {boolean} download
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQR(text: string, size?: number, margin?: number, download?: boolean): Promise<ArrayBuffer>;
  }
  export class Databases extends Service {
    constructor(client: Client);
    
    /**
     * List databases
     *
     * Get a list of all databases from the current Appwrite project. You can use
     * the search parameter to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    list(queries?: string[], search?: string): Promise<Models.DatabaseList>;
    /**
     * Create database
     *
     * Create a new Database.
     * 
     *
     * @param {string} databaseId
     * @param {string} name
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    create(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database>;
    /**
     * Get database
     *
     * Get a database by its unique ID. This endpoint response returns a JSON
     * object with the database metadata.
     *
     * @param {string} databaseId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get(databaseId: string): Promise<Models.Database>;
    /**
     * Update database
     *
     * Update a database by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} name
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    update(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database>;
    /**
     * Delete database
     *
     * Delete a database by its unique ID. Only API keys with with databases.write
     * scope can delete a database.
     *
     * @param {string} databaseId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(databaseId: string): Promise<string>;
    /**
     * List collections
     *
     * Get a list of all collections that belong to the provided databaseId. You
     * can use the search parameter to filter your results.
     *
     * @param {string} databaseId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listCollections(databaseId: string, queries?: string[], search?: string): Promise<Models.CollectionList>;
    /**
     * Create collection
     *
     * Create a new Collection. Before using this route, you should create a new
     * database resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} documentSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
    /**
     * Get collection
     *
     * Get a collection by its unique ID. This endpoint response returns a JSON
     * object with the collection metadata.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCollection(databaseId: string, collectionId: string): Promise<Models.Collection>;
    /**
     * Update collection
     *
     * Update a collection by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} documentSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
    /**
     * Delete collection
     *
     * Delete a collection by its unique ID. Only users with write permissions
     * have access to delete this resource.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteCollection(databaseId: string, collectionId: string): Promise<string>;
    /**
     * List attributes
     *
     * List attributes in the collection.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listAttributes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.AttributeList>;
    /**
     * Create boolean attribute
     *
     * Create a boolean attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean>;
    /**
     * Update boolean attribute
     *
     * Update a boolean attribute. Changing the `default` value will not update
     * already existing documents.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} default
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean): Promise<Models.AttributeBoolean>;
    /**
     * Create datetime attribute
     *
     * Create a date time attribute according to the ISO 8601 standard.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeDatetime>;
    /**
     * Update dateTime attribute
     *
     * Update a date time attribute. Changing the `default` value will not update
     * already existing documents.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string): Promise<Models.AttributeDatetime>;
    /**
     * Create email attribute
     *
     * Create an email attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail>;
    /**
     * Update email attribute
     *
     * Update an email attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string): Promise<Models.AttributeEmail>;
    /**
     * Create enum attribute
     *
     * Create an enumeration attribute. The `elements` param acts as a white-list
     * of accepted values for this attribute. 
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum>;
    /**
     * Update enum attribute
     *
     * Update an enum attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} default
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string): Promise<Models.AttributeEnum>;
    /**
     * Create float attribute
     *
     * Create a float attribute. Optionally, minimum and maximum values can be
     * provided.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat>;
    /**
     * Update float attribute
     *
     * Update a float attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} default
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: number, max: number, xdefault?: number): Promise<Models.AttributeFloat>;
    /**
     * Create integer attribute
     *
     * Create an integer attribute. Optionally, minimum and maximum values can be
     * provided.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger>;
    /**
     * Update integer attribute
     *
     * Update an integer attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} default
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: number, max: number, xdefault?: number): Promise<Models.AttributeInteger>;
    /**
     * Create IP address attribute
     *
     * Create IP address attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp>;
    /**
     * Update IP address attribute
     *
     * Update an ip attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string): Promise<Models.AttributeIp>;
    /**
     * Create relationship attribute
     *
     * Create relationship attribute. [Learn more about relationship
     * attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} relatedCollectionId
     * @param {RelationshipType} type
     * @param {boolean} twoWay
     * @param {string} key
     * @param {string} twoWayKey
     * @param {RelationMutate} onDelete
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship>;
    /**
     * Create string attribute
     *
     * Create a string attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {number} size
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @param {boolean} encrypt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeString>;
    /**
     * Update string attribute
     *
     * Update a string attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string): Promise<Models.AttributeString>;
    /**
     * Create URL attribute
     *
     * Create a URL attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl>;
    /**
     * Update URL attribute
     *
     * Update an url attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string): Promise<Models.AttributeUrl>;
    /**
     * Get attribute
     *
     * Get attribute by ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getAttribute(databaseId: string, collectionId: string, key: string): Promise<any>;
    /**
     * Delete attribute
     *
     * Deletes an attribute.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<string>;
    /**
     * Update relationship attribute
     *
     * Update relationship attribute. [Learn more about relationship
     * attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {RelationMutate} onDelete
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship>;
    /**
     * List documents
     *
     * Get a list of all the user's documents in a given collection. You can use
     * the query params to filter your results.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>>;
    /**
     * Create document
     *
     * Create a new Document. Before using this route, you should create a new
     * collection resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[]): Promise<Document>;
    /**
     * Get document
     *
     * Get a document by its unique ID. This endpoint response returns a JSON
     * object with the document data.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Document>;
    /**
     * Update document
     *
     * Update a document by its unique ID. Using the patch method you can pass
     * only specific fields that will get updated.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data?: object, permissions?: string[]): Promise<Document>;
    /**
     * Delete document
     *
     * Delete a document by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<string>;
    /**
     * List indexes
     *
     * List indexes in the collection.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listIndexes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.IndexList>;
    /**
     * Create index
     *
     * Creates an index on the attributes listed. Your index should include all
     * the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {IndexType} type
     * @param {string[]} attributes
     * @param {string[]} orders
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createIndex(databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[]): Promise<Models.Index>;
    /**
     * Get index
     *
     * Get index by ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index>;
    /**
     * Delete index
     *
     * Delete an index.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteIndex(databaseId: string, collectionId: string, key: string): Promise<string>;
  }
  export class Functions extends Service {
    constructor(client: Client);
    
    /**
     * List functions
     *
     * Get a list of all the project's functions. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    list(queries?: string[], search?: string): Promise<Models.FunctionList>;
    /**
     * Create function
     *
     * Create a new function. You can pass a list of
     * [permissions](https://appwrite.io/docs/permissions) to allow different
     * project users or team with access to execute the function using the client
     * API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {Runtime} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} templateRepository
     * @param {string} templateOwner
     * @param {string} templateRootDirectory
     * @param {string} templateBranch
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    create(functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, templateRepository?: string, templateOwner?: string, templateRootDirectory?: string, templateBranch?: string): Promise<Models.Function>;
    /**
     * List runtimes
     *
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listRuntimes(): Promise<Models.RuntimeList>;
    /**
     * Get function
     *
     * Get a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get(functionId: string): Promise<Models.Function>;
    /**
     * Update function
     *
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {Runtime} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    update(functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string): Promise<Models.Function>;
    /**
     * Delete function
     *
     * Delete a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(functionId: string): Promise<string>;
    /**
     * List deployments
     *
     * Get a list of all the project's code deployments. You can use the query
     * params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listDeployments(functionId: string, queries?: string[], search?: string): Promise<Models.DeploymentList>;
    /**
     * Create deployment
     *
     * Create a new function code deployment. Use this endpoint to upload a new
     * version of your code function. To execute your newly uploaded code, you'll
     * need to update the function's deployment to use your new deployment UID.
     * 
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to
     * include any dependencies your code has within the compressed file. You can
     * learn more about code packaging in the [Appwrite Cloud Functions
     * tutorial](https://appwrite.io/docs/functions).
     * 
     * Use the "command" param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId
     * @param {InputFile} code
     * @param {boolean} activate
     * @param {string} entrypoint
     * @param {string} commands
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createDeployment(functionId: string, code: InputFile, activate: boolean, entrypoint?: string, commands?: string): Promise<Models.Deployment>;
    /**
     * Get deployment
     *
     * Get a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getDeployment(functionId: string, deploymentId: string): Promise<Models.Deployment>;
    /**
     * Update function deployment
     *
     * Update the function code deployment ID using the unique function ID. Use
     * this endpoint to switch the code deployment that should be executed by the
     * execution endpoint.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateDeployment(functionId: string, deploymentId: string): Promise<Models.Function>;
    /**
     * Delete deployment
     *
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteDeployment(functionId: string, deploymentId: string): Promise<string>;
    /**
     * Create build
     *
     * Create a new build for an Appwrite Function deployment. This endpoint can
     * be used to retry a failed build.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createBuild(functionId: string, deploymentId: string, buildId: string): Promise<any>;
    /**
     * Download Deployment
     *
     * Get a Deployment's contents by its unique ID. This endpoint supports range
     * requests for partial or streaming file download.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    downloadDeployment(functionId: string, deploymentId: string): Promise<ArrayBuffer>;
    /**
     * List executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listExecutions(functionId: string, queries?: string[], search?: string): Promise<Models.ExecutionList>;
    /**
     * Create execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} body
     * @param {boolean} async
     * @param {string} path
     * @param {ExecutionMethod} method
     * @param {object} headers
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createExecution(functionId: string, body?: string, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object): Promise<Models.Execution>;
    /**
     * Get execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getExecution(functionId: string, executionId: string): Promise<Models.Execution>;
    /**
     * List variables
     *
     * Get a list of all variables of a specific function.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listVariables(functionId: string): Promise<Models.VariableList>;
    /**
     * Create variable
     *
     * Create a new function environment variable. These variables can be accessed
     * in the function at runtime as environment variables.
     *
     * @param {string} functionId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createVariable(functionId: string, key: string, value: string): Promise<Models.Variable>;
    /**
     * Get variable
     *
     * Get a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getVariable(functionId: string, variableId: string): Promise<Models.Variable>;
    /**
     * Update variable
     *
     * Update variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateVariable(functionId: string, variableId: string, key: string, value?: string): Promise<Models.Variable>;
    /**
     * Delete variable
     *
     * Delete a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteVariable(functionId: string, variableId: string): Promise<string>;
  }
  export class Graphql extends Service {
    constructor(client: Client);
    
    /**
     * GraphQL endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    query(query: object): Promise<any>;
    /**
     * GraphQL endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    mutation(query: object): Promise<any>;
  }
  export class Health extends Service {
    constructor(client: Client);
    
    /**
     * Get HTTP
     *
     * Check the Appwrite HTTP server is up and responsive.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get(): Promise<Models.HealthStatus>;
    /**
     * Get antivirus
     *
     * Check the Appwrite Antivirus server is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getAntivirus(): Promise<Models.HealthAntivirus>;
    /**
     * Get cache
     *
     * Check the Appwrite in-memory cache servers are up and connection is
     * successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCache(): Promise<Models.HealthStatus>;
    /**
     * Get the SSL certificate for a domain
     *
     * Get the SSL certificate for a domain
     *
     * @param {string} domain
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCertificate(domain?: string): Promise<Models.HealthCertificate>;
    /**
     * Get DB
     *
     * Check the Appwrite database servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getDB(): Promise<Models.HealthStatus>;
    /**
     * Get pubsub
     *
     * Check the Appwrite pub-sub servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getPubSub(): Promise<Models.HealthStatus>;
    /**
     * Get queue
     *
     * Check the Appwrite queue messaging servers are up and connection is
     * successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueue(): Promise<Models.HealthStatus>;
    /**
     * Get builds queue
     *
     * Get the number of builds that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueBuilds(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get certificates queue
     *
     * Get the number of certificates that are waiting to be issued against
     * [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue
     * server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueCertificates(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get databases queue
     *
     * Get the number of database changes that are waiting to be processed in the
     * Appwrite internal queue server.
     *
     * @param {string} name
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueDatabases(name?: string, threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get deletes queue
     *
     * Get the number of background destructive changes that are waiting to be
     * processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueDeletes(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get number of failed queue jobs
     *
     * Returns the amount of failed jobs in a given queue.
     * 
     *
     * @param {Name} name
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFailedJobs(name: Name, threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get functions queue
     *
     * Get the number of function executions that are waiting to be processed in
     * the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueFunctions(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get logs queue
     *
     * Get the number of logs that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueLogs(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get mails queue
     *
     * Get the number of mails that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueMails(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get messaging queue
     *
     * Get the number of messages that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueMessaging(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get migrations queue
     *
     * Get the number of migrations that are waiting to be processed in the
     * Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueMigrations(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get usage queue
     *
     * Get the number of metrics that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueUsage(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get usage dump queue
     *
     * Get the number of projects containing metrics that are waiting to be
     * processed in the Appwrite internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueUsageDump(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get webhooks queue
     *
     * Get the number of webhooks that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @param {number} threshold
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueWebhooks(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get storage
     *
     * Check the Appwrite storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getStorage(): Promise<Models.HealthStatus>;
    /**
     * Get local storage
     *
     * Check the Appwrite local storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getStorageLocal(): Promise<Models.HealthStatus>;
    /**
     * Get time
     *
     * Check the Appwrite server time is synced with Google remote NTP server. We
     * use this technology to smoothly handle leap seconds with no disruptive
     * events. The [Network Time
     * Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is
     * used by hundreds of millions of computers and devices to synchronize their
     * clocks over the Internet. If your computer sets its own clock, it likely
     * uses NTP.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getTime(): Promise<Models.HealthTime>;
  }
  export class Locale extends Service {
    constructor(client: Client);
    
    /**
     * Get user locale
     *
     * Get the current user location based on IP. Returns an object with user
     * country code, country name, continent name, continent code, ip address and
     * suggested currency. You can use the locale header to get the data in a
     * supported language.
     * 
     * ([IP Geolocation by DB-IP](https://db-ip.com))
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get(): Promise<Models.Locale>;
    /**
     * List Locale Codes
     *
     * List of all locale codes in [ISO
     * 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listCodes(): Promise<Models.LocaleCodeList>;
    /**
     * List continents
     *
     * List of all continents. You can use the locale header to get the data in a
     * supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listContinents(): Promise<Models.ContinentList>;
    /**
     * List countries
     *
     * List of all countries. You can use the locale header to get the data in a
     * supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listCountries(): Promise<Models.CountryList>;
    /**
     * List EU countries
     *
     * List of all countries that are currently members of the EU. You can use the
     * locale header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listCountriesEU(): Promise<Models.CountryList>;
    /**
     * List countries phone codes
     *
     * List of all countries phone codes. You can use the locale header to get the
     * data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listCountriesPhones(): Promise<Models.PhoneList>;
    /**
     * List currencies
     *
     * List of all currencies, including currency symbol, name, plural, and
     * decimal digits for all major and minor currencies. You can use the locale
     * header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listCurrencies(): Promise<Models.CurrencyList>;
    /**
     * List languages
     *
     * List of all languages classified by ISO 639-1 including 2-letter code, name
     * in English, and name in the respective language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listLanguages(): Promise<Models.LanguageList>;
  }
  export class Messaging extends Service {
    constructor(client: Client);
    
    /**
     * List messages
     *
     * Get a list of all messages from the current Appwrite project.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listMessages(queries?: string[], search?: string): Promise<Models.MessageList>;
    /**
     * Create email
     *
     * Create a new email message.
     *
     * @param {string} messageId
     * @param {string} subject
     * @param {string} content
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {string[]} cc
     * @param {string[]} bcc
     * @param {string[]} attachments
     * @param {boolean} draft
     * @param {boolean} html
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createEmail(messageId: string, subject: string, content: string, topics?: string[], users?: string[], targets?: string[], cc?: string[], bcc?: string[], attachments?: string[], draft?: boolean, html?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Update email
     *
     * Update an email message by its unique ID.
     * 
     *
     * @param {string} messageId
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {string} subject
     * @param {string} content
     * @param {boolean} draft
     * @param {boolean} html
     * @param {string[]} cc
     * @param {string[]} bcc
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateEmail(messageId: string, topics?: string[], users?: string[], targets?: string[], subject?: string, content?: string, draft?: boolean, html?: boolean, cc?: string[], bcc?: string[], scheduledAt?: string): Promise<Models.Message>;
    /**
     * Create push notification
     *
     * Create a new push notification.
     *
     * @param {string} messageId
     * @param {string} title
     * @param {string} body
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {object} data
     * @param {string} action
     * @param {string} image
     * @param {string} icon
     * @param {string} sound
     * @param {string} color
     * @param {string} tag
     * @param {string} badge
     * @param {boolean} draft
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createPush(messageId: string, title: string, body: string, topics?: string[], users?: string[], targets?: string[], data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: string, draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Update push notification
     *
     * Update a push notification by its unique ID.
     * 
     *
     * @param {string} messageId
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {string} title
     * @param {string} body
     * @param {object} data
     * @param {string} action
     * @param {string} image
     * @param {string} icon
     * @param {string} sound
     * @param {string} color
     * @param {string} tag
     * @param {number} badge
     * @param {boolean} draft
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePush(messageId: string, topics?: string[], users?: string[], targets?: string[], title?: string, body?: string, data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Create SMS
     *
     * Create a new SMS message.
     *
     * @param {string} messageId
     * @param {string} content
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {boolean} draft
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createSms(messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Update SMS
     *
     * Update an email message by its unique ID.
     * 
     *
     * @param {string} messageId
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {string} content
     * @param {boolean} draft
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateSms(messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Get message
     *
     * Get a message by its unique ID.
     * 
     *
     * @param {string} messageId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getMessage(messageId: string): Promise<Models.Message>;
    /**
     * Delete message
     *
     * Delete a message. If the message is not a draft or scheduled, but has been
     * sent, this will not recall the message.
     *
     * @param {string} messageId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(messageId: string): Promise<string>;
    /**
     * List message logs
     *
     * Get the message activity logs listed by its unique ID.
     *
     * @param {string} messageId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listMessageLogs(messageId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * List message targets
     *
     * Get a list of the targets associated with a message.
     *
     * @param {string} messageId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listTargets(messageId: string, queries?: string[]): Promise<Models.TargetList>;
    /**
     * List providers
     *
     * Get a list of all providers from the current Appwrite project.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listProviders(queries?: string[], search?: string): Promise<Models.ProviderList>;
    /**
     * Create APNS provider
     *
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} authKey
     * @param {string} authKeyId
     * @param {string} teamId
     * @param {string} bundleId
     * @param {boolean} sandbox
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createApnsProvider(providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update APNS provider
     *
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} authKey
     * @param {string} authKeyId
     * @param {string} teamId
     * @param {string} bundleId
     * @param {boolean} sandbox
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateApnsProvider(providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean): Promise<Models.Provider>;
    /**
     * Create FCM provider
     *
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {object} serviceAccountJSON
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createFcmProvider(providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update FCM provider
     *
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {object} serviceAccountJSON
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateFcmProvider(providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object): Promise<Models.Provider>;
    /**
     * Create Mailgun provider
     *
     * Create a new Mailgun provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} apiKey
     * @param {string} domain
     * @param {boolean} isEuRegion
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMailgunProvider(providerId: string, name: string, apiKey?: string, domain?: string, isEuRegion?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update Mailgun provider
     *
     * Update a Mailgun provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} apiKey
     * @param {string} domain
     * @param {boolean} isEuRegion
     * @param {boolean} enabled
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMailgunProvider(providerId: string, name?: string, apiKey?: string, domain?: string, isEuRegion?: boolean, enabled?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string): Promise<Models.Provider>;
    /**
     * Create Msg91 provider
     *
     * Create a new MSG91 provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} templateId
     * @param {string} senderId
     * @param {string} authKey
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMsg91Provider(providerId: string, name: string, templateId?: string, senderId?: string, authKey?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update Msg91 provider
     *
     * Update a MSG91 provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} templateId
     * @param {string} senderId
     * @param {string} authKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMsg91Provider(providerId: string, name?: string, enabled?: boolean, templateId?: string, senderId?: string, authKey?: string): Promise<Models.Provider>;
    /**
     * Create Sendgrid provider
     *
     * Create a new Sendgrid provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} apiKey
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createSendgridProvider(providerId: string, name: string, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update Sendgrid provider
     *
     * Update a Sendgrid provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} apiKey
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateSendgridProvider(providerId: string, name?: string, enabled?: boolean, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string): Promise<Models.Provider>;
    /**
     * Create SMTP provider
     *
     * Create a new SMTP provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} host
     * @param {number} port
     * @param {string} username
     * @param {string} password
     * @param {SmtpEncryption} encryption
     * @param {boolean} autoTLS
     * @param {string} mailer
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createSmtpProvider(providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update SMTP provider
     *
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} host
     * @param {number} port
     * @param {string} username
     * @param {string} password
     * @param {SmtpEncryption} encryption
     * @param {boolean} autoTLS
     * @param {string} mailer
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateSmtpProvider(providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Create Telesign provider
     *
     * Create a new Telesign provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} from
     * @param {string} customerId
     * @param {string} apiKey
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createTelesignProvider(providerId: string, name: string, from?: string, customerId?: string, apiKey?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update Telesign provider
     *
     * Update a Telesign provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} customerId
     * @param {string} apiKey
     * @param {string} from
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateTelesignProvider(providerId: string, name?: string, enabled?: boolean, customerId?: string, apiKey?: string, from?: string): Promise<Models.Provider>;
    /**
     * Create Textmagic provider
     *
     * Create a new Textmagic provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} from
     * @param {string} username
     * @param {string} apiKey
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createTextmagicProvider(providerId: string, name: string, from?: string, username?: string, apiKey?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update Textmagic provider
     *
     * Update a Textmagic provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} username
     * @param {string} apiKey
     * @param {string} from
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateTextmagicProvider(providerId: string, name?: string, enabled?: boolean, username?: string, apiKey?: string, from?: string): Promise<Models.Provider>;
    /**
     * Create Twilio provider
     *
     * Create a new Twilio provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} from
     * @param {string} accountSid
     * @param {string} authToken
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createTwilioProvider(providerId: string, name: string, from?: string, accountSid?: string, authToken?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update Twilio provider
     *
     * Update a Twilio provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} accountSid
     * @param {string} authToken
     * @param {string} from
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateTwilioProvider(providerId: string, name?: string, enabled?: boolean, accountSid?: string, authToken?: string, from?: string): Promise<Models.Provider>;
    /**
     * Create Vonage provider
     *
     * Create a new Vonage provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} from
     * @param {string} apiKey
     * @param {string} apiSecret
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createVonageProvider(providerId: string, name: string, from?: string, apiKey?: string, apiSecret?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update Vonage provider
     *
     * Update a Vonage provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} apiKey
     * @param {string} apiSecret
     * @param {string} from
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateVonageProvider(providerId: string, name?: string, enabled?: boolean, apiKey?: string, apiSecret?: string, from?: string): Promise<Models.Provider>;
    /**
     * Get provider
     *
     * Get a provider by its unique ID.
     * 
     *
     * @param {string} providerId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getProvider(providerId: string): Promise<Models.Provider>;
    /**
     * Delete provider
     *
     * Delete a provider by its unique ID.
     *
     * @param {string} providerId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteProvider(providerId: string): Promise<string>;
    /**
     * List provider logs
     *
     * Get the provider activity logs listed by its unique ID.
     *
     * @param {string} providerId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listProviderLogs(providerId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * List subscriber logs
     *
     * Get the subscriber activity logs listed by its unique ID.
     *
     * @param {string} subscriberId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listSubscriberLogs(subscriberId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * List topics
     *
     * Get a list of all topics from the current Appwrite project.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listTopics(queries?: string[], search?: string): Promise<Models.TopicList>;
    /**
     * Create topic
     *
     * Create a new topic.
     *
     * @param {string} topicId
     * @param {string} name
     * @param {string[]} subscribe
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createTopic(topicId: string, name: string, subscribe?: string[]): Promise<Models.Topic>;
    /**
     * Get topic
     *
     * Get a topic by its unique ID.
     * 
     *
     * @param {string} topicId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getTopic(topicId: string): Promise<Models.Topic>;
    /**
     * Update topic
     *
     * Update a topic by its unique ID.
     * 
     *
     * @param {string} topicId
     * @param {string} name
     * @param {string[]} subscribe
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateTopic(topicId: string, name?: string, subscribe?: string[]): Promise<Models.Topic>;
    /**
     * Delete topic
     *
     * Delete a topic by its unique ID.
     *
     * @param {string} topicId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteTopic(topicId: string): Promise<string>;
    /**
     * List topic logs
     *
     * Get the topic activity logs listed by its unique ID.
     *
     * @param {string} topicId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listTopicLogs(topicId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * List subscribers
     *
     * Get a list of all subscribers from the current Appwrite project.
     *
     * @param {string} topicId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listSubscribers(topicId: string, queries?: string[], search?: string): Promise<Models.SubscriberList>;
    /**
     * Create subscriber
     *
     * Create a new subscriber.
     *
     * @param {string} topicId
     * @param {string} subscriberId
     * @param {string} targetId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createSubscriber(topicId: string, subscriberId: string, targetId: string): Promise<Models.Subscriber>;
    /**
     * Get subscriber
     *
     * Get a subscriber by its unique ID.
     * 
     *
     * @param {string} topicId
     * @param {string} subscriberId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getSubscriber(topicId: string, subscriberId: string): Promise<Models.Subscriber>;
    /**
     * Delete subscriber
     *
     * Delete a subscriber by its unique ID.
     *
     * @param {string} topicId
     * @param {string} subscriberId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSubscriber(topicId: string, subscriberId: string): Promise<string>;
  }
  export class Storage extends Service {
    constructor(client: Client);
    
    /**
     * List buckets
     *
     * Get a list of all the storage buckets. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listBuckets(queries?: string[], search?: string): Promise<Models.BucketList>;
    /**
     * Create bucket
     *
     * Create a new storage bucket.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} fileSecurity
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {Compression} compression
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createBucket(bucketId: string, name: string, permissions?: string[], fileSecurity?: boolean, enabled?: boolean, maximumFileSize?: number, allowedFileExtensions?: string[], compression?: Compression, encryption?: boolean, antivirus?: boolean): Promise<Models.Bucket>;
    /**
     * Get bucket
     *
     * Get a storage bucket by its unique ID. This endpoint response returns a
     * JSON object with the storage bucket metadata.
     *
     * @param {string} bucketId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getBucket(bucketId: string): Promise<Models.Bucket>;
    /**
     * Update bucket
     *
     * Update a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} fileSecurity
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {Compression} compression
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateBucket(bucketId: string, name: string, permissions?: string[], fileSecurity?: boolean, enabled?: boolean, maximumFileSize?: number, allowedFileExtensions?: string[], compression?: Compression, encryption?: boolean, antivirus?: boolean): Promise<Models.Bucket>;
    /**
     * Delete bucket
     *
     * Delete a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteBucket(bucketId: string): Promise<string>;
    /**
     * List files
     *
     * Get a list of all the user files. You can use the query params to filter
     * your results.
     *
     * @param {string} bucketId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listFiles(bucketId: string, queries?: string[], search?: string): Promise<Models.FileList>;
    /**
     * Create file
     *
     * Create a new file. Before using this route, you should create a new bucket
     * resource using either a [server
     * integration](https://appwrite.io/docs/server/storage#storageCreateBucket)
     * API or directly from your Appwrite console.
     * 
     * Larger files should be uploaded using multiple requests with the
     * [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)
     * header to send a partial request with a maximum supported chunk of `5MB`.
     * The `content-range` header values should always be in bytes.
     * 
     * When the first request is sent, the server will return the **File** object,
     * and the subsequent part request must include the file's **id** in
     * `x-appwrite-id` header to allow the server to know that the partial upload
     * is for the existing file and not for a new one.
     * 
     * If you're creating a new file using one of the Appwrite SDKs, all the
     * chunking logic will be managed by the SDK internally.
     * 
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {InputFile} file
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createFile(bucketId: string, fileId: string, file: InputFile, permissions?: string[]): Promise<Models.File>;
    /**
     * Get file
     *
     * Get a file by its unique ID. This endpoint response returns a JSON object
     * with the file metadata.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFile(bucketId: string, fileId: string): Promise<Models.File>;
    /**
     * Update file
     *
     * Update a file by its unique ID. Only users with write permissions have
     * access to update this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string} name
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateFile(bucketId: string, fileId: string, name?: string, permissions?: string[]): Promise<Models.File>;
    /**
     * Delete File
     *
     * Delete a file by its unique ID. Only users with write permissions have
     * access to delete this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteFile(bucketId: string, fileId: string): Promise<string>;
    /**
     * Get file for download
     *
     * Get a file content by its unique ID. The endpoint response return with a
     * 'Content-Disposition: attachment' header that tells the browser to start
     * downloading the file to user downloads directory.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFileDownload(bucketId: string, fileId: string): Promise<ArrayBuffer>;
    /**
     * Get file preview
     *
     * Get a file preview image. Currently, this method supports preview for image
     * files (jpg, png, and gif), other supported formats, like pdf, docs, slides,
     * and spreadsheets, will return the file icon image. You can also pass query
     * string arguments for cutting and resizing your preview image. Preview is
     * supported only for image files smaller than 10MB.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {number} width
     * @param {number} height
     * @param {ImageGravity} gravity
     * @param {number} quality
     * @param {number} borderWidth
     * @param {string} borderColor
     * @param {number} borderRadius
     * @param {number} opacity
     * @param {number} rotation
     * @param {string} background
     * @param {ImageFormat} output
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFilePreview(bucketId: string, fileId: string, width?: number, height?: number, gravity?: ImageGravity, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: ImageFormat): Promise<ArrayBuffer>;
    /**
     * Get file for view
     *
     * Get a file content by its unique ID. This endpoint is similar to the
     * download method but returns with no  'Content-Disposition: attachment'
     * header.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFileView(bucketId: string, fileId: string): Promise<ArrayBuffer>;
  }
  export class Teams extends Service {
    constructor(client: Client);
    
    /**
     * List teams
     *
     * Get a list of all the teams in which the current user is a member. You can
     * use the parameters to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.TeamList<Preferences>>;
    /**
     * Create team
     *
     * Create a new team. The user who creates the team will automatically be
     * assigned as the owner of the team. Only the users with the owner role can
     * invite new members, add new owners and delete or update the team.
     *
     * @param {string} teamId
     * @param {string} name
     * @param {string[]} roles
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    create<Preferences extends Models.Preferences>(teamId: string, name: string, roles?: string[]): Promise<Models.Team<Preferences>>;
    /**
     * Get team
     *
     * Get a team by its ID. All team members have read access for this resource.
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get<Preferences extends Models.Preferences>(teamId: string): Promise<Models.Team<Preferences>>;
    /**
     * Update name
     *
     * Update the team's name by its unique ID.
     *
     * @param {string} teamId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateName<Preferences extends Models.Preferences>(teamId: string, name: string): Promise<Models.Team<Preferences>>;
    /**
     * Delete team
     *
     * Delete a team using its ID. Only team members with the owner role can
     * delete the team.
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(teamId: string): Promise<string>;
    /**
     * List team memberships
     *
     * Use this endpoint to list a team's members using the team's ID. All team
     * members have read access to this endpoint.
     *
     * @param {string} teamId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listMemberships(teamId: string, queries?: string[], search?: string): Promise<Models.MembershipList>;
    /**
     * Create team membership
     *
     * Invite a new member to join your team. Provide an ID for existing users, or
     * invite unregistered users using an email or phone number. If initiated from
     * a Client SDK, Appwrite will send an email or sms with a link to join the
     * team to the invited user, and an account will be created for them if one
     * doesn't exist. If initiated from a Server SDK, the new member will be added
     * automatically to the team.
     * 
     * You only need to provide one of a user ID, email, or phone number. Appwrite
     * will prioritize accepting the user ID > email > phone number if you provide
     * more than one of these parameters.
     * 
     * Use the `url` parameter to redirect the user from the invitation email to
     * your app. After the user is redirected, use the [Update Team Membership
     * Status](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus)
     * endpoint to allow the user to accept the invitation to the team. 
     * 
     * Please note that to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * Appwrite will accept the only redirect URLs under the domains you have
     * added as a platform on the Appwrite Console.
     * 
     *
     * @param {string} teamId
     * @param {string[]} roles
     * @param {string} email
     * @param {string} userId
     * @param {string} phone
     * @param {string} url
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMembership(teamId: string, roles: string[], email?: string, userId?: string, phone?: string, url?: string, name?: string): Promise<Models.Membership>;
    /**
     * Get team membership
     *
     * Get a team member by the membership unique id. All team members have read
     * access for this resource.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getMembership(teamId: string, membershipId: string): Promise<Models.Membership>;
    /**
     * Update membership
     *
     * Modify the roles of a team member. Only team members with the owner role
     * have access to this endpoint. Learn more about [roles and
     * permissions](https://appwrite.io/docs/permissions).
     * 
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string[]} roles
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMembership(teamId: string, membershipId: string, roles: string[]): Promise<Models.Membership>;
    /**
     * Delete team membership
     *
     * This endpoint allows a user to leave a team or for a team owner to delete
     * the membership of any other team member. You can also use this endpoint to
     * delete a user membership even if it is not accepted.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteMembership(teamId: string, membershipId: string): Promise<string>;
    /**
     * Update team membership status
     *
     * Use this endpoint to allow a user to accept an invitation to join a team
     * after being redirected back to your app from the invitation email received
     * by the user.
     * 
     * If the request is successful, a session for the user is automatically
     * created.
     * 
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMembershipStatus(teamId: string, membershipId: string, userId: string, secret: string): Promise<Models.Membership>;
    /**
     * Get team preferences
     *
     * Get the team's shared preferences by its unique ID. If a preference doesn't
     * need to be shared by all team members, prefer storing them in [user
     * preferences](https://appwrite.io/docs/references/cloud/client-web/account#getPrefs).
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getPrefs<Preferences extends Models.Preferences>(teamId: string): Promise<Preferences>;
    /**
     * Update preferences
     *
     * Update the team's preferences by its unique ID. The object you pass is
     * stored as is and replaces any previous value. The maximum allowed prefs
     * size is 64kB and throws an error if exceeded.
     *
     * @param {string} teamId
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePrefs<Preferences extends Models.Preferences>(teamId: string, prefs: object): Promise<Preferences>;
  }
  export class Users extends Service {
    constructor(client: Client);
    
    /**
     * List users
     *
     * Get a list of all the project's users. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.UserList<Preferences>>;
    /**
     * Create user
     *
     * Create a new user.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} phone
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    create<Preferences extends Models.Preferences>(userId: string, email?: string, phone?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create user with Argon2 password
     *
     * Create a new user. Password provided must be hashed with the
     * [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createArgon2User<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create user with bcrypt password
     *
     * Create a new user. Password provided must be hashed with the
     * [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createBcryptUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * List Identities
     *
     * Get identities for all users.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listIdentities(queries?: string[], search?: string): Promise<Models.IdentityList>;
    /**
     * Delete identity
     *
     * Delete an identity by its unique ID.
     *
     * @param {string} identityId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteIdentity(identityId: string): Promise<string>;
    /**
     * Create user with MD5 password
     *
     * Create a new user. Password provided must be hashed with the
     * [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMD5User<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create user with PHPass password
     *
     * Create a new user. Password provided must be hashed with the
     * [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createPHPassUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create user with Scrypt password
     *
     * Create a new user. Password provided must be hashed with the
     * [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordSalt
     * @param {number} passwordCpu
     * @param {number} passwordMemory
     * @param {number} passwordParallel
     * @param {number} passwordLength
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createScryptUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create user with Scrypt modified password
     *
     * Create a new user. Password provided must be hashed with the [Scrypt
     * Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc)
     * algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordSalt
     * @param {string} passwordSaltSeparator
     * @param {string} passwordSignerKey
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createScryptModifiedUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create user with SHA password
     *
     * Create a new user. Password provided must be hashed with the
     * [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use
     * the [POST /users](https://appwrite.io/docs/server/users#usersCreate)
     * endpoint to create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {PasswordHash} passwordVersion
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createSHAUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Get user
     *
     * Get a user by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get<Preferences extends Models.Preferences>(userId: string): Promise<Models.User<Preferences>>;
    /**
     * Delete user
     *
     * Delete a user by its unique ID, thereby releasing it's ID. Since ID is
     * released and can be reused, all user-related resources like documents or
     * storage files should be deleted before user deletion. If you want to keep
     * ID reserved, use the
     * [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus)
     * endpoint instead.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(userId: string): Promise<string>;
    /**
     * Update email
     *
     * Update the user email by its unique ID.
     *
     * @param {string} userId
     * @param {string} email
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateEmail<Preferences extends Models.Preferences>(userId: string, email: string): Promise<Models.User<Preferences>>;
    /**
     * Update user labels
     *
     * Update the user labels by its unique ID. 
     * 
     * Labels can be used to grant access to resources. While teams are a way for
     * user's to share access to a resource, labels can be defined by the
     * developer to grant access without an invitation. See the [Permissions
     * docs](https://appwrite.io/docs/permissions) for more info.
     *
     * @param {string} userId
     * @param {string[]} labels
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateLabels<Preferences extends Models.Preferences>(userId: string, labels: string[]): Promise<Models.User<Preferences>>;
    /**
     * List user logs
     *
     * Get the user activity logs list by its unique ID.
     *
     * @param {string} userId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listLogs(userId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * List user memberships
     *
     * Get the user membership list by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listMemberships(userId: string): Promise<Models.MembershipList>;
    /**
     * Update MFA
     *
     * Enable or disable MFA on a user account.
     *
     * @param {string} userId
     * @param {boolean} mfa
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMfa<Preferences extends Models.Preferences>(userId: string, mfa: boolean): Promise<Models.User<Preferences>>;
    /**
     * Delete Authenticator
     *
     * Delete an authenticator app.
     *
     * @param {string} userId
     * @param {AuthenticatorType} type
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteMfaAuthenticator<Preferences extends Models.Preferences>(userId: string, type: AuthenticatorType): Promise<Models.User<Preferences>>;
    /**
     * List Factors
     *
     * List the factors available on the account to be used as a MFA challange.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listMfaFactors(userId: string): Promise<Models.MfaFactors>;
    /**
     * Get MFA Recovery Codes
     *
     * Get recovery codes that can be used as backup for MFA flow by User ID.
     * Before getting codes, they must be generated using
     * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
     * method.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    /**
     * Regenerate MFA Recovery Codes
     *
     * Regenerate recovery codes that can be used as backup for MFA flow by User
     * ID. Before regenerating codes, they must be first generated using
     * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
     * method.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    /**
     * Create MFA Recovery Codes
     *
     * Generate recovery codes used as backup for MFA flow for User ID. Recovery
     * codes can be used as a MFA verification type in
     * [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge)
     * method by client SDK.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    /**
     * Update name
     *
     * Update the user name by its unique ID.
     *
     * @param {string} userId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateName<Preferences extends Models.Preferences>(userId: string, name: string): Promise<Models.User<Preferences>>;
    /**
     * Update password
     *
     * Update the user password by its unique ID.
     *
     * @param {string} userId
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePassword<Preferences extends Models.Preferences>(userId: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * Update phone
     *
     * Update the user phone by its unique ID.
     *
     * @param {string} userId
     * @param {string} number
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePhone<Preferences extends Models.Preferences>(userId: string, number: string): Promise<Models.User<Preferences>>;
    /**
     * Get user preferences
     *
     * Get the user preferences by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getPrefs<Preferences extends Models.Preferences>(userId: string): Promise<Preferences>;
    /**
     * Update user preferences
     *
     * Update the user preferences by its unique ID. The object you pass is stored
     * as is, and replaces any previous value. The maximum allowed prefs size is
     * 64kB and throws error if exceeded.
     *
     * @param {string} userId
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePrefs<Preferences extends Models.Preferences>(userId: string, prefs: object): Promise<Preferences>;
    /**
     * List user sessions
     *
     * Get the user sessions list by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listSessions(userId: string): Promise<Models.SessionList>;
    /**
     * Create session
     *
     * Creates a session for a user. Returns an immediately usable session object.
     * 
     * If you want to generate a token for a custom authentication flow, use the
     * [POST
     * /users/{userId}/tokens](https://appwrite.io/docs/server/users#createToken)
     * endpoint.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createSession(userId: string): Promise<Models.Session>;
    /**
     * Delete user sessions
     *
     * Delete all user's sessions by using the user's unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSessions(userId: string): Promise<string>;
    /**
     * Delete user session
     *
     * Delete a user sessions by its unique ID.
     *
     * @param {string} userId
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSession(userId: string, sessionId: string): Promise<string>;
    /**
     * Update user status
     *
     * Update the user status by its unique ID. Use this endpoint as an
     * alternative to deleting a user if you want to keep user's ID reserved.
     *
     * @param {string} userId
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateStatus<Preferences extends Models.Preferences>(userId: string, status: boolean): Promise<Models.User<Preferences>>;
    /**
     * List User Targets
     *
     * List the messaging targets that are associated with a user.
     *
     * @param {string} userId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listTargets(userId: string, queries?: string[]): Promise<Models.TargetList>;
    /**
     * Create User Target
     *
     * Create a messaging target.
     *
     * @param {string} userId
     * @param {string} targetId
     * @param {MessagingProviderType} providerType
     * @param {string} identifier
     * @param {string} providerId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createTarget(userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string): Promise<Models.Target>;
    /**
     * Get User Target
     *
     * Get a user's push notification target by ID.
     *
     * @param {string} userId
     * @param {string} targetId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getTarget(userId: string, targetId: string): Promise<Models.Target>;
    /**
     * Update User target
     *
     * Update a messaging target.
     *
     * @param {string} userId
     * @param {string} targetId
     * @param {string} identifier
     * @param {string} providerId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateTarget(userId: string, targetId: string, identifier?: string, providerId?: string, name?: string): Promise<Models.Target>;
    /**
     * Delete user target
     *
     * Delete a messaging target.
     *
     * @param {string} userId
     * @param {string} targetId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteTarget(userId: string, targetId: string): Promise<string>;
    /**
     * Create token
     *
     * Returns a token with a secret key for creating a session. If the provided
     * user ID has not be registered, a new user will be created. Use the returned
     * user ID and secret and submit a request to the [PUT
     * /account/sessions/custom](https://appwrite.io/docs/references/cloud/client-web/account#updateCustomSession)
     * endpoint to complete the login process.
     *
     * @param {string} userId
     * @param {number} length
     * @param {number} expire
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createToken(userId: string, length?: number, expire?: number): Promise<Models.Token>;
    /**
     * Update email verification
     *
     * Update the user email verification status by its unique ID.
     *
     * @param {string} userId
     * @param {boolean} emailVerification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateEmailVerification<Preferences extends Models.Preferences>(userId: string, emailVerification: boolean): Promise<Models.User<Preferences>>;
    /**
     * Update phone verification
     *
     * Update the user phone verification status by its unique ID.
     *
     * @param {string} userId
     * @param {boolean} phoneVerification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePhoneVerification<Preferences extends Models.Preferences>(userId: string, phoneVerification: boolean): Promise<Models.User<Preferences>>;
  }
  export const AuthenticatorType: Readonly<{
    Totp: 'totp',
  }>
  export const AuthenticationFactor: Readonly<{
    Email: 'email',
    Phone: 'phone',
    Totp: 'totp',
    Recoverycode: 'recoverycode',
  }>
  export const OAuthProvider: Readonly<{
    Amazon: 'amazon',
    Apple: 'apple',
    Auth0: 'auth0',
    Authentik: 'authentik',
    Autodesk: 'autodesk',
    Bitbucket: 'bitbucket',
    Bitly: 'bitly',
    Box: 'box',
    Dailymotion: 'dailymotion',
    Discord: 'discord',
    Disqus: 'disqus',
    Dropbox: 'dropbox',
    Etsy: 'etsy',
    Facebook: 'facebook',
    Github: 'github',
    Gitlab: 'gitlab',
    Google: 'google',
    Linkedin: 'linkedin',
    Microsoft: 'microsoft',
    Notion: 'notion',
    Oidc: 'oidc',
    Okta: 'okta',
    Paypal: 'paypal',
    PaypalSandbox: 'paypalSandbox',
    Podio: 'podio',
    Salesforce: 'salesforce',
    Slack: 'slack',
    Spotify: 'spotify',
    Stripe: 'stripe',
    Tradeshift: 'tradeshift',
    TradeshiftBox: 'tradeshiftBox',
    Twitch: 'twitch',
    Wordpress: 'wordpress',
    Yahoo: 'yahoo',
    Yammer: 'yammer',
    Yandex: 'yandex',
    Zoho: 'zoho',
    Zoom: 'zoom',
    Mock: 'mock',
  }>
  export const Browser: Readonly<{
    AvantBrowser: 'aa',
    AndroidWebViewBeta: 'an',
    GoogleChrome: 'ch',
    GoogleChromeIOS: 'ci',
    GoogleChromeMobile: 'cm',
    Chromium: 'cr',
    MozillaFirefox: 'ff',
    Safari: 'sf',
    MobileSafari: 'mf',
    MicrosoftEdge: 'ps',
    MicrosoftEdgeIOS: 'oi',
    OperaMini: 'om',
    Opera: 'op',
    OperaNext: 'on',
  }>
  export const CreditCard: Readonly<{
    AmericanExpress: 'amex',
    Argencard: 'argencard',
    Cabal: 'cabal',
    Consosud: 'censosud',
    DinersClub: 'diners',
    Discover: 'discover',
    Elo: 'elo',
    Hipercard: 'hipercard',
    JCB: 'jcb',
    Mastercard: 'mastercard',
    Naranja: 'naranja',
    TarjetaShopping: 'targeta-shopping',
    UnionChinaPay: 'union-china-pay',
    Visa: 'visa',
    MIR: 'mir',
    Maestro: 'maestro',
  }>
  export const Flag: Readonly<{
    Afghanistan: 'af',
    Angola: 'ao',
    Albania: 'al',
    Andorra: 'ad',
    UnitedArabEmirates: 'ae',
    Argentina: 'ar',
    Armenia: 'am',
    AntiguaAndBarbuda: 'ag',
    Australia: 'au',
    Austria: 'at',
    Azerbaijan: 'az',
    Burundi: 'bi',
    Belgium: 'be',
    Benin: 'bj',
    BurkinaFaso: 'bf',
    Bangladesh: 'bd',
    Bulgaria: 'bg',
    Bahrain: 'bh',
    Bahamas: 'bs',
    BosniaAndHerzegovina: 'ba',
    Belarus: 'by',
    Belize: 'bz',
    Bolivia: 'bo',
    Brazil: 'br',
    Barbados: 'bb',
    BruneiDarussalam: 'bn',
    Bhutan: 'bt',
    Botswana: 'bw',
    CentralAfricanRepublic: 'cf',
    Canada: 'ca',
    Switzerland: 'ch',
    Chile: 'cl',
    China: 'cn',
    CoteDIvoire: 'ci',
    Cameroon: 'cm',
    DemocraticRepublicOfTheCongo: 'cd',
    RepublicOfTheCongo: 'cg',
    Colombia: 'co',
    Comoros: 'km',
    CapeVerde: 'cv',
    CostaRica: 'cr',
    Cuba: 'cu',
    Cyprus: 'cy',
    CzechRepublic: 'cz',
    Germany: 'de',
    Djibouti: 'dj',
    Dominica: 'dm',
    Denmark: 'dk',
    DominicanRepublic: 'do',
    Algeria: 'dz',
    Ecuador: 'ec',
    Egypt: 'eg',
    Eritrea: 'er',
    Spain: 'es',
    Estonia: 'ee',
    Ethiopia: 'et',
    Finland: 'fi',
    Fiji: 'fj',
    France: 'fr',
    MicronesiaFederatedStatesOf: 'fm',
    Gabon: 'ga',
    UnitedKingdom: 'gb',
    Georgia: 'ge',
    Ghana: 'gh',
    Guinea: 'gn',
    Gambia: 'gm',
    GuineaBissau: 'gw',
    EquatorialGuinea: 'gq',
    Greece: 'gr',
    Grenada: 'gd',
    Guatemala: 'gt',
    Guyana: 'gy',
    Honduras: 'hn',
    Croatia: 'hr',
    Haiti: 'ht',
    Hungary: 'hu',
    Indonesia: 'id',
    India: 'in',
    Ireland: 'ie',
    IranIslamicRepublicOf: 'ir',
    Iraq: 'iq',
    Iceland: 'is',
    Israel: 'il',
    Italy: 'it',
    Jamaica: 'jm',
    Jordan: 'jo',
    Japan: 'jp',
    Kazakhstan: 'kz',
    Kenya: 'ke',
    Kyrgyzstan: 'kg',
    Cambodia: 'kh',
    Kiribati: 'ki',
    SaintKittsAndNevis: 'kn',
    SouthKorea: 'kr',
    Kuwait: 'kw',
    LaoPeopleSDemocraticRepublic: 'la',
    Lebanon: 'lb',
    Liberia: 'lr',
    Libya: 'ly',
    SaintLucia: 'lc',
    Liechtenstein: 'li',
    SriLanka: 'lk',
    Lesotho: 'ls',
    Lithuania: 'lt',
    Luxembourg: 'lu',
    Latvia: 'lv',
    Morocco: 'ma',
    Monaco: 'mc',
    Moldova: 'md',
    Madagascar: 'mg',
    Maldives: 'mv',
    Mexico: 'mx',
    MarshallIslands: 'mh',
    NorthMacedonia: 'mk',
    Mali: 'ml',
    Malta: 'mt',
    Myanmar: 'mm',
    Montenegro: 'me',
    Mongolia: 'mn',
    Mozambique: 'mz',
    Mauritania: 'mr',
    Mauritius: 'mu',
    Malawi: 'mw',
    Malaysia: 'my',
    Namibia: 'na',
    Niger: 'ne',
    Nigeria: 'ng',
    Nicaragua: 'ni',
    Netherlands: 'nl',
    Norway: 'no',
    Nepal: 'np',
    Nauru: 'nr',
    NewZealand: 'nz',
    Oman: 'om',
    Pakistan: 'pk',
    Panama: 'pa',
    Peru: 'pe',
    Philippines: 'ph',
    Palau: 'pw',
    PapuaNewGuinea: 'pg',
    Poland: 'pl',
    NorthKorea: 'kp',
    Portugal: 'pt',
    Paraguay: 'py',
    Qatar: 'qa',
    Romania: 'ro',
    Russia: 'ru',
    Rwanda: 'rw',
    SaudiArabia: 'sa',
    Sudan: 'sd',
    Senegal: 'sn',
    Singapore: 'sg',
    SolomonIslands: 'sb',
    SierraLeone: 'sl',
    ElSalvador: 'sv',
    SanMarino: 'sm',
    Somalia: 'so',
    Serbia: 'rs',
    SouthSudan: 'ss',
    SaoTomeAndPrincipe: 'st',
    Suriname: 'sr',
    Slovakia: 'sk',
    Slovenia: 'si',
    Sweden: 'se',
    Eswatini: 'sz',
    Seychelles: 'sc',
    Syria: 'sy',
    Chad: 'td',
    Togo: 'tg',
    Thailand: 'th',
    Tajikistan: 'tj',
    Turkmenistan: 'tm',
    TimorLeste: 'tl',
    Tonga: 'to',
    TrinidadAndTobago: 'tt',
    Tunisia: 'tn',
    Turkey: 'tr',
    Tuvalu: 'tv',
    Tanzania: 'tz',
    Uganda: 'ug',
    Ukraine: 'ua',
    Uruguay: 'uy',
    UnitedStates: 'us',
    Uzbekistan: 'uz',
    VaticanCity: 'va',
    SaintVincentAndTheGrenadines: 'vc',
    Venezuela: 've',
    Vietnam: 'vn',
    Vanuatu: 'vu',
    Samoa: 'ws',
    Yemen: 'ye',
    SouthAfrica: 'za',
    Zambia: 'zm',
    Zimbabwe: 'zw',
  }>
  export const RelationshipType: Readonly<{
    OneToOne: 'oneToOne',
    ManyToOne: 'manyToOne',
    ManyToMany: 'manyToMany',
    OneToMany: 'oneToMany',
  }>
  export const RelationMutate: Readonly<{
    Cascade: 'cascade',
    Restrict: 'restrict',
    SetNull: 'setNull',
  }>
  export const IndexType: Readonly<{
    Key: 'key',
    Fulltext: 'fulltext',
    Unique: 'unique',
  }>
  export const Runtime: Readonly<{
    Node145: 'node-14.5',
    Node160: 'node-16.0',
    Node180: 'node-18.0',
    Node190: 'node-19.0',
    Node200: 'node-20.0',
    Node210: 'node-21.0',
    Php80: 'php-8.0',
    Php81: 'php-8.1',
    Php82: 'php-8.2',
    Php83: 'php-8.3',
    Ruby30: 'ruby-3.0',
    Ruby31: 'ruby-3.1',
    Ruby32: 'ruby-3.2',
    Ruby33: 'ruby-3.3',
    Python38: 'python-3.8',
    Python39: 'python-3.9',
    Python310: 'python-3.10',
    Python311: 'python-3.11',
    Python312: 'python-3.12',
    Deno140: 'deno-1.40',
    Dart215: 'dart-2.15',
    Dart216: 'dart-2.16',
    Dart217: 'dart-2.17',
    Dart218: 'dart-2.18',
    Dart30: 'dart-3.0',
    Dart31: 'dart-3.1',
    Dart33: 'dart-3.3',
    Dotnet31: 'dotnet-3.1',
    Dotnet60: 'dotnet-6.0',
    Dotnet70: 'dotnet-7.0',
    Java80: 'java-8.0',
    Java110: 'java-11.0',
    Java170: 'java-17.0',
    Java180: 'java-18.0',
    Java210: 'java-21.0',
    Swift55: 'swift-5.5',
    Swift58: 'swift-5.8',
    Swift59: 'swift-5.9',
    Kotlin16: 'kotlin-1.6',
    Kotlin18: 'kotlin-1.8',
    Kotlin19: 'kotlin-1.9',
    Cpp17: 'cpp-17',
    Cpp20: 'cpp-20',
    Bun10: 'bun-1.0',
  }>
  export const ExecutionMethod: Readonly<{
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
    OPTIONS: 'OPTIONS',
  }>
  export const Name: Readonly<{
    V1Database: 'v1-database',
    V1Deletes: 'v1-deletes',
    V1Audits: 'v1-audits',
    V1Mails: 'v1-mails',
    V1Functions: 'v1-functions',
    V1Usage: 'v1-usage',
    V1UsageDump: 'v1-usage-dump',
    Webhooksv1: 'webhooksv1',
    V1Certificates: 'v1-certificates',
    V1Builds: 'v1-builds',
    V1Messaging: 'v1-messaging',
    V1Migrations: 'v1-migrations',
    Hamsterv1: 'hamsterv1',
  }>
  export const SmtpEncryption: Readonly<{
    None: 'none',
    Ssl: 'ssl',
    Tls: 'tls',
  }>
  export const Compression: Readonly<{
    None: 'none',
    Gzip: 'gzip',
    Zstd: 'zstd',
  }>
  export const ImageGravity: Readonly<{
    Center: 'center',
    TopLeft: 'top-left',
    Top: 'top',
    TopRight: 'top-right',
    Left: 'left',
    Right: 'right',
    BottomLeft: 'bottom-left',
    Bottom: 'bottom',
    BottomRight: 'bottom-right',
  }>
  export const ImageFormat: Readonly<{
    Jpg: 'jpg',
    Jpeg: 'jpeg',
    Gif: 'gif',
    Png: 'png',
    Webp: 'webp',
  }>
  export const PasswordHash: Readonly<{
    Sha1: 'sha1',
    Sha224: 'sha224',
    Sha256: 'sha256',
    Sha384: 'sha384',
    Sha512224: 'sha512/224',
    Sha512256: 'sha512/256',
    Sha512: 'sha512',
    Sha3224: 'sha3-224',
    Sha3256: 'sha3-256',
    Sha3384: 'sha3-384',
    Sha3512: 'sha3-512',
  }>
  export const MessagingProviderType: Readonly<{
    Email: 'email',
    Sms: 'sms',
    Push: 'push',
  }>
}