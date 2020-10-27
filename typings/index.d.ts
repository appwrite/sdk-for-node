declare module "node-appwrite" {
  export class Client {
    constructor();
    setProject(value: string): Client;
    setKey(value: string): Client;
    setLocale(value: string): Client;
    setSelfSigned(status?: boolean): Client;
    setEndpoint(endpoint: string): Client;
    addHeader(key: string, value: string): Client;
    call(
      method: string,
      path?: string,
      headers?: object,
      params?: object
    ): Promise<Response>;
    flatten(data: object, prefix?: string): object;
    __proto__: any;
    [key: string]: any;
  }

  export class Avatars {
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
    getQR(
      text: string,
      size?: number,
      margin?: number,
      download?: number
    ): Promise<Response>;
    __proto__: any;
    [key: string]: any;
  }

  export class Database {
    listCollections(
      search: string,
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
      read: string[],
      write: string[],
      rules?: string[]
    ): Promise<Response>;
    deleteCollection(collectionId: string): Promise<Response>;
    listDocuments(
      collectionId: string,
      filters?: string[],
      offset?: number,
      limit?: number,
      orderField?: string,
      orderType?: string,
      orderCast?: string,
      search?: string,
      first?: number,
      last?: number
    ): Promise<Response>;
    createDocument(
      collectionId: string,
      data: object,
      read: string[],
      write: string[],
      parentDocument?: string,
      parentProperty?: string,
      parentPropertyType?: string
    ): Promise<Response>;
    getDocument(collectionId: string, documentId: string): Promise<Response>;
    updateDocument(
      collectionId: string,
      documentId: string,
      data: object,
      read: string[],
      write: string[]
    ): Promise<Response>;
    deleteDocument(collectionId: string, documentId: string): Promise<Response>;
    getCollectionLogs(collectionId: string): Promise<Response>;
    __proto__: any;
    [key: string]: any;
  }

  export class Health {
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
    __proto__: any;
    [key: string]: any;
  }

  export class Locale {
    get(): Promise<Response>;
    getContinents(): Promise<Response>;
    getCountries(): Promise<Response>;
    getCountriesEU(): Promise<Response>;
    getCountriesPhones(): Promise<Response>;
    getCurrencies(): Promise<Response>;
    __proto__: any;
    [key: string]: any;
  }

  export class Storage {
    listFiles(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<Response>;
    createFile(
      file: unknown,
      read: string[],
      write: string[]
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
      background?: string,
      output?: string
    ): Promise<Response>;
    getFileView(fileId: string, as?: string): Promise<Response>;
    __proto__: any;
    [key: string]: any;
  }

  export class Teams {
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
    getMemberships(teamId: string): Promise<Response>;
    createMembership(
      teamId: string,
      email: string,
      roles: string[],
      url: string,
      name?: string
    ): Promise<Response>;
    deleteMembership(teamId: string, inviteId: string): Promise<Response>;
    __proto__: any;
    [key: string]: any;
  }

  export class Users {
    list(
      search?: string,
      limit?: number,
      offset?: number,
      orderType?: string
    ): Promise<Response>;
    create(email: string, password: string, name?: string): Promise<Response>;
    get(userId: string): Promise<Response>;
    getLogs(userId: string): Promise<Response>;
    getPrefs(userId: string): Promise<Response>;
    updatePrefs(userId: string, prefs: object): Promise<Response>;
    getSessions(userId: string): Promise<Response>;
    deleteSessions(userId: string): Promise<Response>;
    deleteSession(userId: string, sessionId: string): Promise<Response>;
    updateStatus(userId: string, status: string): Promise<Response>;
    __proto__: any;
    [key: string]: any;
  }
}
