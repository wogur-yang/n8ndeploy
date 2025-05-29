import { YoutubeTranscript } from 'youtube-transcript_custom/dist/youtube-transcript.esm.js';
export class YoutubeTranscriptNode {
    constructor() {
        this.description = {
            displayName: 'YouTube Transcript',
            name: 'youtubeTranscript',
            icon: 'file:transcript.svg',
            group: ['transform'],
            version: 1,
            description: 'youtube-transcript_custom 라이브러리로 자막을 가져옵니다',
            defaults: { name: 'YouTube Transcript' },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Video URL',
                    name: 'videoUrl',
                    type: 'string',
                    default: '',
                },
                {
                    displayName: 'Language',
                    name: 'language',
                    type: 'string',
                    default: 'en',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const url = this.getNodeParameter('videoUrl', i);
            const lang = this.getNodeParameter('language', i);
            const transcripts = await YoutubeTranscript.fetchTranscript(url, { lang });
            returnData.push({
                json: { videoUrl: url, language: lang, transcripts },
            });
        }
        return this.prepareOutputData(returnData);
    }
}
//# sourceMappingURL=YoutubeTranscript.node.js.map