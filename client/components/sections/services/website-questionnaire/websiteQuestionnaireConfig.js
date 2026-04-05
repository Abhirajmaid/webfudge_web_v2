import { SITE_URL } from "@/lib/constants";

export const WEBSITE_QUESTIONNAIRE_PATH = "/services/website/questionnaire";

export function getWebsiteQuestionnaireCanonicalUrl() {
  const base = (SITE_URL || "https://webfudge.in").replace(/\/$/, "");
  return `${base}${WEBSITE_QUESTIONNAIRE_PATH}`;
}

export const STEPS = [
  { id: 1, title: "Basic Information", short: "Basics" },
  { id: 2, title: "Project Overview", short: "Project" },
  { id: 3, title: "Target Audience", short: "Audience" },
  { id: 4, title: "Pages & Sitemap", short: "Sitemap" },
  { id: 5, title: "Features & Functionalities", short: "Features" },
  { id: 6, title: "Design Direction", short: "Design" },
  { id: 7, title: "Content", short: "Content" },
  { id: 8, title: "Technology Preferences", short: "Tech" },
  { id: 9, title: "Integrations", short: "Integrations" },
  { id: 10, title: "SEO & Marketing", short: "SEO" },
  { id: 11, title: "Performance & Security", short: "Performance" },
  { id: 12, title: "Timeline & Budget", short: "Timeline" },
  { id: 13, title: "Maintenance & Support", short: "Support" },
  { id: 14, title: "Legal & Compliance", short: "Legal" },
  { id: 15, title: "Success Metrics", short: "Success" },
  { id: 16, title: "Additional Notes", short: "Notes" },
];

export const OPTIONS = {
  websiteTypes: [
    { id: "business_website", label: "Business website" },
    { id: "landing_page", label: "Landing page" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "saas_platform", label: "SaaS platform" },
    { id: "web_app_portal", label: "Web app / portal" },
  ],
  mainGoals: [
    { id: "lead_generation", label: "Lead generation" },
    { id: "sales_ecommerce", label: "Sales / e-commerce" },
    { id: "brand_awareness", label: "Brand awareness" },
    { id: "product_showcase", label: "Product showcase" },
    { id: "booking_appointments", label: "Booking / appointments" },
  ],
  requiredPages: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services_products", label: "Services / products" },
    { id: "contact", label: "Contact" },
    { id: "blog", label: "Blog" },
    { id: "landing_pages", label: "Landing pages" },
    { id: "dashboard_login", label: "Dashboard / login" },
  ],
  features: [
    { id: "contact_forms", label: "Contact forms" },
    { id: "lead_crm", label: "Lead capture / CRM integration" },
    { id: "payment_gateway", label: "Payment gateway (Razorpay / Stripe)" },
    { id: "user_login", label: "User login / dashboard" },
    { id: "booking_system", label: "Booking system" },
    { id: "chat", label: "Chat (WhatsApp / live chat)" },
    { id: "admin_panel", label: "Admin panel" },
    { id: "multi_language", label: "Multi-language" },
    { id: "api_integrations", label: "API integrations" },
  ],
  preferredStyle: [
    { id: "minimal", label: "Minimal" },
    { id: "corporate", label: "Corporate" },
    { id: "premium", label: "Premium" },
    { id: "bold", label: "Bold" },
    { id: "creative", label: "Creative" },
  ],
  contentProvide: [
    { id: "text", label: "Text" },
    { id: "images", label: "Images" },
    { id: "videos", label: "Videos" },
  ],
  contentServices: [
    { id: "copywriting", label: "Copywriting" },
    { id: "seo_content", label: "SEO content" },
  ],
  techNeeds: [
    { id: "cms", label: "CMS (Strapi / WordPress)" },
    { id: "custom_build", label: "Custom build (Next.js etc.)" },
    { id: "saas_platform", label: "SaaS platform" },
  ],
  runAds: [
    { id: "meta_ads", label: "Meta ads" },
    { id: "google_ads", label: "Google ads" },
  ],
  trackingSetup: [
    { id: "meta_pixel", label: "Meta Pixel" },
    { id: "google_analytics", label: "Google Analytics" },
    { id: "conversion_tracking", label: "Conversion tracking" },
  ],
  performanceNeeds: [
    { id: "high_speed", label: "High-speed optimization" },
    { id: "cdn", label: "CDN setup" },
    { id: "advanced_security", label: "Advanced security" },
  ],
  successMetrics: [
    { id: "leads_generated", label: "Leads generated" },
    { id: "sales", label: "Sales" },
    { id: "traffic", label: "Traffic" },
    { id: "conversion_rate", label: "Conversion rate" },
  ],
};
