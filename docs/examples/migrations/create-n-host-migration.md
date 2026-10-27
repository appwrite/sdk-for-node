```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const migrations = new sdk.Migrations(client);

const result = await migrations.createNHostMigration({
    resources: [sdk.NHostMigrationResource.User],
    subdomain: '<SUBDOMAIN>',
    region: '<REGION>',
    adminSecret: '<ADMIN_SECRET>',
    database: '<DATABASE>',
    username: '<USERNAME>',
    password: 'password',
    port: 5432, // optional
});
```
