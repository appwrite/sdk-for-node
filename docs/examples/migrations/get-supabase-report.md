```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const migrations = new sdk.Migrations(client);

const result = await migrations.getSupabaseReport({
    resources: [sdk.SupabaseMigrationResource.User],
    endpoint: 'https://example.com',
    apiKey: '<API_KEY>',
    databaseHost: '<DATABASE_HOST>',
    username: '<USERNAME>',
    password: 'password',
    port: 5432, // optional
});
```
