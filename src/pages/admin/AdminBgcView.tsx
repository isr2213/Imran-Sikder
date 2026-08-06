import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Video, 
  Image as ImageIcon, 
  Search, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Eye, 
  Globe, 
  ShieldCheck, 
  Check, 
  Play, 
  Layers, 
  Settings, 
  Upload, 
  FileText, 
  Share2, 
  HelpCircle,
  TrendingUp,
  ArrowUpRight,
  Clock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Zap,
  Home as HomeIcon,
  Layout,
  RefreshCw
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { 
  BgcData, 
  BgcVideoItem, 
  BgcImageItem, 
  getStoredBgcData, 
  saveStoredBgcData, 
  DEFAULT_BGC_DESCRIPTION,
  DEFAULT_HOMEPAGE_BGC,
  EXACT_HOMEPAGE_PARAGRAPH,
  HomepageBgcSettings
} from '../../data/bgcData';

export const AdminBgcView: React.FC = () => {
  const { token } = useAdminAuth();
  const [activeSubTab, setActiveSubTab] = useState<'homepage' | 'showcase_hero' | 'seo' | 'videos' | 'images' | 'metrics'>('homepage');
  const [bgcData, setBgcData] = useState<BgcData>(getStoredBgcData());
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState('');
  const [saveError, setSaveError] = useState('');

  // Video Gallery Modals & States
  const [videoSearch, setVideoSearch] = useState('');
  const [editingVideo, setEditingVideo] = useState<BgcVideoItem | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Image Gallery Modals & States
  const [editingImage, setEditingImage] = useState<BgcImageItem | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    if (!token) return;
    fetch('/api/admin/bgc', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.bgcData) {
          setBgcData(data.bgcData);
        }
      })
      .catch(() => {
        setBgcData(getStoredBgcData());
      });
  }, [token]);

  const handleSaveAll = async () => {
    setIsSaving(true);
    setSaveSuccess('');
    setSaveError('');

    // Save to local storage
    saveStoredBgcData(bgcData);

    try {
      if (token) {
        const res = await fetch('/api/admin/bgc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ bgcData })
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.error || 'Failed to save on server.');
        }
      }
      setSaveSuccess('BGC Management configuration saved successfully!');
      setTimeout(() => setSaveSuccess(''), 4000);
    } catch (err: any) {
      setSaveError(err.message || 'Error saving settings.');
    } finally {
      setIsSaving(false);
    }
  };

  // Helper for homepage state updates
  const updateHomepageSettings = (updates: Partial<HomepageBgcSettings>) => {
    const currentHp = bgcData.homepageBgc || DEFAULT_HOMEPAGE_BGC;
    setBgcData({
      ...bgcData,
      homepageBgc: {
        ...currentHp,
        ...updates
      }
    });
  };

  // Video Handler helpers
  const handleSaveVideoModal = () => {
    if (!editingVideo) return;
    let updatedVideos = [...bgcData.videos];
    const index = updatedVideos.findIndex(v => v.id === editingVideo.id);
    if (index >= 0) {
      updatedVideos[index] = editingVideo;
    } else {
      updatedVideos.unshift(editingVideo);
    }
    setBgcData({ ...bgcData, videos: updatedVideos });
    setShowVideoModal(false);
    setEditingVideo(null);
  };

  const handleDeleteVideo = (id: string) => {
    if (confirm('Are you sure you want to delete this video?')) {
      const updated = bgcData.videos.filter(v => v.id !== id);
      setBgcData({ ...bgcData, videos: updated });
    }
  };

  // Image Handler helpers
  const handleSaveImageModal = () => {
    if (!editingImage) return;
    let updatedImages = [...bgcData.images];
    const index = updatedImages.findIndex(i => i.id === editingImage.id);
    if (index >= 0) {
      updatedImages[index] = editingImage;
    } else {
      updatedImages.unshift(editingImage);
    }
    setBgcData({ ...bgcData, images: updatedImages });
    setShowImageModal(false);
    setEditingImage(null);
  };

  const handleDeleteImage = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      const updated = bgcData.images.filter(i => i.id !== id);
      setBgcData({ ...bgcData, images: updated });
    }
  };

  const filteredVideos = bgcData.videos.filter(v => 
    v.title.toLowerCase().includes(videoSearch.toLowerCase()) || 
    (v.category && v.category.toLowerCase().includes(videoSearch.toLowerCase()))
  );

  const hpConfig = bgcData.homepageBgc || DEFAULT_HOMEPAGE_BGC;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-brand-500/20 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 font-mono text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Business Growth Challenge OS</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">BGC Management & Showcase Hub</h2>
          <p className="text-xs text-zinc-400 mt-1">
            Independently manage Homepage "How BGC Works" section and Showcase Page content without editing code.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/#how-bgc-works"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white transition-all flex items-center gap-2"
          >
            <Eye className="w-4 h-4 text-brand-400" />
            <span>Preview Homepage</span>
          </a>

          <a
            href="/our-experience/business-growth-challenge"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white transition-all flex items-center gap-2"
          >
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            <span>Preview Showcase Page</span>
          </a>

          <button
            onClick={handleSaveAll}
            disabled={isSaving}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-400 hover:to-brand-300 text-black text-xs font-extrabold shadow-lg shadow-brand-500/20 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Saving Changes...' : 'Save BGC Settings'}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}

      {saveError && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold flex items-center gap-2 animate-fade-in">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 pb-3">
        {[
          { id: 'homepage', label: 'Homepage BGC Section', icon: HomeIcon },
          { id: 'showcase_hero', label: 'Showcase Page Hero', icon: Layout },
          { id: 'seo', label: 'SEO & Schema Markup', icon: Globe },
          { id: 'videos', label: `Video Gallery (${bgcData.videos.length})`, icon: Play },
          { id: 'images', label: `Image Gallery (${bgcData.images.length})`, icon: ImageIcon },
          { id: 'metrics', label: 'Success Stories & Metrics', icon: TrendingUp }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isActive 
                  ? 'bg-brand-500 text-black shadow-md shadow-brand-500/20' 
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: HOMEPAGE BGC SECTION CMS */}
      {activeSubTab === 'homepage' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            {/* Section Visibility & Badge */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-400" />
                  <span>Homepage Section Branding & Status</span>
                </h3>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hpConfig.enableSection}
                    onChange={e => updateHomepageSettings({ enableSection: e.target.checked })}
                    className="w-4 h-4 rounded text-brand-500 focus:ring-0 bg-zinc-900 border-zinc-700"
                  />
                  <span className="text-xs font-bold text-zinc-200">
                    {hpConfig.enableSection ? 'Section Enabled' : 'Section Disabled'}
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Pill-Shaped Badge Text
                </label>
                <input
                  type="text"
                  value={hpConfig.badgeText}
                  onChange={e => updateHomepageSettings({ badgeText: e.target.value })}
                  placeholder="⚡ SIGNATURE SOCIAL MEDIA SOLUTION"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
                <p className="text-[11px] text-zinc-500 mt-1">Displays in a glowing pill badge immediately above the main title.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Main Section Title / Heading
                </label>
                <input
                  type="text"
                  value={hpConfig.heading}
                  onChange={e => updateHomepageSettings({ heading: e.target.value })}
                  placeholder="How BGC Works"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-bold focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-zinc-300">
                    Main Description Paragraph
                  </label>
                  <button
                    onClick={() => updateHomepageSettings({ paragraph: EXACT_HOMEPAGE_PARAGRAPH })}
                    className="text-[11px] text-brand-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset to Exact Standard Paragraph</span>
                  </button>
                </div>
                <textarea
                  rows={6}
                  value={hpConfig.paragraph}
                  onChange={e => updateHomepageSettings({ paragraph: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono leading-relaxed focus:outline-none focus:border-brand-500"
                />
                <p className="text-[11px] text-zinc-500 mt-1">
                  Center-aligned on homepage with maximum width of ~900px.
                </p>
              </div>
            </div>

            {/* Video Module Configuration */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Video className="w-4 h-4 text-brand-400" />
                    <span>Homepage Video Module Controls</span>
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Hidden by default. Enable when you want to show a video immediately below the paragraph.
                  </p>
                </div>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hpConfig.enableVideoModule}
                    onChange={e => updateHomepageSettings({ enableVideoModule: e.target.checked })}
                    className="w-4 h-4 rounded text-brand-500 focus:ring-0 bg-zinc-900 border-zinc-700"
                  />
                  <span className={`text-xs font-extrabold ${hpConfig.enableVideoModule ? 'text-emerald-400' : 'text-zinc-500'}`}>
                    {hpConfig.enableVideoModule ? 'Video Enabled' : 'Video Hidden (Default)'}
                  </span>
                </label>
              </div>

              {hpConfig.enableVideoModule ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        Video Platform / Source Type
                      </label>
                      <select
                        value={hpConfig.videoType}
                        onChange={e => updateHomepageSettings({ videoType: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                      >
                        <option value="youtube">YouTube Embed</option>
                        <option value="mp4">MP4 Video URL / File</option>
                        <option value="webm">WebM Video URL / File</option>
                        <option value="vimeo">Vimeo Embed</option>
                        <option value="facebook">Facebook Video</option>
                        <option value="instagram">Instagram Reel</option>
                        <option value="tiktok">TikTok Video</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        Video URL / Embed Link
                      </label>
                      <input
                        type="text"
                        value={hpConfig.videoUrl}
                        onChange={e => updateHomepageSettings({ videoUrl: e.target.value })}
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">
                      Poster Thumbnail Image URL
                    </label>
                    <input
                      type="text"
                      value={hpConfig.videoThumbnail}
                      onChange={e => updateHomepageSettings({ videoThumbnail: e.target.value })}
                      placeholder="https://images.unsplash.com/photo-..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <label className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hpConfig.controls}
                        onChange={e => updateHomepageSettings({ controls: e.target.checked })}
                        className="w-3.5 h-3.5 text-brand-500 rounded bg-zinc-950 border-zinc-700"
                      />
                      <span className="text-xs text-zinc-200 font-bold">Controls</span>
                    </label>

                    <label className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hpConfig.fullscreen}
                        onChange={e => updateHomepageSettings({ fullscreen: e.target.checked })}
                        className="w-3.5 h-3.5 text-brand-500 rounded bg-zinc-950 border-zinc-700"
                      />
                      <span className="text-xs text-zinc-200 font-bold">Fullscreen</span>
                    </label>

                    <label className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hpConfig.autoplay}
                        onChange={e => updateHomepageSettings({ autoplay: e.target.checked })}
                        className="w-3.5 h-3.5 text-brand-500 rounded bg-zinc-950 border-zinc-700"
                      />
                      <span className="text-xs text-zinc-200 font-bold">Autoplay</span>
                    </label>

                    <label className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hpConfig.loop}
                        onChange={e => updateHomepageSettings({ loop: e.target.checked })}
                        className="w-3.5 h-3.5 text-brand-500 rounded bg-zinc-950 border-zinc-700"
                      />
                      <span className="text-xs text-zinc-200 font-bold">Loop Video</span>
                    </label>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => updateHomepageSettings({ videoUrl: '', videoThumbnail: '' })}
                      className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-bold border border-rose-500/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear Video Settings</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-xs text-zinc-400 text-center">
                  Video module is currently hidden on the homepage. Video files and scripts will NOT be loaded by user browsers, keeping PageSpeed at 100%.
                </div>
              )}
            </div>

            {/* Optional Call to Action Button */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-brand-400" />
                <span>Call to Action Button Options</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Button Label</label>
                  <input
                    type="text"
                    value={hpConfig.ctaButtonText || ''}
                    onChange={e => updateHomepageSettings({ ctaButtonText: e.target.value })}
                    placeholder="Explore BGC Showcase"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Button Destination Link</label>
                  <input
                    type="text"
                    value={hpConfig.ctaButtonLink || ''}
                    onChange={e => updateHomepageSettings({ ctaButtonLink: e.target.value })}
                    placeholder="/our-experience/business-growth-challenge"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Publishing Status */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Settings className="w-4 h-4 text-brand-400" />
                <span>Publishing Status</span>
              </h3>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Status State
                </label>
                <select
                  value={hpConfig.status}
                  onChange={e => updateHomepageSettings({ status: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                >
                  <option value="published">Live Published</option>
                  <option value="draft">Draft Mode (Hidden)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Scheduled Publish Date
                </label>
                <input
                  type="date"
                  value={hpConfig.scheduledPublishDate || ''}
                  onChange={e => updateHomepageSettings({ scheduledPublishDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="pt-3 border-t border-zinc-900 text-xs text-zinc-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span>Anchor Tag:</span>
                  <span className="font-mono text-brand-400 font-bold">#how-bgc-works</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Showcase Page:</span>
                  <a 
                    href="/our-experience/business-growth-challenge" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-brand-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Link</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SHOWCASE PAGE HERO */}
      {activeSubTab === 'showcase_hero' && (
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Layout className="w-4 h-4 text-brand-400" />
            <span>Showcase Page Main Heading & Description</span>
          </h3>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">
              Showcase Section Title
            </label>
            <input
              type="text"
              value={bgcData.sectionTitle}
              onChange={e => setBgcData({ ...bgcData, sectionTitle: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">
              Showcase Page Description Paragraphs
            </label>
            <textarea
              rows={8}
              value={bgcData.description}
              onChange={e => setBgcData({ ...bgcData, description: e.target.value })}
              className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* TAB 3: SEO & SCHEMA */}
      {activeSubTab === 'seo' && (
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand-400" />
            <span>SEO, Meta Tags & VideoObject Schema</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                SEO Title
              </label>
              <input
                type="text"
                value={bgcData.seoTitle}
                onChange={e => setBgcData({ ...bgcData, seoTitle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Canonical URL
              </label>
              <input
                type="text"
                value={bgcData.canonicalUrl}
                onChange={e => setBgcData({ ...bgcData, canonicalUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">
              Meta Description
            </label>
            <textarea
              rows={3}
              value={bgcData.metaDescription}
              onChange={e => setBgcData({ ...bgcData, metaDescription: e.target.value })}
              className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Open Graph Image URL
              </label>
              <input
                type="text"
                value={bgcData.openGraphImage}
                onChange={e => setBgcData({ ...bgcData, openGraphImage: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Keywords (Comma Separated)
              </label>
              <input
                type="text"
                value={bgcData.keywords}
                onChange={e => setBgcData({ ...bgcData, keywords: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">
              VideoObject JSON-LD Schema
            </label>
            <textarea
              rows={6}
              value={bgcData.videoObjectSchema}
              onChange={e => setBgcData({ ...bgcData, videoObjectSchema: e.target.value })}
              className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-brand-500"
            />
            <p className="text-[11px] text-zinc-500 mt-1">Structured data schema for Google Video Search indexing.</p>
          </div>
        </div>
      )}

      {/* TAB 4: VIDEO GALLERY */}
      {activeSubTab === 'videos' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={videoSearch}
                onChange={e => setVideoSearch(e.target.value)}
                placeholder="Search videos..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
              />
            </div>

            <button
              onClick={() => {
                setEditingVideo({
                  id: `video-${Date.now()}`,
                  type: 'youtube',
                  url: '',
                  title: '',
                  thumbnail: '',
                  isFeatured: false,
                  category: 'General',
                  displayOrder: bgcData.videos.length + 1,
                  published: true
                });
                setShowVideoModal(true);
              }}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Video</span>
            </button>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVideos.map(video => (
              <div key={video.id} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-3 relative group">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                  {video.thumbnail ? (
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600">
                      <Play className="w-8 h-8" />
                    </div>
                  )}
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-brand-400 uppercase">
                    {video.type}
                  </span>
                  {video.isFeatured && (
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-amber-500/90 text-black text-[10px] font-extrabold">
                      FEATURED
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">{video.title || 'Untitled Video'}</h4>
                  <p className="text-[11px] text-zinc-500 truncate mt-0.5">{video.url}</p>
                </div>

                <div className="pt-2 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-400">Order: #{video.displayOrder}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingVideo(video);
                        setShowVideoModal(true);
                      }}
                      className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeleteVideo(video.id)}
                      className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: IMAGE GALLERY */}
      {activeSubTab === 'images' && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setEditingImage({
                  id: `img-${Date.now()}`,
                  url: '',
                  alt: '',
                  title: '',
                  caption: '',
                  order: bgcData.images.length + 1
                });
                setShowImageModal(true);
              }}
              className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-extrabold text-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Image</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bgcData.images.map(image => (
              <div key={image.id} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-3">
                <div className="aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                  {image.url ? (
                    <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white">{image.title || 'Untitled Image'}</h4>
                  <p className="text-[11px] text-zinc-400 line-clamp-1">{image.caption || image.alt}</p>
                </div>

                <div className="pt-2 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-400">Order: #{image.order}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingImage(image);
                        setShowImageModal(true);
                      }}
                      className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EDIT VIDEO MODAL */}
      {showVideoModal && editingVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {editingVideo.id ? 'Edit Video Details' : 'Add Video'}
            </h3>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Video Title</label>
              <input
                type="text"
                value={editingVideo.title}
                onChange={e => setEditingVideo({ ...editingVideo, title: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Platform Type</label>
                <select
                  value={editingVideo.type}
                  onChange={e => setEditingVideo({ ...editingVideo, type: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
                >
                  <option value="youtube">YouTube</option>
                  <option value="mp4">MP4</option>
                  <option value="webm">WebM</option>
                  <option value="vimeo">Vimeo</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram Reel</option>
                  <option value="tiktok">TikTok</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Category</label>
                <input
                  type="text"
                  value={editingVideo.category || ''}
                  onChange={e => setEditingVideo({ ...editingVideo, category: e.target.value })}
                  placeholder="e.g. Overview, Demo"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Video URL / Embed Link</label>
              <input
                type="text"
                value={editingVideo.url}
                onChange={e => setEditingVideo({ ...editingVideo, url: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Thumbnail Image URL</label>
              <input
                type="text"
                value={editingVideo.thumbnail || ''}
                onChange={e => setEditingVideo({ ...editingVideo, thumbnail: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editingVideo.isFeatured || false}
                  onChange={e => setEditingVideo({ ...editingVideo, isFeatured: e.target.checked })}
                  className="w-4 h-4 text-brand-500 rounded bg-zinc-900 border-zinc-700"
                />
                <span className="text-xs text-zinc-300">Featured Video</span>
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-900">
              <button
                onClick={() => setShowVideoModal(false)}
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveVideoModal}
                className="px-5 py-2 rounded-xl bg-brand-500 text-black text-xs font-extrabold"
              >
                Save Video
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT IMAGE MODAL */}
      {showImageModal && editingImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {editingImage.id ? 'Edit Image Details' : 'Add Image'}
            </h3>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Image URL</label>
              <input
                type="text"
                value={editingImage.url}
                onChange={e => setEditingImage({ ...editingImage, url: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Image Title</label>
              <input
                type="text"
                value={editingImage.title || ''}
                onChange={e => setEditingImage({ ...editingImage, title: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Alt Text (SEO)</label>
              <input
                type="text"
                value={editingImage.alt}
                onChange={e => setEditingImage({ ...editingImage, alt: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Caption</label>
              <input
                type="text"
                value={editingImage.caption || ''}
                onChange={e => setEditingImage({ ...editingImage, caption: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-900">
              <button
                onClick={() => setShowImageModal(false)}
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveImageModal}
                className="px-5 py-2 rounded-xl bg-brand-500 text-black text-xs font-extrabold"
              >
                Save Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
