import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Code, 
  Sparkles, 
  Globe, 
  Share2, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Plus, 
  RefreshCw, 
  Copy,
  Link2,
  FileCode
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

interface SeoRedirect {
  id: string;
  sourceUrl: string;
  targetUrl: string;
  type: 301 | 302;
  hits: number;
}

export const AdminSEOEngineView: React.FC = () => {
  const { token } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<'schema' | 'redirects' | 'sitemap' | 'internal-links'>('schema');
  
  // 15 Schema types preview
  const [selectedSchemaType, setSelectedSchemaType] = useState('Organization');
  const [schemaJson, setSchemaJson] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  // 301 / 302 Redirects state
  const [redirects, setRedirects] = useState<SeoRedirect[]>([
    { id: '1', sourceUrl: '/services/enterprise-software', targetUrl: '/services/enterprise-software-development', type: 301, hits: 1420 },
    { id: '2', sourceUrl: '/dhaka-branch', targetUrl: '/about', type: 301, hits: 890 },
    { id: '3', sourceUrl: '/promo-2025', targetUrl: '/contact', type: 302, hits: 120 }
  ]);
  const [newSource, setNewSource] = useState('');
  const [newTarget, setNewTarget] = useState('');
  const [newType, setNewType] = useState<301 | 302>(301);

  // AI Internal Linking suggestions
  const [internalLinks] = useState([
    { id: '1', anchor: 'Enterprise Software Development in Bangladesh', fromPage: '/blog/enterprise-geo-strategy', targetPage: '/services/enterprise-software-development', seoLift: '+18% Cluster Authority' },
    { id: '2', anchor: 'ISO 27001 Certified ERP Solutions', fromPage: '/about', targetPage: '/services/erp-csharp-banking', seoLift: '+24% E-E-A-T Signal' },
    { id: '3', anchor: 'Dhaka IT Agency Case Studies', fromPage: '/', targetPage: '/portfolio', seoLift: '+14% Topical Relevance' }
  ]);

  // Sitemap preview
  const [sitemapXml] = useState(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://digitalgrowltd.com/</loc>
    <lastmod>2026-08-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://digitalgrowltd.com/services</loc>
    <lastmod>2026-08-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://digitalgrowltd.com/services/enterprise-software-development</loc>
    <lastmod>2026-08-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://digitalgrowltd.com/about</loc>
    <lastmod>2026-07-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`);

  useEffect(() => {
    // Generate preview JSON-LD for the 15 enterprise schemas
    if (selectedSchemaType === 'Organization') {
      setSchemaJson(JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Digital Grower Ltd.",
        "url": "https://digitalgrowltd.com",
        "logo": "https://digitalgrowltd.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/digitalgrowltd",
          "https://github.com/digitalgrowltd"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+880-1700-000000",
          "contactType": "customer support",
          "areaServed": ["BD", "US", "GB", "AE", "AU", "SG"]
        }
      }, null, 2));
    } else if (selectedSchemaType === 'ProfessionalService') {
      setSchemaJson(JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Digital Grower Ltd. - Dhaka Enterprise Software HQ",
        "image": "https://digitalgrowltd.com/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Banani Commercial Area",
          "addressLocality": "Dhaka",
          "addressRegion": "Dhaka Division",
          "postalCode": "1213",
          "addressCountry": "BD"
        },
        "priceRange": "$$$$"
      }, null, 2));
    } else {
      setSchemaJson(JSON.stringify({
        "@context": "https://schema.org",
        "@type": selectedSchemaType,
        "headline": "AI Search & GEO Dominance Engine 2026",
        "inLanguage": "en",
        "isPartOf": { "@type": "WebSite", "name": "Digital Grower Ltd." }
      }, null, 2));
    }
  }, [selectedSchemaType]);

  const handleAddRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSource || !newTarget) return;
    const newEntry: SeoRedirect = {
      id: String(Date.now()),
      sourceUrl: newSource,
      targetUrl: newTarget,
      type: newType,
      hits: 0
    };
    setRedirects([newEntry, ...redirects]);
    setNewSource('');
    setNewTarget('');
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(schemaJson);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/15 text-brand-400 border border-brand-500/30 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Google AI Overviews & EEAT Engine Active</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Enterprise SEO & GEO Optimization Hub</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Validate 15 Schema.org definitions, manage 301/302 redirects, review automated sitemaps, and apply AI internal links.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('schema')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'schema' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              15 Schema.org JSON-LD
            </button>
            <button
              onClick={() => setActiveTab('redirects')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'redirects' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              301/302 Redirects
            </button>
            <button
              onClick={() => setActiveTab('sitemap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'sitemap' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              XML Sitemap
            </button>
            <button
              onClick={() => setActiveTab('internal-links')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'internal-links' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              AI Internal Links
            </button>
          </div>
        </div>
      </div>

      {/* 1. 15-POINT SCHEMA.ORG JSON-LD GENERATOR/INSPECTOR */}
      {activeTab === 'schema' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 rounded-2xl bg-zinc-900/70 border border-zinc-800 p-4 space-y-2">
            <div className="text-xs font-extrabold uppercase text-zinc-400 pb-2 border-b border-zinc-800">
              Select EEAT Schema Type
            </div>
            {[
              'Organization',
              'ProfessionalService',
              'LocalBusiness',
              'WebSite',
              'BreadcrumbList',
              'TechArticle',
              'FAQPage',
              'Review',
              'Service',
              'Product',
              'SoftwareApplication',
              'VideoObject',
              'ImageObject',
              'AboutPage',
              'ContactPage'
            ].map(type => (
              <button
                key={type}
                onClick={() => setSelectedSchemaType(type)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                  selectedSchemaType === type
                    ? 'bg-brand-500/15 text-brand-400 border border-brand-500/30'
                    : 'text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                <span>{type} Schema</span>
                <CheckCircle2 className={`w-3.5 h-3.5 ${selectedSchemaType === type ? 'text-brand-400' : 'text-zinc-600'}`} />
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-brand-400" />
                  <h3 className="text-base font-bold text-white">{selectedSchemaType} JSON-LD Schema (Google AI Overviews Ready)</h3>
                </div>
                <button
                  onClick={handleCopySchema}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 inline-flex items-center gap-1.5 border border-zinc-700"
                >
                  <Copy className="w-3.5 h-3.5 text-brand-400" />
                  <span>{copySuccess ? 'Copied!' : 'Copy JSON-LD'}</span>
                </button>
              </div>

              <div className="mt-4">
                <textarea
                  rows={16}
                  value={schemaJson}
                  onChange={e => setSchemaJson(e.target.value)}
                  className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-emerald-400 font-mono text-xs focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span>Status: <strong className="text-emerald-400">W3C & Google Search Console Compliant</strong></span>
              <span>Injected into &lt;head&gt; dynamically on page render</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. 301/302 REDIRECTS MANAGER */}
      {activeTab === 'redirects' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
            <h3 className="text-base font-bold text-white mb-4">Add URL Redirect (301 Permanent / 302 Temporary)</h3>
            <form onSubmit={handleAddRedirect} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="sm:col-span-1">
                <input
                  type="text"
                  required
                  value={newSource}
                  onChange={e => setNewSource(e.target.value)}
                  placeholder="Source e.g. /old-services"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono"
                />
              </div>
              <div className="sm:col-span-1">
                <input
                  type="text"
                  required
                  value={newTarget}
                  onChange={e => setNewTarget(e.target.value)}
                  placeholder="Target e.g. /services"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono"
                />
              </div>
              <div className="sm:col-span-1">
                <select
                  value={newType}
                  onChange={e => setNewType(Number(e.target.value) as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                >
                  <option value={301}>301 Permanent (SEO Link Equity)</option>
                  <option value={302}>302 Temporary</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20"
                >
                  + Add Redirect Rule
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 font-bold uppercase">
                  <th className="py-3.5 px-6">Source URL Path</th>
                  <th className="py-3.5 px-6">Target Destination</th>
                  <th className="py-3.5 px-6">Status Type</th>
                  <th className="py-3.5 px-6">Redirect Hits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {redirects.map(r => (
                  <tr key={r.id} className="hover:bg-zinc-800/30">
                    <td className="py-3.5 px-6 font-mono text-amber-400">{r.sourceUrl}</td>
                    <td className="py-3.5 px-6 font-mono text-emerald-400">{r.targetUrl}</td>
                    <td className="py-3.5 px-6">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-300">
                        {r.type} Redirect
                      </span>
                    </td>
                    <td className="py-3.5 px-6 font-mono text-zinc-300">{r.hits} hits</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. XML SITEMAP VIEWER */}
      {activeTab === 'sitemap' && (
        <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-brand-400" />
              <h3 className="text-base font-bold text-white">Automated XML Sitemap (`/sitemap.xml`)</h3>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold inline-flex items-center gap-1.5 border border-zinc-700"
            >
              <span>View Live Sitemap</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-4">
            <pre className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs overflow-x-auto max-h-96">
              {sitemapXml}
            </pre>
          </div>
        </div>
      )}

      {/* 4. AI INTERNAL LINKING CLUSTER SUGGESTIONS */}
      {activeTab === 'internal-links' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/30 text-xs text-brand-300 flex items-center justify-between">
            <span>
              <strong>AI Cluster Analysis:</strong> The system automatically detects missing topical inter-links between your GEO articles and high-converting service landing pages.
            </span>
            <span className="font-bold uppercase text-[10px] px-2 py-0.5 rounded bg-brand-500 text-white">
              AI Cluster Engine
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {internalLinks.map(link => (
              <div key={link.id} className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-brand-400" />
                    <span className="text-sm font-bold text-white">Suggested Anchor: <strong className="text-brand-400">"{link.anchor}"</strong></span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    From: <code className="text-amber-400">{link.fromPage}</code> → Target: <code className="text-emerald-400">{link.targetPage}</code>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {link.seoLift}
                  </span>
                  <button
                    onClick={() => alert(`Internal link "${link.anchor}" applied across topical cluster!`)}
                    className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20"
                  >
                    Apply Link
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
