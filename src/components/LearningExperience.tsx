import React, { useState } from "react";
import { Check, Laptop, FileText, BarChart, GraduationCap, Briefcase, Zap, Milestone } from "lucide-react";

export default function LearningExperience() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Core Mechanics & Baseline Domain Setups",
      theme: "Phase 01: Setup",
      subtitle: "The Foundation",
      desc: "Every student receives a physical/virtual sandbox domain. Learn the mechanics of hosting, DNS settings, and WordPress architecture. You do not just listen; you set up your first online lab page from scratch.",
      deliverable: "Active custom blog with configured analytics telemetry",
      icon: Laptop,
      tools: ["WordPress", "cPanel", "DNS mapping", "Namecheap"]
    },
    {
      title: "Storytelling & Visual Assets Design",
      theme: "Phase 02: Branding",
      subtitle: "Copy & Elements",
      desc: "Next, we study consumer psychological hooks. Master copywriting patterns (like AIDA & PAS), build professional editorial schedules, and construct social graphics, short-form reels, and email templates.",
      deliverable: "A fully scheduled monthly marketing calendar + 10 creator templates",
      icon: FileText,
      tools: ["Canva Pro", "CapCut Editor", "Notion Boards", "Copywriting Formulas"]
    },
    {
      title: "Technical Auditing & Search Engines Dominance",
      theme: "Phase 03: Rankings",
      subtitle: "Organic Masterclass",
      desc: "Learn to audit page-speeds, repair sitemaps, research high-volume low-competition keywords, and capture organic Kerala business local queries on Google Maps and organic indices.",
      deliverable: "Pristine technical audit report of a Malappuram business",
      icon: BarChart,
      tools: ["SEMrush", "Google Search Console", "Screaming Frog", "Ahrefs"]
    },
    {
      title: "Active Performance Paid Campaign Operations",
      theme: "Phase 04: Ads",
      subtitle: "Performance Budgets",
      desc: "Step into ad bidding logic. We configure conversion tracking codes, prepare retargeting structures, allocate budget thresholds, and manage live mock lead campaigns on Facebook, Instagram, and Search Ads.",
      deliverable: "Live lead-gen campaign simulation with active ROAS math charts",
      icon: Zap,
      tools: ["Meta Ads Manager", "Google Ads Suite", "Tag Manager GTM", "Looker Studio"]
    },
    {
      title: "Portfolio Development & Mock Case Protections",
      theme: "Phase 05: Credentials",
      subtitle: "The Personal Agency Showcase",
      desc: "You pack your audits, campaign spreadsheets, content calendars, and keyword tracking dashboards into a spectacular, live personal online portfolio. This serves as your premium proof-of-competency when meeting future employers.",
      deliverable: "A hosted web marketing portfolio containing real student campaigns",
      icon: GraduationCap,
      tools: ["Web Portfolios", "Google Looker Dashboards", "LinkedIn Creator Setup"]
    },
    {
      title: "Direct Placement Handover & Internships",
      theme: "Phase 06: Career Gate",
      subtitle: "The Launchpad",
      desc: "Undergo simulated recruiter mock interviews. Graduate students receive formal placement briefings and are directly funneled to local marketing networks and our parent full-scale company CyberWise Info Solutions.",
      deliverable: "Direct interview invitations + 1-month optional agency internship",
      icon: Briefcase,
      tools: ["LinkedIn Networking", "Resume Audit Builder", "Agency Placements"]
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 sm:py-24 bg-cyber-dark text-white relative overflow-hidden">
      {/* Decorative accent colors */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-cyber-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/2 right-10 w-80 h-80 rounded-full bg-cyber-blue/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-cyber-orange font-mono text-xs font-bold uppercase tracking-widest bg-cyber-orange/15 px-3.5 py-1.5 rounded-full select-none border border-cyber-orange/20">
            <Milestone className="h-3 w-3" />
            Empathetic Learning Loop
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Interactive Learning Experience
          </h2>
          <p className="text-base text-white/70 font-sans leading-relaxed">
            See the practical 6-step roadmap we deploy to convert beginners into industry-hardened specialists. Click each phase block below to explore course workflows and specific lab targets.
          </p>
        </div>

        {/* Phase Timeline Navigator */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-12">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                activeStep === idx
                  ? "bg-cyber-orange border-cyber-orange text-white shadow-lg shadow-cyber-orange/10 scale-105"
                  : "bg-[#120921] border-cyber-blue/40 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              <span className="block font-mono text-[9px] uppercase tracking-wide opacity-80 mb-1">{step.theme}</span>
              <span className="block font-display font-bold text-sm leading-tight">{step.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Card Panel */}
        <div className="relative bg-[#120921] border border-cyber-blue/50 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Written content */}
            <div className="lg:col-span-8 space-y-5">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-cyber-orange px-2.5 py-1 rounded-full bg-cyber-orange/10 border border-cyber-orange/20">
                {current.theme} • {current.subtitle}
              </span>
              
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                {current.title}
              </h3>
              
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans max-w-3xl">
                {current.desc}
              </p>

              {/* Tools tags */}
              <div className="pt-2">
                <span className="block text-[10px] text-white/40 tracking-wider uppercase font-mono mb-2">Systems & Methodologies Mastered:</span>
                <div className="flex flex-wrap gap-2">
                  {current.tools.map((t, index) => (
                    <span key={index} className="text-xs font-mono bg-cyber-dark text-cyan-400 border border-cyber-blue/40 px-3 py-1.5 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Illustrative Deliverable stats */}
            <div className="lg:col-span-4 bg-cyber-dark/80 rounded-2xl p-5 sm:p-6 border border-cyber-blue/40 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyber-orange/10 rounded-xl text-cyber-orange">
                  <CurrentIcon className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-[10px] text-white/50 uppercase font-mono">Milestone Target</span>
                  <span className="block text-sm font-display font-semibold text-white">Active Deliverable</span>
                </div>
              </div>

              <div className="border-t border-cyber-blue/30 pt-4">
                <p className="text-xs text-cyber-orange font-mono font-bold uppercase mb-1">Your Portfolio Proof:</p>
                <p className="text-sm text-white font-sans bg-white/5 p-3 rounded-lg border border-white/10 italic">
                  " {current.deliverable} "
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-white/50 font-mono italic">
                <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>Audited & verified by mentor for grad points</span>
              </div>
            </div>

          </div>

          {/* Micro sequence marker */}
          <div className="mt-8 pt-6 border-t border-cyber-blue/30 flex items-center justify-between text-xs text-white/40 font-mono">
            <span>CyberWise Learning Loop v2.0</span>
            <span>Phase {activeStep + 1} of 6 Completed</span>
          </div>
        </div>

      </div>
    </section>
  );
}
