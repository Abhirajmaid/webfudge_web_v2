import Groq from "groq-sdk";
import { buildBrandingUserPrompt, buildWebsiteUserPrompt } from "./prompts";

const DEFAULT_MODEL = "openai/gpt-oss-safeguard-20b";

/**
 * @param {Record<string, unknown>} data
 * @param {"website" | "branding"} proposalType
 */
export async function generateProposalText(data, proposalType) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured");
  }

  const groq = new Groq({ apiKey });
  const model = process.env.GROQ_MODEL || DEFAULT_MODEL;

  const userContent =
    proposalType === "branding"
      ? buildBrandingUserPrompt(data)
      : buildWebsiteUserPrompt(data);

  const response = await groq.chat.completions.create({
    model,
    messages: [
      {
        role: "system",
        content:
          "You are a premium web agency generating structured proposals.",
      },
      {
        role: "user",
        content: userContent,
      },
    ],
    temperature: 0.65,
    max_tokens: 8192,
  });

  const proposalText = response.choices[0]?.message?.content;
  if (!proposalText?.trim()) {
    throw new Error("Empty proposal from AI");
  }

  return proposalText.trim();
}
