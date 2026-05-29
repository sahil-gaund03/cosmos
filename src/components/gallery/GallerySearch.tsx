"use client";

import { useState } from "react";

interface GallerySearchProps {
  onSearch: (query: string) => void;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function GallerySearch({
  onSearch,
  selectedFilter,
  onFilterChange,
}: GallerySearchProps) {
  const [inputVal, setInputVal] = useState<string>("");

  const filters = [
    "ALL",
    "PLANETS",
    "GALAXIES",
    "NEBULAE",
    "STARS",
    "BLACK HOLES",
    "GALAXY",
    "JAMES WEBB",
    "NASA MISSIONS",
    "FAVORITES"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputVal);
  };

  return (
    <div className="flex flex-col gap-5 select-none w-full border-b border-outline-variant/30 pb-5">
      {/* Search Bar Row */}
      <form onSubmit={handleFormSubmit} className="relative w-full max-w-xl group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg blur-md transition-opacity duration-500 pointer-events-none" />
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Query NASA media archive (e.g. Orion, Artemis)..."
          className="relative w-full glass-panel border border-outline-variant/30 focus:border-primary/50 focus:bg-surface-container/80 px-6 py-4 rounded-lg text-sm text-on-surface placeholder:text-outline-variant transition-all duration-300 font-mono shadow-inner outline-none"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-primary-fixed hover:scale-110 transition-all duration-300"
          aria-label="Submit Search"
        >
          <span className="material-symbols-outlined text-[24px]">search</span>
        </button>
      </form>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-5 py-2 rounded-full text-[10px] font-semibold tracking-wider font-[Geist] uppercase border transition-all duration-300
              ${
                selectedFilter === filter
                  ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(187,195,255,0.2)] scale-105"
                  : "glass-panel border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-primary/40 hover:bg-surface-variant/30 hover:scale-105"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
