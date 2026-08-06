import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Search, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  HelpCircle, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Target,
  ChevronDown,
  ChevronUp,
  Cpu,
  TrendingUp
} from 'lucide-react';
import { ServiceKeywordEcosystem } from '../data/seoKeywords';

export interface TopicalAuthorityClusterProps {
  ecosystem: ServiceKeywordEcosystem;
}

export default function TopicalAuthorityCluster({ ecosystem }: TopicalAuthorityClusterProps) {
  const [activeIntentTab, setActiveIntentTab] = useState<number>(0);
  const [showAllKeywords, setShowAllKeywords] = useState<boolean>(false);

  return (
    <section 
      aria-labelledby="topical-authority-heading"
      className="py-16 bg-[#070709] border-t border-zinc-900/80 text-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Network className="w-4 h-4" /> Enterprise Keyword Ecosystem & Topical Authority
          </div>
          <h2 id="topical-authority-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Semantic SEO & <span className="text-brand-400">Topical Silo Architecture</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Every page at Digital Grower Ltd. is engineered as part of an interconnected entity graph. Below is the full search intent framework, entity SEO mapping, and generative engine (AI Search) schema for <strong className="text-white">{ecosystem.serviceTitle}</strong>.
          </p>
        </div>

        {/* 1. AI Search Optimization (GEO) & Structured Answer Block */}
        <article className="mb-16 rounded-3xl bg-zinc-900/60 border border-brand-500/30 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-extrabold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> AI Search & GEO Ready Definition Block
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {ecosystem.aiSearchStructuredAnswer.definitionTitle}
              </h3>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                {ecosystem.aiSearchStructuredAnswer.definitionText}
              </p>
            </div>

            <div className="w-full lg:w-auto bg-black/60 border border-zinc-800 rounded-2xl p-5 shrink-0 min-w-[280px]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-400" /> Enterprise Authority Benchmarks
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {ecosystem.aiSearchStructuredAnswer.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Comparison Table (AI Search cited format) */}
          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-black/40">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <caption className="sr-only">Enterprise SEO Comparison Table for {ecosystem.serviceTitle}</caption>
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-300">
                  <th scope="col" className="p-4 font-extrabold uppercase tracking-wider">Evaluation Vector</th>
                  <th scope="col" className="p-4 font-extrabold uppercase tracking-wider text-zinc-400">Traditional Agency Approach</th>
                  <th scope="col" className="p-4 font-extrabold uppercase tracking-wider text-brand-400 bg-brand-950/30">DGL IT Enterprise Engineering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {ecosystem.aiSearchStructuredAnswer.comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                    <th scope="row" className="p-4 font-bold text-white whitespace-nowrap">{row.feature}</th>
                    <td className="p-4 text-zinc-400">{row.traditionalApproach}</td>
                    <td className="p-4 text-brand-200 font-semibold bg-brand-950/20">{row.dglItAdvantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        {/* 2. Search Intent Framework Classification (10 Categorized Intents) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                10-Point Search Intent Framework
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                We categorize and satisfy every buyer, informational, and generative intent vector.
              </p>
            </div>
            <div className="text-xs text-brand-400 font-semibold flex items-center gap-1.5">
              <Target className="w-4 h-4" /> Comprehensive Intent Mapping
            </div>
          </div>

          {/* Interactive Intent Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 mb-6">
            {ecosystem.searchIntents.map((intent, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIntentTab(idx)}
                aria-pressed={activeIntentTab === idx}
                className={`p-3 sm:p-3.5 rounded-xl text-left transition-all border text-xs sm:text-sm font-bold truncate ${
                  activeIntentTab === idx
                    ? 'bg-brand-500/20 border-brand-500 text-white shadow-lg shadow-brand-500/10'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                {intent.category}
              </button>
            ))}
          </div>

          {/* Active Intent Detail Card */}
          {ecosystem.searchIntents[activeIntentTab] && (
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                    Active Search Intent
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white">
                    {ecosystem.searchIntents[activeIntentTab].category}
                  </h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    {ecosystem.searchIntents[activeIntentTab].description}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 text-xs sm:text-sm">
                  <span className="text-zinc-500 block text-xs font-bold mb-0.5 uppercase">Example Query</span>
                  <code className="text-brand-300 font-mono font-semibold">
                    "{ecosystem.searchIntents[activeIntentTab].exampleQuery}"
                  </code>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                  Targeted Keyword Cluster for this Intent:
                </span>
                <div className="flex flex-wrap gap-2">
                  {ecosystem.searchIntents[activeIntentTab].keywords.map((kw, kwIdx) => (
                    <span
                      key={kwIdx}
                      className="px-3.5 py-1.5 rounded-lg bg-black/50 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium hover:border-brand-500/40 transition-colors"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. Entity SEO & Semantic Keyword Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Entity SEO Knowledge Graph */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-2.5 mb-4">
              <Cpu className="w-6 h-6 text-brand-400" />
              <h3 className="text-xl sm:text-2xl font-black text-white">Entity SEO Knowledge Graph</h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
              We explicitly map semantic relationships to industry-standard platforms, protocols, and AI models so search engines recognize Digital Grower Ltd. as a verified topical entity.
            </p>
            <div className="flex flex-wrap gap-2">
              {ecosystem.entityKeywords.map((entity, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:border-brand-500/50 hover:text-brand-300 transition-colors"
                >
                  #{entity}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Semantic & NLP Keyword Taxonomy */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <Search className="w-6 h-6 text-brand-400" />
                <h3 className="text-xl sm:text-2xl font-black text-white">Semantic & LSI Vocabulary</h3>
              </div>
              <button
                onClick={() => setShowAllKeywords(!showAllKeywords)}
                className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1 focus:outline-none"
              >
                {showAllKeywords ? (
                  <>Show Less <ChevronUp className="w-3.5 h-3.5" /></>
                ) : (
                  <>Show All ({ecosystem.semanticKeywords.length + ecosystem.longTailKeywords.length}) <ChevronDown className="w-3.5 h-3.5" /></>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
              Contextual vocabulary and LSI semantic variations used across this service cluster to prevent keyword stuffing while maximizing topical breadth.
            </p>
            <div className="flex flex-wrap gap-2">
              {(showAllKeywords 
                ? [...ecosystem.semanticKeywords, ...ecosystem.longTailKeywords, ...ecosystem.voiceSearchKeywords]
                : ecosystem.semanticKeywords
              ).map((kw, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-xs font-medium text-zinc-300"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Content Silo Structure & Interlinking Topical Map */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-black border border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Content Silo Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Topical Authority Silo: <span className="text-brand-400">{ecosystem.topicalCluster.parentTopic}</span>
              </h3>
            </div>
            <span className="text-xs font-bold text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
              Full Cluster Interlinking
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Connected Services */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2.5">
                <Layers className="w-4 h-4 text-brand-400" /> Related Service Ecosystem
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {ecosystem.topicalCluster.relatedServices.map((srv, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/service/${srv.slug}`}
                      className="text-zinc-300 hover:text-brand-400 transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate">{srv.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Supporting Blog & Technical Articles */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2.5">
                <BookOpen className="w-4 h-4 text-brand-400" /> Topical Authority Blog Articles
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {ecosystem.topicalCluster.relatedBlogTopics.map((blog, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                    <span className="hover:text-brand-300 cursor-pointer transition-colors leading-snug">{blog}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Case Studies & FAQ Mappings */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2.5">
                <TrendingUp className="w-4 h-4 text-brand-400" /> Enterprise Proof & FAQ Cluster
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {ecosystem.topicalCluster.relatedCaseStudies.map((caseStudy, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{caseStudy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Location Strategy & Global GEO Footprint */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80">
          <div className="flex items-center gap-2.5 mb-6">
            <Globe className="w-6 h-6 text-brand-400" />
            <h3 className="text-xl sm:text-2xl font-black text-white">Location Strategy & Regional Coverage</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystem.geoKeywords.map((geo, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                <h4 className="text-sm font-extrabold text-white mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-400" /> {geo.region}
                </h4>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {geo.locations.map((loc, locIdx) => (
                    <span key={locIdx} className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 text-xs font-semibold">
                      {loc}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  <span className="text-zinc-400 block mb-1">Sample Geo-Targeted Keywords:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {geo.sampleKeywords.map((skw, skwIdx) => (
                      <span key={skwIdx} className="text-brand-300/90 font-mono text-xs">
                        • {skw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
