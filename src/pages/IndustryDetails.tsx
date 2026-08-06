import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  PhoneCall,
  Clock,
  Zap,
  TrendingUp,
  Globe
} from "lucide-react";
import { INDUSTRY_PAGES_DATABASE, getIndustryBySlug, IndustryPageData } from "../data/industryContentData";
import { GLOBAL_CONTENT_GOVERNANCE } from "../data/enterpriseContentEcosystem";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import ContentEcosystemHubSection from "../components/ContentEcosystemHubSection";
import ContentGovernanceBanner from "../components/ContentGovernanceBanner";
import StickyMobileCTA from "../components/StickyMobileCTA";
import EnterpriseSchemaInjector from "../components/EnterpriseSchemaInjector";

export default function IndustryDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [industry, setIndustry] = useState<IndustryPageData | undefined>(undefined);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeCopywriting, setActiveCopywriting] = useState<"aida" | "pas">("aida");

  useEffect(() => {
    if (slug) {
      const found = getIndustryBySlug(slug);
      setIndustry(found || INDUSTRY_PAGES_DATABASE[0]);
    } else {
      setIndustry(INDUSTRY_PAGES_DATABASE[0]);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Industry Profile Loading...</h1>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/#industries-we-serve" },
    { label: industry.name, href: `/industry/${industry.slug}`, isCurrent: true }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-brand-500 selection:text-black">
      {/* Enterprise Schema Injection */}
      <EnterpriseSchemaInjector
        pageType="service"
        pageTitle={`${industry.name} — Digital Grower Ltd.`}
        pageDescription={industry.heroSupportingHeadline}
        pageUrl={`/industry/${industry.slug}`}
        serviceSlug={industry.slug}
        serviceTitle={industry.name}
      />

      {/* Top Header & Breadcrumbs */}
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
            <a
              href={`https://wa.me/8801989373683?text=${encodeURIComponent(
                `Hello Digital Grower Ltd., I need an enterprise consultation regarding: ${industry.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Specialist</span>
            </a>
          </div>
        </div>
      </div>

      <BreadcrumbNavigation items={breadcrumbs} />

      {/* --- HERO SECTION --- */}
      <section className="py-16 sm:py-24 relative overflow-hidden border-b border-zinc-800/80">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Dedicated Industry Solution • {industry.nameBn}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {industry.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed">
              {industry.heroSupportingHeadline}
            </p>
            <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
              {industry.shortIntro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={`https://wa.me/8801989373683?text=${encodeURIComponent(
                  `Hello Digital Grower Ltd., I want to book a free discovery call for: ${industry.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Industry Scoping</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+8801989373683"
                className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-800 transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-brand-400" />
                <span>Call +8801989373683</span>
              </a>
            </div>
          </div>

          {/* Key Expected Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 pt-10 border-t border-zinc-900">
            {industry.expectedResults.map((res, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-400">{res.metric}</div>
                <div className="text-xs font-bold text-white mt-1 uppercase tracking-wide">{res.label}</div>
                <p className="text-xs text-zinc-400 mt-1">{res.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO WE ARE & WHY TRUST US IN THIS INDUSTRY --- */}
      <section className="py-16 bg-zinc-900/40 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                E-E-A-T &amp; Domain Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Who We Are &amp; Why We Are Different in the {industry.name} Sector
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {industry.whoWeAreInThisIndustry}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                <strong className="text-white">Why we stand out:</strong> {industry.whyWeAreDifferent}
              </p>

              {/* Trust Indicators Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {industry.whyTrustUs.map((trust, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-semibold text-zinc-200 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{trust}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Value Provided Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-brand-500/10 border border-zinc-800 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                  Measurable ROI
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  Direct Business Value Provided
                </h3>
                <div className="space-y-3 mt-6">
                  {industry.businessValueProvided.map((val, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <TrendingUp className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400">
                Guaranteed Sub-2.5s Core Web Vitals • 100% Custom Code
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BUSINESS PROBLEMS SOLVED --- */}
      <section className="py-16 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
              Problem → Solution → Result
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Industry Challenges We Eliminate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.whatProblemWeSolve.map((prob, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>The Operational Bottleneck</span>
                </div>
                <h3 className="text-lg font-bold text-white">{prob.problemTitle}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{prob.problemDescription}</p>

                <div className="pt-4 border-t border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Our Engineering Solution</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{prob.solutionTitle}</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{prob.solutionDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AIDA & PAS COPYWRITING CONVERSION ENGINE --- */}
      <section className="py-16 bg-zinc-900/30 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                Executive Conversion Strategy
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                How We Position {industry.name} Brands for Leadership
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveCopywriting("aida")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeCopywriting === "aida"
                    ? "bg-brand-500 text-black"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                AIDA Framework
              </button>
              <button
                onClick={() => setActiveCopywriting("pas")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeCopywriting === "pas"
                    ? "bg-brand-500 text-black"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                PAS Framework
              </button>
            </div>
          </div>

          {activeCopywriting === "aida" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="text-xs font-bold text-brand-400 uppercase">Attention</div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{industry.aidaCopywriting.attention}</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="text-xs font-bold text-brand-400 uppercase">Interest</div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{industry.aidaCopywriting.interest}</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="text-xs font-bold text-brand-400 uppercase">Desire</div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{industry.aidaCopywriting.desire}</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-500/10 border border-brand-500/30 space-y-2">
                <div className="text-xs font-bold text-brand-400 uppercase">Action</div>
                <p className="text-xs sm:text-sm text-white font-semibold leading-relaxed">{industry.aidaCopywriting.action}</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="text-xs font-bold text-rose-400 uppercase">Problem</div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{industry.pasCopywriting.problem}</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase">Agitation</div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{industry.pasCopywriting.agitation}</p>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase">Solution</div>
                <p className="text-xs sm:text-sm text-white font-semibold leading-relaxed">{industry.pasCopywriting.solution}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- METHODOLOGY & TECHNOLOGY STACK --- */}
      <section className="py-16 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
              Our Process &amp; Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              4-Step Technical Execution &amp; Timeline
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Estimated project delivery timeline: <strong className="text-white">{industry.timeline}</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industry.methodologySteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="text-2xl font-extrabold text-brand-500/40">{step.step}</div>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Core Enterprise Technologies Used:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {industry.technologiesUsed.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-semibold text-brand-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRY FAQ STRATEGY --- */}
      <section className="py-16 bg-zinc-900/30 border-b border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
              Question-First Answer Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Frequently Asked Questions: {industry.name}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Structured for direct citation in Google AI Overviews and ChatGPT Search.
            </p>
          </div>

          <div className="space-y-4">
            {industry.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors cursor-pointer"
                  >
                    <span className="text-base font-bold text-white">{faq.question}</span>
                    <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-zinc-800/60 space-y-3 text-sm">
                      <div className="p-3.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs">
                        <strong className="text-brand-400 block mb-1">Concise Voice &amp; AI Answer:</strong>
                        {faq.conciseAnswer}
                      </div>
                      <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                        {faq.detailedAnswer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- EMBED CONTENT ECOSYSTEM HUB --- */}
      <ContentEcosystemHubSection context="industry" />

      {/* --- RELATED SERVICES --- */}
      <section className="py-16 bg-zinc-950 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl font-bold text-white mb-6">
            Explore Related Services for {industry.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {industry.relatedServices.map((rel, idx) => (
              <Link
                key={idx}
                to={rel.href}
                className="p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-brand-500/40 transition-all flex items-center justify-between group"
              >
                <span className="text-sm font-bold text-white group-hover:text-brand-400 transition-colors">
                  {rel.title}
                </span>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-brand-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTENT GOVERNANCE BANNER --- */}
      <ContentGovernanceBanner />

      {/* --- STICKY MOBILE CTA --- */}
      <StickyMobileCTA serviceTitle={industry.name} />
    </div>
  );
}
