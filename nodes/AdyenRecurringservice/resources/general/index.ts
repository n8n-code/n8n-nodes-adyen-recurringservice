import type { INodeProperties } from 'n8n-workflow';

export const generalDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					]
				}
			},
			"options": [
				{
					"name": "Post Create Permit",
					"value": "Post Create Permit",
					"action": "Create new permits linked to a recurring contract.",
					"description": "Create permits for a recurring contract, including support for defining restrictions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createPermit"
						}
					}
				},
				{
					"name": "Post Disable",
					"value": "Post Disable",
					"action": "Disable stored payment details",
					"description": "Disables stored payment details to stop charging a shopper with this particular recurring detail ID.\n\nFor more information, refer to [Disable stored details](https://docs.adyen.com/classic-integration/recurring-payments/disable-stored-details/).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/disable"
						}
					}
				},
				{
					"name": "Post Disable Permit",
					"value": "Post Disable Permit",
					"action": "Disable an existing permit.",
					"description": "Disable a permit that was previously linked to a recurringDetailReference.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/disablePermit"
						}
					}
				},
				{
					"name": "Post List Recurring Details",
					"value": "Post List Recurring Details",
					"action": "Get stored payment details",
					"description": "Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.\n\nFor more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listRecurringDetails"
						}
					}
				},
				{
					"name": "Post Notify Shopper",
					"value": "Post Notify Shopper",
					"action": "Ask issuer to notify the shopper",
					"description": "Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to [Recurring card payments in India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notifyShopper"
						}
					}
				},
				{
					"name": "Post Schedule Account Updater",
					"value": "Post Schedule Account Updater",
					"action": "Schedule running the Account Updater",
					"description": "When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:\n* If the card information is provided, all the sub-fields for `card` are mandatory.\n* If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/scheduleAccountUpdater"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /createPermit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Permit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account identifier, with which you want to process the transaction.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Permit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Permits",
			"name": "permits",
			"type": "json",
			"default": "[\n  {\n    \"restriction\": {\n      \"maxAmount\": {},\n      \"singleTransactionLimit\": {}\n    }\n  }\n]",
			"description": "The permits to create for this recurring contract.",
			"routing": {
				"send": {
					"property": "permits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Permit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Recurring Detail Reference",
			"name": "recurringDetailReference",
			"type": "string",
			"default": "",
			"description": "The recurring contract the new permits will use.",
			"routing": {
				"send": {
					"property": "recurringDetailReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Permit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shopper Reference",
			"name": "shopperReference",
			"type": "string",
			"default": "",
			"description": "The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).",
			"routing": {
				"send": {
					"property": "shopperReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Permit"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Permit"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Permit"
					]
				}
			}
		},
		{
			"displayName": "POST /disable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable"
					]
				}
			}
		},
		{
			"displayName": "Contract",
			"name": "contract",
			"type": "string",
			"default": "",
			"description": "Specify the contract if you only want to disable a specific use.\n\nThis field can be set to one of the following values, or to their combination (comma-separated):\n* ONECLICK\n* RECURRING\n* PAYOUT",
			"routing": {
				"send": {
					"property": "contract",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account identifier with which you want to process the transaction.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable"
					]
				}
			}
		},
		{
			"displayName": "Recurring Detail Reference",
			"name": "recurringDetailReference",
			"type": "string",
			"default": "",
			"description": "The ID that uniquely identifies the recurring detail reference.\n\nIf it is not provided, the whole recurring contract of the `shopperReference` will be disabled, which includes all recurring details.",
			"routing": {
				"send": {
					"property": "recurringDetailReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shopper Reference",
			"name": "shopperReference",
			"type": "string",
			"default": "",
			"description": "The ID that uniquely identifies the shopper.\n\nThis `shopperReference` must be the same as the `shopperReference` used in the initial payment.",
			"routing": {
				"send": {
					"property": "shopperReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable"
					]
				}
			}
		},
		{
			"displayName": "POST /disablePermit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable Permit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account identifier, with which you want to process the transaction.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable Permit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"description": "The permit token to disable.",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable Permit"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable Permit"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Disable Permit"
					]
				}
			}
		},
		{
			"displayName": "POST /listRecurringDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post List Recurring Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account identifier you want to process the (transaction) request with.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post List Recurring Details"
					]
				}
			}
		},
		{
			"displayName": "Recurring",
			"name": "recurring",
			"type": "json",
			"default": "{}",
			"description": "A container for the type of a recurring contract to be retrieved.\n\nThe contract value needs to match the contract value submitted in the payment transaction used to create a recurring contract.\nHowever, if `ONECLICK,RECURRING` is the original contract definition in the initial payment, then `contract` should take either `ONECLICK` or `RECURRING`, depending on whether or not you want the shopper to enter their card's security code when they finalize their purchase.",
			"routing": {
				"send": {
					"property": "recurring",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post List Recurring Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shopper Reference",
			"name": "shopperReference",
			"type": "string",
			"default": "",
			"description": "The reference you use to uniquely identify the shopper (e.g. user ID or account ID).",
			"routing": {
				"send": {
					"property": "shopperReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post List Recurring Details"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post List Recurring Details"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post List Recurring Details"
					]
				}
			}
		},
		{
			"displayName": "POST /notifyShopper",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount",
			"name": "amount",
			"type": "json",
			"default": "{}",
			"description": "The amount of the upcoming payment.",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"displayName": "Billing Date",
			"name": "billingDate",
			"type": "string",
			"default": "",
			"description": "Date on which the subscription amount will be debited from the shopper. In YYYY-MM-DD format",
			"routing": {
				"send": {
					"property": "billingDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"displayName": "Billing Sequence Number",
			"name": "billingSequenceNumber",
			"type": "string",
			"default": "",
			"description": "Sequence of the debit. Depends on Frequency and Billing Attempts Rule.",
			"routing": {
				"send": {
					"property": "billingSequenceNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"displayName": "Displayed Reference",
			"name": "displayedReference",
			"type": "string",
			"default": "",
			"description": "Reference of Pre-debit notification that is displayed to the shopper. Optional field. Maps to reference if missing",
			"routing": {
				"send": {
					"property": "displayedReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "The merchant account identifier with which you want to process the transaction.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"displayName": "Recurring Detail Reference",
			"name": "recurringDetailReference",
			"type": "string",
			"default": "",
			"description": "This is the `recurringDetailReference` returned in the response when you created the token.",
			"routing": {
				"send": {
					"property": "recurringDetailReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Pre-debit notification reference sent by the merchant. This is a mandatory field",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shopper Reference",
			"name": "shopperReference",
			"type": "string",
			"default": "",
			"description": "The ID that uniquely identifies the shopper.\n\nThis `shopperReference` must be the same as the `shopperReference` used in the initial payment.",
			"routing": {
				"send": {
					"property": "shopperReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"displayName": "Stored Payment Method Id",
			"name": "storedPaymentMethodId",
			"type": "string",
			"default": "",
			"description": "This is the `recurringDetailReference` returned in the response when you created the token.",
			"routing": {
				"send": {
					"property": "storedPaymentMethodId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Notify Shopper"
					]
				}
			}
		},
		{
			"displayName": "POST /scheduleAccountUpdater",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Schedule Account Updater"
					]
				}
			}
		},
		{
			"displayName": "Additional Data",
			"name": "additionalData",
			"type": "json",
			"default": "{}",
			"description": "This field contains additional data, which may be required for a particular request.",
			"routing": {
				"send": {
					"property": "additionalData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Schedule Account Updater"
					]
				}
			}
		},
		{
			"displayName": "Card",
			"name": "card",
			"type": "json",
			"default": "{}",
			"description": "Credit card data.\n\nOptional if `shopperReference` and `selectedRecurringDetailReference` are provided.",
			"routing": {
				"send": {
					"property": "card",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Schedule Account Updater"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "Account of the merchant.",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Schedule Account Updater"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "A reference that merchants can apply for the call.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Schedule Account Updater"
					]
				}
			}
		},
		{
			"displayName": "Selected Recurring Detail Reference",
			"name": "selectedRecurringDetailReference",
			"type": "string",
			"default": "",
			"description": "The selected detail recurring reference.\n\nOptional if `card` is provided.",
			"routing": {
				"send": {
					"property": "selectedRecurringDetailReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Schedule Account Updater"
					]
				}
			}
		},
		{
			"displayName": "Shopper Reference",
			"name": "shopperReference",
			"type": "string",
			"default": "",
			"description": "The reference of the shopper that owns the recurring contract.\n\nOptional if `card` is provided.",
			"routing": {
				"send": {
					"property": "shopperReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Schedule Account Updater"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Schedule Account Updater"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Schedule Account Updater"
					]
				}
			}
		},
];
