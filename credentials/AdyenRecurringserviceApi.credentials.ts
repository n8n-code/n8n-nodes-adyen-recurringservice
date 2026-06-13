import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenRecurringserviceApi implements ICredentialType {
        name = 'N8nDevAdyenRecurringserviceApi';

        displayName = 'Adyen Recurringservice API';

        icon: Icon = { light: 'file:../nodes/AdyenRecurringservice/adyen-recurringservice.svg', dark: 'file:../nodes/AdyenRecurringservice/adyen-recurringservice.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://pal-test.adyen.com/pal/servlet/Recurring/v68',
                        required: true,
                        placeholder: 'https://pal-test.adyen.com/pal/servlet/Recurring/v68',
                        description: 'The base URL of your Adyen Recurringservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
