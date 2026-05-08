```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const project = new sdk.Project(client);

const result = await project.updateOAuth2Tradeshift({
    oauth2ClientId: '<OAUTH2_CLIENT_ID>', // optional
    oauth2ClientSecret: '<OAUTH2_CLIENT_SECRET>', // optional
    enabled: false // optional
});
```
