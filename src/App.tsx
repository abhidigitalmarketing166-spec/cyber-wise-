import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import LearningExperience from "./components/LearningExperience";
import CareerGrowth from "./components/CareerGrowth";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LeadsDashboard from "./components/LeadsDashboard";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import { Lead } from "./types";

const seedLeads: Lead[] = [
  {
    id: "enq-seed-1",
    name: "Rahul C P",
    phone: "+91 98471 20455",
    email: "rahulcpacc@gmail.com",
    courseInterest: "Search Engine Optimization (SEO)",
    message: "I am a BTech graduate looking for a quick internship + placement job in Cochin or Perinthalmanna. Will I get daily practical training?",
    date: "14/06/2026",
    status: "New"
  },
  {
    id: "enq-seed-2",
    name: "Sajna V",
    phone: "+91 97463 34911",
    email: "sajna.v@yahoo.co.in",
    courseInterest: "Social Media Marketing (SMM)",
    message: "I run a home fashion boutique near Manjeri. I want to learn Instagram Reels growth hacking and Meta Ads to scale my organic clients.",
    date: "13/06/2026",
    status: "Contacted"
  },
  {
    id: "enq-seed-3",
    name: "Arun Kumar",
    phone: "+91 99611 48212",
    email: "arun.malappuram@outlook.com",
    courseInterest: "Pay-Per-Click (PPC) Advertising",
    message: "I handle simple marketing tasks for a distribution firm. Need advanced proficiency in Google Search campaigns and bid setups.",
    date: "12/06/2026",
    status: "Interested"
  },
  {
    id: "enq-seed-4",
    name: "Aparna Nair",
    phone: "+91 94475 12513",
    email: "aparna.writing@gmail.com",
    courseInterest: "Content Creation & Marketing",
    message: "Is there a weekend batch? I am currently working as a content writer in Kozhikode but want upskilling in visual templates and AI.",
    date: "11/06/2026",
    status: "Admitted"
  }
];

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [preSelectedCourse, setPreSelectedCourse] = useState<string>("");
  const [showCRM, setShowCRM] = useState(false);

  // Load and seed localStorage leads on mount
  useEffect(() => {
    const stored = localStorage.getItem("cyberwise_registered_leads");
    if (stored) {
      try {
        setLeads(JSON.parse(stored));
      } catch (e) {
        setLeads(seedLeads);
      }
    } else {
      setLeads(seedLeads);
      localStorage.setItem("cyberwise_registered_leads", JSON.stringify(seedLeads));
    }
  }, []);

  // Sync to local storage
  const syncLeads = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem("cyberwise_registered_leads", JSON.stringify(updatedLeads));
  };

  // Add lead callback
  const handleAddLead = (newLead: Lead) => {
    const updated = [newLead, ...leads];
    syncLeads(updated);
  };

  // Update lead CRM pipeline status
  const handleUpdateStatus = (id: string, nextStatus: Lead["status"]) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status: nextStatus } : l));
    syncLeads(updated);
  };

  // Delete lead CRM pipeline status
  const handleDeleteLead = (id: string) => {
    if (window.confirm("Are you sure you want to delete this applicant's ledger?")) {
      const updated = leads.filter((l) => l.id !== id);
      syncLeads(updated);
    }
  };

  // Scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Select course callback
  const handleSelectCourse = (courseInterestName: string) => {
    setPreSelectedCourse(courseInterestName);
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden selection:bg-cyber-orange/30 selection:text-cyber-dark">
      {/* 1. Navbar Header */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero banner */}
        <Hero onScrollToSection={handleScrollToSection} onAddLog={handleAddLead} />

        {/* 3. About Section */}
        <About />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Courses Grid List */}
        <Courses onSelectCourse={handleSelectCourse} />

        {/* 6. Dynamic Learning process */}
        <LearningExperience />

        {/* 7. Salary Growth & Assessments Quiz block */}
        <CareerGrowth onSelectCourse={handleSelectCourse} />

        {/* 8. Student reviews testimonial carousel */}
        <Testimonials />

        {/* 9. Expandable FAQ Accordions */}
        <FaqSection />

        {/* 10. Direct application Contact Form */}
        <Contact
          preSelectedCourse={preSelectedCourse}
          onAddLead={handleAddLead}
          onClearPreSelection={() => setPreSelectedCourse("")}
        />
      </main>

      {/* 11. Custom Legal & CRM trigger footer */}
      <Footer onScrollToSection={handleScrollToSection} onOpenCRM={() => setShowCRM(true)} />

      {/* 12. CRM Admissions Slide-over panel */}
      {showCRM && (
        <LeadsDashboard
          leads={leads}
          onUpdateStatus={handleUpdateStatus}
          onDeleteLead={handleDeleteLead}
          onClose={() => setShowCRM(false)}
        />
      )}

      {/* 13. Floating Interactive WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
