```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const avatars = new sdk.Avatars(client);

const result = await avatars.getPhoto({
    width: 0, // optional
    height: 0, // optional
    quality: 0, // optional
    output: 'png', // optional
    rating: 'g', // optional
    userId: 'current()', // optional
    emailHash: '<EMAIL_HASH>', // optional
    name: '<NAME>', // optional
});
```
