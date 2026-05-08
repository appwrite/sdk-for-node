```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const proxy = new sdk.Proxy(client);

const result = await proxy.createRedirectRule({
    domain: '',
    url: 'https://example.com',
    statusCode: sdk.StatusCode.MovedPermanently301,
    resourceId: '<RESOURCE_ID>',
    resourceType: sdk.ProxyResourceType.Site
});
```
