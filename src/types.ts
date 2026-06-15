export interface Course {
  id: string;
  title: string;
  shortDesc: string;
  duration: string;
  icon: string;
  fullDesc: string;
  curriculum: string[];
  keyTools: string[];
  careerPaths: string[];
  difficulty: "Beginner" | "Intermediate" | "All Levels";
  category: "search" | "social" | "content" | "advertising" | "analytics";
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  courseInterest: string;
  message: string;
  date: string;
  status: "New" | "Contacted" | "Interested" | "Admitted" | "Closed";
  ipAddress?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companies?: string;
  comment: string;
  rating: number;
  image: string;
  courseCompleted: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: Record<string, number>; // Maps track name to score weight
  }[];
}

export interface CareerTrack {
  id: string;
  name: string;
  description: string;
  startingSalary: string;
  midSalary: string;
  demandLevel: "Very High" | "High" | "Medium";
  tools: string[];
  matchExplanation: string;
}
