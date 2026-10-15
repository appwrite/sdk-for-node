```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const waf = new sdk.Waf(client);

const result = await waf.createChallengeRule({
    ruleId: '<RULE_ID>',
    resourceType: 'api',
    name: '<NAME>',
    resourceId: '<RESOURCE_ID>', // optional
    description: '<DESCRIPTION>', // optional
    challengeType: 'compute', // optional
    priority: -100000, // optional
    enabled: false, // optional
    conditions: [], // optional
    difficulty: 1, // optional
    ttl: 900, // optional
});
```
