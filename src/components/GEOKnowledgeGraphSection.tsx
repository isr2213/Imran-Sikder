import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Cpu,
  Layers,
  Globe,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Search,
  Database,
  Terminal,
  Share2,
  FileText,
  HelpCircle,
  BarChart3,
  Award
} from 'lucide-react';
import {
  GEO_ENTITY_KNOWLEDGE_GRAPH,
  ALL_GEO_PILLAR_HUBS,
  GEO_PROGRAMMATIC_TEMPLATES,
  GeoPillarHub
} from '../data/geoKnowledgeGraph';

export default function GEOKnowledgeGraphSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPillarId, setSelectedPillarId] = useState<string>(ALL_GEO_PILLAR_HUBS[0].id);
  const [activeEntityType, setActiveEntityType] = useState<string>("All");

  const pillarCategories = [
    "All",
    "Digital Marketing & Paid Ads",
    "SEO & AI Search",
    "Web Design & Development",
    "Custom Software & ERP",
    "Mobile Apps & Business Growth"
  ];

  const entityTypes = [
    "All",
    "AI Engine & LLM",
    "Search Engine & Cloud",
    "Framework & CMS",
    "Advertising & Marketing",
    "Analytics & Standard"
  ];

  const filteredPillars = activeCategory === "All"
    ? ALL_GEO_PILLAR_HUBS
    : ALL_GEO_PILLAR_HUBS.filter(p => p.category === activeCategory);

  const selectedPillar: GeoPillarHub = ALL_GEO_PILLAR_HUBS.find(p => p.id === selectedPillarId) || ALL_GEO_PILLAR_HUBS[0];

  const filteredEntities = activeEntityType === "All"
    ? GEO_ENTITY_KNOWLEDGE_GRAPH
    : GEO_ENTITY_KNOWLEDGE_GRAPH.filter(e => e.type === activeEntityType);

  return (
    <section 
      aria-labelledby="geo-knowledge-graph-heading"
      className="py-20 bg-[#07070b] border-t border-zinc-900/80 text-zinc-100 relative overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> Generative Engine Optimization (GEO) & Entity SEO
          </div>
          <h2 id="geo-knowledge-graph-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            AI Search Architecture & <span className="text-brand-400">24-Point Knowledge Graph</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            We optimize Digital Grower Ltd. for meaning, entities, context, relationships, expertise, trust, and helpful answers—ensuring consistent citations across Google AI Overview, Gemini, ChatGPT Search, Perplexity AI, Claude, and Bing AI.
          </p>
        </div>

        {/* 1. 24-POINT ENTITY SEO & SEMANTIC KNOWLEDGE GRAPH */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Cpu className="w-3.5 h-3.5" /> Semantic Relationship Network
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                24-Point Entity Knowledge Graph & Citation Hub
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-3xl">
                We establish verifiable semantic links with world-leading search engines, LLM answer engines, cloud platforms, and developer ecosystems.
              </p>
            </div>
            <div className="text-xs text-brand-400 font-bold bg-brand-950/40 border border-brand-500/20 px-3.5 py-2 rounded-xl shrink-0 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 24/24 Entities Verified
            </div>
          </div>

          {/* Entity Type Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-6" role="tablist">
            {entityTypes.map((type, idx) => {
              const isSelected = activeEntityType === type;
              return (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveEntityType(type)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    isSelected
                      ? 'bg-brand-500/20 border-brand-500 text-white shadow-md'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>

          {/* Entity Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredEntities.map((entity, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/50 border border-zinc-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                      {entity.name}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-brand-400 shrink-0">
                      {entity.type.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {entity.semanticRelationship}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="truncate">{entity.citationAuthority}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 20 TOPICAL AUTHORITY PILLAR HUBS & BLOG CLUSTERS */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Topical Authority Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                20 Pillar Content Hubs & Blog Cluster Trees
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                We organize every service into an authoritative Pillar Page supported by a 5-article Question-First Blog Cluster that covers every search intent.
              </p>
            </div>
          </div>

          {/* Pillar Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6" role="tablist">
            {pillarCategories.map((cat, idx) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveCategory(cat);
                    const matched = cat === "All" ? ALL_GEO_PILLAR_HUBS[0] : ALL_GEO_PILLAR_HUBS.find(p => p.category === cat) || ALL_GEO_PILLAR_HUBS[0];
                    setSelectedPillarId(matched.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    isSelected
                      ? 'bg-brand-500/20 border-brand-500 text-white shadow-lg shadow-brand-500/10'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Pillar Selection Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filteredPillars.map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-md'
                      : 'bg-black/60 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {pillar.title.replace(' Pillar', '')}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details & Blog Cluster View */}
          {selectedPillar && (
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 to-black border border-zinc-800 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between mb-8 pb-8 border-b border-zinc-800/80">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                      {selectedPillar.category}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs text-zinc-400 font-mono">
                      Primary Entity: {selectedPillar.primaryEntity}
                    </span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    {selectedPillar.title}
                  </h4>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {selectedPillar.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Link
                    to={selectedPillar.pillarUrl}
                    className="px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-brand-500/20 inline-flex items-center gap-2 justify-center"
                  >
                    View Pillar Page <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/#blog"
                    className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 justify-center"
                  >
                    Explore Blog Hub <BookOpen className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 5-Article Blog Cluster Display */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-400" /> Supporting Question-First Blog Cluster Articles (Topical Silo):
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedPillar.blogClusterArticles.map((articleTitle, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-sm font-bold text-white leading-snug">
                          {articleTitle}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-zinc-800/40 flex items-center justify-between text-[11px] text-zinc-500">
                        <span>E-E-A-T Guide</span>
                        <span className="text-brand-300 font-medium">Internal Linked →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. PROGRAMMATIC SEO MATRIX (7 SCALABLE TEMPLATE ARCHITECTURES) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-black border border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 block mb-1">
                Programmatic SEO Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                7 Scalable Programmatic Content Templates
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-3xl">
                We generate dynamically structured, highly helpful landing pages for industries, cities, services, technology comparisons, and pricing brackets without duplicate content bloat.
              </p>
            </div>
            <div className="text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-2 rounded-xl shrink-0">
              <span className="text-brand-400 font-bold">7 Core</span> Dynamic Templates
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GEO_PROGRAMMATIC_TEMPLATES.map((tpl, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-brand-950/60 border border-brand-900 text-brand-300">
                      {tpl.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">{tpl.urlPattern}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {tpl.templateName}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed">
                    {tpl.intentFocus}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    Dynamic Variables Included:
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {tpl.dynamicVariables.map((variable, varIdx) => (
                      <span
                        key={varIdx}
                        className="text-[10px] text-zinc-300 bg-black/60 px-2 py-0.5 rounded border border-zinc-800"
                      >
                        {variable}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-500 font-mono">
                    Example: {tpl.exampleUrl}
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
