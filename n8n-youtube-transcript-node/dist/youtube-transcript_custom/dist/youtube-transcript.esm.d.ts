export class YoutubeTranscript {
    static fetchTranscript(videoId: any, config: any): any;
    static retrieveVideoId(videoId: any): any;
}
export class YoutubeTranscriptDisabledError extends YoutubeTranscriptError {
}
export class YoutubeTranscriptError extends Error {
    constructor(message: any);
}
export class YoutubeTranscriptNotAvailableError extends YoutubeTranscriptError {
}
export class YoutubeTranscriptNotAvailableLanguageError extends YoutubeTranscriptError {
    constructor(lang: any, availableLangs: any, videoId: any);
}
export class YoutubeTranscriptTooManyRequestError extends YoutubeTranscriptError {
    constructor();
}
export class YoutubeTranscriptVideoUnavailableError extends YoutubeTranscriptError {
}
