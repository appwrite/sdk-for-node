```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const project = new sdk.Project(client);

const result = await project.updateOAuth2Server({
    enabled: false,
    authorizationUrl: 'https://example.com',
    scopes: [], // optional
    authorizationDetailsTypes: [], // optional
    accessTokenDuration: 60, // optional
    refreshTokenDuration: 60, // optional
    publicAccessTokenDuration: 60, // optional
    publicRefreshTokenDuration: 60, // optional
    confidentialPkce: false, // optional
    verificationUrl: 'https://example.com', // optional
    userCodeLength: 6, // optional
    userCodeFormat: 'numeric', // optional
    deviceCodeDuration: 60 // optional
});
```
