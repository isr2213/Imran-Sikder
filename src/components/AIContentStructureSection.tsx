import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  FileText,
  HelpCircle,
  AlertTriangle,
  Layers,
  Globe,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Download,
  Clock,
  Cpu,
  Share2,
  Award
} from 'lucide-react';
import {
  ALL_TOPIC_AI_STRUCTURES,
  TopicAIStructure
} from '../data/aiContentArchitectureData';

interface AIContentStructureSectionProps {
  serviceSlug?: string;
  customHeading?: string;
  customSubheading?: string;
}

export default function AIContentStructureSection({
  serviceSlug = "website-design-development",
  customHeading = "AI Search & 9-Part Topic Architecture",
  customSubheading = "Engineered for Generative Engine Optimization (GEO), Entity-First Citations, Google AI Overview, and Enterprise E-E-A-T Topical Authority."
}: AIContentStructureSectionProps) {
  // Find matching topic structure or fallback to first
  const matchedTopic: TopicAIStructure = ALL_TOPIC_AI_STRUCTURES.find(
    (t) => t.serviceSlug === serviceSlug
  ) || ALL_TOPIC_AI_STRUCTURES[0];

  const [activeTab, setActiveTab] = useState<number>(1);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const tabs = [
    { id: 1, label: "1. Executive Summary", icon: FileText },
    { id: 2, label: "2. Detailed E-E-A-T", icon: BookOpen },
    { id: 3, label: "3. Real Business Examples", icon: Award },
    { id: 4, label: "4. Industry Applications", icon: Layers },
    { id: 5, label: "5. Problem vs. Solution", icon: AlertTriangle },
    { id: 6, label: "6. Process Checklist", icon: CheckCircle2 },
    { id: 7, label: "7. Voice Search Q&A", icon: HelpCircle },
    { id: 8, label: "8. International SEO", icon: Globe },
    { id: 9, label: "9. Conversion Strategy", icon: Share2 },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section 
      aria-labelledby="ai-content-structure-heading"
      className="py-20 bg-[#07070b] border-t border-zinc-900/80 text-zinc-100 relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> GEO & Entity-First Content Engine
          </div>
          <h2 id="ai-content-structure-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {customHeading}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            {customSubheading}
          </p>
        </div>

        {/* --- EXECUTIVE AI READABILITY SUMMARY BOX (ALWAYS VISIBLE ABOVE TABS FOR AI SNIPPETS) --- */}
        <div className="mb-12 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 to-black border border-brand-500/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            
            {/* Left Column: Definition & Summary */}
            <div className="lg:w-7/12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-950/80 border border-brand-800 text-brand-300 text-xs font-bold uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5" /> AI Summary & Definition Box
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                {matchedTopic.executiveSummary.definitionBoxTitle}
              </h3>
              <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed bg-black/60 p-4 rounded-2xl border border-zinc-800/80 mb-4">
                {matchedTopic.executiveSummary.conciseDefinition}
              </p>
              <div className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                {matchedTopic.executiveSummary.shortSummaryParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Key Takeaways & Actionable Recommendations */}
            <div className="lg:w-5/12 w-full flex flex-col gap-4">
              {/* Key Takeaways Card */}
              <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800/80">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Core Key Takeaways:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {matchedTopic.executiveSummary.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actionable Recommendations Card */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-400" /> Actionable Recommendations:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                  {matchedTopic.executiveSummary.actionableRecommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-400 font-bold">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* --- 9-PART CONTENT ARCHITECTURE NAVIGATION TABS --- */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
              Select an architectural section to explore detailed E-E-A-T analysis:
            </span>
            <span className="text-xs font-bold text-brand-400 bg-brand-950/60 px-3 py-1 rounded-full border border-brand-800/60">
              9/9 Sections Complete
            </span>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isSelected = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-brand-500 text-white border-brand-400 shadow-lg shadow-brand-500/20'
                      : 'bg-zinc-900/70 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- TAB CONTENT PANELS --- */}
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 shadow-2xl min-h-[420px]">
          
          {/* TAB 1: EXECUTIVE SUMMARY & DEFINITIONS */}
          {activeTab === 1 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Section 1 • AI Readability & Overview
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {matchedTopic.title} — Executive Summary
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                {matchedTopic.executiveSummary.conciseDefinition}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-black/60 border border-zinc-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                    Why Traditional Methods Fail
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {matchedTopic.executiveSummary.shortSummaryParagraphs[0]}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-black/60 border border-zinc-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                    How Digital Grower Ltd. Outperforms
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {matchedTopic.executiveSummary.shortSummaryParagraphs[1]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DETAILED E-E-A-T EXPLANATION & ENTITY KNOWLEDGE */}
          {activeTab === 2 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Section 2 • E-E-A-T Deep Dive & Entity SEO
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Detailed E-E-A-T Technical Explanation
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                {matchedTopic.detailedExplanation.overview}
              </p>

              {/* Entity Badges */}
              <div className="mb-8">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-brand-400" /> Connected Semantic Knowledge Graph Entities:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {matchedTopic.detailedExplanation.semanticEntitiesConnected.map((entity, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-black/80 border border-zinc-800 text-zinc-300 text-xs font-bold"
                    >
                      {entity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Foundations */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-3">
                  Technical Engineering Foundations:
                </h4>
                <ul className="space-y-3">
                  {matchedTopic.detailedExplanation.technicalFoundations.map((tech, i) => (
                    <li key={i} className="p-4 rounded-xl bg-black/40 border border-zinc-800/80 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-200 font-medium">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: REAL BUSINESS EXAMPLES */}
          {activeTab === 3 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Section 3 • Empirical Case Studies
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Real Business Examples & Verified ROI
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-6">
                We measure success through empirical KPIs: Core Web Vitals PageSpeed improvements, checkout conversion gains, and organic lead acquisition.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {matchedTopic.realBusinessExamples.map((example, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-black/60 border border-zinc-800 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-brand-950/80 border border-brand-800 text-brand-300 mb-3 inline-block">
                        {example.clientNameOrIndustry}
                      </span>
                      <h4 className="text-base font-bold text-white mb-2">
                        Challenge: <span className="text-zinc-300 font-normal">{example.challenge}</span>
                      </h4>
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                        <strong className="text-white">Engineered Solution:</strong> {example.engineeredSolution}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2">
                      <Award className="w-5 h-5 text-brand-400 shrink-0" />
                      <span className="text-xs font-bold text-brand-300">
                        KPI: {example.measurableKPI}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: INDUSTRY APPLICATIONS */}
          {activeTab === 4 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Section 4 • Vertical Sector Solutions
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Industry Applications & Regulatory Compliance
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-6">
                Every industry requires specific regulatory compliance and data governance. Here is how our architecture adapts to key enterprise verticals:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchedTopic.industryApplications.map((ind, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-black/60 border border-zinc-800">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-white">{ind.industryName}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-brand-400">
                        {ind.complianceOrFeature}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {ind.useCaseText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: COMMON PROBLEMS VS. OUR SOLUTIONS (SCANNABLE MATRIX) */}
          {activeTab === 5 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Section 5 • Architecture Matrix
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Common Industry Problems vs. Digital Grower Ltd. Solutions
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-6">
                We eliminate the technical risks that cause slow websites, security vulnerabilities, and invisible AI search indexing.
              </p>

              <div className="space-y-4">
                {matchedTopic.problemSolutionMatrix.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-black/60 border border-zinc-800 flex flex-col md:flex-row gap-6 items-start justify-between">
                    <div className="md:w-1/2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        <h4 className="text-base font-bold text-red-300">
                          Problem: {item.commonProblem}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {item.businessRisk}
                      </p>
                    </div>

                    <div className="md:w-1/2 md:border-l md:border-zinc-800 md:pl-6">
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
                        <h4 className="text-base font-bold text-white">
                          DGL IT Solution: <span className="text-brand-300 font-normal">{item.dglSolution}</span>
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-brand-400 font-medium">
                        Advantage: {item.architectureAdvantage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: STEP-BY-STEP IMPLEMENTATION CHECKLIST */}
          {activeTab === 6 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Section 6 • CI/CD Engineering Lifecycle
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Step-by-Step Implementation Checklist & Timeline
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-6">
                Our agile engineering framework guarantees transparent weekly milestones and zero-downtime cloud launches.
              </p>

              <div className="space-y-4">
                {matchedTopic.implementationChecklist.map((step, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-black/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 font-extrabold flex items-center justify-center shrink-0">
                        0{step.stepNumber}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base font-bold text-white">{step.phaseName}</h4>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                            {step.duration}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {step.keyDeliverables.map((deliv, idx) => (
                            <span
                              key={idx}
                              className="text-xs text-zinc-300 bg-zinc-900/80 px-2.5 py-1 rounded border border-zinc-800/80"
                            >
                              ✓ {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-brand-400 shrink-0">
                      Guaranteed SLA Deliverable
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: VOICE SEARCH & CONVERSATIONAL Q&A FAQS */}
          {activeTab === 7 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Section 7 • Voice Search & Question-First Q&A
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Frequently Asked Questions (Voice Search Ready)
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-6">
                Every question is structured with concise AI summary answers first, followed by comprehensive E-E-A-T explanations for enterprise evaluators.
              </p>

              <div className="space-y-4">
                {matchedTopic.faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        isOpen
                          ? 'bg-black/90 border-brand-500/50 shadow-xl'
                          : 'bg-black/40 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 focus:outline-none"
                      >
                        <span className="text-base font-bold text-white">
                          {faq.question}
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-brand-400 shrink-0">
                          {faq.userLevel}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 border-t border-zinc-800/80 space-y-4">
                          <div className="p-4 rounded-xl bg-brand-950/30 border border-brand-500/30">
                            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
                              Concise Voice Search / AI Summary Answer:
                            </span>
                            <p className="text-sm sm:text-base text-zinc-200 font-medium">
                              {faq.conciseVoiceAnswer}
                            </p>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                              Detailed E-E-A-T Enterprise Explanation:
                            </span>
                            <p className="text-sm text-zinc-300 leading-relaxed">
                              {faq.detailedEEATAnswer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 8: INTERNATIONAL & REGIONAL READINESS */}
          {activeTab === 8 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Section 8 • Internationalization & Localization
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                International & Multi-Region Readiness
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-6">
                Our content and software architectures are built to support global enterprises, regional Bangladesh centers, and multi-language hreflang expansion.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-black/60 border border-zinc-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-brand-400" /> Primary Markets Served:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {matchedTopic.internationalReadiness.primaryMarkets.map((market, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        <span>{market}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-black/60 border border-zinc-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-brand-400" /> Supported Languages:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {matchedTopic.internationalReadiness.supportedLanguages.map((lang, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        <span>{lang}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-black/60 border border-zinc-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-400" /> Regional Compliance:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {matchedTopic.internationalReadiness.regionalCompliance.map((comp, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: CONVERSION STRATEGY & MULTI-CHANNEL CTAS */}
          {activeTab === 9 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Section 9 • Conversion & Resource Hub
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Conversion Strategy & Direct Consultation CTAs
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed mb-8 max-w-3xl">
                {matchedTopic.conclusionAndConversion.summaryConclusion}
              </p>

              {/* Multi-Channel Conversion Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <a
                  href={matchedTopic.conclusionAndConversion.primaryCTA.href}
                  className="p-5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-center transition-all shadow-lg shadow-brand-500/20 flex flex-col items-center justify-center gap-2 group"
                >
                  <span className="text-sm">{matchedTopic.conclusionAndConversion.primaryCTA.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={matchedTopic.conclusionAndConversion.secondaryCTA.href}
                  className="p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-center transition-all flex flex-col items-center justify-center gap-2"
                >
                  <span className="text-sm">{matchedTopic.conclusionAndConversion.secondaryCTA.label}</span>
                  <FileText className="w-4 h-4 text-brand-400" />
                </a>

                <a
                  href={`https://wa.me/8801880900590`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-500/30 text-white font-bold text-center transition-all flex flex-col items-center justify-center gap-2"
                >
                  <span className="text-sm">WhatsApp Fast Support</span>
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </a>

                <a
                  href={`tel:+8801880900590`}
                  className="p-5 rounded-2xl bg-black/80 hover:bg-black border border-zinc-800 text-white font-bold text-center transition-all flex flex-col items-center justify-center gap-2"
                >
                  <span className="text-sm">Call Executive Direct</span>
                  <PhoneCall className="w-4 h-4 text-brand-400" />
                </a>
              </div>

              {/* Downloadable Resource Whitepaper Banner */}
              <div className="p-6 rounded-2xl bg-black/80 border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center shrink-0">
                    <Download className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400">
                        Free Technical Whitepaper
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        {matchedTopic.conclusionAndConversion.downloadableResource.fileType}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mt-1">
                      {matchedTopic.conclusionAndConversion.downloadableResource.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                      {matchedTopic.conclusionAndConversion.downloadableResource.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-bold transition-all inline-flex items-center gap-2"
                  >
                    Download PDF Blueprint <Download className="w-3.5 h-3.5 text-brand-400" />
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
