```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const documentsDB = new sdk.DocumentsDB(client);

const result = await documentsDB.createDocuments({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documents: [
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
