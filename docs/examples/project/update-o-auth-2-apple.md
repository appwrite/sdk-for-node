```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const project = new sdk.Project(client);

const result = await project.updateOAuth2Apple({
    serviceId: '<SERVICE_ID>', // optional
    keyId: '<KEY_ID>', // optional
    teamId: '<TEAM_ID>', // optional
    p8File: '<P8_FILE>', // optional
    enabled: false // optional
});
```
