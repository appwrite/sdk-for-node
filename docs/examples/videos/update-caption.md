```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const videos = new sdk.Videos(client);

const result = await videos.updateCaption({
    videoId: '<VIDEO_ID>',
    captionId: '<CAPTION_ID>',
    bucketId: '<BUCKET_ID>', // optional
    fileId: '<FILE_ID>', // optional
    name: '<NAME>', // optional
    language: 'aar', // optional
    xdefault: false, // optional
});
```
