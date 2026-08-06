import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Search, 
  Globe, 
  ArrowUpRight, 
  DollarSign, 
  Target, 
  Award,
  Filter
} from 'lucide-react';

export const AdminAnalyticsMarketingView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'marketing'>('analytics');
  const [dateRange, setDateRange] = useState('30D');

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Analytics & Enterprise Growth Hub</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Real-time GA4 + Google Search Console telemetry, SEO keyword rankings, and B2B marketing conversion funnels.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'analytics' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              GA4 & GSC Analytics
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'marketing' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              B2B Marketing & ROI Funnel
            </button>
          </div>

          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs font-bold">
            {['7D', '30D', '90D', 'YTD'].map(range => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-2.5 py-1 rounded-lg ${dateRange === range ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 1. GA4 & GSC ANALYTICS TAB */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          {/* Top KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase">Total Sessions ({dateRange})</span>
              <div className="mt-2 text-3xl font-black text-white flex items-baseline justify-between">
                <span>184,520</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center">+32.4%</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">GA4 verified across 18 countries</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase">Search Impressions</span>
              <div className="mt-2 text-3xl font-black text-white flex items-baseline justify-between">
                <span>1.42M</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center">+48.1%</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">Google Search Console Telemetry</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase">Avg. Engagement Time</span>
              <div className="mt-2 text-3xl font-black text-white flex items-baseline justify-between">
                <span>3m 42s</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center">+18s</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">High dwell time (E-E-A-T booster)</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase">Top 3 Search Keywords</span>
              <div className="mt-2 text-3xl font-black text-white flex items-baseline justify-between">
                <span>48 KWs</span>
                <span className="text-xs font-bold text-brand-400 flex items-center">Rank #1-3</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">AI Overviews citations active</p>
            </div>
          </div>

          {/* Top Pages Table & Top Keywords Table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <h3 className="text-base font-bold text-white mb-4">Top Visited Enterprise Pages</h3>
              <div className="space-y-3">
                {[
                  { page: '/services/enterprise-software-development', views: '42,100', share: '28%', bounce: '32%' },
                  { page: '/services/erp-csharp-banking', views: '31,400', share: '21%', bounce: '28%' },
                  { page: '/', views: '28,900', share: '19%', bounce: '35%' },
                  { page: '/portfolio', views: '18,500', share: '12%', bounce: '24%' },
                  { page: '/blog/enterprise-geo-strategy', views: '14,200', share: '9%', bounce: '21%' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs">
                    <div>
                      <div className="font-bold text-white font-mono">{item.page}</div>
                      <div className="text-zinc-500 text-[11px]">Bounce Rate: {item.bounce}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-brand-400">{item.views} visits</div>
                      <div className="text-zinc-500 text-[11px]">{item.share} traffic</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <h3 className="text-base font-bold text-white mb-4">Top SEO & GEO Keyword Rankings</h3>
              <div className="space-y-3">
                {[
                  { keyword: 'Enterprise Software Development Company in Bangladesh', rank: '#1', clicks: '4,890', ctr: '18.4%' },
                  { keyword: 'ISO 27001 Software Agency Dhaka', rank: '#1', clicks: '3,410', ctr: '22.1%' },
                  { keyword: 'C# ERP Banking Software Bangladesh', rank: '#2', clicks: '2,890', ctr: '14.8%' },
                  { keyword: 'Fintech Software Engineers Banani Dhaka', rank: '#1', clicks: '1,940', ctr: '19.2%' },
                  { keyword: 'AI Overviews GEO Optimization Agency', rank: '#3', clicks: '1,420', ctr: '11.5%' }
                ].map((kw, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs">
                    <div>
                      <div className="font-bold text-white">{kw.keyword}</div>
                      <div className="text-zinc-500 text-[11px]">CTR: {kw.ctr}</div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">
                        Rank {kw.rank}
                      </span>
                      <div className="text-zinc-400 text-[11px] mt-1">{kw.clicks} clicks</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. B2B MARKETING & CONVERSION FUNNEL TAB */}
      {activeTab === 'marketing' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-400 uppercase">Inbound Lead Sources</h3>
              <div className="mt-4 space-y-3 text-xs">
                {[
                  { source: 'Google AI Overviews / GEO', share: 42, color: 'bg-brand-500' },
                  { source: 'Organic Google SEO', share: 28, color: 'bg-emerald-500' },
                  { source: 'Referrals & Retainers', share: 18, color: 'bg-blue-500' },
                  { source: 'LinkedIn Enterprise Ads', share: 12, color: 'bg-amber-500' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between font-semibold text-white mb-1">
                      <span>{item.source}</span>
                      <span>{item.share}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.share}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 sm:col-span-2">
              <h3 className="text-sm font-bold text-zinc-400 uppercase">Enterprise B2B Conversion Funnel</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-xs text-zinc-400 block">Total Visitors</span>
                  <span className="text-2xl font-black text-white mt-1 block">184,520</span>
                  <span className="text-[10px] text-zinc-500">100% Top of Funnel</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-xs text-zinc-400 block">Consultation Clicks</span>
                  <span className="text-2xl font-black text-blue-400 mt-1 block">3,420</span>
                  <span className="text-[10px] text-emerald-400">1.85% CTR Conversion</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-xs text-zinc-400 block">Enterprise Leads</span>
                  <span className="text-2xl font-black text-brand-400 mt-1 block">428 Leads</span>
                  <span className="text-[10px] text-emerald-400">12.5% Form Submission</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-xs text-zinc-400 block">Retainer Won</span>
                  <span className="text-2xl font-black text-emerald-400 mt-1 block">42 Clients</span>
                  <span className="text-[10px] text-emerald-400">9.8% Close Rate ($142k+ avg)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
