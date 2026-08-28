```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const mongo = new sdk.Mongo(client);

const result = await mongo.createBackup({
    databaseId: '<DATABASE_ID>',
    type: 'full', // optional
});
```
