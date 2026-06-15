import React, { useState } from "react";
import { GraduationCap, Facebook, Instagram, Linkedin, Heart, Shield, Lock, FileText, Globe } from "lucide-react";
import CyberWiseLogo from "./CyberWiseLogo";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenCRM: () => void;
}

export default function Footer({ onScrollToSection, onOpenCRM }: FooterProps) {
  const [activeOverlay, setActiveOverlay] = useState<"privacy" | "terms" | null>(null);

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Courses", id: "courses" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQ", id: "faq" },
    { label: "Contact Us", id: "contact" }
  ];

  return (
    <footer className="bg-cyber-dark text-white/80 pt-16 pb-8 border-t border-cyber-blue/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Logo Column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onScrollToSection("home")}>
              <div className="bg-cyber-orange p-2 rounded-lg text-white group-hover:scale-105 transition-transform flex items-center justify-center">
                <CyberWiseLogo className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  CyberWise<span className="text-cyber-orange">.</span>
                </span>
                <span className="block text-[9px] text-cyber-light/65 font-mono tracking-widest uppercase -mt-1">
                  Digital Campus
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-white/55 font-sans leading-relaxed">
              Kerala's premium, agency-backed training center specializing in SEO, SMM, and Conversion Ad Campaigns. Learn practical digital marketing through live client workflow diagnostics in Malappuram.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyber-orange text-white/70 hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyber-orange text-white/70 hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyber-orange text-white/70 hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="hover:text-cyber-orange transition-colors text-left"
                    id={`footer_link_${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Categories Column (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase">Marketing Disciplines</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/60 font-sans">
              <li>• Search Engine Optimization (SEO)</li>
              <li>• Social Media Management (SMM)</li>
              <li>• Google Performance Analytics (GA4)</li>
              <li>• Meta Paid Campaign Conversions</li>
              <li>• Inbound Email Automation</li>
            </ul>
          </div>

          {/* Location details (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase">Affiliated Group</h4>
            <p className="text-xs text-white/55 font-sans leading-relaxed">
              Powered by:<br />
              <strong className="text-white">CyberWise Info Solutions</strong><br />
              Angadippuram, Kerala - 679321
            </p>
            <div className="inline-flex gap-1 items-center text-[10px] text-green-400 font-mono">
              <Globe className="h-3 w-3" />
              <span>Syllabus Active 2026/27</span>
            </div>
          </div>

        </div>

        {/* BOTTOM ACCREDITATIONS & CREDITS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
          <div>
            &copy; {new Date().getFullYear()} CyberWise Digital Campus. All Rights Reserved.
          </div>

          {/* Policy buttons + Secure Console */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-center">
            <button onClick={() => setActiveOverlay("privacy")} className="hover:text-white transition-colors cursor-pointer" id="privacy_policy_trigger">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setActiveOverlay("terms")} className="hover:text-white transition-colors cursor-pointer" id="terms_trigger">
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={onOpenCRM}
              id="crm_admin_panel_trigger"
              className="px-2.5 py-1 rounded bg-cyber-blue/50 text-cyan-400 border border-cyan-400/20 hover:border-cyan-400/60 transition-colors font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              Admissions Console
            </button>
          </div>
        </div>

        {/* Heart watermark */}
        <div className="mt-6 text-center text-[10.5px] text-white/20 font-sans flex items-center justify-center gap-1">
          <span>Crafted with</span>
          <Heart className="h-3.5 w-3.5 text-cyber-orange fill-cyber-orange" />
          <span>for CyberWise Info Solutions, Angadippuram, Malappuram</span>
        </div>
      </div>

      {/* POLICY TEXT OVERLAY MODALS */}
      {activeOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-cyber-dark/80 backdrop-blur-sm" onClick={() => setActiveOverlay(null)} />
          
          <div className="relative bg-[#120921] border border-cyber-blue/40 text-white rounded-2xl p-6 sm:p-8 w-full max-w-lg shadow-2xl z-10 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setActiveOverlay(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white cursor-pointer"
              id="close_policy_overlay"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {activeOverlay === "privacy" ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-cyber-blue/30 pb-3">
                  <Shield className="h-6 w-6 text-cyber-orange" />
                  <h3 className="font-display text-xl font-bold">Privacy Policy Guidance</h3>
                </div>
                <div className="text-xs sm:text-sm text-cyber-light/80 space-y-3 font-sans leading-relaxed">
                  <p>
                    Your privacy is critical to us. CyberWise Digital Campus (powered by CyberWise Info Solutions) collects basic identity metrics (name, mobile number, email, and course interest query) strictly for administrative evaluation.
                  </p>
                  <p>
                    <strong>Data Protection:</strong> All registered leads are stored securely inside your client domain environment registry configuration. We never trade, rent, or lease applicant lists to secondary third-party brokers.
                  </p>
                  <p>
                    <strong>Communication Guidelines:</strong> By raising a callback callback or downloading a brochure, you authorise CyberWise admissions officers to call you directly or send WhatsApp course syllabus structures.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-cyber-blue/30 pb-3">
                  <FileText className="h-6 w-6 text-cyber-orange" />
                  <h3 className="font-display text-xl font-bold">Terms & Conditions of Admission</h3>
                </div>
                <div className="text-xs sm:text-sm text-cyber-light/80 space-y-3 font-sans leading-relaxed">
                  <p>
                    By registering for a digital marketing prospectus, you verify that all supplied candidate numbers are correct and owned by you (or authorized by your parents/guardians).
                  </p>
                  <p>
                    <strong>Syllabus Scope:</strong> All details, tools covered, and durations represent our scheduled syllabus cycles. Batch schedules and physical seating limits are managed dynamically by the registrar.
                  </p>
                  <p>
                    <strong>Career Outlines:</strong> Salary stats represent Malappuram/Kerala benchmark listings only. Actual salary results depend on professional skill portfolios, individual student dedication, and final recruiter panel diagnostics.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
