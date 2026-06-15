import React, { useState } from "react";
import { QuizQuestions, CareerTracksData } from "../data/siteData";
import { CareerTrack } from "../types";
import {
  TrendingUp,
  Award,
  ChevronRight,
  HelpCircle,
  RefreshCw,
  Send,
  Milestone,
  Check,
  Target
} from "lucide-react";

interface CareerGrowthProps {
  onSelectCourse: (courseInterestName: string) => void;
}

export default function CareerGrowth({ onSelectCourse }: CareerGrowthProps) {
  // Career Paths array
  const careers = [
    { title: "Digital Marketing Executive", junior: "₹2.5L", mid: "₹5.5L", senior: "₹10L+", demand: "Very High", role: "Oversees cross-channel campaigns, handles email funnels, and aggregates campaign performance metrics." },
    { title: "SEO Specialist", junior: "₹3.5L", mid: "₹7.0L", senior: "₹14L+", demand: "Extreme", role: "Conducts site audits, controls organic sitemaps, manages search console telemetry, and scores Google Page-One terms." },
    { title: "Social Media Manager", junior: "₹3.0L", mid: "₹6.0L", senior: "₹12L+", demand: "Very High", role: "Designs community calendars, crafts visual Reels layouts, manages influencers, and directs organic brand presence." },
    { title: "PPC Media Buyer Analyst", junior: "₹4.0L", mid: "₹8.5L", senior: "₹18L+", demand: "Extreme", role: "Bids on paid commercial Google/Meta spaces, configures tracking pixels, budgets campaigns, and secures high-yielding ROAS." },
    { title: "Content Strategist", junior: "₹2.8L", mid: "₹5.8L", senior: "₹11L+", demand: "High", role: "Drafts blogs, models email automation workflows, constructs lead magnets, and scripts viral shorts scripts." },
    { title: "Freelance Digital Consultant", junior: "₹3.0L", mid: "₹8.0L", senior: "₹20L+", demand: "Global Range", role: "Consults local boutique shops directly, performs site diagnostic auditing, and configures standalone local Google Maps listings." }
  ];

  // Interactive Quiz States
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    creators: 0,
    social: 0,
    search: 0,
    ads: 0,
    analyst: 0
  });
  const [matchedTrack, setMatchedTrack] = useState<CareerTrack | null>(null);

  const handleAnswerClick = (scoreWeight: Record<string, number>) => {
    // Accumulate scores
    const newScores = { ...scores };
    Object.entries(scoreWeight).forEach(([track, val]) => {
      newScores[track] = (newScores[track] || 0) + val;
    });
    setScores(newScores);

    // Go to next question or evaluate outcome
    if (currentQuestionIdx < QuizQuestions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      // Evaluate winner and find matched track
      let maxScore = -1;
      let winningTrack = "creators";

      Object.entries(newScores).forEach(([track, val]) => {
        const numVal = val as number;
        if (numVal > maxScore) {
          maxScore = numVal;
          winningTrack = track;
        }
      });

      setMatchedTrack(CareerTracksData[winningTrack]);
    }
  };

  const handleResetQuiz = () => {
    setScores({ creators: 0, social: 0, search: 0, ads: 0, analyst: 0 });
    setCurrentQuestionIdx(0);
    setMatchedTrack(null);
    setQuizStarted(true);
  };

  const handleApplyShortcut = (matchingTrackTitle: string) => {
    onSelectCourse(`Diagnosed Track: ${matchingTrackTitle}`);
  };

  return (
    <section className="py-20 sm:py-24 bg-white text-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Block Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-cyber-orange font-mono text-xs font-bold uppercase tracking-widest bg-cyber-orange/10 px-3.5 py-1.5 rounded-full select-none">
            <TrendingUp className="h-3 w-3" />
            Empathetic Placement Vectors
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-dark tracking-tight">
            Digital Career Paths & Specializations
          </h2>
          <p className="text-base text-gray-600 font-sans leading-relaxed">
            Understand the immense growth trajectory in the digital commerce sector. Explore standard salaries in Kerala's expanding tech corridors, or take our interactive assessment quiz to identify your ideal focus area.
          </p>
        </div>

        {/* Dashboard layout representing Salary Info (Left) and Quiz (Right) */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch" id="career_opportunities_dashboard">
          
          {/* LEFT PANEL: Salary growth infographics (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-xl font-bold text-cyber-dark flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-cyber-orange" />
              Annual Compensation Benchmark (Kerala Market)
            </h3>

            <div className="space-y-4">
              {careers.map((c, index) => (
                <div key={index} className="bg-cyber-light rounded-2xl p-4 border border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 hover:border-cyber-blue/10 transition-colors">
                  <div className="space-y-1 max-w-md">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-sm sm:text-base text-cyber-dark">{c.title}</span>
                      <span className="text-[9px] font-mono font-bold bg-green-500/10 text-green-600 px-2 py-0.5 rounded-md uppercase">
                        {c.demand} Demand
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">{c.role}</p>
                  </div>

                  {/* Visual Salary Bar Infographic Block */}
                  <div className="flex flex-col gap-1 items-start sm:items-end justify-center shrink-0 min-w-[150px]">
                    <div className="text-[10px] text-gray-400 font-mono">SALARY ACCRUAL RANGE</div>
                    <div className="flex items-center gap-1.5 font-sans text-xs">
                      <span className="font-bold text-cyber-dark">{c.junior}</span>
                      <span className="text-gray-400">→</span>
                      <span className="font-bold text-cyber-blue">{c.mid}</span>
                      <span className="text-gray-400">→</span>
                      <span className="font-semibold text-cyber-orange">{c.senior}</span>
                    </div>
                    {/* Tiny microbar indicators */}
                    <div className="flex gap-1 w-full h-1 mt-1">
                      <div className="bg-cyber-dark h-full w-1/3 rounded-full" />
                      <div className="bg-cyber-blue h-full w-1/3 rounded-full" />
                      <div className="bg-cyber-orange h-full w-1/3 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-xs text-gray-400 font-mono text-center pt-2">
              * Data compiles junior starting packages, typical 3-5 year mid packages, and senior department head compensations compiled across Trivandrum, Cochin, & Kozhikode hubs.
            </div>
          </div>

          {/* RIGHT PANEL: Career Specialty Assessment Quiz (5 columns) */}
          <div className="lg:col-span-5 bg-cyber-dark border border-cyber-blue/60 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyber-orange/10 blur-2xl pointer-events-none" />

            {!quizStarted && !matchedTrack ? (
              // Quiz Intro Visual Screen
              <div className="text-center py-8 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-cyber-orange/10 text-cyber-orange flex items-center justify-center mx-auto border border-cyber-orange/20 animate-pulse">
                    <HelpCircle className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Find Your Digital Track</h3>
                  <p className="text-sm text-white/70 max-w-sm mx-auto font-sans leading-relaxed">
                    Unsure which digital marketing specialization aligns best with your mind strengths? 
                  </p>
                  <p className="text-xs text-cyber-light/50 max-w-sm mx-auto font-sans">
                    Take our quick, validated 4-question interactive career assessment to discover your perfect marketing track!
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setQuizStarted(true)}
                    id="start_career_quiz_btn"
                    className="w-full bg-cyber-orange hover:bg-cyber-orange/90 text-white font-sans font-bold text-sm py-3.5 px-6 rounded-xl inline-flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-cyber-orange/20"
                  >
                    Start Specialized Quiz
                    <ChevronRight className="h-4.5 w-4.5" />
                  </button>
                  <span className="block mt-2.5 text-[10px] text-white/40 font-mono">
                    PRODUCES SALARY & SYLLABUS DIRECTIVES
                  </span>
                </div>
              </div>
            ) : quizStarted && !matchedTrack ? (
              // Question Screen
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* Progress Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] text-cyber-orange font-mono font-bold uppercase tracking-wider">
                      Interactive Assessment Tracker
                    </span>
                    <span className="text-xs font-mono text-white/50 bg-[#120921] border border-cyber-blue/30 px-2.5 py-1 rounded-md">
                      Question {currentQuestionIdx + 1} of {QuizQuestions.length}
                    </span>
                  </div>

                  {/* Question Title */}
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white leading-snug mb-6">
                    {QuizQuestions[currentQuestionIdx].question}
                  </h4>

                  {/* Answer Options Stack */}
                  <div className="space-y-3">
                    {QuizQuestions[currentQuestionIdx].options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswerClick(opt.score)}
                        className="w-full text-left bg-[#120921] hover:bg-cyber-blue border border-cyber-blue/40 hover:border-white/30 rounded-xl p-3.5 text-xs sm:text-sm text-cyber-light/90 hover:text-white transition-all cursor-pointer hover:translate-x-1"
                        id={`quiz_opt_${currentQuestionIdx}_${oIdx}`}
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Progress bar marker */}
                <div className="w-full bg-[#120921] h-1.5 rounded-full overflow-hidden mt-4">
                  <div
                    className="bg-cyber-orange h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIdx + 1) / QuizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>
            ) : (
              // Outcome Diagnosis Screen (matchedTrack is active)
              <div className="flex flex-col justify-between h-full space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-green-400 font-mono font-bold uppercase tracking-wider">
                      Diagnosis Completed ✓
                    </span>
                    <button
                      onClick={handleResetQuiz}
                      className="text-white/50 hover:text-white text-xs inline-flex items-center gap-1 hover:underline cursor-pointer"
                      id="reset_quiz_btn"
                    >
                      <RefreshCw className="h-3 w-3" />
                      Retake
                    </button>
                  </div>

                  <span className="block text-xs uppercase tracking-widest text-[#1BC5BD] font-mono leading-none">
                    YOUR RECOMMENDED PATH:
                  </span>
                  
                  <h4 className="font-display text-2xl font-extrabold text-white leading-tight">
                    {matchedTrack?.name}
                  </h4>

                  <p className="text-xs text-cyber-light/80 leading-relaxed font-sans border-l-2 border-cyber-orange pl-3 py-1">
                    {matchedTrack?.description}
                  </p>

                  {/* Benchmark Salary Info inside Result */}
                  <div className="bg-[#120921]/80 border border-cyber-blue/40 rounded-xl p-3.5 space-y-2">
                    <div className="flex justify-between text-xs text-white/50 font-mono">
                      <span>STARTING BENCHMARK:</span>
                      <span>MID BENCHMARK:</span>
                    </div>
                    <div className="flex justify-between text-sm font-sans font-bold text-white leading-none">
                      <span className="text-[#1BC5BD]">{matchedTrack?.startingSalary.split(" ")[0]}</span>
                      <span className="text-cyber-orange">{matchedTrack?.midSalary.split(" ")[0]}</span>
                    </div>
                  </div>

                  {/* Essential tools list */}
                  <div>
                    <span className="block text-[10px] text-white/40 font-mono mb-1.5 uppercase">Essential Suite to Acquire:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {matchedTrack?.tools.map((t) => (
                        <span key={t} className="text-[10.5px] font-mono bg-cyber-dark border border-white/10 px-2 py-0.5 rounded-md text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-cyber-blue/30">
                  <p className="text-xs text-white/60 font-sans italic">
                    "{matchedTrack?.matchExplanation}"
                  </p>
                  
                  <button
                    onClick={() => matchedTrack && handleApplyShortcut(matchedTrack.name)}
                    id="apply_diagnosed_track_btn"
                    className="w-full bg-cyber-orange hover:bg-cyber-orange/90 text-white font-sans font-bold text-sm py-3 px-6 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-cyber-orange/20"
                  >
                    Enroll in This Program
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
