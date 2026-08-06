import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Menu, 
  X, 
  Search, 
  ExternalLink, 
  User, 
  Users, 
  FileText, 
  BookOpen, 
  Briefcase, 
  ArrowRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { AdminSidebar, AdminModuleTab } from '../../components/admin/AdminSidebar';
import { AdminDashboardView } from './AdminDashboardView';
import { AdminUsersRBACView } from './AdminUsersRBACView';
import { AdminCMSView } from './AdminCMSView';
import { AdminBlogGEOView } from './AdminBlogGEOView';
import { AdminPortfolioCaseStudyView } from './AdminPortfolioCaseStudyView';
import { AdminExperienceView } from './AdminExperienceView';
import { AdminBgcView } from './AdminBgcView';
import { AdminCRMView } from './AdminCRMView';
import { AdminSEOEngineView } from './AdminSEOEngineView';
import { AdminMediaFilesView } from './AdminMediaFilesView';
import { AdminAnalyticsMarketingView } from './AdminAnalyticsMarketingView';
import { AdminSystemSecurityView } from './AdminSystemSecurityView';
import { AdminAPIDocsView } from './AdminAPIDocsView';
import { DashboardStats } from '../../types/admin';

export const AdminPortal: React.FC = () => {
  const { isAuthenticated, user, token, login, logout, requiresTwoFactor, pendingEmail } = useAdminAuth();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<AdminModuleTab>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Global Search Modal state (Cmd+K)
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dashboard Stats
  const [stats, setStats] = useState<DashboardStats | null>(null);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('israt@digitalgrowltd.com');
  const [loginPassword, setLoginPassword] = useState('EnterpriseAdmin2026!');
  const [totpCode, setTotpCode] = useState('7951');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const fetchStats = async () => {
    if (!token) return;
    try {
      const res = await fetch('/api/admin/stats', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (isAuthenticated && token) {
      fetchStats();
      const timer = setInterval(fetchStats, 60000);
      return () => clearInterval(timer);
    }
  }, [isAuthenticated, token]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    try {
      const res = await login(
        requiresTwoFactor ? (pendingEmail || loginEmail) : loginEmail, 
        loginPassword, 
        false, 
        requiresTwoFactor ? totpCode : undefined
      );
      if (!res.success && !res.requiresTwoFactor) {
        setLoginError(res.error || 'Invalid enterprise credentials. Use default admin account.');
      }
    } catch {
      setLoginError('Login failed. Check server status.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleQuickAction = (action: string) => {
    if (action === 'NEW_LEAD') {
      setActiveTab('crm');
    } else if (action === 'NEW_BLOG') {
      setActiveTab('blogs');
    } else if (action === 'NEW_PORTFOLIO') {
      setActiveTab('portfolio');
    } else if (action === 'SECURITY_LOGS') {
      setActiveTab('system');
    } else if (action === 'PROFILE') {
      setActiveTab('users');
    } else if (action === 'TRIGGER_BACKUP') {
      setActiveTab('system');
    }
  };

  // IF NOT AUTHENTICATED: Show High-Security Enterprise Login Modal
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-amber-500 flex items-center justify-center font-black text-white text-xl shadow-xl shadow-brand-500/20">
              D
            </div>
            <span className="text-2xl font-black text-white tracking-tight">Digital Grower Ltd.</span>
          </div>
          <h2 className="text-center text-2xl font-extrabold text-white">
            Enterprise OS & Admin Portal
          </h2>
          <p className="mt-2 text-center text-xs text-zinc-400">
            ISO 27001 Secure Access • Protected by TLS 1.3 & 2FA TOTP
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10 px-4">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl shadow-2xl py-8 px-6 sm:px-10 backdrop-blur-xl">
            {loginError && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {!requiresTwoFactor ? (
                <>
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">
                      Enterprise Email
                    </label>
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={e => setLoginEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-zinc-300">
                        Password / Master JWT
                      </label>
                      <span className="text-[10px] text-brand-400">Default Demo Active</span>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={e => setLoginPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-zinc-300">
                      Two-Factor Authentication Code
                    </label>
                    <span className="text-[10px] text-brand-400 font-bold">2FA Active</span>
                  </div>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={totpCode}
                    onChange={e => setTotpCode(e.target.value)}
                    placeholder="Enter code (e.g. 7951)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-center font-mono tracking-widest text-lg focus:outline-none focus:border-brand-500 transition-colors"
                  />
                  <p className="text-[10px] text-zinc-400 mt-1">
                    Enter your 2FA verification code (Default set to <strong className="text-brand-400">7951</strong>).
                  </p>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-brand-500/20 text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 focus:outline-none transition-all"
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    {isLoggingIn 
                      ? 'Authenticating...' 
                      : requiresTwoFactor 
                        ? 'Verify 2FA Code' 
                        : 'Sign in to Enterprise OS'}
                  </span>
                </button>
              </div>
            </form>

            {/* Quick Demo Credentials Footer */}
            <div className="mt-6 pt-5 border-t border-zinc-800/80">
              <div className="text-[11px] text-zinc-400 text-center mb-2 font-bold uppercase tracking-wider">
                SaaS Demo Credentials
              </div>
              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300 space-y-1 font-mono">
                <div>Email: <strong className="text-brand-400">israt@digitalgrowltd.com</strong></div>
                <div>Password: <strong className="text-brand-400">EnterpriseAdmin2026!</strong></div>
                <div>2FA Code: <strong className="text-brand-400">7951</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED: SHOW FULL ENTERPRISE ADMIN PORTAL
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-brand-500 selection:text-white font-sans">
      {/* 1. Header */}
      <AdminHeader
        onOpenSearch={() => setShowSearchModal(true)}
        onQuickAction={handleQuickAction}
        stats={stats}
      />

      {/* Mobile Sidebar Toggle Button */}
      <div className="lg:hidden bg-zinc-950 border-b border-zinc-900 px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300"
        >
          <Menu className="w-4 h-4 text-brand-400" />
          <span>Navigation Menu</span>
        </button>
        <span className="text-xs font-bold text-brand-400 capitalize">
          {activeTab.replace('-', ' ')}
        </span>
      </div>

      {/* 2. Main Flex Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <AdminSidebar
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
          isOpen={isSidebarOpen}
          onCloseMobile={() => setIsSidebarOpen(false)}
        />

        {/* Dynamic Main Module Canvas */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'overview' && (
              <AdminDashboardView
                stats={stats}
                onNavigateTab={(tab) => setActiveTab(tab)}
                onTriggerAction={handleQuickAction}
              />
            )}
            {activeTab === 'users' && <AdminUsersRBACView />}
            {activeTab === 'cms' && <AdminCMSView />}
            {activeTab === 'bgc' && <AdminBgcView />}
            {activeTab === 'blogs' && <AdminBlogGEOView />}
            {activeTab === 'portfolio' && <AdminPortfolioCaseStudyView />}
            {activeTab === 'experience' && <AdminExperienceView />}
            {activeTab === 'crm' && <AdminCRMView />}
            {activeTab === 'seo' && <AdminSEOEngineView />}
            {activeTab === 'media' && <AdminMediaFilesView />}
            {activeTab === 'analytics' && <AdminAnalyticsMarketingView />}
            {activeTab === 'system' && <AdminSystemSecurityView />}
            {activeTab === 'api' && <AdminAPIDocsView />}
          </div>
        </main>
      </div>

      {/* 3. Global Search Modal (Cmd+K / Ctrl+K) */}
      {showSearchModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
              <Search className="w-5 h-5 text-brand-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search CRM leads, CMS pages, blogs, schemas, or enterprise users..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-zinc-500"
              />
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-zinc-500 hover:text-white transition-colors text-xs font-bold px-2 py-1 rounded bg-zinc-800"
              >
                ESC
              </button>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto space-y-2">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 mb-2">
                Quick Results & Navigation
              </div>

              <button
                onClick={() => {
                  setActiveTab('crm');
                  setShowSearchModal(false);
                }}
                className="w-full text-left p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800/80 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-brand-400" />
                  <div>
                    <div className="text-xs font-bold text-white">Enterprise CRM Lead Pipeline</div>
                    <div className="text-[10px] text-zinc-400">View recent corporate inquiries & submissions</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('seo');
                  setShowSearchModal(false);
                }}
                className="w-full text-left p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800/80 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-xs font-bold text-white">15 Schema.org JSON-LD Editor</div>
                    <div className="text-[10px] text-zinc-400">Inspect AI Overviews citations & EEAT tags</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('cms');
                  setShowSearchModal(false);
                }}
                className="w-full text-left p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800/80 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="text-xs font-bold text-white">CMS Content & Page Management</div>
                    <div className="text-[10px] text-zinc-400">Homepage, Services, Industry & Legal pages</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
