import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  BookOpen, 
  Briefcase, 
  UserCheck, 
  Search, 
  Image, 
  BarChart3, 
  ShieldCheck, 
  Code, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

export type AdminModuleTab = 
  | 'overview'
  | 'bgc'
  | 'users'
  | 'cms'
  | 'blogs'
  | 'portfolio'
  | 'experience'
  | 'crm'
  | 'seo'
  | 'media'
  | 'analytics'
  | 'system'
  | 'api';

interface AdminSidebarProps {
  activeTab: AdminModuleTab;
  onSelectTab: (tab: AdminModuleTab) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  id: AdminModuleTab;
  label: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
  requiredPermission?: string;
}

const NAV_GROUPS: { title: string; items: NavItem[] }[] = [
  {
    title: 'Core SaaS Dashboard',
    items: [
      { id: 'overview', label: 'Overview & Statistics', icon: LayoutDashboard }
    ]
  },
  {
    title: 'Content & CMS OS',
    items: [
      { id: 'cms', label: 'Pages & Menus (CMS)', icon: FileText, badge: '14 Pages', requiredPermission: 'cms.edit' },
      { id: 'bgc', label: 'BGC Management', icon: Sparkles, badge: 'BGC OS', badgeColor: 'bg-brand-500/20 text-brand-400', requiredPermission: 'cms.edit' },
      { id: 'experience', label: 'Our Experience (Clients)', icon: Sparkles, badge: 'NEW', badgeColor: 'bg-amber-500/20 text-amber-400', requiredPermission: 'portfolio.manage' },
      { id: 'blogs', label: 'Blog & GEO Articles', icon: BookOpen, badge: '3 Posts', requiredPermission: 'blog.publish' },
      { id: 'portfolio', label: 'Technical Portfolio', icon: Briefcase, requiredPermission: 'portfolio.manage' }
    ]
  },
  {
    title: 'CRM & Growth Hub',
    items: [
      { id: 'crm', label: 'Enterprise Lead CRM', icon: UserCheck, badge: 'Live', badgeColor: 'bg-emerald-500/20 text-emerald-400', requiredPermission: 'crm.manage' },
      { id: 'seo', label: 'SEO & AI GEO Engine', icon: Search, badge: 'Schema', badgeColor: 'bg-brand-500/20 text-brand-400', requiredPermission: 'seo.manage' }
    ]
  },
  {
    title: 'Assets & Intelligence',
    items: [
      { id: 'media', label: 'Media Library & Files', icon: Image, requiredPermission: 'media.upload' },
      { id: 'analytics', label: 'Analytics & Marketing', icon: BarChart3, badge: 'GA4 + GSC', requiredPermission: 'analytics.view' }
    ]
  },
  {
    title: 'Enterprise Governance',
    items: [
      { id: 'users', label: 'Users & RBAC Roles', icon: Users, badge: '13 Roles', requiredPermission: 'users.manage' },
      { id: 'system', label: 'Security, Automation & Logs', icon: ShieldCheck, badge: 'ISO 27001', badgeColor: 'bg-blue-500/20 text-blue-400', requiredPermission: 'security.audit' },
      { id: 'api', label: 'REST API & Webhooks', icon: Code, badge: 'Swagger', requiredPermission: 'api.webhooks' }
    ]
  }
];

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, onSelectTab, isOpen, onCloseMobile }) => {
  const { user, hasPermission } = useAdminAuth();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-64 bg-zinc-950 border-r border-zinc-900/80 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          {NAV_GROUPS.map(group => {
            // Filter items by RBAC permission
            const visibleItems = group.items.filter(item => {
              if (!item.requiredPermission) return true;
              return hasPermission(item.requiredPermission) || user?.role === 'Super Admin';
            });

            if (visibleItems.length === 0) return null;

            return (
              <div key={group.title}>
                <div className="px-3 mb-2 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">
                  {group.title}
                </div>
                <nav className="space-y-1">
                  {visibleItems.map(item => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSelectTab(item.id);
                          onCloseMobile();
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                          isActive
                            ? 'bg-brand-500/15 text-brand-400 border border-brand-500/30 shadow-lg shadow-brand-500/5'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className={`w-4 h-4 transition-colors ${
                              isActive ? 'text-brand-400' : 'text-zinc-500 group-hover:text-zinc-300'
                            }`}
                          />
                          <span>{item.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {item.badge && (
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                item.badgeColor || 'bg-zinc-800 text-zinc-300'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                          <ChevronRight
                            className={`w-3.5 h-3.5 transition-transform ${
                              isActive ? 'text-brand-400 translate-x-0.5' : 'text-zinc-600 opacity-0 group-hover:opacity-100'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            );
          })}
        </div>

        {/* Footer: Public Website & Status */}
        <div className="p-3 border-t border-zinc-900 bg-zinc-950/60">
          <Link
            to="/"
            target="_blank"
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-200 transition-all group mb-2"
          >
            <span>View Live Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-brand-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <div className="px-2 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SaaS Cluster Online</span>
            </span>
            <span className="font-mono text-[10px] text-zinc-600">v2.4.0-ENT</span>
          </div>
        </div>
      </aside>
    </>
  );
};
