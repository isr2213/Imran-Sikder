import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogImage?: string;
  schema?: Record<string, any>;
  breadcrumbSchema?: {
    "@context": "https://schema.org";
    "@type": "BreadcrumbList";
    itemListElement: {
      "@type": "ListItem";
      position: number;
      name: string;
      item: string;
    }[];
  };
}

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  keywords,
  ogImage = "https://digitalgrowltd.com/og-image.png",
  schema,
  breadcrumbSchema,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to update or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update Meta Description & Keywords
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);

    // Update Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:type', 'website', true);

    // Update Twitter tags
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // 3. Update Canonical Tag
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Update Schema JSON-LD scripts dynamically
    const updateSchemaScript = (id: string, data: any) => {
      if (!data) return;
      let scriptEl = document.getElementById(id) as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('type', 'application/ld+json');
        scriptEl.id = id;
        document.head.appendChild(scriptEl);
      }
      scriptEl.text = JSON.stringify(data);
    };

    if (schema) {
      updateSchemaScript('page-schema-jsonld', schema);
    }
    if (breadcrumbSchema) {
      updateSchemaScript('breadcrumb-schema-jsonld', breadcrumbSchema);
    }

    return () => {
      // Clean up dynamic schema scripts when unmounting route
      const pageSchema = document.getElementById('page-schema-jsonld');
      if (pageSchema) pageSchema.remove();
      const breadSchema = document.getElementById('breadcrumb-schema-jsonld');
      if (breadSchema) breadSchema.remove();
    };
  }, [title, description, canonicalUrl, keywords, ogImage, schema, breadcrumbSchema]);

  return null;
}
