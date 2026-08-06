import React from "react";
import { MessageCircle, PhoneCall, Sparkles } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenConsultation?: () => void;
  serviceTitle?: string;
}

export default function StickyMobileCTA({
  onOpenConsultation,
  serviceTitle = "Enterprise Solutions"
}: StickyMobileCTAProps) {
  const whatsappText = encodeURIComponent(
    `Hello Digital Grower Ltd., I need an enterprise consultation regarding: ${serviceTitle}`
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-2.5 px-4 shadow-2xl flex items-center justify-between gap-2">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/8801989373683?text=${whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span>WhatsApp</span>
      </a>

      {/* Call Now Button */}
      <a
        href="tel:+8801989373683"
        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 font-bold text-xs transition-all cursor-pointer shrink-0"
      >
        <PhoneCall className="w-4 h-4 text-brand-400 shrink-0" />
        <span>Call Now</span>
      </a>

      {/* Free Consultation Button */}
      <button
        onClick={onOpenConsultation}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-bold text-xs shadow-md shadow-brand-500/20 transition-all cursor-pointer"
      >
        <Sparkles className="w-4 h-4 shrink-0" />
        <span>Free Demo</span>
      </button>
    </div>
  );
}
