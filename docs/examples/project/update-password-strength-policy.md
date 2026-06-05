```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const project = new sdk.Project(client);

const result = await project.updatePasswordStrengthPolicy({
    min: 8, // optional
    uppercase: false, // optional
    lowercase: false, // optional
    number: false, // optional
    symbols: false // optional
});
```
