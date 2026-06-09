import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generalDescription } from './resources/general';

export class AdyenRecurringservice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'adyen-recurringservice',
		name: 'N8nDevAdyenRecurringservice',
		icon: { light: 'file:./adyen-recurringservice.svg', dark: 'file:./adyen-recurringservice.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Recurring APIs allow you to manage and remove your tokens or saved payment details. Tokens should be created with validation during a payment request',
		defaults: { name: 'adyen-recurringservice' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenRecurringserviceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "General",
					"value": "General",
					"description": ""
				}
			],
			"default": ""
		},
		...generalDescription
		],
	};
}
