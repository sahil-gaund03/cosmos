"use client";

import { useEffect, useRef, useState } from "react";
import GlassPanel from "@/components/ui/GlassPanel";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
}

const generateMessageId = () => {
  return `msg-${Math.floor(Math.random() * 1000000000)}`;
};

export default function AIChatConsole() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [input, setInput] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isMicActive, setIsMicActive] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "Calculate Mars Transfer Orbit",
    "Summarize Artemis III Payload",
    "Explain Quantum Hawking Radiation",
    "Identify Orion's Brightest Stars",
  ];

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isGenerating]);

  // Character-by-character typewriter streaming simulation
  const startTypewriter = (fullText: string) => {
    const newMsgId = generateMessageId();
    
    // Insert empty AI message
    setMessages((prev) => [...prev, { id: newMsgId, sender: "ai", text: "" }]);
    
    let currentLen = 0;
    const interval = setInterval(() => {
      currentLen += 2; // Append 2 chars at a time for speed balance
      const slice = fullText.slice(0, currentLen);
      
      setMessages((prev) =>
        prev.map((msg) => (msg.id === newMsgId ? { ...msg, text: slice } : msg))
      );

      if (currentLen >= fullText.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 20);
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend || textToSend.trim() === "" || isGenerating) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: generateMessageId(),
      sender: "user",
      text: textToSend,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsGenerating(true);

    try {
      // Create context array including the new message
      const contextMessages = [...messages, userMsg].map(m => ({
        sender: m.sender,
        text: m.text
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: contextMessages }),
      });

      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error || "Unknown API Error");
      
      if (data.response) {
        startTypewriter(data.response);
      } else {
        throw new Error();
      }
    } catch (err: any) {
      setIsGenerating(false);
      const errMsg: ChatMessage = {
        id: generateMessageId(),
        sender: "ai",
        text: `ALERT: DECODING MALFUNCTION // ${err.message || "RETRY"}`,
      };
      setMessages((prev) => [...prev, errMsg]);
    }
  };

  return (
    <GlassPanel glow className="relative p-5 md:p-6 h-[70vh] md:h-[75vh] flex flex-col justify-between overflow-hidden select-none">
      {/* HUD Header */}
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
          <h2 className="font-label-caps text-label-caps text-on-surface">CO-PILOT DIALOG CONSOLE</h2>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          SYSTEM LOCK: ATTACHED
        </div>
      </div>

      {/* Suggested Prompts Pills (Only show on start or as shortcuts) */}
      {messages.length === 1 && !isGenerating && (
        <div className="flex flex-col gap-2 mb-4">
          <span className="text-[9px] font-label-caps text-tertiary tracking-widest uppercase">
            Suggested Query Shortcuts
          </span>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="px-3.5 py-1.5 rounded-full border border-outline-variant text-[10px] font-label-caps text-on-surface-variant hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Speech bubbles scrolling body */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto pr-2 space-y-6 mb-4 custom-scrollbar"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center max-w-md mx-auto fade-in">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[32px] text-primary">smart_toy</span>
            </div>
            <h3 className="font-headline-display text-xl text-on-surface mb-2 tracking-wide">
              Gemini Co-Pilot Online
            </h3>
            <p className="text-sm text-on-surface-variant/80 mb-8 leading-relaxed">
              Ask me anything about astronomy, orbital mechanics, planetary science, or historical NASA missions. I process complex cosmological data in real-time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-4 py-3 rounded-lg border border-outline-variant/30 bg-surface-container/30 text-xs font-medium text-on-surface-variant hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300 text-left flex justify-between items-center group cursor-pointer"
                >
                  {prompt}
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-5px] group-hover:translate-x-0">
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((msg) => {
            const isUser = msg.sender === "user";
            return (
              <div
                key={msg.id}
                className={`flex gap-4 max-w-[90%] fade-in ${isUser ? "ml-auto flex-row-reverse" : ""}`}
              >
                {/* Profile node */}
                <div
                  className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center border text-sm mt-1 shadow-md
                    ${isUser ? "bg-surface-bright border-outline-variant/30 text-on-surface" : "bg-primary text-on-primary border-primary/20 shadow-primary/20"}`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {isUser ? "account_circle" : "smart_toy"}
                  </span>
                </div>

                {/* Bubble text */}
                <div
                  className={`px-5 py-4 rounded-2xl text-[13px] leading-[1.6] break-words
                    ${
                      isUser
                        ? "bg-surface-container/80 border border-outline-variant/20 rounded-tr-sm text-on-surface shadow-sm"
                        : "bg-primary/5 border border-primary/20 rounded-tl-sm text-on-surface shadow-sm markdown-body"
                    }`}
                >
                  {isUser ? (
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                  )}
                </div>
              </div>
            );
          })
        )}

        {/* Loading Indicator */}
        {isGenerating && (!messages.length || messages[messages.length - 1].sender !== "ai" || !messages[messages.length - 1].text) && (
          <div className="flex gap-4 max-w-[90%] fade-in">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm mt-1 shadow-md animate-pulse">
              <span className="material-symbols-outlined text-[16px]">smart_toy</span>
            </div>
            <div className="bg-primary/5 border border-primary/20 px-5 py-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/70 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-primary/70 animate-bounce" style={{ animationDelay: "0.15s" }} />
              <span className="w-2 h-2 rounded-full bg-primary/70 animate-bounce" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>
        )}
      </div>

      {/* Voice audio waves overlay */}
      {isMicActive && (
        <div className="flex items-center gap-1.5 justify-center py-2.5 bg-primary/5 border border-primary/20 rounded-lg mb-4 select-none font-mono text-[9px] text-primary">
          <div className="flex items-center gap-1">
            <span className="w-1 h-3 bg-primary rounded animate-[pulse_0.6s_infinite]" />
            <span className="w-1 h-5 bg-primary rounded animate-[pulse_0.8s_infinite_delay-100]" />
            <span className="w-1 h-2 bg-primary rounded animate-[pulse_0.5s_infinite_delay-200]" />
            <span className="w-1 h-6 bg-primary rounded animate-[pulse_0.7s_infinite_delay-300]" />
          </div>
          <span>VOICE TRANSCEIVER STREAMING: STANDBY...</span>
        </div>
      )}

      {/* Input bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(input);
        }}
        className="relative flex items-center gap-3 border-t border-outline-variant/20 pt-4"
      >
        {/* Mic toggle */}
        <button
          type="button"
          onClick={() => setIsMicActive(!isMicActive)}
          className={`w-11 h-11 rounded-lg border flex items-center justify-center transition-all duration-300
            ${
              isMicActive
                ? "bg-[#ffb4ab]/10 border-[#ffb4ab]/40 text-[#ffb4ab] shadow-[0_0_10px_rgba(255,180,171,0.2)]"
                : "border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary/40"
            }`}
          aria-label="Toggle voice mic"
        >
          <span className="material-symbols-outlined text-[20px]">
            {isMicActive ? "mic" : "mic_off"}
          </span>
        </button>

        {/* Input box */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isMicActive ? "Voice streaming active..." : "Ask Gemini about the universe..."}
          disabled={isGenerating || isMicActive}
          className="flex-1 bg-[#0d0d17]/80 border-none border-b border-outline-variant/40 focus:border-primary/50 focus:ring-0 focus:outline-none px-5 py-4 rounded-xl text-[13px] text-on-surface placeholder:text-outline-variant/60 transition-all font-sans"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={isGenerating || isMicActive || !input.trim()}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-on-primary disabled:bg-outline-variant/20 disabled:text-outline-variant/40 hover:bg-primary-fixed transition-all"
          aria-label="Send query"
        >
          <span className="material-symbols-outlined text-[16px] -ml-0.5" data-icon="send">
            send
          </span>
        </button>
      </form>
    </GlassPanel>
  );
}
