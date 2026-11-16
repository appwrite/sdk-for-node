```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const project = new sdk.Project(client);

const result = await project.updateLDAP({
    enabled: false, // optional
    hosts: ['ldap.example.com'], // optional
    port: 636, // optional
    encryption: sdk.ProjectLDAPEncryption.None, // optional
    verification: false, // optional
    certificate: '<CERTIFICATE>', // optional
    timeout: 10, // optional
    baseDn: 'ou=people,dc=example,dc=com', // optional
    bindDn: 'cn=appwrite,ou=services,dc=example,dc=com', // optional
    bindPassword: 'password', // optional
    userFilter: '(uid={username})', // optional
    requiredGroupDn: 'cn=staff,ou=groups,dc=example,dc=com', // optional
    idAttribute: 'entryUUID', // optional
    emailAttribute: 'mail', // optional
    nameAttribute: 'cn', // optional
    phoneAttribute: 'mobile', // optional
});
```
