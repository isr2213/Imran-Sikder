import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Plus, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Search, 
  Code, 
  Save, 
  Tag, 
  Sparkles,
  User
} from 'lucide-react';
import { BlogPostItem } from '../../types/admin';
import { useAdminAuth } from '../../context/AdminAuthContext';

export const AdminBlogGEOView: React.FC = () => {
  const { token, user } = useAdminAuth();
  const [blogs, setBlogs] = useState<BlogPostItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'published' | 'draft' | 'scheduled'>('ALL');

  // New/Edit Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formSlug, setFormSlug] = useState('');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formCategory, setFormCategory] = useState('AI Search & GEO');
  const [formTags, setFormTags] = useState('GEO, AI Overviews, Schema.org');
  const [formStatus, setFormStatus] = useState<'published' | 'draft' | 'scheduled'>('draft');
  const [formFeaturedImg, setFormFeaturedImg] = useState('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200');
  const [formSchemaJsonLd, setFormSchemaJsonLd] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/blogs', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(data.blogs || []);
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [token]);

  const handleOpenCreate = () => {
    setEditingId(null);
    setFormTitle('');
    setFormSlug('');
    setFormExcerpt('');
    setFormCategory('AI Search & GEO');
    setFormTags('GEO, AI Overviews, Schema.org');
    setFormStatus('draft');
    setFormFeaturedImg('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200');
    setFormSchemaJsonLd(JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Enterprise GEO Strategy 2026",
      "author": {
        "@type": "Person",
        "name": user?.name || "Engr. MD Israt"
      }
    }, null, 2));
    setIsModalOpen(true);
  };

  const handleOpenEdit = (blog: BlogPostItem) => {
    setEditingId(blog.id);
    setFormTitle(blog.title);
    setFormSlug(blog.slug);
    setFormExcerpt(blog.excerpt);
    setFormCategory(blog.category);
    setFormTags(blog.tags.join(', '));
    setFormStatus(blog.status);
    setFormFeaturedImg(blog.featuredImage);
    setFormSchemaJsonLd(blog.schemaJsonLd);
    setIsModalOpen(true);
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const tagsArray = formTags.split(',').map(t => t.trim()).filter(Boolean);

    try {
      const endpoint = editingId ? `/api/admin/blogs/${editingId}` : '/api/admin/blogs';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: formTitle,
          slug: formSlug || formTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
          excerpt: formExcerpt,
          category: formCategory,
          tags: tagsArray,
          status: formStatus,
          featuredImage: formFeaturedImg,
          schemaJsonLd: formSchemaJsonLd
        })
      });

      const data = await res.json();
      if (data.success) {
        setIsModalOpen(false);
        fetchBlogs();
      }
    } catch {
      // ignore
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await fetch(`/api/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchBlogs();
    } catch {
      // ignore
    }
  };

  const filteredBlogs = blogs.filter(b => {
    const matchesSearch = 
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'ALL' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Enterprise Blog & GEO Content Hub</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Publish high-authority E-E-A-T articles with 15-point Schema.org JSON-LD citations for Google AI Overviews.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenCreate}
            className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>+ Create Blog Article</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search blogs, keywords, tags..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 w-64"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400 font-bold">Status:</span>
          {(['ALL', 'published', 'draft', 'scheduled'] as const).map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                statusFilter === status
                  ? 'bg-brand-500 text-white'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map(blog => (
          <div
            key={blog.id}
            className="rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-xl overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-44 overflow-hidden">
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase shadow-lg ${
                      blog.status === 'published'
                        ? 'bg-emerald-500 text-white'
                        : blog.status === 'scheduled'
                        ? 'bg-blue-500 text-white'
                        : 'bg-amber-500 text-white'
                    }`}
                  >
                    {blog.status}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-zinc-950/80 backdrop-blur-md text-brand-400 border border-zinc-800">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                  <User className="w-3.5 h-3.5 text-brand-400" />
                  <span className="font-semibold text-zinc-300">{blog.author}</span>
                  <span>•</span>
                  <span>{blog.publishDate}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {blog.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-800 text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-5 py-3 border-t border-zinc-800/80 bg-zinc-950/40 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">
                {(blog.views / 1000).toFixed(1)}k reads
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(blog)}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  title="Edit Blog Post & Schema"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                  title="Delete Post"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL FOR CREATE / EDIT BLOG */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-400" />
                <h3 className="text-lg font-bold text-white">
                  {editingId ? 'Edit Blog & GEO Schema' : 'Create Enterprise Blog Post'}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveBlog} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Article Headline / Title</label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  placeholder="e.g. How GEO Dominates Google AI Overviews in 2026"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">URL Slug</label>
                  <input
                    type="text"
                    value={formSlug}
                    onChange={e => setFormSlug(e.target.value)}
                    placeholder="e.g. how-geo-dominates-google-ai-overviews"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Category</label>
                  <input
                    type="text"
                    required
                    value={formCategory}
                    onChange={e => setFormCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Excerpt / Meta Description</label>
                <textarea
                  rows={2}
                  required
                  value={formExcerpt}
                  onChange={e => setFormExcerpt(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  value={formTags}
                  onChange={e => setFormTags(e.target.value)}
                  placeholder="GEO, AI Overviews, Schema.org, Enterprise SEO"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Featured Image URL</label>
                  <input
                    type="url"
                    value={formFeaturedImg}
                    onChange={e => setFormFeaturedImg(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Publishing Status</label>
                  <select
                    value={formStatus}
                    onChange={e => setFormStatus(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                  >
                    <option value="published">Published (Live instantly)</option>
                    <option value="draft">Draft (Editorial review)</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-brand-400" />
                    <span>Schema.org JSON-LD Editor (AI Search & GEO Citation Engine)</span>
                  </label>
                  <span className="text-[10px] text-zinc-500">Googlebot / Perplexity verified</span>
                </div>
                <textarea
                  rows={4}
                  value={formSchemaJsonLd}
                  onChange={e => setFormSchemaJsonLd(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-emerald-400 font-mono text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold hover:bg-zinc-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-lg shadow-brand-500/20 inline-flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{isSaving ? 'Saving...' : 'Save Blog Post'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
