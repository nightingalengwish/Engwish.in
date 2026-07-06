import {
  ShoppingBag, Plane, Hotel, Stethoscope, Landmark, Headphones, Briefcase, UserCheck,
  GraduationCap, Building2, UtensilsCrossed, PlaneTakeoff, StampIcon, Bus, PhoneCall,
  ShoppingCart, Users, Siren, FileText, MessageCircle, Bot, Mic, Globe2, BarChart3,
  Target, Brain,
} from "lucide-react";

export const AI_FEATURES = [
  {
    icon: Bot,
    title: "Live AI Conversations",
    desc: "Practice speaking English with an intelligent AI that responds naturally in real time — just like speaking with a real person.",
  },
  {
    icon: Mic,
    title: "6000+ Minutes of Speaking Practice",
    desc: "Over 6000 minutes of guided AI conversations that help you become fluent through consistent, judgement-free speaking practice.",
  },
  {
    icon: Globe2,
    title: "500+ Real-Life Scenarios",
    desc: "Shopping, travel, interviews, hospitals, banking, business meetings and more — 500+ daily-life scenarios across 20+ categories.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Fluency Assessment",
    desc: "Instant feedback on fluency, pronunciation, grammar, vocabulary, listening, sentence formation, confidence and speaking speed.",
  },
  {
    icon: Target,
    title: "Personalized Learning",
    desc: "The AI recommends your next practice session based on your performance and weak areas — so every minute counts.",
  },
  {
    icon: Brain,
    title: "AI Feedback After Every Conversation",
    desc: "Grammar corrections, better vocabulary, pronunciation improvements, natural sentence alternatives and confidence tips.",
  },
];

export const AI_CATEGORIES = [
  { icon: ShoppingBag, label: "Shopping" },
  { icon: Plane, label: "Travel" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Stethoscope, label: "Medical" },
  { icon: Landmark, label: "Banking" },
  { icon: Headphones, label: "Customer Support" },
  { icon: Briefcase, label: "Business" },
  { icon: UserCheck, label: "Interviews" },
  { icon: GraduationCap, label: "College" },
  { icon: Building2, label: "Office" },
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: PlaneTakeoff, label: "Airport" },
  { icon: StampIcon, label: "Immigration" },
  { icon: Bus, label: "Public Transport" },
  { icon: PhoneCall, label: "Phone Calls" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Users, label: "Friends & Family" },
  { icon: Siren, label: "Emergency" },
  { icon: FileText, label: "Government Services" },
  { icon: MessageCircle, label: "Daily Conversations" },
];

export const AI_STATS = [
  { value: 6000, suffix: "+", label: "Minutes of Speaking Practice" },
  { value: 500, suffix: "+", label: "Real-Life Conversations" },
  { value: 20, suffix: "+", label: "Conversation Categories" },
  { value: 8, suffix: "", label: "Skills Assessed in Real Time" },
];

export const AI_SKILLS = [
  { label: "Fluency", score: 84 },
  { label: "Pronunciation", score: 82 },
  { label: "Vocabulary", score: 78 },
  { label: "Grammar", score: 88 },
  { label: "Listening", score: 90 },
  { label: "Sentence Formation", score: 80 },
  { label: "Confidence", score: 85 },
];

export const AI_COMPARISON = {
  traditional: [
    "Limited speaking time",
    "Fixed schedule",
    "Practice only in class",
    "Depends on trainer availability",
  ],
  engwish: [
    "Practice 24×7",
    "Unlimited conversations",
    "Instant AI feedback",
    "Personalized learning",
    "Real-life situations",
    "No fear of making mistakes",
    "Learn at your own pace",
  ],
};

export const AI_STEPS = [
  { step: "01", title: "Create your account", desc: "Sign up free in seconds with email or Google." },
  { step: "02", title: "Choose a conversation category", desc: "Pick from 500+ real-life scenarios across 20+ categories." },
  { step: "03", title: "Speak with the AI in real time", desc: "Have a natural spoken conversation — anytime, anywhere." },
  { step: "04", title: "Get instant feedback & improve", desc: "See your fluency scores and actionable AI feedback after every session." },
];

export const RECOMMENDED_SCENARIOS = [
  { icon: UserCheck, label: "Job Interview Practice", category: "Interviews", level: "Beginner Friendly" },
  { icon: ShoppingBag, label: "At the Shopping Mall", category: "Shopping", level: "Beginner Friendly" },
  { icon: PlaneTakeoff, label: "Airport Check-in", category: "Travel", level: "Intermediate" },
  { icon: UtensilsCrossed, label: "Ordering at a Restaurant", category: "Restaurant", level: "Beginner Friendly" },
  { icon: Briefcase, label: "Business Meeting Introduction", category: "Business", level: "Intermediate" },
  { icon: PhoneCall, label: "Making a Phone Enquiry", category: "Phone Calls", level: "Beginner Friendly" },
];
