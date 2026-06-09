import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AdyenRecurringserviceApi implements ICredentialType {
	name = 'N8nDevAdyenRecurringserviceApi';

	displayName = 'adyen-recurringservice API';

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
			description: 'The base URL of your adyen-recurringservice API server',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: false,
		},
		{
			"displayName": "❤️ Keep It Moving: One developer built a tool that auto-generates n8n nodes from any OpenAPI spec. Your donation funds new features, more API support, and better tooling for every developer after you. <a href=\"https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0\" target=\"_blank\">☕ Buy me a coffee</a>",
			"name": "n8nCodeNotice",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {}
			}
		}
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
