import { Course } from "../types";

export const coursesData: Course[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Master advanced keyword research, on-page optimization, technical SEO audit, and link-building strategies to dominate Google search rankings.",
    duration: "2 Months (40 hours)",
    icon: "Search",
    category: "search",
    difficulty: "All Levels",
    fullDesc: "Learn how search engines work and how to position websites on top of Search Engine Results Pages (SERPs). This course provides full hands-on training with industry-standard auditing software and real client portals to teach you organic rank acquisition.",
    curriculum: [
      "Introduction to Search Engines & Algorithms",
      "Keyword Research Strategy & Competitor Analysis",
      "On-Page SEO: Title Tags, Meta Descriptions, Headings & Content",
      "Technical SEO: Site Speed Optimization, XML Sitemaps, Robots.txt & Indexability",
      "Search Console & Bing Webmaster Tools Integration",
      "Off-Page Link Building & Local SEO (Optimizing Google Business Profile)",
      "SEO Audit Reporting & AI Content Strategy"
    ],
    keyTools: ["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Google Business Profile"],
    careerPaths: ["SEO Executive", "Local SEO Specialist", "Technical SEO Analyst", "Search Strategist"]
  },
  {
    id: "smm",
    title: "Social Media Marketing (SMM)",
    shortDesc: "Build viral campaigns, manage professional brand pages, and implement sophisticated organic growth strategies across Instagram, Facebook, LinkedIn, & YouTube.",
    duration: "2 Months (45 hours)",
    icon: "Share2",
    category: "social",
    difficulty: "Beginner",
    fullDesc: "Go beyond casual posting. Discover how to create brand communication guidelines, design content calendars, decode platform algorithm dynamics, and build loyal online communities that translate directly into business conversions.",
    curriculum: [
      "Understanding Social Platform Algorithms (Meta, TikTok, LinkedIn, YouTube)",
      "Brand Positioning & Creating a Content Calendar",
      "Instagram Growth Hacking: Reels Strategy, Hashtag Mechanics & Engagement",
      "Facebook Suite & Community Management",
      "B2B Marketing & Thought Leadership on LinkedIn",
      "YouTube SEO, Thumbnails, Channel Optimization & Video Strategy",
      "Influencer Marketing, Outreach, Contracts & ROI Assessment"
    ],
    keyTools: ["Meta Business Suite", "Canva Pro", "Buffer/Hootsuite", "CapCut", "Instagram Creator Tools"],
    careerPaths: ["Social Media Manager", "Community Specialist", "Brand Account Executive", "Social Content Creator"]
  },
  {
    id: "ppc",
    title: "Pay-Per-Click (PPC) Advertising",
    shortDesc: "Run high-yielding Google Search Ads, YouTube Campaigns, Display Network ADS, and conversion-optimized Meta Ads (Instagram & Facebook Lead Generation).",
    duration: "3 Months (60 hours)",
    icon: "TrendingUp",
    category: "advertising",
    difficulty: "Intermediate",
    fullDesc: "Gain agency-grade ad management mastery. Learn to budget wisely, structure campaigns, optimize Cost-Per-Click (CPC), lower Cost-Per-Acquisition (CPA), configure custom conversions, and execute visual A/B tests on live marketing spend.",
    curriculum: [
      "Introduction to Paid Advertising Media & Bid Models",
      "Google Ads: Search, Display, Shopping & Local Campaign Setup",
      "Bidding Strategies: Manual bidding vs Smart AI Bidding models",
      "Meta Ads Specialist Suite: Custom Audiences & Lookalikes",
      "Advanced Lead Generation & Dynamic Canvas Retargeting",
      "Ad Copy Writing, Visual A/B Testing & Ad Fatigue Management",
      "Budget Allocation, ROAS Tracking & KPI Reporting"
    ],
    keyTools: ["Google Ads Manager", "Meta Ads Manager", "Google Tag Manager", "SpyFu", "Ad Library"],
    careerPaths: ["PPC Analyst", "Performance Marketer", "Media Buyer", "Growth Marketing Lead"]
  },
  {
    id: "content",
    title: "Content Creation & Marketing",
    shortDesc: "Write high-converting blog posts, design viral visual content, and write compelling copywriting tailored to grab digital attention instantly.",
    duration: "1.5 Months (30 hours)",
    icon: "PenTool",
    category: "content",
    difficulty: "Beginner",
    fullDesc: "Learn the psychology of modern digital consumers. This course empowers you with copywriting formulas (AIDA, PAS), visual storytelling concepts, and AI-assisted content writing strategies to engage, nurture, and trigger purchases.",
    curriculum: [
      "Fundamentals of Storytelling & Marketing Psychology",
      "Copywriting Formulas: AIDA (Attention, Interest, Desire, Action) & PAS",
      "Blogging for Business & Search Engine Optimization Layouts",
      "Graphic Design Fundamentals & Social Visual Branding",
      "Video Scriptwriting & Mobile Editing Workflows",
      "AI Prompt Engineering for Content Generation & Visual Creation",
      "Lead Magnet Design & Landing Page Content Architecture"
    ],
    keyTools: ["ChatGPT / Gemini API", "Canva", "Notion", "CapCut", "Copyscape"],
    careerPaths: ["Content Specialist", "Digital Copywriter", "Inbound Marketer", "Creative Lead"]
  },
  {
    id: "email",
    title: "Email Marketing & Automation",
    shortDesc: "Design newsletters, construct autoresponder sequences, build dynamic segmented subscriber lists, and implement complete purchase lifecycle flows.",
    duration: "1 Month (25 hours)",
    icon: "Mail",
    category: "content",
    difficulty: "Intermediate",
    fullDesc: "Unlock the marketing channel with the highest absolute ROI. Understand subscriber nurturing, cold email campaigns, transaction flows, double opt-in setups, and advanced automation rules to automatically turn readers into hot leads.",
    curriculum: [
      "Email Marketing Infrastructure: SPF, DKIM & Deliverability",
      "Building & Segmenting a High-Quality Opt-in Email List",
      "Designing conversion-optimized Email Newsletters",
      "Setting up Email Automation Workflows & Automated Welcome Series",
      "A/B Testing Subject Lines, Content Layouts & Sending Times",
      "Cold Email Outreach Strategies for B2B Sales",
      "Analyzing Metrics: Open Rates, Click-Through Rates (CTR) & Unsubscribes"
    ],
    keyTools: ["Mailchimp", "Brevo / Sendinblue", "MailerLite", "ActiveCampaign", "Hunter.io"],
    careerPaths: ["Email Marketing Manager", "Lifecycle Marketer", "Marketing Automation Specialist"]
  },
  {
    id: "analytics",
    title: "Web Analytics & Reporting",
    shortDesc: "Configure Google Analytics 4 (GA4), track user behaviors, build custom visual dashboards, and extract insights to drive real digital scale.",
    duration: "1.5 Months (35 hours)",
    icon: "BarChart3",
    category: "analytics",
    difficulty: "Intermediate",
    fullDesc: "Data is the bedrock of marketing. Learn to track user sessions, map multi-channel attribution paths, understand audience behaviors, setup custom triggers via Taylor Tag Manager, and build professional visual reports for clients.",
    curriculum: [
      "Introduction to Data-Driven Decisions & Digital Metrics",
      "Setting up Google Analytics 4 (GA4) Properties & Streams",
      "Custom Event Tracking, Conversions & Monetization Tracking",
      "Google Tag Manager (GTM): Creating Triggers, Tags & Variables",
      "User Navigation Analysis & Funnel Visualization",
      "Creating customized multi-channel dashboards using Looker Studio",
      "Preparing Professional Agency Reporting Decks for Corporate Stakeholders"
    ],
    keyTools: ["Google Analytics 4", "Google Tag Manager", "Google Looker Studio", "Hotjar", "Microsoft Excel"],
    careerPaths: ["Web Analytics Specialist", "Digital Marketing Analyst", "Performance Report Manager", "CRO Specialist"]
  }
];
