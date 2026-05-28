import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "AI Space Assistant | NEXUS COSMOS",
  description: "Gemini-powered AI astronomy assistant — ask questions, get explanations, and explore the cosmos through intelligent conversation.",
};

export default function AIAssistantPage() {
  return (
    <PlaceholderPage
      title="Gemini AI Space Assistant"
      subtitle="Your Neural Co-Pilot for the Cosmos"
      icon="smart_toy"
      description="Interact with our Gemini-powered neural engine to explore astronomy, decode mission data, and learn about the universe through intelligent conversation."
      features={[
        "Streaming Responses",
        "Astronomy Q&A",
        "Mission Explanations",
        "NASA Data Summaries",
        "Context Memory",
        "Suggested Prompts",
      ]}
    />
  );
}
