import React, { useState, useEffect } from 'react';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  Download, 
  FileText, 
  DollarSign,
  MessageSquare,
  History,
  Tag
} from 'lucide-react';
import { CrmLeadItem, ContactSubmissionItem, CustomerProfileItem } from '../../types/admin';
import { useAdminAuth } from '../../context/AdminAuthContext';

export const AdminCRMView: React.FC = () => {
  const { token, user } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<'leads' | 'submissions' | 'customers'>('leads');
  const [leads, setLeads] = useState<CrmLeadItem[]>([]);
  const [submissions, setSubmissions] = useState<ContactSubmissionItem[]>([]);
  const [customers, setCustomers] = useState<CustomerProfileItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Modal for adding a CRM Lead
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadCompany, setLeadCompany] = useState('');
  const [leadDesignation, setLeadDesignation] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadSource, setLeadSource] = useState<'Google AI Overview' | 'Organic SEO' | 'Referral' | 'LinkedIn Ads' | 'WhatsApp'>('Google AI Overview');
  const [leadPriority, setLeadPriority] = useState<'High' | 'Medium' | 'Low'>('High');
  const [leadOwner, setLeadOwner] = useState('Engr. MD Israt');
  const [leadNotes, setLeadNotes] = useState('');

  // Selected Lead for view/edit modal
  const [selectedLead, setSelectedLead] = useState<CrmLeadItem | null>(null);

  const fetchCrmData = async () => {
    try {
      const [leadsRes, subsRes, custRes] = await Promise.all([
        fetch('/api/admin/crm/leads', { headers: { 'Authorization': `Bearer ${token}` } }),
        fetch('/api/admin/crm/submissions', { headers: { 'Authorization': `Bearer ${token}` } }),
        fetch('/api/admin/customers', { headers: { 'Authorization': `Bearer ${token}` } })
      ]);
      const leadsData = await leadsRes.json();
      const subsData = await subsRes.json();
      const custData = await custRes.json();

      if (leadsData.success) setLeads(leadsData.leads || []);
      if (subsData.success) setSubmissions(subsData.submissions || []);
      if (custData.success) setCustomers(custData.customers || []);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    fetchCrmData();
  }, [token]);

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail) return;

    try {
      const res = await fetch('/api/admin/crm/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: leadName,
          companyName: leadCompany,
          designation: leadDesignation,
          email: leadEmail,
          phone: leadPhone,
          source: leadSource,
          priority: leadPriority,
          owner: leadOwner,
          notes: leadNotes,
          status: 'New'
        })
      });
      const data = await res.json();
      if (data.success) {
        setShowAddLeadModal(false);
        setLeadName('');
        setLeadCompany('');
        setLeadEmail('');
        setLeadPhone('');
        setLeadNotes('');
        fetchCrmData();
      }
    } catch {
      // ignore
    }
  };

  const handleUpdateLeadStatus = async (id: string, newStatus: string) => {
    try {
      await fetch(`/api/admin/crm/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      fetchCrmData();
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead({ ...selectedLead, status: newStatus as any });
      }
    } catch {
      // ignore
    }
  };

  const handleExportSubmissionsCsv = () => {
    if (submissions.length === 0) return;
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Service', 'Status', 'SpamScore', 'Date', 'Message'];
    const rows = submissions.map(s => [
      s.id,
      `"${s.name}"`,
      s.email,
      s.phone,
      `"${s.company}"`,
      `"${s.serviceInterest}"`,
      s.status,
      s.spamScore,
      s.receivedAt,
      `"${s.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `dgl-contact-submissions-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(l => {
    const matchesSearch = 
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Enterprise CRM & Client Relationships</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Track high-value enterprise leads, spam-filtered form inquiries, and active corporate accounts.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'leads' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Lead Pipeline ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab('submissions')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'submissions' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Contact Submissions ({submissions.length})
            </button>
            <button
              onClick={() => setActiveTab('customers')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'customers' ? 'bg-brand-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Enterprise Accounts ({customers.length})
            </button>
          </div>

          {activeTab === 'leads' && (
            <button
              onClick={() => setShowAddLeadModal(true)}
              className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>+ Capture Lead</span>
            </button>
          )}

          {activeTab === 'submissions' && (
            <button
              onClick={handleExportSubmissionsCsv}
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-all border border-zinc-700 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-brand-400" />
              <span>Export CSV</span>
            </button>
          )}
        </div>
      </div>

      {/* FILTER AND SEARCH BAR FOR LEADS */}
      {activeTab === 'leads' && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by name, company, or email..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 w-64"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-xs text-zinc-400 font-bold">Stage:</span>
            {['ALL', 'New', 'Contacted', 'Qualified', 'Proposal', 'Won', 'Lost'].map(stage => (
              <button
                key={stage}
                onClick={() => setStatusFilter(stage)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  statusFilter === stage
                    ? 'bg-brand-500 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 1. LEAD PIPELINE VIEW */}
      {activeTab === 'leads' && (
        <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Lead & Company</th>
                  <th className="py-4 px-6">Contact Details</th>
                  <th className="py-4 px-6">Source</th>
                  <th className="py-4 px-6">Stage</th>
                  <th className="py-4 px-6">Priority</th>
                  <th className="py-4 px-6">Owner / Follow-up</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs">
                {filteredLeads.map(lead => (
                  <tr key={lead.id} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white text-sm">{lead.name}</div>
                      <div className="text-xs text-brand-400 font-semibold">{lead.companyName}</div>
                      <div className="text-[10px] text-zinc-500">{lead.designation}</div>
                    </td>
                    <td className="py-4 px-6">
                      <a href={`mailto:${lead.email}`} className="text-zinc-300 hover:underline block">{lead.email}</a>
                      <a href={`tel:${lead.phone}`} className="text-zinc-400 font-mono text-[11px] block mt-0.5">{lead.phone}</a>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
                        {lead.source}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <select
                        value={lead.status}
                        onChange={e => handleUpdateLeadStatus(lead.id, e.target.value)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold bg-zinc-950 border border-zinc-700 focus:outline-none ${
                          lead.status === 'Won' ? 'text-emerald-400 border-emerald-500/40' :
                          lead.status === 'Proposal' ? 'text-brand-400 border-brand-500/40' :
                          lead.status === 'Qualified' ? 'text-blue-400 border-blue-500/40' : 'text-zinc-300'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Proposal">Proposal</option>
                        <option value="Won">Won</option>
                        <option value="Lost">Lost</option>
                      </select>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        lead.priority === 'High' ? 'bg-red-500/15 text-red-400 border border-red-500/30' :
                        lead.priority === 'Medium' ? 'bg-amber-500/15 text-amber-400' : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {lead.priority}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-zinc-400">
                      <div className="font-semibold text-zinc-300">{lead.owner}</div>
                      <div className="text-[10px] text-zinc-500">Follow up: {lead.followUpDate}</div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-colors"
                      >
                        Details & Notes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. CONTACT FORM SUBMISSIONS VIEW */}
      {activeTab === 'submissions' && (
        <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Sender / Company</th>
                  <th className="py-4 px-6">Service Interest</th>
                  <th className="py-4 px-6">Message & Inquiry</th>
                  <th className="py-4 px-6">Spam Flag Score</th>
                  <th className="py-4 px-6">Received At</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs">
                {submissions.map(sub => (
                  <tr key={sub.id} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white text-sm">{sub.name}</div>
                      <div className="text-xs text-brand-400">{sub.company}</div>
                      <div className="text-[11px] text-zinc-400">{sub.email} • {sub.phone}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 text-[11px] font-semibold">
                        {sub.serviceInterest}
                      </span>
                    </td>
                    <td className="py-4 px-6 max-w-sm">
                      <p className="text-zinc-300 italic">"{sub.message}"</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        sub.spamScore < 0.05 ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/15 text-red-400'
                      }`}>
                        {(sub.spamScore * 100).toFixed(0)}% (Clean)
                      </span>
                    </td>
                    <td className="py-4 px-6 text-zinc-400 font-mono text-[11px]">
                      {sub.receivedAt}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold capitalize ${
                        sub.status === 'unread' ? 'bg-amber-500/20 text-amber-400' : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. CUSTOMER ACCOUNTS VIEW */}
      {activeTab === 'customers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customers.map(cust => (
            <div
              key={cust.id}
              className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{cust.companyName}</h3>
                  <div className="text-xs text-zinc-400">Primary Contact: <strong className="text-zinc-200">{cust.name}</strong></div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {cust.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                <div>
                  <span className="text-[11px] text-zinc-500 block">Total Invoiced (USD):</span>
                  <span className="text-base font-black text-white">${cust.totalInvoicedUsd.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block">Active Projects:</span>
                  <span className="text-base font-black text-brand-400">{cust.activeProjectsCount} Engagements</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-zinc-400 block mb-1.5">Account Manager: <strong className="text-white">{cust.accountManager}</strong></span>
                <div className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-800/80 text-xs text-zinc-300">
                  <div className="font-bold text-brand-400 mb-0.5">Latest Executive Log:</div>
                  <p className="italic">"{cust.communicationHistory[0]?.summary || 'Ongoing retainer communication.'}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD LEAD MODAL */}
      {showAddLeadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-lg w-full shadow-2xl">
            <h3 className="text-lg font-bold text-white pb-3 border-b border-zinc-800">Capture New Enterprise Lead</h3>
            <form onSubmit={handleCreateLead} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Lead Name</label>
                <input
                  type="text"
                  required
                  value={leadName}
                  onChange={e => setLeadName(e.target.value)}
                  placeholder="e.g. Tanvir Hossain"
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    required
                    value={leadCompany}
                    onChange={e => setLeadCompany(e.target.value)}
                    placeholder="e.g. Meghna Textiles Ltd"
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Designation</label>
                  <input
                    type="text"
                    value={leadDesignation}
                    onChange={e => setLeadDesignation(e.target.value)}
                    placeholder="e.g. Managing Director"
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={e => setLeadEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={leadPhone}
                    onChange={e => setLeadPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Lead Source</label>
                  <select
                    value={leadSource}
                    onChange={e => setLeadSource(e.target.value as any)}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  >
                    <option value="Google AI Overview">Google AI Overview</option>
                    <option value="Organic SEO">Organic SEO</option>
                    <option value="Referral">Referral</option>
                    <option value="LinkedIn Ads">LinkedIn Ads</option>
                    <option value="WhatsApp">WhatsApp Regional Desk</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Priority</label>
                  <select
                    value={leadPriority}
                    onChange={e => setLeadPriority(e.target.value as any)}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                  >
                    <option value="High">High (Enterprise Conglomerate)</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Discovery Notes / Requirements</label>
                <textarea
                  rows={3}
                  value={leadNotes}
                  onChange={e => setLeadNotes(e.target.value)}
                  placeholder="e.g. Inquired about SAP ERP integration and ISO 27001 data residency..."
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs"
                />
              </div>
              <div className="flex justify-end gap-3 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setShowAddLeadModal(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-500 text-white text-xs font-bold shadow-lg shadow-brand-500/20"
                >
                  Create CRM Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* LEAD DETAILS & AUDIT HISTORY MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-xl w-full shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedLead.name} ({selectedLead.companyName})</h3>
                <p className="text-xs text-zinc-400">{selectedLead.designation} • {selectedLead.email}</p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-zinc-500 hover:text-white transition-colors text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="text-xs font-bold text-brand-400 mb-1">CRM Discovery Notes:</div>
                <p className="text-xs text-zinc-300 italic">"{selectedLead.notes}"</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
                  <History className="w-3.5 h-3.5 text-brand-400" />
                  <span>Lead Audit Trail & Activity History</span>
                </h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {selectedLead.history.map((hist, index) => (
                    <div key={index} className="p-2.5 rounded-lg bg-zinc-800/50 border border-zinc-800 text-xs">
                      <div className="flex justify-between text-[11px] text-zinc-400">
                        <span className="font-semibold text-zinc-300">{hist.user}</span>
                        <span>{hist.date}</span>
                      </div>
                      <p className="text-zinc-300 mt-1">{hist.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
