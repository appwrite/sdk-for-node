```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const analytics = new sdk.Analytics(client);

const result = await analytics.createEvent({
    propertyId: '<PROPERTY_ID>',
    name: '<NAME>',
    url: 'https://example.com',
    domain: '<DOMAIN>', // optional
    referrer: '<REFERRER>', // optional
    screenWidth: 0, // optional
    sessionHash: '<SESSION_HASH>', // optional
    scrollDepth: 0, // optional
    engagementTime: 0, // optional
    props: [], // optional
    userId: '<USER_ID>', // optional
    ip: '<IP>', // optional
    userAgent: '<USER_AGENT>', // optional
    interactive: false, // optional
});
```
