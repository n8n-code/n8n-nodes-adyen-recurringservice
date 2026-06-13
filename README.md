# @n8n-dev/n8n-nodes-adyen-recurringservice

![adyen-recurringservice Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-adyen-recurringservice.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-adyen-recurringservice)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing adyen-recurringservice API integrations by hand.**

Every time you connect n8n to adyen-recurringservice, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to adyen-recurringservice took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **General**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-adyen-recurringservice
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-adyen-recurringservice`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **adyen-recurringservice API** → paste your API key
3. Drag the **adyen-recurringservice** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>General</b> (6 operations)</summary>

- Post Create new permits linked to a recurring contract
- Post Disable stored payment details
- Post Disable an existing permit
- Post Get stored payment details
- Post Ask issuer to notify the shopper
- Post Schedule running the Account Updater

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from adyen-recurringservice docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official adyen-recurringservice OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **adyen-recurringservice** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the adyen-recurringservice API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
