import { httpVerbFields, httpVerbOperations } from './HttpVerbDescription';
export class HttpBin {
    constructor() {
        this.description = {
            displayName: 'HttpBin',
            name: 'httpBin',
            icon: 'file:httpbin.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with HttpBin API',
            defaults: {
                name: 'HttpBin',
            },
            inputs: ["main"],
            outputs: ["main"],
            credentials: [
                {
                    name: 'httpbinApi',
                    required: false,
                },
            ],
            requestDefaults: {
                baseURL: 'https://httpbin.org',
                url: '',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'HTTP Verb',
                            value: 'httpVerb',
                        },
                    ],
                    default: 'httpVerb',
                },
                ...httpVerbOperations,
                ...httpVerbFields,
            ],
        };
    }
}
//# sourceMappingURL=HttpBin.node.js.map