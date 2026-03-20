import { marked } from "marked";

/**
 * @param {string} proposalText Markdown from the model
 * @param {"website" | "branding"} [proposalType]
 */
export async function buildHTML(proposalText, proposalType = "website") {
  marked.setOptions({ gfm: true });

  const bodyHtml = await marked.parse(proposalText);

  const title =
    proposalType === "branding"
      ? "Brand Identity Proposal — Webfudge"
      : "Website Development Proposal — Webfudge";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.55;
      color: #171717;
      background: #fff;
    }
    .doc {
      max-width: 720px;
      margin: 0 auto;
      padding: 8mm 12mm 16mm;
    }
    .wf-header {
      border-bottom: 2px solid #171717;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
    }
    .wf-header strong {
      font-size: 18pt;
      letter-spacing: 0.02em;
    }
    .wf-header span {
      font-size: 9pt;
      color: #525252;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }
    .content h1 {
      font-size: 20pt;
      font-weight: 700;
      margin: 24px 0 12px;
      line-height: 1.2;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 8px;
    }
    .content h2 {
      font-size: 13pt;
      font-weight: 700;
      margin: 20px 0 8px;
      color: #171717;
    }
    .content h3 {
      font-size: 11pt;
      font-weight: 700;
      margin: 14px 0 6px;
      color: #262626;
    }
    .content p { margin: 0 0 10px; }
    .content ul, .content ol {
      margin: 0 0 12px;
      padding-left: 1.25rem;
    }
    .content li { margin: 4px 0; }
    .content li::marker { color: #404040; }
    .content strong { font-weight: 600; }
    .content hr { border: none; border-top: 1px solid #e5e5e5; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="doc">
    <header class="wf-header">
      <strong>Webfudge</strong>
      <span>Proposal</span>
    </header>
    <main class="content">
      ${bodyHtml}
    </main>
  </div>
</body>
</html>`;
}
