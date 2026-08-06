import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight, 
  Phone, 
  Mail, 
  Globe, 
  MessageSquare,
  ArrowRight,
  HelpCircle,
  Building2,
  TrendingUp,
  Zap,
  Star,
  BarChart3
} from "lucide-react";
import { allServices } from "../data/services";
import Logo from "../components/Logo";
import SEOHead from "../components/SEOHead";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";
import { getServiceKeywordEcosystem } from "../data/seoKeywords";
import TopicalAuthorityCluster from "../components/TopicalAuthorityCluster";
import SEOEcosystemSection from "../components/SEOEcosystemSection";
import SEOFAQSection from "../components/SEOFAQSection";
import PPCEcosystemSection from "../components/PPCEcosystemSection";
import PPCFAQSection from "../components/PPCFAQSection";
import TechEcosystemSection from "../components/TechEcosystemSection";
import TechFAQSection from "../components/TechFAQSection";
import GEOKnowledgeGraphSection from "../components/GEOKnowledgeGraphSection";
import QuestionFirstAnswerHubSection from "../components/QuestionFirstAnswerHubSection";
import EnterpriseSchemaInjector from "../components/EnterpriseSchemaInjector";
import AIContentStructureSection from "../components/AIContentStructureSection";
import ContentEcosystemHubSection from "../components/ContentEcosystemHubSection";
import ContentGovernanceBanner from "../components/ContentGovernanceBanner";
import StickyMobileCTA from "../components/StickyMobileCTA";


export function findServiceBySlug(slug?: string) {
  if (!slug) return undefined;
  const direct = allServices.find(s => s.slug === slug);
  if (direct) return direct;

  const n = slug.toLowerCase();
  if (n === "digital-marketing" || n === "digital-marketing-360") {
    return allServices.find(s => s.slug === "digital-marketing-360");
  }
  if (n === "seo" || n === "search-engine-optimization" || n === "search-engine-optimization-seo") {
    return allServices.find(s => s.slug === "search-engine-optimization-seo");
  }
  if (n === "paid-ads" || n === "google-ads" || n === "facebook-ads" || n === "facebook-google-ads-marketing") {
    return allServices.find(s => s.slug === "facebook-google-ads-marketing");
  }
  if (n === "website-development" || n === "web-development" || n === "website-design-development") {
    return allServices.find(s => s.slug === "website-design-development");
  }
  if (n === "graphic-design" || n === "branding" || n === "graphic-design-motion-graphics") {
    return allServices.find(s => s.slug === "graphic-design-motion-graphics");
  }
  if (n === "social-media-marketing" || n === "content-marketing") {
    return allServices.find(s => s.slug === "digital-marketing-360") || allServices.find(s => s.slug === "media-buying");
  }
  if (n === "software-development" || n === "custom-software") {
    return allServices.find(s => s.slug === "software-development");
  }
  if (n === "android-app-development" || n === "app-development") {
    return allServices.find(s => s.slug === "android-app-development");
  }
  if (n === "business-growth-challenge" || n === "bgc") {
    return allServices.find(s => s.slug === "business-growth-challenge");
  }
  return undefined;
}

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = findServiceBySlug(slug);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;
    setIsSubmitting(true);
    try {
      await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: `[Service Inquiry: ${service.title}] ${formState.message}`
        }),
      });
    } catch (err) {
      console.warn("API log error:", err);
    }
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const subject = `Service Consultation Request - ${formState.name} (${service.title})`;
      const body = `Hello Digital Grower Ltd.,\n\nI would like to book a consultation regarding ${service.title}.\n\nName: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nService Interested: ${service.title}\n\nMessage:\n${formState.message}`;
      window.location.href = `mailto:digitalgrowerltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 800);
  };

  const ecosystem = service ? getServiceKeywordEcosystem(service.slug, service.title, service.intro) : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#070708] flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-brand-500 hover:text-brand-400 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  const faqs = [
    {
      q: `How long does it take to see results with ${service.title}?`,
      a: "Results typically depend on the specific project scope and industry. However, our data-driven approach is designed to deliver quick initial wins while building a foundation for sustainable, long-term growth. We set clear timelines during our initial consultation."
    },
    {
      q: "Do you provide custom packages for different business sizes?",
      a: "Absolutely. We understand that a startup has different needs than an enterprise. Our solutions are completely tailored to your current stage, budget, and specific growth objectives."
    },
    {
      q: "Will I get regular reports and updates?",
      a: "Yes, transparency is one of our core values. We provide detailed, easy-to-understand monthly performance reports and maintain regular communication to ensure you are always aware of your campaign's progress."
    },
    {
      q: "How do we get started?",
      a: "Getting started is simple. Click the 'Get Free Consultation' button, fill out the short form, and our team will schedule a strategy call to discuss your business goals and how we can help achieve them."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-brand-500/30 font-sans">
      <SEOHead
        title={`${service.title} | DGL IT - Enterprise Digital Marketing & IT Solutions`}
        description={`Get ROI-driven ${service.title} in Bangladesh & globally. ${service.tagline} Built by DGL IT with 8+ years experience & 99.99% client satisfaction.`}
        canonicalUrl={`https://digitalgrowltd.com/service/${service.slug}`}
        keywords={ecosystem ? [...ecosystem.primaryKeywords, ...ecosystem.secondaryKeywords, ...ecosystem.entityKeywords].join(", ") : `${service.title}, Digital Grower Ltd., DGL IT, Bangladesh IT Company, ROI Digital Marketing, SEO Bangladesh, Software Development Bangladesh`}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": service.title,
              "description": service.intro,
              "provider": {
                "@id": "https://digitalgrowltd.com/#organization"
              },
              "areaServed": "Global",
              "url": `https://digitalgrowltd.com/service/${service.slug}`,
              "keywords": ecosystem ? ecosystem.semanticKeywords.join(", ") : undefined,
              "about": ecosystem ? ecosystem.entityKeywords.map(entity => ({ "@type": "Thing", "name": entity })) : undefined
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }
          ]
        }}
        breadcrumbSchema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://digitalgrowltd.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://digitalgrowltd.com/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.title,
              "item": `https://digitalgrowltd.com/service/${service.slug}`
            }
          ]
        }}
      />
      
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <Logo textSize="sm" />
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-bold">
              <Link to="/" className="text-zinc-300 hover:text-brand-400 transition-colors">Home</Link>
              <a href="#about-service" className="text-zinc-300 hover:text-brand-400 transition-colors">Overview</a>
              <a href="#what-we-offer" className="text-zinc-300 hover:text-brand-400 transition-colors">Offerings</a>
              <a href="#process" className="text-zinc-300 hover:text-brand-400 transition-colors">Process</a>
              <a href="#contact" className="bg-brand-500 hover:bg-brand-400 text-white px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-brand-500/20">
                Book Consultation
              </a>
            </div>
            <Link to="/" className="md:hidden text-zinc-300 hover:text-brand-400">
              <ArrowLeft className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/10 via-[#070708] to-[#070708] -z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <BreadcrumbNavigation
            items={[
              { label: "Services", href: "/#services" },
              { label: service.title }
            ]}
            className="mb-8 mt-4"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 mb-6">
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                <span className="text-gradient">{service.title}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-300 mb-6 border-l-4 border-brand-500 pl-4 py-1">
                {service.tagline}
              </h2>
              <p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-xl">
                {service.intro}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+8801989373683" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-brand-500/50 hover:bg-zinc-800 text-white font-bold rounded-xl transition-all">
                  <Phone className="w-5 h-5 text-brand-400" />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent rounded-full blur-3xl"></div>
              <div className="relative glass-card rounded-[2.5rem] p-8 border border-brand-500/20 overflow-hidden shadow-2xl shadow-brand-500/10">
                 <div className="absolute top-0 right-0 p-8 opacity-10 text-brand-500 transform translate-x-4 -translate-y-4">
                    <Icon className="w-64 h-64" />
                 </div>
                 
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                      <TrendingUp className="text-brand-500" /> Quick Stats
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur flex justify-between items-center">
                        <span className="text-zinc-400 font-semibold">Average ROI</span>
                        <span className="text-brand-400 font-black text-xl">300%+</span>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur flex justify-between items-center">
                        <span className="text-zinc-400 font-semibold">Client Retention</span>
                        <span className="text-brand-400 font-black text-xl">95%</span>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur flex justify-between items-center">
                        <span className="text-zinc-400 font-semibold">Dedicated Team</span>
                        <span className="text-brand-400 font-black text-xl">24/7</span>
                      </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About & What We Offer */}
      <section id="what-we-offer" className="py-20 bg-zinc-950/50 border-y border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-500 mb-3">
              Comprehensive Solutions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black mb-6">What's Included in <span className="text-brand-400">{service.title}</span></h3>
            <p className="text-zinc-400 text-lg">{service.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.includes.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                key={idx} 
                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-brand-500/30 hover:bg-zinc-900 transition-colors group"
              >
                <div className="bg-brand-500/10 p-1.5 rounded-full group-hover:bg-brand-500/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-brand-500" />
                </div>
                <span className="font-semibold text-zinc-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section id="about-service" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-sm font-bold mb-6 uppercase tracking-wider">
                <Star className="w-4 h-4 fill-brand-500" /> Why Choose Us
              </div>
              <h3 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
                The DGL IT Advantage
              </h3>
              <p className="text-xl text-zinc-300 font-medium mb-4 leading-relaxed">
                {service.whyChooseUs}
              </p>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                We believe in complete transparency, data-backed decisions, and relentless optimization. When you partner with us, you aren't just getting an agency; you're getting a dedicated growth partner invested in your long-term success.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <Zap className="w-8 h-8 text-brand-400 mb-3" />
                  <h4 className="font-bold text-lg mb-1">Fast Execution</h4>
                  <p className="text-sm text-zinc-500">Agile workflows for rapid deployment.</p>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <BarChart3 className="w-8 h-8 text-brand-400 mb-3" />
                  <h4 className="font-bold text-lg mb-1">Data Driven</h4>
                  <p className="text-sm text-zinc-500">Every decision backed by solid analytics.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black mb-8 border-b border-zinc-800 pb-4">Key Business Benefits</h3>
              <div className="space-y-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0 border border-brand-500/20">
                      <span className="font-black text-brand-500 text-lg">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{benefit}</h4>
                      <p className="text-zinc-400">Directly impacts your bottom line by optimizing performance metrics and streamlining operational efficiencies.</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-24 bg-[#0a0a0c] border-y border-zinc-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-500 mb-3">Our Workflow</h2>
             <h3 className="text-3xl sm:text-4xl font-black">How We Execute</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="relative p-8 rounded-3xl bg-zinc-950 border border-zinc-900 group hover:border-brand-500/40 transition-colors"
              >
                {/* Connector Line (Desktop) */}
                {idx !== service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full h-[1px] bg-zinc-800 translate-x-1/2 group-hover:bg-brand-500/50 transition-colors z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-brand-500 font-black text-2xl flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-black transition-colors">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-10 text-zinc-300">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {service.industries.map((industry, idx) => (
              <span key={idx} className="px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold hover:border-brand-500/50 hover:text-brand-400 transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Keyword Ecosystem & Topical Authority Silo */}
      {ecosystem && <TopicalAuthorityCluster ecosystem={ecosystem} />}

      {/* Complete SEO Keyword Ecosystem & Entity Graph for SEO Services */}
      {(service.slug === "search-engine-optimization-seo" || service.slug === "technical-seo" || service.slug === "local-seo") && (
        <>
          <SEOEcosystemSection />
          <SEOFAQSection />
        </>
      )}

      {/* Complete Paid Advertising Keyword Ecosystem & Entity Graph for PPC Services */}
      {(service.slug === "google-ads" || 
        service.slug === "facebook-ads" || 
        service.slug === "instagram-ads" || 
        service.slug === "youtube-ads" || 
        service.slug === "facebook-google-ads-marketing" || 
        service.slug === "media-buying" || 
        service.slug === "digital-marketing-360") && (
        <>
          <PPCEcosystemSection />
          <PPCFAQSection />
        </>
      )}

      {/* Complete Technology & Growth Keyword Ecosystem & Entity Graph for Web, Software, App & Growth Services */}
      {(service.slug === "website-design-development" ||
        service.slug === "software-development" ||
        service.slug === "android-app-development" ||
        service.slug === "business-growth-challenge" ||
        service.slug === "business-website" ||
        service.slug === "corporate-website" ||
        service.slug === "ecommerce-website" ||
        service.slug === "portfolio-website" ||
        service.slug === "landing-page" ||
        service.slug === "wordpress-website" ||
        service.slug === "custom-website" ||
        service.slug === "web-application" ||
        service.slug === "crm-development" ||
        service.slug === "erp-development" ||
        service.slug === "hrm-software" ||
        service.slug === "pos-software" ||
        service.slug === "inventory-software") && (
        <>
          <TechEcosystemSection />
          <TechFAQSection />
        </>
      )}

      {/* --- Universal Generative Engine Optimization (GEO) & 24-Point Entity Knowledge Graph --- */}
      <GEOKnowledgeGraphSection />

      {/* --- Question-First 11-Point E-E-A-T & Featured Snippet Answer Engine --- */}
      <QuestionFirstAnswerHubSection
        customTitle={`${service?.title || "Enterprise"} — AI Search & Question-First Answer Engine`}
        customSubtitle="Direct answers optimized for Google AI Overview, Gemini, ChatGPT Search, Perplexity AI, Claude, and Voice Search."
      />

      {/* --- 15+ Schema.org JSON-LD Graph Injector --- */}
      <EnterpriseSchemaInjector
        pageTitle={`${service?.title || "Service"} - Digital Grower Ltd.`}
        pageUrl={`/service/${service?.slug || ""}`}
        serviceSlug={service?.slug}
        serviceTitle={service?.title}
        description={service?.intro || service?.tagline}
      />

      {/* --- 9-Part Enterprise AI Topic Architecture & Conversion Engine --- */}
      <AIContentStructureSection
        serviceSlug={service?.slug}
        customHeading={`${service?.title || "Enterprise Service"} — 9-Part AI Content & Architecture Blueprint`}
        customSubheading="Engineered for AI readability, Executive summaries, Empirical Bangladesh & Global case studies, and voice search answers."
      />

      {/* --- ENTERPRISE CONTENT ECOSYSTEM HUB (E-E-A-T, AIDA/PAS/BAB Copywriting, Personalization, Master FAQ Hub) --- */}
      <ContentEcosystemHubSection context="service" />


      {/* FAQ & CTA Split */}
      <section className="py-20 bg-zinc-950/50 border-t border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* FAQs */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-8 h-8 text-brand-500" />
                <h3 className="text-3xl font-black">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'border-brand-500/40 bg-zinc-900/80' : 'border-zinc-800/60 bg-zinc-950'}`}
                  >
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-lg focus:outline-none"
                    >
                      {faq.q}
                      <ChevronRight className={`w-5 h-5 text-brand-500 transition-transform duration-300 ${activeFaq === idx ? 'rotate-90' : ''}`} />
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form CTA */}
            <div id="contact" className="glass-card rounded-[2rem] p-8 sm:p-10 border border-brand-500/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent"></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-black mb-2">Ready to Scale?</h3>
                 <p className="text-zinc-400 mb-8">Book a free consultation and let's discuss your custom {service.title} strategy.</p>
                 
                 <form className="space-y-4" onSubmit={handleConsultationSubmit}>
                   {/* Honeypot spam protection */}
                   <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div>
                       <label htmlFor="sd-name" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wide">Name</label>
                       <input 
                         id="sd-name" 
                         required 
                         type="text" 
                         value={formState.name}
                         onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                         placeholder="John Doe" 
                         className="w-full bg-[#050507] border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors" 
                       />
                     </div>
                     <div>
                       <label htmlFor="sd-email" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wide">Email</label>
                       <input 
                         id="sd-email" 
                         required 
                         type="email" 
                         value={formState.email}
                         onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                         placeholder="john@company.com" 
                         className="w-full bg-[#050507] border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors" 
                       />
                     </div>
                   </div>
                   <div>
                     <label htmlFor="sd-phone" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wide">Phone Number</label>
                     <input 
                       id="sd-phone" 
                       required 
                       type="tel" 
                       value={formState.phone}
                       onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                       placeholder="+1 (234) 567-8900" 
                       className="w-full bg-[#050507] border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors" 
                     />
                   </div>
                   <div>
                     <label htmlFor="sd-message" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wide">Tell us about your project</label>
                     <textarea 
                       id="sd-message" 
                       required 
                       rows={4} 
                       value={formState.message}
                       onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                       placeholder="We are looking for..." 
                       className="w-full bg-[#050507] border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                     ></textarea>
                   </div>
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full py-4 bg-brand-500 hover:bg-brand-400 text-black font-black text-lg rounded-xl transition-colors mt-2 shadow-lg shadow-brand-500/20 flex justify-center items-center gap-2"
                   >
                     {isSubmitting ? "Submitting..." : submitted ? "Request Submitted! Check Email" : "Submit Request"} <ArrowRight className="w-5 h-5" />
                   </button>
                 </form>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ENTERPRISE CONTENT GOVERNANCE BANNER --- */}
      <ContentGovernanceBanner />

      {/* --- STICKY MOBILE CTA FOR MOBILE CONVERSIONS --- */}
      <StickyMobileCTA serviceTitle={service?.title} />

      {/* Footer */}
      <footer className="py-8 bg-[#030303] text-center border-t border-zinc-900/50 text-zinc-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Digital Grower Ltd. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}
