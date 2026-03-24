```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const vectorsDB = new sdk.VectorsDB(client);

const result = await vectorsDB.create({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>',
    enabled: false // optional
});
```
