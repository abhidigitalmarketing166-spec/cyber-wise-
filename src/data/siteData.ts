import { FAQItem, Testimonial, QuizQuestion, CareerTrack } from "../types";

export const FAQsData: FAQItem[] = [
  {
    category: "General",
    question: "Do I need prior experience or technical background?",
    answer: "No prior coding or technical background is required. Digital marketing relies on strategy, creative communication, and data logic. Our courses start from absolute foundations up to advanced modules, making them highly accessible for anyone."
  },
  {
    category: "Certification",
    question: "Will I receive agency-backed certifications?",
    answer: "Yes. You receive a prestigious Course Completion Certificate from CyberWise Digital Campus (powered by CyberWise Info Solutions). Additionally, we train you to clear multiple external industry qualifications, including Google Search Ads, Meta Digital Partner, and HubSpot Academy certifications."
  },
  {
    category: "Placements",
    question: "Is placement assistance really available?",
    answer: "Absolutely. We offer complete career guidance including personal branding, LinkedIn profile optimization, professional resume audits, intensive mock interview sessions, and active placement matchmaking with top agencies & marketing departments in Malappuram, Cochin, and Bangalore."
  },
  {
    category: "Practical",
    question: "Are live campaign projects included in the labs?",
    answer: "Yes, this is our core advantage over purely theoretical courses. Because we are powered by CyberWise Info Solutions, you will work on simulated client briefs, configure actual analytics accounts, audit live local businesses, and manage actual digital campaign flows under the supervision of expert mentors."
  },
  {
    category: "Schedule",
    question: "What is the course duration and timing?",
    answer: "Our master diploma is 3 Months. Individual fast-track modules run between 1 to 2 Months. We offer daily weekday batches (morning/afternoon/evening) as well as dedicated Saturday/Sunday physical batches in Angadippuram for students and businessmen."
  },
  {
    category: "Target",
    question: "Can working professionals and entrepreneurs join?",
    answer: "Yes! Business owners learn how to slash third-party agency dependencies and directly manage customer acquisition. Working professionals join our weekend cohort to transition their careers into high-income digital growth roles."
  }
];

export const TestimonialsData: Testimonial[] = [
  {
    id: "test1",
    name: "Adil Sharafudeen",
    role: "SEO Strategist",
    companies: "InnoMedia Agency, Cochin",
    comment: "The training at CyberWise was purely practical! Working with real tools like SEMrush and Screaming Frog gave me the confidence to handle actual SEO audits during my job interview. I secured a job within 2 weeks of completion!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    courseCompleted: "Search Engine Optimization (SEO)"
  },
  {
    id: "test2",
    name: "Fathima Ruba",
    role: "Social Media Specialist",
    companies: "Zara Retail Ventures",
    comment: "I was a homemaker with a passion for creative copywriting. CyberWise helped me understand analytics, Reels content calendars, and professional ads on Facebook. Today, I work freelance managing pages for local Kerala fashion lines!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    courseCompleted: "Social Media Marketing (SMM)"
  },
  {
    id: "test3",
    name: "Nithin Kumar",
    role: "Performance Lead",
    companies: "TechNova Solutions, Calicut",
    comment: "I attempted online courses but got bored of basic theory. CyberWise's PPC lab helped me run test ad accounts with real tracking pixels. Learning Cost-Per-Click optimization is a high-demand skill and the curriculum is spot on.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    courseCompleted: "Pay-Per-Click (PPC) Advertising"
  },
  {
    id: "test4",
    name: "Priya Chandran",
    role: "Freelance Content Consultant",
    companies: "Independent Business Operator",
    comment: "Being an entrepreneur, I wanted to scale my bakery without hiring expensive agencies. The team at CyberWise taught me SEO writing and Google Ads. My shop is now ranking top in Perinthalmanna! Absolutely recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    courseCompleted: "Content Creation & Marketing"
  }
];

export const QuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which of these activities sounds most exciting to you?",
    options: [
      { text: "Writing compelling stories, blog posts, and conceptual copywriting", score: { creators: 4, social: 2 } },
      { text: "Analyzing numbers, conversion rates, and studying website data charts", score: { analyst: 4, search: 2 } },
      { text: "Creating graphic visuals, trending video clips, and managing social hubs", score: { social: 4, creators: 2 } },
      { text: "Running calculated business campaigns, budgeting ads, and scaling sales", score: { ads: 4, analyst: 2 } }
    ]
  },
  {
    id: 2,
    question: "When you look at a successful brand online, what is the first thing you notice?",
    options: [
      { text: "How high they rank organically on Google search results", score: { search: 4, analyst: 2 } },
      { text: "Their aesthetic Instagram Feed, engaging reels, and witty brand comments", score: { social: 4, creators: 3 } },
      { text: "The highly targeted ads displaying on search pages and social sidebars", score: { ads: 4, analyst: 2 } },
      { text: "The tone of voice in their copy, informative blogs, and newsletters", score: { creators: 4, social: 1 } }
    ]
  },
  {
    id: 3,
    question: "What is your main professional comfort zone or primary strength?",
    options: [
      { text: "Creative writing, editing video visuals, and storytelling", score: { creators: 4, social: 2 } },
      { text: "Working with data, finding logic, and solving technical audits", score: { analyst: 4, search: 3 } },
      { text: "Setting budgets, calculating ROI, and strategic media buying", score: { ads: 4, analyst: 2 } },
      { text: "Networking, design aesthetics, and communicating with customers", score: { social: 4, creators: 1 } }
    ]
  },
  {
    id: 4,
    question: "What describes your main career interest or aspiration?",
    options: [
      { text: "Become a creative content strategist or copywriting consultant", score: { creators: 4, social: 1 } },
      { text: "Run organic search engines visibility plans with multi-client accounts", score: { search: 4, analyst: 2 } },
      { text: "Become an expert media buyer handling major commercial ad accounts", score: { ads: 4, analyst: 3 } },
      { text: "Acquire a viral multi-platform social layout follower audience base", score: { social: 4, creators: 2 } }
    ]
  }
];

export const CareerTracksData: Record<string, CareerTrack> = {
  creators: {
    id: "creators",
    name: "Content Strategist & Copywriter",
    description: "You excel at shaping communication! This role directs target consumer attention through storytelling, email nurture, copywriting formulas, and informative search structures.",
    startingSalary: "₹2.5L - ₹4L per annum",
    midSalary: "₹6L - ₹12L per annum",
    demandLevel: "High",
    tools: ["ChatGPT / Gemini", "Canva", "Google Docs", "Mailchimp", "Notion"],
    matchExplanation: "Your answers highlight a high creative appetite for visual drafting, branding narrative, and persuasive textual communication."
  },
  social: {
    id: "social",
    name: "Social Media Specialist",
    description: "You are a voice of the brand online! Social specialists grow followings, curate viral video loops, manage community forums, and run organic social channels.",
    startingSalary: "₹3L - ₹4.5L per annum",
    midSalary: "₹7L - ₹14L per annum",
    demandLevel: "Very High",
    tools: ["Meta Business Suite", "CapCut", "Buffer", "Canva Pro", "TikTok Insights"],
    matchExplanation: "You natural understanding of platform dynamics, Reels trends, and visual visual content layouts makes you an premium content curator."
  },
  search: {
    id: "search",
    name: "SEO Analyst & Strategist",
    description: "You are the master of Google algorithm ranks! SEO specialists crawl, analyze keyword volumes, structure content architectures, and secure premium rankings organically.",
    startingSalary: "₹3.5L - ₹5L per annum",
    midSalary: "₹8L - ₹15L per annum",
    demandLevel: "High",
    tools: ["SEMrush", "Ahrefs", "Google Search Console", "Screaming Frog", "Google Business Profile"],
    matchExplanation: "Your highly logical, structural mindset is perfect for auditing sites and discovering niche keywords that rank pages on page one."
  },
  ads: {
    id: "ads",
    name: "Performance Media Buyer (PPC Specialty)",
    description: "The scaling engine of the marketing department! Performance marketers bid for ads space (Google, Meta, Youtube), design targeting funnels, and directly influence conversion ROI.",
    startingSalary: "₹4L - ₹6L per annum",
    midSalary: "₹10L - ₹20L per annum",
    demandLevel: "Very High",
    tools: ["Google Ads Manager", "Meta Ads Suite", "Google Looker Studio", "Tag Manager", "SpyFu"],
    matchExplanation: "Your sharp emphasis on budget allocations, return on action (ROAS) projections, and statistical performance logic matches this ultra high-paying asset."
  },
  analyst: {
    id: "analyst",
    name: "Digital Marketing & GA4 Specialist",
    description: "The analytics orchestrator. You configure data schemas, observe client metrics, audit conversions, and prepare Looker dashboard reporting that maps marketing effectiveness.",
    startingSalary: "₹4L - ₹5.5L per annum",
    midSalary: "₹9L - ₹16L per annum",
    demandLevel: "Very High",
    tools: ["Google Analytics 4", "Google Tag Manager", "Microsoft Excel", "Looker Studio", "Hotjar"],
    matchExplanation: "Your deep analytical preference for charts, user flow mapping, and logical spreadsheets matches modern web measurement metrics."
  }
};
