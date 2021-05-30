declare module "node-appwrite" {
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
    get(): Promise<object>;
    delete(): Promise<Response>;
    updateEmail(email: string, password: string): Promise<Response>;
    getLogs(): Promise<Response>;
    updateName(name: string): Promise<Response>;
    updatePassword(password: string, oldPassword: string): Promise<Response>;
    getPrefs(): Promise<Response>;
    updatePrefs(prefs: object): Promise<Response>;
    createRecovery(email: string, url: string): Promise<Response>;
    updateRecovery(
      userId: string,
      secret: string,
      password: string,
      passwordAgain: string
    ): Promise<Response>;
    getSessions(): Promise<Response>;
    deleteSessions(): Promise<Response>;
    deleteSession(sessionId: string): Promise<Response>;
    createVerification(url: string): Promise<Response>;
    updateVerification(userId: string, secret: string): Promise<Response>;
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
    ): Promise<Response>;
    createCollection(
      name: string,
      read: string[],
      write: string[],
      rules: string[]
    ): Promise<Response>;
    getCollection(collectionId: string): Promise<Response>;
    updateCollection(
      collectionId: string,
      name: string,
      read?: string[],
      write?: string[],
      rules?: string[]
    ): Promise<Response>;
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
    ): Promise<Response>;
    createDocument(
      collectionId: string,
      data: object,
      read?: string[],
      write?: string[],
      parentDocument?: string,
      parentProperty?: string,
      parentPropertyType?: string
    ): Promise<Response>;
    getDocument(collectionId: string, documentId: string): Promise<Response>;
    updateDocument(
      collectionId: string,
      documentId: string,
      data: object,
      read?: string[],
      write?: string[]
    ): Promise<Response>;
    deleteDocument(collectionId: string, documentId: string): Promise<Response>;
  }
  export class Functions extends Service {
    list(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<Response>;
    create(
      name: string,
      execute: string,
      env: string,
      vars?: object,
      events?: string[],
      schedule?: string,
      timeout?: number
    ): Promise<Response>;
    get(functionId: string): Promise<Response>;
    update(
      functionId: string,
      name: string,
      execute: string[],
      vars?: object,
      events?: string[],
      schedule?: string,
      timeout?: number
    ): Promise<Response>;
    delete(functionId: string): Promise<Response>;
    listExecutions(
      functionId: string,
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<Response>;
    createExecution(functionId: string, data?: string): Promise<Response>;
    getExecution(functionId: string, executionId: string): Promise<Response>;
    updateTag(functionId: string, tag: string): Promise<Response>;
    listTags(
      functionId: string,
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<Response>;
    createTag(
      functionId: string,
      command: string,
      code: File
    ): Promise<Response>;
    getTag(functionId: string, tagId: string): Promise<Response>;
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
    get(): Promise<Response>;
    getContinents(): Promise<Response>;
    getCountries(): Promise<Response>;
    getCountriesEU(): Promise<Response>;
    getCountriesPhones(): Promise<Response>;
    getCurrencies(): Promise<Response>;
    getLanguages(): Promise<Response>;
  }
  export class Storage extends Service {
    listFiles(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<Response>;
    createFile(
      file: File,
      read?: string[],
      write?: string[]
    ): Promise<Response>;
    getFile(fileId: string): Promise<Response>;
    updateFile(
      fileId: string,
      read: string[],
      write: string[]
    ): Promise<Response>;
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
    ): Promise<Response>;
    create(name: string, roles?: string[]): Promise<Response>;
    get(teamId: string): Promise<Response>;
    update(teamId: string, name: string): Promise<Response>;
    delete(teamId: string): Promise<Response>;
    getMemberships(
      teamId: string,
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<Response>;
    createMembership(
      teamId: string,
      email: string,
      roles: string[],
      url: string,
      name?: string
    ): Promise<Response>;
    updateMembershipRoles(
      teamId: string,
      membershipId: string,
      roles: string[]
    ): Promise<Response>;
    deleteMembership(teamId: string, membershipId: string): Promise<Response>;
    updateMembershipStatus(
      teamId: string,
      membershipId: string,
      userId: string,
      secret: string
    ): Promise<Response>;
  }
  export class Users extends Service {
    list(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<Response>;
    create(email: string, password: string, name?: string): Promise<Response>;
    get(userId: string): Promise<Response>;
    delete(userId: string): Promise<Response>;
    getLogs(userId: string): Promise<Response>;
    getPrefs(userId: string): Promise<Response>;
    updatePrefs(userId: string, prefs: object): Promise<Response>;
    getSessions(userId: string): Promise<Response>;
    deleteSessions(userId: string): Promise<Response>;
    deleteSession(userId: string, sessionId: string): Promise<Response>;
    updateStatus(userId: string, status: number): Promise<Response>;
  }
}
