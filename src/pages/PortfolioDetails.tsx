import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Briefcase,
  Layers,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Layout,
  Code2,
  Target,
  Sparkles
} from "lucide-react";
import { PORTFOLIO_PROJECTS_DATABASE, PortfolioProjectData } from "../data/enterpriseContentEcosystem";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import ContentGovernanceBanner from "../components/ContentGovernanceBanner";
import StickyMobileCTA from "../components/StickyMobileCTA";
import EnterpriseSchemaInjector from "../components/EnterpriseSchemaInjector";

export default function PortfolioDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<PortfolioProjectData | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      const found = PORTFOLIO_PROJECTS_DATABASE.find((p) => p.slug === slug);
      setProject(found || PORTFOLIO_PROJECTS_DATABASE[0]);
    } else {
      setProject(PORTFOLIO_PROJECTS_DATABASE[0]);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Portfolio Project Loading...</h1>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: project.category, href: "/portfolio" },
    { label: project.title, href: `/portfolio/${project.slug}`, isCurrent: true }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-brand-500 selection:text-black">
      <EnterpriseSchemaInjector
        pageType="service"
        pageTitle={`${project.title} — Digital Grower Ltd. Portfolio`}
        pageDescription={project.businessGoal}
        pageUrl={`/portfolio/${project.slug}`}
        serviceSlug={project.slug}
        serviceTitle={project.title}
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

      {/* Hero Header */}
      <section className="py-16 sm:py-20 border-b border-zinc-800/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 font-bold border border-brand-500/20">
              {project.category}
            </span>
            <span className="text-zinc-400">
              Client: <strong className="text-zinc-200">{project.clientName}</strong>
            </span>
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
              {project.keyMetricBadge}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
            {project.businessGoal}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.technologiesUsed.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-brand-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Structure Sections */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Design Process & Development Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-brand-400 text-xs font-bold uppercase tracking-wider">
                <Layout className="w-4 h-4" />
                <span>1. Design &amp; UI/UX Process</span>
              </div>
              <h2 className="text-xl font-bold text-white">Accessibility &amp; Wireframing</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.designProcess}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>2. Development &amp; Architecture</span>
              </div>
              <h2 className="text-xl font-bold text-white">Full-Stack Implementation</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.developmentProcess}
              </p>
            </div>
          </div>

          {/* Marketing & SEO Strategy (if applicable) */}
          {project.marketingStrategy && (
            <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>3. Marketing &amp; Schema.org GEO Strategy</span>
              </div>
              <h2 className="text-xl font-bold text-white">Search Authority &amp; AI Citations</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.marketingStrategy}
              </p>
            </div>
          )}

          {/* Screenshots / Visual Architectural Blueprint Preview */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                4. System Screenshots &amp; Telemetry
              </span>
              <span className="text-xs text-zinc-500">100% WCAG 2.1 AA Compliant UI</span>
            </div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-brand-500/10 border border-zinc-800/80 flex flex-col items-center justify-center p-8 text-center space-y-3">
              <Layout className="w-10 h-10 text-brand-400/60" />
              <h3 className="text-base font-bold text-white">
                Bespoke Dashboard &amp; User Interface Rendering: {project.title}
              </h3>
              <p className="text-xs text-zinc-400 max-w-lg">
                High-contrast typography, mobile-first responsive breakpoints, and instant SSR data hydration.
              </p>
            </div>
          </div>

          {/* Business Outcome & ROI */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-brand-500/10 border border-zinc-800 space-y-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              5. Empirical Business Outcome
            </span>
            <h2 className="text-2xl font-bold text-white">Measurable Commercial Growth</h2>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              {project.businessOutcome}
            </p>
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-4">
              <Link
                to="/#contact"
                className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-bold text-xs transition-all shadow-md"
              >
                Request Similar System Blueprint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Governance Banner */}
      <ContentGovernanceBanner />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA serviceTitle={project.title} />
    </div>
  );
}
