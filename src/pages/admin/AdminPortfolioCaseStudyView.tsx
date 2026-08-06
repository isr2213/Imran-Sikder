import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Plus, 
  CheckCircle2, 
  ExternalLink, 
  Download, 
  Code, 
  FileText, 
  Image, 
  Award,
  Layers
} from 'lucide-react';
import { PortfolioItem, CaseStudyItem } from '../../types/admin';
import { useAdminAuth } from '../../context/AdminAuthContext';

export const AdminPortfolioCaseStudyView: React.FC = () => {
  const { token } = useAdminAuth();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudyItem[]>([]);
  const [activeTab, setActiveTab] = useState<'portfolio' | 'case-studies'>('portfolio');

  // Modal State for New Portfolio
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [portTitle, setPortTitle] = useState('');
  const [portClient, setPortClient] = useState('');
  const [portIndustry, setPortIndustry] = useState('Fintech & Enterprise Banking');
  const [portDesc, setPortDesc] = useState('');
  const [portResults, setPortResults] = useState('+310% Revenue & Zero Latency');
  const [portTechs, setPortTechs] = useState('React, Node.js, Kubernetes, PostgreSQL');

  // Modal State for New Case Study
  const [showCaseModal, setShowCaseModal] = useState(false);
  const [csTitle, setCsTitle] = useState('');
  const [csClient, setCsClient] = useState('');
  const [csChallenge, setCsChallenge] = useState('');
  const [csSolution, setCsSolution] = useState('');
  const [csTimeline, setCsTimeline] = useState('10 Weeks');
  const [csResults, setCsResults] = useState('310% increase in organic revenue, Cited in Google AI Overviews');
  const [csPdfUrl, setCsPdfUrl] = useState('/assets/docs/dgl-enterprise-case-study.pdf');

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/admin/portfolio', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setPortfolio(data.portfolio || []);
        setCaseStudies(data.caseStudies || []);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    fetchItems();
  }, [token]);

  const handleCreatePortfolio = async (e: React.FormEvent) => {
    e.preventDefault();
    const techsArray = portTechs.split(',').map(t => t.trim()).filter(Boolean);

    try {
      const res = await fetch('/api/admin/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: portTitle,
          client: portClient,
          industry: portIndustry,
          description: portDesc,
          results: portResults,
          technologies: techsArray,
          status: 'completed'
        })
      });
      const data = await res.json();
      if (data.success) {
        setShowPortfolioModal(false);
        setPortTitle('');
        setPortClient('');
        setPortDesc('');
        fetchItems();
      }
    } catch {
      // ignore
    }
  };

  const handleCreateCaseStudy = async (e: React.FormEvent) => {
    e.preventDefault();
    const resArray = csResults.split(',').map(t => t.trim()).filter(Boolean);

    try {
      const res = await fetch('/api/admin/case-studies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: csTitle,
          clientName: csClient,
          industry: 'Enterprise SaaS & Conglomerates',
          businessChallenge: csChallenge,
          solution: csSolution,
          timeline: csTimeline,
          results: resArray,
          pdfDownloadUrl: csPdfUrl
        })
      });
      const data = await res.json();
      if (data.success) {
        setShowCaseModal(false);
        setCsTitle('');
        setCsClient('');
        setCsChallenge('');
        setCsSolution('');
        fetchItems();
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Portfolio & Case Studies Management</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Showcase enterprise engineering achievements, client results, technologies, and downloadable PDF case studies.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'portfolio' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Portfolio ({portfolio.length})
            </button>
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'case-studies' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Case Studies ({caseStudies.length})
            </button>
          </div>

          <button
            onClick={() => {
              if (activeTab === 'portfolio') {
                setShowPortfolioModal(true);
              } else {
                setShowCaseModal(true);
              }
            }}
            className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add {activeTab === 'portfolio' ? 'Portfolio Project' : 'Case Study'}</span>
          </button>
        </div>
      </div>

      {/* PORTFOLIO PROJECTS VIEW */}
      {activeTab === 'portfolio' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map(port => (
            <div
              key={port.id}
              className="rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={port.featuredImage}
                    alt={port.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-lg">
                      {port.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-zinc-950/80 text-brand-400 border border-zinc-800">
                      {port.industry}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Client: <span className="text-zinc-200">{port.client}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{port.title}</h3>
                  <p className="text-xs text-zinc-400 mt-2">{port.description}</p>

                  <div className="mt-4 p-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-xs font-bold text-brand-400 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Results: {port.results}</span>
                  </div>

                  <div className="mt-4">
                    <div className="text-[10px] font-extrabold uppercase text-zinc-500 mb-1.5">Technologies Used:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {port.technologies.map(tech => (
                        <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-950/50 flex items-center justify-between text-xs text-zinc-500">
                <span>Completed: {port.completionDate}</span>
                <span className="font-bold text-brand-400">Enterprise Verified</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CASE STUDIES VIEW */}
      {activeTab === 'case-studies' && (
        <div className="space-y-6">
          {caseStudies.map(cs => (
            <div
              key={cs.id}
              className="rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl overflow-hidden p-6"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <img
                    src={cs.featuredImage}
                    alt={cs.title}
                    className="w-full h-48 lg:h-full object-cover rounded-xl border border-zinc-800"
                  />
                </div>

                <div className="lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-brand-500/15 text-brand-400 border border-brand-500/30">
                        {cs.industry} • {cs.clientName}
                      </span>
                      <span className="text-xs text-zinc-400">Timeline: <strong className="text-white">{cs.timeline}</strong></span>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-3">{cs.title}</h3>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                        <div className="text-xs font-bold text-amber-400 mb-1">Business Challenge:</div>
                        <p className="text-xs text-zinc-300">{cs.businessChallenge}</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                        <div className="text-xs font-bold text-emerald-400 mb-1">Architecture & Solution:</div>
                        <p className="text-xs text-zinc-300">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-xs font-bold text-white mb-2">Verified Enterprise Results:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {cs.results.map((res, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                            ✓ {res}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {cs.pdfDownloadUrl && (
                    <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                      <span className="text-xs text-zinc-400">Executive PDF Briefing Available</span>
                      <a
                        href={cs.pdfDownloadUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-colors inline-flex items-center gap-2 border border-zinc-700"
                      >
                        <Download className="w-4 h-4 text-brand-400" />
                        <span>Download Executive Case Study PDF</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CREATE PORTFOLIO MODAL */}
      {showPortfolioModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-lg w-full shadow-2xl">
            <h3 className="text-lg font-bold text-white pb-3 border-b border-zinc-800">Add New Portfolio Project</h3>
            <form onSubmit={handleCreatePortfolio} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Project Name</label>
                <input
                  type="text"
                  required
                  value={portTitle}
                  onChange={e => setPortTitle(e.target.value)}
                  placeholder="e.g. Meghna Textiles Automated ERP Portal"
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Client Name</label>
                  <input
                    type="text"
                    required
                    value={portClient}
                    onChange={e => setPortClient(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Industry</label>
                  <input
                    type="text"
                    required
                    value={portIndustry}
                    onChange={e => setPortIndustry(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={portDesc}
                  onChange={e => setPortDesc(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Technologies Used</label>
                <input
                  type="text"
                  value={portTechs}
                  onChange={e => setPortTechs(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono"
                />
              </div>
              <div className="flex justify-end gap-3 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setShowPortfolioModal(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-500 text-white text-xs font-bold"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE CASE STUDY MODAL */}
      {showCaseModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-lg w-full shadow-2xl">
            <h3 className="text-lg font-bold text-white pb-3 border-b border-zinc-800">Add New Enterprise Case Study</h3>
            <form onSubmit={handleCreateCaseStudy} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Case Study Headline</label>
                <input
                  type="text"
                  required
                  value={csTitle}
                  onChange={e => setCsTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Client Name</label>
                  <input
                    type="text"
                    required
                    value={csClient}
                    onChange={e => setCsClient(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Timeline</label>
                  <input
                    type="text"
                    value={csTimeline}
                    onChange={e => setCsTimeline(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Business Challenge</label>
                <textarea
                  rows={2}
                  value={csChallenge}
                  onChange={e => setCsChallenge(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Solution Architecture</label>
                <textarea
                  rows={2}
                  value={csSolution}
                  onChange={e => setCsSolution(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                />
              </div>
              <div className="flex justify-end gap-3 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setShowCaseModal(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-500 text-white text-xs font-bold"
                >
                  Save Case Study
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
