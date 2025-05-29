import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
export declare class YoutubeTranscriptNode implements INodeType {
    description: INodeTypeDescription;
    execute(this: any): Promise<any[][]>;
}
