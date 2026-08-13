"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { featuredTemplates, templates } from "@/data/templates";

export default function HeroSection() {
  // Select top 10 featured templates
  const items = featuredTemplates.slice(0, 10);
  const finalItems = items.length > 0 ? items : templates.slice(0, 10);
  const TOTAL = finalItems.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || isHovered || TOTAL === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, TOTAL]);

  // Navigation handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TOTAL);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleScrollDown = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  // Helper to calculate circular offset from activeIndex
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    const half = Math.floor(TOTAL / 2);
    
    if (diff < -half) diff += TOTAL;
    else if (diff > half) diff -= TOTAL;
    
    return diff;
  };

  // Swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // swipe threshold in pixels
    
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (TOTAL === 0) return null;

  const activeCard = finalItems[activeIndex];

  return (
    <section 
      className="fan-carousel-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Carousel Stage ── */}
      <div
        className="fan-stage-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="fan-stage">
          {finalItems.map((item, index) => {
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);
            
            // Only render visual range (-2 to 2) for clean rendering tree and transitions
            if (absOffset > 2) return null;

            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;
            const isFarPrev = offset === -2;
            const isFarNext = offset === 2;

            let cardClass = "carousel-slide-card";
            if (isActive) cardClass += " card-active";
            else if (isPrev) cardClass += " card-prev";
            else if (isNext) cardClass += " card-next";
            else if (isFarPrev) cardClass += " card-far-prev";
            else if (isFarNext) cardClass += " card-far-next";

            return (
              <div
                key={`${item.id}-${index}`}
                className={cardClass}
                onClick={() => {
                  if (isPrev) handlePrev();
                  if (isNext) handleNext();
                }}
              >
                <div className="card-image-wrapper">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 180px, 300px"
                    style={{ objectFit: "cover" }}
                    priority={isActive}
                  />
                  {/* Subtle highlight overlay */}
                  <div className="card-glass-glow" />
                </div>
                
                {/* Active Card Text Overlay (Ryan Baser style) */}
                {isActive && (
                  <div className="active-card-overlay">
                    <h3 className="card-title-text">{item.name}</h3>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Center Column: Left-aligned Active Card Description ── */}
      <div className="active-card-details">
        <div key={activeIndex} className="description-fade-in">
          <p className="active-card-desc">
            {activeCard?.description || "Experience our premium, beautifully designed, and highly interactive digital invitation templates. Perfect for weddings, birthdays, and special corporate events."}
          </p>
          <div className="active-card-meta">
            <span className="meta-badge-accent">{activeCard?.style}</span>
            <span className="meta-divider">•</span>
            <span className="meta-price">{activeCard?.displayPrice || `₹${activeCard?.price}`}</span>
          </div>
        </div>
      </div>

      {/* ── Centered Controls Wrapper ── */}
      <div className="carousel-controls-wrapper">
        <button onClick={handlePrev} className="control-arrow-btn" aria-label="Previous template">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>

        <button onClick={togglePlay} className="control-play-pause" aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}>
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        <button onClick={handleNext} className="control-arrow-btn" aria-label="Next template">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* ── Desktop Floating Down Arrow Indicator ── */}
      
    </section>
  );
}
