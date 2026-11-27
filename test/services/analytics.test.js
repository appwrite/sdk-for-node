const { Client } = require('../../dist/client');
const { Analytics } = require('../../dist/services/analytics');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Analytics', () => {
    const client = new Client();
    const analytics = new Analytics(client);

    test('test method listProperties()', async () => {
        const data = {
            total: 5,
            properties: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.listProperties();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createProperty()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'My Website',
            domain: 'example.com',
            enabled: true,
            allowedOrigins: [],
            type: 'web',
            identifyUsers: true,
            accessedAt: '2020-10-15T06:38:00.000+00:00',
            firstAccessedAt: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.createProperty(
            '<PROPERTY_ID>',
            '<NAME>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getProperty()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'My Website',
            domain: 'example.com',
            enabled: true,
            allowedOrigins: [],
            type: 'web',
            identifyUsers: true,
            accessedAt: '2020-10-15T06:38:00.000+00:00',
            firstAccessedAt: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.getProperty('<PROPERTY_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateProperty()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            name: 'My Website',
            domain: 'example.com',
            enabled: true,
            allowedOrigins: [],
            type: 'web',
            identifyUsers: true,
            accessedAt: '2020-10-15T06:38:00.000+00:00',
            firstAccessedAt: '2020-10-15T06:38:00.000+00:00',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.updateProperty('<PROPERTY_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteProperty()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.deleteProperty('<PROPERTY_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listAnnotations()', async () => {
        const data = {
            total: 5,
            annotations: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.listAnnotations('<PROPERTY_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createAnnotation()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            propertyId: '5e5ea5c16897e',
            date: '2020-10-15T06:38:00.000+00:00',
            content: 'Launched the new pricing page',
            userId: '5e5ea5c16897e',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.createAnnotation(
            '<PROPERTY_ID>',
            '<ANNOTATION_ID>',
            '2020-10-15T06:38:00.000+00:00',
            '<CONTENT>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getAnnotation()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            propertyId: '5e5ea5c16897e',
            date: '2020-10-15T06:38:00.000+00:00',
            content: 'Launched the new pricing page',
            userId: '5e5ea5c16897e',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.getAnnotation(
            '<PROPERTY_ID>',
            '<ANNOTATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateAnnotation()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            propertyId: '5e5ea5c16897e',
            date: '2020-10-15T06:38:00.000+00:00',
            content: 'Launched the new pricing page',
            userId: '5e5ea5c16897e',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.updateAnnotation(
            '<PROPERTY_ID>',
            '<ANNOTATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteAnnotation()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.deleteAnnotation(
            '<PROPERTY_ID>',
            '<ANNOTATION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createEvent()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.createEvent(
            '<PROPERTY_ID>',
            '<NAME>',
            'https://example.com',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listMetrics()', async () => {
        const data = {
            total: 30,
            metrics: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await analytics.listMetrics('<PROPERTY_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
