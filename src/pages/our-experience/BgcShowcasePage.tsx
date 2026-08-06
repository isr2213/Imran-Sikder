import React, { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  Sparkles, 
  ShieldCheck, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Award, 
  HelpCircle, 
  Image as ImageIcon, 
  ChevronDown, 
  Zap,
  Users,
  Building2,
  DollarSign,
  Maximize2,
  X
} from 'lucide-react';
import { BgcVideoPlayer } from '../../components/BgcVideoPlayer';
import { getStoredBgcData, BgcData, BgcVideoItem, BgcImageItem, DEFAULT_BGC_DESCRIPTION } from '../../data/bgcData';

interface BgcShowcasePageProps {
  onBookConsultation?: () => void;
}

export const BgcShowcasePage: React.FC<BgcShowcasePageProps> = ({ onBookConsultation }) => {
  const [bgcData, setBgcData] = useState<BgcData>(getStoredBgcData());
  const [activeVideoCategory, setActiveVideoCategory] = useState<string>('All');
  const [selectedVideoModal, setSelectedVideoModal] = useState<BgcVideoItem | null>(null);
  const [selectedImageLightbox, setSelectedImageLightbox] = useState<BgcImageItem | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>(bgcData.faqs[0]?.id || null);

  useEffect(() => {
    // Fetch live data from API if server is running
    fetch('/api/bgc')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.bgcData) {
          setBgcData(data.bgcData);
        }
      })
      .catch(() => {
        setBgcData(getStoredBgcData());
      });
  }, []);

  const videoCategories = ['All', ...Array.from(new Set(bgcData.videos.map(v => v.category || 'General')))];

  const filteredVideos = activeVideoCategory === 'All'
    ? bgcData.videos
    : bgcData.videos.filter(v => (v.category || 'General') === activeVideoCategory);

  const paragraphs = (bgcData.description || DEFAULT_BGC_DESCRIPTION)
    .split('\n\n')
    .map(p => p.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-brand-500 selection:text-white pt-20">
      {/* Dynamic SEO Meta & Schema Injector */}
      <SEOHead
        title={bgcData.seoTitle || "Business Growth Challenge (BGC) | Digital Grower Ltd."}
        description={bgcData.metaDescription}
        canonicalUrl={bgcData.canonicalUrl || "https://digitalgrowltd.com/our-experience/business-growth-challenge"}
        keywords={bgcData.keywords}
        ogImage={bgcData.openGraphImage}
      />

      {/* 1. HERO BANNER */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-r from-brand-500/10 via-amber-500/5 to-brand-500/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 font-mono text-xs uppercase tracking-widest mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>Official Experience Center • BGC Flagship</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white max-w-4xl mx-auto leading-tight">
            <span className="bg-gradient-to-r from-white via-brand-300 to-brand-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shine">
              Business Growth Challenge
            </span>
          </h1>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Hands-Free Social Media Marketing, Dedicated R&D Growth Squad & Guaranteed ROI Targets for Scaling Enterprises.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {onBookConsultation ? (
              <button
                onClick={onBookConsultation}
                className="py-4 px-8 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-400 hover:to-brand-300 text-black font-black text-sm shadow-xl shadow-brand-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Enroll in BGC Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <a
                href="#bgc-contact-cta"
                className="py-4 px-8 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-400 hover:to-brand-300 text-black font-black text-sm shadow-xl shadow-brand-500/20 transition-all flex items-center gap-2"
              >
                <span>Enroll in BGC Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}

            <a
              href="#bgc-video-showcase"
              className="py-4 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-sm transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-brand-400 fill-brand-400" />
              <span>Watch Case Studies</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. HOW BGC WORKS OVERVIEW SECTION */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Featured Video */}
            <div className="lg:col-span-6">
              <div className="relative">
                <BgcVideoPlayer
                  videoType={bgcData.videoType || 'youtube'}
                  videoUrl={bgcData.videoUrl || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
                  thumbnailUrl={bgcData.videoThumbnail}
                  autoplay={bgcData.autoplay}
                  controls={bgcData.controls}
                  title="How BGC Works Masterclass"
                />

                <div className="mt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <p className="text-xs text-zinc-300 font-medium">
                    Backed by Digital Grower Ltd.'s binding Money-Back Target Guarantee SLA.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Literal Text Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-3xl bg-zinc-950/90 border border-zinc-800 shadow-2xl space-y-5">
                <h3 className="text-2xl font-bold text-white font-display">
                  {bgcData.sectionTitle || "How BGC Works"}
                </h3>

                {paragraphs.map((pText, idx) => {
                  const isMoneyBack = pText.toLowerCase().includes('money-back guarantee');
                  const isWhyDelay = pText.toLowerCase().includes('why delay');

                  if (isMoneyBack) {
                    return (
                      <div key={idx} className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-zinc-900 to-brand-500/10 border border-emerald-500/30 flex items-start gap-3">
                        <Award className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-bold text-emerald-300 leading-relaxed">
                          {pText}
                        </p>
                      </div>
                    );
                  }

                  if (isWhyDelay) {
                    return (
                      <h4 key={idx} className="text-xl font-extrabold text-brand-400 font-display pt-2">
                        {pText}
                      </h4>
                    );
                  }

                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-1" />
                      <p className="text-zinc-200 text-sm leading-relaxed">
                        {pText}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE METRICS & BEFORE / AFTER */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display">Verified Performance Metrics</h2>
            <p className="text-zinc-400 text-sm mt-2">Real client outcomes generated through BGC execution.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bgcData.performanceMetrics.map((metric, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black border border-zinc-800/80 text-center space-y-2 hover:border-brand-500/40 transition-all">
                <div className="text-3xl sm:text-4xl font-black text-brand-400 font-display">{metric.value}</div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">{metric.label}</div>
                {metric.change && (
                  <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
                    {metric.change}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Before vs After Comparison */}
          {bgcData.beforeAfter && (
            <div className="p-8 rounded-3xl bg-black border border-zinc-800 space-y-6">
              <h3 className="text-xl font-bold text-white text-center font-display">Transformation: Before BGC vs. After BGC</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs uppercase tracking-wider text-center">
                    {bgcData.beforeAfter.beforeLabel}
                  </div>
                  <div className="aspect-video rounded-2xl overflow-hidden border border-zinc-800">
                    <img src={bgcData.beforeAfter.beforeUrl} alt="Before BGC" className="w-full h-full object-cover filter grayscale contrast-125" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-wider text-center">
                    {bgcData.beforeAfter.afterLabel}
                  </div>
                  <div className="aspect-video rounded-2xl overflow-hidden border border-brand-500/40 shadow-xl shadow-brand-500/10">
                    <img src={bgcData.beforeAfter.afterUrl} alt="After BGC" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. VIDEO GALLERY */}
      <section id="bgc-video-showcase" className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display">Video Showcase & Production</h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">High-converting social media video ads and strategy breakdowns.</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {videoCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveVideoCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeVideoCategory === cat
                      ? 'bg-brand-500 text-black shadow-md'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map(vid => (
              <div 
                key={vid.id}
                onClick={() => setSelectedVideoModal(vid)}
                className="group cursor-pointer rounded-2xl bg-zinc-950 border border-zinc-800/80 overflow-hidden hover:border-brand-500/50 transition-all duration-300 shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                  {vid.thumbnail ? (
                    <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-700">
                      <Play className="w-10 h-10" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-500 text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-black" />
                    </div>
                  </div>

                  <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-brand-400 uppercase border border-zinc-800">
                    {vid.type}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="text-xs font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-2">
                    {vid.title}
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono">{vid.category || 'General'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMAGE GALLERY */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">Creative Studio Image Gallery</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">High-converting social creative assets & campaign designs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bgcData.images.map(img => (
              <div 
                key={img.id}
                onClick={() => setSelectedImageLightbox(img)}
                className="group cursor-pointer rounded-2xl bg-black border border-zinc-800/80 overflow-hidden hover:border-brand-500/50 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-xs font-bold text-white">{img.title || img.alt}</h4>
                  {img.caption && <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">{img.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES & CLIENT RESULTS */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display">Verified Client Success Stories</h2>
            <p className="text-zinc-400 text-sm mt-1">Proven revenue scaling delivered under BGC service SLAs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bgcData.successStories.map(ss => (
              <div key={ss.id} className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 hover:border-brand-500/40 transition-all">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{ss.clientName}</h3>
                    <span className="text-xs font-mono text-brand-400">{ss.industry}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 font-bold text-xs">
                    {ss.result}
                  </div>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{ss.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">Frequently Asked Questions</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">Everything you need to know about starting BGC.</p>
          </div>

          <div className="space-y-4">
            {bgcData.faqs.map(faq => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="rounded-2xl bg-black border border-zinc-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 hover:text-brand-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-400' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-900 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. HIGH CONVERTING CTA BANNER */}
      <section id="bgc-contact-cta" className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guaranteed Business Growth</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
            Ready to Take Your Business to the Next Level?
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Let Digital Grower Ltd. take full responsibility for your online marketing while you focus on growing your core operations.
          </p>

          <div className="pt-4">
            {onBookConsultation ? (
              <button
                onClick={onBookConsultation}
                className="py-4 px-10 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-400 hover:to-brand-300 text-black font-black text-base shadow-2xl shadow-brand-500/30 transition-all inline-flex items-center gap-3 cursor-pointer"
              >
                <span>Book Free BGC Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <a
                href="/#contact"
                className="py-4 px-10 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-400 hover:to-brand-300 text-black font-black text-base shadow-2xl shadow-brand-500/30 transition-all inline-flex items-center gap-3"
              >
                <span>Book Free BGC Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* VIDEO LIGHTBOX MODAL */}
      {selectedVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedVideoModal(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/80 hover:bg-zinc-800 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-4">
              <BgcVideoPlayer
                videoType={selectedVideoModal.type}
                videoUrl={selectedVideoModal.url}
                thumbnailUrl={selectedVideoModal.thumbnail}
                autoplay={true}
                controls={true}
                title={selectedVideoModal.title}
              />
              <h3 className="text-sm font-bold text-white mt-4">{selectedVideoModal.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE LIGHTBOX MODAL */}
      {selectedImageLightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full text-center space-y-4">
            <button
              onClick={() => setSelectedImageLightbox(null)}
              className="absolute top-0 right-0 p-3 rounded-full bg-zinc-900 text-white hover:bg-brand-500 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImageLightbox.url} alt={selectedImageLightbox.alt} className="max-h-[80vh] mx-auto rounded-2xl object-contain border border-zinc-800" />
            <h3 className="text-base font-bold text-white">{selectedImageLightbox.title || selectedImageLightbox.alt}</h3>
            {selectedImageLightbox.caption && <p className="text-xs text-zinc-400">{selectedImageLightbox.caption}</p>}
          </div>
        </div>
      )}
    </div>
  );
};
