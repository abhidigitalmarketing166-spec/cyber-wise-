import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, CheckCircle, Shield, AlertTriangle, Send } from "lucide-react";
import { Lead } from "../types";

interface ContactProps {
  preSelectedCourse: string;
  onAddLead: (lead: Lead) => void;
  onClearPreSelection: () => void;
}

export default function Contact({ preSelectedCourse, onAddLead, onClearPreSelection }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    courseInterest: "Search Engine Optimization (SEO)",
    message: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const coursesList = [
    "Search Engine Optimization (SEO)",
    "Social Media Marketing (SMM)",
    "Pay-Per-Click (PPC) Advertising",
    "Content Creation & Marketing",
    "Email Marketing & Automation",
    "Web Analytics & Reporting"
  ];

  // React on course preselection
  useEffect(() => {
    if (preSelectedCourse) {
      setFormData((prev) => ({
        ...prev,
        courseInterest: preSelectedCourse
      }));
      // Smooth scroll to the contact element
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      onClearPreSelection();
    }
  }, [preSelectedCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const newLead: Lead = {
      id: "enq-" + Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "no-provided@domain.com",
      courseInterest: formData.courseInterest,
      message: formData.message || "No custom comment provided.",
      date: new Date().toLocaleDateString("en-IN"),
      status: "New"
    };

    onAddLead(newLead);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        courseInterest: "Search Engine Optimization (SEO)",
        message: ""
      });
    }, 4500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white text-[#0f172a] relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute top-1/2 left-10 w-48 h-48 bg-cyber-orange/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-cyber-orange font-mono text-xs font-bold uppercase tracking-widest bg-cyber-orange/10 px-3.5 py-1.5 rounded-full select-none">
            <Mail className="h-3.5 w-3.5" />
            Admissions Hotline
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-dark tracking-tight">
            Apply or Request a Call Back
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
            Fill the security audited consultation form below, or directly visit our digital marketing training labs right in the center of Perinthalmanna precinct.
          </p>
        </div>

        {/* Form and Map Info Double Panel */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT COLUMN: Campus info + live Google maps embed (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="font-display text-xl font-bold text-cyber-dark border-b border-gray-100 pb-3">
                CyberWise Campus Coordinates
              </h3>

              <div className="space-y-5 text-sm sm:text-base">
                {/* Physical Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 text-cyber-blue flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-cyber-dark text-sm">Physical Headquarters Address</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      CyberWise Digital Campus,<br />
                      Opposite Co-operative Hospital, Angadippuram,<br />
                      Perinthalmanna, Malappuram district, Kerala, India - 679321
                    </p>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 text-cyber-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-cyber-dark text-sm">Active Admissions Desks</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 font-mono hover:text-cyber-orange transition-colors">
                      +91 97461 24522 (Primary Desk)<br />
                      +91 98950 14811 (Alternative Line)
                    </p>
                  </div>
                </div>

                {/* Contact Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 text-cyber-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-cyber-dark text-sm">Official Inboxes</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 font-mono hover:text-cyber-orange transition-colors">
                      admissions@cyberwise.digital<br />
                      hello@cyberwise.digital
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google map actual physical iframe embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm aspect-video sm:aspect-[4/3] bg-gray-50 relative mt-4">
              <iframe
                title="CyberWise Digital Campus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3242200407765!2d76.204561!3d10.9708307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd728b76dfbf%3A0xbd8607a0e3093ca5!2sAngadippuram%2C%20Kerala%20679321!5e0!3m2!1sen!2sin!4v1710000000000"
                className="w-full h-full border-none absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 bg-cyber-dark/85 backdrop-blur-sm border border-cyber-blue/30 text-white text-[9px] font-mono px-2 py-1 rounded">
                📍 Opp. Co-operative Hospital, Angadippuram
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Callback inquiry form (7 columns) */}
          <div className="lg:col-span-7 bg-cyber-light border border-gray-150 rounded-3xl p-6 sm:p-10 relative overflow-hidden" id="admission_form_container">
            {isSuccess ? (
              // Success Visual Frame
              <div className="text-center py-20 space-y-6 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-2">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-extrabold text-cyber-dark">Callback Requested Successfully!</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto font-sans">
                    Thank you {formData.name}. Your details have been archived with our Angadippuram Admissions desk.
                  </p>
                </div>
                <div className="bg-white border border-gray-150 p-4 rounded-xl max-w-sm mx-auto shadow-sm text-left">
                  <span className="block text-[10px] text-gray-400 font-mono tracking-wider uppercase">ADMISSIONS PIPELINE ROUTE</span>
                  <span className="block text-xs font-bold text-cyber-dark mt-1">LANE interest : {formData.courseInterest}</span>
                  <p className="text-[11px] text-gray-400 font-sans mt-1">Our academic coordinator will reach out on phone within 2 hours.</p>
                </div>
                <div className="text-xs text-gray-400 font-mono italic">
                  Refreshing form state...
                </div>
              </div>
            ) : (
              // Inquiry input form
              <form onSubmit={handleSubmit} className="space-y-5" id="admission_form_fields">
                <div className="border-b border-gray-200/60 pb-4 mb-4">
                  <h3 className="font-display text-lg font-bold text-cyber-dark">Scholarship & Admission Inquiry</h3>
                  <p className="text-xs text-gray-500 mt-1">All fields marked with an asterisk (*) are required for registration.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 font-mono uppercase mb-1 font-bold">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul C P"
                      className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-cyber-orange/30 focus:border-cyber-orange"
                      id="lead_name_field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 font-mono uppercase mb-1 font-bold">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98471XXXXX"
                      className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-cyber-orange/30 focus:border-cyber-orange"
                      id="lead_phone_field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-mono uppercase mb-1 font-bold">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@gmail.com"
                    className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-cyber-orange/30 focus:border-cyber-orange"
                    id="lead_email_field"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-mono uppercase mb-1 font-bold">Interested Program Track *</label>
                  <select
                    value={formData.courseInterest}
                    onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-cyber-orange/30 focus:border-cyber-orange cursor-pointer font-sans"
                    id="lead_course_field"
                  >
                    <option value="Complete Professional Digital Marketing Combo">Master Combo (3 Months + Placement Assistance)</option>
                    {coursesList.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-mono uppercase mb-1 font-bold">Custom Query / Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ask about scholarship eligibility, installment options, lab facilities, etc."
                    className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-cyber-orange/30 focus:border-cyber-orange font-sans leading-relaxed"
                    id="lead_message_field"
                  />
                </div>

                {/* Security trust badge snippet */}
                <div className="flex items-start gap-1.5 pt-2 text-[10px] text-gray-400">
                  <Shield className="h-4 w-4 text-cyber-orange shrink-0 mt-0.5" />
                  <span>
                    Secured by CyberWise candidate privacy lock. Your personal details are only shared with our Perinthalmanna academic evaluators.
                  </span>
                </div>

                <button
                  type="submit"
                  id="callback_submit_btn"
                  className="w-full bg-cyber-orange hover:bg-cyber-orange/95 text-white font-sans font-bold text-sm sm:text-base py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-cyber-orange/10 hover:shadow-cyan-orange/20 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Request a Callback
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
