import React, { useState } from "react";
import { FAQsData } from "../data/siteData";
import { HelpCircle, ChevronDown, ChevronUp, Milestone, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-cyber-light text-[#0f172a] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Block headers */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-cyber-orange font-mono text-xs font-bold uppercase tracking-widest bg-cyber-orange/10 px-3.5 py-1.5 rounded-full select-none">
            <Milestone className="h-3 w-3" />
            Curriculum Clarifications
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
            Have questions about fees, training frameworks, or placement guarantees? Read our formal answers, or get in touch directly.
          </p>
        </div>

        {/* Accordions Stack list */}
        <div className="space-y-4" id="faq_accordions_container">
          {FAQsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                id={`faq_accordion_item_${idx}`}
              >
                {/* Trigger head */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:px-6 sm:py-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus:bg-gray-50"
                  id={`faq_accordion_trigger_${idx}`}
                >
                  <div className="flex gap-3">
                    <HelpCircle className={`h-5 w-5 text-cyber-orange mt-0.5 shrink-0 transition-transform ${isOpen ? "rotate-12" : ""}`} />
                    <span className="font-display font-bold text-gray-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-cyber-dark/40 shrink-0 mt-0.5">
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </button>

                {/* Content body with smooth state heights */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-96 border-t border-gray-50" : "max-h-0"
                  }`}
                  id={`faq_accordion_body_${idx}`}
                >
                  <div className="p-5 sm:p-6 bg-[#fafbfc] text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helper bottom action widget */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-cyber-orange/10 rounded-xl text-cyber-orange hidden sm:block shrink-0">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-cyber-dark">Still have outstanding doubts?</h4>
              <p className="text-xs text-gray-500 mt-0.5 font-sans">Our Perinthalmanna academic counselor is available via Whatsapp call for custom program audits.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            id="faq_ask_counselor_btn"
            className="bg-cyber-dark text-white hover:bg-cyber-orange transition-colors px-5 py-2.5 rounded-lg text-xs font-sans font-semibold shrink-0"
          >
            Chat with Counselor
          </button>
        </div>

      </div>
    </section>
  );
}
