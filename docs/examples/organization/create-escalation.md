```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const organization = new sdk.Organization(client);

const result = await organization.createEscalation({
    escalationId: '<ESCALATION_ID>',
    name: '<NAME>',
    steps: [
        {
            delay: 0,
            roles: ['owner'],
        },
        {
            delay: 900,
            roles: ['developer'],
            userIds: ['<USER_ID>'],
        },
    ],
    repeat: 1, // optional
});
```
