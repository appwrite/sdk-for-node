declare module "node-appwrite" {
  export interface PreferencesObject extends Array<any> {}
  export interface UserObject {
    $id: string;
    name: string;
    registration: number;
    status: number;
    passwordUpdate: number;
    emailVerification: boolean;
    prefs: PreferencesObject;
  }
  export interface LogObject {
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
  export interface LogsListObject {
    logs: LogObject[];
  }
  export interface TokenObject {
    $id: string;
    userId: string;
    secret: string;
    expire: number;
  }
  export interface SessionObject {
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
  export interface ListObject {
    sum: number;
  }
  export interface SessionsListObject extends ListObject {
    sessions: SessionObject[];
  }
  export interface PermissionsObject {
    read: string[];
    write: string[];
  }
  export interface RuleObject {
    $id: string;
    $collection: string;
    type: string;
    key: string;
    label: string;
    default: string;
    array: boolean;
    required: boolean;
    list: string[];
  }
  export interface CollectionObject {
    $id: string;
    $permissions: PermissionsObject;
    name: string;
    dateCreated: number;
    dateUpdated: number;
    rules: RuleObject[];
  }
  export interface CollectionsListObject extends ListObject {
    collections: CollectionObject[];
  }
  export interface DocumentObject {
    $id: string;
    $collection: string;
    $permissions: PermissionsObject;
  }
  export interface DocumentsListObject extends ListObject {
    documents: DocumentObject[];
  }
  export interface FunctionObject {
    $id: string;
    $permissions: PermissionsObject;
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
  export interface FunctionsListObject extends ListObject {
    functions: FunctionObject[];
  }
  export interface ExecutionObject {
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
  export interface ExecutionsListObject extends ListObject {
    executions: ExecutionObject[];
  }
  export interface TagObject {
    $id: string;
    functionId: string;
    dateCreated: number;
    command: string;
    size: string;
  }
  export interface TagsListObject extends ListObject {
    tags: TagObject[];
  }
  export interface LocaleObject {
    ip: string;
    countryCode: string;
    country: string;
    continentCode: string;
    continent: string;
    eu: boolean;
    currency: string;
  }
  export interface CountryObject {
    name: string;
    code: string;
  }
  export interface CountriesListObject extends ListObject {
    countries: CountryObject[];
  }
  export interface PhoneObject {
    code: string;
    countryCode: string;
    countryName: string;
  }
  export interface PhonesListObject extends ListObject {
    phones: PhoneObject[];
  }
  export interface CurrencyObject {
    symbol: string;
    name: string;
    symbolNative: string;
    decimalDigits: number;
    rounding: number;
    code: string;
    namePlural: string;
  }
  export interface CurrenciesListObject extends ListObject {
    currencies: CurrencyObject[];
  }
  export interface LanguageObject {
    name: string;
    code: string;
    nativeName: string;
  }
  export interface LanguagesListObject extends ListObject {
    languages: LanguageObject[];
  }
  export interface FileObject {
    $id: string;
    $permissions: PermissionsObject;
    name: string;
    dateCreated: number;
    signature: string;
    mimeType: string;
    sizeOriginal: number;
  }
  export interface FilesListObject extends ListObject {
    files: FileObject[];
  }
  export interface TeamObject {
    $id: string;
    name: string;
    dateCreated: number;
    sum: number;
  }
  export interface TeamsListObject extends ListObject {
    teams: TeamObject[];
  }
  export interface MembershipObject {
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
  export interface MembershipsListObject extends ListObject {
    memberships: MembershipObject[];
  }
  export interface UsersListObject extends ListObject {
    users: UserObject[];
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
    get(): Promise<UserObject>;
    delete(): Promise<Response>;
    updateEmail(email: string, password: string): Promise<UserObject>;
    getLogs(): Promise<LogsListObject>;
    updateName(name: string): Promise<UserObject>;
    updatePassword(password: string, oldPassword: string): Promise<UserObject>;
    getPrefs(): Promise<PreferencesObject>;
    updatePrefs(prefs: object): Promise<UserObject>;
    createRecovery(email: string, url: string): Promise<TokenObject>;
    updateRecovery(
      userId: string,
      secret: string,
      password: string,
      passwordAgain: string
    ): Promise<TokenObject>;
    getSessions(): Promise<SessionsListObject>;
    deleteSessions(): Promise<Response>;
    deleteSession(sessionId: string): Promise<Response>;
    createVerification(url: string): Promise<TokenObject>;
    updateVerification(userId: string, secret: string): Promise<TokenObject>;
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
    ): Promise<CollectionsListObject>;
    createCollection(
      name: string,
      read: string[],
      write: string[],
      rules: string[]
    ): Promise<CollectionObject>;
    getCollection(collectionId: string): Promise<CollectionObject>;
    updateCollection(
      collectionId: string,
      name: string,
      read?: string[],
      write?: string[],
      rules?: string[]
    ): Promise<CollectionObject>;
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
    ): Promise<DocumentsListObject>;
    createDocument(
      collectionId: string,
      data: object,
      read?: string[],
      write?: string[],
      parentDocument?: string,
      parentProperty?: string,
      parentPropertyType?: string
    ): Promise<DocumentObject>;
    getDocument(
      collectionId: string,
      documentId: string
    ): Promise<DocumentObject>;
    updateDocument(
      collectionId: string,
      documentId: string,
      data: object,
      read?: string[],
      write?: string[]
    ): Promise<DocumentObject>;
    deleteDocument(collectionId: string, documentId: string): Promise<Response>;
  }
  export class Functions extends Service {
    list(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<FunctionsListObject>;
    create(
      name: string,
      execute: string,
      env: string,
      vars?: object,
      events?: string[],
      schedule?: string,
      timeout?: number
    ): Promise<FunctionObject>;
    get(functionId: string): Promise<FunctionObject>;
    update(
      functionId: string,
      name: string,
      execute: string[],
      vars?: object,
      events?: string[],
      schedule?: string,
      timeout?: number
    ): Promise<FunctionObject>;
    delete(functionId: string): Promise<Response>;
    listExecutions(
      functionId: string,
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<ExecutionsListObject>;
    createExecution(
      functionId: string,
      data?: string
    ): Promise<ExecutionObject>;
    getExecution(
      functionId: string,
      executionId: string
    ): Promise<ExecutionObject>;
    updateTag(functionId: string, tag: string): Promise<FunctionObject>;
    listTags(
      functionId: string,
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<TagsListObject>;
    createTag(
      functionId: string,
      command: string,
      code: File
    ): Promise<TagObject>;
    getTag(functionId: string, tagId: string): Promise<TagObject>;
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
    get(): Promise<LocaleObject>;
    getContinents(): Promise<Response>;
    getCountries(): Promise<CountriesListObject>;
    getCountriesEU(): Promise<CountriesListObject>;
    getCountriesPhones(): Promise<PhonesListObject>;
    getCurrencies(): Promise<CurrenciesListObject>;
    getLanguages(): Promise<LanguagesListObject>;
  }
  export class Storage extends Service {
    listFiles(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<FilesListObject>;
    createFile(
      file: File,
      read?: string[],
      write?: string[]
    ): Promise<FileObject>;
    getFile(fileId: string): Promise<FileObject>;
    updateFile(
      fileId: string,
      read: string[],
      write: string[]
    ): Promise<FileObject>;
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
    ): Promise<TeamsListObject>;
    create(name: string, roles?: string[]): Promise<TeamObject>;
    get(teamId: string): Promise<TeamObject>;
    update(teamId: string, name: string): Promise<TeamObject>;
    delete(teamId: string): Promise<Response>;
    getMemberships(
      teamId: string,
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<MembershipsListObject>;
    createMembership(
      teamId: string,
      email: string,
      roles: string[],
      url: string,
      name?: string
    ): Promise<MembershipObject>;
    updateMembershipRoles(
      teamId: string,
      membershipId: string,
      roles: string[]
    ): Promise<MembershipObject>;
    deleteMembership(teamId: string, membershipId: string): Promise<Response>;
    updateMembershipStatus(
      teamId: string,
      membershipId: string,
      userId: string,
      secret: string
    ): Promise<MembershipObject>;
  }
  export class Users extends Service {
    list(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<UsersListObject>;
    create(email: string, password: string, name?: string): Promise<UserObject>;
    get(userId: string): Promise<UserObject>;
    delete(userId: string): Promise<Response>;
    getLogs(userId: string): Promise<LogsListObject>;
    getPrefs(userId: string): Promise<PreferencesObject>;
    updatePrefs(userId: string, prefs: object): Promise<PreferencesObject>;
    getSessions(userId: string): Promise<SessionsListObject>;
    deleteSessions(userId: string): Promise<Response>;
    deleteSession(userId: string, sessionId: string): Promise<Response>;
    updateStatus(userId: string, status: number): Promise<UserObject>;
  }
}
