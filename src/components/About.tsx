import React from "react";
import { Award, Briefcase, MapPin, Milestone, Users, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { value: "120+", label: "Graduated Alumni", icon: Users },
    { value: "5+", label: "Agency Years Experience", icon: ExperienceIcon },
    { value: "95%", label: "Placement Success Rate", icon: PlacedIcon },
    { value: "15+", label: "Advanced Marketing Tools", icon: ActiveToolsIcon }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white text-[#0f172a] relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side Graphics (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-cyber-dark p-1.5 shadow-xl max-w-sm mx-auto">
              {/* Cover Photo */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="CyberWise Interactive Digital Training Lab"
                className="w-full h-full object-cover rounded-xl opacity-90"
              />
              {/* Absolute Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-cyber-dark/95 backdrop-blur-sm border border-cyber-blue/30 rounded-xl p-4 flex items-center gap-3">
                <div className="bg-cyber-orange p-2.5 rounded-lg text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-xs text-cyber-orange font-mono font-bold uppercase tracking-wider">
                    Powered By
                  </span>
                  <span className="block text-sm text-white font-bold font-display">
                    CyberWise Info Solutions
                  </span>
                </div>
              </div>
            </div>

            {/* Float Highlight Badge */}
            <div className="absolute -top-4 right-4 sm:-right-4 bg-cyber-orange text-white text-xs font-mono font-bold px-4 py-2 rounded-lg shadow-lg rotate-3 hidden sm:block">
              100% Practical Academy 🚀
            </div>
          </div>

          {/* Written Copy Content (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-cyber-orange font-mono text-xs font-bold uppercase tracking-widest bg-cyber-orange/10 px-3.5 py-1.5 rounded-full select-none">
              <Milestone className="h-3 w-3" />
              Discover Our Roots
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-dark leading-tight tracking-tight">
              About CyberWise Digital Campus
            </h2>

            <p className="text-base text-gray-600 font-sans leading-relaxed">
              CyberWise Digital Campus is a leading digital marketing institute in{" "}
              <strong className="text-cyber-dark font-semibold">Angadippuram, Perinthalmanna</strong>, dedicated to empowering students, entrepreneurs, and professionals with practical digital skills. 
            </p>

            <p className="text-base text-gray-600 font-sans leading-relaxed">
              Powered by <span className="text-cyber-blue font-bold">CyberWise Info Solutions</span>, a trusted full-service digital marketing agency, we bridge the gap between academic learning and actual agency requirements. We scrap traditional chalkboard rote learning, replaced with hands-on labs, tracking codes, and genuine media deployment workflows.
            </p>

            {/* Core Values Section */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-cyber-blue/10 p-2 rounded-lg text-cyber-blue mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-cyber-dark">Prime Kerala Location</h4>
                  <p className="text-xs text-gray-500 mt-1">Right opposite landmark junctions in Angadippuram, easily accessible via bus & train.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-cyber-blue/10 p-2 rounded-lg text-cyber-blue mt-0.5">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-cyber-dark">Agency Driven Syllabus</h4>
                  <p className="text-xs text-gray-500 mt-1">We study Google Analytics & Meta ads directly using our live agency account cases.</p>
                </div>
              </div>
            </div>

            {/* Mini Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-cyber-light rounded-xl p-3 text-center border border-gray-100">
                    <div className="inline-flex text-cyber-orange mb-1">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="block text-2xl font-display font-bold text-cyber-dark">{stat.value}</span>
                    <span className="block text-[10px] text-gray-500 font-mono mt-0.5 uppercase tracking-tight leading-none">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Custom miniature metric icon SVG assemblies
function ExperienceIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 12c0 2.486 1.01 4.737 2.64 6.364M12 6.042A8.967 8.967 0 0118 12c0 2.486-1.01 4.737-2.64 6.364M12 6.042V18m-6-6h12" />
    </svg>
  );
}

function PlacedIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function ActiveToolsIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
