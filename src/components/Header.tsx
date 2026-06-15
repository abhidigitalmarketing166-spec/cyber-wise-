import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, GraduationCap } from "lucide-react";
import CyberWiseLogo from "./CyberWiseLogo";

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Courses", id: "courses" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracking
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-blue/40 shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleNavClick("home")}
              id="header_logo"
            >
              <div className="bg-cyber-orange p-2 rounded-lg text-white group-hover:scale-105 transition-transform flex items-center justify-center">
                <CyberWiseLogo className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                  CyberWise<span className="text-cyber-orange">.</span>
                </span>
                <span className="block text-[9px] text-cyber-light/60 font-mono tracking-widest uppercase -mt-1">
                  Digital Campus
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-sans text-sm font-medium transition-colors hover:text-cyber-orange ${
                    activeSection === item.id
                      ? "text-cyber-orange font-semibold"
                      : "text-white/80"
                  }`}
                  id={`nav_link_${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => handleNavClick("contact")}
                id="header_enroll_btn"
                className="bg-cyber-orange hover:bg-cyber-orange/90 text-white px-5 py-2.5 rounded-lg font-sans text-sm font-semibold inline-flex items-center gap-2 transition-all shadow-md shadow-cyber-orange/10 hover:shadow-cyber-orange/20 hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                id="mobile_menu_toggle"
                className="text-white/90 hover:text-cyber-orange p-1 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-cyber-dark/98 backdrop-blur-lg transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        id="mobile_drawer"
      >
        <div className="flex flex-col h-full justify-between pt-24 pb-8 px-6">
          <div className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`mobile_nav_link_${item.id}`}
                className={`font-display text-2xl font-semibold text-left transition-colors border-b border-white/5 pb-2 ${
                  activeSection === item.id ? "text-cyber-orange" : "text-white/90"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={() => handleNavClick("contact")}
              id="mobile_drawer_enroll_btn"
              className="bg-cyber-orange hover:bg-cyber-orange/90 text-white w-full py-3.5 rounded-xl font-display font-bold text-center inline-flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              Enroll Now
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <div className="text-center font-mono text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
              Powered By CyberWise Info Solutions<br />
              Angadippuram, Kerala
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
