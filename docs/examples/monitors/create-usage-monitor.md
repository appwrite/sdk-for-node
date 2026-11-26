```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const monitors = new sdk.Monitors(client);

const result = await monitors.createUsageMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>',
    rules: [sdk.Query.greaterThan('network.outbound', 5000000000)],
    window: 3600, // optional
    cooldown: 1800, // optional
    enabled: true, // optional
    notify: ['owner'], // optional
    severity: sdk.MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});
```
