import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Target, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

const SERVICE_CLUSTERS = [
  {
    pillarName: "Digital Marketing & Performance Ads",
    slug: "media-buying",
    keywordsCount: "1,200+ Keywords",
    intents: ["Transactional", "Commercial Investigation", "Local Intent"],
    subServices: [
      { name: "SEO & Technical SEO", slug: "search-engine-optimization-seo" },
      { name: "Google & Meta Ads", slug: "facebook-google-ads-marketing" },
      { name: "Media Buying ROI", slug: "media-buying" },
      { name: "Digital Marketing 360", slug: "digital-marketing-360" }
    ]
  },
  {
    pillarName: "Website Development & E-Commerce",
    slug: "website-design-development",
    keywordsCount: "850+ Keywords",
    intents: ["Informational", "Transactional", "Comparison Intent"],
    subServices: [
      { name: "Custom Business Websites", slug: "website-design-development" },
      { name: "High-Speed WordPress & WooCommerce", slug: "website-design-development" },
      { name: "Landing Page CRO", slug: "website-design-development" },
      { name: "Core Web Vitals LCP < 2.5s", slug: "technical-seo" }
    ]
  },
  {
    pillarName: "Enterprise Software & Android Apps",
    slug: "software-development",
    keywordsCount: "940+ Keywords",
    intents: ["Commercial Investigation", "Problem Solving", "Brand Intent"],
    subServices: [
      { name: "Custom ERP, CRM & POS", slug: "software-development" },
      { name: "Android App Development", slug: "software-development" },
      { name: "API & Cloud SQL Infrastructure", slug: "software-development" },
      { name: "Secure Institutional Portals", slug: "software-development" }
    ]
  },
  {
    pillarName: "AI Automation & Business Growth",
    slug: "business-growth-challenge",
    keywordsCount: "680+ Keywords",
    intents: ["AI Search (GEO)", "Informational", "Voice Search"],
    subServices: [
      { name: "90-Day Business Growth Challenge", slug: "business-growth-challenge" },
      { name: "Generative Engine Optimization (GEO)", slug: "search-engine-optimization-seo" },
      { name: "OVC/TVC & Creative Branding", slug: "video-production-ovc-tvc" },
      { name: "Data-Driven Attribution (GA4/GTM)", slug: "digital-marketing-360" }
    ]
  }
];

const GEO_REGIONS = [
  "Dhaka", "Chattogram", "Khulna", "Sylhet", "Rajshahi", "USA", "UK", "Canada", "Australia", "Middle East"
];

const SEMANTIC_ENTITIES = [
  "Google Search Essentials", "E-E-A-T Authority", "Semantic HTML5", "Schema.org JSON-LD",
  "Google Analytics 4 (GA4)", "Meta Business Partner", "Core Web Vitals", "React & TypeScript",
  "ChatGPT / Gemini Citations", "GEO (Generative Engine Optimization)"
];

export default function TopicalAuthorityBannerSection() {
  return (
    <section 
      aria-labelledby="home-topical-heading"
      className="py-20 bg-[#07070a] border-t border-zinc-900/80 text-zinc-100 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Network className="w-4 h-4" /> Enterprise Keyword Ecosystem & Search Architecture
          </div>
          <h2 id="home-topical-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Topical Authority & <span className="text-brand-400">Semantic SEO Silos</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            We structure every page, service, and case study into a unified knowledge graph. Designed to satisfy all 10 search intents and maximize visibility across Google Search, Bing, and AI Search Engines.
          </p>
        </div>

        {/* 4-Column Pillar Cluster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICE_CLUSTERS.map((cluster, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-brand-950/60 border border-brand-900 text-brand-300">
                    {cluster.keywordsCount}
                  </span>
                  <Target className="w-4 h-4 text-zinc-500 group-hover:text-brand-400 transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">
                  {cluster.pillarName}
                </h3>

                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 mb-6">
                  {cluster.subServices.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={`/service/${sub.slug}`}
                        className="hover:text-white transition-colors flex items-center justify-between group/link"
                      >
                        <span className="truncate">{sub.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity text-brand-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1">
                {cluster.intents.map((intent, intentIdx) => (
                  <span 
                    key={intentIdx}
                    className="text-[11px] font-semibold text-zinc-400 bg-black/40 px-2 py-0.5 rounded border border-zinc-800"
                  >
                    {intent}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Entity SEO & Geo Hub Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-black/80 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Entity Knowledge Graph & Global Geo-Coverage</h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Verified across Google Search Essentials, E-E-A-T, Core Web Vitals, and AI Search Citations.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 max-w-2xl">
            {GEO_REGIONS.map((loc, locIdx) => (
              <span 
                key={`geo-${locIdx}`}
                className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 flex items-center gap-1"
              >
                <MapPin className="w-3 h-3 text-brand-400" /> {loc}
              </span>
            ))}
            {SEMANTIC_ENTITIES.slice(0, 4).map((ent, entIdx) => (
              <span 
                key={`ent-${entIdx}`}
                className="px-2.5 py-1 rounded-full bg-brand-950/30 border border-brand-500/20 text-xs font-semibold text-brand-300"
              >
                #{ent}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
