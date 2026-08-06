import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, CheckCircle2, ShieldCheck, Target } from 'lucide-react';

interface PPCFAQItem {
  question: string;
  answer: string;
  category: 'Google Ads' | 'Meta Ads' | 'ROAS & Strategy' | 'Tracking & Technical';
  keyTakeaway: string;
}

const PPC_FAQS: PPCFAQItem[] = [
  {
    question: "What is Google Ads?",
    answer: "Google Ads is Google's flagship online advertising platform where businesses bid to display brief advertisements, service offerings, product listings, and video content to web users across Google Search, YouTube, Google Maps, Google Shopping, and millions of partner display sites. At Digital Grower Ltd., we leverage Google's AI bidding algorithms (Performance Max, Target ROAS) combined with strict negative keyword sculpting to ensure every ad click represents high-intent demand.",
    category: "Google Ads",
    keyTakeaway: "Programmatic advertising across Search, Shopping, and YouTube targeting high-intent demand."
  },
  {
    question: "How do Google Ads work?",
    answer: "Google Ads operates on an instantaneous, second-price real-time auction system triggered every time a user searches on Google. Your ad's position and Cost Per Click (CPC) are determined by Ad Rank, which is calculated by multiplying your Maximum CPC Bid by your Quality Score (Ad Relevance, Expected CTR, and Landing Page Experience). Our specialists focus on achieving 9/10 and 10/10 Quality Scores to win the top ad slots at a significantly lower CPC than competitors.",
    category: "Google Ads",
    keyTakeaway: "Ad Rank = Bid × Quality Score. High Quality Score lowers CPC and wins top SERP positions."
  },
  {
    question: "How much do Google Ads cost?",
    answer: "The cost of Google Ads depends on industry keyword competitiveness, geographic location, and your target daily budget. While businesses can start advertising with any budget, enterprise campaigns typically invest between $1,500 and $25,000+ monthly in ad spend. Digital Grower Ltd. structures management retainers around positive Return on Ad Spend (ROAS), ensuring ad revenue scales predictably above your expenditure.",
    category: "ROAS & Strategy",
    keyTakeaway: "Flexible budget scaling tailored to industry CPC and ROI-driven customer acquisition goals."
  },
  {
    question: "What is Meta Ads?",
    answer: "Meta Ads is the consolidated advertising ecosystem covering Facebook, Instagram, Messenger, and the Meta Audience Network. Powered by Meta's Advantage+ AI engine, it enables hyper-granular demographic, behavioral, and interest targeting. We use Meta Ads to build full-funnel customer journeys—from viral Reels top-of-funnel awareness to dynamic product catalog retargeting.",
    category: "Meta Ads",
    keyTakeaway: "Full-funnel advertising across Facebook and Instagram powered by Advantage+ AI modeling."
  },
  {
    question: "How do Facebook Ads generate leads?",
    answer: "Facebook Ads generate leads through two primary funnels: 1) Instant Forms (on-platform native forms pre-populated with user Facebook profile data for zero-friction capture), and 2) Dedicated CRO Landing Pages (driving traffic to custom web funnels with high-speed forms and social proof). By combining compelling video hooks with Lookalike audiences based on your best existing customers, we generate high-volume, sales-qualified leads.",
    category: "Meta Ads",
    keyTakeaway: "Combining native Instant Forms and CRO landing pages with custom Lookalike audience targeting."
  },
  {
    question: "How to improve ROAS?",
    answer: "Improving Return on Ad Spend (ROAS) requires a multi-lever optimization strategy: 1) Eliminating wasted budget through rigorous negative keyword sculpting and audience exclusions, 2) Improving creative win rates via continuous A/B hook and visual testing, 3) Optimizing post-click conversion rates (CRO) on landing pages to turn more clicks into customers, and 4) Feeding first-party conversion value signals back into Google and Meta AI bidding engines.",
    category: "ROAS & Strategy",
    keyTakeaway: "Multi-lever optimization: negative keyword pruning, creative testing, CRO, and server-side signals."
  },
  {
    question: "What is Conversion API?",
    answer: "Meta Conversion API (CAPI) is a server-to-server data communication interface that sends marketing data and customer actions directly from your website server to Meta's servers—bypassing browser ad-blockers, cookie restrictions, and iOS privacy limits. DGL IT implements server-side CAPI alongside the Meta Pixel to achieve 100% Event Match Quality and accurate ROAS attribution.",
    category: "Tracking & Technical",
    keyTakeaway: "Server-to-server attribution bypassing browser ad-blockers and iOS cookie restrictions."
  },
  {
    question: "What is Meta Pixel?",
    answer: "The Meta Pixel is a client-side JavaScript snippet installed on your website that tracks visitor actions (page views, add to carts, form submissions, and purchases). It enables custom audience retargeting, conversion tracking, and algorithm optimization by reporting which users convert after viewing or clicking your Facebook and Instagram ads.",
    category: "Tracking & Technical",
    keyTakeaway: "Essential client-side tracking script for audience retargeting and event measurement."
  },
  {
    question: "What is Google Tag Manager?",
    answer: "Google Tag Manager (GTM) is an enterprise Tag Management System that allows marketers and developers to deploy, manage, and update measurement tags (Google Analytics 4, Google Ads Conversion Tags, Meta Pixel, LinkedIn Insight Tag) without editing hardcoded website source code. We use both Web and Server-Side GTM containers to maintain fast website load speeds and clean data governance.",
    category: "Tracking & Technical",
    keyTakeaway: "Zero-code tag management and server-side container orchestration for clean data attribution."
  },
  {
    question: "How does Performance Marketing work?",
    answer: "Performance Marketing is a comprehensive, data-driven advertising model where strategy and budget allocation are strictly governed by measurable actions—such as generated leads, booked appointments, cost per acquisition (CPA), and Return on Ad Spend (ROAS). Unlike traditional brand awareness advertising, every campaign at Digital Grower Ltd. is engineered and audited against clear mathematical ROI KPIs.",
    category: "ROAS & Strategy",
    keyTakeaway: "ROI-governed advertising where every dollar spent is tied to measurable leads, revenue, and CPA."
  }
];

export default function PPCFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate Schema.org FAQPage JSON-LD
  const ppcFaqSchemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": PPC_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section 
      id="ppc-faq"
      aria-labelledby="ppc-faq-heading"
      className="py-20 bg-zinc-950 border-t border-zinc-900/80 text-zinc-100 relative scroll-mt-24"
    >
      {/* Schema.org FAQPage JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ppcFaqSchemaJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" /> PPC Knowledge Base & People Also Ask (PAA)
          </div>
          <h2 id="ppc-faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked <span className="text-brand-400">Paid Advertising Questions</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Clear, authoritative answers to the top 10 performance marketing questions asked by CEOs, CMOs, and e-commerce founders. Fully optimized for Google Featured Snippets and AI Search engines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {PPC_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900/90 border-brand-500/50 shadow-lg shadow-brand-500/5'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-black border border-zinc-800 text-brand-400 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-black/60 border border-zinc-800 flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-brand-400 border-brand-500/40' : 'text-zinc-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-zinc-800/60 animate-fade-in">
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                      {faq.answer}
                    </p>
                    <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800/80 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <span className="font-bold text-brand-300">Executive Takeaway: </span>
                        <span className="text-zinc-300">{faq.keyTakeaway}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900/90 to-black border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-brand-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Want a custom Google Ads or Meta Ads account audit?</h4>
              <p className="text-xs text-zinc-400">We analyze wasted ad spend, Quality Score bottlenecks, and server-side CAPI attribution.</p>
            </div>
          </div>
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-bold text-xs sm:text-sm transition-all shadow-md shrink-0"
          >
            Request Free Ads Audit
          </a>
        </div>

      </div>
    </section>
  );
}
