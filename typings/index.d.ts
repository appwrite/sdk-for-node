declare module "node-appwrite" {
  export interface Preferences extends Array<any> {}
  export interface User {
    $id: string;
    name: string;
    registration: number;
    status: number;
    passwordUpdate: number;
    emailVerification: boolean;
    prefs: Preferences;
  }
  export interface Log {
    event: string;
    ip: string;
    time: number;
    osCode: string;
    osName: string;
    osVersion: string;
    clientType: string;
    clientCode: string;
    clientName: string;
    clientVersion: string;
    clientEngine: string;
    clientEngineVersion: string;
    deviceName: string;
    deviceBrand: string;
    deviceModel: string;
    countryCode: string;
    countryName: string;
  }
  export interface LogsList {
    logs: Log[];
  }
  export interface Token {
    $id: string;
    userId: string;
    secret: string;
    expire: number;
  }
  export interface Session {
    sum: number;
    $id: string;
    userId: string;
    expire: number;
    provider: string;
    providerUid: string;
    providerToken: string;
    ip: string;
    osCode: string;
    osName: string;
    osVersion: string;
    clientType: string;
    clientCode: string;
    clientName: string;
    clientVersion: string;
    clientEngine: string;
    clientEngineVersion: string;
    deviceName: string;
    deviceBrand: string;
    deviceModel: string;
    countryCode: string;
    countryName: string;
    current: boolean;
  }
  export interface List {
    sum: number;
  }
  export interface SessionsList extends List {
    sessions: Session[];
  }
  export interface Permissions {
    read: string[];
    write: string[];
  }
  export interface Rule {
    $id: string;
    $collection: string;
    type:
      | "text"
      | "numeric"
      | "boolean"
      | "wildcard"
      | "url"
      | "email"
      | "ip"
      | "document";
    key: string;
    label: string;
    default: string;
    array: boolean;
    required: boolean;
    list?: string[];
  }
  export interface Collection {
    $id: string;
    $permissions: Permissions;
    name: string;
    dateCreated: number;
    dateUpdated: number;
    rules: Rule[];
  }
  export interface CollectionsList extends List {
    collections: Collection[];
  }
  export interface Document {
    $id: string;
    $collection: string;
    $permissions: Permissions;
  }
  export interface DocumentsList extends List {
    documents: Document[];
  }
  export interface Function {
    $id: string;
    $permissions: Permissions;
    name: string;
    dateCreated: number;
    dateUpdated: number;
    status: string;
    env: string;
    tag: string;
    vars: string;
    events: string[];
    schedule: string;
    scheduleNext: number;
    schedulePrevious: number;
    timeout: number;
  }
  export interface FunctionsList extends List {
    functions: Function[];
  }
  export interface Execution {
    $id: string;
    functionId: string;
    dateCreated: number;
    trigger: string;
    status: string;
    exitCode: number;
    stdout: string;
    stderr: string;
    time: number;
  }
  export interface ExecutionsList extends List {
    executions: Execution[];
  }
  export interface Tag {
    $id: string;
    functionId: string;
    dateCreated: number;
    command: string;
    size: string;
  }
  export interface TagsList extends List {
    tags: Tag[];
  }
  export interface Locale {
    ip: string;
    countryCode: string;
    country: string;
    continentCode: string;
    continent: string;
    eu: boolean;
    currency: string;
  }
  export interface Country {
    name: string;
    code: string;
  }
  export interface CountriesList extends List {
    countries: Country[];
  }
  export interface Phone {
    code: string;
    countryCode: string;
    countryName: string;
  }
  export interface PhonesList extends List {
    phones: Phone[];
  }
  export interface Currency {
    symbol: string;
    name: string;
    symbolNative: string;
    decimalDigits: number;
    rounding: number;
    code: string;
    namePlural: string;
  }
  export interface CurrenciesList extends List {
    currencies: Currency[];
  }
  export interface Language {
    name: string;
    code: string;
    nativeName: string;
  }
  export interface LanguagesList extends List {
    languages: Language[];
  }
  export interface File {
    $id: string;
    $permissions: Permissions;
    name: string;
    dateCreated: number;
    signature: string;
    mimeType: string;
    sizeOriginal: number;
  }
  export interface FilesList extends List {
    files: File[];
  }
  export interface Team {
    $id: string;
    name: string;
    dateCreated: number;
    sum: number;
  }
  export interface TeamsList extends List {
    teams: Team[];
  }
  export interface Membership {
    $id: string;
    userId: string;
    teamId: string;
    name: string;
    email: string;
    invited: number;
    joined: number;
    confirm: boolean;
    roles: string[];
  }
  export interface MembershipsList extends List {
    memberships: Membership[];
  }
  export interface UsersList extends List {
    users: User[];
  }

  export class Client {
    public endpoint: string;
    public headers: object;
    public selfSigned: boolean;
    constructor();
    setProject(value: string): Client;
    setKey(value: string): Client;
    setJWT(value: string): Client;
    setLocale(value: string): Client;
    setSelfSigned(status?: boolean): Client;
    setEndpoint(endpoint: string): Client;
    addHeader(key: string, value: string): Client;
    call(
      method: string,
      path?: string,
      headers?: object,
      params?: object,
      responseType?: string
    ): Promise<Response>;
    flatten(data: object, prefix?: string): object;
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
  export class Account extends Service {
    get(): Promise<User>;
    delete(): Promise<Response>;
    updateEmail(email: string, password: string): Promise<User>;
    getLogs(): Promise<LogsList>;
    updateName(name: string): Promise<User>;
    updatePassword(password: string, oldPassword: string): Promise<User>;
    getPrefs(): Promise<Preferences>;
    updatePrefs(prefs: object): Promise<User>;
    createRecovery(email: string, url: string): Promise<Token>;
    updateRecovery(
      userId: string,
      secret: string,
      password: string,
      passwordAgain: string
    ): Promise<Token>;
    getSessions(): Promise<SessionsList>;
    deleteSessions(): Promise<Response>;
    deleteSession(sessionId: string): Promise<Response>;
    createVerification(url: string): Promise<Token>;
    updateVerification(userId: string, secret: string): Promise<Token>;
  }
  export class Avatars extends Service {
    getBrowser(
      code: string,
      width?: number,
      height?: number,
      quality?: number
    ): Promise<Response>;
    getCreditCard(
      code: string,
      width?: number,
      height?: number,
      quality?: number
    ): Promise<Response>;
    getFavicon(url: string): Promise<Response>;
    getFlag(
      code: string,
      width?: number,
      height?: number,
      quality?: number
    ): Promise<Response>;
    getImage(url: string, width?: number, height?: number): Promise<Response>;
    getInitials(
      name?: string,
      width?: number,
      height?: number,
      color?: string,
      background?: string
    ): Promise<Response>;
    getQR(
      text: string,
      size?: number,
      margin?: number,
      download?: boolean
    ): Promise<Response>;
  }
  export class Database extends Service {
    listCollections(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<CollectionsList>;
    createCollection(
      name: string,
      read: string[],
      write: string[],
      rules: Rule[]
    ): Promise<Collection>;
    getCollection(collectionId: string): Promise<Collection>;
    updateCollection(
      collectionId: string,
      name: string,
      read?: string[],
      write?: string[],
      rules?: Rule[]
    ): Promise<Collection>;
    deleteCollection(collectionId: string): Promise<Response>;
    listDocuments(
      collectionId: string,
      filters?: string[],
      limit?: number,
      offset?: number,
      orderField?: string,
      orderType?: string,
      orderCast?: string,
      search?: string
    ): Promise<DocumentsList>;
    createDocument(
      collectionId: string,
      data: object,
      read?: string[],
      write?: string[],
      parentDocument?: string,
      parentProperty?: string,
      parentPropertyType?: string
    ): Promise<Document>;
    getDocument(collectionId: string, documentId: string): Promise<Document>;
    updateDocument(
      collectionId: string,
      documentId: string,
      data: object,
      read?: string[],
      write?: string[]
    ): Promise<Document>;
    deleteDocument(collectionId: string, documentId: string): Promise<Response>;
  }
  export class Functions extends Service {
    list(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<FunctionsList>;
    create(
      name: string,
      execute: string,
      env: string,
      vars?: object,
      events?: string[],
      schedule?: string,
      timeout?: number
    ): Promise<Function>;
    get(functionId: string): Promise<Function>;
    update(
      functionId: string,
      name: string,
      execute: string[],
      vars?: object,
      events?: string[],
      schedule?: string,
      timeout?: number
    ): Promise<Function>;
    delete(functionId: string): Promise<Response>;
    listExecutions(
      functionId: string,
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<ExecutionsList>;
    createExecution(functionId: string, data?: string): Promise<Execution>;
    getExecution(functionId: string, executionId: string): Promise<Execution>;
    updateTag(functionId: string, tag: string): Promise<Function>;
    listTags(
      functionId: string,
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<TagsList>;
    createTag(functionId: string, command: string, code: File): Promise<Tag>;
    getTag(functionId: string, tagId: string): Promise<Tag>;
    deleteTag(functionId: string, tagId: string): Promise<Response>;
  }
  export class Health extends Service {
    get(): Promise<Response>;
    getAntiVirus(): Promise<Response>;
    getCache(): Promise<Response>;
    getDB(): Promise<Response>;
    getQueueCertificates(): Promise<Response>;
    getQueueFunctions(): Promise<Response>;
    getQueueLogs(): Promise<Response>;
    getQueueTasks(): Promise<Response>;
    getQueueUsage(): Promise<Response>;
    getQueueWebhooks(): Promise<Response>;
    getStorageLocal(): Promise<Response>;
    getTime(): Promise<Response>;
  }
  export class Locale extends Service {
    get(): Promise<Locale>;
    getContinents(): Promise<Response>;
    getCountries(): Promise<CountriesList>;
    getCountriesEU(): Promise<CountriesList>;
    getCountriesPhones(): Promise<PhonesList>;
    getCurrencies(): Promise<CurrenciesList>;
    getLanguages(): Promise<LanguagesList>;
  }
  export class Storage extends Service {
    listFiles(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<FilesList>;
    createFile(file: File, read?: string[], write?: string[]): Promise<File>;
    getFile(fileId: string): Promise<File>;
    updateFile(fileId: string, read: string[], write: string[]): Promise<File>;
    deleteFile(fileId: string): Promise<Response>;
    getFileDownload(fileId: string): Promise<Response>;
    getFilePreview(
      fileId: string,
      width?: number,
      height?: number,
      quality?: number,
      borderWidth?: number,
      borderColor?: string,
      borderRadius?: number,
      opacity?: number,
      rotation?: number,
      background?: string,
      output?: string
    ): Promise<Response>;
    getFileView(fileId: string): Promise<Response>;
  }
  export class Teams extends Service {
    list(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<TeamsList>;
    create(name: string, roles?: string[]): Promise<Team>;
    get(teamId: string): Promise<Team>;
    update(teamId: string, name: string): Promise<Team>;
    delete(teamId: string): Promise<Response>;
    getMemberships(
      teamId: string,
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<MembershipsList>;
    createMembership(
      teamId: string,
      email: string,
      roles: string[],
      url: string,
      name?: string
    ): Promise<Membership>;
    updateMembershipRoles(
      teamId: string,
      membershipId: string,
      roles: string[]
    ): Promise<Membership>;
    deleteMembership(teamId: string, membershipId: string): Promise<Response>;
    updateMembershipStatus(
      teamId: string,
      membershipId: string,
      userId: string,
      secret: string
    ): Promise<Membership>;
  }
  export class Users extends Service {
    list(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<UsersList>;
    create(email: string, password: string, name?: string): Promise<User>;
    get(userId: string): Promise<User>;
    delete(userId: string): Promise<Response>;
    getLogs(userId: string): Promise<LogsList>;
    getPrefs(userId: string): Promise<Preferences>;
    updatePrefs(userId: string, prefs: object): Promise<Preferences>;
    getSessions(userId: string): Promise<SessionsList>;
    deleteSessions(userId: string): Promise<Response>;
    deleteSession(userId: string, sessionId: string): Promise<Response>;
    updateStatus(userId: string, status: number): Promise<User>;
  }
}
