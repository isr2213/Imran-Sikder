import React, { useState, useEffect } from 'react';
import { BgcVideoPlayer } from './BgcVideoPlayer';
import { getStoredBgcData, BgcData, EXACT_HOMEPAGE_PARAGRAPH, DEFAULT_HOMEPAGE_BGC } from '../data/bgcData';
import { Zap, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BgcSectionProps {
  onBookConsultation?: () => void;
}

export const BgcSection: React.FC<BgcSectionProps> = ({ onBookConsultation }) => {
  const [bgcData, setBgcData] = useState<BgcData>(getStoredBgcData());

  useEffect(() => {
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

  const homepageCfg = bgcData.homepageBgc || DEFAULT_HOMEPAGE_BGC;

  // Check draft or section disabled status
  if (homepageCfg.status === 'draft' || homepageCfg.enableSection === false) {
    return null;
  }

  const badgeText = homepageCfg.badgeText || "⚡ SIGNATURE SOCIAL MEDIA SOLUTION";
  const headingText = homepageCfg.heading || "How BGC Works";
  const paragraphText = homepageCfg.paragraph || EXACT_HOMEPAGE_PARAGRAPH;
  const isVideoEnabled = homepageCfg.enableVideoModule === true;

  return (
    <section 
      id="how-bgc-works" 
      className="py-20 sm:py-28 bg-gradient-to-b from-black via-zinc-950 to-black border-y border-zinc-900/80 relative overflow-hidden"
    >
      {/* Ambient decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* 1. BADGE - Placed ABOVE main heading */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="group relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xl shadow-brand-500/10 backdrop-blur-md hover:border-brand-400 hover:bg-brand-500/20 transition-all duration-300 hover:scale-105 cursor-default">
            <Zap className="w-4 h-4 text-brand-400 animate-bounce" />
            <span>{badgeText}</span>
            <span className="absolute -inset-1 rounded-full bg-brand-500/20 blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* 2. MAIN TITLE - Animated "How BGC Works" */}
        <div className="mb-8 relative">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
            <span className="bg-gradient-to-r from-white via-brand-200 to-brand-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shine drop-shadow-md">
              {headingText}
            </span>
          </h2>
          {/* Soft ambient glow underneath heading */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-16 bg-brand-500/15 blur-2xl rounded-full -z-10 pointer-events-none" />
        </div>

        {/* 3. DESCRIPTION PARAGRAPH - Center aligned, max-w ~900px */}
        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed sm:leading-loose text-center tracking-normal">
            {paragraphText}
          </p>
        </div>

        {/* 4. OPTIONAL CTA BUTTONS */}
        {homepageCfg.showCtaButton !== false && (
          <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {onBookConsultation ? (
              <button
                onClick={onBookConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-400 hover:to-brand-300 text-black font-extrabold text-sm sm:text-base shadow-2xl shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>{homepageCfg.ctaButtonText || "Start BGC Growth Challenge"}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <Link
                to={homepageCfg.ctaButtonLink || "/our-experience/business-growth-challenge"}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-400 hover:to-brand-300 text-black font-extrabold text-sm sm:text-base shadow-2xl shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <span>{homepageCfg.ctaButtonText || "Explore BGC Showcase"}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}

            <Link
              to="/our-experience/business-growth-challenge"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>View BGC Showcase Page</span>
            </Link>
          </div>
        )}

        {/* 5. VIDEO MODULE - HIDDEN BY DEFAULT (Only renders when isVideoEnabled is true) */}
        {isVideoEnabled && (
          <div className="mt-8 max-w-4xl mx-auto text-left animate-fade-in">
            <div className="p-3 sm:p-4 rounded-3xl bg-zinc-950/90 border border-zinc-800/90 shadow-2xl backdrop-blur-xl relative">
              <BgcVideoPlayer
                videoType={homepageCfg.videoType || 'youtube'}
                videoUrl={homepageCfg.videoUrl || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
                thumbnailUrl={homepageCfg.videoThumbnail}
                autoplay={homepageCfg.autoplay}
                controls={homepageCfg.controls}
                title={headingText}
              />

              {/* Verified SLA Badge overlay underneath video player */}
              <div className="mt-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Money-Back Guarantee Protected</h4>
                    <p className="text-[11px] text-zinc-400">Achieve agreed ROI targets or receive a guaranteed refund.</p>
                  </div>
                </div>

                <Link
                  to="/our-experience/business-growth-challenge"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors whitespace-nowrap"
                >
                  <span>Explore Showcase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
