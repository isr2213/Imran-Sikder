import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Plus, 
  Edit3, 
  Trash2, 
  Search, 
  Globe, 
  CheckCircle2, 
  XCircle, 
  ArrowUp, 
  ArrowDown, 
  Sparkles, 
  FolderPlus, 
  Save, 
  X, 
  ExternalLink,
  ShieldCheck,
  Video,
  Image as ImageIcon,
  Play,
  Zap,
  Sliders,
  Award,
  Settings,
  Eye,
  EyeOff,
  RotateCcw
} from 'lucide-react';
import { 
  ExperienceCategory, 
  ExperienceClient, 
  ShowcaseCategory,
  ShowcaseProject,
  VideoItem,
  ImageGalleryItem,
  ExperienceDisplaySettings,
  DEFAULT_EXPERIENCE_SETTINGS,
  getStoredExperienceData, 
  saveStoredExperienceData 
} from '../../data/experienceData';
import { useAdminAuth } from '../../context/AdminAuthContext';

const AVAILABLE_ICONS = [
  "Stethoscope",
  "Smartphone",
  "ShoppingBag",
  "Plane",
  "Utensils",
  "Ship",
  "Wrench",
  "Building2",
  "Car",
  "BookOpen",
  "Shirt",
  "Baby",
  "Video",
  "Megaphone",
  "Globe",
  "TrendingUp",
  "Search",
  "Zap"
];

export function AdminExperienceView() {
  const { token } = useAdminAuth();

  const [categories, setCategories] = useState<ExperienceCategory[]>([]);
  const [clients, setClients] = useState<ExperienceClient[]>([]);
  const [showcaseCategories, setShowcaseCategories] = useState<ShowcaseCategory[]>([]);
  const [showcaseProjects, setShowcaseProjects] = useState<ShowcaseProject[]>([]);
  const [displaySettings, setDisplaySettings] = useState<ExperienceDisplaySettings>(DEFAULT_EXPERIENCE_SETTINGS);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'clients' | 'showcase-categories' | 'projects' | 'display-settings'>('clients');

  // Modals
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<ExperienceClient | null>(null);

  const [isShowcaseCategoryModalOpen, setIsShowcaseCategoryModalOpen] = useState(false);
  const [editingShowcaseCategory, setEditingShowcaseCategory] = useState<ShowcaseCategory | null>(null);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ShowcaseProject | null>(null);

  // Forms
  const [clientForm, setClientForm] = useState({
    name: '',
    categoryId: '',
    country: 'Bangladesh',
    shortDescription: '',
    websiteUrl: '',
    logoUrl: '',
    projectType: '',
    serviceProvided: '',
    completionDate: '',
    featured: false,
    published: true
  });

  const [showcaseCatForm, setShowcaseCatForm] = useState({
    slug: '',
    title: '',
    description: '',
    heroBanner: '',
    iconName: 'Video',
    order: 1
  });

  const [projectForm, setProjectForm] = useState<{
    title: string;
    slug: string;
    categorySlug: string;
    clientName: string;
    industry: string;
    country: string;
    projectDuration: string;
    completionDate: string;
    projectUrl: string;
    heroBanner: string;
    servicesProvidedStr: string;
    technologiesUsedStr: string;
    projectObjectives: string;
    challenges: string;
    solutions: string;
    results: string;
    videoGallery: VideoItem[];
    imageGallery: ImageGalleryItem[];
    beforeUrl: string;
    afterUrl: string;
    beforeLabel: string;
    afterLabel: string;
    isFeatured: boolean;
    status: 'draft' | 'published';
  }>({
    title: '',
    slug: '',
    categorySlug: 'video-production',
    clientName: '',
    industry: '',
    country: 'Bangladesh',
    projectDuration: '1 Month',
    completionDate: '2025-12',
    projectUrl: '',
    heroBanner: '',
    servicesProvidedStr: 'SEO, Ads, Web Development',
    technologiesUsedStr: 'React, Tailwind, Node.js',
    projectObjectives: '',
    challenges: '',
    solutions: '',
    results: '',
    videoGallery: [],
    imageGallery: [],
    beforeUrl: '',
    afterUrl: '',
    beforeLabel: 'Before',
    afterLabel: 'After',
    isFeatured: false,
    status: 'published'
  });

  // Media upload input helper
  const [videoInput, setVideoInput] = useState<Partial<VideoItem>>({
    type: 'youtube',
    url: '',
    title: ''
  });

  // Fetch initial state
  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/experience', {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      const data = await res.json();
      if (data.success) {
        setCategories(data.categories || []);
        setClients(data.clients || []);
        setShowcaseCategories(data.showcaseCategories || []);
        setShowcaseProjects(data.showcaseProjects || []);
        if (data.displaySettings) setDisplaySettings(data.displaySettings);
        saveStoredExperienceData(
          data.categories, 
          data.clients, 
          data.showcaseCategories, 
          data.showcaseProjects, 
          data.displaySettings
        );
      } else {
        const local = getStoredExperienceData();
        setCategories(local.categories);
        setClients(local.clients);
        setShowcaseCategories(local.showcaseCategories);
        setShowcaseProjects(local.showcaseProjects);
        setDisplaySettings(local.displaySettings);
      }
    } catch {
      const local = getStoredExperienceData();
      setCategories(local.categories);
      setClients(local.clients);
      setShowcaseCategories(local.showcaseCategories);
      setShowcaseProjects(local.showcaseProjects);
      setDisplaySettings(local.displaySettings);
    }
  };

  const handleUpdateDisplaySetting = async (updatedFields: Partial<ExperienceDisplaySettings>) => {
    const newSettings: ExperienceDisplaySettings = {
      ...displaySettings,
      ...updatedFields
    };
    setDisplaySettings(newSettings);
    saveStoredExperienceData(categories, clients, showcaseCategories, showcaseProjects, newSettings);

    if (token) {
      try {
        await fetch('/api/admin/experience/settings', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(newSettings)
        });
      } catch (e) {
        console.error("Failed to update display settings on server:", e);
      }
    }
  };

  useEffect(() => {
    loadData();
  }, [token]);

  const persistData = (
    c: ExperienceCategory[] = categories,
    cl: ExperienceClient[] = clients,
    sc: ShowcaseCategory[] = showcaseCategories,
    sp: ShowcaseProject[] = showcaseProjects
  ) => {
    setCategories(c);
    setClients(cl);
    setShowcaseCategories(sc);
    setShowcaseProjects(sp);
    saveStoredExperienceData(c, cl, sc, sp);
  };

  // CLIENT HANDLERS
  const handleOpenAddClient = () => {
    setEditingClient(null);
    setClientForm({
      name: '',
      categoryId: categories[0]?.id || 'cat-1',
      country: 'Bangladesh',
      shortDescription: '',
      websiteUrl: '',
      logoUrl: '',
      projectType: '',
      serviceProvided: '',
      completionDate: '',
      featured: false,
      published: true
    });
    setIsClientModalOpen(true);
  };

  const handleOpenEditClient = (client: ExperienceClient) => {
    setEditingClient(client);
    setClientForm({
      name: client.name,
      categoryId: client.categoryId,
      country: client.country || 'Bangladesh',
      shortDescription: client.shortDescription || '',
      websiteUrl: client.websiteUrl || '',
      logoUrl: client.logoUrl || '',
      projectType: client.projectType || '',
      serviceProvided: client.serviceProvided || '',
      completionDate: client.completionDate || '',
      featured: !!client.featured,
      published: client.published !== false
    });
    setIsClientModalOpen(true);
  };

  const handleSaveClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientForm.name || !clientForm.categoryId) return;

    const selectedCat = categories.find(c => c.id === clientForm.categoryId);
    const categoryName = selectedCat ? selectedCat.name : 'General';

    let updatedClients = [...clients];

    if (editingClient) {
      const payload: ExperienceClient = {
        ...editingClient,
        name: clientForm.name,
        categoryId: clientForm.categoryId,
        categoryName,
        country: clientForm.country,
        shortDescription: clientForm.shortDescription,
        websiteUrl: clientForm.websiteUrl,
        logoUrl: clientForm.logoUrl,
        projectType: clientForm.projectType,
        serviceProvided: clientForm.serviceProvided,
        completionDate: clientForm.completionDate,
        featured: clientForm.featured,
        published: clientForm.published
      };

      updatedClients = updatedClients.map(c => c.id === editingClient.id ? payload : c);

      if (token) {
        try {
          await fetch(`/api/admin/experience/clients/${editingClient.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(payload)
          });
        } catch { /* ignore */ }
      }
    } else {
      const newClient: ExperienceClient = {
        id: `client-${Date.now()}`,
        name: clientForm.name,
        categoryId: clientForm.categoryId,
        categoryName,
        country: clientForm.country,
        shortDescription: clientForm.shortDescription,
        websiteUrl: clientForm.websiteUrl,
        logoUrl: clientForm.logoUrl,
        projectType: clientForm.projectType,
        serviceProvided: clientForm.serviceProvided,
        completionDate: clientForm.completionDate,
        featured: clientForm.featured,
        published: clientForm.published,
        order: clients.length + 1
      };

      updatedClients = [newClient, ...updatedClients];

      if (token) {
        try {
          await fetch('/api/admin/experience/clients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(newClient)
          });
        } catch { /* ignore */ }
      }
    }

    persistData(categories, updatedClients, showcaseCategories, showcaseProjects);
    setIsClientModalOpen(false);
  };

  const handleDeleteClient = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this client?")) return;
    const updated = clients.filter(c => c.id !== id);
    persistData(categories, updated, showcaseCategories, showcaseProjects);

    if (token) {
      try {
        await fetch(`/api/admin/experience/clients/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
      } catch { /* ignore */ }
    }
  };

  // SHOWCASE CATEGORIES HANDLERS
  const handleOpenAddShowcaseCat = () => {
    setEditingShowcaseCategory(null);
    setShowcaseCatForm({
      slug: '',
      title: '',
      description: '',
      heroBanner: '',
      iconName: 'Video',
      order: showcaseCategories.length + 1
    });
    setIsShowcaseCategoryModalOpen(true);
  };

  const handleOpenEditShowcaseCat = (sc: ShowcaseCategory) => {
    setEditingShowcaseCategory(sc);
    setShowcaseCatForm({
      slug: sc.slug,
      title: sc.title,
      description: sc.description,
      heroBanner: sc.heroBanner || '',
      iconName: sc.iconName || 'Video',
      order: sc.order
    });
    setIsShowcaseCategoryModalOpen(true);
  };

  const handleSaveShowcaseCat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!showcaseCatForm.title) return;

    const slug = showcaseCatForm.slug || showcaseCatForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    let updatedCats = [...showcaseCategories];

    if (editingShowcaseCategory) {
      const payload: ShowcaseCategory = {
        ...editingShowcaseCategory,
        slug,
        title: showcaseCatForm.title,
        description: showcaseCatForm.description,
        heroBanner: showcaseCatForm.heroBanner,
        iconName: showcaseCatForm.iconName,
        order: showcaseCatForm.order
      };
      updatedCats = updatedCats.map(c => c.id === editingShowcaseCategory.id ? payload : c);

      if (token) {
        try {
          await fetch(`/api/admin/experience/showcase-categories/${editingShowcaseCategory.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(payload)
          });
        } catch { /* ignore */ }
      }
    } else {
      const newCat: ShowcaseCategory = {
        id: `scat-${Date.now()}`,
        slug,
        title: showcaseCatForm.title,
        description: showcaseCatForm.description,
        heroBanner: showcaseCatForm.heroBanner,
        iconName: showcaseCatForm.iconName,
        order: showcaseCatForm.order
      };
      updatedCats = [...updatedCats, newCat];

      if (token) {
        try {
          await fetch('/api/admin/experience/showcase-categories', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(newCat)
          });
        } catch { /* ignore */ }
      }
    }

    persistData(categories, clients, updatedCats, showcaseProjects);
    setIsShowcaseCategoryModalOpen(false);
  };

  const handleDeleteShowcaseCat = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this showcase category?")) return;
    const updated = showcaseCategories.filter(sc => sc.id !== id);
    persistData(categories, clients, updated, showcaseProjects);

    if (token) {
      try {
        await fetch(`/api/admin/experience/showcase-categories/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
      } catch { /* ignore */ }
    }
  };

  // PROJECT HANDLERS
  const handleOpenAddProject = () => {
    setEditingProject(null);
    setProjectForm({
      title: '',
      slug: '',
      categorySlug: showcaseCategories[0]?.slug || 'video-production',
      clientName: '',
      industry: '',
      country: 'Bangladesh',
      projectDuration: '1 Month',
      completionDate: '2025-12',
      projectUrl: '',
      heroBanner: '',
      servicesProvidedStr: 'SEO, Ads, Web Development',
      technologiesUsedStr: 'React, Node.js',
      projectObjectives: '',
      challenges: '',
      solutions: '',
      results: '',
      videoGallery: [],
      imageGallery: [],
      beforeUrl: '',
      afterUrl: '',
      beforeLabel: 'Before',
      afterLabel: 'After',
      isFeatured: false,
      status: 'published'
    });
    setIsProjectModalOpen(true);
  };

  const handleOpenEditProject = (p: ShowcaseProject) => {
    setEditingProject(p);
    setProjectForm({
      title: p.title,
      slug: p.slug,
      categorySlug: p.categorySlug,
      clientName: p.clientName,
      industry: p.industry,
      country: p.country,
      projectDuration: p.projectDuration || '',
      completionDate: p.completionDate || '',
      projectUrl: p.projectUrl || '',
      heroBanner: p.heroBanner || '',
      servicesProvidedStr: p.servicesProvided.join(', '),
      technologiesUsedStr: p.technologiesUsed.join(', '),
      projectObjectives: p.projectObjectives || '',
      challenges: p.challenges || '',
      solutions: p.solutions || '',
      results: p.results || '',
      videoGallery: p.videoGallery || [],
      imageGallery: p.imageGallery || [],
      beforeUrl: p.beforeAfter?.beforeUrl || '',
      afterUrl: p.beforeAfter?.afterUrl || '',
      beforeLabel: p.beforeAfter?.beforeLabel || 'Before',
      afterLabel: p.beforeAfter?.afterLabel || 'After',
      isFeatured: !!p.isFeatured,
      status: p.status
    });
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.categorySlug) return;

    const slug = projectForm.slug || projectForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const servicesProvided = projectForm.servicesProvidedStr.split(',').map(s => s.trim()).filter(Boolean);
    const technologiesUsed = projectForm.technologiesUsedStr.split(',').map(s => s.trim()).filter(Boolean);

    let beforeAfter: any = undefined;
    if (projectForm.beforeUrl && projectForm.afterUrl) {
      beforeAfter = {
        beforeUrl: projectForm.beforeUrl,
        afterUrl: projectForm.afterUrl,
        beforeLabel: projectForm.beforeLabel || 'Before',
        afterLabel: projectForm.afterLabel || 'After'
      };
    }

    let updatedProjects = [...showcaseProjects];

    if (editingProject) {
      const payload: ShowcaseProject = {
        ...editingProject,
        title: projectForm.title,
        slug,
        categorySlug: projectForm.categorySlug,
        clientName: projectForm.clientName,
        industry: projectForm.industry,
        country: projectForm.country,
        projectDuration: projectForm.projectDuration,
        completionDate: projectForm.completionDate,
        projectUrl: projectForm.projectUrl,
        heroBanner: projectForm.heroBanner,
        servicesProvided,
        technologiesUsed,
        projectObjectives: projectForm.projectObjectives,
        challenges: projectForm.challenges,
        solutions: projectForm.solutions,
        results: projectForm.results,
        videoGallery: projectForm.videoGallery,
        imageGallery: projectForm.imageGallery,
        beforeAfter,
        isFeatured: projectForm.isFeatured,
        status: projectForm.status
      };

      updatedProjects = updatedProjects.map(p => p.id === editingProject.id ? payload : p);

      if (token) {
        try {
          await fetch(`/api/admin/experience/projects/${editingProject.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(payload)
          });
        } catch { /* ignore */ }
      }
    } else {
      const newProj: ShowcaseProject = {
        id: `proj-${Date.now()}`,
        title: projectForm.title,
        slug,
        categorySlug: projectForm.categorySlug,
        clientName: projectForm.clientName,
        industry: projectForm.industry,
        country: projectForm.country,
        projectDuration: projectForm.projectDuration,
        completionDate: projectForm.completionDate,
        projectUrl: projectForm.projectUrl,
        heroBanner: projectForm.heroBanner,
        servicesProvided,
        technologiesUsed,
        projectObjectives: projectForm.projectObjectives,
        challenges: projectForm.challenges,
        solutions: projectForm.solutions,
        results: projectForm.results,
        videoGallery: projectForm.videoGallery,
        imageGallery: projectForm.imageGallery,
        beforeAfter,
        isFeatured: projectForm.isFeatured,
        status: projectForm.status
      };

      updatedProjects = [newProj, ...updatedProjects];

      if (token) {
        try {
          await fetch('/api/admin/experience/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(newProj)
          });
        } catch { /* ignore */ }
      }
    }

    persistData(categories, clients, showcaseCategories, updatedProjects);
    setIsProjectModalOpen(false);
  };

  const handleDeleteProject = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    const updated = showcaseProjects.filter(p => p.id !== id);
    persistData(categories, clients, showcaseCategories, updated);

    if (token) {
      try {
        await fetch(`/api/admin/experience/projects/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
      } catch { /* ignore */ }
    }
  };

  const handleAddVideoToProject = () => {
    if (!videoInput.url || !videoInput.title) return;
    const newVideo: VideoItem = {
      id: `vid-${Date.now()}`,
      type: videoInput.type || 'youtube',
      url: videoInput.url,
      title: videoInput.title,
      thumbnail: videoInput.thumbnail
    };

    setProjectForm(prev => ({
      ...prev,
      videoGallery: [...prev.videoGallery, newVideo]
    }));

    setVideoInput({ type: 'youtube', url: '', title: '' });
  };

  const handleRemoveVideoFromProject = (id: string) => {
    setProjectForm(prev => ({
      ...prev,
      videoGallery: prev.videoGallery.filter(v => v.id !== id)
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold border border-brand-500/20 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Experience Management CMS
            </span>
          </div>
          <h1 className="text-2xl font-black text-white">Experience Center Dashboard</h1>
          <p className="text-zinc-400 text-xs mt-1">
            Manage clients, project showcases, videos, images, and performance metrics across all 7 categories.
          </p>
        </div>

        {/* Top Actions */}
        <div className="flex items-center gap-3">
          {activeTab === 'clients' && (
            <button
              onClick={handleOpenAddClient}
              className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-extrabold text-xs shadow-lg transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Honorable Client
            </button>
          )}

          {activeTab === 'showcase-categories' && (
            <button
              onClick={handleOpenAddShowcaseCat}
              className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-extrabold text-xs shadow-lg transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Showcase Category
            </button>
          )}

          {activeTab === 'projects' && (
            <button
              onClick={handleOpenAddProject}
              className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-extrabold text-xs shadow-lg transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Showcase Project
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 bg-zinc-900/60 p-2 rounded-2xl border border-zinc-800">
        <button
          onClick={() => setActiveTab('clients')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'clients' ? 'bg-brand-500 text-black shadow-md' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Building2 className="w-4 h-4" /> Our Honorable Clients ({clients.length})
        </button>

        <button
          onClick={() => setActiveTab('showcase-categories')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'showcase-categories' ? 'bg-brand-500 text-black shadow-md' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <FolderPlus className="w-4 h-4" /> Showcase Categories ({showcaseCategories.length})
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'projects' ? 'bg-brand-500 text-black shadow-md' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4" /> Projects Showcase ({showcaseProjects.length})
        </button>

        <button
          onClick={() => setActiveTab('display-settings')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'display-settings' ? 'bg-brand-500 text-black shadow-md' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Settings className="w-4 h-4" /> Display Settings
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter items..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-brand-500"
        />
      </div>

      {/* TAB 1: CLIENTS TABLE */}
      {activeTab === 'clients' && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-zinc-950 text-zinc-400 uppercase text-[10px] tracking-wider border-b border-zinc-800">
                <tr>
                  <th className="px-6 py-4">Client Name</th>
                  <th className="px-6 py-4">Industry</th>
                  <th className="px-6 py-4">Country</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {clients
                  .filter(c => !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(client => (
                    <tr key={client.id} className="hover:bg-zinc-800/40 transition-colors">
                      <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-brand-400" />
                        <span>{client.name}</span>
                      </td>
                      <td className="px-6 py-4 text-zinc-400">{client.categoryName}</td>
                      <td className="px-6 py-4">{client.country}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${client.published ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400'}`}>
                          {client.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button onClick={() => handleOpenEditClient(client)} className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300">
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => handleDeleteClient(client.id)} className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20">
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

      {/* TAB 2: SHOWCASE CATEGORIES */}
      {activeTab === 'showcase-categories' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseCategories.map(sc => (
            <div key={sc.id} className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">Order #{sc.order}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleOpenEditShowcaseCat(sc)} className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => handleDeleteShowcaseCat(sc.id)} className="p-1.5 rounded-lg bg-red-500/10 text-red-400">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{sc.title}</h3>
                <p className="text-xs text-zinc-500 mb-3 font-mono">/our-experience/{sc.slug}</p>
                <p className="text-xs text-zinc-400 line-clamp-3">{sc.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: PROJECTS SHOWCASE */}
      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseProjects
            .filter(p => !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(project => (
              <div key={project.id} className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="aspect-video bg-zinc-950 rounded-2xl overflow-hidden mb-4 border border-zinc-800">
                    <img src={project.heroBanner || "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-bold text-brand-400 uppercase">{project.categorySlug}</span>
                  <h3 className="text-sm font-bold text-white line-clamp-2 mt-1">{project.title}</h3>
                  <p className="text-xs text-zinc-400 mt-2 font-medium">{project.clientName} • {project.country}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-400">{project.status}</span>
                  <div className="flex gap-2">
                    <button onClick={() => handleOpenEditProject(project)} className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => handleDeleteProject(project.id)} className="p-1.5 rounded-lg bg-red-500/10 text-red-400">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* TAB 4: DISPLAY SETTINGS */}
      {activeTab === 'display-settings' && (
        <div className="space-y-8">
          {/* Setting 1: Default Landing Page */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center gap-1 justify-center text-brand-400">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-black text-white">Default Landing Page</h2>
                <p className="text-xs text-zinc-400">Select which page view renders immediately when visitors click "Our Experience".</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label 
                onClick={() => handleUpdateDisplaySetting({ defaultLandingPage: 'clients' })}
                className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 ${
                  displaySettings.defaultLandingPage === 'clients'
                    ? 'bg-brand-500/10 border-brand-500/50 text-white'
                    : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <input 
                  type="radio" 
                  name="landingPage" 
                  checked={displaySettings.defaultLandingPage === 'clients'} 
                  onChange={() => {}}
                  className="mt-1 accent-brand-500" 
                />
                <div>
                  <div className="font-extrabold text-sm text-white flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-brand-400" />
                    <span>Our Honorable Clients (Default Homepage)</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Main landing page displays all 250+ enterprise clients categorized by industry with verified details.
                  </p>
                </div>
              </label>

              <label 
                onClick={() => handleUpdateDisplaySetting({ defaultLandingPage: 'showcase' })}
                className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 ${
                  displaySettings.defaultLandingPage === 'showcase'
                    ? 'bg-brand-500/10 border-brand-500/50 text-white'
                    : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <input 
                  type="radio" 
                  name="landingPage" 
                  checked={displaySettings.defaultLandingPage === 'showcase'} 
                  onChange={() => {}}
                  className="mt-1 accent-brand-500" 
                />
                <div>
                  <div className="font-extrabold text-sm text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-400" />
                    <span>Project Showcase</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Main landing page displays project cards with video production, web apps, campaigns, and metrics.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Setting 2: Show/Hide Project Showcase Section on Landing Page */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-1 justify-center text-amber-400">
                  <EyeOff className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-white">Project Showcase Visibility on Landing Page</h2>
                  <p className="text-xs text-zinc-400">Enable or hide the Project Showcase section on the main Experience landing page.</p>
                </div>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                displaySettings.showProjectShowcaseOnLanding 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
              }`}>
                {displaySettings.showProjectShowcaseOnLanding ? 'VISIBLE ON LANDING PAGE' : 'HIDDEN FROM LANDING PAGE (DEFAULT)'}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800">
              <div>
                <div className="text-sm font-bold text-white mb-1">Project Showcase Status</div>
                <p className="text-xs text-zinc-400 max-w-xl">
                  When set to Hidden, the main landing page renders exclusively "Our Honorable Clients". Project Showcase remains 100% saved in the database, CMS, and direct URLs for future activation.
                </p>
              </div>

              <button
                onClick={() => handleUpdateDisplaySetting({ 
                  showProjectShowcaseOnLanding: !displaySettings.showProjectShowcaseOnLanding 
                })}
                className={`px-6 py-3 rounded-xl font-black text-xs transition-all flex items-center gap-2 ${
                  displaySettings.showProjectShowcaseOnLanding
                    ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30'
                    : 'bg-emerald-500 text-black shadow-lg hover:bg-emerald-400'
                }`}
              >
                {displaySettings.showProjectShowcaseOnLanding ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    Hide Project Showcase
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    Show Project Showcase on Landing Page
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Setting 3: Individual Submenus & Categories Visibility */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Submenus & Category Navigation Visibility</h2>
                <p className="text-xs text-zinc-400">Toggle individual categories or submenus ON/OFF for website navigation bars and dropdowns.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black text-brand-400 uppercase tracking-wider">Project Showcase Submenus ({showcaseCategories.length})</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {showcaseCategories.map(sc => {
                  const isHidden = displaySettings.hiddenSubmenus?.includes(sc.slug);
                  return (
                    <div key={sc.id} className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">{sc.title}</div>
                        <div className="text-[10px] text-zinc-500 font-mono">/{sc.slug}</div>
                      </div>

                      <button
                        onClick={() => {
                          const currentHidden = displaySettings.hiddenSubmenus || [];
                          const nextHidden = isHidden
                            ? currentHidden.filter(slug => slug !== sc.slug)
                            : [...currentHidden, sc.slug];
                          handleUpdateDisplaySetting({ hiddenSubmenus: nextHidden });
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all flex items-center gap-1 ${
                          isHidden
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20'
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                        }`}
                      >
                        {isHidden ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                        <span>{isHidden ? 'Hidden' : 'Visible'}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Setting 4: 1-Click Restoration & Quick Actions */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-extrabold text-white">Reset & Preset Actions</h3>
              <p className="text-xs text-zinc-400">Restore standard default landing settings or publish all submenus with 1 click.</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleUpdateDisplaySetting(DEFAULT_EXPERIENCE_SETTINGS)}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5 text-amber-400" /> Restore Default Settings
              </button>

              <button
                onClick={() => handleUpdateDisplaySetting({ 
                  defaultLandingPage: 'clients', 
                  showProjectShowcaseOnLanding: true, 
                  hiddenSubmenus: [] 
                })}
                className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-black text-xs font-black transition-all flex items-center gap-2 shadow-lg"
              >
                <CheckCircle2 className="w-4 h-4" /> Enable All Submenus & Showcase
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CLIENT MODAL */}
      {isClientModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-white">{editingClient ? 'Edit Client' : 'Add Honorable Client'}</h3>
              <button onClick={() => setIsClientModalOpen(false)} className="text-zinc-500 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveClient} className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Client Name *</label>
                <input type="text" value={clientForm.name} onChange={e => setClientForm({ ...clientForm, name: e.target.value })} required className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Industry Category *</label>
                <select value={clientForm.categoryId} onChange={e => setClientForm({ ...clientForm, categoryId: e.target.value })} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white">
                  {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Country</label>
                <input type="text" value={clientForm.country} onChange={e => setClientForm({ ...clientForm, country: e.target.value })} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Short Description</label>
                <textarea value={clientForm.shortDescription} onChange={e => setClientForm({ ...clientForm, shortDescription: e.target.value })} rows={2} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Website URL</label>
                <input type="url" value={clientForm.websiteUrl} onChange={e => setClientForm({ ...clientForm, websiteUrl: e.target.value })} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Services Provided</label>
                <input type="text" value={clientForm.serviceProvided} onChange={e => setClientForm({ ...clientForm, serviceProvided: e.target.value })} placeholder="SEO, Ads, Software" className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="clientPub" checked={clientForm.published} onChange={e => setClientForm({ ...clientForm, published: e.target.checked })} />
                <label htmlFor="clientPub" className="text-zinc-300 font-bold">Publish on Website</label>
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsClientModalOpen(false)} className="px-4 py-2 rounded-xl bg-zinc-800 text-white font-bold">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-brand-500 text-black font-extrabold">Save Client</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SHOWCASE CATEGORY MODAL */}
      {isShowcaseCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-white">{editingShowcaseCategory ? 'Edit Category' : 'Add Showcase Category'}</h3>
              <button onClick={() => setIsShowcaseCategoryModalOpen(false)} className="text-zinc-500 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveShowcaseCat} className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Category Title *</label>
                <input type="text" value={showcaseCatForm.title} onChange={e => setShowcaseCatForm({ ...showcaseCatForm, title: e.target.value })} required className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 font-bold">URL Slug</label>
                <input type="text" value={showcaseCatForm.slug} onChange={e => setShowcaseCatForm({ ...showcaseCatForm, slug: e.target.value })} placeholder="video-production" className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Description</label>
                <textarea value={showcaseCatForm.description} onChange={e => setShowcaseCatForm({ ...showcaseCatForm, description: e.target.value })} rows={3} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsShowcaseCategoryModalOpen(false)} className="px-4 py-2 rounded-xl bg-zinc-800 text-white font-bold">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-brand-500 text-black font-extrabold">Save Category</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PROJECT MODAL */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <h3 className="text-base font-bold text-white">{editingProject ? 'Edit Project' : 'Add Showcase Project'}</h3>
              <button onClick={() => setIsProjectModalOpen(false)} className="text-zinc-500 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveProject} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold">Project Title *</label>
                  <input type="text" value={projectForm.title} onChange={e => setProjectForm({ ...projectForm, title: e.target.value })} required className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold">Category *</label>
                  <select value={projectForm.categorySlug} onChange={e => setProjectForm({ ...projectForm, categorySlug: e.target.value })} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white">
                    {showcaseCategories.map(sc => <option key={sc.id} value={sc.slug}>{sc.title}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold">Client Name</label>
                  <input type="text" value={projectForm.clientName} onChange={e => setProjectForm({ ...projectForm, clientName: e.target.value })} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold">Industry</label>
                  <input type="text" value={projectForm.industry} onChange={e => setProjectForm({ ...projectForm, industry: e.target.value })} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold">Country</label>
                  <input type="text" value={projectForm.country} onChange={e => setProjectForm({ ...projectForm, country: e.target.value })} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Hero Image URL</label>
                <input type="url" value={projectForm.heroBanner} onChange={e => setProjectForm({ ...projectForm, heroBanner: e.target.value })} placeholder="https://..." className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold">Services Provided (comma separated)</label>
                  <input type="text" value={projectForm.servicesProvidedStr} onChange={e => setProjectForm({ ...projectForm, servicesProvidedStr: e.target.value })} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold">Technologies Used (comma separated)</label>
                  <input type="text" value={projectForm.technologiesUsedStr} onChange={e => setProjectForm({ ...projectForm, technologiesUsedStr: e.target.value })} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Project Objectives</label>
                <textarea value={projectForm.projectObjectives} onChange={e => setProjectForm({ ...projectForm, projectObjectives: e.target.value })} rows={2} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1 font-bold">Results & Impact</label>
                <textarea value={projectForm.results} onChange={e => setProjectForm({ ...projectForm, results: e.target.value })} rows={2} className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white" />
              </div>

              {/* Video Management Section */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                <h4 className="font-bold text-brand-400 flex items-center gap-1.5"><Video className="w-4 h-4" /> Video Gallery Management</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <select value={videoInput.type} onChange={e => setVideoInput({ ...videoInput, type: e.target.value as any })} className="p-2 rounded-xl bg-zinc-900 text-white border border-zinc-800">
                    <option value="youtube">YouTube</option>
                    <option value="vimeo">Vimeo</option>
                    <option value="mp4">Direct MP4 URL</option>
                  </select>
                  <input type="text" value={videoInput.title} onChange={e => setVideoInput({ ...videoInput, title: e.target.value })} placeholder="Video Title" className="p-2 rounded-xl bg-zinc-900 text-white border border-zinc-800" />
                  <input type="url" value={videoInput.url} onChange={e => setVideoInput({ ...videoInput, url: e.target.value })} placeholder="Video URL" className="p-2 rounded-xl bg-zinc-900 text-white border border-zinc-800" />
                </div>
                <button type="button" onClick={handleAddVideoToProject} className="px-3 py-1.5 rounded-lg bg-zinc-800 text-white font-bold text-xs">
                  + Add Video
                </button>

                {projectForm.videoGallery.length > 0 && (
                  <div className="space-y-1 pt-2">
                    {projectForm.videoGallery.map(v => (
                      <div key={v.id} className="flex items-center justify-between p-2 rounded-lg bg-zinc-900 text-xs">
                        <span className="text-zinc-200 truncate">{v.title} ({v.type})</span>
                        <button type="button" onClick={() => handleRemoveVideoFromProject(v.id)} className="text-red-400 font-bold">Remove</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsProjectModalOpen(false)} className="px-4 py-2 rounded-xl bg-zinc-800 text-white font-bold">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-brand-500 text-black font-extrabold">Save Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
