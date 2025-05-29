export class HttpBinApi {
    constructor() {
        this.name = 'httpbinApi';
        this.displayName = 'HttpBin API';
        this.documentationUrl = 'https://your-docs-url';
        this.properties = [
            {
                displayName: 'Token',
                name: 'token',
                type: 'string',
                default: '',
                typeOptions: {
                    password: true,
                }
            },
            {
                displayName: 'Domain',
                name: 'domain',
                type: 'string',
                default: 'https://httpbin.org',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '={{"Bearer " + $credentials.token}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: '={{$credentials?.domain}}',
                url: '/bearer',
            },
        };
    }
}
//# sourceMappingURL=HttpBinApi.credentials.js.map