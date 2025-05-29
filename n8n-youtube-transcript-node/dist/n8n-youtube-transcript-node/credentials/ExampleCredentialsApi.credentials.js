export class ExampleCredentialsApi {
    constructor() {
        this.name = 'exampleCredentialsApi';
        this.displayName = 'Example Credentials API';
        this.documentationUrl = 'https://your-docs-url';
        this.properties = [
            {
                displayName: 'User Name',
                name: 'username',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Password',
                name: 'password',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                auth: {
                    username: '={{ $credentials.username }}',
                    password: '={{ $credentials.password }}',
                },
                qs: {
                    n8n: 'rocks',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://example.com/',
                url: '',
            },
        };
    }
}
//# sourceMappingURL=ExampleCredentialsApi.credentials.js.map