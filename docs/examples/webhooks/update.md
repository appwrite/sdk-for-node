```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const webhooks = new sdk.Webhooks(client);

const result = await webhooks.update({
    webhookId: '<WEBHOOK_ID>',
    name: '<NAME>',
    url: '',
    events: [],
    enabled: false, // optional
    security: false, // optional
    httpUser: '<HTTP_USER>', // optional
    httpPass: '<HTTP_PASS>' // optional
});
```
