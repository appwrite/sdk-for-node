```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const videos = new sdk.Videos(client);

const result = await videos.create({
    videoId: '<VIDEO_ID>',
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    name: '<NAME>', // optional
    permissions: [sdk.Permission.read(sdk.Role.any())], // optional
});
```
