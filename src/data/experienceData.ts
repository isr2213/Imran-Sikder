export interface ExperienceClient {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  country: string;
  shortDescription?: string;
  websiteUrl?: string;
  logoUrl?: string;
  projectType?: string;
  serviceProvided?: string;
  completionDate?: string;
  featured?: boolean;
  published: boolean;
  order: number;
}

export interface ExperienceCategory {
  id: string;
  name: string;
  group?: string;
  heading?: string;
  iconName?: string;
  order: number;
}

export interface ShowcaseCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  heroBanner?: string;
  iconName?: string;
  order: number;
}

export interface VideoItem {
  id: string;
  type: 'mp4' | 'youtube' | 'facebook' | 'instagram' | 'tiktok' | 'vimeo';
  url: string;
  title: string;
  thumbnail?: string;
  isFeatured?: boolean;
}

export interface ImageGalleryItem {
  id: string;
  url: string;
  alt: string;
  title?: string;
  caption?: string;
}

export interface ShowcaseProject {
  id: string;
  slug: string;
  title: string;
  categorySlug: string; // e.g. "video-production", "campaigns", "web-development", etc.
  clientName: string;
  industry: string;
  country: string;
  projectDuration?: string;
  completionDate?: string;
  projectUrl?: string;
  heroBanner?: string;
  servicesProvided: string[];
  technologiesUsed: string[];
  projectObjectives?: string;
  challenges?: string;
  solutions?: string;
  results?: string;
  performanceMetrics?: { label: string; value: string; change?: string }[];
  clientFeedback?: { quote: string; author: string; role?: string };
  videoGallery?: VideoItem[];
  imageGallery?: ImageGalleryItem[];
  beforeAfter?: { beforeUrl: string; afterUrl: string; beforeLabel: string; afterLabel: string };
  isFeatured?: boolean;
  status: 'draft' | 'published';
}

export const INITIAL_EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    id: "cat-1",
    name: "Hospitals, Diagnostic Center & Doctor Chamber",
    group: "Industry Wise",
    heading: "Hospitals, Diagnostic Center & Doctor Chamber",
    iconName: "Stethoscope",
    order: 1
  },
  {
    id: "cat-2",
    name: "E-commerce Electronics",
    group: "E-commerce",
    heading: "E-commerce Electronics",
    iconName: "Smartphone",
    order: 2
  },
  {
    id: "cat-3",
    name: "E-commerce Others",
    group: "E-commerce",
    heading: "E-commerce Others",
    iconName: "ShoppingBag",
    order: 3
  },
  {
    id: "cat-4",
    name: "Travel Agency",
    group: "Services",
    heading: "Travel Agency",
    iconName: "Plane",
    order: 4
  },
  {
    id: "cat-5",
    name: "Restaurant",
    group: "Hospitality",
    heading: "Restaurant",
    iconName: "Utensils",
    order: 5
  },
  {
    id: "cat-6",
    name: "Import & Export",
    group: "Trade",
    heading: "Import & Export",
    iconName: "Ship",
    order: 6
  },
  {
    id: "cat-7",
    name: "Mobile Servicing",
    group: "Services",
    heading: "Mobile Servicing",
    iconName: "Wrench",
    order: 7
  },
  {
    id: "cat-8",
    name: "Real Estate",
    group: "Property",
    heading: "Real Estate & Construction",
    iconName: "Building2",
    order: 8
  },
  {
    id: "cat-9",
    name: "Automobile",
    group: "Automotive",
    heading: "Automobile",
    iconName: "Car",
    order: 9
  },
  {
    id: "cat-10",
    name: "Publications",
    group: "Media",
    heading: "Publications & Editorial",
    iconName: "BookOpen",
    order: 10
  },
  {
    id: "cat-11",
    name: "Clothing & Accessories",
    group: "Fashion",
    heading: "Clothing & Accessories",
    iconName: "Shirt",
    order: 11
  },
  {
    id: "cat-12",
    name: "Baby Product",
    group: "Retail",
    heading: "Baby Product & Nutrition",
    iconName: "Baby",
    order: 12
  }
];

export const INITIAL_EXPERIENCE_CLIENTS: ExperienceClient[] = [
  // Hospitals, Diagnostic Center & Doctor Chamber
  {
    id: "client-1",
    name: "Long Life Diagnostic & Consultation Center",
    categoryId: "cat-1",
    categoryName: "Hospitals, Diagnostic Center & Doctor Chamber",
    country: "Bangladesh",
    shortDescription: "Comprehensive digital growth & patient booking software solutions.",
    projectType: "Full Digital Growth & Software Infrastructure",
    serviceProvided: "SEO, Meta Ads, Local Map Optimization, Web Portal",
    completionDate: "2025-11",
    featured: true,
    published: true,
    order: 1
  },
  {
    id: "client-2",
    name: "Maxaid Hospital",
    categoryId: "cat-1",
    categoryName: "Hospitals, Diagnostic Center & Doctor Chamber",
    country: "Bangladesh",
    shortDescription: "Enterprise Healthcare Marketing & Patient Acquisition Infrastructure.",
    projectType: "Healthcare Brand Strategy & Ads",
    serviceProvided: "Google Ads, Meta Ads, Video Production",
    completionDate: "2025-09",
    featured: true,
    published: true,
    order: 2
  },
  {
    id: "client-3",
    name: "Mukti Clinic (5 Branches)",
    categoryId: "cat-1",
    categoryName: "Hospitals, Diagnostic Center & Doctor Chamber",
    country: "Bangladesh",
    shortDescription: "Multi-branch digital presence, local SEO & automated patient flow.",
    projectType: "Multi-Location SEO & Automation",
    serviceProvided: "Local SEO, Google My Business, Social Media",
    completionDate: "2025-08",
    featured: false,
    published: true,
    order: 3
  },
  {
    id: "client-4",
    name: "Islamiya Eye Hospital",
    categoryId: "cat-1",
    categoryName: "Hospitals, Diagnostic Center & Doctor Chamber",
    country: "Bangladesh",
    shortDescription: "Ophthalmic specialized brand strategy and patient appointment systems.",
    published: true,
    order: 4
  },
  {
    id: "client-5",
    name: "Bokul Homeo Pharmacy",
    categoryId: "cat-1",
    categoryName: "Hospitals, Diagnostic Center & Doctor Chamber",
    country: "Bangladesh",
    shortDescription: "Digital outreach, e-pharmacy growth & local market visibility.",
    published: true,
    order: 5
  },
  {
    id: "client-6",
    name: "Happy Physiotherapy Center",
    categoryId: "cat-1",
    categoryName: "Hospitals, Diagnostic Center & Doctor Chamber",
    country: "Bangladesh",
    shortDescription: "Physical rehabilitation brand development and lead generation.",
    published: true,
    order: 6
  },
  {
    id: "client-7",
    name: "The Tooth Corner",
    categoryId: "cat-1",
    categoryName: "Hospitals, Diagnostic Center & Doctor Chamber",
    country: "Bangladesh",
    shortDescription: "Modern dental care branding, Google Maps local SEO & patient growth.",
    published: true,
    order: 7
  },
  {
    id: "client-8",
    name: "Orthopedic Spine & Trauma Surgeon – Prof. Faisal Amin Ahmed",
    categoryId: "cat-1",
    categoryName: "Hospitals, Diagnostic Center & Doctor Chamber",
    country: "Bangladesh",
    shortDescription: "Senior Specialist authority branding & digital consultation portal.",
    published: true,
    order: 8
  },
  {
    id: "client-9",
    name: "Life & Care Diagnostic",
    categoryId: "cat-1",
    categoryName: "Hospitals, Diagnostic Center & Doctor Chamber",
    country: "Bangladesh",
    shortDescription: "Diagnostic pathology center digital presence & customer trust.",
    published: true,
    order: 9
  },

  // E-commerce Electronics
  {
    id: "client-10",
    name: "RM Trading International",
    categoryId: "cat-2",
    categoryName: "E-commerce Electronics",
    country: "Bangladesh",
    shortDescription: "B2B & B2C electronics import catalog, performance ads & e-commerce.",
    published: true,
    order: 10
  },
  {
    id: "client-11",
    name: "Alpha Gadget",
    categoryId: "cat-2",
    categoryName: "E-commerce Electronics",
    country: "Bangladesh",
    shortDescription: "Premium gadget store conversion optimization & social ad scaling.",
    published: true,
    order: 11
  },
  {
    id: "client-12",
    name: "Afsar Telecom",
    categoryId: "cat-2",
    categoryName: "E-commerce Electronics",
    country: "Bangladesh",
    shortDescription: "Mobile phone & accessories e-commerce growth & store traffic.",
    published: true,
    order: 12
  },
  {
    id: "client-13",
    name: "Friends Services",
    categoryId: "cat-2",
    categoryName: "E-commerce Electronics",
    country: "Bangladesh",
    shortDescription: "Electronics repair & retail digital marketing campaigns.",
    published: true,
    order: 13
  },

  // E-commerce Others
  {
    id: "client-14",
    name: "Abdullah Optics",
    categoryId: "cat-3",
    categoryName: "E-commerce Others",
    country: "Bangladesh",
    shortDescription: "Eyewear & optical retail digital storefront & social media growth.",
    published: true,
    order: 14
  },
  {
    id: "client-15",
    name: "Ordo Nest",
    categoryId: "cat-3",
    categoryName: "E-commerce Others",
    country: "Bangladesh",
    shortDescription: "Home organization & decor e-commerce brand building.",
    published: true,
    order: 15
  },

  // Travel Agency
  {
    id: "client-16",
    name: "R & R Consultancy",
    categoryId: "cat-4",
    categoryName: "Travel Agency",
    country: "Bangladesh",
    shortDescription: "Visa processing, education & global travel agency lead generation.",
    published: true,
    order: 16
  },
  {
    id: "client-17",
    name: "Chapaibazar (Qatar)",
    categoryId: "cat-4",
    categoryName: "Travel Agency",
    country: "Qatar",
    shortDescription: "GCC regional air ticketing & diaspora travel services marketing.",
    published: true,
    order: 17
  },

  // Restaurant
  {
    id: "client-18",
    name: "Paper Duck World Buffet (UK)",
    categoryId: "cat-5",
    categoryName: "Restaurant",
    country: "United Kingdom",
    shortDescription: "London multi-cuisine world buffet digital branding & table reservations.",
    published: true,
    order: 18
  },
  {
    id: "client-19",
    name: "Bunheaven London (UK)",
    categoryId: "cat-5",
    categoryName: "Restaurant",
    country: "United Kingdom",
    shortDescription: "Artisanal burger joint branding, Google Local Maps & UK delivery growth.",
    published: true,
    order: 19
  },
  {
    id: "client-20",
    name: "Adda Kabab Ghar & Fast Food",
    categoryId: "cat-5",
    categoryName: "Restaurant",
    country: "Bangladesh",
    shortDescription: "Local food brand positioning, promotional video ads & dine-in traffic.",
    published: true,
    order: 20
  },

  // Import & Export
  {
    id: "client-21",
    name: "Rapid Medical",
    categoryId: "cat-6",
    categoryName: "Import & Export",
    country: "Bangladesh",
    shortDescription: "Medical equipment import, B2B hospital supply lead generation.",
    published: true,
    order: 21
  },

  // Mobile Servicing
  {
    id: "client-22",
    name: "Nur Telecom",
    categoryId: "cat-7",
    categoryName: "Mobile Servicing",
    country: "Bangladesh",
    shortDescription: "Smartphone hardware repair center branding & local customer flow.",
    published: true,
    order: 22
  },
  {
    id: "client-23",
    name: "Applix BD",
    categoryId: "cat-7",
    categoryName: "Mobile Servicing",
    country: "Bangladesh",
    shortDescription: "Apple device repair & accessories brand authority.",
    published: true,
    order: 23
  },

  // Real Estate
  {
    id: "client-24",
    name: "Urbana",
    categoryId: "cat-8",
    categoryName: "Real Estate",
    country: "Bangladesh",
    shortDescription: "Luxury residential apartment branding & High-Net-Worth lead acquisition.",
    published: true,
    order: 24
  },
  {
    id: "client-25",
    name: "Limrs Construction & Interior",
    categoryId: "cat-8",
    categoryName: "Real Estate",
    country: "Bangladesh",
    shortDescription: "Commercial interior design & architectural construction portfolio digital marketing.",
    published: true,
    order: 25
  },

  // Automobile
  {
    id: "client-26",
    name: "Auto Studio",
    categoryId: "cat-9",
    categoryName: "Automobile",
    country: "Bangladesh",
    shortDescription: "Car detailing, ceramic coating & luxury automotive workshop branding.",
    published: true,
    order: 26
  },

  // Publications
  {
    id: "client-27",
    name: "Golpokar",
    categoryId: "cat-10",
    categoryName: "Publications",
    country: "Bangladesh",
    shortDescription: "Literary publication & online bookstore digital audience expansion.",
    published: true,
    order: 27
  },

  // Clothing & Accessories
  {
    id: "client-28",
    name: "Henny Bear London",
    categoryId: "cat-11",
    categoryName: "Clothing & Accessories",
    country: "United Kingdom",
    shortDescription: "UK luxury tapestry handbags & fashion accessories e-commerce growth.",
    published: true,
    order: 28
  },
  {
    id: "client-29",
    name: "Dhong Curtain",
    categoryId: "cat-11",
    categoryName: "Clothing & Accessories",
    country: "Bangladesh",
    shortDescription: "Custom home textile & curtain showroom digital marketing.",
    published: true,
    order: 29
  },

  // Baby Product
  {
    id: "client-30",
    name: "Niyamah Food",
    categoryId: "cat-12",
    categoryName: "Baby Product",
    country: "Bangladesh",
    shortDescription: "Organic baby nutrition, infant food safety & e-commerce sales growth.",
    published: true,
    order: 30
  }
];

export const INITIAL_SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: "scat-1",
    slug: "video-production",
    title: "Video Production",
    description: "High-impact brand documentaries, product commercials, social media reels, and animated explainer videos engineered for conversion.",
    heroBanner: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80",
    iconName: "Video",
    order: 1
  },
  {
    id: "scat-2",
    slug: "campaigns",
    title: "Campaigns & Branding",
    description: "Integrated omnichannel brand launch campaigns, positioning strategies, and seasonal promotional rollouts across global markets.",
    heroBanner: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    iconName: "Megaphone",
    order: 2
  },
  {
    id: "scat-3",
    slug: "web-development",
    title: "Web Development",
    description: "Enterprise web platforms, headless React/Next.js architectures, high-converting e-commerce, and custom SaaS portals.",
    heroBanner: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    iconName: "Globe",
    order: 3
  },
  {
    id: "scat-4",
    slug: "android-app-development",
    title: "Android App Development",
    description: "Native Kotlin & Flutter mobile applications with seamless backend API integrations, real-time sync, and offline-first reliability.",
    heroBanner: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    iconName: "Smartphone",
    order: 4
  },
  {
    id: "scat-5",
    slug: "paid-ads",
    title: "Paid Ads & Performance",
    description: "Data-driven Meta Ads, Google PPC Search & Display, TikTok Ads, and retargeting funnels driving verifiable ROI.",
    heroBanner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    iconName: "TrendingUp",
    order: 5
  },
  {
    id: "scat-6",
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    description: "E-E-A-T Google ranking frameworks, local SEO, technical site audit fixes, and Generative Engine Optimization (GEO) for AI search.",
    heroBanner: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1600&q=80",
    iconName: "Search",
    order: 6
  },
  {
    id: "scat-7",
    slug: "business-growth-challenge",
    title: "Business Growth Challenge (BGC)",
    description: "Intensive 90-day revenue expansion bootcamps combining AI workflow automation, customer acquisition, and scale-up execution.",
    heroBanner: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
    iconName: "Zap",
    order: 7
  }
];

export const INITIAL_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  // 1. Video Production Project
  {
    id: "proj-1",
    slug: "maxaid-hospital-brand-film",
    title: "Maxaid Hospital Cinematic Brand Documentary & Patient Care Commercials",
    categorySlug: "video-production",
    clientName: "Maxaid Hospital",
    industry: "Healthcare",
    country: "Bangladesh",
    projectDuration: "6 Weeks",
    completionDate: "2025-10-15",
    projectUrl: "https://maxaidhospital.com",
    heroBanner: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
    servicesProvided: ["Scriptwriting", "4K Videography", "Color Grading", "Voiceover (Bengali & English)", "Social Media Cuts"],
    technologiesUsed: ["DaVinci Resolve", "Sony FX6 4K Cinema", "DJI Ronin Gimbal", "Sennheiser Wireless Audio"],
    projectObjectives: "Create a trustworthy, compassionate 4K brand film establishing Maxaid as the premier emergency & surgical hospital in Dhaka.",
    challenges: "Filming in live operating theaters and ICU environments without disrupting hospital procedures or violating patient privacy.",
    solutions: "Deployed a silent 2-person production crew, utilized high-sensitivity low-light lenses, and staged patient journey narratives with real doctors.",
    results: "Generated 1.2M+ organic video views across Facebook & YouTube with 40% increase in outpatient appointment bookings.",
    performanceMetrics: [
      { label: "Total Video Views", value: "1.4M+", change: "+320%" },
      { label: "Patient Booking Inquiries", value: "4,850+", change: "+45%" },
      { label: "Brand Recall Score", value: "88%", change: "+24%" }
    ],
    clientFeedback: {
      quote: "Digital Grower Ltd delivered a masterpiece. The cinematic quality and emotional storytelling brought tears of pride to our board of directors.",
      author: "Dr. Alim Rahman",
      role: "Managing Director, Maxaid Hospital"
    },
    videoGallery: [
      {
        id: "vid-1",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "Maxaid Hospital Official 4K Brand Documentary",
        thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        isFeatured: true
      }
    ],
    imageGallery: [
      {
        id: "img-1",
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
        alt: "Behind the scenes 4K camera setup in hospital lobby",
        title: "4K Production Setup",
        caption: "Filming state-of-the-art diagnostic equipment"
      }
    ],
    isFeatured: true,
    status: "published"
  },

  // 2. Campaigns Project
  {
    id: "proj-2",
    slug: "bunheaven-london-uk-launch-campaign",
    title: "Bunheaven London UK Omnichannel Restaurant Launch & Delivery Takeover",
    categorySlug: "campaigns",
    clientName: "Bunheaven London (UK)",
    industry: "Hospitality & Restaurant",
    country: "United Kingdom",
    projectDuration: "3 Months",
    completionDate: "2025-11-20",
    projectUrl: "https://bunheaven.co.uk",
    heroBanner: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=80",
    servicesProvided: ["Brand Positioning", "Influencer Marketing", "Google Local Maps Ads", "Deliveroo & UberEats Funnel"],
    technologiesUsed: ["Meta Business Suite", "Google Local Search Console", "TikTok Ads Manager"],
    projectObjectives: "Establish Bunheaven as London's premier halal gourmet burger joint in East London with 500+ daily dine-in covers.",
    challenges: "Saturated UK burger market with fierce competition from established local chains.",
    solutions: "Executed a food influencer launch event, hyper-targeted 3-mile geo-fenced Meta video ads, and optimized Google Business Profile for local intent.",
    results: "Sold out 1,000 burgers on launch weekend; achieved #1 local ranking for 'gourmet burger East London'.",
    performanceMetrics: [
      { label: "Launch Weekend Sales", value: "£18,500+", change: "+100%" },
      { label: "Google Maps Directions", value: "12,400+", change: "+450%" },
      { label: "Instagram Followers", value: "15.2K", change: "From 0" }
    ],
    clientFeedback: {
      quote: "The queue went down the street for 3 blocks on opening day. DGL's digital campaign execution in London was flawless.",
      author: "Tariq Mahmood",
      role: "Founder, Bunheaven London"
    },
    isFeatured: true,
    status: "published"
  },

  // 3. Web Development Project
  {
    id: "proj-3",
    slug: "rm-trading-international-b2b-b2c-ecommerce",
    title: "RM Trading International Headless React E-Commerce & B2B Wholesale Portal",
    categorySlug: "web-development",
    clientName: "RM Trading International",
    industry: "E-commerce Electronics",
    country: "Bangladesh",
    projectDuration: "8 Weeks",
    completionDate: "2025-12-05",
    projectUrl: "https://rmtradingbd.com",
    heroBanner: "https://images.unsplash.com/photo-1556742049-0a670f4a45a7?auto=format&fit=crop&w=1600&q=80",
    servicesProvided: ["UI/UX Custom Design", "Headless React Web App", "Express Node.js API", "Payment Gateway Integration"],
    technologiesUsed: ["React 18", "TypeScript", "Tailwind CSS", "Express.js", "bKash / Nagad / SSLCommerz"],
    projectObjectives: "Build a lighting-fast sub-second mobile e-commerce platform handling 50,000+ SKU electronics items.",
    challenges: "Slow loading speeds on traditional WooCommerce monolith causing 65% mobile cart abandonment.",
    solutions: "Rebuilt as a custom React Single Page Application with server-side caching, automated inventory sync, and one-click bKash checkout.",
    results: "Page load time reduced from 4.8s to 0.6s. Mobile conversion rate increased by 210%.",
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      afterUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      beforeLabel: "Legacy Slow WooCommerce (4.8s)",
      afterLabel: "High-Speed React DGL Portal (0.6s)"
    },
    performanceMetrics: [
      { label: "Core Web Vitals Speed Score", value: "99/100", change: "+140%" },
      { label: "Mobile Conversion Rate", value: "4.8%", change: "+210%" },
      { label: "Monthly Online Revenue", value: "৳45,000,000+", change: "+85%" }
    ],
    isFeatured: true,
    status: "published"
  },

  // 4. Android App Development Project
  {
    id: "proj-4",
    slug: "long-life-patient-care-android-app",
    title: "Long Life Diagnostic Mobile Patient Care & Automated Test Reports App",
    categorySlug: "android-app-development",
    clientName: "Long Life Diagnostic Center",
    industry: "Healthcare & Telemedicine",
    country: "Bangladesh",
    projectDuration: "10 Weeks",
    completionDate: "2025-11-10",
    heroBanner: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    servicesProvided: ["Native Android App Development", "PDF Report Generation Engine", "SMS OTP Auth", "Push Notifications"],
    technologiesUsed: ["Kotlin", "Android Jetpack Compose", "Node.js API", "Firebase Cloud Messaging"],
    projectObjectives: "Enable diagnostic patients to view doctor schedules, book appointments, and download lab reports directly on Android.",
    challenges: "Eliminating physical report pickup congestion in diagnostic waiting lobbies.",
    solutions: "Created automated PDF lab report delivery with SMS notification download links & encrypted patient record vault.",
    results: "50,000+ Play Store downloads; reduced front-desk overcrowding by 70%.",
    performanceMetrics: [
      { label: "Android Downloads", value: "50,000+", change: "Top Rated" },
      { label: "Lab Reports Delivered Digitally", value: "180,000+", change: "100% Automated" }
    ],
    isFeatured: true,
    status: "published"
  },

  // 5. Paid Ads Project
  {
    id: "proj-5",
    slug: "henny-bear-london-meta-google-ads-scale",
    title: "Henny Bear London Luxury Tapestry Handbags Meta & Google Ads Scaling",
    categorySlug: "paid-ads",
    clientName: "Henny Bear London",
    industry: "Luxury Fashion & Accessories",
    country: "United Kingdom",
    projectDuration: "Ongoing",
    completionDate: "2025-12-28",
    heroBanner: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1600&q=80",
    servicesProvided: ["Meta CAPI Pixel Integration", "Google Shopping ROAS Optimization", "Dynamic Product Ads", "A/B Creative Testing"],
    technologiesUsed: ["Meta Ads Manager", "Google Merchant Center", "Triple Whale Analytics"],
    projectObjectives: "Scale monthly UK e-commerce ad spend while maintaining a minimum 4.5x Return on Ad Spend (ROAS).",
    challenges: "High UK customer acquisition costs and rising CPMs during Q4 holiday shopping season.",
    solutions: "Implemented first-party server-side Conversions API tracking and dynamic user-generated video ad variations.",
    results: "Achieved 5.2x average ROAS over 6 months with over £250,000 in tracked ad revenue.",
    performanceMetrics: [
      { label: "Average ROAS", value: "5.2x", change: "+180%" },
      { label: "Cost Per Acquisition (CPA)", value: "£12.40", change: "-34%" },
      { label: "E-commerce Revenue", value: "£250,000+", change: "+240%" }
    ],
    isFeatured: true,
    status: "published"
  },

  // 6. SEO Project
  {
    id: "proj-6",
    slug: "urbana-real-estate-seo-geo-dominance",
    title: "Urbana Luxury Real Estate Google #1 SEO & AI Generative Engine Optimization",
    categorySlug: "seo",
    clientName: "Urbana",
    industry: "Real Estate & Luxury Housing",
    country: "Bangladesh",
    projectDuration: "6 Months",
    completionDate: "2025-12-01",
    heroBanner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    servicesProvided: ["Technical SEO Audit", "High-Authority Link Building", "E-E-A-T Schema Integration", "AI Search GEO Ranking"],
    technologiesUsed: ["Ahrefs", "Google Search Console", "Screaming Frog", "Schema.org JSON-LD"],
    projectObjectives: "Rank #1 on Google for high-intent keywords like 'luxury apartments Gulshan' and 'duplex flat for sale Dhaka'.",
    challenges: "Competing against massive legacy real estate directories with 10+ year domain authorities.",
    solutions: "Built deep programmatic location neighborhood landing pages, schema structured data, and authoritative PR backlinks.",
    results: "Captured 12 #1 keyword rankings on Google First Page; organic High-Net-Worth leads grew by 380%.",
    performanceMetrics: [
      { label: "Google Page #1 Keywords", value: "42 Keywords", change: "+420%" },
      { label: "Organic HNW Leads / Mo", value: "350+ Leads", change: "+380%" }
    ],
    isFeatured: true,
    status: "published"
  },

  // 7. Business Growth Challenge (BGC) Project
  {
    id: "proj-7",
    slug: "rapid-medical-90-day-bgc-revenue-scale",
    title: "Rapid Medical B2B Equipment 90-Day Business Growth Challenge (BGC)",
    categorySlug: "business-growth-challenge",
    clientName: "Rapid Medical",
    industry: "Medical Equipment Import & B2B",
    country: "Bangladesh",
    projectDuration: "90 Days",
    completionDate: "2025-11-30",
    heroBanner: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80",
    servicesProvided: ["Sales Pipeline Automation", "B2B Hospital Outreach Funnel", "CRM Pipeline Setup", "Growth Executive Mentorship"],
    technologiesUsed: ["HubSpot CRM", "WhatsApp Business API", "LinkedIn Sales Navigator"],
    projectObjectives: "Double B2B hospital sales contracts in 90 days by transforming offline phone sales into an automated digital pipeline.",
    challenges: "Long 6-month decision cycles for hospital ICU equipment procurement.",
    solutions: "Deployed 90-day BGC blueprint: automated WhatsApp quotation bots, direct hospital director targeted campaigns, and automated follow-up sequences.",
    results: "Closed ৳120 Million in new diagnostic & hospital equipment contracts within 90 days.",
    performanceMetrics: [
      { label: "90-Day Closed Sales Value", value: "৳120 Million+", change: "+210%" },
      { label: "B2B Lead Response Time", value: "3 Minutes", change: "From 24 Hours" }
    ],
    isFeatured: true,
    status: "published"
  }
];

export interface ExperienceDisplaySettings {
  defaultLandingPage: 'clients' | 'showcase';
  showProjectShowcaseOnLanding: boolean;
  showCategoryTabs: boolean;
  hiddenSubmenus: string[];
  categoryOrders?: Record<string, number>;
  showcaseSectionTitle?: string;
  clientsSectionTitle?: string;
}

export const DEFAULT_EXPERIENCE_SETTINGS: ExperienceDisplaySettings = {
  defaultLandingPage: 'clients',
  showProjectShowcaseOnLanding: false,
  showCategoryTabs: true,
  hiddenSubmenus: [],
  categoryOrders: {},
  showcaseSectionTitle: "Enterprise Project Showcase",
  clientsSectionTitle: "Our Honorable Clients"
};

export const EXPERIENCE_STORAGE_KEYS = {
  CATEGORIES: "dgl_exp_categories_v1",
  CLIENTS: "dgl_exp_clients_v1",
  SHOWCASE_CATEGORIES: "dgl_exp_showcase_categories_v1",
  SHOWCASE_PROJECTS: "dgl_exp_showcase_projects_v1",
  DISPLAY_SETTINGS: "dgl_exp_display_settings_v1"
};

export function getStoredExperienceData(): { 
  categories: ExperienceCategory[]; 
  clients: ExperienceClient[];
  showcaseCategories: ShowcaseCategory[];
  showcaseProjects: ShowcaseProject[];
  displaySettings: ExperienceDisplaySettings;
} {
  try {
    const catRaw = localStorage.getItem(EXPERIENCE_STORAGE_KEYS.CATEGORIES);
    const clientRaw = localStorage.getItem(EXPERIENCE_STORAGE_KEYS.CLIENTS);
    const scatRaw = localStorage.getItem(EXPERIENCE_STORAGE_KEYS.SHOWCASE_CATEGORIES);
    const projRaw = localStorage.getItem(EXPERIENCE_STORAGE_KEYS.SHOWCASE_PROJECTS);
    const settingsRaw = localStorage.getItem(EXPERIENCE_STORAGE_KEYS.DISPLAY_SETTINGS);

    const categories = catRaw ? JSON.parse(catRaw) : INITIAL_EXPERIENCE_CATEGORIES;
    const clients = clientRaw ? JSON.parse(clientRaw) : INITIAL_EXPERIENCE_CLIENTS;
    const showcaseCategories = scatRaw ? JSON.parse(scatRaw) : INITIAL_SHOWCASE_CATEGORIES;
    const showcaseProjects = projRaw ? JSON.parse(projRaw) : INITIAL_SHOWCASE_PROJECTS;
    const displaySettings = settingsRaw ? { ...DEFAULT_EXPERIENCE_SETTINGS, ...JSON.parse(settingsRaw) } : DEFAULT_EXPERIENCE_SETTINGS;

    return { categories, clients, showcaseCategories, showcaseProjects, displaySettings };
  } catch {
    return { 
      categories: INITIAL_EXPERIENCE_CATEGORIES, 
      clients: INITIAL_EXPERIENCE_CLIENTS,
      showcaseCategories: INITIAL_SHOWCASE_CATEGORIES,
      showcaseProjects: INITIAL_SHOWCASE_PROJECTS,
      displaySettings: DEFAULT_EXPERIENCE_SETTINGS
    };
  }
}

export function saveStoredExperienceData(
  categories: ExperienceCategory[], 
  clients: ExperienceClient[],
  showcaseCategories?: ShowcaseCategory[],
  showcaseProjects?: ShowcaseProject[],
  displaySettings?: ExperienceDisplaySettings
): void {
  try {
    localStorage.setItem(EXPERIENCE_STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    localStorage.setItem(EXPERIENCE_STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
    if (showcaseCategories) {
      localStorage.setItem(EXPERIENCE_STORAGE_KEYS.SHOWCASE_CATEGORIES, JSON.stringify(showcaseCategories));
    }
    if (showcaseProjects) {
      localStorage.setItem(EXPERIENCE_STORAGE_KEYS.SHOWCASE_PROJECTS, JSON.stringify(showcaseProjects));
    }
    if (displaySettings) {
      localStorage.setItem(EXPERIENCE_STORAGE_KEYS.DISPLAY_SETTINGS, JSON.stringify(displaySettings));
    }
  } catch (err) {
    console.error("Failed to save experience data to localStorage:", err);
  }
}
