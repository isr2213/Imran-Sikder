import fs from 'fs';
import path from 'path';
import { INITIAL_EXPERIENCE_CATEGORIES, INITIAL_EXPERIENCE_CLIENTS, INITIAL_SHOWCASE_CATEGORIES, INITIAL_SHOWCASE_PROJECTS, ExperienceCategory, ExperienceClient, ShowcaseCategory, ShowcaseProject, ExperienceDisplaySettings, DEFAULT_EXPERIENCE_SETTINGS } from '../src/data/experienceData';

// Types for our enterprise store
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin: string;
  twoFactorEnabled: boolean;
  avatar: string;
  permissions: string[];
}

export interface RoleDefinition {
  id: string;
  name: string;
  description: string;
  userCount: number;
  isSystem: boolean;
  permissions: {
    cms: boolean;
    blog: boolean;
    portfolio: boolean;
    crm: boolean;
    seo: boolean;
    media: boolean;
    analytics: boolean;
    users: boolean;
    security: boolean;
    settings: boolean;
  };
}

export interface CmsPageItem {
  id: string;
  title: string;
  slug: string;
  type: 'page' | 'landing' | 'legal' | 'menu' | 'footer';
  status: 'published' | 'draft' | 'review';
  metaTitle: string;
  metaDescription: string;
  lastModified: string;
  modifiedBy: string;
  views: number;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  status: 'published' | 'draft' | 'scheduled';
  author: string;
  authorRole: string;
  category: string;
  tags: string[];
  featuredImage: string;
  publishDate: string;
  metaTitle: string;
  metaDescription: string;
  schemaJsonLd: string;
  views: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  industry: string;
  client: string;
  status: 'completed' | 'in-progress' | 'maintenance';
  description: string;
  technologies: string[];
  results: string;
  featuredImage: string;
  gallery: string[];
  completionDate: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  slug: string;
  clientName: string;
  industry: string;
  businessChallenge: string;
  objectives: string[];
  solution: string;
  timeline: string;
  results: string[];
  featuredImage: string;
  pdfDownloadUrl?: string;
  featured: boolean;
}

export interface CrmLeadItem {
  id: string;
  name: string;
  companyName: string;
  designation: string;
  email: string;
  phone: string;
  source: 'Google AI Overview' | 'Organic SEO' | 'Referral' | 'LinkedIn Ads' | 'WhatsApp' | 'Contact Form';
  status: 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Won' | 'Lost';
  priority: 'High' | 'Medium' | 'Low';
  owner: string;
  notes: string;
  followUpDate: string;
  createdAt: string;
  spamScore: number;
  history: {
    date: string;
    action: string;
    user: string;
  }[];
}

export interface ContactSubmissionItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
  receivedAt: string;
  status: 'unread' | 'read' | 'replied' | 'spam';
  ipAddress: string;
  spamScore: number;
}

export interface CustomerProfileItem {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  accountManager: string;
  activeProjectsCount: number;
  totalInvoicedUsd: number;
  status: 'Active Enterprise' | 'SME Retainer' | 'Project Complete';
  communicationHistory: {
    date: string;
    type: string;
    summary: string;
  }[];
  createdAt: string;
}

export interface SeoRedirectItem {
  id: string;
  fromUrl: string;
  toUrl: string;
  type: 301 | 302;
  hits: number;
  createdAt: string;
}

export interface MediaFileItem {
  id: string;
  name: string;
  folder: string;
  url: string;
  sizeKb: number;
  type: 'image' | 'video' | 'pdf' | 'svg' | 'document';
  format: 'WEBP' | 'AVIF' | 'SVG' | 'PNG' | 'PDF';
  isCompressed: boolean;
  uploadedAt: string;
  uploadedBy: string;
  altText: string;
}

export interface AuditLogItem {
  id: string;
  timestamp: string;
  userEmail: string;
  userName: string;
  actionType: 'LOGIN' | 'LOGOUT' | 'CMS_EDIT' | 'SEO_CHANGE' | 'USER_CREATE' | 'SECURITY' | 'BACKUP' | 'LEAD_UPDATE';
  module: string;
  details: string;
  ipAddress: string;
  status: 'SUCCESS' | 'WARNING' | 'ALERT';
}

export interface AutomationRuleItem {
  id: string;
  name: string;
  trigger: string;
  action: string;
  enabled: boolean;
  lastRun: string;
  executionCount: number;
}

export interface SystemSettings {
  companyName: string;
  legalName: string;
  tagline: string;
  logoUrl: string;
  faviconUrl: string;
  primaryEmail: string;
  phoneTelephone: string;
  whatsappNumber: string;
  addressDhaka: string;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpSecure: boolean;
  geminiApiKeyMasked: string;
  googleAnalyticsId: string;
  searchConsoleProperty: string;
  timezone: string;
  defaultLanguage: string;
  twoFactorRequiredForAdmins: boolean;
  cspEnabled: boolean;
  activeBranch: string;
}

export interface AdminDatabaseState {
  users: AdminUser[];
  roles: RoleDefinition[];
  cmsPages: CmsPageItem[];
  blogPosts: BlogPostItem[];
  portfolioItems: PortfolioItem[];
  caseStudies: CaseStudyItem[];
  leads: CrmLeadItem[];
  contactSubmissions: ContactSubmissionItem[];
  customers: CustomerProfileItem[];
  seoRedirects: SeoRedirectItem[];
  mediaFiles: MediaFileItem[];
  auditLogs: AuditLogItem[];
  automationRules: AutomationRuleItem[];
  experienceCategories: ExperienceCategory[];
  experienceClients: ExperienceClient[];
  showcaseCategories: ShowcaseCategory[];
  showcaseProjects: ShowcaseProject[];
  experienceSettings?: ExperienceDisplaySettings;
  bgcData?: any;
  settings: SystemSettings;
  backups: { id: string; timestamp: string; sizeMb: number; type: 'AUTO' | 'MANUAL'; description: string }[];
}

const DB_FILE_PATH = path.join(process.cwd(), 'admin_database.json');

const INITIAL_STATE: AdminDatabaseState = {
  users: [
    {
      id: 'u-1',
      name: 'Engr. MD Israt',
      email: 'israt@digitalgrowltd.com',
      role: 'Super Admin',
      department: 'Executive Architecture',
      status: 'active',
      lastLogin: '2026-08-02 20:45 UTC',
      twoFactorEnabled: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      permissions: ['ALL']
    },
    {
      id: 'u-2',
      name: 'Tahmid Rahman',
      email: 'seo@digitalgrowltd.com',
      role: 'SEO Manager',
      department: 'GEO & Organic Growth',
      status: 'active',
      lastLogin: '2026-08-02 18:30 UTC',
      twoFactorEnabled: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      permissions: ['seo.manage', 'cms.edit', 'blog.publish', 'analytics.view']
    },
    {
      id: 'u-3',
      name: 'Farhana Chowdhury',
      email: 'marketing@digitalgrowltd.com',
      role: 'Marketing Manager',
      department: 'Enterprise Marketing',
      status: 'active',
      lastLogin: '2026-08-02 16:15 UTC',
      twoFactorEnabled: true,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      permissions: ['crm.manage', 'cms.edit', 'analytics.view', 'media.upload']
    },
    {
      id: 'u-4',
      name: 'Shahriar Ahmed',
      email: 'editor@digitalgrowltd.com',
      role: 'Editor',
      department: 'Editorial & Content',
      status: 'active',
      lastLogin: '2026-08-01 19:20 UTC',
      twoFactorEnabled: false,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      permissions: ['blog.publish', 'cms.edit', 'media.upload']
    },
    {
      id: 'u-5',
      name: 'Nafis Ahmed (DevLead)',
      email: 'dev@digitalgrowltd.com',
      role: 'Developer',
      department: 'Cloud Engineering',
      status: 'active',
      lastLogin: '2026-08-02 19:50 UTC',
      twoFactorEnabled: true,
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
      permissions: ['cms.edit', 'seo.manage', 'security.audit', 'api.webhooks', 'settings.manage']
    }
  ],
  roles: [
    { id: 'role-1', name: 'Super Admin', description: 'Full system ownership, security, and IP access', userCount: 1, isSystem: true, permissions: { cms: true, blog: true, portfolio: true, crm: true, seo: true, media: true, analytics: true, users: true, security: true, settings: true } },
    { id: 'role-2', name: 'Administrator', description: 'Operational oversight across all CMS, CRM & SEO modules', userCount: 0, isSystem: true, permissions: { cms: true, blog: true, portfolio: true, crm: true, seo: true, media: true, analytics: true, users: false, security: false, settings: true } },
    { id: 'role-3', name: 'SEO Manager', description: 'Schema.org JSON-LD, GEO, AI Overviews & redirects', userCount: 1, isSystem: false, permissions: { cms: true, blog: true, portfolio: false, crm: false, seo: true, media: true, analytics: true, users: false, security: false, settings: false } },
    { id: 'role-4', name: 'Marketing Manager', description: 'Lead pipelines, Google Ads analytics & PPC tracking', userCount: 1, isSystem: false, permissions: { cms: true, blog: true, portfolio: true, crm: true, seo: false, media: true, analytics: true, users: false, security: false, settings: false } },
    { id: 'role-5', name: 'Content Writer', description: 'Drafting blog articles, case studies & whitepapers', userCount: 0, isSystem: false, permissions: { cms: false, blog: true, portfolio: true, crm: false, seo: false, media: true, analytics: false, users: false, security: false, settings: false } },
    { id: 'role-6', name: 'Editor', description: 'Publishing and approving blog articles and landing pages', userCount: 1, isSystem: false, permissions: { cms: true, blog: true, portfolio: true, crm: false, seo: false, media: true, analytics: false, users: false, security: false, settings: false } },
    { id: 'role-7', name: 'Designer', description: 'Media library management, icons, SVG & UI assets', userCount: 0, isSystem: false, permissions: { cms: false, blog: false, portfolio: true, crm: false, seo: false, media: true, analytics: false, users: false, security: false, settings: false } },
    { id: 'role-8', name: 'Developer', description: 'Cloud security, REST APIs, webhooks, and sitemaps', userCount: 1, isSystem: false, permissions: { cms: true, blog: false, portfolio: false, crm: false, seo: true, media: true, analytics: true, users: false, security: true, settings: true } },
    { id: 'role-9', name: 'Sales Executive', description: 'Lead management, follow-ups, and customer profiles', userCount: 0, isSystem: false, permissions: { cms: false, blog: false, portfolio: false, crm: true, seo: false, media: false, analytics: true, users: false, security: false, settings: false } },
    { id: 'role-10', name: 'Customer Support', description: 'Managing contact form inquiries & client messaging', userCount: 0, isSystem: false, permissions: { cms: false, blog: false, portfolio: false, crm: true, seo: false, media: false, analytics: false, users: false, security: false, settings: false } },
    { id: 'role-11', name: 'Finance', description: 'Invoices, enterprise billing, and customer accounts', userCount: 0, isSystem: false, permissions: { cms: false, blog: false, portfolio: false, crm: true, seo: false, media: false, analytics: true, users: false, security: false, settings: false } },
    { id: 'role-12', name: 'HR', description: 'Employee onboarding, user profile management', userCount: 0, isSystem: false, permissions: { cms: false, blog: false, portfolio: false, crm: false, seo: false, media: false, analytics: false, users: true, security: false, settings: false } },
    { id: 'role-13', name: 'Viewer', description: 'Read-only access to dashboard and reporting analytics', userCount: 0, isSystem: false, permissions: { cms: false, blog: false, portfolio: false, crm: false, seo: false, media: false, analytics: true, users: false, security: false, settings: false } }
  ],
  cmsPages: [
    { id: 'page-1', title: 'Enterprise Homepage', slug: '/', type: 'page', status: 'published', metaTitle: 'Digital Grow Ltd - Enterprise Software & AI SEO Agency Bangladesh', metaDescription: '#1 Enterprise Web Development & Generative Engine Optimization (GEO) Agency in Bangladesh.', lastModified: '2026-08-02', modifiedBy: 'Engr. MD Israt', views: 24510 },
    { id: 'page-2', title: 'Enterprise Web Development Service', slug: '/service/website-design-development', type: 'page', status: 'published', metaTitle: 'Enterprise Custom Software Development Bangladesh | DGL IT', metaDescription: 'Cloud-native ERPs, microservices, and React/Node.js web engineering for conglomerates.', lastModified: '2026-08-01', modifiedBy: 'Nafis Ahmed', views: 12450 },
    { id: 'page-3', title: 'Generative Engine Optimization (GEO)', slug: '/service/seo-optimization', type: 'page', status: 'published', metaTitle: 'AI Search & GEO Optimization Bangladesh | Digital Grow Ltd', metaDescription: 'Rank in Google AI Overviews, ChatGPT Search, Gemini & Perplexity with 15-point Schema.org JSON-LD.', lastModified: '2026-08-02', modifiedBy: 'Tahmid Rahman', views: 18900 },
    { id: 'page-4', title: 'E-E-A-T Trust Center & ISO 27001', slug: '/trust-center', type: 'page', status: 'published', metaTitle: 'E-E-A-T Trust Center & Security Credentials | Digital Grow Ltd', metaDescription: 'Verifiable corporate registration, NAP consistency, and ISO/SOC2 security compliance.', lastModified: '2026-07-28', modifiedBy: 'Engr. MD Israt', views: 8200 },
    { id: 'page-5', title: 'Dhaka Division HQ Hub', slug: '/locations/dhaka', type: 'landing', status: 'published', metaTitle: 'Enterprise Software & AI SEO Agency in Banani Dhaka | DGL IT', metaDescription: 'Powering Banani, Gulshan, and Motijheel corporate headquarters with custom software and GEO.', lastModified: '2026-08-02', modifiedBy: 'Tahmid Rahman', views: 9840 },
    { id: 'page-6', title: 'USA North America Client Desk', slug: '/locations/usa-new-york', type: 'landing', status: 'published', metaTitle: 'Offshore Enterprise Software Teams for US Enterprises | DGL IT', metaDescription: 'Dedicated EST-aligned engineering squads for US SaaS founders and fintech institutions.', lastModified: '2026-08-01', modifiedBy: 'Farhana Chowdhury', views: 7600 }
  ],
  blogPosts: [
    {
      id: 'blog-1',
      title: 'How Generative Engine Optimization (GEO) Dominates Google AI Overviews in 2026',
      slug: 'how-generative-engine-optimization-geo-dominates-google-ai-overviews',
      excerpt: 'Traditional keyword stuffing is dead. Discover how 15-point Schema.org JSON-LD and entity-first architecture get your brand cited by AI engines.',
      status: 'published',
      author: 'Engr. MD Israt',
      authorRole: 'Chief Software Architect',
      category: 'AI Search & GEO',
      tags: ['GEO', 'AI Overviews', 'Schema.org', 'JSON-LD', 'Enterprise SEO'],
      featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      publishDate: '2026-07-29',
      metaTitle: 'GEO & Google AI Overviews Guide 2026 | Digital Grow Ltd',
      metaDescription: 'Step-by-step technical guide to ranking in Google AI Overviews and ChatGPT Search.',
      schemaJsonLd: '{"@context":"https://schema.org","@type":"TechArticle","headline":"How Generative Engine Optimization (GEO) Dominates Google AI Overviews in 2026"}',
      views: 4520
    },
    {
      id: 'blog-2',
      title: 'Migrating Bangladesh Conglomerates to Cloud-Native Microservices on AWS & GCP',
      slug: 'migrating-bangladesh-conglomerates-cloud-native-microservices',
      excerpt: 'An architectural breakdown of zero-downtime ERP migration, Kubernetes orchestration, and high-concurrency e-commerce scaling.',
      status: 'published',
      author: 'Nafis Ahmed (DevLead)',
      authorRole: 'Senior DevOps & Cloud Engineer',
      category: 'Cloud Architecture',
      tags: ['Cloud', 'Kubernetes', 'Microservices', 'AWS', 'Enterprise ERP'],
      featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      publishDate: '2026-07-20',
      metaTitle: 'Cloud Native Microservices for Enterprise Bangladesh | DGL IT',
      metaDescription: 'Architectural case study on zero-downtime ERP migration on Kubernetes.',
      schemaJsonLd: '{"@context":"https://schema.org","@type":"Article","headline":"Migrating Bangladesh Conglomerates to Cloud-Native Microservices"}',
      views: 3100
    },
    {
      id: 'blog-3',
      title: 'Why NAP Consistency across Google Maps & Knowledge Graph is Critical for B2B Exporters',
      slug: 'nap-consistency-google-maps-knowledge-graph-b2b-exporters',
      excerpt: 'How verified LocalBusiness Schema and Google Business Profile synchronization drive global procurement inquiries from USA and UK.',
      status: 'draft',
      author: 'Tahmid Rahman',
      authorRole: 'SEO Manager',
      category: 'Local SEO',
      tags: ['NAP', 'LocalBusiness', 'Google Maps', 'B2B Exporters'],
      featuredImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      publishDate: '2026-08-05',
      metaTitle: 'NAP Consistency & LocalBusiness Schema Guide | Digital Grow Ltd',
      metaDescription: 'Maximize international B2B buyer inquiries with verified Google Maps NAP data.',
      schemaJsonLd: '{"@context":"https://schema.org","@type":"Article","headline":"Why NAP Consistency is Critical for B2B Exporters"}',
      views: 0
    }
  ],
  portfolioItems: [
    {
      id: 'port-1',
      title: 'Apex Enterprise E-Commerce & ERP Integration',
      slug: 'apex-enterprise-ecommerce-erp',
      industry: 'E-commerce & RMG Retail',
      client: 'Apex Retail Group Bangladesh',
      status: 'completed',
      description: 'Engineered a high-concurrency Next.js 15 e-commerce storefront connected to SAP ERP with zero downtime during seasonal Eid sales spikes.',
      technologies: ['React 19', 'Next.js', 'Node.js', 'Kubernetes', 'SAP Middleware', 'Redis'],
      results: '+310% Online Revenue & Zero Eid Downtime',
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
      ],
      completionDate: '2026-04-15'
    },
    {
      id: 'port-2',
      title: 'Bayport Maritime Container Telemetry System',
      slug: 'bayport-maritime-container-tracking',
      industry: 'Port Shipping & Supply Chain',
      client: 'Bayport Shipping Lines Chattogram',
      status: 'completed',
      description: 'Built a real-time cargo tracking dashboard with EDI integration and automated customs clearing workflow.',
      technologies: ['TypeScript', 'Express.js', 'PostgreSQL', 'Docker', 'Google Maps API'],
      results: '-45% Customs Clearance Delay & Top 3 Global SEO',
      featuredImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
      gallery: [
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000'
      ],
      completionDate: '2026-06-01'
    }
  ],
  caseStudies: [
    {
      id: 'cs-1',
      title: '310% Organic Revenue Surge for Bangladesh E-Commerce Giant',
      slug: 'apex-310-percent-organic-revenue-surge',
      clientName: 'Apex Retail Group Dhaka',
      industry: 'Retail & E-Commerce',
      businessChallenge: 'High cart abandonment during peak traffic and zero visibility in Google AI Overviews for footwear search queries.',
      objectives: [
        'Reduce server latency under 50,000 concurrent Eid shoppers',
        'Achieve Google AI Overview citations for top 50 footwear keywords',
        'Integrate real-time inventory sync with SAP'
      ],
      solution: 'Deployed a custom Next.js edge-cached storefront and injected 15-point OfferCatalog and FAQPage JSON-LD schema.',
      timeline: '12 Weeks (4 Architecture Sprints)',
      results: [
        '310% increase in organic search revenue within 90 days',
        '100% uptime during record-breaking Eid sale weekend',
        'Cited in Google AI Overviews for 44 commercial footwear queries'
      ],
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      pdfDownloadUrl: '/assets/case-studies/dgl-apex-enterprise-case-study.pdf',
      featured: true
    }
  ],
  leads: [
    {
      id: 'lead-1',
      name: 'Tanvir Hossain',
      companyName: 'Meghna Textiles Ltd',
      designation: 'Managing Director',
      email: 'tanvir@meghnatextiles.com',
      phone: '+8801711234567',
      source: 'Google AI Overview',
      status: 'Proposal',
      priority: 'High',
      owner: 'Engr. MD Israt',
      notes: 'Requested custom ERP integration for 4 textile mills in Gazipur. Needs ISO 27001 data residency compliance.',
      followUpDate: '2026-08-04',
      createdAt: '2026-08-01 14:20 UTC',
      spamScore: 0.02,
      history: [
        { date: '2026-08-01 14:20 UTC', action: 'Lead created via Website Consultation Form', user: 'System' },
        { date: '2026-08-01 15:00 UTC', action: 'Assigned to Engr. MD Israt', user: 'System Automation' },
        { date: '2026-08-02 11:30 UTC', action: 'Status moved to Proposal after Zoom discovery call', user: 'Engr. MD Israt' }
      ]
    },
    {
      id: 'lead-2',
      name: 'Robert Vance',
      companyName: 'FinCloud Analytics NYC',
      designation: 'VP of Engineering',
      email: 'robert.vance@fincloudnyc.io',
      phone: '+1 (212) 555-0189',
      source: 'Organic SEO',
      status: 'Qualified',
      priority: 'High',
      owner: 'Farhana Chowdhury',
      notes: 'Interested in a dedicated 6-person offshore full-stack React & Node squad for their EST wealth management portal.',
      followUpDate: '2026-08-03',
      createdAt: '2026-08-02 09:10 UTC',
      spamScore: 0.01,
      history: [
        { date: '2026-08-02 09:10 UTC', action: 'Lead captured from USA North America Hub page', user: 'System' }
      ]
    },
    {
      id: 'lead-3',
      name: 'Syed Al-Mansoor',
      companyName: 'Gulf PropTech Dubai',
      designation: 'Chief Technology Officer',
      email: 'smansoor@gulfproptech.ae',
      phone: '+971 50 889 4321',
      source: 'WhatsApp',
      status: 'Contacted',
      priority: 'Medium',
      owner: 'Farhana Chowdhury',
      notes: 'Inquired about bilingual Arabic-English real estate CRM portal with automated Dubai Land Department API integration.',
      followUpDate: '2026-08-05',
      createdAt: '2026-08-02 16:45 UTC',
      spamScore: 0.03,
      history: [
        { date: '2026-08-02 16:45 UTC', action: 'Lead created from WhatsApp Regional Desk inquiry', user: 'System' }
      ]
    }
  ],
  contactSubmissions: [
    {
      id: 'sub-101',
      name: 'Dr. Shahriar Chowdhury',
      email: 's.chowdhury@medicarebd.com',
      phone: '+8801819887766',
      company: 'Medicare Diagnostic Group',
      serviceInterest: 'Enterprise Web Development & Custom Software',
      message: 'We want to build a centralized Patient Portal with LIS (Laboratory Information System) integration across 5 Dhaka branches.',
      receivedAt: '2026-08-02 18:10 UTC',
      status: 'unread',
      ipAddress: '103.115.24.88',
      spamScore: 0.04
    },
    {
      id: 'sub-102',
      name: 'Emma Clarkson',
      email: 'emma@thamesproperty.co.uk',
      phone: '+44 20 7946 0988',
      company: 'Thames Property Syndicate UK',
      serviceInterest: 'Search Engine Optimization & AI GEO',
      message: 'Looking to optimize our UK-Bangladesh diaspora real estate investment platform for Google AI Overviews.',
      receivedAt: '2026-08-01 21:30 UTC',
      status: 'read',
      ipAddress: '81.149.200.12',
      spamScore: 0.02
    }
  ],
  customers: [
    {
      id: 'cust-1',
      name: 'Apex Retail Group Bangladesh',
      companyName: 'Apex Footwear Ltd',
      email: 'it.director@apexfootwear.com',
      phone: '+88028811234',
      accountManager: 'Engr. MD Israt',
      activeProjectsCount: 2,
      totalInvoicedUsd: 145000,
      status: 'Active Enterprise',
      communicationHistory: [
        { date: '2026-08-01', type: 'Executive Q3 Review', summary: 'Confirmed 99.99% uptime during Q2 and discussed AI search expansion for Q4.' }
      ],
      createdAt: '2025-01-15'
    },
    {
      id: 'cust-2',
      name: 'Bayport Shipping Lines Chattogram',
      companyName: 'Bayport Maritime Ltd',
      email: 'ops@bayportlines.com',
      phone: '+88031718900',
      accountManager: 'Nafis Ahmed',
      activeProjectsCount: 1,
      totalInvoicedUsd: 68000,
      status: 'Active Enterprise',
      communicationHistory: [
        { date: '2026-07-20', type: 'Shed Tracking Demo', summary: 'Delivered container telemetry dashboard upgrade with automated SMS alerts.' }
      ],
      createdAt: '2025-08-10'
    }
  ],
  seoRedirects: [
    { id: 'red-1', fromUrl: '/services/web-development', toUrl: '/service/website-design-development', type: 301, hits: 1420, createdAt: '2026-01-10' },
    { id: 'red-2', fromUrl: '/seo', toUrl: '/service/seo-optimization', type: 301, hits: 890, createdAt: '2026-02-14' },
    { id: 'red-3', fromUrl: '/contact-us', toUrl: '/#contact', type: 301, hits: 2310, createdAt: '2026-03-01' }
  ],
  mediaFiles: [
    {
      id: 'media-1',
      name: 'dgl-enterprise-hero-banani.webp',
      folder: '/hero',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      sizeKb: 142,
      type: 'image',
      format: 'WEBP',
      isCompressed: true,
      uploadedAt: '2026-07-15',
      uploadedBy: 'Engr. MD Israt',
      altText: 'Digital Grow Ltd Banani Commercial Area HQ Software Architecture Studio'
    },
    {
      id: 'media-2',
      name: 'apex-ecommerce-dashboard-preview.webp',
      folder: '/portfolio',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      sizeKb: 189,
      type: 'image',
      format: 'WEBP',
      isCompressed: true,
      uploadedAt: '2026-06-20',
      uploadedBy: 'Nafis Ahmed',
      altText: 'Apex Retail Group Bangladesh High Load E-Commerce Dashboard'
    },
    {
      id: 'media-3',
      name: 'dgl-iso27001-compliance-brief.pdf',
      folder: '/documents',
      url: '/assets/docs/dgl-iso27001-compliance-brief.pdf',
      sizeKb: 840,
      type: 'pdf',
      format: 'PDF',
      isCompressed: false,
      uploadedAt: '2026-07-01',
      uploadedBy: 'Engr. MD Israt',
      altText: 'Digital Grow Ltd ISO 27001 & SOC2 Type II Enterprise Security Overview'
    }
  ],
  auditLogs: [
    { id: 'log-1', timestamp: '2026-08-02 20:45:10 UTC', userEmail: 'israt@digitalgrowltd.com', userName: 'Engr. MD Israt', actionType: 'LOGIN', module: 'Auth', details: 'Super Admin login verified with 2FA TOTP.', ipAddress: '103.115.24.12', status: 'SUCCESS' },
    { id: 'log-2', timestamp: '2026-08-02 19:50:04 UTC', userEmail: 'dev@digitalgrowltd.com', userName: 'Nafis Ahmed (DevLead)', actionType: 'CMS_EDIT', module: 'CMS', details: 'Updated metaTitle and schema JSON-LD on /service/website-design-development.', ipAddress: '103.115.24.15', status: 'SUCCESS' },
    { id: 'log-3', timestamp: '2026-08-02 18:30:22 UTC', userEmail: 'seo@digitalgrowltd.com', userName: 'Tahmid Rahman', actionType: 'SEO_CHANGE', module: 'SEO', details: 'Added 301 redirect rule from /services/web-development to /service/website-design-development.', ipAddress: '103.115.24.18', status: 'SUCCESS' },
    { id: 'log-4', timestamp: '2026-08-02 16:45:00 UTC', userEmail: 'system@automation', userName: 'System Automation', actionType: 'LEAD_UPDATE', module: 'CRM', details: 'Captured new WhatsApp lead: Syed Al-Mansoor (Gulf PropTech Dubai). Assigned to Farhana Chowdhury.', ipAddress: '127.0.0.1', status: 'SUCCESS' },
    { id: 'log-5', timestamp: '2026-08-02 02:00:00 UTC', userEmail: 'system@automation', userName: 'Cron Scheduler', actionType: 'BACKUP', module: 'System', details: 'Completed automatic database snapshot: backup-auto-2026-08-02.json (14.2 MB)', ipAddress: '127.0.0.1', status: 'SUCCESS' }
  ],
  automationRules: [
    { id: 'auto-1', name: 'Instant Executive Alert on High-Priority Enterprise Lead', trigger: 'Lead Created with Priority = High', action: 'Send instant email notification to israt@digitalgrowltd.com & Slack #enterprise-leads', enabled: true, lastRun: '2026-08-02 09:10 UTC', executionCount: 142 },
    { id: 'auto-2', name: 'Auto-Assign USA & UK Leads to North America Desk', trigger: 'Lead Source Country in [USA, UK, Canada]', action: 'Assign Lead Owner = Farhana Chowdhury & tag #EST-Desk', enabled: true, lastRun: '2026-08-02 09:10 UTC', executionCount: 89 },
    { id: 'auto-3', name: 'Nightly Database Snapshot & JSON Backup', trigger: 'Daily at 02:00 AM UTC', action: 'Create complete JSON backup in /backups & prune backups > 30 days', enabled: true, lastRun: '2026-08-02 02:00 UTC', executionCount: 365 },
    { id: 'auto-4', name: 'Automatic Schema.org JSON-LD Validation & Sitemap Ping', trigger: 'CMS Page or Blog Post Published/Modified', action: 'Regenerate sitemap.xml & ping Google Search Console indexing API', enabled: true, lastRun: '2026-08-02 19:50 UTC', executionCount: 512 }
  ],
  experienceCategories: INITIAL_EXPERIENCE_CATEGORIES,
  experienceClients: INITIAL_EXPERIENCE_CLIENTS,
  showcaseCategories: INITIAL_SHOWCASE_CATEGORIES,
  showcaseProjects: INITIAL_SHOWCASE_PROJECTS,
  experienceSettings: DEFAULT_EXPERIENCE_SETTINGS,
  settings: {
    companyName: 'Digital Grow Ltd',
    legalName: 'Digital Grow Ltd (DGL IT)',
    tagline: 'Bangladesh’s Premier Enterprise Website Development & AI SEO Agency',
    logoUrl: '/logo.png',
    faviconUrl: '/favicon.ico',
    primaryEmail: 'info@digitalgrowltd.com',
    phoneTelephone: '+8801880900590',
    whatsappNumber: '+8801989373683',
    addressDhaka: 'Suite 4B, Rahman Plaza, Banani Commercial Area, Dhaka 1213, Bangladesh',
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUser: 'digitalgrowerltd@gmail.com',
    smtpSecure: true,
    geminiApiKeyMasked: 'AIzaSy*******************************89Qk',
    googleAnalyticsId: 'G-DGLIT2026BD',
    searchConsoleProperty: 'sc-domain:digitalgrowltd.com',
    timezone: 'Asia/Dhaka (GMT+6)',
    defaultLanguage: 'en-US',
    twoFactorRequiredForAdmins: true,
    cspEnabled: true,
    activeBranch: 'Dhaka HQ'
  },
  backups: [
    { id: 'bk-1', timestamp: '2026-08-02 02:00:00 UTC', sizeMb: 14.2, type: 'AUTO', description: 'Nightly automated production database snapshot' },
    { id: 'bk-2', timestamp: '2026-08-01 02:00:00 UTC', sizeMb: 14.1, type: 'AUTO', description: 'Nightly automated production database snapshot' },
    { id: 'bk-3', timestamp: '2026-07-31 18:30:00 UTC', sizeMb: 13.9, type: 'MANUAL', description: 'Pre-deployment check before Q3 SEO schema upgrade' }
  ]
};

// Singleton store class for persistent JSON file storage
class AdminDatabaseStore {
  private state: AdminDatabaseState;

  constructor() {
    this.state = this.loadDatabase();
  }

  private loadDatabase(): AdminDatabaseState {
    try {
      if (fs.existsSync(DB_FILE_PATH)) {
        const raw = fs.readFileSync(DB_FILE_PATH, 'utf-8');
        const parsed = JSON.parse(raw);
        return { ...INITIAL_STATE, ...parsed };
      }
    } catch (err) {
      console.warn("Could not read admin_database.json, falling back to INITIAL_STATE:", err);
    }
    return INITIAL_STATE;
  }

  public saveDatabase(): void {
    try {
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(this.state, null, 2), 'utf-8');
    } catch (err) {
      console.error("Failed to persist admin database to disk:", err);
    }
  }

  public getState(): AdminDatabaseState {
    return this.state;
  }

  public updateState(updater: (state: AdminDatabaseState) => void): AdminDatabaseState {
    updater(this.state);
    this.saveDatabase();
    return this.state;
  }

  public logAudit(item: Omit<AuditLogItem, 'id' | 'timestamp'>): void {
    const newLog: AuditLogItem = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
      ...item
    };
    this.state.auditLogs = [newLog, ...this.state.auditLogs].slice(0, 500); // keep last 500
    this.saveDatabase();
  }

  public createLeadFromConsultation(payload: {
    name: string;
    companyName?: string;
    designation?: string;
    email: string;
    phone: string;
    message?: string;
    ip?: string;
  }): CrmLeadItem {
    const newLead: CrmLeadItem = {
      id: `lead-${Date.now()}`,
      name: payload.name,
      companyName: payload.companyName || 'Unknown Company',
      designation: payload.designation || 'Decision Maker',
      email: payload.email,
      phone: payload.phone,
      source: 'Contact Form',
      status: 'New',
      priority: 'High',
      owner: 'Engr. MD Israt',
      notes: payload.message || 'Submitted via Consultation Form',
      followUpDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
      spamScore: 0.01,
      history: [
        {
          date: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
          action: 'Lead captured from Website Consultation Form',
          user: 'System'
        }
      ]
    };

    this.state.leads = [newLead, ...this.state.leads];
    this.logAudit({
      userEmail: 'system@automation',
      userName: 'System Automation',
      actionType: 'LEAD_UPDATE',
      module: 'CRM',
      details: `New CRM Lead created from Consultation Request: ${payload.name} (${payload.companyName || 'N/A'})`,
      ipAddress: payload.ip || '127.0.0.1',
      status: 'SUCCESS'
    });
    this.saveDatabase();
    return newLead;
  }

  public getBgcData(): any {
    return this.state.bgcData || null;
  }

  public updateBgcData(bgcData: any): void {
    this.state.bgcData = bgcData;
    this.saveDatabase();
  }

  public getExperienceSettings(): ExperienceDisplaySettings {
    return this.state.experienceSettings || DEFAULT_EXPERIENCE_SETTINGS;
  }

  public updateExperienceSettings(settings: Partial<ExperienceDisplaySettings>): ExperienceDisplaySettings {
    this.state.experienceSettings = {
      ...(this.state.experienceSettings || DEFAULT_EXPERIENCE_SETTINGS),
      ...settings
    };
    this.saveDatabase();
    return this.state.experienceSettings;
  }
}

export const adminStore = new AdminDatabaseStore();
