```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const mongo = new sdk.Mongo(client);

const result = await mongo.updateBackupStorage({
    databaseId: '<DATABASE_ID>',
    provider: 's3',
    bucket: '<BUCKET>',
    accessKey: '<ACCESS_KEY>',
    secretKey: '<SECRET_KEY>',
    region: '<REGION>', // optional
    prefix: '<PREFIX>', // optional
    endpoint: '<ENDPOINT>', // optional
});
```
