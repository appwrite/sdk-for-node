```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setSession('') // The user session to authenticate with
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const oauth2 = new sdk.Oauth2(client);

const result = await oauth2.listProjects({
    limit: 1, // optional
    offset: 0, // optional
    search: '<SEARCH>', // optional
});
```
