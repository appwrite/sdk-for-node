```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const embeddings = new sdk.Embeddings(client);

const result = await embeddings.createTextEmbeddings({
    texts: [
        'Appwrite helps developers build applications.',
        'Find documents with semantic search.',
    ],
    model: sdk.EmbeddingModel.NomicEmbedText, // optional
});
```
