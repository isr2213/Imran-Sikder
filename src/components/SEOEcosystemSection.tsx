import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Network,
  Cpu,
  Layers,
  MapPin,
  ShoppingBag,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Mic,
  DollarSign,
  TrendingUp,
  Globe,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import {
  ALL_SEO_CLUSTERS,
  SEO_ENTITY_GRAPH,
  SEO_SUPPORTING_CONTENT_GUIDES,
  SEO_INTERNAL_LINKS,
  QUESTION_SEO_KEYWORDS,
  VOICE_SEARCH_SEO_KEYWORDS,
  COMMERCIAL_SEO_KEYWORDS,
  TRANSACTIONAL_SEO_KEYWORDS,
  LONG_TAIL_SEO_KEYWORDS,
  PRIMARY_SEO_KEYWORDS,
  SECONDARY_SEO_KEYWORDS
} from '../data/seoKeywords';

export default function SEOEcosystemSection() {
  const [activeClusterIndex, setActiveClusterIndex] = useState(0);
  const [activeKeywordCategory, setActiveKeywordCategory] = useState<'primary' | 'longtail' | 'questions' | 'voice' | 'commercial' | 'transactional'>('primary');

  const activeCluster = ALL_SEO_CLUSTERS[activeClusterIndex];

  const keywordCategoryData = {
    primary: {
      title: 'Primary & Secondary Keywords',
      icon: TrendingUp,
      description: 'Foundational search terms establishing topical authority across SEO services, consultancy, and technical optimization.',
      keywords: [...PRIMARY_SEO_KEYWORDS.slice(0, 12), ...SECONDARY_SEO_KEYWORDS.slice(0, 10)]
    },
    longtail: {
      title: 'Long-Tail & Industry Keywords',
      icon: Search,
      description: 'High-intent, low-competition queries tailored for hospitals, doctors, restaurants, software, ecommerce, and small businesses.',
      keywords: LONG_TAIL_SEO_KEYWORDS
    },
    questions: {
      title: 'Question & Informational Keywords (PAA)',
      icon: HelpCircle,
      description: 'Answering core "People Also Ask" questions to capture Google Featured Snippets and establish E-E-A-T trust.',
      keywords: QUESTION_SEO_KEYWORDS
    },
    voice: {
      title: 'Voice Search & Spoken Queries',
      icon: Mic,
      description: 'Natural language queries optimized for mobile voice assistants, Google Assistant, and smart devices.',
      keywords: VOICE_SEARCH_SEO_KEYWORDS
    },
    commercial: {
      title: 'Commercial Investigation Keywords',
      icon: DollarSign,
      description: 'Targeting decision-makers evaluating top SEO agencies, pricing retainers, packages, and custom proposals.',
      keywords: COMMERCIAL_SEO_KEYWORDS
    },
    transactional: {
      title: 'Transactional & Conversion Keywords',
      icon: CheckCircle2,
      description: 'Ready-to-act searches designed to drive immediate consultation bookings, free audit requests, and quote submissions.',
      keywords: TRANSACTIONAL_SEO_KEYWORDS
    }
  };

  return (
    <section 
      aria-labelledby="seo-ecosystem-heading"
      className="py-20 bg-[#07070a] border-t border-zinc-900/80 text-zinc-100 relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Network className="w-4 h-4" /> Enterprise SEO Keyword Ecosystem & Topical Authority
          </div>
          <h2 id="seo-ecosystem-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Full-Funnel <span className="text-brand-400">SEO Semantic Architecture</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Engineered by Enterprise SEO Architects and Google Search Quality Specialists. We connect 5 core SEO topical clusters, 18 entity knowledge nodes, and 13 supporting content pillars to dominate Google Search, Bing, and AI Generative Answer Engines.
          </p>
        </div>

        {/* 1. THE 5-PILLAR SEO CLUSTER TABS (On-Page, Off-Page, Technical, Local, Ecommerce) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Topical Authority Silos
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                The 5 Core SEO Optimization Clusters
              </h3>
            </div>
            <span className="text-xs text-zinc-400 font-medium">
              100% E-E-A-T & Google Search Essentials Compliant
            </span>
          </div>

          {/* Cluster Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6" role="tablist">
            {ALL_SEO_CLUSTERS.map((cluster, idx) => {
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
                    Active SEO Pillar
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
                    <ShieldCheck className="w-4 h-4 text-brand-400" /> Key Optimization Metrics
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
                  Semantic Keywords & NLP Entities in this Cluster:
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

        {/* 2. ENTITY SEO KNOWLEDGE GRAPH (Google, Bing, OpenAI, CMS, CDN) */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Cpu className="w-3.5 h-3.5" /> Entity Graph Mapping
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                18-Point Entity SEO & AI Search Network
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-3xl">
                We establish explicit semantic relationships with core search engines, webmaster tools, CMS platforms, and generative AI engines to ensure domain authority recognition.
              </p>
            </div>
            <div className="text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-2 rounded-xl shrink-0">
              <span className="text-brand-400 font-bold">18/18</span> Entities Connected
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SEO_ENTITY_GRAPH.map((entity, idx) => (
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
                Search Intent Coverage
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Buyer Intent & Long-Tail Keyword Ecosystem
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                Targeting every stage of the customer journey from educational research to enterprise consultation bookings.
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

        {/* 4. CONTENT STRATEGY ROADMAP (13 COMPREHENSIVE SEO GUIDES) */}
        <div id="blog" className="mb-20 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Content Strategy & Guides
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                13-Point Supporting SEO Knowledge Base
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                Comprehensive technical tutorials, checklists, and algorithmic playbooks engineered to establish E-E-A-T topical authority.
              </p>
            </div>
            <Link
              to="/#blog"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-brand-500/40 text-xs sm:text-sm font-bold text-brand-400 hover:text-brand-300 transition-colors"
            >
              Explore Knowledge Base <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEO_SUPPORTING_CONTENT_GUIDES.map((guide, idx) => (
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

        {/* 5. NATURAL INTERNAL LINKING ECOSYSTEM */}
        <div className="p-6 sm:p-10 rounded-3xl bg-black border border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Internal PageRank Distribution
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Omnichannel Internal Linking Hub
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-3xl">
                Every SEO service and content guide naturally interconnects with our core digital marketing, media buying, web development, software engineering, and conversion touchpoints.
              </p>
            </div>
            <div className="text-xs text-brand-400 font-bold bg-brand-950/40 border border-brand-500/20 px-3.5 py-2 rounded-xl shrink-0 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 13 Core Page Destinations
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SEO_INTERNAL_LINKS.map((linkItem, idx) => (
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
