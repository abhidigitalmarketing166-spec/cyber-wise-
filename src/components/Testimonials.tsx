import React, { useState } from "react";
import { TestimonialsData } from "../data/siteData";
import { ChevronLeft, ChevronRight, Star, Quote, Milestone } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TestimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TestimonialsData.length - 1 ? 0 : prev + 1));
  };

  const active = TestimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-cyber-dark text-white relative overflow-hidden">
      {/* Dynamic graphic colors in background */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-cyber-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyber-blue/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-cyber-orange font-mono text-xs font-bold uppercase tracking-widest bg-cyber-orange/15 px-3.5 py-1.5 rounded-full select-none border border-cyber-orange/20">
            <Milestone className="h-3 w-3" />
            Graduate success
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Alumni Stories & Direct Reviews
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
            See how our practical training model empowered actual Kerala students to bridge skills gaps and secure elite marketing job placements.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-[#120921] border border-cyber-blue/50 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between" id="students_testimonials_carousel">
          {/* Big Quote background watermark */}
          <div className="absolute top-6 right-6 text-cyber-orange/10 pointer-events-none">
            <Quote className="h-28 w-28 absolute -top-8 -right-4" />
          </div>

          <div className="space-y-6 relative z-15">
            {/* Stars Rating indicator */}
            <div className="flex gap-1 text-cyber-orange">
              {Array.from({ length: active.rating }).map((_, rIdx) => (
                <Star key={rIdx} className="h-5 w-5 fill-cyber-orange text-cyber-orange" />
              ))}
            </div>

            {/* Comment block text */}
            <blockquote className="text-base sm:text-lg lg:text-xl font-sans italic text-white/90 leading-relaxed font-light">
              "{active.comment}"
            </blockquote>

            {/* Student profile profile details */}
            <div className="flex items-center gap-4 pt-4 border-t border-cyber-blue/30">
              <img
                src={active.image}
                alt={active.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-cyber-orange shadow"
              />
              <div>
                <span className="block font-display font-extrabold text-base text-white leading-tight">
                  {active.name}
                </span>
                <span className="block text-xs text-cyber-orange font-mono font-medium mt-0.5 uppercase tracking-wide">
                  {active.role} • {active.companies}
                </span>
                <span className="block text-[10px] text-white/40 font-mono mt-1">
                  Completed Program Track: {active.courseCompleted}
                </span>
              </div>
            </div>
          </div>

          {/* Carousel Slide Navigators */}
          <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-cyber-blue/30">
            {/* Dots trackers */}
            <div className="flex gap-1.5">
              {TestimonialsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2 rounded-full cursor-pointer transition-all ${
                    currentIndex === dotIdx ? "bg-cyber-orange w-6" : "bg-white/10 w-2 hover:bg-white/30"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                id="carousel_prev_btn"
                className="p-2 sm:p-2.5 rounded-lg bg-cyber-dark hover:bg-cyber-blue border border-cyber-blue/40 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                id="carousel_next_btn"
                className="p-2 sm:p-2.5 rounded-lg bg-cyber-dark hover:bg-cyber-blue border border-cyber-blue/40 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Digital Agency assurance snippet */}
        <div className="mt-8 text-center text-xs text-white/40 font-mono">
          * Career metrics and placement transitions audited by parent agency corporate team at CyberWise Info Solutions.
        </div>
      </div>
    </section>
  );
}
