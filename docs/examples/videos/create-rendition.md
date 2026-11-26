```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const videos = new sdk.Videos(client);

const result = await videos.createRendition({
    videoId: '<VIDEO_ID>',
    profileId: '<PROFILE_ID>',
    output: sdk.VideoOutput.Hls,
});
```
