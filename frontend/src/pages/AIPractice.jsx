import { useEffect } from "react";
import { AIHero } from "../components/ai/AIHero";
import { AIFeatures, AIStats } from "../components/ai/AIFeatures";
import { AICategories } from "../components/ai/AICategories";
import { AIAssessment } from "../components/ai/AIAssessment";
import { AIComparison, AIHowItWorks } from "../components/ai/AIComparison";
import { AICTA } from "../components/ai/AICTA";

export default function AIPractice() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Engwish AI-Practice — Practice Spoken English with AI | Engwish Skills Academy";
  }, []);

  return (
    <main data-testid="ai-practice-page">
      <AIHero />
      <AIStats />
      <AIFeatures />
      <AICategories />
      <AIAssessment />
      <AIComparison />
      <AIHowItWorks />
      <AICTA />
    </main>
  );
}
