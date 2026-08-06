import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  TrendingUp,
  Quote,
  Shield,
  Layers
} from "lucide-react";
import { CASE_STUDIES_DATABASE, CaseStudyData } from "../data/enterpriseContentEcosystem";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import ContentGovernanceBanner from "../components/ContentGovernanceBanner";
import StickyMobileCTA from "../components/StickyMobileCTA";
import EnterpriseSchemaInjector from "../components/EnterpriseSchemaInjector";

export default function CaseStudyDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      const found = CASE_STUDIES_DATABASE.find((c) => c.slug === slug);
      setCaseStudy(found || CASE_STUDIES_DATABASE[0]);
    } else {
      setCaseStudy(CASE_STUDIES_DATABASE[0]);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Case Study Loading...</h1>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: caseStudy.clientIndustry, href: "/case-studies" },
    { label: caseStudy.title, href: `/case-study/${caseStudy.slug}`, isCurrent: true }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-brand-500 selection:text-black">
      <EnterpriseSchemaInjector
        pageType="service"
        pageTitle={`${caseStudy.title} — Digital Grower Ltd. Case Study`}
        pageDescription={caseStudy.businessChallenge}
        pageUrl={`/case-study/${caseStudy.slug}`}
        serviceSlug={caseStudy.slug}
        serviceTitle={caseStudy.title}
      />

      {/* Header */}
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
              to="/trust-center"
              className="px-3 py-1.5 rounded-lg bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 border border-brand-500/20 text-xs font-bold transition-all"
            >
              E-E-A-T Trust Center
            </Link>
          </div>
        </div>
      </div>

      <BreadcrumbNavigation items={breadcrumbs} />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 border-b border-zinc-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 font-bold border border-brand-500/20">
              {caseStudy.clientIndustry}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              {caseStudy.clientLocation}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              Timeline: <strong>{caseStudy.timeline}</strong>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {caseStudy.title}
          </h1>

          {/* Key Measurable Results Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {caseStudy.measurableResults.map((res, i) => (
              <div key={i} className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-xl sm:text-2xl font-extrabold text-brand-400">{res.value}</div>
                <div className="text-xs font-bold text-white mt-1">{res.kpiLabel}</div>
                <div className="text-xs text-zinc-400 mt-0.5">{res.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-14">
          {/* Business Challenge & Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                1. The Business Challenge
              </span>
              <h2 className="text-xl font-bold text-white">Legacy Systems &amp; Bottlenecks</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {caseStudy.businessChallenge}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block">
                2. Project Objectives &amp; SLAs
              </span>
              <h2 className="text-xl font-bold text-white">Target Measurable Benchmarks</h2>
              <ul className="space-y-2.5">
                {caseStudy.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Engineered */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-brand-500/10 border border-zinc-800 space-y-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              3. Custom Engineering Solution
            </span>
            <h2 className="text-2xl font-bold text-white">Architecture &amp; Technical Delivery</h2>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              {caseStudy.solutionEngineered}
            </p>
          </div>

          {/* Implementation Timeline Steps */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">4. Agile Implementation Timeline</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.implementationSteps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-brand-500/20 text-brand-400 font-bold text-xs flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">
              5. Empirical Lessons Learned
            </span>
            <h2 className="text-lg font-bold text-white">Technical &amp; Operational Takeaways</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {caseStudy.lessonsLearned}
            </p>
          </div>

          {/* Client Feedback Quote Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
            <Quote className="w-12 h-12 text-brand-500/20 absolute top-6 right-6 pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <p className="text-base sm:text-lg italic text-zinc-200 leading-relaxed">
                &ldquo;{caseStudy.clientFeedback.quote}&rdquo;
              </p>
              <div>
                <div className="text-sm font-bold text-white">{caseStudy.clientFeedback.authorName}</div>
                <div className="text-xs text-zinc-400">{caseStudy.clientFeedback.authorTitle}</div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="space-y-4 pt-6 border-t border-zinc-800">
            <h3 className="text-lg font-bold text-white">Related Services &amp; Capabilities</h3>
            <div className="flex flex-wrap items-center gap-3">
              {caseStudy.relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  to={rel.href}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-brand-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>{rel.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Governance Banner */}
      <ContentGovernanceBanner />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA serviceTitle={caseStudy.title} />
    </div>
  );
}
