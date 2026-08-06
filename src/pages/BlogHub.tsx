import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Shield,
  UserCheck,
  Search,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { BLOG_ARTICLES_DATABASE } from "../data/enterpriseContentEcosystem";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import ContentGovernanceBanner from "../components/ContentGovernanceBanner";
import StickyMobileCTA from "../components/StickyMobileCTA";
import EnterpriseSchemaInjector from "../components/EnterpriseSchemaInjector";
import GEOKnowledgeGraphSection from "../components/GEOKnowledgeGraphSection";
import QuestionFirstAnswerHubSection from "../components/QuestionFirstAnswerHubSection";
import AIContentStructureSection from "../components/AIContentStructureSection";

export default function BlogHub() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Enterprise Knowledge Hub", href: "/blog", isCurrent: true }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-brand-500 selection:text-black">
      <EnterpriseSchemaInjector
        pageType="blog"
        pageTitle="Enterprise Knowledge Hub & AI Search GEO Articles — Digital Grower Ltd."
        pageDescription="In-depth technical SEO, Generative Engine Optimization (GEO), custom software engineering, and core web vitals guides by Digital Grower Ltd."
        pageUrl="/blog"
        serviceSlug="blog"
        serviceTitle="Enterprise Knowledge Hub"
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
              to="/trust-center"
              className="px-3 py-1.5 rounded-lg bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 border border-brand-500/20 text-xs font-bold transition-all"
            >
              E-E-A-T Trust Center
            </Link>
          </div>
        </div>
      </div>

      <BreadcrumbNavigation items={breadcrumbs} />

      {/* Hero Header */}
      <section className="py-16 sm:py-20 border-b border-zinc-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Topical Authority • E-E-A-T Knowledge Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Enterprise Technical Content &amp; GEO Strategy
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed">
            We educate before we sell. Read empirical, developer-reviewed guides on Google AI Overview optimization, custom software Total Cost of Ownership, and Core Web Vitals engineering.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_ARTICLES_DATABASE.map((article) => (
            <div
              key={article.slug}
              className="p-8 rounded-3xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800 hover:border-brand-500/40 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 font-bold border border-brand-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-4 text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.publishedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-brand-400 transition-colors leading-snug">
                  <Link to={`/blog/${article.slug}`}>{article.seoTitle}</Link>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {article.metaDescription}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-2 pt-2 text-xs text-zinc-400">
                  <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>By <strong>{article.author.name}</strong> • {article.author.role}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>E-E-A-T Verified &amp; Peer Reviewed</span>
                </div>
                <Link
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Generative Engine Optimization (GEO), 24-Point Knowledge Graph & 20 Pillar Hubs --- */}
      <GEOKnowledgeGraphSection />

      {/* --- Question-First 11-Point Answer Hub & Featured Snippets Engine --- */}
      <QuestionFirstAnswerHubSection />

      {/* --- 9-Part Enterprise AI Topic Architecture & Conversion Engine --- */}
      <AIContentStructureSection
        serviceSlug="blog"
        customHeading="Enterprise AI Search & 9-Part Knowledge Architecture"
        customSubheading="Engineered for Generative Engine Optimization (GEO), Google AI Overviews, ChatGPT Search, Gemini, Perplexity AI, and Voice Search."
      />

      {/* Content Governance Banner */}
      <ContentGovernanceBanner />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA serviceTitle="Enterprise Knowledge Hub" />
    </div>
  );
}
