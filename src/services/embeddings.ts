import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


import { EmbeddingModel } from '../enums/embedding-model';

export class Embeddings {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Generate vector embeddings for an array of text using the selected embedding model. Use the returned vectors to power semantic search and similarity queries against your vector collections.
     * 
     *
     * @param {string[]} params.texts - Array of text to generate embeddings.
     * @param {EmbeddingModel} params.model - The embedding model to use for generating vector embeddings.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmbeddingList>}
     */
    createTextEmbeddings(params: { texts: string[], model?: EmbeddingModel }): Promise<Models.EmbeddingList>;
    /**
     * Generate vector embeddings for an array of text using the selected embedding model. Use the returned vectors to power semantic search and similarity queries against your vector collections.
     * 
     *
     * @param {string[]} texts - Array of text to generate embeddings.
     * @param {EmbeddingModel} model - The embedding model to use for generating vector embeddings.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmbeddingList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTextEmbeddings(texts: string[], model?: EmbeddingModel): Promise<Models.EmbeddingList>;
    createTextEmbeddings(
        paramsOrFirst: { texts: string[], model?: EmbeddingModel } | string[],
        ...rest: [(EmbeddingModel)?]    
    ): Promise<Models.EmbeddingList> {
        let params: { texts: string[], model?: EmbeddingModel };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { texts: string[], model?: EmbeddingModel };
        } else {
            params = {
                texts: paramsOrFirst as string[],
                model: rest[0] as EmbeddingModel            
            };
        }
        
        const texts = params.texts;
        const model = params.model;

        if (typeof texts === 'undefined') {
            throw new AppwriteException('Missing required parameter: "texts"');
        }

        const apiPath = '/embeddings/text';
        const payload: Payload = {};
        if (typeof texts !== 'undefined') {
            payload['texts'] = texts;
        }
        if (typeof model !== 'undefined') {
            payload['model'] = model;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }
}
