import React, { useState } from "react";
import { ArrowRight, Download, CheckCircle, ShieldAlert, Sparkles, Send } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onAddLog: (log: any) => void;
}

export default function Hero({ onScrollToSection, onAddLog }: HeroProps) {
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [brochureForm, setBrochureForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "All Syllabus Combo"
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const highlights = [
    "Industry-Focused Curriculum",
    "Live Projects",
    "Placement Assistance",
    "Expert Mentors"
  ];

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureForm.name || !brochureForm.phone) return;

    // Log the lead
    const newLead = {
      id: "brch-" + Date.now(),
      name: brochureForm.name,
      phone: brochureForm.phone,
      email: brochureForm.email || "no-email@brochure.com",
      courseInterest: `Brochure Request: ${brochureForm.course}`,
      message: "Requested course brochure syllabus packet download from Hero CTA.",
      date: new Date().toLocaleDateString("en-IN"),
      status: "New" as const
    };

    onAddLog(newLead);
    setIsSuccess(true);

    setTimeout(() => {
      // Simulate file download
      setIsSuccess(false);
      setShowBrochureModal(false);
      setBrochureForm({ name: "", phone: "", email: "", course: "All Syllabus Combo" });
      
      // Open brochure mockup in a clean virtual download visual or alert
      alert("📥 Download Started! You have received the virtual 'CyberWise-Detailed-Syllabus-2026.pdf' prospectus container.");
    }, 1500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-gradient-to-b from-cyber-dark via-cyber-dark to-cyber-blue/40 overflow-hidden"
    >
      {/* Background Decorative Rings */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyber-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-cyber-blue/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-1/3 w-72 h-72 rounded-full bg-cyber-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Assets (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tag/Badge Accent */}
            <div className="inline-flex items-center gap-2 bg-cyber-orange/10 border border-cyber-orange/30 text-cyber-orange px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-6 self-start">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Premier Institute • Angadippuram, Malappuram
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Become a Digital Marketing Expert with <span className="text-cyber-orange bg-gradient-to-r from-cyber-orange to-cyber-gold bg-clip-text text-transparent">CyberWise Digital Campus</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
              Gain industry-ready skills through practical training, live projects, and expert mentorship at Malappuram's trusted digital marketing institute. Powered by <span className="text-cyber-orange font-semibold">CyberWise Info Solutions</span>, we build actual careers.
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-cyber-orange flex-shrink-0" />
                  <span className="font-sans text-sm font-semibold">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onScrollToSection("contact")}
                id="hero_primary_cta"
                className="bg-cyber-orange hover:bg-cyber-orange/90 text-white px-8 py-4 rounded-xl font-sans font-bold text-base inline-flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-cyber-orange/20 hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setShowBrochureModal(true)}
                id="hero_secondary_cta"
                className="border border-white/20 hover:border-white/50 text-white hover:bg-white/5 px-8 py-4 rounded-xl font-sans font-semibold text-base inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="h-5 w-5" />
                Download Brochure
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-cyber-dark object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80" alt="student" />
                <img className="w-8 h-8 rounded-full border-2 border-cyber-dark object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80" alt="student" />
                <img className="w-8 h-8 rounded-full border-2 border-cyber-dark object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80" alt="student" />
              </div>
              <div className="text-xs text-white/50 font-mono tracking-tight">
                TRUSTED BY <span className="text-white font-bold">120+ GRADUATES</span> IN KERALA • ★★★★★ 4.9/5 RATED
              </div>
            </div>
          </div>

          {/* Marketing Dashboard Mockups (5 columns) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md bg-[#120921] border border-cyber-blue/60 rounded-3xl p-6 shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-cyber-blue/10 before:to-transparent before:pointer-events-none">
              
              {/* Fake Chrome/Browser Header */}
              <div className="flex items-center justify-between border-b border-cyber-blue/30 pb-4 mb-5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-cyber-dark/60 text-cyber-light/40 font-mono text-[10px] px-3 py-1 rounded-md text-center max-w-[200px] truncate select-none">
                  cyberwise.digital/labs
                </div>
                <div className="w-3 h-3" />
              </div>

              <div className="space-y-4">
                {/* Visual Widget 1: SEO Keyword Rank */}
                <div className="bg-cyber-dark/80 rounded-2xl p-4 border border-cyber-blue/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-cyber-light/50 font-mono">ORGANIC KEYWORD TREND</span>
                    <span className="text-xs text-green-400 font-bold font-mono">+248%</span>
                  </div>
                  <div className="font-display font-bold text-2xl text-white">#1 on Google</div>
                  <div className="text-[11px] text-cyber-light/60 mt-1">
                    "Digital Marketing Perinthalmanna"
                  </div>
                  {/* Miniature Sparkline */}
                  <div className="mt-3 h-8 flex items-end gap-1">
                    <div className="w-full bg-cyber-blue/40 h-1/4 rounded-sm" />
                    <div className="w-full bg-cyber-blue/40 h-2/5 rounded-sm" />
                    <div className="w-full bg-cyber-blue/40 h-1/3 rounded-sm" />
                    <div className="w-full bg-cyber-blue/40 h-3/5 rounded-sm" />
                    <div className="w-full bg-cyber-orange/60 h-2/3 rounded-sm" />
                    <div className="w-full bg-cyber-orange h-5/6 rounded-sm" />
                    <div className="w-full bg-green-400 h-full rounded-sm" />
                  </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Widget 2: CTR & Clicks */}
                  <div className="bg-cyber-dark/80 rounded-2xl p-4 border border-cyber-blue/30">
                    <span className="text-[10px] text-cyber-light/50 font-mono uppercase">Social Traffic</span>
                    <div className="font-display font-bold text-lg text-white mt-1">4.8k Clicks</div>
                    <div className="text-[10px] text-cyber-orange font-semibold mt-1 flex items-center gap-1">
                      <span>CTR: 8.6%</span>
                    </div>
                  </div>
                  {/* Widget 3: Live Ad Budget Spend */}
                  <div className="bg-cyber-dark/80 rounded-2xl p-4 border border-cyber-blue/30">
                    <span className="text-[10px] text-cyber-light/50 font-mono uppercase">Lead Conversions</span>
                    <div className="font-display font-bold text-lg text-green-400 mt-1">112 Signups</div>
                    <div className="text-[10px] text-white/50 mt-1">
                      CPA: ₹85 per lead
                    </div>
                  </div>
                </div>

                {/* Tool Badges */}
                <div className="border-t border-cyber-blue/30 pt-4 mt-2">
                  <div className="text-[10px] text-cyber-light/40 font-mono tracking-wider uppercase mb-2">
                    Mentoring Enterprise Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["SEMrush", "Meta Ads", "GA-4", "Search Console", "Mailchimp"].map((tool) => (
                      <span key={tool} className="text-[10px] font-mono text-white/70 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Corner Watermark */}
              <div className="mt-4 flex items-center justify-end">
                <span className="text-[8px] text-white/20 font-mono uppercase tracking-widest">
                  CYBERWISE LIVE LAB V1.1
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Brochure Downloader Popup Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* overlay backdrop */}
          <div className="absolute inset-0 bg-cyber-dark/80 backdrop-blur-sm" onClick={() => setShowBrochureModal(false)} />
          
          <div className="relative bg-[#120921] border border-cyber-blue/50 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl z-10" id="brochure_modal">
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              id="close_brochure_modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-cyber-orange/10 text-cyber-orange flex items-center justify-center mx-auto mb-3">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Download Course Prospectus</h3>
              <p className="text-xs text-white/70 mt-1 max-w-sm mx-auto">
                Enter your basic contact details to unlock immediate access to detailed syllabi, modular tools lists, and class fees.
              </p>
            </div>

            {isSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 text-green-400 rounded-full animate-bounce">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="text-white font-semibold">Generating Your Spec Guide...</h4>
                <p className="text-xs text-cyber-light/60">
                  Securing digital assets from database cloud. Ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBrochureSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-white/70 font-mono uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={brochureForm.name}
                    onChange={(e) => setBrochureForm({ ...brochureForm, name: e.target.value })}
                    className="w-full bg-cyber-dark/80 border border-cyber-blue/40 rounded-lg py-2.5 px-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyber-orange/40"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/70 font-mono uppercase mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={brochureForm.phone}
                    onChange={(e) => setBrochureForm({ ...brochureForm, phone: e.target.value })}
                    className="w-full bg-cyber-dark/80 border border-cyber-blue/40 rounded-lg py-2.5 px-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyber-orange/40"
                    placeholder="e.g. +91 9746-XXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/70 font-mono uppercase mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    value={brochureForm.email}
                    onChange={(e) => setBrochureForm({ ...brochureForm, email: e.target.value })}
                    className="w-full bg-cyber-dark/80 border border-cyber-blue/40 rounded-lg py-2.5 px-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyber-orange/40"
                    placeholder="e.g. candidate@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/70 font-mono uppercase mb-1">Select Program Interest</label>
                  <select
                    value={brochureForm.course}
                    onChange={(e) => setBrochureForm({ ...brochureForm, course: e.target.value })}
                    className="w-full bg-cyber-dark/80 border border-cyber-blue/40 rounded-lg py-2.5 px-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyber-orange/40"
                  >
                    <option value="All Syllabus Combo">Complete Digital Marketing Combo Suite</option>
                    <option value="SEO Specialist">Search Engine Optimization (SEO)</option>
                    <option value="SMM & Copywriting">Social Media Marketing & Creator</option>
                    <option value="PPC Media Buying">Pay-Per-Click Performance Ads</option>
                    <option value="Analytics & GA4">Web Analytics & Automation</option>
                  </select>
                </div>

                <div className="pt-2 text-[10px] text-white/40 flex items-start gap-1.5">
                  <ShieldAlert className="h-4 w-4 text-cyber-orange flex-shrink-0 mt-0.5" />
                  <span>
                    By downloading you agree to receive digital callbacks and course updates. No spam guarantee.
                  </span>
                </div>

                <button
                  type="submit"
                  id="submit_brochure_download"
                  className="w-full bg-cyber-orange hover:bg-cyber-orange/90 text-white font-sans font-bold text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition-colors mt-4"
                >
                  <Send className="h-4 w-4" />
                  Send PDF Link & Download Now
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
