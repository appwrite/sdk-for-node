```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const analytics = new sdk.Analytics(client);

const result = await analytics.updateProperty({
    propertyId: '<PROPERTY_ID>',
    name: '<NAME>', // optional
    domain: '<DOMAIN>', // optional
    enabled: false, // optional
    allowedOrigins: [], // optional
    identifyUsers: false, // optional
    type: sdk.AnalyticsPropertyType.Web, // optional
});
```
