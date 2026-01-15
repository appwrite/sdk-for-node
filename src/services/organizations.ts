import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Organizations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Delete an organization.
     *
     * @param {string} params.organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { organizationId: string  }): Promise<{}>;
    /**
     * Delete an organization.
     *
     * @param {string} organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(organizationId: string): Promise<{}>;
    delete(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<{}> {
        let params: { organizationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string            
            };
        }
        
        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/organizations/{organizationId}'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get estimation for deleting an organization.
     *
     * @param {string} params.organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationDeleteOrganization>}
     */
    estimationDeleteOrganization(params: { organizationId: string  }): Promise<Models.EstimationDeleteOrganization>;
    /**
     * Get estimation for deleting an organization.
     *
     * @param {string} organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationDeleteOrganization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    estimationDeleteOrganization(organizationId: string): Promise<Models.EstimationDeleteOrganization>;
    estimationDeleteOrganization(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<Models.EstimationDeleteOrganization> {
        let params: { organizationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string            
            };
        }
        
        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/organizations/{organizationId}/estimations/delete-organization'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload,
        );
    }
}
