```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const webhooks = new sdk.Webhooks(client);

const result = await webhooks.create({
    webhookId: '<WEBHOOK_ID>',
    url: '',
    name: '<NAME>',
    events: [],
    enabled: false, // optional
    security: false, // optional
    httpUser: '<HTTP_USER>', // optional
    httpPass: '<HTTP_PASS>' // optional
});
```
