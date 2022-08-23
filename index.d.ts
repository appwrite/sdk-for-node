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
      export type TeamList = {
          /**
          * Total number of teams documents that matched your query.
          */
          total: number;
          /**
          * List of teams.
          */
          teams: Team[];
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
          * Collection creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * Collection update date in Unix timestamp.
          */
          $updatedAt: number;
          /**
          * Collection read permissions.
          */
          $read: string[];
          /**
          * Collection write permissions.
          */
          $write: string[];
          /**
          * Database ID.
          */
          databaseId: string;
          /**
          * Collection name.
          */
          name: string;
          /**
          * Collection enabled.
          */
          enabled: boolean;
          /**
          * Collection permission model. Possible values: `document` or `collection`
          */
          permission: string;
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
          * Index attributes.
          */
          attributes: string[];
          /**
          * Index orders.
          */
          orders: string[];
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
          $collection: string;
          /**
          *  Collection data
          */
          [key: string]: any; // Document data for variable key ,
          /**
          * Document creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * Document update date in Unix timestamp.
          */
          $updatedAt: number;
          /**
          * Document read permissions.
          */
          $read: string[];
          /**
          * Document write permissions.
          */
          $write: string[];
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
          * Log creation time in Unix timestamp.
          */
          time: number;
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
          * User creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * User update date in Unix timestamp.
          */
          $updatedAt: number;
          /**
          * User name.
          */
          name: string;
          /**
          * User registration date in Unix timestamp.
          */
          registration: number;
          /**
          * User status. Pass `true` for enabled and `false` for disabled.
          */
          status: boolean;
          /**
          * Unix timestamp of the most recent password update
          */
          passwordUpdate: number;
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
          * User preferences as a key-value object
          */
          prefs: Preferences;
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
          * Session creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * User ID.
          */
          userId: string;
          /**
          * Session expiration date in Unix timestamp.
          */
          expire: number;
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
          * Date, the Unix timestamp of when the access token expires.
          */
          providerAccessTokenExpiry: number;
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
          * Token creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * User ID.
          */
          userId: string;
          /**
          * Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
          */
          secret: string;
          /**
          * Token expiration date in Unix timestamp.
          */
          expire: number;
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
          * True if country is part of the Europian Union.
          */
          eu: boolean;
          /**
          * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format
          */
          currency: string;
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
          * File creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * File update date in Unix timestamp.
          */
          $updatedAt: number;
          /**
          * File read permissions.
          */
          $read: string[];
          /**
          * File write permissions.
          */
          $write: string[];
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
          * Bucket creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * Bucket update date in Unix timestamp.
          */
          $updatedAt: number;
          /**
          * File read permissions.
          */
          $read: string[];
          /**
          * File write permissions.
          */
          $write: string[];
          /**
          * Bucket permission model. Possible values: `bucket` or `file`
          */
          permission: string;
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
      export type Team = {
          /**
          * Team ID.
          */
          $id: string;
          /**
          * Team creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * Team update date in Unix timestamp.
          */
          $updatedAt: number;
          /**
          * Team name.
          */
          name: string;
          /**
          * Total number of team members.
          */
          total: number;
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
          * Membership creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * Membership update date in Unix timestamp.
          */
          $updatedAt: number;
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
          * Date, the user has been invited to join the team in Unix timestamp.
          */
          invited: number;
          /**
          * Date, the user has accepted the invitation to join the team in Unix timestamp.
          */
          joined: number;
          /**
          * User confirmation status, true if the user has joined the team or false otherwise.
          */
          confirm: boolean;
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
          * Function creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * Function update date in Unix timestamp.
          */
          $updatedAt: number;
          /**
          * Execution permissions.
          */
          execute: string[];
          /**
          * Function name.
          */
          name: string;
          /**
          * Function status. Possible values: `disabled`, `enabled`
          */
          status: string;
          /**
          * Function execution runtime.
          */
          runtime: string;
          /**
          * Function&#039;s active deployment ID.
          */
          deployment: string;
          /**
          * Function environment variables.
          */
          vars: object;
          /**
          * Function trigger events.
          */
          events: string[];
          /**
          * Function execution schedult in CRON format.
          */
          schedule: string;
          /**
          * Function next scheduled execution date in Unix timestamp.
          */
          scheduleNext: number;
          /**
          * Function next scheduled execution date in Unix timestamp.
          */
          schedulePrevious: number;
          /**
          * Function execution timeout in seconds.
          */
          timeout: number;
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
          * Deployment creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * Deployment update date in Unix timestamp.
          */
          $updatedAt: number;
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
          * The deployment status.
          */
          status: string;
          /**
          * The build stdout.
          */
          buildStdout: string;
          /**
          * The build stderr.
          */
          buildStderr: string;
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
          * Execution creation date in Unix timestamp.
          */
          $createdAt: number;
          /**
          * Execution update date in Unix timestamp.
          */
          $updatedAt: number;
          /**
          * Execution read permissions.
          */
          $read: string[];
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
          * The script status code.
          */
          statusCode: number;
          /**
          * The script response output string. Logs the last 4,000 characters of the execution response output.
          */
          response: string;
          /**
          * The script stderr output string. Logs the last 4,000 characters of the execution stderr output
          */
          stderr: string;
          /**
          * The script execution time in seconds.
          */
          time: number;
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
          * Duration in milliseconds how long the health check took.
          */
          ping: number;
          /**
          * Service status. Possible values can are: `pass`, `fail`
          */
          status: string;
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

    static fromBlob(blob: Blob, filename: string): InputFile;

    static fromStream(stream: any, filename: string, size: number): InputFile;

    static fromPlainText(content: string, filename: string): InputFile;
  }

  type QueryTypesSingle = string | number | boolean;
  type QueryTypesList = string[] | number[] | boolean[];
  type QueryTypes = QueryTypesSingle | QueryTypesList;

  export class Query {
    static equal(attribute: string, value: QueryTypes): string;

    static notEqual(attribute: string, value: QueryTypes): string;

    static lesser(attribute: string, value: QueryTypes): string;

    static lesserEqual(attribute: string, value: QueryTypes): string;

    static greater(attribute: string, value: QueryTypes): string;

    static greaterEqual(attribute: string, value: QueryTypes): string;

    static search(attribute: string, value: string): string;

    private static addQuery(attribute: string, oper: string, value: QueryTypes): string;

    private static parseValues(value: QueryTypes): string;
  }

  export class Account extends Service {
    constructor(client: Client);
    
    /**
     * Get Account
     *
     * Get currently logged in user data as JSON object.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>>;
    /**
     * Update Account Email
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
     * Get Account Logs
     *
     * Get currently logged in user list of latest security activity logs. Each
     * log returns user IP address, location and date and time of log.
     *
     * @param {number} limit
     * @param {number} offset
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getLogs(limit?: number, offset?: number): Promise<Models.LogList>;
    /**
     * Update Account Name
     *
     * Update currently logged in user account name.
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateName<Preferences extends Models.Preferences>(name: string): Promise<Models.User<Preferences>>;
    /**
     * Update Account Password
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
     * Update Account Phone
     *
     * Update the currently logged in user's phone number. After updating the
     * phone number, the phone verification status will be reset. A confirmation
     * SMS is not sent automatically, however you can use the [POST
     * /account/verification/phone](/docs/client/account#accountCreatePhoneVerification)
     * endpoint to send a confirmation SMS.
     *
     * @param {string} number
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePhone<Preferences extends Models.Preferences>(number: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * Get Account Preferences
     *
     * Get currently logged in user preferences as a key-value object.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getPrefs<Preferences extends Models.Preferences>(): Promise<Preferences>;
    /**
     * Update Account Preferences
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
     * Create Password Recovery
     *
     * Sends the user an email with a temporary secret key for password reset.
     * When the user clicks the confirmation link he is redirected back to your
     * app password reset URL with the secret key and email address values
     * attached to the URL query string. Use the query string params to submit a
     * request to the [PUT
     * /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to
     * complete the process. The verification link sent to the user's email
     * address is valid for 1 hour.
     *
     * @param {string} email
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createRecovery(email: string, url: string): Promise<Models.Token>;
    /**
     * Create Password Recovery (confirmation)
     *
     * Use this endpoint to complete the user account password reset. Both the
     * **userId** and **secret** arguments will be passed as query parameters to
     * the redirect URL you have provided when sending your request to the [POST
     * /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
     * 
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} userId
     * @param {string} secret
     * @param {string} password
     * @param {string} passwordAgain
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateRecovery(userId: string, secret: string, password: string, passwordAgain: string): Promise<Models.Token>;
    /**
     * Get Account Sessions
     *
     * Get currently logged in user list of active sessions across different
     * devices.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getSessions(): Promise<Models.SessionList>;
    /**
     * Delete All Account Sessions
     *
     * Delete all sessions from the user account and remove any sessions cookies
     * from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSessions(): Promise<Response>;
    /**
     * Get Session By ID
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
     * Update Session (Refresh Tokens)
     *
     * Access tokens have limited lifespan and expire to mitigate security risks.
     * If session was created using an OAuth provider, this route can be used to
     * "refresh" the access token.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateSession(sessionId: string): Promise<Models.Session>;
    /**
     * Delete Account Session
     *
     * Use this endpoint to log out the currently logged in user from all their
     * account sessions across all of their different devices. When using the
     * Session ID argument, only the unique session ID provided is deleted.
     * 
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSession(sessionId: string): Promise<Response>;
    /**
     * Update Account Status
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
     * Create Email Verification
     *
     * Use this endpoint to send a verification message to your user email address
     * to confirm they are the valid owners of that address. Both the **userId**
     * and **secret** arguments will be passed as query parameters to the URL you
     * have provided to be attached to the verification email. The provided URL
     * should redirect the user back to your app and allow you to complete the
     * verification process by verifying both the **userId** and **secret**
     * parameters. Learn more about how to [complete the verification
     * process](/docs/client/account#accountUpdateEmailVerification). The
     * verification link sent to the user's email address is valid for 7 days.
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
     * Create Email Verification (confirmation)
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
     * Create Phone Verification
     *
     * Use this endpoint to send a verification SMS to the currently logged in
     * user. This endpoint is meant for use after updating a user's phone number
     * using the [accountUpdatePhone](/docs/client/account#accountUpdatePhone)
     * endpoint. Learn more about how to [complete the verification
     * process](/docs/client/account#accountUpdatePhoneVerification). The
     * verification code sent to the user's phone number is valid for 15 minutes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createPhoneVerification(): Promise<Models.Token>;
    /**
     * Create Phone Verification (confirmation)
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
     * Get Browser Icon
     *
     * You can use this endpoint to show different browser icons to your users.
     * The code argument receives the browser code as it appears in your user [GET
     * /account/sessions](/docs/client/account#accountGetSessions) endpoint. Use
     * width, height and quality arguments to change the output settings.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     *
     * @param {string} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getBrowser(code: string, width?: number, height?: number, quality?: number): Promise<Buffer>;
    /**
     * Get Credit Card Icon
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
     * @param {string} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCreditCard(code: string, width?: number, height?: number, quality?: number): Promise<Buffer>;
    /**
     * Get Favicon
     *
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote
     * website URL.
     * 
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFavicon(url: string): Promise<Buffer>;
    /**
     * Get Country Flag
     *
     * You can use this endpoint to show different country flags icons to your
     * users. The code argument receives the 2 letter country code. Use width,
     * height and quality arguments to change the output settings.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     * 
     *
     * @param {string} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFlag(code: string, width?: number, height?: number, quality?: number): Promise<Buffer>;
    /**
     * Get Image from URL
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
    getImage(url: string, width?: number, height?: number): Promise<Buffer>;
    /**
     * Get User Initials
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
     * @param {string} color
     * @param {string} background
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getInitials(name?: string, width?: number, height?: number, color?: string, background?: string): Promise<Buffer>;
    /**
     * Get QR Code
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
    getQR(text: string, size?: number, margin?: number, download?: boolean): Promise<Buffer>;
  }
  export class Databases extends Service {
    constructor(client: Client, databaseId: string);
    
    /**
     * Get databaseId.
     *
     * @returns {string}
     */
    getDatabaseId(): string;

    /**
     * Set databaseId.
     *
     * @param {string} databaseId
     * @returns {void}
     */
    setDatabaseId(databaseId: string): void;

    /**
     * List Databases
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    list(search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.DatabaseList>;
    /**
     * Create Database
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    create(name: string): Promise<Models.Database>;
    /**
     * Get Database
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get(): Promise<Models.Collection>;
    /**
     * Update Database
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    update(name: string): Promise<Models.Collection>;
    /**
     * Delete Database
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(): Promise<Response>;
    /**
     * List Collections
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listCollections(search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.CollectionList>;
    /**
     * Create Collection
     *
     * @param {string} collectionId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createCollection(collectionId: string, name: string, permission: string, read: string[], write: string[]): Promise<Models.Collection>;
    /**
     * Get Collection
     *
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCollection(collectionId: string): Promise<Models.Collection>;
    /**
     * Update Collection
     *
     * @param {string} collectionId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateCollection(collectionId: string, name: string, permission: string, read?: string[], write?: string[], enabled?: boolean): Promise<Models.Collection>;
    /**
     * Delete Collection
     *
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteCollection(collectionId: string): Promise<Response>;
    /**
     * List Attributes
     *
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listAttributes(collectionId: string): Promise<Models.AttributeList>;
    /**
     * Create Boolean Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createBooleanAttribute(collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean>;
    /**
     * Create Email Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createEmailAttribute(collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail>;
    /**
     * Create Enum Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createEnumAttribute(collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum>;
    /**
     * Create Float Attribute
     *
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
    createFloatAttribute(collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat>;
    /**
     * Create Integer Attribute
     *
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
    createIntegerAttribute(collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger>;
    /**
     * Create IP Address Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createIpAttribute(collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp>;
    /**
     * Create String Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {number} size
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createStringAttribute(collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeString>;
    /**
     * Create URL Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} default
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createUrlAttribute(collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl>;
    /**
     * Get Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getAttribute(collectionId: string, key: string): Promise<Response>;
    /**
     * Delete Attribute
     *
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteAttribute(collectionId: string, key: string): Promise<Response>;
    /**
     * List Documents
     *
     * @param {string} collectionId
     * @param {string[]} queries
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string[]} orderAttributes
     * @param {string[]} orderTypes
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listDocuments<Document extends Models.Document>(collectionId: string, queries?: string[], limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderAttributes?: string[], orderTypes?: string[]): Promise<Models.DocumentList<Document>>;
    /**
     * Create Document
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createDocument<Document extends Models.Document>(collectionId: string, documentId: string, data: object, read?: string[], write?: string[]): Promise<Document>;
    /**
     * Get Document
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getDocument<Document extends Models.Document>(collectionId: string, documentId: string): Promise<Document>;
    /**
     * Update Document
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateDocument<Document extends Models.Document>(collectionId: string, documentId: string, data?: object, read?: string[], write?: string[]): Promise<Document>;
    /**
     * Delete Document
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteDocument(collectionId: string, documentId: string): Promise<Response>;
    /**
     * List Indexes
     *
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listIndexes(collectionId: string): Promise<Models.IndexList>;
    /**
     * Create Index
     *
     * @param {string} collectionId
     * @param {string} key
     * @param {string} type
     * @param {string[]} attributes
     * @param {string[]} orders
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createIndex(collectionId: string, key: string, type: string, attributes: string[], orders?: string[]): Promise<Models.Index>;
    /**
     * Get Index
     *
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getIndex(collectionId: string, key: string): Promise<Models.Index>;
    /**
     * Delete Index
     *
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteIndex(collectionId: string, key: string): Promise<Response>;
  }
  export class Functions extends Service {
    constructor(client: Client);
    
    /**
     * List Functions
     *
     * Get a list of all the project's functions. You can use the query params to
     * filter your results.
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    list(search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.FunctionList>;
    /**
     * Create Function
     *
     * Create a new function. You can pass a list of
     * [permissions](/docs/permissions) to allow different project users or team
     * with access to execute the function using the client API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string[]} execute
     * @param {string} runtime
     * @param {object} vars
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    create(functionId: string, name: string, execute: string[], runtime: string, vars?: object, events?: string[], schedule?: string, timeout?: number): Promise<Models.Function>;
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
     * Get Function
     *
     * Get a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get(functionId: string): Promise<Models.Function>;
    /**
     * Update Function
     *
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string[]} execute
     * @param {object} vars
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    update(functionId: string, name: string, execute: string[], vars?: object, events?: string[], schedule?: string, timeout?: number): Promise<Models.Function>;
    /**
     * Delete Function
     *
     * Delete a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(functionId: string): Promise<Response>;
    /**
     * List Deployments
     *
     * Get a list of all the project's code deployments. You can use the query
     * params to filter your results.
     *
     * @param {string} functionId
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listDeployments(functionId: string, search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.DeploymentList>;
    /**
     * Create Deployment
     *
     * Create a new function code deployment. Use this endpoint to upload a new
     * version of your code function. To execute your newly uploaded code, you'll
     * need to update the function's deployment to use your new deployment UID.
     * 
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to
     * include any dependencies your code has within the compressed file. You can
     * learn more about code packaging in the [Appwrite Cloud Functions
     * tutorial](/docs/functions).
     * 
     * Use the "command" param to set the entry point used to execute your code.
     *
     * @param {string} functionId
     * @param {string} entrypoint
     * @param {InputFile} code
     * @param {boolean} activate
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createDeployment(functionId: string, entrypoint: string, code: InputFile, activate: boolean): Promise<Models.Deployment>;
    /**
     * Get Deployment
     *
     * Get a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getDeployment(functionId: string, deploymentId: string): Promise<Models.DeploymentList>;
    /**
     * Update Function Deployment
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
     * Delete Deployment
     *
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteDeployment(functionId: string, deploymentId: string): Promise<Response>;
    /**
     * Retry Build
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    retryBuild(functionId: string, deploymentId: string, buildId: string): Promise<Response>;
    /**
     * List Executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results. On admin mode, this endpoint will
     * return a list of all of the project's executions. [Learn more about
     * different API modes](/docs/admin).
     *
     * @param {string} functionId
     * @param {number} limit
     * @param {number} offset
     * @param {string} search
     * @param {string} cursor
     * @param {string} cursorDirection
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listExecutions(functionId: string, limit?: number, offset?: number, search?: string, cursor?: string, cursorDirection?: string): Promise<Models.ExecutionList>;
    /**
     * Create Execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} data
     * @param {boolean} async
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createExecution(functionId: string, data?: string, async?: boolean): Promise<Models.Execution>;
    /**
     * Get Execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getExecution(functionId: string, executionId: string): Promise<Models.Execution>;
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
     * Get Antivirus
     *
     * Check the Appwrite Antivirus server is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getAntivirus(): Promise<Models.HealthAntivirus>;
    /**
     * Get Cache
     *
     * Check the Appwrite in-memory cache server is up and connection is
     * successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCache(): Promise<Models.HealthStatus>;
    /**
     * Get DB
     *
     * Check the Appwrite database server is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getDB(): Promise<Models.HealthStatus>;
    /**
     * Get Certificates Queue
     *
     * Get the number of certificates that are waiting to be issued against
     * [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue
     * server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueCertificates(): Promise<Models.HealthQueue>;
    /**
     * Get Functions Queue
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueFunctions(): Promise<Models.HealthQueue>;
    /**
     * Get Logs Queue
     *
     * Get the number of logs that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueLogs(): Promise<Models.HealthQueue>;
    /**
     * Get Webhooks Queue
     *
     * Get the number of webhooks that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getQueueWebhooks(): Promise<Models.HealthQueue>;
    /**
     * Get Local Storage
     *
     * Check the Appwrite local storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getStorageLocal(): Promise<Models.HealthStatus>;
    /**
     * Get Time
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
     * Get User Locale
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
     * List Continents
     *
     * List of all continents. You can use the locale header to get the data in a
     * supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getContinents(): Promise<Models.ContinentList>;
    /**
     * List Countries
     *
     * List of all countries. You can use the locale header to get the data in a
     * supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCountries(): Promise<Models.CountryList>;
    /**
     * List EU Countries
     *
     * List of all countries that are currently members of the EU. You can use the
     * locale header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCountriesEU(): Promise<Models.CountryList>;
    /**
     * List Countries Phone Codes
     *
     * List of all countries phone codes. You can use the locale header to get the
     * data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCountriesPhones(): Promise<Models.PhoneList>;
    /**
     * List Currencies
     *
     * List of all currencies, including currency symbol, name, plural, and
     * decimal digits for all major and minor currencies. You can use the locale
     * header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCurrencies(): Promise<Models.CurrencyList>;
    /**
     * List Languages
     *
     * List of all languages classified by ISO 639-1 including 2-letter code, name
     * in English, and name in the respective language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getLanguages(): Promise<Models.LanguageList>;
  }
  export class Storage extends Service {
    constructor(client: Client);
    
    /**
     * List buckets
     *
     * Get a list of all the storage buckets. You can use the query params to
     * filter your results.
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listBuckets(search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.BucketList>;
    /**
     * Create bucket
     *
     * Create a new storage bucket.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createBucket(bucketId: string, name: string, permission: string, read?: string[], write?: string[], enabled?: boolean, maximumFileSize?: number, allowedFileExtensions?: string[], encryption?: boolean, antivirus?: boolean): Promise<Models.Bucket>;
    /**
     * Get Bucket
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
     * Update Bucket
     *
     * Update a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateBucket(bucketId: string, name: string, permission: string, read?: string[], write?: string[], enabled?: boolean, maximumFileSize?: number, allowedFileExtensions?: string[], encryption?: boolean, antivirus?: boolean): Promise<Models.Bucket>;
    /**
     * Delete Bucket
     *
     * Delete a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteBucket(bucketId: string): Promise<Response>;
    /**
     * List Files
     *
     * Get a list of all the user files. You can use the query params to filter
     * your results. On admin mode, this endpoint will return a list of all of the
     * project's files. [Learn more about different API modes](/docs/admin).
     *
     * @param {string} bucketId
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listFiles(bucketId: string, search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.FileList>;
    /**
     * Create File
     *
     * Create a new file. Before using this route, you should create a new bucket
     * resource using either a [server
     * integration](/docs/server/database#storageCreateBucket) API or directly
     * from your Appwrite console.
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
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createFile(bucketId: string, fileId: string, file: InputFile, read?: string[], write?: string[]): Promise<Models.File>;
    /**
     * Get File
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
     * Update File
     *
     * Update a file by its unique ID. Only users with write permissions have
     * access to update this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateFile(bucketId: string, fileId: string, read?: string[], write?: string[]): Promise<Models.File>;
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
    deleteFile(bucketId: string, fileId: string): Promise<Response>;
    /**
     * Get File for Download
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
    getFileDownload(bucketId: string, fileId: string): Promise<Buffer>;
    /**
     * Get File Preview
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
     * @param {string} gravity
     * @param {number} quality
     * @param {number} borderWidth
     * @param {string} borderColor
     * @param {number} borderRadius
     * @param {number} opacity
     * @param {number} rotation
     * @param {string} background
     * @param {string} output
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFilePreview(bucketId: string, fileId: string, width?: number, height?: number, gravity?: string, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: string): Promise<Buffer>;
    /**
     * Get File for View
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
    getFileView(bucketId: string, fileId: string): Promise<Buffer>;
  }
  export class Teams extends Service {
    constructor(client: Client);
    
    /**
     * List Teams
     *
     * Get a list of all the teams in which the current user is a member. You can
     * use the parameters to filter your results.
     * 
     * In admin mode, this endpoint returns a list of all the teams in the current
     * project. [Learn more about different API modes](/docs/admin).
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    list(search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.TeamList>;
    /**
     * Create Team
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
    create(teamId: string, name: string, roles?: string[]): Promise<Models.Team>;
    /**
     * Get Team
     *
     * Get a team by its ID. All team members have read access for this resource.
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get(teamId: string): Promise<Models.Team>;
    /**
     * Update Team
     *
     * Update a team using its ID. Only members with the owner role can update the
     * team.
     *
     * @param {string} teamId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    update(teamId: string, name: string): Promise<Models.Team>;
    /**
     * Delete Team
     *
     * Delete a team using its ID. Only team members with the owner role can
     * delete the team.
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(teamId: string): Promise<Response>;
    /**
     * Get Team Memberships
     *
     * Use this endpoint to list a team's members using the team's ID. All team
     * members have read access to this endpoint.
     *
     * @param {string} teamId
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getMemberships(teamId: string, search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.MembershipList>;
    /**
     * Create Team Membership
     *
     * Invite a new member to join your team. If initiated from the client SDK, an
     * email with a link to join the team will be sent to the member's email
     * address and an account will be created for them should they not be signed
     * up already. If initiated from server-side SDKs, the new member will
     * automatically be added to the team.
     * 
     * Use the 'url' parameter to redirect the user from the invitation email back
     * to your app. When the user is redirected, use the [Update Team Membership
     * Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow
     * the user to accept the invitation to the team. 
     * 
     * Please note that to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URL's are the once from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} teamId
     * @param {string} email
     * @param {string[]} roles
     * @param {string} url
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMembership(teamId: string, email: string, roles: string[], url: string, name?: string): Promise<Models.Membership>;
    /**
     * Get Team Membership
     *
     * Get a team member by the membership unique id. All team members have read
     * access for this resource.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getMembership(teamId: string, membershipId: string): Promise<Models.MembershipList>;
    /**
     * Update Membership Roles
     *
     * Modify the roles of a team member. Only team members with the owner role
     * have access to this endpoint. Learn more about [roles and
     * permissions](/docs/permissions).
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string[]} roles
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMembershipRoles(teamId: string, membershipId: string, roles: string[]): Promise<Models.Membership>;
    /**
     * Delete Team Membership
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
    deleteMembership(teamId: string, membershipId: string): Promise<Response>;
    /**
     * Update Team Membership Status
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
  }
  export class Users extends Service {
    constructor(client: Client);
    
    /**
     * List Users
     *
     * Get a list of all the project's users. You can use the query params to
     * filter your results.
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    list<Preferences extends Models.Preferences>(search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.UserList<Preferences>>;
    /**
     * Create User
     *
     * Create a new user.
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
     * Get User
     *
     * Get a user by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get<Preferences extends Models.Preferences>(userId: string): Promise<Models.User<Preferences>>;
    /**
     * Delete User
     *
     * Delete a user by its unique ID, thereby releasing it's ID. Since ID is
     * released and can be reused, all user-related resources like documents or
     * storage files should be deleted before user deletion. If you want to keep
     * ID reserved, use the [updateStatus](/docs/server/users#usersUpdateStatus)
     * endpoint instead.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(userId: string): Promise<Response>;
    /**
     * Update Email
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
     * Get User Logs
     *
     * Get the user activity logs list by its unique ID.
     *
     * @param {string} userId
     * @param {number} limit
     * @param {number} offset
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getLogs(userId: string, limit?: number, offset?: number): Promise<Models.LogList>;
    /**
     * Get User Memberships
     *
     * Get the user membership list by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getMemberships(userId: string): Promise<Models.MembershipList>;
    /**
     * Update Name
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
     * Update Password
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
     * Update Phone
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
     * Get User Preferences
     *
     * Get the user preferences by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getPrefs<Preferences extends Models.Preferences>(userId: string): Promise<Preferences>;
    /**
     * Update User Preferences
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
     * Get User Sessions
     *
     * Get the user sessions list by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getSessions(userId: string): Promise<Models.SessionList>;
    /**
     * Delete User Sessions
     *
     * Delete all user's sessions by using the user's unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSessions(userId: string): Promise<Response>;
    /**
     * Delete User Session
     *
     * Delete a user sessions by its unique ID.
     *
     * @param {string} userId
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSession(userId: string, sessionId: string): Promise<Response>;
    /**
     * Update User Status
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
     * Update Email Verification
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
     * Update Phone Verification
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
}
