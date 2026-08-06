import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ExternalLink, Sparkles } from 'lucide-react';

interface BgcVideoPlayerProps {
  videoType: 'mp4' | 'webm' | 'youtube' | 'vimeo' | 'facebook' | 'instagram' | 'tiktok';
  videoUrl: string;
  thumbnailUrl?: string;
  autoplay?: boolean;
  controls?: boolean;
  title?: string;
  className?: string;
}

export const BgcVideoPlayer: React.FC<BgcVideoPlayerProps> = ({
  videoType,
  videoUrl,
  thumbnailUrl,
  autoplay = false,
  controls = true,
  title = "How BGC Works",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto pause video when out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Helper to construct embed URLs for different video providers
  const getEmbedInfo = (): { embedUrl: string; isDirectEmbed: boolean } => {
    if (!videoUrl) {
      return { embedUrl: '', isDirectEmbed: false };
    }

    const trimmed = videoUrl.trim();

    if (videoType === 'mp4' || videoType === 'webm') {
      return { embedUrl: trimmed, isDirectEmbed: false };
    }

    if (videoType === 'youtube') {
      let videoId = '';
      if (trimmed.includes('youtu.be/')) {
        videoId = trimmed.split('youtu.be/')[1]?.split('?')[0] || '';
      } else if (trimmed.includes('watch?v=')) {
        videoId = trimmed.split('watch?v=')[1]?.split('&')[0] || '';
      } else if (trimmed.includes('embed/')) {
        videoId = trimmed.split('embed/')[1]?.split('?')[0] || '';
      } else {
        videoId = trimmed;
      }
      const autoplayParam = isPlaying || autoplay ? '1' : '0';
      return {
        embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=${autoplayParam}&rel=0&enablejsapi=1`,
        isDirectEmbed: true
      };
    }

    if (videoType === 'vimeo') {
      let vimeoId = trimmed;
      if (trimmed.includes('vimeo.com/')) {
        vimeoId = trimmed.split('vimeo.com/')[1]?.split('?')[0] || '';
      }
      const autoplayParam = isPlaying || autoplay ? '1' : '0';
      return {
        embedUrl: `https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplayParam}`,
        isDirectEmbed: true
      };
    }

    if (videoType === 'facebook') {
      const encodedUrl = encodeURIComponent(trimmed);
      return {
        embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&autoplay=${isPlaying || autoplay}`,
        isDirectEmbed: true
      };
    }

    if (videoType === 'instagram') {
      let instaPath = trimmed;
      if (!instaPath.endsWith('/embed')) {
        instaPath = `${instaPath.replace(/\/$/, '')}/embed`;
      }
      return {
        embedUrl: instaPath,
        isDirectEmbed: true
      };
    }

    if (videoType === 'tiktok') {
      let videoId = trimmed;
      if (trimmed.includes('video/')) {
        videoId = trimmed.split('video/')[1]?.split('?')[0] || '';
      }
      return {
        embedUrl: `https://www.tiktok.com/embed/v2/${videoId}`,
        isDirectEmbed: true
      };
    }

    return { embedUrl: trimmed, isDirectEmbed: true };
  };

  const { embedUrl, isDirectEmbed } = getEmbedInfo();

  const handleStartPlay = () => {
    setHasStarted(true);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.warn("Video play error:", e));
    }
  };

  const toggleNativePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(e => console.warn("Video play error:", e));
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => console.warn(err));
    } else {
      document.exitFullscreen().catch(err => console.warn(err));
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl shadow-brand-500/10 group transition-all duration-300 hover:border-brand-500/40 ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-amber-500/10 to-brand-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 1. If not started yet or showing thumbnail overlay */}
      {!hasStarted && !autoplay ? (
        <div className="relative w-full h-full flex items-center justify-center cursor-pointer group/overlay overflow-hidden" onClick={handleStartPlay}>
          {thumbnailUrl ? (
            <img 
              src={thumbnailUrl} 
              alt={title} 
              className="w-full h-full object-cover transform group-hover/overlay:scale-105 transition-transform duration-700 brightness-90 group-hover/overlay:brightness-100"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-brand-500/40 animate-pulse" />
            </div>
          )}

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Play Button Animation & Ripple */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
            <div className="relative flex items-center justify-center">
              {/* Outer Pulsing Ring */}
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-500/30 animate-ping opacity-75 pointer-events-none" />
              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-brand-400/20 blur-md pointer-events-none" />

              {/* Central Play Badge */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-brand-500 to-brand-400 text-black flex items-center justify-center shadow-xl shadow-brand-500/40 transform group-hover/overlay:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-black fill-black" />
              </div>
            </div>

            <p className="text-white text-sm sm:text-base font-extrabold mt-4 tracking-wide group-hover/overlay:text-brand-400 transition-colors">
              Click to Watch Demo & How BGC Works
            </p>
            <span className="text-[11px] text-zinc-400 font-mono mt-1 uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full border border-zinc-800">
              {videoType.toUpperCase()} Video • High Quality
            </span>
          </div>
        </div>
      ) : (
        /* 2. Active Video Rendering */
        <div className="relative w-full h-full bg-black">
          {isDirectEmbed ? (
            <iframe
              ref={iframeRef}
              src={embedUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="relative w-full h-full group/video">
              <video
                ref={videoRef}
                src={embedUrl}
                poster={thumbnailUrl}
                controls={controls}
                autoPlay={autoplay || hasStarted}
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Custom Controls Bar if controls enabled */}
              {controls && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-between z-20">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={toggleNativePlay}
                      className="p-2 rounded-lg bg-white/10 hover:bg-brand-500 text-white hover:text-black transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-white/10 hover:bg-zinc-800 text-white transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-xs font-semibold text-zinc-300 truncate max-w-[200px]">
                      {title}
                    </span>
                  </div>

                  <button 
                    onClick={toggleFullscreen}
                    className="p-2 rounded-lg bg-white/10 hover:bg-zinc-800 text-white transition-colors"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
