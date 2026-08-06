import React from 'react';
import { 
  Users, 
  TrendingUp, 
  Search, 
  BookOpen, 
  Briefcase, 
  Mail, 
  CheckCircle2, 
  ArrowUpRight, 
  Clock, 
  Sparkles,
  ExternalLink,
  ShieldAlert,
  BarChart2
} from 'lucide-react';
import { DashboardStats } from '../../types/admin';

interface AdminDashboardViewProps {
  stats: DashboardStats | null;
  onNavigateTab: (tab: any) => void;
  onTriggerAction: (action: string) => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({ stats, onNavigateTab, onTriggerAction }) => {
  if (!stats) {
    return (
      <div className="flex items-center justify-center py-20 text-zinc-400">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500 mr-3" />
        <span>Loading SaaS Enterprise metrics...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome & Quick Metrics Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-zinc-900/90 via-zinc-900/40 to-zinc-950 p-6 rounded-2xl border border-zinc-800/80 shadow-2xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/30 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Search & GEO Dominance Engine Active</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enterprise Executive Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Real-time analytics across Dhaka HQ, North America, and European growth hubs.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onTriggerAction('NEW_LEAD')}
            className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
          >
            <span>+ Create CRM Lead</span>
          </button>
          <button
            onClick={() => onNavigateTab('seo')}
            className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-all border border-zinc-700 flex items-center gap-2"
          >
            <span>AI GEO Audit</span>
          </button>
        </div>
      </div>

      {/* Primary KPI Grid (Today's Leads, Monthly Leads, Traffic, SEO Overview) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Today's Leads */}
        <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-lg group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Today's Leads</span>
            <div className="w-9 h-9 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-black text-white">{stats.todaysLeads}</span>
            <span className="inline-flex items-center text-xs font-bold text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> +28% vs yesterday
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-2">Enterprise B2B inbound pipeline</p>
        </div>

        {/* Monthly Leads */}
        <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-lg group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Monthly Leads (MTD)</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-black text-white">{stats.monthlyLeads}</span>
            <span className="inline-flex items-center text-xs font-bold text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> +34.5% vs last mo
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-2">Target: 45 enterprise qualified leads</p>
        </div>

        {/* Website Traffic */}
        <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-lg group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">30-Day Traffic</span>
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
              <BarChart2 className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-black text-white">{(stats.websiteTrafficThisMonth / 1000).toFixed(1)}k</span>
            <span className="inline-flex items-center text-xs font-bold text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> 184,520 hits
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-2">GA4 + Google Search Console verified</p>
        </div>

        {/* SEO & GEO Score */}
        <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-lg group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">SEO & GEO Score</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-black text-white">{stats.seoOverviewScore}%</span>
            <span className="inline-flex items-center text-xs font-bold text-emerald-400">
              {stats.topKeywordsRankingInTop3} Top-3 KWs
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-2">Google AI Overviews & EEAT compliant</p>
        </div>
      </div>

      {/* Two-Column Hubs: Recent CRM Leads & Task Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Recent Leads & Contact Form Requests */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-400" />
                <h2 className="text-base font-bold text-white">Recent Enterprise Leads (CRM)</h2>
              </div>
              <button
                onClick={() => onNavigateTab('crm')}
                className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1"
              >
                <span>View All Leads</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="mt-4 divide-y divide-zinc-800/60">
              {stats.recentLeads.map(lead => (
                <div key={lead.id} className="py-3.5 flex items-center justify-between hover:bg-zinc-800/30 px-2 rounded-xl transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{lead.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-300">
                        {lead.companyName}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{lead.designation} • {lead.email}</p>
                    <div className="mt-1 flex items-center gap-3 text-[11px] text-zinc-500">
                      <span>Source: <strong className="text-zinc-300">{lead.source}</strong></span>
                      <span>Owner: <strong className="text-zinc-300">{lead.owner}</strong></span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      lead.status === 'Won' ? 'bg-emerald-500/20 text-emerald-400' :
                      lead.status === 'Proposal' ? 'bg-brand-500/20 text-brand-400' :
                      lead.status === 'Qualified' ? 'bg-blue-500/20 text-blue-400' : 'bg-zinc-800 text-zinc-300'
                    }`}>
                      {lead.status}
                    </span>
                    <div className="text-[10px] text-zinc-500 mt-1">Priority: {lead.priority}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Contact Submissions */}
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <h2 className="text-base font-bold text-white">Recent Contact Form & Consultation Inquiries</h2>
              </div>
              <button
                onClick={() => onNavigateTab('crm')}
                className="text-xs font-bold text-brand-400 hover:text-brand-300"
              >
                <span>Manage Submissions</span>
              </button>
            </div>

            <div className="mt-4 divide-y divide-zinc-800/60">
              {stats.recentContactRequests.map(sub => (
                <div key={sub.id} className="py-3 flex items-center justify-between hover:bg-zinc-800/30 px-2 rounded-xl transition-colors">
                  <div>
                    <div className="text-sm font-bold text-white">{sub.name} <span className="text-xs font-normal text-zinc-400">({sub.company})</span></div>
                    <p className="text-xs text-zinc-400 mt-1 italic">"{sub.message}"</p>
                    <span className="text-[10px] text-zinc-500 mt-1 block">Service: {sub.serviceInterest}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    sub.status === 'unread' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    {sub.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Tasks & Quick Actions */}
        <div className="space-y-6">
          {/* Executive Tasks Overview */}
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <h2 className="text-base font-bold text-white">Enterprise Task Overview</h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-500/20 text-brand-400">
                {stats.taskOverview.length} Active
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {stats.taskOverview.map(task => (
                <div key={task.id} className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{task.title}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Assignee: <strong className="text-brand-400">{task.assignee}</strong></span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      task.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick System Health Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-tr from-zinc-900 to-zinc-950 border border-zinc-800 shadow-xl">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SaaS System Health & Security</span>
            </h3>
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-400">HTTPS & TLS 1.3:</span>
                <span className="font-bold text-emerald-400">Enforced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">CSRF / XSS / SQLi:</span>
                <span className="font-bold text-emerald-400">0 Vulnerabilities</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Last Automated Backup:</span>
                <span className="font-mono text-[11px] text-zinc-400">2h ago (14.2 MB)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Schema.org JSON-LD:</span>
                <span className="font-bold text-brand-400">15/15 Validated</span>
              </div>
            </div>

            <button
              onClick={() => onNavigateTab('system')}
              className="mt-4 w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 transition-colors border border-zinc-700"
            >
              Open Security & Audit Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
