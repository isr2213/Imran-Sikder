// Enterprise SaaS Admin Panel TypeScript Definitions

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

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  module: string;
  details: string;
  ipAddress: string;
  status: string;
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

export interface DashboardStats {
  todaysLeads: number;
  monthlyLeads: number;
  websiteTrafficThisMonth: number;
  seoOverviewScore: number;
  topKeywordsRankingInTop3: number;
  totalBlogs: number;
  totalPortfolio: number;
  totalCaseStudies: number;
  recentBlogs: BlogPostItem[];
  recentLeads: CrmLeadItem[];
  recentContactRequests: ContactSubmissionItem[];
  recentPortfolio: PortfolioItem[];
  recentCaseStudies: CaseStudyItem[];
  unreadNotificationsCount: number;
  taskOverview: { id: string; title: string; assignee: string; priority: string; status: string }[];
}
