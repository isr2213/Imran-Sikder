import React, { useState } from 'react';
import { 
  ArrowRight,
  Star,
  Search as SearchIcon,
  Filter
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { allServices } from "../data/services";

type ServiceCategory = "all" | "web-dev" | "marketing" | "software" | "creative";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Services", count: allServices.length },
    { id: "web-dev", label: "Website Dev & Design", count: 14 },
    { id: "marketing", label: "Digital Marketing", count: 12 },
    { id: "software", label: "Software & Mobile Apps", count: 8 },
    { id: "creative", label: "Creative & Growth", count: 5 }
  ];

  const filteredServices = allServices.filter(service => {
    // Filter by Search Query
    const matchesQuery = searchQuery === "" || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.tagline?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.intro?.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesQuery) return false;

    // Filter by Category
    if (activeCategory === "all") return true;

    if (activeCategory === "web-dev") {
      return [
        "business-website", "corporate-website", "ecommerce-website", "portfolio-website",
        "landing-page", "wordpress-website", "custom-website", "web-application",
        "crm-development", "erp-development", "hrm-software", "pos-software",
        "inventory-software", "website-design-development"
      ].includes(service.slug);
    }

    if (activeCategory === "marketing") {
      return [
        "search-engine-optimization-seo", "technical-seo", "local-seo", "google-ads",
        "facebook-ads", "instagram-ads", "youtube-ads", "media-buying", "email-marketing",
        "social-media-marketing", "facebook-google-ads-marketing", "digital-marketing-360"
      ].includes(service.slug);
    }

    if (activeCategory === "software") {
      return [
        "software-development", "android-app-development", "crm-development", "erp-development",
        "hrm-software", "pos-software", "inventory-software", "web-application"
      ].includes(service.slug);
    }

    if (activeCategory === "creative") {
      return [
        "business-growth-challenge", "video-production-ovc-tvc", "graphic-design-motion-graphics",
        "video-editing", "e-commerce-support-services"
      ].includes(service.slug);
    }

    return true;
  });

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070708] overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] text-brand-500 mb-4 inline-block px-4 py-1.5 rounded-full border border-brand-500/20 bg-brand-500/10">
              Our Services
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mt-4">
              We provide <span className="text-gradient">complete digital solutions</span> <br className="hidden md:block" /> 
              to help businesses grow faster.
            </h3>
          </motion.div>
        </div>

        {/* Category Tabs & Instant Search Bar */}
        <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ServiceCategory)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-brand-500 text-black shadow-lg shadow-brand-500/20 scale-105"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${activeCategory === cat.id ? "bg-black/20 text-black" : "bg-zinc-800 text-zinc-400"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full lg:w-80">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search 33+ services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0e0e11] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-500/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                className={`group relative p-6 sm:p-8 rounded-3xl transition-all duration-500 flex flex-col h-full bg-[#0e0e11]/80 backdrop-blur-xl border ${'isPopular' in service && service.isPopular ? 'border-brand-500/50 shadow-lg shadow-brand-500/10 hover:shadow-brand-500/20 hover:border-brand-500/80' : 'border-zinc-800/80 hover:border-brand-500/30'} hover:-translate-y-2`}
              >
                {/* Glow effect background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl ${'isPopular' in service && service.isPopular ? 'bg-gradient-to-br from-brand-500/10 via-transparent to-transparent' : 'bg-gradient-to-br from-white/5 to-transparent'}`}></div>
                
                {/* Popular Badge */}
                {'isPopular' in service && service.isPopular && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-brand-500 to-brand-400 rounded-full text-[10px] font-bold text-black uppercase tracking-wider shadow-lg shadow-brand-500/30">
                    <Star className="w-3 h-3 fill-black" /> Popular
                  </div>
                )}

                {/* Icon Container */}
                <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${'isPopular' in service && service.isPopular ? 'bg-brand-500/20 border border-brand-500/30 text-brand-400 group-hover:bg-brand-500 group-hover:text-black' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:bg-brand-500/10 group-hover:border-brand-500/30 group-hover:text-brand-500'}`}>
                  <Icon className="w-6 h-6 transition-colors" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-1">
                    {service.intro || service.tagline}
                  </p>

                  {/* Learn More */}
                  <Link to={`/service/${service.slug}`} className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer z-20 ${'isPopular' in service && service.isPopular ? 'text-brand-400 group-hover:text-brand-300' : 'text-zinc-300 group-hover:text-brand-400'}`}>
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
