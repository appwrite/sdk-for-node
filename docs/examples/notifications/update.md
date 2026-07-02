```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const notifications = new sdk.Notifications(client);

const result = await notifications.update({
    notificationId: '<NOTIFICATION_ID>',
    read: false
});
```
