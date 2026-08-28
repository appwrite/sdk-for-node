```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const postgresql = new sdk.Postgresql(client);

const result = await postgresql.createBranch({
    databaseId: '<DATABASE_ID>',
    branchId: '<BRANCH_ID>', // optional
    ttl: 300, // optional
});
```
