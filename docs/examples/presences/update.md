```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const presences = new sdk.Presences(client);

const result = await presences.update({
    presenceId: '<PRESENCE_ID>',
    userId: '<USER_ID>',
    status: '<STATUS>', // optional
    expiresAt: '2020-10-15T06:38:00.000+00:00', // optional
    metadata: {}, // optional
    permissions: [sdk.Permission.read(sdk.Role.any())], // optional
    purge: false // optional
});
```
