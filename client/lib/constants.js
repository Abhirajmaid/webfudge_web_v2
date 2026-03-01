export const SITE_NAME = "Webfudge";
export const SITE_TAGLINE = "Build Brand Fast!";
export const SITE_DESCRIPTION =
  "WebFudge is a premium full-stack agency crafting high-performance websites, web apps, and digital strategies for ambitious brands.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://webfudge.in";

// Navigation links — used in Navbar (desktop + mobile) and MobileMenu
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", arrow: true },
  { label: "Case Studies", href: "/case-studies" },
  // { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/blogs", arrow: true },
];

// Structured services menu used in the mega/fullscreen menu
export const SERVICES_MENU = [
  {
    title: "Graphic & Creative Design",
    desc: "Visual assets, marketing creatives, social banners and campaign visuals.",
    image: "/images/dumy.png",
    bg: "bg-[#ECFBA9]",
    icon: "https://cdn.lordicon.com/exymduqj.json",
    iconState: "hover-line",
    tags: [
      "Graphic Design",
      "Marketing Creatives",
      "Social & Ad Assets",
      "Print & Digital Collateral",
      "Banner Design",
    ],
  },
  {
    title: "Brand Identity Design",
    desc: "Complete brand systems that build recognition and trust across touchpoints.",
    bg: "bg-[#f7f8f4]",
    image: "/images/dumy.png",
    icon: "https://cdn.lordicon.com/lewtedlh.json",
    tags: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Naming & Positioning",
    ],
  },
  {
    title: "UI/UX Design",
    desc: "User-focused product and interface design for web and native apps.",
    bg: "bg-[#F9F871]",
    image: "/images/dumy.png",
    icon: "https://cdn.lordicon.com/ijsqrapz.json",
    tags: [
      "Product UX",
      "Interaction Design",
      "Wireframing",
      "Prototyping (Figma)",
      "Design Systems",
      "User Research",
    ],
  },
  {
    title: "Website & Landing Page Development",
    desc: "High-converting responsive websites and landing pages optimized for performance.",
    bg: "bg-[#67E5C9]",
    image: "/images/dumy.png",
    icon: "https://cdn.lordicon.com/rpviwvwn.json",
    iconState: "hover-rotate-up-to-down",
    tags: [
      "Responsive Web",
      "Landing Pages",
      "Conversion Optimization",
      "Accessibility",
      "Performance Tuning",
    ],
  },
  {
    title: "Pitch Deck & Corporate Decks",
    desc: "Custom investor and corporate decks designed to communicate value clearly.",
    bg: "bg-[#F9BA71]",
    image: "/images/dumy.png",
    icon: "https://cdn.lordicon.com/lbcxnxti.json",
    tags: [
      "Pitch Deck Design",
      "Investor Decks",
      "Corporate Presentations",
      "Data Visualisation",
      "Speaker Notes",
    ],
  },
  {
    title: "E-commerce Development",
    desc: "End-to-end store builds with payment, inventory and conversion-first UX.",
    bg: "bg-[#E8F4E6]",
    image: "/images/dumy.png",
    icon: "https://cdn.lordicon.com/uisoczqi.json",
    tags: [
      "Shopify & Headless",
      "Storefront Design",
      "Payment Integration",
      "Checkout Optimization",
      "Subscriptions & Cart Flows",
    ],
  },


];

// Social links
export const SOCIAL_LINKS = [
  { label: "Behance", href: "https://www.behance.net/webfudge", icon: "behance" },
  { label: "Instagram", href: "https://www.instagram.com/webfudge", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/webfudge/", icon: "linkedin" },
  { label: "Pinterest", href: "https://in.pinterest.com/webfudge/", icon: "pinterest" },
  { label: "Dribbble", href: "https://dribbble.com/Webfudge", icon: "dribbble" },
];

// Footer columns
export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "/services#design" },
      { label: "Development", href: "/services#development" },
      { label: "SEO & Growth", href: "/services#seo" },
      { label: "Consulting", href: "/services#consulting" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing", href: "/pricing" },
      { label: "Process", href: "/about#process" },
      { label: "FAQ", href: "/about#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Prabhash Rao Balla",
    role: "CEO, Plantozone",
    image: "/images/ClientLogos/6.png",
    reviewText:
      "The Webfudge team brought our plant brand to life with fresh, vibrant visuals and a beautiful website. Their ability to understand our vibe and translate it into design and content was impressive. They're creative, reliable, and always on point!",
  },
  {
    id: 2,
    name: "Pratik Agrawal",
    role: "Founder, PA Associates",
    image: "/images/ClientLogos/5.png",
    reviewText:
      "Webfudge helped us redefine our brand identity with a clean and professional look. From designing our letterheads to delivering a sleek digital presence, their work was sharp, strategic, and delivered on time.",
  },
  {
    id: 3,
    name: "Aditya Mali",
    role: "Operations Head, Netgarage",
    image: "/images/ClientLogos/4.png",
    reviewText:
      "We collaborated with Webfudge to build a superbike resale platform and they absolutely nailed it. The design feels premium, the user experience is smooth, and their backend integration was flawless. Highly recommended for startups!",
  },
  {
    id: 5,
    name: "Arti Saklani",
    role: "Director, Xtrawrkx",
    image: "/images/ClientLogos/11.png",
    reviewText:
      "Webfudge played a key role in the success of our XSOS event. Their creative designs for event collateral, social media content, and branding truly elevated the experience. Their attention to detail and understanding of our event theme made all the difference in creating an impactful presence.",
  },
  {
    id: 6,
    name: "Jyoti Sahoo",
    role: "Founder, Fluxx",
    image: "/images/ClientLogos/12.png",
    reviewText:
      "Webfudge delivered exceptional UI/UX designs and frontend development for Fluxx Electric. Fast, creative, and on point with our brand needs!",
  },
  {
    id: 7,
    name: "Hiten Munnot",
    role: "Co-Founder, Sahayata",
    image: "/images/ClientLogos/8.png",
    reviewText:
      "We loved the new logo and the thoughtful website concept. The design truly reflects our mission and gives us a stronger identity online. The team captured our values beautifully.",
  },
];

// Alias for components that expect TESTIMONIALS shape (quote, title, avatar)
export const TESTIMONIALS = testimonials.map(({ id, name, role, image, reviewText }) => ({
  id,
  name,
  title: role,
  quote: reviewText,
  avatar: image,
}));

// Pricing plans
export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 2499,
    period: "project",
    description: "Perfect for startups and small businesses needing a polished online presence.",
    featured: false,
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "2 revision rounds",
      "30-day support",
    ],
    cta: "Get Started",
    href: "/contact?plan=starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: 5999,
    period: "project",
    description: "For growing companies that need a high-performance site with custom functionality.",
    featured: true,
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "CMS integration",
      "Performance optimization",
      "Advanced SEO setup",
      "Analytics dashboard",
      "4 revision rounds",
      "60-day support",
    ],
    cta: "Most Popular",
    href: "/contact?plan=growth",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    period: "custom",
    description: "Fully bespoke solutions for large organizations with complex requirements.",
    featured: false,
    features: [
      "Unlimited pages",
      "Custom web application",
      "Dedicated project team",
      "API & third-party integrations",
      "E-commerce & payments",
      "Ongoing retainer options",
      "Priority support SLA",
      "Quarterly strategy reviews",
    ],
    cta: "Let's Talk",
    href: "/contact?plan=enterprise",
  },
];

// FAQ items
export const faqs = [
  {
    id: 1,
    question: "What services does Webfudge offer?",
    response:
      "Webfudge offers a full suite of creative and digital services including brand identity design, website development, UI/UX design, social media management, and digital strategy tailored to help your brand grow online.",
  },
  {
    id: 2,
    question: "How does Webfudge approach a new project?",
    response:
      "Every project starts with understanding your goals and audience. We conduct in-depth research, create custom strategies, and design user-focused solutions that are visually compelling and performance-driven.",
  },
  {
    id: 3,
    question: "Can Webfudge handle both design and development?",
    response:
      "Absolutely! Webfudge specializes in both. From building pixel-perfect UI/UX designs to developing responsive, high-performing websites and apps, we manage the entire process in-house.",
  },
  {
    id: 4,
    question: "How do you help brands grow on social media?",
    response:
      "Our social media team creates customized content strategies, designs engaging visuals, and optimizes your brand's online presence across platforms to ensure consistent growth and community engagement.",
  },
  {
    id: 5,
    question: "What's included in Webfudge Premium?",
    response:
      "Webfudge Premium gives you priority access to our expert team, faster turnaround times, monthly performance reports, and a dedicated account manager to ensure your brand scales efficiently across all digital channels.",
  },
];

// FAQ_ITEMS: shape expected by FAQ component (question, answer)
export const FAQ_ITEMS = faqs.map(({ question, response }) => ({
  question,
  answer: response,
}));

// Logo paths from /images/ClientLogos/
export const CLIENT_LOGOS = [
  { name: "Abshan", logo: "/images/ClientLogos/1.png" },
  // { name: "Area37", logo: "/images/ClientLogos/2.png" },
  { name: "MMJ", logo: "/images/ClientLogos/3.png" },
  { name: "Netgarages", logo: "/images/ClientLogos/4.png" },
  { name: "PA Associates", logo: "/images/ClientLogos/5.png" },
  { name: "Plantozone", logo: "/images/ClientLogos/6.png" },
  { name: "RK Chai", logo: "/images/ClientLogos/7.png" },
  { name: "Sahayata", logo: "/images/ClientLogos/8.png" },
  // { name: "Vasileios", logo: "/images/ClientLogos/9.png" },
  // { name: "Vedant Construction", logo: "/images/ClientLogos/10.png" },
  { name: "Xtrawrkx", logo: "/images/ClientLogos/11.png" },
  // { name: "Fluxx", logo: "/images/ClientLogos/12.png" },
  { name: "EVI", logo: "/images/ClientLogos/13.png" },
  { name: "Evify", logo: "/images/ClientLogos/14.jpg" },
  { name: "Greenways Mobility", logo: "/images/ClientLogos/15.png" },
  // { name: "ScaleBait", logo: "/images/ClientLogos/16.png" },
  // { name: "Swanthana", logo: "/images/ClientLogos/17.png" },
  { name: "XSOS (Summit on Summits)", logo: "/images/ClientLogos/18.png" },
  { name: "PositiEV", logo: "/images/ClientLogos/19.png" },
  { name: "URB Insurance", logo: "/images/ClientLogos/20.png" },
];
