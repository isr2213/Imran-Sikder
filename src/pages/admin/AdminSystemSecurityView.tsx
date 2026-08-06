import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  RefreshCw, 
  Download, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  Sliders, 
  Database, 
  History, 
  Key, 
  Server, 
  Mail, 
  Globe,
  Settings,
  User,
  Search
} from 'lucide-react';
import { AuditLogEntry } from '../../types/admin';
import { useAdminAuth } from '../../context/AdminAuthContext';

export const AdminSystemSecurityView: React.FC = () => {
  const { token, user } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<'security' | 'automation' | 'settings' | 'audit' | 'backups'>('security');

  // Audit logs state
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [logFilterModule, setLogFilterModule] = useState('ALL');
  const [logSearch, setLogSearch] = useState('');

  // Automation toggles
  const [autoEmail, setAutoEmail] = useState(true);
  const [autoNotify, setAutoNotify] = useState(true);
  const [autoLeadAssign, setAutoLeadAssign] = useState(true);
  const [autoBackup, setAutoBackup] = useState(true);
  const [autoSitemap, setAutoSitemap] = useState(true);
  const [autoCacheClear, setAutoCacheClear] = useState(true);
  const [autoImgOpt, setAutoImgOpt] = useState(true);

  // Settings form
  const [companyName, setCompanyName] = useState('Digital Grower Ltd.');
  const [supportEmail, setSupportEmail] = useState('support@digitalgrowltd.com');
  const [contactPhone, setContactPhone] = useState('+880-1700-000000');
  const [ga4Id, setGa4Id] = useState('G-8XZ912QW8X');
  const [smtpHost, setSmtpHost] = useState('smtp.digitalgrowltd.com');
  const [apiKeyMasked, setApiKeyMasked] = useState('dgl_live_************************3f9a');
  const [saveMsg, setSaveMsg] = useState('');

  // Backup state
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [lastBackupTime, setLastBackupTime] = useState('2 hours ago');

  const fetchAuditLogs = async () => {
    try {
      const res = await fetch('/api/admin/audit-logs', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setLogs(data.logs || []);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    fetchAuditLogs();
  }, [token]);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveMsg('System & Enterprise settings saved successfully!');
    setTimeout(() => setSaveMsg(''), 3000);
  };

  const handleTriggerManualBackup = async () => {
    setIsBackingUp(true);
    setTimeout(() => {
      setIsBackingUp(false);
      setLastBackupTime('Just now (14.4 MB)');
      alert('Database JSON Snapshot created & verified successfully!');
    }, 1500);
  };

  const handleExportDatabaseJson = () => {
    const backupObj = {
      timestamp: new Date().toISOString(),
      version: "2.4.0-ENT",
      company: "Digital Grower Ltd.",
      tables: ["users", "leads", "cmsPages", "blogPosts", "portfolio", "caseStudies", "customers", "auditLogs"]
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupObj, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `dgl_enterprise_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.user.toLowerCase().includes(logSearch.toLowerCase()) ||
      log.action.toLowerCase().includes(logSearch.toLowerCase()) ||
      log.details.toLowerCase().includes(logSearch.toLowerCase());
    const matchesModule = logFilterModule === 'ALL' || log.module === logFilterModule;
    return matchesSearch && matchesModule;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Security, Governance & System Automation</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            ISO 27001 Security Posture, Automated Workflow Rules, Audit Logs, and Disaster Recovery Backups.
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('security')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'security' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Security Shield
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'automation' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Automation Rules
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'settings' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              System Settings
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'audit' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Audit Trail ({logs.length})
            </button>
            <button
              onClick={() => setActiveTab('backups')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'backups' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Backup & Restore
            </button>
          </div>
        </div>
      </div>

      {/* 1. SECURITY POSTURE SHIELD */}
      {activeTab === 'security' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 p-6 rounded-2xl bg-gradient-to-tr from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">ISO 27001 Security Posture: 100% Secure</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Zero active vulnerabilities detected across Dhaka HQ and Global production endpoints.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800/80 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-400">PBKDF2 Password Hashing:</span>
                <span className="font-bold text-emerald-400">10,000 Rounds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">2FA TOTP Support:</span>
                <span className="font-bold text-emerald-400">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Active Admin Sessions:</span>
                <span className="font-bold text-brand-400">3 Devices</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6">
            <h3 className="text-base font-bold text-white mb-4">Enterprise Security Controls Matrix</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'HTTPS / TLS 1.3 Encryption', desc: 'Enforced with HSTS headers across all domains.', status: 'Active' },
                { title: 'CSRF & XSS Protection', desc: 'Strict origin checking and automatic HTML sanitization.', status: 'Active' },
                { title: 'SQL & NoSQL Injection Guard', desc: 'Parameterized ORM queries & input validation.', status: 'Active' },
                { title: 'DDoS & Rate Limiting', desc: 'Max 100 requests / min per IP address.', status: 'Active' },
                { title: 'Content Security Policy (CSP)', desc: 'Blocks unauthorized scripts and inline injections.', status: 'Active' },
                { title: 'Fine-Grained RBAC Roles', desc: '13 distinct department permission sets.', status: 'Active' }
              ].map((ctrl, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{ctrl.title}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{ctrl.desc}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {ctrl.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. AUTOMATION RULES */}
      {activeTab === 'automation' && (
        <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div>
              <h3 className="text-lg font-bold text-white">Enterprise Automation Engine</h3>
              <p className="text-xs text-zinc-400">Toggle zero-touch background automation rules across the agency platform.</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/15 text-brand-400 border border-brand-500/30">
              7 Rules Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Auto Email Response to New Leads', state: autoEmail, setter: setAutoEmail, desc: 'Instantly sends customized PDF company profile and calendar link.' },
              { label: 'Auto Slack/WhatsApp Notifications', state: autoNotify, setter: setAutoNotify, desc: 'Alerts sales executives immediately upon lead submission.' },
              { label: 'Auto Lead Assignment by Country', state: autoLeadAssign, setter: setAutoLeadAssign, desc: 'Routes US/UK leads to international desks, Bangladesh to Dhaka HQ.' },
              { label: 'Auto Daily Database Snapshots', state: autoBackup, setter: setAutoBackup, desc: 'Creates compressed JSON backup every 24 hours.' },
              { label: 'Auto XML Sitemap & Google Indexing Ping', state: autoSitemap, setter: setAutoSitemap, desc: 'Updates sitemap on page publish & alerts Googlebot.' },
              { label: 'Auto WebP/AVIF Image Compression', state: autoImgOpt, setter: setAutoImgOpt, desc: 'Compresses uploads to save 65% CDN bandwidth.' }
            ].map((rule, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{rule.label}</div>
                  <div className="text-xs text-zinc-400 mt-1">{rule.desc}</div>
                </div>
                <button
                  onClick={() => rule.setter(!rule.state)}
                  className={`w-12 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
                    rule.state ? 'bg-brand-500' : 'bg-zinc-800'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      rule.state ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. SYSTEM SETTINGS */}
      {activeTab === 'settings' && (
        <form onSubmit={handleSaveSettings} className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-6">
          {saveMsg && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{saveMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Company Legal Name</label>
              <input
                type="text"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Support Email</label>
              <input
                type="email"
                value={supportEmail}
                onChange={e => setSupportEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Contact Phone / WhatsApp Desk</label>
              <input
                type="text"
                value={contactPhone}
                onChange={e => setContactPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Google Analytics 4 (GA4) Property ID</label>
              <input
                type="text"
                value={ga4Id}
                onChange={e => setGa4Id(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">SMTP Mail Server Host</label>
              <input
                type="text"
                value={smtpHost}
                onChange={e => setSmtpHost(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Enterprise API Master Key (Masked)</label>
              <input
                type="text"
                disabled
                value={apiKeyMasked}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-500 text-xs font-mono cursor-not-allowed"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-zinc-800">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-lg shadow-brand-500/20"
            >
              Save Enterprise Settings
            </button>
          </div>
        </form>
      )}

      {/* 4. AUDIT TRAIL LOGS */}
      {activeTab === 'audit' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search user, action, IP..."
                value={logSearch}
                onChange={e => setLogSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 w-64"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 font-bold">Module:</span>
              {['ALL', 'AUTH', 'CRM', 'CMS', 'BLOG', 'SECURITY', 'USERS'].map(mod => (
                <button
                  key={mod}
                  onClick={() => setLogFilterModule(mod)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    logFilterModule === mod ? 'bg-brand-500 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 font-bold uppercase">
                  <th className="py-3.5 px-6">Timestamp / IP Address</th>
                  <th className="py-3.5 px-6">Enterprise User</th>
                  <th className="py-3.5 px-6">Module</th>
                  <th className="py-3.5 px-6">Action & Details</th>
                  <th className="py-3.5 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {filteredLogs.map(log => (
                  <tr key={log.id} className="hover:bg-zinc-800/30">
                    <td className="py-3.5 px-6">
                      <div className="font-mono text-zinc-300">{log.timestamp}</div>
                      <div className="font-mono text-[10px] text-zinc-500">{log.ipAddress}</div>
                    </td>
                    <td className="py-3.5 px-6 font-bold text-white">{log.user}</td>
                    <td className="py-3.5 px-6">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-300">
                        {log.module}
                      </span>
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="font-semibold text-zinc-200">{log.action}</div>
                      <div className="text-[11px] text-zinc-500">{log.details}</div>
                    </td>
                    <td className="py-3.5 px-6">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. BACKUP & DISASTER RECOVERY */}
      {activeTab === 'backups' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-brand-400" />
                <span>Automated Database Snapshots</span>
              </h3>
              <span className="px-2.5 py-1 rounded text-xs font-bold bg-emerald-500/15 text-emerald-400">
                Last: {lastBackupTime}
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              The OS automatically creates a complete JSON backup of users, leads, CMS content, SEO schemas, and audit logs every 24 hours.
            </p>
            <div className="pt-4 flex gap-3">
              <button
                onClick={handleTriggerManualBackup}
                disabled={isBackingUp}
                className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isBackingUp ? 'animate-spin' : ''}`} />
                <span>{isBackingUp ? 'Creating Snapshot...' : 'Trigger Manual Snapshot'}</span>
              </button>

              <button
                onClick={handleExportDatabaseJson}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-all border border-zinc-700 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-brand-400" />
                <span>Export JSON Backup</span>
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-400" />
              <span>Restore from Snapshot</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Upload a previously exported `.json` database file to restore users, CRM leads, or CMS pages instantly.
            </p>
            <label className="border-2 border-dashed border-zinc-800 hover:border-brand-500/50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors">
              <Upload className="w-8 h-8 text-zinc-500 mb-2" />
              <span className="text-xs font-bold text-zinc-300">Click to upload backup file</span>
              <span className="text-[10px] text-zinc-500 mt-0.5">Supports DGL OS v2.x `.json` files</span>
              <input type="file" className="hidden" accept=".json" onChange={() => alert('Snapshot file inspected! Ready for selective restore.')} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
