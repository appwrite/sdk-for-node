```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const monitors = new sdk.Monitors(client);

const result = await monitors.updateHttpMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>', // optional
    url: 'https://api.example.com/health', // optional
    method: sdk.MonitorMethod.GET, // optional
    headers: {
        Authorization: 'Bearer <TOKEN>',
    }, // optional
    body: '<BODY>', // optional
    rules: [
        sdk.Query.or([
            sdk.Query.notBetween('statusCode', 200, 299),
            sdk.Query.greaterThan('latency', 2000),
        ]),
    ], // optional
    interval: 60, // optional
    timeout: 10, // optional
    cooldown: 300, // optional
    enabled: true, // optional
    notify: ['owner'], // optional
    severity: sdk.MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});
```
