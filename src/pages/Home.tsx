import React, { useState, useEffect, useRef } from "react";
import Logo from "../components/Logo";
import ServicesSection from "../components/ServicesSection.tsx";
import IndustriesWeServeSection from "../components/IndustriesWeServeSection.tsx";
import SEOHead from "../components/SEOHead.tsx";
import { Link } from "react-router-dom";

import { 
  TrendingUp, 
  Target, 
  Database, 
  Mail, 
  Smartphone, 
  Users, 
  Globe, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Check, 
  Zap, 
  Shield, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Send, 
  Phone, 
  Clock, 
  ArrowUp,
  MapPin,
  Sparkles,
  Building2,
  Award,
  ArrowUpRight,
  School,
  Activity,
  Lightbulb,
  FileText,
  MousePointerClick,
  Layout
} from "lucide-react";
import TopicalAuthorityBannerSection from "../components/TopicalAuthorityBannerSection";
import SEOEcosystemSection from "../components/SEOEcosystemSection";
import SEOFAQSection from "../components/SEOFAQSection";
import PPCEcosystemSection from "../components/PPCEcosystemSection";
import PPCFAQSection from "../components/PPCFAQSection";
import TechEcosystemSection from "../components/TechEcosystemSection";
import TechFAQSection from "../components/TechFAQSection";
import GEOKnowledgeGraphSection from "../components/GEOKnowledgeGraphSection";
import QuestionFirstAnswerHubSection from "../components/QuestionFirstAnswerHubSection";
import EnterpriseSchemaInjector from "../components/EnterpriseSchemaInjector";
import AIContentStructureSection from "../components/AIContentStructureSection";
import { BgcSection } from "../components/BgcSection";

// --- Types ---
type ServiceCategory = "performance" | "social" | "seo";
type SolutionCategory = "school" | "university" | "hospital";
type PortfolioFilter = "all" | "performance" | "social" | "seo" | "solutions";

interface ServiceItem {
  name: string;
  desc: string;
  icon: any;
  bulletPoints: string[];
}

interface ServiceGroup {
  id: ServiceCategory;
  title: string;
  banglaTitle: string;
  icon: string;
  description: string;
  banglaDescription: string;
  services: ServiceItem[];
}

interface SEOFactor {
  category: string;
  banglaCategory: string;
  detail: string;
  banglaDetail: string;
  icon: string;
  score: number;
  checklist: string[];
}

interface SolutionGroup {
  id: SolutionCategory;
  title: string;
  banglaTitle: string;
  icon: any;
  colorClass: string;
  features: string[];
  banglaFeatures: string[];
}

interface CaseStudy {
  title: string;
  banglaTitle: string;
  category: PortfolioFilter;
  result: string;
  banglaResult: string;
  description: string;
  banglaDescription: string;
  tags: string[];
}

// --- Data ---
const SERVICES_DATA: ServiceGroup[] = [
  {
    id: "performance",
    title: "Performance Marketing",
    banglaTitle: "পারফরম্যান্স মার্কেটিং",
    icon: "📊",
    description: "Granular targeting and complete full-funnel measurement to scale conversions and sales.",
    banglaDescription: "সরাসরি সেলস ও কনভার্সন বৃদ্ধির জন্য ডাটা-চালিত ও নিখুঁত ক্যাম্পেইন ম্যানেজমেন্ট।",
    services: [
      {
        name: "Google Search & Shopping Ads",
        desc: "Smart bidding, intent-based keyword mapping, and shopping ads to capture high-buying-intent queries.",
        icon: Search,
        bulletPoints: ["Targeted Keyword Mapping", "ROI-optimized Bid Strategies", "Dynamic Search & Shopping Ads"]
      },
      {
        name: "YouTube & Video Action Campaigns",
        desc: "High-impact video action and bumper ads strategically targeted to drive brand awareness and conversion.",
        icon: Zap,
        bulletPoints: ["In-stream Skippable Ads", "Bumper Ads", "Custom Intent Audience Target"]
      },
      {
        name: "Email Automation Flows",
        desc: "Trigger-based automated email workflows (Abandoned Cart, Welcome Sequence, Re-engagement) to maximize lifetime value.",
        icon: Mail,
        bulletPoints: ["Automated Cart Recovery", "Behavioral Segmentation", "Advanced Personalization Templates"]
      },
      {
        name: "Server-Side Conversion API Tracking",
        desc: "Advanced first-party tracking via server-side containers to bypass iOS 14 restrictions and ad blockers for accurate attribution.",
        icon: Database,
        bulletPoints: ["Meta/Google Server Containers", "Bypass Ad Blockers", "Precise Attribution Modeling"]
      }
    ]
  },
  {
    id: "social",
    title: "Social Media Marketing",
    banglaTitle: "সোশ্যাল মিডিয়া মার্কেটিং",
    icon: "📱",
    description: "Highly engaging, creative, and localized campaigns where your exact target audience hangs out.",
    banglaDescription: "ফেসবুক, ইনস্টাগ্রাম, এবং টিকটক এর মাধ্যমে আপনার পণ্যের ব্র্যান্ড ভ্যালু ও সেলস বাড়ানো।",
    services: [
      {
        name: "Facebook & Instagram Ads",
        desc: "Advanced demographic and interest targeting using dynamic creative testing and lookalike models for top performance.",
        icon: Users,
        bulletPoints: ["Lookalike & Custom Audience Segments", "A/B Testing Creatives", "Lead Gen & Catalog Ads"]
      },
      {
        name: "TikTok Conversion Campaigns",
        desc: "Slick, native-style video ads that blend directly into users' feeds for explosive organic and viral results.",
        icon: Smartphone,
        bulletPoints: ["Algorithm-Friendly Creatives", "Spark Ads Partnerships", "High CTR Instant Experiences"]
      },
      {
        name: "LinkedIn B2B Pipeline",
        desc: "Account-based marketing (ABM) and lead generation campaigns directly targeting decision-makers, CEOs, and HR heads.",
        icon: Building2,
        bulletPoints: ["Decision-Maker Targeting", "Sponsored InMail Sequences", "High-Quality Lead Forms"]
      }
    ]
  },
  {
    id: "seo",
    title: "Technical & On-Page SEO",
    banglaTitle: "টেকনিক্যাল এবং অন-পেজ এসইও",
    icon: "🔝",
    description: "Sustainable, long-term organic traffic to achieve search engine dominance and cut ad spend.",
    banglaDescription: "সার্চ ইঞ্জিনের প্রথম পেজে নিয়ে এসে স্থায়ী অর্গানিক কাস্টমার এবং ফ্রী ট্রাফিক অর্জন করা।",
    services: [
      {
        name: "Technical Site Audit & Speed Fix",
        desc: "Fixing crawlability, sitemaps, robots.txt, schema markup, indexation errors, and Core Web Vitals for maximum crawl efficiency.",
        icon: Shield,
        bulletPoints: ["Indexation & Crawl Budget Optimization", "Core Web Vitals Boost", "Broken Link & Redirect Audits"]
      },
      {
        name: "On-Page Content & EEAT Setup",
        desc: "Optimizing header tags, meta details, inner-linking architecture, and reinforcing experience, expertise, authoritativeness, and trust.",
        icon: Globe,
        bulletPoints: ["Semantic Content Optimization", "H1-H4 Heading Hierarchy Fix", "EEAT and Trust Signal Engineering"]
      },
      {
        name: "Authority Building & Backlinks",
        desc: "Acquiring high-quality, relevant context-based editorial backlinks to skyrocket your domain authority.",
        icon: TrendingUp,
        bulletPoints: ["Digital PR & Guest Post outreach", "Niche-Specific Referral Links", "Competitor Backlink Hijacking"]
      }
    ]
  }
];

const SEO_FACTORS: SEOFactor[] = [
  {
    category: "Mobile-First Indexing",
    banglaCategory: "মোবাইল-ফার্স্ট ইনডেক্সিং",
    detail: "Google predominantly uses the mobile version of content for indexing and ranking. Our designs guarantee identical layout, text, and rich schema experience across all smartphone viewports.",
    banglaDetail: "গুগল যেকোনো সাইটকে এখন মোবাইল ভার্সন অনুযায়ী র‍্যাংক করায়। আমরা নিশ্চিত করি আপনার মোবাইল ভিউ যেন সবচেয়ে ফাস্ট ও ইউজার ফ্রেন্ডলি হয়।",
    icon: "📱",
    score: 98,
    checklist: ["Viewport Meta tags optimized", "Responsive fluid grids & text", "Tap target size minimum 44px"]
  },
  {
    category: "Core Web Vitals Optimization",
    banglaCategory: "কোর ওয়েব ভাইটালস অপ্টিমাইজেশন",
    detail: "Ensuring LCP (Largest Contentful Paint) is under 2.5 seconds, INP (Interaction to Next Paint) under 200ms, and CLS (Cumulative Layout Shift) is kept near 0 for maximum speed ranking.",
    banglaDetail: "LCP ২.৫ সেকেন্ডের নিচে এবং CLS একদম ০ রাখা হয় যাতে সাইট স্ক্রল করার সময় কোনো লেআউট নড়াচড়া না করে এবং সুপারফাস্ট লোড হয়।",
    icon: "⚡",
    score: 95,
    checklist: ["Compressed next-gen WebP images", "CSS & JS minification & deferring", "Prevent layout shifting with explicit sizes"]
  },
  {
    category: "HTTPS & Security Architecture",
    banglaCategory: "এইচটিটিপিএস ও সিকিউরিটি",
    detail: "Google enforces secure, encrypted connections. We configure strict transport security (HSTS), clean SSL/TLS handshakes, and prevent any insecure asset mixed-content errors.",
    banglaDetail: "গুগল সিকিউরড বা এইচটিটিপিএস সাইটকে অগ্রাধিকার দেয়। আমরা ফুল এসএসএল এনক্রিপশন এবং সিকিউরিটি হেডার সেট করি।",
    icon: "🔒",
    score: 100,
    checklist: ["HSTS headers set", "Prevent mixed-content warnings", "Auto HTTP to HTTPS redirects"]
  },
  {
    category: "JSON-LD Structured Schema",
    banglaCategory: "স্ট্রাকচার্ড স্কিমা মার্কআপ",
    detail: "Injecting machine-readable structured schema (JSON-LD) directly into the head. This triggers rich snippets, rating stars, FAQ accordions, and knowledge graph panels in Google search results.",
    banglaDetail: "আমরা কোডে JSON-LD স্কিমা ইনজেক্ট করি, যার ফলে গুগল সার্চে আপনার রিভিউ স্টার, প্রশ্ন ও উত্তর এবং বিস্তারিত তথ্য সরাসরি শো করবে।",
    icon: "📋",
    score: 96,
    checklist: ["LocalBusiness & Organization schema", "FAQ & Product rating schema integrated", "Clean structured data test pass"]
  },
  {
    category: "Content Depth & EEAT",
    banglaCategory: "কন্টেন্ট ডেপথ এবং ইইএটি",
    detail: "We engineer content built on Experience, Expertise, Authoritativeness, and Trustworthiness. We optimize semantic depth, avoid thin duplicate content, and build clean citation pathways.",
    banglaDetail: "গুগলের নতুন পলিসি EEAT অনুযায়ী আপনার ব্র্যান্ড ও কন্টেন্টের অথরিটি বৃদ্ধি এবং কাস্টমারদের বিশ্বস্ততা তৈরি করা।",
    icon: "🏅",
    score: 94,
    checklist: ["In-depth, non-duplicate content copy", "Author bios & expert credentials setup", "Clear external source citations"]
  },
  {
    category: "Strategic Internal Linking",
    banglaCategory: "অভ্যন্তরীণ লিঙ্কিং সিলোস",
    detail: "Creating pristine topical clusters using silos. Connecting support articles to primary service landing pages passing link equity (PageRank) to the most lucrative commercial pages.",
    banglaDetail: "একটি পেজের সাথে আরেকটি পেজের লিংক জুস পাস করিয়ে কিওয়ার্ড র‍্যাংকিং বুস্ট করা।",
    icon: "🔗",
    score: 91,
    checklist: ["Primary landing page anchor focus", "Topical cluster mapping", "Zero orphaned or dead-end pages"]
  }
];

const SOLUTIONS_DATA: SolutionGroup[] = [
  {
    id: "school",
    title: "School Management Systems",
    banglaTitle: "স্কুল ম্যানেজমেন্ট ওয়েবসাইট",
    icon: School,
    colorClass: "from-brand-500 to-brand-600",
    features: [
      "Online Student Admission & Automated Enrollment Portal",
      "Interactive Attendance & Student Behavior Trackers",
      "Automated Monthly Fee Collection with bKash/Nagad Payment Gateways",
      "Parent-Teacher Communication App & Dashboards",
      "Exam Marks, Automated CGPA & digital Report Card Generation",
      "Dynamic Class Timetable Scheduling & Teacher Workload Allocators"
    ],
    banglaFeatures: [
      "অনলাইন স্টুডেন্ট এডমিশন এবং অটোমেটিক এনরোলমেন্ট পোর্টাল",
      "উপস্থিতি ট্র্যাকিং ও দৈনিক অনুপস্থিতি এসএমএস এলার্ট",
      "বিকাশ/নগদ পেমেন্ট গেটওয়ের মাধ্যমে অটোমেটিক বেতন সংগ্রহ",
      "অভিভাবক ও শিক্ষক যোগাযোগের জন্য অ্যাপ এবং ড্যাশবোর্ড",
      "পরীক্ষার রেজাল্ট এবং ডিজিটাল রিপোর্ট কার্ড জেনারেটর",
      "ক্লাস রুটিন ও ডাইনামিক শিক্ষক অ্যাসাইনমেন্ট ম্যানেজমেন্ট"
    ]
  },
  {
    id: "university",
    title: "University Management Portals",
    banglaTitle: "বিশ্ববিদ্যালয় ম্যানেজমেন্ট পোর্টাল",
    icon: Award,
    colorClass: "from-brand-500 to-brand-600",
    features: [
      "Student Credit Registration & Core Semester Course Enrollers",
      "Faculty Management, Workload Tracker, & Research publication lists",
      "Library Book Issuing, Tracking & Digital Catalog Integrations",
      "Alumni Network Database & Job Board Portals",
      "Dynamic Certificate, Transcript & Digital Degree Verification Checks",
      "Fully Integrated Hostel Allocation & Booking Portals"
    ],
    banglaFeatures: [
      "স্টুডেন্ট কোর্স রেজিষ্ট্রেশন এবং সেমিস্টার এডমিশন",
      "শিক্ষক ও কর্মকর্তা ড্যাশবোর্ড ও পাবলিকেশন ট্র্যাকিং",
      "লাইব্রেরি বই ট্র্যাকিং ও ডিজিটাল ক্যাটালগ সিস্টেম",
      "অ্যালামনাই নেটওয়ার্ক ও ক্যারিয়ার জব পোর্টাল",
      "অনলাইন সার্টিফিকেট ও ট্রান্সক্রিপ্ট ভেরিফিকেশন চেক",
      "বিশ্ববিদ্যালয় হোস্টেল সিট ও ডাইনিং বুকিং ম্যানেজমেন্ট"
    ]
  },
  {
    id: "hospital",
    title: "Hospital & Clinic Platforms",
    banglaTitle: "হাসপাতাল ও ক্লিনিক ম্যানেজমেন্ট",
    icon: Activity,
    colorClass: "from-brand-600 to-brand-700",
    features: [
      "Patient Online Appointment Booking & Live Queue Status tracker",
      "Secure Digital Electronic Medical Records (EMR / EHR) system",
      "Real-time Doctor Roster, Duty Charts & Availability Managers",
      "Integrated OPD / IPD Patient Billing & Insurance Claim filing",
      "Pharmacy stock inventory, low-stock alerts & sales dashboard",
      "Diagnostic Lab test reports online access & automated WhatsApp delivery"
    ],
    banglaFeatures: [
      "অনলাইন সিরিয়াল বুকিং এবং লাইভ কিউ স্ট্যাটাস ট্র্যাকার",
      "রোগীর ডিজিটাল প্রেসক্রিপশন ও মেডিকেল হিস্ট্রি (EMR / EHR)",
      "ডাক্তার ডিউটি রস্টার এবং রিয়েল-টাইম অ্যাভেইলেবিলিটি ড্যাশবোর্ড",
      "ওপিডি/আইপিডি বিলিং এবং পেমেন্ট রিসিট জেনারেশন",
      "ফার্মেসী স্টক ইনভেন্টরি ও অটো-মেডিসিন অর্ডার এলার্ট",
      "ল্যাব টেস্টের রিপোর্ট অনলাইনে দেখা ও হোয়াটসএপে অটো-ডেলিভারি"
    ]
  }
];

const PORTFOLIO_DATA: CaseStudy[] = [
  {
    title: "E-Commerce Performance Campaign",
    banglaTitle: "ই-কমার্স সেলস ক্যাম্পেইন",
    category: "performance",
    result: "340% ROI Boost in 90 Days",
    banglaResult: "৯০ দিনে ৩৪০% আরওআই বৃদ্ধি",
    description: "Scaled a localized fashion brand using Facebook Pixel, server-side attribution, Google Search Ads, and trigger-based abandoned cart emails.",
    banglaDescription: "সার্ভার সাইড ট্র্যাকিং, গুগল শপিং এডস এবং অটোমেটেড কার্ট রিকভারি ইমেলের মাধ্যমে একটি লোকাল ব্র্যান্ডের সেলস বহুগুণ বাড়ানো হয়েছে।",
    tags: ["Facebook Ads", "Google Shopping", "Attribution"]
  },
  {
    title: "SaaS Enterprise B2B Pipeline",
    category: "social",
    banglaTitle: "B2B এন্টারপ্রাইজ লিড জেনারেশন",
    result: "2,500+ CEOs & HR Leads",
    banglaResult: "২৫০০+ হাই-কোয়ালিটি লিড",
    description: "Deployed custom Account-Based Marketing (ABM) on LinkedIn paired with conversational Messenger Ads to hook executive-level buyers.",
    banglaDescription: "লিঙ্কডইন এবিএম এবং ফেসবুক কনভার্সেশনাল এডস সেটআপ করে দেশের শীর্ষস্থানীয় কোম্পানির ডিসিশন মেকারদের লিড সংগ্রহ করা হয়েছে।",
    tags: ["LinkedIn ABM", "B2B Leads", "Messenger Ads"]
  },
  {
    title: "Hospital SEO Domination",
    category: "seo",
    banglaTitle: "হাসপাতালের টেকনিক্যাল এসইও",
    result: "#1 Rankings for 45+ High-Intent Keywords",
    banglaResult: "৪৫+ কিওয়ার্ড গুগলের প্রথম পেজে",
    description: "Executed a comprehensive Technical SEO, site speed optimization, schema markup integration, and localized EEAT-driven health articles.",
    banglaDescription: "কোর ওয়েব ভাইটালস ফিক্স, ডক্টর স্কিমা এবং রোগ-ভিত্তিক হাই-কোয়ালিটি কন্টেন্ট লিখে অর্গানিক ভিজিটর ৩০০% বৃদ্ধি করা হয়েছে।",
    tags: ["Technical SEO", "Speed Boost", "EEAT Content"]
  },
  {
    title: "University Digital Portal Setup",
    category: "solutions",
    banglaTitle: "বিশ্ববিদ্যালয় ডাইনামিক পোর্টাল",
    result: "60% Admission Growth Year-over-Year",
    banglaResult: "ভর্তি ৬০% বৃদ্ধি পেয়েছে",
    description: "Designed a fully-responsive student portal integrated with optimized Course Landing pages, driving massive local organic enrollment.",
    banglaDescription: "ভর্তি রেজিষ্ট্রেশন সহজ করতে একটি ডাইনামিক পোর্টাল তৈরি করে ডিজিটাল এডমিশন ক্যাম্পেইনের মাধ্যমে স্টুডেন্ট ভর্তি বৃদ্ধি করা হয়েছে।",
    tags: ["Web System", "Admissions Portal", "Local SEO"]
  },
  {
    title: "Viral TikTok Brand Launch",
    category: "social",
    banglaTitle: "টিকটক ভাইরাল কন্টেন্ট ক্যাম্পেইন",
    result: "5M+ Organic Views & 12x ROAS",
    banglaResult: "৫ মিলিয়নের বেশি ভিউ ও ১২ গুণ ROAS",
    description: "Leveraged micro-influencer content combined with TikTok Spark Ads to target Gen-Z demographics for a cosmetics startup.",
    banglaDescription: "দেশের টপ টিকটক ইনফ্লুয়েন্সারদের শর্ট ভিডিও ও স্পার্ক এডস কম্বিনেশনে ৫ মিলিয়নের বেশি মানুষের কাছে রিচ তৈরি করা হয়েছে।",
    tags: ["TikTok Spark Ads", "Influencer Strategy", "Gen-Z focus"]
  },
  {
    title: "School ERP & Website Rollout",
    category: "solutions",
    banglaTitle: "স্কুল ইআরপি এবং ওয়েবসাইট রোলআউট",
    result: "50+ Leading Institutions Active",
    banglaResult: "৫০টির বেশি শীর্ষস্থানীয় স্কুলে একটিভ",
    description: "Deployed custom administrative portals with mobile parent fee notifications and CGPA report card generation.",
    banglaDescription: "পেমেন্ট গেটওয়ে, ক্লাস রুটিন এবং শিক্ষার্থীদের CGPA রেজাল্ট ম্যানেজমেন্টের জন্য একটি সেন্ট্রাল ক্লাউড ERP ইমপ্লিমেন্ট করা হয়েছে।",
    tags: ["School ERP", "CGPA Engine", "bKash Gateway"]
  }
];

// --- Subcomponents ---

// Animated Counter Component
function CountUp({ end, suffix = "", duration = 1500, decimals = 0 }: { end: number; suffix?: string; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <div ref={elementRef} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
      {formattedCount}
      <span className="text-brand-400">{suffix}</span>
    </div>
  );
}

// --- Main App Component ---
export default function Home() {
  // Navigation & UI States
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileGetInTouchOpen, setMobileGetInTouchOpen] = useState(false);
  const [desktopMarketingOpen, setDesktopMarketingOpen] = useState(false);
  const [mobileMarketingOpen, setMobileMarketingOpen] = useState(false);
  const [languageMode, setLanguageMode] = useState<"en" | "bn">("en");

  // Free Consultation Modal States
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationStep, setConsultationStep] = useState<1 | 2 | 3>(1);
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    companyName: "",
    designation: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });
  const [isConsultationSubmitting, setIsConsultationSubmitting] = useState(false);
  const [consultationSuccess, setConsultationSuccess] = useState(false);
  const [consultationError, setConsultationError] = useState("");

  // Filter/Tabs States
  const [activeServiceTab, setActiveServiceTab] = useState<ServiceCategory>("performance");
  const [expandedSeoFactor, setExpandedSeoFactor] = useState<number | null>(0);
  const [activeSolutionTab, setActiveSolutionTab] = useState<SolutionCategory>("school");
  const [activePortfolioFilter, setActivePortfolioFilter] = useState<PortfolioFilter>("all");

  // Typing effect on Hero
  const [typedText, setTypedText] = useState("");
  const banglaTagline = "আমরা আপনার ব্যবসা বাড়াতে এবং শক্তিশালী স্ট্র্যাটেজি তৈরি করার চ্যালেঞ্জ নিতে প্রস্তুত।";
  const englishTagline = "";
  const activeTagline = languageMode === "bn" ? banglaTagline : englishTagline;

  useEffect(() => {
    setTypedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < activeTagline.length) {
        setTypedText((prev) => prev + activeTagline.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [languageMode, activeTagline]);

  // Track scrolling to toggle glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contact Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [formSubmitted, setFormStateSubmitted] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingForm(true);
    try {
      await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: `[Service: ${formState.service || "General"}] ${formState.message}`
        }),
      });
    } catch (err) {
      console.warn("API log error:", err);
    }
    setTimeout(() => {
      setIsSubmittingForm(false);
      setFormStateSubmitted(true);
      const subject = `Website Consultation Request - ${formState.name}`;
      const body = `Hello Digital Grower Ltd.,\n\nI am contacting you from the website consultation form.\n\nName: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nService Interested: ${formState.service || 'General'}\n\nMessage:\n${formState.message}`;
      window.location.href = `mailto:digitalgrowerltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setFormState({ name: "", email: "", phone: "", service: "", message: "" });
    }, 800);
  };

  const handleConsultationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConsultationForm({
      ...consultationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsConsultationSubmitting(true);
    setConsultationError("");

    try {
      const response = await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(consultationForm),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setConsultationSuccess(true);
        const subject = `Free Consultation Booking - ${consultationForm.name}`;
        const body = `Hello Digital Grower Ltd.,\n\nI would like to book a free consultation.\n\nName: ${consultationForm.name}\nCompany: ${consultationForm.companyName || 'N/A'}\nDesignation: ${consultationForm.designation || 'N/A'}\nEmail: ${consultationForm.email}\nPhone: ${consultationForm.phone}\nWebsite: ${consultationForm.website || 'N/A'}\n\nMessage:\n${consultationForm.message}`;
        window.location.href = `mailto:digitalgrowerltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      } else {
        setConsultationError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Booking submission error:", err);
      setConsultationError("Connection failed. Please check your internet connection.");
    } finally {
      setIsConsultationSubmitting(false);
    }
  };

  // --- AI Chatbot states ---
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: "bot" | "user"; content: string }>>([
    {
      role: "bot",
      content: "আসসালামু আলাইকুম! আমি ডিজিটাল গ্রোয়ার লিমিটেডের এআই মার্কেটিং কনসালট্যান্ট। আমাদের সার্ভিস, চার্জ অথবা আপনার ওয়েবসাইটের এসইও অপ্টিমাইজেশন নিয়ে কি কোনো প্রশ্ন আছে? আমি আপনাকে সাহায্য করতে পারি!"
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isBotLoading, setIsBotLoading] = useState(false);
  const [chatbotPosition, setChatbotPosition] = useState<"bottom-right" | "bottom-left">("bottom-right");

  const sendChatMessage = async (presetText?: string) => {
    const query = presetText || chatInput.trim();
    if (!query) return;

    // Add user message to state
    const updatedMessages = [...chatMessages, { role: "user", content: query }];
    setChatMessages(updatedMessages as any);
    setChatInput("");
    setIsBotLoading(true);

    try {
      // Make real call to server API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages })
      });
      const data = await response.json();
      if (data.success && data.reply) {
        setChatMessages([...updatedMessages, { role: "bot", content: data.reply }] as any);
      } else {
        throw new Error();
      }
    } catch (err) {
      // Fallback response if API fails
      setChatMessages([
        ...updatedMessages,
        {
          role: "bot",
          content: "দুঃখিত, আমাদের এআই সিস্টেম এই মুহূর্তে একটু ব্যস্ত। আমাদের সম্পর্কে বিস্তারিত জানতে অথবা ফ্রি কনসালটেশন বুক করতে সরাসরি আমাদের হোয়াটসঅ্যাপ নম্বরে (+8801989373683) যোগাযোগ করুন!"
        }
      ] as any);
    } finally {
      setIsBotLoading(false);
    }
  };

  // Predefined Chat Questions
  const PREDEFINED_QUESTIONS = [
    "আপনাদের মূল সার্ভিসগুলো কি কি?",
    "এসইও অপ্টিমাইজেশন কিভাবে করেন?",
    "সার্ভার-সাইড ট্র্যাকিং কি?",
    "স্কুল ও হাসপাতালের সিস্টেমের চার্জ কত?",
    "ফ্রি কনসালটেশন বুক করতে চাই"
  ];

  return (
    <div id="top" className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-brand-500 selection:text-white">
      <SEOHead
        title="DGL IT | ROI-Focused Digital Marketing & IT Solutions Agency"
        description="Premium ROI-focused digital marketing & IT solutions agency. 8+ years experience, 99.99% customer satisfaction. We specialize in Google Ads, Facebook Ads, advanced Technical SEO, and custom high-ranking Management Platforms."
        canonicalUrl="https://digitalgrowltd.com/"
        keywords="Digital Marketing Bangladesh, SEO Agency Bangladesh, Web Development Bangladesh, Software Company Bangladesh, Google Ads, Meta Ads, DGL IT, Digital Grower Ltd."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "DGL IT | ROI-Focused Digital Marketing & IT Solutions Agency",
          "description": "Premium ROI-focused digital marketing & IT solutions agency. 8+ years experience, 99.99% customer satisfaction.",
          "url": "https://digitalgrowltd.com/",
          "isPartOf": {
            "@id": "https://digitalgrowltd.com/#website"
          },
          "about": {
            "@id": "https://digitalgrowltd.com/#organization"
          }
        }}
      />
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[1000px] right-1/4 w-[600px] h-[600px] rounded-full bg-brand-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-500/5 blur-[130px] pointer-events-none" />

      {/* --- Floating Navbar --- */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-zinc-900/60 shadow-lg shadow-black/40" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#top" className="flex items-center gap-3 group">
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <a href="#top" className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all">
                {languageMode === "bn" ? "হোম" : "Home"}
              </a>
              
              {/* Dropdown for Our Services (Mega Menu) */}
              <div className="relative group py-2">
                <a 
                  href="#services" 
                  className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>{languageMode === "bn" ? "সেবাসমূহ" : "Services"}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white group-hover:rotate-180 transition-transform duration-200" />
                </a>
                
                {/* 3-Column Enterprise Mega Menu */}
                <div className="absolute top-full -left-48 w-[840px] bg-zinc-950/95 backdrop-blur-2xl border border-zinc-900 rounded-2xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50 grid grid-cols-3 gap-6">
                  {/* Column 1: Website Development & Design */}
                  <div className="space-y-2">
                    <div className="text-xs font-black uppercase tracking-wider text-brand-400 pb-2 border-b border-zinc-900 flex items-center gap-1.5">
                      <Layout className="w-3.5 h-3.5" />
                      <span>{languageMode === "bn" ? "ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট" : "Website Dev & Design"}</span>
                    </div>
                    <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
                      {[
                        { name: "Business Website", slug: "business-website", bn: "বিজনেস ওয়েবসাইট" },
                        { name: "Corporate Website", slug: "corporate-website", bn: "কর্পোরেট ওয়েবসাইট" },
                        { name: "Ecommerce Website", slug: "ecommerce-website", bn: "ই-কমার্স ওয়েবসাইট" },
                        { name: "Portfolio Website", slug: "portfolio-website", bn: "পোর্টফোলিও ওয়েবসাইট" },
                        { name: "Landing Page", slug: "landing-page", bn: "ল্যান্ডিং পেজ" },
                        { name: "WordPress Website", slug: "wordpress-website", bn: "ওয়ার্ডপ্রেস ওয়েবসাইট" },
                        { name: "Custom Website", slug: "custom-website", bn: "কাস্টম ওয়েবসাইট" },
                        { name: "Web Application", slug: "web-application", bn: "ওয়েব অ্যাপ্লিকেশন" },
                        { name: "CRM Development", slug: "crm-development", bn: "সিআরএম সফটওয়্যার" },
                        { name: "ERP Development", slug: "erp-development", bn: "ইআরপি সফটওয়্যার" },
                        { name: "HRM Software", slug: "hrm-software", bn: "এইচআরএম সফটওয়্যার" },
                        { name: "POS Software", slug: "pos-software", bn: "পিওএস সফটওয়্যার" },
                        { name: "Inventory Software", slug: "inventory-software", bn: "ইনভেন্টরি সফটওয়্যার" }
                      ].map((item) => (
                        <Link
                          key={item.slug}
                          to={`/service/${item.slug}`}
                          className="block px-2.5 py-1.5 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors font-medium"
                        >
                          {languageMode === "bn" ? item.bn : item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Digital Marketing */}
                  <div className="space-y-2">
                    <div className="text-xs font-black uppercase tracking-wider text-brand-400 pb-2 border-b border-zinc-900 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{languageMode === "bn" ? "ডিজিটাল মার্কেটিং" : "Digital Marketing"}</span>
                    </div>
                    <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
                      {[
                        { name: "SEO Optimization", slug: "search-engine-optimization-seo", bn: "এসইও অপ্টিমাইজেশন" },
                        { name: "Technical SEO", slug: "technical-seo", bn: "টেকনিক্যাল এসইও" },
                        { name: "Local SEO", slug: "local-seo", bn: "লোকাল এসইও" },
                        { name: "Google Ads", slug: "google-ads", bn: "গুগল অ্যাডস" },
                        { name: "Facebook Ads", slug: "facebook-ads", bn: "ফেসবুক অ্যাডস" },
                        { name: "Instagram Ads", slug: "instagram-ads", bn: "ইনস্টাগ্রাম অ্যাডস" },
                        { name: "YouTube Ads", slug: "youtube-ads", bn: "ইউটিউব অ্যাডস" },
                        { name: "Media Buying", slug: "media-buying", bn: "মিডিয়া বায়িং" },
                        { name: "Email Marketing", slug: "email-marketing", bn: "ইমেইল মার্কেটিং" },
                        { name: "Social Media Marketing", slug: "social-media-marketing", bn: "সোশ্যাল মিডিয়া মার্কেটিং" }
                      ].map((item) => (
                        <Link
                          key={item.slug}
                          to={`/service/${item.slug}`}
                          className="block px-2.5 py-1.5 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors font-medium"
                        >
                          {languageMode === "bn" ? item.bn : item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Software, Apps & Growth Challenge */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs font-black uppercase tracking-wider text-brand-400 pb-2 border-b border-zinc-900 flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>{languageMode === "bn" ? "সফটওয়্যার ও অ্যাপ" : "Software & Apps"}</span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { name: "Software Development", slug: "software-development", bn: "সফটওয়্যার ডেভেলপমেন্ট" },
                          { name: "Android App Development", slug: "android-app-development", bn: "অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট" },
                          { name: "E-Commerce Support", slug: "e-commerce-support-services", bn: "ই-কমার্স সাপোর্ট" },
                          { name: "Video Production (TVC)", slug: "video-production-ovc-tvc", bn: "ভিডিও প্রোডাকশন" },
                          { name: "Graphic & Motion Design", slug: "graphic-design-motion-graphics", bn: "গ্রাফিক ও মোশন ডিজাইন" }
                        ].map((item) => (
                          <Link
                            key={item.slug}
                            to={`/service/${item.slug}`}
                            className="block px-2.5 py-1.5 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors font-medium"
                          >
                            {languageMode === "bn" ? item.bn : item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Signature Business Growth Challenge Box */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-brand-500/20 via-zinc-900 to-zinc-900 border border-brand-500/30">
                      <Link to="/service/business-growth-challenge" className="block group/challenge">
                        <div className="text-xs font-bold text-brand-400 flex items-center justify-between mb-1">
                          <span>Business Growth Challenge</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/challenge:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                          Our signature 90-day scale program for enterprise & SMEs.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="#industries-we-serve" className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all">
                {languageMode === "bn" ? "ইন্ডাস্ট্রিজ" : "Industries"}
              </a>
              {/* Dropdown for Our Experience */}
              <div className="relative group py-2">
                <Link to="/our-experience" className="px-3 py-2 text-sm font-medium text-brand-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all flex items-center gap-1">
                  <span>{languageMode === "bn" ? "আমাদের অভিজ্ঞতা" : "Our Experience"}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                <div className="absolute top-full left-0 w-72 bg-zinc-950 border border-zinc-900 rounded-xl shadow-2xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50 space-y-1">
                  <Link 
                    to="/our-experience/business-growth-challenge" 
                    className="block px-3 py-2 rounded-lg text-xs font-black text-brand-400 bg-brand-500/10 hover:bg-brand-500/20 transition-colors border border-brand-500/30 flex items-center justify-between"
                  >
                    <span>★ {languageMode === "bn" ? "বিজনেস গ্রোথ চ্যালেঞ্জ (BGC)" : "Business Growth Challenge (BGC)"}</span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                  </Link>
                  <Link 
                    to="/our-experience" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 hover:bg-zinc-900 transition-colors"
                  >
                    {languageMode === "bn" ? "সকল অভিজ্ঞতা কেন্দ্র (Experience Hub)" : "Experience Center (All Projects)"}
                  </Link>
                  <div className="pt-1.5 pb-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3">Service Categories</div>
                  {[
                    { name: "Video Production", slug: "video-production" },
                    { name: "Campaigns", slug: "campaigns" },
                    { name: "Web Development", slug: "web-development" },
                    { name: "Android App Development", slug: "android-app-development" },
                    { name: "Paid Ads", slug: "paid-ads" }
                  ].map(cat => (
                    <Link
                      key={cat.slug}
                      to={`/our-experience/${cat.slug}`}
                      className="block px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                    >
                      • {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/portfolio" className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all">
                {languageMode === "bn" ? "পোর্টফোলিও" : "Portfolio"}
              </Link>

              {/* Dropdown for Resources, FAQ, Blog, Career */}
              <div className="relative group py-2">
                <a 
                  href="#seo-factors" 
                  className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>{languageMode === "bn" ? "রিসোর্স ও তথ্য" : "Resources"}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white group-hover:rotate-180 transition-transform duration-200" />
                </a>
                
                <div className="absolute top-full right-0 w-64 bg-zinc-950 border border-zinc-900 rounded-xl shadow-2xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50 space-y-1">
                  <Link 
                    to="/blog" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 hover:bg-zinc-900 transition-colors"
                  >
                    {languageMode === "bn" ? "ব্লগ ও আর্টিকেল (Knowledge Hub)" : "Blog & Articles (Knowledge Hub)"}
                  </Link>
                  <Link 
                    to="/trust-center" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-brand-400 hover:bg-zinc-900 transition-colors flex items-center justify-between"
                  >
                    <span>{languageMode === "bn" ? "ই-ই-এ-টি ট্রাস্ট সেন্টার" : "E-E-A-T Trust Center"}</span>
                    <Shield className="w-3.5 h-3.5" />
                  </Link>
                  <a 
                    href="#seo-factors" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 hover:bg-zinc-900 transition-colors"
                  >
                    {languageMode === "bn" ? "এসইও রিসোর্স ও গাইড" : "SEO Resources"}
                  </a>
                  <a 
                    href="#faq" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 hover:bg-zinc-900 transition-colors"
                  >
                    {languageMode === "bn" ? "সাধারণ জিজ্ঞাসা (FAQ)" : "FAQ"}
                  </a>
                  <a 
                    href="#about" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 hover:bg-zinc-900 transition-colors"
                  >
                    {languageMode === "bn" ? "ক্যারিয়ার" : "Career"}
                  </a>
                  <a 
                    href="#contact" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 hover:bg-zinc-900 transition-colors"
                  >
                    {languageMode === "bn" ? "যোগাযোগ করুন" : "Contact Us"}
                  </a>
                  <Link
                    to="/admin"
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-emerald-400 hover:bg-zinc-900 transition-colors border-t border-zinc-900 mt-1 pt-2 flex items-center justify-between"
                  >
                    <span>{languageMode === "bn" ? "এডমিন পোর্টাল (DGL OS)" : "Admin Portal (DGL OS)"}</span>
                    <Shield className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <a href="#about" className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all">
                {languageMode === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
              </a>
            </nav>

            {/* Action Button */}
            <div className="hidden md:flex items-center gap-2.5">
              <Link
                to="/admin"
                className="px-3.5 py-2 text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-all flex items-center gap-1.5"
                title="Enterprise OS Admin Portal"
              >
                <Shield className="w-3.5 h-3.5 text-brand-400" />
                <span>OS</span>
              </Link>
              <button 
                onClick={() => {
                  setIsConsultationModalOpen(true);
                  setConsultationStep(1);
                  setConsultationSuccess(false);
                  setConsultationError("");
                }}
                className="px-5 py-2.5 text-sm font-bold text-black bg-brand-500 hover:bg-brand-400 rounded-xl transition-all shadow-lg shadow-brand-500/10 hover:shadow-brand-500/20 hover:-translate-y-0.5 cursor-pointer"
              >
                {languageMode === "bn" ? "ফ্রি কন্সাল্টেশন বুক করুন" : "Book a Free Consultation"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-zinc-900 py-4 px-4 space-y-2">
            {/* Mobile Menu Logo */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-zinc-900/80 px-2">
              <a href="#top" onClick={() => setMobileMenuOpen(false)}>
                <Logo textSize="sm" />
              </a>
            </div>
            <a 
              href="#top" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl"
            >
              {languageMode === "bn" ? "হোম" : "Home"}
            </a>
            
            {/* Collapsible Mobile Our Services */}
            <div>
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl cursor-pointer text-left"
              >
                <span>{languageMode === "bn" ? "সেবাসমূহ (Services)" : "Our Services"}</span>
                <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="pl-6 pr-2 py-2 space-y-1 bg-zinc-950/50 border-l-2 border-brand-500/20 ml-4 mt-1 rounded-r-lg">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-brand-400 px-3 py-1">Website Development</div>
                  {[
                    { name: "Business Website", slug: "business-website", bn: "বিজনেস ওয়েবসাইট" },
                    { name: "Corporate Website", slug: "corporate-website", bn: "কর্পোরেট ওয়েবসাইট" },
                    { name: "Ecommerce Website", slug: "ecommerce-website", bn: "ই-কমার্স ওয়েবসাইট" },
                    { name: "WordPress Website", slug: "wordpress-website", bn: "ওয়ার্ডপ্রেস ওয়েবসাইট" },
                    { name: "Custom Web App", slug: "web-application", bn: "কাস্টম ওয়েব অ্যাপ্লিকেশন" }
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      to={`/service/${item.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg"
                    >
                      • {languageMode === "bn" ? item.bn : item.name}
                    </Link>
                  ))}

                  <div className="text-[10px] font-bold uppercase tracking-wider text-brand-400 px-3 py-1 pt-3">Digital Marketing</div>
                  {[
                    { name: "SEO Optimization", slug: "search-engine-optimization-seo", bn: "এসইও অপ্টিমাইজেশন" },
                    { name: "Google & Meta Ads", slug: "facebook-google-ads-marketing", bn: "গুগল ও ফেসবুক অ্যাডস" },
                    { name: "Social Media Marketing", slug: "social-media-marketing", bn: "সোশ্যাল মিডিয়া মার্কেটিং" }
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      to={`/service/${item.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg"
                    >
                      • {languageMode === "bn" ? item.bn : item.name}
                    </Link>
                  ))}

                  <div className="text-[10px] font-bold uppercase tracking-wider text-brand-400 px-3 py-1 pt-3">Software & Growth</div>
                  <Link
                    to="/service/software-development"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg"
                  >
                    • {languageMode === "bn" ? "সফটওয়্যার ডেভেলপমেন্ট" : "Software Development"}
                  </Link>
                  <Link
                    to="/service/android-app-development"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg"
                  >
                    • {languageMode === "bn" ? "অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট" : "Android App Development"}
                  </Link>
                  <Link
                    to="/service/business-growth-challenge"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs font-bold text-brand-400 hover:bg-zinc-900 rounded-lg"
                  >
                    ★ {languageMode === "bn" ? "বিজনেস গ্রোথ চ্যালেঞ্জ" : "Business Growth Challenge"}
                  </Link>
                </div>
              )}
            </div>

            <a 
              href="#industries-we-serve" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl"
            >
              {languageMode === "bn" ? "ইন্ডাস্ট্রিজ" : "Industries"}
            </a>
            <Link 
              to="/our-experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-bold text-brand-400 hover:text-white hover:bg-zinc-900 rounded-xl"
            >
              {languageMode === "bn" ? "আমাদের অভিজ্ঞতা" : "Our Experience"}
            </Link>
            <Link 
              to="/portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl"
            >
              {languageMode === "bn" ? "পোর্টফোলিও" : "Portfolio"}
            </Link>

            {/* Collapsible Mobile Resources */}
            <div>
              <button 
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl cursor-pointer text-left"
              >
                <span>{languageMode === "bn" ? "রিসোর্স ও তথ্য" : "Resources"}</span>
                <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {mobileResourcesOpen && (
                <div className="pl-6 pr-2 py-2 space-y-1 bg-zinc-950/50 border-l-2 border-brand-500/20 ml-4 mt-1 rounded-r-lg">
                  <Link 
                    to="/blog" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg"
                  >
                    • {languageMode === "bn" ? "ব্লগ ও আর্টিকেল (Knowledge Hub)" : "Blog & Knowledge Hub"}
                  </Link>
                  <Link 
                    to="/trust-center" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs font-bold text-brand-400 hover:bg-zinc-900 rounded-lg flex items-center justify-between"
                  >
                    <span>★ {languageMode === "bn" ? "ই-ই-এ-টি ট্রাস্ট সেন্টার" : "E-E-A-T Trust Center"}</span>
                    <Shield className="w-3.5 h-3.5 text-brand-400" />
                  </Link>
                  <a 
                    href="#faq" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg"
                  >
                    • {languageMode === "bn" ? "সাধারণ জিজ্ঞাসা" : "FAQ"}
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg"
                  >
                    • {languageMode === "bn" ? "যোগাযোগ করুন" : "Contact Us"}
                  </a>
                  <Link
                    to="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-zinc-900 rounded-lg flex items-center justify-between"
                  >
                    <span>• {languageMode === "bn" ? "এডমিন পোর্টাল (DGL OS)" : "Admin Portal (DGL OS)"}</span>
                    <Shield className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl"
            >
              {languageMode === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
            </a>
            <div className="pt-2">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConsultationModalOpen(true);
                  setConsultationStep(1);
                  setConsultationSuccess(false);
                  setConsultationError("");
                }}
                className="w-full text-center py-3 text-base font-bold text-black bg-brand-500 rounded-xl cursor-pointer"
              >
                {languageMode === "bn" ? "ফ্রি কন্সাল্টেশন বুক করুন" : "Book a Free Consultation"}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract grids background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/10 bg-brand-500/5 mb-8 shadow-inner animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            <span className="text-xs sm:text-sm text-brand-400 font-mono tracking-wider font-semibold">
              {languageMode === "bn" ? "৮+ বছরের অভিজ্ঞতা • ৯৯.৯৯% কাস্টমার সন্তুষ্টি" : "8+ Years Experience • 99.99% Customer Satisfaction"}
            </span>
          </div>

          {/* Hero Company Title with Animated Gradient & Glow Effect */}
          <div className="my-6 sm:my-8 relative group">
            {/* Ambient background aura glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-28 sm:h-40 bg-gradient-to-r from-brand-500/25 via-brand-400/35 to-amber-500/25 blur-3xl rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h1 className="relative z-10 font-black font-display tracking-tight text-white leading-tight">
              <span className="hero-company-name text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight py-2 px-1 block">
                {languageMode === "bn" ? "ডিজিটাল গ্রোয়ার লিমিটেড" : "DIGITAL GROWER LTD."}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-zinc-300 uppercase tracking-widest text-base sm:text-xl md:text-2xl font-bold mt-4 sm:mt-6">
              {languageMode === "bn" ? "বিজনেস গ্রোথ ও সেলস ডেভেলপিং পার্টনার" : "Your Business Growth & Sales Developing Partner"}
            </p>
          </div>

          {/* Typing Effect Tagline */}
          {activeTagline && (
            <div className="max-w-3xl mx-auto h-[4.5rem] sm:h-auto mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                <span className="text-brand-500 font-bold">“</span>
                {typedText}
                <span className="animate-pulse text-brand-400 font-black">|</span>
                <span className="text-brand-500 font-bold">”</span>
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button 
              onClick={() => {
                setIsConsultationModalOpen(true);
                setConsultationStep(1);
                setConsultationSuccess(false);
                setConsultationError("");
              }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-400 hover:to-brand-300 text-black font-extrabold text-lg rounded-xl shadow-xl shadow-brand-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-brand-500/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              {languageMode === "bn" ? "ফ্রি কন্সাল্টেশন বুক করুন" : "Book Free Consultation"}
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-lg rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {languageMode === "bn" ? "সার্ভিসসমূহ দেখুন" : "Explore Services"}
            </a>
          </div>

          {/* Certificates Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-zinc-900/60 text-zinc-400">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand-500" />
              <span className="text-sm font-semibold">{languageMode === "bn" ? "গুগল এডস সার্টিফাইড" : "Google Ads Certified"}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand-500" />
              <span className="text-sm font-semibold">{languageMode === "bn" ? "মেটা ব্লুপ্রিন্ট সার্টিফাইড" : "Meta Certified Specialist"}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand-500" />
              <span className="text-sm font-semibold">{languageMode === "bn" ? "জিটিএম ট্র্যাকিং এক্সপার্ট" : "Google Tag Manager Expert"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- How BGC Works Section --- */}
      <BgcSection onBookConsultation={() => {
        setIsConsultationModalOpen(true);
        setConsultationStep(1);
        setConsultationSuccess(false);
        setConsultationError("");
      }} />

      {/* --- Live Counter Statistics --- */}
      <section id="experience" className="py-12 bg-black border-y border-zinc-900/40 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <CountUp end={8} suffix="+" />
              <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">
                {languageMode === "bn" ? "বছরের অভিজ্ঞতা" : "Years Experience"}
              </p>
            </div>
            <div className="text-center border-l border-zinc-900">
              <CountUp end={99.99} suffix="%" decimals={2} />
              <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">
                {languageMode === "bn" ? "গ্রাহক সন্তুষ্টি" : "Customer Satisfaction"}
              </p>
            </div>
            <div className="text-center border-l border-zinc-900">
              <CountUp end={500} suffix="+" />
              <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">
                {languageMode === "bn" ? "সফল ক্যাম্পেইন" : "Campaigns Executed"}
              </p>
            </div>
            <div className="text-center border-l border-zinc-900">
              <CountUp end={250} suffix="+" />
              <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">
                {languageMode === "bn" ? "সন্তুষ্ট ক্লায়েন্ট" : "Retained Businesses"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <ServicesSection />

      {/* --- SEO Factors Section --- */}
      <section id="seo-factors" className="py-20 bg-zinc-950/40 border-y border-zinc-900/40 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-500 mb-3">
              {languageMode === "bn" ? "সার্চ ইঞ্জিন র‍্যাংকিং" : "Organic Visibility"}
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {languageMode === "bn" ? "গুগল র‍্যাংকিং" : "Ultimate Google"}{" "}
              <span className="text-gradient">{languageMode === "bn" ? "ফ্যাক্টরসমূহ" : "Ranking Framework"}</span>
            </h3>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light">
              {languageMode === "bn" 
                ? "আমাদের তৈরি প্রতিটি ওয়েবসাইট গুগলের এই ১২টি ক্রিপ্টিকাল র‍্যাংকিং ফ্যাক্টর মেনে তৈরি করা হয়, যাতে পেইড অ্যাড ছাড়া ফ্রী কাস্টমার পাওয়া যায়।" 
                : "We don't build generic brochure templates. We implement Google's top ranking parameters directly into the code layer to cut your acquisition costs."}
            </p>
          </div>

          {/* Interactive Factor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SEO_FACTORS.map((factor, idx) => (
              <div 
                key={idx}
                onClick={() => setExpandedSeoFactor(expandedSeoFactor === idx ? null : idx)}
                className={`glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  expandedSeoFactor === idx 
                    ? "border-brand-500/30 bg-zinc-900/40 shadow-lg shadow-brand-500/5" 
                    : "border-zinc-900 hover:border-zinc-800"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <span className="text-3xl shrink-0">{factor.icon}</span>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white">
                        {languageMode === "bn" ? factor.banglaCategory : factor.category}
                      </h4>
                      <p className="text-zinc-500 text-xs mt-1 font-mono">
                        {languageMode === "bn" ? "আমাদের অডিট স্কোর:" : "Technical Audit Score:"}{" "}
                        <span className="text-brand-400 font-bold">{factor.score}/100</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    {expandedSeoFactor === idx ? (
                      <ChevronUp className="h-5 w-5 text-brand-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-zinc-600" />
                    )}
                  </div>
                </div>

                {/* Expandable detail section */}
                {expandedSeoFactor === idx && (
                  <div className="mt-4 pt-4 border-t border-zinc-900/60 animate-fade-in space-y-4">
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                      {languageMode === "bn" ? factor.banglaDetail : factor.detail}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {factor.checklist.map((item, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-zinc-500">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Target Audience & Industries We Serve Section --- */}
      <IndustriesWeServeSection
        onOpenConsultation={() => {
          setIsConsultationModalOpen(true);
          setConsultationStep(1);
          setConsultationSuccess(false);
          setConsultationError("");
        }}
      />

      {/* --- Management Solutions Section --- */}
      <section id="solutions" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-500 mb-3">
              {languageMode === "bn" ? "ওয়েবসাইট এবং পোর্টাল" : "Institutional Software"}
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {languageMode === "bn" ? "প্রতিষ্ঠান ম্যানেজমেন্ট" : "Unified Management"}{" "}
              <span className="text-gradient">{languageMode === "bn" ? "সলিউশনসমূহ" : "Web Systems"}</span>
            </h3>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light">
              {languageMode === "bn" 
                ? "স্কুল, কলেজ, ইউনিভার্সিটি এবং হাসপাতালের কার্যক্রম সম্পূর্ণ অটোমেটেড করতে এবং সহজে পেমেন্ট কালেকশন করতে আমাদের বিশেষ ওয়েব পোর্টাল।" 
                : "Automate admissions, billing, CGPA report cards, and patient EHR records with custom cloud-first management dashboards built on extreme speed."}
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {SOLUTIONS_DATA.map((sol) => {
              const SolIcon = sol.icon;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionTab(sol.id)}
                  className={`px-5 py-3 rounded-xl font-bold text-sm tracking-wide transition-all border flex items-center gap-2 cursor-pointer ${
                    activeSolutionTab === sol.id 
                      ? "bg-zinc-900 text-brand-400 border-brand-500/30" 
                      : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white"
                  }`}
                >
                  <SolIcon className="h-4 w-4" />
                  {languageMode === "bn" ? sol.banglaTitle : sol.title}
                </button>
              );
            })}
          </div>

          {/* Solutions Content Panel */}
          {SOLUTIONS_DATA.filter((s) => s.id === activeSolutionTab).map((sol) => {
            const SolIcon = sol.icon;
            return (
              <div key={sol.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
                {/* Text and list */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                      <SolIcon className="h-6 w-6 text-brand-400" />
                    </div>
                    <h4 className="font-display font-black text-2xl sm:text-3xl text-white">
                      {languageMode === "bn" ? sol.banglaTitle : sol.title}
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(languageMode === "bn" ? sol.banglaFeatures : sol.features).map((feat, fIdx) => (
                      <div key={fIdx} className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call To Action Mockup / Interactive Panel */}
                <div className="lg:col-span-5">
                  <div className="glass-card p-8 rounded-3xl border-brand-500/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full blur-xl pointer-events-none" />
                    <Sparkles className="h-8 w-8 text-brand-400 mx-auto mb-4 animate-bounce" />
                    <h5 className="font-display font-black text-lg text-white mb-2">
                      {languageMode === "bn" ? "ফ্রি ডেমো এবং কোটেশন" : "Request a Live Sandbox Demo"}
                    </h5>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-6 font-light">
                      {languageMode === "bn" 
                        ? "আপনার প্রতিষ্ঠানের প্রয়োজনীয়তা অনুযায়ী ডেমো পোর্টাল সেটআপ করতে আমাদের সাথে কথা বলুন।" 
                        : "Connect with our integration team to access a pre-loaded Sandbox workspace matching your requirements."}
                    </p>
                    <a 
                      href="https://wa.me/8801989373683" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 font-bold text-black bg-brand-500 hover:bg-brand-400 rounded-xl transition-all shadow-lg shadow-brand-500/10"
                    >
                      <span>{languageMode === "bn" ? "হোয়াটসঅ্যাপে ডেমো দেখুন" : "View Live Demo"}</span>
                      <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Portfolio & Case Studies Section --- */}
      <section id="portfolio" className="py-20 sm:py-28 bg-zinc-950/40 border-y border-zinc-900/40 px-4 sm:px-6 lg:px-8 relative scroll-mt-24">
        <div id="case-studies" className="max-w-6xl mx-auto scroll-mt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-500 mb-3">
              {languageMode === "bn" ? "আমাদের অভিজ্ঞতা ও পোর্টফোলিও" : "Client Success & Track Record"}
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {languageMode === "bn" ? "আমাদের প্রমাণিত" : "Proven Growth"}{" "}
              <span className="text-gradient">{languageMode === "bn" ? "অভিজ্ঞতা ও পোর্টফোলিও" : "Experience & Portfolio"}</span>
            </h3>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light">
              {languageMode === "bn" 
                ? "৮ বছরের পথচলায় ২৫০+ সম্মানীয় ক্লায়েন্ট ও বিভিন্ন প্রোডাক্ট টেকনোলজির অর্জিত সফল ফলাফল।" 
                : "Real data, verified sales, and sustainable rankings for 250+ honorable clients across 12+ sectors over 8+ years."}
            </p>
          </div>

          {/* Filtering Links */}
          <div className="flex items-center justify-center gap-1.5 mb-12 flex-wrap text-xs sm:text-sm font-medium text-zinc-500">
            {(["all", "performance", "social", "seo", "solutions"] as PortfolioFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setActivePortfolioFilter(f)}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer capitalize ${
                  activePortfolioFilter === f 
                    ? "bg-zinc-900 text-brand-400 border border-brand-500/20" 
                    : "hover:text-zinc-300"
                }`}
              >
                {f === "all" ? (languageMode === "bn" ? "সবগুলো" : "All Work") : f}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.filter((item) => activePortfolioFilter === "all" || item.category === activePortfolioFilter).map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-3xl flex flex-col justify-between hover:border-brand-500/20 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">{item.category}</span>
                    <span className="text-xs font-bold text-brand-400 bg-brand-500/5 border border-brand-500/10 px-2.5 py-1 rounded-md">
                      {languageMode === "bn" ? item.banglaResult : item.result}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-400 transition-colors">
                    {languageMode === "bn" ? item.banglaTitle : item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {languageMode === "bn" ? item.banglaDescription : item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-zinc-900/60 border border-zinc-800 text-zinc-400 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-500 mb-3">
              {languageMode === "bn" ? "শুরু করুন আজই" : "Start Growing"}
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {languageMode === "bn" ? "আপনার ব্র্যান্ডকে" : "Take Your Business to"}{" "}
              <span className="text-gradient">{languageMode === "bn" ? "ডিজিটাল করুন" : "Next Level"}</span>
            </h3>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm sm:text-base font-light">
              {languageMode === "bn" 
                ? "আমাদের টিম আপনার ব্যবসার জন্য সম্পূর্ণ ফ্রি-তে একটি কাস্টম গ্রোথ অডিট অ্যান্ড মার্কেটিং রোডম্যাপ তৈরি করবে।" 
                : "Complete our form for a comprehensive marketing audit of your platform within 24 business hours."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 sm:p-8">
              {formSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="h-16 w-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-brand-400" />
                  </div>
                  <h4 className="font-display font-black text-2xl text-white mb-2">
                    {languageMode === "bn" ? "রিকোয়েস্ট সফল হয়েছে!" : "Audit Request Received!"}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto font-light">
                    {languageMode === "bn" 
                      ? "ধন্যবাদ! আপনার সাবমিশনটি সফলভাবে জমা হয়েছে। ২৪ ঘন্টার মধ্যে আমাদের একজন গ্রোথ স্পেশালিস্ট আপনাকে ইমেইল অথবা হোয়াটসএপে রোডম্যাপ সহ কন্ট্যাক্ট করবেন।" 
                      : "Thank you for reaching out. A growth strategist is reviewing your submission and will contact you shortly with your custom audit report."}
                  </p>
                  <button 
                    onClick={() => setFormStateSubmitted(false)}
                    className="mt-6 text-brand-400 text-xs sm:text-sm font-semibold hover:underline"
                  >
                    {languageMode === "bn" ? "নতুন আরেকটি রিকোয়েস্ট করুন" : "Submit another request"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Honeypot spam protection */}
                  <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
                        {languageMode === "bn" ? "সম্পূর্ণ নাম *" : "Full Name *"}
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-[#050507] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
                        {languageMode === "bn" ? "ইমেইল এড্রেস *" : "Email Address *"}
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#050507] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
                        {languageMode === "bn" ? "ফোন নম্বর" : "Phone Number"}
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        placeholder="+8801XXXXXXXXX"
                        className="w-full bg-[#050507] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
                        {languageMode === "bn" ? "কাঙ্ক্ষিত সার্ভিস" : "Service Interested In"}
                      </label>
                      <select 
                        name="service"
                        value={formState.service}
                        onChange={handleInputChange}
                        className="w-full bg-[#050507] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500/40 transition-colors"
                      >
                        <option value="">{languageMode === "bn" ? "সিলেক্ট করুন..." : "Select Service"}</option>
                        <option value="performance">{languageMode === "bn" ? "পারফরম্যান্স মার্কেটিং" : "Performance Marketing"}</option>
                        <option value="social">{languageMode === "bn" ? "সোশ্যাল মিডিয়া ম্যানেজমেন্ট" : "Social Media Marketing"}</option>
                        <option value="seo">{languageMode === "bn" ? "এসইও অপ্টিমাইজেশন" : "Technical SEO Services"}</option>
                        <option value="solutions">{languageMode === "bn" ? "স্কুল/হাসপাতাল ম্যানেজমেন্ট পোর্টাল" : "Institutional Web Portal"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
                      {languageMode === "bn" ? "আপনার মেসেজ *" : "Project Description *"}
                    </label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder={languageMode === "bn" ? "আপনার প্রতিষ্ঠান এবং মার্কেটিং লক্ষ্য নিয়ে বিস্তারিত লিখুন..." : "Tell us about your organization, site URL and marketing objectives..."}
                      className="w-full bg-[#050507] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500/40 transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmittingForm}
                    className="w-full py-4 text-sm font-bold text-black bg-brand-500 hover:bg-brand-400 rounded-xl transition-all shadow-lg shadow-brand-500/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmittingForm ? (
                      <span className="h-5 w-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>{languageMode === "bn" ? "ফ্রি গ্রোথ রোডম্যাপ সাবমিট করুন" : "Submit Audit Request"}</span>
                        <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contacts Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card p-6 rounded-2xl flex gap-4 items-center">
                <div className="h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-zinc-500 text-[10px] uppercase font-mono tracking-wider">
                    {languageMode === "bn" ? "ফোন এবং হোয়াটসঅ্যাপ" : "Hotline / WhatsApp"}
                  </h4>
                  <a href="https://wa.me/8801989373683" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm sm:text-base hover:text-brand-400 transition-all block mt-0.5">
                    +880 1989-373683
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex gap-4 items-center">
                <div className="h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-zinc-500 text-[10px] uppercase font-mono tracking-wider">
                    {languageMode === "bn" ? "সরাসরি ইমেল করুন" : "Direct Email Inquiries"}
                  </h4>
                  <a href="mailto:digitalgrowerltd@gmail.com" className="text-white font-bold text-sm sm:text-base hover:text-brand-400 transition-all block mt-0.5 break-all">
                    digitalgrowerltd@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex gap-4 items-center">
                <div className="h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-zinc-500 text-[10px] uppercase font-mono tracking-wider">
                    {languageMode === "bn" ? "অফিস আওয়ার্স" : "Business Hours"}
                  </h4>
                  <span className="text-white font-semibold text-sm block mt-0.5">
                    {languageMode === "bn" ? "সোম – শনি: সকাল ৯:০০ – রাত ৮:০০" : "Mon–Sat: 9:00 AM – 8:00 PM"}
                  </span>
                </div>
              </div>

              {/* Directly open chat widget widget */}
              <div 
                onClick={() => setChatbotOpen(true)}
                className="p-5 rounded-2xl bg-gradient-to-r from-brand-500/10 to-brand-500/5 border border-brand-500/20 hover:border-brand-500/40 transition-all cursor-pointer flex justify-between items-center group shadow-md shadow-brand-500/5"
              >
                <div className="flex gap-3 items-center">
                  <MessageSquare className="h-5 w-5 text-brand-400 animate-pulse" />
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-brand-400 uppercase tracking-widest">
                      {languageMode === "bn" ? "আইএ চ্যাটবটের সাথে কথা বলুন" : "Chat with AI Consultant"}
                    </h4>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      {languageMode === "bn" ? "সার্ভিস, চার্জ ও পোর্টফোলিও জানুন সাথে সাথে" : "Real-time automated support powered by Gemini"}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-zinc-600 group-hover:text-brand-400 transition-all group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 15+ Schema.org JSON-LD Graph Injector --- */}
      <EnterpriseSchemaInjector
        pageTitle="Digital Grower Ltd. — Best Custom Website Development, Software Engineering & App Development Company Bangladesh"
        pageUrl="/"
        serviceSlug="website-design-development"
        serviceTitle="Enterprise Web, Software & Mobile App Engineering"
        description="Digital Grower Ltd. is Bangladesh's top Enterprise Website Development, Custom Software Engineering, Android App Development, and Business Growth agency."
      />

      {/* --- Enterprise Regional SEO & Divisional Hubs Section --- */}
      <section id="locations" className="py-16 bg-[#030303] border-t border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Local SEO &amp; Verified NAP Consistency</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
              {languageMode === "bn"
                ? "আমাদের ৮টি বিভাগীয় ও আন্তর্জাতিক ইঞ্জিনিয়ারিং হাব"
                : "Bangladesh Divisional Hubs & International Engineering Desks"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              {languageMode === "bn"
                ? "ঢাকা, চট্টগ্রাম, খুলনা, রাজশাহী, সিলেট, বরিশাল, রংপুর, ময়মনসিংহ এবং ইউএসএ/ইউকে/ইউএই/সিঙ্গাপুর ও অস্ট্রেলিয়ায় লোকাল এসইও এবং সফটওয়্যার সেবা।"
                : "Optimized for local search authority across all 8 Bangladeshi Divisions and 5 international commercial hubs with Schema.org JSON-LD."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: "Dhaka HQ", slug: "dhaka", country: "Bangladesh" },
              { name: "Chattogram", slug: "chattogram", country: "Bangladesh" },
              { name: "Khulna", slug: "khulna", country: "Bangladesh" },
              { name: "Rajshahi", slug: "rajshahi", country: "Bangladesh" },
              { name: "Sylhet", slug: "sylhet", country: "Bangladesh" },
              { name: "Barishal", slug: "barishal", country: "Bangladesh" },
              { name: "Rangpur", slug: "rangpur", country: "Bangladesh" },
              { name: "Mymensingh", slug: "mymensingh", country: "Bangladesh" },
              { name: "New York (USA)", slug: "usa-new-york", country: "USA Hub" },
              { name: "London (UK)", slug: "uk-london", country: "UK Hub" },
              { name: "Dubai (UAE)", slug: "uae-dubai", country: "GCC Hub" },
              { name: "Singapore", slug: "singapore", country: "APAC Hub" },
              { name: "Sydney", slug: "australia-sydney", country: "Australia Hub" },
            ].map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-brand-500/50 hover:bg-zinc-900 text-center transition-all group"
              >
                <span className="text-xs font-bold text-zinc-200 group-hover:text-white block truncate">
                  {loc.name}
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-brand-400 block truncate mt-0.5">
                  {loc.country}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer Section --- */}
      <footer className="bg-black border-t border-zinc-900 py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Col 1: Logo and details */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#top" className="flex items-center gap-3 group">
                <Logo />
              </a>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
                {languageMode === "bn" 
                  ? "আমরা ৮+ বছর ধরে সফলতার সাথে ডিজিটাল সলিউশন এবং মার্কেটিং সেবা প্রদান করছি। ৯৯.৯৯% ক্লায়েন্ট সন্তুষ্টি এবং আরওআই নিশ্চিত করাই আমাদের মূল লক্ষ্য।" 
                  : "ROI-focused performance engineering, organic SEO footprint, and high-ranking custom web portals specialized for digital growth."}
              </p>
            </div>

            {/* Col 2: Services */}
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-zinc-500 mb-4">
                {languageMode === "bn" ? "সার্ভিসসমূহ" : "Core Services"}
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li><a href="#services" onClick={() => setActiveServiceTab("performance")} className="hover:text-brand-400 transition-colors">Performance Marketing</a></li>
                <li><a href="#services" onClick={() => setActiveServiceTab("social")} className="hover:text-brand-400 transition-colors">Social Ads Manager</a></li>
                <li><a href="#services" onClick={() => setActiveServiceTab("seo")} className="hover:text-brand-400 transition-colors">Technical SEO Audit</a></li>
                <li><a href="#services" onClick={() => setActiveServiceTab("performance")} className="hover:text-brand-400 transition-colors">Conversion Tracking API</a></li>
              </ul>
            </div>

            {/* Col 3: Solutions */}
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-zinc-500 mb-4">
                {languageMode === "bn" ? "পোর্টাল সলিউশন" : "Software Products"}
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li><a href="#solutions" onClick={() => setActiveSolutionTab("school")} className="hover:text-brand-400 transition-colors">School Management</a></li>
                <li><a href="#solutions" onClick={() => setActiveSolutionTab("university")} className="hover:text-brand-400 transition-colors">University ERP</a></li>
                <li><a href="#solutions" onClick={() => setActiveSolutionTab("hospital")} className="hover:text-brand-400 transition-colors">Hospital Portal System</a></li>
                <li><a href="#solutions" className="hover:text-brand-400 transition-colors">Custom SaaS Portals</a></li>
              </ul>
            </div>

            {/* Col 4: Corporate & Knowledge Base */}
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-zinc-500 mb-4">
                {languageMode === "bn" ? "রিসোর্স ও ট্রাস্ট সেন্টার" : "Knowledge & Trust"}
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li><Link to="/blog" className="hover:text-brand-400 transition-colors">Knowledge Hub & Articles</Link></li>
                <li><Link to="/trust-center" className="hover:text-brand-400 transition-colors flex items-center gap-1"><Shield className="w-3 h-3 text-brand-400" /> E-E-A-T Trust Center</Link></li>
                <li><Link to="/locations/dhaka" className="hover:text-brand-400 transition-colors flex items-center gap-1"><MapPin className="w-3 h-3 text-brand-400" /> Divisional &amp; Global SEO Hubs</Link></li>
                <li><Link to="/our-experience" className="hover:text-brand-400 transition-colors font-bold text-brand-400">Our Experience &amp; Honorable Clients</Link></li>
                <li><Link to="/portfolio" className="hover:text-brand-400 transition-colors">Portfolio &amp; Solutions</Link></li>
                <li><a href="https://wa.me/8801989373683" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">WhatsApp Support</a></li>
              </ul>
            </div>
          </div>

          {/* Sub footer */}
          <div className="pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-light">
            <p>
              &copy; {new Date().getFullYear()} DGL IT. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1.5 font-semibold text-brand-400">
              <Award className="h-4 w-4 shrink-0" />
              <span>8+ Years of Scaled Growth Excellence</span>
            </p>
          </div>
        </div>
      </footer>

      {/* --- Floating WhatsApp Icon (Bottom Right) --- */}
      <a 
        href="https://wa.me/8801989373683" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-green-500/20 hover:scale-110 transition-transform group cursor-pointer"
        title="Chat on WhatsApp"
      >
        <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        <span className="absolute right-16 bg-zinc-950 border border-zinc-800 text-white text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl shadow-black/60">
          {languageMode === "bn" ? "💬 সরাসরি হোয়াটসঅ্যাপ করুন" : "💬 Chat on WhatsApp"}
        </span>
      </a>

      {/* --- Floating AI Chatbot Icon & Panel (Bottom Left/Right dynamically toggleable!) --- */}
      <div className={`fixed z-50 transition-all duration-300 ${chatbotOpen ? "inset-0 bg-black/40 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none pointer-events-auto" : "pointer-events-none"}`}>
        
        {/* Toggle / Open Button (Always visible) */}
        {!chatbotOpen && (
          <button
            onClick={() => setChatbotOpen(true)}
            className={`fixed ${chatbotPosition === "bottom-right" ? "bottom-6 left-6" : "bottom-6 left-24"} z-50 h-14 w-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-500 text-black flex items-center justify-center shadow-2xl shadow-brand-500/20 hover:scale-110 transition-transform cursor-pointer pointer-events-auto group`}
          >
            <MessageSquare className="h-6 w-6 stroke-[2.5]" />
            <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-15" />
            {/* Notification pip */}
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-zinc-950 animate-pulse" />
            <span className={`absolute ${chatbotPosition === "bottom-right" ? "left-16" : "right-16"} bg-zinc-950 border border-zinc-800 text-white text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl`}>
              🤖 {languageMode === "bn" ? "এআই মার্কেটিং কনসালট্যান্ট" : "Talk to AI Specialist"}
            </span>
          </button>
        )}

        {/* Chatbot Window Panel */}
        {chatbotOpen && (
          <div className={`fixed bottom-0 sm:bottom-24 ${chatbotPosition === "bottom-right" ? "left-0 sm:left-6" : "right-0 sm:right-6"} w-full sm:w-[380px] z-50 bg-[#0e0e11] border-t sm:border border-zinc-800/80 rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-black/80 flex flex-col h-[520px] max-h-screen animate-slide-up pointer-events-auto`}>
            
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-brand-600 to-brand-600 rounded-t-3xl sm:rounded-t-2xl flex items-center justify-between text-black">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-lg shadow-inner">
                  🤖
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-black">
                    {languageMode === "bn" ? "মার্কেটিং এআই কন্সাল্টেন্ট" : "AI Growth Advisor"}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] text-zinc-900 font-semibold tracking-wider uppercase">Gemini 3.5 Active</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Reposition button */}
                <button 
                  onClick={() => setChatbotPosition(chatbotPosition === "bottom-right" ? "bottom-left" : "bottom-right")}
                  className="p-1.5 rounded-lg bg-black/5 hover:bg-black/15 text-black hover:text-zinc-900 transition-colors"
                  title="Toggle Position Side"
                >
                  <MapPin className="h-4 w-4" />
                </button>
                {/* Close Button */}
                <button 
                  onClick={() => setChatbotOpen(false)}
                  className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-black font-extrabold transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#070709]">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  <div 
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-inner ${
                      msg.role === "user" 
                        ? "bg-brand-500 text-black font-semibold rounded-br-none" 
                        : "bg-zinc-900 text-zinc-100 border border-zinc-800/80 rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isBotLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900 text-zinc-400 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5 border border-zinc-800">
                    <span className="h-1.5 w-1.5 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Predefined Quick Suggestion Chips */}
            {chatMessages.length <= 1 && (
              <div className="px-4 py-2 bg-[#070709] overflow-x-auto whitespace-nowrap flex gap-1.5 border-t border-zinc-900/60 no-scrollbar">
                {PREDEFINED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendChatMessage(q)}
                    className="inline-block text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-brand-500/50 hover:text-brand-400 transition-all cursor-pointer whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div className="p-3.5 bg-zinc-950 border-t border-zinc-900 flex gap-2 items-center">
              <input 
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendChatMessage();
                  }
                }}
                placeholder={languageMode === "bn" ? "মার্কেটিং নিয়ে যেকোনো প্রশ্ন লিখুন..." : "Ask me anything about SEO/marketing..."}
                className="flex-1 bg-[#060608] border border-zinc-900 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-500/50 transition-colors"
              />
              <button
                onClick={() => sendChatMessage()}
                disabled={isBotLoading || !chatInput.trim()}
                className="h-10 w-10 rounded-xl bg-brand-500 hover:bg-brand-400 disabled:opacity-40 text-black flex items-center justify-center shrink-0 cursor-pointer transition-all"
              >
                <Send className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* --- Book a Free Consultation Multi-step Modal --- */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#0c0c0e] border border-zinc-800/80 rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto scrollbar-thin">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-zinc-500 hover:text-white transition-colors cursor-pointer p-1"
              title="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {consultationSuccess ? (
              <div className="text-center py-8 space-y-5 animate-fadeIn">
                <div className="h-16 w-16 bg-emerald-950/40 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-3xl">
                  ✅
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {languageMode === "bn" ? "বুকিং আবেদন সফল হয়েছে!" : "Consultation Booked Successfully!"}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto">
                  {languageMode === "bn" 
                    ? "আমাদের টিম আপনার আবেদনটি পেয়েছে এবং খুব শীঘ্রই সরাসরি আপনার ইমেইল অথবা ফোনে যোগাযোগ করবে।" 
                    : "Our expert team has received your request and will contact you via email or phone shortly."}
                </p>
                <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl max-w-md mx-auto text-xs text-zinc-400 text-left space-y-3">
                  <span className="font-bold text-zinc-300 block mb-1">
                    {languageMode === "bn" ? "📩 সরাসরি কপি ইমেইল করুন:" : "📩 Quick copy to email directly:"}
                  </span>
                  <p className="leading-relaxed">
                    {languageMode === "bn" 
                      ? "কোনো কারণে ইমেইল সার্ভার ডাউন থাকলে সরাসরি নিচের বাটনে ক্লিক করে ইমেইল খসড়া করতে পারেন।" 
                      : "In case of any network delays, you can also draft an email manually to digitalgrowerltd@gmail.com."}
                  </p>
                  
                  <a 
                    href={`mailto:digitalgrowerltd@gmail.com?subject=Consultation Booking - ${encodeURIComponent(consultationForm.name)}&body=${encodeURIComponent(
                      `Hello,\n\nI would like to book a free consultation.\n\nName: ${consultationForm.name}\nCompany: ${consultationForm.companyName || 'N/A'}\nDesignation: ${consultationForm.designation || 'N/A'}\nEmail: ${consultationForm.email}\nPhone: ${consultationForm.phone}\nWebsite: ${consultationForm.website || 'N/A'}\n\nMessage:\n${consultationForm.message}`
                    )}`}
                    className="w-full inline-flex items-center justify-center gap-2 font-black text-black text-sm sm:text-base bg-brand-500 hover:bg-brand-400 transition-all py-3 px-4 rounded-xl shadow-lg shadow-brand-500/20"
                  >
                    📩 {languageMode === "bn" ? "সরাসরি digitalgrowerltd@gmail.com এ ইমেইল পাঠান" : "Send Directly to digitalgrowerltd@gmail.com"} &rarr;
                  </a>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsConsultationModalOpen(false);
                      setConsultationSuccess(false);
                      setConsultationStep(1);
                      setConsultationForm({
                        name: "",
                        companyName: "",
                        designation: "",
                        email: "",
                        phone: "",
                        website: "",
                        message: ""
                      });
                    }}
                    className="px-8 py-3.5 font-bold text-black bg-brand-500 hover:bg-brand-400 rounded-xl transition-all cursor-pointer text-sm sm:text-base shadow-lg shadow-brand-500/10"
                  >
                    {languageMode === "bn" ? "বন্ধ করুন" : "Close"}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="text-center">
                  {languageMode === "bn" ? (
                    <h2 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
                      ফ্রি <span className="relative inline-block border-b-4 border-brand-500 pb-1">কন্সাল্টেশন</span> বুক করুন
                    </h2>
                  ) : (
                    <h2 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
                      Book a Free <span className="relative inline-block border-b-4 border-brand-500 pb-1">Consultation</span>
                    </h2>
                  )}
                </div>

                {/* Step Indicators */}
                <div className="flex items-center justify-between max-w-lg mx-auto my-8 relative">
                  {/* Progress lines */}
                  <div className="absolute top-5 left-10 right-10 h-[2px] bg-zinc-800 -z-10">
                    <div 
                      className="h-full bg-brand-500 transition-all duration-300"
                      style={{ width: `${((consultationStep - 1) / 2) * 100}%` }}
                    />
                  </div>

                  {/* Step 1 */}
                  <div className="flex flex-col items-center flex-1">
                    <button 
                      type="button"
                      onClick={() => {
                        if (consultationStep > 1) setConsultationStep(1);
                      }}
                      disabled={consultationStep === 1}
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                        consultationStep >= 1 
                          ? "bg-brand-500 border-brand-500 text-black shadow-lg shadow-brand-500/30" 
                          : "bg-zinc-950 border-zinc-800 text-zinc-500"
                      } ${consultationStep > 1 ? "cursor-pointer" : "cursor-default"}`}
                    >
                      1
                    </button>
                    <span className={`text-[10px] sm:text-xs mt-2 font-semibold text-center leading-tight transition-colors ${
                      consultationStep >= 1 ? "text-white font-bold" : "text-zinc-500"
                    }`}>
                      {languageMode === "bn" ? "Personal Info" : "Personal Info"}
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center flex-1">
                    <button 
                      type="button"
                      onClick={() => {
                        if (consultationStep > 2) setConsultationStep(2);
                      }}
                      disabled={consultationStep <= 2}
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                        consultationStep >= 2 
                          ? "bg-brand-500 border-brand-500 text-black shadow-lg shadow-brand-500/30" 
                          : "bg-zinc-950 border-zinc-800 text-zinc-500"
                      } ${consultationStep > 2 ? "cursor-pointer" : "cursor-default"}`}
                    >
                      2
                    </button>
                    <span className={`text-[10px] sm:text-xs mt-2 font-semibold text-center leading-tight transition-colors ${
                      consultationStep >= 2 ? "text-white font-bold" : "text-zinc-500"
                    }`}>
                      {languageMode === "bn" ? "Contact Info" : "Contact Info"}
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center flex-1">
                    <button 
                      type="button"
                      disabled
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all cursor-default ${
                        consultationStep >= 3 
                          ? "bg-brand-500 border-brand-500 text-black shadow-lg shadow-brand-500/30" 
                          : "bg-zinc-950 border-zinc-800 text-zinc-500"
                      }`}
                    >
                      3
                    </button>
                    <span className={`text-[10px] sm:text-xs mt-2 font-semibold text-center leading-tight transition-colors ${
                      consultationStep >= 3 ? "text-white font-bold" : "text-zinc-500"
                    }`}>
                      {languageMode === "bn" ? "Message" : "Message"}
                    </span>
                  </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleConsultationSubmit} className="space-y-6">
                  {/* Honeypot spam protection */}
                  <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                  {consultationError && (
                    <div className="p-3.5 bg-brand-950/40 border border-brand-900/60 text-brand-400 rounded-xl text-xs sm:text-sm animate-fade-in">
                      {consultationError}
                    </div>
                  )}

                  {consultationStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={consultationForm.name}
                          onChange={handleConsultationInputChange}
                          placeholder="Name"
                          className="w-full bg-[#050507] border border-zinc-800 rounded-lg px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="companyName"
                          value={consultationForm.companyName}
                          onChange={handleConsultationInputChange}
                          placeholder="Company Name"
                          className="w-full bg-[#050507] border border-zinc-800 rounded-lg px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="designation"
                          value={consultationForm.designation}
                          onChange={handleConsultationInputChange}
                          placeholder="Designation"
                          className="w-full bg-[#050507] border border-zinc-800 rounded-lg px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {consultationStep === 2 && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={consultationForm.email}
                          onChange={handleConsultationInputChange}
                          placeholder="Email"
                          className="w-full bg-[#050507] border border-zinc-800 rounded-lg px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={consultationForm.phone}
                          onChange={handleConsultationInputChange}
                          placeholder="Phone Number"
                          className="w-full bg-[#050507] border border-zinc-800 rounded-lg px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="url"
                          name="website"
                          value={consultationForm.website}
                          onChange={handleConsultationInputChange}
                          placeholder={languageMode === "bn" ? "ওয়েবসাইট লিঙ্ক (ঐচ্ছিক)" : "Website Link (Optional)"}
                          className="w-full bg-[#050507] border border-zinc-800 rounded-lg px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {consultationStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={consultationForm.message}
                          onChange={handleConsultationInputChange}
                          placeholder="Message"
                          className="w-full bg-[#050507] border border-zinc-800 rounded-lg px-4 py-3.5 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {consultationStep > 1 && (
                      <button
                        type="button"
                        onClick={() => setConsultationStep((prev) => (prev - 1) as 1 | 2 | 3)}
                        className="flex-1 px-5 py-3.5 font-bold text-white bg-zinc-950 border border-zinc-800 hover:bg-zinc-900 rounded-xl transition-colors cursor-pointer text-center text-sm sm:text-base"
                      >
                        {languageMode === "bn" ? "পূর্ববর্তী" : "Back"}
                      </button>
                    )}

                    {consultationStep < 3 ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (consultationStep === 1 && !consultationForm.name) {
                            setConsultationError(languageMode === "bn" ? "দয়া করে আপনার নাম প্রদান করুন।" : "Please enter your name.");
                            return;
                          }
                          if (consultationStep === 2) {
                            if (!consultationForm.email) {
                              setConsultationError(languageMode === "bn" ? "দয়া করে ইমেইল প্রদান করুন।" : "Please enter your email.");
                              return;
                            }
                            if (!consultationForm.phone) {
                              setConsultationError(languageMode === "bn" ? "দয়া করে ফোন নাম্বার প্রদান করুন।" : "Please enter your phone number.");
                              return;
                            }
                          }
                          setConsultationError("");
                          setConsultationStep((prev) => (prev + 1) as 1 | 2 | 3);
                        }}
                        className="flex-1 px-5 py-3.5 font-bold text-black bg-brand-500 hover:bg-brand-400 rounded-xl transition-colors cursor-pointer text-center text-sm sm:text-base"
                      >
                        {languageMode === "bn" ? "পরবর্তী" : "Next"}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isConsultationSubmitting || !consultationForm.message}
                        className="flex-1 px-5 py-3.5 font-bold text-black bg-brand-500 hover:bg-brand-400 disabled:opacity-50 rounded-xl transition-colors cursor-pointer text-center text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-brand-500/10"
                      >
                        {isConsultationSubmitting ? (
                          <>
                            <span className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            {languageMode === "bn" ? "প্রক্রিয়াকরণ হচ্ছে..." : "Booking..."}
                          </>
                        ) : (
                          languageMode === "bn" ? "বুকিং নিশ্চিত করুন" : "Book Now"
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
