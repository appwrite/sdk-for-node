```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const alerts = new sdk.Alerts(client);

const result = await alerts.update({
    alertId: '<ALERT_ID>',
    acknowledged: false,
});
```
