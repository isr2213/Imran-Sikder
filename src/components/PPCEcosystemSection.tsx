import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  TrendingUp,
  BarChart3,
  Layers,
  Cpu,
  DollarSign,
  CheckCircle2,
  HelpCircle,
  Mic,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Share2,
  Video,
  BadgeDollarSign,
  MousePointerClick,
  Zap,
  Network
} from 'lucide-react';
import {
  ALL_PPC_CLUSTERS,
  PPC_ENTITY_GRAPH,
  PPC_SUPPORTING_CONTENT_GUIDES,
  PPC_INTERNAL_LINKS,
  GOOGLE_ADS_KEYWORD_CLUSTER,
  GOOGLE_SEARCH_ADS_KEYWORDS,
  DISPLAY_ADS_KEYWORDS,
  SHOPPING_ADS_KEYWORDS,
  PERFORMANCE_MAX_KEYWORDS,
  YOUTUBE_ADS_KEYWORDS,
  META_ADS_KEYWORDS,
  FACEBOOK_ADS_KEYWORDS,
  INSTAGRAM_ADS_KEYWORDS,
  LINKEDIN_ADS_KEYWORDS,
  TIKTOK_ADS_KEYWORDS,
  LEAD_GENERATION_KEYWORDS,
  REMARKETING_KEYWORDS,
  CONVERSION_TRACKING_KEYWORDS,
  OPTIMIZATION_KEYWORDS,
  COMMERCIAL_PPC_KEYWORDS,
  TRANSACTIONAL_PPC_KEYWORDS,
  QUESTION_PPC_KEYWORDS,
  VOICE_SEARCH_PPC_KEYWORDS
} from '../data/ppcKeywords';

export default function PPCEcosystemSection() {
  const [activeClusterIndex, setActiveClusterIndex] = useState(0);
  const [activeKeywordCategory, setActiveKeywordCategory] = useState<'google' | 'meta' | 'leadgen' | 'tracking' | 'commercial' | 'transactional' | 'voice'>('google');

  const activeCluster = ALL_PPC_CLUSTERS[activeClusterIndex];

  const keywordCategoryData = {
    google: {
      title: 'Google Ads & Performance Max (PMax)',
      icon: Target,
      description: 'High-intent Google Search, Display, Shopping, and PMax campaigns capturing buyers at the exact moment of demand.',
      keywords: [
        ...GOOGLE_ADS_KEYWORD_CLUSTER.slice(0, 8),
        ...GOOGLE_SEARCH_ADS_KEYWORDS.slice(0, 6),
        ...SHOPPING_ADS_KEYWORDS.slice(0, 4),
        ...PERFORMANCE_MAX_KEYWORDS,
        ...YOUTUBE_ADS_KEYWORDS.slice(0, 4)
      ]
    },
    meta: {
      title: 'Meta, Facebook & Instagram Ads',
      icon: Share2,
      description: 'Precision custom audiences, AI Lookalike modeling, Reels video creatives, and server-side Meta Conversions API (CAPI).',
      keywords: [
        ...META_ADS_KEYWORDS,
        ...FACEBOOK_ADS_KEYWORDS.slice(0, 6),
        ...INSTAGRAM_ADS_KEYWORDS.slice(0, 6),
        ...LINKEDIN_ADS_KEYWORDS.slice(0, 3),
        ...TIKTOK_ADS_KEYWORDS.slice(0, 3)
      ]
    },
    leadgen: {
      title: 'Lead Generation & Remarketing',
      icon: Zap,
      description: 'High-converting B2B & B2C sales funnels, lead magnets, appointment booking, and multi-platform retargeting sequences.',
      keywords: [
        ...LEAD_GENERATION_KEYWORDS,
        ...REMARKETING_KEYWORDS
      ]
    },
    tracking: {
      title: 'Conversion Tracking & CRO',
      icon: BarChart3,
      description: 'Zero-data-loss server-side tracking via GA4, Google Tag Manager, Meta Pixel, and rigorous A/B creative testing.',
      keywords: [
        ...CONVERSION_TRACKING_KEYWORDS,
        ...OPTIMIZATION_KEYWORDS.slice(0, 10)
      ]
    },
    commercial: {
      title: 'Commercial Investigation Keywords',
      icon: DollarSign,
      description: 'Decision-makers evaluating top Google Ads & Meta Ads agencies, PPC packages, pricing retainers, and media buying consultants.',
      keywords: COMMERCIAL_PPC_KEYWORDS
    },
    transactional: {
      title: 'Transactional & Conversion Keywords',
      icon: CheckCircle2,
      description: 'Ready-to-act searches designed to drive immediate PPC audit requests, consultation bookings, and campaign launches.',
      keywords: TRANSACTIONAL_PPC_KEYWORDS
    },
    voice: {
      title: 'Voice Search & Informational (PAA)',
      icon: Mic,
      description: 'Spoken queries, AI Overviews, and "People Also Ask" questions establishing Digital Grower Ltd. as the #1 PPC authority.',
      keywords: [
        ...VOICE_SEARCH_PPC_KEYWORDS,
        ...QUESTION_PPC_KEYWORDS
      ]
    }
  };

  return (
    <section 
      aria-labelledby="ppc-ecosystem-heading"
      className="py-20 bg-[#07070a] border-t border-zinc-900/80 text-zinc-100 relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Target className="w-4 h-4" /> Enterprise Paid Advertising & Performance Marketing Ecosystem
          </div>
          <h2 id="ppc-ecosystem-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Full-Funnel <span className="text-brand-400">Paid Media & PPC Architecture</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Engineered by Certified Google Ads Specialists, Meta Ads Experts, and Performance Marketing Strategists. We synchronize 6 core paid media pillars, 18 entity knowledge nodes, and 15 supporting content guides to scale predictable revenue and build EEAT topical authority.
          </p>
        </div>

        {/* 1. THE 6-PILLAR PAID ADVERTISING CLUSTERS */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Topical Authority Silos
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                The 6 Core Performance Marketing Pillars
              </h3>
            </div>
            <span className="text-xs text-zinc-400 font-medium">
              Certified Google & Meta Marketing Partner Standard
            </span>
          </div>

          {/* Cluster Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6" role="tablist">
            {ALL_PPC_CLUSTERS.map((cluster, idx) => {
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
                    Active Performance Media Pillar
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
                    <ShieldCheck className="w-4 h-4 text-brand-400" /> KPI & Revenue Targets
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

        {/* 2. ENTITY PPC & AI SEARCH KNOWLEDGE GRAPH */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Cpu className="w-3.5 h-3.5" /> Entity Graph Mapping
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                18-Point Entity PPC & AI Search Network
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-3xl">
                We build strong semantic relationships across Google Ads, Meta, Server-Side Tracking containers, and AI Answer Engines to ensure brand trust and AI Search visibility.
              </p>
            </div>
            <div className="text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-2 rounded-xl shrink-0">
              <span className="text-brand-400 font-bold">18/18</span> Entities Connected
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {PPC_ENTITY_GRAPH.map((entity, idx) => (
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
                Paid Advertising Keyword & Query Explorer
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                Explore our semantic keyword clusters across Google Ads, Meta Ads, Lead Generation, Tracking, and Buyer Intent.
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

        {/* 4. CONTENT STRATEGY ROADMAP (15 COMPREHENSIVE PPC GUIDES) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Content Strategy & Guides
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                15-Point Paid Advertising & ROAS Knowledge Base
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                Enterprise technical playbooks, optimization checklists, and tracking guides establishing Digital Grower Ltd. as the industry leader.
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
            {PPC_SUPPORTING_CONTENT_GUIDES.map((guide, idx) => (
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
                Paid Advertising Omnichannel Connectivity
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-3xl">
                Every Paid Advertising campaign connects seamlessly with our SEO, Website Development, Landing Page CRO, Software Engineering, and Enterprise Case Studies.
              </p>
            </div>
            <div className="text-xs text-brand-400 font-bold bg-brand-950/40 border border-brand-500/20 px-3.5 py-2 rounded-xl shrink-0 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 12 Core Page Destinations
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PPC_INTERNAL_LINKS.map((linkItem, idx) => (
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
