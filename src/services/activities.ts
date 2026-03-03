import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Activities {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all events for selected filters.
     *
     * @param {string} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as userId, teamId, etc.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEventList>}
     */
    listEvents(params?: { queries?: string }): Promise<Models.ActivityEventList>;
    /**
     * List all events for selected filters.
     *
     * @param {string} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as userId, teamId, etc.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEventList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listEvents(queries?: string): Promise<Models.ActivityEventList>;
    listEvents(
        paramsOrFirst?: { queries?: string } | string    
    ): Promise<Models.ActivityEventList> {
        let params: { queries?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string };
        } else {
            params = {
                queries: paramsOrFirst as string            
            };
        }
        
        const queries = params.queries;


        const apiPath = '/activities/events';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get event by ID.
     * 
     *
     * @param {string} params.eventId - Event ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEvent>}
     */
    getEvent(params: { eventId: string }): Promise<Models.ActivityEvent>;
    /**
     * Get event by ID.
     * 
     *
     * @param {string} eventId - Event ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getEvent(eventId: string): Promise<Models.ActivityEvent>;
    getEvent(
        paramsOrFirst: { eventId: string } | string    
    ): Promise<Models.ActivityEvent> {
        let params: { eventId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { eventId: string };
        } else {
            params = {
                eventId: paramsOrFirst as string            
            };
        }
        
        const eventId = params.eventId;

        if (typeof eventId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "eventId"');
        }

        const apiPath = '/activities/events/{eventId}'.replace('{eventId}', eventId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }
}
