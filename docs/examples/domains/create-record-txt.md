```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const domains = new sdk.Domains(client);

const result = await domains.createRecordTXT({
    domainId: '<DOMAIN_ID>',
    name: '',
    ttl: 1,
    value: '<VALUE>', // optional
    comment: '<COMMENT>', // optional
});
```
