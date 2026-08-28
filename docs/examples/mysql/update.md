```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const mysql = new sdk.Mysql(client);

const result = await mysql.update({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>', // optional
    status: 'ready', // optional
    specification: '<SPECIFICATION>', // optional
    replicas: 0, // optional
    syncMode: 'async', // optional
    networkIdleTimeoutSeconds: 60, // optional
    networkIPAllowlist: [], // optional
    idleTimeoutMinutes: 5, // optional
    pitr: false, // optional
    pitrRetentionDays: 1, // optional
    storageAutoscaling: false, // optional
    storageAutoscalingThresholdPercent: 50, // optional
    storageAutoscalingMaxGb: 0, // optional
    metricsTraceSampleRate: null, // optional
    metricsSlowQueryLogThresholdMs: 0, // optional
    sqlApiEnabled: false, // optional
    sqlApiAllowedStatements: [], // optional
    sqlApiMaxRows: 1, // optional
    sqlApiMaxBytes: 1024, // optional
    sqlApiTimeoutSeconds: 1, // optional
});
```
