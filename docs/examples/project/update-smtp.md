```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const project = new sdk.Project(client);

const result = await project.updateSMTP({
    host: '', // optional
    port: null, // optional
    username: '<USERNAME>', // optional
    password: '<PASSWORD>', // optional
    senderEmail: 'email@example.com', // optional
    senderName: '<SENDER_NAME>', // optional
    replyToEmail: 'email@example.com', // optional
    replyToName: '<REPLY_TO_NAME>', // optional
    secure: sdk.Secure.Tls, // optional
    enabled: false // optional
});
```
