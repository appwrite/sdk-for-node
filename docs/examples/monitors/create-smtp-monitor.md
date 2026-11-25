```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const monitors = new sdk.Monitors(client);

const result = await monitors.createSmtpMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>',
    host: 'example.com',
    port: 587,
    tlsMode: sdk.MonitorTlsMode.None, // optional
    rules: ['{"method":"greaterThan", "attribute":"latency", "values":[2000]}'], // optional
    interval: 1, // optional
    timeout: 1, // optional
    cooldown: 300, // optional
    enabled: false, // optional
    notify: [], // optional
    severity: sdk.MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});
```
