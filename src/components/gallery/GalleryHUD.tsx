"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import {
  getAPOD,
  searchNASAGallery,
  APODData,
  NASAPhoto,
} from "@/lib/services/nasaService";
import APODHero from "./APODHero";
import GallerySearch from "./GallerySearch";
import GalleryGrid from "./GalleryGrid";
import ImageLightbox from "./ImageLightbox";

export default function GalleryHUD() {
  const [apod, setApod] = useState<APODData | null>(null);
  const [photos, setPhotos] = useState<NASAPhoto[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<NASAPhoto | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nexus_cosmos_gallery_favorites");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Load APOD and Initial Photos
  useEffect(() => {
    const initializeGallery = async () => {
      try {
        setIsLoading(true);
        const apodData = await getAPOD();
        setApod(apodData);

        const initialPhotos = await searchNASAGallery("");
        setPhotos(initialPhotos);
      } catch {
        // Fallbacks resolved inside service
      } finally {
        setIsLoading(false);
      }
    };

    initializeGallery();
  }, []);

  // Handle keyword searches
  const handleSearch = async (query: string) => {
    try {
      setIsSearching(true);
      const results = await searchNASAGallery(query);
      setPhotos(results);
    } catch {
      // Handled inside service
    } finally {
      setIsSearching(false);
    }
  };

  // Toggle favorite status
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem("nexus_cosmos_gallery_favorites", JSON.stringify(next));
      return next;
    });
  };

  // Click card trigger
  const handleCardClick = (photo: NASAPhoto) => {
    setSelectedPhoto(photo);
    setIsLightboxOpen(true);
  };

  // Filter photos based on tab choice
  const displayedPhotos = photos.filter((photo) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "FAVORITES") return favorites.includes(photo.id);
    
    const filterMap: Record<string, string[]> = {
      PLANETS: ["earth", "mars", "jupiter", "saturn", "uranus", "neptune", "planets"],
      GALAXIES: ["galaxies"],
      NEBULAE: ["nebulae"],
      STARS: ["stars", "sun"],
      "BLACK HOLES": ["black holes"],
      GALAXY: ["galaxy"],
      "JAMES WEBB": ["james webb"],
      "NASA MISSIONS": ["nasa missions"],
    };
    
    const allowedCategories = filterMap[selectedFilter] || [];
    return allowedCategories.includes(photo.category.toLowerCase());
  });

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] gap-4 select-none">
        <span className="material-symbols-outlined text-[48px] text-primary animate-spin">
          progress_activity
        </span>
        <span className="text-label-caps text-tertiary tracking-widest animate-pulse">
          INTERCEPTING NASA APOD & IMAGE FEEDS...
        </span>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 w-full"
    >
      {/* Astronomy Picture of the Day Hero Banner */}
      {apod && (
        <motion.div variants={fadeInUp}>
          <APODHero apod={apod} />
        </motion.div>
      )}

      {/* Search and Filters Header */}
      <motion.div variants={fadeInUp}>
        <GallerySearch
          onSearch={handleSearch}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      </motion.div>

      {/* Image Grid Display */}
      {isSearching ? (
        <div className="text-center py-20 font-mono text-xs text-tertiary/70 animate-pulse">
          TUNING DIGITAL TELEMETRY RECEIVERS...
        </div>
      ) : (
        <motion.div variants={fadeInUp}>
          <GalleryGrid photos={displayedPhotos} onCardClick={handleCardClick} />
        </motion.div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <ImageLightbox
          photo={selectedPhoto}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          isFavorite={favorites.includes(selectedPhoto.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </motion.div>
  );
}
