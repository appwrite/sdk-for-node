```js
const sdk = require('node-appwrite');

// Init SDK
let client = new sdk.Client();

let users = new sdk.Users(client);

client
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

let promise = users.getSessions('[USER_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```