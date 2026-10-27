```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const migrations = new sdk.Migrations(client);

const result = await migrations.createCSVExport({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    filename: '<FILENAME>',
    columns: [], // optional
    queries: [], // optional
    delimiter: '<DELIMITER>', // optional
    enclosure: '<ENCLOSURE>', // optional
    escape: '<ESCAPE>', // optional
    header: false, // optional
    notify: false, // optional
});
```
