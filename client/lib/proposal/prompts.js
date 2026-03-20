/** @param {Record<string, unknown>} data */
export function buildWebsiteUserPrompt(data) {
  const ecommerce =
    Array.isArray(data.websiteTypes) && data.websiteTypes.includes("ecommerce");

  return `Client questionnaire data (use deeply — no generic filler; premium tone; all prices in INR with ₹ symbol):

\`\`\`json
${JSON.stringify(data, null, 2)}
\`\`\`

E-commerce mode: ${ecommerce ? "YES — Dynamic System bullets = E-Commerce System focus" : "NO — Dynamic System bullets = general Website System focus"}.

Generate the proposal as Markdown ONLY. Follow this structure EXACTLY — same headings in the same order, every section present, no merging:

# Website Development Proposal

## About Webfudge
(2–3 premium paragraphs about the agency Webfudge)

## Project Objective
* (5–6 bullets grounded in the client data)

## Scope of Work
* (bullets)

## Website Features & Deliverables

### Premium UI/UX Design
* Explanation and bullets
* Deliverables as bullets

### Dynamic System
* If e-commerce (see flag above): bullets must describe an **E-Commerce System** (catalog, checkout, orders). Else: bullets describe a **Website System** (dynamic pages, lead gen, etc.). Keep heading exactly "### Dynamic System".

### CMS
* Bullets (tie to client CMS / content needs)

### Payment Integration
* Bullets (only omit if clearly N/A; otherwise explain approach)

### Third-party Integrations
* Bullets (CRM, email, analytics, etc. from client data)

### SEO Structure
* Bullets

### Conversion Optimization
* Bullets

## Estimated Website Structure
* Page list as bullets (from requiredPages, customPages, goals)

## Technology Stack
* Next.js, Tailwind, CMS choice, hosting — each with WHY (short)

## Project Timeline
* Week-wise breakdown as bullets

## Price Breakdown
* Line items with INR (₹) pricing
* **TOTAL** line in INR

## What is Included
* Bullets

## What is Not Included
* Bullets

## Payment Terms
* 50% advance
* 50% before launch
* (any short clarification bullets if needed)

## Responsibilities

### Webfudge Responsibilities
* Bullets

### Client Responsibilities
* Bullets

## Next Steps
1. Approval
2. Payment
3. Kickoff
4. Execution

## Closing
Regards,
Webfudge

STRICT RULES:
* DO NOT skip any section
* DO NOT merge sections
* ALWAYS use the headings shown (Markdown ## and ###)
* ALWAYS use bullet points inside sections where shown
* DO NOT write generic text — tie every section to the JSON answers
* KEEP tone premium and concise
* USE INR pricing (₹)
* AVOID repetition
* KEEP formatting clean`;
}

/** @param {Record<string, unknown>} data */
export function buildBrandingUserPrompt(data) {
  return `Client branding questionnaire data (use deeply — no generic filler; premium tone; all prices in INR with ₹ symbol):

\`\`\`json
${JSON.stringify(data, null, 2)}
\`\`\`

Generate the proposal as Markdown ONLY. Follow this structure EXACTLY — same headings in the same order, every section present, no merging:

# Brand Identity Proposal

## About Webfudge
(2–3 premium paragraphs about Webfudge as a brand studio)

## Project Objective
* (5–6 bullets from business goals, audience, differentiation)

## Scope of Work
* Bullets

## Brand Strategy & Positioning

### Audience & messaging
* Bullets

### Competitive context
* Bullets (from competitor fields)

## Visual Direction

### Logo & brand mark
* Bullets (formats, usage, ideas from client)

### Color system
* Bullets

### Typography
* Bullets

## Deliverables
* Bullets (map to deliverables checklist and logo usage)

## Project Timeline
* Week-wise bullets

## Price Breakdown
* INR (₹) line items
* **TOTAL** in INR

## What is Included
* Bullets

## What is Not Included
* Bullets

## Payment Terms
* 50% advance
* 50% before final handoff

## Responsibilities

### Webfudge Responsibilities
* Bullets

### Client Responsibilities
* Bullets

## Next Steps
1. Approval
2. Payment
3. Kickoff
4. Execution

## Closing
Regards,
Webfudge

STRICT RULES:
* DO NOT skip any section
* DO NOT merge sections
* ALWAYS use headings (## and ###)
* ALWAYS use bullet points
* USE client data deeply
* Premium tone, INR (₹), no repetition`;
}
