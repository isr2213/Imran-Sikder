export interface HomepageBgcSettings {
  enableSection: boolean;
  badgeText: string;
  heading: string;
  paragraph: string;
  enableVideoModule: boolean;
  videoType: 'mp4' | 'webm' | 'youtube' | 'vimeo' | 'facebook' | 'instagram' | 'tiktok';
  videoUrl: string;
  videoThumbnail: string;
  autoplay: boolean;
  controls: boolean;
  loop: boolean;
  fullscreen: boolean;
  ctaButtonText: string;
  ctaButtonLink: string;
  showCtaButton: boolean;
  status: 'published' | 'draft';
  scheduledPublishDate?: string;
  backgroundColor?: string;
  accentColor?: string;
}

export interface BgcVideoItem {
  id: string;
  type: 'mp4' | 'webm' | 'youtube' | 'vimeo' | 'facebook' | 'instagram' | 'tiktok';
  url: string;
  title: string;
  thumbnail?: string;
  isFeatured?: boolean;
  category?: string;
  displayOrder: number;
  published: boolean;
}

export interface BgcImageItem {
  id: string;
  url: string;
  alt: string;
  title?: string;
  caption?: string;
  order: number;
  seoMetadata?: string;
}

export interface BgcSuccessStory {
  id: string;
  clientName: string;
  industry: string;
  result: string;
  description: string;
  logoUrl?: string;
  featured?: boolean;
}

export interface BgcFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BgcData {
  homepageBgc?: HomepageBgcSettings;
  sectionTitle: string;
  highlightStyle: 'gradient' | 'shine' | 'glow' | 'reveal';
  description: string;
  videoType: 'mp4' | 'webm' | 'youtube' | 'vimeo' | 'facebook' | 'instagram' | 'tiktok';
  videoUrl: string;
  videoThumbnail: string;
  autoplay: boolean;
  controls: boolean;
  status: 'published' | 'draft';
  scheduledPublishDate?: string;
  
  // SEO
  seoTitle: string;
  metaDescription: string;
  openGraphImage: string;
  twitterCard: string;
  videoObjectSchema: string;
  keywords: string;
  canonicalUrl: string;

  // Galleries & Details
  videos: BgcVideoItem[];
  images: BgcImageItem[];
  successStories: BgcSuccessStory[];
  beforeAfter: {
    beforeUrl: string;
    afterUrl: string;
    beforeLabel: string;
    afterLabel: string;
  };
  performanceMetrics: { label: string; value: string; change?: string }[];
  faqs: BgcFaqItem[];
}

export const EXACT_HOMEPAGE_PARAGRAPH = `A total social media marketing solution for your business. It’s a hassle free solution that will save your time and money. Through BGC we are taking responsibility of all of your social media platforms like Creating content, publishing them in time, replying your audience, running paid ads, creating audience and Sales funnel and the most important part is that we will assign a Research & Development team for your business to ensure the business growth by Social Media marketing. Not only this we are providing money-back guarantee if we fail to achieve the target. So why you are doing delay to try our service where we are entire responsibilities of your online marketing.`;

export const DEFAULT_HOMEPAGE_BGC: HomepageBgcSettings = {
  enableSection: true,
  badgeText: "⚡ SIGNATURE SOCIAL MEDIA SOLUTION",
  heading: "How BGC Works",
  paragraph: EXACT_HOMEPAGE_PARAGRAPH,
  enableVideoModule: false, // HIDDEN BY DEFAULT
  videoType: "youtube",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  videoThumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  autoplay: false,
  controls: true,
  loop: false,
  fullscreen: true,
  ctaButtonText: "Explore BGC Showcase",
  ctaButtonLink: "/our-experience/business-growth-challenge",
  showCtaButton: true,
  status: "published",
  backgroundColor: "bg-gradient-to-b from-black via-zinc-950 to-black",
  accentColor: "brand"
};

export const DEFAULT_BGC_DESCRIPTION = `A total social media marketing solution for your business. It's a hassle free solution that will save your time and money.

Through BGC we are taking responsibility of all of your social media platforms like creating content, publishing them on time, replying to your audience, running paid ads, creating audience and sales funnels.

We also assign a dedicated Research & Development Team for your business to ensure continuous business growth through strategic social media marketing.

Not only that, we provide a Money-Back Guarantee if we fail to achieve the agreed target.

So why delay?

Let Digital Grower Ltd. take complete responsibility for your online marketing while you focus on growing your business.`;

export const DEFAULT_BGC_DATA: BgcData = {
  homepageBgc: DEFAULT_HOMEPAGE_BGC,
  sectionTitle: "How BGC Works",
  highlightStyle: "gradient",
  description: DEFAULT_BGC_DESCRIPTION,
  videoType: "youtube",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  videoThumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  autoplay: false,
  controls: true,
  status: "published",

  // SEO
  seoTitle: "Business Growth Challenge (BGC) | Digital Grower Ltd.",
  metaDescription: "Total social media marketing & business growth solution with guaranteed targets. Save time and money with Digital Grower Ltd.'s dedicated R&D marketing team.",
  openGraphImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  twitterCard: "summary_large_image",
  videoObjectSchema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "How BGC Works - Business Growth Challenge",
    "description": "Comprehensive explanation of Digital Grower Ltd.'s 90-Day Business Growth Challenge solution.",
    "thumbnailUrl": ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"],
    "uploadDate": "2026-01-01T08:00:00+06:00"
  }, null, 2),
  keywords: "Business Growth Challenge, BGC, Social Media Marketing Bangladesh, Money Back Guarantee Marketing, Digital Marketing Agency",
  canonicalUrl: "https://digitalgrowltd.com/our-experience/business-growth-challenge",

  // Galleries
  videos: [
    {
      id: "bgc-vid-1",
      type: "youtube",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      title: "How BGC Transforms Business Social Media Infrastructure",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      isFeatured: true,
      category: "Overview",
      displayOrder: 1,
      published: true
    },
    {
      id: "bgc-vid-2",
      type: "youtube",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      title: "R&D Dedicated Strategy & Sales Funnel Execution",
      thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      isFeatured: false,
      category: "Strategy",
      displayOrder: 2,
      published: true
    }
  ],
  images: [
    {
      id: "bgc-img-1",
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      alt: "BGC R&D Team Strategy Session",
      title: "Dedicated R&D Growth Squad",
      caption: "Our specialized research & creative team designing custom sales funnels.",
      order: 1
    },
    {
      id: "bgc-img-2",
      url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      alt: "BGC Performance Dashboard & Analytics",
      title: "Real-time Campaign Dashboard",
      caption: "Live ROI tracking and audience response analytics.",
      order: 2
    },
    {
      id: "bgc-img-3",
      url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      alt: "Content Studio & Video Production",
      title: "High Converting Creative Assets",
      caption: "In-house creative studio designing viral video posts and ad copy.",
      order: 3
    }
  ],
  successStories: [
    {
      id: "ss-1",
      clientName: "Rapid Medical Equipments",
      industry: "Healthcare B2B",
      result: "৳120 Million Sales in 90 Days",
      description: "Implemented total BGC social media management, content creation, and lead funnels to secure B2B hospital contracts.",
      logoUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=300&q=80",
      featured: true
    },
    {
      id: "ss-2",
      clientName: "Henny Bear London",
      industry: "Luxury E-Commerce",
      result: "5.2x Verified ROAS",
      description: "Scaled luxury handbag social media sales with targeted video reels and server-side conversion funnels.",
      logoUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80",
      featured: true
    }
  ],
  beforeAfter: {
    beforeUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    afterUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    beforeLabel: "Before BGC (Manual & Irregular Posts)",
    afterLabel: "After BGC (Automated 300% Growth)"
  },
  performanceMetrics: [
    { label: "Average Audience Engagement", value: "480%", change: "+340% YoY" },
    { label: "Cost Per Lead Reduction", value: "45%", change: "Optimized Funnel" },
    { label: "Target Success Guarantee Rate", value: "99.4%", change: "Backed by SLA" },
    { label: "R&D Response Time", value: "< 5 Mins", change: "24/7 Monitoring" }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "What makes BGC different from standard social media management?",
      answer: "BGC is an end-to-end performance package. Instead of just posting random graphics, we assign a dedicated R&D team that handles strategy, video content creation, scheduled publishing, community moderation/replies, paid ad management, and conversion sales funnels—backed by a Money-Back Guarantee."
    },
    {
      id: "faq-2",
      question: "How does the Money-Back Guarantee work?",
      answer: "Before commencing BGC, we establish mutual, measurable KPI targets (such as lead volume, revenue increase, or audience reach). If we fail to hit the agreed minimum threshold by the end of the campaign period, we refund the agreed management fee according to our service guarantee contract."
    },
    {
      id: "faq-3",
      question: "Which social media platforms are included in BGC?",
      answer: "BGC covers all major platforms relevant to your target audience including Facebook, Instagram, YouTube, TikTok, LinkedIn, and WhatsApp Business API integrations."
    }
  ]
};

export const BGC_STORAGE_KEY = "dgl_bgc_data_v1";

export function getStoredBgcData(): BgcData {
  try {
    const raw = localStorage.getItem(BGC_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { 
        ...DEFAULT_BGC_DATA, 
        ...parsed,
        homepageBgc: {
          ...DEFAULT_HOMEPAGE_BGC,
          ...(parsed.homepageBgc || {})
        }
      };
    }
  } catch (e) {
    console.warn("Failed to load local BGC data:", e);
  }
  return DEFAULT_BGC_DATA;
}

export function saveStoredBgcData(data: BgcData): void {
  try {
    localStorage.setItem(BGC_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save BGC data to localStorage:", e);
  }
}
