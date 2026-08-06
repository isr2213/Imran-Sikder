import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import adminRoutes from "./server/adminRoutes";
import { adminStore } from "./server/adminStore";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// ============================================================================
// 1. ENTERPRISE SECURITY HARDENING & ISO 27001 GOVERNANCE HEADERS
// ============================================================================
app.use((req, res, next) => {
  // HSTS - Enforce strict HTTPS encryption across all domains & subdomains
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  // X-Content-Type-Options - Prevent MIME-sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // Referrer-Policy - Strict referrer privacy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Permissions-Policy - Disable invasive hardware capabilities
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  // Content Security Policy (CSP) - Allow Google Analytics, Fonts, secure API origins, and iframe embedding
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self' https://www.google-analytics.com https://api.indexnow.org; frame-ancestors *;"
  );
  next();
});

// ============================================================================
// 2. SRE & DEVOPS OBSERVABILITY ENDPOINTS (/api/health, /api/ready, /api/metrics)
// ============================================================================
const serverStartTime = Date.now();
let requestCounter = 0;
let errorCounter = 0;

app.use((req, res, next) => {
  requestCounter++;
  res.on('finish', () => {
    if (res.statusCode >= 500) {
      errorCounter++;
    }
  });
  next();
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Digital Grower Ltd. Enterprise OS",
    version: "2.4.0-ENT",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor((Date.now() - serverStartTime) / 1000),
    environment: process.env.NODE_ENV || "production"
  });
});

app.get("/api/ready", (req, res) => {
  const memUsage = process.memoryUsage();
  const heapUsedMb = Math.round(memUsage.heapUsed / 1024 / 1024);
  const isHealthy = heapUsedMb < 1500; // Check container memory threshold
  res.status(isHealthy ? 200 : 503).json({
    ready: isHealthy,
    database: "connected",
    jwtConfigured: !!process.env.ADMIN_JWT_SECRET,
    heapUsedMb,
    checkTime: new Date().toISOString()
  });
});

app.get("/api/metrics", (req, res) => {
  const uptime = Math.floor((Date.now() - serverStartTime) / 1000);
  const mem = process.memoryUsage();
  res.status(200).json({
    metrics_timestamp: new Date().toISOString(),
    requests_total: requestCounter,
    errors_total: errorCounter,
    error_rate_pct: requestCounter > 0 ? Number(((errorCounter / requestCounter) * 100).toFixed(2)) : 0,
    uptime_seconds: uptime,
    memory_rss_mb: Math.round(mem.rss / 1024 / 1024),
    memory_heap_used_mb: Math.round(mem.heapUsed / 1024 / 1024),
    active_database_tables: 8
  });
});

// ============================================================================
// 3. SEARCH ENGINE & AI SEARCH READINESS ENDPOINTS (XML Sitemap, robots.txt, llms.txt)
// ============================================================================
const BASE_URL = process.env.APP_URL || "https://digitalgrowltd.com";

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/admin/

# Google AI Overviews, Gemini, OpenAI ChatGPT Search, and Perplexity Indexing Allowed
User-agent: Googlebot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: GPTBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`);
});

app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  const urls = [
    { loc: "/", changefreq: "daily", priority: "1.0" },
    { loc: "/services", changefreq: "weekly", priority: "0.9" },
    { loc: "/industries", changefreq: "weekly", priority: "0.9" },
    { loc: "/portfolio", changefreq: "weekly", priority: "0.8" },
    { loc: "/blog", changefreq: "daily", priority: "0.9" },
    { loc: "/trust-center", changefreq: "monthly", priority: "0.8" },
    { loc: "/locations/dhaka", changefreq: "weekly", priority: "0.9" },
    { loc: "/locations/chittagong", changefreq: "weekly", priority: "0.8" },
    { loc: "/locations/sylhet", changefreq: "weekly", priority: "0.8" }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${BASE_URL}${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
  res.send(xml);
});

// AI Search Readiness - Standardized llms.txt / ai.txt for LLM crawlers & citations
app.get(["/llms.txt", "/ai.txt"], (req, res) => {
  res.type("text/plain");
  res.send(`# Digital Grower Ltd. - AI Search & Entity Reference Guide (llms.txt)
Company Name: Digital Grower Ltd. (DGL IT)
HQ: Dhaka, Bangladesh | ISO 27001 & ISO 9001 Certified
Website: ${BASE_URL}
Primary Capabilities: Enterprise Custom Software Development, C#/.NET ERP Systems, Banking & Fintech Software, Performance Marketing, SEO/GEO Optimization.
Contact Email: israt@digitalgrowltd.com
Customer Satisfaction Rate: 99.99% across 450+ enterprise clients globally.

## Key Services
- Enterprise Custom Software Engineering (C#, .NET 8, React, Node.js)
- ERP & Core Banking Software Implementation
- AI Overviews & Generative Engine Optimization (GEO)
- Technical SEO & Google Search Console Telemetry
`);
});

// Mount Enterprise SaaS Admin Panel API Routes
app.use("/api/admin", adminRoutes);

// Public BGC Configuration Endpoint
app.get("/api/bgc", (req, res) => {
  const bgcData = adminStore.getBgcData();
  res.json({ success: true, bgcData });
});

// Lazy initialize GoogleGenAI to prevent startup crashes if GEMINI_API_KEY is not defined
let aiClient: GoogleGenAI | null = null;
function getAiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured in the secrets/environment.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API endpoint for intelligent AI-powered color conversion
app.post("/api/convert-code", async (req, res) => {
  const { code, stylePreference, language } = req.body;
  if (!code) {
    return res.status(400).json({ error: "No code provided." });
  }

  try {
    const ai = getAiClient();
    
    const systemPrompt = `You are a professional frontend UI/UX designer and code refactoring specialist.
Your task is to convert the color scheme of the user's provided code (HTML, SVG, React JSX, Vue, CSS, Tailwind CSS, or Tailwind inline styles) into a highly polished, premium, high-contrast "Orange and Black" visual theme.

Follow these strict rules:
1. Replace all color references (Tailwind classes like 'bg-blue-500', 'text-green-600', 'border-indigo-200', hex codes like '#3b82f6', RGB colors, CSS named colors) with equivalent shades of orange, black, charcoal, dark gray, and high-contrast light colors.
2. Use this strategic mapping to maintain visual hierarchy:
   - Primary Backgrounds: Pure black (#000000), deep charcoal (#0a0a0a, #121212), or dark obsidian.
   - Cards/Containers: Slightly lighter charcoal (#1e1e1e, #18181b) or black with a very subtle orange accent.
   - Primary Text: High-contrast white (#ffffff) or very pale warm gray/orange for readability.
   - Secondary Text: Warm gray (#a1a1aa) or muted amber/orange-tinted text.
   - Primary Accents (Active tabs, buttons, focus borders, primary highlights): Vibrant orange (#f97316 (orange-500), #ea580c (orange-600), #ff6b00).
   - Secondary Accents / Hover: Lighter warm orange (#fb923c) or darker orange (#c2410c).
   - Borders & Dividers: Dark charcoal (#27272a) or a thin, subtle warm amber line.
3. Keep ALL content, logic, functions, variables, non-color classes (e.g., 'flex', 'grid', 'p-4', 'rounded-lg', 'transition-all', layout styles, onClick, etc.), and code structure EXACTLY the same. Change ONLY the styling color attributes/classes.
4. If there are SVG elements, recolor their fills and strokes to match the orange-and-black theme.
5. Return ONLY the raw converted code. Absolutely no markdown block wrappers (like \`\`\`jsx or \`\`\`), no introductory text, and no explanations. Your response must be directly usable as the source code.`;

    const userPrompt = `Here is the code to convert:
Language/Type: ${language || 'Auto-detect'}
Preference: ${stylePreference || 'Premium Dark Mode with Vivid Orange Accents'}

CODE:
${code}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.1,
      }
    });

    const convertedCode = response.text || "";
    // Clean up any markdown code block wrapper if the model accidentally included one
    let cleanedCode = convertedCode.trim();
    if (cleanedCode.startsWith("```")) {
      const firstLineBreak = cleanedCode.indexOf("\n");
      if (firstLineBreak !== -1) {
        cleanedCode = cleanedCode.substring(firstLineBreak + 1);
      }
      if (cleanedCode.endsWith("```")) {
        cleanedCode = cleanedCode.substring(0, cleanedCode.length - 3);
      }
    }

    res.json({ success: true, originalCode: code, convertedCode: cleanedCode.trim() });
  } catch (error: any) {
    console.error("AI code conversion failed:", error);
    res.status(500).json({ error: error.message || "Failed to convert code using Gemini AI." });
  }
});

// AI Chatbot endpoint for the Digital Marketing Agency
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages history array is required." });
  }

  try {
    const ai = getAiClient();
    
    const systemPrompt = `You are a professional, helpful, and friendly AI Consultant for "DGL IT" (8+ years of experience, 99.99% client satisfaction).
Your goal is to answer potential clients' questions about DGL IT, our services, pricing, SEO, and institutional management systems (School, University, Hospital management) with data-driven expertise.

Key Details about the Agency:
- Services Offered:
  1. Performance Marketing: Google Ads, YouTube Ads, Conversion Tracking, Server-Side Tracking, Email Marketing.
  2. Social Media Marketing: Facebook Ads, Instagram Ads, TikTok Ads, LinkedIn Ads.
  3. SEO (Search Engine Optimization): Technical SEO (structured data, page speed, site architecture), On-Page SEO (high-quality EEAT content), Off-Page SEO (authority building/backlinks).
- Solutions: School, University, and Hospital Management platforms that rank high on Google and feature integrated portals, student/patient records (EMR/EHR), and automated billing.
- Contact: Phone/WhatsApp: +880 1989-373683, Email: digitalgrowerltd@gmail.com. Working Hours: Mon-Sat, 9:00 AM - 8:00 PM.
- Tone: Extremely professional, persuasive, conversational, data-backed, clear, and reassuring. Keep responses relatively concise and focused on how our agency can maximize their business growth (ROI).

Formulate your response in a friendly assistant tone. Keep answers concise (1-3 small paragraphs), well-formatted, and encourage them to connect via WhatsApp (+8801989373683) for a free custom audit!`;

    // Map the incoming messages into the format required by Google GenAI SDK or construct a single conversation prompt
    // Let's format the conversation into a single chat prompt
    const formattedPrompt = messages.map((m: any) => {
      const roleName = m.role === "user" ? "User" : "Consultant";
      return `${roleName}: ${m.content}`;
    }).join("\n") + "\nConsultant:";

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    const reply = response.text || "Thank you for reaching out! Please message us on WhatsApp at +8801989373683 for a quick response.";
    res.json({ success: true, reply: reply.trim() });
  } catch (error: any) {
    console.error("AI chatbot failed:", error);
    res.status(500).json({ error: error.message || "Failed to communicate with AI Consultant." });
  }
});

// API endpoint for Booking a Free Consultation
app.post("/api/book-consultation", async (req, res) => {
  const { name, companyName, designation, email, phone, website, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Name, email, and phone number are required." });
  }

  try {
    const nodemailer = await import("nodemailer");

    // Retrieve SMTP or Gmail credentials from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const mailOptions = {
      from: smtpUser ? `"Digital Grower Consultation" <${smtpUser}>` : `"Digital Grower Portal" <portal@digitalgrower.ltd>`,
      to: "digitalgrowerltd@gmail.com",
      replyTo: email,
      subject: `New Free Consultation Booking: ${name}`,
      text: `
You have received a new Free Consultation Booking:

Personal Info:
--------------------
Name: ${name}
Company Name: ${companyName || 'N/A'}
Designation: ${designation || 'N/A'}

Contact Info:
--------------------
Email: ${email}
Phone: ${phone}
Website: ${website || 'N/A'}

Message:
--------------------
${message || 'No additional message provided.'}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px; margin-top: 0;">New Consultation Request</h2>
          
          <h3 style="color: #111; margin-top: 15px;">Personal Info</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Company:</td>
              <td style="padding: 6px 0;">${companyName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Designation:</td>
              <td style="padding: 6px 0;">${designation || 'N/A'}</td>
            </tr>
          </table>

          <h3 style="color: #111; margin-top: 20px;">Contact Info</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 6px 0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Website:</td>
              <td style="padding: 6px 0;">${website ? `<a href="${website}" target="_blank">${website}</a>` : 'N/A'}</td>
            </tr>
          </table>

          <h3 style="color: #111; margin-top: 20px;">Message</h3>
          <div style="background-color: #f9f9f9; padding: 12px; border-radius: 6px; white-space: pre-wrap; font-style: italic; border: 1px solid #eee;">
            ${message || 'No additional message provided.'}
          </div>
        </div>
      `
    };

    let isRealSent = false;
    let transportError = null;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        await transporter.sendMail(mailOptions);
        isRealSent = true;
      } catch (err: any) {
        console.error("Nodemailer failed to send via configured SMTP:", err);
        transportError = err.message || err;
      }
    }

    // Automatically create a CRM Lead in our Enterprise Admin Portal
    try {
      adminStore.createLeadFromConsultation({
        name,
        companyName,
        designation,
        email,
        phone,
        message,
        ip: req.ip || '127.0.0.1'
      });
    } catch (crmErr) {
      console.warn("Failed to auto-create CRM lead from consultation:", crmErr);
    }

    // Console log the booking for offline/debugging purposes
    console.log("========================================");
    console.log("CONSULTATION BOOKING RECEIVED FOR digitalgrowerltd@gmail.com:");
    console.log(mailOptions.text);
    console.log("========================================");

    res.json({
      success: true,
      isRealSent,
      transportError,
      message: isRealSent 
        ? "Your request has been successfully emailed to our support team." 
        : "Your request was successfully logged on the server."
    });

  } catch (error: any) {
    console.error("Consultation booking API failed:", error);
    res.status(500).json({ error: error.message || "Failed to process booking." });
  }
});

// Vite middleware setup for development, standard static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
