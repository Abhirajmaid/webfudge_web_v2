import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

const DEFAULT_OG_IMAGE = "/opengraph-image.png";

export const SEO_DEFAULTS = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  tagline: SITE_TAGLINE,
  image: DEFAULT_OG_IMAGE,
};

function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, SITE_URL).toString();
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const url = absoluteUrl(path);
  const resolvedTitle = title || SITE_NAME;
  const resolvedDescription = description || SITE_DESCRIPTION;
  const resolvedImage = image || DEFAULT_OG_IMAGE;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [resolvedImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : undefined,
  };
}

export function buildSiteSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/logo_packages/safari-pinned-tab.svg"),
      email: "contact@webfudge.in",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-73853-02967",
          contactType: "sales",
          areaServed: ["IN", "US", "AE"],
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://www.instagram.com/webfudge",
        "https://www.linkedin.com/company/webfudge/",
        "https://www.behance.net/webfudge",
        "https://dribbble.com/Webfudge",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
  ];
}
