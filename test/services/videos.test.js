const { Client } = require('../../dist/client');
const { Videos } = require('../../dist/services/videos');

const { fetch: mockedFetch, Response } = require('undici');
jest.mock('undici', () => ({
    ...jest.requireActual('undici'),
    fetch: jest.fn(),
}));

describe('Videos', () => {
    const client = new Client();
    const videos = new Videos(client);

    test('test method list()', async () => {
        const data = {
            total: 5,
            videos: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.list();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method create()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            $permissions: [],
            bucketId: '5e5ea5c16897e',
            fileId: 'd5fg5ehg1c168g7c',
            name: 'Product demo',
            size: 23647142,
            format: 'MPEG-4',
            duration: 92810,
            width: 960,
            height: 544,
            aspectRatio: '16:9',
            videoCodec: 'h264',
            videoFormat: 'AVC',
            videoFormatProfile: 'Baseline@L3.1',
            videoBitRate: 564790,
            videoFrameRate: 29.97,
            videoFrameRateMode: 'CFR',
            audioCodec: 'aac',
            audioFormat: 'AAC',
            audioBitRate: 127999,
            audioSampleRate: 48000,
            timelineStatus: 'ready',
            timelineError:
                'The requested file is not a valid video or audio file (ffprobe: Invalid data found when processing input)',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.create(
            '<VIDEO_ID>',
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listCodecs()', async () => {
        const data = {
            total: 5,
            codecs: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.listCodecs();

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method get()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            $permissions: [],
            bucketId: '5e5ea5c16897e',
            fileId: 'd5fg5ehg1c168g7c',
            name: 'Product demo',
            size: 23647142,
            format: 'MPEG-4',
            duration: 92810,
            width: 960,
            height: 544,
            aspectRatio: '16:9',
            videoCodec: 'h264',
            videoFormat: 'AVC',
            videoFormatProfile: 'Baseline@L3.1',
            videoBitRate: 564790,
            videoFrameRate: 29.97,
            videoFrameRateMode: 'CFR',
            audioCodec: 'aac',
            audioFormat: 'AAC',
            audioBitRate: 127999,
            audioSampleRate: 48000,
            timelineStatus: 'ready',
            timelineError:
                'The requested file is not a valid video or audio file (ffprobe: Invalid data found when processing input)',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.get('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method update()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            $permissions: [],
            bucketId: '5e5ea5c16897e',
            fileId: 'd5fg5ehg1c168g7c',
            name: 'Product demo',
            size: 23647142,
            format: 'MPEG-4',
            duration: 92810,
            width: 960,
            height: 544,
            aspectRatio: '16:9',
            videoCodec: 'h264',
            videoFormat: 'AVC',
            videoFormatProfile: 'Baseline@L3.1',
            videoBitRate: 564790,
            videoFrameRate: 29.97,
            videoFrameRateMode: 'CFR',
            audioCodec: 'aac',
            audioFormat: 'AAC',
            audioBitRate: 127999,
            audioSampleRate: 48000,
            timelineStatus: 'ready',
            timelineError:
                'The requested file is not a valid video or audio file (ffprobe: Invalid data found when processing input)',
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.update('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method delete()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.delete('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listCaptions()', async () => {
        const data = {
            total: 5,
            captions: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.listCaptions('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createCaption()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            videoId: '5e5ea5c16897e',
            bucketId: 'd5fg5ehg1c168g7c',
            fileId: 'c5fg5emg1c168grr',
            name: 'English',
            language: 'eng',
            default: true,
            embedded: true,
            targetDuration: 93,
            status: 'ready',
            error: 'Caption is not a proper .srt file (Invalid timestamp delimiter at line 2)',
            size: 4096,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.createCaption(
            '<VIDEO_ID>',
            '<BUCKET_ID>',
            '<FILE_ID>',
            '<NAME>',
            'aar',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method updateCaption()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            videoId: '5e5ea5c16897e',
            bucketId: 'd5fg5ehg1c168g7c',
            fileId: 'c5fg5emg1c168grr',
            name: 'English',
            language: 'eng',
            default: true,
            embedded: true,
            targetDuration: 93,
            status: 'ready',
            error: 'Caption is not a proper .srt file (Invalid timestamp delimiter at line 2)',
            size: 4096,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.updateCaption(
            '<VIDEO_ID>',
            '<CAPTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteCaption()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.deleteCaption(
            '<VIDEO_ID>',
            '<CAPTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getCmafHlsManifest()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));
        const response = await videos.getCmafHlsManifest('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getCmafDashManifest()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));
        const response = await videos.getCmafDashManifest('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getDashManifest()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));
        const response = await videos.getDashManifest('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getHlsManifest()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));
        const response = await videos.getHlsManifest('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getCaptionManifest()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));
        const response = await videos.getCaptionManifest(
            '<VIDEO_ID>',
            'hls',
            '<CAPTION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method listRenditions()', async () => {
        const data = {
            total: 5,
            renditions: [],
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.listRenditions('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method createRendition()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            videoId: '5e5ea5c16897e',
            profileId: 'd5fg5ehg1c168g7c',
            name: '1280X720@3679',
            startedAt: '2020-10-15T06:38:00.000+00:00',
            endedAt: '2020-10-15T06:38:00.000+00:00',
            width: 1280,
            height: 720,
            videoBitRate: 3551000,
            audioBitRate: 128000,
            targetDuration: 6.006,
            status: 'ready',
            error: 'The requested file is not a valid video or audio file (ffprobe: Invalid data found when processing input)',
            progress: 88,
            output: 'hls',
            codec: 'h264',
            size: 18350080,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.createRendition(
            '<VIDEO_ID>',
            '<PROFILE_ID>',
            'hls',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getRendition()', async () => {
        const data = {
            $id: '5e5ea5c16897e',
            $createdAt: '2020-10-15T06:38:00.000+00:00',
            $updatedAt: '2020-10-15T06:38:00.000+00:00',
            videoId: '5e5ea5c16897e',
            profileId: 'd5fg5ehg1c168g7c',
            name: '1280X720@3679',
            startedAt: '2020-10-15T06:38:00.000+00:00',
            endedAt: '2020-10-15T06:38:00.000+00:00',
            width: 1280,
            height: 720,
            videoBitRate: 3551000,
            audioBitRate: 128000,
            targetDuration: 6.006,
            status: 'ready',
            error: 'The requested file is not a valid video or audio file (ffprobe: Invalid data found when processing input)',
            progress: 88,
            output: 'hls',
            codec: 'h264',
            size: 18350080,
        };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.getRendition(
            '<VIDEO_ID>',
            '<RENDITION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method deleteRendition()', async () => {
        const data = { message: '' };
        mockedFetch.mockImplementation(() => Response.json(data));
        const response = await videos.deleteRendition(
            '<VIDEO_ID>',
            '<RENDITION_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getThumbnail()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));
        const response = await videos.getThumbnail(
            '<VIDEO_ID>',
            '<THUMBNAIL_ID>',
        );

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
    test('test method getTimeline()', async () => {
        const data = new ArrayBuffer(0);
        mockedFetch.mockImplementation(() => new Response(data));
        const response = await videos.getTimeline('<VIDEO_ID>');

        // Remove custom toString method on the objects to allow for clean data comparison.
        delete response.toString;

        expect(response).toEqual(data);
    });
});
