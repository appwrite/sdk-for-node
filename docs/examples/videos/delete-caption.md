```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const videos = new sdk.Videos(client);

const result = await videos.deleteCaption({
    videoId: '<VIDEO_ID>',
    captionId: '<CAPTION_ID>',
});
```
