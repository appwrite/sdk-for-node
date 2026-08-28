```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setSession('') // The user session to authenticate with
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const oauth2 = new sdk.Oauth2(client);

const result = await oauth2.createDeviceAuthorization({
    clientId: '<CLIENT_ID>', // optional
    scope: '<SCOPE>', // optional
    authorizationDetails: '<AUTHORIZATION_DETAILS>', // optional
    resource: '', // optional
    audience: '<AUDIENCE>', // optional
});
```
