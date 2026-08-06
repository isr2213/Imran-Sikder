import React, { useState } from 'react';
import {
  HelpCircle,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  MessageSquare,
  Award,
  Zap,
  Volume2,
  FileText
} from 'lucide-react';
import { GEO_QUESTION_FIRST_ANSWERS, QuestionFirstAnswerItem } from '../data/geoKnowledgeGraph';

interface QuestionFirstAnswerHubProps {
  customTitle?: string;
  customSubtitle?: string;
}

export default function QuestionFirstAnswerHubSection({
  customTitle = "Question-First AI Search Answer Engine",
  customSubtitle = "11-Point E-E-A-T & Featured Snippets Knowledge Base for Google AI Overview, ChatGPT Search, Gemini, and Perplexity AI."
}: QuestionFirstAnswerHubProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [viewMode, setViewMode] = useState<"concise" | "detailed">("detailed");

  const userLevels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredAnswers = selectedLevel === "All"
    ? GEO_QUESTION_FIRST_ANSWERS
    : GEO_QUESTION_FIRST_ANSWERS.filter(item => item.userLevel === selectedLevel);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      aria-labelledby="question-first-hub-heading"
      className="py-20 bg-black border-t border-zinc-900 text-zinc-100 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4" /> Question-First Entity SEO
          </div>
          <h2 id="question-first-hub-heading" className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {customTitle}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            {customSubtitle}
          </p>
        </div>

        {/* Filter Controls & Snippet Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
          
          {/* User Level Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-zinc-400 mr-1">User Level:</span>
            {userLevels.map((lvl) => {
              const isSelected = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => {
                    setSelectedLevel(lvl);
                    setOpenIndex(0);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                    isSelected
                      ? 'bg-brand-500 text-white border-brand-400 shadow-md'
                      : 'bg-black/60 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>

          {/* AI Snippet vs. Detailed E-E-A-T Toggle */}
          <div className="flex items-center gap-2 bg-black/60 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setViewMode("concise")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "concise"
                  ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" /> AI Summary Snippet
            </button>
            <button
              onClick={() => setViewMode("detailed")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "detailed"
                  ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" /> Full E-E-A-T Explanation
            </button>
          </div>

        </div>

        {/* Question-First Accordion List */}
        <div className="space-y-4">
          {filteredAnswers.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900/90 border-brand-500/50 shadow-xl'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {/* Question Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-brand-950 border border-brand-800/60 text-brand-400 shrink-0">
                      {item.questionType}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.questionText}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 hidden sm:inline-block">
                      {item.userLevel}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400" />
                    )}
                  </div>
                </button>

                {/* Answer Content Panel */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-800/80">
                    
                    {/* Concise Summary Box (Optimized for Google AI Overviews & Voice Search) */}
                    <div className="p-4 rounded-xl bg-black/60 border border-brand-500/30 mb-4">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-brand-400 flex items-center gap-1.5 uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" /> Concise AI Answer Snippet & Voice Search Ready:
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {item.schemaAnswerType}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed">
                        {item.conciseSnippet}
                      </p>
                    </div>

                    {/* Detailed E-E-A-T Explanation (if detailed view is active) */}
                    {viewMode === "detailed" && (
                      <div className="mt-4 pt-4 border-t border-zinc-800/60">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-brand-400" /> Detailed Enterprise E-E-A-T Analysis:
                        </h4>
                        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                          {item.detailedExplanation}
                        </p>
                      </div>
                    )}

                    {/* Metadata Footer */}
                    <div className="mt-4 pt-3 border-t border-zinc-800/40 flex flex-wrap items-center justify-between text-xs text-zinc-500 gap-2">
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-3.5 h-3.5 text-brand-400" />
                        <span>Voice Search Optimized</span>
                        <span>•</span>
                        <span>Schema.org JSON-LD Structured</span>
                      </div>
                      <span className="text-brand-300 font-bold">
                        Digital Grower Ltd. Authority
                      </span>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Voice Search & Zero-Click Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-950/40 via-zinc-900 to-black border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Zero-Click Search & AI Citation Architecture
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Every question above is formatted with Schema.org JSON-LD structured data so AI search engines can cite Digital Grower Ltd. directly.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20 inline-flex items-center gap-2"
            >
              Request AI Search Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
