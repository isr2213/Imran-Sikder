import React, { useState } from "react";

interface LogoProps {
  className?: string;
  textSize?: "sm" | "md" | "lg";
}

export default function Logo({ 
  className = "flex items-center", 
  textSize = "md"
}: LogoProps) {
  const [imgSrc, setImgSrc] = useState("/logo.png");
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    if (imgSrc === "/logo.png") {
      setImgSrc("/favicon.png");
    } else {
      setImgError(true);
    }
  };

  return (
    <div className={className}>
      {!imgError ? (
        <img 
          src={imgSrc}
          onError={handleError}
          alt="Digital Grower Ltd. Logo"
          title="Digital Grower Ltd."
          width={textSize === "sm" ? 180 : textSize === "lg" ? 360 : 280}
          height={textSize === "sm" ? 64 : textSize === "lg" ? 128 : 100}
          loading="eager"
          decoding="async"
          style={{ background: "transparent" }}
          className={`object-contain ${
            textSize === "sm" ? "h-10 sm:h-12 w-auto max-w-[180px]" : 
            textSize === "lg" ? "h-16 sm:h-20 w-auto max-w-[320px]" : 
            "h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[260px]"
          }`} 
        />
      ) : (
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-amber-400 p-0.5 shadow-lg shadow-brand-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300 font-extrabold text-lg tracking-tight">D</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-white text-base leading-tight">
              DIGITAL<span className="text-brand-400">GROWER</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-semibold">
              LTD. • IT & Marketing
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
