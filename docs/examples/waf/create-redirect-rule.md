```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const waf = new sdk.Waf(client);

const result = await waf.createRedirectRule({
    ruleId: '<RULE_ID>',
    resourceType: 'api',
    name: '<NAME>',
    location: '<LOCATION>',
    statusCode: 300,
    resourceId: '<RESOURCE_ID>', // optional
    description: '<DESCRIPTION>', // optional
    priority: -100000, // optional
    enabled: false, // optional
    conditions: [], // optional
});
```
