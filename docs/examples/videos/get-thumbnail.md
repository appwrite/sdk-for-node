```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const videos = new sdk.Videos(client);

const result = await videos.getThumbnail({
    videoId: '<VIDEO_ID>',
    thumbnailId: '<THUMBNAIL_ID>',
    width: 0, // optional
    height: 0, // optional
    output: sdk.ImageFormat.Jpg, // optional
});
```
