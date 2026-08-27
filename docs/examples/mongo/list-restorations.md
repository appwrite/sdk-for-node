```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const mongo = new sdk.Mongo(client);

const result = await mongo.listRestorations({
    databaseId: '<DATABASE_ID>',
    status: 'pending', // optional
    type: 'backup', // optional
    limit: 1, // optional
    offset: 0, // optional
});
```
