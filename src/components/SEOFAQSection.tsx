import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { QUESTION_SEO_KEYWORDS } from '../data/seoKeywords';

interface FAQItem {
  question: string;
  answer: string;
  category: 'Fundamentals' | 'Technical' | 'Business & ROI' | 'Strategy';
  keyTakeaway: string;
}

const SEO_FAQS: FAQItem[] = [
  {
    question: "What is SEO?",
    answer: "Search Engine Optimization (SEO) is the technical, content, and authority engineering process of optimizing web applications and digital assets to rank at the top of Google Search, Bing, and AI Generative Answer Engines (ChatGPT, Gemini, Perplexity). Unlike paid advertising where traffic stops when budgets end, SEO creates an evergreen digital asset that compounds organic traffic, brand trust, and revenue over time.",
    category: "Fundamentals",
    keyTakeaway: "Evergreen organic search visibility across Google, Bing, and LLM AI Search Engines."
  },
  {
    question: "How does SEO work?",
    answer: "SEO works by aligning your website architecture with how search engine crawlers (Googlebot, Bingbot) and semantic AI algorithms evaluate, index, and rank information. It combines three core pillars: 1) On-Page SEO (semantic HTML5, LSI keywords, and entity density), 2) Technical SEO (LCP < 2.5s Core Web Vitals, XML sitemaps, schema JSON-LD, and mobile responsiveness), and 3) Off-Page SEO (authoritative domain backlinks, digital PR, and brand co-citations).",
    category: "Fundamentals",
    keyTakeaway: "Three-pillar synergy of On-Page semantics, Technical speed, and Off-Page authority."
  },
  {
    question: "Why is SEO important?",
    answer: "SEO is critical because over 68% of all measurable online experiences begin with a search engine, and the top three organic SERP results capture more than 54% of all user clicks. For enterprises in Bangladesh and global markets, SEO delivers the lowest customer acquisition cost (CAC), highest long-term ROI, and establishes unquestioned brand authority against competitors.",
    category: "Business & ROI",
    keyTakeaway: "68%+ online experiences start with search; organic SEO delivers lowest long-term CAC."
  },
  {
    question: "How long does SEO take?",
    answer: "Initial technical improvements (like fixing indexing errors or improving Core Web Vitals LCP/CLS) can show positive SERP movement within 14 to 30 days. However, building full topical authority, competitive keyword dominance, and compounding organic lead generation typically requires 90 to 180 days of structured SEO execution.",
    category: "Strategy",
    keyTakeaway: "Initial technical wins in 14-30 days; full topical dominance within 90-180 days."
  },
  {
    question: "How much does SEO cost?",
    answer: "Enterprise SEO investment varies based on domain authority, industry competition, and geographical target markets. At Digital Grower Ltd., SEO packages and retainers are customized following a comprehensive technical SEO audit. We structure pricing around predictable ROI, ensuring your monthly organic revenue gains far exceed the retainer cost.",
    category: "Business & ROI",
    keyTakeaway: "ROI-positive retainers tailored to competitive landscape and enterprise growth goals."
  },
  {
    question: "What is Technical SEO?",
    answer: "Technical SEO focuses on optimizing the server, rendering pipeline, and code architecture of a website so search engines can crawl, interpret, and index pages with zero friction. Key elements include Core Web Vitals optimization (LCP < 2.5s, INP < 200ms, CLS 0.00), Schema.org JSON-LD structured data, XML sitemap governance, canonical tags, HTTPS SSL security, and JavaScript SEO rendering.",
    category: "Technical",
    keyTakeaway: "Server response speed, Core Web Vitals, schema markup, and crawl budget governance."
  },
  {
    question: "What is Local SEO?",
    answer: "Local SEO is the specialized discipline of optimizing a business footprint to dominate geo-targeted search results and the Google Maps Top 3 Pack. It requires rigorous NAP (Name, Address, Phone) consistency across 100+ business directories, Google Business Profile (GBP) review management, city-specific landing pages, and localized schema coordinates markup.",
    category: "Technical",
    keyTakeaway: "Dominating Google Maps Top 3 Pack and local geo-targeted buyer intent queries."
  },
  {
    question: "What is Ecommerce SEO?",
    answer: "Ecommerce SEO is the systematic optimization of online retail stores (Shopify, WooCommerce, custom enterprise catalogs) to attract high-intent buyers. It involves product offer schema markup (enabling price, availability, and review star snippets in Google results), faceted navigation crawl budget control, and category page PageRank sculpting.",
    category: "Technical",
    keyTakeaway: "Product schema rich snippets, category taxonomy SEO, and Shopify/WooCommerce authority."
  },
  {
    question: "How do backlinks work?",
    answer: "Backlinks work as third-party algorithmic votes of confidence and trust signals from external domains. When an authoritative website (high DA/TF) links to your content using natural contextual anchor text, Google Search and AI answer engines treat your domain as a verified entity. We build white-hat, editorial backlinks via digital PR and industry citations without toxic link risk.",
    category: "Strategy",
    keyTakeaway: "White-hat editorial trust signals and digital PR that elevate Domain Authority."
  },
  {
    question: "How can SEO increase sales?",
    answer: "SEO increases sales by intercepting high-intent commercial and transactional queries exactly when buyers are actively searching for solutions. By combining high-ranking organic pages with conversion-rate-optimized (CRO) landing layouts, clear call-to-action funnels, and E-E-A-T credibility, SEO converts search visibility into predictable revenue.",
    category: "Business & ROI",
    keyTakeaway: "Intercepting high-intent buyers with CRO-optimized organic landing pages."
  }
];

export default function SEOFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate Schema.org FAQPage JSON-LD
  const faqSchemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": SEO_FAQS.map(faq => ({
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
      id="faq"
      aria-labelledby="seo-faq-heading"
      className="py-20 bg-zinc-950 border-t border-zinc-900/80 text-zinc-100 relative scroll-mt-24"
    >
      {/* Schema.org FAQPage JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" /> E-E-A-T Knowledge Base & People Also Ask (PAA)
          </div>
          <h2 id="seo-faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked <span className="text-brand-400">SEO Questions</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Clear, authoritative answers to the top 10 enterprise SEO questions asked by CEOs, CMOs, and digital marketing leaders. Fully optimized for Google Featured Snippets and AI Search engines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {SEO_FAQS.map((faq, idx) => {
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
            <ShieldCheck className="w-6 h-6 text-brand-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Need a custom technical SEO audit for your domain?</h4>
              <p className="text-xs text-zinc-400">We analyze 100+ Core Web Vitals, schema markup, and competitor backlinks.</p>
            </div>
          </div>
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-black font-bold text-xs sm:text-sm transition-all shadow-md shrink-0"
          >
            Request Free SEO Audit
          </a>
        </div>

      </div>
    </section>
  );
}
