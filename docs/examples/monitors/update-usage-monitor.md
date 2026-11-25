```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const monitors = new sdk.Monitors(client);

const result = await monitors.updateUsageMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>', // optional
    rules: [
        '{"method":"greaterThan", "attribute":"network.outbound", "values":[5000000000]}',
    ], // optional
    window: 60, // optional
    cooldown: 300, // optional
    enabled: false, // optional
    notify: ['owner'], // optional
    severity: sdk.MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});
```
