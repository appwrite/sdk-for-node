```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const backups = new sdk.Backups(client);

const result = await backups.createPolicy({
    policyId: '<POLICY_ID>',
    services: [sdk.BackupServices.Databases],
    retention: 1,
    schedule: '',
    name: '<NAME>', // optional
    resourceId: '<RESOURCE_ID>', // optional
    enabled: false // optional
});
```
