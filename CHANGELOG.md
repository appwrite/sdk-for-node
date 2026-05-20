# Change Log

## 25.1.0

* Added `sizeActual` property to file model for actual stored size after compression
* Added `Deno121`, `Deno124`, and `Deno135` runtime options to `BuildRuntime` and `Runtime` enums
* Updated advisor authentication examples to use API key instead of session
* Updated billing limits properties to be optional in project models

## 25.0.0

* Breaking: Renamed `AuthMethod` enum to `ProjectAuthMethodId`
* Breaking: Renamed `EmailTemplateType` to `ProjectEmailTemplateId` and `EmailTemplateLocale` to `ProjectEmailTemplateLocale`
* Breaking: Renamed `ServiceId` to `ProjectServiceId`, `ProtocolId` to `ProjectProtocolId`, `Secure` to `ProjectSMTPSecure`, `ProjectPolicy` to `ProjectPolicyId`
* Breaking: Replaced `Scopes` enum with `ProjectKeyScopes` for project key endpoints
* Breaking: Removed `updateDenyCanonicalEmailPolicy`; replaced with `updateDenyAliasedEmailPolicy`, `updateDenyDisposableEmailPolicy`, and `updateDenyFreeEmailPolicy`
* Breaking: Removed `AuthProvider` model; use new `ProjectOAuthProviderId` enum instead
* Added: `Project.get` method to fetch current project details
* Added: `Advisor`, `Presences`, and `Usage` services
* Added: `Insight`, `Presence`, `Report`, `UsageEvent`, and `UsageGauge` models with list variants
* Added: `ProjectAuthMethod`, `ProjectProtocol`, and `ProjectService` models
* Added: `ProjectOAuthProviderId` and `ProjectOAuth2GooglePrompt` enums
* Updated: `Project`, `Database`, and `OAuth2Google` model schemas
* Updated: `X-Appwrite-Response-Format` header to `1.9.5`

## 24.1.0

* Added: Introduced `bigint` create/update APIs for legacy Databases attributes
* Added: Introduced `bigint` create/update APIs for `TablesDB` columns
* Updated: Extended key-list query filters with `key`, `resourceType`, `resourceId`, and `secret`

## 24.0.0

* [BREAKING] Renamed Webhook model fields: `security` → `tls`, `httpUser` → `authUsername`, `httpPass` → `authPassword`, `signatureKey` → `secret`
* [BREAKING] Renamed Webhook service parameters to match: `security` → `tls`, `httpUser` → `authUsername`, `httpPass` → `authPassword`
* [BREAKING] Renamed `Webhooks.updateSignature()` to `Webhooks.updateSecret()` with new optional `secret` parameter
* Added `Client.getHeaders()` method to retrieve request headers
* Added `secret` parameter to Webhook create and update methods
* Added `x` OAuth provider to `OAuthProvider` enum
* Added `userType` field to `Log` model
* Added `purge` parameter to `updateCollection` and `updateTable` for cache invalidation
* Added Project service: platform CRUD, key CRUD, protocol/service status management
* Added new models: `Key`, `KeyList`, `Project`, `DevKey`, `MockNumber`, `AuthProvider`, `PlatformAndroid`, `PlatformApple`, `PlatformLinux`, `PlatformList`, `PlatformWeb`, `PlatformWindows`, `BillingLimits`, `Block`
* Added new enums: `PlatformType`, `ProtocolId`, `ServiceId`
* Updated `BuildRuntime`, `Runtime` enums with `dart-3.11` and `flutter-3.41`
* Updated `Scopes` enum with `keysRead`, `keysWrite`, `platformsRead`, `platformsWrite`
* Updated `X-Appwrite-Response-Format` header to `1.9.1`
* Updated TTL description for list caching in Databases and TablesDB

## 23.1.0

* Added: Added `getHeaders()` method to `Client` to expose current request headers
* Added: Added `package-lock.json` to track dependency lockfile in version control
* Updated: Improved MFA authenticator test data with realistic TOTP secret and URI values

## 23.0.0

* [BREAKING] Changed `$sequence` type from `number` to `string` for `Row` and `Document` models
* [BREAKING] Renamed `IndexType` enum: split into `DatabasesIndexType` (with new `Spatial` value) and `TablesDBIndexType`
* [BREAKING] Replaced `specification` parameter with `buildSpecification` and `runtimeSpecification` in `Functions.create()`, `Functions.update()`, `Sites.create()`, `Sites.update()`
* Added new `Project` service with full CRUD for project-level environment variables
* Added new `Webhooks` service with full CRUD for project webhooks (including `updateSignature`)
* Added `Users.updateImpersonator()` method for enabling/disabling user impersonation
* Added impersonation support: `setImpersonateUserId()`, `setImpersonateUserEmail()`, `setImpersonateUserPhone()` on `Client`
* Added `impersonator` and `impersonatorUserId` optional fields to `User` model
* Added `deploymentRetention` parameter to Functions and Sites create/update
* Added `startCommand` parameter to Sites create/update
* Added `Webhook` and `WebhookList` models
* Added `Documentsdb`, `Vectorsdb` values to `BackupServices` and `DatabaseType` enums
* Added `WebhooksRead`, `WebhooksWrite`, `ProjectRead`, `ProjectWrite` scopes
* Added custom `toString()` on response data using `JSONbig.stringify` for BigInt support
* Removed `getQueueBillingProjectAggregation`, `getQueueBillingTeamAggregation`, `getQueuePriorityBuilds`, `getQueueRegionManager`, `getQueueThreats` from `Health` service
* Updated `Log` model field descriptions to clarify impersonation behavior
* Updated `X-Appwrite-Response-Format` header to `1.9.0`

## 22.1.2

* Fix very large double values (for example 1.7976931348623157e+308) from being expanded into giant integer literals

## 22.1.1

* Removed unused BigNumber import from src/client.ts to clean up dependencies
* Updated documentation examples to include the new encrypt option for text-like attributes (encrypt: false) across multiple examples
* Updated README to specify Appwrite server compatibility with 1.8.x
* Repo cleanup: removed obsolete GitHub workflow and issue template files as part of repository cleanup (non-breaking)

## 22.0.1

* Fix doc examples with proper formatting
* Add support for the new `Backups` service

## 22.0.0

* Add array-based enum parameters (e.g., `permissions: BrowserPermission[]`).
* Breaking change: `Output` enum has been removed; use `ImageFormat` instead.
* Add `getQueueAudits` support to `Health` service.
* Add longtext/mediumtext/text/varchar attribute and column helpers to `Databases` and `TablesDB` services.

## 21.1.0

* Added ability to create columns and indexes synchronously while creating a table

## 21.0.0

* Rename `VCSDeploymentType` enum to `VCSReferenceType`
* Change `createTemplateDeployment` method signature: replace `version` parameter with `type` (TemplateReferenceType) and `reference` parameters
* Add `getScreenshot` method to `Avatars` service
* Add `Theme`, `Timezone` and `Output` enums

## 20.3.0

* Add `total` parameter to list queries allowing skipping counting rows in a table for improved performance
* Add `Operator` class for atomic modification of rows via update, bulk update, upsert, and bulk upsert operations
* Add `createResendProvider` and `updateResendProvider` methods to `Messaging` service

## 20.2.1

* Add transaction support for Databases and TablesDB

## 20.1.0

* Deprecate `createVerification` method in `Account` service
* Add `createEmailVerification` method in `Account` service

## 17.2.0

* Add `incrementDocumentAttribute` and `decrementDocumentAttribute` support to `Databases` service
* Fix autocompletion not working for `Document` model even when generic is passed

## 17.1.0

* Add `upsertDocument` method
* Add `dart-3.8` and `flutter-3.32` runtimes
* Add `gif` image format
* Update bulk operation methods to reflect warning message
* Fix file parameter handling in chunked upload method

## 17.0.0

* Add `REGION` to doc examples due to the new multi region endpoints
* Add doc examples and methods for bulk api transactions: `createDocuments`, `deleteDocuments` etc.
* Add doc examples, class and methods for new `Sites` service
* Add doc examples, class and methods for new `Tokens` service
* Add enums for `BuildRuntime`, `Adapter`, `Framework`, `DeploymentDownloadType` and `VCSDeploymentType`
* Updates enum for `runtimes` with Pythonml312, Dart219, Flutter327 and Flutter329
* Add `token` param to `getFilePreview` and `getFileView` for File tokens usage
* Add `queries` and `search` params to `listMemberships` method
* Removes `search` param from `listExecutions` method

## 16.0.0

* Fix: remove content-type from GET requests
* Update (breaking): min and max params are now optional in `updateFloatAttribute` and `updateIntegerAttribute` methods (changes their positioning in method definition)

## 15.0.1

* Remove titles from all function descriptions
* Fix typing for collection "attribute" key
* Remove unnecessary awaits and asyncs
* Ensure `AppwriteException` response is always string

## 15.0.0

* Fix: pong response & chunked upload

## 14.2.0

* Add new push message parameters

## 14.1.0

* Support updating attribute name and size

## 14.0.0

* Support for Appwrite 1.6
* Add `key` attribute to `Runtime` response model.
* Add `buildSize` attribute to `Deployments` response model
* Add `scheduledAt` attribute to `Executions` response model
* Add `scopes` attribute to `Functions` response model
* Add `specifications` attribute to `Functions` response model
* Add new response model for `Specifications`
* Add new response model for `Builds`
* Add `createJWT()` : Enables creating a JWT using the `userId`
* Add `listSpecifications()`: Enables listing available runtime specifications
* Add `deleteExecution()` : Enables deleting executions
* Add `updateDeploymentBuild()`: Enables cancelling a deployment
* Add `scheduledAt` parameter to `createExecution()`: Enables creating a delayed execution
* Breaking changes
    * Remove `otp` parameter from `deleteMFAAuthenticator`.
    * Add `scopes` parameter for create/update function.
    * Rename `templateBranch` to `templateVersion`  in `createFunction()`.
    * Rename `downloadDeployment()` to `getDeploymentDownload()`

> You can find the new syntax for breaking changes in the [Appwrite API references](https://appwrite.io/docs/references). Select version `1.6.x`.
