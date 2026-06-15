import React from "react";
import {
  CheckCircle2,
  Users2,
  Award,
  Zap,
  TrendingUp,
  FileCheck2,
  GraduationCap,
  BookOpen,
  Milestone
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Agency-Backed Training",
      desc: "We don't teach from generic books. Our syllabus is developed directly by working campaign specialists from CyberWise Info Solutions.",
      icon: Award,
      accent: "bg-amber-500/10 text-amber-500 border-amber-500/20"
    },
    {
      title: "Industry Expert Trainers",
      desc: "Learn from mentors who handle multi-lakh budget ads, lead generation structures, and search ranks daily for live state clients.",
      icon: GraduationCap,
      accent: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      title: "Hands-on Live Projects",
      desc: "Build optimization scripts on mock ad budgets. Setup real GA4 tracking pixels and experience genuine web measurement metrics.",
      icon: Zap,
      accent: "bg-orange-500/10 text-cyber-orange border-cyber-orange/20"
    },
    {
      title: "Internship Opportunities",
      desc: "Acquire real experience! Eligible students gain a fast-track internship right inside CyberWise Info Solutions' active client agency team.",
      icon: Users2,
      accent: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    },
    {
      title: "Placement Support",
      desc: "Receive career mentoring: resume tuning sessions, custom mock interview training, and priority hiring channels across major Kerala-based agencies.",
      icon: TrendingUp,
      accent: "bg-violet-500/10 text-violet-500 border-violet-500/20"
    },
    {
      title: "Global Certification Prep",
      desc: "Not just one certificate. Our modules thoroughly train you to unlock core Google, Meta, HubSpot, and SEMrush certificate honors.",
      icon: FileCheck2,
      accent: "bg-pink-500/10 text-pink-500 border-pink-500/20"
    },
    {
      title: "Small Batch Sizes",
      desc: "We strictly cap our physical batches to ensure absolute direct attention, personalized screen review, and rich diagnostic mentoring.",
      icon: CheckCircle2,
      accent: "bg-teal-500/10 text-teal-500 border-teal-500/20"
    },
    {
      title: "Syllabus Audited Monthly",
      desc: "AI search engines change fast. We continuously review and inject trending parameters (like AI content prompting) into the active syllabus.",
      icon: BookOpen,
      accent: "bg-sky-500/10 text-sky-500 border-sky-500/20"
    }
  ];

  return (
    <section id="why-choose" className="py-20 sm:py-24 bg-cyber-light text-[#0f172a] relative overflow-hidden">
      {/* Structural boundary accent lines */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-cyber-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-cyber-orange font-mono text-xs font-bold uppercase tracking-widest bg-cyber-orange/10 px-3.5 py-1.5 rounded-full select-none">
            <Milestone className="h-3 w-3" />
            Empowering Your Success
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-dark tracking-tight">
            Why Choose CyberWise Digital Campus?
          </h2>
          <p className="text-base text-gray-600 font-sans leading-relaxed">
            We reject boring lecture decks. Join Kerala's premier practical digital academy focused entirely on real-world diagnostics, conversions, and direct career placements.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 hover:border-cyber-blue/20 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                id={`why_choose_card_${index}`}
              >
                <div>
                  {/* Icon Panel */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${point.accent} transition-transform group-hover:scale-110 duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-medium text-lg text-cyber-dark group-hover:text-cyber-orange transition-colors">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                    {point.desc}
                  </p>
                </div>

                {/* Micro accent corner bar */}
                <div className="w-0 group-hover:w-1/3 h-1 bg-cyber-orange absolute bottom-0 left-6 rounded-t-full transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Dynamic bottom action CTA block */}
        <div className="mt-16 bg-gradient-to-r from-cyber-dark to-cyber-blue rounded-3xl p-8 sm:p-10 border border-cyber-blue/30 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="relative z-10 space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold">Want to experience a live session?</h3>
            <p className="text-sm text-white/70 max-w-xl font-sans">
              Schedule a physical visit to our Angadippuram campus. Sit in a free live trial lab and meet your future trainers in person.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            id="why_choose_trial_btn"
            className="relative z-15 bg-white text-cyber-dark hover:bg-cyber-orange hover:text-white px-6 py-3 rounded-lg font-sans font-bold text-sm tracking-tight transition-all shadow-md shrink-0 border border-white/20 whitespace-nowrap"
          >
            Book Free Campus Seat
          </button>
        </div>

      </div>
    </section>
  );
}
