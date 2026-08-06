import React, { useState } from "react";
import {
  Shield,
  Award,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Users,
  Layers,
  FileText,
  Briefcase,
  ArrowRight,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Zap,
  Lock,
  Globe
} from "lucide-react";
import {
  EEAT_TRUST_DATA,
  COPYWRITING_FRAMEWORKS,
  PERSONALIZATION_PROFILES,
  MASTER_FAQ_STRATEGY,
  MasterFAQItem
} from "../data/enterpriseContentEcosystem";

interface ContentEcosystemHubProps {
  onOpenConsultation?: () => void;
  context?: "home" | "service" | "industry" | "trust";
}

export default function ContentEcosystemHubSection({
  onOpenConsultation,
  context = "service"
}: ContentEcosystemHubProps) {
  const [activeTab, setActiveTab] = useState<"eeat" | "copywriting" | "personalization" | "faqs">("eeat");
  const [selectedFramework, setSelectedFramework] = useState("aida");
  const [selectedProfile, setSelectedProfile] = useState<string>("enterprise-companies");
  const [activeFaqCategory, setActiveFaqCategory] = useState<MasterFAQItem["category"]>("technical");
  const [openFaqId, setOpenFaqId] = useState<string | null>("tech-1");

  const currentFramework = COPYWRITING_FRAMEWORKS.find((f) => f.id === selectedFramework) || COPYWRITING_FRAMEWORKS[0];
  const currentProfile = PERSONALIZATION_PROFILES.find((p) => p.segment === selectedProfile) || PERSONALIZATION_PROFILES[3];
  const filteredFaqs = MASTER_FAQ_STRATEGY.filter((f) => f.category === activeFaqCategory);

  return (
    <section className="py-20 bg-zinc-950 text-white border-t border-zinc-800/80 relative overflow-hidden" id="enterprise-content-ecosystem">
      {/* Subtle background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-brand-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>EEAT & Conversion Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Enterprise Content, Trust &amp; Copywriting Hub
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            We educate before we sell. Explore our verified E-E-A-T credentials, AI search methodologies, industry conversion frameworks, and enterprise transparency SLAs.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("eeat")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "eeat"
                  ? "bg-brand-500 text-black shadow-lg shadow-brand-500/20"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>E-E-A-T Trust Center</span>
            </button>
            <button
              onClick={() => setActiveTab("copywriting")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "copywriting"
                  ? "bg-brand-500 text-black shadow-lg shadow-brand-500/20"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Conversion Copywriting</span>
            </button>
            <button
              onClick={() => setActiveTab("personalization")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "personalization"
                  ? "bg-brand-500 text-black shadow-lg shadow-brand-500/20"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Content Personalization</span>
            </button>
            <button
              onClick={() => setActiveTab("faqs")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "faqs"
                  ? "bg-brand-500 text-black shadow-lg shadow-brand-500/20"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Enterprise FAQ Strategy</span>
            </button>
          </div>
        </div>

        {/* --- TAB 1: E-E-A-T TRUST CENTER --- */}
        {activeTab === "eeat" && (
          <div className="space-y-12 animate-fadeIn">
            {/* Top Stats Banner */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {EEAT_TRUST_DATA.companyOverview.clientStatistics.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-center">
                  <div className="text-3xl font-extrabold text-brand-400">{stat.value}</div>
                  <div className="text-xs font-medium text-zinc-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Company Authority Overview & Certifications */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex items-center gap-2 text-brand-400 text-xs font-bold uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>Verified Corporate Credentials</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Why Leading Enterprises &amp; Institutions Trust Digital Grower Ltd.
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Founded in <strong>{EEAT_TRUST_DATA.companyOverview.founded}</strong>, Digital Grower Ltd. operates from Banani Commercial Area, Dhaka, with international client desks in London, Dubai, and Delaware. We are a registered joint-stock corporate engineering firm ({EEAT_TRUST_DATA.companyOverview.registration}) dedicated to zero-bloat, high-speed software and AI-optimized SEO architectures.
                </p>

                {/* Certifications Grid */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EEAT_TRUST_DATA.companyOverview.securityCertifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs font-semibold text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SLA & Governance Policies */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-brand-500/10 border border-zinc-800 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Corporate SLAs &amp; Governance</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Every project is backed by strict legal, privacy, and engineering Service Level Agreements.
                  </p>
                  <div className="space-y-4 mt-6">
                    {EEAT_TRUST_DATA.policies.map((policy, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-xs font-bold text-brand-400">{policy.title}</div>
                        <p className="text-xs text-zinc-400">{policy.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-bold text-xs transition-all shadow-md cursor-pointer"
                >
                  Request Legal &amp; SLA Overview
                </button>
              </div>
            </div>

            {/* 4-Step E-E-A-T Service Methodology */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Our Empirical 4-Step Engineering Methodology
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {EEAT_TRUST_DATA.serviceMethodology.map((step, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 relative hover:border-brand-500/40 transition-colors">
                    <div className="text-2xl font-extrabold text-brand-500/40 mb-3">{step.step}</div>
                    <h4 className="text-sm font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: CONVERSION COPYWRITING FRAMEWORKS --- */}
        {activeTab === "copywriting" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Framework Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {COPYWRITING_FRAMEWORKS.map((fw) => (
                <button
                  key={fw.id}
                  onClick={() => setSelectedFramework(fw.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFramework === fw.id
                      ? "bg-brand-500 text-black"
                      : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
                >
                  {fw.name.split(" ")[0]} Framework
                </button>
              ))}
            </div>

            {/* Selected Framework Display */}
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800">
              <div className="border-b border-zinc-800 pb-6 mb-8">
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                  Conversion Framework in Action
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{currentFramework.name}</h3>
                <p className="text-sm text-zinc-400 mt-1">{currentFramework.tagline}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentFramework.sections.map((sec, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
                    <div className="inline-block px-2.5 py-1 rounded bg-brand-500/10 text-brand-400 text-xs font-bold">
                      {sec.label}
                    </div>
                    <h4 className="text-base font-bold text-white">{sec.title}</h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{sec.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 3: CONTENT PERSONALIZATION ENGINE --- */}
        {activeTab === "personalization" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Persona Switcher Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {PERSONALIZATION_PROFILES.map((profile) => (
                <button
                  key={profile.segment}
                  onClick={() => setSelectedProfile(profile.segment)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedProfile === profile.segment
                      ? "bg-brand-500 text-black shadow-md shadow-brand-500/20"
                      : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
                >
                  {profile.label}
                </button>
              ))}
            </div>

            {/* Personalized Profile Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-brand-500/10 border border-zinc-800 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold uppercase tracking-wider border border-brand-500/20">
                    {currentProfile.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                    {currentProfile.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 mt-2 max-w-3xl">
                    {currentProfile.subheadline}
                  </p>
                </div>
              </div>

              {/* Key Value Prop & Recommended Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-800">
                <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-brand-400 uppercase">Primary Business ROI</div>
                    <p className="text-sm text-zinc-200 font-semibold mt-2">
                      {currentProfile.primaryValueProp}
                    </p>
                  </div>
                  <div className="mt-4 text-xs text-zinc-500">
                    100% Fixed Milestone Delivery &amp; SLA
                  </div>
                </div>

                <div className="md:col-span-2 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-4">
                  <div className="text-xs font-bold text-zinc-400 uppercase">
                    Recommended Technical Architecture &amp; Solutions
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentProfile.recommendedSolutions.map((sol, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-semibold text-zinc-200 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-bold text-xs transition-all shadow-md cursor-pointer"
                    >
                      <span>{currentProfile.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 4: ENTERPRISE FAQ STRATEGY --- */}
        {activeTab === "faqs" && (
          <div className="space-y-8 animate-fadeIn">
            {/* FAQ Category Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "homepage", label: "General Brand" },
                { id: "technical", label: "Technical & Security" },
                { id: "pricing", label: "Pricing & Billing" },
                { id: "business", label: "Process & Delivery" },
                { id: "support", label: "SLAs & Maintenance" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFaqCategory(cat.id as MasterFAQItem["category"])}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeFaqCategory === cat.id
                      ? "bg-brand-500 text-black"
                      : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors cursor-pointer"
                    >
                      <span className="text-base font-bold text-white">{faq.question}</span>
                      <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-zinc-800/60 space-y-4 text-sm">
                        {/* Voice Search / Zero-Click Answer Box */}
                        <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs">
                          <strong className="text-brand-400 block mb-1">AI Overview / Voice Search Summary:</strong>
                          {faq.conciseVoiceAnswer}
                        </div>
                        {/* Detailed EEAT Answer */}
                        <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                          {faq.detailedEEATAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
