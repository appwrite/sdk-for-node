```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const organization = new sdk.Organization(client);

const result = await organization.updateProjectKey({
    projectId: '<PROJECT_ID>',
    keyId: '<KEY_ID>',
    name: '<NAME>',
    scopes: [sdk.ProjectKeyScopes.ProjectRead],
    expire: '2020-10-15T06:38:00.000+00:00', // optional
});
```
