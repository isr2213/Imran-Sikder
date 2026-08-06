import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  Globe, 
  TrendingUp, 
  Award, 
  HelpCircle,
  ChevronRight
} from "lucide-react";
import { LOCAL_SEO_LOCATIONS, LocalSeoLocation } from "../data/localSeoLocationsData";
import Logo from "../components/Logo";
import StickyMobileCTA from "../components/StickyMobileCTA";

export default function LocationLandingPage() {
  const { citySlug } = useParams<{ citySlug?: string }>();
  const location: LocalSeoLocation = LOCAL_SEO_LOCATIONS[citySlug || "dhaka"] || LOCAL_SEO_LOCATIONS["dhaka"];
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: `[Location Inquiry: ${location.cityName}] ${formState.message}`
        }),
      });
    } catch (err) {
      console.warn("API log error:", err);
    }
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const subject = `Location Consultation Request - ${formState.name} (${location.cityName})`;
      const body = `Hello Digital Grower Ltd.,\n\nI would like to book a consultation regarding ${location.cityName}.\n\nName: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nLocation: ${location.cityName}\n\nMessage:\n${formState.message}`;
      window.location.href = `mailto:digitalgrowerltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 800);
  };

  const origin = typeof window !== "undefined" ? window.location.origin : "https://digitalgrowltd.com";
  const currentUrl = `${origin}/locations/${location.slug}`;

  // Build Comprehensive Local SEO & Entity Structured Data Schema (JSON-LD)
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": `${currentUrl}/#localbusiness`,
          "name": location.napDetails.businessName,
          "url": currentUrl,
          "telephone": location.napDetails.telephone,
          "email": location.napDetails.email,
          "priceRange": "$$$",
          "image": `${origin}/logo.png`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": location.napDetails.streetAddress,
            "addressLocality": location.napDetails.addressLocality,
            "postalCode": location.napDetails.postalCode,
            "addressCountry": location.napDetails.addressCountry
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": location.geoCoordinates.latitude,
            "longitude": location.geoCoordinates.longitude
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": location.regionName
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "21:00"
            }
          ],
          "hasMap": location.napDetails.googleMapsUrl,
          "sameAs": [
            "https://www.linkedin.com/company/digitalgrowltd",
            "https://www.facebook.com/digitalgrowltd"
          ]
        },
        {
          "@type": "Service",
          "@id": `${currentUrl}/#service`,
          "name": `Enterprise Software Engineering & AI SEO Agency - ${location.cityName}`,
          "provider": { "@id": `${currentUrl}/#localbusiness` },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": location.regionName
          },
          "description": location.heroSubtitle,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `Digital Grower Ltd. ${location.cityName} Services`,
            "itemListElement": location.featuredServices.map((srv) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": srv.title,
                "url": `${origin}/service/${srv.slug}`
              }
            }))
          }
        },
        {
          "@type": "FAQPage",
          "@id": `${currentUrl}/#faq`,
          "mainEntity": location.faqs.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.detailedAnswer
            }
          }))
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${currentUrl}/#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": origin
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Locations & Regional Hub",
              "item": `${origin}/#locations`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `${location.cityName} (${location.regionName})`,
              "item": currentUrl
            }
          ]
        }
      ]
    };

    const scriptId = `local-seo-schema-${location.slug}`;
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = scriptId;
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }
    scriptElement.text = JSON.stringify(localBusinessSchema, null, 2);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, [location, currentUrl, origin]);

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-brand-500 selection:text-white font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <Logo textSize="sm" />
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-bold">
              <Link to="/" className="text-zinc-300 hover:text-brand-400 transition-colors">Home</Link>
              <a href="#locations" className="text-zinc-300 hover:text-brand-400 transition-colors">Locations</a>
              <Link to="/trust-center" className="text-zinc-300 hover:text-brand-400 transition-colors">Trust Center</Link>
              <a href="#contact" className="bg-brand-500 hover:bg-brand-400 text-white px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-brand-500/20">
                Book Consultation
              </a>
            </div>
            <Link to="/" className="md:hidden text-xs font-bold text-brand-400 hover:text-brand-300">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 border-b border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-zinc-400">Locations & Regional SEO</span>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-white font-bold">{location.cityName} ({location.country})</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
              {location.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8">
              {location.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white shadow-xl shadow-brand-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>Request {location.cityName} Engineering Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801989373683"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Regional Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- NAP CONSISTENCY & GOOGLE BUSINESS PROFILE VERIFICATION BADGE --- */}
      <section className="py-8 bg-zinc-950 border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Verified Google Business Profile & NAP Consistency
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
                    Schema.org Active
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  100% NAP (Name, Address, Phone) consistency across Google Maps, SERP Knowledge Graph & AI Overviews.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{location.napDetails.streetAddress}, {location.napDetails.addressLocality} ({location.napDetails.postalCode})</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{location.napDetails.telephone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{location.napDetails.openingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ECONOMIC OVERVIEW & LOCAL MARKET LEADERSHIP --- */}
      <section className="py-16 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Local Economic & Digital Growth Analysis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Driving Digital Transformation in {location.cityName} ({location.regionName})
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed">
                {location.economicOverview}
              </p>

              {/* Key Industries Served */}
              <div className="pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Key Industries We Serve in {location.cityName}:
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {location.keyIndustries.map((ind, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-200"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Local Case Study Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-400">
                  {location.cityName} Case Study Highlight
                </span>
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {location.localCaseStudyHighlight.clientName}
              </h4>
              <p className="text-xs text-zinc-400 mb-4">
                {location.localCaseStudyHighlight.industry}
              </p>
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 mb-4">
                <span className="text-sm font-extrabold text-emerald-300 block">
                  {location.localCaseStudyHighlight.result}
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {location.localCaseStudyHighlight.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCAL TECHNICAL CHALLENGES & ENGINEERING SOLUTIONS --- */}
      <section className="py-16 bg-zinc-950/60 border-y border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Solving {location.cityName}’s Hardest Enterprise Technical Challenges
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              We diagnose regional infrastructure bottlenecks and deliver custom cloud architecture and Generative Engine Optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.localChallenges.map((chal, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#080808] border border-zinc-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {chal.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mb-4">
                    {chal.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-900">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 block mb-1">
                    Digital Grower Ltd. Solution:
                  </span>
                  <p className="text-xs text-zinc-300 font-medium">
                    {chal.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED ENTERPRISE SERVICES FOR THIS LOCATION --- */}
      <section className="py-16 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Featured Enterprise Services in {location.cityName}
              </h2>
              <p className="text-sm text-zinc-400">
                Custom software engineering and AI SEO architectures tailored for {location.regionName}.
              </p>
            </div>
            <Link
              to="/service/website-design-development"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 hover:text-brand-300"
            >
              <span>Explore All 12 Enterprise Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.featuredServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
                    {srv.localRelevance}
                  </p>
                </div>
                <Link
                  to={`/service/${srv.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 hover:text-white transition-colors"
                >
                  <span>View Enterprise Specification</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CITY-SPECIFIC FAQ SECTION (FEEDS FAQPAGE SCHEMA) --- */}
      <section className="py-16 bg-zinc-950/70 border-t border-zinc-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              Frequently Asked Questions - {location.cityName}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Technical, architectural, and SEO insights for enterprises in {location.regionName}.
            </p>
          </div>

          <div className="space-y-4">
            {location.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#080808] border border-zinc-800/80"
              >
                <h3 className="text-base font-bold text-white mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs font-semibold text-emerald-400 mb-2 pl-8">
                  {faq.conciseAnswer}
                </p>
                <p className="text-xs text-zinc-400 pl-8 leading-relaxed">
                  {faq.detailedAnswer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & CONSULTATION BOOKING SECTION --- */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="glass-card rounded-[2rem] p-8 sm:p-10 border border-brand-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white">Book a Free {location.cityName} Consultation</h3>
            <p className="text-zinc-400 mb-8">Discuss your custom growth strategy directly with our engineering team.</p>
            <form className="space-y-4" onSubmit={handleConsultationSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="loc-name" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wide">Name</label>
                  <input 
                    id="loc-name" 
                    required 
                    type="text" 
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe" 
                    className="w-full bg-[#050507] border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors" 
                  />
                </div>
                <div>
                  <label htmlFor="loc-email" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wide">Email</label>
                  <input 
                    id="loc-email" 
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
                <label htmlFor="loc-phone" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wide">Phone Number</label>
                <input 
                  id="loc-phone" 
                  required 
                  type="tel" 
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="+1 (234) 567-8900" 
                  className="w-full bg-[#050507] border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:border-brand-500 transition-colors" 
                />
              </div>
              <div>
                <label htmlFor="loc-message" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea 
                  id="loc-message" 
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
                {isSubmitting ? "Submitting..." : submitted ? "Request Submitted! Check Email" : "Book Free Consultation"} <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- REGIONAL & INTERNATIONAL LOCATION SWITCHER HUB --- */}
      <section id="locations" className="py-16 bg-[#030303] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              Explore Our Regional & International Service Hubs
            </h2>
            <p className="text-xs text-zinc-400">
              Seamlessly switch between our 8 divisional Bangladesh hubs and 5 international engineering offices.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.values(LOCAL_SEO_LOCATIONS).map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  loc.slug === location.slug
                    ? "bg-brand-500/20 border-brand-500/50 text-white font-bold"
                    : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white"
                }`}
              >
                <span className="text-xs block truncate">{loc.cityName}</span>
                <span className="text-[10px] text-zinc-500 block truncate">{loc.country}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- STICKY MOBILE CTA --- */}
      <StickyMobileCTA serviceTitle={`${location.cityName} Software & SEO Audit`} />

      {/* Footer minimal signature */}
      <footer className="py-8 bg-[#030303] border-t border-zinc-900/50 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Digital Grower Ltd. ({location.napDetails.businessName}). Schema.org JSON-LD Verified. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
