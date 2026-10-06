```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tablesDB = new sdk.TablesDB(client);

const result = await tablesDB.upsertRows({
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
    rows: [
        {
            $id: 'example1',
            username: 'walter.obrien',
            email: 'walter.obrien@example.com',
            fullName: "Walter O'Brien",
            age: 30,
            isAdmin: false,
        },
    ],
    transactionId: '<TRANSACTION_ID>', // optional
});
```
