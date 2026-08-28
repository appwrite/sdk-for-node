```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const mysql = new sdk.Mysql(client);

const result = await mysql.updatePooler({
    databaseId: '<DATABASE_ID>',
    mode: 'transaction', // optional
    maxConnections: 10, // optional
    defaultPoolSize: 1, // optional
    readWriteSplitting: false, // optional
    poolerCpuRequest: '<POOLER_CPU_REQUEST>', // optional
    poolerCpuLimit: '<POOLER_CPU_LIMIT>', // optional
    poolerMemoryRequest: '<POOLER_MEMORY_REQUEST>', // optional
    poolerMemoryLimit: '<POOLER_MEMORY_LIMIT>', // optional
});
```
