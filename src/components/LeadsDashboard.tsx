import React, { useState } from "react";
import { Lead } from "../types";
import { Search, Filter, Trash2, Calendar, Phone, Mail, Check, AlertCircle, X, DownloadCloud } from "lucide-react";

interface LeadsDashboardProps {
  leads: Lead[];
  onUpdateStatus: (id: string, nextStatus: Lead["status"]) => void;
  onDeleteLead: (id: string) => void;
  onClose: () => void;
}

export default function LeadsDashboard({ leads, onUpdateStatus, onDeleteLead, onClose }: LeadsDashboardProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [courseFilter, setCourseFilter] = useState<string>("all");

  const coursesList = [
    "Search Engine Optimization (SEO)",
    "Social Media Marketing (SMM)",
    "Pay-Per-Click (PPC) Advertising",
    "Content Creation & Marketing",
    "Email Marketing & Automation",
    "Web Analytics & Reporting"
  ];

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    
    const matchesCourse = courseFilter === "all" || 
      lead.courseInterest.toLowerCase().includes(courseFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesCourse;
  });

  const getStatusColor = (status: Lead["status"]) => {
    switch (status) {
      case "New":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Contacted":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Interested":
        return "bg-cyan-100 text-cyan-800 border-cyan-200";
      case "Admitted":
        return "bg-green-100 text-green-800 border-green-200";
      case "Closed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-850";
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = "ID,Name,Phone,Email,Interest,Message,Date,Status\n";
    const rows = leads.map(l => 
      `"${l.id}","${l.name}","${l.phone}","${l.email}","${l.courseInterest}","${l.message.replace(/"/g, '""')}","${l.date}","${l.status}"`
    ).join("\n");
    
    const csvContent = "data:text/csv;charset=utf-8," + headers + rows;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `cyberwise_leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-cyber-dark/80 backdrop-blur-sm" onClick={onClose} />

      {/* Main Panel */}
      <div className="relative bg-[#120921] border border-cyber-blue/50 text-white rounded-3xl w-full max-w-5xl h-[85vh] overflow-hidden flex flex-col shadow-2xl z-10" id="crm_dashboard_panel">
        
        {/* Header bar */}
        <div className="p-6 border-b border-cyber-blue/30 flex items-center justify-between bg-cyber-dark">
          <div className="flex items-center gap-3">
            <div className="bg-cyber-orange p-2.5 rounded-xl text-white">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                CyberWise Admissions CRM
                <span className="text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2.5 py-0.5 rounded-full select-none">
                  {leads.length} Records
                </span>
              </h3>
              <p className="text-xs text-white/50 font-sans mt-0.5">
                Manage registered prospects, schedule phone consultations, and track enrollment pipelines.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
            id="close_crm_btn"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Search and Filters Toolbar */}
        <div className="p-4 sm:p-5 border-b border-cyber-blue/20 bg-[#1A0F2D] flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search prospects by name, phone, or email..."
              className="w-full bg-cyber-dark/80 border border-cyber-blue/40 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-orange/40"
              id="crm_search_prospects"
            />
          </div>

          {/* Filters controls */}
          <div className="flex flex-wrap gap-2.5 items-center">
            
            {/* Status dropdown */}
            <div className="flex items-center gap-1.5 bg-cyber-dark px-3 py-1.5 rounded-xl border border-cyber-blue/40">
              <Filter className="h-3.5 w-3.5 text-cyber-orange" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none cursor-pointer font-sans"
              >
                <option value="all" className="bg-[#120921]">All Statuses</option>
                <option value="New" className="bg-[#120921]">New Leads</option>
                <option value="Contacted" className="bg-[#120921]">Contacted</option>
                <option value="Interested" className="bg-[#120921]">Interested</option>
                <option value="Admitted" className="bg-[#120921]">Admitted Alumni</option>
                <option value="Closed" className="bg-[#120921]">Closed</option>
              </select>
            </div>

            {/* Course Interest Dropdown */}
            <div className="flex items-center gap-1.5 bg-cyber-dark px-3 py-1.5 rounded-xl border border-cyber-blue/40">
              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none cursor-pointer font-sans max-w-[150px] truncate"
              >
                <option value="all" className="bg-[#120921]">All Interest Lanes</option>
                {coursesList.map(c => (
                  <option key={c} value={c} className="bg-[#120921]">{c.replace(" (SEO)", "").replace(" (SMM)", "")}</option>
                ))}
              </select>
            </div>

            {/* CSV export */}
            <button
              onClick={handleExportCSV}
              disabled={leads.length === 0}
              className="bg-cyber-blue hover:bg-cyber-blue/80 disabled:opacity-40 text-white font-mono text-xs font-bold px-3.5 py-2 rounded-xl inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <DownloadCloud className="w-4 h-4" />
              CSV
            </button>
          </div>

        </div>

        {/* CRM Leads Grid/Table (Scroll Area) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-cyber-dark/40">
          {filteredLeads.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
              <AlertCircle className="h-12 w-12 text-white/25" />
              <div>
                <h4 className="font-semibold text-white/80">No prospects matched filter</h4>
                <p className="text-xs text-white/50 mt-1 max-w-sm">
                  Fill our contact callback form or use our interactive career quiz questions to populate leads instantly.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {filteredLeads.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#160B28] border border-cyber-blue/40 rounded-2xl p-5 hover:border-cyber-blue transition-all flex flex-col justify-between"
                  id={`crm_lead_token_${item.id}`}
                >
                  <div className="space-y-4">
                    {/* Header: Date + Status Badge */}
                    <div className="flex items-center justify-between gap-2 border-b border-cyber-blue/20 pb-3">
                      <span className="text-[10px] text-white/50 font-mono inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.date}
                      </span>
                      
                      <span className={`text-[10px] uppercase tracking-wider font-mono font-bold px-2.5 py-0.5 rounded-full border ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>

                    {/* Candidate Identity */}
                    <div>
                      <h4 className="font-display font-extrabold text-base text-white">{item.name}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1 text-xs text-white/70 mt-1.5 font-mono">
                        <span className="inline-flex items-center gap-1 hover:text-cyber-orange transition-colors">
                          <Phone className="h-3 w-3" />
                          {item.phone}
                        </span>
                        <span className="hidden sm:inline text-white/20">|</span>
                        <span className="inline-flex items-center gap-1 truncate max-w-[200px] hover:text-cyber-orange transition-colors">
                          <Mail className="h-3 w-3" />
                          {item.email}
                        </span>
                      </div>
                    </div>

                    {/* Target Intent Course */}
                    <div className="bg-cyber-dark/60 rounded-xl p-3 border border-cyber-blue/30 space-y-1">
                      <span className="block text-[9px] text-white/40 tracking-wider uppercase font-mono">Interested Curriculum:</span>
                      <span className="block text-xs text-[#1BC5BD] font-semibold">{item.courseInterest}</span>
                      
                      {item.message && (
                        <>
                          <span className="block text-[9px] text-white/40 tracking-wider uppercase font-mono mt-2">Personal message:</span>
                          <p className="text-xs text-white/80 italic font-sans leading-relaxed line-clamp-2">
                            "{item.message}"
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Actions Pipeline */}
                  <div className="mt-5 pt-3 border-t border-cyber-blue/20 flex flex-wrap items-center justify-between gap-3">
                    
                    {/* Status Changer */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-white/40 font-mono">Set Pipeline:</span>
                      <select
                        value={item.status}
                        onChange={(e) => onUpdateStatus(item.id, e.target.value as Lead["status"])}
                        className="bg-cyber-dark border border-cyber-blue/40 font-mono text-[10px] text-white font-bold px-2 py-1 rounded-md focus:outline-none cursor-pointer"
                        id={`crm_change_status_${item.id}`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Interested">Interested</option>
                        <option value="Admitted">Admitted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>

                    {/* Delete Icon */}
                    <button
                      onClick={() => onDeleteLead(item.id)}
                      className="p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                      id={`crm_delete_lead_${item.id}`}
                      aria-label="Delete prospect"
                    >
                      <Trash2 className="h-4.5 w-4.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-cyber-dark border-t border-cyber-blue/30 text-center text-[10px] font-mono text-white/40 uppercase tracking-widest leading-relaxed">
          🔒 Secure Admissions Ledger • CyberWise Digital Campus Kerala
        </div>

      </div>
    </div>
  );
}
