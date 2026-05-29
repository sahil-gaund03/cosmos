"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NASAPhoto } from "@/lib/services/nasaService";
import Image from "next/image";

interface ImageLightboxProps {
  photo: NASAPhoto | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function ImageLightbox({
  photo,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
}: ImageLightboxProps) {
  const [copied, setCopied] = useState<boolean>(false);
  
  // Zoom & Pan States
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  
  // Layout States
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Sync browser fullscreen state
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  // Close modal on escape press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (scale > 1) {
          handleResetZoom();
        } else {
          onClose();
        }
      }
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, scale]);

  // Reset zoom & pan when image changes
  useEffect(() => {
    handleResetZoom();
  }, [photo]);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };
  
  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleToggleBrowserFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale === 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch Drag handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale === 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || scale === 1) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  const handleCopyLink = async () => {
    if (!photo) return;
    try {
      await navigator.clipboard.writeText(window.location.origin + photo.hdUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard fails
    }
  };

  if (!photo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-surface/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-6xl h-[85vh] md:h-[80vh] flex flex-col md:flex-row gap-0 glass-panel-heavy border border-outline-variant/40 rounded-xl overflow-hidden shadow-[0_0_60px_rgba(82,102,235,0.2)] z-10"
          >
            {/* Left Side: The Image frame (Expands when sidebar collapses) */}
            <div 
              ref={imageContainerRef}
              className="relative flex-1 h-[45%] md:h-full bg-[#0d0d17]/60 overflow-hidden group cursor-default"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUpOrLeave}
              onWheel={(e) => {
                e.preventDefault();
                if (e.deltaY < 0) handleZoomIn();
                else handleZoomOut();
              }}
            >
              {/* Dynamic Image Wrapper with Zoom Transform */}
              <div 
                className="w-full h-full relative transition-transform duration-75 ease-out"
                style={{
                  transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                  cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                }}
              >
                <Image
                  src={photo.hdUrl}
                  alt={photo.title}
                  fill
                  className="object-contain pointer-events-none select-none"
                  sizes="(max-w-1024px) 100vw, 70vw"
                  priority
                />
              </div>

              {/* Floating Meta Tag */}
              <div className="absolute top-4 left-4 z-10 bg-surface-container/85 border border-outline-variant/40 px-2.5 py-1 rounded font-mono text-[9px] text-primary tracking-wider uppercase backdrop-blur-sm">
                {photo.category} // ZOOM: {scale.toFixed(2)}x
              </div>

              {/* Floating Analyzer HUD Overlay Lines */}
              {scale > 1 && (
                <div className="absolute inset-0 border border-primary/20 pointer-events-none z-10">
                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/10" />
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-primary/10" />
                  <div className="absolute top-4 right-4 text-[9px] font-mono text-primary/40">
                    PAN DIRECTIONAL COORDS: X: {position.x} Y: {position.y}
                  </div>
                </div>
              )}

              {/* Floating Glass Control Panel Overlay (Zoom, Fullscreen, Expand) */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-[#12121c]/80 border border-outline-variant/40 rounded-full px-3 py-1.5 backdrop-blur-md shadow-lg transition-opacity duration-300 hover:opacity-100 opacity-90">
                <button
                  onClick={handleZoomOut}
                  disabled={scale === 1}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-surface-variant/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  title="Zoom Out"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_out</span>
                </button>
                
                <span className="font-mono text-[10px] text-primary w-12 text-center select-none">
                  {Math.round(scale * 100)}%
                </span>

                <button
                  onClick={handleZoomIn}
                  disabled={scale >= 4}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-surface-variant/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  title="Zoom In"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </button>

                <div className="w-[1px] h-4 bg-outline-variant/40 mx-1" />

                <button
                  onClick={handleResetZoom}
                  disabled={scale === 1 && position.x === 0 && position.y === 0}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-surface-variant/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  title="Reset Zoom"
                >
                  <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                </button>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
                    ${
                      isExpanded
                        ? "text-primary hover:bg-primary-container/20"
                        : "text-on-surface-variant hover:text-white hover:bg-surface-variant/40"
                    }`}
                  title={isExpanded ? "Show Info Panel" : "Collapse Info Panel"}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isExpanded ? "close_fullscreen" : "open_in_full"}
                  </span>
                </button>

                <button
                  onClick={handleToggleBrowserFullscreen}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
                    ${
                      isFullscreen
                        ? "text-primary hover:bg-primary-container/20"
                        : "text-on-surface-variant hover:text-white hover:bg-surface-variant/40"
                    }`}
                  title="Toggle Fullscreen"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isFullscreen ? "fullscreen_exit" : "fullscreen"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side: Data Sheet details (Hidden when expanded) */}
            {!isExpanded && (
              <div className="w-full md:w-[420px] p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-outline-variant/30 h-[55%] md:h-full overflow-y-auto custom-scrollbar bg-surface-container/30 backdrop-blur-sm relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-50" />
                <div className="space-y-6">
                  {/* Meta header */}
                  <div className="flex justify-between items-center border-b border-outline-variant/20 pb-3">
                    <span className="text-[10px] font-mono text-outline/80">
                      NASA ARCHIVE CORE
                    </span>
                    <button
                      onClick={onClose}
                      className="text-on-surface-variant hover:text-white transition-colors"
                      aria-label="Close Lightbox"
                    >
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>

                  {/* Title */}
                  <h2 className="font-[Sora] text-xl md:text-2xl font-bold tracking-[0.02em] text-on-surface leading-snug">
                    {photo.title}
                  </h2>

                  {/* Technical data table */}
                  <div className="grid grid-cols-2 gap-3 text-[10px] font-mono border-y border-outline-variant/20 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-tertiary">ACQUISITION DATE</span>
                      <span className="text-on-surface-variant">{photo.date}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-tertiary">RESEARCH CENTER</span>
                      <span className="text-on-surface-variant uppercase">{photo.center}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 mt-2 col-span-2">
                      <span className="text-tertiary">SENSOR IDENTIFIER</span>
                      <span className="text-primary font-semibold break-all">{photo.id}</span>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-[10px] font-label-caps text-primary uppercase border-b border-outline-variant/20 pb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Scientific Analysis
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-[Geist] max-h-[180px] md:max-h-[300px] overflow-y-auto pr-3 custom-scrollbar text-justify">
                      {photo.explanation}
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="border-t border-outline-variant/20 pt-4 flex gap-3 mt-6">
                  {/* Favorite button */}
                  <button
                    onClick={() => onToggleFavorite(photo.id)}
                    className={`flex-1 py-2 px-4 rounded-full text-label-caps text-[10px] font-semibold border flex items-center justify-center gap-1.5 transition-all duration-300
                      ${
                        isFavorite
                          ? "bg-primary/10 border-primary/40 text-primary shadow-[0_0_10px_rgba(187,195,255,0.2)]"
                          : "border-outline text-on-surface hover:bg-surface-variant/30"
                      }`}
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      {isFavorite ? "star" : "star_outline"}
                    </span>
                    {isFavorite ? "FAVORITED" : "FAVORITE"}
                  </button>

                  {/* Share link button */}
                  <button
                    onClick={handleCopyLink}
                    className="flex-1 py-2 px-4 rounded-full text-label-caps text-[10px] border border-outline text-on-surface hover:bg-surface-variant/30 flex items-center justify-center gap-1.5 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      {copied ? "check" : "share"}
                    </span>
                    {copied ? "COPIED" : "COPY LINK"}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
