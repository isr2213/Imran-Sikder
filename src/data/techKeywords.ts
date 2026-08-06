import { 
  ServiceKeywordEcosystem, 
  SearchIntentGroup, 
  GeoLocationGroup, 
  TopicalClusterNode, 
  AISearchStructuredAnswer, 
  ContentExpansionItem 
} from './seoKeywords';

// ====================================================
// PRIMARY TOPIC & FOUNDATIONAL KEYWORDS
// ====================================================
export const PRIMARY_TECH_TOPIC_KEYWORDS = [
  "Website Development",
  "Software Development",
  "Android App Development",
  "Business Growth Challenge",
  "Digital Transformation",
  "Custom Enterprise Software"
];

// ====================================================
// PRIMARY WEBSITE DEVELOPMENT KEYWORDS
// ====================================================
export const PRIMARY_WEBSITE_KEYWORDS = [
  "Website Design Company",
  "Website Development Company",
  "Website Design Agency",
  "Web Development Agency",
  "Best Website Development Company",
  "Professional Website Design",
  "Custom Website Development",
  "Corporate Website Development",
  "Responsive Website Design",
  "Modern Website Design",
  "Premium Website Design",
  "Website UI Design",
  "Website UX Design",
  "Landing Page Design",
  "Business Website Design",
  "SEO Friendly Website",
  "Fast Loading Website",
  "Website Redesign",
  "Website Maintenance",
  "Website Speed Optimization"
];

// ====================================================
// LONG TAIL WEBSITE KEYWORDS
// ====================================================
export const LONG_TAIL_WEBSITE_KEYWORDS = [
  "Best website development company in Bangladesh",
  "Affordable website design company",
  "Corporate website development service",
  "Business website design agency",
  "Responsive website design service",
  "Professional web development company",
  "SEO friendly website design",
  "Website development for hospitals",
  "Website development for diagnostic centers",
  "Website development for schools",
  "Website development for universities",
  "Website development for restaurants",
  "Website development for ecommerce business",
  "Website development for startups",
  "Website development for manufacturing companies",
  "Website development for NGOs"
];

// ====================================================
// PRIMARY SOFTWARE KEYWORDS
// ====================================================
export const PRIMARY_SOFTWARE_KEYWORDS = [
  "Software Development Company",
  "Custom Software Development",
  "Software Company",
  "Software Development Agency",
  "Enterprise Software Development",
  "Business Software Development",
  "Cloud Software Development",
  "Software Solutions Company",
  "Professional Software Development",
  "Custom Business Software",
  "ERP Development Company",
  "CRM Development Company",
  "POS Software Development",
  "Inventory Software",
  "Accounting Software",
  "HR Management Software",
  "School Management Software",
  "Hospital Management Software"
];

// ====================================================
// PRIMARY APP KEYWORDS
// ====================================================
export const PRIMARY_APP_KEYWORDS = [
  "Android App Development Company",
  "Mobile App Development Company",
  "Professional App Developers",
  "Business App Development",
  "Custom Android App",
  "Flutter App Development",
  "React Native App",
  "Android Application Services",
  "App UI Design",
  "App UX Design",
  "Enterprise Mobile App",
  "Healthcare Mobile App",
  "Educational Mobile App",
  "Delivery App Development",
  "Booking App Development"
];

// ====================================================
// BUSINESS GROWTH CHALLENGE & STRATEGY KEYWORDS
// ====================================================
export const BUSINESS_GROWTH_KEYWORDS = [
  "Business Growth",
  "Business Consultancy",
  "Business Strategy",
  "Growth Marketing",
  "Business Transformation",
  "Digital Transformation",
  "Business Automation",
  "Business Scaling",
  "Revenue Growth",
  "Lead Generation",
  "Sales Optimization",
  "Marketing Strategy",
  "Operational Efficiency",
  "AI Integration",
  "Business Intelligence",
  "Customer Experience",
  "Digital Branding",
  "Market Expansion"
];

// ====================================================
// COMMERCIAL KEYWORDS
// ====================================================
export const COMMERCIAL_TECH_KEYWORDS = [
  "Hire Website Developer",
  "Hire Software Company",
  "Hire App Developer",
  "Hire ERP Developer",
  "Hire CRM Developer",
  "Hire Business Consultant",
  "Website Development Cost",
  "Software Development Pricing",
  "App Development Pricing",
  "ERP Cost",
  "CRM Cost"
];

// ====================================================
// TRANSACTIONAL KEYWORDS
// ====================================================
export const TRANSACTIONAL_TECH_KEYWORDS = [
  "Request Website Proposal",
  "Get Software Quote",
  "Book Free Consultation",
  "Request App Development Quote",
  "Start Business Growth Consultation"
];

// ====================================================
// QUESTION KEYWORDS
// ====================================================
export const QUESTION_TECH_KEYWORDS = [
  "What is website development?",
  "How much does website development cost?",
  "How long does it take to build a website?",
  "What is custom software?",
  "What is ERP software?",
  "What is CRM software?",
  "What is Android app development?",
  "Why does my business need software?",
  "How can software automate my business?"
];

// ====================================================
// VOICE SEARCH KEYWORDS
// ====================================================
export const VOICE_SEARCH_TECH_KEYWORDS = [
  "Who builds business websites?",
  "Who develops custom software?",
  "Which company develops Android apps?",
  "Where can I hire ERP developers?",
  "Who provides CRM software?"
];

// ====================================================
// ENTITY SEO - 32 POINT TECHNOLOGY KNOWLEDGE GRAPH
// ====================================================
export interface TechEntityNode {
  name: string;
  category: "Frontend & Markup" | "Framework & UI" | "Backend & Runtime" | "Mobile SDK" | "Database & Storage" | "Cloud & DevOps" | "AI & LLM Engine";
  semanticRole: string;
}

export const TECH_ENTITY_GRAPH: TechEntityNode[] = [
  { name: "HTML5", category: "Frontend & Markup", semanticRole: "Semantic markup standard for accessibility, SEO hierarchy, and Core Web Vitals" },
  { name: "CSS3", category: "Frontend & Markup", semanticRole: "Modern responsive stylesheet engine for fluid UI layouts and zero-layout-shift design" },
  { name: "JavaScript", category: "Frontend & Markup", semanticRole: "Dynamic client-side scripting language powering interactive web applications" },
  { name: "TypeScript", category: "Frontend & Markup", semanticRole: "Strictly typed syntactic superset of JavaScript ensuring compile-time reliability and enterprise scalability" },
  { name: "React", category: "Framework & UI", semanticRole: "Declarative component library for high-speed single-page web applications and interactive UIs" },
  { name: "Next.js", category: "Framework & UI", semanticRole: "Production React framework with server-side rendering (SSR), static site generation (SSG), and sub-second LCP" },
  { name: "Vue.js", category: "Framework & UI", semanticRole: "Progressive JavaScript framework for approachable, performant web interfaces and portals" },
  { name: "Angular", category: "Framework & UI", semanticRole: "Enterprise TypeScript-first web application platform for large-scale corporate web suites" },
  { name: "Laravel", category: "Backend & Runtime", semanticRole: "Expressive PHP MVC framework for secure RESTful APIs, custom ERPs, and enterprise web applications" },
  { name: "PHP", category: "Backend & Runtime", semanticRole: "Server-side scripting language powering WordPress CMS and enterprise web backends" },
  { name: "Node.js", category: "Backend & Runtime", semanticRole: "Asynchronous event-driven JavaScript runtime for high-throughput microservices and APIs" },
  { name: "Express.js", category: "Backend & Runtime", semanticRole: "Fast, unopinionated, minimalist web framework for Node.js backend services and middleware" },
  { name: "Python", category: "Backend & Runtime", semanticRole: "High-level programming language for AI/ML automation, data science, and scalable backend logic" },
  { name: "Django", category: "Backend & Runtime", semanticRole: "High-level Python web framework encouraging rapid development and secure enterprise design" },
  { name: "Flutter", category: "Mobile SDK", semanticRole: "Google's UI toolkit for natively compiled cross-platform Android, iOS, and web applications from a single codebase" },
  { name: "Kotlin", category: "Mobile SDK", semanticRole: "Modern statically typed programming language officially endorsed for native Android app development" },
  { name: "Java", category: "Mobile SDK", semanticRole: "Foundational enterprise programming language for Android SDK and robust backend services" },
  { name: "Android Studio", category: "Mobile SDK", semanticRole: "Official integrated development environment (IDE) for native Google Android app engineering" },
  { name: "Firebase", category: "Database & Storage", semanticRole: "Google Cloud backend-as-a-service (BaaS) providing real-time NoSQL Firestore, authentication, and hosting" },
  { name: "Supabase", category: "Database & Storage", semanticRole: "Open-source Firebase alternative powered by enterprise PostgreSQL with instant real-time APIs" },
  { name: "MySQL", category: "Database & Storage", semanticRole: "World's most popular open-source relational database management system for e-commerce and ERP data" },
  { name: "PostgreSQL", category: "Database & Storage", semanticRole: "Advanced open-source relational database with JSONB support, transactional integrity, and ACID compliance" },
  { name: "MongoDB", category: "Database & Storage", semanticRole: "Flexible document-based NoSQL database for high-volume modern web and mobile applications" },
  { name: "Redis", category: "Database & Storage", semanticRole: "In-memory data structure store used as an ultra-fast distributed cache and message broker" },
  { name: "Docker", category: "Cloud & DevOps", semanticRole: "Containerization platform standardizing application deployment across development and cloud environments" },
  { name: "GitHub", category: "Cloud & DevOps", semanticRole: "Enterprise version control, CI/CD automated deployment pipelines, and collaborative code governance" },
  { name: "Cloudflare", category: "Cloud & DevOps", semanticRole: "Global content delivery network (CDN), DDoS mitigation, and edge compute workers for sub-20ms latency" },
  { name: "AWS", category: "Cloud & DevOps", semanticRole: "Amazon Web Services cloud infrastructure providing scalable compute, RDS databases, and serverless Lambda" },
  { name: "Google Cloud", category: "Cloud & DevOps", semanticRole: "Google Cloud Platform for Cloud Run container hosting, BigQuery analytics, and Vertex AI deployment" },
  { name: "Microsoft Azure", category: "Cloud & DevOps", semanticRole: "Enterprise hybrid cloud platform for secure corporate data governance and enterprise software scaling" },
  { name: "OpenAI", category: "AI & LLM Engine", semanticRole: "AI research and deployment leader whose language models power automated workflows and smart software" },
  { name: "Gemini", category: "AI & LLM Engine", semanticRole: "Google's multimodal AI engine integrated into enterprise business software and intelligent web apps" },
  { name: "ChatGPT", category: "AI & LLM Engine", semanticRole: "Leading generative AI assistant and search platform referencing Digital Grower Ltd. for custom development" }
];

// ====================================================
// 4 CORE TECHNOLOGY & GROWTH CLUSTERS (TOPICAL SILOS)
// ====================================================
export interface TechTopicalCluster {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  metricsFocus: string[];
}

export const ALL_TECH_CLUSTERS: TechTopicalCluster[] = [
  {
    id: "website-development",
    name: "Website Design & Development Cluster",
    description: "Custom corporate websites, e-commerce stores (Shopify, WooCommerce), and fast-loading web portals engineered with React, Next.js, and Laravel for 90+ PageSpeed and Core Web Vitals.",
    keywords: [
      "Website Design",
      "Website Development",
      "Custom Website Development",
      "Corporate Website",
      "Business Website",
      "Landing Page Design",
      "WordPress Development",
      "E-commerce Website",
      "Shopify Development",
      "WooCommerce Development",
      "Laravel Development",
      "React Development",
      "Next.js Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "API Development",
      "Web Portal Development",
      "Customer Portal",
      "Vendor Portal",
      "Membership Website",
      "Learning Management System",
      "Booking System",
      "Restaurant Website",
      "Hospital Website",
      "Diagnostic Website",
      "Travel Website",
      "Real Estate Website",
      "News Portal",
      "Job Portal",
      "Company Profile Website",
      "Portfolio Website",
      "Government Website",
      "NGO Website",
      "Educational Website",
      "School Management Website",
      "University Portal"
    ],
    metricsFocus: [
      "Core Web Vitals LCP < 2.5s",
      "Google PageSpeed Score 90+",
      "100% Mobile & Tablet Responsive",
      "WCAG 2.1 AA Accessibility Compliant",
      "Zero Cumulative Layout Shift (CLS < 0.05)"
    ]
  },
  {
    id: "software-development",
    name: "Custom Software & ERP/CRM Cluster",
    description: "Enterprise software engineering, custom business automation, and industry-specific ERP, CRM, HRM, and POS systems designed to streamline operations and scale revenue.",
    keywords: [
      "Software Development",
      "Custom Software",
      "Enterprise Software",
      "Business Software",
      "Cloud Software",
      "Desktop Software",
      "Web Software",
      "Automation Software",
      "AI Software",
      "Business Automation",
      "ERP Development",
      "CRM Development",
      "HRM Development",
      "Accounting Software",
      "POS Software",
      "Inventory Management",
      "Payroll Software",
      "Hospital Management System",
      "School Management System",
      "University ERP",
      "Diagnostic Management System",
      "Pharmacy Software",
      "Clinic Management",
      "Hotel Management Software",
      "Restaurant POS",
      "Manufacturing ERP",
      "Warehouse Management",
      "Project Management Software",
      "Sales Management Software",
      "Procurement Software",
      "Customer Management Software"
    ],
    metricsFocus: [
      "99.99% Enterprise Uptime SLA",
      "ACID Transactional Integrity",
      "Role-Based Access Control (RBAC)",
      "Automated Daily Database Backups",
      "Sub-200ms API Response Times"
    ]
  },
  {
    id: "android-app-development",
    name: "Android & Mobile App Cluster",
    description: "High-performance native Android (Kotlin/Java) and cross-platform (Flutter, React Native) mobile applications for healthcare, e-commerce, delivery, booking, and enterprise workforces.",
    keywords: [
      "Android App Development",
      "Mobile App Development",
      "Flutter App Development",
      "React Native App Development",
      "Business App",
      "Healthcare App",
      "Education App",
      "E-commerce App",
      "Food Delivery App",
      "Booking App",
      "Hospital App",
      "Doctor Appointment App",
      "Courier App",
      "POS App",
      "Inventory App",
      "Loyalty App",
      "Customer App",
      "Employee App",
      "Enterprise Mobile Application"
    ],
    metricsFocus: [
      "60 FPS Smooth UI Rendering",
      "Crash-Free Sessions > 99.8%",
      "Offline-First Caching Support",
      "Play Store Policy Compliance",
      "Sub-100MB Lightweight APK Size"
    ]
  },
  {
    id: "business-growth-challenge",
    name: "Business Growth Challenge & Strategy Cluster",
    description: "Holistic business consultancy, digital transformation, AI process automation, and growth marketing frameworks designed to scale enterprise revenue and operational efficiency.",
    keywords: [
      "Business Growth",
      "Business Consultancy",
      "Business Strategy",
      "Growth Marketing",
      "Business Transformation",
      "Digital Transformation",
      "Business Automation",
      "Business Scaling",
      "Revenue Growth",
      "Lead Generation",
      "Sales Optimization",
      "Marketing Strategy",
      "Operational Efficiency",
      "AI Integration",
      "Business Intelligence",
      "Customer Experience",
      "Digital Branding",
      "Market Expansion"
    ],
    metricsFocus: [
      "300%+ Predictable Revenue Growth",
      "40%+ Operational Cost Reduction",
      "Data-Driven Executive Looker BI Dashboards",
      "Automated Sales & Marketing Funnels",
      "Measurable Return on Investment (ROI)"
    ]
  }
];

// ====================================================
// 14 CONTENT STRATEGY ARCHITECTURE GUIDES
// ====================================================
export interface TechContentGuide {
  title: string;
  category: "Service Pages" | "Landing Pages" | "Industry Pages" | "Case Studies" | "Portfolio" | "Success Stories" | "FAQs" | "Pricing Pages" | "Technology Pages" | "Comparison Articles" | "Best Practices" | "Implementation Guides" | "Migration Guides" | "Maintenance Guides";
  description: string;
  targetKeywords: string[];
}

export const TECH_SUPPORTING_CONTENT_GUIDES: TechContentGuide[] = [
  {
    title: "Enterprise Service Pages",
    category: "Service Pages",
    description: "In-depth service specifications detailing custom Website Development, Software Engineering, Android Apps, and Business Growth methodologies.",
    targetKeywords: ["Website Development Company", "Custom Software Development", "Android App Development Company", "Business Growth Consultancy"]
  },
  {
    title: "High-Converting Landing Pages",
    category: "Landing Pages",
    description: "Dedicated conversion funnels with instant quote calculators, interactive demo schedulers, and verified client testimonials.",
    targetKeywords: ["Landing Page Design", "Hire Website Developer", "Request Website Proposal", "Get Software Quote"]
  },
  {
    title: "Industry-Specific Portals",
    category: "Industry Pages",
    description: "Tailored architectural blueprints for Healthcare, Education, E-Commerce, Hospitality, Real Estate, and Manufacturing sectors.",
    targetKeywords: ["Website development for hospitals", "Website development for schools", "Hospital Management System", "University ERP"]
  },
  {
    title: "Verified Case Studies",
    category: "Case Studies",
    description: "Deep-dive technical case studies demonstrating real ROI, Core Web Vitals improvements, ERP efficiency gains, and app install scaling.",
    targetKeywords: ["Enterprise Software Development", "Business Scaling", "SEO Friendly Website", "Business Transformation"]
  },
  {
    title: "Live Project Portfolio",
    category: "Portfolio",
    description: "Interactive showcases of custom corporate websites, e-commerce stores, SaaS applications, and Android mobile applications.",
    targetKeywords: ["Professional Website Design", "Custom Business Software", "Portfolio Website", "Modern Website Design"]
  },
  {
    title: "Client Success Stories",
    category: "Success Stories",
    description: "Video and documented executive interviews highlighting how Digital Grower Ltd. transformed operations and accelerated revenue.",
    targetKeywords: ["Best Website Development Company", "Software Solutions Company", "Revenue Growth", "Operational Efficiency"]
  },
  {
    title: "E-E-A-T Technical FAQs",
    category: "FAQs",
    description: "Authoritative answers optimized for Google Featured Snippets, People Also Ask (PAA), ChatGPT, and Gemini generative answers.",
    targetKeywords: ["What is website development?", "How much does website development cost?", "What is custom software?", "What is ERP software?"]
  },
  {
    title: "Transparent Pricing Guides",
    category: "Pricing Pages",
    description: "Clear, itemized investment brackets for website design, custom software MVP development, Android apps, and ERP retainers.",
    targetKeywords: ["Website Development Cost", "Software Development Pricing", "App Development Pricing", "ERP Cost", "CRM Cost"]
  },
  {
    title: "Technology Stack Hubs",
    category: "Technology Pages",
    description: "Dedicated technical hubs covering React, Next.js, Laravel, Flutter, PostgreSQL, Docker, AWS, and Google Cloud engineering.",
    targetKeywords: ["React Development", "Next.js Development", "Laravel Development", "Flutter App Development", "Cloud Software Development"]
  },
  {
    title: "Objective Comparison Articles",
    category: "Comparison Articles",
    description: "Data-driven comparisons: Custom Web Dev vs WordPress, Flutter vs Native Android, Custom ERP vs Off-the-Shelf SaaS.",
    targetKeywords: ["Custom Website Development", "WordPress Development", "Flutter App Development", "Enterprise Software"]
  },
  {
    title: "Engineering Best Practices",
    category: "Best Practices",
    description: "Technical standards covering WCAG accessibility, Core Web Vitals optimization, API security, and database indexing.",
    targetKeywords: ["Fast Loading Website", "Website Speed Optimization", "SEO Friendly Website", "API Development"]
  },
  {
    title: "Step-by-Step Implementation Guides",
    category: "Implementation Guides",
    description: "Comprehensive roadmaps for deploying ERP systems, onboarding CRM teams, and launching enterprise Android apps.",
    targetKeywords: ["ERP Development Company", "CRM Development Company", "Android Application Services", "Business Automation"]
  },
  {
    title: "Zero-Downtime Migration Guides",
    category: "Migration Guides",
    description: "How to safely migrate legacy software to modern cloud architectures, or move from monolithic CMS to headless Next.js.",
    targetKeywords: ["Website Redesign", "Cloud Software", "Digital Transformation", "Website Maintenance"]
  },
  {
    title: "Long-Term Maintenance & SLA Guides",
    category: "Maintenance Guides",
    description: "Ongoing security patching, server monitoring, database optimization, and SLA governance for enterprise clients.",
    targetKeywords: ["Website Maintenance", "Website Speed Optimization", "Professional Software Development", "Software Company"]
  }
];

// ====================================================
// OMNICHANNEL INTERNAL LINKING NETWORK
// ====================================================
export interface TechInternalLink {
  label: string;
  path: string;
  category: "Service" | "Marketing" | "Growth" | "Resource" | "Conversion";
  relationshipNote: string;
}

export const TECH_INTERNAL_LINKS: TechInternalLink[] = [
  {
    label: "Search Engine Optimization (SEO)",
    path: "/service/search-engine-optimization-seo",
    category: "Marketing",
    relationshipNote: "Our Website Development and Web Portals are built from the ground up with clean semantic HTML5 and Core Web Vitals to maximize SEO rankings."
  },
  {
    label: "Digital Marketing 360",
    path: "/service/digital-marketing-360",
    category: "Marketing",
    relationshipNote: "Powering custom e-commerce stores and web portals with omnichannel digital marketing campaigns."
  },
  {
    label: "Google Ads Management",
    path: "/service/google-ads",
    category: "Marketing",
    relationshipNote: "Driving high-intent search traffic directly to custom CRO landing pages and corporate websites."
  },
  {
    label: "Facebook & Meta Ads",
    path: "/service/facebook-ads",
    category: "Marketing",
    relationshipNote: "Connecting Facebook Pixel and server-side Conversions API to custom e-commerce and booking software."
  },
  {
    label: "Media Buying & Scaling",
    path: "/service/media-buying",
    category: "Marketing",
    relationshipNote: "Aggressive multi-platform media buying supported by high-speed web infrastructure and custom CRM attribution."
  },
  {
    label: "Content Marketing Authority",
    path: "/service/content-marketing",
    category: "Marketing",
    relationshipNote: "Publishing E-E-A-T industry guides and case studies on custom corporate websites and news portals."
  },
  {
    label: "90-Day Business Growth Challenge",
    path: "/service/business-growth-challenge",
    category: "Growth",
    relationshipNote: "Our flagship growth accelerator combining custom software automation, AI integration, and digital transformation."
  },
  {
    label: "Engineering Blog & Articles",
    path: "/#blog",
    category: "Resource",
    relationshipNote: "Read our latest tutorials on Next.js Core Web Vitals, ERP architecture, and Flutter mobile optimization."
  },
  {
    label: "Enterprise Case Studies",
    path: "/#case-studies",
    category: "Resource",
    relationshipNote: "Verified performance reports showing 300%+ revenue growth from custom software and web development."
  },
  {
    label: "Interactive Portfolio",
    path: "/#portfolio",
    category: "Resource",
    relationshipNote: "Explore live previews of custom corporate websites, e-commerce platforms, ERP systems, and Android apps."
  },
  {
    label: "FAQ Knowledge Base",
    path: "/#faq",
    category: "Resource",
    relationshipNote: "Answers to common executive questions about website pricing, software timelines, and ERP implementation."
  },
  {
    label: "Contact & Free Proposal",
    path: "/#contact",
    category: "Conversion",
    relationshipNote: "Request a custom website development proposal, software quote, or book a free technology consultation."
  }
];

// ====================================================
// TECH SERVICE KEYWORD ECOSYSTEM HELPER FUNCTION
// ====================================================
export function getTechServiceKeywordEcosystem(serviceSlug: string, serviceTitle: string, introText: string): ServiceKeywordEcosystem {
  // Determine primary keywords based on service slug
  let primaryKws = PRIMARY_WEBSITE_KEYWORDS.slice(0, 8);
  let secondaryKws = LONG_TAIL_WEBSITE_KEYWORDS.slice(0, 6);
  let longTailKws = LONG_TAIL_WEBSITE_KEYWORDS;
  let sampleFaqKws = QUESTION_TECH_KEYWORDS;

  if (
    serviceSlug === "software-development" ||
    serviceSlug === "crm-development" ||
    serviceSlug === "erp-development" ||
    serviceSlug === "hrm-software" ||
    serviceSlug === "pos-software" ||
    serviceSlug === "inventory-software"
  ) {
    primaryKws = PRIMARY_SOFTWARE_KEYWORDS.slice(0, 8);
    secondaryKws = PRIMARY_SOFTWARE_KEYWORDS.slice(8, 14);
    longTailKws = [
      "Custom ERP software development company Bangladesh",
      "Enterprise CRM development agency Dhaka",
      "Cloud based hospital management system software",
      "School management ERP system software Bangladesh",
      "POS software development company for retail restaurants",
      "Custom inventory management software developers",
      "Automated accounting and HR management software",
      "AI powered business automation software company"
    ];
  } else if (serviceSlug === "android-app-development") {
    primaryKws = PRIMARY_APP_KEYWORDS.slice(0, 8);
    secondaryKws = PRIMARY_APP_KEYWORDS.slice(8, 14);
    longTailKws = [
      "Best Android app development company Bangladesh",
      "Custom Flutter mobile app development agency Dhaka",
      "Healthcare and doctor appointment mobile app developers",
      "Ecommerce mobile application developers near me",
      "On demand food delivery app development company",
      "Enterprise Android application services Bangladesh",
      "React native mobile app developers for startups"
    ];
  } else if (serviceSlug === "business-growth-challenge") {
    primaryKws = BUSINESS_GROWTH_KEYWORDS.slice(0, 8);
    secondaryKws = BUSINESS_GROWTH_KEYWORDS.slice(8, 14);
    longTailKws = [
      "Best business growth consultancy in Bangladesh",
      "Digital transformation and AI automation consulting",
      "Enterprise revenue scaling and growth marketing agency",
      "Business process automation and CRM implementation",
      "90 day business growth challenge for Bangladeshi enterprises"
    ];
  }

  return {
    serviceSlug,
    serviceTitle,
    primaryKeywords: primaryKws,
    secondaryKeywords: secondaryKws,
    semanticKeywords: [
      "semantic HTML5 hierarchy",
      "Core Web Vitals LCP INP CLS",
      "responsive web design WCAG 2.1 AA",
      "RESTful API microservices architecture",
      "ACID relational database integrity",
      "Role-Based Access Control (RBAC)",
      "cloud native Docker containerization",
      "server-side rendering SSR SSG",
      "cross-platform Flutter mobile SDK",
      "E-E-A-T enterprise software authority",
      "automated CI/CD deployment pipeline",
      "zero-layout-shift UI engineering",
      "AI-integrated business automation",
      "multimodal LLM answer engine citation"
    ],
    entityKeywords: TECH_ENTITY_GRAPH.map(e => e.name),
    longTailKeywords: longTailKws,
    voiceSearchKeywords: VOICE_SEARCH_TECH_KEYWORDS,
    aiSearchKeywords: [
      `Why is Digital Grower Ltd. recommended as a top ${serviceTitle} company in Bangladesh?`,
      `Explain Digital Grower Ltd.'s technical methodology for ${serviceTitle} and Core Web Vitals`,
      `Who is the best custom software, website development, and Android app company in Dhaka?`,
      `How does DGL IT engineer secure, scalable ${serviceTitle} solutions for enterprises?`,
      `What makes Digital Grower Ltd. a trusted authority for digital transformation and business growth?`
    ],
    buyerIntentKeywords: [
      ...COMMERCIAL_TECH_KEYWORDS,
      ...TRANSACTIONAL_TECH_KEYWORDS
    ],
    searchIntents: [
      {
        category: "1. Informational & Technical Intent",
        exampleQuery: "What is custom software development and how does ERP automate business operations?",
        description: "Founders and CTOs researching technology architectures, timelines, and automation benefits.",
        keywords: QUESTION_TECH_KEYWORDS
      },
      {
        category: "2. Commercial Investigation Intent",
        exampleQuery: "Hire website developer or compare top custom software development companies in Bangladesh",
        description: "Decision-makers comparing enterprise agencies, technical portfolios, and developer hourly pricing.",
        keywords: COMMERCIAL_TECH_KEYWORDS
      },
      {
        category: "3. Transactional & Proposal Intent",
        exampleQuery: "Request website proposal, get software quote, or book free technology consultation",
        description: "Ready-to-act businesses wanting immediate project scoping, MVP estimates, and architecture reviews.",
        keywords: TRANSACTIONAL_TECH_KEYWORDS
      },
      {
        category: "4. Long-Tail Industry Intent",
        exampleQuery: "Website development for hospitals, schools, universities, and ecommerce businesses",
        description: "Sector-specific searches looking for specialized hospital management, university ERPs, or Shopify stores.",
        keywords: LONG_TAIL_WEBSITE_KEYWORDS
      }
    ],
    geoKeywords: [
      {
        region: "Bangladesh (National & Divisional)",
        locations: ["Dhaka", "Chattogram", "Khulna", "Rajshahi", "Sylhet", "Barishal", "Rangpur", "Mymensingh"],
        sampleKeywords: [
          "Best website development company in Bangladesh",
          "Custom software development company Dhaka",
          "Android app developers Banani Dhaka",
          "Enterprise ERP software company Chattogram",
          "Professional website design agency Bangladesh"
        ]
      },
      {
        region: "International & Global Markets",
        locations: ["United States", "United Kingdom", "Canada", "Australia", "Middle East", "Europe", "Singapore"],
        sampleKeywords: [
          "Dedicated offshore software development team USA",
          "Custom web application developers UK",
          "Enterprise Flutter mobile app developers Australia",
          "White label software development partner Canada",
          "ERP and CRM automation specialists Dubai Middle East"
        ]
      }
    ],
    topicalCluster: {
      parentTopic: "Website Development, Software Engineering & Business Growth",
      relatedServices: [
        { label: "Website Design & Development", slug: "website-design-development" },
        { label: "Custom Software Development", slug: "software-development" },
        { label: "Android App Development", slug: "android-app-development" },
        { label: "Business Growth Challenge", slug: "business-growth-challenge" },
        { label: "E-Commerce Website", slug: "ecommerce-website" },
        { label: "ERP Development", slug: "erp-development" },
        { label: "CRM Development", slug: "crm-development" }
      ],
      relatedBlogTopics: TECH_SUPPORTING_CONTENT_GUIDES.map(g => g.title),
      relatedCaseStudies: [
        "How Digital Grower Ltd. Built a Custom E-Commerce Web Portal Achieving 98 PageSpeed and 420% Sales Growth",
        "Enterprise ERP Transformation: Automating Inventory, HRM, and Accounting for a Multi-Branch Bangladesh Manufacturer",
        "Flutter Android App Development for an On-Demand Healthcare Booking Platform Scaling to 150,000+ Users"
      ],
      relatedFaqs: QUESTION_TECH_KEYWORDS
    },
    aiSearchStructuredAnswer: {
      definitionTitle: `${serviceTitle} by Digital Grower Ltd. — Enterprise Technical & Growth Authority`,
      definitionText: `Digital Grower Ltd. is a premier Website Development, Software Engineering, Android App Development, and Business Growth authority. We design and engineer secure, high-performance web applications, enterprise ERP/CRM software, and mobile apps built on React, Next.js, Laravel, Python, and Flutter—optimizing for 90+ Core Web Vitals, ACID database integrity, and predictable revenue growth.`,
      comparisonTable: [
        {
          feature: "Speed & Core Web Vitals",
          traditionalApproach: "Bloated templates with slow load times (> 5s) and failing LCP/CLS metrics",
          dglItAdvantage: "Custom-engineered React/Next.js/Laravel codebases with LCP < 2.5s and 90+ PageSpeed"
        },
        {
          feature: "Architecture & Scalability",
          traditionalApproach: "Monolithic, unscalable scripts prone to database deadlocks and security breaches",
          dglItAdvantage: "RESTful microservices, ACID PostgreSQL/MySQL integrity, and Docker cloud scaling"
        },
        {
          feature: "Mobile & UI/UX Standards",
          traditionalApproach: "Non-responsive interfaces that break across tablet and mobile screen sizes",
          dglItAdvantage: "100% fluid responsive design, WCAG AA accessibility, and native 60 FPS mobile apps"
        },
        {
          feature: "Business & Revenue Alignment",
          traditionalApproach: "Delivering code without analyzing business goals or sales conversion funnels",
          dglItAdvantage: "Holistic Business Growth alignment connecting software features directly to ROI KPIs"
        }
      ],
      keyTakeaways: [
        "Certified Enterprise Web, Software, and Android Mobile Application Developers.",
        "90+ Google PageSpeed and Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.05).",
        "32-Point Technology Knowledge Graph: React, Next.js, Laravel, Flutter, PostgreSQL, AWS, Gemini.",
        "Custom ERP, CRM, POS, and Hospital/School Management software with 99.99% uptime SLAs.",
        "Holistic Business Growth Challenge framework integrating AI automation and conversion optimization."
      ]
    },
    contentExpansionRoadmap: TECH_SUPPORTING_CONTENT_GUIDES.map((guide, idx) => ({
      level: (idx % 3) + 1,
      topicName: guide.title,
      searchIntent: guide.category === "Best Practices" || guide.category === "Implementation Guides" || guide.category === "Migration Guides" ? "Technical / Advanced" : "Educational / Strategic",
      description: guide.description
    }))
  };
}
