import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, GraduationCap } from "lucide-react";
import CyberWiseLogo from "./CyberWiseLogo";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpenPrompt, setIsOpenPrompt] = useState(false);
  const [customName, setCustomName] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("General Admissions");

  // Show a welcome tooltip after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const phoneNumber = "918714104827"; // Admissions Office Contact
    
    let baseText = "Hello CyberWise Admissions! ";
    if (customName.trim()) {
      baseText += `My name is ${customName.trim()}. `;
    }
    
    if (selectedTopic === "SEO") {
      baseText += "I am interested in learning more about the Search Engine Optimization (SEO) Masterclass.";
    } else if (selectedTopic === "SMM") {
      baseText += "I am interested in learning more about the Social Media Marketing & Meta Ads Campaign course.";
    } else if (selectedTopic === "Placement") {
      baseText += "I want to inquire about placement partnerships, agency-backed workflows, and physical batch intervals.";
    } else {
      baseText += "I would like to receive the updated 2026/27 course syllabus prospectus.";
    }

    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpenPrompt(false);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end font-sans">
      
      {/* Interactive Quick Help Panel Bubble */}
      {isOpenPrompt && (
        <div className="mb-4 w-72 sm:w-80 bg-cyber-dark border border-cyber-blue/60 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyber-orange to-cyber-gold p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg flex items-center justify-center">
                <CyberWiseLogo className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs">CyberWise Admissions</h4>
                <p className="text-[9px] text-white/80 font-mono">Syllabus Registry • Active Now</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpenPrompt(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Selection Form */}
          <form onSubmit={(e) => { e.preventDefault(); }} className="p-4 space-y-3.5 text-white/90">
            <p className="text-[11px] text-white/60 leading-relaxed font-sans">
              Connect directly with our training coordinators in Angadippuram via WhatsApp. Configure your enquiry below:
            </p>

            {/* Candidate name option */}
            <div className="space-y-1">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-cyber-gold font-bold">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="e.g. Rahul, Jasim..."
                className="w-full bg-[#120921] border border-cyber-blue/50 rounded-xl px-3 py-1.5 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-cyber-orange/60"
              />
            </div>

            {/* Interest radio grid */}
            <div className="space-y-1">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-cyber-gold font-bold">
                Syllabus Stream
              </span>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <button
                  type="button"
                  onClick={() => setSelectedTopic("General")}
                  className={`px-2.5 py-1.5 rounded-lg border text-left truncate transition-colors ${
                    selectedTopic === "General"
                      ? "bg-cyber-orange/20 border-cyber-orange text-white"
                      : "bg-[#120921] border-cyber-blue/40 text-white/60 hover:border-cyber-blue"
                  }`}
                >
                  General Syllabus
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTopic("SEO")}
                  className={`px-2.5 py-1.5 rounded-lg border text-left truncate transition-colors ${
                    selectedTopic === "SEO"
                      ? "bg-cyber-orange/20 border-cyber-orange text-white"
                      : "bg-[#120921] border-cyber-blue/40 text-white/60 hover:border-cyber-blue"
                  }`}
                >
                  SEO Masterclass
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTopic("SMM")}
                  className={`px-2.5 py-1.5 rounded-lg border text-left truncate transition-colors ${
                    selectedTopic === "SMM"
                      ? "bg-cyber-orange/20 border-cyber-orange text-white"
                      : "bg-[#120921] border-cyber-blue/40 text-white/60 hover:border-cyber-blue"
                  }`}
                >
                  SMM & Sells Ads
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTopic("Placement")}
                  className={`px-2.5 py-1.5 rounded-lg border text-left truncate transition-colors ${
                    selectedTopic === "Placement"
                      ? "bg-cyber-orange/20 border-cyber-orange text-white"
                      : "bg-[#120921] border-cyber-blue/40 text-white/60 hover:border-cyber-blue"
                  }`}
                >
                  Placement & Intern
                </button>
              </div>
            </div>

            {/* Direct Connect CTA */}
            <button
              onClick={handleOpenWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Launch WhatsApp Chat</span>
            </button>
          </form>

          {/* Secure watermark */}
          <div className="bg-[#120921] px-4 py-2 border-t border-cyber-blue/20 flex items-center justify-between text-[8px] font-mono text-white/40">
            <span>DIRECT CONNECT SECURE</span>
            <span>Kerala, IN</span>
          </div>
        </div>
      )}

      {/* Simple Delayed Tooltip */}
      {showTooltip && !isOpenPrompt && (
        <div className="mb-2 mr-1 bg-white text-cyber-dark text-xs font-medium py-1.5 px-3 rounded-xl shadow-xl flex items-center gap-2 border border-purple-100 animate-bounce max-w-[240px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>Inquire on WhatsApp 💬</span>
          <button 
            onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }} 
            className="text-cyber-dark/40 hover:text-cyber-dark cursor-pointer ml-1"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button trigger */}
      <button
        onClick={() => {
          setIsOpenPrompt(!isOpenPrompt);
          setShowTooltip(false);
        }}
        id="whatsapp_floating_anchor"
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 relative shadow-lg ${
          isOpenPrompt
            ? "bg-cyber-gold text-white hover:scale-110 rotate-90"
            : "bg-[#25D366] text-white hover:bg-[#20ba5a] hover:scale-110 hover:shadow-[#25D366]/30"
        } cursor-pointer group`}
        title="Chat with Admissions"
      >
        {/* Pulsing ring around button */}
        {!isOpenPrompt && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 scale-125" />
        )}
        
        {isOpenPrompt ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 fill-white text-[#25D366] group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
}
