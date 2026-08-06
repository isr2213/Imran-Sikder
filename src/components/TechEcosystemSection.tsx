import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Smartphone,
  Cpu,
  Layers,
  Database,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  HelpCircle,
  Mic,
  BookOpen,
  ArrowRight,
  Sparkles,
  Terminal,
  Globe,
  Briefcase,
  Server,
  Zap
} from 'lucide-react';
import {
  ALL_TECH_CLUSTERS,
  TECH_ENTITY_GRAPH,
  TECH_SUPPORTING_CONTENT_GUIDES,
  TECH_INTERNAL_LINKS,
  PRIMARY_WEBSITE_KEYWORDS,
  LONG_TAIL_WEBSITE_KEYWORDS,
  PRIMARY_SOFTWARE_KEYWORDS,
  PRIMARY_APP_KEYWORDS,
  BUSINESS_GROWTH_KEYWORDS,
  COMMERCIAL_TECH_KEYWORDS,
  TRANSACTIONAL_TECH_KEYWORDS,
  QUESTION_TECH_KEYWORDS,
  VOICE_SEARCH_TECH_KEYWORDS
} from '../data/techKeywords';

export default function TechEcosystemSection() {
  const [activeClusterIndex, setActiveClusterIndex] = useState(0);
  const [activeKeywordCategory, setActiveKeywordCategory] = useState<'website' | 'software' | 'app' | 'growth' | 'commercial' | 'transactional' | 'voice'>('website');

  const activeCluster = ALL_TECH_CLUSTERS[activeClusterIndex];

  const keywordCategoryData = {
    website: {
      title: 'Website Design & Development Keywords',
      icon: Globe,
      description: 'Custom corporate websites, responsive UI/UX, e-commerce stores, and high-speed web portals engineered for SEO and Core Web Vitals.',
      keywords: [
        ...PRIMARY_WEBSITE_KEYWORDS.slice(0, 10),
        ...LONG_TAIL_WEBSITE_KEYWORDS.slice(0, 8)
      ]
    },
    software: {
      title: 'Custom Software & ERP/CRM Keywords',
      icon: Terminal,
      description: 'Enterprise business software, custom ERP, CRM, POS, HRM, accounting, and hospital/school management systems.',
      keywords: [
        ...PRIMARY_SOFTWARE_KEYWORDS,
        "Hospital Management System",
        "School Management System",
        "University ERP",
        "Diagnostic Management System",
        "Clinic Management Software",
        "Manufacturing ERP"
      ]
    },
    app: {
      title: 'Android & Mobile App Development Keywords',
      icon: Smartphone,
      description: 'Native Android (Kotlin/Java) and cross-platform (Flutter, React Native) mobile apps for healthcare, delivery, and enterprise.',
      keywords: [
        ...PRIMARY_APP_KEYWORDS,
        "Flutter App Development",
        "React Native App Development",
        "Healthcare Mobile App",
        "Delivery App Development",
        "Booking App Development"
      ]
    },
    growth: {
      title: 'Business Growth Challenge & Strategy Keywords',
      icon: Rocket,
      description: 'Holistic business consultancy, digital transformation, AI process automation, and scalable revenue optimization.',
      keywords: BUSINESS_GROWTH_KEYWORDS
    },
    commercial: {
      title: 'Commercial Investigation Keywords',
      icon: DollarSign,
      description: 'Decision-makers evaluating top website developers, custom software companies, app developers, and pricing models.',
      keywords: COMMERCIAL_TECH_KEYWORDS
    },
    transactional: {
      title: 'Transactional & Action Keywords',
      icon: CheckCircle2,
      description: 'Ready-to-act searches designed to drive immediate website proposals, software quotes, and technology consultations.',
      keywords: TRANSACTIONAL_TECH_KEYWORDS
    },
    voice: {
      title: 'Voice Search & Informational (PAA)',
      icon: Mic,
      description: 'Spoken queries, AI Overviews, and "People Also Ask" questions establishing Digital Grower Ltd. as the #1 technology authority.',
      keywords: [
        ...VOICE_SEARCH_TECH_KEYWORDS,
        ...QUESTION_TECH_KEYWORDS
      ]
    }
  };

  return (
    <section 
      aria-labelledby="tech-ecosystem-heading"
      className="py-20 bg-[#06060a] border-t border-zinc-900/80 text-zinc-100 relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Code className="w-4 h-4" /> Enterprise Technology & Growth Ecosystem
          </div>
          <h2 id="tech-ecosystem-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Full-Stack <span className="text-brand-400">Web, Software, Mobile & Growth Architecture</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Engineered by Senior Full Stack Developers, Enterprise Software Architects, and AI Search Optimization Consultants. We combine 4 core technology silos, 32 entity knowledge nodes, and 14 content architecture guides to power scalable business transformation.
          </p>
        </div>

        {/* 1. THE 4-PILLAR TECHNOLOGY & GROWTH CLUSTERS */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Topical Authority Silos
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                The 4 Core Technology & Business Growth Pillars
              </h3>
            </div>
            <span className="text-xs text-zinc-400 font-medium">
              Enterprise ISO & E-E-A-T Architecture Standard
            </span>
          </div>

          {/* Cluster Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6" role="tablist">
            {ALL_TECH_CLUSTERS.map((cluster, idx) => {
              const isSelected = activeClusterIndex === idx;
              return (
                <button
                  key={cluster.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveClusterIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 ${
                    isSelected
                      ? 'bg-brand-500/20 border-brand-500 text-white shadow-lg shadow-brand-500/10'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  <Layers className={`w-4 h-4 ${isSelected ? 'text-brand-400' : 'text-zinc-500'}`} />
                  {cluster.name.replace(' Cluster', '')}
                </button>
              );
            })}
          </div>

          {/* Active Cluster Details Panel */}
          {activeCluster && (
            <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between mb-8">
                <div className="max-w-3xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400 block mb-2">
                    Active Technology Pillar
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    {activeCluster.name}
                  </h4>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {activeCluster.description}
                  </p>
                </div>

                <div className="w-full lg:w-80 bg-black/60 border border-zinc-800 rounded-2xl p-5 shrink-0">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-400" /> SLA & Engineering Standards
                  </h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {activeCluster.metricsFocus.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Keyword Cloud for Active Cluster */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Semantic Keywords & NLP Entities in this Pillar:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeCluster.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg bg-black/60 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium hover:border-brand-500/40 hover:text-white transition-colors"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2. ENTITY TECHNOLOGY & AI SEARCH KNOWLEDGE GRAPH (32 ENTITIES) */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Cpu className="w-3.5 h-3.5" /> Entity Graph Mapping
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                32-Point Technology & Cloud Knowledge Graph
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-3xl">
                We build strong semantic relationships across frontend frameworks, backend runtimes, mobile SDKs, cloud databases, and AI LLM engines to ensure brand trust and AI Search visibility.
              </p>
            </div>
            <div className="text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-2 rounded-xl shrink-0">
              <span className="text-brand-400 font-bold">32/32</span> Entities Connected
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {TECH_ENTITY_GRAPH.map((entity, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-black/50 border border-zinc-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between"
              >
                <span className="text-sm font-bold text-white block truncate">{entity.name}</span>
                <span className="text-[11px] text-zinc-500 mt-1 block truncate">{entity.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. MULTI-INTENT KEYWORD ECOSYSTEM EXPLORER */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Search Intent & Buyer Journey
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Technology Keyword & Query Explorer
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                Explore our semantic keyword clusters across Website Development, Software Engineering, Mobile Apps, Growth Strategy, and Buyer Intent.
              </p>
            </div>
          </div>

          {/* Keyword Category Selector Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(Object.keys(keywordCategoryData) as Array<keyof typeof keywordCategoryData>).map((key) => {
              const data = keywordCategoryData[key];
              const isSelected = activeKeywordCategory === key;
              const Icon = data.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveKeywordCategory(key)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-brand-500/20 border-brand-500 text-white shadow-lg shadow-brand-500/10'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-400' : 'text-zinc-500'}`} />
                  {data.title}
                </button>
              );
            })}
          </div>

          {/* Selected Category Display */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800">
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-black text-white mb-1">
                {keywordCategoryData[activeKeywordCategory].title}
              </h4>
              <p className="text-sm text-zinc-400">
                {keywordCategoryData[activeKeywordCategory].description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {keywordCategoryData[activeKeywordCategory].keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-black/50 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium hover:border-brand-500/40 transition-colors"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. CONTENT STRATEGY ROADMAP (14 CONTENT GUIDES) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Content Strategy & Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                14-Point Technical Content & Implementation Silos
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                Enterprise technical playbooks, optimization checklists, and migration guides establishing Digital Grower Ltd. as the industry leader.
              </p>
            </div>
            <Link
              to="/#blog"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-brand-500/40 text-xs sm:text-sm font-bold text-brand-400 hover:text-brand-300 transition-colors"
            >
              Explore Technology Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_SUPPORTING_CONTENT_GUIDES.map((guide, idx) => (
              <article
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-brand-950/60 border border-brand-900 text-brand-300">
                      {guide.category}
                    </span>
                    <BookOpen className="w-4 h-4 text-zinc-500 group-hover:text-brand-400 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {guide.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed line-clamp-3">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                  {guide.targetKeywords.slice(0, 3).map((kw, kwIdx) => (
                    <span
                      key={kwIdx}
                      className="text-[11px] text-zinc-400 bg-black/50 px-2 py-0.5 rounded border border-zinc-800/60"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 5. OMNICHANNEL INTERNAL LINKING ECOSYSTEM */}
        <div className="p-6 sm:p-10 rounded-3xl bg-black border border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Internal PageRank & Funnel Distribution
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Technology Omnichannel Connectivity
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-3xl">
                Every Website, Software, and Android App project connects seamlessly with our SEO, Digital Marketing 360, Paid Ads, Content Marketing, and Growth Consulting.
              </p>
            </div>
            <div className="text-xs text-brand-400 font-bold bg-brand-950/40 border border-brand-500/20 px-3.5 py-2 rounded-xl shrink-0 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 12 Core Page Destinations
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {TECH_INTERNAL_LINKS.map((linkItem, idx) => (
              <Link
                key={idx}
                to={linkItem.path}
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-brand-500/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                      {linkItem.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-brand-400 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {linkItem.relationshipNote}
                  </p>
                </div>
                <span className="mt-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300">
                  {linkItem.category}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
