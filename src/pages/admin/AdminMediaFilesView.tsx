import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Upload, 
  Folder, 
  Search, 
  Trash2, 
  Copy, 
  CheckCircle2, 
  FileText, 
  Video, 
  ShieldCheck,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface MediaAsset {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'pdf' | 'svg';
  size: string;
  folder: string;
  uploadedAt: string;
  webpCompressed: boolean;
}

export const AdminMediaFilesView: React.FC = () => {
  const [assets, setAssets] = useState<MediaAsset[]>([
    { id: '1', name: 'dgl-hero-banner-2026.webp', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200', type: 'image', size: '184 KB', folder: 'Home Banners', uploadedAt: '2026-08-01', webpCompressed: true },
    { id: '2', name: 'enterprise-software-architecture.webp', url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800', type: 'image', size: '210 KB', folder: 'Services', uploadedAt: '2026-07-28', webpCompressed: true },
    { id: '3', name: 'dgl-company-profile-2026.pdf', url: '/assets/docs/dgl-company-profile-2026.pdf', type: 'pdf', size: '4.2 MB', folder: 'Corporate Documents', uploadedAt: '2026-07-15', webpCompressed: false },
    { id: '4', name: 'dhaka-banani-hq-office.webp', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000', type: 'image', size: '290 KB', folder: 'Offices & Team', uploadedAt: '2026-07-10', webpCompressed: true },
    { id: '5', name: 'dgl-enterprise-logo.png', url: '/logo.png', type: 'image', size: '407 KB', folder: 'Brand Assets', uploadedAt: '2026-08-03', webpCompressed: false }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('ALL');
  const [autoWebpCompression, setAutoWebpCompression] = useState(true);
  const [copyMsg, setCopyMsg] = useState('');

  const folders = ['ALL', 'Home Banners', 'Services', 'Corporate Documents', 'Offices & Team', 'Brand Assets'];

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopyMsg(`Copied: ${url}`);
    setTimeout(() => setCopyMsg(''), 2500);
  };

  const handleDeleteAsset = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this media asset?')) return;
    setAssets(assets.filter(a => a.id !== id));
  };

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newAsset: MediaAsset = {
      id: String(Date.now()),
      name: file.name.replace(/\.[^/.]+$/, "") + (autoWebpCompression ? '.webp' : '.jpg'),
      url: URL.createObjectURL(file),
      type: file.type.includes('pdf') ? 'pdf' : file.type.includes('svg') ? 'svg' : 'image',
      size: `${(file.size / 1024).toFixed(0)} KB`,
      folder: selectedFolder === 'ALL' ? 'General Uploads' : selectedFolder,
      uploadedAt: new Date().toISOString().split('T')[0],
      webpCompressed: autoWebpCompression
    };

    setAssets([newAsset, ...assets]);
  };

  const filteredAssets = assets.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFolder = selectedFolder === 'ALL' || a.folder === selectedFolder;
    return matchesSearch && matchesFolder;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Enterprise Media Library & CDN File Manager</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Centralized digital asset management with automated WebP/AVIF lossless compression and folder governance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="cursor-pointer px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2">
            <Upload className="w-4 h-4" />
            <span>+ Upload Media</span>
            <input type="file" onChange={handleSimulateUpload} className="hidden" accept="image/*,.pdf,.svg,.mp4" />
          </label>
        </div>
      </div>

      {/* Copy Alert Banner */}
      {copyMsg && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{copyMsg}</span>
        </div>
      )}

      {/* Filter Bar + WebP Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
        <div className="flex items-center gap-2 overflow-x-auto">
          {folders.map(folder => (
            <button
              key={folder}
              onClick={() => setSelectedFolder(folder)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedFolder === folder
                  ? 'bg-brand-500 text-white shadow-lg'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              <Folder className="w-3.5 h-3.5" />
              <span>{folder}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setAutoWebpCompression(!autoWebpCompression)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
              autoWebpCompression
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                : 'bg-zinc-800 text-zinc-400 border-zinc-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Auto WebP/AVIF Compression: {autoWebpCompression ? 'ON' : 'OFF'}</span>
          </button>

          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search file name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 w-48"
            />
          </div>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAssets.map(asset => (
          <div
            key={asset.id}
            className="rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-xl overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-40 bg-zinc-950 flex items-center justify-center overflow-hidden">
                {asset.type === 'image' ? (
                  <img src={asset.url} alt={asset.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                ) : asset.type === 'pdf' ? (
                  <FileText className="w-16 h-16 text-amber-400" />
                ) : (
                  <ImageIcon className="w-16 h-16 text-blue-400" />
                )}

                <div className="absolute top-2 right-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-zinc-900/80 text-zinc-300 border border-zinc-700">
                    {asset.type}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="font-bold text-white text-xs truncate" title={asset.name}>{asset.name}</div>
                <div className="text-[11px] text-zinc-400 mt-1 flex items-center justify-between">
                  <span>{asset.size}</span>
                  <span className="text-zinc-500">{asset.uploadedAt}</span>
                </div>
                <div className="mt-1 text-[10px] text-brand-400 font-semibold">{asset.folder}</div>
              </div>
            </div>

            <div className="px-4 py-2.5 border-t border-zinc-800 bg-zinc-950/40 flex items-center justify-between">
              <button
                onClick={() => handleCopyUrl(asset.url)}
                className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5 text-brand-400" />
                <span>Copy CDN URL</span>
              </button>
              <button
                onClick={() => handleDeleteAsset(asset.id)}
                className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                title="Delete Asset"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
