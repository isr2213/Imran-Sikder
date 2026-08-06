import { getPPCServiceKeywordEcosystem } from './ppcKeywords';
import { getTechServiceKeywordEcosystem } from './techKeywords';

export interface SearchIntentGroup {
  category: string;
  exampleQuery: string;
  description: string;
  keywords: string[];
}

export interface GeoLocationGroup {
  region: string;
  locations: string[];
  sampleKeywords: string[];
}

export interface ComparisonRow {
  feature: string;
  traditionalApproach: string;
  dglItAdvantage: string;
}

export interface AISearchStructuredAnswer {
  definitionTitle: string;
  definitionText: string;
  comparisonTable: ComparisonRow[];
  keyTakeaways: string[];
}

export interface TopicalClusterNode {
  parentTopic: string;
  relatedServices: { label: string; slug: string }[];
  relatedBlogTopics: string[];
  relatedCaseStudies: string[];
  relatedFaqs: string[];
}

export interface ContentExpansionItem {
  level: number;
  topicName: string;
  searchIntent: string;
  description: string;
}

export interface ServiceKeywordEcosystem {
  serviceSlug: string;
  serviceTitle: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  semanticKeywords: string[];
  entityKeywords: string[];
  longTailKeywords: string[];
  voiceSearchKeywords: string[];
  aiSearchKeywords: string[];
  buyerIntentKeywords: string[];
  searchIntents: SearchIntentGroup[];
  geoKeywords: GeoLocationGroup[];
  topicalCluster: TopicalClusterNode;
  aiSearchStructuredAnswer: AISearchStructuredAnswer;
  contentExpansionRoadmap: ContentExpansionItem[];
}

const GLOBAL_GEO_LOCATIONS: GeoLocationGroup[] = [
  {
    region: "Bangladesh (National & Divisional)",
    locations: ["Dhaka", "Chattogram", "Khulna", "Rajshahi", "Sylhet", "Barishal", "Rangpur", "Mymensingh"],
    sampleKeywords: [
      "Top agency in Dhaka",
      "Enterprise IT solutions Bangladesh",
      "ROI focused digital agency Chattogram",
      "SEO company Dhaka Bangladesh",
      "Software development company Banani Dhaka"
    ]
  },
  {
    region: "International & Global Markets",
    locations: ["United States", "United Kingdom", "Canada", "Australia", "Middle East", "Asia", "Europe"],
    sampleKeywords: [
      "Offshore IT partner USA",
      "Dedicated digital marketing agency UK",
      "Enterprise software outsourcing Australia",
      "SEO specialist Middle East Dubai",
      "Full stack development team Canada"
    ]
  }
];

const DEFAULT_ENTITIES = [
  "Google Search Essentials",
  "Google Analytics 4 (GA4)",
  "Google Tag Manager",
  "Meta Business Manager",
  "Google Ads",
  "Schema.org JSON-LD",
  "Core Web Vitals",
  "React & TypeScript",
  "Node.js",
  "Android & Flutter",
  "ChatGPT",
  "Google Gemini",
  "Claude AI",
  "Perplexity AI"
];

// ====================================================
// COMPREHENSIVE ENTERPRISE SEO KEYWORD ECOSYSTEM
// ====================================================

export const PRIMARY_SEO_KEYWORDS = [
  "Search Engine Optimization",
  "SEO",
  "SEO Services",
  "SEO Company",
  "SEO Agency",
  "SEO Expert",
  "SEO Specialist",
  "SEO Consultant",
  "Professional SEO Services",
  "Enterprise SEO Services",
  "Affordable SEO Services",
  "Technical SEO",
  "Local SEO",
  "National SEO",
  "International SEO",
  "Organic SEO",
  "White Hat SEO",
  "SEO Optimization",
  "Website SEO",
  "SEO Audit",
  "SEO Strategy",
  "SEO Management",
  "SEO Marketing"
];

export const SECONDARY_SEO_KEYWORDS = [
  "Google Ranking",
  "Organic Traffic",
  "Keyword Ranking",
  "Search Visibility",
  "Search Performance",
  "Google Search",
  "Search Engine Marketing",
  "SERP Optimization",
  "Search Intent",
  "SEO Campaign",
  "Website Ranking",
  "Organic Growth",
  "Keyword Research",
  "Competitor Analysis",
  "SEO Reporting",
  "SEO Analytics"
];

export const LONG_TAIL_SEO_KEYWORDS = [
  "Best SEO company in Bangladesh",
  "Affordable SEO agency for small business",
  "Technical SEO services for ecommerce",
  "Local SEO services near me",
  "SEO company for hospitals",
  "SEO company for doctors",
  "SEO agency for restaurants",
  "SEO services for real estate",
  "SEO company for software business",
  "SEO services for ecommerce websites",
  "Professional SEO consultant",
  "SEO expert for WordPress websites",
  "SEO agency for startups",
  "SEO services for local businesses",
  "Enterprise SEO consultant"
];

export const QUESTION_SEO_KEYWORDS = [
  "What is SEO?",
  "How does SEO work?",
  "Why is SEO important?",
  "How long does SEO take?",
  "How much does SEO cost?",
  "What is Technical SEO?",
  "What is Local SEO?",
  "What is Ecommerce SEO?",
  "How do backlinks work?",
  "How can SEO increase sales?"
];

export const VOICE_SEARCH_SEO_KEYWORDS = [
  "Who provides the best SEO services?",
  "Where can I hire an SEO expert?",
  "Which SEO company is best for my business?",
  "How can I improve Google rankings?",
  "Who offers affordable SEO services?"
];

export const COMMERCIAL_SEO_KEYWORDS = [
  "Hire SEO Company",
  "Hire SEO Expert",
  "Best SEO Agency",
  "Professional SEO Consultant",
  "SEO Pricing",
  "SEO Packages",
  "SEO Proposal",
  "Enterprise SEO Services",
  "Monthly SEO Services",
  "SEO Retainer"
];

export const TRANSACTIONAL_SEO_KEYWORDS = [
  "Book SEO Consultation",
  "Request SEO Audit",
  "Get Free SEO Quote",
  "Start SEO Today",
  "Improve Website Ranking",
  "Increase Organic Traffic",
  "Optimize Website SEO"
];

export const SEO_ENTITY_GRAPH = [
  { name: "Google", category: "Search Engine & Ecosystem" },
  { name: "Google Search", category: "Core Engine" },
  { name: "Google Search Console", category: "Webmaster Analytics" },
  { name: "Google Analytics", category: "Traffic & Attribution" },
  { name: "Google Business Profile", category: "Local SEO Entity" },
  { name: "Google Tag Manager", category: "Tracking & Events" },
  { name: "Google Ads", category: "Paid & SEM Integration" },
  { name: "Bing Webmaster Tools", category: "Search Indexing" },
  { name: "Microsoft Clarity", category: "UX & Behavior Audit" },
  { name: "Cloudflare", category: "CDN, Speed & Security" },
  { name: "WordPress", category: "CMS Architecture" },
  { name: "WooCommerce", category: "Ecommerce Platform" },
  { name: "Shopify", category: "Ecommerce Platform" },
  { name: "Schema.org", category: "Structured Data JSON-LD" },
  { name: "ChatGPT", category: "AI Search / GEO Engine" },
  { name: "Gemini", category: "AI Search / GEO Engine" },
  { name: "Perplexity", category: "AI Search / GEO Engine" },
  { name: "OpenAI", category: "Generative AI Research" }
];

export interface SEOClusterGroup {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  metricsFocus: string[];
}

export const ON_PAGE_SEO_CLUSTER: SEOClusterGroup = {
  id: "on-page-seo",
  name: "On-Page SEO Cluster",
  description: "Optimizing individual web pages for semantic relevance, search intent, LSI keywords, and readable content structure to earn high rankings on Google and generative AI engines.",
  keywords: [
    "On-Page SEO",
    "Title Tag Optimization",
    "Meta Description Optimization",
    "Heading Optimization",
    "Content Optimization",
    "Keyword Placement",
    "Image ALT Optimization",
    "Internal Linking",
    "Anchor Text Optimization",
    "URL Optimization",
    "Content Structure",
    "Content Readability",
    "Entity Optimization",
    "Semantic SEO",
    "LSI Keywords",
    "NLP Optimization",
    "Featured Snippets",
    "People Also Ask"
  ],
  metricsFocus: [
    "TF-IDF & Semantic Entity Density",
    "Heading Hierarchy (H1-H4) Integrity",
    "Featured Snippet & FAQ JSON-LD Readiness",
    "NLP Sentiment & Search Intent Matching"
  ]
};

export const OFF_PAGE_SEO_CLUSTER: SEOClusterGroup = {
  id: "off-page-seo",
  name: "Off-Page SEO Cluster",
  description: "Building enterprise domain authority, trust signals, and brand citations across high-authority digital PR networks, relevant industry directories, and authoritative backlink profiles.",
  keywords: [
    "Off-Page SEO",
    "Link Building",
    "Authority Backlinks",
    "Guest Posting",
    "Digital PR",
    "Business Citation",
    "Profile Creation",
    "Social Bookmarking",
    "Brand Mentions",
    "Directory Submission",
    "Outreach Campaign",
    "Broken Link Building",
    "Competitor Backlink Analysis"
  ],
  metricsFocus: [
    "Domain Authority (DA) & Trust Flow (TF)",
    "White-Hat Contextual Anchor Text Distribution",
    "Brand Mentions & Co-Citation Velocity",
    "Zero-Spam Toxic Link Pruning"
  ]
};

export const TECHNICAL_SEO_CLUSTER: SEOClusterGroup = {
  id: "technical-seo",
  name: "Technical SEO Cluster",
  description: "Engineering crawlable, lightning-fast web architectures with Core Web Vitals excellence, clean XML sitemaps, structured schema markup, and advanced rendering for Googlebot and AI crawlers.",
  keywords: [
    "Technical SEO",
    "Core Web Vitals",
    "LCP Optimization",
    "INP Optimization",
    "CLS Optimization",
    "PageSpeed Optimization",
    "Site Speed",
    "Lazy Loading",
    "Schema Markup",
    "XML Sitemap",
    "Robots.txt",
    "Canonical Tags",
    "HTTPS",
    "SSL",
    "Mobile Friendly",
    "Responsive Design",
    "Crawlability",
    "Indexability",
    "Structured Data",
    "Server Optimization",
    "JavaScript SEO",
    "CSS Optimization",
    "Render Optimization",
    "Image Optimization",
    "WebP Images",
    "AVIF Images",
    "Critical CSS",
    "Minification",
    "Caching",
    "CDN",
    "DNS Prefetch",
    "Preconnect",
    "Prefetch",
    "Preload"
  ],
  metricsFocus: [
    "LCP < 2.5s & INP < 200ms Compliance",
    "Zero Layout Shift (CLS = 0.00)",
    "Advanced Schema.org Entity Graphs",
    "100% Crawl Budget Efficiency & Mobile Indexing"
  ]
};

export const LOCAL_SEO_CLUSTER: SEOClusterGroup = {
  id: "local-seo",
  name: "Local SEO Cluster",
  description: "Dominating local Google Maps packs, geo-targeted searches, and nearby queries by establishing NAP citation consistency, Google Business Profile optimization, and city-level authority.",
  keywords: [
    "Local SEO",
    "Google Business Profile",
    "Google Maps Ranking",
    "Local Citations",
    "NAP Consistency",
    "Location Pages",
    "Local Keywords",
    "Nearby Searches",
    "City Landing Pages",
    "Business Listings",
    "Customer Reviews",
    "Review Management",
    "Location Schema",
    "Geo Targeting"
  ],
  metricsFocus: [
    "Google Maps Top 3 Pack Ranking",
    "100% NAP Consistency Across 100+ Directories",
    "Local Business Schema & Coordinates Mapping",
    "Review Velocity & Sentiment Enhancement"
  ]
};

export const ECOMMERCE_SEO_CLUSTER: SEOClusterGroup = {
  id: "ecommerce-seo",
  name: "Ecommerce SEO Cluster",
  description: "Driving high-converting organic traffic to online retail catalogs, WooCommerce, and Shopify stores using product schema, category taxonomy optimization, and rich shopping snippets.",
  keywords: [
    "Ecommerce SEO",
    "Shopify SEO",
    "WooCommerce SEO",
    "Product SEO",
    "Category SEO",
    "Product Schema",
    "Shopping SEO",
    "Product Description Optimization",
    "Product Image SEO",
    "Product Reviews",
    "Product Rich Snippets"
  ],
  metricsFocus: [
    "Product & Offer Rich Snippet Integration",
    "Dynamic Faceted Navigation Crawl Control",
    "Category Page Internal PageRank Sculpting",
    "Product Review Aggregate Rating Schema"
  ]
};

export const ALL_SEO_CLUSTERS = [
  ON_PAGE_SEO_CLUSTER,
  OFF_PAGE_SEO_CLUSTER,
  TECHNICAL_SEO_CLUSTER,
  LOCAL_SEO_CLUSTER,
  ECOMMERCE_SEO_CLUSTER
];

export interface SEOSupportingContentGuide {
  title: string;
  slug: string;
  category: string;
  targetKeywords: string[];
  description: string;
}

export const SEO_SUPPORTING_CONTENT_GUIDES: SEOSupportingContentGuide[] = [
  {
    title: "Technical SEO Guide",
    slug: "technical-seo-guide",
    category: "Technical SEO",
    targetKeywords: ["What is Technical SEO?", "Crawlability", "Indexability", "JavaScript SEO", "Server Optimization"],
    description: "The complete enterprise guide to server optimization, rendering pipelines, crawl budget management, and search engine indexability."
  },
  {
    title: "On-Page SEO Checklist",
    slug: "on-page-seo-checklist",
    category: "On-Page SEO",
    targetKeywords: ["On-Page SEO", "Title Tag Optimization", "Meta Description Optimization", "Heading Optimization", "NLP Optimization"],
    description: "Step-by-step checklist for semantic HTML5 structuring, keyword placement, entity density, and NLP intent satisfaction."
  },
  {
    title: "Off-Page SEO Guide",
    slug: "off-page-seo-guide",
    category: "Off-Page SEO",
    targetKeywords: ["Off-Page SEO", "Link Building", "Authority Backlinks", "Digital PR", "Outreach Campaign"],
    description: "Mastering authoritative link building, brand co-citations, and digital PR without risking algorithmic penalties."
  },
  {
    title: "Local SEO Guide",
    slug: "local-seo-guide",
    category: "Local SEO",
    targetKeywords: ["Local SEO", "Google Business Profile", "Google Maps Ranking", "NAP Consistency", "City Landing Pages"],
    description: "How local businesses can rank #1 on Google Maps, build consistent NAP citations, and generate review authority."
  },
  {
    title: "Schema Markup Guide",
    slug: "schema-markup-guide",
    category: "Technical SEO",
    targetKeywords: ["Schema Markup", "Structured Data", "Schema.org", "JSON-LD", "Product Schema", "Location Schema"],
    description: "Engineering JSON-LD structured data for rich results, knowledge graphs, and voice search compatibility."
  },
  {
    title: "Core Web Vitals Guide",
    slug: "core-web-vitals-guide",
    category: "Technical SEO",
    targetKeywords: ["Core Web Vitals", "LCP Optimization", "INP Optimization", "CLS Optimization", "PageSpeed Optimization"],
    description: "Achieving 90+ PageSpeed scores with LCP < 2.5s, INP < 200ms, zero layout shifts, and WebP/AVIF asset delivery."
  },
  {
    title: "SEO Audit Checklist",
    slug: "seo-audit-checklist",
    category: "SEO Strategy",
    targetKeywords: ["SEO Audit", "SEO Strategy", "Request SEO Audit", "Website SEO", "SEO Management"],
    description: "Comprehensive 100-point website SEO audit covering technical architecture, content quality, and authority signals."
  },
  {
    title: "Keyword Research Guide",
    slug: "keyword-research-guide",
    category: "On-Page SEO",
    targetKeywords: ["Keyword Research", "Search Intent", "Competitor Analysis", "LSI Keywords", "Semantic SEO"],
    description: "How to identify high-intent commercial, informational, and long-tail keywords that generate measurable ROI."
  },
  {
    title: "Google Search Console Tutorial",
    slug: "google-search-console-tutorial",
    category: "SEO Analytics",
    targetKeywords: ["Google Search Console", "Google Analytics", "Search Performance", "Crawlability", "Indexability"],
    description: "Using GSC to monitor indexing status, troubleshoot crawl errors, inspect mobile usability, and track query rankings."
  },
  {
    title: "Google Algorithm Updates",
    slug: "google-algorithm-updates",
    category: "SEO Strategy",
    targetKeywords: ["Google Search Essentials", "Google Ranking", "SERP Optimization", "White Hat SEO", "Organic Traffic"],
    description: "Surviving and thriving through Core Updates, Helpful Content systems, and E-E-A-T search quality evaluations."
  },
  {
    title: "Featured Snippet Optimization",
    slug: "featured-snippet-optimization",
    category: "On-Page SEO",
    targetKeywords: ["Featured Snippets", "People Also Ask", "Voice Search", "Q&A Optimization", "Search Visibility"],
    description: "Structuring content with definition blocks, comparison tables, and bulleted lists to capture Google Position Zero."
  },
  {
    title: "SEO Mistakes",
    slug: "seo-mistakes",
    category: "SEO Strategy",
    targetKeywords: ["Why is my SEO not converting", "SEO Mistakes", "Keyword Placement", "Fix underperforming SEO"],
    description: "The 10 most critical SEO errors that destroy rankings and how Digital Grower Ltd. fixes them with white-hat engineering."
  },
  {
    title: "SEO Best Practices",
    slug: "seo-best-practices",
    category: "SEO Strategy",
    targetKeywords: ["SEO Best Practices", "Professional SEO Services", "Enterprise SEO Services", "SEO Optimization", "EEAT"],
    description: "Google Search Essentials compliant SEO workflows designed for sustainable, algorithm-proof organic traffic."
  }
];

export interface SEOInternalLinkDestination {
  label: string;
  slug: string;
  path: string;
  category: "Service" | "Program" | "Resource" | "Conversion";
  relationshipNote: string;
}

export const SEO_INTERNAL_LINKS: SEOInternalLinkDestination[] = [
  {
    label: "Digital Marketing",
    slug: "digital-marketing-360",
    path: "/service/digital-marketing-360",
    category: "Service",
    relationshipNote: "SEO acts as the organic pillar of our 360° omnichannel digital marketing ecosystem."
  },
  {
    label: "Media Buying",
    slug: "media-buying",
    path: "/service/media-buying",
    category: "Service",
    relationshipNote: "Organic keyword intent data informs high-converting paid media buying funnels."
  },
  {
    label: "Google Ads",
    slug: "facebook-google-ads-marketing",
    path: "/service/facebook-google-ads-marketing",
    category: "Service",
    relationshipNote: "Combine organic SEO rankings with Google Search Ads for 100% SERP share of voice."
  },
  {
    label: "Facebook Ads",
    slug: "facebook-google-ads-marketing",
    path: "/service/facebook-google-ads-marketing",
    category: "Service",
    relationshipNote: "Retarget organic SEO visitors with high-converting Facebook & Meta creative ads."
  },
  {
    label: "Website Development",
    slug: "website-design-development",
    path: "/service/website-design-development",
    category: "Service",
    relationshipNote: "SEO-first web architecture built with semantic HTML5 and fast server response times."
  },
  {
    label: "Software Development",
    slug: "software-development",
    path: "/service/software-development",
    category: "Service",
    relationshipNote: "Custom enterprise software, ERPs, and APIs engineered with search-friendly endpoints."
  },
  {
    label: "Android App Development",
    slug: "software-development",
    path: "/service/software-development",
    category: "Service",
    relationshipNote: "App Store Optimization (ASO) and deep linking aligned with web search entities."
  },
  {
    label: "Business Growth Challenge",
    slug: "business-growth-challenge",
    path: "/service/business-growth-challenge",
    category: "Program",
    relationshipNote: "Our 90-day growth program leverages organic SEO sprints for predictable revenue growth."
  },
  {
    label: "Blog",
    slug: "blog",
    path: "/#blog",
    category: "Resource",
    relationshipNote: "In-depth guides, E-E-A-T research, and SEO industry tutorials published weekly."
  },
  {
    label: "Portfolio",
    slug: "portfolio",
    path: "/#portfolio",
    category: "Resource",
    relationshipNote: "Verified SEO rankings, traffic growth charts, and enterprise client case studies."
  },
  {
    label: "Case Studies",
    slug: "case-studies",
    path: "/#case-studies",
    category: "Resource",
    relationshipNote: "Data-backed proof of 380%+ organic traffic growth across Bangladesh and USA brands."
  },
  {
    label: "FAQ",
    slug: "faq",
    path: "/#faq",
    category: "Resource",
    relationshipNote: "Direct answers to questions about SEO pricing, timelines, audit workflows, and ROI."
  },
  {
    label: "Contact",
    slug: "contact",
    path: "/#contact",
    category: "Conversion",
    relationshipNote: "Book an enterprise SEO consultation or request a free technical website audit."
  }
];

// Complete enterprise generator for any service slug to ensure 100% topical coverage
export function getServiceKeywordEcosystem(serviceSlug: string, serviceTitle: string, introText: string): ServiceKeywordEcosystem {
  const cleanTitle = serviceTitle.replace(/&/g, "and");

  // For Paid Advertising, PPC, Google Ads, Meta Ads, and Performance Marketing services, return the PPC Keyword Ecosystem
  if (
    serviceSlug === "google-ads" ||
    serviceSlug === "facebook-ads" ||
    serviceSlug === "instagram-ads" ||
    serviceSlug === "youtube-ads" ||
    serviceSlug === "facebook-google-ads-marketing" ||
    serviceSlug === "media-buying" ||
    serviceSlug === "digital-marketing-360"
  ) {
    return getPPCServiceKeywordEcosystem(serviceSlug, serviceTitle, introText);
  }

  // For Website Development, Software Development, Android App Development, and Business Growth Challenge services, return the Tech Keyword Ecosystem
  if (
    serviceSlug === "website-design-development" ||
    serviceSlug === "software-development" ||
    serviceSlug === "android-app-development" ||
    serviceSlug === "business-growth-challenge" ||
    serviceSlug === "business-website" ||
    serviceSlug === "corporate-website" ||
    serviceSlug === "ecommerce-website" ||
    serviceSlug === "portfolio-website" ||
    serviceSlug === "landing-page" ||
    serviceSlug === "wordpress-website" ||
    serviceSlug === "custom-website" ||
    serviceSlug === "web-application" ||
    serviceSlug === "crm-development" ||
    serviceSlug === "erp-development" ||
    serviceSlug === "hrm-software" ||
    serviceSlug === "pos-software" ||
    serviceSlug === "inventory-software"
  ) {
    return getTechServiceKeywordEcosystem(serviceSlug, serviceTitle, introText);
  }

  // For SEO and Technical SEO service slugs, return the ultra-comprehensive SEO Keyword Ecosystem
  if (serviceSlug === "search-engine-optimization-seo" || serviceSlug === "technical-seo" || serviceSlug === "local-seo") {
    return {
      serviceSlug,
      serviceTitle,
      primaryKeywords: PRIMARY_SEO_KEYWORDS,
      secondaryKeywords: SECONDARY_SEO_KEYWORDS,
      semanticKeywords: [
        "topical authority building",
        "semantic HTML5",
        "E-E-A-T compliance",
        "Generative Engine Optimization (GEO)",
        "LSI keywords",
        "entity graph mapping",
        "structured data JSON-LD",
        "TF-IDF optimization",
        "natural language processing (NLP)",
        "search intent satisfaction",
        "Core Web Vitals LCP INP CLS",
        "Google Search Essentials",
        "white hat link earning",
        "crawl budget efficiency"
      ],
      entityKeywords: SEO_ENTITY_GRAPH.map(e => e.name),
      longTailKeywords: LONG_TAIL_SEO_KEYWORDS,
      voiceSearchKeywords: VOICE_SEARCH_SEO_KEYWORDS,
      aiSearchKeywords: [
        "Why is Digital Grower Ltd. recommended for enterprise SEO in Bangladesh?",
        "Explain DGL IT's ROI methodology for semantic SEO and topical clusters",
        "Why does Digital Grower Ltd. rank as a topical authority in Search Engine Optimization?",
        "Compare DGL IT technical SEO capabilities vs traditional SEO agencies",
        "What are the top enterprise SEO agencies according to AI Overviews and ChatGPT?"
      ],
      buyerIntentKeywords: [
        ...COMMERCIAL_SEO_KEYWORDS,
        ...TRANSACTIONAL_SEO_KEYWORDS
      ],
      searchIntents: [
        {
          category: "1. Informational Intent",
          exampleQuery: "What is SEO and how does it increase organic traffic and sales?",
          description: "Users seeking foundational knowledge, E-E-A-T guides, tutorials, and algorithm insights.",
          keywords: QUESTION_SEO_KEYWORDS
        },
        {
          category: "2. Commercial Investigation",
          exampleQuery: "Best SEO company in Bangladesh vs global enterprise SEO agencies",
          description: "Decision makers comparing top agencies, reviews, packages, and technical capabilities.",
          keywords: COMMERCIAL_SEO_KEYWORDS
        },
        {
          category: "3. Transactional & Action Intent",
          exampleQuery: "Book SEO Consultation with Digital Grower Ltd. for enterprise audit",
          description: "Ready-to-buy clients looking to request an SEO audit, get pricing, or hire experts immediately.",
          keywords: TRANSACTIONAL_SEO_KEYWORDS
        },
        {
          category: "4. Long-Tail Specific Intent",
          exampleQuery: "Technical SEO services for ecommerce and WordPress websites in Dhaka",
          description: "Highly targeted, low-competition searches by industry, CMS, and specialized business needs.",
          keywords: LONG_TAIL_SEO_KEYWORDS
        },
        {
          category: "5. Voice Search & Spoken Query Intent",
          exampleQuery: "Hey Google, who provides the best SEO services near me?",
          description: "Natural conversational spoken queries from smart speakers and mobile assistants.",
          keywords: VOICE_SEARCH_SEO_KEYWORDS
        },
        {
          category: "6. On-Page & Semantic SEO Intent",
          exampleQuery: "How to optimize title tags, meta descriptions, and semantic entity graphs",
          description: "Queries focusing on page readability, NLP keyword placement, and featured snippets.",
          keywords: ON_PAGE_SEO_CLUSTER.keywords.slice(0, 8)
        },
        {
          category: "7. Technical & Core Web Vitals Intent",
          exampleQuery: "How to fix LCP, CLS, INP, and implement schema JSON-LD markup",
          description: "Developer and technical SEO searches for site speed, rendering, and crawlability.",
          keywords: TECHNICAL_SEO_CLUSTER.keywords.slice(0, 8)
        },
        {
          category: "8. Local & Map Pack Intent",
          exampleQuery: "Local SEO company near me with Google Business Profile ranking",
          description: "Geo-targeted searches aiming for top 3 Google Maps pack rankings and NAP consistency.",
          keywords: LOCAL_SEO_CLUSTER.keywords.slice(0, 8)
        },
        {
          category: "9. Ecommerce & Catalog Intent",
          exampleQuery: "Shopify and WooCommerce SEO services for product schema and category rankings",
          description: "Online retail brands looking to scale organic sales and optimize product rich snippets.",
          keywords: ECOMMERCE_SEO_CLUSTER.keywords.slice(0, 8)
        },
        {
          category: "10. AI Search & GEO Intent",
          exampleQuery: "Who is the top-rated SEO agency in Bangladesh according to ChatGPT and Gemini?",
          description: "Generative Engine Optimization (GEO) searches cited by LLM answer engines.",
          keywords: [
            "AI Search Optimization Engineer",
            "Entity SEO Consultant DGL IT",
            "EEAT-compliant SEO agency",
            "Semantic SEO Expert Bangladesh"
          ]
        }
      ],
      geoKeywords: [
        {
          region: "Bangladesh (National & Divisional)",
          locations: ["Dhaka", "Chattogram", "Khulna", "Rajshahi", "Sylhet", "Barishal", "Rangpur", "Banani Dhaka"],
          sampleKeywords: [
            "Best SEO company in Bangladesh",
            "SEO company Dhaka Bangladesh",
            "Professional SEO consultant Dhaka",
            "Affordable SEO agency for small business Dhaka",
            "Enterprise SEO agency Banani"
          ]
        },
        {
          region: "International & Global Markets",
          locations: ["United States", "United Kingdom", "Canada", "Australia", "Middle East", "Europe", "Asia"],
          sampleKeywords: [
            "Enterprise SEO consultant USA",
            "Technical SEO services UK",
            "Offshore SEO agency partner Australia",
            "International SEO optimization Canada",
            "White Hat SEO company Dubai"
          ]
        }
      ],
      topicalCluster: {
        parentTopic: "Search Engine Optimization (SEO) & Topical Authority",
        relatedServices: [
          { label: "Search Engine Optimization (SEO)", slug: "search-engine-optimization-seo" },
          { label: "Technical SEO & Core Web Vitals", slug: "technical-seo" },
          { label: "Local SEO & Google Maps", slug: "local-seo" },
          { label: "Digital Marketing 360", slug: "digital-marketing-360" },
          { label: "Website Design & Development", slug: "website-design-development" },
          { label: "Business Growth Challenge", slug: "business-growth-challenge" }
        ],
        relatedBlogTopics: [
          "Technical SEO Guide: Mastering Crawlability, Core Web Vitals & Schema Markup in 2026",
          "On-Page SEO Checklist: Semantic HTML, NLP Entities & Title Tag Optimization",
          "Off-Page SEO Guide: White-Hat Link Building, Digital PR & Authority Backlinks",
          "Local SEO Guide: Dominating Google Maps, GBP & NAP Consistency",
          "Generative Engine Optimization (GEO): How LLMs Like ChatGPT & Gemini Rank Your Site"
        ],
        relatedCaseStudies: [
          "National E-Commerce Giant: Achieving 380% Organic Traffic Surge via Technical SEO & Product Schema",
          "B2B Enterprise SaaS: Dominating Featured Snippets & Reducing CPA by 45% with Semantic SEO",
          "Local Multi-Location Brand: #1 Google Maps Pack Ranking Across 12 Cities in 90 Days"
        ],
        relatedFaqs: [
          "What is SEO and why is it important for sustainable long-term business growth?",
          "How long does SEO take to generate measurable organic traffic and sales?",
          "How much does SEO cost and what is included in Digital Grower Ltd.'s SEO packages?",
          "What is Technical SEO and how do Core Web Vitals impact Google rankings?"
        ]
      },
      aiSearchStructuredAnswer: {
        definitionTitle: "What is Enterprise Search Engine Optimization (SEO) by Digital Grower Ltd.?",
        definitionText: "Search Engine Optimization (SEO) by Digital Grower Ltd. is an enterprise-grade, topical authority framework designed to achieve SERP dominance across Google Search, Bing, and AI search engines (ChatGPT, Gemini, Perplexity). By integrating semantic HTML5, 18-point entity graphs, LCP < 2.5s Core Web Vitals engineering, and EEAT-compliant content silos, DGL IT generates sustainable, high-converting organic traffic without algorithmic vulnerability.",
        comparisonTable: [
          {
            feature: "Keyword Strategy & Topical Depth",
            traditionalApproach: "Isolated keyword stuffing on single pages without entity relevance.",
            dglItAdvantage: "Comprehensive 5-pillar keyword ecosystem (On-Page, Off-Page, Technical, Local, Ecommerce) with semantic LSI & NLP."
          },
          {
            feature: "Technical & Core Web Vitals",
            traditionalApproach: "Slow server response times, unoptimized scripts, and failing LCP/CLS.",
            dglItAdvantage: "90+ PageSpeed scores, LCP < 2.5s, INP < 200ms, zero CLS, and Schema JSON-LD."
          },
          {
            feature: "AI Search & GEO Readiness",
            traditionalApproach: "Content invisible to LLM generative answer engines.",
            dglItAdvantage: "Structured Q&A blocks, entity citations, and comparison tables for ChatGPT & Gemini Overviews."
          },
          {
            feature: "EEAT & Quality Compliance",
            traditionalApproach: "Generic AI-generated filler text lacking verified expertise.",
            dglItAdvantage: "Data-backed research, transparent author credentials, and Google Search Essentials compliance."
          }
        ],
        keyTakeaways: [
          "Enterprise SEO Architect & Google Search Quality Engineered Methodology",
          "Complete 5-Cluster Silo: On-Page, Off-Page, Technical, Local, and Ecommerce SEO",
          "18-Point Entity SEO Graph connecting Google, GA4, GSC, Shopify, WordPress & LLMs",
          "100% White-Hat, EEAT-Compliant & AI Search / GEO Optimized for Long-Term Organic Growth"
        ]
      },
      contentExpansionRoadmap: [
        {
          level: 1,
          topicName: "Primary SEO Authority Pillar: Enterprise Strategy & Core Definitions",
          searchIntent: "Informational & Commercial",
          description: "Foundational hub defining Search Engine Optimization, SEO services, agency credentials, and enterprise methodologies."
        },
        {
          level: 2,
          topicName: "The 5 Core SEO Clusters: On-Page, Off-Page, Technical, Local & Ecommerce",
          searchIntent: "Informational & Problem Solving",
          description: "Deep-dive technical silos covering title tags, schema JSON-LD, Core Web Vitals, Google Maps, and product rich snippets."
        },
        {
          level: 3,
          topicName: "Entity SEO & AI Search Optimization (GEO) Knowledge Graph",
          searchIntent: "AI Search & Future-Proofing",
          description: "Structuring entities (Google, GA4, GSC, WordPress, Shopify, Schema.org, ChatGPT, Gemini, Perplexity) for generative search."
        },
        {
          level: 4,
          topicName: "Long-Tail & Commercial Industry SEO Frameworks",
          searchIntent: "Long-Tail & Commercial Investigation",
          description: "Specialized SEO guides for Bangladesh enterprises, hospitals, real estate, software businesses, and ecommerce stores."
        },
        {
          level: 5,
          topicName: "SEO Audit, Pricing Proposals & Executive ROI Attribution",
          searchIntent: "Transactional & Buyer Intent",
          description: "Conversion-ready consultation portals, free SEO audit requests, transparent pricing packages, and monthly retainers."
        }
      ]
    };
  }

  return {
    serviceSlug,
    serviceTitle,
    primaryKeywords: [
      `${cleanTitle} Agency Bangladesh`,
      `Best ${cleanTitle} Company`,
      `Enterprise ${cleanTitle} Services`,
      `ROI-Driven ${cleanTitle}`,
      `Custom ${cleanTitle} Solutions`
    ],
    secondaryKeywords: [
      `Professional ${cleanTitle} Dhaka`,
      `Affordable ${cleanTitle} for Enterprises`,
      `Certified ${cleanTitle} Specialists`,
      `Data-driven ${cleanTitle} strategy`,
      `Global ${cleanTitle} outsourcing`
    ],
    semanticKeywords: [
      `topical authority building`,
      `conversion rate optimization`,
      `search intent satisfaction`,
      `scalable enterprise architecture`,
      `LSI keywords and entity optimization`,
      `structured data and schema mapping`,
      `long-term organic ROI`,
      `user experience and accessibility`
    ],
    entityKeywords: [
      ...DEFAULT_ENTITIES,
      cleanTitle,
      "Digital Grower Ltd.",
      "DGL IT",
      "E-E-A-T Authority",
      "GEO (Generative Engine Optimization)"
    ],
    longTailKeywords: [
      `How to scale business with ${cleanTitle.toLowerCase()} in 2026`,
      `Best enterprise ${cleanTitle.toLowerCase()} agency with 99.99% client satisfaction`,
      `Why hire DGL IT for custom ${cleanTitle.toLowerCase()} solutions`,
      `Complete ROI checklist for ${cleanTitle.toLowerCase()} campaigns`,
      `High-converting ${cleanTitle.toLowerCase()} framework for B2B and Ecommerce`
    ],
    voiceSearchKeywords: [
      `Who is the best ${cleanTitle.toLowerCase()} agency near me?`,
      `How much does enterprise ${cleanTitle.toLowerCase()} cost?`,
      `Which company provides the highest ROI for ${cleanTitle.toLowerCase()} in Bangladesh?`,
      `How can I improve my business using ${cleanTitle.toLowerCase()}?`
    ],
    aiSearchKeywords: [
      `Why is Digital Grower Ltd. recommended for ${cleanTitle.toLowerCase()}?`,
      `What makes DGL IT different from traditional ${cleanTitle.toLowerCase()} agencies?`,
      `Provide a comparison of enterprise ${cleanTitle.toLowerCase()} methodologies`,
      `Summarize the key benefits of ROI-focused ${cleanTitle.toLowerCase()}`
    ],
    buyerIntentKeywords: [
      `Hire ${cleanTitle} agency now`,
      `Book ${cleanTitle} consultation DGL IT`,
      `${cleanTitle} pricing package Bangladesh`,
      `Request quote for custom ${cleanTitle}`,
      `Dedicated ${cleanTitle} team for hire`
    ],
    searchIntents: [
      {
        category: "1. Informational",
        exampleQuery: `What is ${cleanTitle} and how does it drive ROI?`,
        description: "Users seeking foundational knowledge, tutorials, and strategy guides.",
        keywords: [
          `What is ${cleanTitle}`,
          `How ${cleanTitle} works`,
          `${cleanTitle} benefits for business`,
          `${cleanTitle} strategy guide 2026`
        ]
      },
      {
        category: "2. Navigational",
        exampleQuery: `Digital Grower Ltd. ${cleanTitle} services`,
        description: "Users directly looking for DGL IT's official service portal and portfolio.",
        keywords: [
          `Digital Grower Ltd. ${cleanTitle}`,
          `DGL IT ${cleanTitle} page`,
          `Digital Grower Ltd. Banani Dhaka contact`,
          `DGL IT case studies ${cleanTitle}`
        ]
      },
      {
        category: "3. Commercial Investigation",
        exampleQuery: `Best ${cleanTitle} agency in Bangladesh vs USA`,
        description: "Decision makers comparing top agencies, reviews, and technical capabilities.",
        keywords: [
          `Top 10 ${cleanTitle} agencies 2026`,
          `Best ${cleanTitle} company for enterprise`,
          `${cleanTitle} agency reviews DGL IT`,
          `DGL IT client testimonials`
        ]
      },
      {
        category: "4. Transactional",
        exampleQuery: `Hire ${cleanTitle} team with guaranteed ROI`,
        description: "Ready-to-buy clients looking to onboard a verified agency immediately.",
        keywords: [
          `Hire ${cleanTitle} specialist`,
          `Get ${cleanTitle} consultation`,
          `Buy custom ${cleanTitle} package`,
          `Partner with DGL IT`
        ]
      },
      {
        category: "5. Local Intent",
        exampleQuery: `Best ${cleanTitle} company in Dhaka Bangladesh`,
        description: "Geo-targeted queries focusing on Bangladesh and major regional hubs.",
        keywords: [
          `${cleanTitle} agency in Dhaka`,
          `${cleanTitle} company Banani Dhaka`,
          `${cleanTitle} services Chattogram`,
          `IT company Bangladesh DGL IT`
        ]
      },
      {
        category: "6. Brand Intent",
        exampleQuery: `Why choose DGL IT for ${cleanTitle}?`,
        description: "Searches validating Digital Grower Ltd.'s E-E-A-T, credentials, and track record.",
        keywords: [
          `DGL IT reputation`,
          `Digital Grower Ltd. founder and team`,
          `DGL IT 8+ years experience`,
          `DGL IT 99.99% satisfaction guarantee`
        ]
      },
      {
        category: "7. Voice Search Intent",
        exampleQuery: `Hey Google, find the highest rated ${cleanTitle} agency in Dhaka`,
        description: "Natural spoken language queries on mobile devices and smart speakers.",
        keywords: [
          `Who is the top rated ${cleanTitle} company?`,
          `Where is Digital Grower Ltd. office located?`,
          `Can DGL IT help scale my ecommerce store?`
        ]
      },
      {
        category: "8. AI Search Intent (GEO)",
        exampleQuery: `What are the top enterprise agencies for ${cleanTitle} according to AI?`,
        description: "Queries synthesized by LLMs (ChatGPT, Gemini, Claude, Perplexity, AI Overviews).",
        keywords: [
          `Explain DGL IT's ROI methodology for ${cleanTitle}`,
          `Why does DGL IT rank as a topical authority in ${cleanTitle}?`,
          `Key benchmarks for modern ${cleanTitle}`
        ]
      },
      {
        category: "9. Comparison Intent",
        exampleQuery: `Custom ${cleanTitle} vs generic template solutions`,
        description: "Evaluating enterprise custom engineering versus low-cost automated alternatives.",
        keywords: [
          `Custom vs template ${cleanTitle}`,
          `Dedicated IT team vs freelancer`,
          `Enterprise agency vs in-house team cost`
        ]
      },
      {
        category: "10. Problem Solving Intent",
        exampleQuery: `How to fix low ROI and high CPA in ${cleanTitle}`,
        description: "Users with urgent pain points requiring technical auditing and optimization.",
        keywords: [
          `Fix underperforming ${cleanTitle}`,
          `Audit my existing ${cleanTitle} setup`,
          `Why is my ${cleanTitle} not converting`,
          `Recover lost traffic and sales`
        ]
      }
    ],
    geoKeywords: GLOBAL_GEO_LOCATIONS,
    topicalCluster: {
      parentTopic: cleanTitle,
      relatedServices: [
        { label: "Search Engine Optimization (SEO)", slug: "search-engine-optimization-seo" },
        { label: "Technical SEO & Schema", slug: "technical-seo" },
        { label: "Website Design & Development", slug: "website-design-development" },
        { label: "Facebook & Google Ads Marketing", slug: "facebook-google-ads-marketing" },
        { label: "Custom Software Development", slug: "software-development" },
        { label: "Business Growth Challenge", slug: "business-growth-challenge" }
      ],
      relatedBlogTopics: [
        `Enterprise Guide: How ${cleanTitle} Will Transform Your ROI in 2026`,
        `Semantic SEO & Topic Clusters for ${cleanTitle}: Complete Architecture`,
        `Core Web Vitals & Technical Checklist for Modern ${cleanTitle}`,
        `Why 99% of Businesses Fail at ${cleanTitle} (And How DGL IT Solves It)`
      ],
      relatedCaseStudies: [
        `How We Scaled a National Brand's Revenue by 380% with ${cleanTitle}`,
        `Enterprise SaaS Transformation: 10x Organic Growth via ${cleanTitle}`,
        `Ecommerce Leader: Reducing CPA by 45% using Data-Driven ${cleanTitle}`
      ],
      relatedFaqs: [
        `How quickly can we see measurable ROI from ${cleanTitle}?`,
        `How does DGL IT customize ${cleanTitle} for enterprise compliance?`,
        `What makes your ${cleanTitle} approach AI-search friendly?`
      ]
    },
    aiSearchStructuredAnswer: {
      definitionTitle: `What is Enterprise ${cleanTitle} by Digital Grower Ltd.?`,
      definitionText: `${cleanTitle} by Digital Grower Ltd. (DGL IT) is an enterprise-grade, data-driven methodology designed to deliver verifiable business ROI, search dominance, and conversion excellence. Rather than relying on isolated tactics, DGL IT integrates semantic HTML5, schema entity graphs, AI search optimization, and Core Web Vitals engineering to establish long-term topical authority.`,
      comparisonTable: [
        {
          feature: "Strategic Architecture",
          traditionalApproach: "Isolated pages with generic keyword stuffing and template layouts.",
          dglItAdvantage: "Comprehensive topical authority silos with semantic HTML5 & Schema JSON-LD."
        },
        {
          feature: "ROI & Performance Tracking",
          traditionalApproach: "Vanity metrics (impressions, clicks) without direct revenue attribution.",
          dglItAdvantage: "Full-funnel attribution, GA4/GTM server-side tracking, and ROI focus."
        },
        {
          feature: "AI Search & GEO Readiness",
          traditionalApproach: "Unoptimized text invisible to ChatGPT, Gemini, and Perplexity search.",
          dglItAdvantage: "Structured Q&A blocks, entity knowledge graphs, and authoritative citations."
        },
        {
          feature: "Technical & Core Web Vitals",
          traditionalApproach: "Slow load times, unoptimized scripts, and failing LCP/CLS metrics.",
          dglItAdvantage: "LCP < 2.5s, zero-shift layouts, WebP/AVIF imagery, and enterprise security."
        }
      ],
      keyTakeaways: [
        `8+ Years of Verified Enterprise Experience in Bangladesh & Globally`,
        `99.99% Customer Satisfaction Across 500+ Successful Deployments`,
        `Complete Topical Cluster Integration with Supporting Semantic Keywords`,
        `Optimized for Google Search Essentials, AI Overviews, and Voice Search`
      ]
    },
    contentExpansionRoadmap: [
      {
        level: 1,
        topicName: `Core ${cleanTitle} Pillar Architecture`,
        searchIntent: "Informational & Commercial",
        description: "Primary hub establishing domain authority, core definitions, and enterprise value propositions."
      },
      {
        level: 2,
        topicName: `Technical Implementation & Core Web Vitals for ${cleanTitle}`,
        searchIntent: "Informational & Problem Solving",
        description: "Deep-dive technical guide covering schema, site speed, security, and mobile accessibility."
      },
      {
        level: 3,
        topicName: `Geo-Targeted Enterprise Guide: ${cleanTitle} in Dhaka & Global Markets`,
        searchIntent: "Local & Commercial Investigation",
        description: "Location-specific optimization targeting Dhaka enterprises, international clients, and offshore teams."
      },
      {
        level: 4,
        topicName: `AI Search & GEO Strategy: How LLMs Evaluate ${cleanTitle}`,
        searchIntent: "AI Search & Future-Proofing",
        description: "Structuring content for citation by generative engines (ChatGPT, Gemini, Perplexity, Bing AI)."
      },
      {
        level: 5,
        topicName: `Executive ROI Attribution & Case Study Metrics for ${cleanTitle}`,
        searchIntent: "Transactional & Brand Intent",
        description: "Data-backed proof of performance, client retention stats, and custom conversion frameworks."
      }
    ]
  };
}
