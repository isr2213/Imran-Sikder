import React, { useState } from 'react';
import { 
  Code, 
  Key, 
  Globe, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Plus, 
  Trash2, 
  Layers, 
  Cpu, 
  Webhook, 
  Send
} from 'lucide-react';

interface WebhookItem {
  id: string;
  url: string;
  event: 'lead.created' | 'blog.published' | 'backup.completed' | 'user.login';
  active: boolean;
}

export const AdminAPIDocsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rest' | 'webhooks' | 'graphql' | 'erp'>('rest');
  const [webhooks, setWebhooks] = useState<WebhookItem[]>([
    { id: '1', url: 'https://hooks.slack.com/services/DGL/LEAD_ALERT', event: 'lead.created', active: true },
    { id: '2', url: 'https://erp.digitalgrowltd.com/webhook/sync-customer', event: 'lead.created', active: true },
    { id: '3', url: 'https://api.indexnow.org/indexnow', event: 'blog.published', active: true }
  ]);

  const [newWebhookUrl, setNewWebhookUrl] = useState('');
  const [newWebhookEvent, setNewWebhookEvent] = useState<'lead.created' | 'blog.published' | 'backup.completed' | 'user.login'>('lead.created');
  const [copySuccess, setCopySuccess] = useState('');

  const handleAddWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWebhookUrl) return;
    setWebhooks([
      { id: String(Date.now()), url: newWebhookUrl, event: newWebhookEvent, active: true },
      ...webhooks
    ]);
    setNewWebhookUrl('');
  };

  const handleDeleteWebhook = (id: string) => {
    setWebhooks(webhooks.filter(w => w.id !== id));
  };

  const handleCopyCode = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(name);
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const sampleCurl = `curl -X GET "https://digitalgrowltd.com/api/admin/stats" \\
  -H "Authorization: Bearer <your-enterprise-jwt-token>" \\
  -H "Content-Type: application/json"`;

  const sampleGraphQL = `query GetEnterpriseDashboard {
  stats {
    todaysLeads
    monthlyLeads
    seoOverviewScore
    recentLeads {
      name
      companyName
      email
      status
    }
  }
}`;

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">API Readiness, Webhooks & Enterprise Integration Hub</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            OpenAPI 3.1 REST documentation, real-time event webhooks, GraphQL endpoint, and ERP/CRM sync bridges.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('rest')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'rest' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              REST API Docs
            </button>
            <button
              onClick={() => setActiveTab('webhooks')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'webhooks' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Webhooks ({webhooks.length})
            </button>
            <button
              onClick={() => setActiveTab('graphql')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'graphql' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              GraphQL Preview
            </button>
            <button
              onClick={() => setActiveTab('erp')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'erp' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              ERP & Multi-Branch
            </button>
          </div>
        </div>
      </div>

      {/* 1. REST API OPENAPI / SWAGGER SPECS */}
      {activeTab === 'rest' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase">Authentication Scheme</span>
              <div className="mt-2 text-base font-bold text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-brand-400" />
                <span>JWT Bearer Token</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">Header: `Authorization: Bearer &lt;token&gt;`</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase">Rate Limiting</span>
              <div className="mt-2 text-base font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>100 Requests / Minute</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">Status `429 Too Many Requests` on overflow</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase">Response Format</span>
              <div className="mt-2 text-base font-bold text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-blue-400" />
                <span>JSON (UTF-8)</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">ISO 8601 timestamps & standardized error payloads</p>
            </div>
          </div>

          {/* Interactive Endpoint Documentation */}
          <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 space-y-4">
            <h3 className="text-base font-bold text-white">Enterprise REST API Endpoints</h3>
            <div className="space-y-3">
              {[
                { method: 'GET', endpoint: '/api/admin/stats', desc: 'Retrieve Executive Dashboard KPIs & recent telemetry' },
                { method: 'GET', endpoint: '/api/admin/cms', desc: 'List all CMS pages, slugs, and EEAT meta tags' },
                { method: 'POST', endpoint: '/api/admin/crm/leads', desc: 'Inject inbound B2B lead into the CRM pipeline' },
                { method: 'GET', endpoint: '/api/admin/blogs', desc: 'Retrieve GEO articles with 15-point Schema.org JSON-LD' },
                { method: 'GET', endpoint: '/api/admin/audit-logs', desc: 'Query ISO 27001 audit logs with module filtering' }
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black font-mono ${
                      item.method === 'GET' ? 'bg-blue-500/20 text-blue-400' : 'bg-brand-500/20 text-brand-400'
                    }`}>
                      {item.method}
                    </span>
                    <span className="font-mono text-xs font-bold text-white">{item.endpoint}</span>
                  </div>
                  <span className="text-xs text-zinc-400">{item.desc}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-zinc-300">Example cURL Request:</span>
                <button
                  onClick={() => handleCopyCode(sampleCurl, 'curl')}
                  className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1 font-bold"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copySuccess === 'curl' ? 'Copied!' : 'Copy cURL'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs overflow-x-auto">
                {sampleCurl}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* 2. WEBHOOK MANAGER */}
      {activeTab === 'webhooks' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
            <h3 className="text-base font-bold text-white mb-4">Register Real-Time Event Webhook</h3>
            <form onSubmit={handleAddWebhook} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="sm:col-span-2">
                <input
                  type="url"
                  required
                  value={newWebhookUrl}
                  onChange={e => setNewWebhookUrl(e.target.value)}
                  placeholder="https://hooks.slack.com/services/..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono"
                />
              </div>
              <div className="sm:col-span-1">
                <select
                  value={newWebhookEvent}
                  onChange={e => setNewWebhookEvent(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                >
                  <option value="lead.created">lead.created</option>
                  <option value="blog.published">blog.published</option>
                  <option value="backup.completed">backup.completed</option>
                  <option value="user.login">user.login</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20"
                >
                  + Register Webhook
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 font-bold uppercase">
                  <th className="py-3.5 px-6">Webhook Endpoint URL</th>
                  <th className="py-3.5 px-6">Trigger Event</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {webhooks.map(w => (
                  <tr key={w.id} className="hover:bg-zinc-800/30">
                    <td className="py-3.5 px-6 font-mono text-zinc-200">{w.url}</td>
                    <td className="py-3.5 px-6">
                      <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-brand-500/15 text-brand-400 border border-brand-500/30 font-mono">
                        {w.event}
                      </span>
                    </td>
                    <td className="py-3.5 px-6">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400">
                        Active & Verified
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-right">
                      <button
                        onClick={() => handleDeleteWebhook(w.id)}
                        className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. GRAPHQL ENDPOINT PREVIEW */}
      {activeTab === 'graphql' && (
        <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-brand-400" />
              <h3 className="text-base font-bold text-white">GraphQL Endpoint (`/api/graphql`)</h3>
            </div>
            <button
              onClick={() => handleCopyCode(sampleGraphQL, 'gql')}
              className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1 font-bold"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copySuccess === 'gql' ? 'Copied!' : 'Copy Query'}</span>
            </button>
          </div>
          <p className="text-xs text-zinc-400">
            Query specific fields across CRM leads, blog schemas, and user permissions in a single network round-trip.
          </p>
          <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-emerald-400 font-mono text-xs overflow-x-auto">
            {sampleGraphQL}
          </pre>
        </div>
      )}

      {/* 4. ERP & MULTI-BRANCH INTEGRATION HUB */}
      {activeTab === 'erp' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-brand-400" />
              <span>ERP & Accounting Sync</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Bi-directional synchronization with SAP, Oracle NetSuite, and Tally ERP for invoicing and corporate project retainers.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                ✓ Sync Bridge Connected (Dhaka HQ)
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <span>Multi-Region / Multi-Language Architecture</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Support for localized branch views across Bangladesh (`en-BD`), United States (`en-US`), Europe (`en-GB`), and Middle East (`en-AE`).
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                ✓ 6 Branch Hubs Configured
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
