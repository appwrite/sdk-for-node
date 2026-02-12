```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const organizations = new sdk.Organizations(client);

const result = await organizations.estimationDeleteOrganization({
    organizationId: '<ORGANIZATION_ID>'
});
```
