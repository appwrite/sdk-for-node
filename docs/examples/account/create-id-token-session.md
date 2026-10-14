```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const account = new sdk.Account(client);

const result = await account.createIdTokenSession({
    provider: sdk.IdTokenProvider.Apple,
    idToken: '<ID_TOKEN>',
    nonce: '<NONCE>', // optional
    accessToken: '<ACCESS_TOKEN>', // optional
    accessTokenExpiry: 0, // optional
    name: '<NAME>', // optional
});
```
