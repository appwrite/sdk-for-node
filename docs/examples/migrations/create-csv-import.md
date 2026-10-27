```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const migrations = new sdk.Migrations(client);

const result = await migrations.createCSVImport({
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    internalFile: false, // optional
    onDuplicate: sdk.OnDuplicate.Fail, // optional
});
```
