import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


import { StatusCode } from '../enums/status-code';
import { ProxyResourceType } from '../enums/proxy-resource-type';

export class Proxy {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the proxy rules. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: domain, type, trigger, deploymentResourceType, deploymentResourceId, deploymentId, deploymentVcsProviderBranch
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRuleList>}
     */
    listRules(params?: { queries?: string[], total?: boolean }): Promise<Models.ProxyRuleList>;
    /**
     * Get a list of all the proxy rules. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: domain, type, trigger, deploymentResourceType, deploymentResourceId, deploymentId, deploymentVcsProviderBranch
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRuleList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRules(queries?: string[], total?: boolean): Promise<Models.ProxyRuleList>;
    listRules(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.ProxyRuleList> {
        let params: { queries?: string[], total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean            
            };
        }
        
        const queries = params.queries;
        const total = params.total;


        const apiPath = '/proxy/rules';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new proxy rule for serving Appwrite's API on custom domain.
     * 
     * Rule ID is automatically generated as MD5 hash of a rule domain for performance purposes.
     *
     * @param {string} params.domain - Domain name.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createAPIRule(params: { domain: string }): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for serving Appwrite's API on custom domain.
     * 
     * Rule ID is automatically generated as MD5 hash of a rule domain for performance purposes.
     *
     * @param {string} domain - Domain name.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAPIRule(domain: string): Promise<Models.ProxyRule>;
    createAPIRule(
        paramsOrFirst: { domain: string } | string    
    ): Promise<Models.ProxyRule> {
        let params: { domain: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { domain: string };
        } else {
            params = {
                domain: paramsOrFirst as string            
            };
        }
        
        const domain = params.domain;

        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }

        const apiPath = '/proxy/rules/api';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new proxy rule for executing Appwrite Function on custom domain.
     * 
     * Rule ID is automatically generated as MD5 hash of a rule domain for performance purposes.
     *
     * @param {string} params.domain - Domain name.
     * @param {string} params.functionId - ID of function to be executed.
     * @param {string} params.branch - Name of VCS branch to deploy changes automatically
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createFunctionRule(params: { domain: string, functionId: string, branch?: string }): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for executing Appwrite Function on custom domain.
     * 
     * Rule ID is automatically generated as MD5 hash of a rule domain for performance purposes.
     *
     * @param {string} domain - Domain name.
     * @param {string} functionId - ID of function to be executed.
     * @param {string} branch - Name of VCS branch to deploy changes automatically
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFunctionRule(domain: string, functionId: string, branch?: string): Promise<Models.ProxyRule>;
    createFunctionRule(
        paramsOrFirst: { domain: string, functionId: string, branch?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.ProxyRule> {
        let params: { domain: string, functionId: string, branch?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { domain: string, functionId: string, branch?: string };
        } else {
            params = {
                domain: paramsOrFirst as string,
                functionId: rest[0] as string,
                branch: rest[1] as string            
            };
        }
        
        const domain = params.domain;
        const functionId = params.functionId;
        const branch = params.branch;

        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/proxy/rules/function';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof functionId !== 'undefined') {
            payload['functionId'] = functionId;
        }
        if (typeof branch !== 'undefined') {
            payload['branch'] = branch;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new proxy rule for to redirect from custom domain to another domain.
     * 
     * Rule ID is automatically generated as MD5 hash of a rule domain for performance purposes.
     *
     * @param {string} params.domain - Domain name.
     * @param {string} params.url - Target URL of redirection
     * @param {StatusCode} params.statusCode - Status code of redirection
     * @param {string} params.resourceId - ID of parent resource.
     * @param {ProxyResourceType} params.resourceType - Type of parent resource.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createRedirectRule(params: { domain: string, url: string, statusCode: StatusCode, resourceId: string, resourceType: ProxyResourceType }): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for to redirect from custom domain to another domain.
     * 
     * Rule ID is automatically generated as MD5 hash of a rule domain for performance purposes.
     *
     * @param {string} domain - Domain name.
     * @param {string} url - Target URL of redirection
     * @param {StatusCode} statusCode - Status code of redirection
     * @param {string} resourceId - ID of parent resource.
     * @param {ProxyResourceType} resourceType - Type of parent resource.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRedirectRule(domain: string, url: string, statusCode: StatusCode, resourceId: string, resourceType: ProxyResourceType): Promise<Models.ProxyRule>;
    createRedirectRule(
        paramsOrFirst: { domain: string, url: string, statusCode: StatusCode, resourceId: string, resourceType: ProxyResourceType } | string,
        ...rest: [(string)?, (StatusCode)?, (string)?, (ProxyResourceType)?]    
    ): Promise<Models.ProxyRule> {
        let params: { domain: string, url: string, statusCode: StatusCode, resourceId: string, resourceType: ProxyResourceType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { domain: string, url: string, statusCode: StatusCode, resourceId: string, resourceType: ProxyResourceType };
        } else {
            params = {
                domain: paramsOrFirst as string,
                url: rest[0] as string,
                statusCode: rest[1] as StatusCode,
                resourceId: rest[2] as string,
                resourceType: rest[3] as ProxyResourceType            
            };
        }
        
        const domain = params.domain;
        const url = params.url;
        const statusCode = params.statusCode;
        const resourceId = params.resourceId;
        const resourceType = params.resourceType;

        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }
        if (typeof statusCode === 'undefined') {
            throw new AppwriteException('Missing required parameter: "statusCode"');
        }
        if (typeof resourceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }

        const apiPath = '/proxy/rules/redirect';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        if (typeof statusCode !== 'undefined') {
            payload['statusCode'] = statusCode;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Create a new proxy rule for serving Appwrite Site on custom domain.
     * 
     * Rule ID is automatically generated as MD5 hash of a rule domain for performance purposes.
     *
     * @param {string} params.domain - Domain name.
     * @param {string} params.siteId - ID of site to be executed.
     * @param {string} params.branch - Name of VCS branch to deploy changes automatically
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createSiteRule(params: { domain: string, siteId: string, branch?: string }): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for serving Appwrite Site on custom domain.
     * 
     * Rule ID is automatically generated as MD5 hash of a rule domain for performance purposes.
     *
     * @param {string} domain - Domain name.
     * @param {string} siteId - ID of site to be executed.
     * @param {string} branch - Name of VCS branch to deploy changes automatically
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSiteRule(domain: string, siteId: string, branch?: string): Promise<Models.ProxyRule>;
    createSiteRule(
        paramsOrFirst: { domain: string, siteId: string, branch?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.ProxyRule> {
        let params: { domain: string, siteId: string, branch?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { domain: string, siteId: string, branch?: string };
        } else {
            params = {
                domain: paramsOrFirst as string,
                siteId: rest[0] as string,
                branch: rest[1] as string            
            };
        }
        
        const domain = params.domain;
        const siteId = params.siteId;
        const branch = params.branch;

        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/proxy/rules/site';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof siteId !== 'undefined') {
            payload['siteId'] = siteId;
        }
        if (typeof branch !== 'undefined') {
            payload['branch'] = branch;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Get a proxy rule by its unique ID.
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    getRule(params: { ruleId: string }): Promise<Models.ProxyRule>;
    /**
     * Get a proxy rule by its unique ID.
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRule(ruleId: string): Promise<Models.ProxyRule>;
    getRule(
        paramsOrFirst: { ruleId: string } | string    
    ): Promise<Models.ProxyRule> {
        let params: { ruleId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string            
            };
        }
        
        const ruleId = params.ruleId;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload,
        );
    }

    /**
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRule(params: { ruleId: string }): Promise<{}>;
    /**
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRule(ruleId: string): Promise<{}>;
    deleteRule(
        paramsOrFirst: { ruleId: string } | string    
    ): Promise<{}> {
        let params: { ruleId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string            
            };
        }
        
        const ruleId = params.ruleId;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
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
     * If not succeeded yet, retry verification process of a proxy rule domain. This endpoint triggers domain verification by checking DNS records. If verification is successful, a TLS certificate will be automatically provisioned for the domain asynchronously in the background.
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    updateRuleStatus(params: { ruleId: string }): Promise<Models.ProxyRule>;
    /**
     * If not succeeded yet, retry verification process of a proxy rule domain. This endpoint triggers domain verification by checking DNS records. If verification is successful, a TLS certificate will be automatically provisioned for the domain asynchronously in the background.
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRuleStatus(ruleId: string): Promise<Models.ProxyRule>;
    updateRuleStatus(
        paramsOrFirst: { ruleId: string } | string    
    ): Promise<Models.ProxyRule> {
        let params: { ruleId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string            
            };
        }
        
        const ruleId = params.ruleId;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/proxy/rules/{ruleId}/status'.replace('{ruleId}', ruleId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
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
