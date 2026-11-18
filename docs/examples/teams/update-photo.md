```javascript
const sdk = require('node-appwrite');
const { InputFile } = require('node-appwrite/file');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const teams = new sdk.Teams(client);

const result = await teams.updatePhoto({
    teamId: '<TEAM_ID>',
    file: InputFile.fromPath('/path/to/file', 'filename'),
});
```
