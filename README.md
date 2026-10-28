# Appwrite Node.js SDK

![License](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg?style=flat-square)
![Version](https://img.shields.io/badge/api%20version-2.6.2-blue.svg?style=flat-square)
[![X Account](https://img.shields.io/badge/follow-%40appwrite-000000?logo=x&style=flat-square)](https://x.com/appwrite)
[![Discord](https://img.shields.io/discord/564160730845151244?label=discord&style=flat-square)](https://appwrite.io/discord)

**This SDK targets Appwrite server version 2.6.x as shipped on Appwrite Cloud.** Self-hosted releases can lag behind Cloud — if you run an older self-hosted build, use a matching older SDK from [previous releases](https://github.com/appwrite/sdk-for-node/releases) when APIs differ.

> This is the Node.js SDK for integrating with Appwrite from your Node.js server-side code. If you're looking to integrate from the browser, you should check [appwrite/sdk-for-web](https://github.com/appwrite/sdk-for-web)

Appwrite is an open-source backend as a service server that abstracts and simplifies complex and repetitive development tasks behind a very simple to use REST API. Appwrite aims to help you develop your apps faster and in a more secure way. Use the Node.js SDK to integrate your app with the Appwrite server to easily start interacting with all of Appwrite backend APIs and tools. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

![Appwrite](https://github.com/appwrite/appwrite/raw/main/public/images/github.png)

## Installation

Requires Node.js 18.17 or later.

```bash
npm install node-appwrite
```

The package ships ES modules, CommonJS and TypeScript types:

```js
import { Client, Users } from 'node-appwrite';
```

```js
const { Client, Users } = require('node-appwrite');
```

Deno can use the same package through its npm support:

```ts
import { Client, Users } from 'npm:node-appwrite';
```

## Getting started

### Initialize the client

Copy your endpoint and project ID from your project's **Settings** page. Create an API key under **API Keys** in the project sidebar and grant it only the scopes your code needs.

```js
import { Client } from 'node-appwrite';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<API_KEY>');
```

API keys bypass user permissions, so keep them on the server and out of source control. To act as a signed-in user instead, pass their session with `setSession()` or a JWT with `setJWT()`.

For a self-hosted Appwrite, use `https://<HOSTNAME>/v1` as the endpoint. If it serves a self-signed certificate during development, also call `.setSelfSigned(true)`.

### Make your first request

Create a service from the client and call any of its methods. Every method takes a single object of named parameters and returns a promise. See the [API reference](https://appwrite.io/docs/references) for every service and method.

```js
import { ID, Users } from 'node-appwrite';

const users = new Users(client);

const user = await users.create({
    userId: ID.unique(),
    email: 'email@example.com',
    phone: '+123456789',
    password: 'password',
    name: "Walter O'Brien",
});

console.log(user);
```

### Upload a file

File inputs are built with `InputFile`, imported from `node-appwrite/file`:

```js
import { ID, Storage } from 'node-appwrite';
import { InputFile } from 'node-appwrite/file';

const storage = new Storage(client);

const file = await storage.createFile({
    bucketId: '<BUCKET_ID>',
    fileId: ID.unique(),
    file: InputFile.fromPath('/path/to/file.png', 'file.png'),
});
```

### Type safety with models

Methods that return rows, such as `listRows` and `getRow`, accept a type parameter for your own row shape:

```ts
import { TablesDB, type Models } from 'node-appwrite';

interface Book extends Models.Row {
    name: string;
    author: string;
    releaseYear?: string;
    genre?: string[];
    isCheckedOut: boolean;
}

const tablesDB = new TablesDB(client);

const result = await tablesDB.listRows<Book>({
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
});

for (const book of result.rows) {
    console.log(`${book.name} by ${book.author}`);
}
```

In JavaScript, the same types are available through JSDoc:

```js
/**
 * @typedef {import('node-appwrite').Models.Row & {
 *     name: string,
 *     author: string,
 *     isCheckedOut: boolean,
 * }} Book
 */

/** @type {import('node-appwrite').Models.RowList<Book>} */
const result = await tablesDB.listRows({
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
});
```

The [Appwrite CLI](https://github.com/appwrite/sdk-for-cli) can generate these interfaces from your database schema with `appwrite types`. See [type generation](https://appwrite.io/docs/products/databases/tablesdb/type-generation).

### Error handling

Failed requests throw an `AppwriteException` with `message`, `code`, `type` and `response` properties.

```js
import { AppwriteException } from 'node-appwrite';

try {
    const user = await users.get({ userId: '<USER_ID>' });
    console.log(user);
} catch (error) {
    if (error instanceof AppwriteException) {
        console.error(error.code, error.type, error.message);
    }
}
```

The [response codes](https://appwrite.io/docs/apis/response-codes) page lists every error type.

### Learn more

- [Node.js quick start](https://appwrite.io/docs/quick-starts/node)
- [Appwrite docs](https://appwrite.io/docs)
- [Discord community](https://appwrite.io/discord)
- [Node.js playground](https://github.com/appwrite/playground-for-node)

## Contribution

This library is auto-generated by the Appwrite [SDK Generator](https://github.com/appwrite/sdk-generator). To learn more about how you can help us improve this SDK, please check the [contribution guide](https://github.com/appwrite/sdk-generator/blob/main/CONTRIBUTING.md) before sending a pull-request.

## License

Please see the [BSD-3-Clause license](https://raw.githubusercontent.com/appwrite/appwrite/master/LICENSE) file for more information.