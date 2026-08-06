import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { 
  Building2, 
  Stethoscope, 
  Smartphone, 
  ShoppingBag, 
  Plane, 
  Utensils, 
  Ship, 
  Wrench, 
  Car, 
  BookOpen, 
  Shirt, 
  Baby, 
  Search, 
  Globe, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Filter,
  ChevronRight,
  PhoneCall,
  Menu,
  X,
  Video,
  Megaphone,
  TrendingUp,
  Zap,
  Play,
  ArrowLeft,
  Calendar,
  Tag,
  Award,
  Users,
  Check,
  Maximize2
} from "lucide-react";
import Logo from "../components/Logo";
import { 
  ExperienceCategory, 
  ExperienceClient, 
  ShowcaseCategory,
  ShowcaseProject,
  VideoItem,
  ImageGalleryItem,
  ExperienceDisplaySettings,
  DEFAULT_EXPERIENCE_SETTINGS,
  getStoredExperienceData 
} from "../data/experienceData";

const ICON_MAP: Record<string, React.ElementType> = {
  Stethoscope,
  Smartphone,
  ShoppingBag,
  Plane,
  Utensils,
  Ship,
  Wrench,
  Building2,
  Car,
  BookOpen,
  Shirt,
  Baby,
  Video,
  Megaphone,
  Globe,
  TrendingUp,
  Search,
  Zap
};

// Before & After Interactive Slider Component
function BeforeAfterSlider({ beforeUrl, afterUrl, beforeLabel, afterLabel }: {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 select-none">
      {/* After Image (Background) */}
      <img 
        src={afterUrl} 
        alt={afterLabel || "After Solution"} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-md text-black font-extrabold text-xs px-3 py-1 rounded-full shadow-lg">
        {afterLabel || "After (DGL Growth)"}
      </div>

      {/* Before Image (Clipped overlay) */}
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={beforeUrl} 
          alt={beforeLabel || "Before Optimization"} 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute top-4 left-4 bg-zinc-900/90 border border-zinc-700 text-zinc-300 font-bold text-xs px-3 py-1 rounded-full shadow-lg">
          {beforeLabel || "Before Optimization"}
        </div>
      </div>

      {/* Slider Bar Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-brand-400 cursor-ew-resize z-10 shadow-[0_0_15px_rgba(234,179,8,0.8)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-400 text-black flex items-center justify-center font-bold text-xs shadow-xl">
          ↔
        </div>
      </div>

      {/* Range Input for touch/mouse dragging */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
      />
    </div>
  );
}

export default function OurExperience() {
  const { categorySlug, projectSlug } = useParams<{ categorySlug?: string; projectSlug?: string }>();
  const navigate = useNavigate();

  const [categories, setCategories] = useState<ExperienceCategory[]>([]);
  const [clients, setClients] = useState<ExperienceClient[]>([]);
  const [showcaseCategories, setShowcaseCategories] = useState<ShowcaseCategory[]>([]);
  const [showcaseProjects, setShowcaseProjects] = useState<ShowcaseProject[]>([]);
  const [displaySettings, setDisplaySettings] = useState<ExperienceDisplaySettings>(DEFAULT_EXPERIENCE_SETTINGS);

  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [languageMode, setLanguageMode] = useState<"en" | "bn">("en");
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"clients" | "showcase">("clients");

  // Video Lightbox state
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);

  // Image Lightbox state
  const [activeImageModal, setActiveImageModal] = useState<ImageGalleryItem | null>(null);

  useEffect(() => {
    fetch('/api/admin/experience')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCategories(data.categories || []);
          setClients(data.clients || []);
          setShowcaseCategories(data.showcaseCategories || []);
          setShowcaseProjects(data.showcaseProjects || []);
          if (data.displaySettings) {
            setDisplaySettings(data.displaySettings);
            if (!categorySlug && !projectSlug) {
              setActiveTab(data.displaySettings.defaultLandingPage || "clients");
            }
          }
        } else {
          const local = getStoredExperienceData();
          setCategories(local.categories);
          setClients(local.clients);
          setShowcaseCategories(local.showcaseCategories);
          setShowcaseProjects(local.showcaseProjects);
          setDisplaySettings(local.displaySettings);
          if (!categorySlug && !projectSlug) {
            setActiveTab(local.displaySettings.defaultLandingPage || "clients");
          }
        }
      })
      .catch(() => {
        const local = getStoredExperienceData();
        setCategories(local.categories);
        setClients(local.clients);
        setShowcaseCategories(local.showcaseCategories);
        setShowcaseProjects(local.showcaseProjects);
        setDisplaySettings(local.displaySettings);
        if (!categorySlug && !projectSlug) {
          setActiveTab(local.displaySettings.defaultLandingPage || "clients");
        }
      });
  }, [categorySlug, projectSlug]);

  // Filter clients
  const publishedClients = clients.filter(c => c.published !== false);
  const filteredClients = publishedClients.filter(client => {
    const matchesIndustry = selectedIndustry === "all" || client.categoryId === selectedIndustry;
    const matchesSearch = 
      !searchQuery ||
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (client.shortDescription && client.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  // Filter projects
  const publishedProjects = showcaseProjects.filter(p => p.status !== "draft");
  
  // Current active showcase category (if on /our-experience/:categorySlug)
  const currentCategory = categorySlug 
    ? showcaseCategories.find(sc => sc.slug.toLowerCase() === categorySlug.toLowerCase()) 
    : null;

  // Filter projects by category or global search
  const filteredProjects = publishedProjects.filter(project => {
    const matchesCategory = !currentCategory || project.categorySlug.toLowerCase() === currentCategory.slug.toLowerCase();
    const matchesSearch = 
      !searchQuery ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologiesUsed.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.servicesProvided.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Selected project for detail view (if on /our-experience/project/:projectSlug)
  const currentProject = projectSlug
    ? publishedProjects.find(p => p.slug.toLowerCase() === projectSlug.toLowerCase())
    : null;

  const getCountryBadge = (country: string) => {
    if (country.toLowerCase().includes("uk") || country.toLowerCase().includes("united kingdom")) {
      return { flag: "🇬🇧", label: "United Kingdom", color: "border-blue-500/30 bg-blue-500/10 text-blue-400" };
    }
    if (country.toLowerCase().includes("qatar")) {
      return { flag: "🇶🇦", label: "Qatar", color: "border-purple-500/30 bg-purple-500/10 text-purple-400" };
    }
    return { flag: "🇧🇩", label: "Bangladesh", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" };
  };

  // Helper to render video player
  const renderVideoEmbed = (video: VideoItem) => {
    if (video.type === "youtube") {
      let embedUrl = video.url;
      if (embedUrl.includes("watch?v=")) {
        embedUrl = embedUrl.replace("watch?v=", "embed/");
      } else if (embedUrl.includes("youtu.be/")) {
        embedUrl = embedUrl.replace("youtu.be/", "www.youtube.com/embed/");
      }
      return (
        <iframe
          src={`${embedUrl}?autoplay=1&rel=0`}
          title={video.title}
          className="w-full h-full rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    if (video.type === "vimeo") {
      const vimeoId = video.url.split("/").pop();
      return (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
          title={video.title}
          className="w-full h-full rounded-2xl"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      );
    }
    // Direct MP4
    return (
      <video
        src={video.url}
        controls
        autoPlay
        className="w-full h-full rounded-2xl object-contain bg-black"
      />
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-brand-500 selection:text-white">
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Digital Grower Ltd.",
          "url": "https://digitalgrowltd.com",
          "logo": "https://digitalgrowltd.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/DigitalGrowerLtd",
            "https://www.linkedin.com/company/digitalgrowerltd"
          ],
          "knowsAbout": showcaseCategories.map(sc => sc.title)
        })}
      </script>

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo textSize="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            <Link to="/" className="text-zinc-400 hover:text-white transition-colors">
              {languageMode === "bn" ? "হোম" : "Home"}
            </Link>
            <a href="/#services" className="text-zinc-400 hover:text-white transition-colors">
              {languageMode === "bn" ? "সার্ভিসসমূহ" : "Services"}
            </a>
            
            {/* Our Experience active link */}
            <Link to="/our-experience" className="text-brand-400 font-bold flex items-center gap-1.5 bg-brand-500/10 px-3 py-1.5 rounded-lg border border-brand-500/20">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>{languageMode === "bn" ? "আমাদের অভিজ্ঞতা" : "Our Experience"}</span>
            </Link>

            <Link to="/portfolio" className="text-zinc-400 hover:text-white transition-colors">
              {languageMode === "bn" ? "পোর্টফোলিও" : "Portfolio"}
            </Link>
            <Link to="/blog" className="text-zinc-400 hover:text-white transition-colors">
              {languageMode === "bn" ? "ব্লগ" : "Blog"}
            </Link>
            <Link to="/trust-center" className="text-zinc-400 hover:text-white transition-colors">
              {languageMode === "bn" ? "ট্রাস্ট সেন্টার" : "Trust Center"}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setLanguageMode(prev => prev === "en" ? "bn" : "en")}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
            >
              🌐 {languageMode === "en" ? "BN (বাংলা)" : "EN (English)"}
            </button>
            <a
              href="https://wa.me/8801989373683"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-amber-500 hover:from-brand-400 hover:to-amber-400 text-black font-extrabold text-xs shadow-lg shadow-brand-500/20 transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{languageMode === "bn" ? "যোগাযোগ করুন" : "Get Free Proposal"}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300"
          >
            {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileNavOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-zinc-900 px-4 py-4 space-y-3">
            <Link to="/" onClick={() => setMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-zinc-300">
              Home
            </Link>
            <Link to="/our-experience" onClick={() => setMobileNavOpen(false)} className="block py-2 text-sm font-bold text-brand-400">
              Our Experience Center
            </Link>
            <div className="pl-4 space-y-2 border-l border-zinc-800">
              {showcaseCategories.map(sc => (
                <Link
                  key={sc.id}
                  to={`/our-experience/${sc.slug}`}
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1 text-xs text-zinc-400 hover:text-white"
                >
                  • {sc.title}
                </Link>
              ))}
            </div>
            <Link to="/portfolio" onClick={() => setMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-zinc-300">
              Portfolio
            </Link>
            <Link to="/blog" onClick={() => setMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-zinc-300">
              Blog
            </Link>
          </div>
        )}
      </header>

      {/* SUB-HEADER / CATEGORY QUICK NAVIGATION BAR */}
      <div className="bg-zinc-900/60 border-b border-zinc-800/80 backdrop-blur-sm overflow-x-auto scrollbar-none py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-bold whitespace-nowrap">
          <span className="text-zinc-500 uppercase tracking-wider text-[10px] mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3 text-brand-400" />
            Showcase:
          </span>
          <Link
            to="/our-experience"
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              !categorySlug && !projectSlug
                ? "bg-brand-500 text-black border-brand-400 shadow-md font-extrabold"
                : "bg-zinc-950/80 text-zinc-300 border-zinc-800 hover:border-zinc-700"
            }`}
          >
            All Experience Center
          </Link>

          {showcaseCategories
            .filter(sc => !displaySettings.hiddenSubmenus?.includes(sc.slug))
            .map(sc => {
            const IconComp = sc.iconName ? ICON_MAP[sc.iconName] || Sparkles : Sparkles;
            const isActive = categorySlug?.toLowerCase() === sc.slug.toLowerCase();
            return (
              <Link
                key={sc.id}
                to={`/our-experience/${sc.slug}`}
                className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all ${
                  isActive
                    ? "bg-brand-500 text-black border-brand-400 font-extrabold shadow-md"
                    : "bg-zinc-950/80 text-zinc-300 border-zinc-800 hover:border-brand-500/40 hover:text-white"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{sc.title}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* CASE 1: INDIVIDUAL PROJECT DETAIL VIEW (/our-experience/project/:slug) */}
      {/* ==================================================================== */}
      {currentProject ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <Link to="/our-experience" className="hover:text-white">Our Experience</Link>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <Link to={`/our-experience/${currentProject.categorySlug}`} className="hover:text-white capitalize">
              {currentProject.categorySlug.replace(/-/g, " ")}
            </Link>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-brand-400 font-semibold truncate max-w-[200px] sm:max-w-none">{currentProject.title}</span>
          </nav>

          {/* Hero Banner Section */}
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 mb-12 bg-zinc-900">
            <div className="absolute inset-0">
              <img 
                src={currentProject.heroBanner || "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"} 
                alt={currentProject.title}
                className="w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            </div>

            <div className="relative z-10 p-6 sm:p-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider">
                  {currentProject.categorySlug.replace(/-/g, " ")}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCountryBadge(currentProject.country).color}`}>
                  {getCountryBadge(currentProject.country).flag} {currentProject.country}
                </span>
                {currentProject.isFeatured && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Featured Case Study
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mb-6">
                {currentProject.title}
              </h1>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80 max-w-3xl">
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Client Name</p>
                  <p className="text-sm font-bold text-white mt-1">{currentProject.clientName}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Industry</p>
                  <p className="text-sm font-bold text-white mt-1">{currentProject.industry}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Duration</p>
                  <p className="text-sm font-bold text-white mt-1">{currentProject.projectDuration || "Ongoing"}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Completion</p>
                  <p className="text-sm font-bold text-white mt-1">{currentProject.completionDate || "2025"}</p>
                </div>
              </div>

              {currentProject.projectUrl && (
                <div className="mt-8">
                  <a
                    href={currentProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-extrabold text-xs transition-all shadow-lg shadow-brand-500/20"
                  >
                    <span>Visit Live Client Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Performance Metrics Cards */}
          {currentProject.performanceMetrics && currentProject.performanceMetrics.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Verified Growth &amp; Performance Metrics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {currentProject.performanceMetrics.map((metric, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-brand-500/30 transition-all">
                    <p className="text-xs font-bold text-zinc-400">{metric.label}</p>
                    <div className="flex items-baseline gap-2 mt-2">
                      <p className="text-3xl font-black text-white">{metric.value}</p>
                      {metric.change && (
                        <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                          {metric.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Case Study Narrative (Objectives, Challenges, Solutions, Results) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              {currentProject.projectObjectives && (
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <h3 className="text-sm font-extrabold text-brand-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Project Objectives
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{currentProject.projectObjectives}</p>
                </div>
              )}

              {currentProject.challenges && (
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <h3 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> The Business Challenge
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{currentProject.challenges}</p>
                </div>
              )}

              {currentProject.solutions && (
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <h3 className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Our Strategic Solution
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{currentProject.solutions}</p>
                </div>
              )}

              {currentProject.results && (
                <div className="p-6 rounded-2xl bg-brand-500/5 border border-brand-500/20">
                  <h3 className="text-sm font-extrabold text-brand-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" /> Delivered Impact &amp; Results
                  </h3>
                  <p className="text-zinc-200 text-sm leading-relaxed font-medium">{currentProject.results}</p>
                </div>
              )}

              {/* Before & After Interactive Slider if available */}
              {currentProject.beforeAfter && (
                <div className="pt-4">
                  <h3 className="text-sm font-extrabold text-zinc-300 uppercase tracking-wider mb-4">
                    Visual Transformation (Before vs. After)
                  </h3>
                  <BeforeAfterSlider 
                    beforeUrl={currentProject.beforeAfter.beforeUrl} 
                    afterUrl={currentProject.beforeAfter.afterUrl}
                    beforeLabel={currentProject.beforeAfter.beforeLabel}
                    afterLabel={currentProject.beforeAfter.afterLabel}
                  />
                </div>
              )}
            </div>

            {/* Sidebar Details & Technologies */}
            <div className="space-y-6">
              {/* Services Provided */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs font-extrabold uppercase text-zinc-400 tracking-wider mb-3">Services Provided</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.servicesProvided.map((serv, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-medium">
                      • {serv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs font-extrabold uppercase text-zinc-400 tracking-wider mb-3">Technologies Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologiesUsed.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Feedback Quote */}
              {currentProject.clientFeedback && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 relative">
                  <p className="text-zinc-300 text-xs italic leading-relaxed mb-4">
                    "{currentProject.clientFeedback.quote}"
                  </p>
                  <p className="text-xs font-bold text-white">{currentProject.clientFeedback.author}</p>
                  <p className="text-[10px] text-zinc-500">{currentProject.clientFeedback.role}</p>
                </div>
              )}
            </div>
          </div>

          {/* Video Gallery Section */}
          {currentProject.videoGallery && currentProject.videoGallery.length > 0 && (
            <div className="mb-12">
              <h3 className="text-sm font-extrabold text-brand-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Video className="w-4 h-4" /> Project Video Gallery &amp; Replays
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProject.videoGallery.map((vid) => (
                  <div 
                    key={vid.id}
                    onClick={() => setActiveVideoModal(vid)}
                    className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video cursor-pointer hover:border-brand-500/50 transition-all"
                  >
                    <img 
                      src={vid.thumbnail || currentProject.heroBanner || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-brand-500 text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <p className="text-xs font-bold text-white truncate">{vid.title}</p>
                      <span className="text-[10px] uppercase font-bold text-brand-400">{vid.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="pt-8 border-t border-zinc-900 flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Experience Center
            </button>
            <Link
              to="/our-experience"
              className="text-xs font-bold text-brand-400 hover:underline"
            >
              View All Experience Categories →
            </Link>
          </div>
        </main>

      ) : (
        /* ==================================================================== */
        /* CASE 2: MAIN EXPERIENCE CENTER / CATEGORY SHOWCASE LIST VIEW          */
        /* ==================================================================== */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-extrabold uppercase tracking-widest inline-block mb-3">
              {currentCategory ? `Experience Hub / ${currentCategory.title}` : "Enterprise Experience Center"}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {currentCategory ? (
                <>
                  Proven Success in <span className="text-gradient">{currentCategory.title}</span>
                </>
              ) : (
                <>
                  Our Proven Track Record &amp; <span className="text-gradient">Honorable Clients</span>
                </>
              )}
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              {currentCategory 
                ? currentCategory.description 
                : "Explore 8+ years of verified business growth, video productions, Android apps, custom software, and digital marketing results for 250+ enterprise clients across global markets."}
            </p>
          </div>

          {/* Search & Navigation Tab Filter */}
          <div className="mb-12 bg-zinc-900/80 border border-zinc-800 p-4 sm:p-6 rounded-3xl space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Tab Selector */}
              {displaySettings.showProjectShowcaseOnLanding || categorySlug ? (
                <div className="flex items-center gap-2 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800/80 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveTab("clients")}
                    className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "clients"
                        ? "bg-brand-500 text-black shadow-md font-extrabold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    🏢 Our Honorable Clients ({filteredClients.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("showcase")}
                    className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "showcase"
                        ? "bg-brand-500 text-black shadow-md font-extrabold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    🚀 Project Showcase ({filteredProjects.length})
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-zinc-950 px-4 py-2.5 rounded-2xl border border-zinc-800/80 font-extrabold text-xs text-brand-400">
                  <Building2 className="w-4 h-4 text-brand-400" />
                  <span>Our Honorable Clients ({filteredClients.length})</span>
                </div>
              )}

              {/* Universal Search Input */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search project, client, tech or country..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs font-bold"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Industry Filter for Clients tab */}
            {activeTab === "clients" && (
              <div className="pt-3 border-t border-zinc-800 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
                <span className="text-zinc-500 text-[10px] uppercase font-bold mr-1">Industry:</span>
                <button
                  onClick={() => setSelectedIndustry("all")}
                  className={`px-3 py-1 rounded-lg border text-xs font-medium whitespace-nowrap ${
                    selectedIndustry === "all" ? "bg-brand-500/20 text-brand-300 border-brand-500/40" : "bg-zinc-950 text-zinc-400 border-zinc-800"
                  }`}
                >
                  All Industries
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedIndustry(cat.id)}
                    className={`px-3 py-1 rounded-lg border text-xs font-medium whitespace-nowrap ${
                      selectedIndustry === cat.id ? "bg-brand-500/20 text-brand-300 border-brand-500/40" : "bg-zinc-950 text-zinc-400 border-zinc-800"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SECTION A: PROJECT SHOWCASE VIEW */}
          {activeTab === "showcase" && (
            <div className="space-y-12">
              {/* Category Cards Overview if on main view */}
              {!currentCategory && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {showcaseCategories.map((sc) => {
                    const IconComp = sc.iconName ? ICON_MAP[sc.iconName] || Sparkles : Sparkles;
                    const catProjects = publishedProjects.filter(p => p.categorySlug.toLowerCase() === sc.slug.toLowerCase());
                    return (
                      <Link
                        key={sc.id}
                        to={`/our-experience/${sc.slug}`}
                        className="group p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-brand-500/40 transition-all hover:bg-zinc-900/90 flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4 group-hover:scale-110 transition-transform">
                            <IconComp className="w-6 h-6" />
                          </div>
                          <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors mb-2">
                            {sc.title}
                          </h3>
                          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                            {sc.description}
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-bold">
                          <span>{catProjects.length} Verified Projects</span>
                          <span className="text-brand-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Explore Category →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Projects Grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Featured Projects Showcase
                  </h2>
                  <span className="text-xs text-zinc-500 font-medium">Showing {filteredProjects.length} Projects</span>
                </div>

                {filteredProjects.length === 0 ? (
                  <div className="text-center py-16 bg-zinc-900/30 rounded-3xl border border-zinc-800">
                    <p className="text-zinc-400 text-sm font-medium">No projects found matching your filter criteria.</p>
                    <button 
                      onClick={() => { setSearchQuery(""); navigate('/our-experience'); }}
                      className="mt-4 px-4 py-2 rounded-xl bg-zinc-800 text-xs font-bold text-white"
                    >
                      Clear Search &amp; Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                      <div 
                        key={project.id}
                        className="group rounded-3xl bg-zinc-900/70 border border-zinc-800/80 hover:border-brand-500/50 transition-all overflow-hidden flex flex-col justify-between"
                      >
                        <div>
                          {/* Project Banner Image */}
                          <div className="relative aspect-video overflow-hidden bg-zinc-950">
                            <img 
                              src={project.heroBanner || "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 flex gap-2">
                              <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-brand-400 text-[10px] font-extrabold uppercase">
                                {project.categorySlug.replace(/-/g, " ")}
                              </span>
                            </div>
                            <div className="absolute top-3 right-3">
                              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getCountryBadge(project.country).color}`}>
                                {getCountryBadge(project.country).flag} {project.country}
                              </span>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="p-6 space-y-3">
                            <p className="text-xs font-bold text-zinc-400">{project.clientName} • {project.industry}</p>
                            <h3 className="text-base font-bold text-white line-clamp-2 group-hover:text-brand-400 transition-colors leading-snug">
                              {project.title}
                            </h3>
                            
                            {project.results && (
                              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed pt-1">
                                {project.results}
                              </p>
                            )}

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {project.technologiesUsed.slice(0, 3).map((tech, i) => (
                                <span key={i} className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-[10px] text-zinc-300 font-medium">
                                  {tech}
                                </span>
                              ))}
                              {project.technologiesUsed.length > 3 && (
                                <span className="text-[10px] text-zinc-500 font-bold">+{project.technologiesUsed.length - 3}</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Card Footer CTA */}
                        <div className="p-6 pt-0">
                          <Link
                            to={`/our-experience/project/${project.slug}`}
                            className="w-full py-2.5 rounded-xl bg-zinc-800 group-hover:bg-brand-500 text-zinc-200 group-hover:text-black font-extrabold text-xs transition-all flex items-center justify-center gap-1.5"
                          >
                            <span>Read Full Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* SECTION B: OUR HONORABLE CLIENTS VIEW */}
          {activeTab === "clients" && (
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> Enterprise &amp; SME Client Portfolio
                </h2>
                <span className="text-xs text-zinc-500 font-medium">{filteredClients.length} Organizations</span>
              </div>

              {filteredClients.length === 0 ? (
                <div className="text-center py-16 bg-zinc-900/30 rounded-3xl border border-zinc-800">
                  <p className="text-zinc-400 text-sm font-medium">No clients found matching your search term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredClients.map((client) => {
                    const countryBadge = getCountryBadge(client.country);
                    return (
                      <div 
                        key={client.id}
                        className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden">
                              {client.logoUrl ? (
                                <img src={client.logoUrl} alt={client.name} className="w-full h-full object-contain p-2" />
                              ) : (
                                <Building2 className="w-6 h-6 text-brand-400" />
                              )}
                            </div>
                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${countryBadge.color}`}>
                              {countryBadge.flag} {countryBadge.label}
                            </span>
                          </div>

                          <h3 className="text-base font-extrabold text-white mb-1">{client.name}</h3>
                          <p className="text-xs font-semibold text-brand-400/90 mb-3">{client.categoryName}</p>

                          {client.shortDescription && (
                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                              {client.shortDescription}
                            </p>
                          )}

                          {client.serviceProvided && (
                            <div className="pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400">
                              <span className="font-bold text-zinc-300">Services: </span>
                              {client.serviceProvided}
                            </div>
                          )}
                        </div>

                        {client.websiteUrl && (
                          <div className="mt-6 pt-4 border-t border-zinc-800/60">
                            <a 
                              href={client.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-brand-400 hover:underline flex items-center gap-1"
                            >
                              <span>Official Website</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-500/10 via-amber-500/10 to-zinc-900 border border-brand-500/30 text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">
              Ready to Expand Your Business Growth &amp; Enterprise Authority?
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base font-light mb-8">
              Join 250+ honorable clients scaling with Digital Grower Ltd.’s enterprise web development, video production, and AI SEO engineering.
            </p>
            <a
              href="https://wa.me/8801989373683"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-amber-500 hover:from-brand-400 hover:to-amber-400 text-black font-extrabold text-sm shadow-xl shadow-brand-500/20 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk with Growth Engineer on WhatsApp</span>
            </a>
          </div>
        </main>
      )}

      {/* VIDEO LIGHTBOX MODAL */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
              <h4 className="text-xs sm:text-sm font-bold text-white truncate pr-4">{activeVideoModal.title}</h4>
              <button 
                onClick={() => setActiveVideoModal(null)}
                className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full">
              {renderVideoEmbed(activeVideoModal)}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 sm:px-6 lg:px-8 text-zinc-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo textSize="sm" />
            <span className="text-zinc-600">|</span>
            <span>Digital Grower Ltd. (DGL IT)</span>
          </div>
          <p>© 2018–2026 Digital Grower Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
