# Digital Grow Ltd. (DGL IT) — Enterprise Production Architecture & System Guide
**Version:** 2.4.0-ENT | **Standard:** ISO 27001 & ISO 9001 Compliant | **HQ:** Dhaka, Bangladesh

---

## 1. Executive Summary & Architecture Overview
Digital Grow Ltd. ("DGL IT") is an enterprise custom software engineering, ERP, and AI/SEO marketing agency.
- **Full-Stack Server (`server.ts`):** Node.js Express server hosting REST APIs, AI endpoints, SRE metrics (`/api/health`, `/api/ready`, `/api/metrics`), and production asset serving.
- **Frontend SPA:** Modern React 18 + Vite + Tailwind CSS + Lucide Icons + Recharts with `manualChunks` vendor code splitting.
- **Enterprise Security:** Enforces strict HSTS headers, Content Security Policy (CSP), Referrer-Policy, Rate Limiting (100 req/min), JWT-bearer authentication, and PBKDF2 hashing.
- **AI Search & GEO Readiness:** Built-in semantic schema, FAQ structured data, AI Overview citations, `/robots.txt`, `/sitemap.xml`, and standardized `/llms.txt` and `/ai.txt` endpoints for AI crawlers (Gemini, Google AI Overviews, ChatGPT Search, Perplexity).

---

## 2. Project & Folder Structure
```
├── .env.example                 # Enterprise environment configuration template
├── ENTERPRISE_ARCHITECTURE.md    # Master System Reference Guide
├── index.html                   # Core HTML entry point with accessibility & SEO meta tags
├── package.json                 # Dependency manifests & production build/start scripts
├── server.ts                    # Full-stack Express production server, SRE telemetry & AI endpoints
├── vite.config.ts               # Production Vite config with manualChunks vendor code splitting
└── src/
    ├── App.tsx                  # Root router & layout wrapper
    ├── components/              # Extracted reusable enterprise UI components
    ├── context/                 # State management (AdminAuthContext for JWT & RBAC sessions)
    ├── data/                    # Institutional case studies, industries & locations
    ├── pages/                   # Public & enterprise routes (Home, TrustCenter, AdminPortal)
    ├── server/                  # Backend SaaS data store & Express router controllers
    └── types/                   # Unified TypeScript interfaces across client and server
```

---

## 3. Deployment & Cloud Readiness Guide
- **Container Target:** Cloud Run / Docker Containerization on Port `3000` (`0.0.0.0:3000`).
- **Production Build:** Run `npm run build` to compile static assets into `dist/` and `server.ts` into `dist/server.cjs` via esbuild.
- **Production Start:** Run `npm run start` to launch `node dist/server.cjs`.

---

## 4. Configuration & Environment Variables
See `.env.example` for all required server-side environment variables:
- `GEMINI_API_KEY`: Server-side Gemini API key for AI code conversion and client consultation chatbot.
- `APP_URL`: Canonical domain URL (`https://digitalgrowltd.com`) used in sitemaps and callbacks.
- `ADMIN_JWT_SECRET`: Master secret key for signing enterprise JWT bearer tokens.
- `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS`: SMTP credentials for automated lead alerts and PDF profile delivery.

---

## 5. Security Hardening & ISO 27001 Controls
- **HTTP Headers:** HSTS (`max-age=63072000; includeSubDomains; preload`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and CSP.
- **Rate Limiting:** Max 100 requests per minute per IP address on REST endpoints.
- **RBAC & Audit Trail:** 13 granular department roles; immutable audit logs tracking user, timestamp, IP, module, and action status.

---

## 6. Performance Engineering & Core Web Vitals
- **CWV Targets:** LCP `< 2.5s`, INP `< 200ms`, CLS `< 0.1` via responsive image sizing, SVG optimization, and debounced event handlers.
- **Code Splitting:** Automated splitting of vendor chunks (`vendor-react`, `vendor-icons`, `vendor-charts`).

---

## 7. Search Engine & AI Search Readiness (SEO/GEO/llms.txt)
- **15-Point Schema.org JSON-LD:** Organization, WebSite, Service, FAQPage, BreadcrumbList, and LocalBusiness structured data.
- **AI Search Endpoints:** Automatic `/sitemap.xml`, `/robots.txt`, and `/llms.txt` / `/ai.txt` files for generative AI search engines.

---

## 8. Backup & Disaster Recovery Strategy
- **Snapshot Scope:** Captures users, leads, CMS pages, blog articles, portfolio items, case studies, and audit logs.
- **Trigger & Restore:** Admin can trigger database snapshots via `/api/admin/backups/trigger` or export versioned `.json` files from DGL OS.

---

## 9. Enterprise Admin Panel & Content Management Guide
- **Accessing DGL OS:** Navigate to `/admin` or click **Admin OS** in the header.
- **Default Credentials:** `israt@digitalgrowltd.com` / `EnterpriseAdmin2026!`.
- **Modules:** Executive Dashboard, Users RBAC, CMS Content Editor, Blog & GEO Editor, CRM Leads, 15 Schema.org JSON-LD Editor, Security Shield, and Backups.

---

## 10. SRE Monitoring & Pre-Launch QA Checklist
- **Observability Endpoints:** `/api/health` (liveness), `/api/ready` (readiness probe), `/api/metrics` (SRE telemetry).
- **QA Verification:** Verified zero broken links, no orphan pages, WCAG 2.2 AA color contrast, and valid structured data.
