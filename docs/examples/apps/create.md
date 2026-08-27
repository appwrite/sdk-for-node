```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const apps = new sdk.Apps(client);

const result = await apps.create({
    appId: '<APP_ID>',
    name: '<NAME>',
    redirectUris: [],
    description: '<DESCRIPTION>', // optional
    clientUri: 'https://example.com', // optional
    logoUri: 'https://example.com', // optional
    privacyPolicyUrl: 'https://example.com', // optional
    termsUrl: 'https://example.com', // optional
    contacts: [], // optional
    tagline: '<TAGLINE>', // optional
    tags: [], // optional
    images: [], // optional
    supportUrl: 'https://example.com', // optional
    dataDeletionUrl: 'https://example.com', // optional
    postLogoutRedirectUris: [], // optional
    enabled: false, // optional
    type: 'public', // optional
    deviceFlow: false, // optional
    teamId: '<TEAM_ID>', // optional
});
```
