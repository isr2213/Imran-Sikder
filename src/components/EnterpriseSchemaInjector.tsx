import React, { useEffect } from 'react';
import { generateEnterprise15PointSchema } from '../data/aiContentArchitectureData';

interface EnterpriseSchemaInjectorProps {
  pageTitle?: string;
  pageUrl?: string;
  serviceSlug?: string;
  serviceTitle?: string;
  description?: string;
  pageType?: string;
  pageDescription?: string;
}

export default function EnterpriseSchemaInjector({
  pageTitle = "Digital Grower Ltd. - Enterprise Web, Software & SEO Agency Bangladesh",
  pageUrl = "/",
  serviceSlug = "website-design-development",
  serviceTitle = "Enterprise Website, Software & App Development",
  description,
  pageType,
  pageDescription
}: EnterpriseSchemaInjectorProps) {
  const finalDescription = description || pageDescription || "Digital Grower Ltd. (DGL IT) is Bangladesh's #1 Enterprise Custom Website Development, Custom Software Engineering, Android App Development, and Business Growth consultancy.";
  useEffect(() => {
    const schemaGraph = generateEnterprise15PointSchema(
      pageTitle,
      pageUrl,
      serviceSlug,
      serviceTitle,
      finalDescription
    );

    const scriptId = "enterprise-15-point-schema-jsonld";
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }
    scriptEl.text = JSON.stringify(schemaGraph, null, 2);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [pageTitle, pageUrl, serviceSlug, serviceTitle, description]);

  return null;
}
