import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  Users,
  Lock,
  FileText,
  MapPin,
  PhoneCall,
  Mail,
  ArrowRight,
  Globe,
  TrendingUp,
  Briefcase
} from "lucide-react";
import { EEAT_TRUST_DATA, GLOBAL_CONTENT_GOVERNANCE } from "../data/enterpriseContentEcosystem";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import ContentGovernanceBanner from "../components/ContentGovernanceBanner";
import StickyMobileCTA from "../components/StickyMobileCTA";
import EnterpriseSchemaInjector from "../components/EnterpriseSchemaInjector";

export default function TrustCenter() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "E-E-A-T Trust Center", href: "/trust-center", isCurrent: true }
  ];

  const professionalTeam = [
    {
      name: "Engr. Tanvir Rahman",
      role: "Chief Executive Officer & Principal Systems Architect",
      credentials: "B.Sc. in CSE (BUET), 14+ Years in Scalable Cloud Infrastructure & Agile CI/CD",
      bio: "Leads enterprise software engineering, ISO 27001 data governance, and high-performance React/Node.js architecture across Dhaka and Delaware."
    },
    {
      name: "Samiya Chowdhury",
      role: "Lead Generative Engine Optimization (GEO) & SEO Director",
      credentials: "M.Sc. in Data Science, 10+ Years in Semantic Knowledge Graphs & Schema.org",
      bio: "Specializes in Question-First AI search optimization, Google AI Overview citations, and multi-region hreflang architecture."
    },
    {
      name: "Engr. Kazi Arifin",
      role: "VP of Enterprise Backend & Database Engineering",
      credentials: "B.Sc. in CSE, Certified AWS Solutions Architect & PostgreSQL Specialist",
      bio: "Architects ACID-compliant PostgreSQL schemas, Docker microservices, and zero-trust cloud security for hospitals and financial groups."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-brand-500 selection:text-black">
      <EnterpriseSchemaInjector
        pageType="service"
        pageTitle="E-E-A-T Trust Center & Corporate Transparency — Digital Grower Ltd."
        pageDescription="Verify Digital Grower Ltd.'s ISO 27001 certifications, 4-step engineering methodology, corporate registration, SLAs, and data privacy policies."
        pageUrl="/trust-center"
        serviceSlug="trust-center"
        serviceTitle="E-E-A-T Trust Center"
      />

      {/* Top Bar */}
      <div className="border-b border-zinc-900 bg-zinc-950/80 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="text-sm font-extrabold tracking-tight text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span>Digital Grower Ltd.</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/blog"
              className="px-3 py-1.5 rounded-lg bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 border border-brand-500/20 text-xs font-bold transition-all"
            >
              Knowledge Hub
            </Link>
          </div>
        </div>
      </div>

      <BreadcrumbNavigation items={breadcrumbs} />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 border-b border-zinc-800/80 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Corporate Authority • E-E-A-T</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Corporate Trust, Security &amp; Factual Governance
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed">
            In enterprise digital engineering, trust is earned through empirical performance, transparent data privacy, and legal accountability. Explore our corporate credentials, SLAs, and leadership board.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-b border-zinc-800/80 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {EEAT_TRUST_DATA.companyOverview.clientStatistics.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-400">{stat.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview & Legal Registration */}
      <section className="py-16 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                Corporate Registration &amp; Certifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                About Digital Grower Ltd. (DGL IT)
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Founded in <strong>{EEAT_TRUST_DATA.companyOverview.founded}</strong>, Digital Grower Ltd. is an incorporated full-stack web engineering and AI search optimization firm ({EEAT_TRUST_DATA.companyOverview.registration}). We operate with zero-trust cloud architectures, 100% custom code ownership, and sub-2.5 second Core Web Vitals guarantees.
              </p>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {EEAT_TRUST_DATA.companyOverview.securityCertifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-semibold text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Headquarters & Global Offices Card */}
            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
              <div className="flex items-center gap-2 text-brand-400 text-xs font-bold uppercase">
                <Globe className="w-4 h-4" />
                <span>Global Operational Desks</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-white">Global Headquarters</div>
                  <p className="text-xs text-zinc-400 mt-1">
                    {EEAT_TRUST_DATA.companyOverview.headquarters}
                  </p>
                </div>
                <div className="pt-3 border-t border-zinc-800">
                  <div className="text-xs font-bold text-white mb-2">Regional Client Offices</div>
                  <div className="flex flex-wrap items-center gap-2">
                    {EEAT_TRUST_DATA.companyOverview.globalOffices.map((office, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                        {office}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Leadership Team */}
      <section className="py-16 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
              Expertise &amp; Authoritativeness
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Professional Engineering &amp; AI Search Board
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Our leadership board combines decades of academic research, cloud architecture, and empirical SEO experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalTeam.map((member, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold text-lg">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <div className="text-xs font-bold text-brand-400">{member.role}</div>
                  <div className="text-xs text-zinc-400 italic border-l-2 border-zinc-700 pl-2">
                    {member.credentials}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Corporate Executive</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies: Privacy Policy, Terms & Conditions, Refund Governance */}
      <section className="py-16 border-b border-zinc-800/80 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
              Transparency &amp; Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Privacy, SLAs &amp; Refund Governance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EEAT_TRUST_DATA.policies.map((policy, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
                  <Lock className="w-4 h-4" />
                  <span>Verified SLA Policy</span>
                </div>
                <h3 className="text-lg font-bold text-white">{policy.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {policy.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Governance Banner */}
      <ContentGovernanceBanner />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA serviceTitle="E-E-A-T Trust Center" />
    </div>
  );
}
