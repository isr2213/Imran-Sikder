import { 
  BadgeDollarSign, 
  Globe, 
  Layout, 
  MousePointerClick, 
  Search, 
  Video, 
  PenTool, 
  Scissors, 
  ShoppingCart, 
  Code, 
  Smartphone, 
  Rocket,
  Building2,
  Briefcase,
  ShoppingBag,
  UserCheck,
  FileText,
  Sliders,
  Database,
  Cpu,
  Layers,
  ShieldCheck,
  BarChart,
  MapPin,
  Target,
  Share2,
  Mail,
  Terminal,
  Archive,
  Users,
  CreditCard,
  Box,
  Zap,
  Server,
  HardDrive,
  Monitor
} from "lucide-react";

export const allServices = [
  {
    slug: "media-buying",
    title: "Media Buying",
    tagline: "Maximize your ROI with data-driven ad placements.",
    intro: "Strategic ad placements across digital platforms to maximize your ROI and reach the perfect audience. We focus on converting every dollar spent into measurable business growth.",
    icon: BadgeDollarSign,
    includes: [
      "Facebook Ads", "Instagram Ads", "Google Search Ads", "Google Display Ads", 
      "Google Shopping Ads", "YouTube Ads", "TikTok Ads", "LinkedIn Ads", 
      "Remarketing Campaigns", "Audience Research", "Competitor Analysis", 
      "Campaign Setup", "Pixel Installation", "Conversion Tracking", 
      "Budget Planning", "A/B Testing", "Lead Generation", "Sales Campaign", 
      "Performance Optimization", "Monthly Reporting", "ROAS Optimization"
    ],
    whyChooseUs: "We use advanced data analytics and rigorous A/B testing to ensure your ads are shown to the right people at the right time, minimizing wasted spend.",
    benefits: ["Lower Cost per Acquisition (CPA)", "Higher Return on Ad Spend (ROAS)", "Rapid scale for campaigns", "Precise audience targeting"],
    process: [
      { title: "Audit & Strategy", desc: "We analyze your past performance and map out an ideal media mix." },
      { title: "Setup & Tracking", desc: "Implement robust pixel and server-side tracking to ensure accurate attribution." },
      { title: "Launch & Test", desc: "Roll out initial campaigns with multiple creative variations." },
      { title: "Optimize & Scale", desc: "Allocate budget to winning ads and scale up aggressively." }
    ],
    industries: ["E-commerce", "Real Estate", "Healthcare", "Education", "SaaS"]
  },
  {
    slug: "digital-marketing-360",
    title: "Digital Marketing 360",
    tagline: "Comprehensive end-to-end digital marketing campaigns.",
    intro: "A unified approach to digital marketing that drives brand awareness and direct sales across all channels simultaneously.",
    icon: Globe,
    includes: [
      "Complete Digital Strategy", "Brand Positioning", "Social Media Marketing",
      "Search Engine Marketing", "Email Marketing", "Content Marketing",
      "Influencer Marketing", "Affiliate Marketing", "Analytics",
      "Marketing Automation", "Conversion Optimization", "Online Reputation Management"
    ],
    whyChooseUs: "Rather than isolated tactics, we build interconnected marketing ecosystems where every channel supports the others.",
    benefits: ["Consistent brand messaging", "Synergy across multiple channels", "Comprehensive audience reach", "Maximized customer lifetime value"],
    process: [
      { title: "Discovery & Planning", desc: "Deep dive into your business model and target audience." },
      { title: "Omnichannel Strategy", desc: "Develop a cohesive plan spanning SEO, Social, Email, and Ads." },
      { title: "Execution", desc: "Deploy tailored content and campaigns across all platforms." },
      { title: "Analysis & Iteration", desc: "Continuous monitoring and refinement based on unified data." }
    ],
    industries: ["Corporate", "Retail", "B2B Services", "Hospitality"]
  },
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    tagline: "Custom, high-performance, and responsive websites.",
    intro: "We build websites tailored to convert visitors into loyal customers, combining stunning UI/UX with flawless technical execution.",
    icon: Layout,
    includes: [
      "Business Website", "Corporate Website", "Portfolio Website", 
      "E-commerce Website", "Landing Page", "WordPress Development", 
      "Custom Website", "Responsive Design", "UI/UX Design", 
      "Website Redesign", "Speed Optimization", "Security", 
      "SEO Friendly Development", "API Integration", "Payment Gateway", 
      "Live Chat", "Maintenance"
    ],
    whyChooseUs: "Our websites aren't just beautiful; they are built for speed, SEO, and maximum conversion rates.",
    benefits: ["Increased organic traffic", "Higher conversion rates", "Enhanced brand credibility", "Lightning-fast load times"],
    process: [
      { title: "Wireframing & UX", desc: "Mapping out user journeys and core site architecture." },
      { title: "UI Design", desc: "Creating stunning, brand-aligned visual interfaces." },
      { title: "Development", desc: "Coding with modern, robust frameworks and best practices." },
      { title: "Testing & Launch", desc: "Rigorous QA testing for speed, responsiveness, and security." }
    ],
    industries: ["Startups", "E-commerce", "Agencies", "Healthcare", "Education"]
  },
  {
    slug: "facebook-google-ads-marketing",
    title: "Facebook & Google Ads Marketing",
    tagline: "Data-driven ad campaigns on the world's biggest platforms.",
    intro: "Generate high-quality leads and explosive sales through laser-targeted campaigns on Meta and Google networks.",
    icon: MousePointerClick,
    includes: [
      "Facebook Campaign", "Instagram Campaign", "Messenger Ads", 
      "Google Search Ads", "Display Ads", "Shopping Ads", 
      "Video Ads", "Lead Ads", "Conversion Ads", 
      "Pixel Setup", "Conversion API", "Analytics", "Retargeting"
    ],
    whyChooseUs: "We utilize advanced AI bidding and hyper-segmented audience targeting to outperform your competitors.",
    benefits: ["Immediate traffic generation", "Highly qualified leads", "Dominate local & global search", "Advanced retargeting capabilities"],
    process: [
      { title: "Account Audit", desc: "Reviewing past data to find missed opportunities." },
      { title: "Audience & Keyword Mapping", desc: "Identifying high-intent search terms and audience profiles." },
      { title: "Creative & Copy", desc: "Designing thumb-stopping visuals and persuasive ad copy." },
      { title: "Optimization", desc: "Daily monitoring and bid adjustments to maximize ROAS." }
    ],
    industries: ["Local Businesses", "E-commerce", "Real Estate", "B2B"]
  },
  {
    slug: "search-engine-optimization-seo",
    title: "Search Engine Optimization (SEO)",
    tagline: "Dominate search rankings with advanced strategies.",
    intro: "Secure top positions on Google with our comprehensive technical, on-page, and off-page SEO methodologies.",
    icon: Search,
    includes: [
      "Website Audit", "Keyword Research", "On-page SEO", "Off-page SEO", 
      "Technical SEO", "Local SEO", "E-commerce SEO", "Content Optimization", 
      "Link Building", "Google Search Console", "Google Analytics", 
      "Monthly SEO Report"
    ],
    whyChooseUs: "We use strictly white-hat techniques that build long-term, sustainable, and algorithm-proof organic traffic.",
    benefits: ["Long-term free traffic", "Higher domain authority", "Better user experience", "Increased brand trust"],
    process: [
      { title: "Technical Audit", desc: "Fixing crawl errors, site speed, and architecture issues." },
      { title: "Keyword Strategy", desc: "Targeting high-volume, low-competition commercial keywords." },
      { title: "On-Page Optimization", desc: "Optimizing meta tags, headers, and internal linking." },
      { title: "Authority Building", desc: "Acquiring high-quality backlinks from relevant domains." }
    ],
    industries: ["Publishers", "SaaS", "E-commerce", "Local Services"]
  },
  {
    slug: "video-production-ovc-tvc",
    title: "Video Production (OVC / TVC)",
    tagline: "Professional commercial video production.",
    intro: "Tell your brand story and captivate your audience with high-end TVCs, OVCs, and corporate documentaries.",
    icon: Video,
    includes: [
      "TV Commercial", "Corporate Video", "Brand Story", "Product Video", 
      "Promotional Video", "Drone Video", "Motion Graphics", "Script Writing", 
      "Voice Over", "Studio Shoot", "Outdoor Shoot", "Video Marketing"
    ],
    whyChooseUs: "Our cinematic approach combined with marketing psychology ensures your videos don't just look good—they sell.",
    benefits: ["Premium brand perception", "Higher engagement rates", "Complex ideas simplified", "Versatile marketing assets"],
    process: [
      { title: "Pre-Production", desc: "Scripting, storyboarding, and location scouting." },
      { title: "Production", desc: "High-end cinematic filming with professional crew and gear." },
      { title: "Post-Production", desc: "Editing, color grading, sound design, and VFX." },
      { title: "Delivery", desc: "Final render in multiple formats for web and broadcast." }
    ],
    industries: ["FMCG", "Real Estate", "Automotive", "Fashion"]
  },
  {
    slug: "graphic-design-motion-graphics",
    title: "Graphic Design & Motion Graphics",
    tagline: "Eye-catching visuals that elevate your brand.",
    intro: "Create a memorable brand identity with striking graphic design and dynamic motion graphics.",
    icon: PenTool,
    includes: [
      "Logo Design", "Brand Identity", "Social Media Design", "Banner Design", 
      "Flyer Design", "Brochure", "Business Card", "Packaging Design", 
      "Motion Graphics", "Animated Ads", "Infographics"
    ],
    whyChooseUs: "We blend aesthetic brilliance with strategic communication to make your brand instantly recognizable.",
    benefits: ["Strong brand recall", "Professional image", "Higher ad CTRs", "Clear communication"],
    process: [
      { title: "Briefing", desc: "Understanding your brand guidelines and visual goals." },
      { title: "Conceptualization", desc: "Drafting initial sketches and style frames." },
      { title: "Design & Animation", desc: "Bringing concepts to life with pixel-perfect precision." },
      { title: "Refinement", desc: "Incorporating feedback to finalize the assets." }
    ],
    industries: ["All Industries"]
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    tagline: "Crisp, dynamic, and professional video editing.",
    intro: "Transform raw footage into highly engaging, platform-optimized video content that stops the scroll.",
    icon: Scissors,
    includes: [
      "Commercial Editing", "Social Media Reels", "YouTube Editing", 
      "Color Grading", "Motion Graphics", "Subtitle", "Sound Design", 
      "Shorts Editing"
    ],
    whyChooseUs: "We understand pacing, retention tactics, and algorithm requirements for TikTok, Reels, and YouTube.",
    benefits: ["Higher watch time", "Viral potential", "Professional polish", "Fast turnaround"],
    process: [
      { title: "Ingestion", desc: "Organizing and reviewing all raw footage." },
      { title: "Rough Cut", desc: "Assembling the storyline and pacing." },
      { title: "Polishing", desc: "Adding transitions, color grading, and sound effects." },
      { title: "Final Export", desc: "Delivering optimized files for all social platforms." }
    ],
    industries: ["Content Creators", "Agencies", "Brands", "Education"]
  },
  {
    slug: "e-commerce-support-services",
    title: "E-commerce Support Services",
    tagline: "Complete operational and marketing support.",
    intro: "Scale your online store effortlessly with our comprehensive end-to-end e-commerce management solutions.",
    icon: ShoppingCart,
    includes: [
      "Product Upload", "Product SEO", "Product Description", 
      "Inventory Management", "Order Management", "Customer Support", 
      "Shopify Support", "WooCommerce Support", "Marketplace Management"
    ],
    whyChooseUs: "We act as your dedicated backend team, ensuring seamless operations while you focus on growth.",
    benefits: ["Streamlined operations", "Improved customer satisfaction", "Optimized product listings", "Reduced overhead costs"],
    process: [
      { title: "Store Audit", desc: "Reviewing your current e-commerce setup and bottlenecks." },
      { title: "Optimization", desc: "Enhancing product descriptions, images, and SEO." },
      { title: "Management", desc: "Daily handling of inventory, orders, and customer queries." },
      { title: "Scaling", desc: "Implementing strategies to increase Average Order Value (AOV)." }
    ],
    industries: ["Retail", "Fashion", "Electronics", "FMCG"]
  },
  {
    slug: "software-development",
    title: "Software Development",
    tagline: "Custom software solutions built for scalability.",
    intro: "Automate your workflows and scale your business with robust, secure, and custom-built software applications.",
    icon: Code,
    includes: [
      "Custom Software", "ERP System", "CRM System", "HRM System", 
      "POS Software", "Inventory Software", "School Management", 
      "Hospital Management", "Accounting Software", "SaaS Platform", 
      "API Development", "Cloud Software", "Desktop Software", 
      "Maintenance & Support"
    ],
    whyChooseUs: "We build enterprise-grade software using scalable architecture that grows with your business.",
    benefits: ["Increased operational efficiency", "Data security", "Custom tailored workflows", "Reduced manual errors"],
    process: [
      { title: "Requirement Gathering", desc: "Detailed analysis of your business processes." },
      { title: "System Architecture", desc: "Designing the database, APIs, and infrastructure." },
      { title: "Agile Development", desc: "Iterative coding with regular client updates." },
      { title: "Deployment", desc: "Secure launch, staff training, and ongoing support." }
    ],
    industries: ["Healthcare", "Education", "Logistics", "Corporate"]
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    tagline: "Native and hybrid apps designed for growth.",
    intro: "Engage your customers on the go with lightning-fast, intuitive, and feature-rich Android applications.",
    icon: Smartphone,
    includes: [
      "Native Android App", "Hybrid App", "Business App", "E-commerce App", 
      "Delivery App", "Healthcare App", "Education App", "Booking App", 
      "Custom App", "Firebase Integration", "API Integration", 
      "Payment Gateway", "Push Notifications", "Play Store Publishing", 
      "App Maintenance"
    ],
    whyChooseUs: "We deliver bug-free, high-performance apps with modern UI/UX that users love to interact with.",
    benefits: ["Direct customer access", "Enhanced brand loyalty", "New revenue streams", "Valuable user data"],
    process: [
      { title: "App Strategy", desc: "Defining features, user flow, and monetization." },
      { title: "UI/UX Design", desc: "Creating intuitive and modern app interfaces." },
      { title: "Development", desc: "Writing clean, efficient, and secure code." },
      { title: "Launch", desc: "Play Store submission and post-launch maintenance." }
    ],
    industries: ["E-commerce", "Food Delivery", "Healthcare", "Startups"]
  },
  {
    slug: "business-growth-challenge",
    title: "Business Growth Challenge",
    tagline: "Our signature program to rapidly scale metrics.",
    intro: "A highly intensive, data-backed growth program designed to completely transform your business profitability and operational scale.",
    icon: Rocket,
    isPopular: true,
    includes: [
      "Business Audit", "Market Research", "Competitor Analysis", 
      "Growth Strategy", "Sales Funnel", "Branding Strategy", 
      "Lead Generation", "Conversion Optimization", "Revenue Growth", 
      "Customer Retention", "Marketing Roadmap", "KPI Tracking", 
      "Business Consultation", "AI Automation", "Scaling Strategy"
    ],
    whyChooseUs: "We don't just give advice; we implement proven scaling frameworks used by top 1% companies.",
    benefits: ["Exponential revenue growth", "Market dominance", "Optimized sales funnels", "Automated business processes"],
    process: [
      { title: "Deep Dive Audit", desc: "Uncovering the hidden bottlenecks holding your business back." },
      { title: "Strategy Formulation", desc: "Creating a customized 90-day aggressive growth plan." },
      { title: "Implementation", desc: "Executing the strategy across marketing, sales, and operations." },
      { title: "Review & Scale", desc: "Analyzing KPIs and pushing winning strategies to the limit." }
    ],
    industries: ["B2B", "SaaS", "High-Ticket Services", "E-commerce Brands"]
  },
  {
    slug: "business-website",
    title: "Business Website",
    tagline: "Modern, high-converting digital presence for growing businesses.",
    intro: "Transform your brand identity with a high-speed, responsive, and SEO-optimized business website designed to establish instant authority and generate consistent inbound leads.",
    icon: Building2,
    includes: [
      "Custom UI/UX Design", "Mobile & Tablet Responsiveness", "SEO-Ready Site Structure",
      "Lead Capture Forms", "Google Analytics & GTM Integration", "Speed & Core Web Vitals Optimization",
      "SSL & Enterprise Security Setup", "Content Management System", "Social Media Feed Integration"
    ],
    whyChooseUs: "We build business websites that act as 24/7 automated sales representatives, combining aesthetic luxury with data-driven conversion architecture.",
    benefits: ["Instant credibility with stakeholders", "Higher organic search visibility", "Sub-second load times", "Seamless user journey"],
    process: [
      { title: "Discovery & Architecture", desc: "Mapping your business goals, user personas, and conversion funnels." },
      { title: "Design & Wireframing", desc: "Creating high-fidelity interactive wireframes with luxury aesthetics." },
      { title: "Development & SEO", desc: "Coding with clean semantic HTML5/TypeScript and schema markup." },
      { title: "QA & Launch", desc: "Rigorous performance testing across devices before go-live." }
    ],
    industries: ["Corporate", "Healthcare", "Education", "Consulting", "Real Estate"]
  },
  {
    slug: "corporate-website",
    title: "Corporate Website",
    tagline: "Enterprise-grade digital portals for multinational brands.",
    intro: "Scalable, secure, and multi-lingual corporate web platforms engineered to communicate corporate governance, investor relations, and institutional value with prestige.",
    icon: Briefcase,
    includes: [
      "Enterprise Multi-Page Architecture", "Investor Relations Hub", "Media & Press Room",
      "Role-Based Admin Governance", "Multi-Language (i18n) Support", "Enterprise DDoS & WAF Protection",
      "Custom ERP/CRM API Bridges", "WCAG 2.1 AA Accessibility", "Dedicated Executive Support"
    ],
    whyChooseUs: "Our corporate architectures adhere to zero-trust security standards and high-availability cloud infrastructure for mission-critical reliability.",
    benefits: ["Enterprise security compliance", "Institutional brand prestige", "Seamless stakeholder communication", "High availability cloud uptime"],
    process: [
      { title: "Stakeholder Alignment", desc: "Interviewing department heads to unify corporate messaging." },
      { title: "Governance Design", desc: "Structuring role-based access and compliance workflows." },
      { title: "Secure Engineering", desc: "Developing with hardened cloud infrastructure and custom APIs." },
      { title: "Executive Rollout", desc: "Deploying with zero downtime and staff administration training." }
    ],
    industries: ["Banking", "Conglomerates", "Aviation", "Energy", "Insurance"]
  },
  {
    slug: "ecommerce-website",
    title: "Ecommerce Website",
    tagline: "High-volume online stores engineered for maximum conversions.",
    intro: "Power your digital retail brand with high-performing e-commerce platforms featuring frictionless checkout, dynamic product merchandising, and automated inventory syncing.",
    icon: ShoppingBag,
    includes: [
      "Custom Storefront UI/UX", "Mobile-First Shopping Cart", "One-Click Checkout Funnel",
      "Payment Gateway Integration (Stripe, BKash, SSLCommerz)", "Inventory & SKU Tracking",
      "Abandoned Cart Recovery Automation", "Dynamic Product Recommendations", "Customer Review Schema"
    ],
    whyChooseUs: "We optimize every pixel of your product catalog and checkout process to reduce cart abandonment and increase Average Order Value (AOV).",
    benefits: ["Higher conversion rates", "Reduced abandoned carts", "Automated fulfillment workflows", "Secure multi-currency payments"],
    process: [
      { title: "Catalog & Funnel Audit", desc: "Structuring your product taxonomy and checkout psychology." },
      { title: "Storefront Development", desc: "Building blazing-fast product pages with instant search." },
      { title: "Payment & API Setup", desc: "Configuring secure payment gateways and ERP inventory links." },
      { title: "Growth Optimization", desc: "Implementing up-sell, cross-sell, and loyalty funnels." }
    ],
    industries: ["Fashion & Apparel", "Electronics", "Beauty & Cosmetics", "Grocery", "Jewelry"]
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    tagline: "Stunning personal and agency showcases that close deals.",
    intro: "Elevate your professional reputation with an immersive portfolio website featuring fluid motion graphics, interactive case studies, and compelling personal branding.",
    icon: UserCheck,
    includes: [
      "Dynamic Project Showcase", "Interactive Case Study Builder", "Fluid Animation & Transitions",
      "Downloadable Media Kits / CV", "Client Testimonial Carousel", "Direct Appointment Scheduler",
      "High-Resolution Asset Optimization", "Personal Brand Storytelling"
    ],
    whyChooseUs: "We design signature digital portfolios that highlight your unique craftsmanship and turn casual visitors into high-paying clients.",
    benefits: ["Stand out from competitors", "Showcase work in high resolution", "Automated appointment booking", "Strong personal brand equity"],
    process: [
      { title: "Brand Identity Discovery", desc: "Defining your signature visual aesthetic and positioning." },
      { title: "Interactive Storytelling", desc: "Designing fluid case studies that highlight your ROI impact." },
      { title: "Motion & Craftsmanship", desc: "Integrating smooth animations and responsive layouts." },
      { title: "Portfolio Launch", desc: "Optimizing media delivery and search visibility." }
    ],
    industries: ["Architects", "Designers", "Consultants", "Filmmakers", "Photographers"]
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    tagline: "Ultra-high-converting sales funnels and campaign pages.",
    intro: "Laser-focused landing pages engineered with psychological copywriting, urgency triggers, and A/B tested call-to-actions to maximize advertising ROAS.",
    icon: FileText,
    includes: [
      "Direct Response Copywriting", "Above-the-Fold Optimization", "Multi-Step Lead Capture Forms",
      "Exit-Intent Popups", "Video Sales Letter (VSL) Layouts", "A/B Testing Ready Architecture",
      "Instant Page Load (<1 sec)", "CRM & Webhook Lead Sync"
    ],
    whyChooseUs: "Our landing pages consistently outperform industry conversion benchmarks through meticulous copywriting and friction-free user flows.",
    benefits: ["Lower cost per lead (CPL)", "Maximized ad campaign ROI", "Instant lead notifications", "Zero navigation distractions"],
    process: [
      { title: "Offer & Audience Mapping", desc: "Deconstructing your customer pain points and value proposition." },
      { title: "Conversion Copy & Layout", desc: "Writing persuasive headlines and structuring high-intent CTAs." },
      { title: "Speed Engineering", desc: "Optimizing scripts and media for sub-second visual load." },
      { title: "Analytics & Split Testing", desc: "Connecting tracking pixels and launching A/B variations." }
    ],
    industries: ["SaaS", "Real Estate", "Coaching & Courses", "Medical Clinics", "Financial Services"]
  },
  {
    slug: "wordpress-website",
    title: "WordPress Website",
    tagline: "Custom WordPress solutions without bloat or security risks.",
    intro: "Custom-developed WordPress websites featuring bespoke themes, enterprise security hardening, and lightning-fast Gutenberg blocks tailored to your exact workflows.",
    icon: Sliders,
    includes: [
      "Custom Theme Development", "Gutenberg Block Customization", "Advanced Custom Fields (ACF)",
      "Zero-Bloat Codebase", "WordPress Security Hardening", "Automated Cloud Backups",
      "SEO Plugin Configuration (Yoast/RankMath)", "WooCommerce Extension Ready"
    ],
    whyChooseUs: "We eliminate standard WordPress bloat and vulnerability risks by writing clean, custom code that loads fast and is easy for your team to manage.",
    benefits: ["Easy visual editing for staff", "Rock-solid security protection", "No slow page-builder bloat", "Full ownership of source code"],
    process: [
      { title: "Architecture & Schema", desc: "Planning custom post types and editorial taxonomy." },
      { title: "Custom Theme Development", desc: "Building responsive Gutenberg blocks from scratch." },
      { title: "Security & Optimization", desc: "Hardening login endpoints and caching layers." },
      { title: "Editorial Training", desc: "Training your content team on effortless site management." }
    ],
    industries: ["Publishing", "News & Media", "Agencies", "NGOs", "Legal Firms"]
  },
  {
    slug: "custom-website",
    title: "Custom Website",
    tagline: "Tailor-made web architectures built from the ground up.",
    intro: "When template solutions fall short, we build 100% custom web platforms using modern React, TypeScript, and Node frameworks to solve complex business challenges.",
    icon: Code,
    includes: [
      "React / Next.js / Vite Stack", "Custom API Integrations", "Server-Side Rendering (SSR)",
      "Bespoke Database Schema", "Real-time WebSocket Data", "Microservices Architecture Ready",
      "Automated CI/CD Pipeline Deployment", "Complete Technical Documentation"
    ],
    whyChooseUs: "You get full ownership of a modern, highly secure, and blazing-fast web platform built precisely around your operational roadmap.",
    benefits: ["Unlimited functional flexibility", "Zero vendor lock-in", "Maximum security & speed", "Seamless third-party API connectivity"],
    process: [
      { title: "Technical Scoping", desc: "Defining functional specs, data models, and API boundaries." },
      { title: "UI/UX & Prototyping", desc: "Designing custom interfaces tested with real end users." },
      { title: "Full-Stack Engineering", desc: "Building robust frontend and backend services." },
      { title: "Load Testing & Deployment", desc: "Staging, load testing, and production deployment." }
    ],
    industries: ["Fintech", "Logistics", "Healthcare", "E-learning", "Enterprise SaaS"]
  },
  {
    slug: "web-application",
    title: "Web Application",
    tagline: "Rich, interactive cloud web applications for enterprise scale.",
    intro: "Progressive Web Apps (PWA) and complex cloud applications engineered for high concurrency, real-time collaboration, and responsive desktop-to-mobile execution.",
    icon: Monitor,
    includes: [
      "Progressive Web App (PWA) Support", "Real-Time Collaborative Canvases", "Offline-First State Sync",
      "Role-Based Access Control (RBAC)", "High-Performance Data Grids", "REST & GraphQL API Endpoints",
      "Automated Testing & Monitoring"
    ],
    whyChooseUs: "We build intuitive, app-like browser experiences that empower your workforce and customers with lightning-fast cloud interactivity.",
    benefits: ["Native app feel in the browser", "High scalability & uptime", "Real-time data synchronization", "Secure enterprise authentication"],
    process: [
      { title: "User Journey & State Design", desc: "Mapping application workflows and data flow." },
      { title: "Frontend & API Build", desc: "Developing responsive views and secure backend microservices." },
      { title: "Security & QA Audit", desc: "Testing for concurrency, latency, and data integrity." },
      { title: "Production Launch", desc: "Deploying to scalable cloud container infrastructure." }
    ],
    industries: ["SaaS Startups", "Logistics", "Healthcare Systems", "Education Portals", "Operations"]
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    tagline: "Custom Customer Relationship Management software for your sales pipeline.",
    intro: "Streamline customer interactions, automate lead nurturing, and track sales team performance with a tailored CRM platform built for your exact business funnel.",
    icon: Users,
    includes: [
      "360-Degree Customer Profiles", "Automated Lead Scoring & Funnels", "Custom Sales Pipeline Kanban",
      "WhatsApp & SMS Messaging Integration", "Email Campaign Automation", "Sales Representative Performance KPIs",
      "Custom Reporting Dashboards", "Third-Party ERP & Ad Platform Sync"
    ],
    whyChooseUs: "Stop paying expensive per-user license fees for off-the-shelf CRMs that force you into rigid workflows. We build CRMs around how your team actually sells.",
    benefits: ["Zero per-user monthly license fees", "Complete customer data ownership", "Automated lead follow-ups", "Real-time sales revenue analytics"],
    process: [
      { title: "Sales Process Mapping", desc: "Analyzing your lead sources, pipeline stages, and closing triggers." },
      { title: "Custom CRM Design", desc: "Building intuitive dashboards for sales agents and managers." },
      { title: "Channel Integration", desc: "Connecting WhatsApp, email, ads, and website lead forms." },
      { title: "Team Onboarding", desc: "Training your salesforce and monitoring adoption metrics." }
    ],
    industries: ["Real Estate", "Automotive", "Insurance", "Recruitment", "B2B Agencies"]
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    tagline: "Enterprise Resource Planning systems to unify your entire enterprise.",
    intro: "Connect finance, supply chain, HR, procurement, and manufacturing into a single, unified source of truth with high-performance custom ERP software.",
    icon: Database,
    includes: [
      "Multi-Department Workflow Automation", "Financial Accounting & Ledger Sync", "Supply Chain & Procurement Management",
      "Production & Manufacturing Tracking", "Multi-Branch & Multi-Currency Architecture", "Real-time Executive BI Reports",
      "Role-Based Audit Logging"
    ],
    whyChooseUs: "Our custom ERP solutions eliminate departmental silos and manual spreadsheets, giving leadership instant visibility into enterprise profitability and operations.",
    benefits: ["Unified organizational data", "Eliminated data duplication", "Automated regulatory compliance", "Real-time executive decision dashboards"],
    process: [
      { title: "Enterprise Audit", desc: "Auditing departmental workflows from procurement to accounting." },
      { title: "Modular ERP Blueprint", desc: "Designing scalable database schemas and department modules." },
      { title: "Development & Data Migration", desc: "Building modules and securely migrating legacy records." },
      { title: "Phased Rollout", desc: "Rolling out department-by-department with dedicated support." }
    ],
    industries: ["Manufacturing", "Textiles", "Pharmaceuticals", "Distribution", "Construction"]
  },
  {
    slug: "hrm-software",
    title: "HRM Software",
    tagline: "Smart Human Resource & Payroll Management for modern enterprises.",
    intro: "Automate employee onboarding, attendance tracking, biometric sync, payroll calculation, and tax compliance with a comprehensive HRM software platform.",
    icon: UserCheck,
    includes: [
      "Biometric Attendance Device Sync", "Automated Payroll & Tax Calculation", "Leave & Expense Claim Management",
      "Employee Self-Service Portal", "Performance Appraisal & KPI Tracking", "Recruitment & ATS Pipeline",
      "Digital Employee Document Vault"
    ],
    whyChooseUs: "We simplify complex payroll rules, shift schedules, and employee evaluations into an automated HR ecosystem that boosts workforce morale and compliance.",
    benefits: ["100% accurate automated payroll", "Biometric real-time attendance", "Paperless employee management", "Transparent leave & expense tracking"],
    process: [
      { title: "HR Policy Scoping", desc: "Configuring shift rules, payroll formulas, and tax brackets." },
      { title: "Software Customization", desc: "Tailoring employee portals and administrative dashboards." },
      { title: "Biometric Integration", desc: "Connecting physical attendance scanners with real-time cloud sync." },
      { title: "HR Training", desc: "Onboarding HR managers and launching self-service mobile portals." }
    ],
    industries: ["Corporate Offices", "Hospitals", "Garments & Textiles", "Universities", "Retail Chains"]
  },
  {
    slug: "pos-software",
    title: "POS Software",
    tagline: "Lightning-fast Point of Sale systems for retail and hospitality.",
    intro: "Speed up checkout counters, manage barcode inventory, and track multi-outlet daily sales with our reliable, offline-capable cloud POS software.",
    icon: CreditCard,
    includes: [
      "Barcode Scanner & Thermal Printer Support", "Offline-First Sales Execution", "Multi-Outlet & Warehouse Sync",
      "Customer Loyalty & Reward Points", "Real-Time Daily Profit & Loss Reports", "Employee Shift & Cash Drawer Control",
      "Restaurant Kitchen Display System (KDS) Ready"
    ],
    whyChooseUs: "Our POS systems work seamlessly even during internet outages, automatically syncing sales data once online so you never lose a single transaction.",
    benefits: ["Zero checkout downtime", "Real-time multi-outlet stock visibility", "Built-in customer loyalty program", "Instant cashier shift reconciliation"],
    process: [
      { title: "Hardware & Counter Audit", desc: "Assessing barcode scanners, receipt printers, and terminal needs." },
      { title: "POS Configuration", desc: "Customizing receipt templates, tax rules, and item catalogs." },
      { title: "Staff Trial Run", desc: "Conducting high-speed simulation training for cashiers." },
      { title: "Live Store Deployment", desc: "Deploying across retail branches with 24/7 technical backup." }
    ],
    industries: ["Retail Supermarkets", "Restaurants & Cafes", "Pharmacies", "Fashion Boutiques", "Electronic Stores"]
  },
  {
    slug: "inventory-software",
    title: "Inventory Software",
    tagline: "Real-time warehouse, stock, and supply chain control.",
    intro: "Gain 100% visibility over warehouse stock levels, batch expiry dates, purchase orders, and multi-location transfers with smart inventory management software.",
    icon: Box,
    includes: [
      "Multi-Warehouse Stock Tracking", "Barcode & QR Code Inventory Tagging", "Automated Low-Stock Reorder Alerts",
      "FIFO & LIFO Valuation Accounting", "Batch & Expiration Date Monitoring", "Vendor & Supplier Portal",
      "Damage & Return Reconciliation"
    ],
    whyChooseUs: "We prevent stockouts and overstocking by giving your supply chain managers real-time alerts and predictive demand analytics.",
    benefits: ["Zero unaccounted inventory loss", "Automated purchase re-ordering", "Complete batch traceability", "Multi-warehouse real-time sync"],
    process: [
      { title: "Warehouse Workflow Audit", desc: "Mapping how stock enters, moves, and exits your facilities." },
      { title: "System Setup & Coding", desc: "Configuring warehouses, shelf locations, and SKU categories." },
      { title: "Hardware Tagging", desc: "Setting up barcode printers and scanner hand-held computers." },
      { title: "Go-Live & Auditing", desc: "Performing initial physical inventory count and system reconciliation." }
    ],
    industries: ["Wholesale Distributors", "Logistics", "Pharmaceuticals", "E-commerce Warehouses", "Cold Chain"]
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    tagline: "Core Web Vitals, schema markup, and search crawlability mastery.",
    intro: "Optimize your website's underlying code, server response times, schema architecture, and indexability to unlock top rankings on Google and AI search engines.",
    icon: Cpu,
    includes: [
      "Core Web Vitals (LCP, INP, CLS) Tuning", "JSON-LD Advanced Schema Markup", "Crawl Budget Optimization",
      "XML Sitemap & Robots.txt Strategy", "Canonicalization & Duplicate Content Fix", "JavaScript SEO & Rendering Audit",
      "Hreflang International Setup", "Log File Crawl Analysis"
    ],
    whyChooseUs: "We bridge the gap between software engineering and search algorithms, fixing complex technical bottlenecks that ordinary marketers miss.",
    benefits: ["90+ Google PageSpeed scores", "Enhanced rich snippet search results", "Maximum indexing efficiency", "Zero crawl errors"],
    process: [
      { title: "Technical Crawl Audit", desc: "Deep crawling with enterprise SEO tools and log analyzers." },
      { title: "Core Web Vitals Sprint", desc: "Optimizing JavaScript bundles, images, and server caching." },
      { title: "Schema Injection", desc: "Implementing structured JSON-LD data for entities and FAQs." },
      { title: "Indexing Verification", desc: "Submitting sitemaps and monitoring Google Search Console." }
    ],
    industries: ["E-commerce", "Enterprise Publishers", "SaaS Platforms", "Healthcare", "Education"]
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    tagline: "Dominate Google Maps and local city search rankings.",
    intro: "Capture high-intent local customers looking for services near them by optimizing your Google Business Profile, local citations, and geo-targeted landing pages.",
    icon: MapPin,
    includes: [
      "Google Business Profile (GBP) Mastery", "Local Map Pack Ranking Optimization", "NAP Citation Building & Cleanup",
      "Local Review Generation Strategy", "Geo-Tagged Visual Assets", "Local Schema Markup",
      "City & Area Landing Page Creation"
    ],
    whyChooseUs: "We turn your business into the #1 recommended local authority on Google Maps, driving phone calls, store visits, and local inquiries.",
    benefits: ["Top 3 Google Maps pack ranking", "Surge in local phone calls", "Higher customer review authority", "Domination of 'near me' keywords"],
    process: [
      { title: "Local Footprint Audit", desc: "Auditing Google Maps visibility and citation accuracy." },
      { title: "GBP Optimization", desc: "Optimizing categories, products, photos, and Q&A sections." },
      { title: "Citation Building", desc: "Registering NAP on top-tier local and national directories." },
      { title: "Review & Rank Growth", desc: "Implementing automated review requests and monitoring map ranks." }
    ],
    industries: ["Doctors & Hospitals", "Restaurants", "Law Firms", "Real Estate", "Diagnostic Centers"]
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    tagline: "High-intent Search, Shopping, and YouTube advertising.",
    intro: "Capture customers at the exact moment they search for your products or services with precision-targeted Google Search, Shopping, and Performance Max campaigns.",
    icon: Target,
    includes: [
      "High-Intent Search Keyword Ads", "Google Shopping / Merchant Center", "Performance Max (PMax) AI Campaigns",
      "YouTube Video Ad Funnels", "Display Remarketing Network", "Negative Keyword Sculpting",
      "Server-Side Conversion Tracking", "Custom Landing Page Consultation"
    ],
    whyChooseUs: "Our certified Google Ads specialists eliminate wasted clicks through strict negative keyword sculpting and conversion-driven bid strategies.",
    benefits: ["Immediate high-intent lead flow", "Lower Cost Per Click (CPC)", "Maximum Return on Ad Spend", "Full conversion attribution"],
    process: [
      { title: "Keyword & Competitor Spy", desc: "Identifying high-converting keywords your competitors are bidding on." },
      { title: "Campaign Architecture", desc: "Structuring tightly themed ad groups with persuasive copy." },
      { title: "Conversion Setup", desc: "Configuring server-side tracking for accurate ROAS measurement." },
      { title: "Daily Bid Optimization", desc: "Continuously pruning low-performing terms and scaling winners." }
    ],
    industries: ["E-commerce", "Real Estate", "Healthcare", "Legal Services", "Travel & Hospitality"]
  },
  {
    slug: "facebook-ads",
    title: "Facebook Ads",
    tagline: "Precision audience targeting and high-converting Meta campaigns.",
    intro: "Scale your revenue on Facebook and Instagram with data-driven creative testing, custom audience retargeting, and Meta Conversions API (CAPI) attribution.",
    icon: Share2,
    includes: [
      "Meta Conversions API (CAPI) Setup", "Lookalike & Custom Audience Building", "Video & Carousel Ad Creatives",
      "Lead Generation Instant Forms", "Dynamic Product Catalog Ads", "A/B Creative & Hook Testing",
      "ROAS Scaling Strategy"
    ],
    whyChooseUs: "We combine eye-catching visual storytelling with advanced Meta AI algorithm training to lower customer acquisition costs.",
    benefits: ["Predictable daily sales volume", "Lower cost per acquisition", "Advanced retargeting funnels", "Creative fatigue prevention"],
    process: [
      { title: "Creative Strategy & Hooks", desc: "Producing high-converting ad angles and scroll-stopping visuals." },
      { title: "Audience & Pixel Setup", desc: "Implementing server-side CAPI to bypass browser cookie limits." },
      { title: "Sandbox Testing", desc: "Testing multiple creatives and copy hooks to find winning ads." },
      { title: "Aggressive ROAS Scaling", desc: "Scaling budget on winning ad sets without spiking CPA." }
    ],
    industries: ["Fashion & E-commerce", "Real Estate", "Education", "Consumer Goods", "B2B Services"]
  },
  {
    slug: "instagram-ads",
    title: "Instagram Ads",
    tagline: "Visual storytelling and Reels advertising that captivate.",
    intro: "Engage Gen Z and millennial buyers with high-energy Instagram Reels ads, interactive Stories, and influencer-style UGC campaigns that drive impulse conversions.",
    icon: Video,
    includes: [
      "Vertical Video / Reels Advertising", "Instagram Stories Interactive Ads", "Shopping Tag Catalog Integration",
      "User-Generated Content (UGC) Direction", "Visual Aesthetic Alignment", "Direct Message Ad Automation"
    ],
    whyChooseUs: "We know the visual language of Instagram—creating organic-feeling ads that don't look like commercials and achieve high engagement rates.",
    benefits: ["High viral shareability", "Strong brand aesthetic equity", "Direct shopping conversions", "Elevated engagement rates"],
    process: [
      { title: "Visual Brand Audit", desc: "Aligning your ad visuals with premium Instagram aesthetics." },
      { title: "UGC & Reels Production", desc: "Scripting and producing authentic vertical video creatives." },
      { title: "Campaign Launch", desc: "Targeting high-affinity lifestyle and interest audiences." },
      { title: "Community & Sales Funnel", desc: "Converting ad interactions into store checkouts or inquiries." }
    ],
    industries: ["Beauty & Cosmetics", "Fashion", "Travel Agencies", "Restaurants", "Fitness & Health"]
  },
  {
    slug: "youtube-ads",
    title: "YouTube Ads",
    tagline: "Dominant video commercials on the world's second largest search engine.",
    intro: "Reach millions of engaged viewers with YouTube In-Stream ads, Non-Skippable bumpers, and Shorts advertising tailored for brand recall and direct response.",
    icon: Video,
    includes: [
      "TrueView Skippable In-Stream Ads", "6-Second Non-Skippable Bumpers", "YouTube Shorts Vertical Video Ads",
      "Keyword & Channel Target Placements", "Video Sales Funnel Optimization", "Brand Lift & Recall Measurement"
    ],
    whyChooseUs: "We script and produce YouTube ads with powerful first-5-second hooks that retain viewer attention and drive action before the skip button is pressed.",
    benefits: ["Lowest cost per video view", "Massive brand awareness", "Targeting specific competitor channels", "High-intent retargeting"],
    process: [
      { title: "Hook & Script Writing", desc: "Crafting scripts engineered around the critical 5-second skip window." },
      { title: "Video Production", desc: "Creating high-production or dynamic UGC video assets." },
      { title: "Placement Strategy", desc: "Targeting relevant YouTube channels, topics, and search terms." },
      { title: "Optimization", desc: "Refining view-through rates (VTR) and click-through conversions." }
    ],
    industries: ["Universities", "Real Estate", "Automotive", "SaaS", "Consumer Brands"]
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    tagline: "Automated retention, newsletters, and high-ROI lifecycle funnels.",
    intro: "Turn your customer email list into your most profitable revenue channel through automated welcome flows, abandoned cart sequences, and segmented promotional newsletters.",
    icon: Mail,
    includes: [
      "Klaviyo / Mailchimp / ActiveCampaign Setup", "Automated Welcome & Nurture Series", "Abandoned Cart Recovery Flows",
      "Customer Segmentation & Tagging", "Custom HTML & Responsive Templates", "Deliverability & SPF/DKIM Hardening",
      "A/B Subject Line & Copy Testing"
    ],
    whyChooseUs: "Email marketing boasts the highest average ROI in digital marketing. We build automated flows that generate recurring revenue while you sleep.",
    benefits: ["40x+ return on investment", "Zero dependency on ad algorithms", "Automated repeat purchases", "High inbox deliverability (<1% spam)"],
    process: [
      { title: "List Audit & Deliverability", desc: "Cleaning your list and authenticating SPF, DKIM, and DMARC." },
      { title: "Lifecycle Flow Automation", desc: "Building welcome, abandoned cart, and post-purchase sequences." },
      { title: "Template & Copy Design", desc: "Designing on-brand, mobile-responsive email templates." },
      { title: "Weekly Broadcast Management", desc: "Sending high-converting newsletters and reporting revenue generated." }
    ],
    industries: ["E-commerce Brands", "SaaS", "B2B Companies", "Education", "Hospitality"]
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Organic community building, viral content, and brand authority.",
    intro: "Build an active, loyal community across Facebook, Instagram, LinkedIn, and TikTok with strategic content calendars, engaging visuals, and consistent brand storytelling.",
    icon: Share2,
    includes: [
      "Monthly Content Calendar Strategy", "Custom Graphic & Video Design", "Community & Comment Management",
      "LinkedIn B2B Authority Building", "TikTok & Reels Organic Trend Strategy", "Monthly Engagement & Reach Reports"
    ],
    whyChooseUs: "We don't post random quotes. We create strategic, value-first content that positions your brand as an industry leader and drives inbound trust.",
    benefits: ["Organic brand loyalty", "Active community engagement", "Stronger reputation & trust", "Inbound customer inquiries"],
    process: [
      { title: "Brand Voice & Pillar Setup", desc: "Defining your content pillars, tone of voice, and visual identity." },
      { title: "Monthly Content Calendar", desc: "Creating a structured calendar of educational, engaging, and promotional posts." },
      { title: "Studio Design & Production", desc: "Designing high-end graphics, carousels, and video shorts." },
      { title: "Publishing & Engagement", desc: "Posting at peak hours and actively nurturing audience comments." }
    ],
    industries: ["All Industries", "Startups", "Corporate Brands", "Personal Brands", "Healthcare"]
  }
];
