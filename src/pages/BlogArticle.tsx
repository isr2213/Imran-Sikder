import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  ListOrdered,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { BLOG_ARTICLES_DATABASE, BlogArticleData } from "../data/enterpriseContentEcosystem";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import ContentGovernanceBanner from "../components/ContentGovernanceBanner";
import StickyMobileCTA from "../components/StickyMobileCTA";
import EnterpriseSchemaInjector from "../components/EnterpriseSchemaInjector";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<BlogArticleData | undefined>(undefined);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  useEffect(() => {
    if (slug) {
      const found = BLOG_ARTICLES_DATABASE.find((a) => a.slug === slug);
      setArticle(found || BLOG_ARTICLES_DATABASE[0]);
    } else {
      setArticle(BLOG_ARTICLES_DATABASE[0]);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Article Loading...</h1>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Knowledge Hub", href: "/blog" },
    { label: article.category, href: "/blog" },
    { label: article.seoTitle, href: `/blog/${article.slug}`, isCurrent: true }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-brand-500 selection:text-black">
      <EnterpriseSchemaInjector
        pageType="blog"
        pageTitle={`${article.seoTitle} — Digital Grower Ltd.`}
        pageDescription={article.metaDescription}
        pageUrl={`/blog/${article.slug}`}
        serviceSlug={article.slug}
        serviceTitle={article.seoTitle}
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
              to="/blog"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            >
              Back to Blog Hub
            </Link>
          </div>
        </div>
      </div>

      <BreadcrumbNavigation items={breadcrumbs} />

      {/* Article Header & Author Bio */}
      <section className="py-12 sm:py-16 border-b border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 font-bold border border-brand-500/20">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Calendar className="w-3.5 h-3.5 text-brand-400" />
              Published: {article.publishedDate}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {article.seoTitle}
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {article.metaDescription}
          </p>

          {/* E-E-A-T Author Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{article.author.name}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xs text-zinc-400">{article.author.role}</div>
              </div>
            </div>
            <div className="text-xs text-zinc-400 max-w-sm sm:text-right">
              {article.author.bio}
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Table of Contents */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs font-bold text-brand-400 uppercase tracking-wider mb-4">
              <ListOrdered className="w-4 h-4" />
              <span>Table of Contents</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {article.tableOfContents.map((toc) => (
                <a
                  key={toc.id}
                  href={`#${toc.id}`}
                  className="text-xs sm:text-sm text-zinc-300 hover:text-brand-400 transition-colors py-1"
                >
                  {toc.label}
                </a>
              ))}
            </div>
          </div>

          {/* Executive Summary Box (Question-First Definition block) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-500/10 border border-brand-500/20 space-y-3" id={article.tableOfContents[0]?.id}>
            <div className="text-xs font-bold text-brand-400 uppercase tracking-wider">
              Executive Summary &amp; Definition Box (AI Overview Citation Block)
            </div>
            <div className="space-y-2 text-sm text-zinc-200 leading-relaxed">
              {article.summary.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Detailed Explanations */}
          <div className="space-y-10">
            {article.detailedExplanation.map((section, idx) => (
              <div key={idx} className="space-y-4" id={article.tableOfContents[idx + 1]?.id}>
                <h2 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-brand-500 pl-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Real-World Case Studies / Examples */}
          <div className="space-y-6 pt-6 border-t border-zinc-800">
            <h3 className="text-xl font-bold text-white">Empirical Enterprise Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.realWorldExamples.map((ex, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2 text-brand-400 text-xs font-bold uppercase">
                    <TrendingUp className="w-4 h-4" />
                    <span>Real Project Outcome</span>
                  </div>
                  <h4 className="text-base font-bold text-white">{ex.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{ex.outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Enterprise Checklist */}
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4" id="action-checklist">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Enterprise Technical Implementation Checklist</span>
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {article.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article FAQs */}
          <div className="space-y-4 pt-6 border-t border-zinc-800" id="blog-faqs">
            <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            {article.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors cursor-pointer"
                  >
                    <span className="text-base font-bold text-white">{faq.question}</span>
                    <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-zinc-800/60 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Conclusion & Related Services */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-brand-500/10 border border-zinc-800 space-y-6">
            <h3 className="text-xl font-bold text-white">Ready to Upgrade Your Enterprise Architecture?</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Digital Grower Ltd. engineers custom, high-speed web and software solutions that comply with modern E-E-A-T and Generative Engine Optimization standards.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {article.relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  to={rel.href}
                  className="px-4 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-xs font-bold text-brand-400 flex items-center gap-1.5 transition-colors"
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
      <StickyMobileCTA serviceTitle={article.seoTitle} />
    </div>
  );
}
