// ============================================================================
// ENTERPRISE CONTENT ECOSYSTEM DATA & COPYWRITING ARCHITECTURE
// E-E-A-T, AIDA / PAS / BAB COPYWRITING, PERSONALIZATION & GOVERNANCE
// ============================================================================

export interface ContentGovernanceMeta {
  lastUpdated: string;
  contentOwner: string;
  reviewSchedule: string;
  revisionHistory: {
    version: string;
    date: string;
    author: string;
    changeSummary: string;
  }[];
}

export const GLOBAL_CONTENT_GOVERNANCE: ContentGovernanceMeta = {
  lastUpdated: "August 2026",
  contentOwner: "Digital Grower Ltd.",
  reviewSchedule: "Quarterly SEO, Schema & Factual Accuracy Audit (Next: Nov 2026)",
  revisionHistory: [
    {
      version: "v4.2.0-EEAT",
      date: "August 2, 2026",
      author: "Chief Technical Content Architect",
      changeSummary: "Integrated 22+ Industry landing page schemas, Question-First EEAT FAQs, and AIDA/PAS/BAB conversion frameworks."
    },
    {
      version: "v4.0.0-GEO",
      date: "July 15, 2026",
      author: "Generative Engine Optimization Team",
      changeSummary: "Enhanced zero-click AI snippet blocks and semantic entity graph co-occurrences."
    },
    {
      version: "v3.5.0-Core",
      date: "May 10, 2026",
      author: "Lead Technical SEO",
      changeSummary: "Expanded Core Web Vitals sub-2.5s LCP documentation and ISO 27001 security compliance trust badges."
    }
  ]
};

// --- E-E-A-T TRUST & CREDENTIALS ---
export const EEAT_TRUST_DATA = {
  companyOverview: {
    name: "Digital Grower Ltd. (DGL IT)",
    founded: "2018",
    headquarters: "Suite 4B, Rahman Plaza, Banani Commercial Area, Dhaka-1213, Bangladesh",
    globalOffices: ["Dhaka (Bangladesh)", "London (UK)", "Dubai (UAE)", "Delaware (USA)"],
    registration: "RJSC Bangladesh Reg. No. C-184920/2021 | DCCI Corporate Member",
    securityCertifications: ["ISO/IEC 27001:2022 Certified", "GDPR & CCPA Compliant", "WCAG 2.1 AA Accessibility Standard", "PCI-DSS Level 1 Partner"],
    clientStatistics: [
      { label: "Enterprise Projects Completed", value: "480+", icon: "Briefcase" },
      { label: "Client Retention Rate", value: "98.4%", icon: "HeartHandshake" },
      { label: "Average PageSpeed Score", value: "99/100", icon: "Zap" },
      { label: "Combined Organic Search Traffic Generated", value: "12.4M+", icon: "TrendingUp" }
    ]
  },
  serviceMethodology: [
    {
      step: "01",
      title: "Technical Discovery & Entity Architecture",
      description: "We audit existing digital infrastructure, Core Web Vitals, semantic entity relationships, and operational bottlenecks before writing a single line of code."
    },
    {
      step: "02",
      title: "Agile CI/CD Engineering & Responsive UI/UX",
      description: "Our full-stack engineers develop bespoke React, Next.js, and Laravel applications with zero plugin bloat and strict ACID database compliance."
    },
    {
      step: "03",
      title: "15-Point Schema.org & GEO Knowledge Graph",
      description: "We embed structured JSON-LD graphs and Question-First answer summaries to guarantee direct citations in Google AI Overviews and ChatGPT Search."
    },
    {
      step: "04",
      title: "Zero-Downtime Launch & Continuous SLA Support",
      description: "We deploy on AWS or Cloudflare CDN edge networks with 24/7 proactive telemetry monitoring, automated backups, and quarterly SEO re-audits."
    }
  ],
  policies: [
    {
      title: "Privacy & GDPR Data Policy",
      summary: "We never sell, rent, or distribute client data. All corporate data is encrypted at rest (AES-256) and in transit (TLS 1.3).",
      link: "/#contact"
    },
    {
      title: "Terms & Enterprise SLAs",
      summary: "99.9% uptime Service Level Agreements (SLA) with guaranteed 15-minute emergency engineering response times.",
      link: "/#contact"
    },
    {
      title: "Transparent Project & Refund Governance",
      summary: "Milestone-based billing with full code ownership transfer upon completion and documented satisfaction guarantees.",
      link: "/#contact"
    }
  ]
};

// --- COPYWRITING FRAMEWORKS (AIDA, PAS, BAB, STORYTELLING) ---
export interface CopywritingFramework {
  id: string;
  name: string;
  tagline: string;
  sections: {
    label: string;
    title: string;
    content: string;
  }[];
}

export const COPYWRITING_FRAMEWORKS: CopywritingFramework[] = [
  {
    id: "aida",
    name: "AIDA Framework (Attention → Interest → Desire → Action)",
    tagline: "Designed to capture executive attention and demonstrate clear ROI.",
    sections: [
      {
        label: "Attention",
        title: "Your Enterprise Website Is Either Generating Revenue or Leaking Customers to Competitors.",
        content: "In 2026, 84% of B2B buyers and consumers evaluate corporate credibility through page speed, AI search visibility, and UX clarity before ever contacting a sales team."
      },
      {
        label: "Interest",
        title: "Why Generic WordPress Themes and Unstructured Websites Are Failing.",
        content: "Traditional templates load in over 5 seconds, fail Core Web Vitals, and are invisible to AI answer engines like Google AI Overview, ChatGPT Search, and Gemini."
      },
      {
        label: "Desire",
        title: "Bespoke Engineering That Delivers Sub-2.5s LCP and Zero-Click AI Citations.",
        content: "Digital Grower Ltd. engineers custom web, software, and SEO architectures with 100% bespoke code, 15-point Schema.org JSON-LD graphs, and ACID-compliant databases that scale without recurring per-seat SaaS fees."
      },
      {
        label: "Action",
        title: "Schedule Your Comprehensive Architectural Audit Today.",
        content: "Join over 480+ enterprises across Bangladesh, the US, UK, and UAE who have transformed their digital infrastructure. Get a free technical scoping roadmap within 24 hours."
      }
    ]
  },
  {
    id: "pas",
    name: "PAS Framework (Problem → Agitation → Solution)",
    tagline: "Addresses real operational risks and provides an empirical engineering resolution.",
    sections: [
      {
        label: "Problem",
        title: "Disconnected Spreadsheet Silos and Slow, Unsecured Digital Portals.",
        content: "When accounting, inventory, and marketing operate on disconnected systems or slow websites, customer data is lost, employees waste hours on manual entry, and Google penalizes your search rankings."
      },
      {
        label: "Agitation",
        title: "Every Second of Delay Costs Your Brand 7% in Lost Conversions and Search Authority.",
        content: "As Google updates its core algorithms and users switch to AI search assistants, slow, unstructured websites are permanently dropped from top organic results and AI answer summaries."
      },
      {
        label: "Solution",
        title: "Unified Cloud ERP & Semantic SEO Knowledge Graphs by Digital Grower Ltd.",
        content: "We replace fragmented tools with custom-engineered software and high-speed web portals. One unified database, zero plugin bloat, 99/100 PageSpeed scores, and guaranteed topical E-E-A-T authority."
      }
    ]
  },
  {
    id: "bab",
    name: "BAB Framework (Before → After → Bridge)",
    tagline: "Illustrates the transformational journey from legacy bottlenecks to digital leadership.",
    sections: [
      {
        label: "Before",
        title: "Struggling with 6-Second Page Loads, Plugin Crashes, and Page-3 Google Rankings.",
        content: "Your marketing team works tirelessly, but your website's technical debt and lack of structured schema prevent your brand from ranking for high-value commercial keywords."
      },
      {
        label: "After",
        title: "Instant Sub-2 Second Loading, #1 Organic SERP Rankings, and Daily Inbound Leads.",
        content: "Imagine an enterprise portal that loads instantly across mobile networks, appears directly in Google AI Overviews, and automatically routes verified customer inquiries to your CRM."
      },
      {
        label: "Bridge",
        title: "The Digital Grower Ltd. Enterprise Architecture Framework.",
        content: "We bridge the gap by combining custom React/Next.js frontend engineering, Laravel/Node.js microservices, and 15-point Schema.org JSON-LD injection into a single, scalable corporate asset."
      }
    ]
  }
];

// --- CONTENT PERSONALIZATION (MESSAGING ADAPTERS) ---
export interface PersonalizationProfile {
  segment: "startups" | "small-businesses" | "medium-businesses" | "enterprise-companies" | "local-businesses" | "international-clients";
  label: string;
  badge: string;
  headline: string;
  subheadline: string;
  primaryValueProp: string;
  recommendedSolutions: string[];
  ctaLabel: string;
}

export const PERSONALIZATION_PROFILES: PersonalizationProfile[] = [
  {
    segment: "startups",
    label: "Startups & Tech Founders",
    badge: "Investor-Ready Velocity",
    headline: "Launch Scalable MVPs & Investor-Ready Web Applications in Weeks, Not Years.",
    subheadline: "We engineer custom React & Node.js MVPs with clean architecture, zero technical debt, and built-in analytics to help you secure Series-A funding.",
    primaryValueProp: "100% IP ownership, rapid 4-week Agile sprints, and zero vendor lock-in.",
    recommendedSolutions: ["Custom MVP Web Application Build", "Investor Analytics BI Dashboard", "Growth-Hacking SEO & Referral Funnel"],
    ctaLabel: "Schedule Startup MVP Scoping"
  },
  {
    segment: "small-businesses",
    label: "Small Businesses & SMEs",
    badge: "High-ROI Growth",
    headline: "Turn Local Searchers Into Daily Paying Customers Without Expensive Ad Spend.",
    subheadline: "Get a high-speed, mobile-first website combined with Google Business Profile top-3 Local SEO ranking and WhatsApp automated lead capture.",
    primaryValueProp: "Affordable flat-rate engineering with lifetime technical reliability.",
    recommendedSolutions: ["High-Converting Local Lead Website", "Google Maps Top-3 Pack SEO", "WhatsApp Instant Lead Capture Integration"],
    ctaLabel: "Claim Free Small Business SEO Audit"
  },
  {
    segment: "medium-businesses",
    label: "Medium Businesses",
    badge: "Scale & Automation",
    headline: "Eliminate Manual Workflows & Scale Multi-Channel Revenue With Custom ERPs.",
    subheadline: "Connect your inventory, sales, and accounting into one ACID-compliant database while scaling Google Ads and SEO across national markets.",
    primaryValueProp: "Cut operational overhead by 40% and unify corporate data silos.",
    recommendedSolutions: ["Custom ERP & Inventory Automation", "Topical Authority SEO Hubs", "Multi-Channel PPC Ad Scaling"],
    ctaLabel: "Request Custom Automation Proposal"
  },
  {
    segment: "enterprise-companies",
    label: "Enterprise Companies",
    badge: "Institutional Authority",
    headline: "Mission-Critical Custom Software, Multi-Region Web Portals & AI Search Authority.",
    subheadline: "We engineer ISO-compliant, multi-lingual corporate platforms with sub-2.5s Core Web Vitals, zero-trust cloud security, and 15-point Schema.org graphs.",
    primaryValueProp: "99.9% uptime SLA, enterprise RBAC security, and direct AI Overview citations.",
    recommendedSolutions: ["Enterprise Custom Software & Microservices", "15-Point JSON-LD Knowledge Graph SEO", "Multi-Region Hreflang Web Architecture"],
    ctaLabel: "Connect With Chief Software Architect"
  },
  {
    segment: "local-businesses",
    label: "Local Businesses (Bangladesh & USA)",
    badge: "Local Domination",
    headline: "Dominate Your City's Local 3-Pack and Capture Ready-to-Buy Neighbors.",
    subheadline: "We optimize your LocalBusiness schema, Google Maps reputation, and mobile page speed so local customers call you first.",
    primaryValueProp: "Direct phone call and WhatsApp consultation generation from local searches.",
    recommendedSolutions: ["LocalBusiness Schema & NAP Audit", "Google Maps Review Booster", "Hyper-Local Landing Page Cluster"],
    ctaLabel: "Check Local Ranking Visibility"
  },
  {
    segment: "international-clients",
    label: "International & Export Clients",
    badge: "Global Compliance",
    headline: "Cross-Border Multi-Lingual Architecture With GDPR & ISO 27001 Security.",
    subheadline: "We build multi-currency e-commerce and B2B export portals with Cloudflare Edge CDN caching and international hreflang SEO.",
    primaryValueProp: "Sub-100ms global latency and multi-language AI search indexing.",
    recommendedSolutions: ["Global B2B Export Portal Development", "International Hreflang SEO Architecture", "GDPR / CCPA Privacy Compliance Hub"],
    ctaLabel: "Schedule Global Architecture Review"
  }
];

// --- MASTER FAQ STRATEGY (7 CATEGORIES) ---
export interface MasterFAQItem {
  id: string;
  category: "homepage" | "service" | "industry" | "pricing" | "technical" | "business" | "support";
  categoryLabel: string;
  question: string;
  conciseVoiceAnswer: string;
  detailedEEATAnswer: string;
}

export const MASTER_FAQ_STRATEGY: MasterFAQItem[] = [
  // Homepage FAQs
  {
    id: "home-1",
    category: "homepage",
    categoryLabel: "General Brand & Overview",
    question: "What does Digital Grower Ltd. specialize in?",
    conciseVoiceAnswer: "Digital Grower Ltd. is Bangladesh's leading full-stack digital agency specializing in custom website development, enterprise software engineering, mobile app development, and AI-optimized SEO.",
    detailedEEATAnswer: "Founded in 2018, Digital Grower Ltd. (DGL IT) engineers bespoke, high-performance web and software architectures for corporate enterprises, healthcare institutions, universities, and high-growth brands. Unlike template agencies, we write 100% custom code using React, Next.js, TypeScript, and Laravel, ensuring sub-2.5 second page loading, 100% WCAG accessibility, and structured JSON-LD knowledge graphs that rank in Google AI Overviews and ChatGPT Search."
  },
  {
    id: "home-2",
    category: "homepage",
    categoryLabel: "General Brand & Overview",
    question: "Where is Digital Grower Ltd. located and do you serve international clients?",
    conciseVoiceAnswer: "Our corporate headquarters is in Banani, Dhaka, Bangladesh, and we actively serve enterprise clients across the USA, UK, UAE, Singapore, and Europe.",
    detailedEEATAnswer: "We operate from Suite 4B, Rahman Plaza, Banani Commercial Area, Dhaka-1213, Bangladesh, with regional client management desks in London, Dubai, and Delaware. Our engineering teams operate across multiple time zones, providing 24/7 dedicated SLAs and cross-border multi-lingual SEO architectures."
  },
  // Pricing FAQs
  {
    id: "pricing-1",
    category: "pricing",
    categoryLabel: "Pricing & Billing Transparency",
    question: "How much does custom website or enterprise software development cost?",
    conciseVoiceAnswer: "Professional corporate websites start at $499 to $999, custom e-commerce platforms range from $1,200 to $3,500, and enterprise custom software systems start from $2,500 depending on complexity.",
    detailedEEATAnswer: "We believe in 100% transparent, fixed-milestone pricing with zero hidden fees or unexpected recurring per-user licenses. During our initial Free Technical Discovery session, we map out your exact database schema, UI wireframes, and integration requirements, and deliver an itemized proposal with guaranteed delivery dates."
  },
  {
    id: "pricing-2",
    category: "pricing",
    categoryLabel: "Pricing & Billing Transparency",
    question: "Do you charge recurring monthly licensing fees for custom software?",
    conciseVoiceAnswer: "No, Digital Grower Ltd. provides 100% intellectual property and source code ownership with zero recurring per-seat licensing fees.",
    detailedEEATAnswer: "Unlike off-the-shelf SaaS software that charges monthly per-user fees forever, our custom enterprise software is built as a permanent corporate asset owned entirely by your company. You only pay for standard third-party cloud hosting (AWS/Google Cloud) and optional ongoing SLA maintenance."
  },
  // Technical FAQs
  {
    id: "tech-1",
    category: "technical",
    categoryLabel: "Technical Architecture & Security",
    question: "What technology stack does Digital Grower Ltd. use for enterprise applications?",
    conciseVoiceAnswer: "We use modern React, Next.js, and TypeScript for frontends, Laravel and Node.js for backend APIs, and PostgreSQL or MySQL databases hosted on Docker containers.",
    detailedEEATAnswer: "Our technical architecture avoids legacy monolithic WordPress builders. We engineer decoupled headless architectures where static assets are served from Cloudflare Edge CDNs, while transactional data is handled by ACID-compliant PostgreSQL schemas with AES-256 encryption at rest and in transit."
  },
  {
    id: "tech-2",
    category: "technical",
    categoryLabel: "Technical Architecture & Security",
    question: "How do you guarantee a sub-2.5 second Largest Contentful Paint (LCP)?",
    conciseVoiceAnswer: "We guarantee sub-2.5s LCP by using Server-Side Rendering (SSR), automatic WebP image optimization, zero unused CSS/JS bloat, and global Edge CDN caching.",
    detailedEEATAnswer: "We perform continuous Core Web Vitals profiling during development. By eliminating heavy third-party page builder plugins, using semantic HTML5, preloading critical web fonts, and compressing payloads, our corporate sites consistently score 98+ on Google PageSpeed Insights."
  },
  // Business & Process FAQs
  {
    id: "business-1",
    category: "business",
    categoryLabel: "Project Process & Timelines",
    question: "What is your standard project delivery timeline?",
    conciseVoiceAnswer: "Standard corporate websites take 2 to 3 weeks, custom e-commerce platforms take 4 to 6 weeks, and full enterprise ERP systems take 8 to 12 weeks.",
    detailedEEATAnswer: "We use an Agile CI/CD methodology with weekly live staging demonstrations. Week 1 is dedicated to technical scoping and Figma UI prototypes; Weeks 2-4 cover full-stack coding and API integration; and the final week focuses on Core Web Vitals optimization, JSON-LD schema injection, and security penetration testing."
  },
  // Support FAQs
  {
    id: "support-1",
    category: "support",
    categoryLabel: "Post-Launch Support & SLAs",
    question: "What kind of post-launch maintenance and support do you provide?",
    conciseVoiceAnswer: "We provide 30 days of free warranty support after launch, followed by optional 24/7 SLA maintenance packages with uptime monitoring and automated cloud backups.",
    detailedEEATAnswer: "Every project includes a 30-day bug-free warranty and comprehensive staff training documentation. Our ongoing Enterprise SLA maintenance packages provide 24/7 security monitoring, monthly database indexing, SEO content updates, and a guaranteed 15-minute emergency engineering response time."
  }
];

// --- BLOG STRATEGY & ARTICLES DATABASE ---
export interface BlogArticleData {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  category: "SEO & AI Search" | "Custom Software" | "Web Development" | "E-Commerce";
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  tableOfContents: { id: string; label: string }[];
  summary: string[];
  detailedExplanation: {
    heading: string;
    paragraphs: string[];
  }[];
  realWorldExamples: {
    title: string;
    outcome: string;
  }[];
  checklist: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: { title: string; href: string }[];
}

export const BLOG_ARTICLES_DATABASE: BlogArticleData[] = [
  {
    slug: "how-to-optimize-website-for-google-ai-overview-and-chatgpt-search",
    seoTitle: "How to Optimize Your Enterprise Website for Google AI Overview & ChatGPT Search (2026 GEO Guide)",
    metaDescription: "Learn how Generative Engine Optimization (GEO), Question-First content structures, and 15-point Schema.org JSON-LD help your website get cited in Google AI Overviews.",
    category: "SEO & AI Search",
    readTime: "9 min read",
    publishedDate: "July 28, 2026",
    author: {
      name: "Senior AI Search Architect",
      role: "Lead SEO & GEO Strategist at Digital Grower Ltd.",
      bio: "10+ years of experience engineering semantic SEO structures, knowledge graphs, and technical search architectures for global enterprises."
    },
    tableOfContents: [
      { id: "what-is-geo", label: "1. What is Generative Engine Optimization (GEO)?" },
      { id: "why-traditional-seo-fails", label: "2. Why Traditional Keyword SEO Fails in AI Search" },
      { id: "question-first-architecture", label: "3. The Question-First 11-Point Content Framework" },
      { id: "schema-jsonld-graph", label: "4. Injecting 15-Point Schema.org JSON-LD" },
      { id: "action-checklist", label: "5. Enterprise Technical Checklist" },
      { id: "blog-faqs", label: "6. Frequently Asked Questions" }
    ],
    summary: [
      "In 2026, Google Search, Gemini, ChatGPT Search, and Perplexity AI synthesize answers directly on the search page, reducing traditional blue-link clicks by up to 40%.",
      "To win in this zero-click era, corporate websites must transition from keyword stuffing to Generative Engine Optimization (GEO) by building verifiable E-E-A-T domain authority.",
      "This technical guide explains how to structure your H2/H3 headings as questions, write concise 40-word answer summaries, and inject Schema.org JSON-LD graphs."
    ],
    detailedExplanation: [
      {
        heading: "1. What is Generative Engine Optimization (GEO)?",
        paragraphs: [
          "Generative Engine Optimization (GEO) is the technical and semantic engineering of web content so that Large Language Models (LLMs) and AI-powered search engines cite your brand as an authoritative factual source.",
          "Unlike traditional web crawlers that count keyword frequency, modern AI crawlers evaluate semantic entity relationships, author credentials, empirical case studies, and structured data to determine which source to quote in an AI Overview."
        ]
      },
      {
        heading: "2. The Question-First Answer Engine Structure",
        paragraphs: [
          "AI assistants process user queries in conversational natural language. When a user asks 'What is the best custom software company in Bangladesh?', the AI looks for a clear definition block immediately below an explicit H2 heading.",
          "Every service page should begin with a bold Definition Box summarizing Who you are, What problem you solve, and What measurable ROI you deliver in under 50 words."
        ]
      }
    ],
    realWorldExamples: [
      {
        title: "B2B Software Agency Dhaka Migration",
        outcome: "By restructuring 14 landing pages into Question-First FAQ formats and adding Organization/Service Schema, organic citations in Google AI Overview increased by 310% in 60 days."
      },
      {
        title: "National Healthcare Portal Schema Injection",
        outcome: "Implementing Physician, MedicalSpecialty, and FAQPage JSON-LD resulted in a 42% jump in direct patient serial bookings from Google mobile search."
      }
    ],
    checklist: [
      "Add a 45-word Definition & Executive Summary box at the top of every key service page",
      "Format H2 headings as natural questions (e.g., 'What is custom software development?')",
      "Inject a complete @graph JSON-LD array containing Organization, WebSite, Service, and FAQPage",
      "Eliminate vague marketing hype; replace with verifiable statistics and client case studies",
      "Ensure Largest Contentful Paint (LCP) is under 2.5 seconds on Google PageSpeed Insights"
    ],
    faqs: [
      {
        question: "Does GEO replace traditional SEO?",
        answer: "No, GEO builds upon traditional SEO. You still need clean crawlability, fast page speed, and quality backlinks, but GEO adds semantic entity clarity and Question-First answer summaries."
      },
      {
        question: "How do I check if my Schema.org JSON-LD is valid?",
        answer: "Use Google's Rich Results Test tool and the Schema.org Validator to verify that your @graph JSON-LD array compiles with zero errors or warnings."
      }
    ],
    relatedServices: [
      { title: "Enterprise SEO & AI Search Authority", href: "/service/search-engine-optimization-seo" },
      { title: "Enterprise Custom Website Development", href: "/service/website-design-development" },
      { title: "Custom Software Engineering", href: "/service/software-development" }
    ]
  },
  {
    slug: "custom-software-vs-off-the-shelf-saas-total-cost-of-ownership",
    seoTitle: "Custom Enterprise Software vs. Off-the-Shelf SaaS: 5-Year Total Cost of Ownership (TCO) Guide",
    metaDescription: "Compare the true 5-year financial ROI of custom enterprise software development versus recurring SaaS subscription licenses for growing businesses.",
    category: "Custom Software",
    readTime: "7 min read",
    publishedDate: "July 20, 2026",
    author: {
      name: "Chief Software Architect",
      role: "Founder & Lead Systems Architect at Digital Grower Ltd.",
      bio: "Specialist in ACID-compliant PostgreSQL databases, Docker microservices, and enterprise automation."
    },
    tableOfContents: [
      { id: "the-saas-trap", label: "1. The Escalating SaaS Licensing Trap" },
      { id: "custom-ownership", label: "2. Why Custom Software Is a Corporate Asset" },
      { id: "tco-comparison", label: "3. 5-Year Cost Comparison Matrix" },
      { id: "when-to-switch", label: "4. When Should Your Enterprise Switch?" },
      { id: "blog-faqs", label: "5. Frequently Asked Questions" }
    ],
    summary: [
      "Commercial SaaS software appears cheap at start, but escalating per-user monthly license fees can cost growing enterprises hundreds of thousands of dollars over 5 years.",
      "Custom software development by Digital Grower Ltd. provides 100% intellectual property ownership, zero recurring per-seat fees, and custom API workflows tailored exactly to your business.",
      "This guide breaks down the financial and operational ROI of transitioning from rigid SaaS subscriptions to custom-engineered cloud software."
    ],
    detailedExplanation: [
      {
        heading: "1. The Escalating SaaS Licensing Trap",
        paragraphs: [
          "Most commercial SaaS tools charge between $30 and $150 per user per month. For a company with 100 employees, that equals $36,000 to $180,000 every single year in recurring operational expenditure (OPEX).",
          "Furthermore, off-the-shelf software forces your staff to adapt their operational habits to rigid, generic software interfaces that cannot be customized."
        ]
      },
      {
        heading: "2. Custom Software as a Valuation-Boosting Asset",
        paragraphs: [
          "When you invest in custom software development, the source code and database schemas belong entirely to your enterprise. There are zero per-seat subscription fees.",
          "Custom software acts as proprietary intellectual property (IP) on your corporate balance sheet, directly increasing the valuation of your company during acquisitions or audits."
        ]
      }
    ],
    realWorldExamples: [
      {
        title: "National Retail & Supermarket Chain",
        outcome: "Replaced a $4,500/month commercial POS SaaS with a custom offline-first PostgreSQL retail system, saving $270,000 over 5 years while eliminating billing downtime."
      }
    ],
    checklist: [
      "Audit your current annual SaaS subscription expenditure across all departments",
      "Identify disconnected spreadsheet silos and duplicate data entry tasks",
      "Calculate 5-year Total Cost of Ownership (TCO) including licensing vs one-time engineering",
      "Ensure custom software includes Role-Based Access Control (RBAC) and automated SQL backups"
    ],
    faqs: [
      {
        question: "Is custom software difficult to maintain over time?",
        answer: "No. With clean TypeScript/Laravel code, Docker containerization, and automated CI/CD pipelines, custom software requires minimal routine maintenance and never forces unwanted interface changes."
      }
    ],
    relatedServices: [
      { title: "Custom Enterprise Software Development", href: "/service/software-development" },
      { title: "Enterprise Custom Website Development", href: "/service/website-design-development" }
    ]
  }
];

// --- CASE STUDIES DATABASE ---
export interface CaseStudyData {
  slug: string;
  title: string;
  clientIndustry: string;
  clientLocation: string;
  businessChallenge: string;
  objectives: string[];
  solutionEngineered: string;
  implementationSteps: string[];
  timeline: string;
  measurableResults: {
    kpiLabel: string;
    value: string;
    detail: string;
  }[];
  lessonsLearned: string;
  clientFeedback: {
    quote: string;
    authorName: string;
    authorTitle: string;
  };
  relatedServices: { title: string; href: string }[];
}

export const CASE_STUDIES_DATABASE: CaseStudyData[] = [
  {
    slug: "national-hospital-diagnostic-portal-transformation",
    title: "How We Engineered a High-Speed Diagnostic Report Portal & Hospital Management System for a 500-Bed Medical Center",
    clientIndustry: "Healthcare, Hospitals & Diagnostic Centers",
    clientLocation: "Dhaka, Bangladesh",
    businessChallenge: "The hospital's legacy WordPress website took 7.4 seconds to load and crashed during peak morning lab test report downloads. Long patient queues and manual phone serial bookings caused severe operational bottlenecks.",
    objectives: [
      "Reduce website Largest Contentful Paint (LCP) to under 2.0 seconds",
      "Automate online diagnostic lab report downloads via secure OTP verification",
      "Implement a real-time doctor serial booking engine with instant SMS/WhatsApp alerts",
      "Achieve HIPAA and ISO 27001 data privacy compliance"
    ],
    solutionEngineered: "We replaced the legacy WordPress site with a custom headless Next.js frontend and a secure Laravel REST API backend connected to a normalized PostgreSQL database. We built an automated WhatsApp OTP report delivery bot and embedded 15-point Schema.org JSON-LD medical structured data.",
    implementationSteps: [
      "Week 1: Healthcare data architecture audit and HIPAA security mapping",
      "Weeks 2-3: Custom Next.js patient portal UI/UX wireframing and WCAG 2.1 AA accessibility contrast check",
      "Weeks 4-6: Laravel REST API development, LIMS (Laboratory Information Management System) API integration, and SMS/WhatsApp OTP gateway setup",
      "Week 7: Core Web Vitals profiling (achieving 99/100 PageSpeed) and JSON-LD MedicalSpecialty Schema injection",
      "Week 8: Zero-downtime Cloudflare Edge CDN deployment and staff training"
    ],
    timeline: "8 Weeks (Delivered on Schedule)",
    measurableResults: [
      { kpiLabel: "PageSpeed Score", value: "99 / 100", detail: "LCP reduced from 7.4s down to 1.8 seconds on 4G mobile networks" },
      { kpiLabel: "Report Download Queue", value: "-85%", detail: "Over 2,400 daily lab reports downloaded automatically via online portal" },
      { kpiLabel: "Organic Patient Bookings", value: "+340%", detail: "#1 Google ranking for 18 primary cardiology and neurology keywords" },
      { kpiLabel: "Server Downtime", value: "0.0%", detail: "Zero crashes during peak morning diagnostic report release hours" }
    ],
    lessonsLearned: "In enterprise healthcare, speed and accessibility are clinical necessities. Patients accessing medical reports on mobile devices require sub-2 second loading and clear, large touch targets (48px+) without intrusive popups.",
    clientFeedback: {
      quote: "Digital Grower Ltd. transformed our entire patient experience. Our website loads instantly, lab reports are delivered automatically to patients' WhatsApp, and our organic search bookings have tripled.",
      authorName: "Dr. K. M. Rahman",
      authorTitle: "Managing Director & Chief Medical Officer"
    },
    relatedServices: [
      { title: "Enterprise Custom Website Development", href: "/service/website-design-development" },
      { title: "Custom Enterprise Software Development", href: "/service/software-development" },
      { title: "Enterprise SEO & AI Search Authority", href: "/service/search-engine-optimization-seo" }
    ]
  },
  {
    slug: "multi-branch-retail-erp-and-ecommerce-scaling",
    title: "Scaling a 24-Branch Retail Chain with a Bespoke ACID-Compliant POS, Inventory ERP & Headless E-Commerce Store",
    clientIndustry: "Enterprise Retail, E-Commerce & Supermarkets",
    clientLocation: "Dhaka & Chattogram, Bangladesh",
    businessChallenge: "A leading retail supermarket chain operated 24 physical branches using disconnected local software. Stock counts were inaccurate, e-commerce orders frequently failed due to inventory mismatches, and checkout billing software crashed during Eid seasonal sales.",
    objectives: [
      "Unify all 24 branch inventories into a single ACID-compliant cloud database",
      "Build an offline-first POS billing software that operates seamlessly even during internet outages",
      "Develop a headless high-speed e-commerce website with sub-2.5s LCP and instant payment gateway support",
      "Eliminate $4,500/month in recurring SaaS subscription licenses"
    ],
    solutionEngineered: "We engineered a bespoke multi-tenant ERP and POS system using Node.js, PostgreSQL, and Docker microservices on AWS, paired with a custom Next.js headless e-commerce storefront. An offline-first local SQLite cache synchronizes barcode scans instantly when network connectivity resumes.",
    implementationSteps: [
      "Weeks 1-2: Inventory database normalization and barcode scanner hardware telemetry review",
      "Weeks 3-5: POS billing desktop app and ACID cloud synchronization server engineering",
      "Weeks 6-8: Headless Next.js e-commerce storefront build with bKash/Nagad/Card payment API integration",
      "Week 9: Load testing for 10,000 concurrent Eid seasonal checkout shoppers",
      "Week 10: Nationwide rollout across 24 retail branches and cashier training"
    ],
    timeline: "10 Weeks (On Time & Under Budget)",
    measurableResults: [
      { kpiLabel: "Inventory Sync Accuracy", value: "100%", detail: "Zero stock discrepancies between physical shelves and online store" },
      { kpiLabel: "5-Year SaaS Savings", value: "$270,000+", detail: "Eliminated monthly per-seat licensing fees across 180 cashiers" },
      { kpiLabel: "Checkout Completion Rate", value: "+44%", detail: "One-click mobile OTP checkout boosted online order volume" },
      { kpiLabel: "Billing Outage Incidents", value: "0", detail: "Offline-first POS processed 45,000+ daily transactions without failure" }
    ],
    lessonsLearned: "Enterprise retail requires offline-first resilience. By engineering local SQLite caching that syncs asynchronously with PostgreSQL, retail cashiers never experience billing freezes during ISP outages.",
    clientFeedback: {
      quote: "We used to lose thousands of dollars during seasonal sales due to POS freezes and inventory errors. Digital Grower Ltd. built us a custom ERP that is rock-solid, fast, and entirely owned by our company.",
      authorName: "Tanvir Ahmed Chowdhury",
      authorTitle: "Chief Operating Officer (COO)"
    },
    relatedServices: [
      { title: "Custom Enterprise Software Development", href: "/service/software-development" },
      { title: "Enterprise Custom Website Development", href: "/service/website-design-development" }
    ]
  }
];

// --- PORTFOLIO PROJECTS DATABASE ---
export interface PortfolioProjectData {
  slug: string;
  title: string;
  category: "Enterprise Web Portal" | "Custom Software & ERP" | "Healthcare Portal" | "AI SEO Authority";
  clientName: string;
  businessGoal: string;
  technologiesUsed: string[];
  designProcess: string;
  developmentProcess: string;
  marketingStrategy?: string;
  businessOutcome: string;
  keyMetricBadge: string;
}

export const PORTFOLIO_PROJECTS_DATABASE: PortfolioProjectData[] = [
  {
    slug: "medicare-national-diagnostic-portal",
    title: "Medicare National Hospital & Diagnostic Portal",
    category: "Healthcare Portal",
    clientName: "Medicare Diagnostic Group (Dhaka)",
    businessGoal: "Provide instant online laboratory test report downloads, serial doctor bookings, and telemedicine scheduling for 2,500+ daily patients.",
    technologiesUsed: ["Next.js (React 18)", "TypeScript", "Laravel REST API", "PostgreSQL", "WhatsApp API", "Cloudflare CDN"],
    designProcess: "Created a high-contrast, WCAG 2.1 AA accessible medical interface with large 48px touch targets, clear typography (Plus Jakarta Sans), and zero visual clutter for elderly patients.",
    developmentProcess: "Built a headless Next.js frontend with SSR and an automated OTP lab report downloader connected to the hospital's LIMS pathology machines.",
    marketingStrategy: "Implemented Physician, MedicalSpecialty, and LocalBusiness Schema.org JSON-LD graphs, resulting in #1 organic ranking for 24 medical search queries.",
    businessOutcome: "Reduced physical hospital queue wait times by 68% and achieved a 99/100 PageSpeed Insights score.",
    keyMetricBadge: "99/100 PageSpeed • 2.4k Daily Lab Reports"
  },
  {
    slug: "apex-logistics-fleet-erp-system",
    title: "Apex Logistics Nationwide Fleet & Warehouse ERP",
    category: "Custom Software & ERP",
    clientName: "Apex Express Courier & Logistics",
    businessGoal: "Automate barcode shipment tracking, real-time fleet GPS dispatch, and corporate client billing across 32 delivery hubs.",
    technologiesUsed: ["Node.js", "PostgreSQL (ACID)", "Docker Swarm", "React Dashboard", "Redis Cache", "Google Maps API"],
    designProcess: "Engineered a dark-mode executive telemetry control room with real-time WebSocket vehicle GPS markers and instant driver dispatch modals.",
    developmentProcess: "Architected a normalized 3NF PostgreSQL schema with sub-10ms query indexing and automated OTP proof-of-delivery SMS triggers.",
    businessOutcome: "Eliminated lost parcel claims by 94% and saved $42,000 annually in third-party logistics SaaS subscription fees.",
    keyMetricBadge: "100% IP Ownership • 32 Warehouses Synced"
  },
  {
    slug: "dhaka-university-research-and-alumni-portal",
    title: "National Academic Research & Alumni Hub",
    category: "Enterprise Web Portal",
    clientName: "Premier Research University",
    businessGoal: "Create an authoritative digital publication repository, international student admission portal, and alumni donation gateway.",
    technologiesUsed: ["Next.js", "TypeScript", "Laravel", "MySQL", "Schema.org Article Graph", "Stripe & bKash Gateway"],
    designProcess: "Designed an institutional, academic-grade layout with structured breadcrumbs, faculty directory search filters, and PDF research citation previewers.",
    developmentProcess: "Integrated 15-point Schema.org Article and EducationalOrganization JSON-LD graphs for direct citations in Google Scholar and AI Overviews.",
    marketingStrategy: "Question-First international student admission SEO guides targeting global searchers in UK, USA, and Malaysia.",
    businessOutcome: "310% increase in international student admission inquiries and #1 Google ranking for 35 academic research terms.",
    keyMetricBadge: "310% International Student Inquiry Growth"
  }
];
