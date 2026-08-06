import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Search, 
  ExternalLink, 
  Edit3, 
  CheckCircle2, 
  Clock, 
  Eye, 
  Save, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { CmsPageItem } from '../../types/admin';
import { useAdminAuth } from '../../context/AdminAuthContext';

export const AdminCMSView: React.FC = () => {
  const { token } = useAdminAuth();
  const [pages, setPages] = useState<CmsPageItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [selectedPage, setSelectedPage] = useState<CmsPageItem | null>(null);

  // Editable Form fields
  const [editTitle, setEditTitle] = useState('');
  const [editSlug, setEditSlug] = useState('');
  const [editMetaTitle, setEditMetaTitle] = useState('');
  const [editMetaDescription, setEditMetaDescription] = useState('');
  const [editStatus, setEditStatus] = useState<'published' | 'draft' | 'review'>('published');
  const [isSaving, setIsSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchCmsPages = async () => {
    try {
      const res = await fetch('/api/admin/cms', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setPages(data.pages || []);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    fetchCmsPages();
  }, [token]);

  const handleOpenEdit = (page: CmsPageItem) => {
    setSelectedPage(page);
    setEditTitle(page.title);
    setEditSlug(page.slug);
    setEditMetaTitle(page.metaTitle);
    setEditMetaDescription(page.metaDescription);
    setEditStatus(page.status);
    setSuccessMsg('');
  };

  const handleSavePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPage) return;

    setIsSaving(true);
    setSuccessMsg('');
    try {
      const res = await fetch(`/api/admin/cms/${selectedPage.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: editTitle,
          slug: editSlug,
          metaTitle: editMetaTitle,
          metaDescription: editMetaDescription,
          status: editStatus
        })
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg('Page SEO & CMS details updated successfully!');
        fetchCmsPages();
      }
    } catch {
      // ignore
    } finally {
      setIsSaving(false);
    }
  };

  const filteredPages = pages.filter(p => {
    const matchesSearch = 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.metaTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || p.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Enterprise CMS & Page Governance</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Manage Website Pages, Menus, Footers, SEO Meta Titles, and EEAT Schema definitions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search CMS pages or URLs..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 w-60"
            />
          </div>

          <select
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
            className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-bold focus:outline-none focus:border-brand-500"
          >
            <option value="ALL">All Content Types</option>
            <option value="page">Core Pages</option>
            <option value="landing">GEO Landing Pages</option>
            <option value="legal">Legal & Trust Center</option>
          </select>
        </div>
      </div>

      {/* Pages Table */}
      <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-6">Page Name / Slug</th>
                <th className="py-4 px-6">SEO Title & EEAT Meta</th>
                <th className="py-4 px-6">Type</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Views</th>
                <th className="py-4 px-6">Modified</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-xs">
              {filteredPages.map(page => (
                <tr key={page.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-bold text-white text-sm">{page.title}</div>
                    <a
                      href={page.slug}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-brand-400 hover:underline inline-flex items-center gap-1 font-mono mt-0.5"
                    >
                      <span>{page.slug}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="py-4 px-6 max-w-xs">
                    <div className="font-semibold text-zinc-200 truncate">{page.metaTitle}</div>
                    <div className="text-[11px] text-zinc-500 truncate">{page.metaDescription}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-zinc-800 text-zinc-300">
                      {page.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 ${
                        page.status === 'published'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="capitalize">{page.status}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6 font-mono text-zinc-300">
                    {(page.views / 1000).toFixed(1)}k
                  </td>
                  <td className="py-4 px-6 text-zinc-400">
                    <div>{page.lastModified}</div>
                    <div className="text-[10px] text-zinc-500">by {page.modifiedBy}</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleOpenEdit(page)}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-brand-400" />
                      <span>Edit SEO & Page</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* EDIT MODAL */}
      {selectedPage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-xl w-full shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <h3 className="text-lg font-bold text-white">Edit CMS Page & SEO Meta</h3>
                <p className="text-xs text-zinc-400">{selectedPage.title} ({selectedPage.slug})</p>
              </div>
              <button
                onClick={() => setSelectedPage(null)}
                className="text-zinc-500 hover:text-white transition-colors text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSavePage} className="mt-4 space-y-4">
              {successMsg && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{successMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Page Title</label>
                <input
                  type="text"
                  required
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">URL Slug</label>
                <input
                  type="text"
                  required
                  value={editSlug}
                  onChange={e => setEditSlug(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">SEO Meta Title (Title Tag)</label>
                <input
                  type="text"
                  required
                  value={editMetaTitle}
                  onChange={e => setEditMetaTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
                <span className="text-[10px] text-zinc-500 mt-1 block">
                  Length: {editMetaTitle.length}/60 characters (Optimal for Google SERP)
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">SEO Meta Description</label>
                <textarea
                  rows={3}
                  required
                  value={editMetaDescription}
                  onChange={e => setEditMetaDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
                <span className="text-[10px] text-zinc-500 mt-1 block">
                  Length: {editMetaDescription.length}/160 characters
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Page Status</label>
                <select
                  value={editStatus}
                  onChange={e => setEditStatus(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                >
                  <option value="published">Published (Live & Indexable)</option>
                  <option value="draft">Draft (Hidden from Googlebot)</option>
                  <option value="review">Under Review</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setSelectedPage(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold hover:bg-zinc-700"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-lg shadow-brand-500/20 inline-flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
