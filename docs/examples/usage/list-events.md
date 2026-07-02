```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const usage = new sdk.Usage(client);

const result = await usage.listEvents({
    metrics: [],
    queries: [], // optional
    interval: '1m', // optional
    dimensions: [], // optional
    startAt: '2020-10-15T06:38:00.000+00:00', // optional
    endAt: '2020-10-15T06:38:00.000+00:00', // optional
    orderBy: 'time', // optional
    orderDir: 'asc', // optional
    limit: 1, // optional
    offset: 0 // optional
});
```
