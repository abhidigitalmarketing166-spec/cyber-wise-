import React, { useState } from "react";
import { coursesData } from "../data/coursesData";
import { Course } from "../types";
import {
  Search,
  Share2,
  TrendingUp,
  PenTool,
  Mail,
  BarChart3,
  ArrowRight,
  Clock,
  BookOpen,
  Briefcase,
  Check,
  X,
  Target
} from "lucide-react";

interface CoursesProps {
  onSelectCourse: (courseInterestName: string) => void;
}

export default function Courses({ onSelectCourse }: CoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { label: "All Programs", id: "all" },
    { label: "Search & SEO", id: "search" },
    { label: "Social Media", id: "social" },
    { label: "Paid Ads/Advertising", id: "advertising" },
    { label: "Analytics & Copy", id: "all-interactive" }
  ];

  // Map string to Lucide Icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="h-5 w-5" />;
      case "Share2":
        return <Share2 className="h-5 w-5" />;
      case "TrendingUp":
        return <TrendingUp className="h-5 w-5" />;
      case "PenTool":
        return <PenTool className="h-5 w-5" />;
      case "Mail":
        return <Mail className="h-5 w-5" />;
      case "BarChart3":
        return <BarChart3 className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const filteredCourses = activeCategory === "all"
    ? coursesData
    : activeCategory === "all-interactive"
    ? coursesData.filter(c => c.category === "analytics" || c.category === "content")
    : coursesData.filter(c => c.category === activeCategory);

  const handleEnrollShortcut = (courseTitle: string) => {
    setSelectedCourse(null);
    onSelectCourse(courseTitle);
  };

  return (
    <section id="courses" className="py-20 sm:py-24 bg-white text-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-cyber-orange font-mono text-xs font-bold uppercase tracking-widest bg-cyber-orange/10 px-3.5 py-1.5 rounded-full select-none">
            <Target className="h-3 w-3" />
            Curriculum Matrix
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-dark tracking-tight">
            Our Professional Training Courses
          </h2>
          <p className="text-base text-gray-600 font-sans leading-relaxed">
            Gain complete competency. Pick a specialized module or fast-track combo program that aligns directly with your career dreams or business scaling targets.
          </p>
        </div>

        {/* Dynamic Category Filtering bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-cyber-dark text-white shadow-md shadow-cyber-dark/10"
                  : "bg-cyber-light text-gray-500 hover:text-cyber-dark hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              id={`course_card_${course.id}`}
            >
              <div className="space-y-4">
                {/* Header Icon + Difficulty Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-cyber-orange/5 text-cyber-orange rounded-xl border border-cyber-orange/15 flex items-center justify-center">
                    {getIcon(course.icon)}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-cyber-light border border-gray-100 text-gray-500">
                    {course.difficulty}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="font-display text-xl font-bold text-cyber-dark tracking-tight">
                  {course.title}
                </h3>

                {/* Short Paragraph */}
                <p className="text-gray-500 text-sm leading-relaxed font-sans h-20 overflow-hidden line-clamp-3">
                  {course.shortDesc}
                </p>

                {/* Duration Line */}
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 pt-2 border-t border-gray-50">
                  <Clock className="w-4 h-4 text-cyber-dark/40" />
                  <span>Duration: {course.duration}</span>
                </div>
              </div>

              {/* View/Enroll buttons */}
              <div className="mt-6 pt-4 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedCourse(course)}
                  id={`course_learn_more_${course.id}`}
                  className="text-cyber-blue hover:text-cyber-orange font-sans font-bold text-sm inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleEnrollShortcut(course.title)}
                  id={`course_enroll_shortcut_${course.id}`}
                  className="bg-cyber-dark hover:bg-cyber-dark/95 text-white hover:bg-cyber-orange transition-colors px-4 py-2 rounded-lg font-sans text-xs font-semibold"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Combo Footer */}
        <div className="mt-12 text-center text-xs text-gray-400 font-mono">
          Looking for a full academic diploma? Ask our admissions cell about our <span className="text-cyber-orange font-bold font-sans underline decoration-dotted">3-Month Master Combo track</span> in Malappuram.
        </div>
      </div>

      {/* Course Detailed Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-cyber-dark/70 backdrop-blur-sm" onClick={() => setSelectedCourse(null)} />
          
          <div className="relative bg-[#120921] border border-cyber-blue/50 text-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-8" id="course_details_modal">
            {/* Close button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
              id="close_course_modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Course header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-cyber-blue/30">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-cyber-orange/15 text-cyber-orange rounded-2xl flex items-center justify-center border border-cyber-orange/30">
                  {getIcon(selectedCourse.icon)}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white leading-tight">
                    {selectedCourse.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-cyber-light/60 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyber-orange" />
                      {selectedCourse.duration}
                    </span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white">
                      {selectedCourse.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body scroll area */}
            <div className="py-6 space-y-6">
              
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-cyber-orange font-mono text-xs uppercase font-bold tracking-wider">
                  Program Overview
                </h4>
                <p className="text-sm text-cyber-light/80 leading-relaxed font-sans">
                  {selectedCourse.fullDesc}
                </p>
              </div>

              {/* Curriculum bullet steps */}
              <div className="space-y-3">
                <h4 className="text-cyber-orange font-mono text-xs uppercase font-bold tracking-wider">
                  Syllabus Modules Covered
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-white/90">
                  {selectedCourse.curriculum.map((item, index) => (
                    <div key={index} className="flex gap-2.5 items-start">
                      <Check className="h-4 w-4 text-cyber-orange mt-1 flex-shrink-0" />
                      <span className="font-sans text-xs sm:text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools list */}
              <div className="space-y-3">
                <h4 className="text-cyber-orange font-mono text-xs uppercase font-bold tracking-wider">
                  Platforms & Tools Mastered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.keyTools.map((tool) => (
                    <span key={tool} className="text-xs font-mono bg-cyber-dark/80 px-3 py-1.5 rounded-lg border border-cyber-blue/40 text-cyber-light select-none">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job opportunities */}
              <div className="space-y-3">
                <h4 className="text-cyber-orange font-mono text-xs uppercase font-bold tracking-wider">
                  Target Career Designations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.careerPaths.map((career) => (
                    <span key={career} className="text-xs font-sans bg-cyber-blue/20 text-sky-300 border border-sky-500/20 px-3 py-1.5 rounded-lg">
                      🔑 {career}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal footer CTA */}
            <div className="pt-6 border-t border-cyber-blue/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <span className="text-[11px] text-white/40 font-mono">
                * Weekend and Evening slots are available for professionals.
              </span>
              <button
                onClick={() => handleEnrollShortcut(selectedCourse.title)}
                id="modal_enroll_btn"
                className="bg-cyber-orange hover:bg-cyber-orange/90 text-white font-sans font-bold text-sm px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                Apply for this Course
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
