import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { MessagePriority } from '../enums/message-priority';
import { SmtpEncryption } from '../enums/smtp-encryption';

export class Messaging {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all messages from the current Appwrite project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MessageList>}
     */
    listMessages(params?: { queries?: string[], search?: string  }): Promise<Models.MessageList>;
    /**
     * Get a list of all messages from the current Appwrite project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MessageList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMessages(queries?: string[], search?: string): Promise<Models.MessageList>;
    listMessages(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.MessageList> {
        let params: { queries?: string[], search?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/messaging/messages';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new email message.
     *
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.subject - Email Subject.
     * @param {string} params.content - Email Content.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string[]} params.cc - Array of target IDs to be added as CC.
     * @param {string[]} params.bcc - Array of target IDs to be added as BCC.
     * @param {string[]} params.attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {boolean} params.draft - Is message a draft
     * @param {boolean} params.html - Is content of type HTML
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    createEmail(params: { messageId: string, subject: string, content: string, topics?: string[], users?: string[], targets?: string[], cc?: string[], bcc?: string[], attachments?: string[], draft?: boolean, html?: boolean, scheduledAt?: string  }): Promise<Models.Message>;
    /**
     * Create a new email message.
     *
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} subject - Email Subject.
     * @param {string} content - Email Content.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string[]} cc - Array of target IDs to be added as CC.
     * @param {string[]} bcc - Array of target IDs to be added as BCC.
     * @param {string[]} attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {boolean} draft - Is message a draft
     * @param {boolean} html - Is content of type HTML
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmail(messageId: string, subject: string, content: string, topics?: string[], users?: string[], targets?: string[], cc?: string[], bcc?: string[], attachments?: string[], draft?: boolean, html?: boolean, scheduledAt?: string): Promise<Models.Message>;
    createEmail(
        paramsOrFirst: { messageId: string, subject: string, content: string, topics?: string[], users?: string[], targets?: string[], cc?: string[], bcc?: string[], attachments?: string[], draft?: boolean, html?: boolean, scheduledAt?: string } | string,
        ...rest: [(string)?, (string)?, (string[])?, (string[])?, (string[])?, (string[])?, (string[])?, (string[])?, (boolean)?, (boolean)?, (string)?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, subject: string, content: string, topics?: string[], users?: string[], targets?: string[], cc?: string[], bcc?: string[], attachments?: string[], draft?: boolean, html?: boolean, scheduledAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, subject: string, content: string, topics?: string[], users?: string[], targets?: string[], cc?: string[], bcc?: string[], attachments?: string[], draft?: boolean, html?: boolean, scheduledAt?: string };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                subject: rest[0] as string,
                content: rest[1] as string,
                topics: rest[2] as string[],
                users: rest[3] as string[],
                targets: rest[4] as string[],
                cc: rest[5] as string[],
                bcc: rest[6] as string[],
                attachments: rest[7] as string[],
                draft: rest[8] as boolean,
                html: rest[9] as boolean,
                scheduledAt: rest[10] as string            
            };
        }
        
        const messageId = params.messageId;
        const subject = params.subject;
        const content = params.content;
        const topics = params.topics;
        const users = params.users;
        const targets = params.targets;
        const cc = params.cc;
        const bcc = params.bcc;
        const attachments = params.attachments;
        const draft = params.draft;
        const html = params.html;
        const scheduledAt = params.scheduledAt;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }
        if (typeof subject === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subject"');
        }
        if (typeof content === 'undefined') {
            throw new AppwriteException('Missing required parameter: "content"');
        }

        const apiPath = '/messaging/messages/email';
        const payload: Payload = {};
        if (typeof messageId !== 'undefined') {
            payload['messageId'] = messageId;
        }
        if (typeof subject !== 'undefined') {
            payload['subject'] = subject;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof cc !== 'undefined') {
            payload['cc'] = cc;
        }
        if (typeof bcc !== 'undefined') {
            payload['bcc'] = bcc;
        }
        if (typeof attachments !== 'undefined') {
            payload['attachments'] = attachments;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof html !== 'undefined') {
            payload['html'] = html;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update an email message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.subject - Email Subject.
     * @param {string} params.content - Email Content.
     * @param {boolean} params.draft - Is message a draft
     * @param {boolean} params.html - Is content of type HTML
     * @param {string[]} params.cc - Array of target IDs to be added as CC.
     * @param {string[]} params.bcc - Array of target IDs to be added as BCC.
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string[]} params.attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    updateEmail(params: { messageId: string, topics?: string[], users?: string[], targets?: string[], subject?: string, content?: string, draft?: boolean, html?: boolean, cc?: string[], bcc?: string[], scheduledAt?: string, attachments?: string[]  }): Promise<Models.Message>;
    /**
     * Update an email message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} subject - Email Subject.
     * @param {string} content - Email Content.
     * @param {boolean} draft - Is message a draft
     * @param {boolean} html - Is content of type HTML
     * @param {string[]} cc - Array of target IDs to be added as CC.
     * @param {string[]} bcc - Array of target IDs to be added as BCC.
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string[]} attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmail(messageId: string, topics?: string[], users?: string[], targets?: string[], subject?: string, content?: string, draft?: boolean, html?: boolean, cc?: string[], bcc?: string[], scheduledAt?: string, attachments?: string[]): Promise<Models.Message>;
    updateEmail(
        paramsOrFirst: { messageId: string, topics?: string[], users?: string[], targets?: string[], subject?: string, content?: string, draft?: boolean, html?: boolean, cc?: string[], bcc?: string[], scheduledAt?: string, attachments?: string[] } | string,
        ...rest: [(string[])?, (string[])?, (string[])?, (string)?, (string)?, (boolean)?, (boolean)?, (string[])?, (string[])?, (string)?, (string[])?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, topics?: string[], users?: string[], targets?: string[], subject?: string, content?: string, draft?: boolean, html?: boolean, cc?: string[], bcc?: string[], scheduledAt?: string, attachments?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, topics?: string[], users?: string[], targets?: string[], subject?: string, content?: string, draft?: boolean, html?: boolean, cc?: string[], bcc?: string[], scheduledAt?: string, attachments?: string[] };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                topics: rest[0] as string[],
                users: rest[1] as string[],
                targets: rest[2] as string[],
                subject: rest[3] as string,
                content: rest[4] as string,
                draft: rest[5] as boolean,
                html: rest[6] as boolean,
                cc: rest[7] as string[],
                bcc: rest[8] as string[],
                scheduledAt: rest[9] as string,
                attachments: rest[10] as string[]            
            };
        }
        
        const messageId = params.messageId;
        const topics = params.topics;
        const users = params.users;
        const targets = params.targets;
        const subject = params.subject;
        const content = params.content;
        const draft = params.draft;
        const html = params.html;
        const cc = params.cc;
        const bcc = params.bcc;
        const scheduledAt = params.scheduledAt;
        const attachments = params.attachments;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/email/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof subject !== 'undefined') {
            payload['subject'] = subject;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof html !== 'undefined') {
            payload['html'] = html;
        }
        if (typeof cc !== 'undefined') {
            payload['cc'] = cc;
        }
        if (typeof bcc !== 'undefined') {
            payload['bcc'] = bcc;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof attachments !== 'undefined') {
            payload['attachments'] = attachments;
        }
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

    /**
     * Create a new push notification.
     *
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.title - Title for push notification.
     * @param {string} params.body - Body for push notification.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {object} params.data - Additional key-value pair data for push notification.
     * @param {string} params.action - Action for push notification.
     * @param {string} params.image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string} params.icon - Icon for push notification. Available only for Android and Web Platform.
     * @param {string} params.sound - Sound for push notification. Available only for Android and iOS Platform.
     * @param {string} params.color - Color for push notification. Available only for Android Platform.
     * @param {string} params.tag - Tag for push notification. Available only for Android Platform.
     * @param {number} params.badge - Badge for push notification. Available only for iOS Platform.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {boolean} params.contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} params.critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {MessagePriority} params.priority - Set the notification priority. "normal" will consider device state and may not deliver notifications immediately. "high" will always attempt to immediately deliver the notification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    createPush(params: { messageId: string, title?: string, body?: string, topics?: string[], users?: string[], targets?: string[], data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority  }): Promise<Models.Message>;
    /**
     * Create a new push notification.
     *
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} title - Title for push notification.
     * @param {string} body - Body for push notification.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {object} data - Additional key-value pair data for push notification.
     * @param {string} action - Action for push notification.
     * @param {string} image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string} icon - Icon for push notification. Available only for Android and Web Platform.
     * @param {string} sound - Sound for push notification. Available only for Android and iOS Platform.
     * @param {string} color - Color for push notification. Available only for Android Platform.
     * @param {string} tag - Tag for push notification. Available only for Android Platform.
     * @param {number} badge - Badge for push notification. Available only for iOS Platform.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {boolean} contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {MessagePriority} priority - Set the notification priority. "normal" will consider device state and may not deliver notifications immediately. "high" will always attempt to immediately deliver the notification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPush(messageId: string, title?: string, body?: string, topics?: string[], users?: string[], targets?: string[], data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority): Promise<Models.Message>;
    createPush(
        paramsOrFirst: { messageId: string, title?: string, body?: string, topics?: string[], users?: string[], targets?: string[], data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority } | string,
        ...rest: [(string)?, (string)?, (string[])?, (string[])?, (string[])?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (boolean)?, (string)?, (boolean)?, (boolean)?, (MessagePriority)?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, title?: string, body?: string, topics?: string[], users?: string[], targets?: string[], data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, title?: string, body?: string, topics?: string[], users?: string[], targets?: string[], data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                title: rest[0] as string,
                body: rest[1] as string,
                topics: rest[2] as string[],
                users: rest[3] as string[],
                targets: rest[4] as string[],
                data: rest[5] as object,
                action: rest[6] as string,
                image: rest[7] as string,
                icon: rest[8] as string,
                sound: rest[9] as string,
                color: rest[10] as string,
                tag: rest[11] as string,
                badge: rest[12] as number,
                draft: rest[13] as boolean,
                scheduledAt: rest[14] as string,
                contentAvailable: rest[15] as boolean,
                critical: rest[16] as boolean,
                priority: rest[17] as MessagePriority            
            };
        }
        
        const messageId = params.messageId;
        const title = params.title;
        const body = params.body;
        const topics = params.topics;
        const users = params.users;
        const targets = params.targets;
        const data = params.data;
        const action = params.action;
        const image = params.image;
        const icon = params.icon;
        const sound = params.sound;
        const color = params.color;
        const tag = params.tag;
        const badge = params.badge;
        const draft = params.draft;
        const scheduledAt = params.scheduledAt;
        const contentAvailable = params.contentAvailable;
        const critical = params.critical;
        const priority = params.priority;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/push';
        const payload: Payload = {};
        if (typeof messageId !== 'undefined') {
            payload['messageId'] = messageId;
        }
        if (typeof title !== 'undefined') {
            payload['title'] = title;
        }
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof action !== 'undefined') {
            payload['action'] = action;
        }
        if (typeof image !== 'undefined') {
            payload['image'] = image;
        }
        if (typeof icon !== 'undefined') {
            payload['icon'] = icon;
        }
        if (typeof sound !== 'undefined') {
            payload['sound'] = sound;
        }
        if (typeof color !== 'undefined') {
            payload['color'] = color;
        }
        if (typeof tag !== 'undefined') {
            payload['tag'] = tag;
        }
        if (typeof badge !== 'undefined') {
            payload['badge'] = badge;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof contentAvailable !== 'undefined') {
            payload['contentAvailable'] = contentAvailable;
        }
        if (typeof critical !== 'undefined') {
            payload['critical'] = critical;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a push notification by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.title - Title for push notification.
     * @param {string} params.body - Body for push notification.
     * @param {object} params.data - Additional Data for push notification.
     * @param {string} params.action - Action for push notification.
     * @param {string} params.image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string} params.icon - Icon for push notification. Available only for Android and Web platforms.
     * @param {string} params.sound - Sound for push notification. Available only for Android and iOS platforms.
     * @param {string} params.color - Color for push notification. Available only for Android platforms.
     * @param {string} params.tag - Tag for push notification. Available only for Android platforms.
     * @param {number} params.badge - Badge for push notification. Available only for iOS platforms.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {boolean} params.contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} params.critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {MessagePriority} params.priority - Set the notification priority. "normal" will consider device battery state and may send notifications later. "high" will always attempt to immediately deliver the notification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    updatePush(params: { messageId: string, topics?: string[], users?: string[], targets?: string[], title?: string, body?: string, data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority  }): Promise<Models.Message>;
    /**
     * Update a push notification by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} title - Title for push notification.
     * @param {string} body - Body for push notification.
     * @param {object} data - Additional Data for push notification.
     * @param {string} action - Action for push notification.
     * @param {string} image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string} icon - Icon for push notification. Available only for Android and Web platforms.
     * @param {string} sound - Sound for push notification. Available only for Android and iOS platforms.
     * @param {string} color - Color for push notification. Available only for Android platforms.
     * @param {string} tag - Tag for push notification. Available only for Android platforms.
     * @param {number} badge - Badge for push notification. Available only for iOS platforms.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {boolean} contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {MessagePriority} priority - Set the notification priority. "normal" will consider device battery state and may send notifications later. "high" will always attempt to immediately deliver the notification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePush(messageId: string, topics?: string[], users?: string[], targets?: string[], title?: string, body?: string, data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority): Promise<Models.Message>;
    updatePush(
        paramsOrFirst: { messageId: string, topics?: string[], users?: string[], targets?: string[], title?: string, body?: string, data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority } | string,
        ...rest: [(string[])?, (string[])?, (string[])?, (string)?, (string)?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (boolean)?, (string)?, (boolean)?, (boolean)?, (MessagePriority)?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, topics?: string[], users?: string[], targets?: string[], title?: string, body?: string, data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, topics?: string[], users?: string[], targets?: string[], title?: string, body?: string, data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                topics: rest[0] as string[],
                users: rest[1] as string[],
                targets: rest[2] as string[],
                title: rest[3] as string,
                body: rest[4] as string,
                data: rest[5] as object,
                action: rest[6] as string,
                image: rest[7] as string,
                icon: rest[8] as string,
                sound: rest[9] as string,
                color: rest[10] as string,
                tag: rest[11] as string,
                badge: rest[12] as number,
                draft: rest[13] as boolean,
                scheduledAt: rest[14] as string,
                contentAvailable: rest[15] as boolean,
                critical: rest[16] as boolean,
                priority: rest[17] as MessagePriority            
            };
        }
        
        const messageId = params.messageId;
        const topics = params.topics;
        const users = params.users;
        const targets = params.targets;
        const title = params.title;
        const body = params.body;
        const data = params.data;
        const action = params.action;
        const image = params.image;
        const icon = params.icon;
        const sound = params.sound;
        const color = params.color;
        const tag = params.tag;
        const badge = params.badge;
        const draft = params.draft;
        const scheduledAt = params.scheduledAt;
        const contentAvailable = params.contentAvailable;
        const critical = params.critical;
        const priority = params.priority;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/push/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof title !== 'undefined') {
            payload['title'] = title;
        }
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof action !== 'undefined') {
            payload['action'] = action;
        }
        if (typeof image !== 'undefined') {
            payload['image'] = image;
        }
        if (typeof icon !== 'undefined') {
            payload['icon'] = icon;
        }
        if (typeof sound !== 'undefined') {
            payload['sound'] = sound;
        }
        if (typeof color !== 'undefined') {
            payload['color'] = color;
        }
        if (typeof tag !== 'undefined') {
            payload['tag'] = tag;
        }
        if (typeof badge !== 'undefined') {
            payload['badge'] = badge;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof contentAvailable !== 'undefined') {
            payload['contentAvailable'] = contentAvailable;
        }
        if (typeof critical !== 'undefined') {
            payload['critical'] = critical;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
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

    /**
     * Create a new SMS message.
     *
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.content - SMS Content.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.createSMS` instead.
     */
    createSms(params: { messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string  }): Promise<Models.Message>;
    /**
     * Create a new SMS message.
     *
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} content - SMS Content.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSms(messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    createSms(
        paramsOrFirst: { messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string } | string,
        ...rest: [(string)?, (string[])?, (string[])?, (string[])?, (boolean)?, (string)?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                content: rest[0] as string,
                topics: rest[1] as string[],
                users: rest[2] as string[],
                targets: rest[3] as string[],
                draft: rest[4] as boolean,
                scheduledAt: rest[5] as string            
            };
        }
        
        const messageId = params.messageId;
        const content = params.content;
        const topics = params.topics;
        const users = params.users;
        const targets = params.targets;
        const draft = params.draft;
        const scheduledAt = params.scheduledAt;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }
        if (typeof content === 'undefined') {
            throw new AppwriteException('Missing required parameter: "content"');
        }

        const apiPath = '/messaging/messages/sms';
        const payload: Payload = {};
        if (typeof messageId !== 'undefined') {
            payload['messageId'] = messageId;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Create a new SMS message.
     *
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.content - SMS Content.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    createSMS(params: { messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string  }): Promise<Models.Message>;
    /**
     * Create a new SMS message.
     *
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} content - SMS Content.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSMS(messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    createSMS(
        paramsOrFirst: { messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string } | string,
        ...rest: [(string)?, (string[])?, (string[])?, (string[])?, (boolean)?, (string)?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                content: rest[0] as string,
                topics: rest[1] as string[],
                users: rest[2] as string[],
                targets: rest[3] as string[],
                draft: rest[4] as boolean,
                scheduledAt: rest[5] as string            
            };
        }
        
        const messageId = params.messageId;
        const content = params.content;
        const topics = params.topics;
        const users = params.users;
        const targets = params.targets;
        const draft = params.draft;
        const scheduledAt = params.scheduledAt;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }
        if (typeof content === 'undefined') {
            throw new AppwriteException('Missing required parameter: "content"');
        }

        const apiPath = '/messaging/messages/sms';
        const payload: Payload = {};
        if (typeof messageId !== 'undefined') {
            payload['messageId'] = messageId;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.content - Email Content.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.updateSMS` instead.
     */
    updateSms(params: { messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string  }): Promise<Models.Message>;
    /**
     * Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} content - Email Content.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSms(messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    updateSms(
        paramsOrFirst: { messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string } | string,
        ...rest: [(string[])?, (string[])?, (string[])?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                topics: rest[0] as string[],
                users: rest[1] as string[],
                targets: rest[2] as string[],
                content: rest[3] as string,
                draft: rest[4] as boolean,
                scheduledAt: rest[5] as string            
            };
        }
        
        const messageId = params.messageId;
        const topics = params.topics;
        const users = params.users;
        const targets = params.targets;
        const content = params.content;
        const draft = params.draft;
        const scheduledAt = params.scheduledAt;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/sms/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
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

    /**
     * Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.content - Email Content.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    updateSMS(params: { messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string  }): Promise<Models.Message>;
    /**
     * Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} content - Email Content.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSMS(messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    updateSMS(
        paramsOrFirst: { messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string } | string,
        ...rest: [(string[])?, (string[])?, (string[])?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                topics: rest[0] as string[],
                users: rest[1] as string[],
                targets: rest[2] as string[],
                content: rest[3] as string,
                draft: rest[4] as boolean,
                scheduledAt: rest[5] as string            
            };
        }
        
        const messageId = params.messageId;
        const topics = params.topics;
        const users = params.users;
        const targets = params.targets;
        const content = params.content;
        const draft = params.draft;
        const scheduledAt = params.scheduledAt;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/sms/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
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

    /**
     * Get a message by its unique ID.
     * 
     *
     * @param {string} params.messageId - Message ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    getMessage(params: { messageId: string  }): Promise<Models.Message>;
    /**
     * Get a message by its unique ID.
     * 
     *
     * @param {string} messageId - Message ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getMessage(messageId: string): Promise<Models.Message>;
    getMessage(
        paramsOrFirst: { messageId: string } | string    
    ): Promise<Models.Message> {
        let params: { messageId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string };
        } else {
            params = {
                messageId: paramsOrFirst as string            
            };
        }
        
        const messageId = params.messageId;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/{messageId}'.replace('{messageId}', messageId);
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

    /**
     * Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.
     *
     * @param {string} params.messageId - Message ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { messageId: string  }): Promise<{}>;
    /**
     * Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.
     *
     * @param {string} messageId - Message ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(messageId: string): Promise<{}>;
    delete(
        paramsOrFirst: { messageId: string } | string    
    ): Promise<{}> {
        let params: { messageId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string };
        } else {
            params = {
                messageId: paramsOrFirst as string            
            };
        }
        
        const messageId = params.messageId;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/{messageId}'.replace('{messageId}', messageId);
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
     * Get the message activity logs listed by its unique ID.
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listMessageLogs(params: { messageId: string, queries?: string[]  }): Promise<Models.LogList>;
    /**
     * Get the message activity logs listed by its unique ID.
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMessageLogs(messageId: string, queries?: string[]): Promise<Models.LogList>;
    listMessageLogs(
        paramsOrFirst: { messageId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.LogList> {
        let params: { messageId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, queries?: string[] };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const messageId = params.messageId;
        const queries = params.queries;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/{messageId}/logs'.replace('{messageId}', messageId);
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
     * Get a list of the targets associated with a message.
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType
     * @throws {AppwriteException}
     * @returns {Promise<Models.TargetList>}
     */
    listTargets(params: { messageId: string, queries?: string[]  }): Promise<Models.TargetList>;
    /**
     * Get a list of the targets associated with a message.
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType
     * @throws {AppwriteException}
     * @returns {Promise<Models.TargetList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTargets(messageId: string, queries?: string[]): Promise<Models.TargetList>;
    listTargets(
        paramsOrFirst: { messageId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.TargetList> {
        let params: { messageId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, queries?: string[] };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const messageId = params.messageId;
        const queries = params.queries;

        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/{messageId}/targets'.replace('{messageId}', messageId);
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
     * Get a list of all providers from the current Appwrite project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderList>}
     */
    listProviders(params?: { queries?: string[], search?: string  }): Promise<Models.ProviderList>;
    /**
     * Get a list of all providers from the current Appwrite project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listProviders(queries?: string[], search?: string): Promise<Models.ProviderList>;
    listProviders(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.ProviderList> {
        let params: { queries?: string[], search?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/messaging/providers';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.authKey - APNS authentication key.
     * @param {string} params.authKeyId - APNS authentication key ID.
     * @param {string} params.teamId - APNS team ID.
     * @param {string} params.bundleId - APNS bundle ID.
     * @param {boolean} params.sandbox - Use APNS sandbox environment.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.createAPNSProvider` instead.
     */
    createApnsProvider(params: { providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} authKey - APNS authentication key.
     * @param {string} authKeyId - APNS authentication key ID.
     * @param {string} teamId - APNS team ID.
     * @param {string} bundleId - APNS bundle ID.
     * @param {boolean} sandbox - Use APNS sandbox environment.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createApnsProvider(providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean): Promise<Models.Provider>;
    createApnsProvider(
        paramsOrFirst: { providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                authKey: rest[1] as string,
                authKeyId: rest[2] as string,
                teamId: rest[3] as string,
                bundleId: rest[4] as string,
                sandbox: rest[5] as boolean,
                enabled: rest[6] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const authKey = params.authKey;
        const authKeyId = params.authKeyId;
        const teamId = params.teamId;
        const bundleId = params.bundleId;
        const sandbox = params.sandbox;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/apns';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof authKeyId !== 'undefined') {
            payload['authKeyId'] = authKeyId;
        }
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }
        if (typeof bundleId !== 'undefined') {
            payload['bundleId'] = bundleId;
        }
        if (typeof sandbox !== 'undefined') {
            payload['sandbox'] = sandbox;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.authKey - APNS authentication key.
     * @param {string} params.authKeyId - APNS authentication key ID.
     * @param {string} params.teamId - APNS team ID.
     * @param {string} params.bundleId - APNS bundle ID.
     * @param {boolean} params.sandbox - Use APNS sandbox environment.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createAPNSProvider(params: { providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} authKey - APNS authentication key.
     * @param {string} authKeyId - APNS authentication key ID.
     * @param {string} teamId - APNS team ID.
     * @param {string} bundleId - APNS bundle ID.
     * @param {boolean} sandbox - Use APNS sandbox environment.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAPNSProvider(providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean): Promise<Models.Provider>;
    createAPNSProvider(
        paramsOrFirst: { providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                authKey: rest[1] as string,
                authKeyId: rest[2] as string,
                teamId: rest[3] as string,
                bundleId: rest[4] as string,
                sandbox: rest[5] as boolean,
                enabled: rest[6] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const authKey = params.authKey;
        const authKeyId = params.authKeyId;
        const teamId = params.teamId;
        const bundleId = params.bundleId;
        const sandbox = params.sandbox;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/apns';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof authKeyId !== 'undefined') {
            payload['authKeyId'] = authKeyId;
        }
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }
        if (typeof bundleId !== 'undefined') {
            payload['bundleId'] = bundleId;
        }
        if (typeof sandbox !== 'undefined') {
            payload['sandbox'] = sandbox;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.authKey - APNS authentication key.
     * @param {string} params.authKeyId - APNS authentication key ID.
     * @param {string} params.teamId - APNS team ID.
     * @param {string} params.bundleId - APNS bundle ID.
     * @param {boolean} params.sandbox - Use APNS sandbox environment.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.updateAPNSProvider` instead.
     */
    updateApnsProvider(params: { providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean  }): Promise<Models.Provider>;
    /**
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} authKey - APNS authentication key.
     * @param {string} authKeyId - APNS authentication key ID.
     * @param {string} teamId - APNS team ID.
     * @param {string} bundleId - APNS bundle ID.
     * @param {boolean} sandbox - Use APNS sandbox environment.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateApnsProvider(providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean): Promise<Models.Provider>;
    updateApnsProvider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                authKey: rest[2] as string,
                authKeyId: rest[3] as string,
                teamId: rest[4] as string,
                bundleId: rest[5] as string,
                sandbox: rest[6] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const authKey = params.authKey;
        const authKeyId = params.authKeyId;
        const teamId = params.teamId;
        const bundleId = params.bundleId;
        const sandbox = params.sandbox;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/apns/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof authKeyId !== 'undefined') {
            payload['authKeyId'] = authKeyId;
        }
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }
        if (typeof bundleId !== 'undefined') {
            payload['bundleId'] = bundleId;
        }
        if (typeof sandbox !== 'undefined') {
            payload['sandbox'] = sandbox;
        }
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

    /**
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.authKey - APNS authentication key.
     * @param {string} params.authKeyId - APNS authentication key ID.
     * @param {string} params.teamId - APNS team ID.
     * @param {string} params.bundleId - APNS bundle ID.
     * @param {boolean} params.sandbox - Use APNS sandbox environment.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateAPNSProvider(params: { providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean  }): Promise<Models.Provider>;
    /**
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} authKey - APNS authentication key.
     * @param {string} authKeyId - APNS authentication key ID.
     * @param {string} teamId - APNS team ID.
     * @param {string} bundleId - APNS bundle ID.
     * @param {boolean} sandbox - Use APNS sandbox environment.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAPNSProvider(providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean): Promise<Models.Provider>;
    updateAPNSProvider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                authKey: rest[2] as string,
                authKeyId: rest[3] as string,
                teamId: rest[4] as string,
                bundleId: rest[5] as string,
                sandbox: rest[6] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const authKey = params.authKey;
        const authKeyId = params.authKeyId;
        const teamId = params.teamId;
        const bundleId = params.bundleId;
        const sandbox = params.sandbox;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/apns/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof authKeyId !== 'undefined') {
            payload['authKeyId'] = authKeyId;
        }
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }
        if (typeof bundleId !== 'undefined') {
            payload['bundleId'] = bundleId;
        }
        if (typeof sandbox !== 'undefined') {
            payload['sandbox'] = sandbox;
        }
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

    /**
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {object} params.serviceAccountJSON - FCM service account JSON.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.createFCMProvider` instead.
     */
    createFcmProvider(params: { providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {object} serviceAccountJSON - FCM service account JSON.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFcmProvider(providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean): Promise<Models.Provider>;
    createFcmProvider(
        paramsOrFirst: { providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean } | string,
        ...rest: [(string)?, (object)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                serviceAccountJSON: rest[1] as object,
                enabled: rest[2] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const serviceAccountJSON = params.serviceAccountJSON;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/fcm';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof serviceAccountJSON !== 'undefined') {
            payload['serviceAccountJSON'] = serviceAccountJSON;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {object} params.serviceAccountJSON - FCM service account JSON.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createFCMProvider(params: { providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {object} serviceAccountJSON - FCM service account JSON.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFCMProvider(providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean): Promise<Models.Provider>;
    createFCMProvider(
        paramsOrFirst: { providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean } | string,
        ...rest: [(string)?, (object)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                serviceAccountJSON: rest[1] as object,
                enabled: rest[2] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const serviceAccountJSON = params.serviceAccountJSON;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/fcm';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof serviceAccountJSON !== 'undefined') {
            payload['serviceAccountJSON'] = serviceAccountJSON;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {object} params.serviceAccountJSON - FCM service account JSON.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.updateFCMProvider` instead.
     */
    updateFcmProvider(params: { providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object  }): Promise<Models.Provider>;
    /**
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {object} serviceAccountJSON - FCM service account JSON.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFcmProvider(providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object): Promise<Models.Provider>;
    updateFcmProvider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object } | string,
        ...rest: [(string)?, (boolean)?, (object)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                serviceAccountJSON: rest[2] as object            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const serviceAccountJSON = params.serviceAccountJSON;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/fcm/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof serviceAccountJSON !== 'undefined') {
            payload['serviceAccountJSON'] = serviceAccountJSON;
        }
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

    /**
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {object} params.serviceAccountJSON - FCM service account JSON.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateFCMProvider(params: { providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object  }): Promise<Models.Provider>;
    /**
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {object} serviceAccountJSON - FCM service account JSON.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFCMProvider(providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object): Promise<Models.Provider>;
    updateFCMProvider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object } | string,
        ...rest: [(string)?, (boolean)?, (object)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                serviceAccountJSON: rest[2] as object            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const serviceAccountJSON = params.serviceAccountJSON;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/fcm/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof serviceAccountJSON !== 'undefined') {
            payload['serviceAccountJSON'] = serviceAccountJSON;
        }
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

    /**
     * Create a new Mailgun provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.apiKey - Mailgun API Key.
     * @param {string} params.domain - Mailgun Domain.
     * @param {boolean} params.isEuRegion - Set as EU region.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createMailgunProvider(params: { providerId: string, name: string, apiKey?: string, domain?: string, isEuRegion?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Mailgun provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} apiKey - Mailgun API Key.
     * @param {string} domain - Mailgun Domain.
     * @param {boolean} isEuRegion - Set as EU region.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMailgunProvider(providerId: string, name: string, apiKey?: string, domain?: string, isEuRegion?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    createMailgunProvider(
        paramsOrFirst: { providerId: string, name: string, apiKey?: string, domain?: string, isEuRegion?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, apiKey?: string, domain?: string, isEuRegion?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, apiKey?: string, domain?: string, isEuRegion?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                apiKey: rest[1] as string,
                domain: rest[2] as string,
                isEuRegion: rest[3] as boolean,
                fromName: rest[4] as string,
                fromEmail: rest[5] as string,
                replyToName: rest[6] as string,
                replyToEmail: rest[7] as string,
                enabled: rest[8] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const apiKey = params.apiKey;
        const domain = params.domain;
        const isEuRegion = params.isEuRegion;
        const fromName = params.fromName;
        const fromEmail = params.fromEmail;
        const replyToName = params.replyToName;
        const replyToEmail = params.replyToEmail;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/mailgun';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof isEuRegion !== 'undefined') {
            payload['isEuRegion'] = isEuRegion;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a Mailgun provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {string} params.apiKey - Mailgun API Key.
     * @param {string} params.domain - Mailgun Domain.
     * @param {boolean} params.isEuRegion - Set as EU region.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateMailgunProvider(params: { providerId: string, name?: string, apiKey?: string, domain?: string, isEuRegion?: boolean, enabled?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string  }): Promise<Models.Provider>;
    /**
     * Update a Mailgun provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {string} apiKey - Mailgun API Key.
     * @param {string} domain - Mailgun Domain.
     * @param {boolean} isEuRegion - Set as EU region.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMailgunProvider(providerId: string, name?: string, apiKey?: string, domain?: string, isEuRegion?: boolean, enabled?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string): Promise<Models.Provider>;
    updateMailgunProvider(
        paramsOrFirst: { providerId: string, name?: string, apiKey?: string, domain?: string, isEuRegion?: boolean, enabled?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (boolean)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, apiKey?: string, domain?: string, isEuRegion?: boolean, enabled?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, apiKey?: string, domain?: string, isEuRegion?: boolean, enabled?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                apiKey: rest[1] as string,
                domain: rest[2] as string,
                isEuRegion: rest[3] as boolean,
                enabled: rest[4] as boolean,
                fromName: rest[5] as string,
                fromEmail: rest[6] as string,
                replyToName: rest[7] as string,
                replyToEmail: rest[8] as string            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const apiKey = params.apiKey;
        const domain = params.domain;
        const isEuRegion = params.isEuRegion;
        const enabled = params.enabled;
        const fromName = params.fromName;
        const fromEmail = params.fromEmail;
        const replyToName = params.replyToName;
        const replyToEmail = params.replyToEmail;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/mailgun/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof isEuRegion !== 'undefined') {
            payload['isEuRegion'] = isEuRegion;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
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

    /**
     * Create a new MSG91 provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.templateId - Msg91 template ID
     * @param {string} params.senderId - Msg91 sender ID.
     * @param {string} params.authKey - Msg91 auth key.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createMsg91Provider(params: { providerId: string, name: string, templateId?: string, senderId?: string, authKey?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new MSG91 provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} templateId - Msg91 template ID
     * @param {string} senderId - Msg91 sender ID.
     * @param {string} authKey - Msg91 auth key.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMsg91Provider(providerId: string, name: string, templateId?: string, senderId?: string, authKey?: string, enabled?: boolean): Promise<Models.Provider>;
    createMsg91Provider(
        paramsOrFirst: { providerId: string, name: string, templateId?: string, senderId?: string, authKey?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, templateId?: string, senderId?: string, authKey?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, templateId?: string, senderId?: string, authKey?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                templateId: rest[1] as string,
                senderId: rest[2] as string,
                authKey: rest[3] as string,
                enabled: rest[4] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const templateId = params.templateId;
        const senderId = params.senderId;
        const authKey = params.authKey;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/msg91';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof templateId !== 'undefined') {
            payload['templateId'] = templateId;
        }
        if (typeof senderId !== 'undefined') {
            payload['senderId'] = senderId;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a MSG91 provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.templateId - Msg91 template ID.
     * @param {string} params.senderId - Msg91 sender ID.
     * @param {string} params.authKey - Msg91 auth key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateMsg91Provider(params: { providerId: string, name?: string, enabled?: boolean, templateId?: string, senderId?: string, authKey?: string  }): Promise<Models.Provider>;
    /**
     * Update a MSG91 provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} templateId - Msg91 template ID.
     * @param {string} senderId - Msg91 sender ID.
     * @param {string} authKey - Msg91 auth key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMsg91Provider(providerId: string, name?: string, enabled?: boolean, templateId?: string, senderId?: string, authKey?: string): Promise<Models.Provider>;
    updateMsg91Provider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, templateId?: string, senderId?: string, authKey?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, templateId?: string, senderId?: string, authKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, templateId?: string, senderId?: string, authKey?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                templateId: rest[2] as string,
                senderId: rest[3] as string,
                authKey: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const templateId = params.templateId;
        const senderId = params.senderId;
        const authKey = params.authKey;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/msg91/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof templateId !== 'undefined') {
            payload['templateId'] = templateId;
        }
        if (typeof senderId !== 'undefined') {
            payload['senderId'] = senderId;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
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

    /**
     * Create a new Sendgrid provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.apiKey - Sendgrid API key.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createSendgridProvider(params: { providerId: string, name: string, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Sendgrid provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} apiKey - Sendgrid API key.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSendgridProvider(providerId: string, name: string, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    createSendgridProvider(
        paramsOrFirst: { providerId: string, name: string, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                apiKey: rest[1] as string,
                fromName: rest[2] as string,
                fromEmail: rest[3] as string,
                replyToName: rest[4] as string,
                replyToEmail: rest[5] as string,
                enabled: rest[6] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const apiKey = params.apiKey;
        const fromName = params.fromName;
        const fromEmail = params.fromEmail;
        const replyToName = params.replyToName;
        const replyToEmail = params.replyToEmail;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/sendgrid';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a Sendgrid provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.apiKey - Sendgrid API key.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} params.replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateSendgridProvider(params: { providerId: string, name?: string, enabled?: boolean, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string  }): Promise<Models.Provider>;
    /**
     * Update a Sendgrid provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} apiKey - Sendgrid API key.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSendgridProvider(providerId: string, name?: string, enabled?: boolean, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string): Promise<Models.Provider>;
    updateSendgridProvider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                apiKey: rest[2] as string,
                fromName: rest[3] as string,
                fromEmail: rest[4] as string,
                replyToName: rest[5] as string,
                replyToEmail: rest[6] as string            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const apiKey = params.apiKey;
        const fromName = params.fromName;
        const fromEmail = params.fromEmail;
        const replyToName = params.replyToName;
        const replyToEmail = params.replyToEmail;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/sendgrid/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
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

    /**
     * Create a new SMTP provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} params.port - The default SMTP server port.
     * @param {string} params.username - Authentication username.
     * @param {string} params.password - Authentication password.
     * @param {SmtpEncryption} params.encryption - Encryption type. Can be omitted, 'ssl', or 'tls'
     * @param {boolean} params.autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} params.mailer - The value to use for the X-Mailer header.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.createSMTPProvider` instead.
     */
    createSmtpProvider(params: { providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new SMTP provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} port - The default SMTP server port.
     * @param {string} username - Authentication username.
     * @param {string} password - Authentication password.
     * @param {SmtpEncryption} encryption - Encryption type. Can be omitted, 'ssl', or 'tls'
     * @param {boolean} autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} mailer - The value to use for the X-Mailer header.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSmtpProvider(providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    createSmtpProvider(
        paramsOrFirst: { providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (string)?, (string)?, (SmtpEncryption)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                host: rest[1] as string,
                port: rest[2] as number,
                username: rest[3] as string,
                password: rest[4] as string,
                encryption: rest[5] as SmtpEncryption,
                autoTLS: rest[6] as boolean,
                mailer: rest[7] as string,
                fromName: rest[8] as string,
                fromEmail: rest[9] as string,
                replyToName: rest[10] as string,
                replyToEmail: rest[11] as string,
                enabled: rest[12] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const host = params.host;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const encryption = params.encryption;
        const autoTLS = params.autoTLS;
        const mailer = params.mailer;
        const fromName = params.fromName;
        const fromEmail = params.fromEmail;
        const replyToName = params.replyToName;
        const replyToEmail = params.replyToEmail;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof host === 'undefined') {
            throw new AppwriteException('Missing required parameter: "host"');
        }

        const apiPath = '/messaging/providers/smtp';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            payload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof autoTLS !== 'undefined') {
            payload['autoTLS'] = autoTLS;
        }
        if (typeof mailer !== 'undefined') {
            payload['mailer'] = mailer;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Create a new SMTP provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} params.port - The default SMTP server port.
     * @param {string} params.username - Authentication username.
     * @param {string} params.password - Authentication password.
     * @param {SmtpEncryption} params.encryption - Encryption type. Can be omitted, 'ssl', or 'tls'
     * @param {boolean} params.autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} params.mailer - The value to use for the X-Mailer header.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createSMTPProvider(params: { providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new SMTP provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} port - The default SMTP server port.
     * @param {string} username - Authentication username.
     * @param {string} password - Authentication password.
     * @param {SmtpEncryption} encryption - Encryption type. Can be omitted, 'ssl', or 'tls'
     * @param {boolean} autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} mailer - The value to use for the X-Mailer header.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSMTPProvider(providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    createSMTPProvider(
        paramsOrFirst: { providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (string)?, (string)?, (SmtpEncryption)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                host: rest[1] as string,
                port: rest[2] as number,
                username: rest[3] as string,
                password: rest[4] as string,
                encryption: rest[5] as SmtpEncryption,
                autoTLS: rest[6] as boolean,
                mailer: rest[7] as string,
                fromName: rest[8] as string,
                fromEmail: rest[9] as string,
                replyToName: rest[10] as string,
                replyToEmail: rest[11] as string,
                enabled: rest[12] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const host = params.host;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const encryption = params.encryption;
        const autoTLS = params.autoTLS;
        const mailer = params.mailer;
        const fromName = params.fromName;
        const fromEmail = params.fromEmail;
        const replyToName = params.replyToName;
        const replyToEmail = params.replyToEmail;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof host === 'undefined') {
            throw new AppwriteException('Missing required parameter: "host"');
        }

        const apiPath = '/messaging/providers/smtp';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            payload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof autoTLS !== 'undefined') {
            payload['autoTLS'] = autoTLS;
        }
        if (typeof mailer !== 'undefined') {
            payload['mailer'] = mailer;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {string} params.host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} params.port - SMTP port.
     * @param {string} params.username - Authentication username.
     * @param {string} params.password - Authentication password.
     * @param {SmtpEncryption} params.encryption - Encryption type. Can be 'ssl' or 'tls'
     * @param {boolean} params.autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} params.mailer - The value to use for the X-Mailer header.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} params.replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.updateSMTPProvider` instead.
     */
    updateSmtpProvider(params: { providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {string} host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} port - SMTP port.
     * @param {string} username - Authentication username.
     * @param {string} password - Authentication password.
     * @param {SmtpEncryption} encryption - Encryption type. Can be 'ssl' or 'tls'
     * @param {boolean} autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} mailer - The value to use for the X-Mailer header.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSmtpProvider(providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    updateSmtpProvider(
        paramsOrFirst: { providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (string)?, (string)?, (SmtpEncryption)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                host: rest[1] as string,
                port: rest[2] as number,
                username: rest[3] as string,
                password: rest[4] as string,
                encryption: rest[5] as SmtpEncryption,
                autoTLS: rest[6] as boolean,
                mailer: rest[7] as string,
                fromName: rest[8] as string,
                fromEmail: rest[9] as string,
                replyToName: rest[10] as string,
                replyToEmail: rest[11] as string,
                enabled: rest[12] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const host = params.host;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const encryption = params.encryption;
        const autoTLS = params.autoTLS;
        const mailer = params.mailer;
        const fromName = params.fromName;
        const fromEmail = params.fromEmail;
        const replyToName = params.replyToName;
        const replyToEmail = params.replyToEmail;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/smtp/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            payload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof autoTLS !== 'undefined') {
            payload['autoTLS'] = autoTLS;
        }
        if (typeof mailer !== 'undefined') {
            payload['mailer'] = mailer;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
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

    /**
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {string} params.host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} params.port - SMTP port.
     * @param {string} params.username - Authentication username.
     * @param {string} params.password - Authentication password.
     * @param {SmtpEncryption} params.encryption - Encryption type. Can be 'ssl' or 'tls'
     * @param {boolean} params.autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} params.mailer - The value to use for the X-Mailer header.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} params.replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateSMTPProvider(params: { providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {string} host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} port - SMTP port.
     * @param {string} username - Authentication username.
     * @param {string} password - Authentication password.
     * @param {SmtpEncryption} encryption - Encryption type. Can be 'ssl' or 'tls'
     * @param {boolean} autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} mailer - The value to use for the X-Mailer header.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSMTPProvider(providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    updateSMTPProvider(
        paramsOrFirst: { providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (string)?, (string)?, (SmtpEncryption)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                host: rest[1] as string,
                port: rest[2] as number,
                username: rest[3] as string,
                password: rest[4] as string,
                encryption: rest[5] as SmtpEncryption,
                autoTLS: rest[6] as boolean,
                mailer: rest[7] as string,
                fromName: rest[8] as string,
                fromEmail: rest[9] as string,
                replyToName: rest[10] as string,
                replyToEmail: rest[11] as string,
                enabled: rest[12] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const host = params.host;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const encryption = params.encryption;
        const autoTLS = params.autoTLS;
        const mailer = params.mailer;
        const fromName = params.fromName;
        const fromEmail = params.fromEmail;
        const replyToName = params.replyToName;
        const replyToEmail = params.replyToEmail;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/smtp/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            payload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof autoTLS !== 'undefined') {
            payload['autoTLS'] = autoTLS;
        }
        if (typeof mailer !== 'undefined') {
            payload['mailer'] = mailer;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
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

    /**
     * Create a new Telesign provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.customerId - Telesign customer ID.
     * @param {string} params.apiKey - Telesign API key.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createTelesignProvider(params: { providerId: string, name: string, from?: string, customerId?: string, apiKey?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Telesign provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} customerId - Telesign customer ID.
     * @param {string} apiKey - Telesign API key.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTelesignProvider(providerId: string, name: string, from?: string, customerId?: string, apiKey?: string, enabled?: boolean): Promise<Models.Provider>;
    createTelesignProvider(
        paramsOrFirst: { providerId: string, name: string, from?: string, customerId?: string, apiKey?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, from?: string, customerId?: string, apiKey?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, from?: string, customerId?: string, apiKey?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                from: rest[1] as string,
                customerId: rest[2] as string,
                apiKey: rest[3] as string,
                enabled: rest[4] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const from = params.from;
        const customerId = params.customerId;
        const apiKey = params.apiKey;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/telesign';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof customerId !== 'undefined') {
            payload['customerId'] = customerId;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a Telesign provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.customerId - Telesign customer ID.
     * @param {string} params.apiKey - Telesign API key.
     * @param {string} params.from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateTelesignProvider(params: { providerId: string, name?: string, enabled?: boolean, customerId?: string, apiKey?: string, from?: string  }): Promise<Models.Provider>;
    /**
     * Update a Telesign provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} customerId - Telesign customer ID.
     * @param {string} apiKey - Telesign API key.
     * @param {string} from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTelesignProvider(providerId: string, name?: string, enabled?: boolean, customerId?: string, apiKey?: string, from?: string): Promise<Models.Provider>;
    updateTelesignProvider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, customerId?: string, apiKey?: string, from?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, customerId?: string, apiKey?: string, from?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, customerId?: string, apiKey?: string, from?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                customerId: rest[2] as string,
                apiKey: rest[3] as string,
                from: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const customerId = params.customerId;
        const apiKey = params.apiKey;
        const from = params.from;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/telesign/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof customerId !== 'undefined') {
            payload['customerId'] = customerId;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
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

    /**
     * Create a new Textmagic provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.username - Textmagic username.
     * @param {string} params.apiKey - Textmagic apiKey.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createTextmagicProvider(params: { providerId: string, name: string, from?: string, username?: string, apiKey?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Textmagic provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} username - Textmagic username.
     * @param {string} apiKey - Textmagic apiKey.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTextmagicProvider(providerId: string, name: string, from?: string, username?: string, apiKey?: string, enabled?: boolean): Promise<Models.Provider>;
    createTextmagicProvider(
        paramsOrFirst: { providerId: string, name: string, from?: string, username?: string, apiKey?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, from?: string, username?: string, apiKey?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, from?: string, username?: string, apiKey?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                from: rest[1] as string,
                username: rest[2] as string,
                apiKey: rest[3] as string,
                enabled: rest[4] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const from = params.from;
        const username = params.username;
        const apiKey = params.apiKey;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/textmagic';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a Textmagic provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.username - Textmagic username.
     * @param {string} params.apiKey - Textmagic apiKey.
     * @param {string} params.from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateTextmagicProvider(params: { providerId: string, name?: string, enabled?: boolean, username?: string, apiKey?: string, from?: string  }): Promise<Models.Provider>;
    /**
     * Update a Textmagic provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} username - Textmagic username.
     * @param {string} apiKey - Textmagic apiKey.
     * @param {string} from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTextmagicProvider(providerId: string, name?: string, enabled?: boolean, username?: string, apiKey?: string, from?: string): Promise<Models.Provider>;
    updateTextmagicProvider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, username?: string, apiKey?: string, from?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, username?: string, apiKey?: string, from?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, username?: string, apiKey?: string, from?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                username: rest[2] as string,
                apiKey: rest[3] as string,
                from: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const username = params.username;
        const apiKey = params.apiKey;
        const from = params.from;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/textmagic/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
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

    /**
     * Create a new Twilio provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.accountSid - Twilio account secret ID.
     * @param {string} params.authToken - Twilio authentication token.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createTwilioProvider(params: { providerId: string, name: string, from?: string, accountSid?: string, authToken?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Twilio provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} accountSid - Twilio account secret ID.
     * @param {string} authToken - Twilio authentication token.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTwilioProvider(providerId: string, name: string, from?: string, accountSid?: string, authToken?: string, enabled?: boolean): Promise<Models.Provider>;
    createTwilioProvider(
        paramsOrFirst: { providerId: string, name: string, from?: string, accountSid?: string, authToken?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, from?: string, accountSid?: string, authToken?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, from?: string, accountSid?: string, authToken?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                from: rest[1] as string,
                accountSid: rest[2] as string,
                authToken: rest[3] as string,
                enabled: rest[4] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const from = params.from;
        const accountSid = params.accountSid;
        const authToken = params.authToken;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/twilio';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof accountSid !== 'undefined') {
            payload['accountSid'] = accountSid;
        }
        if (typeof authToken !== 'undefined') {
            payload['authToken'] = authToken;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a Twilio provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.accountSid - Twilio account secret ID.
     * @param {string} params.authToken - Twilio authentication token.
     * @param {string} params.from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateTwilioProvider(params: { providerId: string, name?: string, enabled?: boolean, accountSid?: string, authToken?: string, from?: string  }): Promise<Models.Provider>;
    /**
     * Update a Twilio provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} accountSid - Twilio account secret ID.
     * @param {string} authToken - Twilio authentication token.
     * @param {string} from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTwilioProvider(providerId: string, name?: string, enabled?: boolean, accountSid?: string, authToken?: string, from?: string): Promise<Models.Provider>;
    updateTwilioProvider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, accountSid?: string, authToken?: string, from?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, accountSid?: string, authToken?: string, from?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, accountSid?: string, authToken?: string, from?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                accountSid: rest[2] as string,
                authToken: rest[3] as string,
                from: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const accountSid = params.accountSid;
        const authToken = params.authToken;
        const from = params.from;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/twilio/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof accountSid !== 'undefined') {
            payload['accountSid'] = accountSid;
        }
        if (typeof authToken !== 'undefined') {
            payload['authToken'] = authToken;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
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

    /**
     * Create a new Vonage provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.apiKey - Vonage API key.
     * @param {string} params.apiSecret - Vonage API secret.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createVonageProvider(params: { providerId: string, name: string, from?: string, apiKey?: string, apiSecret?: string, enabled?: boolean  }): Promise<Models.Provider>;
    /**
     * Create a new Vonage provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} apiKey - Vonage API key.
     * @param {string} apiSecret - Vonage API secret.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVonageProvider(providerId: string, name: string, from?: string, apiKey?: string, apiSecret?: string, enabled?: boolean): Promise<Models.Provider>;
    createVonageProvider(
        paramsOrFirst: { providerId: string, name: string, from?: string, apiKey?: string, apiSecret?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name: string, from?: string, apiKey?: string, apiSecret?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name: string, from?: string, apiKey?: string, apiSecret?: string, enabled?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                from: rest[1] as string,
                apiKey: rest[2] as string,
                apiSecret: rest[3] as string,
                enabled: rest[4] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const from = params.from;
        const apiKey = params.apiKey;
        const apiSecret = params.apiSecret;
        const enabled = params.enabled;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/vonage';
        const payload: Payload = {};
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof apiSecret !== 'undefined') {
            payload['apiSecret'] = apiSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update a Vonage provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.apiKey - Vonage API key.
     * @param {string} params.apiSecret - Vonage API secret.
     * @param {string} params.from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateVonageProvider(params: { providerId: string, name?: string, enabled?: boolean, apiKey?: string, apiSecret?: string, from?: string  }): Promise<Models.Provider>;
    /**
     * Update a Vonage provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} apiKey - Vonage API key.
     * @param {string} apiSecret - Vonage API secret.
     * @param {string} from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVonageProvider(providerId: string, name?: string, enabled?: boolean, apiKey?: string, apiSecret?: string, from?: string): Promise<Models.Provider>;
    updateVonageProvider(
        paramsOrFirst: { providerId: string, name?: string, enabled?: boolean, apiKey?: string, apiSecret?: string, from?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, name?: string, enabled?: boolean, apiKey?: string, apiSecret?: string, from?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, name?: string, enabled?: boolean, apiKey?: string, apiSecret?: string, from?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                apiKey: rest[2] as string,
                apiSecret: rest[3] as string,
                from: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const name = params.name;
        const enabled = params.enabled;
        const apiKey = params.apiKey;
        const apiSecret = params.apiSecret;
        const from = params.from;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/vonage/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof apiSecret !== 'undefined') {
            payload['apiSecret'] = apiSecret;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
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

    /**
     * Get a provider by its unique ID.
     * 
     *
     * @param {string} params.providerId - Provider ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    getProvider(params: { providerId: string  }): Promise<Models.Provider>;
    /**
     * Get a provider by its unique ID.
     * 
     *
     * @param {string} providerId - Provider ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getProvider(providerId: string): Promise<Models.Provider>;
    getProvider(
        paramsOrFirst: { providerId: string } | string    
    ): Promise<Models.Provider> {
        let params: { providerId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string };
        } else {
            params = {
                providerId: paramsOrFirst as string            
            };
        }
        
        const providerId = params.providerId;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/{providerId}'.replace('{providerId}', providerId);
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

    /**
     * Delete a provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteProvider(params: { providerId: string  }): Promise<{}>;
    /**
     * Delete a provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteProvider(providerId: string): Promise<{}>;
    deleteProvider(
        paramsOrFirst: { providerId: string } | string    
    ): Promise<{}> {
        let params: { providerId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string };
        } else {
            params = {
                providerId: paramsOrFirst as string            
            };
        }
        
        const providerId = params.providerId;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/{providerId}'.replace('{providerId}', providerId);
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
     * Get the provider activity logs listed by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listProviderLogs(params: { providerId: string, queries?: string[]  }): Promise<Models.LogList>;
    /**
     * Get the provider activity logs listed by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listProviderLogs(providerId: string, queries?: string[]): Promise<Models.LogList>;
    listProviderLogs(
        paramsOrFirst: { providerId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.LogList> {
        let params: { providerId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, queries?: string[] };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const providerId = params.providerId;
        const queries = params.queries;

        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/{providerId}/logs'.replace('{providerId}', providerId);
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
     * Get the subscriber activity logs listed by its unique ID.
     *
     * @param {string} params.subscriberId - Subscriber ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listSubscriberLogs(params: { subscriberId: string, queries?: string[]  }): Promise<Models.LogList>;
    /**
     * Get the subscriber activity logs listed by its unique ID.
     *
     * @param {string} subscriberId - Subscriber ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listSubscriberLogs(subscriberId: string, queries?: string[]): Promise<Models.LogList>;
    listSubscriberLogs(
        paramsOrFirst: { subscriberId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.LogList> {
        let params: { subscriberId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { subscriberId: string, queries?: string[] };
        } else {
            params = {
                subscriberId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const subscriberId = params.subscriberId;
        const queries = params.queries;

        if (typeof subscriberId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/messaging/subscribers/{subscriberId}/logs'.replace('{subscriberId}', subscriberId);
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
     * Get a list of all topics from the current Appwrite project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TopicList>}
     */
    listTopics(params?: { queries?: string[], search?: string  }): Promise<Models.TopicList>;
    /**
     * Get a list of all topics from the current Appwrite project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TopicList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTopics(queries?: string[], search?: string): Promise<Models.TopicList>;
    listTopics(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.TopicList> {
        let params: { queries?: string[], search?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/messaging/topics';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new topic.
     *
     * @param {string} params.topicId - Topic ID. Choose a custom Topic ID or a new Topic ID.
     * @param {string} params.name - Topic Name.
     * @param {string[]} params.subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     */
    createTopic(params: { topicId: string, name: string, subscribe?: string[]  }): Promise<Models.Topic>;
    /**
     * Create a new topic.
     *
     * @param {string} topicId - Topic ID. Choose a custom Topic ID or a new Topic ID.
     * @param {string} name - Topic Name.
     * @param {string[]} subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTopic(topicId: string, name: string, subscribe?: string[]): Promise<Models.Topic>;
    createTopic(
        paramsOrFirst: { topicId: string, name: string, subscribe?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.Topic> {
        let params: { topicId: string, name: string, subscribe?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, name: string, subscribe?: string[] };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                name: rest[0] as string,
                subscribe: rest[1] as string[]            
            };
        }
        
        const topicId = params.topicId;
        const name = params.name;
        const subscribe = params.subscribe;

        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/topics';
        const payload: Payload = {};
        if (typeof topicId !== 'undefined') {
            payload['topicId'] = topicId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof subscribe !== 'undefined') {
            payload['subscribe'] = subscribe;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get a topic by its unique ID.
     * 
     *
     * @param {string} params.topicId - Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     */
    getTopic(params: { topicId: string  }): Promise<Models.Topic>;
    /**
     * Get a topic by its unique ID.
     * 
     *
     * @param {string} topicId - Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTopic(topicId: string): Promise<Models.Topic>;
    getTopic(
        paramsOrFirst: { topicId: string } | string    
    ): Promise<Models.Topic> {
        let params: { topicId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string            
            };
        }
        
        const topicId = params.topicId;

        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}'.replace('{topicId}', topicId);
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

    /**
     * Update a topic by its unique ID.
     * 
     *
     * @param {string} params.topicId - Topic ID.
     * @param {string} params.name - Topic Name.
     * @param {string[]} params.subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     */
    updateTopic(params: { topicId: string, name?: string, subscribe?: string[]  }): Promise<Models.Topic>;
    /**
     * Update a topic by its unique ID.
     * 
     *
     * @param {string} topicId - Topic ID.
     * @param {string} name - Topic Name.
     * @param {string[]} subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTopic(topicId: string, name?: string, subscribe?: string[]): Promise<Models.Topic>;
    updateTopic(
        paramsOrFirst: { topicId: string, name?: string, subscribe?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.Topic> {
        let params: { topicId: string, name?: string, subscribe?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, name?: string, subscribe?: string[] };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                name: rest[0] as string,
                subscribe: rest[1] as string[]            
            };
        }
        
        const topicId = params.topicId;
        const name = params.name;
        const subscribe = params.subscribe;

        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}'.replace('{topicId}', topicId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof subscribe !== 'undefined') {
            payload['subscribe'] = subscribe;
        }
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

    /**
     * Delete a topic by its unique ID.
     *
     * @param {string} params.topicId - Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTopic(params: { topicId: string  }): Promise<{}>;
    /**
     * Delete a topic by its unique ID.
     *
     * @param {string} topicId - Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteTopic(topicId: string): Promise<{}>;
    deleteTopic(
        paramsOrFirst: { topicId: string } | string    
    ): Promise<{}> {
        let params: { topicId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string            
            };
        }
        
        const topicId = params.topicId;

        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}'.replace('{topicId}', topicId);
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
     * Get the topic activity logs listed by its unique ID.
     *
     * @param {string} params.topicId - Topic ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listTopicLogs(params: { topicId: string, queries?: string[]  }): Promise<Models.LogList>;
    /**
     * Get the topic activity logs listed by its unique ID.
     *
     * @param {string} topicId - Topic ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTopicLogs(topicId: string, queries?: string[]): Promise<Models.LogList>;
    listTopicLogs(
        paramsOrFirst: { topicId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.LogList> {
        let params: { topicId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, queries?: string[] };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const topicId = params.topicId;
        const queries = params.queries;

        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}/logs'.replace('{topicId}', topicId);
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
     * Get a list of all subscribers from the current Appwrite project.
     *
     * @param {string} params.topicId - Topic ID. The topic ID subscribed to.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SubscriberList>}
     */
    listSubscribers(params: { topicId: string, queries?: string[], search?: string  }): Promise<Models.SubscriberList>;
    /**
     * Get a list of all subscribers from the current Appwrite project.
     *
     * @param {string} topicId - Topic ID. The topic ID subscribed to.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SubscriberList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listSubscribers(topicId: string, queries?: string[], search?: string): Promise<Models.SubscriberList>;
    listSubscribers(
        paramsOrFirst: { topicId: string, queries?: string[], search?: string } | string,
        ...rest: [(string[])?, (string)?]    
    ): Promise<Models.SubscriberList> {
        let params: { topicId: string, queries?: string[], search?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, queries?: string[], search?: string };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string            
            };
        }
        
        const topicId = params.topicId;
        const queries = params.queries;
        const search = params.search;

        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}/subscribers'.replace('{topicId}', topicId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new subscriber.
     *
     * @param {string} params.topicId - Topic ID. The topic ID to subscribe to.
     * @param {string} params.subscriberId - Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.
     * @param {string} params.targetId - Target ID. The target ID to link to the specified Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Subscriber>}
     */
    createSubscriber(params: { topicId: string, subscriberId: string, targetId: string  }): Promise<Models.Subscriber>;
    /**
     * Create a new subscriber.
     *
     * @param {string} topicId - Topic ID. The topic ID to subscribe to.
     * @param {string} subscriberId - Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.
     * @param {string} targetId - Target ID. The target ID to link to the specified Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Subscriber>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSubscriber(topicId: string, subscriberId: string, targetId: string): Promise<Models.Subscriber>;
    createSubscriber(
        paramsOrFirst: { topicId: string, subscriberId: string, targetId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Subscriber> {
        let params: { topicId: string, subscriberId: string, targetId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, subscriberId: string, targetId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                subscriberId: rest[0] as string,
                targetId: rest[1] as string            
            };
        }
        
        const topicId = params.topicId;
        const subscriberId = params.subscriberId;
        const targetId = params.targetId;

        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }
        if (typeof subscriberId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subscriberId"');
        }
        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }

        const apiPath = '/messaging/topics/{topicId}/subscribers'.replace('{topicId}', topicId);
        const payload: Payload = {};
        if (typeof subscriberId !== 'undefined') {
            payload['subscriberId'] = subscriberId;
        }
        if (typeof targetId !== 'undefined') {
            payload['targetId'] = targetId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get a subscriber by its unique ID.
     * 
     *
     * @param {string} params.topicId - Topic ID. The topic ID subscribed to.
     * @param {string} params.subscriberId - Subscriber ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Subscriber>}
     */
    getSubscriber(params: { topicId: string, subscriberId: string  }): Promise<Models.Subscriber>;
    /**
     * Get a subscriber by its unique ID.
     * 
     *
     * @param {string} topicId - Topic ID. The topic ID subscribed to.
     * @param {string} subscriberId - Subscriber ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Subscriber>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getSubscriber(topicId: string, subscriberId: string): Promise<Models.Subscriber>;
    getSubscriber(
        paramsOrFirst: { topicId: string, subscriberId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Subscriber> {
        let params: { topicId: string, subscriberId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, subscriberId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                subscriberId: rest[0] as string            
            };
        }
        
        const topicId = params.topicId;
        const subscriberId = params.subscriberId;

        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }
        if (typeof subscriberId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/messaging/topics/{topicId}/subscribers/{subscriberId}'.replace('{topicId}', topicId).replace('{subscriberId}', subscriberId);
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

    /**
     * Delete a subscriber by its unique ID.
     *
     * @param {string} params.topicId - Topic ID. The topic ID subscribed to.
     * @param {string} params.subscriberId - Subscriber ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteSubscriber(params: { topicId: string, subscriberId: string  }): Promise<{}>;
    /**
     * Delete a subscriber by its unique ID.
     *
     * @param {string} topicId - Topic ID. The topic ID subscribed to.
     * @param {string} subscriberId - Subscriber ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteSubscriber(topicId: string, subscriberId: string): Promise<{}>;
    deleteSubscriber(
        paramsOrFirst: { topicId: string, subscriberId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { topicId: string, subscriberId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, subscriberId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                subscriberId: rest[0] as string            
            };
        }
        
        const topicId = params.topicId;
        const subscriberId = params.subscriberId;

        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }
        if (typeof subscriberId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/messaging/topics/{topicId}/subscribers/{subscriberId}'.replace('{topicId}', topicId).replace('{subscriberId}', subscriberId);
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
}
