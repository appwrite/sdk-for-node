```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const postgresql = new sdk.Postgresql(client);

const result = await postgresql.createRestoration({
    databaseId: '<DATABASE_ID>',
    type: 'backup', // optional
    backupId: '<BACKUP_ID>', // optional
    targetDatabaseId: '<TARGET_DATABASE_ID>', // optional
    targetTime: '2020-10-15T06:38:00.000+00:00', // optional
});
```
