import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  ShieldCheck, 
  LogOut, 
  Plus, 
  Globe, 
  RefreshCw, 
  User, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  ChevronDown
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { DashboardStats } from '../../types/admin';

interface AdminHeaderProps {
  onOpenSearch: () => void;
  onQuickAction: (action: string) => void;
  stats?: DashboardStats | null;
}

const BRANCHES = [
  'Dhaka HQ (Banani)',
  'USA North America Desk (NYC)',
  'UK & Europe Desk (London)',
  'UAE Dubai Regional Desk',
  'Singapore APAC Hub',
  'Sydney Australia Desk'
];

export const AdminHeader: React.FC<AdminHeaderProps> = ({ onOpenSearch, onQuickAction, stats }) => {
  const { user, logout, logoutAllDevices, activeBranch, setActiveBranch } = useAdminAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showBranchMenu, setShowBranchMenu] = useState(false);
  const [showQuickActionMenu, setShowQuickActionMenu] = useState(false);

  // Keyboard shortcut Ctrl+K / Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-900 px-4 sm:px-6 py-3 flex items-center justify-between shadow-xl">
      {/* Left: Brand / Branch Hub Selector */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-600 to-amber-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-brand-500/20">
            D
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-sm sm:text-base tracking-tight">DGL IT Enterprise OS</span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold bg-brand-500/10 text-brand-400 border border-brand-500/30 rounded-full">
                SaaS v2.4
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden md:block">ISO 27001 Certified • Production-Ready Platform</p>
          </div>
        </div>

        {/* Multi-Branch Switcher */}
        <div className="relative hidden lg:block ml-4">
          <button
            onClick={() => setShowBranchMenu(!showBranchMenu)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-brand-400" />
            <span>{activeBranch}</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
          </button>

          {showBranchMenu && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-2 z-50">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500 border-b border-zinc-800">
                Switch Enterprise Region / Branch
              </div>
              {BRANCHES.map(branch => (
                <button
                  key={branch}
                  onClick={() => {
                    setActiveBranch(branch);
                    setShowBranchMenu(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-zinc-800/80 transition-colors ${
                    activeBranch === branch ? 'text-brand-400 font-bold bg-brand-500/10' : 'text-zinc-300'
                  }`}
                >
                  <span>{branch}</span>
                  {activeBranch === branch && <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Middle: Global Search Trigger (Cmd+K) */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 text-zinc-400 text-xs transition-all group"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-zinc-500 group-hover:text-brand-400 transition-colors" />
            <span>Search global leads, CMS pages, blogs, users...</span>
          </div>
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right: Quick Actions, Notifications, User Menu */}
      <div className="flex items-center gap-3">
        {/* Quick Action Button */}
        <div className="relative">
          <button
            onClick={() => setShowQuickActionMenu(!showQuickActionMenu)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Create</span>
          </button>

          {showQuickActionMenu && (
            <div className="absolute top-full right-0 mt-2 w-52 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-2 z-50">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                Enterprise Quick Actions
              </div>
              <button
                onClick={() => {
                  onQuickAction('NEW_LEAD');
                  setShowQuickActionMenu(false);
                }}
                className="w-full text-left px-3 py-2 text-xs text-zinc-200 hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <Plus className="w-3.5 h-3.5 text-brand-400" />
                <span>+ New CRM Lead</span>
              </button>
              <button
                onClick={() => {
                  onQuickAction('NEW_BLOG');
                  setShowQuickActionMenu(false);
                }}
                className="w-full text-left px-3 py-2 text-xs text-zinc-200 hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <Plus className="w-3.5 h-3.5 text-brand-400" />
                <span>+ Create Blog & GEO Schema</span>
              </button>
              <button
                onClick={() => {
                  onQuickAction('NEW_PORTFOLIO');
                  setShowQuickActionMenu(false);
                }}
                className="w-full text-left px-3 py-2 text-xs text-zinc-200 hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <Plus className="w-3.5 h-3.5 text-brand-400" />
                <span>+ Add Portfolio & Case Study</span>
              </button>
              <div className="my-1 border-t border-zinc-800"></div>
              <button
                onClick={() => {
                  onQuickAction('TRIGGER_BACKUP');
                  setShowQuickActionMenu(false);
                }}
                className="w-full text-left px-3 py-2 text-xs text-brand-400 hover:bg-zinc-800 transition-colors flex items-center gap-2 font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Trigger Database Snapshot</span>
              </button>
            </div>
          )}
        </div>

        {/* Notifications Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all relative"
          >
            <Bell className="w-4 h-4" />
            {(stats?.unreadNotificationsCount || 3) > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">
                {stats?.unreadNotificationsCount || 3}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-3 z-50">
              <div className="px-4 pb-2 border-b border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-bold text-white">System & Enterprise Notifications</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-brand-500/10 text-brand-400">
                  Live Stream
                </span>
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-zinc-800/60">
                <div className="p-3.5 hover:bg-zinc-800/50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>New Enterprise Lead: Syed Al-Mansoor</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">Gulf PropTech Dubai inquired via WhatsApp Regional Desk.</p>
                  <span className="text-[10px] text-zinc-500 mt-1 block">14 mins ago • Lead CRM</span>
                </div>
                <div className="p-3.5 hover:bg-zinc-800/50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <ShieldCheck className="w-4 h-4 text-brand-400" />
                    <span>Automated Snapshot Success</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">Production database backup-auto-2026-08-02.json saved (14.2 MB).</p>
                  <span className="text-[10px] text-zinc-500 mt-1 block">2 hours ago • System Automation</span>
                </div>
                <div className="p-3.5 hover:bg-zinc-800/50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Schema JSON-LD Verification</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">Google AI Overviews citation index pinged for 15 pages.</p>
                  <span className="text-[10px] text-zinc-500 mt-1 block">5 hours ago • SEO GEO Engine</span>
                </div>
              </div>
              <div className="px-4 pt-2 border-t border-zinc-800 text-center">
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-xs font-bold text-brand-400 hover:text-brand-300"
                >
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Badge & Menu */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-4 h-4 text-brand-400" />
              )}
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold text-white leading-tight">{user?.name || 'Administrator'}</div>
              <div className="text-[10px] text-brand-400 font-semibold">{user?.role || 'Super Admin'}</div>
            </div>
          </button>

          {showProfileMenu && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-2 z-50">
              <div className="px-4 py-2.5 border-b border-zinc-800">
                <div className="text-xs font-bold text-white">{user?.name || 'Enterprise Admin'}</div>
                <div className="text-[11px] text-zinc-400">{user?.email || 'admin@digitalgrowltd.com'}</div>
                <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  <span>2FA TOTP Verified</span>
                </div>
              </div>

              <div className="p-2">
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    onQuickAction('PROFILE');
                  }}
                  className="w-full text-left px-3 py-2 text-xs text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors flex items-center gap-2"
                >
                  <User className="w-4 h-4 text-zinc-400" />
                  <span>My Enterprise Profile</span>
                </button>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    onQuickAction('SECURITY_LOGS');
                  }}
                  className="w-full text-left px-3 py-2 text-xs text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Clock className="w-4 h-4 text-zinc-400" />
                  <span>Activity & Audit Trail</span>
                </button>
              </div>

              <div className="border-t border-zinc-800 p-2">
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    logout();
                  }}
                  className="w-full text-left px-3 py-2 text-xs text-amber-400 hover:bg-zinc-800 rounded-lg transition-colors flex items-center gap-2 font-semibold"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout Device</span>
                </button>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    logoutAllDevices();
                  }}
                  className="w-full text-left px-3 py-1.5 text-[11px] text-red-400 hover:bg-red-500/10 rounded-lg transition-colors mt-1 font-semibold"
                >
                  Logout From All Devices
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
