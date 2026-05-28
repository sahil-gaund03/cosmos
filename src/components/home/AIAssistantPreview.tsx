"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import RevealOnScroll from "@/components/effects/RevealOnScroll";
import Badge from "@/components/ui/Badge";

const MOCK_CONVERSATION = [
  {
    role: "user" as const,
    text: "Gemini, what is the current position of the ISS relative to Cape Canaveral?",
  },
  {
    role: "ai" as const,
    text: "The ISS is currently 1,420km Northeast of Cape Canaveral, passing over the North Atlantic. Current orbital velocity is 7.66 km/s. The station is traveling at an altitude of 420km and will complete its current orbit in approximately 47 minutes.",
  },
];

const SUGGESTED_PROMPTS = [
  "Calculate Orbit",
  "Recent NASA News",
  "Identify Constellation",
  "Explain Dark Matter",
];

export default function AIAssistantPreview() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const aiResponse = MOCK_CONVERSATION[1].text;

  // Trigger typing animation when section comes into view
  useEffect(() => {
    if (hasStartedTyping) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedTyping) {
          setHasStartedTyping(true);
          setIsTyping(true);

          let i = 0;
          const interval = setInterval(() => {
            if (i < aiResponse.length) {
              setTypedText(aiResponse.slice(0, i + 1));
              i++;
            } else {
              clearInterval(interval);
              setIsTyping(false);
            }
          }, 25);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStartedTyping, aiResponse]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-5 md:px-16 bg-surface-container-low/50"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Content */}
        <RevealOnScroll>
          <Badge variant="default" className="mb-6">
            Gemini AI Assistant
          </Badge>
          <h2 className="text-headline-display text-on-surface mb-8">
            Your personal co-pilot for the{" "}
            <span className="text-primary">cosmos</span>.
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-12">
            Interact with our neural engine to calculate orbital trajectories,
            identify distant nebulae, or decode mission logs with zero latency.
          </p>
          <div className="flex flex-wrap gap-3">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <Badge key={prompt} variant="tag">
                {prompt}
              </Badge>
            ))}
          </div>
        </RevealOnScroll>

        {/* Right: Chat Preview */}
        <RevealOnScroll delay={0.2}>
          <div className="glass-panel border border-outline-variant/40 rounded-lg p-6 md:p-8 h-[450px] md:h-[500px] flex flex-col shadow-2xl relative overflow-hidden">
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-2 md:pr-4 mb-6">
              {/* User Message */}
              <div className="flex gap-3 md:gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center border border-outline-variant/40 shrink-0">
                  <span className="material-symbols-outlined text-xs text-primary">
                    account_circle
                  </span>
                </div>
                <div className="bg-surface-variant/40 p-3 md:p-4 rounded-r-xl rounded-bl-xl max-w-[85%]">
                  <p className="text-sm text-on-surface">
                    {MOCK_CONVERSATION[0].text}
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 md:gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xs text-on-primary">
                    smart_toy
                  </span>
                </div>
                <div className="bg-primary/10 border border-primary/20 p-3 md:p-4 rounded-l-xl rounded-br-xl max-w-[85%]">
                  <p className="text-sm text-on-surface">
                    {typedText}
                    {isTyping && (
                      <span className="inline-block w-[2px] h-[14px] bg-primary ml-0.5 animate-blink align-middle" />
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Input Field */}
            <div className="relative mt-auto">
              <input
                type="text"
                placeholder="Ask Gemini..."
                readOnly
                className="w-full bg-surface-container-high border-none px-4 py-3 md:py-4 rounded-lg text-on-surface placeholder:text-outline-variant text-sm
                  focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
