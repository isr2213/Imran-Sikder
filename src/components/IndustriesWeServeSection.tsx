import React, { useState } from "react";
import {
  Building2,
  Briefcase,
  Globe,
  HeartPulse,
  Activity,
  Microscope,
  GraduationCap,
  BookOpen,
  Home,
  Utensils,
  Plane,
  FileCheck,
  HardHat,
  Factory,
  HeartHandshake,
  Scale,
  Calculator,
  UserCheck,
  Camera,
  Rocket,
  Laptop,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Building,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";


interface IndustriesWeServeProps {
  onOpenConsultation?: () => void;
}

export interface TargetIndustry {
  slug: string;
  name: string;
  nameBn: string;
  category: "corporate" | "healthcare" | "education" | "professional" | "hospitality" | "growth";
  tagline: string;
  taglineBn: string;
  solutions: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export const INDUSTRIES_LIST: TargetIndustry[] = [
  {
    slug: "small-businesses",
    name: "Small Businesses",
    nameBn: "ক্ষুদ্র ও মাঝারি ব্যবসা",
    category: "corporate",
    tagline: "Turn local searchers into daily customers with affordable high-speed websites & Local SEO.",
    taglineBn: "লোকাল এসইও এবং হাই-স্পিড ওয়েবসাইটের মাধ্যমে প্রতিদিন নতুন কাস্টমার পান।",
    solutions: ["Google Business Profile Top-3 Ranking", "High-Converting Lead Website", "WhatsApp Auto-Chat Lead Capture"],
    icon: Building
  },
  {
    slug: "medium-businesses",
    name: "Medium Businesses",
    nameBn: "মাঝারি প্রতিষ্ঠান",
    category: "corporate",
    tagline: "Scale operations with custom CRM workflows, multi-channel performance marketing & automation.",
    taglineBn: "কাস্টম সিআরএম, অটোমেশন এবং পারফরম্যান্স মার্কেটিংয়ের মাধ্যমে ব্যবসাকে দ্রুত বড় করুন।",
    solutions: ["Custom CRM & Inventory Integration", "Multi-Channel Ad Scaling (Google & Meta)", "Automated Email & SMS Nurturing"],
    icon: Building2
  },
  {
    slug: "enterprise-companies",
    name: "Enterprise Companies",
    nameBn: "এন্টারপ্রাইজ কর্পোরেট",
    category: "corporate",
    tagline: "Secure, highly scalable multi-lingual web portals, custom ERP systems & institutional brand SEO.",
    taglineBn: "সিকিউর, হাইলি স্কেলেবল কর্পোরেট পোর্টাল, ইআরপি সিস্টেম এবং ব্র্যান্ড অথরিটি এসইও।",
    solutions: ["Zero-Trust Security & Cloud WAF", "Custom ERP & Executive BI Dashboards", "International Entity SEO & PR"],
    icon: Briefcase
  },
  {
    slug: "doctors",
    name: "Doctors & Specialists",
    nameBn: "ডাক্তার ও বিশেষজ্ঞ চিকিৎসক",
    category: "healthcare",
    tagline: "Personal medical authority websites with automated patient appointment booking & telemedicine.",
    taglineBn: "অনলাইন অ্যাপয়েন্টমেন্ট বুকিং, রোগী ব্যবস্থাপনা ও চেম্বার এসইও ওয়েবসাইট।",
    solutions: ["Real-Time Serial Appointment Scheduler", "Google Maps Doctor Profile Dominance", "Patient Review & Reputation Booster"],
    icon: HeartPulse
  },
  {
    slug: "hospitals",
    name: "Hospitals",
    nameBn: "হাসপাতাল ও ক্লিনিক",
    category: "healthcare",
    tagline: "Integrated hospital management portals, doctor serial booking & diagnostic test delivery systems.",
    taglineBn: "হাসপাতাল ম্যানেজমেন্ট পোর্টাল, ডাক্তার সিরিয়াল বুকিং ও ডিজিটাল রিপোর্ট সিস্টেম।",
    solutions: ["HL7/EMR Ready Medical Portal", "Online Test Report Download Portal", "24/7 Patient Emergency Hotline Chatbot"],
    icon: Activity
  },
  {
    slug: "diagnostic-centers",
    name: "Diagnostic Centers",
    nameBn: "ডায়াগনস্টিক সেন্টার",
    category: "healthcare",
    tagline: "Digital report download portals, WhatsApp automated report delivery & home blood collection apps.",
    taglineBn: "অনলাইন রিপোর্ট ডাউনলোড, হোয়াটসঅ্যাপ অটোমেশন এবং হোম স্যাম্পল কালেকশন অ্যাপ।",
    solutions: ["Automated WhatsApp Report Delivery", "Home Collection GPS Dispatch App", "Pathology Lab Billing & LIMS Integration"],
    icon: Microscope
  },
  {
    slug: "schools",
    name: "Schools",
    nameBn: "স্কুল ও কলেজ",
    category: "education",
    tagline: "Smart campus management ERP, online admission forms & parent SMS notification apps.",
    taglineBn: "স্মার্ট ক্যাম্পাস ম্যানেজমেন্ট, অনলাইন ভর্তি ও অভিভাবক এসএমএস নোটিফিকেশন সিস্টেম।",
    solutions: ["Online Admission & Fee Gateway", "Student Biometric Attendance SMS Sync", "Teacher & Parent Communication App"],
    icon: BookOpen
  },
  {
    slug: "universities",
    name: "Universities",
    nameBn: "বিশ্ববিদ্যালয় ও ইন্সটিটিউট",
    category: "education",
    tagline: "Institutional accreditation portals, international student recruitment SEO & academic ERPs.",
    taglineBn: "ইন্টারন্যাশনাল স্টুডেন্ট ভর্তি এসইও, রিসার্চ পোর্টাল ও ইউনিভার্সিটি ইআরপি।",
    solutions: ["International Student SEO Funnel", "Alumni Networking & Donation Portal", "Research & Publication Repository"],
    icon: GraduationCap
  },
  {
    slug: "real-estate-companies",
    name: "Real Estate Companies",
    nameBn: "রিয়েল এস্টেট ও হাউজিং",
    category: "corporate",
    tagline: "3D virtual tour property showcases, investor CRM & high-ticket lead generation funnels.",
    taglineBn: "থ্রিডি ভার্চুয়াল ট্যুর প্রপার্টি ওয়েবসাইট এবং হাই-ভ্যালু বায়ার লিড জেনারেশন ফানেল।",
    solutions: ["Interactive Floor Plans & 3D Tours", "Real Estate Buyer CRM & WhatsApp Alert", "High-Net-Worth Investor Ad Campaigns"],
    icon: Home
  },
  {
    slug: "restaurants",
    name: "Restaurants & Cafes",
    nameBn: "রেস্তোরাঁ ও ক্যাফে",
    category: "hospitality",
    tagline: "QR code digital menus, table reservation apps, commission-free ordering & food photography ads.",
    taglineBn: "কিউআর কোড মেনু, টেবিল রিজার্ভেশন ও কমিশন-ফ্রি নিজস্ব ফুড অর্ডারিং ওয়েবসাইট।",
    solutions: ["Commission-Free Online Ordering Website", "Dynamic QR Table Menu & KDS POS", "Foodie Instagram & TikTok Viral Reels Ads"],
    icon: Utensils
  },
  {
    slug: "travel-agencies",
    name: "Travel Agencies",
    nameBn: "ট্রাভেল ও ট্যুরিজম এজেন্সি",
    category: "hospitality",
    tagline: "Holiday package booking engines, visa inquiry funnels & flight/hotel API integrations.",
    taglineBn: "হলিডে প্যাকেজ বুকিং ইঞ্জিন, ভিসা প্রসেসিং ফানেল এবং ফ্লাইট-হোটেল এপিআই সিস্টেম।",
    solutions: ["Tour Package Online Payment Booking", "WhatsApp Visa Consultation Assistant", "Dynamic Tour Package Ads on Google & FB"],
    icon: Plane
  },
  {
    slug: "visa-consultants",
    name: "Visa Consultants",
    nameBn: "ভিসা ও ইমিগ্রেশন কনসালটেন্ট",
    category: "hospitality",
    tagline: "Student visa assessment calculators, immigration document upload portals & trust-building SEO.",
    taglineBn: "ভিসা প্রসেসিং ও অ্যাসেসমেন্ট ক্যালকুলেটর, ডকুমেন্ট আপলোড পোর্টাল ও লিড জেনারেশন।",
    solutions: ["Free Online Visa Eligibility Quiz Funnel", "Secure Candidate Document Vault", "Immigration Success Story Video Reviews"],
    icon: FileCheck
  },
  {
    slug: "construction-companies",
    name: "Construction Companies",
    nameBn: "কন্সট্রাকশন ও ইঞ্জিনিয়ারিং",
    category: "corporate",
    tagline: "B2B engineering project showcases, government tender portals & structural steel lead funnels.",
    taglineBn: "বিটুবি ইঞ্জিনিয়ারিং প্রজেক্ট শোকেস এবং কর্পোরেট টেন্ডার ও সাপ্লায়ার লিড পোর্টাল।",
    solutions: ["High-Resolution Project Portfolio Gallery", "B2B Contractor & Architect Funnel", "ISO & LEED Safety Certification Hub"],
    icon: HardHat
  },
  {
    slug: "manufacturing-companies",
    name: "Manufacturing Companies",
    nameBn: "ম্যানুফ্যাকচারিং ও গার্মেন্টস",
    category: "corporate",
    tagline: "Global B2B export catalogs, buyer inquiry portals & international trade SEO.",
    taglineBn: "আন্তর্জাতিক বায়ারদের জন্য এক্সপোর্ট ক্যাটালগ ওয়েবসাইট এবং বিটুবি বায়ার এসইও।",
    solutions: ["Digital Export Product Catalog", "International B2B Buyer SEO & LinkedIn Ads", "Factory Compliance & Audit Showcase"],
    icon: Factory
  },
  {
    slug: "ngos",
    name: "NGOs & Non-Profits",
    nameBn: "এনজি ও এবং স্বেচ্ছাসেবী সংস্থা",
    category: "professional",
    tagline: "Transparent donor crowdfunding portals, grant compliance websites & impact report visualizers.",
    taglineBn: "ডোনেশন কালেকশন পোর্টাল, গ্রান্ট কমপ্লায়েন্স ওয়েবসাইট এবং ইমপ্যাক্ট রিপোর্ট।",
    solutions: ["Online Recurring Donation Gateway", "Transparent Project Expense Reports", "International Grant SEO & Storytelling"],
    icon: HeartHandshake
  },
  {
    slug: "law-firms",
    name: "Law Firms & Attorneys",
    nameBn: "আইনজীবী ও ল ফার্ম",
    category: "professional",
    tagline: "Confidential client booking portals, authoritative legal blog SEO & corporate retainer funnels.",
    taglineBn: "বিশ্বস্ত লিগ্যাল পোর্টাল, কেস স্টাডি শোকেস এবং কর্পোরেট লিগ্যাল ক্লায়েন্ট বুকিং।",
    solutions: ["Authoritative Legal Entity SEO", "Confidential Case Inquiry Portal", "Corporate Retainer Lead Funnel"],
    icon: Scale
  },
  {
    slug: "accounting-firms",
    name: "Accounting & Tax Firms",
    nameBn: "ট্যাক্স ও একাউন্টিং ফার্ম",
    category: "professional",
    tagline: "VAT & corporate tax calculator widgets, document vaults & B2B accounting lead funnels.",
    taglineBn: "ট্যাক্স ও ভ্যাট ক্যালকুলেটর উইজেট, সিকিউর ফাইল ভল্ট এবং কর্পোরেট ট্যাক্স লিড ফানেল।",
    solutions: ["Online Income Tax Calculator Tool", "Client Document Upload Portal", "B2B Corporate Tax Return Lead Funnel"],
    icon: Calculator
  },
  {
    slug: "personal-brands",
    name: "Personal Brands",
    nameBn: "পার্সোনাল ব্র্যান্ড ও স্পিকার",
    category: "growth",
    tagline: "Elevate your authority with stunning personal websites, press kits & booking calendars.",
    taglineBn: "পার্সোনাল ব্র্যান্ড অথরিটি ওয়েবসাইট, স্পিকার বুকিং এবং প্রিমিয়াম পোর্টফোলিও।",
    solutions: ["Executive Media Kit & PR Showcase", "Keynote Speaker Appointment Scheduler", "High-Converting Newsletter Funnel"],
    icon: UserCheck
  },
  {
    slug: "influencers",
    name: "Influencers & Creators",
    nameBn: "ইনফ্লুয়েন্সার ও কন্টেন্ট ক্রিয়েটর",
    category: "growth",
    tagline: "Media sponsor decks, custom merch e-commerce stores & audience email capture funnels.",
    taglineBn: "স্পন্সর মিডিয়া কিট, মার্চেন্ডাইজ ই-কমার্স শপ এবং অডিয়েন্স লিড ক্যাপচার ওয়েবসাইট।",
    solutions: ["Live Brand Sponsorship Media Kit", "Custom Merch & Digital Download Shop", "Audience Community Membership Hub"],
    icon: Camera
  },
  {
    slug: "startups",
    name: "Startups & Tech Founders",
    nameBn: "স্টার্টআপ ও টেক ফাউন্ডার",
    category: "growth",
    tagline: "Investor pitch-ready MVPs, growth-hacking landing pages & high-velocity user onboarding.",
    taglineBn: "ইনভেস্টর পিচ-রেডি এমভিপি, গ্রোথ ল্যান্ডিং পেজ এবং ফাস্ট ইউজার অনবোর্ডিং।",
    solutions: ["Investor Pitch & Metrics Dashboard", "Rapid MVP Web Application Build", "Growth-Hacking Viral Referral Funnel"],
    icon: Rocket
  },
  {
    slug: "freelancers",
    name: "Freelancers & Consultants",
    nameBn: "ফ্রিল্যান্সার ও কনসালটেন্ট",
    category: "growth",
    tagline: "Client-winning portfolio websites, automated invoices & direct proposal builders.",
    taglineBn: "হাই-টিকিট ক্লায়েন্ট পাওয়ার পোর্টফোলিও ওয়েবসাইট এবং অটোমেটেড বুকিং ক্যালেন্ডার।",
    solutions: ["High-Ticket Client Portfolio Website", "Automated Client Consultation Booking", "Review & Testimonial Case Study Hub"],
    icon: Laptop
  },
  {
    slug: "international-companies",
    name: "International Companies",
    nameBn: "আন্তর্জাতিক ও বহুজাতিক কোম্পানি",
    category: "corporate",
    tagline: "Cross-border multi-lingual websites, GDPR-compliant architectures & global SEO expansion.",
    taglineBn: "মাল্টি-ল্যাঙ্গুয়েজ ওয়েবসাইট, জিডিপিআর সিকিউরিটি এবং গ্লোবাল এসইও এক্সপ্যানশন।",
    solutions: ["Multi-Region Hreflang SEO Setup", "GDPR & International Privacy Compliance", "Global Multi-Currency Cloud Infrastructure"],
    icon: Globe
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medical Groups",
    nameBn: "হেলথকেয়ার ও হাসপাতাল গ্রুপ",
    category: "healthcare",
    tagline: "EMR-ready patient portals, telemedicine video consultation apps & medical trust SEO.",
    taglineBn: "ইএমআর ইন্টিগ্রেটেড হাসপাতাল পোর্টাল, টেলিমেডিসিন এবং রোগীর অ্যাপয়েন্টমেন্ট সিস্টেম।",
    solutions: ["EMR & Diagnostic Lab Integration", "Doctor Serial Appointment Booking", "HIPAA/GDPR Data Privacy SLA"],
    icon: HeartPulse
  },
  {
    slug: "education",
    name: "Education & EdTech Platforms",
    nameBn: "এডুকেশন ও এডটেক প্ল্যাটফর্ম",
    category: "education",
    tagline: "Interactive LMS web apps, automated admission engines & high-concurrency exam portals.",
    taglineBn: "এডটেক লার্নিং ম্যানেজমেন্ট সিস্টেম, অনলাইন ভর্তি এবং লাইভ ক্লাস পোর্টাল।",
    solutions: ["Interactive Course LMS & Video Streaming", "Automated Student Admission Funnel", "Parent & Teacher Communication SMS App"],
    icon: GraduationCap
  },
  {
    slug: "hotels",
    name: "Hotels & Hospitality Groups",
    nameBn: "হোটেল ও হসপিটালিটি গ্রুপ",
    category: "hospitality",
    tagline: "Commission-free direct booking engines, resort 3D virtual showcases & guest loyalty CRM.",
    taglineBn: "কমিশন-ফ্রি রুম বুকিং ইঞ্জিন, রিসোর্ট ভার্চুয়াল ট্যুর এবং গেস্ট লয়্যালটি সিস্টেম।",
    solutions: ["Commission-Free Direct Booking Engine", "Interactive 3D Resort Tour Showcase", "Automated WhatsApp Guest Check-In Assistant"],
    icon: Home
  },
  {
    slug: "software-companies",
    name: "Software Companies & SaaS",
    nameBn: "সফটওয়্যার কোম্পানি ও স্যাস",
    category: "growth",
    tagline: "Developer-first documentation hubs, product-led growth funnels & SOC2-ready landing pages.",
    taglineBn: "স্যাস প্রোডাক্ট ল্যান্ডিং পেজ, ডেভেলপার ডকুমেন্টেশন এবং এন্টারপ্রাইজ লিড ফানেল।",
    solutions: ["Interactive Product Demo Sandbox", "SOC2 Compliance Trust Showcase", "Self-Serve Free Trial Onboarding Funnel"],
    icon: Laptop
  },
  {
    slug: "corporate-businesses",
    name: "Corporate Businesses",
    nameBn: "কর্পোরেট বিজনেস ও কনগ্লোমারেট",
    category: "corporate",
    tagline: "Multi-brand executive portals, investor governance hubs & secure internal intranets.",
    taglineBn: "মাল্টি-ব্র্যান্ড কর্পোরেট পোর্টাল, ইনভেস্টর রিলেশন এবং সিকিউর ইআরপি ইন্টিগ্রেশন।",
    solutions: ["Multi-Subsidiary Brand Portal Hub", "Executive Board & Investor Relations Vault", "Zero-Trust Employee Intranet"],
    icon: Building2
  }
];

export default function IndustriesWeServeSection({ onOpenConsultation }: IndustriesWeServeProps) {
  const [activeCategory, setActiveCategory] = useState<TargetIndustry["category"] | "all">("all");

  const categories: { id: TargetIndustry["category"] | "all"; label: string; count: number }[] = [
    { id: "all", label: "All 27 Target Industries", count: 27 },
    { id: "corporate", label: "Corporate & SME", count: 8 },
    { id: "healthcare", label: "Healthcare & MedTech", count: 4 },
    { id: "education", label: "Schools & Universities", count: 3 },
    { id: "hospitality", label: "Hospitality & Travel", count: 4 },
    { id: "professional", label: "Law, NGO & Finance", count: 3 },
    { id: "growth", label: "Startups & Creators", count: 5 }
  ];

  const filteredIndustries = activeCategory === "all"
    ? INDUSTRIES_LIST
    : INDUSTRIES_LIST.filter((item) => item.category === activeCategory);

  return (
    <section id="industries-we-serve" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#060608] border-y border-zinc-900/60 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Audience & Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Tailored Enterprise Solutions For{" "}
            <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base font-light">
            We do not use generic cookie-cutter templates. Whether you operate a multi-branch diagnostic hospital, an educational university, or a fast-scaling startup, we engineer domain-specific digital ecosystems that drive trust and organic growth.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-brand-500 text-black shadow-lg shadow-brand-500/20 scale-105"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  activeCategory === cat.id ? "bg-black/20 text-black" : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#0e0e12]/80 backdrop-blur-xl border border-zinc-800/80 hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 shadow-xl hover:shadow-brand-500/10"
              >
                <div>
                  {/* Top bar with Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-mono font-bold px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {ind.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-400 mb-3 font-display">
                    {ind.nameBn}
                  </p>

                  {/* Tagline */}
                  <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                    {ind.tagline}
                  </p>

                  {/* Included Solutions */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-zinc-900/80">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold block mb-2">
                      Engineered Capabilities:
                    </span>
                    {ind.solutions.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-zinc-900/60 flex flex-wrap items-center justify-between gap-2 mt-auto">
                  <Link
                    to={`/industry/${ind.slug}`}
                    className="flex-1 px-3 py-2 text-xs font-bold text-black bg-brand-500 hover:bg-brand-400 rounded-xl transition-all cursor-pointer text-center shadow-md hover:shadow-brand-500/20"
                  >
                    Explore {ind.name.split(" ")[0]}
                  </Link>
                  <button
                    onClick={onOpenConsultation}
                    className="px-3 py-2 text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-all cursor-pointer text-center"
                  >
                    Demo
                  </button>
                  <a
                    href={`https://wa.me/8801989373683?text=${encodeURIComponent(
                      `Hello Digital Grower Ltd., I need a digital platform solution for: ${ind.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp Specialist"
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-emerald-600 hover:text-white text-emerald-400 border border-zinc-800 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-900/80 via-zinc-900/40 to-brand-500/10 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Don&apos;t See Your Exact Industry Listed?
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              We engineer custom digital platforms and APIs for over 45+ specialized business sectors worldwide.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 text-sm font-bold text-black bg-brand-500 hover:bg-brand-400 rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-500/20"
            >
              Request Proposal
            </button>
            <a
              href="tel:+8801989373683"
              className="px-6 py-3 text-sm font-bold text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all border border-zinc-700 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-brand-400" />
              <span>+880 1989-373683</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
