import { SITE_URL } from "@/lib/constants";

/** Canonical URL path for sharing (full-page questionnaire). */
export const QUESTIONNAIRE_PATH = "/services/branding/questionnaire";

/** Production share link (uses `NEXT_PUBLIC_SITE_URL`, never `localhost`). */
export function getQuestionnaireCanonicalUrl() {
  const base = (SITE_URL || "https://webfudge.in").replace(/\/$/, "");
  return `${base}${QUESTIONNAIRE_PATH}`;
}

export const STEPS = [
  { id: 1, title: "Basic Information", short: "Basics" },
  { id: 2, title: "Business Overview", short: "Overview" },
  { id: 3, title: "Target Audience", short: "Audience" },
  { id: 4, title: "Brand Personality", short: "Personality" },
  { id: 5, title: "Brand Vision & Goals", short: "Vision" },
  { id: 6, title: "Competitor Analysis", short: "Competitors" },
  { id: 7, title: "Logo Preferences", short: "Logo" },
  { id: 8, title: "Design Style Direction", short: "Style" },
  { id: 9, title: "Color Preferences", short: "Colors" },
  { id: 10, title: "Typography Preferences", short: "Type" },
  { id: 11, title: "Inspiration", short: "Inspiration" },
  { id: 12, title: "Usage of Logo", short: "Usage" },
  { id: 13, title: "Deliverables Required", short: "Deliverables" },
  { id: 14, title: "Timeline & Budget", short: "Timeline" },
  { id: 15, title: "Additional Notes", short: "Notes" },
];

export const OPTIONS = {
  brandPersonality: [
    { id: "premium_luxury", label: "Premium / Luxury" },
    { id: "modern_minimal", label: "Modern / Minimal" },
    { id: "bold_aggressive", label: "Bold / Aggressive" },
    { id: "friendly_approachable", label: "Friendly / Approachable" },
    { id: "corporate_professional", label: "Corporate / Professional" },
    { id: "playful_creative", label: "Playful / Creative" },
    { id: "traditional_heritage", label: "Traditional / Heritage" },
  ],
  brandGoals: [
    { id: "new_brand_launch", label: "New brand launch" },
    { id: "rebranding", label: "Rebranding" },
    { id: "improve_perception", label: "Improve perception" },
    { id: "target_new_audience", label: "Target new audience" },
  ],
  logoFormats: [
    { id: "wordmark", label: "Wordmark" },
    { id: "lettermark", label: "Lettermark" },
    { id: "icon_symbol", label: "Icon / Symbol" },
    { id: "combination", label: "Combination" },
    { id: "emblem", label: "Emblem" },
  ],
  designStyles: [
    { id: "minimal", label: "Minimal" },
    { id: "bold", label: "Bold" },
    { id: "elegant", label: "Elegant" },
    { id: "geometric", label: "Geometric" },
    { id: "organic", label: "Organic" },
    { id: "futuristic", label: "Futuristic" },
    { id: "vintage", label: "Vintage" },
  ],
  typography: [
    { id: "serif", label: "Serif" },
    { id: "sans_serif", label: "Sans-serif" },
    { id: "script", label: "Script" },
    { id: "custom", label: "Custom" },
  ],
  logoUsage: [
    { id: "website", label: "Website" },
    { id: "social_media", label: "Social Media" },
    { id: "packaging", label: "Packaging" },
    { id: "signage", label: "Signage" },
    { id: "ads", label: "Ads" },
    { id: "app", label: "App" },
  ],
  deliverables: [
    { id: "logo_design", label: "Logo design" },
    { id: "brand_guidelines", label: "Brand guidelines" },
    { id: "social_media_kit", label: "Social media kit" },
    { id: "stationery", label: "Stationery" },
    { id: "packaging_design", label: "Packaging design" },
  ],
};
