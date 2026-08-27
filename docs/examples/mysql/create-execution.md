```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const mysql = new sdk.Mysql(client);

const result = await mysql.createExecution({
    databaseId: '<DATABASE_ID>',
    sql: '<SQL>',
    bindings: {}, // optional
    timeoutSeconds: 1, // optional
});
```
